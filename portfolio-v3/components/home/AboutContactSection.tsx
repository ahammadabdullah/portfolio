"use client";

import { bio } from "@/components/about/AboutData";
import { GitFork, Mail, MessageCircle, ExternalLink } from "lucide-react";

const socials = [
  { label: "WhatsApp", href: "https://wa.me/880140453183", icon: MessageCircle },
  { label: "GitHub", href: "https://github.com/ahammadabdullah", icon: GitFork },
  { label: "LinkedIn", href: "https://linkedin.com/in/ahammad-abdullah", icon: ExternalLink },
  { label: "Email", href: "mailto:hi@ahammadabdullah.dev", icon: Mail },
];

export default function AboutContactSection() {
  return (
    <>
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-[--color-text-muted]">
        06 — Who I Am
      </p>

      <hr className="border-none border-t border-white/10" />

      <div>
        <h2 className="text-[clamp(3rem,10vw,10rem)] font-black leading-[0.88] uppercase tracking-tight text-[--color-text-primary]">
          Ahammad<br />
          Abdullah.
        </h2>
      </div>

      <hr className="border-none border-t border-white/10" />

      <p className="max-w-[50ch] text-[clamp(1rem,2vw,1.5rem)] font-normal leading-relaxed text-[--color-text-secondary]">
        {bio}
      </p>

      <hr className="border-none border-t border-white/10" />

      <div className="flex flex-col gap-6">
        <div className="flex flex-wrap gap-3">
          {socials.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-white/15 hover:border-accent text-[--color-text-secondary] hover:text-[--color-text-primary] text-sm font-medium px-5 py-2.5 rounded-full transition-colors duration-200"
            >
              <Icon className="w-4 h-4" />
              {label}
            </a>
          ))}
        </div>
        <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[--color-text-muted]">
          <span className="w-1.5 h-1.5 bg-[--color-clean-green] rounded-full animate-pulse" />
          Available for projects · 2026
        </span>
      </div>
    </>
  );
}
