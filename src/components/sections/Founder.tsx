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

  const body = (text: string) => (
    <p className="text-[0.95rem] leading-relaxed text-mist">{renderBrand(text)}</p>
  );

  return (
    <section className="bg-paper px-5 py-28 sm:px-8 md:py-40">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center">
          <span className="label label-large text-ember">01 /</span>
          <h2 className="display mt-4 text-4xl font-bold uppercase leading-none tracking-[0.06em] text-mist sm:text-5xl md:text-6xl">
            the lore
          </h2>
        </div>

        <div className="mt-16 grid gap-14 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <Reveal className="h-full">
              <figure className="relative aspect-[3/4] w-full overflow-hidden lg:h-full">
                {founder.photo ? (
                  <Image
                    src={founder.photo}
                    alt={founder.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
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
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal className="flex flex-col gap-6">
              <div>
                <p className="display text-xl font-bold uppercase leading-none tracking-[-0.01em] text-ink sm:text-2xl">
                  {founder.name}
                </p>
                <p className="mt-2 font-display text-xs font-semibold tracking-[0.14em] text-ember">
                  {founder.role}
                </p>
              </div>
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
