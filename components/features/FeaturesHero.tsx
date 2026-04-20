"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "../ui/moving-boder";

const particles = Array.from({ length: 28 }, (_, i) => ({
  id: i,
  x: `${(i * 37) % 100}%`,
  y: `${(i * 23) % 100}%`,
  delay: (i % 10) * 0.15,
  duration: 10 + (i % 5) * 2,
}));

const slides = [
  "/features/feature-1.png",
  "/features/feature-2.png",
  "/features/feature-3.png",
  "/features/feature4.png",
  "/features/feature5.png",
];

export default function FeaturesHero() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 3500);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden bg-slate-950 pt-28 pb-20 text-white lg:pt-32">
      {/* Particles */}
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

          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(56,189,248,0.25),transparent)]" />
        </div>
      )}

      {/* MAIN */}
      <div className="relative z-10 mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1.05fr] lg:items-center">
        {/* LEFT */}
        <div>
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <p className="inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-sky-300">
            <span className="h-2 w-2 animate-pulse rounded-full bg-white" />
              Features
            </p>

            <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-[2.75rem]">
              Powerful AI Features Built for{" "}
              <span className="bg-gradient-to-r from-sky-400 to-emerald-400 bg-clip-text text-transparent">
                Modern Businesses
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ delay: 0.12, duration: 0.5 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg"
          >
            From natural language analytics to live dashboards and privacy-first
            architecture — Fastocron helps teams turn data into decisions instantly.
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ delay: 0.22, duration: 0.45 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Link href="#contact">
              <Button
                borderRadius="1.75rem"
                className="border border-white/10 bg-gradient-to-br from-cyan-600/30 to-indigo-900/40 text-white"
              >
                Book a Demo
              </Button>
            </Link>

            <Link href="#live-demo">
              <Button
                borderRadius="1.75rem"
                className="border border-cyan-500/30 bg-white/10 text-white backdrop-blur"
              >
                Try Live Demo
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* RIGHT */}
        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.96, y: 20 }}
          animate={reduce ? undefined : { opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.18, duration: 0.6 }}
          className="relative w-full"
        >
          {/* Glow */}
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-sky-500/20 via-transparent to-emerald-500/20 blur-2xl" />

          {/* Responsive Card */}
          <div className="relative overflow-hidden rounded-xl border border-white/10 bg-slate-900/80 shadow-2xl backdrop-blur">
            {/* IMPORTANT FIXED PART */}
            <div className="relative aspect-[16/10] w-full">
              {slides.map((src, i) => (
                <motion.div
                  key={src}
                  className="absolute inset-0"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: active === i ? 1 : 0,
                    scale: active === i ? 1 : 1.03,
                  }}
                  transition={{ duration: 0.7 }}
                >
                  <Image
                    src={src}
                    alt={`Feature ${i + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                    className="object-cover"
                    priority={i === 0}
                  />
                </motion.div>
              ))}
            </div>

            {/* Dots */}
            <div className="flex items-center justify-center gap-2 border-t border-white/10 bg-black/30 px-4 py-4">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-2.5 rounded-full transition-all ${
                    active === i
                      ? "w-8 bg-sky-400"
                      : "w-2.5 bg-white/30 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}