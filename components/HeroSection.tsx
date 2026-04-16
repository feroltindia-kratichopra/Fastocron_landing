import Link from "next/link";
import { DottedGlowBackground } from "./ui/dotted-glow-background";
import { Button } from "./ui/moving-boder";
import { ContainerScroll } from "./ui/container-scroll-animation";

export default function HeroSection() {
  return (
    <main className="mt-10 mx-auto flex w-full max-w-6xl flex-col items-center justify-center py-28 text-center">
      <div className="inline-flex items-center gap-2 bg-blue-100 border border-blue-300 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" />
              <span className="text-blue-600 text-xs font-semibold tracking-wider uppercase">
                AI-Powered Data Intelligence
              </span>
            </div>
      <h1 className="max-w-4xl text-6xl font-semibold tracking-tight">
      Turn Your Raw Data into Actionable Insights—Without Compromising Privacy
      </h1>
      <p className="mt-6 max-w-xl text-lg text-gray-600">
      AI-powered analytics with zero data leakage. Connect any data source, ask questions in plain language, and get instant pivot tables, dashboards, and insights—without exposing your sensitive data.


      </p>
      <div className="flex  gap-4">
      <div className="mt-4">
                <Link href={"#"}>
                    <Button
                    borderRadius="1.75rem"
                    className="bg-black dark:bg-black text-white border-white dark:border-slate-800"
                    >
                    Get Started
                    </Button>
                </Link>
            </div>   <div className="mt-4">
                <Link href={"#"}>
                    <Button
                    borderRadius="1.75rem"
                    className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
                    >
                    Watch Demo
                    </Button>
                </Link>
            </div>  
            </div>
            <DottedGlowBackground
          className="pointer-events-none absolute inset-0 mask-radial-to-90% mask-radial-at-center opacity-15 dark:opacity-40"
          opacity={1}
          gap={10}
          radius={1.6}
          colorLightVar="--color-neutral-500"
          glowColorLightVar="--color-neutral-600"
          colorDarkVar="--color-neutral-500"
          glowColorDarkVar="--color-sky-800"
          backgroundOpacity={0}
          speedMin={0.3}
          speedMax={1.6}
          speedScale={1}
        />
      <ContainerScroll
        
      >
        <video
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          autoPlay
          loop
          height={720}
          width={1400}
 
          muted
          playsInline
          draggable={false}
        >
          <source src="/MBInsights.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </ContainerScroll>

      
     
    </main>
  );
}
