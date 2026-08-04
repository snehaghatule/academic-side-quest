import { previousQuests } from "@/data/quests";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/sections/SectionHeading";

export function PreviousQuests() {
  return (
    <section id="quests" className="relative scroll-mt-24 bg-paper px-5 py-28 sm:px-8 md:py-40">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          index="03"
          label="previous spirals"
          title="The Archive"
          description="Every session we've gone down a rabbit hole together. Scroll for the whole trail."
        />

        <div className="mt-16">
          {previousQuests.map((quest, i) => (
            <Reveal key={quest.number} delay={0.04 * (i % 3)}>
              <div
                className="group grid gap-2 border-t border-line py-8 transition-colors duration-500 hover:bg-card/40 md:grid-cols-[7rem_1fr_auto] md:items-baseline md:gap-10 md:px-4 md:py-10"
                data-cursor
              >
                <span className="font-accent self-start text-xl italic text-ember">
                  #{quest.number}
                </span>

                <div>
                  <h3 className="display text-2xl font-bold uppercase leading-[1.05] tracking-[-0.01em] text-ink transition-transform duration-500 group-hover:translate-x-2 md:text-3xl">
                    {quest.title}
                  </h3>
                  <p className="mt-3 max-w-xl text-sm leading-relaxed text-mist md:text-[0.95rem]">
                    {quest.description}
                  </p>
                  <p className="mt-2.5 text-xs uppercase tracking-[0.12em] text-mist/70">
                    {quest.topics.join("  ·  ")}
                  </p>
                </div>

                <span
                  aria-hidden
                  className="hidden text-xl text-ember transition-transform duration-500 group-hover:translate-x-1.5 md:block"
                >
                  →
                </span>
              </div>
            </Reveal>
          ))}
          <div className="border-t border-line" />
        </div>

        <Reveal delay={0.1}>
          <p className="label mt-14 text-sm text-mist">the next one is already in the works</p>
        </Reveal>
      </div>
    </section>
  );
}
