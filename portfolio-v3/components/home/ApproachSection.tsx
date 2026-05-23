"use client";

const steps = [
  {
    number: "01",
    label: "Architect",
    body: "Before writing a single line, I define the system — what data flows where, what breaks under load, what the edge cases are. AI can't plan what it doesn't understand.",
  },
  {
    number: "02",
    label: "Generate",
    body: "With a clear blueprint, AI tools produce 80% of the implementation fast. The plan constrains the output. Speed without sacrificing intent.",
  },
  {
    number: "03",
    label: "Review",
    body: "Every output gets interrogated: Does it type? Does it compose? Does it scale? Nothing lands in production unread.",
  },
];

export default function ApproachSection() {
  return (
    <>
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-[--color-text-muted]">
        02 — The Method
      </p>

      <hr className="border-none border-t border-white/10" />

      <div>
        <h2 className="text-[clamp(3rem,10vw,10rem)] font-black leading-[0.88] uppercase tracking-tight text-[--color-text-primary]">
          Architect.<br />
          Generate.<br />
          Review.
        </h2>
      </div>

      <hr className="border-none border-t border-white/10" />

      <p className="max-w-[50ch] text-[clamp(1rem,2vw,1.5rem)] font-normal leading-relaxed text-[--color-text-secondary]">
        The judgment layer AI can&apos;t provide. Applied across 10+ projects — insurance platforms, SaaS tools, Electron apps, AI boilerplates.
      </p>

      <hr className="border-none border-t border-white/10" />

      <div className="flex flex-wrap gap-[3vw]">
        {steps.map((step) => (
          <div key={step.number} className="min-w-[200px] flex-1">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider text-[--color-text-primary]">
              {step.number} — {step.label}
            </p>
            <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed text-[--color-text-secondary] opacity-75">
              {step.body}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
