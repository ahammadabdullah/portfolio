"use client";

import { m } from "@/providers/MotionProvider";
import { type Project } from "./WorkData";
import { getLinkIcon, getLinkLabel } from "./WorkUtils";

export default function WorkCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <m.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className={`group bg-[--color-surface] shadow-card hover:shadow-card-hover rounded-[--radius-lg] transition-all duration-[250ms] hover:-translate-y-1.5 overflow-hidden ${
        project.featured ? "p-8" : "p-6"
      }`}
    >
      <div className={`flex flex-col gap-5 ${project.featured ? "md:flex-row md:gap-10" : ""}`}>
        <div className="flex-1">
          <div className="flex items-start justify-between gap-4 mb-3">
            <h3
              className={`font-bold text-[--color-text-primary] tracking-[-0.02em] ${
                project.featured ? "text-2xl" : "text-lg"
              }`}
            >
              {project.title}
            </h3>
            {project.featured && (
              <span className="shrink-0 text-xs uppercase tracking-widest font-semibold px-3 py-1 rounded-full bg-[--color-accent-dim] text-[--color-accent] border border-[--color-accent]/20">
                Featured
              </span>
            )}
          </div>

          <p className="text-[--color-text-secondary] leading-[1.7] mb-4 text-sm md:text-base">
            {project.architecturalNote}
          </p>

          {/* Complexity callout — featured only */}
          {project.featured && (
            <div className="flex items-start gap-2 bg-[--color-accent-dim] border border-[--color-border-accent] rounded-[--radius-md] px-4 py-3 mb-5">
              <span className="text-xs uppercase tracking-widest font-semibold text-[--color-accent] mt-0.5 shrink-0">
                Challenge
              </span>
              <p className="text-sm text-[--color-text-secondary] leading-relaxed">
                {project.complexityCallout}
              </p>
            </div>
          )}

          {/* Tech badges */}
          <div className="flex flex-wrap gap-2 mb-5">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="text-xs font-medium px-3 py-1 rounded-full bg-[--color-elevated] text-[--color-text-muted] border border-[--color-border-subtle]"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-3">
            {Object.entries(project.links).map(([key, url]) => {
              const Icon = getLinkIcon(key);
              return (
                <a
                  key={key}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-[--color-accent] hover:text-[--color-accent-light] transition-colors"
                >
                  <Icon className="w-3.5 h-3.5" />
                  {getLinkLabel(key)}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </m.article>
  );
}
