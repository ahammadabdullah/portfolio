# Story-Scroll Single-Page Redesign

## Goal
Replace the Framer Motion + IntersectionObserver section layout with a GSAP FlowArt/FlowSection story-scroll. Each panel is full-screen, rotates in from 30° (bottom-left pivot) as you scroll, pins before the next takes over. Content rewritten for CEOs and technical decision-makers. Single-page — no navbar, About merged into final panel.

---

## Panel Architecture

| # | Section | Background |
|---|---|---|
| 01 | Hero | `#050506` |
| 02 | Problem | `#0d0d10` |
| 03 | Approach | `#14141a` |
| 04 | Work Preview | `#020203` |
| 05 | Credibility | `#0d0d10` |
| 06 | CTA | `#7C3AED` |
| 07 | About + Contact | `#050506` |

---

## Key Content Changes

**Hero subline**: Replace dev-centric copy with business cost framing:
> "Most companies discover AI slop 3 months after launch — when maintenance costs spike and every new feature breaks two old ones. I build software that compounds, not corrodes."

**Problem**: Add above code diff:
> "Your sprint velocity doubles. Your maintenance bill triples."

**Approach steps**: Rewritten for CEO readability (see ApproachSection.tsx).

**WorkData**: Add `businessOutcome: string` to Project interface + 3 featured projects.

**Credibility**: Upgrade stats language + add "What you get" guarantees strip.

**CTA**: Add supporting line: "30-minute call. Tell me what you're building."

**About+Contact (new)**: Bio from AboutData + 4 social links (WhatsApp, GitHub, LinkedIn, Email — placeholders).

---

## Implementation Steps

1. `npm install gsap @gsap/react`
2. Create `components/ui/story-scroll.tsx` (FlowArt + FlowSection; SSR-guard `gsap.registerPlugin`)
3. `app/layout.tsx` — remove Navbar; keep VersionSwitcher
4. `WorkData.tsx` — add `businessOutcome` field
5. Each section — remove outer `<section>`, adapt to fill FlowSection height with `flex flex-col justify-between`
6. Rewrite content (Hero subline, Approach steps, Credibility stats)
7. New `components/home/AboutContactSection.tsx`
8. `HomePage.tsx` — wrap with `<FlowArt>` + 7 `<FlowSection>` panels

---

## Risks

- GSAP `registerPlugin` must be client-only (SSR guard)
- Mobile: reduce rotation angle at `max-width: 768px`
- VersionSwitcher z-index must beat GSAP's panel `zIndex: i+1` (1–7)
- Last panel is NOT pinned (FlowArt skips pin for `i === sections.length - 1`) — intentional
