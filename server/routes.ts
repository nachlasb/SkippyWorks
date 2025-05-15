import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate request body against the schema
      const contactData = insertContactSchema.parse(req.body);
      
      // Store the contact in the database
      const contact = await storage.createContact(contactData);
      
      // Return success response
      res.status(201).json({
        success: true,
        message: "Contact form submitted successfully",
        contact: {
          id: contact.id,
          name: contact.name,
          email: contact.email
        }
      });
    } catch (error) {
      if (error instanceof ZodError) {
        // If validation fails, return a 400 with readable validation errors
        const validationError = fromZodError(error);
        res.status(400).json({
          success: false,
          message: "Validation failed",
          errors: validationError.message
        });
      } else {
        // For any other errors, return a 500
        console.error("Error processing contact form:", error);
        res.status(500).json({
          success: false,
          message: "An error occurred while processing your request"
        });
      }
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
