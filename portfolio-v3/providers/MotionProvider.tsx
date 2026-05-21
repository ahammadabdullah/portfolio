"use client";

import { LazyMotion, domAnimation, m } from "framer-motion";
import { ReactNode } from "react";

export function MotionProvider({ children }: { children: ReactNode }) {
  return (
    <LazyMotion features={domAnimation} strict>
      {children}
    </LazyMotion>
  );
}

export { m };
export {
  AnimatePresence,
  useInView,
  useAnimation,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
