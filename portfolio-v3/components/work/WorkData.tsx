export interface Project {
  title: string;
  description: string;
  businessOutcome?: string;
  architecturalNote: string;
  complexityCallout: string;
  technologies: string[];
  links: { [key: string]: string };
  image?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: "Nirbhik.io",
    description:
      "Insurance aggregation platform with a schema-driven dynamic form engine, adaptive multi-step flows, and cross-page state persistence.",
    businessOutcome:
      "Schema-driven engine handling 8+ product types, 40+ fields per form — shipped in production without rewriting UI per product.",
    architecturalNote:
      "Schema-driven form engine — the schema defines field types, validation rules, and conditional branching. Swapping product types rewires the entire form without touching UI code.",
    complexityCallout:
      "Real-time schema validation with conditional branching across 8 form steps, granular RBAC, and Zustand state that survives page navigations.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Zustand"],
    links: { live: "http://stage.nirbhik.io/" },
    featured: true,
  },
  {
    title: "DevUtils",
    description:
      "Desktop application built with Electron that consolidates developer utilities — JSON formatter, base64, hash generators, regex tester — into a single offline-first tool.",
    businessOutcome:
      "Cross-platform desktop app with auto-update and code-signing — zero-dependency tool that works fully offline.",
    architecturalNote:
      "Next.js renders the UI inside Electron's renderer process. IPC bridges handle clipboard and file system access without exposing Node APIs to the renderer directly.",
    complexityCallout:
      "Cross-platform Electron packaging with code-signing, auto-update, and a Next.js renderer that works both in browser and in Electron without conditional branching.",
    technologies: ["Electron", "Next.js", "TypeScript", "Tailwind CSS"],
    links: {
      live: "https://github.com/ahammadabdullah/dev-utils/releases/",
      repo: "https://github.com/ahammadabdullah/dev-utils",
    },
    featured: true,
  },
  {
    title: "Sellto",
    description:
      "All-in-one digital store platform for selling software, communities, and digital products — from storefront to checkout to delivery.",
    businessOutcome:
      "Multi-tenant SaaS with Stripe payments and signed file delivery — isolated per-store data, zero server middleware for auth.",
    architecturalNote:
      "Supabase handles auth, storage, and real-time subscriptions. Product delivery is gated behind Supabase RLS policies — no server middleware needed.",
    complexityCallout:
      "Multi-tenant storefronts with isolated RLS policies, Stripe webhook idempotency, and a file-delivery system that expires signed URLs after download.",
    technologies: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
    links: { live: "https://beta.sellto.io" },
    featured: true,
  },
  {
    title: "AI SaaS Boilerplate",
    description:
      "Production-ready AI SaaS template with OpenAI integration, Stripe subscriptions, modular email templates, and role-based access.",
    businessOutcome:
      "Reusable foundation that skips 4–6 weeks of auth, billing, and AI plumbing — plan-gated features, usage metering, webhook idempotency.",
    architecturalNote:
      "Feature flags control which AI models are available per plan tier. Stripe webhooks sync subscription state to Prisma — no polling, no stale gates.",
    complexityCallout:
      "Plan-gated AI feature routing, Stripe webhook idempotency with Prisma transactions, and token usage metering per user per billing cycle.",
    technologies: ["Next.js", "OpenAI", "Stripe", "Prisma", "PostgreSQL"],
    links: { live: "https://ai-saas-template-three.vercel.app" },
    featured: true,
  },
  {
    title: "Taskify",
    description:
      "MERN stack task manager with drag-and-drop board layout, real-time updates, and multi-list organization.",
    architecturalNote: "DnD Kit handles drag state with optimistic UI updates synced to MongoDB via Express REST API.",
    complexityCallout: "Optimistic drag-and-drop with rollback on API failure.",
    technologies: ["React", "Node.js", "MongoDB", "Express", "DnD Kit"],
    links: {
      live: "https://taskify-ahammad-abdullah.web.app/",
      github: "https://github.com/ahammadabdullah/taskify",
    },
  },
  {
    title: "Edumi",
    description:
      "Online learning platform empowering educators to publish courses and students to track progress with certificate generation.",
    architecturalNote: "JWT auth with refresh token rotation. Course progress stored per-user in MongoDB with aggregation pipelines for completion stats.",
    complexityCallout: "JWT refresh rotation, course progress aggregation, and dynamic certificate PDF generation.",
    technologies: ["React", "Node.js", "MongoDB", "Express", "JWT"],
    links: {
      live: "https://edumi-453a2.web.app/",
      client: "https://github.com/ahammadabdullah/edumi-client",
      server: "https://github.com/ahammadabdullah/edumi-server",
    },
  },
  {
    title: "Community Food Share",
    description:
      "Platform connecting food donors with recipients to tackle food insecurity at the community level.",
    architecturalNote: "Firebase handles auth and real-time location-based matching. Express API validates and persists donation data to MongoDB.",
    complexityCallout: "Real-time donor-recipient matching with geolocation filtering.",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Firebase"],
    links: {
      live: "https://community-food-share.web.app",
      client: "https://github.com/ahammadabdullah/community-food-share-client",
      server: "https://github.com/ahammadabdullah/community-food-share-server",
    },
  },
  {
    title: "Portfolio V2",
    description:
      "Developer portfolio with GitHub dark aesthetic, terminal UI chrome, and scroll-triggered animations.",
    architecturalNote: "Framer Motion LazyMotion pattern keeps bundle lean. Intersection Observer lifts inView state to page level and passes as props.",
    complexityCallout: "Framer Motion LazyMotion with tree-shaken domAnimation bundle.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    links: {
      live: "https://hire.ahammadabdullah.dev",
      github: "https://github.com/ahammadabdullah/portfolio",
    },
  },
];
