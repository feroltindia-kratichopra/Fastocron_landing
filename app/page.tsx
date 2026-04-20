import HeroSection from "../components/home/HeroSection";
import Navbar from "../components/common/Navbar";
import Features from "../components/home/FeaturesSection";
import About from "../components/home/About";
import HowItWorks from "../components/home/HowItWorks";
import "./globals.css";
import { Applications } from "../components/home/Applications";
import Footer from "../components/common/Footer";
import GetStarted from "../components/common/GetStarted";
import LiveDemoSection from "../components/home/live-demo-section";
import StatsSection from "../components/home/stats-section";
import BeforeAfterSection from "../components/home/before-after-section";
import TestimonialsSection from "../components/home/testimonials-section";
import SecurityMiniSection from "../components/home/security-mini-section";
import ComparisonSection from "../components/home/comparison-section";
import { SectionDivider } from "../components/home/section-divider";
import Integrations from "@/components/home/Integrations";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white font-sans text-slate-900 antialiased">
      <Navbar />
      <main>
        <HeroSection />
        
        <LiveDemoSection />
        {/* <div className="relative z-10 -mt-6 rounded-t-[2rem] bg-white shadow-[0_-12px_40px_-24px_rgba(0,0,0,0.35)]">
          <LogoStrip />
        </div> */}

        <SectionDivider variant="gradient-fade" />
        <About />
        <Features />
        <StatsSection />
        <BeforeAfterSection />
        
        <Integrations/>
        <HowItWorks />
        <SecurityMiniSection />
        <Applications />
        
        <ComparisonSection />
        
        {/* <TestimonialsSection /> */}
        <GetStarted />
      </main>
      <Footer />
    </div>
  );
}
