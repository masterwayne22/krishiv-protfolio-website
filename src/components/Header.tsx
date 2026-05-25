import React from "react";
import { Terminal } from "lucide-react";

interface HeaderProps {
  onContactClick: () => void;
}

export default function Header({ onContactClick }: HeaderProps) {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#030712]/80 backdrop-blur-md border-b border-zinc-900/60 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Left Brand Area */}
        <div 
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} 
          className="flex items-center gap-2.5 cursor-pointer group"
          id="nav-logo"
        >
          <div className="w-6 h-6 rounded bg-zinc-900 border border-zinc-800 flex items-center justify-center font-mono text-[10px] text-zinc-100 font-bold group-hover:border-zinc-500 transition-colors">
            KS
          </div>
          <span className="font-display font-medium text-xs tracking-[0.2em] text-zinc-100 uppercase group-hover:text-zinc-300 transition-colors">
            KRISHIV
          </span>
        </div>

        {/* Center Navigation Links (Hidden on small screens) */}
        <nav className="hidden md:flex items-center gap-8">
          <button 
            id="nav-exp"
            onClick={() => scrollToSection("experience")} 
            className="text-[11px] font-mono tracking-wider text-zinc-400 hover:text-zinc-100 transition cursor-pointer"
          >
            EXPERIENCE
          </button>
          <button 
            id="nav-proj"
            onClick={() => scrollToSection("projects")} 
            className="text-[11px] font-mono tracking-wider text-zinc-400 hover:text-zinc-100 transition cursor-pointer"
          >
            PROJECTS
          </button>
          <button 
            id="nav-tech"
            onClick={() => scrollToSection("tech-stack")} 
            className="text-[11px] font-mono tracking-wider text-zinc-400 hover:text-zinc-100 transition cursor-pointer"
          >
            TECH STACK
          </button>
          <button 
            id="nav-certs"
            onClick={() => scrollToSection("certifications")} 
            className="text-[11px] font-mono tracking-wider text-zinc-400 hover:text-zinc-100 transition cursor-pointer"
          >
            CERTS
          </button>
        </nav>

        {/* Right Contact CTA Button */}
        <div>
          <button 
            id="nav-contact"
            onClick={onContactClick}
            className="text-xs font-mono font-medium tracking-wide text-zinc-100 hover:text-zinc-950 border border-zinc-800 hover:bg-zinc-100 hover:border-zinc-100 px-5 py-2 rounded-md transition duration-300 shadow-sm cursor-pointer"
          >
            CONTACT
          </button>
        </div>

      </div>
    </header>
  );
}
