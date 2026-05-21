import { Metadata } from "next";
import AboutPage from "@/components/about/AboutPage";

export const metadata: Metadata = {
  title: "About",
  description:
    "Full Stack Developer based in Dhaka. I use Claude, Copilot, and Codex daily — and I review everything before it ships.",
};

export default function Page() {
  return <AboutPage />;
}
