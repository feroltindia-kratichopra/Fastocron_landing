import type { Metadata } from "next";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import UseCasesPage from "@/app/useCases/UseCasesPage";

export const metadata: Metadata = {
  title: "Use cases | Fastocron",
  description:
    "Finance, sales, e-commerce, operations, founders, and agencies — how teams use Fastocron to ask smarter questions and ship faster decisions.",
};

export default function UseCasesRoutePage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <UseCasesPage />
      <Footer />
    </div>
  );
}
