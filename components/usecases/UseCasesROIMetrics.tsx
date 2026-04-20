"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";

function Stat({
  label,
  value,
  suffix = "",
  prefix = "",
}: {
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start: number | null = null;
    let raf = 0;
    const dur = 1600;
    const tick = (t: number) => {
      if (start === null) start = t;
      const p = Math.min((t - start) / dur, 1);
      setN(Math.round(value * p));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
      className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm"
    >
      <p className="text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
        {prefix}
        {n}
        {suffix}
      </p>
      <p className="mt-2 text-sm font-medium text-slate-600">{label}</p>
    </motion.div>
  );
}

export default function UseCasesROIMetrics() {
  return (
    <section className="border-t border-slate-200 bg-gradient-to-b from-emerald-50/60 to-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-2xl font-bold text-slate-900 sm:text-3xl">
          Real business outcomes
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-center text-sm text-slate-600">
          Counters animate once when this section enters the viewport.
        </p>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Stat label="Faster reporting" value={80} suffix="%" />
          <Stat label="More team visibility" value={3} suffix="×" />
          <Stat label="Less manual work" value={60} suffix="%" />
          <div className="rounded-2xl border border-emerald-300 bg-white p-6 text-center shadow-sm">
            <p className="text-4xl font-black text-emerald-600 sm:text-5xl">24/7</p>
            <p className="mt-2 text-sm font-medium text-slate-600">Live monitoring</p>
          </div>
        </div>
      </div>
    </section>
  );
}
