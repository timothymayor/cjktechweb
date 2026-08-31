import React, { useEffect } from 'react';
import { 
  X, 
  ArrowRight, 
  Layers, 
  TrendingUp, 
  Briefcase, 
  AlertCircle, 
  Workflow, 
  Cpu, 
  CheckCircle2, 
  Terminal 
} from 'lucide-react';
import { CaseStudy } from '../../types';

interface ProjectModalProps {
  project: CaseStudy | null;
  onClose: () => void;
  onDiscuss: (projectTitle: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onDiscuss }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-modal-title"
    >
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl p-6 sm:p-8 text-left space-y-6 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-start justify-between gap-4 border-b border-slate-800 pb-5">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-amber-950/60 text-amber-300 border border-amber-800/50 uppercase">
                Illustrative Case Study
              </span>
              <span className="text-xs text-slate-400 font-mono">
                {project.industry}
              </span>
            </div>
            <h3 id="case-study-modal-title" className="text-xl sm:text-2xl font-bold text-white">
              {project.title}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Close case study modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Client Profile */}
        <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 text-xs sm:text-sm text-slate-300">
          <Briefcase className="w-4 h-4 text-cyan-400 flex-shrink-0" />
          <div>
            <span className="font-semibold text-white">Client Profile: </span>
            <span>{project.clientProfile}</span>
          </div>
        </div>

        {/* Challenge vs Existing Process */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-slate-950/50 border border-rose-950/40 space-y-1.5">
            <div className="flex items-center gap-2 text-rose-400 text-xs font-bold font-mono">
              <AlertCircle className="w-4 h-4" />
              <span>BUSINESS CHALLENGE</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {project.challenge}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-950/50 border border-slate-800 space-y-1.5">
            <div className="flex items-center gap-2 text-slate-400 text-xs font-bold font-mono">
              <Workflow className="w-4 h-4" />
              <span>EXISTING MANUAL PROCESS</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {project.existingProcess}
            </p>
          </div>
        </div>

        {/* AI Automation Strategy */}
        <div className="p-4 rounded-xl bg-slate-950/70 border border-cyan-950/50 space-y-1.5">
          <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold font-mono">
            <Cpu className="w-4 h-4" />
            <span>AI AUTOMATION STRATEGY & DEPLOYMENT</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
            {project.aiStrategy}
          </p>
        </div>

        {/* Miniature Solution Architecture Diagram */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-xs font-mono font-semibold text-slate-400 uppercase tracking-wider">
              Solution Architecture Dataflow
            </h4>
            <span className="text-[10px] font-mono text-cyan-400">Autonomous Pipeline</span>
          </div>

          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 text-center">
              {project.architectureSteps.map((step, idx) => (
                <div key={step} className="relative flex flex-col items-center">
                  <div className="w-full p-2.5 rounded-lg bg-slate-900 border border-slate-700/80 text-[11px] font-semibold text-slate-200 shadow-sm flex flex-col items-center justify-center min-h-[58px]">
                    <span className="text-[9px] font-mono text-cyan-400 mb-0.5">0{idx + 1}</span>
                    <span>{step}</span>
                  </div>
                  {idx < project.architectureSteps.length - 1 && (
                    <div className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 z-10 text-cyan-500 text-xs font-bold">
                      →
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Technology Stack Pills */}
        <div>
          <div className="flex items-center gap-2 text-xs font-mono font-semibold text-slate-400 uppercase tracking-wider mb-2.5">
            <Terminal className="w-4 h-4 text-cyan-400" />
            <span>Technology Stack</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span key={tech} className="px-2.5 py-1 text-xs rounded-md bg-slate-800 text-cyan-300 border border-slate-700 font-mono">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Business Outcomes */}
        <div>
          <h4 className="text-xs font-mono font-semibold text-slate-400 uppercase tracking-wider mb-2.5">
            Delivered Business Outcomes
          </h4>
          <div className="space-y-2">
            {project.businessOutcomes.map((item) => (
              <div key={item} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                <span>{item}</span>
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
            Back to Projects
          </button>

          <button
            onClick={() => onDiscuss(project.title)}
            className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-semibold text-xs hover:from-cyan-400 hover:to-indigo-500 shadow-md shadow-cyan-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Discuss a Similar Project</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
