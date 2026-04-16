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
      className="group rounded-xl  border-12 border-gray-200 bg-gradient-to-br from-gray-50 to-white p-7 transition-all duration-300 hover:-translate-y-1  hover:shadow-xl"
    >
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-400 to-cyan-600 shadow-lg shadow-blue-600/30 transition-shadow group-hover:shadow-blue-600/50">
        <feature.icon className="h-5 w-5 text-white" />
      </div>
      <div className="mb-3 flex items-start justify-between">
        <h3 className="text-lg font-bold text-gray-900">{feature.title}</h3>
      </div>
      <p className="text-md leading-relaxed text-gray-800">{feature.description}</p>
    </div>
  );

  return (
    <section id="features" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-blue-600 text-sm font-semibold uppercase tracking-widest">Platform Features</span>
          <h2 className="text-5xl font-bold text-gray-900 mt-3 mb-4">
            Everything your team needs to win with data
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
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
