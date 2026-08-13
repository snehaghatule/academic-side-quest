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
        <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
          <span className="label label-large text-ember">01 /</span>
          <span className="label label-large text-mist">the lore</span>
        </div>
        <h1 className="display mt-6 max-w-4xl text-balance text-4xl font-bold uppercase leading-[0.95] tracking-[-0.02em] text-ink sm:text-5xl md:text-6xl">
          {founder.name}
        </h1>
        <p className="font-accent mt-5 text-lg text-ink sm:text-xl">Founder &amp; Curious Human</p>

        <div className="mt-16 grid items-start gap-14 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <Reveal>
              {founder.photo ? (
                <Image
                  src={founder.photo}
                  alt={founder.name}
                  width={800}
                  height={1000}
                  className="aspect-[3/4] w-full rounded-t-[999px] object-cover"
                />
              ) : (
                <div className="flex aspect-[3/4] w-full items-center justify-center border border-dashed border-line bg-card p-8">
                  <p className="label max-w-[16rem] text-center text-mist/70">
                    your photo goes here — add one and it appears in this frame
                  </p>
                </div>
              )}
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal className="flex h-full flex-col gap-4 lg:gap-0 lg:justify-between">
              {body(bio[0])}
              {body(bio[1])}
              {body(bio[2])}
              {body(bio[3])}
              {body(bio[4])}
              <p className="text-[0.95rem] leading-relaxed text-mist">{studentsAsk[0]}</p>
              <p className="font-accent my-10 text-center text-2xl font-medium leading-snug text-ink sm:text-3xl">
                <span className="italic">“{studentsAsk[1]}”</span>{" "}
                <span className="not-italic">So we did.</span>
              </p>
              {body(bio[7])}
              {body(bio[8])}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
