"use client";

import { projects } from "@/components/work/WorkData";
import { ArrowUpRight } from "lucide-react";

const featured = projects.filter((p) => p.featured).slice(0, 3);

export default function WorkPreviewSection() {
  return (
    <>
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-[--color-text-muted]">
        03 — Selected Work
      </p>

      <hr className="border-none border-t border-white/10" />

      <div>
        <h2 className="text-[clamp(3rem,10vw,10rem)] font-black leading-[0.88] uppercase tracking-tight text-[--color-text-primary]">
          The method.<br />
          Applied.
        </h2>
      </div>

      <hr className="border-none border-t border-white/10" />

      <div className="flex flex-wrap gap-[3vw]">
        {featured.map((project) => (
          <div key={project.title} className="min-w-[220px] flex-1 flex flex-col gap-3">
            {project.businessOutcome && (
              <p className="text-xs font-semibold text-accent uppercase tracking-wider leading-relaxed">
                {project.businessOutcome}
              </p>
            )}
            <p className="text-sm font-bold text-[--color-text-primary] uppercase tracking-wider">
              {project.title}
            </p>
            <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed text-[--color-text-secondary] opacity-75">
              {project.architecturalNote}
            </p>
            <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
              {project.technologies.slice(0, 3).map((tech) => (
                <span key={tech} className="tag text-[10px]">{tech}</span>
              ))}
            </div>
            <div className="flex gap-4">
              {project.links.live && (
                <a href={project.links.live} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-medium text-accent hover:text-[--color-accent-light] transition-colors">
                  Live <ArrowUpRight className="w-3 h-3" />
                </a>
              )}
              {project.links.repo && (
                <a href={project.links.repo} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-medium text-[--color-text-muted] hover:text-[--color-text-secondary] transition-colors">
                  Repo <ArrowUpRight className="w-3 h-3" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      <hr className="border-none border-t border-white/10" />

    </>
  );
}
