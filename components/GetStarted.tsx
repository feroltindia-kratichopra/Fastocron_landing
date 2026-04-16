import { Button } from "./ui/moving-boder";

export default function GetStarted() {
  return (
    <section className="mx-auto mt-10 w-full max-w-6xl px-6">
      <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-slate-950 to-black px-8 py-14 text-center text-white shadow-[0_20px_80px_-40px_rgba(0,0,0,0.6)] sm:px-12">
        <h3 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
          Get Started with FastOcron
        </h3>
        <p className="mx-auto mt-6 max-w-2xl text-base text-white/70 sm:text-lg">
          Connect your data sources and get a tailored demo of private,
          AI-powered analytics.
        </p>

        <div className="mt-10 flex justify-center">
          <Button
            as="a"
            href="#contact"
            borderRadius="1.75rem"
            containerClassName="h-14 w-52 text-base"
            className="bg-slate-900/40 text-white"
          >
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
}

