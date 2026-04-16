import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import Features from "../components/Features";
import About from "../components/About";
import HowItWorks from "../components/HowItWorks";
import Integrations from "../components/Integrations";
import './globals.css'
import { Applications } from "../components/Applications";
import Footer from "../components/Footer";

import GetStarted from "../components/GetStarted";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 px-6 py-8 font-sans text-gray-900">
      <Navbar />
      <HeroSection />
      <Features />
      <About />
      <HowItWorks />
      <Integrations />
      <Applications />
      <GetStarted />
      <Footer />
    </div>
  );
}
