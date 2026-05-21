# Portfolio V3 — Implementation Plan

## Context

V2 is a polished developer portfolio with a GitHub dark / terminal aesthetic. V3 targets a different audience: **CEOs and technical decision-makers who have hired developers using Claude/Codex/Copilot and got unmaintainable "AI slop."** Ahammad's positioning: uses the same AI tools, but applies judgment, architecture, and craft that pure prompt-monkeys skip.

Hero copy confirmed: **Option C** — "You didn't get software. You got AI slop."

---

## Stack

- Next.js 16, React 19, TypeScript 5
- Tailwind CSS v4 (`@tailwindcss/postcss`) — NO `tailwind.config.ts`, theme in `globals.css`
- Framer Motion (`LazyMotion + domAnimation + m` pattern)
- EmailJS for contact form (same service as v2)

---

## Design System

### Colors — defined in `app/globals.css` via `@theme {}`

```css
@theme {
  --color-base: #080808;          /* page bg */
  --color-surface: #0f0f0f;       /* cards */
  --color-elevated: #161616;      /* inputs, hover */
  --color-border-subtle: #1e1e1e;
  --color-border-default: #2a2a2a;
  --color-border-active: #6d28d9;
  --color-text-primary: #f5f5f5;
  --color-text-secondary: #a3a3a3;
  --color-text-muted: #525252;
  --color-accent: #7c3aed;        /* violet — key diff from v2's #58a6ff */
  --color-accent-light: #8b5cf6;
  --color-slop-red: #ef4444;      /* Problem section ONLY */
  --color-clean-green: #22c55e;
}
```

### Typography

- **Font**: Inter (variable, `next/font/google`) — applied to `<html>` in layout.tsx
- **Hero**: `text-6xl md:text-8xl font-black tracking-[-0.04em] leading-[0.95]`
- **Section heading**: `text-4xl md:text-5xl font-bold tracking-[-0.02em]`
- **Body**: `text-base md:text-lg leading-[1.7]`
- **Labels**: `text-xs uppercase tracking-widest font-semibold`
- JetBrains Mono (`next/font/google`) used ONLY in `ProblemSection.tsx` code snippets

### Buttons

- Primary: `bg-accent text-white rounded-full px-8 py-4` — CSS hover only, no Framer scale
- Secondary: `border border-[--color-border-default] text-[--color-text-primary] rounded-full px-8 py-4`
- No bash command labels

### Cards

- `bg-[--color-surface] border border-[--color-border-default] rounded-2xl`
- Hover: `border-[--color-accent]` + `translateY(-6px)` + violet box-shadow
- CSS transition, not Framer

### Animation — 5 patterns only

1. **Hero text stagger**: words `y:40→0, opacity:0→1`, 1s, easing `[0.16,1,0.3,1]`
2. **Scroll entry**: `y:60→0, opacity:0→1`, `triggerOnce: true`
3. **Card entry**: `scale:0.96→1` + fade, stagger 0.1s
4. **Count-up**: `useMotionValue` in CredibilitySection only
5. **Problem diff stagger**: code lines reveal sequentially (red → green)

---

## Landing Page — Sections

### 1 / Hero

Layout: **left-aligned editorial**, not centered. Enormous type.

```
[pill]  Available for projects · 2026

You didn't get software.
You got AI slop.

I'm the developer who cleans it — and doesn't repeat it.

[See my work →]   [Start a conversation]
```

No avatar, no social row, no badges.

### 2 / The Problem (`01 / The Problem`)

Heading: "What 'AI-generated' actually looks like in production"

- Left panel (red-tinted): bad AI code — no types, hardcoded secrets, 80-line copy-paste, magic strings. Annotation badges: "No type safety", "Hardcoded credential", "N+1 query", "Zero error handling"
- Right panel (violet-tinted): clean architectural equivalent. Badges: "Reviewable", "Testable", "Scalable"
- Signature: large diagonal `SLOP` watermark behind left panel, `slop-red` at 5% opacity
- Below: `"The problem isn't using AI. It's not knowing what good looks like."`
- Code snippets are **static JSX** — illustrative only, not real project code

### 3 / My Approach (`02 / The Method`)

3 typographic cards — pure text, no icons:

```
01  Generate
    I prompt AI tools to produce first drafts — fast.
    Architecture decisions, tech stack, API shape.

02  Judge
    Every output goes through a mental review:
    Does this type? Does this compose? Does this scale?
    If no → rewrite. If yes → refine.

03  Architect
    The pieces get assembled into a coherent system.
    Consistent patterns. Documented decisions.
    Code a human can maintain two years from now.
```

### 4 / Work Preview (`03 / Selected Work`)

3 featured projects: Nirbhik.io, Sellto, AI SaaS Boilerplate.

Each card: project name (large) + 1-line architectural description + 3-4 tech badges + violet "Challenge:" callout. **No screenshots on landing** — screenshots on `/work`.

### 5 / Credibility (`04 / By the numbers`)

Dark surface strip. 4 stats with count-up animation:

- `10+` Projects built
- `1.5+` Years experience
- `3` Active SaaS products
- Daily Claude · Copilot · Codex user

### 6 / CTA Strip

Full `bg-accent` background. "Ready to replace slop with systems?" + `[Let's talk →]` → `/contact`.

---

## Secondary Pages

### `/work`

All 8 projects. Featured (4): full-width card + screenshot + complexity callout. Others: 3-column minimal grid. `WorkData.tsx` adds `complexityCallout: string` field.

### `/about`

Narrative structure: bio (3 sentences) → "How I use AI tools" section → experience timeline → skills tag cloud (no progress bars).

### `/contact`

Form fields: Name, Email, "What are you building?". EmailJS. Response time note. LinkedIn as secondary option.

---

## VersionSwitcher

### In v3 (`components/VersionSwitcher.tsx` — new):
```typescript
const versions = [
  { version: "V2", url: process.env.v2Domain || "http://localhost:3001", label: "Previous" },
  { version: "V3", url: process.env.v3Domain || "http://localhost:3002", label: "Current", current: true },
];
```

### In v2 (`portfolio-v2/components/VersionSwitcher.tsx` — update):
```typescript
const versions = [
  { version: "V2", url: process.env.v2Domain || "http://localhost:3001", label: "Current", current: true },
  { version: "V3", url: process.env.v3Domain || "http://localhost:3002", label: "Latest" },
];
```

Remove V1 from v2's switcher.

---

## Implementation Order

1. Foundation: `globals.css` @theme tokens, `layout.tsx` (Inter font), `providers/MotionProvider.tsx`, `components/PageTransition.tsx`
2. VersionSwitcher: update v2's + create v3's simultaneously
3. Navbar
4. Data layer: `WorkData.tsx`, `AboutData.tsx`
5. Landing: Hero → Problem → Approach → WorkPreview → Credibility → CTA → `HomePage.tsx`
6. Secondary pages: `/work` → `/about` → `/contact`
7. App routes: sitemap.ts, manifest.ts, meta updates
8. Polish: mobile audit (375px), build check, lint

---

## Verification Checklist

- [ ] `:3002` loads
- [ ] VersionSwitcher in v2 shows V2 (current) + V3; no V1
- [ ] VersionSwitcher in v3 shows V2 + V3 (current)
- [ ] All 6 landing sections animate in correctly
- [ ] Count-up triggers once on scroll
- [ ] ProblemSection: red/green panels + SLOP watermark visible
- [ ] `/work`: 8 projects, 4 featured with complexity callout
- [ ] Contact form: EmailJS success/error toast
- [ ] Mobile (375px): no overflow, nav collapses
- [ ] `npm run build` zero errors
- [ ] `npm run lint` zero errors
