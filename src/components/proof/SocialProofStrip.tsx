import React from 'react';
import { trustMetrics } from '../../data/config';
import { Sparkles, CheckCircle2 } from 'lucide-react';

export const SocialProofStrip: React.FC = () => {
  const credibilityPillars = [
    "AI Strategy",
    "AI Agents",
    "Business Automation",
    "Generative AI",
    "Agentic Commerce",
    "Systems Integration"
  ];

  return (
    <section id="credibility-strip" className="relative border-y border-slate-800/80 bg-slate-950/70 backdrop-blur-md py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Core Capabilities Marquee / Centered Strip */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 pb-6 border-b border-slate-800/60 text-xs sm:text-sm font-semibold tracking-wide text-slate-300">
          {credibilityPillars.map((pillar, idx) => (
            <React.Fragment key={pillar}>
              <div className="flex items-center gap-2 text-slate-200 hover:text-cyan-400 transition-colors">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span>{pillar}</span>
              </div>
              {idx < credibilityPillars.length - 1 && (
                <span className="text-slate-700 hidden sm:inline">•</span>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Configurable Trust Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6 text-center">
          {trustMetrics.map((metric) => (
            <div key={metric.label} className="flex flex-col items-center group">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-cyan-300 font-sans tracking-tight">
                {metric.value}
              </div>
              <div className="text-xs sm:text-sm font-medium text-slate-400 mt-1 max-w-[180px]">
                {metric.label}
              </div>
              <div className="text-[10px] text-slate-600 font-mono mt-0.5 opacity-60 group-hover:opacity-100 transition-opacity">
                {metric.note}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
