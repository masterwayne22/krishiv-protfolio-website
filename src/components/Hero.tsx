import React from "react";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";

interface HeroProps {
  onContactClick: () => void;
}

export default function Hero({ onContactClick }: HeroProps) {
  return (
    <section className="relative px-6 pt-24 pb-20 flex flex-col items-center text-center max-w-4xl mx-auto">
      
      {/* Decorative Subtle Grid Glow */}
      <div className="absolute inset-0 top-[-60px] flex items-center justify-center -z-10 pointer-events-none opacity-25">
        <div className="w-[450px] h-[450px] rounded-full bg-gradient-to-r from-teal-500/10 to-indigo-500/10 blur-[80px]"></div>
      </div>

      {/* LOOKING FOR OPPORTUNITIES Pill */}
      <div 
        className="flex items-center gap-2 px-3.5 py-1.5 bg-zinc-950 border border-zinc-900 rounded-full text-[10px] tracking-widest font-mono text-zinc-400 uppercase select-none mb-10 shadow-lg"
        id="hero-badge"
      >
        <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse-glow"></span>
        LOOKING FOR OPPORTUNITIES
      </div>

      {/* Main Name Heading */}
      <h1 
        className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-8"
        id="hero-title"
      >
        Krishiv Sarva
      </h1>

      {/* Biography Description */}
      <p 
        className="text-sm sm:text-base leading-relaxed text-zinc-400 font-sans font-light max-w-2xl mb-12"
        id="hero-desc"
      >
        A developer focused on building high-performance, unified developer identity tools and premium web experiences that bridge the gap between design and engineering.
      </p>

      {/* Action Links */}
      <div className="flex flex-wrap items-center justify-center gap-8 text-[11px] font-mono tracking-wider text-zinc-400">
        
        <a 
          href="https://github.com/masterwayne22" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-white transition duration-300 group cursor-pointer"
          id="hero-link-github"
        >
          <Github size={13} className="text-zinc-500 group-hover:text-white transition-colors" />
          <span>GITHUB</span>
          <ArrowUpRight size={10} className="text-zinc-600 opacity-0 group-hover:opacity-100 transition-opacity" />
        </a>

        <a 
          href="https://www.linkedin.com/in/krishiv-sarva-a61101347" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-white transition duration-300 group cursor-pointer"
          id="hero-link-linkedin"
        >
          <Linkedin size={13} className="text-zinc-500 group-hover:text-white transition-colors" />
          <span>LINKEDIN</span>
          <ArrowUpRight size={10} className="text-zinc-600 opacity-0 group-hover:opacity-100 transition-opacity" />
        </a>

        <a 
          href="mailto:krishiv180@gmail.com"
          className="flex items-center gap-2 hover:text-white transition duration-300 group cursor-pointer"
          id="hero-link-email"
        >
          <Mail size={13} className="text-zinc-500 group-hover:text-white transition-colors animate-bounce-slow" />
          <span>EMAIL</span>
          <ArrowUpRight size={10} className="text-zinc-600 opacity-0 group-hover:opacity-100 transition-opacity" />
        </a>

      </div>

    </section>
  );
}
