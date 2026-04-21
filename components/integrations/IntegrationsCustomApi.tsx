"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Plug, Webhook } from "lucide-react";

const perfectFor = ["Legacy ERP", "Internal apps", "POS systems", "Vendor platforms"];

export default function IntegrationsCustomApi() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });

  return (
    <section className="border-t border-slate-200 bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              Have a custom tool? Connect it too.
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
              Use APIs, webhooks, and custom connectors to bring any internal system into Fastocron.
            </p>
            <p className="mt-4 text-xs font-bold uppercase tracking-wider text-slate-500">
              Perfect for
            </p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {perfectFor.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-700"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div
            ref={ref}
            className="relative flex min-h-[260px] items-center justify-center rounded-3xl border border-slate-200 bg-slate-100 p-8 font-mono text-[11px] text-slate-800"
          >
            <div className="absolute left-4 top-4 rounded-lg border border-slate-200 bg-white px-3 py-2 text-[10px] text-slate-500 shadow-sm">
              POST /hooks/incoming
            </div>
            <motion.div
              className="absolute left-[18%] top-1/2 -translate-y-1/2"
              initial={{ x: -20, opacity: 0 }}
              animate={inView ? { x: 0, opacity: 1 } : {}}
              transition={{ type: "spring", stiffness: 260, damping: 18 }}
            >
              <Plug className="h-10 w-10 text-emerald-400" aria-hidden />
            </motion.div>
            <motion.div
              className="absolute right-[18%] top-1/2 -translate-y-1/2"
              initial={{ x: 20, opacity: 0 }}
              animate={inView ? { x: 0, opacity: 1 } : {}}
              transition={{ type: "spring", stiffness: 260, damping: 18, delay: 0.08 }}
            >
              <Webhook className="h-10 w-10 text-sky-400" aria-hidden />
            </motion.div>
            <motion.div
              className="rounded-xl border border-sky-500/50 bg-sky-500/10 px-4 py-3 text-center"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={inView ? { scale: 1, opacity: 1 } : {}}
              transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 16 }}
            >
              <span className="text-emerald-700">connector</span>
              <span className="text-slate-500"> :: </span>
              <span className="text-sky-700">snap()</span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
