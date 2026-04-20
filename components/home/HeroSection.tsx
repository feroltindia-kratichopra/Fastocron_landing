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
      className="relative overflow-hidden bg-[#050816] px-6 pb-24 pt-32 text-center text-white md:pt-36"
    >
      <HeroEffects mouseX={mouseX} mouseY={mouseY} />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-white/5 px-4 py-1.5 backdrop-blur">
          <span className="h-2 w-2 animate-pulse rounded-full bg-white" />
          <span className="text-xs uppercase tracking-wider text-white">
            AI-Powered Data Intelligence
          </span>
        </div>

        <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-white/90 sm:text-5xl md:text-6xl">
          Turn Your Raw Data into Actionable Insights—Without Compromising Privacy
        </h1>
        <p className="mt-6 max-w-xl text-lg text-slate-300">
          AI-powered analytics with zero data leakage. Connect any data source, ask
          questions in plain language, and get instant pivot tables, dashboards,
          and insights—without exposing your sensitive data.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link href="#contact">
            <Button
              borderRadius="1.75rem"
              className="border border-white/10 bg-gradient-to-br from-cyan-600/30 to-indigo-900/40 text-white"
            >
              Get Started
            </Button>
          </Link>
          <Link href="#live-demo">
            <Button
              borderRadius="1.75rem"
              className="border border-cyan-500/30 bg-white/10 text-white backdrop-blur"
            >
              Request a Demo
            </Button>
          </Link>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-16 rounded-t-[2.5rem] bg-gradient-to-t from-[#0B1120]/90 to-transparent" />
    </section>
  );
}
