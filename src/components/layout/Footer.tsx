import Link from "next/link";
import { currentQuest } from "@/data/quests";

const footerLinks = [
  { label: "The Main Character Page", href: "/" },
  { label: "The Lore", href: "/about" },
  { label: "What's Cooking?", href: "/current" },
  { label: "Previous Spirals", href: "/archive" },
  { label: "Unlock Access", href: "/join" },
];

const socials = [{ label: "Substack", href: "https://substack.com/@academicsidequest" }];

export function Footer() {
  return (
    <footer className="relative bg-paper text-ink">
      <div className="mx-auto max-w-7xl border-t border-line px-5 py-20 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <p className="label text-mist">a twice-a-month rabbit hole</p>
            <p className="display mt-5 max-w-md text-3xl font-bold uppercase leading-[1.05] sm:text-4xl">
              See you at the{" "}
              <em className="font-accent lowercase italic text-ember">next quest.</em>
            </p>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-mist">
              one topic. one hour. not a cult.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:col-span-6">
            <div>
              <p className="label text-xs text-mist/70">Wander</p>
              <ul className="mt-5 space-y-3">
                {footerLinks.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="link-underline label text-[0.7rem] text-ink-soft transition-colors hover:text-ember"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="label text-xs text-mist/70">Find us</p>
              <ul className="mt-5 space-y-3">
                {socials.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      className="link-underline label text-[0.7rem] text-ink-soft transition-colors hover:text-ember"
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="label text-xs text-mist/70">Currently</p>
              <p className="mt-5 text-sm leading-relaxed text-ink-soft">
                thinking about {currentQuest.tagline.toLowerCase()}
              </p>
              <p className="mt-4 text-sm text-mist">
                meetings: twice a month,
                <br />
                online + wherever the question leads.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20 flex flex-col items-start justify-between gap-4 border-t border-line pt-8 sm:flex-row sm:items-center">
          <p className="label text-xs text-mist/70">
            © {new Date().getFullYear()} Academic Side Quest
          </p>
          <Link
            href="/"
            className="link-underline label text-xs text-ink-soft transition-colors hover:text-ember"
          >
            back to the start ↑
          </Link>
        </div>
      </div>
    </footer>
  );
}
