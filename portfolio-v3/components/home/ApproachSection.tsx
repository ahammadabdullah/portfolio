"use client";

import { m } from "@/providers/MotionProvider";
import { useInView } from "react-intersection-observer";

const steps = [
  {
    number: "01",
    label: "Generate",
    body: "I prompt AI tools to produce first drafts — fast. Architecture decisions, tech stack, API shape. Speed without skipping thinking.",
  },
  {
    number: "02",
    label: "Judge",
    body: "Every output goes through a mental review: Does this type? Does this compose? Does this scale? If no — rewrite. If yes — refine.",
  },
  {
    number: "03",
    label: "Architect",
    body: "The pieces get assembled into a coherent system. Consistent patterns. Documented decisions. Code a human can maintain two years from now.",
  },
];

export default function ApproachSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section ref={ref} className="max-w-6xl mx-auto px-6 md:px-12 py-28 md:py-40">
      {/* Label */}
      <m.p
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-xs uppercase tracking-widest font-semibold text-[--color-accent] mb-4"
      >
        02 / The Method
      </m.p>

      {/* Heading */}
      <m.h2
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="text-4xl md:text-5xl font-bold tracking-[-0.02em] text-[--color-text-primary] mb-16 max-w-2xl"
      >
        The judgment layer AI can&apos;t provide
      </m.h2>

      {/* Steps */}
      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((step, i) => (
          <m.div
            key={step.number}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-4"
          >
            <div className="flex items-baseline gap-4">
              <span className="text-5xl font-black text-[--color-border-default] leading-none select-none">
                {step.number}
              </span>
              <h3 className="text-xl font-bold text-[--color-text-primary] tracking-[-0.02em]">
                {step.label}
              </h3>
            </div>
            <div className="w-12 h-px bg-[--color-accent]" />
            <p className="text-[--color-text-secondary] leading-[1.7]">{step.body}</p>
          </m.div>
        ))}
      </div>

      {/* Supporting line */}
      <m.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="mt-16 text-[--color-text-muted] text-sm"
      >
        Applied across 10+ projects — insurance platforms, SaaS tools, Electron apps, AI boilerplates.
      </m.p>
    </section>
  );
}
