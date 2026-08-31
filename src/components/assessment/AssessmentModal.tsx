import React, { useState, useEffect } from 'react';
import { 
  X, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  BarChart, 
  Layers, 
  ShieldCheck, 
  Workflow, 
  RotateCcw 
} from 'lucide-react';

interface AssessmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onApplyResults: (recommendedService: string, notes: string) => void;
}

interface Question {
  id: string;
  category: string;
  question: string;
  options: {
    label: string;
    points: number;
    description: string;
  }[];
}

const ASSESSMENT_QUESTIONS: Question[] = [
  {
    id: 'data-readiness',
    category: 'Knowledge & Data',
    question: 'How is your company\'s documentation, customer data, and product knowledge organized?',
    options: [
      { label: 'Scattered across emails, chats & offline files', points: 10, description: 'Requires knowledge extraction & data structuring phase' },
      { label: 'Centralized in cloud docs (Notion, Google Drive, Confluence)', points: 20, description: 'Ready for vector indexing & enterprise RAG' },
      { label: 'Structured databases with clean APIs & CRM sync', points: 30, description: 'Optimal for immediate multi-agent orchestration' }
    ]
  },
  {
    id: 'volume-channel',
    category: 'Operational Volume',
    question: 'Where does your team experience the heaviest repetitive operational load?',
    options: [
      { label: 'Customer support inquiries & WhatsApp chat tickets', points: 25, description: 'High ROI on 24/7 AI Customer Care & WhatsApp Agents' },
      { label: 'Inbound lead qualification, scheduling & CRM entries', points: 25, description: 'High ROI on AI Sales & Lead Qualification Agents' },
      { label: 'Manual invoice entry, document parsing & internal approvals', points: 25, description: 'High ROI on Workflow & Document Extraction Automation' }
    ]
  },
  {
    id: 'system-connectivity',
    category: 'Systems & Tooling',
    question: 'What is the state of your core business software stack?',
    options: [
      { label: 'Legacy software with limited webhooks / APIs', points: 15, description: 'Will utilize vision-LLM and RPA connectors' },
      { label: 'Modern cloud SaaS (HubSpot, Shopify, Zendesk, Stripe)', points: 25, description: 'Ready for rapid native API webhook integration' },
      { label: 'Enterprise ERP/CRM with dedicated IT engineering', points: 30, description: 'Ready for custom microservices & LangGraph agents' }
    ]
  },
  {
    id: 'timeline-urgency',
    category: 'Implementation Scope',
    question: 'What is your target timeline for deploying your first production AI workflow?',
    options: [
      { label: 'Immediate deployment within 2–4 weeks', points: 20, description: 'Targeting rapid-win pilot workflow' },
      { label: 'Strategic rollout over 1–3 months', points: 25, description: 'Targeting comprehensive multi-system architecture' },
      { label: 'Exploring enterprise roadmap for upcoming fiscal year', points: 15, description: 'Targeting AI readiness strategy & proof of concept' }
    ]
  }
];

export const AssessmentModal: React.FC<AssessmentModalProps> = ({ isOpen, onClose, onApplyResults }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, { label: string; points: number; description: string }>>({});
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSelectOption = (option: { label: string; points: number; description: string }) => {
    const currentQ = ASSESSMENT_QUESTIONS[currentStep];
    const newAnswers = { ...answers, [currentQ.id]: option };
    setAnswers(newAnswers);

    if (currentStep < ASSESSMENT_QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowResult(true);
    }
  };

  const handleReset = () => {
    setAnswers({});
    setCurrentStep(0);
    setShowResult(false);
  };

  // Compute Score
  const totalScore = (Object.values(answers) as Array<{ label: string; points: number; description: string }>).reduce(
    (acc, curr) => acc + curr.points,
    0
  );
  const normalizedScore = Math.min(Math.round((totalScore / 115) * 100), 98);

  let recommendation = "AI Customer Service & Support Agents";
  if (answers['volume-channel']?.label.includes('lead qualification')) {
    recommendation = "AI Sales & Lead Generation Agents";
  } else if (answers['volume-channel']?.label.includes('WhatsApp')) {
    recommendation = "WhatsApp AI Business Agents";
  } else if (answers['volume-channel']?.label.includes('invoice')) {
    recommendation = "AI Workflow & Business Process Automation";
  }

  const handleProceedToContact = () => {
    const summaryNotes = `AI Readiness Score: ${normalizedScore}/100. Primary operational area: ${answers['volume-channel']?.label || 'General'}. Stack readiness: ${answers['system-connectivity']?.label || 'Modern'}.`;
    onClose();
    onApplyResults(recommendation, summaryNotes);
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const currentQ = ASSESSMENT_QUESTIONS[currentStep];

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="assessment-modal-title"
    >
      <div 
        className="relative w-full max-w-2xl bg-slate-900 border border-cyan-500/30 rounded-2xl shadow-2xl p-6 sm:p-8 text-left space-y-6 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4 border-b border-slate-800 pb-5">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-cyan-950 border border-cyan-800/60 text-cyan-400">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 font-semibold">
                Interactive Diagnostic Tool
              </span>
              <h3 id="assessment-modal-title" className="text-xl sm:text-2xl font-bold text-white">
                Enterprise AI Readiness Assessment
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Close assessment modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {!showResult ? (
          /* Question View */
          <div className="space-y-6">
            {/* Step Counter */}
            <div className="flex items-center justify-between text-xs font-mono text-slate-400">
              <span>Section: <strong className="text-cyan-400">{currentQ.category}</strong></span>
              <span>Step {currentStep + 1} of {ASSESSMENT_QUESTIONS.length}</span>
            </div>

            {/* Progress Bar */}
            <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-cyan-500 to-indigo-500 transition-all duration-300"
                style={{ width: `${((currentStep + 1) / ASSESSMENT_QUESTIONS.length) * 100}%` }}
              />
            </div>

            {/* Question Text */}
            <div className="space-y-2">
              <h4 className="text-base sm:text-lg font-bold text-white leading-snug">
                {currentQ.question}
              </h4>
            </div>

            {/* Options List */}
            <div className="space-y-3">
              {currentQ.options.map((option) => (
                <button
                  key={option.label}
                  onClick={() => handleSelectOption(option)}
                  className="w-full p-4 rounded-xl bg-slate-950/80 border border-slate-800 hover:border-cyan-500/60 hover:bg-slate-800/80 text-left transition-all group flex items-start justify-between gap-4 cursor-pointer"
                >
                  <div className="space-y-1">
                    <div className="text-sm font-semibold text-slate-100 group-hover:text-cyan-300 transition-colors">
                      {option.label}
                    </div>
                    <div className="text-xs text-slate-400 leading-relaxed">
                      {option.description}
                    </div>
                  </div>
                  <div className="p-1 rounded-full bg-slate-800 group-hover:bg-cyan-500 group-hover:text-black text-slate-400 transition-colors flex-shrink-0 mt-1">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </button>
              ))}
            </div>
          </div>
        ) : (
          /* Results View */
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-cyan-950/60 to-indigo-950/60 border border-cyan-500/40 text-center space-y-3">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-400">
                Diagnostic Results Generated
              </span>
              
              <div className="text-4xl sm:text-5xl font-black text-white font-mono">
                {normalizedScore}<span className="text-2xl text-cyan-400">/100</span>
              </div>

              <div className="inline-block px-3 py-1 rounded-full bg-cyan-950 text-cyan-300 text-xs font-semibold border border-cyan-800">
                High Automation Feasibility
              </div>

              <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto pt-2">
                Your organization exhibits strong potential for high-impact AI agent deployment with clear ROI payback within 30 to 90 days.
              </p>
            </div>

            {/* Recommended Starting Point */}
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
              <span className="text-[10px] font-mono text-cyan-400 uppercase font-bold">
                Recommended Primary Solution
              </span>
              <h4 className="text-lg font-bold text-white">
                {recommendation}
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Based on your operational profile, initiating an agile pilot in this category will address your most immediate bottleneck while establishing foundational data pipelines.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
              <button
                onClick={handleReset}
                className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Retake Assessment</span>
              </button>

              <button
                onClick={handleProceedToContact}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-semibold text-xs hover:from-cyan-400 hover:to-indigo-500 shadow-lg shadow-cyan-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Discuss Results with an AI Architect</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
