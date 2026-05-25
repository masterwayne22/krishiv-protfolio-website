import React from "react";
import { GraduationCap, Briefcase, Tag } from "lucide-react";
import { EDUCATION_DATA, EXPERIENCE_DATA } from "../data";

export default function Experience() {
  return (
    <section id="experience" className="max-w-7xl mx-auto px-6 py-20 border-t border-zinc-900/60ScrollOffset">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        
        {/* Left Column: Education */}
        <div className="lg:col-span-4 space-y-10" id="education-section">
          
          <div className="space-y-6">
            <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase block">
              EDUCATION
            </span>
            
            {/* Degree Card */}
            <div className="bg-[#030712] border border-zinc-900/80 p-6 rounded-xl hover:border-zinc-800 transition duration-300 space-y-4 shadow-md">
              <div className="flex items-start gap-4">
                <div className="p-2 sm:p-2.5 bg-zinc-900 border border-zinc-800 rounded-lg text-zinc-400">
                  <GraduationCap size={18} />
                </div>
                <div>
                  <h4 className="font-sans font-semibold text-[15px] text-zinc-100">
                    {EDUCATION_DATA.university}
                  </h4>
                  <p className="text-xs text-zinc-400 mt-1">
                    {EDUCATION_DATA.degree}
                  </p>
                </div>
              </div>
              <p className="text-[11px] font-mono text-zinc-500">
                {EDUCATION_DATA.period}
              </p>
            </div>
          </div>

          {/* Relevant Coursework */}
          <div className="space-y-4">
            <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase block">
              RELEVANT COURSEWORK
            </span>
            <div className="flex flex-wrap gap-2">
              {EDUCATION_DATA.coursework.map((course, idx) => (
                <div 
                  key={idx}
                  className="px-3 py-1.5 bg-zinc-950 border border-zinc-900 text-[10px] font-mono text-zinc-400 rounded-md tracking-wider uppercase hover:border-zinc-700 hover:text-zinc-200 transition"
                  id={`course-${idx}`}
                >
                  {course}
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Right Column: Professional Experience Timeline */}
        <div className="lg:col-span-8 space-y-6" id="work-experience-section">
          
          <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase block">
            PROFESSIONAL EXPERIENCE
          </span>

          <div className="relative border-l border-zinc-900 pl-6 sm:pl-8 space-y-12">
            
            {EXPERIENCE_DATA.map((exp, index) => (
              <div key={exp.id} className="relative group" id={`exp-item-${exp.id}`}>
                
                {/* Timeline connector dot */}
                <div className="absolute left-[-31px] sm:left-[-39px] top-1.5 w-2 h-2 rounded-full bg-zinc-800 border-2 border-zinc-950 group-hover:bg-zinc-100 group-hover:border-zinc-100 transition-all duration-300"></div>

                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-2">
                  <div>
                    <h4 className="font-sans font-bold text-zinc-100 text-base sm:text-lg group-hover:text-zinc-50 transition-colors">
                      {exp.company}
                    </h4>
                    <p className="text-[11px] font-mono text-zinc-400 tracking-wider uppercase mt-1">
                      {exp.role}
                    </p>
                  </div>
                  <span className="text-[11px] font-mono text-zinc-500 whitespace-nowrap pt-1 sm:pt-0">
                    {exp.period}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-3xl">
                  {exp.description}
                </p>

              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}
