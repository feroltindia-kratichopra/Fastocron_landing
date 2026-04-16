import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import Image from "next/image";
export function Applications() {
  return (
    <section id="applications" className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-blue-600 text-sm font-semibold uppercase tracking-widest">Applications</span>
          <h2 className="text-5xl font-bold text-gray-900 mt-3 mb-4">
          Built for Your Business
          </h2>
        
        </div>
    <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
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
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
);
const items = [
  {
    title: "Replace Excel with AI",
    description: "Get instant answers, charts, and summaries without writing a single line of SQL.",
    header: <div className="relative w-full h-full min-h-[10rem]">
    <Image
      src="/useCases/Excel.png"
      alt="excel"
      fill
      className="object-cover rounded-lg"
    />
  </div>,
    className: "md:col-span-2",
   
  },
  {
    title: "Unify Data from Multiple Sources",
    description: "Unify data from databases, CRMs, Tally, APIs, and more into a single, accessible view. No more data silos.",
    header:<div className="relative w-full h-full min-h-[5rem]">
    <Image
      src="/useCases/data.png"
      alt="excel"
      fill
      className="object-cover rounded-lg"
    />
  </div>,
    className: "md:col-span-1",

  },
  {
    title: "Generate Pivot Tables in Seconds",
    description: "Generate Excel-style pivot tables directly from your data with a single chat command. Supports aggregation, grouping, and filtering.",
    header: <div className="relative w-full h-full min-h-[5rem]">
    <Image
      src="/useCases/pivot.png"
      alt="excel"
      fill
      className="object-cover rounded-lg"
    />
  </div>,
    className: "md:col-span-1",
  
  },
  {
    title: "Get Automated Insights",
    description: "Get instant, AI-powered insights from your data—automatically surfacing trends, anomalies, and key drivers without manual analysis.",
    header: <div className="relative w-full h-full min-h-[5rem]">
    <Image
      src="/useCases/insights.png"
      alt="excel"
      fill
      className="object-cover rounded-lg"
    />
  </div>,
    className: "md:col-span-2",
   
  },
];
