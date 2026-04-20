"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

const placeholder = "Show top performing products this month...";

export default function UseCasesFinalCta() {
  const [text, setText] = useState("");

  useEffect(() => {
    let i = 0;

    const id = window.setInterval(() => {
      i++;

      if (i <= placeholder.length) {
        setText(placeholder.slice(0, i));
      } else if (i > placeholder.length + 12) {
        i = 0;
        setText("");
      }
    }, 85);

    return () => window.clearInterval(id);
  }, []);

  return (
    <section className="bg-gradient-to-b from-slate-100 to-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-950 px-8 py-14 text-center text-white shadow-2xl sm:px-12"
        >
          {/* Glow background */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(56,189,248,0.22),transparent_55%)]" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_80%_100%,rgba(52,211,153,0.14),transparent_45%)]" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_80%,rgba(168,85,247,0.12),transparent_35%)]" />

          <div className="relative">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Built for Teams That Need{" "}
              <span className="bg-gradient-to-r from-sky-400 to-emerald-400 bg-clip-text text-transparent">
                Faster Answers
              </span>
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
              Whether you're in finance, retail, marketing, or operations —
              Fastocron helps your team automate reporting, uncover trends,
              and make confident decisions in minutes.
            </p>

            {/* Animated Chat Prompt */}
            <div className="mx-auto mt-8 max-w-xl rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-left backdrop-blur">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                Ask Fastocron
              </p>

              <p className="mt-2 min-h-[24px] font-mono text-sm text-sky-300">
                {text}
                <span className="ml-1 inline-block h-4 w-0.5 animate-pulse bg-sky-400 align-middle" />
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <Link
                href="/#contact"
                className="inline-flex h-12 min-w-[140px] items-center justify-center rounded-full bg-sky-500 px-8 text-sm font-semibold text-slate-950 transition hover:bg-sky-400"
              >
                Book Demo
              </Link>

              <Link
                href="/features#live-demo"
                className="inline-flex h-12 min-w-[170px] items-center justify-center rounded-full border border-white/25 bg-white/5 px-8 text-sm font-semibold text-white backdrop-blur transition hover:border-emerald-400/50 hover:bg-white/10"
              >
                Try Live Demo
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}