import type { Metadata } from "next";
import { Founder } from "@/components/sections/Founder";

export const metadata: Metadata = {
  title: "The Founder",
  description: "The human behind the Academic Side Quest rabbit hole.",
};

export default function AboutPage() {
  return <Founder />;
}
