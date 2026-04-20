"use client";

import { motion } from "motion/react";

const quotes = [
  {
    quote: "Reduced reporting time by 80%",
    author: "Finance lead",
    org: "Mid-market SaaS",
  },
  {
    quote: "We finally ask questions without opening five tools.",
    author: "COO",
    org: "D2C brand",
  },
  {
    quote: "The privacy story won our security review.",
    author: "IT Director",
    org: "Manufacturing",
  },
];

const logos = ["Acme", "Northwind", "Globex", "Umbrella", "Stark"];

export default function FeaturesTestimonials() {
  return (
    <section className="border-t border-slate-200 bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-2xl font-bold text-slate-900 sm:text-3xl">
          Trusted by teams who ship
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-center text-sm text-slate-600">
          Logo strip + proof points — keep it credible and calm.
        </p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          {logos.map((name, i) => (
            <motion.span
              key={name}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-semibold text-slate-500"
            >
              {name}
            </motion.span>
          ))}
        </motion.div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {quotes.map((q, i) => (
            <motion.blockquote
              key={q.quote}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ delay: i * 0.08, duration: 0.45 }}
              className="rounded-2xl border border-slate-200 bg-slate-50/80 p-6 shadow-sm"
            >
              <p className="text-lg font-semibold text-slate-900">“{q.quote}”</p>
              <footer className="mt-4 text-sm text-slate-600">
                <span className="font-medium text-slate-800">{q.author}</span>
                <span className="text-slate-400"> · {q.org}</span>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
