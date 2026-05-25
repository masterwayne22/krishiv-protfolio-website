import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

interface FooterProps {
  onContactClick: () => void;
}

export default function Footer({ onContactClick }: FooterProps) {
  return (
    <footer id="footer-block" className="border-t border-zinc-900/60 bg-[#02050e] py-10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Side Logo */}
        <div className="flex items-center gap-2.5">
          <div className="w-5 h-5 rounded bg-zinc-900 border border-zinc-800 flex items-center justify-center font-mono text-[9px] text-zinc-100 font-bold select-none">
            KS
          </div>
          <span className="font-display font-bold text-xs tracking-[0.2em] text-white uppercase select-none">
            KRISHIV SARVA
          </span>
        </div>



        {/* Right Side Social links */}
        <div className="flex items-center gap-8 text-[11px] font-mono tracking-wider text-zinc-400">
          <a 
            href="https://github.com/masterwayne22" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-white transition duration-300"
            id="footer-github"
          >
            GITHUB
          </a>
          <a 
            href="https://www.linkedin.com/in/krishiv-sarva-a61101347" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-white transition duration-300"
            id="footer-linkedin"
          >
            LINKEDIN
          </a>
          <a 
            href="mailto:krishiv180@gmail.com" 
            className="hover:text-white transition duration-300 cursor-pointer"
            id="footer-email"
          >
            EMAIL
          </a>
        </div>

      </div>
    </footer>
  );
}
