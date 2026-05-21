"use client";

import { m } from "@/providers/MotionProvider";
import { bio } from "./AboutData";
import Link from "next/link";
import { ArrowRight, FileText } from "lucide-react";

export default function AboutHero() {
  return (
    <m.div
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="mb-24"
    >
      <p className="text-xs uppercase tracking-widest font-semibold text-[--color-accent] mb-4">
        About
      </p>
      <h1 className="text-5xl md:text-7xl font-black tracking-[-0.04em] text-[--color-text-primary] mb-8">
        Ahammad Abdullah
      </h1>
      <p className="text-lg md:text-xl text-[--color-text-secondary] leading-[1.7] max-w-2xl mb-10">
        {bio}
      </p>
      <div className="flex flex-wrap gap-4">
        <Link
          href="/work"
          className="inline-flex items-center gap-2 bg-[--color-accent] hover:bg-[--color-accent-light] text-white font-semibold px-6 py-3 rounded-full transition-colors duration-200"
        >
          See my work
          <ArrowRight className="w-4 h-4" />
        </Link>
        <a
          href="/Ahammad_Abdullah_fullstack.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 border border-[--color-border-default] hover:border-[--color-accent] text-[--color-text-secondary] hover:text-[--color-text-primary] font-semibold px-6 py-3 rounded-full transition-colors duration-200"
        >
          <FileText className="w-4 h-4" />
          Resume
        </a>
      </div>
    </m.div>
  );
}
