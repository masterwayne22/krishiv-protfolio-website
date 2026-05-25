import React from "react";
import { ExternalLink, Layers } from "lucide-react";
import { PROJECTS_DATA } from "../data";
import { ProjectItem } from "../types";

interface ProjectsProps {
  onProjectSelect: (project: ProjectItem) => void;
}

export default function Projects({ onProjectSelect }: ProjectsProps) {
  return (
    <section id="projects" className="max-w-7xl mx-auto px-6 py-20 border-t border-zinc-900/60 scroll-mt-12">
      
      {/* SECTION HEADER */}
      <div className="space-y-4 mb-16">
        <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase block">
          SELECTED WORKS
        </span>
        <h2 className="font-sans text-2xl sm:text-4xl font-bold text-zinc-50 tracking-tight leading-tight max-w-2xl">
          Building digital tools with intent, precision, and performance.
        </h2>
      </div>

      {/* WORKS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
        
        {PROJECTS_DATA.map((project) => (
          <div 
            key={project.id}
            id={`project-card-${project.id}`}
            onClick={() => onProjectSelect(project)}
            className="group block bg-[#030712] border border-zinc-900 overflow-hidden rounded-xl hover:border-zinc-800 transition duration-300 shadow-md cursor-pointer flex flex-col justify-between"
          >
            {/* Typography Content */}
            <div className="p-6 sm:p-8 space-y-5 flex-1 flex flex-col justify-between h-full">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-zinc-100 group-hover:text-white transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-[10px] font-mono text-zinc-400 group-hover:text-zinc-200 transition-colors border border-zinc-800 px-2.5 py-1 rounded bg-zinc-950">
                    SPECS
                  </span>
                </div>

                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed font-sans font-light">
                  {project.description}
                </p>
              </div>

              <div className="flex items-center justify-between pt-5 border-t border-zinc-900/60 mt-4">
                {/* Tag Badges */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span 
                      key={idx}
                      className="px-2.5 py-1 bg-zinc-950 border border-zinc-900 rounded-md font-mono text-[10px] text-zinc-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="text-[10px] font-mono tracking-wider font-semibold text-zinc-400 group-hover:text-white transition-colors flex items-center gap-1.5">
                  VIEW FULL SPECS <Layers size={12} className="text-zinc-500 group-hover:text-white" />
                </span>
              </div>
            </div>

          </div>
        ))}

      </div>

    </section>
  );
}
