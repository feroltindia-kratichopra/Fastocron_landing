"use client";

import UseCasesHero from "@/components/usecases/UseCasesHero";
import UseCasesIndustryTabs from "@/components/usecases/UseCasesIndustryTabs";
import UseCasesMainCards from "@/components/usecases/UseCasesMainCards";
import UseCasesWorkflow from "@/components/usecases/UseCasesWorkflow";
import UseCasesBeforeAfter from "@/components/usecases/UseCasesBeforeAfter";
import UseCasesROIMetrics from "@/components/usecases/UseCasesROIMetrics";
import UseCasesPersonaCarousel from "@/components/usecases/UseCasesPersonaCarousel";

import UseCasesFinalCta from "@/components/usecases/UseCasesFinalCta";
import StatsSection from "@/components/home/stats-section";
import BeforeAfterSection from "@/components/home/before-after-section";

export default function UseCasesPage() {
  return (
    <div className="min-w-0 bg-slate-50 text-slate-900">
      <UseCasesHero />
      <UseCasesIndustryTabs />
      <UseCasesMainCards />
      <UseCasesWorkflow />
      <StatsSection/>
      <BeforeAfterSection/>
      {/* <UseCasesBeforeAfter /> */}
      {/* <UseCasesROIMetrics /> */}
      
      {/* <UseCasesPersonaCarousel />  */}
      {/* <UseCasesIndustrySearch /> */}
      <UseCasesFinalCta />
    </div>
  );
}
