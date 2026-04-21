type DividerVariant = "dark-to-light" | "light-to-dark" | "gradient-fade";

export function SectionDivider({ variant }: { variant: DividerVariant }) {
  if (variant === "dark-to-light") {
    return (
      <div className="relative h-16 w-full shrink-0 bg-white">
        <svg
          className="absolute -top-px left-0 h-16 w-full text-white"
          viewBox="0 0 1440 48"
          preserveAspectRatio="none"
          aria-hidden
        >
          <path
            fill="currentColor"
            d="M0,48 L0,12 Q360,0 720,12 T1440,12 L1440,48 Z"
          />
        </svg>
      </div>
    );
  }
  if (variant === "light-to-dark") {
    return (
      <div className="relative h-16 w-full shrink-0 bg-slate-50">
        <svg
          className="absolute -top-px left-0 h-16 w-full text-slate-50"
          viewBox="0 0 1440 48"
          preserveAspectRatio="none"
          aria-hidden
        >
          <path
            fill="currentColor"
            d="M0,48 L0,28 Q360,8 720,20 T1440,28 L1440,48 Z"
          />
        </svg>
      </div>
    );
  }
  return (
    <div
      className="h-24 w-full bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent"
      aria-hidden
    />
  );
}

export function BlurOrbs({ className }: { className?: string }) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className ?? ""}`}
      aria-hidden
    >
      <div className="absolute -left-32 top-1/4 h-72 w-72 rounded-full bg-cyan-500/20 blur-[100px]" />
      <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-indigo-500/20 blur-[110px]" />
    </div>
  );
}
