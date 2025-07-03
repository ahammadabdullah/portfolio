export interface Skill {
  name: string;
  level?: number;
}

export interface SkillCategory {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  skills: string[];
}

export interface Experience {
  title: string;
  company: string;
  duration: string;
  description: string;
  technologies: string[];
}

export const skillsData = {
  frontend: [
    "Next.js",
    "React",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "HTML5",
    "CSS3",
    "Redux",
  ],
  backend: [
    "Node.js",
    "Express.js",
    "MongoDB",
    "PostgreSQL",
    "Supabase",
    "Prisma",
    "JWT",
    "RESTful APIs",
  ],
  tools: [
    "Git",
    "Docker",
    "VS Code",
    "Figma",
    "Vercel",
    "Netlify",
    "Postman",
    "npm/yarn",
  ],
  other: [
    "Problem Solving",
    "Team Leadership",
    "Project Management",
    "UI/UX Design",
    "Agile Methodology",
    "Code Review",
    "Testing",
    "Documentation",
  ],
};

export const experienceData: Experience[] = [
  {
    title: "Jr Full Stack Developer",
    company: "Level 7 Marketing Solutions",
    duration: "2024 Jan - Present",
    description:
      "Developed and maintained multiple web applications using modern technologies. Collaborated with clients to deliver high-quality solutions that meet their business requirements.",
    technologies: ["React", "Next.js", "Node.js", "MongoDB", "Supabase"],
  },
];
