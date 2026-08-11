import Image from "next/image";
import { founder } from "@/data/quests";
import { Reveal } from "@/components/ui/Reveal";

const pillars = [
  {
    number: "01",
    title: "Explore",
    copy: "Research papers, theories, and ideas worth diving into. We follow the references until they run out — and then we find more.",
  },
  {
    number: "02",
    title: "Discuss",
    copy: "Conversations around psychology, behaviour, and the questions we keep coming back to at 2 a.m.",
  },
  {
    number: "03",
    title: "Connect",
    copy: "A community of people who enjoy learning, questioning, and exploring together.",
  },
];

export function About() {
  return (
    <>
      <section
        id="about"
        className="relative scroll-mt-24 bg-paper px-5 py-28 sm:px-8 md:py-40"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-12 lg:gap-10">
            {/* sticky statement */}
            <div className="lg:col-span-5">
              <div className="lg:sticky lg:top-32">
                <Reveal>
                  <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
                    <span className="label text-ember">01 /</span>
                    <span className="label text-mist">the lore</span>
                  </div>
                  <h2 className="display mt-6 text-5xl font-bold uppercase leading-[0.95] tracking-[-0.02em] text-ember sm:text-6xl md:text-7xl">
                    Once upon a time,
                    <br />
                    <span className="text-4xl sm:text-5xl md:text-6xl">
                      ...someone asked,
                    </span>
                    <br />
                    <em className="font-accent lowercase italic text-ink">
                      &ldquo;Wait... but why?&rdquo;
                    </em>
                  </h2>
                </Reveal>
              </div>
            </div>

            {/* flowing editorial copy + index rows */}
            <div className="lg:col-span-7">
              <Reveal>
                <p className="text-balance text-2xl leading-snug text-ink-soft sm:text-[1.7rem]">
                  Academic Side Quest is a community where we meet twice a month to explore
                  psychology research, human behaviour, and ideas that make us pause,
                  question, and want to know more.
                </p>
              </Reveal>

              <div className="mt-16 border-t border-line">
                {pillars.map((pillar, i) => (
                  <Reveal key={pillar.number} delay={0.06 * i}>
                    <div
                      className="group grid grid-cols-[3rem_1fr_auto] items-baseline gap-x-4 gap-y-2 border-b border-line py-8 transition-colors duration-500 hover:bg-card/50 sm:grid-cols-[4rem_1fr_auto] sm:gap-x-8 sm:px-3"
                      data-cursor
                    >
                      <span className="font-accent text-lg italic text-ember">
                        {pillar.number}
                      </span>
                      <div>
                        <h3 className="display text-2xl font-bold uppercase leading-none text-ink transition-transform duration-500 group-hover:translate-x-2 sm:text-3xl">
                          {pillar.title}
                        </h3>
                        <p className="mt-3 max-w-md text-[0.95rem] leading-relaxed text-mist">
                          {pillar.copy}
                        </p>
                      </div>
                      <span
                        aria-hidden
                        className="text-ember transition-transform duration-500 group-hover:translate-x-2"
                      >
                        →
                      </span>
                    </div>
                  </Reveal>
                ))}
              </div>

              <Reveal delay={0.1}>
                <p className="mt-8 text-sm text-mist">
                  one topic. one hour. not a cult.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* founder */}
      <section className="border-t border-line bg-paper px-5 py-28 sm:px-8 md:py-36">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
              <span className="label text-ember">04 /</span>
              <span className="label text-mist">the founder</span>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <Reveal>
                {founder.photo ? (
                  <Image
                    src={founder.photo}
                    alt={founder.name}
                    width={800}
                    height={1000}
                    className="aspect-[4/5] w-full border border-line object-cover"
                  />
                ) : (
                  <div className="flex aspect-[4/5] w-full items-center justify-center border border-dashed border-line bg-card p-8">
                    <p className="label max-w-[16rem] text-center text-mist/70">
                      your photo goes here — add one and it appears in this frame
                    </p>
                  </div>
                )}
              </Reveal>
            </div>

            <div className="flex flex-col justify-center lg:col-span-7">
              <Reveal>
                <h3 className="display text-3xl font-bold uppercase leading-tight text-ink sm:text-4xl md:text-5xl">
                  {founder.name}
                </h3>
                <p className="label mt-4 text-ember">{founder.role}</p>
                <p className="mt-8 max-w-xl text-lg leading-relaxed text-mist">
                  {founder.bio}
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
