"use client";

import { m, useMotionValue, useSpring } from "@/providers/MotionProvider";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

function CountUp({
  to,
  suffix = "",
  inView,
  delay = 0,
}: {
  to: number;
  suffix?: string;
  inView: boolean;
  delay?: number;
}) {
  const raw = useMotionValue(0);
  const spring = useSpring(raw, { stiffness: 60, damping: 20 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const unsubscribe = spring.on("change", (v) => setDisplay(Math.round(v)));
    return unsubscribe;
  }, [spring]);

  useEffect(() => {
    if (inView) {
      const timeout = setTimeout(() => raw.set(to), delay * 1000);
      return () => clearTimeout(timeout);
    }
  }, [inView, to, delay, raw]);

  return (
    <span>
      {display}
      {suffix}
    </span>
  );
}

const stats = [
  { value: 10, suffix: "+", label: "Projects built" },
  { value: 1, suffix: ".5+ yrs", label: "Experience" },
  { value: 3, suffix: "", label: "Active SaaS products" },
];

export default function CredibilitySection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section
      ref={ref}
      className="bg-[--color-surface] border-y border-[--color-border-default]"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-20">
        {/* Label */}
        <m.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="text-xs uppercase tracking-widest font-semibold text-[--color-accent] mb-12"
        >
          04 / By the numbers
        </m.p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {stats.map((stat, i) => (
            <m.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="flex flex-col gap-2"
            >
              <p className="text-5xl font-black text-[--color-text-primary] tracking-[-0.03em]">
                <CountUp to={stat.value} suffix={stat.suffix} inView={inView} delay={i * 0.1} />
              </p>
              <p className="text-sm text-[--color-text-muted]">{stat.label}</p>
            </m.div>
          ))}

          {/* AI tools — no count-up, text-only */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col gap-2"
          >
            <p className="text-2xl font-black text-[--color-text-primary] tracking-[-0.02em] leading-tight">
              Daily
            </p>
            <p className="text-sm text-[--color-text-muted]">
              Claude · Copilot · Codex user
            </p>
          </m.div>
        </div>
      </div>
    </section>
  );
}
