"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const links = [
  { label: "The Main Character Page", short: "Home", href: "#top" },
  { label: "The Lore", short: "The Lore", href: "#about" },
  { label: "What's Cooking?", short: "What's Cooking?", href: "#current" },
  { label: "Previous Spirals", short: "The Archive", href: "#quests" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-line bg-paper/85 backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8">
          <a
            href="#top"
            onClick={() => setOpen(false)}
            className="label text-sm text-ink transition-colors hover:text-ember sm:text-base"
          >
            Academic Side <em className="font-accent lowercase italic">Quest</em>
          </a>

          <div className="hidden items-center gap-9 lg:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="link-underline label text-[0.7rem] text-mist transition-colors hover:text-ink"
              >
                {link.short}
              </a>
            ))}
            <a
              href="#join"
              className="label rounded-full bg-ember px-5 py-2.5 text-[0.7rem] text-paper-light transition-all duration-300 hover:-translate-y-0.5 hover:bg-ember-deep"
            >
              Unlock Access
            </a>
          </div>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-[6px] lg:hidden"
          >
            <span
              className={`block h-[2px] w-6 bg-ink transition-transform duration-300 ${
                open ? "translate-y-[4px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-[2px] w-6 bg-ink transition-transform duration-300 ${
                open ? "-translate-y-[4px] -rotate-45" : ""
              }`}
            />
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 flex flex-col justify-center bg-paper px-8 lg:hidden"
          >
            <div className="flex flex-col gap-5">
              {links.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.06 * i, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="display text-3xl font-bold uppercase leading-tight text-ink transition-colors hover:text-ember"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#join"
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.06 * links.length, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="label mt-5 rounded-full bg-ember px-6 py-3.5 text-center text-sm text-paper-light"
              >
                Unlock Access
              </motion.a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
