"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { currentQuest, hero } from "@/data/quests";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const titleY = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : 120]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative flex min-h-screen flex-col overflow-hidden bg-paper"
    >
      {/* kicker */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 mx-auto mt-28 w-full max-w-7xl px-5 sm:mt-32 sm:px-8 md:mt-36"
      >
        <span className="label label-large text-mist">{hero.kicker}</span>
      </motion.div>

      {/* giant statement */}
      <div className="relative z-10 mx-auto mt-auto w-full max-w-7xl px-5 pb-16 sm:px-8">
        <motion.div style={{ y: titleY, opacity: fade }}>
          <h1 className="display select-none">
            <span className="display-expanded block text-[clamp(3.4rem,13.5vw,12.5rem)] font-extrabold uppercase leading-[0.88] tracking-[-0.04em] text-ink">
              Academic
            </span>
            <span className="mt-1 block text-[clamp(2.2rem,9vw,8rem)] font-extrabold uppercase leading-[0.95] tracking-[-0.03em]">
              <span className="text-outline-ink">Side</span>{" "}
              <em className="font-accent italic lowercase text-ember">Quest</em>
            </span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-col gap-8 md:flex-row md:items-end md:justify-between"
        >
          <p className="max-w-md text-balance text-lg leading-relaxed text-ink-soft sm:text-xl">
            A space for curious minds exploring{" "}
            <span className="marker text-ink">psychology, research,</span> and the
            weirdness of being human.
          </p>

          <div className="flex flex-wrap items-center gap-5">
            <Link
              href="/join"
              className="label group rounded-full bg-ember px-8 py-4 text-sm text-paper-light transition-all duration-300 hover:-translate-y-0.5 hover:bg-ember-deep"
            >
              {hero.cta}
              <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
            <Link
              href="/archive"
              className="link-underline label text-sm text-ink-soft transition-colors hover:text-ink"
            >
              browse the archive ↓
            </Link>
          </div>
        </motion.div>

        {/* next quest teaser */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.55 }}
        >
          <Link
            href="/current"
            className="mt-12 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-line pt-5"
          >
            <span className="label text-xs text-ember">what&apos;s cooking? #{currentQuest.number}</span>
            <span className="hidden h-px w-8 bg-line sm:block" />
            <span className="text-sm text-mist">{currentQuest.date}</span>
            <span className="font-accent italic text-base text-ink-soft">
              {currentQuest.title}
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
