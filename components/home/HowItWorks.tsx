"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Cable, LayoutDashboard, MessageCircle, Plug, Sparkles, Bell } from "lucide-react";

const steps = [
  {
    n: "1",
    title: "Connect Your Data Sources",
    body: "Integrate data connectors — from databases and CRMs to APIs and spreadsheets — in minutes. No engineering needed.",
    highlight: "Multiple data sources",
    icon: Plug,
  },
  {
    n: "2",
    title: "Ask Anything",
    body: "Use natural language to query your data. Just ask questions like you would to a colleague.",
    highlight: "Natural language queries",
    icon: MessageCircle,
  },
  {
    n: "3",
    title: "Get Instant Insights & Pivot",
    body:'Receive charts, pivots, and actionable summaries immediately. No waiting for reports..',
    icon: LayoutDashboard,
  },
   {
    n: "4",
    title: 'Build Live Dashboards',
    body: 'Create stunning dashboards with live updates. Share insights with your team or embed them in any product.',
    highlight: 'Live dashboards',
    icon: Bell,
  },
];

export default function FeaturesHowItWorksTimeline() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 40%"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={ref} className="bg-white  py-20">
      <div className="mx-auto max-w-6xl px-6">
      <h2 className="text-center text-5xl font-bold text-gray-900 mt-3 mb-4">
            How Fastocron Works
          </h2>
     

        <div className="relative mx-auto mt-16 max-w-3xl">
          <div className="absolute left-[22px] top-0 hidden h-full w-0.5 bg-slate-200 sm:block" />
          <motion.div
            className="absolute left-[22px] top-0 hidden w-0.5 origin-top bg-gradient-to-b from-sky-500 to-emerald-500 sm:block"
            style={{ height: lineHeight }}
          />

          <div className="space-y-12">
            {steps.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.1, duration: 0.45 }}
                className="relative flex gap-6 sm:gap-8"
              >
                <div className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-sky-500 bg-white text-sm font-bold text-slate-900 shadow-md">
                  {s.n}
                </div>
                <div className="flex-1 rounded-2xl border border-slate-200 bg-slate-50/80 p-6 shadow-sm">
                  <div className="flex items-center gap-3">
                    <s.icon className="h-5 w-5 text-sky-600" aria-hidden />
                    <h3 className="text-lg font-bold text-slate-900">{s.title}</h3>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
