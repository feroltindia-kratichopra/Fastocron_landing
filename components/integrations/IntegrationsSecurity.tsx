"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Lock, ShieldCheck } from "lucide-react";

const points = [
  "Encrypted credentials",
  "Read-only connectors available",
  "Role-based access",
  "Raw data stays under your control",
  "Audit logs",
];

export default function IntegrationsSecurity() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-20%" });

  return (
    <section ref={ref} className="border-t border-slate-200 bg-slate-50 py-24 text-slate-900">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-2xl font-bold sm:text-3xl">Secure by design</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
              All integrations are protected with enterprise-grade controls. Apps connect through a
              hardened layer before data ever reaches analytics.
            </p>
            <ul className="mt-8 space-y-3">
              {points.map((p) => (
                <li key={p} className="flex items-start gap-3 text-sm text-slate-700">
                  <Lock className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" aria-hidden />
                  {p}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative flex min-h-[300px] items-center justify-center">
            <div className="absolute flex gap-3 opacity-60">
              {["ERP", "CRM", "DB"].map((t, i) => (
                <span
                  key={t}
                  className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-bold text-slate-600 shadow-sm"
                  style={{ transform: `translateY(${i * 6}px)` }}
                >
                  {t}
                </span>
              ))}
            </div>
            <motion.div
              initial={{ scale: 0.85, opacity: 0.6 }}
              animate={inView ? { scale: 1, opacity: 1 } : {}}
              transition={{ type: "spring", stiffness: 120, damping: 14 }}
              className="relative z-10 flex h-44 w-44 items-center justify-center rounded-full border-4 border-emerald-300 bg-white shadow-lg shadow-emerald-500/20"
            >
              <ShieldCheck className="h-20 w-20 text-emerald-600" aria-hidden />
            </motion.div>
       
          </div>
        </div>
      </div>
    </section>
  );
}
