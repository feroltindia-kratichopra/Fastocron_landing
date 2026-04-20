import type { Metadata } from "next";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import IntegrationsPage from "@/app/Integrations/IntegrationsPage";

export const metadata: Metadata = {
  title: "Integrations | Fastocron",
  description:
    "Connect Tally, databases, Shopify, CRMs, ads, spreadsheets, and custom APIs — one secure analytics workspace with live sync and enterprise controls.",
};

export default function IntegrationsRoutePage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <IntegrationsPage />
      <Footer />
    </div>
  );
}
