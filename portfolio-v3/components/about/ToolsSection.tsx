"use client";

import { m } from "@/providers/MotionProvider";
import { useInView } from "react-intersection-observer";
import { aiToolsData } from "./AboutData";

export default function ToolsSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section ref={ref} className="mb-24">
      <m.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="mb-10"
      >
        <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.02em] text-[--color-text-primary] mb-3">
          How I use AI tools
        </h2>
        <p className="text-[--color-text-secondary] leading-[1.7] max-w-xl">
          I use AI daily — but I review everything before it ships. Here&apos;s how each tool fits into my workflow and where I don&apos;t trust it.
        </p>
      </m.div>

      <div className="flex flex-col gap-4">
        {aiToolsData.map((tool, i) => (
          <m.div
            key={tool.name}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="bg-[--color-surface] border border-[--color-border-default] rounded-[--radius-lg] p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs uppercase tracking-widest font-semibold px-3 py-1 rounded-full bg-[--color-accent-dim] text-[--color-accent] border border-[--color-accent]/20">
                {tool.name}
              </span>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-xs uppercase tracking-widest font-semibold text-[--color-clean-green] mb-2">
                  How I use it
                </p>
                <p className="text-sm text-[--color-text-secondary] leading-[1.7]">
                  {tool.use}
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest font-semibold text-[--color-slop-red] mb-2">
                  Where I don&apos;t trust it
                </p>
                <p className="text-sm text-[--color-text-secondary] leading-[1.7]">
                  {tool.limitation}
                </p>
              </div>
            </div>
          </m.div>
        ))}
      </div>
    </section>
  );
}
