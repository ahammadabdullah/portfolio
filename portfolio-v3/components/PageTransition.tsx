"use client";

import { m } from "@/providers/MotionProvider";
import { ReactNode } from "react";

export default function PageTransition({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <m.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: [0.25, 0.25, 0.25, 0.75] }}
      className={className}
    >
      {children}
    </m.div>
  );
}
