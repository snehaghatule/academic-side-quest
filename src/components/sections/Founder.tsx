import Image from "next/image";
import type { ReactNode } from "react";
import { founder } from "@/data/quests";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/sections/SectionHeading";

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
    <blockquote className="my-10 border-l-2 border-ember pl-6">
      <p className="font-accent text-2xl font-semibold italic leading-snug text-ink sm:text-3xl">
        {children}
      </p>
    </blockquote>
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
        <SectionHeading
          index="01"
          label="the lore"
          title={founder.name}
          description={founder.role}
          descriptionClassName="font-accent text-ink"
        />

        <div className="mt-14 grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
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

          <div className="lg:col-span-6">
            <Reveal className="flex h-full flex-col gap-4 lg:gap-0 lg:justify-between">
              {body(bio[0])}
              {body(bio[1])}
              {body(bio[2])}
              {body(bio[3])}
              {body(bio[4])}
              <p className="text-[0.95rem] leading-relaxed text-mist">{studentsAsk[0]}</p>
              <PullQuote>“{studentsAsk[1]}” So we did.</PullQuote>
              {body(bio[7])}
              {body(bio[8])}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
