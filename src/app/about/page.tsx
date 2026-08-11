import type { Metadata } from "next";
import { About } from "@/components/sections/About";

export const metadata: Metadata = {
  title: "The Lore",
  description:
    "Once upon a time... what Academic Side Quest is, how it works, and why we keep asking questions.",
};

export default function AboutPage() {
  return <About />;
}
