"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import EducationAndCerts from "@/components/EducationAndCerts";
import OwnerDashboard from "@/components/OwnerDashboard";
import Footer from "@/components/Footer";
import LoginModal from "@/components/LoginModal";

interface MainViewProps {
  initialIsOwner: boolean;
}

export default function MainView({ initialIsOwner }: MainViewProps) {
  const [isOwner, setIsOwner] = useState(initialIsOwner);
  const [loginModalOpen, setLoginModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen flex flex-col bg-[#090d16] text-slate-100 selection:bg-cyan-500/20 selection:text-cyan-300">
      <Navbar
        isOwner={isOwner}
        onOpenLogin={() => setLoginModalOpen(true)}
      />

      <main className="flex-1">
        <Hero />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <EducationAndCerts />

        {/* Exclusive Owner-Only Dashboard */}
        {isOwner && (
          <OwnerDashboard onLogout={() => setIsOwner(false)} />
        )}
      </main>

      <Footer
        isOwner={isOwner}
        onOpenLogin={() => setLoginModalOpen(true)}
      />

      <LoginModal
        isOpen={loginModalOpen}
        onClose={() => setLoginModalOpen(false)}
        onSuccess={() => setIsOwner(true)}
      />
    </div>
  );
}
