import Image from "next/image";
import type { ReactNode } from "react";
import { founder } from "@/data/quests";
import { Reveal } from "@/components/ui/Reveal";

function renderBrand(text: string): ReactNode {
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
  const bio = founder.bio;
  const studentsAsk = bio[5].split('"');
  const [firstName, ...rest] = founder.name.split(" ");
  const lastName = rest.join(" ");

  const body = (text: string) => (
    <p className="text-[0.95rem] leading-relaxed text-mist">{renderBrand(text)}</p>
  );

  return (
    <section className="bg-paper px-5 py-28 sm:px-8 md:py-40">
      <div className="mx-auto max-w-7xl">
        <h2 className="flex flex-wrap items-baseline justify-center gap-x-5 gap-y-2 text-center">
          <span className="display text-4xl font-bold uppercase leading-none tracking-[0.06em] text-ember sm:text-5xl md:text-6xl">
            01 /
          </span>
          <span className="display text-4xl font-bold uppercase leading-none tracking-[0.06em] text-mist sm:text-5xl md:text-6xl">
            the lore
          </span>
        </h2>

        <div className="mt-16 grid items-start gap-14 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <Reveal>
              <figure className="relative aspect-[3/4] w-full overflow-hidden">
                {founder.photo ? (
                  <Image
                    src={founder.photo}
                    alt={founder.name}
                    width={800}
                    height={1000}
                    className="object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center border border-dashed border-line bg-card p-8">
                    <p className="label max-w-[16rem] text-center text-mist/70">
                      your photo goes here — add one and it appears in this frame
                    </p>
                  </div>
                )}
              </figure>
              <div className="mt-5">
                <h3 className="display text-3xl font-bold uppercase leading-[0.9] tracking-[-0.02em] text-ink sm:text-4xl">
                  {firstName}
                  {lastName ? <span className="block pl-8">{lastName}</span> : null}
                </h3>
                <p className="font-accent mt-3 text-lg text-ink">{founder.role}</p>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal className="flex flex-col gap-6">
              {body(bio[0])}
              {body(bio[1])}
              {body(bio[2])}
              {body(bio[3])}
              {body(bio[4])}
              <p className="text-[0.95rem] leading-relaxed text-mist">{studentsAsk[0]}</p>
              <blockquote className="border-l-2 border-ember pl-6">
                <p className="font-accent text-2xl font-medium italic leading-snug text-ink sm:text-3xl">
                  “{studentsAsk[1]}”
                </p>
              </blockquote>
              <p className="text-[0.95rem] leading-relaxed text-mist">So we did.</p>
              {body(bio[7])}
              {body(bio[8])}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
