"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import {
  Wallet,
  Database,
  FileSpreadsheet,
  Server,
  Layers3,
  HardDrive,
} from "lucide-react";

/* ------------------------------ TALLY ------------------------------ */
function TallyCard() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });

  return (
    <article
      ref={ref}
      className="flex flex-col rounded-2xl border border-amber-200 bg-white p-6 shadow-md"
    >
      <div className="flex items-center gap-2 text-amber-800">
        <Wallet className="h-5 w-5" />
        <span className="text-xs font-bold uppercase tracking-wider">
          Tally ERP
        </span>
      </div>

      <p className="mt-3 text-sm text-slate-600">
        Sync ledgers, invoices, GST, collections, and branch-wise financials.
      </p>

      <div className="mt-4 grid grid-cols-2 gap-2 rounded-xl border border-slate-200 bg-slate-50 p-3">
        {["Sales", "GST", "Receivables", "P&L"].map((item, i) => (
          <motion.div
            key={item}
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.08 }}
            className="rounded-lg border border-white bg-white px-2 py-2 text-[10px] font-semibold text-slate-700"
          >
            {item}
          </motion.div>
        ))}
      </div>
    </article>
  );
}

/* ------------------------------ POSTGRES ------------------------------ */
function PostgresCard() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });

  const lines = [
    "SELECT region,",
    "SUM(revenue)",
    "FROM orders",
    "GROUP BY 1;",
  ];

  return (
    <article
      ref={ref}
      className="flex flex-col rounded-2xl border border-sky-200 bg-white p-6 shadow-md"
    >
      <div className="flex items-center gap-2 text-sky-800">
        <Database className="h-5 w-5" />
        <span className="text-xs font-bold uppercase tracking-wider">
          PostgreSQL
        </span>
      </div>

      <p className="mt-3 text-sm text-slate-600">
        Connect operational databases securely and analyze production data live.
      </p>

      <div className="mt-4 rounded-xl border border-slate-200 bg-slate-100 p-3 font-mono text-[10px] text-slate-800">
        {lines.map((line, i) => (
          <motion.div
            key={line}
            initial={{ opacity: 0, x: -8 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: i * 0.08 }}
          >
            {line}
          </motion.div>
        ))}
      </div>
    </article>
  );
}

/* ------------------------------ SQLITE ------------------------------ */
function SqliteCard() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });

  return (
    <article
      ref={ref}
      className="flex flex-col rounded-2xl border border-slate-300 bg-white p-6 shadow-md"
    >
      <div className="flex items-center gap-2 text-slate-800">
        <HardDrive className="h-5 w-5" />
        <span className="text-xs font-bold uppercase tracking-wider">
          SQLite
        </span>
      </div>

      <p className="mt-3 text-sm text-slate-600">
        Perfect for embedded apps, local datasets, prototypes, and lightweight
        analytics.
      </p>

      <div className="mt-4 flex h-20 items-end gap-1 rounded-xl bg-slate-50 p-3">
        {[30, 48, 42, 65, 52].map((h, i) => (
          <motion.div
            key={i}
            initial={{ height: 0 }}
            animate={inView ? { height: `${h}%` } : {}}
            transition={{ delay: i * 0.06 }}
            className="flex-1 rounded-t bg-slate-700"
          />
        ))}
      </div>
    </article>
  );
}

/* ------------------------------ ORACLE ------------------------------ */
function OracleCard() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });

  return (
    <article
      ref={ref}
      className="flex flex-col rounded-2xl border border-red-200 bg-white p-6 shadow-md"
    >
      <div className="flex items-center gap-2 text-red-700">
        <Layers3 className="h-5 w-5" />
        <span className="text-xs font-bold uppercase tracking-wider">
          Oracle DB
        </span>
      </div>

      <p className="mt-3 text-sm text-slate-600">
        Enterprise-grade reporting across finance, operations, and historical
        records.
      </p>

      <div className="mt-4 h-24 rounded-xl border border-red-100 bg-red-50 p-3">
        <svg viewBox="0 0 200 80" className="h-full w-full">
          <motion.path
            d="M0 60 Q40 20 80 35 T200 18"
            fill="none"
            stroke="#ef4444"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={inView ? { pathLength: 1 } : {}}
            transition={{ duration: 1 }}
          />
        </svg>
      </div>
    </article>
  );
}

/* ------------------------------ MYSQL ------------------------------ */
function MysqlCard() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });

  return (
    <article
      ref={ref}
      className="flex flex-col rounded-2xl border border-blue-200 bg-white p-6 shadow-md"
    >
      <div className="flex items-center gap-2 text-blue-700">
        <Database className="h-5 w-5" />
        <span className="text-xs font-bold uppercase tracking-wider">
          MySQL
        </span>
      </div>

      <p className="mt-3 text-sm text-slate-600">
        Analyze websites, ERPs, product systems, and transactional workloads.
      </p>

      <div className="mt-4 flex h-20 items-end gap-1">
        {[38, 70, 50, 74, 56].map((h, i) => (
          <motion.div
            key={i}
            initial={{ height: 0 }}
            animate={inView ? { height: `${h}%` } : {}}
            transition={{ delay: i * 0.05 }}
            className="flex-1 rounded-t bg-gradient-to-t from-blue-500 to-sky-400"
          />
        ))}
      </div>
    </article>
  );
}

/* ------------------------------ MARIADB ------------------------------ */
function MariaCard() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });

  return (
    <article
      ref={ref}
      className="flex flex-col rounded-2xl border border-emerald-200 bg-white p-6 shadow-md"
    >
      <div className="flex items-center gap-2 text-emerald-700">
        <Server className="h-5 w-5" />
        <span className="text-xs font-bold uppercase tracking-wider">
          MariaDB
        </span>
      </div>

      <p className="mt-3 text-sm text-slate-600">
        Open-source relational analytics for apps, SaaS products, and commerce.
      </p>

      <div className="mt-4 space-y-2">
        {["Orders", "Users", "Revenue"].map((row, i) => (
          <motion.div
            key={row}
            initial={{ opacity: 0, x: -8 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: i * 0.08 }}
            className="rounded-lg bg-emerald-50 px-3 py-2 text-xs font-semibold text-emerald-800"
          >
            {row}
          </motion.div>
        ))}
      </div>
    </article>
  );
}

/* ------------------------------ EXCEL ------------------------------ */
function ExcelCard() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });

  return (
    <article
      ref={ref}
      className="flex flex-col rounded-2xl border border-emerald-200 bg-white p-6 shadow-md"
    >
      <div className="flex items-center gap-2 text-emerald-800">
        <FileSpreadsheet className="h-5 w-5" />
        <span className="text-xs font-bold uppercase tracking-wider">
          Excel / CSV
        </span>
      </div>

      <p className="mt-3 text-sm text-slate-600">
        Upload spreadsheets instantly and start asking questions immediately.
      </p>

      <motion.div
        initial={{ scale: 0.96, opacity: 0.6 }}
        animate={inView ? { scale: 1, opacity: 1 } : {}}
        className="mt-4 flex h-24 items-center justify-center rounded-xl border-2 border-dashed border-emerald-200 bg-emerald-50 text-xs font-semibold text-emerald-700"
      >
        Drop file here
      </motion.div>
    </article>
  );
}

/* ------------------------------ SQL SERVER ------------------------------ */
function SqlServerCard() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });

  return (
    <article
      ref={ref}
      className="flex flex-col rounded-2xl border border-indigo-200 bg-white p-6 shadow-md"
    >
      <div className="flex items-center gap-2 text-indigo-700">
        <Server className="h-5 w-5" />
        <span className="text-xs font-bold uppercase tracking-wider">
          SQL Server
        </span>
      </div>

      <p className="mt-3 text-sm text-slate-600">
        Enterprise BI workloads, warehouse reporting, and Microsoft ecosystem
        analytics.
      </p>

      <div className="mt-4 flex h-20 items-end gap-1">
        {[25, 45, 60, 78, 70].map((h, i) => (
          <motion.div
            key={i}
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ delay: i * 0.07 }}
            className="flex-1 rounded-t bg-gradient-to-t from-indigo-500 to-sky-400"
            style={{ height: `${h}%`  , originY: 1 }}
          />
        ))}
      </div>
    </article>
  );
}

/* ------------------------------ MAIN ------------------------------ */
export default function IntegrationsConnectorCards() {
  return (
    <section className="border-t border-slate-200 bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center mt-3 text-4xl font-bold text-slate-900 md:text-5xl">
          Popular Connectors
        </h2>

        <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-slate-600">
          Securely connect your existing tools and turn raw data into live
          dashboards instantly.
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <TallyCard />
          <PostgresCard />
          <SqliteCard />
          <OracleCard />
          <MysqlCard />
          <MariaCard />
        
        </div>
      </div>
    </section>
  );
}