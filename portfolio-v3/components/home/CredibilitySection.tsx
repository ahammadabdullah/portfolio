"use client";

import { useMotionValue, useSpring } from "@/providers/MotionProvider";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

function CountUp({ to, suffix = "", inView, delay = 0 }: { to: number; suffix?: string; inView: boolean; delay?: number }) {
  const raw = useMotionValue(0);
  const spring = useSpring(raw, { stiffness: 60, damping: 20 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const unsub = spring.on("change", (v) => setDisplay(Math.round(v)));
    return unsub;
  }, [spring]);

  useEffect(() => {
    if (inView) {
      const t = setTimeout(() => raw.set(to), delay * 1000);
      return () => clearTimeout(t);
    }
  }, [inView, to, delay, raw]);

  return <span>{display}{suffix}</span>;
}

const stats = [
  { value: 10, suffix: "+", label: "Projects built" },
  { value: 2, suffix: ".5 yrs", label: "Full-stack experience" },
  { value: 2, suffix: "", label: "Live SaaS products" },
];

const guarantees = [
  { heading: "TypeScript first", body: "No implicit any. Types as documentation." },
  { heading: "Documented decisions", body: "Architecture rationale written down, not tribal knowledge." },
  { heading: "Weekly updates", body: "Async progress reports — you always know where things stand." },
  { heading: "Handoff-ready code", body: "Any developer can pick it up on day one." },
];

export default function CredibilitySection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <>
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-[--color-text-muted]">
        04 — By the Numbers
      </p>

      <hr className="border-none border-t border-white/10" />

      <div>
        <h2 className="text-[clamp(3rem,10vw,10rem)] font-black leading-[0.88] uppercase tracking-tight text-[--color-text-primary]">
          Proof,<br />
          not promises.
        </h2>
      </div>

      <hr className="border-none border-t border-white/10" />

      <div ref={ref} className="flex flex-wrap gap-[3vw]">
        {stats.map((stat, i) => (
          <div key={stat.label} className="min-w-[140px] flex-1">
            <p className="text-[clamp(2rem,5vw,4rem)] font-black text-[--color-text-primary] tracking-[-0.03em] leading-none mb-1">
              <CountUp to={stat.value} suffix={stat.suffix} inView={inView} delay={i * 0.1} />
            </p>
            <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] text-[--color-text-muted]">{stat.label}</p>
          </div>
        ))}
        <div className="min-w-[140px] flex-1">
          <p className="text-[clamp(2rem,5vw,4rem)] font-black text-[--color-text-primary] tracking-[-0.03em] leading-none mb-1">Daily</p>
          <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] text-[--color-text-muted]">AI reviewer — not just user</p>
        </div>
      </div>

      <hr className="border-none border-t border-white/10" />

      <div className="flex flex-wrap gap-[3vw]">
        {guarantees.map((g) => (
          <div key={g.heading} className="min-w-[180px] flex-1">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider text-[--color-text-primary]">{g.heading}</p>
            <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed text-[--color-text-secondary] opacity-75">{g.body}</p>
          </div>
        ))}
      </div>
    </>
  );
}
