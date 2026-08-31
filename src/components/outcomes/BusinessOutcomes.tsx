import React from 'react';
import { 
  MinusCircle, 
  Zap, 
  HeartHandshake, 
  TrendingUp, 
  Network, 
  Users 
} from 'lucide-react';
import { outcomePillars } from '../../data/outcomes';

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  MinusCircle,
  Zap,
  HeartHandshake,
  TrendingUp,
  Network,
  Users
};

export const BusinessOutcomes: React.FC = () => {
  return (
    <section id="outcomes" className="py-20 lg:py-28 relative bg-[#0B0F19]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-950/60 border border-indigo-800/40 text-indigo-300 text-xs font-mono font-medium">
            <span>MEASURABLE ENTERPRISE IMPACT</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-sans">
            What AI Automation <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">Can Change</span>
          </h2>
          
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            AI is not about vanity experiments. It is about fundamentally re-architecting how your business acquires customers, resolves friction, and executes mission-critical operations.
          </p>
        </div>

        {/* 6 Core Pillars Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {outcomePillars.map((pillar) => {
            const Icon = ICON_MAP[pillar.icon] || Zap;
            return (
              <div
                key={pillar.title}
                className="p-7 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-indigo-500/40 hover:bg-slate-900/90 transition-all duration-200 group flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-xl bg-slate-800 border border-slate-700 text-indigo-400 group-hover:text-cyan-300 transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-2xl font-black text-slate-100 font-mono tracking-tight group-hover:text-cyan-400 transition-colors">
                      {pillar.metric}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white tracking-tight">
                      {pillar.title}
                    </h3>
                    <p className="text-xs font-mono text-cyan-400 mt-0.5 font-medium">
                      {pillar.subtitle}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 text-[11px] font-mono text-slate-400 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                  <span>{pillar.metricLabel}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
