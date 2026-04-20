"use client";

const logos = [
  "Tally",
  "PostgreSQL",
  "sqlite",
  "Oracle",
  "MySQL",
  "MariaDb",
  "Excel",
  "SQL Server",
];

function LogoChips() {
  return (
    <div className="flex shrink-0 gap-3 pr-3">
      {logos.map((name) => (
        <span
          key={name}
          className="whitespace-nowrap rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-700 shadow-sm"
        >
          {name}
        </span>
      ))}
    </div>
  );
}

export default function IntegrationsLogoMarquee() {
  return (
    <section id="logo-wall" className="scroll-mt-28 border-y border-slate-200 bg-white py-20">
      <style>{`
        @keyframes integrations-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-33.333333%); }
        }
        .integrations-marquee-track {
          display: flex;
          width: max-content;
          animation: integrations-marquee 42s linear infinite;
        }
        .integrations-marquee-wrap:hover .integrations-marquee-track {
          animation-play-state: paused;
        }
      `}</style>

      <div className="mx-auto max-w-6xl px-6 text-center">
        <h2 className="mt-3 text-4xl font-bold text-slate-900 md:text-5xl">
          Built to work with modern and traditional business systems
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm text-slate-600 sm:text-base">
          Whether you&apos;re running on spreadsheets or enterprise systems, Fastocron connects
          instantly.
        </p>

        <div className="integrations-marquee-wrap group relative mt-12 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 py-6">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-slate-50 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-slate-50 to-transparent" />

          <div className="integrations-marquee-track">
            <LogoChips />
            <LogoChips />
            <LogoChips />
          </div>
        </div>
       
      </div>
    </section>
  );
}
