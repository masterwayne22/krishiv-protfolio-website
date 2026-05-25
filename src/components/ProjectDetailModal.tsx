import React from "react";
import { X, ExternalLink, ShieldCheck, Cpu, Trophy, BookOpen } from "lucide-react";
import { ProjectItem } from "../types";

interface ProjectDetailModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export default function ProjectDetailModal({ project, onClose }: ProjectDetailModalProps) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="bg-gray-950 border border-zinc-800 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl animate-scale-up relative">
        
        {/* Simple Text Header */}
        <div className="p-6 sm:p-8 border-b border-zinc-900/60 flex items-start justify-between">
          <div>
            <div className="flex flex-wrap gap-1.5 animate-fade-in text-[10px]">
              {project.tags.map((tag, idx) => (
                <span key={idx} className="uppercase tracking-wider font-mono text-zinc-400 bg-zinc-900 py-1 px-2.5 rounded-md border border-zinc-900">
                  {tag}
                </span>
              ))}
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-zinc-100 mt-3">
              {project.title}
            </h2>
          </div>
          <button 
            onClick={onClose}
            className="bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-zinc-100 p-2.5 rounded-lg transition hover:bg-zinc-800 backdrop-blur cursor-pointer"
          >
            <X size={18} />
          </button>
        </div>

        {/* Core Content */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Description */}
          <div className="space-y-2">
            <h3 className="text-zinc-400 font-mono text-xs uppercase tracking-wider flex items-center gap-2">
              <BookOpen size={12} /> Project Overview
            </h3>
            <p className="text-zinc-300 text-sm leading-relaxed">
              {project.details?.overview || project.description}
            </p>
          </div>

          {/* Key Engineering Accomplishments */}
          {project.details?.keyFeatures && project.details.keyFeatures.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-zinc-400 font-mono text-xs uppercase tracking-wider flex items-center gap-2">
                <ShieldCheck size={12} className="text-emerald-500" /> Architectural Highlights
              </h3>
              <ul className="space-y-2.5">
                {project.details.keyFeatures.map((feat, i) => (
                  <li key={i} className="flex gap-2.5 text-xs text-zinc-300 leading-normal">
                    <span className="text-emerald-500 text-sm mt-[-1px] font-mono">✓</span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technical Specifications */}
          {project.details?.techDetails && (
            <div className="space-y-2 bg-zinc-900/40 border border-zinc-800/80 p-4 rounded-xl">
              <h3 className="text-zinc-400 font-mono text-[11px] uppercase tracking-wider flex items-center gap-2">
                <Cpu size={12} className="text-zinc-400" /> Infrastructure & Stack Details
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed font-mono">
                {project.details.techDetails}
              </p>
            </div>
          )}

          {/* Action Links */}
          <div className="pt-4 border-t border-zinc-800 flex flex-wrap gap-3 items-center justify-between">
            <span className="text-xs font-mono text-zinc-500">
              EST. VERSION: 1.0.4 • STABLE
            </span>
            <div className="flex gap-3">
              <button 
                onClick={onClose}
                className="px-4 py-2 border border-zinc-800 hover:border-zinc-700 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-zinc-100 rounded-lg text-xs font-medium transition cursor-pointer"
              >
                Close Spec Setup
              </button>
              {project.link && (
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="px-4 py-2 bg-zinc-100 hover:bg-zinc-200 text-zinc-950 rounded-lg text-xs font-medium flex items-center gap-1.5 transition cursor-pointer"
                >
                  Visit Live Release <ExternalLink size={12} />
                </a>
              )}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
