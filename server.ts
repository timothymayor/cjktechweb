import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Lazy-initialized Gemini AI Client
let aiClient: GoogleGenAI | null = null;
function getAIClient(): GoogleGenAI | null {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return null;
  }
  if (!aiClient) {
    aiClient = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
  }
  return aiClient;
}

const SYSTEM_INSTRUCTION = `You are the official 24/7 AI Support & Strategy Consultant for CJK Technologies (a division of CJKonsultants).
Your role is to assist visitors, enterprise leaders, founders, and IT directors looking to implement enterprise-grade AI Agents and Business Process Automation.

Company Profile:
- Name: CJK Technologies (a division of CJKonsultants)
- Tagline: Strategic AI Automation & Agentic Solutions for Modern Enterprises
- Core Specializations:
  1. AI Customer Service & Support Agents (Multilingual 24/7 resolution, Zendesk/Salesforce/HubSpot sync, sentiment routing)
  2. AI Sales & Lead Generation Bots (B2B lead qualification, automated booking, calendar sync, WhatsApp/Email prospecting)
  3. Workflow & Business Process Automation (Custom Python, n8n, LangChain, Make.com orchestration, ERP/Legacy integration)
  4. AI Marketing Automation & Campaign Management (Predictive ad copy, automated multi-channel scheduling, performance analytics)
  5. WhatsApp & Social Media Chatbots (Official Meta Cloud API, instant checkout, customer support)
  6. Intelligent Email Marketing Automation (Smart inbox triaging, contextual drafts, behavioral follow-ups)
  7. AI E-commerce & Smart Inventory Agents (Real-time demand forecasting, dynamic pricing, cart recovery)
  8. Generative Engine Optimization (GEO) (Visibility in ChatGPT Search, Perplexity AI, Google Gemini Overviews, Copilot)
- Global Delivery: Innovation Hubs in Lagos & London.
- Contact Email: cjkonsultants.nigeria@gmail.com
- Phone / WhatsApp: +234 800 242 8866
- Implementation Timelines: 2 to 6 weeks for standard agents; custom enterprise pipelines scoped during discovery.
- Pricing/Budgets: Projects typically range from $5,000 to $50,000+ depending on scope, SLA, and enterprise integration needs.

Behavior & Tone:
- Authoritative, concise, executive-level, yet warm and consultative.
- Keep answers focused (2-4 short paragraphs or bullet points).
- If visitors ask how to get started, recommend taking the "AI Readiness Assessment" on this website or submitting the project scope via the Contact / Consultation form.
- Provide direct, actionable insights without unnecessary fluff.`;

// API routes
app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

app.post("/api/chat", async (req, res) => {
  try {
    const { message, history } = req.body;

    if (!message || typeof message !== "string") {
      res.status(400).json({ error: "Message string is required" });
      return;
    }

    const ai = getAIClient();

    if (!ai) {
      // Graceful fallback response when API key is not configured in local environment
      const fallbackResponse = generateLocalConsultantResponse(message);
      res.json({ text: fallbackResponse });
      return;
    }

    // Format conversation history for Gemini
    const contents: any[] = [];

    if (Array.isArray(history) && history.length > 0) {
      for (const h of history.slice(-6)) {
        if (h.role === "user" || h.role === "model") {
          contents.push({
            role: h.role,
            parts: [{ text: h.text }],
          });
        }
      }
    }

    contents.push({
      role: "user",
      parts: [{ text: message }],
    });

    const response = await ai.models.generateContent({
      model: "gemini-3.8-flash",
      contents,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
        topP: 0.95,
      },
    });

    const outputText = response.text || "Thank you for reaching out to CJK Technologies. How may I assist with your AI automation strategy today?";
    res.json({ text: outputText });
  } catch (error: any) {
    console.error("Gemini Chat API Error:", error);
    // Return friendly fallback rather than 500 error for smooth user experience
    const fallbackText = generateLocalConsultantResponse(req.body?.message || "");
    res.json({ text: fallbackText });
  }
});

function generateLocalConsultantResponse(query: string): string {
  const q = query.toLowerCase();

  if (q.includes("price") || q.includes("cost") || q.includes("budget") || q.includes("rate")) {
    return "Our custom AI automation projects typically range from **$5,000 to $50,000+**, depending on workflow complexity, CRM integrations, and support SLAs. \n\nWe offer a complimentary **Discovery Call & AI Readiness Diagnostic** to map your specific ROI. Would you like to schedule a strategy session via our Contact section?";
  }

  if (q.includes("geo") || q.includes("generative engine") || q.includes("perplexity") || q.includes("chatgpt search")) {
    return "Our **Generative Engine Optimization (GEO)** service ensures your brand is prominently cited and recommended inside AI search models like **ChatGPT Search, Perplexity AI, Google Gemini Overviews, and Microsoft Copilot**.\n\nWe audit your digital knowledge footprint, optimize structured entity data, and build authoritative reference pipelines.";
  }

  if (q.includes("whatsapp") || q.includes("chat") || q.includes("support") || q.includes("customer service")) {
    return "We build enterprise-grade **24/7 AI Customer Support & WhatsApp Agents** powered by the official Meta Cloud API and leading LLMs. \n\nThey connect directly to your Zendesk, Salesforce, HubSpot, or custom databases to resolve up to 80% of inquiries instantly in over 95 languages.";
  }

  if (q.includes("workflow") || q.includes("process") || q.includes("n8n") || q.includes("make") || q.includes("python")) {
    return "Our **Business Process Automation** team designs autonomous agentic workflows using Python, n8n, LangChain, and Make.com to eliminate repetitive back-office tasks, invoice processing, document extraction, and cross-platform data syncing.";
  }

  if (q.includes("contact") || q.includes("email") || q.includes("phone") || q.includes("book") || q.includes("consult")) {
    return "You can reach our senior AI consultants directly at **cjkonsultants.nigeria@gmail.com** or WhatsApp **+234 800 242 8866**.\n\nYou can also submit the consultation form right below in our Contact section!";
  }

  return "Welcome to **CJK Technologies**! We specialize in designing and deploying enterprise AI agents, automated workflows (n8n/Python), WhatsApp commerce bots, and Generative Engine Optimization (GEO).\n\nHow can we help automate and accelerate your business operations today?";
}

async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`CJK Technologies Server running on http://localhost:${PORT}`);
  });
}

startServer();
