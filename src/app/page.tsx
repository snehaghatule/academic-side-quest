import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { CurrentQuest } from "@/components/sections/CurrentQuest";
import { PreviousQuests } from "@/components/sections/PreviousQuests";
import { Join } from "@/components/sections/Join";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <CurrentQuest />
      <PreviousQuests />
      <Join />
    </>
  );
}
