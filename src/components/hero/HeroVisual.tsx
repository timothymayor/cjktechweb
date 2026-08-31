import React, { useState } from 'react';
import { 
  Cpu, 
  Users, 
  MessageSquare, 
  Globe, 
  Mail, 
  Building2, 
  Database, 
  Sparkles, 
  TrendingUp, 
  Workflow, 
  BarChart3,
  CheckCircle2
} from 'lucide-react';

interface EcosystemNode {
  id: string;
  name: string;
  category: string;
  icon: React.ComponentType<{ className?: string }>;
  x: number; // percentage from center
  y: number;
  description: string;
  status: string;
  color: string;
}

const NODES: EcosystemNode[] = [
  { id: 'customers', name: 'Customers', category: 'Touchpoint', icon: Users, x: -38, y: -28, description: '24/7 AI-assisted human interactions', status: 'Active Stream', color: 'from-blue-500 to-cyan-400' },
  { id: 'whatsapp', name: 'WhatsApp', category: 'Channel', icon: MessageSquare, x: -44, y: 0, description: 'Direct conversational commerce & care', status: '99.8% Sync', color: 'from-emerald-500 to-teal-400' },
  { id: 'website', name: 'Website', category: 'Channel', icon: Globe, x: -36, y: 28, description: 'Semantic concierge & lead capture', status: 'Live Agent', color: 'from-sky-500 to-indigo-400' },
  { id: 'email', name: 'Email Inbox', category: 'Channel', icon: Mail, x: -18, y: 40, description: 'Autonomous triage & drafted replies', status: 'Auto-Routing', color: 'from-indigo-500 to-purple-400' },
  { id: 'crm', name: 'CRM Hub', category: 'System', icon: Building2, x: 18, y: 40, description: 'Real-time prospect qualification & sync', status: 'Two-Way Sync', color: 'from-purple-500 to-pink-400' },
  { id: 'erp', name: 'ERP / Database', category: 'System', icon: Database, x: 38, y: 28, description: 'Inventory, orders, general ledger', status: 'Encrypted Link', color: 'from-cyan-500 to-blue-600' },
  { id: 'marketing', name: 'Marketing Ops', category: 'Workflow', icon: Sparkles, x: 44, y: 0, description: 'Predictive segmentation & content', status: 'Optimizing', color: 'from-amber-500 to-orange-400' },
  { id: 'sales', name: 'Sales Pipeline', category: 'Workflow', icon: TrendingUp, x: 36, y: -28, description: 'Automated deal acceleration & booking', status: 'High Intent', color: 'from-rose-500 to-red-400' },
  { id: 'workflows', name: 'Workflows', category: 'Process', icon: Workflow, x: 18, y: -40, description: 'Autonomous document parsing & approvals', status: 'Orchestrating', color: 'from-teal-500 to-emerald-400' },
  { id: 'analytics', name: 'Analytics', category: 'Intelligence', icon: BarChart3, x: -18, y: -40, description: 'Real-time telemetry & ROI modeling', status: 'Telemetry Live', color: 'from-violet-500 to-indigo-400' },
];

export const HeroVisual: React.FC = () => {
  const [activeNode, setActiveNode] = useState<EcosystemNode | null>(NODES[0]);

  return (
    <div className="relative w-full aspect-square max-w-[540px] mx-auto select-none">
      {/* Background ambient radial glows */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-500/10 via-indigo-500/10 to-violet-500/10 blur-3xl animate-pulse" style={{ animationDuration: '6s' }} />
      <div className="absolute inset-8 rounded-full border border-slate-800/60 bg-[#0B0F19]/60 backdrop-blur-sm" />
      <div className="absolute inset-20 rounded-full border border-dashed border-slate-700/40" />

      {/* SVG Connecting Neural & Data Lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="-50 -50 100 100">
        <defs>
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#6366F1" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#818CF8" stopOpacity="0.1" />
          </linearGradient>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="1" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Orbit Rings */}
        <circle cx="0" cy="0" r="38" fill="none" stroke="#1E293B" strokeWidth="0.5" strokeDasharray="1.5 2" />
        <circle cx="0" cy="0" r="26" fill="none" stroke="#1E293B" strokeWidth="0.4" />

        {/* Connecting Lines to Nodes */}
        {NODES.map((node) => {
          const isSelected = activeNode?.id === node.id;
          return (
            <g key={`link-${node.id}`}>
              <line
                x1="0"
                y1="0"
                x2={node.x}
                y2={node.y}
                stroke={isSelected ? '#38BDF8' : 'rgba(56, 189, 248, 0.2)'}
                strokeWidth={isSelected ? '0.9' : '0.4'}
                strokeDasharray={isSelected ? 'none' : '1 1.5'}
                className="transition-all duration-300"
              />
              {/* Subtle animated data packet moving along selected or active paths */}
              {isSelected && (
                <circle cx={node.x * 0.5} cy={node.y * 0.5} r="1.2" fill="#38BDF8" filter="url(#glow)">
                  <animate
                    attributeName="cx"
                    values={`0; ${node.x}`}
                    dur="1.5s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="cy"
                    values={`0; ${node.y}`}
                    dur="1.5s"
                    repeatCount="indefinite"
                  />
                </circle>
              )}
            </g>
          );
        })}
      </svg>

      {/* Central AI Intelligence Hub */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center justify-center cursor-pointer group"
        onClick={() => setActiveNode(null)}
      >
        <div className="relative">
          <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 to-indigo-600 rounded-full blur-md opacity-70 group-hover:opacity-100 transition-opacity animate-pulse" />
          <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#0F172A] border-2 border-cyan-400/80 shadow-2xl shadow-cyan-500/30 flex flex-col items-center justify-center p-2 text-center transition-transform group-hover:scale-105">
            <Cpu className="w-6 h-6 sm:w-7 sm:h-7 text-cyan-300 mb-1 animate-spin" style={{ animationDuration: '20s' }} />
            <span className="text-[10px] sm:text-xs font-bold text-white tracking-wide font-mono">
              AI CORE
            </span>
            <span className="text-[8px] text-cyan-400 font-mono -mt-0.5">ORCHESTRATOR</span>
          </div>
        </div>
      </div>

      {/* Surrounding Connected Ecosystem Nodes */}
      {NODES.map((node) => {
        const IconComponent = node.icon;
        const isSelected = activeNode?.id === node.id;

        // Convert percentage (-50 to 50) to CSS percentage (0 to 100)
        const leftPercent = 50 + node.x;
        const topPercent = 50 + node.y;

        return (
          <div
            key={node.id}
            style={{
              left: `${leftPercent}%`,
              top: `${topPercent}%`,
              transform: 'translate(-50%, -50%)',
            }}
            className="absolute z-30 cursor-pointer"
            onClick={() => setActiveNode(node)}
            onMouseEnter={() => setActiveNode(node)}
          >
            <div
              className={`p-2 rounded-xl transition-all duration-200 flex items-center gap-1.5 ${
                isSelected
                  ? 'bg-slate-900 border-2 border-cyan-400 shadow-lg shadow-cyan-500/30 scale-110 z-40'
                  : 'bg-slate-900/90 border border-slate-700/80 hover:border-cyan-500/60 hover:bg-slate-800'
              }`}
            >
              <div className={`p-1.5 rounded-lg bg-gradient-to-br ${node.color} text-white shadow-sm`}>
                <IconComponent className="w-3.5 h-3.5" />
              </div>
              <span className="text-[11px] font-semibold text-slate-200 hidden sm:inline-block pr-1 whitespace-nowrap">
                {node.name}
              </span>
            </div>
          </div>
        );
      })}

      {/* Floating Interactive Node Inspector Pill */}
      {activeNode && (
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-40 w-[90%] sm:w-80 bg-slate-900/95 border border-cyan-500/40 rounded-xl p-2.5 shadow-xl backdrop-blur-md transition-all">
          <div className="flex items-center justify-between border-b border-slate-800 pb-1.5 mb-1.5">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span className="text-xs font-bold text-white font-sans">{activeNode.name}</span>
              <span className="text-[9px] px-1.5 py-0.5 rounded bg-cyan-950 text-cyan-300 font-mono border border-cyan-800/40">
                {activeNode.category}
              </span>
            </div>
            <div className="flex items-center gap-1 text-[10px] text-emerald-400 font-mono">
              <CheckCircle2 className="w-3 h-3" />
              <span>{activeNode.status}</span>
            </div>
          </div>
          <p className="text-[11px] text-slate-300 leading-snug">
            {activeNode.description}
          </p>
        </div>
      )}
    </div>
  );
};
