"use client";

import FeaturesHero from "@/components/features/FeaturesHero";
import FeatureCategoryTabs from "@/components/features/FeatureCategoryTabs";
import CoreFeaturesGrid from "@/components/features/CoreFeaturesGrid";
import PrivacyArchitectureSection from "@/components/features/PrivacyArchitectureSection";

import FeaturesUseCases from "@/components/features/FeaturesUseCases";
import VsCompetitorsTable from "@/components/features/VsCompetitorsTable";
import LiveDemoPreview from "@/components/features/LiveDemoPreview";
import FeaturesTestimonials from "@/components/features/FeaturesTestimonials";
import FeaturesFinalCta from "@/components/features/FeaturesFinalCta";
import HowItWorks from "../home/HowItWorks";
import ComparisonSection from "../home/comparison-section";

/**
 * Full features marketing page — composed sections (hero, tabs, grids, privacy, etc.).
 */
export default function FeatureComparisonPage() {
  return (
    <div className="min-w-0 bg-slate-100 text-slate-900">
      <FeaturesHero />
      <FeatureCategoryTabs />
      <CoreFeaturesGrid />
      <PrivacyArchitectureSection />
      <HowItWorks /><LiveDemoPreview />
      <FeaturesUseCases />
      
      <ComparisonSection />
      
      {/* <FeaturesTestimonials /> */}
      <FeaturesFinalCta />
    </div>
  );
}
