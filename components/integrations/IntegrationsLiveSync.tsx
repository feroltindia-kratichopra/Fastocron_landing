"use client";

import { motion } from "framer-motion";
import { Clock, RefreshCw } from "lucide-react";

const bullets = ["Live dashboards", "Hourly sync", "Daily reports", "Smart alerts"];

export default function IntegrationsLiveSync() {
  return (
    <section className="border-t border-slate-200 bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Always fresh data</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
              Choose real-time sync or scheduled refresh intervals. Dashboards stay trustworthy when
              the numbers behind them update on your cadence.
            </p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {bullets.map((b) => (
                <li
                  key={b}
                  className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-800"
                >
                  <span className="h-2 w-2 rounded-full bg-emerald-500" aria-hidden />
                  {b}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative flex min-h-[280px] items-center justify-center rounded-3xl border border-slate-200 bg-gradient-to-br from-sky-50 via-white to-emerald-50 p-8 shadow-inner">
            <motion.div
              className="absolute inset-0 rounded-3xl"
              animate={{ opacity: [0.4, 0.8, 0.4] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              style={{
                background:
                  "radial-gradient(circle at 50% 50%, rgba(14,165,233,0.15), transparent 60%)",
              }}
            />
            <motion.div
              className="absolute h-48 w-48 rounded-full border-2 border-sky-200/80"
              animate={{ rotate: 360 }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute h-36 w-36 rounded-full border border-emerald-300/70"
              animate={{ rotate: -360 }}
              transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
            />
            <div className="relative z-10 flex flex-col items-center gap-4 text-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-white shadow-lg ring-2 ring-sky-100">
                <Clock className="h-10 w-10 text-sky-600" aria-hidden />
              </div>
              <motion.div
                className="flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-xs font-bold uppercase tracking-wider text-emerald-800"
                animate={{ scale: [1, 1.04, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <RefreshCw className="h-3.5 w-3.5" aria-hidden />
                Sync
              </motion.div>
             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
