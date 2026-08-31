import React, { useEffect } from 'react';
import { 
  X, 
  CheckCircle2, 
  ArrowRight, 
  AlertTriangle, 
  Cpu, 
  Layers, 
  TrendingUp, 
  Sparkles,
  Headphones,
  MessageSquare,
  Mail,
  ShoppingCart,
  Search,
  Workflow
} from 'lucide-react';
import { Solution } from '../../types';

interface SolutionModalProps {
  solution: Solution | null;
  onClose: () => void;
  onDiscuss: (solutionTitle: string) => void;
}

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Headphones,
  TrendingUp,
  MessageSquare,
  Sparkles,
  Workflow,
  Cpu,
  Mail,
  ShoppingCart,
  Search
};

export const SolutionModal: React.FC<SolutionModalProps> = ({ solution, onClose, onDiscuss }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (solution) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [solution, onClose]);

  if (!solution) return null;

  const Icon = ICON_MAP[solution.iconName] || Cpu;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="solution-modal-title"
    >
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl p-6 sm:p-8 text-left space-y-6 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-start justify-between gap-4 border-b border-slate-800 pb-5">
          <div className="flex items-center gap-3.5">
            <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-500 to-indigo-600 text-white shadow-md">
              <Icon className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-mono font-semibold text-cyan-400 uppercase tracking-wider">
                  {solution.badge || 'Enterprise AI Solution'}
                </span>
              </div>
              <h3 id="solution-modal-title" className="text-xl sm:text-2xl font-bold text-white mt-0.5">
                {solution.title}
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Close solution details modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Overview Description */}
        <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800 text-sm text-slate-200 leading-relaxed">
          {solution.description}
        </div>

        {/* Business Problem & AI Approach */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-slate-950/40 border border-rose-950/40 space-y-1.5">
            <div className="flex items-center gap-2 text-rose-400 text-xs font-bold font-mono">
              <AlertTriangle className="w-4 h-4" />
              <span>THE BUSINESS PROBLEM</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {solution.businessProblem}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-950/40 border border-cyan-950/40 space-y-1.5">
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold font-mono">
              <Cpu className="w-4 h-4" />
              <span>OUR AI ARCHITECTURAL APPROACH</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {solution.aiApproach}
            </p>
          </div>
        </div>

        {/* Key Capabilities */}
        <div>
          <h4 className="text-xs font-mono font-semibold text-slate-400 uppercase tracking-wider mb-3">
            Core Solution Capabilities
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {solution.capabilities.map((cap) => (
              <div key={cap} className="flex items-center gap-2 text-xs sm:text-sm text-slate-200 bg-slate-950/60 px-3 py-2 rounded-lg border border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>{cap}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Typical Integrations */}
        <div>
          <h4 className="text-xs font-mono font-semibold text-slate-400 uppercase tracking-wider mb-2.5">
            Typical Integrations & Ecosystem Connectors
          </h4>
          <div className="flex flex-wrap gap-2">
            {solution.integrations.map((item) => (
              <span key={item} className="px-2.5 py-1 text-xs rounded-md bg-slate-800/80 text-cyan-300 border border-slate-700 font-mono">
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Expected Business Outcomes */}
        <div>
          <h4 className="text-xs font-mono font-semibold text-slate-400 uppercase tracking-wider mb-2.5">
            Expected Business Outcomes
          </h4>
          <div className="space-y-2">
            {solution.outcomes.map((outcome) => (
              <div key={outcome} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                <TrendingUp className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                <span>{outcome}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Example Use Cases */}
        <div>
          <h4 className="text-xs font-mono font-semibold text-slate-400 uppercase tracking-wider mb-2.5">
            Example Enterprise Use Cases
          </h4>
          <div className="space-y-1.5">
            {solution.exampleUseCases.map((uc, i) => (
              <div key={uc} className="text-xs sm:text-sm text-slate-300 flex items-start gap-2 bg-slate-950/40 p-2.5 rounded-lg border border-slate-800/60">
                <span className="text-cyan-400 font-mono font-bold text-xs">{i + 1}.</span>
                <span>{uc}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Modal Actions */}
        <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold transition-colors cursor-pointer"
          >
            Close Window
          </button>

          <button
            onClick={() => onDiscuss(solution.title)}
            className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-semibold text-xs hover:from-cyan-400 hover:to-indigo-500 shadow-md shadow-cyan-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Discuss This Solution</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
