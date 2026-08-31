import React, { useState } from 'react';
import { 
  Brain, 
  Layers, 
  GitFork, 
  Building2, 
  MessageCircle, 
  CheckCircle2, 
  Cpu, 
  Shield 
} from 'lucide-react';
import { techEcosystem } from '../../data/ecosystem';

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Brain,
  Layers,
  GitFork,
  Building2,
  MessageCircle
};

export const TechnologyEcosystem: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<number | null>(null);

  return (
    <section id="ecosystem" className="py-20 lg:py-28 relative bg-[#0B0F19]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950/60 border border-cyan-800/40 text-cyan-400 text-xs font-mono font-medium">
            <span>INTEGRATION TECHNOLOGIES</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-sans">
            Enterprise <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">Technology Ecosystem</span>
          </h2>
          
          <p className="text-base text-slate-300 leading-relaxed">
            We architect and deploy AI agents natively across world-class AI models, orchestration frameworks, business suites, and communication protocols.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techEcosystem.map((cat, idx) => {
            const Icon = ICON_MAP[cat.icon] || Cpu;
            const isHovered = activeCategory === idx;
            return (
              <div
                key={cat.name}
                onMouseEnter={() => setActiveCategory(idx)}
                onMouseLeave={() => setActiveCategory(null)}
                className={`p-6 rounded-2xl bg-slate-900/70 border transition-all duration-200 flex flex-col justify-between ${
                  isHovered
                    ? 'border-cyan-500/50 bg-slate-900 shadow-xl shadow-cyan-500/5 -translate-y-1'
                    : 'border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-xl bg-slate-800 border border-slate-700 text-cyan-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono text-slate-500">
                      LAYER 0{idx + 1}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-white">
                      {cat.name}
                    </h3>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                      {cat.description}
                    </p>
                  </div>

                  {/* Technology Items List */}
                  <div className="space-y-2 pt-2 border-t border-slate-800/80">
                    {cat.items.map((item) => (
                      <div key={item} className="flex items-center gap-2 text-xs text-slate-200">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                        <span className="font-mono text-slate-300">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center gap-1.5 text-[11px] text-slate-400 font-mono">
                  <Shield className="w-3 h-3 text-cyan-400" />
                  <span>Enterprise API Compatible</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Disclaimer Note per Specification */}
        <div className="mt-8 p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 text-center text-xs text-slate-500 font-mono max-w-2xl mx-auto">
          Notice: All third-party logos, trademarks, and registered names belong to their respective owners. Mentioned exclusively as technical integration capabilities.
        </div>

      </div>
    </section>
  );
};
