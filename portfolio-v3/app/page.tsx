import { Metadata } from "next";
import HomePage from "@/components/home/HomePage";

export const metadata: Metadata = {
  title: "Ahammad Abdullah — Full Stack Developer",
  description:
    "Full Stack Developer who builds with AI tools the right way. Clean architecture, maintainable code, systems that scale.",
};

export default function Page() {
  return <HomePage />;
}
