"use client";

import { useMemo } from "react";
import {
  motion,
  useMotionTemplate,
  type MotionValue,
} from "motion/react";

type HeroEffectsProps = {
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
};

export function HeroEffects({ mouseX, mouseY }: HeroEffectsProps) {
  const spotlight = useMotionTemplate`radial-gradient(520px circle at ${mouseX}px ${mouseY}px, rgba(34,211,238,0.22), transparent 55%)`;

  const particles = useMemo(
    () =>
      Array.from({ length: 48 }, (_, i) => ({
        id: i,
        left: `${(i * 17) % 100}%`,
        top: `${(i * 23 + (i % 7) * 11) % 100}%`,
        delay: `${(i % 12) * 0.25}s`,
        duration: `${10 + (i % 8)}s`,
        size: 1 + (i % 3),
      })),
    [],
  );

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="hero-animated-grid absolute inset-0 opacity-60" />
      <motion.div
        className="absolute inset-0"
        style={{ background: spotlight }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(99,102,241,0.25),transparent)]" />
      {particles.map((p) => (
        <span
          key={p.id}
          className="hero-particle absolute rounded-full bg-cyan-400/30"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            animationDelay: p.delay,
            animationDuration: p.duration,
          }}
        />
      ))}
    </div>
  );
}
