import { Metadata } from "next";
import HomePage from "@/components/home/HomePage";

export const metadata: Metadata = {
  title: "Ahammad Abdullah - Full Stack Developer",
  description:
    "Experienced Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies. Creating scalable, efficient digital solutions.",
  keywords: [
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "Node.js",
    "MongoDB",
    "JavaScript",
    "Web Development",
    "Ahammad Abdullah",
  ],
  openGraph: {
    title: "Ahammad Abdullah - Full Stack Developer",
    description:
      "Experienced Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies.",
    type: "website",
    url: "https://v2.ahammadabdullah.com",
  },
};

export default function Page() {
  return <HomePage />;
}
