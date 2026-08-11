import type { Metadata } from "next";
import { CurrentQuest } from "@/components/sections/CurrentQuest";

export const metadata: Metadata = {
  title: "What's Cooking?",
  description: "The current quest we're gathering for next — the topic, the date, the rabbit hole.",
};

export default function CurrentPage() {
  return <CurrentQuest />;
}
