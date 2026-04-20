import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import Image from "next/image";

export function Applications() {
  return (
    <section id="applications" className="relative overflow-hidden bg-slate-50 py-24">
      <div className="pointer-events-none absolute right-0 top-0 h-64 w-64 rounded-full bg-gradient-to-bl from-cyan-400/10 to-transparent blur-3xl" />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600">
            Applications
          </span>
          <h2 className="mt-3 text-4xl font-bold text-slate-900 md:text-5xl">
            Built for Your Business
          </h2>
        </div>
        <BentoGrid className="mx-auto max-w-4xl md:auto-rows-[20rem]">
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              className={item.className}
            />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}

const items = [
  {
    title: "Replace Excel with AI",
    description:
      "Get instant answers, charts, and summaries without writing a single line of SQL.",
    header: (
      <div className="relative h-full min-h-[10rem] w-full">
        <Image
          src="/useCases/Excel.png"
          alt="Replace Excel with AI"
          fill
          className="rounded-lg object-cover"
        />
      </div>
    ),
    className: "md:col-span-2",
  },
  {
    title: "Unify Data from Multiple Sources",
    description:
      "Unify data from databases, CRMs, Tally, APIs, and more into a single, accessible view. No more data silos.",
    header: (
      <div className="relative h-full min-h-[5rem] w-full">
        <Image
          src="/useCases/data.png"
          alt="Unified data"
          fill
          className="rounded-lg object-cover"
        />
      </div>
    ),
    className: "md:col-span-1",
  },
  {
    title: "Generate Pivot Tables in Seconds",
    description:
      "Generate Excel-style pivot tables directly from your data with a single chat command. Supports aggregation, grouping, and filtering.",
    header: (
      <div className="relative h-full min-h-[5rem] w-full">
        <Image
          src="/useCases/pivot.png"
          alt="Pivot tables"
          fill
          className="rounded-lg object-cover"
        />
      </div>
    ),
    className: "md:col-span-1",
  },
  {
    title: "Get Automated Insights",
    description:
      "Get instant, AI-powered insights from your data—automatically surfacing trends, anomalies, and key drivers without manual analysis.",
    header: (
      <div className="relative h-full min-h-[5rem] w-full">
        <Image
          src="/useCases/insights.png"
          alt="Automated insights"
          fill
          className="rounded-lg object-cover"
        />
      </div>
    ),
    className: "md:col-span-2",
  },
];
