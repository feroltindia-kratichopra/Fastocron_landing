"use client";

import Image from "next/image";

const industries = [
  {
    title: "Finance Businesses",
    tools: [
      "/logos/Tally-Logo.png",
      "/logos/excel.png",
      "/logos/microsoft-sql.png",
    ],
    accent: "from-amber-500/20 to-orange-500/10",
  },
  {
    title: "Retail & Trading",
    tools: [
      "/logos/mysql-logo.png",
      "/logos/excel.png",
      "/logos/mariadb-logo.png",
    ],
    accent: "from-emerald-500/20 to-sky-500/10",
  },
  {
    title: "SaaS & Tech",
    tools: [
      "/logos/postgresql.png",
      "/logos/mysql-logo.png",
      "/logos/sqlite.png",
    ],
    accent: "from-sky-500/20 to-indigo-500/10",
  },
  {
    title: "Manufacturing",
    tools: [
      "/logos/oracle-logo.png",
      "/logos/microsoft-sql.png",
      "/logos/excel.png",
    ],
    accent: "from-slate-500/15 to-slate-400/5",
  },
  {
    title: "Enterprises",
    tools: [
      "/logos/oracle-logo.png",
      "/logos/postgresql.png",
      "/logos/microsoft-sql.png",
    ],
    accent: "from-violet-500/20 to-fuchsia-500/10",
  },
  {
    title: "SMBs & Local Businesses",
    tools: [
      "/logos/Tally-Logo.png",
      "/logos/mysql-logo.png",
      "/logos/excel.png",
    ],
    accent: "from-cyan-500/20 to-blue-500/10",
  },
];

export default function IntegrationsIndustryStacks() {
  return (
    <section className="border-t border-slate-200 bg-slate-50 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-5xl font-bold text-gray-900 mt-3 mb-4">
          Industry-specific stacks
        </h2>

        <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-slate-600">
          Common combinations teams connect first — then they extend with everything else.
        </p>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {industries.map((ind) => (
            <article
              key={ind.title}
              className={`rounded-2xl border border-slate-200 bg-gradient-to-br ${ind.accent} p-6 shadow-sm`}
            >
              <h3 className="text-lg font-bold text-slate-900">
                {ind.title}
              </h3>

              <div className="mt-5 flex flex-wrap gap-3">
                {ind.tools.map((logo, i) => (
                  <div
                    key={i}
                    className="flex h-14 w-14 items-center justify-center rounded-xl border border-white/70 bg-white/90 p-2 shadow-sm"
                  >
                    <Image
                      src={logo}
                      alt="tool logo"
                      width={36}
                      height={36}
                      className="h-auto w-auto object-contain"
                    />
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}