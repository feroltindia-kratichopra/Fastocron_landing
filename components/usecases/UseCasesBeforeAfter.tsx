"use client";

import { motion } from "motion/react";

const rows = [
  { without: "Manual reporting", with: "Instant reports" },
  { without: "Static dashboards", with: "Conversational analytics" },
  { without: "Data silos", with: "Unified sources" },
  { without: "Delayed decisions", with: "Real-time actions" },
];

export default function UseCasesBeforeAfter() {
  return (
    <section className="bg-slate-100 py-24">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="text-center text-2xl font-bold text-slate-900 sm:text-3xl">
          Without vs. with Fastocron
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-center text-sm text-slate-600">
          Rows slide in from alternating sides for a premium comparison feel.
        </p>

        <div className="mt-12 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl">
          <div className="grid grid-cols-2 border-b border-slate-200 bg-gradient-to-r from-slate-100 to-sky-100 px-4 py-3 text-sm font-bold text-slate-800">
            <span>Without Fastocron</span>
            <span className="text-right text-sky-800">With Fastocron</span>
          </div>
          {rows.map((row, i) => (
            <div
              key={row.without}
              className="grid grid-cols-2 border-b border-slate-100 last:border-0"
            >
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ delay: i * 0.08, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="border-r border-slate-100 bg-slate-50/80 px-4 py-4 text-sm font-medium text-slate-700"
              >
                {row.without}
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ delay: i * 0.08, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="bg-gradient-to-r from-sky-50 to-emerald-50 px-4 py-4 text-right text-sm font-semibold text-slate-900"
              >
                {row.with}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
