import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertQuoteRequestSchema, insertContactInquirySchema } from "@shared/schema";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
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

  return httpServer;
}
