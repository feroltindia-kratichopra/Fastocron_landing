// const rows = [
//   { before: "Manual Excel", after: "Live dashboards" },
//   { before: "Delayed reports", after: "Instant answers" },
//   { before: "Data silos", after: "Unified data" },
// ];

// export default function BeforeAfterSection() {
//   return (
//     <section className="relative overflow-hidden bg-slate-50 py-24">
//       <div className="pointer-events-none absolute right-10 top-20 h-72 w-72 rounded-full bg-gradient-to-br from-violet-500/15 to-cyan-400/15 blur-3xl" />
//       <div className="relative z-10 mx-auto max-w-5xl px-6">
//         <h2 className="text-center text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
//           From Spreadsheet Chaos to AI Clarity
//         </h2>
//         <p className="mx-auto mt-4 max-w-2xl text-center text-slate-600">
//           Same data. A calmer, faster way to run the business.
//         </p>

//         <div className="mt-14 grid overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl md:grid-cols-2">
//           <div className="border-b border-slate-200 bg-gradient-to-br from-slate-100 to-slate-50 p-8 md:border-b-0 md:border-r md:border-slate-200">
//             <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
//               Before
//             </p>
//             <ul className="mt-8 space-y-5">
//               {rows.map((r) => (
//                 <li
//                   key={r.before}
//                   className="rounded-xl border border-slate-200 bg-white/80 px-4 py-3 text-lg font-medium text-slate-800"
//                 >
//                   {r.before}
//                 </li>
//               ))}
//             </ul>
//           </div>
//           <div className="relative bg-gradient-to-br from-cyan-500/10 via-white to-indigo-500/10 p-8">
//             <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(34,211,238,0.12),transparent_50%)]" />
//             <p className="relative text-xs font-bold uppercase tracking-[0.2em] text-cyan-700">
//               After Fastocron
//             </p>
//             <ul className="relative mt-8 space-y-5">
//               {rows.map((r) => (
//                 <li
//                   key={r.after}
//                   className="rounded-xl border border-cyan-500/30 bg-white px-4 py-3 text-lg font-semibold text-slate-900 shadow-sm"
//                 >
//                   {r.after}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { motion } from "framer-motion";
import {
  FileSpreadsheet,
  Clock3,
  Database,
  LayoutDashboard,
  Zap,
  Link2,
  Sparkles,
  ArrowRight,
  AlertCircle,
  CheckCircle2,
} from "lucide-react";

const rows = [
  {
    before: "Manual Excel",
    after: "Live Dashboards",
    leftIcon: FileSpreadsheet,
    rightIcon: LayoutDashboard,
  },
  {
    before: "Delayed Reports",
    after: "Instant Answers",
    leftIcon: Clock3,
    rightIcon: Zap,
  },
  {
    before: "Data Silos",
    after: "Unified Data",
    leftIcon: Database,
    rightIcon: Link2,
  },
];

export default function BeforeAfterSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white mt-30">
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-10 top-20 h-72 w-72 rounded-full bg-cyan-200/30 blur-3xl" />
      <div className="pointer-events-none absolute right-10 bottom-20 h-72 w-72 rounded-full bg-violet-200/30 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(59,130,246,0.08),transparent_40%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-700">
            Transformation
          </p>

          <h2 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
            From Spreadsheet Chaos to AI Clarity
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Replace manual reporting workflows with instant answers, unified
            data, and live dashboards.
          </p>
        </motion.div>

        {/* Main Comparison Scene */}
        <div className="mt-16 grid gap-8 lg:grid-cols-[1fr_160px_1fr] items-center">
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-100 to-slate-50 p-7 shadow-sm"
          >
            <div className="flex items-center justify-between">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
                Before
              </p>

              <span className="rounded-full bg-rose-100 px-3 py-1 text-xs font-semibold text-rose-600">
                Manual Workflow
              </span>
            </div>

            {/* Messy Files */}
            <div className="mt-6 space-y-3">
              <motion.div
                whileHover={{ rotate: -1, scale: 1.02 }}
                className="rounded-2xl border border-slate-200 bg-white px-4 py-4 shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <FileSpreadsheet className="h-5 w-5 text-emerald-600" />
                  <span className="font-medium text-slate-700">
                    sales-final-v3.xlsx
                  </span>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ rotate: 1, scale: 1.02 }}
                className="rounded-2xl border border-slate-200 bg-white px-4 py-4 shadow-sm rotate-1"
              >
                <div className="flex items-center gap-3">
                  <FileSpreadsheet className="h-5 w-5 text-emerald-600" />
                  <span className="font-medium text-slate-700">
                    monthly-report-latest.xlsx
                  </span>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ rotate: -1, scale: 1.02 }}
                className="rounded-2xl border border-rose-200 bg-rose-50 px-4 py-4 shadow-sm -rotate-1"
              >
                <div className="flex items-center gap-3">
                  <AlertCircle className="h-5 w-5 text-rose-500" />
                  <span className="font-medium text-rose-700">
                    Pending Data Update
                  </span>
                </div>
              </motion.div>
            </div>

            {/* Sticky Notes */}
            <div className="mt-5 flex flex-wrap gap-3">
              <div className="rounded-xl bg-yellow-100 px-3 py-2 text-xs font-medium text-slate-700 shadow-sm rotate-[-2deg]">
                Fix totals
              </div>
              <div className="rounded-xl bg-blue-100 px-3 py-2 text-xs font-medium text-slate-700 shadow-sm rotate-[2deg]">
                CFO Review
              </div>
            </div>
          </motion.div>

          {/* CENTER */}
          <div className="relative hidden lg:flex flex-col items-center justify-center">
            {/* Line */}
            <div className="absolute h-[280px] w-px bg-gradient-to-b from-transparent via-cyan-300 to-transparent" />

            {/* AI Orb */}
            <motion.div
              animate={{
                scale: [1, 1.08, 1],
                boxShadow: [
                  "0 0 0px rgba(6,182,212,0.2)",
                  "0 0 30px rgba(6,182,212,0.35)",
                  "0 0 0px rgba(6,182,212,0.2)",
                ],
              }}
              transition={{
                duration: 2.4,
                repeat: Infinity,
              }}
              className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-white border border-cyan-200 shadow-xl"
            >
              <Sparkles className="h-7 w-7 text-cyan-600" />
            </motion.div>

            <p className="mt-4 text-center text-xs font-bold uppercase tracking-[0.2em] text-cyan-700">
              Fastocron
            </p>

            {/* Flow dots */}
            <motion.div
              animate={{ y: [-40, 40, -40] }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute h-2 w-2 rounded-full bg-cyan-500"
            />
          </div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative rounded-3xl border border-cyan-200 bg-white p-7 shadow-xl"
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-500/10 via-transparent to-violet-500/10" />

            <div className="relative">
              <div className="flex items-center justify-between">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-700">
                  After Fastocron
                </p>

                <span className="rounded-full bg-cyan-50 px-3 py-1 text-xs font-semibold text-cyan-700">
                  Live Sync
                </span>
              </div>

              {/* KPI Cards */}
              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm text-slate-500">Revenue</p>
                  <p className="mt-1 text-2xl font-bold text-slate-900">
                    +18%
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm text-slate-500">Profit</p>
                  <p className="mt-1 text-2xl font-bold text-slate-900">
                    +11%
                  </p>
                </div>
              </div>

              {/* Chart */}
              <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="flex h-28 items-end gap-2">
                  {[35, 55, 42, 70, 58, 88, 76].map((h, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${h}%` }}
                      viewport={{ once: true }}
                      transition={{
                        delay: i * 0.08,
                        duration: 0.5,
                      }}
                      className="w-full rounded-t-xl bg-gradient-to-t from-cyan-500 to-blue-500"
                    />
                  ))}
                </div>
              </div>

              {/* AI Insight */}
              <div className="mt-4 rounded-2xl border border-cyan-200 bg-cyan-50 p-4">
                <p className="text-sm font-semibold text-cyan-700">
                  AI Insight
                </p>
                <p className="mt-1 text-sm text-slate-700">
                  Sales dipped in West zone due to inventory shortage.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Transformation Rows */}
        <div className="mt-16 space-y-4">
          {rows.map((row, i) => {
            const LeftIcon = row.leftIcon;
            const RightIcon = row.rightIcon;

            return (
              <motion.div
                key={row.before}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: i * 0.12,
                  duration: 0.55,
                }}
                className="grid items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:grid-cols-[1fr_auto_1fr]"
              >
                {/* Before */}
                <div className="flex items-center gap-3 rounded-xl bg-slate-50 px-4 py-3">
                  <div className="rounded-xl bg-slate-200 p-2">
                    <LeftIcon className="h-5 w-5 text-slate-600" />
                  </div>
                  <span className="font-medium text-slate-700">
                    {row.before}
                  </span>
                </div>

                {/* Arrow */}
                <div className="flex justify-center">
                  <motion.div
                    animate={{ x: [0, 8, 0] }}
                    transition={{
                      repeat: Infinity,
                      duration: 1.5,
                    }}
                    className="rounded-full bg-cyan-50 p-2"
                  >
                    <ArrowRight className="h-5 w-5 text-cyan-600" />
                  </motion.div>
                </div>

                {/* After */}
                <div className="flex items-center gap-3 rounded-xl border border-cyan-200 bg-cyan-50 px-4 py-3">
                  <div className="rounded-xl bg-white p-2 shadow-sm">
                    <RightIcon className="h-5 w-5 text-cyan-700" />
                  </div>
                  <span className="font-semibold text-slate-900">
                    {row.after}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="mt-14 flex justify-center"
        >
            
        </motion.div>
      </div>
    </section>
  );
}