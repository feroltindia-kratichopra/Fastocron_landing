"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Bot } from "lucide-react";

const prompt = "Why did sales drop in April?";

export default function LiveDemoPreview() {
  const [phase, setPhase] = useState<"typing" | "answer">("typing");
  const [shown, setShown] = useState("");

  useEffect(() => {
    if (phase !== "typing") return;
    let i = 0;
    let timeoutId: number | undefined;
    const t = window.setInterval(() => {
      i += 1;
      setShown(prompt.slice(0, i));
      if (i >= prompt.length) {
        window.clearInterval(t);
        timeoutId = window.setTimeout(() => setPhase("answer"), 600);
      }
    }, 55);
    return () => {
      window.clearInterval(t);
      if (timeoutId) window.clearTimeout(timeoutId);
    };
  }, [phase]);

  return (
    <section id="live-demo" className="scroll-mt-28 bg-slate-50 py-24 text-slate-900">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">
          Live demo preview
        </p>
        <h2 className="mt-3 text-center text-2xl font-bold text-slate-900 sm:text-3xl">
          See the assistant respond in context
        </h2>
      

        <div className="mx-auto mt-12 max-w-3xl overflow-hidden rounded-2xl border border-white/10 bg-slate-900/80 shadow-2xl backdrop-blur">
          <div className="border-b border-white/10 px-4 py-3 text-xs text-slate-400">
            Fastocron
          </div>
          <div className="p-5 sm:p-6">
            

          <video>
            <source src="/MBInsights.mp4" type="video/mp4" />
          </video>
          </div>
        </div>
      </div>
    </section>
  );
}
