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
    <section
      id="about"
      className="relative scroll-mt-24 bg-paper px-5 pb-28 sm:px-8 md:pb-40"
    >
      <div className="mx-auto max-w-7xl">
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
    </section>
  );
}
