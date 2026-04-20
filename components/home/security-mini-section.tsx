import { Database, Shield, Sparkles, ArrowRight } from "lucide-react";

const bullets = [
  "Your data stays yours.",
  "Query outputs only to AI",
  "Role access",
  "Encryption in transit & at rest",
];

export default function SecurityMiniSection() {
  return (
    <section
      id="security"
      className="relative overflow-hidden bg-[#050816] py-24 text-white"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(99,102,241,0.2),transparent)]" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Security
          </span>
          <h2 className="mt-3 text-4xl font-bold text-white/90 md:text-5xl">
            Privacy is the product
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-300">
            Fastocron is built so sensitive rows never become prompt fodder—only
            structured results cross the boundary.
          </p>
        </div>

        <div className="mx-auto mt-16 flex max-w-3xl flex-wrap items-center justify-center gap-4 md:gap-8">
          <div className="flex h-24 w-24 flex-col items-center justify-center rounded-2xl border border-white/10 bg-[#0B1120] shadow-[0_0_40px_-10px_rgba(34,211,238,0.35)]">
            <Database className="h-10 w-10 text-cyan-400" aria-hidden />
            <span className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-slate-400">
              Data
            </span>
          </div>
          <ArrowRight className="hidden h-8 w-8 text-slate-500 md:block" aria-hidden />
          <div className="flex h-28 w-28 flex-col items-center justify-center rounded-2xl border border-cyan-500/40 bg-gradient-to-br from-cyan-500/20 to-indigo-600/30 shadow-[0_0_50px_-8px_rgba(34,211,238,0.5)]">
            <Shield className="h-11 w-11 text-white" aria-hidden />
            <span className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-cyan-200">
              Shield
            </span>
          </div>
          <ArrowRight className="hidden h-8 w-8 text-slate-500 md:block" aria-hidden />
          <div className="flex h-24 w-24 flex-col items-center justify-center rounded-2xl border border-white/10 bg-[#0B1120] shadow-[0_0_40px_-10px_rgba(167,139,250,0.35)]">
            <Sparkles className="h-10 w-10 text-violet-300" aria-hidden />
            <span className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-slate-400">
              AI
            </span>
          </div>
        </div>

        <ul className="mx-auto mt-14 grid max-w-3xl gap-4 sm:grid-cols-2">
          {bullets.map((line) => (
            <li
              key={line}
              className="flex items-center gap-3 rounded-xl border border-white/10 bg-[#0B1120]/80 px-4 py-3 text-slate-200 backdrop-blur"
            >
              <span className="h-2 w-2 shrink-0 rounded-full bg-gradient-to-r from-cyan-400 to-violet-400" />
              {line}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
