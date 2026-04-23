"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import {
  BarChart3,
  Bot,
  FileSpreadsheet,
  LayoutGrid,
  Share2,
  Unplug,
} from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

const nlSample = "Show last month revenue by region";

function TypingCard() {
  const [text, setText] = useState("");
  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      i = (i + 1) % (nlSample.length + 12);
      setText(nlSample.slice(0, i > nlSample.length ? 0 : i));
    }, 120);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-left">
      <p className="text-[10px] font-semibold uppercase tracking-wider text-sky-600">
        Natural language
      </p>
      <p className="mt-2 min-h-[3rem] font-mono text-xs text-slate-800">
        {text}
        <span className="animate-pulse text-sky-600">|</span>
      </p>
      <div className="mt-3 flex gap-2">
        <span className="h-8 flex-1 rounded bg-sky-500/20" />
        <span className="h-8 w-12 rounded bg-emerald-500/20" />
      </div>
    </div>
  );
}

function GrowingChartsCard() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const heights = [35, 55, 45, 70, 50, 80];
  return (
    <div ref={ref} className="flex h-36 items-end justify-center gap-1.5 rounded-xl border border-slate-200 bg-white p-4">
      {heights.map((h, i) => (
        <motion.div
          key={i}
          className="w-3 rounded-t bg-gradient-to-t from-sky-600 to-emerald-500"
          initial={{ height: 0 }}
          animate={inView ? { height: `${h}%` } : { height: 0 }}
          transition={{ delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        />
      ))}
    </div>
  );
}

function SlidingRowsCard() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-30px" });
  const rows = ["Region", "Revenue", "MoM %", "North", "₹12.4M", "+4.2%"];
  return (
    <div ref={ref} className="overflow-hidden rounded-xl border border-slate-200 bg-white p-3">
      <div className="space-y-1.5">
        {rows.map((r, i) => (
          <motion.div
            key={r}
            initial={{ x: -40, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ delay: i * 0.06, duration: 0.35 }}
            className={cn(
              "rounded px-2 py-1.5 text-[10px] font-medium",
              i < 3 ? "bg-slate-100 text-slate-600" : "bg-emerald-50 text-slate-800",
            )}
          >
            {r}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function OrbitingConnectorsCard() {
  const icons = [Unplug, FileSpreadsheet, BarChart3, LayoutGrid];
  return (
    <div className="relative flex h-40 items-center justify-center rounded-xl border border-slate-200 bg-gradient-to-br from-slate-50 to-slate-100">
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        animate={{ rotate: 360 }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
      >
        {icons.map((Icon, i) => {
          const angle = (i / icons.length) * Math.PI * 2;
          const r = 52;
          const x = Math.cos(angle) * r;
          const y = Math.sin(angle) * r;
          return (
            <span
              key={i}
              className="absolute flex h-9 w-9 items-center justify-center rounded-full border border-sky-300 bg-white text-sky-600 shadow-sm"
              style={{ transform: `translate(${x}px, ${y}px)` }}
            >
              <Icon className="h-4 w-4" aria-hidden />
            </span>
          );
        })}
      </motion.div>
      <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-sky-500 text-sm font-black text-slate-950">
        <Image
          src="/icon.png"   
          alt="FastOcron Logo"
          width={30}
          height={0}
          className="block object-contain"
        />
      </div>
    </div>
  );
}

function PulseInsightsCard() {
  return (
    <div className="relative flex h-40 items-center justify-center overflow-hidden rounded-xl border border-slate-200 bg-white">
      <motion.div
        className="absolute h-24 w-24 rounded-full bg-emerald-400/30"
        animate={{ scale: [1, 1.35, 1], opacity: [0.5, 0.15, 0.5] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
      />
      <Bot className="relative z-10 h-12 w-12 text-slate-900" aria-hidden />
    </div>
  );
}

function StackingTeamCard() {
  return (
    <div className="relative flex h-40 items-center justify-center">
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute h-24 w-36 rounded-xl border border-slate-200 bg-white shadow-md"
          style={{ rotate: (i - 1) * 4 }}
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: i * -6, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.12, duration: 0.4 }}
        />
      ))}
      <Share2 className="relative z-20 h-8 w-8 text-sky-600" aria-hidden />
    </div>
  );
}

const cards = [
  {
    title: "Natural Language Queries",
    body: "Ask business questions in plain English. AI converts them into charts, tables, and insights instantly.",
    visual: <TypingCard />,
  },
  {
    title: "Auto Dashboards",
    body: "Generate live dashboards in seconds. No manual chart building. No drag-drop complexity.",
    visual: <GrowingChartsCard />,
  },
  {
    title: "Pivot Tables & Excel Export",
    body: "One-click pivots, downloadable reports, smart summaries.",
    visual: <SlidingRowsCard />,
  },
  {
    title: "Multi-Source Data Connectors",
    body: "PostgreSQL, MySQL, Tally ,Oracale & more.",
    visual: <OrbitingConnectorsCard />,
  },
  {
    title: "AI Insights Engine",
    body: "Anomaly detection, trend explanations, and revenue drivers — surfaced automatically.",
    visual: <PulseInsightsCard />,
  },
  {
    title: "Team Collaboration",
    body: "Share dashboards, reports, and alerts with your team instantly.",
    visual: <StackingTeamCard />,
  },
];

export default function CoreFeaturesGrid() {
  return (
    <section className="bg-slate-100 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-2xl font-bold text-slate-900 sm:text-3xl">
          Core features
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-slate-600 sm:text-base">
          Six premium capabilities — each with a subtle motion treatment tuned to the story.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((c, i) => (
            <motion.article
              key={c.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.06, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm transition-shadow hover:shadow-lg"
            >
              <div className="border-b border-slate-100 bg-slate-50/80 p-4">{c.visual}</div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-lg font-bold text-slate-900">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{c.body}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
