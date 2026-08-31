export interface Solution {
  id: string;
  title: string;
  shortDesc: string;
  description: string;
  iconName: string;
  businessProblem: string;
  aiApproach: string;
  capabilities: string[];
  integrations: string[];
  outcomes: string[];
  exampleUseCases: string[];
  badge?: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  industry: string;
  challenge: string;
  solution: string;
  outcome: string;
  clientProfile: string;
  existingProcess: string;
  aiStrategy: string;
  architectureSteps: string[];
  techStack: string[];
  businessOutcomes: string[];
  isPlaceholder: boolean;
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  jobTitle: string;
  company: string;
  industry: string;
  isPlaceholder: boolean;
  avatarInitials: string;
}

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  content: string[];
  keyTakeaways: string[];
}

export interface TechCategory {
  name: string;
  description: string;
  icon: string;
  items: string[];
}

export interface OutcomePillar {
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  metric: string;
  metricLabel: string;
}

export interface ContactFormData {
  fullName: string;
  company: string;
  email: string;
  phone: string;
  industry: string;
  serviceRequired: string;
  projectBudget: string;
  message: string;
  consent: boolean;
  honeypot?: string;
}

export interface CompanyConfig {
  name: string;
  tagline: string;
  address: string;
  email: string;
  phone: string;
  businessHours: string;
  mapEmbedUrl: string;
  social: {
    linkedin: string;
    x: string;
    facebook: string;
    instagram: string;
    youtube: string;
    whatsapp: string;
  };
}
