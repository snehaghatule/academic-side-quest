import type { Metadata } from "next";
import { Join } from "@/components/sections/Join";

export const metadata: Metadata = {
  title: "Unlock Access",
  description: "Join the Academic Side Quest community. No syllabus, no grades — just curiosity.",
};

export default function JoinPage() {
  return <Join />;
}
