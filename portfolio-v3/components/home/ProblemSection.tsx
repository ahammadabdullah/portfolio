"use client";

import { m } from "@/providers/MotionProvider";
import { useInView } from "react-intersection-observer";

const badCode = [
  { line: `async function getUser(id) {`, badge: null },
  { line: `  const res = await fetch(`, badge: null },
  { line: `    "https://api.example.com/users/" + id,`, badge: "Hardcoded URL" },
  { line: `    { headers: { "x-api-key": "sk-live-abc123" } }`, badge: "Exposed credential" },
  { line: `  )`, badge: null },
  { line: `  const data = await res.json()`, badge: null },
  { line: `  // TODO: handle errors later`, badge: "Zero error handling" },
  { line: `  return data`, badge: null },
  { line: `}`, badge: null },
  { line: ``, badge: null },
  { line: `function UserList() {`, badge: null },
  { line: `  const [users, setUsers] = useState([])`, badge: "No TypeScript" },
  { line: `  users.forEach(async (u) => {`, badge: "N+1 query" },
  { line: `    await getUser(u.id)`, badge: null },
  { line: `  })`, badge: null },
  { line: `}`, badge: null },
];

const cleanCode = [
  { line: `const userService = {`, badge: null },
  { line: `  async getById(id: string): Promise<User> {`, badge: "Typed" },
  { line: `    const res = await fetch(`, badge: null },
  { line: `      \`\${env.API_URL}/users/\${id}\`,`, badge: "Env var" },
  { line: `      { headers: { "x-api-key": env.API_KEY } }`, badge: "Injected secret" },
  { line: `    )`, badge: null },
  { line: `    if (!res.ok) throw new ApiError(res.status)`, badge: "Error handled" },
  { line: `    return userSchema.parse(await res.json())`, badge: "Validated" },
  { line: `  },`, badge: null },
  { line: ``, badge: null },
  { line: `  async getMany(ids: string[]): Promise<User[]> {`, badge: null },
  { line: `    return Promise.all(ids.map(this.getById))`, badge: "Batched" },
  { line: `  },`, badge: null },
  { line: `}`, badge: null },
];

function CodePanel({
  lines,
  variant,
  inView,
}: {
  lines: typeof badCode;
  variant: "bad" | "clean";
  inView: boolean;
}) {
  const isBad = variant === "bad";
  return (
    <div
      className={`relative rounded-2xl border overflow-hidden ${
        isBad
          ? "border-[rgba(239,68,68,0.20)] bg-[rgba(239,68,68,0.04)] shadow-slop"
          : "border-[--color-border-accent] bg-[rgba(124,58,237,0.04)]"
      }`}
    >
      {/* Watermark — bad panel only */}
      {isBad && (
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
          aria-hidden
        >
          <span
            className="text-[10rem] font-black text-[--color-slop-red] rotate-[-25deg] opacity-[0.05] leading-none"
          >
            SLOP
          </span>
        </div>
      )}

      {/* Panel header */}
      <div
        className={`flex items-center justify-between px-4 py-3 border-b ${
          isBad ? "border-[rgba(239,68,68,0.15)]" : "border-[--color-border-accent]"
        }`}
      >
        <span
          className={`text-xs uppercase tracking-widest font-semibold ${
            isBad ? "text-[--color-slop-red]" : "text-[--color-accent]"
          }`}
        >
          {isBad ? "What shipped" : "What it should look like"}
        </span>
        <div className="flex gap-1.5">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className={`w-2.5 h-2.5 rounded-full ${
                isBad ? "bg-[rgba(239,68,68,0.30)]" : "bg-[rgba(124,58,237,0.30)]"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Code */}
      <div className="p-4 font-mono text-xs md:text-sm overflow-x-auto">
        {lines.map((item, i) => (
          <m.div
            key={i}
            initial={{ opacity: 0, x: isBad ? -8 : 8 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.3, delay: 0.3 + i * 0.04 }}
            className="flex items-center gap-3 leading-relaxed min-h-[1.6em]"
          >
            <span
              className={`shrink-0 w-6 text-right text-[--color-text-muted] text-[10px] select-none`}
            >
              {i + 1}
            </span>
            <span
              className={`whitespace-pre ${
                isBad ? "text-[--color-text-secondary]" : "text-[--color-text-primary]"
              }`}
            >
              {item.line}
            </span>
            {item.badge && (
              <span
                className={`ml-auto shrink-0 text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                  isBad
                    ? "bg-[--color-slop-red]/15 text-[--color-slop-red]"
                    : "bg-[--color-accent]/15 text-[--color-accent]"
                }`}
              >
                {item.badge}
              </span>
            )}
          </m.div>
        ))}
      </div>
    </div>
  );
}

export default function ProblemSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section ref={ref} className="max-w-6xl mx-auto px-6 md:px-12 py-28 md:py-40">
      {/* Label */}
      <m.p
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-xs uppercase tracking-widest font-semibold text-[--color-accent] mb-4"
      >
        01 / The Problem
      </m.p>

      {/* Heading */}
      <m.h2
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="text-4xl md:text-5xl font-bold tracking-[-0.02em] text-[--color-text-primary] mb-6 max-w-2xl"
      >
        What &ldquo;AI-generated&rdquo; actually looks like in production
      </m.h2>

      <m.p
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-[--color-text-secondary] text-lg leading-[1.7] max-w-xl mb-14"
      >
        The problem isn&apos;t using AI. It&apos;s not knowing what good looks like.
      </m.p>

      {/* Split panels */}
      <div className="grid md:grid-cols-2 gap-6">
        <CodePanel lines={badCode} variant="bad" inView={inView} />
        <CodePanel lines={cleanCode} variant="clean" inView={inView} />
      </div>
    </section>
  );
}
