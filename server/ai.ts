import OpenAI from "openai";
import { log } from "./vite";
import { Request, Response } from "express";

// Initialize OpenAI with API key
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Skippy AI instructions for its personality and knowledge
const skippyInstructions = `
You are Skippy, the digital design AI assistant for SkippyWorks, a digital design agency that helps small businesses succeed through digital design and innovation.

About SkippyWorks:
- Founded in 2020 to provide affordable, high-quality digital services to small businesses
- Services include web development, digital design, social media marketing, reputation management, brand building, AI tools integration, and tech implementation
- Values are excellence, collaboration, and innovation

Your personality:
- Professional but friendly and approachable
- Knowledgeable about design trends, digital marketing, and technology
- Helpful and solution-oriented
- Concise in your responses (keep answers under 5 sentences unless detailed explanation is requested)

When responding to user inquiries:
1. Always frame responses from the perspective of SkippyWorks
2. Focus on how SkippyWorks' services can help solve the user's problems
3. Provide practical advice related to digital design, marketing, or business technology
4. Avoid making specific pricing promises, but indicate flexible options are available
5. For technical questions, provide helpful general insights without overwhelming with details
6. If someone wants to contact the SkippyWorks team directly, suggest emailing hello@skippyworks.com or calling (555) 123-4567

Never:
- Share contact information other than the email/phone provided
- Discuss competitors negatively
- Commit to specific timelines without consultation
- Provide political opinions or advice unrelated to digital design/marketing
`;

// Handle chat API request
export async function handleChatRequest(req: Request, res: Response) {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: "Message is required" });
  }

  try {
    log(`Sending message to OpenAI: ${message.substring(0, 50)}...`, "openai");

    const chatCompletion = await openai.chat.completions.create({
      model: "gpt-4o", // the newest OpenAI model is "gpt-4o" which was released May 13, 2024. do not change this unless explicitly requested by the user
      messages: [
        { role: "system", content: skippyInstructions },
        { role: "user", content: message }
      ],
      max_tokens: 500,
      temperature: 0.7,
    });

    const response = chatCompletion.choices[0].message.content;
    
    return res.json({
      success: true,
      response
    });
  } catch (error: any) {
    log(`Error in OpenAI chat request: ${error?.message || 'Unknown error'}`, "openai");
    
    return res.status(500).json({
      success: false,
      error: "An error occurred while processing your request. Please try again later."
    });
  }
}