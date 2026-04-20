"use client";

import { TextGenerateEffect } from "../ui/text-generate-effect";

const words = `Fastocron is a privacy-first, AI-native analytics platform that lets you query 
your data in plain language, auto-generate pivots and charts, and build live 
dashboards—all while keeping your data secure. It’s designed for SMBs that use 
ERPs like Tally, unifying multiple data sources (ERP, CRM, databases) into one 
live analytics workspace. Fastocron’s unique architecture sends only query 
results (not raw data) to its AI engine, ensuring compliance. In short: “AI 
intelligence with zero data leakage” for any business question. 
`;

export default function About() {
  return (
    <section id="about" className="bg-gray pb-24">
      <div className="max-w-7xl mx-auto px-6">
      <div className=" text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-600">
            About
          </span>
          <h2 className="mt-3 text-4xl font-bold text-slate-900 md:text-5xl">
            Fastocron
          </h2>
         
        </div>
        <TextGenerateEffect words={words} className="text-gray-600 text-lg max-w-2xl mx-auto"/>
        
      </div>
    </section>
  );
}
