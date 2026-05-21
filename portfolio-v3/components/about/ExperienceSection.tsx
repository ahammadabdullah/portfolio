"use client";

import { m } from "@/providers/MotionProvider";
import { useInView } from "react-intersection-observer";
import { experienceData, skillsData } from "./AboutData";

export default function ExperienceSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section ref={ref} className="mb-24">
      {/* Experience */}
      <m.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.02em] text-[--color-text-primary] mb-8">
          Experience
        </h2>

        {experienceData.map((exp, i) => (
          <m.div
            key={exp.company}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="bg-[--color-surface] border border-[--color-border-default] rounded-[--radius-lg] p-8"
          >
            <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
              <div>
                <h3 className="text-xl font-bold text-[--color-text-primary]">{exp.title}</h3>
                <p className="text-[--color-accent] font-medium">{exp.company}</p>
              </div>
              <span className="text-sm text-[--color-text-muted] font-mono">{exp.duration}</span>
            </div>

            <ul className="flex flex-col gap-2 mb-6">
              {exp.outcomes.map((outcome) => (
                <li key={outcome} className="flex items-start gap-2 text-sm text-[--color-text-secondary] leading-[1.7]">
                  <span className="text-[--color-accent] mt-1 shrink-0">→</span>
                  {outcome}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2">
              {exp.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-medium px-3 py-1 rounded-full bg-[--color-elevated] text-[--color-text-muted] border border-[--color-border-subtle]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </m.div>
        ))}
      </m.div>

      {/* Skills tag cloud */}
      <m.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.02em] text-[--color-text-primary] mb-8">
          Skills
        </h2>

        {(Object.entries(skillsData) as [string, string[]][]).map(([category, skills]) => (
          <div key={category} className="mb-6">
            <p className="text-xs uppercase tracking-widest font-semibold text-[--color-text-muted] mb-3">
              {category}
            </p>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="text-sm font-medium px-4 py-1.5 rounded-full bg-[--color-surface] text-[--color-text-secondary] border border-[--color-border-default] hover:border-[--color-accent] hover:text-[--color-accent] transition-colors duration-150"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </m.div>
    </section>
  );
}
