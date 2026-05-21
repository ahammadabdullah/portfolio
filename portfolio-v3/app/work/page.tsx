import { Metadata } from "next";
import WorkPage from "@/components/work/WorkPage";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Projects built with Next.js, TypeScript, and intentional architecture. Every project involved decisions AI couldn't make on its own.",
};

export default function Page() {
  return <WorkPage />;
}
