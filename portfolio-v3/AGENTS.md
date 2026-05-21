

# AGENTS.md

This file provides guidance to AI Agents when working with code in this repository.

<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->


## What This Is

Portfolio V3 — a Next.js 16 app positioned for CEOs and technical decision-makers who have experienced "AI slop" from developers blindly using Claude/Codex/Copilot. The v3 differentiates Ahammad Abdullah as a developer who uses AI tools with judgment, architecture, and craft.

Dev port: `3002` | Production: `https://ahammadabdullah.dev`

## Commands

Run from `portfolio-v3/`:

```bash
PORT=3002 npm run dev   # Dev server on :3002
npm run build           # Production build
npm run lint            # ESLint
```

## Stack

- **Next.js 16** (App Router) — breaking changes from 15, read docs before coding
- **React 19**
- **Tailwind CSS v4** — `@tailwindcss/postcss`, NO `tailwind.config.ts`. Theme tokens defined in `app/globals.css` via `@theme {}`
- **TypeScript 5**
- **Framer Motion** (to be installed) — `LazyMotion + domAnimation + m` pattern

## Folder Structure

```
portfolio-v3/
  app/
    layout.tsx          # Root layout — Inter font, global metadata
    page.tsx            # Home → renders HomePage component
    globals.css         # Tailwind v4 import + @theme tokens + custom utilities
    about/page.tsx
    work/page.tsx       # Renamed from /projects — more business-facing
    sitemap.ts
    manifest.ts
  components/
    Navbar.tsx          # Clean Inter nav, no bash metaphors, scroll backdrop blur
    VersionSwitcher.tsx # Fixed bottom-right; shows V2 (previous) + V3 (current)
    PageTransition.tsx  # Framer Motion page wrapper
    home/
      HomePage.tsx        # Orchestrates all landing sections + inView refs
      HeroSection.tsx     # Headline: "You didn't get software. You got AI slop."
      ProblemSection.tsx  # Code diff visualization — signature component
      ApproachSection.tsx # 3 typographic cards: Generate / Judge / Architect
      WorkPreviewSection.tsx
      CredibilitySection.tsx
      CtaSection.tsx
    work/
      WorkData.tsx      # Project data + complexityCallout field
      WorkCard.tsx
      WorkPage.tsx
      WorkUtils.tsx
    about/
      AboutPage.tsx
      AboutHero.tsx
      ExperienceSection.tsx
      ToolsSection.tsx  # "How I use Claude/Copilot/Codex" — unique to v3
      AboutData.tsx
  providers/
    MotionProvider.tsx  # LazyMotion wrapper — re-exports m + animation hooks
  public/
    Ahammad_Abdullah_fullstack.pdf
    og-image.png
    favicon.ico
  doc/
    plans/v3-plan.md    # Full implementation plan
    progress.md         # Task checklist — mark done as tasks complete
```

## Critical: Tailwind v4 vs v3

**No `tailwind.config.ts`.** All custom tokens live in `app/globals.css`:

```css
@import "tailwindcss";

@theme {
  --color-base: #080808;
  --color-accent: #7c3aed;
}
```

Custom utilities go in `globals.css` using `@layer utilities {}`. PostCSS plugin: `@tailwindcss/postcss` (already configured in `postcss.config.mjs`).

## Design System

### Colors (in globals.css @theme)
| Token | Value | Use |
|---|---|---|
| `bg-base` | `#080808` | Page background |
| `bg-surface` | `#0f0f0f` | Cards, sections |
| `bg-elevated` | `#161616` | Inputs, hover states |
| `border-subtle` | `#1e1e1e` | Quiet separators |
| `border-default` | `#2a2a2a` | Card borders |
| `text-primary` | `#f5f5f5` | Headlines |
| `text-secondary` | `#a3a3a3` | Body, descriptions |
| `text-muted` | `#525252` | Labels, metadata |
| `accent` | `#7c3aed` | Violet — primary accent (NOT v2's blue) |
| `accent-light` | `#8b5cf6` | Hover states |
| `slop-red` | `#ef4444` | Problem section ONLY |
| `clean-green` | `#22c55e` | Clean code indicators |

### Typography
- **Font**: Inter (variable, `next/font/google`)
- **Hero**: `text-6xl md:text-8xl font-black tracking-[-0.04em] leading-[0.95]`
- **Section heading**: `text-4xl md:text-5xl font-bold tracking-[-0.02em]`
- **Body**: `text-base md:text-lg leading-[1.7]`
- **Labels**: `text-xs uppercase tracking-widest font-semibold`
- JetBrains Mono used ONLY inside ProblemSection code snippets

### Key UI Rules
- Buttons: `rounded-full` pills — signals modern product, not terminal aesthetic
- Cards: `rounded-2xl`, border transitions to accent on hover, violet glow shadow
- No bash command button labels (that's v2)
- 5 animation patterns max — restraint = premium feel

## Architecture Patterns

**Pages → Components**: Each route renders one page component from `components/`. All logic in components.

**Framer Motion**: Never import from `framer-motion` directly — use `@/providers/MotionProvider` which exports `m` and all animation hooks.

**Data files**: Edit only `WorkData.tsx` or `AboutData.tsx` to update content. `WorkData.tsx` adds `complexityCallout: string` to each project.

**VersionSwitcher**: `process.env.v2Domain` (`:3001`) + `process.env.v3Domain` (`:3002`). V3 is `current: true`.

## Environment Variables

```
v2Domain=http://localhost:3001
v3Domain=http://localhost:3002
```

## Contact / CTA

No contact page. All "Let's talk" / "Start a conversation" CTAs link to `https://wa.me/880140453183` (WhatsApp) via `<a target="_blank">`. No EmailJS.


## Commit Convention

- Use the commit subject format `<type>(<module>): <what changed>`.
- Preferred types are `feat`, `fix`, `chore`, `docs`, `refactor`, and `test`.
- Pick the narrowest useful module name for the scope being committed (for example `retail`, `auth`, `catalog`, `checkout`, `ai`, `reminders`, `omx`, `docs`).
- Mention verification honestly in the commit body when it matters. If work is only partially verified, record that gap instead of implying full coverage.