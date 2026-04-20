"use client";

import type { ReactNode } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from "motion/react";
import { useRef } from "react";
import { BarChart3, Package, ShoppingBag, Wallet } from "lucide-react";

const cases = [
  {
    title: "Finance Teams",
    body: "P&L, GST, profit margins — in one conversational workspace.",
    icon: Wallet,
    accent: "from-sky-600/20 to-blue-600/10",
  },
  {
    title: "Sales Teams",
    body: "Leads, conversions, territory growth — tracked without spreadsheet chaos.",
    icon: BarChart3,
    accent: "from-emerald-600/20 to-teal-600/10",
  },
  {
    title: "D2C Brands",
    body: "Ads ROI, SKU performance, cohorts — stitched across sources.",
    icon: ShoppingBag,
    accent: "from-violet-600/20 to-fuchsia-600/10",
  },
  {
    title: "Operations",
    body: "Inventory, supply chain trends, SLA dashboards.",
    icon: Package,
    accent: "from-amber-600/20 to-orange-600/10",
  },
];

function TiltCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const xSpring = useSpring(x, { stiffness: 260, damping: 22 });
  const ySpring = useSpring(y, { stiffness: 260, damping: 22 });
  const rotateX = useTransform(ySpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(xSpring, [-0.5, 0.5], ["-7deg", "7deg"]);
  const transform = useMotionTemplate`perspective(900px) rotateX(${rotateX}) rotateY(${rotateY})`;

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - r.left) / r.width - 0.5);
    y.set((e.clientY - r.top) / r.height - 0.5);
  }
  function handleLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={ref}
      style={{ transform }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function FeaturesUseCases() {
  return (
    <section className="border-t border-slate-200 bg-slate-50 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-2xl font-bold text-slate-900 sm:text-3xl">
          Built for your teams
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-sm text-slate-600">
          Hover to tilt — subtle depth without gimmicks.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {cases.map((c) => (
            <TiltCard key={c.title}>
              <div
                className={`h-full rounded-2xl border border-slate-200 bg-gradient-to-br ${c.accent} to-white p-6 shadow-sm`}
              >
                <c.icon className="h-8 w-8 text-slate-900" aria-hidden />
                <h3 className="mt-4 text-lg font-bold text-slate-900">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{c.body}</p>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
