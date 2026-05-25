import React from "react";
import { Award, ChevronDown } from "lucide-react";
import { CERTIFICATIONS_DATA } from "../data";

export default function Certifications() {
  return (
    <section id="certifications" className="max-w-7xl mx-auto px-6 py-20 border-t border-zinc-900/60 scroll-mt-12 text-center flex flex-col items-center">
      
      {/* SECTION HEADER */}
      <div className="space-y-4 mb-16 text-left w-full">
        <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase block">
          VERIFICATION & CERTIFICATIONS
        </span>
      </div>

      {/* CERTIFICATIONS DOUBLE CONTAINER */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full text-left mb-20" id="certs-grid">
        {CERTIFICATIONS_DATA.map((cert) => (
          <div 
            key={cert.id}
            id={`cert-item-${cert.id}`}
            className="flex items-center justify-between p-5 bg-[#030712] border border-zinc-900 rounded-xl hover:border-zinc-800 transition duration-350 shadow-sm group"
          >
            <div className="flex items-center gap-4">
              <div className="p-2 bg-zinc-950 border border-zinc-900 text-zinc-500 group-hover:text-zinc-200 transition-colors rounded-lg">
                <Award size={16} />
              </div>
              <div className="min-w-0">
                <h4 className="font-sans font-semibold text-xs sm:text-[13px] text-zinc-100 uppercase tracking-wide group-hover:text-white transition-colors truncate">
                  {cert.title}
                </h4>
                <p className="text-[10px] font-mono text-zinc-400 mt-1 uppercase tracking-wider">
                  {cert.issuer}
                </p>
              </div>
            </div>

            {/* Glowing Badges */}
            <span 
              className={`text-[9px] font-mono uppercase tracking-wider py-1 px-3 border rounded-full whitespace-nowrap select-none ${
                cert.badgeText.includes("Gold") 
                  ? "bg-amber-970/10 border-amber-800 text-amber-500 shadow-[0_0_12px_-5px_rgba(245,158,11,0.2)]" 
                  : cert.badgeText.includes("Elite")
                  ? "bg-emerald-970/10 border-emerald-800 text-emerald-500 shadow-[0_0_12px_-5px_rgba(16,185,129,0.2)]"
                  : cert.badgeText.includes("Verified")
                  ? "bg-sky-970/10 border-sky-800 text-sky-450 shadow-[0_0_12px_-5px_rgba(14,165,233,0.2)]"
                  : "bg-purple-970/10 border-purple-850 text-purple-400 shadow-[0_0_12px_-5px_rgba(168,85,247,0.2)]"
              }`}
            >
              {cert.badgeText}
            </span>

          </div>
        ))}
      </div>

      {/* Elegant Footer Scoll Beacon */}
      <div className="p-2 bg-zinc-950 border border-zinc-900 rounded-full text-zinc-500 animate-bounce cursor-pointer hover:text-zinc-300 transition-colors mt-4">
        <ChevronDown size={16} onClick={() => {
          const footer = document.getElementById("footer-block");
          if (footer) footer.scrollIntoView({ behavior: "smooth" });
        }} />
      </div>

    </section>
  );
}
