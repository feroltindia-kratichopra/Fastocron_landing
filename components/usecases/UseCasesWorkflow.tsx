"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "motion/react";

function WipeBlock({
  title,
  before,
  after,
}: {
  title: string;
  before: string[];
  after: string[];
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-20%" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 75%", "end 35%"],
  });
  const reveal = useTransform(scrollYProgress, [0, 0.9], ["0%", "100%"]);

  return (
    <div
      ref={ref}
      className="overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm lg:p-12"
    >
      <h3 className="text-xl font-bold text-slate-900">{title}</h3>
      <div className="relative mt-8 grid min-h-[240px] gap-0 overflow-hidden rounded-2xl border border-slate-200 md:grid-cols-2">
        <div className="border-b border-slate-200 bg-rose-50 p-6 md:border-b-0 md:border-r md:border-slate-200">
          <p className="text-xs font-bold uppercase tracking-wider text-rose-700">Before Fastocron</p>
          <ul className="mt-4 space-y-2 text-sm text-slate-700">
            {before.map((b) => (
              <li key={b}>— {b}</li>
            ))}
          </ul>
        </div>
        <div className="relative bg-emerald-50 p-6">
          <p className="text-xs font-bold uppercase tracking-wider text-emerald-800">After Fastocron</p>
          <ul className="relative z-0 mt-4 space-y-2 text-sm text-slate-800">
            {after.map((a) => (
              <li key={a}>— {a}</li>
            ))}
          </ul>
          <motion.div
            className="pointer-events-none absolute inset-0 z-10 bg-white"
            style={{ x: reveal }}
          />
        </div>
      </div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.2 }}
        className="mt-6 text-sm text-slate-500"
      >
  
      </motion.p>
    </div>
  );
}

export default function UseCasesWorkflow() {
  return (
    <section className="border-t border-slate-200 bg-white py-24">
      <div className="mx-auto max-w-6xl space-y-16 px-6">
        <div >
          <h2 className="mt-3 text-4xl font-bold text-slate-900 md:text-5xl text-center">Detailed workflows</h2>
          
        </div>

        <WipeBlock
          title="Finance workflow"
          before={["Manual Excel consolidation", "Delayed reports", "Errors in reconciliation"]}
          after={["Auto dashboards", "Real-time insights", "Faster audits"]}
        />

        <WipeBlock
          title="E-commerce workflow"
          before={["Five tools, scattered data", "Slow ROAS answers", "Inventory blind spots"]}
          after={["One AI command center", "Unified SKU + ads + orders", "Clear operational signals"]}
        />
      </div>
    </section>
  );
}
