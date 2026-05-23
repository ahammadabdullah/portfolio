import FlowArt, { FlowSection } from "@/components/ui/story-scroll";
import HeroSection from "./HeroSection";
import ProblemSection from "./ProblemSection";
import ApproachSection from "./ApproachSection";
import WorkPreviewSection from "./WorkPreviewSection";
import CredibilitySection from "./CredibilitySection";
import CtaSection from "./CtaSection";
import AboutContactSection from "./AboutContactSection";

export default function HomePage() {
  return (
    <FlowArt aria-label="Ahammad Abdullah — Portfolio">
      {/* 01 — Near black */}
      <FlowSection
        aria-label="Hero"
        className="grain glow-hero"
        style={{ backgroundColor: "#080808", color: "#EDEDEF" }}
      >
        <HeroSection />
      </FlowSection>

      {/* 02 — Dark blood red: slop = danger */}
      <FlowSection
        aria-label="The Problem"
        style={{ backgroundColor: "#1a0808", color: "#EDEDEF" }}
      >
        <ProblemSection />
      </FlowSection>

      {/* 03 — Dark indigo: precision, method */}
      <FlowSection
        aria-label="The Method"
        style={{ backgroundColor: "#08081a", color: "#EDEDEF" }}
      >
        <ApproachSection />
      </FlowSection>

      {/* 04 — Near black */}
      <FlowSection
        aria-label="Selected Work"
        style={{ backgroundColor: "#080808", color: "#EDEDEF" }}
      >
        <WorkPreviewSection />
      </FlowSection>

      {/* 05 — Dark forest: proof, growth */}
      <FlowSection
        aria-label="Credibility"
        style={{ backgroundColor: "#081a0f", color: "#EDEDEF" }}
      >
        <CredibilitySection />
      </FlowSection>

      {/* 06 — Violet: brand accent */}
      <FlowSection
        aria-label="CTA"
        className="grain"
        style={{ backgroundColor: "#7C3AED", color: "#fff" }}
      >
        <CtaSection />
      </FlowSection>

      {/* 07 — Near black */}
      <FlowSection
        id="about"
        aria-label="About and Contact"
        style={{ backgroundColor: "#080808", color: "#EDEDEF" }}
      >
        <AboutContactSection />
      </FlowSection>
    </FlowArt>
  );
}
