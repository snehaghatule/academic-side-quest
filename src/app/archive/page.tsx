import type { Metadata } from "next";
import { PreviousQuests } from "@/components/sections/PreviousQuests";

export const metadata: Metadata = {
  title: "Previous Spirals",
  description: "Every session we've gone down a rabbit hole together.",
};

export default function ArchivePage() {
  return <PreviousQuests />;
}
