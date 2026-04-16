"use client";

import { motion } from "motion/react";
import { useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
const dataSources = [
  {
    name: "MySQL",
    description: "Reliable relational storage for transactional workloads.",
    accent: "bg-white",
    icon: <Image src="/logos/mysql-logo.png" alt="MySQL" width={60} height={60} />,
  },
  {
    name: "PostgreSQL",
    description: "Advanced SQL database for analytics and complex queries.",
    accent: "bg-white",
    icon: <Image src="/logos/postgresql.png" alt="PostgreSQL" width={60} height={60} />,
  },
  {
    name: "Microsoft SQL Server",
    description: "Enterprise-grade data platform for business applications.",
    accent: "bg-white",
    icon: <Image src="/logos/microsoft-sql.png" alt="Microsoft SQL Server" width={60} height={60} />,
  },
  {
    name: "MariaDB",
    description: "Open-source relational database for modern applications.",
    accent: "bg-white",
    icon: <Image src="/logos/mariadb-logo.png" alt="MariaDB" width={60} height={60} />,
  },
  {
    name: "SQLite",
    description: "Lightweight relational database for local applications.",
    accent: "bg-white",
    icon: <Image src="/logos/sqlite.png" alt="SQLite" width={60} height={60} />,
  },
  {
    name: "Oracle",
    description: "Robust relational database for enterprise applications.",
    accent: "bg-white",
    icon: <Image src="/logos/oracle-logo.png" alt="Oracle" width={60} height={60} />,
  },
];

const leftRailLogos = [
  "/logos/mysql-logo.png",
  "/logos/postgresql.png",
  "/logos/mariadb-logo.png",
  "/logos/microsoft-sql.png",
  "/logos/sqlite.png",
  "/logos/oracle-logo.png",
];

const rightRailLogos = [
  "/logos/mysql-logo.png",
  "/logos/postgresql.png",
  "/logos/mariadb-logo.png",
  "/logos/microsoft-sql.png",
  "/logos/sqlite.png",
  "/logos/oracle-logo.png",
];

function ScrollingLogoRail({
  logos,
  reverse = false,
}: {
  logos: string[];
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
  }, [logos]);

  const duration = loopPx > 0 ? Math.max(10, loopPx / 24) : 14;

  return (
    <div className="relative h-[20rem] w-20 overflow-hidden ">
      <motion.div
        className="flex w-full flex-col items-center gap-3 py-3 "
        animate={
          loopPx > 0
            ? reverse
              ? { y: [-loopPx, 0] }
              : { y: [0, -loopPx] }
            : { y: 0 }
        }
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
      >
        <div ref={measureRef} className="flex flex-col items-center gap-6">
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={`${logo}-${index}`}
              className="flex h-15 w-15 border border-grey-100 p-2 rounded-sm shrink-0 items-center justify-center text-[10px] font-bold text-gray-700 "
            >
              <Image
                src={logo}
                alt="logo"
                width={80}
                height={80}
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
    <section id="integrations" className="mx-auto mt-20 mb-20 w-full max-w-6xl px-2 sm:px-4">
      <div className="text-center">
        <p className="text-blue-600 text-sm font-semibold uppercase tracking-widest">
          Integrations
        </p>
        <h2 className="mt-3 text-5xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
          Connect every data source you already use
        </h2>
      </div>

      <div className="mt-10 grid grid-cols-[auto_1fr_auto] items-center gap-2 sm:gap-2">
        <div className="hidden md:block">
          <ScrollingLogoRail logos={leftRailLogos} />
        </div>

        <div className="grid gap-4 sm:grid-cols-2 bg-">
          {dataSources.map((source) => (
            <article
              key={source.name}
              className="h-[200px] w-[450px] rounded-2xl bg-white border border-gray-200 p-5 shadow-sm transition-transform hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span
                    className={`inline-flex h-20 w-20 items-center justify-center rounded-xl border border-gray-200 text-xs font-bold text-white`}
                  >
                    {source.icon}
                  </span>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {source.name}
                  </h3>
                </div>
                
              </div>
              <p className="mt-3 text-lg leading-relaxed text-gray-600">
                {source.description}
              </p>
            </article>
          ))}
        </div>

        <div className="hidden md:block">
          <ScrollingLogoRail logos={rightRailLogos} reverse />
        </div>
      </div>

    </section>
  );
}
