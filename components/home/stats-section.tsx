"use client";

import { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: 80, suffix: "%", label: "Faster Reporting" },
  { value: 5, suffix: " min", label: "Setup" },
  { value: 10, suffix: "+", label: "Connectors" },
  { value: 0, suffix: "", label: "Raw Data Shared", text: "Zero" },
];

function CountUp({ target }: { target: number }) {
  const ref = useRef(null);
  const inView = useInView(ref);

  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const duration = 1400;
    const startTime = performance.now();

    const update = (time: number) => {
      const progress = Math.min((time - startTime) / duration, 1);

      const eased = 1 - Math.pow(1 - progress, 4); // fast then slow stop
      const current = Math.floor(eased * target);

      setCount(current);

      if (progress < 1) requestAnimationFrame(update);
    };

    requestAnimationFrame(update);
  }, [inView, target]);

  return <span ref={ref}>{count}</span>;
}

export default function StatsSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-cyan-500 via-blue-600 to-indigo-700 py-20 text-white">
      <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-2 gap-10 px-6 md:grid-cols-4 md:gap-6">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <p className="text-5xl font-black md:text-6xl">
              {s.text ? (
                s.text
              ) : (
                <>
                  <CountUp target={s.value} />
                  {s.suffix}
                </>
              )}
            </p>

            <p className="mt-2 text-sm font-semibold uppercase tracking-widest text-white/90 md:text-base">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}