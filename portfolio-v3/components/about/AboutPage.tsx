import PageTransition from "@/components/PageTransition";
import AboutHero from "./AboutHero";
import ToolsSection from "./ToolsSection";
import ExperienceSection from "./ExperienceSection";

export default function AboutPage() {
  return (
    <PageTransition>
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-20 md:py-32">
        <AboutHero />
        <ToolsSection />
        <ExperienceSection />
      </div>
    </PageTransition>
  );
}
