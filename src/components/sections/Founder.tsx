import Image from "next/image";
import { founder } from "@/data/quests";
import { Reveal } from "@/components/ui/Reveal";

export function Founder() {
  return (
    <section className="bg-paper px-5 py-32 sm:px-8 md:py-40">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
            <span className="label text-ember">01 /</span>
            <span className="label text-mist">the lore</span>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-16 lg:grid-cols-12 lg:gap-20">
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
              <h3 className="display text-4xl font-bold uppercase leading-[0.9] tracking-[-0.01em] text-ink sm:text-5xl md:text-7xl">
                {founder.name}
              </h3>
              <p className="font-accent mt-8 text-2xl uppercase italic leading-none text-ember sm:text-3xl">
                {founder.role}
              </p>
              <div className="mt-16 max-w-xl">
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
