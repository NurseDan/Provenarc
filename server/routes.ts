import type { Express, Request, Response, NextFunction } from "express";
import { type Server } from "http";
import { storage } from "./storage";
import { insertQuoteRequestSchema, insertContactInquirySchema, insertBlogPostSchema, loginSchema } from "@shared/schema";
import bcrypt from "bcrypt";
import { rateLimit } from "./rateLimit";
import { sendQuoteRequestNotification, sendContactNotification, sendPasswordResetEmail } from "./email";

declare module "express-session" {
  interface SessionData {
    userId?: string;
    role?: string;
  }
}

function requireAuth(req: Request, res: Response, next: NextFunction) {
  if (!req.session.userId) {
    return res.status(401).json({ message: "Authentication required" });
  }
  next();
}

function requireRole(role: string) {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!req.session.userId) {
      return res.status(401).json({ message: "Authentication required" });
    }
    if (req.session.role !== role) {
      return res.status(403).json({ message: "Access denied" });
    }
    next();
  };
}

const loginLimiter = rateLimit(5, 15 * 60 * 1000);       // 5 per 15 min per IP
const formLimiter = rateLimit(10, 60 * 60 * 1000);        // 10 per hour per IP
const passwordResetLimiter = rateLimit(3, 60 * 60 * 1000); // 3 per hour per IP

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {

  // ── Health check ──────────────────────────────────────────────────────────
  app.get("/health", (_req, res) => {
    res.json({ status: "ok", timestamp: new Date().toISOString() });
  });

  // ── robots.txt ────────────────────────────────────────────────────────────
  app.get("/robots.txt", (_req, res) => {
    res.type("text/plain");
    res.send(
      `User-agent: *\nAllow: /\nDisallow: /admin/\nDisallow: /broker/\nDisallow: /mro/\nDisallow: /api/\nSitemap: ${process.env.SITE_URL || "https://provenarc.com"}/sitemap.xml`
    );
  });

  // ── sitemap.xml ───────────────────────────────────────────────────────────
  app.get("/sitemap.xml", async (_req, res) => {
    const base = process.env.SITE_URL || "https://provenarc.com";
    const staticRoutes = [
      "", "/aero", "/marine",
      "/services", "/aero/services", "/marine/services",
      "/how-it-works", "/aero/how-it-works",
      "/why-provenarc", "/aero/why-provenarc",
      "/about", "/partners", "/aero/partners", "/marine/partners",
      "/marine/why-us", "/marine/process",
      "/faq", "/contact", "/insights", "/privacy", "/terms",
    ];

    let posts: { slug: string; publishedAt: Date | null; updatedAt: Date }[] = [];
    try {
      posts = await storage.getPublishedBlogPosts();
    } catch { /* non-fatal */ }

    const urls = [
      ...staticRoutes.map((path) => `
  <url>
    <loc>${base}${path}</loc>
    <changefreq>${path === "" ? "weekly" : "monthly"}</changefreq>
    <priority>${path === "" ? "1.0" : "0.8"}</priority>
  </url>`),
      ...posts.map((p) => `
  <url>
    <loc>${base}/insights/${p.slug}</loc>
    <lastmod>${(p.publishedAt ?? p.updatedAt).toISOString().split("T")[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>`),
    ];

    res.type("application/xml");
    res.send(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls.join("")}\n</urlset>`);
  });

  // ── Auth ──────────────────────────────────────────────────────────────────
  app.post("/api/auth/login", loginLimiter, async (req, res) => {
    try {
      const { username, password } = loginSchema.parse(req.body);
      const user = await storage.getUserByUsername(username);
      if (!user) {
        return res.status(401).json({ message: "Invalid credentials" });
      }
      const valid = await bcrypt.compare(password, user.password);
      if (!valid) {
        return res.status(401).json({ message: "Invalid credentials" });
      }
      req.session.userId = user.id;
      req.session.role = user.role;
      res.json({
        id: user.id,
        username: user.username,
        role: user.role,
        companyName: user.companyName,
        contactName: user.contactName,
      });
    } catch (error: any) {
      res.status(400).json({ message: error.message || "Invalid request" });
    }
  });

  app.post("/api/auth/logout", (req, res) => {
    req.session.destroy((err) => {
      if (err) {
        return res.status(500).json({ message: "Failed to logout" });
      }
      res.clearCookie("connect.sid");
      res.json({ message: "Logged out" });
    });
  });

  app.get("/api/auth/me", async (req, res) => {
    if (!req.session.userId) {
      return res.status(401).json({ message: "Not authenticated" });
    }
    const user = await storage.getUser(req.session.userId);
    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }
    res.json({
      id: user.id,
      username: user.username,
      role: user.role,
      companyName: user.companyName,
      contactName: user.contactName,
      email: user.email,
    });
  });

  // ── Password reset ────────────────────────────────────────────────────────
  app.post("/api/auth/forgot-password", passwordResetLimiter, async (req, res) => {
    try {
      const { email } = req.body;
      if (!email || typeof email !== "string") {
        return res.status(400).json({ message: "Email is required" });
      }
      // Always respond 200 to avoid email enumeration
      const user = await storage.getUserByEmail(email.toLowerCase().trim());
      if (user) {
        const token = await storage.createPasswordResetToken(user.id);
        await sendPasswordResetEmail(email, user.contactName || user.username, token);
      }
      res.json({ message: "If that email is on file, a reset link has been sent." });
    } catch (error: any) {
      res.status(500).json({ message: "Failed to process request" });
    }
  });

  app.post("/api/auth/reset-password", async (req, res) => {
    try {
      const { token, password } = req.body;
      if (!token || !password || password.length < 8) {
        return res.status(400).json({ message: "Token and a password of at least 8 characters are required" });
      }
      const record = await storage.getPasswordResetToken(token);
      if (!record || record.usedAt || record.expiresAt < new Date()) {
        return res.status(400).json({ message: "This reset link is invalid or has expired" });
      }
      const hashed = await bcrypt.hash(password, 12);
      await storage.updateUserPassword(record.userId, hashed);
      await storage.markTokenUsed(token);
      res.json({ message: "Password updated successfully" });
    } catch (error: any) {
      res.status(500).json({ message: "Failed to reset password" });
    }
  });

  // ── Dashboards ────────────────────────────────────────────────────────────
  app.get("/api/auth/dashboard", requireAuth, async (req, res) => {
    const user = await storage.getUser(req.session.userId!);
    if (!user) return res.status(401).json({ message: "User not found" });

    const userQuotes = await storage.getQuoteRequestsByUser(user.id);
    res.json({
      user: {
        id: user.id,
        username: user.username,
        role: user.role,
        companyName: user.companyName,
        contactName: user.contactName,
        email: user.email,
      },
      stats: {
        activeProjects: userQuotes.filter((q) => q.status === "active").length,
        completedProjects: userQuotes.filter((q) => q.status === "completed").length,
        pendingQuotes: userQuotes.filter((q) => q.status === "new").length,
        totalRevenue: "$0",
      },
    });
  });

  app.get("/api/broker/dashboard", requireRole("broker"), async (req, res) => {
    const user = await storage.getUser(req.session.userId!);
    if (!user) return res.status(401).json({ message: "User not found" });

    const referrals = await storage.getQuoteRequestsByUser(user.id);
    res.json({
      user: {
        id: user.id,
        username: user.username,
        role: user.role,
        companyName: user.companyName,
        contactName: user.contactName,
        email: user.email,
      },
      stats: {
        totalReferrals: referrals.length,
        activeReferrals: referrals.filter((q) => q.status === "active").length,
        completedReferrals: referrals.filter((q) => q.status === "completed").length,
        pendingCommission: "$0",
        totalCommission: "$0",
      },
      recentReferrals: referrals.slice(0, 10).map((q) => ({
        id: q.id,
        name: q.name,
        company: q.company,
        division: q.division,
        serviceTier: q.serviceTier,
        status: q.status,
        createdAt: q.createdAt,
      })),
    });
  });

  app.get("/api/mro/dashboard", requireRole("mro"), async (req, res) => {
    const user = await storage.getUser(req.session.userId!);
    if (!user) return res.status(401).json({ message: "User not found" });

    const referrals = await storage.getQuoteRequestsByUser(user.id);
    res.json({
      user: {
        id: user.id,
        username: user.username,
        role: user.role,
        companyName: user.companyName,
        contactName: user.contactName,
        email: user.email,
      },
      stats: {
        scheduledServices: referrals.filter((q) => q.status === "active").length,
        completedServices: referrals.filter((q) => q.status === "completed").length,
        activePartnership: true,
        revenueShare: "$0",
        totalRevenue: "$0",
      },
      recentServices: referrals.slice(0, 10).map((q) => ({
        id: q.id,
        name: q.name,
        company: q.company,
        division: q.division,
        serviceTier: q.serviceTier,
        status: q.status,
        createdAt: q.createdAt,
      })),
    });
  });

  // ── Admin: all quote requests ─────────────────────────────────────────────
  app.get("/api/admin/quotes", requireRole("admin"), async (_req, res) => {
    try {
      const quotes = await storage.getAllQuoteRequests();
      res.json(quotes);
    } catch {
      res.status(500).json({ message: "Failed to fetch quotes" });
    }
  });

  // ── Quote requests ────────────────────────────────────────────────────────
  app.post("/api/quote-requests", formLimiter, async (req, res) => {
    try {
      const data = insertQuoteRequestSchema.parse(req.body);
      const submittedBy = req.session.userId ?? undefined;
      const request = await storage.createQuoteRequest({ ...data, submittedBy });
      // Fire-and-forget email notifications
      sendQuoteRequestNotification(data).catch(() => {});
      res.status(201).json(request);
    } catch (error: any) {
      res.status(400).json({ message: error.message || "Invalid request data" });
    }
  });

  // ── Contact ───────────────────────────────────────────────────────────────
  app.post("/api/contact", formLimiter, async (req, res) => {
    try {
      const data = insertContactInquirySchema.parse(req.body);
      const inquiry = await storage.createContactInquiry(data);
      sendContactNotification(data).catch(() => {});
      res.status(201).json(inquiry);
    } catch (error: any) {
      res.status(400).json({ message: error.message || "Invalid request data" });
    }
  });

  // ── Blog (public) ─────────────────────────────────────────────────────────
  app.get("/api/blog", async (_req, res) => {
    try {
      const posts = await storage.getPublishedBlogPosts();
      res.json(posts);
    } catch {
      res.status(500).json({ message: "Failed to fetch posts" });
    }
  });

  app.get("/api/blog/:slug", async (req, res) => {
    try {
      const post = await storage.getBlogPostBySlug(req.params.slug);
      if (!post) return res.status(404).json({ message: "Post not found" });
      res.json(post);
    } catch {
      res.status(500).json({ message: "Failed to fetch post" });
    }
  });

  // ── Blog (admin) ──────────────────────────────────────────────────────────
  app.get("/api/admin/blog", requireRole("admin"), async (_req, res) => {
    try {
      const posts = await storage.getAllBlogPosts();
      res.json(posts);
    } catch {
      res.status(500).json({ message: "Failed to fetch posts" });
    }
  });

  app.post("/api/blog", requireRole("admin"), async (req, res) => {
    try {
      const data = insertBlogPostSchema.parse(req.body);
      const post = await storage.createBlogPost(data);
      res.status(201).json(post);
    } catch (error: any) {
      res.status(400).json({ message: error.message || "Invalid post data" });
    }
  });

  app.patch("/api/blog/:id", requireRole("admin"), async (req, res) => {
    try {
      const id = String(req.params.id);
      const post = await storage.updateBlogPost(id, req.body);
      if (!post) return res.status(404).json({ message: "Post not found" });
      res.json(post);
    } catch (error: any) {
      res.status(400).json({ message: error.message || "Invalid update data" });
    }
  });

  app.delete("/api/blog/:id", requireRole("admin"), async (req, res) => {
    try {
      const id = String(req.params.id);
      const deleted = await storage.deleteBlogPost(id);
      if (!deleted) return res.status(404).json({ message: "Post not found" });
      res.json({ message: "Post deleted" });
    } catch {
      res.status(500).json({ message: "Failed to delete post" });
    }
  });

  return httpServer;
}
