"use client";

import { motion } from "motion/react";
import { Check, Minus } from "lucide-react";

const rows = [
  { feature: "Chat first", fast: true, pbi: "partial", tab: "partial" },
  { feature: "Privacy AI", fast: true, pbi: false, tab: false },
  { feature: "Fast setup", fast: true, pbi: "medium", tab: "slow" },
  { feature: "SMB pricing", fast: true, pbi: false, tab: false },
] as const;

function Cell({ v }: { v: boolean | "partial" | "medium" | "slow" }) {
  if (v === true) {
    return (
      <span className="inline-flex items-center justify-center text-emerald-600">
        <Check className="h-5 w-5" aria-hidden />
      </span>
    );
  }
  if (v === false) {
    return (
      <span className="inline-flex items-center justify-center text-slate-300">
        <Minus className="h-5 w-5" aria-hidden />
      </span>
    );
  }
  const label =
    v === "partial" ? "Partial" : v === "medium" ? "Medium" : v === "slow" ? "Slow" : String(v);
  return <span className="text-sm font-medium text-amber-800">{label}</span>;
}

export default function VsCompetitorsTable() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="text-center text-2xl font-bold text-slate-900 sm:text-3xl">
          Why Fastocron vs others
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-center text-sm text-slate-600">
          A compact comparison — rows reveal as you scroll into view.
        </p>

        <div className="mt-12 overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
          <table className="w-full border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-950 text-white">
                <th className="px-4 py-4 font-semibold">Feature</th>
                <th className="px-4 py-4 font-semibold text-sky-300">Fastocron</th>
                <th className="px-4 py-4 font-semibold">Power BI</th>
                <th className="px-4 py-4 font-semibold">Tableau</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <motion.tr
                  key={row.feature}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-20px" }}
                  transition={{ delay: i * 0.1, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className={i % 2 === 0 ? "bg-white" : "bg-slate-50/80"}
                >
                  <td className="border-t border-slate-100 px-4 py-3 font-medium text-slate-900">
                    {row.feature}
                  </td>
                  <td className="border-t border-slate-100 bg-sky-50/50 px-4 py-3 text-center">
                    <Cell v={row.fast} />
                  </td>
                  <td className="border-t border-slate-100 px-4 py-3 text-center">
                    <Cell v={row.pbi} />
                  </td>
                  <td className="border-t border-slate-100 px-4 py-3 text-center">
                    <Cell v={row.tab} />
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
