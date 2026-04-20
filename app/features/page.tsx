import type { Metadata } from "next";
import FeatureComparisonPage from "@/components/features/FeatureComparisonPage";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
export const metadata: Metadata = {
  title: "Features | Fastocron",
  description:
    "Fastocron features: AI analytics, dashboards, integrations, security, automation — natural language queries, live dashboards, privacy-first architecture, and more.",
};

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-slate-100">
      <Navbar />
      <FeatureComparisonPage />
      <Footer />
    </div>
  );
}
