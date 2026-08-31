import { Solution } from '../types';

export const solutions: Solution[] = [
  {
    id: "customer-service",
    title: "AI Customer Service & Support Agents",
    shortDesc: "Intelligent conversational agents that provide 24/7 customer assistance across digital channels.",
    description: "Deploy production-grade conversational AI agents trained on your proprietary enterprise documentation, product catalogs, and policies to resolve Tier 1 and Tier 2 support inquiries instantly with zero hallucination.",
    iconName: "Headphones",
    badge: "24/7 Support",
    businessProblem: "High support volume, long customer wait times, escalating support staffing overheads, and inconsistent resolution quality across global time zones.",
    aiApproach: "Retrieval-Augmented Generation (RAG) coupled with intent classification models and human-in-the-loop guardrails to guarantee high precision, contextual empathy, and compliance.",
    capabilities: [
      "FAQ automation",
      "Order tracking",
      "Customer inquiries",
      "Ticket creation",
      "Knowledge-base search",
      "Escalation to human agents",
      "Sentiment-aware responses",
      "Omnichannel support"
    ],
    integrations: ["Zendesk", "Freshdesk", "Intercom", "Salesforce Service Cloud", "Shopify", "Custom Webhooks"],
    outcomes: [
      "Up to 70% automated resolution of repetitive support tickets",
      "Instant average response time reduced to under 3 seconds",
      "24/7 coverage without linear headcount expansion",
      "Seamless escalation with complete conversational context"
    ],
    exampleUseCases: [
      "E-commerce order status, returns, and exchanges management",
      "SaaS product onboarding and live troubleshooting guidance",
      "Financial services balance inquiries and branch routing"
    ]
  },
  {
    id: "sales-lead-gen",
    title: "AI Sales & Lead Generation Agents",
    shortDesc: "AI-powered sales assistants that identify prospects, qualify leads, answer questions and accelerate customer journeys.",
    description: "Equip your revenue operations with autonomous agents that engage high-intent visitors, assess BANT/MEDDPICC qualification parameters, answer nuanced technical questions, and book calendar appointments directly into your sales reps' schedules.",
    iconName: "TrendingUp",
    badge: "Revenue Growth",
    businessProblem: "Slow lead response times causing high drop-off rates, sales reps spending hours on unqualified leads, and missed opportunities outside business hours.",
    aiApproach: "Dynamic persona-driven dialogue engine backed by CRM enrichment integrations and lead scoring heuristics to guide prospects through tailored conversion funnels.",
    capabilities: [
      "Lead qualification",
      "Lead scoring",
      "Product recommendations",
      "Appointment booking",
      "Follow-up automation",
      "CRM updates",
      "Sales pipeline automation"
    ],
    integrations: ["HubSpot", "Salesforce", "Calendly", "Pipedrive", "Apollo.io", "Stripe"],
    outcomes: [
      "Sub-minute response to inbound high-value leads",
      "Higher discovery call show-up rates with autonomous SMS/email confirmations",
      "Pre-qualified opportunity data automatically synced to CRM records",
      "Continuous qualification 24 hours a day, 7 days a week"
    ],
    exampleUseCases: [
      "B2B software interactive qualification and demo scheduling",
      "Real estate buyer intake, budget verification, and viewing scheduling",
      "High-ticket professional services consultation routing"
    ]
  },
  {
    id: "whatsapp-business",
    title: "WhatsApp AI Business Agents",
    shortDesc: "Turn WhatsApp into an intelligent business channel for customer service, sales, commerce and support.",
    description: "Transform WhatsApp from a standard messaging app into an intelligent transaction hub. Power end-to-end catalog discovery, instant checkout links, customer verification, and conversational customer care with Meta Business API compliance.",
    iconName: "MessageSquare",
    badge: "Omnichannel",
    businessProblem: "Customers prefer WhatsApp over emails or web forms, but manual chat teams are expensive, slow to respond, and unable to manage peak conversation volumes.",
    aiApproach: "Official WhatsApp Cloud API middleware connecting AI semantic agents to backend inventory, ERP, and payment processing endpoints with automated session persistence.",
    capabilities: [
      "AI conversations",
      "Product discovery",
      "Order management",
      "Customer support",
      "Lead capture",
      "Notifications",
      "Payment workflows",
      "Human handoff"
    ],
    integrations: ["WhatsApp Cloud API", "Meta Business Manager", "Paystack", "Flutterwave", "Stripe", "WooCommerce"],
    outcomes: [
      "Over 90% open rates on transactional updates and re-engagement",
      "Direct in-chat order placement and payment confirmation",
      "Zero latency responses to customer inquiries on their preferred channel",
      "Flawless live agent handover when complex situations arise"
    ],
    exampleUseCases: [
      "Direct WhatsApp shopping catalogs with native interactive buttons",
      "Automated appointment booking and instant WhatsApp reminder pings",
      "Post-purchase order tracking and customer feedback collection"
    ]
  },
  {
    id: "marketing-automation",
    title: "AI Marketing Automation Platform",
    shortDesc: "Automate marketing operations using AI-powered content, segmentation, personalization and campaign intelligence.",
    description: "Leverage intelligent AI agents that orchestrate predictive customer segmentation, generate hyper-targeted multi-variant copy, and dynamically optimize campaign timing based on behavioral signals.",
    iconName: "Sparkles",
    badge: "Marketing Ops",
    businessProblem: "Generic batch-and-blast marketing campaigns yielding low engagement, slow manual copywriting cycles, and siloed audience data.",
    aiApproach: "Multi-agent content generators guided by continuous telemetry and behavioral affinity models to dynamically adapt messaging at an individualized customer tier.",
    capabilities: [
      "AI content generation",
      "Customer segmentation",
      "Campaign automation",
      "Personalization",
      "Lead nurturing",
      "Email automation",
      "Campaign analytics",
      "Recommendation engines"
    ],
    integrations: ["Klaviyo", "Customer.io", "ActiveCampaign", "Meta Ads API", "Google Ads API", "Segment"],
    outcomes: [
      "Accelerated campaign deployment velocity from weeks to hours",
      "Higher CTRs and conversions through real-time tailored content",
      "Dynamic lifecycle drip campaigns triggered by user intent signals",
      "Automated weekly marketing performance synthesis"
    ],
    exampleUseCases: [
      "Automated personalized e-commerce win-back sequences",
      "Dynamic B2B newsletter curation tailored to subscriber industry segment",
      "Multi-channel promotional rollout across email, push, and SMS"
    ]
  },
  {
    id: "workflow-automation",
    title: "AI Workflow & Business Process Automation",
    shortDesc: "Connect AI agents, business applications and operational workflows to reduce manual work.",
    description: "Bridge legacy systems, unstructured documents, and modern SaaS tools into cohesive, self-driving business operations. Automate invoice processing, contract reviews, and cross-departmental approval chains.",
    iconName: "Cpu",
    badge: "Process Ops",
    businessProblem: "Knowledge workers drowning in repetitive data entry, manual document verification, complex approval routing, and siloed spreadsheet maintenance.",
    aiApproach: "Vision-LLM OCR document processing pipelines with deterministic state machines and webhook orchestration to eliminate operational bottlenecks.",
    capabilities: [
      "Workflow automation",
      "Document processing",
      "Approval automation",
      "Data extraction",
      "Task orchestration",
      "Business rules",
      "API integrations",
      "Agentic workflows"
    ],
    integrations: ["n8n", "Make.com", "Zapier", "Microsoft Power Automate", "Google Workspace", "PostgreSQL"],
    outcomes: [
      "Near-instant document extraction with over 99% structured field accuracy",
      "Elimination of manual copy-paste across disparate software suites",
      "Automated compliance audit trails and exception logging",
      "Rapid ROI realized within weeks of workflow deployment"
    ],
    exampleUseCases: [
      "Automated PDF invoice data extraction and ERP general ledger entry",
      "Vendor onboarding verification and risk scorecard compilation",
      "Automated employee onboarding credential provisioning"
    ]
  },
  {
    id: "email-integrations",
    title: "AI Email Integrations",
    shortDesc: "Turn email into an intelligent business workflow rather than a passive communication channel.",
    description: "Transform corporate inboxes into autonomous action centers. Inbound emails are classified, critical metadata is extracted, suggested replies are drafted for review, and urgent tickets are routed immediately.",
    iconName: "Mail",
    badge: "Inbox Intel",
    businessProblem: "Overloaded team inboxes, slow response times to VIP client inquiries, lost RFPs, and hours spent drafting standard email replies.",
    aiApproach: "Real-time email webhook listeners powered by fine-tuned LLM classifiers, contextual memory search, and structured output parsers.",
    capabilities: [
      "Email classification",
      "AI response generation",
      "Inbox automation",
      "Lead extraction",
      "Ticket creation",
      "Email routing",
      "Summarization",
      "CRM synchronization"
    ],
    integrations: ["Google Workspace / Gmail API", "Microsoft 365 / Outlook", "SendGrid", "Resend", "HubSpot", "Zendesk"],
    outcomes: [
      "Zero unread inbox backlog with automated priority tagging",
      "Human-in-the-loop one-click review of high-fidelity drafted replies",
      "Direct conversion of incoming RFP emails into CRM deal pipelines",
      "Executive email digest and action-item briefings"
    ],
    exampleUseCases: [
      "Shared support email triage and automated response dispatch",
      "Inbound wholesale quote inquiry extraction and ERP quote generation",
      "Executive summary briefings of lengthy client correspondence threads"
    ]
  },
  {
    id: "agentic-commerce",
    title: "Agentic Commerce Integration",
    shortDesc: "Build AI-powered commerce experiences where intelligent agents help customers discover, evaluate and purchase products or services.",
    description: "Move beyond static product grids. Implement conversational shopping assistants that understand natural language customer intent, curate tailored product bundles, manage cart states, and close sales interactively.",
    iconName: "ShoppingCart",
    badge: "Next-Gen Commerce",
    businessProblem: "Overwhelming product catalogs causing analysis paralysis, abandoned carts, low search conversion rates, and high product return rates.",
    aiApproach: "Semantic vector search integrated with real-time inventory databases, customer preference graphs, and checkout API orchestration.",
    capabilities: [
      "AI shopping assistants",
      "Conversational commerce",
      "Product discovery",
      "Recommendations",
      "Cart management",
      "Order tracking",
      "Cross-selling",
      "Personalized commerce journeys"
    ],
    integrations: ["Shopify Plus", "WooCommerce", "BigCommerce", "Magento", "Stripe", "Klaviyo"],
    outcomes: [
      "Measurable lift in average order value (AOV) via smart contextual cross-sells",
      "Lower cart abandonment with conversational objection handling",
      "Reduced returns through guided fit and specification discovery",
      "Unified shopping memory across website and messaging channels"
    ],
    exampleUseCases: [
      "Interactive beauty, fashion, or hardware personalized product consultation",
      "B2B bulk order configuration and instant commercial quote generation",
      "Autonomous reordering agent for subscription consumable goods"
    ]
  },
  {
    id: "generative-engine-seo",
    title: "Generative Engine Optimization",
    shortDesc: "Help organizations improve how their content, products, services and knowledge are surfaced and represented within generative AI experiences.",
    description: "Position your brand as the authoritative answer across AI search engines and answer engines such as ChatGPT Search, Perplexity AI, Google Gemini Overviews, and Copilot.",
    iconName: "Search",
    badge: "GEO & AI Search",
    businessProblem: "Traditional SEO is losing ground as modern buyers query AI engines directly; lack of brand visibility and inaccurate citations in LLM responses.",
    aiApproach: "Knowledge graph structuring, entity clarity optimization, high-authority synthetic citations, and schema architectures engineered specifically for LLM retrieval systems.",
    capabilities: [
      "AI-search visibility",
      "Generative engine discoverability",
      "Structured content",
      "Knowledge optimization",
      "Entity clarity",
      "Content authority",
      "Retrieval-friendly content",
      "AI answer optimization"
    ],
    integrations: ["Schema.org JSON-LD", "Knowledge Graph APIs", "Perplexity Indexing", "Google Search Console", "Custom Vector Scrapers"],
    outcomes: [
      "Consistent, accurate brand representation across major LLM search answers",
      "Higher citation rates in Perplexity, Claude, and ChatGPT web answers",
      "Structured entity authority that AI scrapers index with zero ambiguity",
      "Future-proof brand discoverability in the post-search paradigm"
    ],
    exampleUseCases: [
      "B2B SaaS entity grounding and product capability citation optimization",
      "Healthcare & legal practice authoritative schema structuring",
      "E-commerce product attribute indexing for AI commerce shopping assistants"
    ]
  }
];
