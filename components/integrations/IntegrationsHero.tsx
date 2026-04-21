"use client";

import Link from "next/link";
import { useMemo } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Sparkles } from "lucide-react";
import { Button } from "../ui/moving-boder";

const orbitApps = [
  "Tally",
  "PostgreSQL",
  "SQLite",
  "Oracle",
  "MySQL",
  "MariaDB",
  "Excel",
  "SQL Server",
];

const particles = Array.from({ length: 28 }, (_, i) => ({
  id: i,
  x: `${(i * 37) % 100}%`,
  y: `${(i * 23) % 100}%`,
  delay: (i % 10) * 0.15,
  duration: 10 + (i % 5) * 2,
}));

const cx = 210;
const cy = 210;
const r = 145;

export default function IntegrationsHero() {
  const reduce = useReducedMotion();

  const points = useMemo(
    () =>
      orbitApps.map((label, i) => {
        const angle = (i / orbitApps.length) * Math.PI * 2 - Math.PI / 2;

        return {
          label,
          x: cx + r * Math.cos(angle),
          y: cy + r * Math.sin(angle),
        };
      }),
    []
  );

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-slate-100/70 pt-28 pb-20 text-slate-900 lg:pt-32">
      {/* Background */}
      {!reduce && (
        <div className="pointer-events-none absolute inset-0">
          {particles.map((p) => (
            <motion.span
              key={p.id}
              className="absolute h-1 w-1 rounded-full bg-sky-400/40"
              style={{ left: p.x, top: p.y }}
              animate={{
                opacity: [0.15, 0.85, 0.15],
                scale: [0.6, 1.4, 0.6],
                y: [0, -18, 0],
              }}
              transition={{
                duration: p.duration,
                delay: p.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}

          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(56,189,248,0.22),transparent)]" />
        </div>
      )}

      {/* MAIN */}
      <div className="relative z-10 mx-auto grid max-w-7xl gap-14 px-6 sm:px-8 lg:grid-cols-2 lg:items-center">
        {/* LEFT */}
        <div className="text-center lg:text-left">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <p className="inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-sky-700">
            <span className="h-2 w-2 animate-pulse rounded-full bg-sky-500" />
              Integrations
            </p>

            <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-[2.75rem]">
              Connect Fastocron With{" "}
              <span className="bg-gradient-to-r from-sky-400 to-emerald-400 bg-clip-text text-transparent">
                Everything You Use
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ delay: 0.12, duration: 0.5 }}
            className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg lg:mx-0"
          >
            Databases, CRMs, spreadsheets, ERPs, ad platforms, and custom APIs —
            all unified into one secure analytics workspace.
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ delay: 0.22, duration: 0.45 }}
            className="mt-8 flex justify-center lg:justify-start"
          >
            <Link href="#contact">
              <Button
                borderRadius="1.75rem"
                className="border border-white/10 bg-gradient-to-br from-cyan-600/30 to-indigo-900/40"
              >
                Book a Demo
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* RIGHT ORBIT */}
        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.96, y: 20 }}
          animate={reduce ? undefined : { opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.18, duration: 0.6 }}
          className="relative mx-auto w-full max-w-[440px] sm:max-w-[500px]"
        >
          {/* glow */}
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-sky-500/20 via-transparent to-emerald-500/20 blur-2xl" />

          <div className="relative aspect-square w-full">
            {/* SVG lines */}
            <svg viewBox="0 0 440 440" className="absolute inset-0 h-full w-full">
              <defs>
                <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.15" />
                  <stop offset="100%" stopColor="#10b981" stopOpacity="0.9" />
                </linearGradient>
              </defs>

              {points.map((p, i) => (
                <motion.path
                  key={p.label}
                  d={`M ${cx} ${cy} L ${p.x} ${p.y}`}
                  fill="none"
                  stroke="url(#lineGrad)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  initial={reduce ? { pathLength: 1 } : { pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{
                    duration: 0.7,
                    delay: i * 0.08,
                  }}
                />
              ))}
            </svg>

            {/* Center */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                animate={
                  reduce
                    ? undefined
                    : {
                        scale: [1, 1.06, 1],
                      }
                }
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                }}
                className="relative flex h-20 w-20 sm:h-28 sm:w-28 items-center justify-center rounded-3xl bg-gradient-to-br from-sky-500 to-emerald-500 text-lg sm:text-xl font-black text-white shadow-[0_0_50px_-10px_rgba(14,165,233,0.55)]"
              >
                FC
                <span className="absolute inset-0 rounded-3xl ring-2 ring-white/30" />
              </motion.div>
            </div>

            {/* Labels */}
            {points.map((p, i) => (
              <motion.div
                key={p.label}
                initial={reduce ? false : { opacity: 0, scale: 0.8 }}
                animate={reduce ? undefined : { opacity: 1, scale: 1 }}
                transition={{
                  delay: 0.45 + i * 0.05,
                  type: "spring",
                  stiffness: 260,
                  damping: 18,
                }}
                className="absolute rounded-full border border-white/10 bg-white/95 px-2 py-1 text-[9px] sm:px-3 sm:text-[11px] font-bold text-slate-800 shadow-lg"
                style={{
                  left: `${(p.x / 440) * 100}%`,
                  top: `${(p.y / 440) * 100}%`,
                  transform: "translate(-50%, -50%)",
                }}
              >
                {p.label}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}