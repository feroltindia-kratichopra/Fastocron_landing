"use client";

import { motion } from "motion/react";

const quotes = [
  {
    quote:
      "Fastocron reduced our reporting time from 2 days to 15 minutes.",
    role: "CFO, Manufacturing SME",
  },
  {
    quote:
      "We finally stopped exporting sensitive rows to spreadsheets. Answers stay in one workspace.",
    role: "Head of Operations, Retail",
  },
  {
    quote:
      "Setup was under an hour. The team asks questions in English and gets pivots instantly.",
    role: "Finance Lead, Services",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative bg-white py-24">
      <div className="pointer-events-none absolute left-1/2 top-0 h-40 w-[min(100%,48rem)] -translate-x-1/2 bg-gradient-to-b from-slate-100/80 to-transparent blur-2xl" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600">
            Testimonials
          </span>
          <h2 className="mt-3 text-4xl font-bold text-slate-900 md:text-5xl">
            Teams that moved faster
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Floating cards from real workflows—privacy-preserving analytics without
            the wait.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:hidden">
          {quotes.map((item, i) => (
            <motion.figure
              key={item.role}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-md"
            >
              <blockquote className="text-base font-medium leading-relaxed text-slate-800">
                &ldquo;{item.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-4 text-sm font-semibold text-cyan-700">
                — {item.role}
              </figcaption>
            </motion.figure>
          ))}
        </div>

        <div className="relative mx-auto mt-16 hidden min-h-[300px] max-w-5xl md:block">
          {quotes.map((item, i) => (
            <motion.figure
              key={item.role}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.12, duration: 0.45 }}
              className="absolute w-[min(100%,20rem)] rounded-2xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-900/5"
              style={{
                left: `${8 + i * 28}%`,
                top: `${i % 2 === 0 ? 0 : 40}px`,
                rotate: i === 1 ? -2 : i === 2 ? 2 : -1,
                zIndex: 10 - i,
              }}
            >
              <blockquote className="text-base font-medium leading-relaxed text-slate-800">
                &ldquo;{item.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-4 text-sm font-semibold text-cyan-700">
                — {item.role}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
