import Link from "next/link";
import { Hero } from "@/components/sections/Hero";

const explore = [
  {
    num: "01",
    label: "The Lore",
    href: "/about",
    copy: "what this rabbit hole actually is",
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
      <section className="bg-paper px-5 pb-24 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="label text-mist">enter the rabbit hole</p>
          <div className="mt-6 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-3">
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
