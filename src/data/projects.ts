import { CaseStudy } from '../types';

export const caseStudies: CaseStudy[] = [
  {
    id: "project-01",
    title: "AI Customer Support Agent",
    industry: "Retail & Omnichannel Goods",
    challenge: "Large volume of repetitive customer inquiries regarding orders, stock availability, and returns during peak trading periods resulting in severe response backlogs.",
    solution: "AI support agent integrated with enterprise knowledge base, ERP order database, and multi-tier human escalation workflow.",
    outcome: "Faster customer response times, 68% first-contact automated resolution, and significant reduction in repetitive support workload.",
    clientProfile: "Mid-Market Retailer (Multi-location & High Volume E-commerce)",
    existingProcess: "Manual support ticketing queues with 8–14 hour response delays and high seasonal contractor overhead.",
    aiStrategy: "Semantic RAG architecture with live ERP webhook grounding to fetch order status, issue refund tickets, and intelligently escalate complex inquiries.",
    architectureSteps: [
      "Customer Inbound (Web / Chat)",
      "AI Semantic Classifier Agent",
      "Enterprise Knowledge & Policy Layer",
      "Order Database & ERP Sync",
      "Automated Action / Ticket Routing",
      "Telemetry & Analytics Loop"
    ],
    techStack: ["Next.js", "FastAPI", "PostgreSQL", "Redis", "LangGraph", "OpenAI / Claude APIs", "Zendesk API", "Shopify API"],
    businessOutcomes: [
      "Average first-response time dropped from 8 hours to under 4 seconds",
      "68% of standard Tier 1 support inquiries resolved autonomously",
      "Customer satisfaction score (CSAT) improved from 3.6 to 4.7 / 5.0",
      "Support team pivoted from repetitive tasks to high-value VIP relationship management"
    ],
    isPlaceholder: true
  },
  {
    id: "project-02",
    title: "WhatsApp AI Commerce Agent",
    industry: "E-commerce & Direct-to-Consumer",
    challenge: "Customers struggled to discover specialized products and complete checkout journeys on mobile web, abandoning carts at high rates.",
    solution: "Conversational WhatsApp commerce assistant supporting natural language product discovery, instant catalog sharing, and direct payment links.",
    outcome: "Higher mobile checkout completion, frictionless customer interaction, and round-the-clock conversational sales capability.",
    clientProfile: "Fast-Growing DTC Lifestyle & Apparel Brand",
    existingProcess: "Static mobile storefront with manual WhatsApp business number managed by 2 overwhelmed customer reps during office hours only.",
    aiStrategy: "Direct WhatsApp Cloud API integration with vectorized product catalogs and instant payment gateway tokenization.",
    architectureSteps: [
      "Customer WhatsApp Message",
      "Conversational Discovery Agent",
      "Vector Product Search & Inventory",
      "Payment Gateway Link Generator",
      "Order Confirmation & CRM Sync",
      "Post-Purchase Analytics"
    ],
    techStack: ["Node.js", "TypeScript", "WhatsApp Cloud API", "Qdrant Vector DB", "Stripe API", "Paystack", "WooCommerce", "Redis"],
    businessOutcomes: [
      "Conversion rate increased by 2.4x compared to traditional mobile web checkout",
      "35% of all daily sales completed directly via conversational WhatsApp links",
      "Zero dropped inquiries during evening and weekend marketing campaigns",
      "100% automated abandoned cart WhatsApp recovery with personalized item reminders"
    ],
    isPlaceholder: true
  },
  {
    id: "project-03",
    title: "AI Sales Qualification Agent",
    industry: "Real Estate & Property Development",
    challenge: "High volume of raw ad inquiries with low qualification quality, wasting commercial sales agents' time on unverified buyers.",
    solution: "Autonomous AI agent that captures, qualifies, verifies budgets, and routes prospective luxury buyers to senior agents.",
    outcome: "Tripled qualified demo bookings, 24/7 instant lead engagement, and automated CRM pipeline synchronization.",
    clientProfile: "Premier Commercial & Residential Real Estate Firm",
    existingProcess: "Web form submission followed by manual cold-calling 24-48 hours later, resulting in a 60% lead contact drop-off.",
    aiStrategy: "Instant conversational outreach via web, SMS, and WhatsApp with structured qualification rubrics (timeline, budget, financing, criteria).",
    architectureSteps: [
      "Lead Ad / Landing Form Inbound",
      "Instant Qualification Dialogue Agent",
      "Lead Scoring & Verification Matrix",
      "CRM Deal Creation (HubSpot/Salesforce)",
      "Automated Calendar Meeting Booking",
      "Sales Rep Briefing Dossier Delivery"
    ],
    techStack: ["Python", "FastAPI", "LangChain", "HubSpot CRM API", "Calendly API", "Twilio SMS", "PostgreSQL"],
    businessOutcomes: [
      "Response time reduced to less than 45 seconds from lead ad submission",
      "40% increase in qualified consultation meetings attended by prospective buyers",
      "Sales agents saved an estimated 15+ hours weekly per agent on unqualified outreach",
      "Automated buyer preference profile synced directly to sales rep CRM dashboard"
    ],
    isPlaceholder: true
  },
  {
    id: "project-04",
    title: "AI Marketing Automation Platform",
    industry: "Consumer Services & Subscription Platforms",
    challenge: "Manual copywriting and rigid email drip rules led to fatigue, decreasing click rates, and high customer churn.",
    solution: "AI-powered customer segmentation, personalization, and multi-variant campaign generation engine tailored to behavioral affinity.",
    outcome: "Higher customer lifetime value, automated predictive re-engagement, and rapid campaign iteration velocity.",
    clientProfile: "Multi-Service Digital Subscription Platform",
    existingProcess: "Single generic monthly email newsletter drafted manually with static demographic segmentation.",
    aiStrategy: "Behavioral event telemetry linked with LLM agent copywriters to synthesize individualized lifecycle messaging for thousands of customer cohorts.",
    architectureSteps: [
      "User Behavior & Telemetry Events",
      "Predictive Churn & Affinity Model",
      "AI Content Generator & Reviewer Agent",
      "Multi-Channel Dispatch Engine",
      "Email & Push Delivery APIs",
      "Attribution & Revenue Analytics"
    ],
    techStack: ["Next.js", "Python", "Klaviyo API", "Segment CDP", "PostgreSQL", "Google Gemini API", "FastAPI"],
    businessOutcomes: [
      "Email click-through rates increased by 42% via personalized recommendations",
      "Churn risk proactive interventions reduced subscription cancellation by 18%",
      "Marketing team reduced campaign drafting time from 5 days to 2 hours",
      "Autonomous A/B copy generation testing hundreds of subject line variants in real time"
    ],
    isPlaceholder: true
  },
  {
    id: "project-05",
    title: "AI Business Workflow Automation",
    industry: "Professional Services & Legal / Finance",
    challenge: "Highly manual document processing, contract reviews, invoice validation, and multi-department approval chains creating operational friction.",
    solution: "Automated document processing, metadata extraction, approval routing, and internal ERP/accounting synchronization.",
    outcome: "Reduced invoice and contract processing cycle from days to minutes with complete compliance audit trails.",
    clientProfile: "International Corporate Advisory & Financial Consultancy",
    existingProcess: "Physical and PDF scanning, manual keying into accounting software, and email-based approval chasing.",
    aiStrategy: "Multi-modal OCR vision models extracting structured tables and contractual clauses with human-in-the-loop exception approval queues.",
    architectureSteps: [
      "Document Ingestion (PDF / Email / Portal)",
      "Vision OCR & Document Parser Agent",
      "Entity & Financial Table Extraction",
      "Business Logic & Compliance Check",
      "ERP General Ledger Insertion",
      "Executive Audit & Approval Trail"
    ],
    techStack: ["Next.js", "n8n Orchestration", "Python Vision-LLM", "PostgreSQL", "DocuSign API", "QuickBooks / SAP APIs"],
    businessOutcomes: [
      "Processing time per document slashed by 90% (from 45 minutes to 30 seconds)",
      "Near-zero manual data entry errors across thousands of monthly invoices",
      "Real-time visibility into internal approvals and supplier payments",
      "Direct estimated operational savings of over $120,000 annually"
    ],
    isPlaceholder: true
  },
  {
    id: "project-06",
    title: "Agentic Commerce Integration",
    industry: "Retail & Specialized B2B Supply",
    challenge: "Complex product catalog with thousands of technical SKUs made self-serve ordering difficult for contractors and commercial buyers.",
    solution: "AI shopping assistant connected to real-time catalog, inventory, compatibility database, and customer pricing tiers.",
    outcome: "Seamless technical part discovery, dynamic quote generation, and increased average order size for enterprise customers.",
    clientProfile: "Enterprise Wholesale & Industrial Supply Distributor",
    existingProcess: "Sales reps responding to PDF spec requests via phone and email with lengthy back-and-forth price negotiations.",
    aiStrategy: "Domain-specific semantic search agent with schema-grounded SKU matching, volume tier discounts, and instant quote generation.",
    architectureSteps: [
      "Buyer Technical Query / Part Number",
      "Agentic Compatibility & Spec Matcher",
      "Enterprise Inventory & Tier Pricing",
      "Interactive Cart & Quote Assembly",
      "ERP Checkout & Credit Term Sync",
      "Reorder Intelligence Tracker"
    ],
    techStack: ["Next.js", "FastAPI", "Pinecone Vector DB", "Shopify Plus", "SAP ERP API", "Redis", "TypeScript"],
    businessOutcomes: [
      "Commercial buyers self-served 54% of complex technical SKU inquiries",
      "Average order value (AOV) increased by 28% through verified compatibility cross-sells",
      "Instant commercial quote generation reduced buyer turnaround from 48 hours to seconds",
      "24/7 ordering accessibility across web and corporate procurement portals"
    ],
    isPlaceholder: true
  }
];
