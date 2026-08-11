import { currentQuest } from "@/data/quests";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/sections/SectionHeading";

export function CurrentQuest() {
  return (
    <section id="current" className="relative scroll-mt-24 bg-paper px-5 py-28 sm:px-8 md:py-44">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          index="02"
          label="what's cooking?"
          title="Current Quest"
          description="The session we're gathering for next."
        />

        <div className="mt-16 grid gap-14 border-t border-line pt-16 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Reveal delay={0.05}>
              <h3 className="display text-balance text-3xl font-bold uppercase leading-[1.05] tracking-[-0.01em] text-ink sm:text-4xl md:text-5xl">
                {currentQuest.title}
              </h3>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-8 font-accent text-2xl italic text-ember sm:text-[1.7rem]">
                {currentQuest.date}
              </p>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-mist">
                {currentQuest.tagline}
              </p>
            </Reveal>
          </div>

          <div className="flex flex-col justify-between lg:col-span-5">
            <Reveal delay={0.1}>
              <div>
                <p className="label text-mist">topics we&apos;ll unpack</p>
                <div className="mt-4 flex flex-wrap gap-2.5">
                  {currentQuest.topics.map((topic) => (
                    <span
                      key={topic}
                      className="rounded-full border border-line px-4 py-1.5 text-sm text-ink-soft transition-colors duration-300 hover:border-ember hover:text-ink"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
                <p className="mt-7 text-[0.95rem] leading-relaxed text-mist sm:text-base">
                  {currentQuest.description}
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="mt-10">
                <Link
                  href="/join"
                  className="label group inline-block rounded-full bg-ember px-8 py-4 text-sm text-paper-light transition-all duration-300 hover:-translate-y-0.5 hover:bg-ember-deep"
                >
                  {currentQuest.registerLabel}
                  <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
