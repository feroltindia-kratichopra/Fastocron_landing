"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const tabs = [
  {
    id: "ai",
    label: "AI Analytics",
    headline: "Ask, understand, act — without SQL.",
    body:
      "Turn business questions into trusted charts, summaries, and decisions using natural language.",
    image: "/features/feature4.png",
    chips: ["Natural Language", "Instant Charts", "Smart Summaries"],
  },
  {
    id: "dash",
    label: "Dashboards",
    headline: "Dashboards that stay alive.",
    body:
      "Track KPIs in real time with auto-refreshing dashboards designed for teams and stakeholders.",
    image: "/features/Dashboard.png",
    chips: ["Live KPIs", "Shareable Links", "Auto Refresh"],
  },
  {
    id: "int",
    label: "Integrations",
    headline: "Bring every source into one workspace.",
    body:
      "Connect databases, spreadsheets, CRMs, Tally, ads platforms, and commerce tools effortlessly.",
    image: "/features/Sources.png",
    chips: ["MySQL", "Postgres", "CRM Connectors"],
  },
  {
    id: "sec",
    label: "Security",
    headline: "Privacy-first by architecture.",
    body:
      "Built with secure connectors, access controls, and deployment flexibility to match your needs.",
    image: "/features/Privacy.png",
    chips: ["Role Access", "Secure Sync", "Private AI"],
  },
  {
    id: "auto",
    label: "Automation",
    headline: "Less reporting, more signal.",
    body:
      "Automate recurring reports, anomaly alerts, exports, and executive summaries.",
    image: "/features/Automation.png",
    chips: ["Scheduled Reports", "Alerts", "Exports"],
  },
] as const;

export default function FeatureCategoryTabs() {
  const [active, setActive] =
    useState<(typeof tabs)[number]["id"]>("ai");

  const current = tabs.find((t) => t.id === active)!;

  return (
    <section className="border-b border-slate-200 bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-700">
            Features
          </p>

          <h2 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
            Explore by category
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Discover how Fastocron helps teams analyze, automate, and grow.
          </p>
        </div>

        {/* Tabs */}
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActive(tab.id)}
              className={cn(
                "rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300",
                active === tab.id
                  ? "bg-slate-900 text-white shadow-lg"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Main Card */}
        <div className="mt-14 overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white shadow-xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{
                duration: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="grid lg:grid-cols-2"
            >
              {/* LEFT CONTENT */}
              <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-14">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">
                  {current.label}
                </p>

                <h3 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                  {current.headline}
                </h3>

                <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
                  {current.body}
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  {current.chips.map((chip) => (
                    <span
                      key={chip}
                      className="rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-semibold text-cyan-800"
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              </div>

              {/* RIGHT IMAGE */}
              <div className="relative p-6 sm:p-8 lg:p-10">
                {/* Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10" />

                {/* FIXED RESPONSIVE IMAGE CONTAINER */}
                <div className="relative mx-auto w-full max-w-[560px] overflow-hidden rounded-2xl border border-white/40 bg-white shadow-2xl">
                  <div className="relative aspect-[16/10] w-full">
                    <Image
                      src={current.image}
                      alt={current.label}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 560px"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}