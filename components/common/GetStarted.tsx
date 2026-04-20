import { Button } from "../ui/moving-boder";

export default function GetStarted() {
  return (
    <section id="contact" className="relative mx-auto w-full max-w-6xl px-6 pb-24 pt-10">
      <div className="pointer-events-none absolute -inset-10 rounded-[2rem] bg-gradient-to-r from-cyan-500/20 via-transparent to-violet-500/20 blur-3xl" />
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#050816] via-[#0B1120] to-[#111827] px-8 py-16 text-center text-white shadow-[0_24px_100px_-40px_rgba(34,211,238,0.35)] sm:px-12">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_30%_0%,rgba(34,211,238,0.15),transparent_50%)]" />
        <div className="relative z-10">
          <h3 className="text-4xl font-semibold leading-tight tracking-tight text-white/90 sm:text-5xl">
            Get Started with FastOcron
          </h3>
          <p className="mx-auto mt-6 max-w-2xl text-base text-slate-300 sm:text-lg">
            Connect your data sources and get a tailored demo of private,
            AI-powered analytics.
          </p>

          <div className="mt-10 flex justify-center">
            <Button
              as="a"
              href="/contact"
              borderRadius="1.75rem"
              containerClassName="h-14 w-52 text-base"
              className="border border-cyan-500/30 bg-gradient-to-r from-cyan-600/25 to-indigo-900/40 text-white"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
