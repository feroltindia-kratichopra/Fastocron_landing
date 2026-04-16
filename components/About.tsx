"use client";
import { TextGenerateEffect } from "./ui/text-generate-effect";

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
    <section id="about" className="bg-gray py-24">
      <div className="max-w-7xl mx-auto px-6">
      <h2 className="text-center text-5xl font-bold text-gray-900 mt-3 mb-4">
            About Fastocron
          </h2>
        <TextGenerateEffect words={words} className="text-gray-600 text-lg max-w-2xl mx-auto"/>
        
      </div>
    </section>
  );
}
