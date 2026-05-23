"use client";

import { m } from "@/providers/MotionProvider";
import { ArrowDown, MessageCircle } from "lucide-react";

export default function HeroSection() {
  return (
    <>
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-[--color-text-muted]">
        01 — Full Stack Developer
      </p>

      <hr className="border-none border-t border-white/10" />

      <div>
        <m.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-[clamp(3rem,10vw,10rem)] font-black leading-[0.88] uppercase tracking-tight text-[--color-text-primary]"
        >
          You didn&apos;t<br />
          get software.<br />
          You got{" "}
          <span className="text-[--color-slop-red]">AI slop.</span>
        </m.h1>
      </div>

      <hr className="border-none border-t border-white/10" />

      <div className="flex flex-col gap-8">
        <m.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-[50ch] text-[clamp(1rem,2vw,1.5rem)] font-normal leading-relaxed text-[--color-text-secondary]"
        >
          Most companies discover AI slop 3 months after launch — when maintenance costs spike and every new feature breaks two old ones. I build software that compounds, not corrodes.
        </m.p>

        <m.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center gap-4"
        >
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.1em] font-semibold text-[--color-text-muted]">
            <span className="w-1.5 h-1.5 bg-[--color-clean-green] rounded-full animate-pulse" />
            Available for projects · 2026
          </span>
          <a
            href="#about"
            className="inline-flex items-center gap-2 bg-accent hover:bg-[--color-accent-light] text-white font-semibold px-7 py-3.5 rounded-full transition-colors duration-200 text-sm"
          >
            About myself <ArrowDown className="w-4 h-4" />
          </a>
          <a
            href="https://wa.me/880140453183"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-white/20 hover:border-accent text-[--color-text-primary] font-semibold px-7 py-3.5 rounded-full transition-colors duration-200 text-sm"
          >
            <MessageCircle className="w-4 h-4" />
            Start a conversation
          </a>
        </m.div>
      </div>
    </>
  );
}
