"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { KeyRound, LayoutGrid, MessageCircleQuestion } from "lucide-react";

const steps = [
  {
    title: "Authenticate securely",
    body: "OAuth, credentials, or API keys — you choose what fits each system.",
    icon: KeyRound,
  },
  {
    title: "Auto detect schema",
    body: "Tables, fields, and metrics are recognized automatically so you skip weeks of mapping.",
    icon: LayoutGrid,
  },
  {
    title: "Start asking questions",
    body: "Use chat to analyze instantly across every connected source in one workspace.",
    icon: MessageCircleQuestion,
  },
];

export default function IntegrationsHowConnectionsWork() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.35"],
  });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section ref={ref} className="border-t border-slate-200 bg-slate-50 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center mt-3 text-4xl font-bold text-slate-900 md:text-5xl">
          Connect in minutes
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-slate-600">
          A simple path from credentials to answers — no brittle pipelines required.
        </p>

        <div className="relative mx-auto mt-16 max-w-3xl">
          <div className="absolute left-6 top-0 bottom-0 w-px overflow-hidden bg-slate-200 md:left-8">
            <motion.div
              className="w-full origin-top bg-gradient-to-b from-sky-500 to-emerald-500"
              style={{ scaleY: lineScale, height: "100%" }}
            />
          </div>

          <ol className="relative space-y-12">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <li key={step.title} className="flex gap-6 md:gap-10">
                  <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-sky-100 bg-white shadow-md md:h-16 md:w-16">
                    <Icon className="h-7 w-7 text-sky-600" aria-hidden />
                    <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500 text-xs font-bold text-white">
                      {i + 1}
                    </span>
                  </div>
                  <div className="pt-1">
                    <h3 className="text-lg font-bold text-slate-900">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.body}</p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
