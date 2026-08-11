import Image from "next/image";
import type { ReactNode } from "react";
import { founder } from "@/data/quests";
import { Reveal } from "@/components/ui/Reveal";

function renderParagraph(text: string): ReactNode {
  const parts = text.split("Academic Side Quest");
  if (parts.length < 2) return text;
  return (
    <>
      {parts[0]}
      <span className="display font-bold uppercase text-ink">
        Academic Side Quest
      </span>
      {parts[1]}
    </>
  );
}

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

        <div className="mt-16 grid items-start gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              {founder.photo ? (
                <Image
                  src={founder.photo}
                  alt={founder.name}
                  width={800}
                  height={1000}
                  className="aspect-[4/5] w-full max-w-[340px] border border-line object-cover"
                />
              ) : (
                <div className="flex aspect-[4/5] w-full max-w-[340px] items-center justify-center border border-dashed border-line bg-card p-8">
                  <p className="label max-w-[16rem] text-center text-mist/70">
                    your photo goes here — add one and it appears in this frame
                  </p>
                </div>
              )}
            </Reveal>
          </div>

          <div className="lg:col-span-7 lg:pt-6">
            <Reveal>
              <h1 className="display text-4xl font-bold uppercase leading-[0.9] tracking-[-0.01em] text-ink sm:text-5xl md:text-[3.5rem]">
                {founder.name}
              </h1>
              <p className="font-accent mt-4 text-lg italic text-ember sm:text-xl">
                {founder.role}
              </p>
            </Reveal>
          </div>
        </div>

        <div className="mt-24 max-w-2xl lg:mt-32">
          {founder.story.map((section, i) => (
            <Reveal key={section.number} className={i === 0 ? "" : "mt-20 lg:mt-24"}>
              <div className="flex items-baseline gap-3">
                <span className="label text-ember">{section.number} —</span>
                <span className="label text-mist">{section.title}</span>
              </div>
              <div className="mt-8">
                {section.blocks.map((block, j) => (
                  <div key={j}>
                    {typeof block === "string" ? (
                      <p
                        className={`text-base leading-relaxed text-mist ${
                          j === 0 ? "" : "mt-6"
                        }`}
                      >
                        {renderParagraph(block)}
                      </p>
                    ) : (
                      <blockquote className="my-14 border-l-2 border-ember py-2 pl-8 sm:pl-10">
                        <p className="font-accent text-3xl italic leading-snug text-ink sm:text-4xl md:text-5xl">
                          “{block.quote}”
                        </p>
                      </blockquote>
                    )}
                  </div>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
