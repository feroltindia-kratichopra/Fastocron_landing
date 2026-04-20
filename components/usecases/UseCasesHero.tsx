"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import {
  Building2,
  LineChart,
  Megaphone,
  Settings2,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import { Button } from "../ui/moving-boder";

const industries = [
  {
    id: "finance",
    label: "Finance",
    icon: LineChart,
    accent: "text-sky-300",
    glow: "from-sky-500/30 to-blue-500/10",
    desc: "Track revenue, collections, margins, and forecasts in real time.",
    metric: "₹8.4M",
    change: "+14.2%",
    chart: [28, 34, 42, 48, 61, 74],
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  },
  {
    id: "retail",
    label: "Retail",
    icon: Building2,
    accent: "text-violet-300",
    glow: "from-violet-500/30 to-fuchsia-500/10",
    desc: "Monitor inventory, stores, fast movers, and demand shifts.",
    metric: "12.8K",
    change: "+9.6%",
    chart: [68, 52, 76, 84, 71, 88],
    labels: ["A", "B", "C", "D", "E", "F"],
  },
  {
    id: "marketing",
    label: "Marketing",
    icon: Megaphone,
    accent: "text-orange-300",
    glow: "from-orange-500/30 to-amber-500/10",
    desc: "Measure ROAS, CAC, campaign winners, and funnel drop-offs.",
    metric: "4.9x",
    change: "+21%",
    chart: [24, 38, 52, 46, 71, 86],
    labels: ["W1", "W2", "W3", "W4", "W5", "W6"],
  },
  {
    id: "ops",
    label: "Operations",
    icon: Settings2,
    accent: "text-emerald-300",
    glow: "from-emerald-500/30 to-teal-500/10",
    desc: "Improve SLA performance, throughput, and delivery speed.",
    metric: "97.4%",
    change: "+6.8%",
    chart: [58, 64, 60, 73, 82, 91],
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  },
] as const;

const particles = Array.from({ length: 26 }, (_, i) => ({
  id: i,
  x: `${(i * 31) % 100}%`,
  y: `${(i * 19) % 100}%`,
  delay: (i % 8) * 0.15,
  duration: 9 + (i % 4) * 2,
}));

export default function UseCasesHero() {
  const [idx, setIdx] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    const t = setInterval(() => {
      setIdx((prev) => (prev + 1) % industries.length);
    }, 4200);

    return () => clearInterval(t);
  }, []);

  const current = industries[idx];
  const CurrentIcon = current.icon;

  return (
    <section className="relative overflow-hidden bg-slate-950 pb-20 pt-28 text-white lg:pt-32">
      {!reduce && (
        <div className="pointer-events-none absolute inset-0">
          {particles.map((p) => (
            <motion.span
              key={p.id}
              className="absolute h-1 w-1 rounded-full bg-sky-400/35"
              style={{ left: p.x, top: p.y }}
              animate={{
                opacity: [0.15, 0.8, 0.15],
                scale: [0.6, 1.4, 0.6],
                y: [0, -16, 0],
              }}
              transition={{
                duration: p.duration,
                delay: p.delay,
                repeat: Infinity,
              }}
            />
          ))}
        </div>
      )}

      <AnimatePresence mode="wait">
        <motion.div
          key={current.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className={`absolute inset-0 bg-gradient-to-br ${current.glow}`}
        />
      </AnimatePresence>

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(56,189,248,0.22),transparent)]" />

      {/* MAIN GRID */}
      <div className="relative z-10 mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1.05fr] lg:items-center">
        {/* LEFT SIDE */}
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-sky-300">
          <span className="h-2 w-2 animate-pulse rounded-full bg-white" />
            Applications
          </p>

          <h1 className="mt-5 text-3xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-[2.75rem]">
            Built for Every Team That Runs on{" "}
            <span className="bg-gradient-to-r from-sky-400 to-emerald-400 bg-clip-text text-transparent">
              Data
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-sm leading-relaxed text-slate-300 sm:text-lg">
            Finance, retail, operations, and marketing teams use Fastocron to
            automate reporting, uncover trends, and make faster decisions.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="#contact">
              <Button
                borderRadius="1.75rem"
                className="border border-white/10 bg-gradient-to-br from-cyan-600/30 to-indigo-900/40 text-white"
              >
                Book a Demo
              </Button>
            </Link>
          </div>
        </div>

        {/* RIGHT DASHBOARD */}
        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.96, y: 20 }}
          animate={reduce ? undefined : { opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.18, duration: 0.6 }}
          className="relative w-full"
        >
          <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-sky-500/20 via-transparent to-emerald-500/20 blur-2xl" />

          <div className="relative w-full overflow-hidden rounded-3xl border border-white/10 bg-slate-900/80 shadow-2xl backdrop-blur">
            {/* TOP */}
            <div className="border-b border-white/10 p-4 sm:p-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -18 }}
                  transition={{ duration: 0.35 }}
                >
                  {/* header */}
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/10 sm:h-14 sm:w-14">
                        <CurrentIcon
                          className={`h-6 w-6 sm:h-7 sm:w-7 ${current.accent}`}
                        />
                      </div>

                      <div>
                        <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400 sm:text-xs">
                          Active Industry
                        </p>
                        <h3 className="mt-1 text-xl font-bold sm:text-2xl">
                          {current.label}
                        </h3>
                      </div>
                    </div>

                    <div className="w-fit rounded-2xl border border-emerald-400/20 bg-emerald-400/10 px-4 py-2">
                      <p className="text-xs text-slate-400">Growth</p>
                      <p className="flex items-center gap-1 text-sm font-bold text-emerald-300">
                        <TrendingUp className="h-4 w-4" />
                        {current.change}
                      </p>
                    </div>
                  </div>

                  <p className="mt-5 text-sm leading-6 text-slate-300 sm:leading-7">
                    {current.desc}
                  </p>

                  {/* KPI */}
                  <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-[10px] uppercase tracking-wider text-slate-400 sm:text-xs">
                      Primary Metric
                    </p>
                    <p className="mt-2 text-2xl font-bold sm:text-3xl">
                      {current.metric}
                    </p>
                  </div>

                  {/* CHART */}
                  <div className="mt-5 rounded-2xl border border-white/10 bg-black/20 p-3 sm:p-4">
                    <div className="relative">
                      <div className="absolute inset-0 grid grid-rows-4">
                        {[1, 2, 3, 4].map((i) => (
                          <div key={i} className="border-t border-white/5" />
                        ))}
                      </div>

                      <div className="relative flex h-32 items-end gap-1 sm:h-44 sm:gap-2">
                        {current.chart.map((h, i) => (
                          <motion.div
                            key={i}
                            className="flex-1 rounded-t-md bg-gradient-to-t from-sky-500 via-cyan-400 to-emerald-400"
                            initial={{ height: 0 }}
                            animate={{ height: `${h}%` }}
                            transition={{
                              duration: 0.6,
                              delay: i * 0.06,
                            }}
                          />
                        ))}
                      </div>
                    </div>

                    <div className="mt-3 grid grid-cols-6 text-center text-[9px] text-slate-500 sm:text-[10px]">
                      {current.labels.map((label) => (
                        <span key={label}>{label}</span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* BOTTOM SELECTORS */}
            <div className="grid gap-3 p-3 sm:grid-cols-2 sm:p-4">
              {industries.map((item, i) => {
                const Icon = item.icon;
                const active = i === idx;

                return (
                  <button
                    key={item.id}
                    onClick={() => setIdx(i)}
                    className={`rounded-2xl border p-3 text-left transition sm:p-4 ${
                      active
                        ? "border-sky-400 bg-white/10"
                        : "border-white/10 bg-white/5 hover:bg-white/10"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${
                          active ? "bg-sky-500/20" : "bg-white/10"
                        }`}
                      >
                        <Icon
                          className={`h-5 w-5 ${
                            active ? "text-sky-300" : "text-slate-300"
                          }`}
                        />
                      </div>

                      <div className="min-w-0">
                        <p className="truncate text-sm font-semibold text-white">
                          {item.label}
                        </p>
                        <p className="text-xs text-slate-400">{item.metric}</p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}