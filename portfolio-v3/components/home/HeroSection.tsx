"use client";

import { m } from "@/providers/MotionProvider";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";

const wordVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay: i * 0.12,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  }),
};

const headlineWords = [
  { text: "You didn't", accent: false },
  { text: "get software.", accent: false },
  { text: "You got", accent: false },
  { text: "AI slop.", accent: true },
];

export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center max-w-6xl mx-auto px-6 md:px-12 py-32">
      {/* Availability pill */}
      <m.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="mb-10"
      >
        <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.1em] font-semibold text-[--color-text-muted] border border-[--color-border-default] rounded-full px-4 py-2 bg-[--color-surface]">
          <span className="w-1.5 h-1.5 bg-[--color-clean-green] rounded-full animate-pulse" />
          Available for projects · 2026
        </span>
      </m.div>

      {/* Headline — left-aligned, editorial */}
      <h1 className="hero-headline mb-8">
        {headlineWords.map((word, i) => (
          <m.span
            key={i}
            custom={i}
            initial="hidden"
            animate="visible"
            variants={wordVariants}
            className={`inline-block mr-[0.2em] last:mr-0 ${
              word.accent ? "text-[--color-slop-red]" : "text-[--color-text-primary]"
            }`}
          >
            {word.text}
          </m.span>
        ))}
      </h1>

      {/* Subline */}
      <m.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="text-lg md:text-xl text-[--color-text-secondary] leading-[1.7] max-w-xl mb-12"
      >
        I&apos;m the developer who cleans it — and doesn&apos;t repeat it. I build with Claude, Copilot, and Codex. I know when to trust them and when to override.
      </m.p>

      {/* CTAs */}
      <m.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-wrap items-center gap-4"
      >
        <Link
          href="/work"
          className="inline-flex items-center gap-2 bg-[--color-accent] hover:bg-[--color-accent-light] text-white font-semibold px-8 py-4 rounded-full transition-colors duration-200"
        >
          See my work
          <ArrowRight className="w-4 h-4" />
        </Link>
        <a
          href="https://wa.me/880140453183"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 border border-[--color-border-default] hover:border-[--color-accent] text-[--color-text-primary] font-semibold px-8 py-4 rounded-full transition-colors duration-200"
        >
          <MessageCircle className="w-4 h-4" />
          Start a conversation
        </a>
      </m.div>
    </section>
  );
}
