"use client";

import { useState, type FormEvent } from "react";
import { joinForm } from "@/data/quests";
import { Reveal } from "@/components/ui/Reveal";

const perks = [
  "invites to every quest (no spam, we promise)",
  "permission to lurk for the first session — that's completely fine",
  "a reading list that keeps getting longer",
  "people who say 'okay but hear me out' unironically",
];

export function Join() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(false);
  const [name, setName] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setError(false);
    try {
      const res = await fetch("https://formspree.io/f/mzeppeqg", {
        method: "POST",
        body: new FormData(e.currentTarget),
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setSubmitting(false);
    }
  };

  const inputClass =
    "w-full border-b border-line bg-transparent py-3 text-base text-ink placeholder:text-mist/70 outline-none transition-colors focus:border-ember";

  return (
    <section id="join" className="relative scroll-mt-24 bg-paper px-5 py-28 sm:px-8 md:py-40">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-12 lg:gap-20">
        <div className="lg:col-span-5">
          <Reveal>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
              <span className="label text-ember">04 /</span>
              <span className="label text-mist">join the community</span>
            </div>
            <h2 className="display mt-6 text-5xl font-bold uppercase leading-[0.95] tracking-[-0.02em] text-ember sm:text-6xl md:text-7xl">
              Enter the
              <br />
              <em className="font-accent lowercase italic">Side Quest</em>
            </h2>
            <p className="mt-7 max-w-md text-balance text-lg leading-relaxed text-ink-soft">
              <span className="marker text-ink">{joinForm.copy}</span>
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <ul className="mt-9 space-y-3.5">
              {perks.map((perk) => (
                <li key={perk} className="flex items-start gap-3 text-[0.95rem] text-mist">
                  <span className="mt-0.5 text-ember" aria-hidden>
                    →
                  </span>
                  {perk}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="lg:col-span-7">
          <div className="relative border border-line bg-card">
            <div className="p-8 sm:p-12">
              {submitted ? (
                <div className="flex min-h-[24rem] flex-col items-center justify-center text-center">
                  <h3 className="display text-3xl font-bold uppercase text-ink">
                    {joinForm.successTitle}
                  </h3>
                  <p className="mt-6 max-w-sm text-base leading-relaxed text-mist">
                    {joinForm.successCopy}
                    {name ? ` Talk soon, ${name.split(" ")[0]}.` : ""}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-7">
                  <p className="label text-mist">tell us a little about you</p>

                  <div>
                    <label htmlFor="name" className="label mb-1 block text-xs text-ink-soft">
                      {joinForm.fields.name} *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="your first name is plenty"
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="label mb-1 block text-xs text-ink-soft">
                      {joinForm.fields.email} *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="where the invites go"
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label htmlFor="background" className="label mb-1 block text-xs text-ink-soft">
                      {joinForm.fields.background}
                    </label>
                    <input
                      id="background"
                      name="background"
                      type="text"
                      placeholder="student, curious human, recovering overthinker, all of the above..."
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label htmlFor="topics" className="label mb-1 block text-xs text-ink-soft">
                      {joinForm.fields.topics}
                    </label>
                    <textarea
                      id="topics"
                      name="topics"
                      rows={3}
                      placeholder="belonging? memory? why we can't stop overthinking?"
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="label group w-full rounded-full bg-ember px-8 py-4 text-sm text-paper-light transition-all duration-300 hover:-translate-y-0.5 hover:bg-ember-deep disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                  >
                    {submitting ? "Dropping…" : joinForm.submit}
                    <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </button>

                  {error ? (
                    <p className="label text-xs text-ember">
                      something went wrong — try again, or email us directly.
                    </p>
                  ) : null}
                </form>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
