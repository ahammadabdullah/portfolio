"use client";

import { useState } from "react";
import { FaExchangeAlt } from "react-icons/fa";

const VersionSwitcher = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const versions = [
    {
      version: "V1",
      url: `${process.env.v1Domain || "http://localhost:3000"}`,
      label: "Original",
      current: true,
    },
    {
      version: "V2",
      url: `${process.env.v2Domain || "http://localhost:3001"}`,
      label: "Modern",
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="relative">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="bg-highlight hover:bg-secondary text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-105"
        >
          <FaExchangeAlt className="w-5 h-5" />
        </button>

        {isExpanded && (
          <div className="absolute bottom-16 right-0 bg-primary border border-secondary rounded-lg p-4 min-w-[200px] shadow-xl">
            <h3 className="text-sm font-semibold text-secondary mb-3">
              Switch Version
            </h3>
            <div className="space-y-2">
              {versions.map((version) => (
                <div key={version.version}>
                  {version.current ? (
                    <div className="flex items-center justify-between p-2 bg-highlight/20 rounded-md border border-highlight/30">
                      <div>
                        <div className="text-sm font-medium text-highlight">
                          {version.version}
                        </div>
                        <div className="text-xs text-secondary">
                          {version.label} (Current)
                        </div>
                      </div>
                      <div className="w-2 h-2 bg-highlight rounded-full"></div>
                    </div>
                  ) : (
                    <a
                      href={version.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-2 hover:bg-accent/50 rounded-md transition-colors duration-200"
                    >
                      <div>
                        <div className="text-sm font-medium text-white">
                          {version.version}
                        </div>
                        <div className="text-xs text-secondary">
                          {version.label}
                        </div>
                      </div>
                      <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default VersionSwitcher;
