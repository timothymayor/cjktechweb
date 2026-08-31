import { TechCategory } from '../types';

export const techEcosystem: TechCategory[] = [
  {
    name: "AI Foundation Models",
    description: "State-of-the-art frontier reasoning and multimodal AI models tailored to enterprise requirements.",
    icon: "Brain",
    items: [
      "OpenAI (GPT-4o & o1)",
      "Anthropic (Claude 3.5 Sonnet)",
      "Google Gemini (2.5 Pro & Flash)",
      "Open-source LLMs (Llama 3, DeepSeek, Mistral)"
    ]
  },
  {
    name: "AI Engineering & Agents",
    description: "Robust agent orchestration frameworks, vector retrieval pipelines, and cognitive architectures.",
    icon: "Layers",
    items: [
      "LangGraph & Multi-Agent Frameworks",
      "LangChain & LlamaIndex",
      "Enterprise RAG & Hybrid Search",
      "Vector Databases (Pinecone, Qdrant, pgvector)",
      "Autonomous Tool Execution & Guardrails"
    ]
  },
  {
    name: "Workflow Automation",
    description: "Resilient orchestration engines connecting disparate software stacks and APIs seamlessly.",
    icon: "GitFork",
    items: [
      "n8n Self-Hosted & Cloud Orchestration",
      "Make.com Enterprise Automation",
      "Zapier Central & Webhook Connectors",
      "Custom Microservices (FastAPI & Node.js)",
      "Event-Driven Queues (Redis & Kafka)"
    ]
  },
  {
    name: "Business & Commerce Systems",
    description: "Deep, secure integration with mission-critical CRM, ERP, and commerce databases.",
    icon: "Building2",
    items: [
      "Salesforce & Service Cloud",
      "HubSpot CRM & Marketing Hub",
      "Shopify Plus & WooCommerce",
      "Microsoft Dynamics 365",
      "Custom ERP / SQL Databases & REST APIs"
    ]
  },
  {
    name: "Omnichannel Communication",
    description: "Real-time conversational endpoints meeting customers across their preferred platforms.",
    icon: "MessageCircle",
    items: [
      "WhatsApp Business Cloud API",
      "Twilio SMS, Voice & WhatsApp",
      "Transactional Email APIs (Resend, SendGrid)",
      "Interactive Embedded Web Chat & SDKs"
    ]
  }
];
