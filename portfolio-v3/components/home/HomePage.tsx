import HeroSection from "./HeroSection";
import ProblemSection from "./ProblemSection";
import ApproachSection from "./ApproachSection";
import WorkPreviewSection from "./WorkPreviewSection";
import CredibilitySection from "./CredibilitySection";
import CtaSection from "./CtaSection";

export default function HomePage() {
  return (
    <div className="bg-[--color-base]">
      <HeroSection />
      <ProblemSection />
      <ApproachSection />
      <WorkPreviewSection />
      <CredibilitySection />
      <CtaSection />
    </div>
  );
}
