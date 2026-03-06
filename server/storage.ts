import {
  users, quoteRequests, contactInquiries, blogPosts, passwordResetTokens,
  type User, type InsertUser,
  type QuoteRequest, type InsertQuoteRequest,
  type ContactInquiry, type InsertContactInquiry,
  type BlogPost, type InsertBlogPost,
  type PasswordResetToken,
} from "@shared/schema";
import { db } from "./db";
import { eq, desc, and, count } from "drizzle-orm";
import crypto from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  getUserByEmail(email: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createQuoteRequest(data: InsertQuoteRequest): Promise<QuoteRequest>;
  createContactInquiry(data: InsertContactInquiry): Promise<ContactInquiry>;
  getQuoteRequestsByEmail(email: string): Promise<QuoteRequest[]>;
  getQuoteRequestsByUser(userId: string): Promise<QuoteRequest[]>;
  getAllQuoteRequests(): Promise<QuoteRequest[]>;
  getQuoteRequestsCount(): Promise<number>;
  createBlogPost(data: InsertBlogPost): Promise<BlogPost>;
  updateBlogPost(id: string, data: Partial<InsertBlogPost>): Promise<BlogPost | undefined>;
  getBlogPostBySlug(slug: string): Promise<BlogPost | undefined>;
  getPublishedBlogPosts(): Promise<BlogPost[]>;
  getAllBlogPosts(): Promise<BlogPost[]>;
  deleteBlogPost(id: string): Promise<boolean>;
  createPasswordResetToken(userId: string): Promise<string>;
  getPasswordResetToken(token: string): Promise<PasswordResetToken | undefined>;
  markTokenUsed(token: string): Promise<void>;
  updateUserPassword(userId: string, hashedPassword: string): Promise<void>;
}

export class DatabaseStorage implements IStorage {
  async getUser(id: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user || undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user || undefined;
  }

  async getUserByEmail(email: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.email, email));
    return user || undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db.insert(users).values(insertUser).returning();
    return user;
  }

  async createQuoteRequest(data: InsertQuoteRequest): Promise<QuoteRequest> {
    const [request] = await db.insert(quoteRequests).values(data).returning();
    return request;
  }

  async createContactInquiry(data: InsertContactInquiry): Promise<ContactInquiry> {
    const [inquiry] = await db.insert(contactInquiries).values(data).returning();
    return inquiry;
  }

  async getQuoteRequestsByEmail(email: string): Promise<QuoteRequest[]> {
    return db.select().from(quoteRequests).where(eq(quoteRequests.email, email)).orderBy(desc(quoteRequests.createdAt));
  }

  async getQuoteRequestsByUser(userId: string): Promise<QuoteRequest[]> {
    return db.select().from(quoteRequests).where(eq(quoteRequests.submittedBy, userId)).orderBy(desc(quoteRequests.createdAt));
  }

  async getAllQuoteRequests(): Promise<QuoteRequest[]> {
    return db.select().from(quoteRequests).orderBy(desc(quoteRequests.createdAt));
  }

  async getQuoteRequestsCount(): Promise<number> {
    const [result] = await db.select({ value: count() }).from(quoteRequests);
    return result?.value ?? 0;
  }

  async createBlogPost(data: InsertBlogPost): Promise<BlogPost> {
    const [post] = await db.insert(blogPosts).values(data).returning();
    return post;
  }

  async updateBlogPost(id: string, data: Partial<InsertBlogPost>): Promise<BlogPost | undefined> {
    const [post] = await db
      .update(blogPosts)
      .set({ ...data, updatedAt: new Date() })
      .where(eq(blogPosts.id, id))
      .returning();
    return post || undefined;
  }

  async getBlogPostBySlug(slug: string): Promise<BlogPost | undefined> {
    const [post] = await db
      .select()
      .from(blogPosts)
      .where(and(eq(blogPosts.slug, slug), eq(blogPosts.published, true)));
    return post || undefined;
  }

  async getPublishedBlogPosts(): Promise<BlogPost[]> {
    return db
      .select()
      .from(blogPosts)
      .where(eq(blogPosts.published, true))
      .orderBy(desc(blogPosts.publishedAt));
  }

  async getAllBlogPosts(): Promise<BlogPost[]> {
    return db
      .select()
      .from(blogPosts)
      .orderBy(desc(blogPosts.createdAt));
  }

  async deleteBlogPost(id: string): Promise<boolean> {
    const result = await db.delete(blogPosts).where(eq(blogPosts.id, id)).returning();
    return result.length > 0;
  }

  async createPasswordResetToken(userId: string): Promise<string> {
    const token = crypto.randomBytes(32).toString("hex");
    const expiresAt = new Date(Date.now() + 60 * 60 * 1000); // 1 hour
    await db.insert(passwordResetTokens).values({ userId, token, expiresAt });
    return token;
  }

  async getPasswordResetToken(token: string): Promise<PasswordResetToken | undefined> {
    const [record] = await db
      .select()
      .from(passwordResetTokens)
      .where(eq(passwordResetTokens.token, token));
    return record || undefined;
  }

  async markTokenUsed(token: string): Promise<void> {
    await db
      .update(passwordResetTokens)
      .set({ usedAt: new Date() })
      .where(eq(passwordResetTokens.token, token));
  }

  async updateUserPassword(userId: string, hashedPassword: string): Promise<void> {
    await db.update(users).set({ password: hashedPassword }).where(eq(users.id, userId));
  }
}

export const storage = new DatabaseStorage();
