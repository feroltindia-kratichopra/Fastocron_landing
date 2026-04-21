"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Bot, Database, Shield } from "lucide-react";

const bullets = [
  "Row-level access controls",
  "Secure connectors",
  "Role permissions",
  "On-prem deployment available",
  "GDPR-ready architecture",
];

export default function PrivacyArchitectureSection() {
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 75%", "end 25%"],
  });

  const shieldScale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.88, 1.12, 1]
  );

  const lineOpacity = useTransform(
    scrollYProgress,
    [0.2, 0.6],
    [0.35, 1]
  );

  return (
    <section ref={ref} className="bg-slate-50 py-20 text-slate-900 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
            Privacy-first
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Your Data Never Leaves Your Control
          </h2>

          <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
            Unlike traditional AI tools, Fastocron only processes query outputs
            — not raw databases.
          </p>
        </motion.div>

        {/* Content */}
        <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          {/* Chips / Bullets */}
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {bullets.map((b, i) => (
              <motion.li
                key={b}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.08 + i * 0.06,
                  duration: 0.4,
                }}
                className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 shadow-sm backdrop-blur"
              >
                <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-500 animate-pulse" />
                <span>{b}</span>
              </motion.li>
            ))}
          </ul>

          {/* Diagram */}
          <div className="relative overflow-hidden  p-5 sm:p-8">
            <motion.div
              style={{ opacity: lineOpacity }}
              className="flex flex-col items-center justify-center gap-6 sm:gap-8 md:flex-row"
            >
              {/* DB */}
              <div className="flex flex-col items-center gap-2 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-100 ring-1 ring-sky-200 sm:h-16 sm:w-16">
                  <Database
                    className="h-7 w-7 text-sky-600 sm:h-8 sm:w-8"
                    aria-hidden
                  />
                </div>
                <span className="text-xs text-slate-500">Database</span>
              </div>

              {/* Line */}
              <div className="h-8 w-px bg-gradient-to-b from-sky-500/50 to-emerald-500/50 md:h-px md:w-14 lg:w-20" />

              {/* Shield */}
              <motion.div
                style={{ scale: shieldScale }}
                className="flex flex-col items-center gap-2 text-center"
              >
                <div className="flex h-18 w-18 items-center justify-center rounded-2xl border-2 border-emerald-300 bg-emerald-50 shadow-md shadow-emerald-500/15 sm:h-20 sm:w-20">
                  <Shield
                    className="h-8 w-8 text-emerald-600 sm:h-10 sm:w-10"
                    aria-hidden
                  />
                </div>
                <span className="text-xs text-slate-500">Shield</span>
              </motion.div>

              {/* Line */}
              <div className="h-8 w-px bg-gradient-to-b from-emerald-500/50 to-sky-500/50 md:h-px md:w-14 lg:w-20" />

              {/* AI */}
              <div className="flex flex-col items-center gap-2 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-100 ring-1 ring-sky-200 sm:h-16 sm:w-16">
                  <Bot
                    className="h-7 w-7 text-sky-600 sm:h-8 sm:w-8"
                    aria-hidden
                  />
                </div>
                <span className="text-xs text-slate-500">AI</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}