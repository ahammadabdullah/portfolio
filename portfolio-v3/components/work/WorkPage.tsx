"use client";

import { m } from "@/providers/MotionProvider";
import { projects } from "./WorkData";
import WorkCard from "./WorkCard";
import PageTransition from "@/components/PageTransition";

const featured = projects.filter((p) => p.featured);
const rest = projects.filter((p) => !p.featured);

export default function WorkPage() {
  return (
    <PageTransition>
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-20 md:py-32">
        {/* Header */}
        <m.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20"
        >
          <p className="text-xs uppercase tracking-widest font-semibold text-[--color-accent] mb-4">
            Work
          </p>
          <h1 className="text-5xl md:text-7xl font-black tracking-[-0.04em] text-[--color-text-primary] mb-6">
            Selected Projects
          </h1>
          <p className="text-lg text-[--color-text-secondary] leading-[1.7] max-w-xl">
            Built with Next.js, TypeScript, and a strong opinion about maintainability. Every project below involved decisions AI couldn&apos;t make on its own.
          </p>
        </m.div>

        {/* Featured */}
        <div className="flex flex-col gap-6 mb-16">
          {featured.map((project, i) => (
            <WorkCard key={project.title} project={project} index={i} />
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-[--color-border-subtle] mb-12" />

        <p className="text-xs uppercase tracking-widest font-semibold text-[--color-text-muted] mb-8">
          Other projects
        </p>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-5">
          {rest.map((project, i) => (
            <WorkCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </PageTransition>
  );
}
