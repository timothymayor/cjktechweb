import React, { useState } from 'react';
import { 
  Lightbulb, 
  Cpu, 
  Workflow, 
  Layers, 
  ArrowRight, 
  CheckCircle2, 
  Activity, 
  ShieldCheck, 
  RefreshCw 
} from 'lucide-react';

interface LifecycleStep {
  number: string;
  name: string;
  shortDesc: string;
  details: string;
}

const LIFECYCLE_STEPS: LifecycleStep[] = [
  { 
    number: "01", 
    name: "Business Challenge", 
    shortDesc: "Discovery & Bottleneck Mapping", 
    details: "We analyze manual workflows, employee time allocation, customer drop-offs, and operational cost drivers to define clear success metrics." 
  },
  { 
    number: "02", 
    name: "AI Strategy", 
    shortDesc: "Readiness & ROI Feasibility", 
    details: "We assess data availability, security boundaries, API readiness, and select the optimal deterministic vs agentic AI architecture." 
  },
  { 
    number: "03", 
    name: "Solution Design", 
    shortDesc: "Workflow & Agent Architecture", 
    details: "We design multi-agent schemas, database interactions, prompt guardrails, and human-in-the-loop escalation criteria." 
  },
  { 
    number: "04", 
    name: "Development", 
    shortDesc: "Cognitive Engine & RAG Build", 
    details: "We develop fine-tuned models, knowledge retrieval pipelines, custom API tools, and structured JSON output parsers." 
  },
  { 
    number: "05", 
    name: "Integration", 
    shortDesc: "CRM, ERP & Messaging Sync", 
    details: "We connect the AI agent securely into your WhatsApp, email, HubSpot/Salesforce, Shopify, or internal databases via webhooks." 
  },
  { 
    number: "06", 
    name: "Deployment", 
    shortDesc: "Phased Staging & Production", 
    details: "We run shadow-mode evaluations, staff enablement sessions, and roll out with zero downtime to your existing systems." 
  },
  { 
    number: "07", 
    name: "Optimization", 
    shortDesc: "Monitoring & Continuous Tuning", 
    details: "24/7 telemetry monitoring, latency tracking, hallucination guardrail verification, and continuous prompt fine-tuning." 
  },
];

const CAPABILITY_CARDS = [
  {
    title: "AI Strategy",
    subtitle: "Value Discovery & Roadmap",
    description: "Identify where AI can generate measurable business value. We evaluate technical feasibility, compute cost models, and architect a step-by-step transformation roadmap.",
    icon: Lightbulb,
    badge: "Strategic Advisory",
    color: "from-blue-500 to-cyan-500",
    bullets: ["AI Readiness Assessments", "Process discovery & ROI modeling", "Governance & compliance guardrails"]
  },
  {
    title: "AI Engineering",
    subtitle: "Custom Agent Architectures",
    description: "Design and build reliable AI-powered systems. We engineer production-grade agents utilizing multi-agent frameworks, enterprise RAG, and fine-tuned LLMs.",
    icon: Cpu,
    badge: "Deep Technology",
    color: "from-cyan-500 to-indigo-500",
    bullets: ["Autonomous multi-agent orchestration", "Proprietary RAG & Vector pipelines", "Deterministic validation layers"]
  },
  {
    title: "Automation",
    subtitle: "End-to-End Orchestration",
    description: "Replace repetitive manual workflows with intelligent automation. Connect business applications to eliminate manual data entry, approvals, and triage backlogs.",
    icon: Workflow,
    badge: "Operational Scale",
    color: "from-indigo-500 to-purple-500",
    bullets: ["Document & invoice parsing", "Multi-system task orchestration", "Approval chain automation"]
  },
  {
    title: "Integration",
    subtitle: "Enterprise Interoperability",
    description: "Connect AI solutions with CRM, ERP, websites, WhatsApp, email and business systems so intelligence flows natively through your existing tools.",
    icon: Layers,
    badge: "Seamless Connectivity",
    color: "from-purple-500 to-pink-500",
    bullets: ["WhatsApp Cloud API & Meta platform", "Salesforce, HubSpot & ERP connectors", "Secure webhook & event queues"]
  },
];

export const About: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(1);

  return (
    <section id="about" className="py-20 lg:py-28 relative bg-[#0B0F19]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950/60 border border-cyan-800/40 text-cyan-400 text-xs font-mono font-medium">
            <span>ABOUT CJ KONSULTANTS</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-sans">
            Engineering <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">Intelligent Businesses</span>
          </h2>
          
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            We help forward-thinking organizations identify high-value automation opportunities and translate them into practical, enterprise-grade AI systems that deliver tangible ROI, eliminate operational friction, and scale business capability.
          </p>
        </div>

        {/* Interactive Lifecycle Pipeline Diagram */}
        <div className="mt-14 p-6 lg:p-8 rounded-2xl bg-slate-900/90 border border-slate-800/90 backdrop-blur-md shadow-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div>
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest font-semibold">
                Our Proven Delivery Framework
              </span>
              <h3 className="text-xl font-bold text-white mt-1">
                From Business Challenge to Continuous Optimization
              </h3>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
              <Activity className="w-4 h-4 text-cyan-400" />
              <span>Step {activeStepIndex + 1} of {LIFECYCLE_STEPS.length}</span>
            </div>
          </div>

          {/* Stepper Timeline Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5 my-6">
            {LIFECYCLE_STEPS.map((step, idx) => {
              const isActive = activeStepIndex === idx;
              return (
                <button
                  key={step.number}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`p-3 rounded-xl text-left transition-all border cursor-pointer ${
                    isActive
                      ? 'bg-slate-800/90 border-cyan-400 shadow-md shadow-cyan-500/10 scale-[1.02]'
                      : 'bg-slate-950/60 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/60'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className={`text-[10px] font-mono font-bold ${isActive ? 'text-cyan-400' : 'text-slate-500'}`}>
                      {step.number}
                    </span>
                    {isActive && <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />}
                  </div>
                  <div className={`text-xs font-bold truncate ${isActive ? 'text-white' : 'text-slate-300'}`}>
                    {step.name}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Step Deep-Dive Card */}
          <div className="p-5 rounded-xl bg-slate-950/80 border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-3xl">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800/40">
                  PHASE {LIFECYCLE_STEPS[activeStepIndex].number}
                </span>
                <h4 className="text-base sm:text-lg font-bold text-white">
                  {LIFECYCLE_STEPS[activeStepIndex].name} — <span className="text-cyan-300 text-sm font-medium">{LIFECYCLE_STEPS[activeStepIndex].shortDesc}</span>
                </h4>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                {LIFECYCLE_STEPS[activeStepIndex].details}
              </p>
            </div>

            <div className="flex items-center gap-3 flex-shrink-0">
              <button
                onClick={() => setActiveStepIndex((prev) => (prev > 0 ? prev - 1 : LIFECYCLE_STEPS.length - 1))}
                className="px-3 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs font-medium text-slate-300 hover:text-white transition-colors cursor-pointer"
              >
                Previous Step
              </button>
              <button
                onClick={() => setActiveStepIndex((prev) => (prev + 1) % LIFECYCLE_STEPS.length)}
                className="px-3.5 py-2 rounded-lg bg-cyan-950 hover:bg-cyan-900 border border-cyan-700 text-xs font-semibold text-cyan-200 transition-colors flex items-center gap-1 cursor-pointer"
              >
                <span>Next Step</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Four Core Capability Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CAPABILITY_CARDS.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800/80 hover:border-cyan-500/40 transition-all duration-200 hover:-translate-y-1 group flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${card.color} text-white shadow-md group-hover:scale-105 transition-transform`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded-full bg-slate-800 text-slate-400 border border-slate-700">
                      {card.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-xs text-cyan-400 font-mono mt-0.5 font-medium">
                      {card.subtitle}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {card.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 space-y-2">
                  {card.bullets.map((bullet) => (
                    <div key={bullet} className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                      <span className="truncate">{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
