"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { Button } from "../ui/moving-boder";

const prompts = [
  "Connect Tally + PostgreSQL + Excel",
  "Sync MySQL + SQL Server dashboards",
  "Merge Oracle + MariaDB reports",
  "Ask questions across all sources",
];

export default function IntegrationsFinalCta() {
  const wrapRef = useRef(null);
  const inView = useInView(wrapRef, { once: false, margin: "-15%" });

  const [text, setText] = useState("");
  const [promptIndex, setPromptIndex] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let charIndex = 0;
    let deleting = false;

    const currentPrompt = prompts[promptIndex];

    const interval = window.setInterval(() => {
      if (!deleting) {
        charIndex++;
        setText(currentPrompt.slice(0, charIndex));

        if (charIndex === currentPrompt.length) {
          deleting = true;
        }
      } else {
        charIndex--;
        setText(currentPrompt.slice(0, charIndex));

        if (charIndex === 0) {
          deleting = false;
          setPromptIndex((prev) => (prev + 1) % prompts.length);
        }
      }
    }, deleting ? 32 : 58);

    return () => window.clearInterval(interval);
  }, [inView, promptIndex]);

  return (
    <section
      ref={wrapRef}
      className="bg-gradient-to-b from-slate-100 to-white py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-950 px-8 py-14 text-center text-white shadow-2xl sm:px-12"
        >
          {/* Background glow */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(56,189,248,0.2),transparent_55%)]" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_80%_100%,rgba(52,211,153,0.12),transparent_45%)]" />

          <div className="relative">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Connect Every Source.{" "}
              <span className="bg-gradient-to-r from-sky-400 to-emerald-400 bg-clip-text text-transparent">
                Analyze Instantly.
              </span>
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm text-slate-300 sm:text-base">
              Bring databases, ERPs, and spreadsheets into one secure workspace —
              then ask business questions in plain English.
            </p>

            {/* Prompt box */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="mx-auto mt-10 max-w-xl rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-left backdrop-blur"
            >
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-slate-400">
                Fastocron Prompt
              </p>

              <p className="mt-2 min-h-[28px] font-mono text-sm text-white sm:text-base">
                {text}
                <span className="ml-0.5 inline-block h-4 w-0.5 animate-pulse bg-sky-400 align-middle" />
              </p>
            </motion.div>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <Button>
              <Link
                href="/contact"
                className="inline-flex h-12 min-w-[140px] items-center justify-center rounded-full bg-sky-500 px-8 text-sm font-semibold text-slate-950 transition "
              >
                Book Demo
              </Link></Button>

           
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}