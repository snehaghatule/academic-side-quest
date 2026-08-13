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

function PullQuote({ children }: { children: ReactNode }) {
  return (
    <blockquote className="my-16 border-l-2 border-ember py-2 pl-8 sm:pl-12">
      <p className="font-accent text-3xl font-semibold italic leading-snug text-ink sm:text-4xl md:text-[2.7rem]">
        {children}
      </p>
    </blockquote>
  );
}

export function Founder() {
  const bio = founder.bio;
  const [refuses, ...rabbitRest] = bio[2].split(". ");
  const studentsAsk = bio[5].split('"');

  const body = (text: string, first = false) => (
    <p className={`text-base leading-relaxed text-mist ${first ? "" : "mt-6"}`}>
      {renderBrand(text)}
    </p>
  );

  return (
    <section className="bg-paper px-5 py-28 sm:px-8 md:py-40">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="flex items-center gap-x-5">
            <span className="label label-large text-ember">01 /</span>
            <span className="label label-large text-mist">the lore</span>
          </div>
        </Reveal>

        <Reveal>
          <h1 className="display mt-10 max-w-5xl text-5xl font-bold uppercase leading-[0.85] tracking-[-0.02em] text-ink sm:text-6xl md:text-7xl">
            {founder.name}
          </h1>
          <p className="font-accent mt-6 text-lg uppercase italic text-ember sm:text-xl">
            {founder.role}
          </p>
        </Reveal>

        <div className="mt-16 grid items-start gap-14 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <Reveal>
              <div className="lg:sticky lg:top-28">
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
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal>
              {body(bio[0], true)}
              {body(bio[1])}

              <PullQuote>Psychology refuses to stay where you put it.</PullQuote>
              {body(rabbitRest.join(". "))}
              {body(bio[3])}
              {body(bio[4])}

              <p className="mt-6 text-base leading-relaxed text-mist">{studentsAsk[0]}</p>
              <PullQuote>“{studentsAsk[1]}”</PullQuote>
              <p className="font-accent text-2xl italic text-ink">So we did.</p>

              <div className="mt-6">{body(bio[7])}</div>
              {body(bio[8])}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
