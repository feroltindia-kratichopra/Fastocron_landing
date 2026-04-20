"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Button } from "../ui/moving-boder";

export default function FeaturesFinalCta() {
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
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(56,189,248,0.2),transparent_55%)]" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_80%_100%,rgba(52,211,153,0.12),transparent_45%)]" />

          <div className="relative">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to Turn Data Into Decisions?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-sm text-slate-300 sm:text-base">
              Try Fastocron today — book a walkthrough or start a guided trial with your own
              sources.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <Link href="/contact">
              <Button
                borderRadius="1.75rem"
                className="border border-white/10 bg-gradient-to-br from-cyan-600/30 to-indigo-900/40 text-white"
              >
                Book a Demo
              </Button>
              </Link>
             
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
