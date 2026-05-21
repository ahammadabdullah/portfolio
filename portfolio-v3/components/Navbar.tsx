"use client";

import { m } from "@/providers/MotionProvider";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-[250ms] ${
        scrolled
          ? "glass border-b-0"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-black text-[--color-text-primary] tracking-[-0.04em] hover:text-[--color-accent] transition-colors duration-200"
        >
          AA
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  pathname === link.href
                    ? "text-[--color-accent]"
                    : "text-[--color-text-secondary] hover:text-[--color-text-primary]"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href="https://wa.me/880140453183"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 bg-[--color-accent] hover:bg-[--color-accent-light] text-white text-sm font-medium px-5 py-2 rounded-full transition-colors duration-200"
        >
          Let&apos;s talk
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-[--color-text-secondary] hover:text-[--color-text-primary] transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <m.div
        initial={false}
        animate={{ height: mobileOpen ? "auto" : 0, opacity: mobileOpen ? 1 : 0 }}
        transition={{ duration: 0.25 }}
        className="md:hidden overflow-hidden bg-[--color-surface] border-b border-[--color-border-subtle]"
      >
        <ul className="px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`text-base font-medium block transition-colors duration-200 ${
                  pathname === link.href
                    ? "text-[--color-accent]"
                    : "text-[--color-text-secondary]"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <a
              href="https://wa.me/880140453183"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="inline-flex bg-[--color-accent] text-white text-sm font-medium px-5 py-2 rounded-full"
            >
              Let&apos;s talk
            </a>
          </li>
        </ul>
      </m.div>
    </header>
  );
}
