import { ArrowUpRight, GitFork, Code } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export function getLinkIcon(key: string): LucideIcon {
  if (key === "github" || key === "repo") return GitFork;
  if (key === "client" || key === "server") return Code;
  return ArrowUpRight;
}

export function getLinkLabel(key: string): string {
  const labels: Record<string, string> = {
    live: "Live",
    github: "GitHub",
    repo: "Repo",
    client: "Client",
    server: "Server",
  };
  return labels[key] ?? key;
}
