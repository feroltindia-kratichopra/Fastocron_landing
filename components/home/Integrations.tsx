"use client";

import { motion } from "motion/react";
import { useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/moving-boder";

const dataSources = [
  {
    name: "MySQL",
    description: "Reliable relational storage for transactional workloads.",
    icon: (
      <Image
        src="/logos/mysql-logo.png"
        alt="MySQL"
        width={60}
        height={60}
      />
    ),
  },
  {
    name: "PostgreSQL",
    description: "Advanced SQL database for analytics and complex queries.",
    icon: (
      <Image
        src="/logos/postgresql.png"
        alt="PostgreSQL"
        width={60}
        height={60}
      />
    ),
  },
  {
    name: "Microsoft SQL Server",
    description: "Enterprise-grade data platform for business applications.",
    icon: (
      <Image
        src="/logos/microsoft-sql.png"
        alt="Microsoft SQL Server"
        width={60}
        height={60}
      />
    ),
  },
  {
    name: "MariaDB",
    description: "Open-source relational database for modern applications.",
    icon: (
      <Image
        src="/logos/mariadb-logo.png"
        alt="MariaDB"
        width={60}
        height={60}
      />
    ),
  },
  {
    name: "SQLite",
    description: "Lightweight relational database for local applications.",
    icon: (
      <Image
        src="/logos/sqlite.png"
        alt="SQLite"
        width={60}
        height={60}
      />
    ),
  },
  {
    name: "Oracle",
    description: "Robust relational database for enterprise applications.",
    icon: (
      <Image
        src="/logos/oracle-logo.png"
        alt="Oracle"
        width={60}
        height={60}
      />
    ),
  },
];

const logos = [
  "/logos/mysql-logo.png",
  "/logos/postgresql.png",
  "/logos/mariadb-logo.png",
  "/logos/microsoft-sql.png",
  "/logos/sqlite.png",
  "/logos/oracle-logo.png",
];

function ScrollingLogoRail({
  reverse = false,
}: {
  reverse?: boolean;
}) {
  const measureRef = useRef<HTMLDivElement>(null);
  const [loopPx, setLoopPx] = useState(0);

  useLayoutEffect(() => {
    const el = measureRef.current;
    if (!el) return;

    const measure = () => {
      const h = el.scrollHeight;
      if (h > 0) setLoopPx(h / 2);
    };

    measure();

    const ro = new ResizeObserver(measure);
    ro.observe(el);

    return () => ro.disconnect();
  }, []);

  const duration = loopPx > 0 ? Math.max(10, loopPx / 24) : 14;

  return (
    <div className="relative h-[20rem] w-20 overflow-hidden">
      <motion.div
        className="flex flex-col items-center gap-3 py-3"
        animate={
          loopPx > 0
            ? reverse
              ? { y: [-loopPx, 0] }
              : { y: [0, -loopPx] }
            : {}
        }
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <div ref={measureRef} className="flex flex-col items-center gap-6">
          {[...logos, ...logos].map((logo, i) => (
            <div
              key={i}
              className="flex h-14 w-14 items-center justify-center rounded-lg border border-gray-200 bg-white p-2"
            >
              <Image
                src={logo}
                alt="logo"
                width={42}
                height={42}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default function Integrations() {
  return (
    <section
      id="integrations"
      className="mx-auto mt-20 mb-20 w-full max-w-6xl px-4 sm:px-6"
    >
      {/* Heading */}
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
          Integrations
        </p>

        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
          Connect data sources you already use
        </h2>
      </div>

      {/* Layout */}
      <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-[auto_1fr_auto] lg:items-center">
        {/* Left Rail Desktop Only */}
        <div className="hidden lg:block">
          <ScrollingLogoRail />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
          {dataSources.map((source) => (
            <article
              key={source.name}
              className="w-full rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-transform hover:-translate-y-0.5 hover:shadow-md min-h-[200px]"
            >
              <div className="flex items-start gap-4">
                <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl border border-gray-200 bg-white">
                  {source.icon}
                </span>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {source.name}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-gray-600 sm:text-base">
                    {source.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Right Rail Desktop Only */}
        <div className="hidden lg:block">
          <ScrollingLogoRail reverse />
        </div>
      </div>

      {/* CTA */}
      <div className="mt-8 flex justify-center">
        <Link href="/Integrations">
          <Button
            borderRadius="1.75rem"
            className="border border-cyan-500/30 bg-white/10 text-gray-900 backdrop-blur"
          >
            View All
          </Button>
        </Link>
      </div>
    </section>
  );
}