"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const personas = [
  {
    name: "Rajesh",
    role: "CFO",
    quote: "Uses Fastocron to review GST + profitability weekly — without waiting on static packs.",
    initials: "R",
    color: "from-sky-500 to-blue-600",
  },
  {
    name: "Anjali",
    role: "Growth Lead",
    quote: "Tracks campaigns & ROAS daily. Questions turn into dashboards her team actually uses.",
    initials: "A",
    color: "from-orange-500 to-rose-600",
  },
  {
    name: "Vivek",
    role: "Founder",
    quote: "Gets one morning summary dashboard across revenue, pipeline, and ops — every day.",
    initials: "V",
    color: "from-purple-500 to-indigo-600",
  },
];

export default function UseCasesPersonaCarousel() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((x) => (x + 1) % personas.length), 5200);
    return () => clearInterval(t);
  }, []);

  const p = personas[i];

  return (
    <section className="border-t border-slate-200 bg-white py-24">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="text-center text-2xl font-bold text-slate-900 sm:text-3xl">
          Personas in the wild
        </h2>
        <p className="mx-auto mt-3 max-w-md text-center text-sm text-slate-600">
          Auto-advancing cards — subtle motion, credible quotes.
        </p>

        <div className="relative mt-12 min-h-[200px]">
          <AnimatePresence mode="wait">
            <motion.article
              key={p.name}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -36 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 shadow-lg"
            >
              <div className="flex items-start gap-4">
                <div
                  className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${p.color} text-lg font-black text-white shadow-md`}
                >
                  {p.initials}
                </div>
                <div>
                  <p className="text-lg font-bold text-slate-900">
                    {p.name}{" "}
                    <span className="font-medium text-slate-500">— {p.role}</span>
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                    “{p.quote}”
                  </p>
                </div>
              </div>
            </motion.article>
          </AnimatePresence>
          <div className="mt-6 flex justify-center gap-2">
            {personas.map((_, idx) => (
              <button
                key={idx}
                type="button"
                aria-label={`Go to slide ${idx + 1}`}
                onClick={() => setI(idx)}
                className={`h-2 rounded-full transition-all ${
                  idx === i ? "w-8 bg-sky-600" : "w-2 bg-slate-300 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
