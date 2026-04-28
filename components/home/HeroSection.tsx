"use client";

import Link from "next/link";
import { useMotionValue } from "motion/react";
import { Button } from "../ui/moving-boder";
import { HeroEffects } from "./hero-effects";

export default function HeroSection() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function onMouseMove(e: React.MouseEvent<HTMLElement>) {
    const r = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - r.left);
    mouseY.set(e.clientY - r.top);
  }

  return (
    <section
      onMouseMove={onMouseMove}
      className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-sky-50/40 px-6 pb-24 pt-32 text-center md:pt-36"
    >
      <HeroEffects mouseX={mouseX} mouseY={mouseY} />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-white/80 px-4 py-1.5 shadow-sm backdrop-blur">
          <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-500" />
          <span className="text-xs uppercase tracking-wider font-semibold text-cyan-800">
            AI-Powered Data Intelligence
          </span>
        </div>

        {/* <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-slate-1200 sm:text-5xl md:text-6xl">
          Turn Your Raw Data into Actionable Insights—Without Compromising Privacy
        </h1> */}

            <h1 className="max-w-4xl text-4xl font-semibold  tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
            Turn Your Raw Data into Actionable Insights—{" "}
              <span className="bg-gradient-to-r from-sky-400 to-emerald-400 bg-clip-text text-transparent">
              Without Compromising Privacy
              </span>
            </h1>
        <p className="mt-6 max-w-xl text-lg text-slate-600">
          AI-powered analytics with zero data leakage. Connect any data source, ask
          questions in plain language, and get instant pivot tables, dashboards,
          and insights—without exposing your sensitive data.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a href="https://dev.fastocron.com/signin" target="_blank"
                  rel="noopener noreferrer">
            <Button
              borderRadius="1.75rem"
              className="border border-white/10 bg-gradient-to-br from-cyan-600/30 to-indigo-900/40 font-semibold"
            >
              Get Started
            </Button>
          </a>
          <Link href="/contact">
            <Button
              borderRadius="1.75rem"
            className="border border-slate-200 bg-white font-semibold shadow-sm backdrop-blur"
            >
              Request a Demo
            </Button>
          </Link>
        </div>
      </div>

      {/* <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-16 rounded-t-[2.5rem] bg-gradient-to-b from-transparent to-sky-50/40" /> */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent via-sky-50/20 to-sky-50" />
    </section>
  );
}
