import Image from "next/image";
import Link from "next/link";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";

const explore = [
  {
    num: "01",
    label: "The Lore",
    href: "/about",
    copy: "story behind the rabbit hole",
  },
  {
    num: "02",
    label: "What's Cooking?",
    href: "/current",
    copy: "the quest we're gathering for next",
  },
  {
    num: "03",
    label: "Previous Spirals",
    href: "/archive",
    copy: "every rabbit hole we've gone down so far",
  },
];

export default function Home() {
  return (
    <>
      <Hero />

      {/* photograph */}
      <section className="bg-paper px-5 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="relative aspect-[3/2] w-full overflow-hidden border border-line">
            <Image
              src="/images/home-photo.jpg"
              alt=""
              fill
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="object-cover object-center"
            />
            <div className="absolute inset-x-0 bottom-0 flex flex-col items-center bg-gradient-to-t from-black/70 via-black/25 to-transparent px-6 pb-8 pt-20 text-center sm:pb-10">
              <p className="font-accent max-w-xl text-2xl font-semibold italic leading-snug text-ink sm:text-3xl">
                Archival footage of us figuring things out.
              </p>
              <p className="label mt-4 text-ink/75">
                Academic Side Quest, 16 July 2025.
              </p>
            </div>
          </div>
        </div>
      </section>

      <About />
      <section className="bg-paper px-5 pb-24 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="label label-large text-center text-mist">
            enter the rabbit hole
          </p>
          <div className="mt-8 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-3">
            {explore.map((e) => (
              <Link
                key={e.href}
                href={e.href}
                className="group bg-paper p-6 transition-colors duration-500 hover:bg-card sm:p-8"
              >
                <span className="font-accent text-lg italic text-ember">{e.num}</span>
                <h3 className="display mt-4 text-xl font-bold uppercase leading-tight text-ink transition-colors duration-500 group-hover:text-ember sm:text-2xl">
                  {e.label}
                </h3>
                <p className="mt-2 text-sm text-mist">{e.copy}</p>
                <span className="mt-5 inline-block text-ember transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
