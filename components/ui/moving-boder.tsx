"use client";
import React, { useState } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionTemplate,
  useMotionValue,
  useTransform,
} from "motion/react";
import { useRef } from "react";
import { cn } from "@/lib/utils";

export function Button({
  borderRadius = "1.75rem",
  children,
  as: Component = "button",
  containerClassName,
  borderClassName,
  duration,
  className,
  magnetic = true,
  ...otherProps
}: {
  borderRadius?: string;
  children: React.ReactNode;
  as?: any;
  containerClassName?: string;
  borderClassName?: string;
  duration?: number;
  className?: string;
  magnetic?: boolean;
  [key: string]: any;
}) {
  const [mag, setMag] = useState({ x: 0, y: 0 });
  const {
    onMouseMove: onMouseMoveProp,
    onMouseLeave: onMouseLeaveProp,
    ...restProps
  } = otherProps;

  function onMouseMove(e: React.MouseEvent<HTMLElement>) {
    onMouseMoveProp?.(e);
    if (!magnetic) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const mx = e.clientX - rect.left - rect.width / 2;
    const my = e.clientY - rect.top - rect.height / 2;
    setMag({ x: mx * 0.14, y: my * 0.14 });
  }

  function onMouseLeave(e: React.MouseEvent<HTMLElement>) {
    onMouseLeaveProp?.(e);
    setMag({ x: 0, y: 0 });
  }

  return (
    <Component
      className={cn(
        "group relative h-16 w-40 overflow-hidden bg-transparent p-[1px] text-xl transition-transform duration-200 will-change-transform hover:scale-[1.03]",
        containerClassName,
      )}
      style={{
        borderRadius: borderRadius,
        transform: `translate3d(${mag.x}px,${mag.y}px,0)`,
      }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      {...restProps}
    >
      <div
        className="absolute inset-0"
        style={{ borderRadius: `calc(${borderRadius} * 0.96)` }}
      >
        <MovingBorder duration={duration} rx="30%" ry="30%">
          <div
            className={cn(
              "h-20 w-20 bg-[radial-gradient(#0ea5e9_40%,transparent_60%)] opacity-[0.8]",
              borderClassName,
            )}
          />
        </MovingBorder>
      </div>

      <div
        className={cn(
          "relative flex h-full w-full items-center justify-center border border-slate-200/90 bg-white text-sm text-slate-900 antialiased shadow-sm backdrop-blur-xl transition-shadow duration-300 group-hover:border-cyan-500/45 group-hover:shadow-[0_0_28px_rgba(34,211,238,0.2)]",
          className,
        )}
        style={{
          borderRadius: `calc(${borderRadius} * 0.96)`,
        }}
      >
        {children}
      </div>
    </Component>
  );
}

export const MovingBorder = ({
  children,
  duration = 3000,
  rx,
  ry,
  ...otherProps
}: {
  children: React.ReactNode;
  duration?: number;
  rx?: string;
  ry?: string;
  [key: string]: any;
}) => {
  const pathRef = useRef<SVGRectElement | null>(null);
  const progress = useMotionValue<number>(0);

  useAnimationFrame((time) => {
    const length = pathRef.current?.getTotalLength();
    if (length) {
      const pxPerMillisecond = length / duration;
      progress.set((time * pxPerMillisecond) % length);
    }
  });

  const x = useTransform(
    progress,
    (val) => pathRef.current?.getPointAtLength(val).x,
  );
  const y = useTransform(
    progress,
    (val) => pathRef.current?.getPointAtLength(val).y,
  );

  const transform = useMotionTemplate`translateX(${x}px) translateY(${y}px) translateX(-50%) translateY(-50%)`;

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="absolute h-full w-full"
        width="100%"
        height="100%"
        {...otherProps}
      >
        <rect
          fill="none"
          width="100%"
          height="100%"
          rx={rx}
          ry={ry}
          ref={pathRef}
        />
      </svg>
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          display: "inline-block",
          transform,
        }}
      >
        {children}
      </motion.div>
    </>
  );
};
