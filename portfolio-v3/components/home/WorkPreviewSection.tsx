"use client";

import { m } from "@/providers/MotionProvider";
import { useInView } from "react-intersection-observer";
import { projects } from "@/components/work/WorkData";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const featured = projects.filter((p) => p.featured).slice(0, 3);

export default function WorkPreviewSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="max-w-6xl mx-auto px-6 md:px-12 py-28 md:py-40">
      {/* Label */}
      <m.p
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-xs uppercase tracking-widest font-semibold text-[--color-accent] mb-4"
      >
        03 / Selected Work
      </m.p>

      <div className="flex items-end justify-between mb-16 flex-wrap gap-4">
        <m.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl md:text-5xl font-bold tracking-[-0.02em] text-[--color-text-primary]"
        >
          Projects built with the method
        </m.h2>

        <m.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-sm font-medium text-[--color-accent] hover:text-[--color-accent-light] transition-colors"
          >
            View all work
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </m.div>
      </div>

      {/* Cards */}
      <div className="flex flex-col gap-6">
        {featured.map((project, i) => (
          <m.div
            key={project.title}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="group bg-[--color-surface] shadow-card hover:shadow-card-hover rounded-[--radius-lg] p-8 transition-all duration-[250ms] hover:-translate-y-1.5"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-[--color-text-primary] tracking-[-0.02em] mb-3">
                  {project.title}
                </h3>
                <p className="text-[--color-text-secondary] leading-[1.7] mb-4 max-w-lg">
                  {project.architecturalNote}
                </p>

                {/* Challenge callout */}
                <div className="inline-flex items-start gap-2 bg-[--color-accent-dim] border border-[--color-border-accent] rounded-[--radius-md] px-4 py-3 mb-5">
                  <span className="text-xs uppercase tracking-widest font-semibold text-[--color-accent] mt-0.5 shrink-0">
                    Challenge
                  </span>
                  <p className="text-sm text-[--color-text-secondary] leading-relaxed">
                    {project.complexityCallout}
                  </p>
                </div>

                {/* Tech badges */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="tag"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="flex flex-wrap md:flex-col gap-2 md:items-end shrink-0">
                {project.links.live && (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-[--color-accent] hover:text-[--color-accent-light] transition-colors"
                  >
                    Live
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                )}
                {project.links.repo && (
                  <a
                    href={project.links.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-[--color-text-muted] hover:text-[--color-text-secondary] transition-colors"
                  >
                    Repo
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          </m.div>
        ))}
      </div>
    </section>
  );
}
