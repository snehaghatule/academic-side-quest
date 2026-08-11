import Image from "next/image";
import { founder } from "@/data/quests";
import { Reveal } from "@/components/ui/Reveal";

export function Founder() {
  return (
    <section className="bg-paper px-5 py-28 sm:px-8 md:py-36">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
            <span className="label text-ember">01 /</span>
            <span className="label text-mist">the lore</span>
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
              <div className="mt-8 max-w-xl">
                {founder.bio.map((paragraph, i) => (
                  <p
                    key={i}
                    className={`leading-relaxed text-mist ${
                      i === 0 ? "text-lg" : "mt-5 text-base"
                    }`}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
