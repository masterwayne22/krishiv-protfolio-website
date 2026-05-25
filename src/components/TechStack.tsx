import React, { useState } from "react";
import { Sliders, Code2 } from "lucide-react";
import { LANGUAGES_DATA, FRAMEWORKS_DATA } from "../data";

export default function TechStack() {
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);

  const languageInsights: Record<string, string> = {
    "C++": "Advanced capability in optimizing critical algorithms. Experienced in competitive programming, memory management & low-overhead systems.",
    "TypeScript": "Expert-level type modeling and front-end state architectures. Daily driver for highly scaleable serverless environments.",
    "Python": "Leveraging packages like Pandas and NumPy for complex data calculations. Strong tooling script prototyping expertise.",
    "Java": "Structuring object-oriented microservices, design-patterns execution, and traditional enterprise logic structures."
  };

  return (
    <section id="tech-stack" className="max-w-7xl mx-auto px-6 py-20 border-t border-zinc-900/60 scroll-mt-12">
      
      {/* HEADER SECTION */}
      <div className="space-y-4 mb-16">
        <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase block">
          TECH STACK
        </span>
        <h2 className="font-sans text-2xl sm:text-4xl font-bold text-zinc-50 tracking-tight leading-tight max-w-2xl">
          Expertise across the modern stack.
        </h2>
      </div>

      {/* CORE TRACKS */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        
        {/* Left Column: Languages Grid */}
        <div className="space-y-6">
          <h3 className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase flex items-center gap-2">
            <Code2 size={12} /> LANGUAGES
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {LANGUAGES_DATA.map((lang) => (
              <div 
                key={lang.name}
                id={`lang-card-${lang.name.toLowerCase()}`}
                onClick={() => setSelectedLanguage(selectedLanguage === lang.name ? null : lang.name)}
                className={`border p-5 rounded-xl text-left cursor-pointer transition duration-300 ${
                  selectedLanguage === lang.name 
                    ? "bg-zinc-900/60 border-zinc-700" 
                    : "bg-[#030712] border-zinc-900 hover:border-zinc-805"
                }`}
              >
                <div className="flex items-start justify-between">
                  <h4 className="font-sans font-bold text-lg text-zinc-100">{lang.name}</h4>
                  <span className="text-[9px] font-mono text-zinc-500 bg-zinc-950 px-2 py-0.5 border border-zinc-900 rounded select-none">
                    {lang.level}
                  </span>
                </div>
                <span className="text-[10px] font-mono text-zinc-400 mt-2 block tracking-wider">
                  {lang.subText}
                </span>

                {selectedLanguage === lang.name && (
                  <p className="mt-4 text-xs text-zinc-400 font-sans leading-relaxed border-t border-zinc-900 pt-3 animate-fade-in">
                    {languageInsights[lang.name]}
                  </p>
                )}
              </div>
            ))}
          </div>
          <p className="text-[10px] font-mono text-zinc-500 italic">
            * Click a language block to expand specific capability summaries.
          </p>
        </div>

        {/* Right Column: Frameworks and Skills */}
        <div className="space-y-6">
          <h3 className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase flex items-center gap-2">
            <Sliders size={12} /> FRAMEWORKS & SKILLS
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {FRAMEWORKS_DATA.map((fw) => (
              <div 
                key={fw.name} 
                className="bg-[#030712] border border-zinc-900 p-5 rounded-xl text-left hover:border-zinc-800 transition duration-300 flex items-center gap-3 shadow-sm"
                id={`framework-${fw.name.toLowerCase().replace(/[^a-z0-9]/g, "")}`}
              >
                <div className="w-1.5 h-1.5 rounded-full bg-zinc-450"></div>
                <span className="font-sans font-semibold text-sm text-zinc-250">{fw.name}</span>
              </div>
            ))}
          </div>
        </div>

      </div>

    </section>
  );
}
