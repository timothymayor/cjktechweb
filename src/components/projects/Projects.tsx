import React, { useState } from 'react';
import { ArrowRight, Layers, Briefcase, CheckCircle2, ChevronRight } from 'lucide-react';
import { caseStudies } from '../../data/projects';
import { CaseStudy } from '../../types';
import { ProjectModal } from './ProjectModal';

interface ProjectsProps {
  onPreSelectProject: (projectName: string) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onPreSelectProject }) => {
  const [selectedProject, setSelectedProject] = useState<CaseStudy | null>(null);

  const handleDiscuss = (projectTitle: string) => {
    setSelectedProject(null);
    onPreSelectProject(`Case Study: ${projectTitle}`);
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="projects" className="py-20 lg:py-28 relative bg-[#090D16] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-slate-800/80">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950/60 border border-cyan-800/40 text-cyan-400 text-xs font-mono font-medium">
              <span>PROVEN ARCHITECTURES & CASE STUDIES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-sans">
              Selected AI Automation <br />
              <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                Projects & Architectures
              </span>
            </h2>
          </div>
          <div className="max-w-sm space-y-1">
            <p className="text-xs sm:text-sm text-slate-400">
              Representative production architectures showing how custom agents resolve specific domain bottlenecks.
            </p>
            <span className="inline-block text-[11px] font-mono text-amber-400/90">
              * Clearly marked as illustrative case studies
            </span>
          </div>
        </div>

        {/* 6 Case Studies Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudies.map((project, idx) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-900 transition-all duration-200 hover:-translate-y-1 cursor-pointer group flex flex-col justify-between shadow-lg shadow-black/20"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedProject(project);
                }
              }}
              aria-label={`View case study: ${project.title}`}
            >
              <div className="space-y-4">
                {/* Header Tag & Industry */}
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-slate-950 text-cyan-400 border border-slate-800">
                    PROJECT 0{idx + 1}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-950/40 text-amber-300 border border-amber-800/40">
                    Illustrative Case Study
                  </span>
                </div>

                <div>
                  <span className="text-xs text-slate-400 font-mono block">
                    {project.industry}
                  </span>
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors mt-0.5">
                    {project.title}
                  </h3>
                </div>

                {/* Challenge & Solution snippets */}
                <div className="space-y-2.5 pt-2 border-t border-slate-800/80">
                  <div className="text-xs text-slate-300">
                    <strong className="text-rose-400 font-semibold">Challenge: </strong>
                    <span className="line-clamp-2">{project.challenge}</span>
                  </div>
                  <div className="text-xs text-slate-300">
                    <strong className="text-cyan-400 font-semibold">Solution: </strong>
                    <span className="line-clamp-2">{project.solution}</span>
                  </div>
                </div>

                {/* Key Outcome */}
                <div className="p-2.5 rounded-xl bg-slate-950/60 border border-slate-800/80 flex items-start gap-2 text-xs text-emerald-300">
                  <CheckCircle2 className="w-3.5 h-3.5 mt-0.5 text-emerald-400 flex-shrink-0" />
                  <span className="line-clamp-2 leading-relaxed">{project.outcome}</span>
                </div>
              </div>

              {/* Card Footer Action */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-cyan-400 group-hover:text-cyan-300">
                <span>View Full Architecture & ROI</span>
                <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Case Study Dialog Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onDiscuss={handleDiscuss}
      />
    </section>
  );
};
