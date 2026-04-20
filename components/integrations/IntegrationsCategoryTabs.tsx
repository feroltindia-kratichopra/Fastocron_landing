"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/utils";
import Image from "next/image";

const tabs = [
  {
    id: "db",
    label: "Databases",
    headline: "Warehouse-grade connectivity, SMB-simple setup.",
    body: "Postgres, MySQL, SQL Server — secure credentials, schema discovery, and governed refresh.",
    image: "/integrations/Databases.png",
    chips: ["Postgres", "MySQL", "SQL Server"],
  },
  {
    id: "erp",
    label: "ERP & Finance",
    headline: "Tally, ledgers, and finance exports — unified for analysis.",
    body: "Sync accounting truth for P&L, GST, and branch rollups without manual consolidation.",
    image: "/integrations/Tally.png",
    chips: ["Tally", "GST", "P&L"],
  },
  {
    id: "files",
    label: "Files",
    headline: "Excel & CSV uploads for instant questions.",
    body: "Drag in a file and ask — ideal for one-off packs and legacy extracts.",
    image: "/integrations/files.png",
    chips: ["Excel", "CSV", "Uploads"],
  },
  {
    id: "api",
    label: "Custom APIs",
    headline: "Webhooks and bespoke endpoints for internal systems.",
    body: "Bring legacy ERP, POS, or partner feeds into the same governed analytics layer.",
    image: "/integrations/api.png",
    chips: ["REST API", "Webhooks", "Custom Sync"],
  },
] as const;

export default function IntegrationsCategoryTabs() {
  const [active, setActive] =
    useState<(typeof tabs)[number]["id"]>("db");

  const current = tabs.find((t) => t.id === active)!;

  return (
    <section
      id="integration-tabs"
      className="scroll-mt-28 bg-slate-50 py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Heading */}
        <h2 className="mt-3 text-center text-4xl font-bold text-slate-900 md:text-5xl">
          Browse by category
        </h2>

        <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-slate-600">
          Pick a category to see how Fastocron fits your stack.
        </p>

        {/* Tabs */}
        <div className="relative mt-10 flex flex-wrap justify-center gap-1 border-b border-slate-200 pb-0.5">
          {tabs.map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setActive(t.id)}
              className={cn(
                "relative px-3 py-3 text-xs font-semibold transition sm:px-4 sm:text-sm",
                active === t.id
                  ? "text-sky-800"
                  : "text-slate-500 hover:text-slate-800"
              )}
            >
              {active === t.id && (
                <motion.span
                  layoutId="integrationsActiveTab"
                  className="absolute inset-x-1 bottom-0 h-0.5 rounded-full bg-gradient-to-r from-sky-500 to-emerald-500"
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 34,
                  }}
                />
              )}

              <span className="relative z-10">{t.label}</span>
            </button>
          ))}
        </div>

        {/* Main Card */}
        <div className="relative mt-10 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{
                duration: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="grid lg:grid-cols-2"
            >
              {/* LEFT CONTENT */}
              <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-14">
                <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                  {current.headline}
                </h3>

                <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base">
                  {current.body}
                </p>

                {/* Chips */}
                <div className="mt-8 flex flex-wrap gap-3">
                  {current.chips.map((chip) => (
                    <span
                      key={chip}
                      className="rounded-full border border-sky-100 bg-sky-50 px-4 py-2 text-sm font-medium text-sky-800"
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              </div>

              {/* RIGHT IMAGE */}
              <div className="p-4 sm:p-6 lg:p-8">
                {/* responsive aspect ratio box */}
                <div className="relative w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl aspect-[16/10] sm:aspect-[16/9]">
                  <Image
                    src={current.image}
                    alt={current.label}
                    fill
                    className="object-contain w-full h-full"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}