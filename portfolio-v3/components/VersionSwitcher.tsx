"use client";

import { m } from "@/providers/MotionProvider";
import { useState } from "react";
import { ArrowLeftRight } from "lucide-react";

export default function VersionSwitcher() {
  const [isExpanded, setIsExpanded] = useState(false);

  const versions = [
    {
      version: "V2",
      url: `${process.env.v2Domain || "http://localhost:3001"}`,
      label: "Previous",
    },
    {
      version: "V3",
      url: `${process.env.v3Domain || "http://localhost:3002"}`,
      label: "Current",
      current: true,
    },
  ];

  return (
    <m.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <div className="relative">
        <m.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsExpanded(!isExpanded)}
          className="bg-[--color-accent] hover:bg-[--color-accent-light] text-white p-3 rounded-full shadow-lg transition-colors duration-200 cursor-pointer"
          aria-label="Switch portfolio version"
        >
          <ArrowLeftRight className="w-5 h-5" />
        </m.button>

        <m.div
          initial={false}
          animate={{
            opacity: isExpanded ? 1 : 0,
            y: isExpanded ? 0 : 10,
            scale: isExpanded ? 1 : 0.9,
          }}
          transition={{ duration: 0.2 }}
          className={`absolute bottom-16 right-0 bg-[--color-surface] border border-[--color-border-default] rounded-[--radius-md] p-4 min-w-[180px] ${
            isExpanded ? "pointer-events-auto" : "pointer-events-none"
          }`}
        >
          <p className="text-xs uppercase tracking-widest font-semibold text-[--color-text-muted] mb-3">
            Version
          </p>
          <div className="space-y-2">
            {versions.map((v) => (
              <div key={v.version}>
                {v.current ? (
                  <div className="flex items-center justify-between p-2 bg-[--color-accent-dim] rounded-lg border border-[--color-accent]/30">
                    <div>
                      <p className="text-sm font-semibold text-[--color-accent]">
                        {v.version}
                      </p>
                      <p className="text-xs text-[--color-text-muted]">
                        {v.label}
                      </p>
                    </div>
                    <div className="w-2 h-2 bg-[--color-accent] rounded-full" />
                  </div>
                ) : (
                  <a
                    href={v.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-2 hover:bg-[--color-elevated] rounded-lg transition-colors duration-150"
                  >
                    <div>
                      <p className="text-sm font-medium text-[--color-text-primary]">
                        {v.version}
                      </p>
                      <p className="text-xs text-[--color-text-muted]">
                        {v.label}
                      </p>
                    </div>
                    <div className="w-2 h-2 bg-[--color-text-muted] rounded-full" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </m.div>
      </div>
    </m.div>
  );
}
