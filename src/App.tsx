/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
import Certifications from "./components/Certifications";
import Footer from "./components/Footer";
import ContactModal from "./components/ContactModal";
import ProjectDetailModal from "./components/ProjectDetailModal";
import { ProjectItem } from "./types";

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <div className="min-h-screen bg-[#030712] text-zinc-100 flex flex-col justify-between selection:bg-zinc-100 selection:text-zinc-950 font-sans antialiased overflow-x-hidden relative">
      
      {/* Universal Grid Layout Accent Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#111827_1px,transparent_1px),linear-gradient(to_bottom,#111827_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-[0.12] pointer-events-none -z-20"></div>

      <div className="flex-1">
        
        {/* Navigation Header */}
        <Header onContactClick={() => setIsContactOpen(true)} />

        {/* Hero Section */}
        <Hero onContactClick={() => setIsContactOpen(true)} />

        {/* Experience Split Section */}
        <Experience />

        {/* Selected Projects Grid */}
        <Projects onProjectSelect={(proj) => setSelectedProject(proj)} />

        {/* Expertise Tech Stack Grid */}
        <TechStack />

        {/* Verification and Certifications List */}
        <Certifications />

      </div>

      {/* Footer Branding Area */}
      <Footer onContactClick={() => setIsContactOpen(true)} />

      {/* Interactive Floating Layers */}
      <ContactModal 
        isOpen={isContactOpen} 
        onClose={() => setIsContactOpen(false)} 
      />

      <ProjectDetailModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />

    </div>
  );
}
