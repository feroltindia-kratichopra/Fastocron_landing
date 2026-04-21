"use client";

import { ContainerScroll } from "../ui/container-scroll-animation";


export default function LiveDemoSection() {
  return (
    <section
      id="live-demo"
      className="relative overflow-hidden bg-gradient-to-b from-sky-50 via-slate-50 to-white text-slate-900"
    >
      
      <div className="pointer-events-none absolute inset-0 " />
   
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
    
    </section>
  );
}
