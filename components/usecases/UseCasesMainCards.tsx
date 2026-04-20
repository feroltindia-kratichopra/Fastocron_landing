"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import {
  BarChart3,
  Briefcase,
  LineChart,
  Package,
  ShoppingBag,
  Users,
} from "lucide-react";
import { cn } from "@/lib/utils";

function useCountUp(target: number, active: boolean, duration = 1400) {
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start: number | null = null;
    let raf = 0;
    const tick = (t: number) => {
      if (start === null) start = t;
      const p = Math.min((t - start) / duration, 1);
      setV(Math.round(target * p));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, target, duration]);
  return v;
}

function FinanceCard() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-20%" });
  const margin = useCountUp(24, inView);
  const heights = [32, 48, 40, 62, 44, 70];
  return (
    <article
      ref={ref}
      className="flex flex-col overflow-hidden rounded-2xl border border-sky-200 bg-white p-6 shadow-md"
    >
      <div className="flex items-center gap-2 text-sky-700">
        <LineChart className="h-5 w-5" aria-hidden />
        <span className="text-xs font-bold uppercase tracking-wider">Finance</span>
      </div>
      <h3 className="mt-3 text-lg font-bold text-slate-900">
        Automate Reporting & Protect Sensitive Data
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">
        Generate P&L, GST summaries, revenue trends, cost center breakdowns, and monthly board
        reports in minutes.
      </p>
      <p className="mt-3 rounded-lg border border-sky-100 bg-sky-50 px-3 py-2 font-mono text-xs text-sky-900">
        “Show profit margin by branch for Q1”
      </p>
      <div className="mt-4 flex items-end justify-between gap-2 rounded-xl border border-slate-200 bg-slate-50 p-3">
        <div className="flex flex-1 items-end gap-1">
          {heights.map((h, i) => (
            <motion.div
              key={i}
              className="flex-1 rounded-t bg-gradient-to-t from-sky-600 to-emerald-500"
              initial={{ height: 0 }}
              animate={inView ? { height: `${h}%` } : {}}
              transition={{ delay: i * 0.06, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            />
          ))}
        </div>
        <div className="flex flex-col items-end text-right">
          <span className="text-[10px] uppercase text-slate-500">Margin</span>
          <span className="text-2xl font-black text-emerald-600">{margin}%</span>
        </div>
      </div>
      <div className="mt-3 flex items-center gap-2 text-xs text-slate-600">
        <span className="rounded-full bg-emerald-100 px-2 py-0.5 font-semibold text-emerald-800">
          Shield
        </span>
        Row-level access on sensitive metrics
      </div>
    </article>
  );
}

function SalesCard() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-20%" });
  const deals = useCountUp(42, inView);
  const rows = [
    { name: "A. Rao", deals: 42 },
    { name: "M. Khan", deals: 36 },
    { name: "S. Patel", deals: 31 },
  ];
  return (
    <article
      ref={ref}
      className="flex flex-col rounded-2xl border border-indigo-200 bg-white p-6 shadow-md"
    >
      <div className="flex items-center gap-2 text-indigo-700">
        <BarChart3 className="h-5 w-5" aria-hidden />
        <span className="text-xs font-bold uppercase tracking-wider">Sales</span>
      </div>
      <h3 className="mt-3 text-lg font-bold text-slate-900">Track Revenue, Leads & Territory Growth</h3>
      <p className="mt-2 text-sm text-slate-600">
        Analyze pipeline conversion, rep performance, top regions, lost deals, and revenue forecasts
        instantly.
      </p>
      <p className="mt-3 rounded-lg border border-indigo-100 bg-indigo-50 px-3 py-2 font-mono text-xs text-indigo-900">
        “Which sales reps closed the most deals this month?”
      </p>
      <div className="mt-4 space-y-2">
        {rows.map((row, i) => (
          <motion.div
            key={row.name}
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15 + i * 0.1, duration: 0.4 }}
            className="flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 px-3 py-2"
          >
            <span className="text-sm font-medium text-slate-800">{row.name}</span>
            <span className="text-sm font-bold text-emerald-600">
              {i === 0 ? deals : row.deals} deals
            </span>
          </motion.div>
        ))}
      </div>
    </article>
  );
}

function EcomCard() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-20%" });
  const skus = ["SKU-12", "SKU-04", "SKU-21"];
  return (
    <article
      ref={ref}
      className="flex flex-col rounded-2xl border border-orange-200 bg-white p-6 shadow-md"
    >
      <div className="flex items-center gap-2 text-orange-700">
        <ShoppingBag className="h-5 w-5" aria-hidden />
        <span className="text-xs font-bold uppercase tracking-wider">E-commerce</span>
      </div>
      <h3 className="mt-3 text-lg font-bold text-slate-900">See SKU Performance & Ad ROI Clearly</h3>
      <p className="mt-2 text-sm text-slate-600">
        Connect Shopify, Meta Ads, Google Ads, inventory, and orders into one dashboard.
      </p>
      <p className="mt-3 rounded-lg border border-orange-100 bg-orange-50 px-3 py-2 font-mono text-xs text-orange-900">
        “Which products had highest ROAS last 30 days?”
      </p>
      <div className="mt-4 grid grid-cols-3 gap-2">
        {skus.map((s, i) => (
          <motion.div
            key={s}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.1, type: "spring", stiffness: 300, damping: 22 }}
            className="rounded-xl border border-orange-100 bg-gradient-to-b from-orange-50 to-white p-2 text-center shadow-sm"
          >
            <p className="text-[10px] font-bold text-orange-800">{s}</p>
            <p className="mt-1 text-xs font-semibold text-emerald-700">ROAS ↑</p>
          </motion.div>
        ))}
      </div>
    </article>
  );
}

function OpsCard() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-20%" });
  return (
    <article
      ref={ref}
      className="flex flex-col rounded-2xl border border-emerald-200 bg-white p-6 shadow-md"
    >
      <div className="flex items-center gap-2 text-emerald-700">
        <Package className="h-5 w-5" aria-hidden />
        <span className="text-xs font-bold uppercase tracking-wider">Operations</span>
      </div>
      <h3 className="mt-3 text-lg font-bold text-slate-900">Monitor Inventory, Fulfillment & Delays</h3>
      <p className="mt-2 text-sm text-slate-600">
        Track stock movement, supplier delays, dispatch rates, and warehouse efficiency live.
      </p>
      <p className="mt-3 rounded-lg border border-emerald-100 bg-emerald-50 px-3 py-2 font-mono text-xs text-emerald-900">
        “Which warehouse had highest delays last week?”
      </p>
      <div className="relative mt-4 flex h-24 flex-col justify-center rounded-xl border border-slate-200 bg-slate-50 px-4">
        <div className="relative h-1 w-full overflow-hidden rounded-full bg-slate-200">
          <motion.div
            className="absolute inset-y-0 left-0 w-full origin-left rounded-full bg-gradient-to-r from-emerald-500 to-sky-500"
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>
        <div className="mt-4 flex justify-between">
          {["WH-A", "WH-B", "WH-C"].map((w, i) => (
            <motion.span
              key={w}
              initial={{ opacity: 0, y: 8 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.35 + i * 0.1 }}
              className="text-[10px] font-semibold text-emerald-800"
            >
              {w}
            </motion.span>
          ))}
        </div>
      </div>
    </article>
  );
}

function FoundersCard() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-20%" });
  const widgets = ["Revenue", "Growth", "Burn", "NRR"];
  return (
    <article
      ref={ref}
      className="flex flex-col rounded-2xl border border-purple-200 bg-white p-6 shadow-md"
    >
      <div className="flex items-center gap-2 text-purple-700">
        <Briefcase className="h-5 w-5" aria-hidden />
        <span className="text-xs font-bold uppercase tracking-wider">Founders / CEOs</span>
      </div>
      <h3 className="mt-3 text-lg font-bold text-slate-900">One Dashboard for Entire Business</h3>
      <p className="mt-2 text-sm text-slate-600">
        Get a daily executive summary across revenue, growth, burn rate, retention, and performance.
      </p>
      <p className="mt-3 rounded-lg border border-purple-100 bg-purple-50 px-3 py-2 font-mono text-xs text-purple-900">
        “Give me today’s business summary”
      </p>
      <div className="mt-4 grid grid-cols-2 gap-2">
        {widgets.map((w, i) => (
          <motion.div
            key={w}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.08 * i, duration: 0.35 }}
            className="rounded-lg border border-slate-200 bg-slate-50 px-2 py-3 text-center text-xs font-semibold text-slate-800"
          >
            {w}
          </motion.div>
        ))}
      </div>
    </article>
  );
}

function AgencyCard() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-20%" });
  return (
    <article
      ref={ref}
      className="flex flex-col rounded-2xl border border-cyan-200 bg-white p-6 shadow-md"
    >
      <div className="flex items-center gap-2 text-cyan-700">
        <Users className="h-5 w-5" aria-hidden />
        <span className="text-xs font-bold uppercase tracking-wider">Agencies</span>
      </div>
      <h3 className="mt-3 text-lg font-bold text-slate-900">Client Reporting Without Manual Work</h3>
      <p className="mt-2 text-sm text-slate-600">
        Automate client dashboards, campaign reporting, exports, and branded reports.
      </p>
      <p className="mt-3 rounded-lg border border-cyan-100 bg-cyan-50 px-3 py-2 font-mono text-xs text-cyan-900">
        “Create monthly report for Client A”
      </p>
      <div className="relative mt-4 h-28">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            initial={{ y: 36, opacity: 0, rotate: -3 + i }}
            animate={inView ? { y: 6 + i * 11, opacity: 1, rotate: -2 + i } : {}}
            transition={{ delay: 0.12 * i, type: "spring", stiffness: 260, damping: 22 }}
            className={cn(
              "absolute left-2 right-2 rounded-lg border border-slate-200 bg-gradient-to-r from-cyan-50 to-white px-3 py-2 text-xs font-medium text-slate-800 shadow-md",
            )}
            style={{ zIndex: 3 - i, top: 0 }}
          >
            Client {String.fromCharCode(65 + i)} · folder pack
          </motion.div>
        ))}
      </div>
    </article>
  );
}

export default function UseCasesMainCards() {
  return (
    <section className="border-t border-slate-200 bg-slate-50 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center mt-3 text-4xl font-bold text-slate-900 md:text-5xl">
          Built for teams that ship
        </h2>
        
        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <FinanceCard />
          <EcomCard />
          <SalesCard />
          <FoundersCard />
          <OpsCard />
          <AgencyCard />
        </div>
      </div>
    </section>
  );
}
