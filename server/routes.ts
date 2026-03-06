import type { Express, Request, Response, NextFunction } from "express";
import { type Server } from "http";
import { storage } from "./storage";
import { insertQuoteRequestSchema, insertContactInquirySchema, insertBlogPostSchema, loginSchema } from "@shared/schema";
import bcrypt from "bcrypt";

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

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.post("/api/auth/login", async (req, res) => {
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

  app.get("/api/auth/dashboard", requireAuth, async (req, res) => {
    const user = await storage.getUser(req.session.userId!);
    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }
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
        activeProjects: 0,
        completedProjects: 0,
        pendingQuotes: 0,
        totalRevenue: "$0",
      },
    });
  });

  app.get("/api/broker/dashboard", requireRole("broker"), async (req, res) => {
    const user = await storage.getUser(req.session.userId!);
    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }
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
        totalReferrals: 0,
        activeReferrals: 0,
        completedReferrals: 0,
        pendingCommission: "$0",
        totalCommission: "$0",
      },
    });
  });

  app.get("/api/mro/dashboard", requireRole("mro"), async (req, res) => {
    const user = await storage.getUser(req.session.userId!);
    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }
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
        scheduledServices: 0,
        completedServices: 0,
        activePartnership: true,
        revenueShare: "$0",
        totalRevenue: "$0",
      },
    });
  });

  app.post("/api/quote-requests", async (req, res) => {
    try {
      const data = insertQuoteRequestSchema.parse(req.body);
      const request = await storage.createQuoteRequest(data);
      res.status(201).json(request);
    } catch (error: any) {
      res.status(400).json({ message: error.message || "Invalid request data" });
    }
  });

  app.post("/api/contact", async (req, res) => {
    try {
      const data = insertContactInquirySchema.parse(req.body);
      const inquiry = await storage.createContactInquiry(data);
      res.status(201).json(inquiry);
    } catch (error: any) {
      res.status(400).json({ message: error.message || "Invalid request data" });
    }
  });

  app.get("/api/blog", async (_req, res) => {
    try {
      const posts = await storage.getPublishedBlogPosts();
      res.json(posts);
    } catch (error: any) {
      res.status(500).json({ message: "Failed to fetch posts" });
    }
  });

  app.get("/api/blog/:slug", async (req, res) => {
    try {
      const post = await storage.getBlogPostBySlug(req.params.slug);
      if (!post) {
        return res.status(404).json({ message: "Post not found" });
      }
      res.json(post);
    } catch (error: any) {
      res.status(500).json({ message: "Failed to fetch post" });
    }
  });

  app.get("/api/admin/blog", requireRole("admin"), async (_req, res) => {
    try {
      const posts = await storage.getAllBlogPosts();
      res.json(posts);
    } catch (error: any) {
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
      const post = await storage.updateBlogPost(req.params.id as string, req.body);
      if (!post) {
        return res.status(404).json({ message: "Post not found" });
      }
      res.json(post);
    } catch (error: any) {
      res.status(400).json({ message: error.message || "Invalid update data" });
    }
  });

  app.delete("/api/blog/:id", requireRole("admin"), async (req, res) => {
    try {
      const deleted = await storage.deleteBlogPost(req.params.id as string);
      if (!deleted) {
        return res.status(404).json({ message: "Post not found" });
      }
      res.json({ message: "Post deleted" });
    } catch (error: any) {
      res.status(500).json({ message: "Failed to delete post" });
    }
  });

  return httpServer;
}
