export interface Experience {
  title: string;
  company: string;
  duration: string;
  description: string;
  outcomes: string[];
  technologies: string[];
}

export interface AITool {
  name: string;
  use: string;
  limitation: string;
}

export const bio =
  "Full Stack Developer based in Dhaka, Bangladesh. Currently building web applications at Rangs Group, working across the stack with Next.js, TypeScript, and Node.js. I use AI tools daily — and I review everything they produce before it ships.";

export const experienceData: Experience[] = [
  {
    title: "Jr Full Stack Developer",
    company: "Rangs Group",
    duration: "Jan 2024 — Present",
    description:
      "Build and maintain client-facing web applications across the full stack. Collaborate directly with clients to scope features and deliver production-ready code.",
    outcomes: [
      "Delivered Nirbhik.io insurance platform from scratch — schema-driven form engine handling 8+ form types",
      "Built Sellto digital store platform on Supabase with multi-tenant RLS and Stripe integration",
      "Maintained multiple concurrent client projects with zero downtime deployments",
    ],
    technologies: ["Next.js", "TypeScript", "React", "Node.js", "MongoDB", "Supabase", "Tailwind CSS"],
  },
];

export const aiToolsData: AITool[] = [
  {
    name: "Claude",
    use: "Architecture exploration, reviewing design decisions, explaining unfamiliar codebases, drafting documentation.",
    limitation:
      "Treats every problem as isolated. I provide the system context it can't infer — what already exists, what must stay stable, what the constraints are.",
  },
  {
    name: "GitHub Copilot",
    use: "Accelerating boilerplate — form wiring, type definitions, repetitive CRUD handlers. Saves 30–40% of keystroke time on predictable patterns.",
    limitation:
      "Autocompletes confidently into wrong patterns. I review every suggestion before accepting, especially in files with non-trivial business logic.",
  },
  {
    name: "Codex ",
    use: "Bulk transformations — migrating API shapes, converting component patterns across multiple files, generating test fixtures.",
    limitation:
      "Output quality degrades fast with scope. I break transformations into small, verifiable steps rather than one large prompt.",
  },
];

export const skillsData = {
  frontend: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Zustand", "Redux"],
  backend: ["Node.js", "Express.js", "PostgreSQL", "MongoDB", "Supabase", "Prisma", "REST APIs"],
  tools: ["Git", "Docker", "Vercel", "Figma", "Postman"],
  ai: ["Claude", "GitHub Copilot", "Codex / GPT-4o"],
};
