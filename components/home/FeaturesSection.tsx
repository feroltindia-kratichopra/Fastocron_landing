import { MessageSquare, Table, Sparkle, Database, FileChartPie, Users, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: MessageSquare,
    title: "Ask Your Data Anything",
    description:
      "Query your entire data ecosystem in plain English. Get instant answers, charts, and summaries without writing a single line of SQL.",
  },
  {
    icon: ShieldCheck,
    title: "Your Data Stays Safe. Always.",
    description:
      "Our unique data-isolation technology ensures your raw data never leaves your control. Only anonymized, aggregated results are processed by AI.",
  },
  {
    icon: Table,
    title: "On-the-Spot Pivot Tables",
    description:
      "Generate Excel-style pivot tables directly from your data with a single chat command. Supports aggregation, grouping, and filtering.",
  },
  {
    icon: Sparkle,
    title: "Smart Insights, Instantly",
    description:
      "Get automated insights, causal analysis, and trend predictions powered by advanced AI. Let the platform find what matters.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description:
      "Role-based access, shared workspaces, and annotation tools let your whole org stay aligned on the same data story.",
  },
  {
    icon: Database,
    title: "Connect All Your Data Sources",
    description:
      "Unify data from databases, CRMs, Tally, APIs, and more into a single, accessible view. No more data silos.",
  },
  {
    icon: FileChartPie,
    title: "Report Management System",
    description:
      "Supports creating, copying, grouping, listing, and assigning reports (including employee-specific report access).",
  },
];

export default function Features() {
  const leftFeatures = [features[0], features[1]];
  const middleFeatures = [features[2], features[3], features[4]];
  const rightFeatures = [features[5], features[6]];

  const renderFeatureCard = (feature: (typeof features)[number]) => (
    <div
      key={feature.title}
      className="group rounded-xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-7 shadow-sm transition-all duration-300 [transform-style:preserve-3d] hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/10 md:hover:[transform:perspective(1000px)_rotateX(2deg)_scale(1.03)]"
    >
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-indigo-600 shadow-lg shadow-cyan-600/25 transition-shadow group-hover:shadow-cyan-500/40">
        <feature.icon className="h-5 w-5 text-white" />
      </div>
      <div className="mb-3 flex items-start justify-between">
        <h3 className="text-lg font-bold text-slate-900">{feature.title}</h3>
      </div>
      <p className="text-md leading-relaxed text-slate-700">{feature.description}</p>
    </div>
  );

  return (
    <section id="features" className="relative overflow-hidden bg-white pb-24">
      <div className="pointer-events-none absolute -right-24 h-72 w-72 rounded-full bg-gradient-to-br from-cyan-400/15 to-indigo-500/15 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 bottom-10 h-64 w-64 rounded-full bg-violet-500/10 blur-3xl" />
      <div className="relative z-10 mx-auto max-w-7xl px-6 [perspective:1200px]">
        <div className="mb-16 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-600">
            Platform Features
          </span>
          <h2 className="mt-3 text-4xl font-bold text-slate-900 md:text-5xl">
            Everything your team needs to win with data
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            A complete intelligence layer for modern organizations — from ingestion to insight.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="grid content-center gap-6 lg:pt-16">
            {leftFeatures.map((feature) => renderFeatureCard(feature))}
          </div>

          <div className="grid gap-6">
            {middleFeatures.map((feature) => renderFeatureCard(feature))}
          </div>

          <div className="grid content-center gap-6 lg:pt-16">
            {rightFeatures.map((feature) => renderFeatureCard(feature))}
          </div>
        </div>
      </div>
    </section>
  );
}
