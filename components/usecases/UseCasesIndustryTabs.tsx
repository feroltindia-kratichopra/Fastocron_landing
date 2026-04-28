"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const tabs = [
  {
    id: "finance",
    label: "Finance",
    glow: "shadow-md shadow-sky-200/80",
    ring: "ring-sky-300",
    headline: "Close the books faster — with governed AI.",
    body: "P&L, GST, and branch performance on demand. Fewer spreadsheets, fewer errors, faster audits.",
    image: "/useCases/Finance.png",
  },
  {
    id: "sales",
    label: "Sales",
    glow: "shadow-md shadow-indigo-200/80",
    ring: "ring-indigo-300",
    headline: "Pipeline clarity without another BI project.",
    body: "Rep performance, territory growth, and win/loss drivers — asked in plain language, answered in charts.",
    image: "/useCases/Sales.png",
  },
  {
    id: "ecommerce",
    label: "E-commerce",
    glow: "shadow-md shadow-orange-200/80",
    ring: "ring-orange-300",
    headline: "SKU + ads + orders — finally in one place.",
    body: "Connect storefronts and ad platforms to see ROAS, inventory risk, and product momentum together.",
    image: "/useCases/ECommerce.png",
  },
  {
    id: "operations",
    label: "Operations",
    glow: "shadow-md shadow-emerald-200/80",
    ring: "ring-emerald-300",
    headline: "Live ops KPIs that teams actually check.",
    body: "Fulfillment, delays, stock movement, and supplier risk — refreshed continuously.",
    image: "/useCases/Operations.png",
  },
  {
    id: "founders",
    label: "Founders",
    glow: "shadow-md shadow-purple-200/80",
    ring: "ring-purple-300",
    headline: "One cockpit for the whole business.",
    body: "Morning summaries across revenue, retention, burn, and growth — tuned for executive decisions.",
    image: "/useCases/Founder.png",
  },
  {
    id: "agencies",
    label: "Agencies",
    glow: "shadow-md shadow-cyan-200/80",
    ring: "ring-cyan-300",
    headline: "Client reporting that scales.",
    body: "Branded dashboards, recurring exports, and multi-workspace separation without manual glue work.",
    image: "/useCases/agencies.png",
  },
] as const;

export default function UseCasesIndustryTabs() {
  const [active, setActive] =
    useState<(typeof tabs)[number]["id"]>("finance");

  const current = tabs.find((t) => t.id === active)!;

  return (
    <section
      id="industry-tabs"
      className="scroll-mt-28 border-b border-slate-200 bg-white py-20 text-slate-900"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Heading */}
        <h2 className="text-center text-3xl font-bold text-slate-900 sm:text-4xl md:text-5xl">
          Pick your industry
        </h2>

        {/* Tabs */}
        <div className="relative mt-10 flex flex-wrap justify-center gap-2 rounded-2xl border border-slate-200 bg-slate-100/90 p-2">
          {tabs.map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setActive(t.id)}
              className={cn(
                "relative rounded-xl px-4 py-2.5 text-sm font-semibold transition",
                active === t.id
                  ? "text-slate-900"
                  : "text-slate-600 hover:text-slate-900"
              )}
            >
              {active === t.id && (
                <motion.span
                  layoutId="activeUseCaseTab"
                  className={cn(
                    "absolute inset-0 -z-0 rounded-xl bg-white ring-1 ring-slate-200",
                    t.ring,
                    t.glow
                  )}
                  transition={{
                    type: "spring",
                    stiffness: 380,
                    damping: 30,
                  }}
                />
              )}
              <span className="relative z-10">{t.label}</span>
            </button>
          ))}
        </div>

        {/* Main Card */}
        <div className="relative mt-10 overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white shadow-sm">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{
                duration: 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="grid gap-0 lg:grid-cols-2"
            >
              {/* LEFT CONTENT */}
              <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-12">
                <h3 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                  {current.headline}
                </h3>

                <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base">
                  {current.body}
                </p>

                <div className="mt-8 flex flex-wrap gap-2">
                  {["Templates", "Alerts", "Exports"].map((chip) => (
                    <span
                      key={chip}
                      className="rounded-lg border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700 shadow-sm"
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              </div>

              {/* RIGHT IMAGE */}
              <div className="relative min-h-[260px] sm:min-h-[340px] lg:min-h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-sky-500/5 via-transparent to-cyan-500/10" />

                <div className="absolute inset-0 p-4 sm:p-6 lg:p-8">
                  <div className="relative h-full w-full overflow-hidden rounded-2xl border border-white/40 bg-white shadow-xl">
                    <Image
                      src={current.image}
                      alt={current.label}
                      fill
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