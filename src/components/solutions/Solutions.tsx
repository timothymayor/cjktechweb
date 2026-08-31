import React, { useState } from 'react';
import { 
  ArrowRight, 
  CheckCircle2, 
  Headphones, 
  TrendingUp, 
  MessageSquare, 
  Sparkles, 
  Workflow, 
  Mail, 
  ShoppingCart, 
  Search,
  Cpu
} from 'lucide-react';
import { solutions } from '../../data/solutions';
import { Solution } from '../../types';
import { SolutionModal } from './SolutionModal';

interface SolutionsProps {
  onPreSelectService: (serviceName: string) => void;
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

export const Solutions: React.FC<SolutionsProps> = ({ onPreSelectService }) => {
  const [selectedSolution, setSelectedSolution] = useState<Solution | null>(null);

  const handleDiscuss = (solutionTitle: string) => {
    setSelectedSolution(null);
    onPreSelectService(solutionTitle);
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="solutions" className="py-20 lg:py-28 relative bg-[#090D16] border-t border-slate-800/80">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-cyan-600/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-indigo-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-slate-800/80">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950/60 border border-cyan-800/40 text-cyan-400 text-xs font-mono font-medium">
              <span>CORE CAPABILITIES & PRODUCTS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-sans">
              AI Solutions Built <br />
              <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                Around Your Business
              </span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-slate-400 max-w-md">
            Click any solution to review the architectural approach, enterprise integrations, expected ROI outcomes, and example implementations.
          </p>
        </div>

        {/* 8 Core Solutions Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((solution, idx) => {
            const Icon = ICON_MAP[solution.iconName] || Cpu;
            return (
              <div
                key={solution.id}
                onClick={() => setSelectedSolution(solution)}
                className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-900 transition-all duration-200 hover:-translate-y-1 cursor-pointer group flex flex-col justify-between shadow-lg shadow-black/20"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedSolution(solution);
                  }
                }}
                aria-label={`View details for ${solution.title}`}
              >
                <div className="space-y-4">
                  {/* Card Header & Icon */}
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-xl bg-slate-800 border border-slate-700 text-cyan-400 group-hover:bg-gradient-to-br group-hover:from-cyan-500 group-hover:to-indigo-600 group-hover:text-white transition-all shadow-sm">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded-full bg-slate-950 text-cyan-400 border border-cyan-900/50">
                      0{idx + 1}
                    </span>
                  </div>

                  {/* Title & Short Description */}
                  <div>
                    <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                      {solution.title}
                    </h3>
                    <p className="text-xs text-slate-300 mt-2 leading-relaxed line-clamp-3">
                      {solution.shortDesc}
                    </p>
                  </div>

                  {/* Top Capabilities Preview */}
                  <div className="pt-2 space-y-1.5 border-t border-slate-800/80">
                    {solution.capabilities.slice(0, 3).map((cap) => (
                      <div key={cap} className="flex items-center gap-2 text-xs text-slate-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                        <span className="truncate">{cap}</span>
                      </div>
                    ))}
                    {solution.capabilities.length > 3 && (
                      <span className="text-[11px] text-slate-500 font-mono pl-5">
                        +{solution.capabilities.length - 3} more capabilities
                      </span>
                    )}
                  </div>
                </div>

                {/* Card CTA Link */}
                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-cyan-400 group-hover:text-cyan-300">
                  <span>Explore Solution</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Interactive In-Depth Solution Modal */}
      <SolutionModal
        solution={selectedSolution}
        onClose={() => setSelectedSolution(null)}
        onDiscuss={handleDiscuss}
      />
    </section>
  );
};
