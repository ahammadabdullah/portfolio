<!-- BEGIN:nextjs-agent-rules -->
 
# Next.js: ALWAYS read docs before coding
 
Before any Next.js work, find and read the relevant doc in `node_modules/next/dist/docs/`. Your training data is outdated — the docs are the source of truth.
 
<!-- END:nextjs-agent-rules -->

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Layout

All active code lives in `portfolio-v2/`. The repo root contains only docs and the git history.

```
portfolio-v2/
  app/          # Next.js App Router pages (home, about, projects, contact)
  components/   # UI — organized by page (home/, about/, projects/, contact/)
  providers/    # MotionProvider wraps the app; exports `m` and animation hooks
  assets/       # Project screenshot images (imported statically, not in public/)
  public/       # Static assets: resume PDF, OG image, favicon, robots.txt
```

## Commands

All commands run from `portfolio-v2/`:

```bash
npm run dev    # Dev server on :3001
npm run build  # Production build
npm run lint   # ESLint via next lint
```

No test suite configured.

## Architecture

**Pages → Components split:** Each route (`app/about/page.tsx`, etc.) only exports metadata and renders a single page component from `components/<section>/`. All logic lives in the component tree, not in `app/`.

**Framer Motion pattern:** Never import from `framer-motion` directly. Use `@/providers/MotionProvider` which re-exports `m` (lazy-loaded `domAnimation` bundle) and all animation hooks. This keeps SSR safe and bundle size small.

**Data files:** Static content (projects list, skills, experience) lives in co-located `*Data.tsx` files (`ProjectData.tsx`, `AboutData.tsx`). To add/edit content, only these files need changing.

**Animations:** `react-intersection-observer` drives scroll-triggered animations. `inView` booleans are lifted to page-level components (e.g. `HomePage`) and passed as props to child sections.

**Contact form:** Uses EmailJS (`@emailjs/browser`) — no backend. Env vars required: `EMAIL_JS_SERVICE_ID`, `EMAIL_JS_TEMPLATE_ID`, `EMAIL_JS_PUBLIC_KEY` (see `.env.example`). These are exposed to `next.config.mjs` as `emailJsServiceID`, `emailsTemplateID`, `emailjsPublicKey`.

**VersionSwitcher:** Fixed bottom-right button that links between V1 (`:3000`) and V2 (`:3001`). URLs controlled by `process.env.v1Domain` / `process.env.v2Domain`.

## Styling

GitHub dark theme color palette defined in `tailwind.config.ts`. Key tokens:
- `bg-primary` → `#0d1117`, `bg-secondary` → `#161b22`, `bg-tertiary` → `#21262d`
- `text-accent` → `#58a6ff`, `text-text` → `#f0f6fc`, `text-text-muted` → `#8b949e`
- `terminal-green/yellow/red/blue` for syntax-highlight accents

Font: JetBrains Mono (Google Fonts) applied globally — both `font-sans` and `font-mono` map to it.

Utility class `glass` and `glow` are used in components but defined in `globals.css`.
