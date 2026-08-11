import Image from "next/image";
import { founder } from "@/data/quests";
import { Reveal } from "@/components/ui/Reveal";

export function Founder() {
  return (
    <section className="bg-paper px-5 pb-40 pt-44 sm:px-8 md:pb-56 md:pt-64">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
            <span className="label label-large text-ember">01 /</span>
            <span className="label label-large text-mist">the lore</span>
          </div>
        </Reveal>

        <div className="mx-auto mt-20 flex max-w-fit flex-col items-center gap-16 lg:mt-24 lg:flex-row lg:items-center lg:gap-20">
          <div className="w-full max-w-[416px] lg:w-[416px]">
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

          <div className="w-full max-w-xl">
            <Reveal>
              <h3 className="display text-4xl font-bold uppercase leading-[0.9] tracking-[-0.01em] text-ink sm:text-5xl md:text-[3.5rem]">
                {founder.name}
              </h3>
              <p className="font-accent mt-4 text-lg italic text-ember sm:text-xl">
                {founder.role}
              </p>
              <div className="mt-8 max-w-xl">
                {founder.bio.map((paragraph, i) => {
                  const parts = paragraph.split("Academic Side Quest");
                  return (
                    <p
                      key={i}
                      className={`text-base leading-relaxed text-mist ${
                        i === 0 ? "" : "mt-6"
                      }`}
                    >
                      {parts.length > 1 ? (
                        <>
                          {parts[0]}
                          <span className="display font-bold uppercase text-ink">
                            Academic Side Quest
                          </span>
                          {parts[1]}
                        </>
                      ) : (
                        paragraph
                      )}
                    </p>
                  );
                })}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
