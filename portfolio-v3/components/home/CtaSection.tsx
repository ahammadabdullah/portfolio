"use client";

import { m } from "@/providers/MotionProvider";
import { useInView } from "react-intersection-observer";
import { ArrowRight } from "lucide-react";

export default function CtaSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section
      ref={ref}
      className="bg-accent py-28 md:py-40"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 text-center">
        <m.h2
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl md:text-6xl font-black tracking-[-0.03em] text-white mb-8"
        >
          Ready to replace slop with systems?
        </m.h2>

        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <a
            href="https://wa.me/880140453183"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-accent font-bold px-10 py-5 rounded-full text-lg hover:bg-white/90 transition-colors duration-200"
          >
            Let&apos;s talk
            <ArrowRight className="w-5 h-5" />
          </a>
        </m.div>
      </div>
    </section>
  );
}
