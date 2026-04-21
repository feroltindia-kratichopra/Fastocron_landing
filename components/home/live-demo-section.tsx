"use client";

import { ContainerScroll } from "../ui/container-scroll-animation";
import { BlurOrbs } from "./section-divider";

export default function LiveDemoSection() {
  return (
    <section
      id="live-demo"
      className="relative overflow-hiddenbg-gradient-to-b from-white via-slate-50 to-sky-50/40 text-slate-900"
    >
      <BlurOrbs />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(248,250,252,0.95))]" />
   
      <div className="relative z-10 mx-auto mt-4 max-w-6xl">
      
          <ContainerScroll>
          <video
              className="h-full w-full rounded-2xl object-cover md:object-left-top"
              autoPlay
              loop
              muted
              playsInline
              draggable={false}
            >
              <source src="/MBInsights.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </ContainerScroll>
      
      </div>
      {/* <div
        className="pointer-events-none relative z-10 h-20 bg-gradient-to-b from-transparent via-slate-100/60 to-white"
        aria-hidden
      /> */}
    </section>
  );
}
