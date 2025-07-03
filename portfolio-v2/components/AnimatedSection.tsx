"use client";

import { ReactNode, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { m } from "@/providers/MotionProvider";

interface AnimatedSectionProps {
  children: ReactNode;
  animation?:
    | "fadeInUp"
    | "fadeInLeft"
    | "fadeInRight"
    | "scaleIn"
    | "staggerContainer";
  delay?: number;
  className?: string;
  id?: string;
  threshold?: number;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  animation = "fadeInUp",
  delay = 0,
  className = "",
  id,
  threshold = 0.2,
}) => {
  const [mounted, setMounted] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold,
    rootMargin: "0px 0px -100px 0px",
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  const getAnimationProps = () => {
    const animations = {
      fadeInUp: {
        initial: { opacity: 0, y: 60 },
        animate: { opacity: 1, y: 0 },
        transition: {
          duration: 0.8,
          ease: [0.25, 0.25, 0.25, 0.75],
          delay,
        },
      },
      fadeInLeft: {
        initial: { opacity: 0, x: -60 },
        animate: { opacity: 1, x: 0 },
        transition: {
          duration: 0.8,
          ease: [0.25, 0.25, 0.25, 0.75],
          delay,
        },
      },
      fadeInRight: {
        initial: { opacity: 0, x: 60 },
        animate: { opacity: 1, x: 0 },
        transition: {
          duration: 0.8,
          ease: [0.25, 0.25, 0.25, 0.75],
          delay,
        },
      },
      scaleIn: {
        initial: { opacity: 0, scale: 0.8 },
        animate: { opacity: 1, scale: 1 },
        transition: {
          duration: 0.6,
          ease: [0.25, 0.25, 0.25, 0.75],
          delay,
        },
      },
      staggerContainer: {
        initial: "hidden",
        animate: inView ? "visible" : "hidden",
        variants: {
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.15,
              delayChildren: delay,
            },
          },
        },
      },
    };

    return animations[animation];
  };

  if (!mounted) {
    return (
      <div ref={ref} id={id} className={className}>
        {children}
      </div>
    );
  }

  const animationProps = getAnimationProps();

  return (
    <m.div ref={ref} id={id} className={className} {...animationProps}>
      {children}
    </m.div>
  );
};

export default AnimatedSection;
