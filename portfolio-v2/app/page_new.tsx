"use client";

import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import HeroSection from "@/components/home/HeroSection";
import SkillsSection from "@/components/home/SkillsSection";
import ScrollIndicator from "@/components/home/ScrollIndicator";

const HomePage = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [skillsRef, skillsInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const scrollToSkills = () => {
    document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" });
  };

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-primary text-white overflow-hidden">
      <div ref={heroRef} className="relative">
        <HeroSection heroInView={heroInView} />
        <ScrollIndicator onClick={scrollToSkills} />
      </div>

      <div ref={skillsRef} id="skills">
        <SkillsSection skillsInView={skillsInView} />
      </div>
    </div>
  );
};

export default HomePage;
