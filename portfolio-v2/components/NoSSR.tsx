"use client";

import { ReactNode, useEffect, useState } from "react";

interface NoSSRProps {
  children: ReactNode;
  fallback?: ReactNode;
}

const NoSSR = ({ children, fallback = null }: NoSSRProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <>{fallback}</>;
  }

  return <>{children}</>;
};

export default NoSSR;
