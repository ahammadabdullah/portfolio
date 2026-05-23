"use client";

import { ArrowRight } from "lucide-react";

export default function CtaSection() {
  return (
    <>
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/50">
        05 — Let&apos;s Work
      </p>

      <hr className="border-none border-t border-white/20" />

      <div>
        <h2 className="text-[clamp(3rem,10vw,10rem)] font-black leading-[0.88] uppercase tracking-tight text-white">
          Replace<br />
          slop with<br />
          systems.
        </h2>
      </div>

      <hr className="border-none border-t border-white/20" />

      <a
        href="https://wa.me/880140453183"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-white text-accent font-bold px-10 py-5 rounded-full text-lg hover:bg-white/90 transition-colors duration-200 w-fit"
      >
        Let&apos;s talk
        <ArrowRight className="w-5 h-5" />
      </a>

      <p className="mt-auto max-w-[50ch] text-[clamp(1rem,2vw,1.5rem)] font-normal leading-relaxed text-white/60">
        30-minute call. Tell me what you&apos;re building. I&apos;ll tell you if AI can help or hurt it.
      </p>
    </>
  );
}
