"use client";

import { useState } from "react";
import {
  Clock3,
  MessageSquareText,
  ShieldCheck,
  LayoutDashboard,
} from "lucide-react";

const cards = [
  {
    title: "Fast Setup",
    subtitle: "No long onboarding",
    backTitle: "Go Live in Minutes",
    backText: "Connect sources quickly and start asking questions instantly.",
    icon: Clock3,
    color: "from-sky-500 to-cyan-500",
  },
  {
    title: "Ask in English",
    subtitle: "No SQL required",
    backTitle: "Conversational Analytics",
    backText: "Type business questions naturally and get instant insights.",
    icon: MessageSquareText,
    color: "from-violet-500 to-indigo-500",
  },
  {
    title: "Privacy First",
    subtitle: "Built for trust",
    backTitle: "Secure by Design",
    backText: "Your raw data stays protected with controlled access.",
    icon: ShieldCheck,
    color: "from-emerald-500 to-teal-500",
  },
  {
    title: "Live Dashboards",
    subtitle: "Always updated",
    backTitle: "Decide Faster",
    backText: "Track KPIs in real time with dashboards and alerts.",
    icon: LayoutDashboard,
    color: "from-amber-500 to-orange-500",
  },
];

export default function WhyChooseFlipCards() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-700">
            Why Choose Fastocron
          </p>

          <h2 className="mt-3 text-4xl font-bold text-slate-900 md:text-5xl">
            Smarter analytics, simpler workflow
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Hover each card to discover how Fastocron helps modern teams move
            faster.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {cards.map((card, i) => (
            <FlipCard key={i} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FlipCard({ card }: any) {
  const Icon = card.icon;
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="group h-80 [perspective:1000px]"
      onClick={() => setFlipped(!flipped)}
    >
      <div
        className={`relative h-full w-full rounded-3xl transition-all duration-700 [transform-style:preserve-3d]
        ${
          flipped
            ? "[transform:rotateY(180deg)]"
            : "group-hover:[transform:rotateY(180deg)]"
        }`}
      >
        {/* Front */}
        <div className="absolute inset-0 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm [backface-visibility:hidden]">
          <div
            className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r ${card.color}`}
          >
            <Icon className="h-6 w-6 text-white" />
          </div>

          <h3 className="mt-6 text-2xl font-bold text-slate-900">
            {card.title}
          </h3>

          <p className="mt-3 text-slate-600">{card.subtitle}</p>

          <p className="mt-10 text-sm font-medium text-cyan-700">
            Reveal →
          </p>
        </div>

        {/* Back */}
        <div className="absolute inset-0 rounded-3xl border border-cyan-200 bg-gradient-to-br from-cyan-50 via-white to-blue-50 p-6 shadow-xl [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">
            Fastocron
          </p>

          <h3 className="mt-5 text-2xl font-bold text-slate-900">
            {card.backTitle}
          </h3>

          <p className="mt-4 leading-7 text-slate-700">
            {card.backText}
          </p>
        </div>
      </div>
    </div>
  );
}