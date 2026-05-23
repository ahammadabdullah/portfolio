# V3 Progress

Track implementation tasks here. Mark `[ ]` → `[x]` as each completes.

---

## Phase 1 — Foundation

- [x] Install dependencies (framer-motion, sonner, react-intersection-observer, lucide-react, @emailjs/browser)
- [x] `app/globals.css` — Tailwind v4 `@theme` tokens + custom utilities (scrollbar, gradient-text, glow)
- [x] `app/layout.tsx` — Inter + JetBrains Mono fonts, CEO-facing metadata, theme-color `#080808`
- [x] `providers/MotionProvider.tsx` — LazyMotion + domAnimation + re-export `m` and hooks
- [x] `components/PageTransition.tsx` — opacity + y transition wrapper
- [x] `.env.example` — EmailJS vars + v2Domain + v3Domain

## Phase 2 — VersionSwitcher Migration

- [x] `portfolio-v3/components/VersionSwitcher.tsx` — V3 current, V2 linked :3001
- [x] `portfolio-v2/components/VersionSwitcher.tsx` — removed V1, added V3 :3002

## Phase 3 — Navbar + Data Layer

- [x] `components/Navbar.tsx` — Inter nav, links: Home / Work / About / Contact, scroll backdrop blur, logo "AA"
- [x] `components/work/WorkData.tsx` — 8 projects with `complexityCallout` and `architecturalNote` fields
- [x] `components/about/AboutData.tsx` — bio, experience, AI tools usage, skills

## Phase 4 — Landing Page Sections

- [x] `components/home/HeroSection.tsx` — Option C headline, left-aligned editorial, availability pill, 2 CTAs
- [x] `components/home/ProblemSection.tsx` — split diff panels, SLOP watermark, annotation badges
- [x] `components/home/ApproachSection.tsx` — 3 typographic cards (Generate / Judge / Architect)
- [x] `components/home/WorkPreviewSection.tsx` — 3 featured project cards with challenge callouts
- [x] `components/home/CredibilitySection.tsx` — 4 stats strip, count-up animation
- [x] `components/home/CtaSection.tsx` — full violet bg, single CTA to /contact
- [x] `components/home/HomePage.tsx` — orchestrates all 6 sections

## Phase 5 — App Routes

- [x] `app/page.tsx` — renders HomePage

## Phase 6 — Work Page

- [x] `components/work/WorkCard.tsx` — featured (full card + complexity callout) + minimal grid
- [x] `components/work/WorkPage.tsx`
- [x] `components/work/WorkUtils.tsx` — link icon/label helpers
- [x] `app/work/page.tsx`

## Phase 7 — About Page

- [x] `components/about/AboutHero.tsx` — bio paragraph, no terminal chrome
- [x] `components/about/ToolsSection.tsx` — "How I use Claude / Copilot / Codex" with trust/limitation breakdown
- [x] `components/about/ExperienceSection.tsx` — narrative timeline + skills tag cloud
- [x] `components/about/AboutPage.tsx`
- [x] `app/about/page.tsx`

## Phase 8 — Contact Page

- [x] `components/contact/ContactForm.tsx` — sonner toasts, fields: Name / Email / "What are you building?"
- [x] `components/contact/ContactPage.tsx` — form + contact info sidebar
- [x] `app/contact/page.tsx`

## Phase 9 — Polish & Infra

- [x] `app/sitemap.ts` — /work, /about, /contact
- [x] `app/manifest.ts` — theme_color `#7c3aed`
- [x] `next.config.ts` — EmailJS env vars + v2Domain + v3Domain
- [x] `npm run build` — zero errors ✓
- [x] `npm run lint` — zero errors ✓
- [x] Design tokens upgraded via ui-ux-pro-max — Modern Dark Cinema palette, hairline rgba borders, shadow system, radius scale, animation easing tokens, glass utility, hero-headline + section-heading utilities

## Phase 10 — Story-Scroll Single-Page Redesign

See `doc/plans/story-scroll-redesign.md` for full plan.

- [x] Install gsap + @gsap/react
- [x] Create `components/ui/story-scroll.tsx` — FlowArt + FlowSection (GSAP scroll-pin + rotate)
- [x] `app/layout.tsx` — remove Navbar, keep VersionSwitcher
- [x] `components/work/WorkData.tsx` — add `businessOutcome` field to interface + 3 featured projects
- [x] `components/home/HeroSection.tsx` — new subline copy, remove outer `<section>`
- [x] `components/home/ProblemSection.tsx` — add business framing above diff, remove outer `<section>`
- [x] `components/home/ApproachSection.tsx` — CEO-readable step bodies, remove outer `<section>`
- [x] `components/home/WorkPreviewSection.tsx` — show businessOutcome in cards, remove outer `<section>`
- [x] `components/home/CredibilitySection.tsx` — upgraded stats + "What you get" strip, remove outer `<section>`
- [x] `components/home/CtaSection.tsx` — add supporting line, remove outer `<section>`
- [x] `components/home/AboutContactSection.tsx` — new: bio + 4 social links
- [x] `components/home/HomePage.tsx` — FlowArt + 7 FlowSection panels
- [ ] Verify: 7 panels animate, last panel not pinned, VersionSwitcher above all panels

---

## Verification

- [ ] `:3002` dev server loads
- [ ] VersionSwitcher V2 shows V2 (current) + V3 — no V1
- [ ] VersionSwitcher V3 shows V2 + V3 (current)
- [ ] All 6 landing sections animate on scroll
- [ ] Count-up triggers once in CredibilitySection
- [ ] ProblemSection: red panel + green panel + SLOP watermark
- [ ] `/work`: 8 projects render, 4 featured with callout
- [ ] Contact form: sonner success + error toast
- [ ] No horizontal overflow on mobile
- [ ] Build + lint pass clean ✓
