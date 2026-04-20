export default function PricingSection() {
  return (
    <section id="pricing" className="mx-auto w-full mt-10 px-6 py-24 bg-gray-100">
      <div className="text-center">
   
        <h2 className="mt-3 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
          Simple plans for every team
        </h2>
        
      </div>

      <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-3">
        {["Starter", "Team", "Enterprise"].map((tier) => (
          <div
            key={tier}
            className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm"
          >
            <p className="text-sm font-semibold text-gray-900">{tier}</p>
            <p className="mt-2 text-3xl font-semibold text-gray-900">—</p>
            <p className="mt-3 text-sm text-gray-600">
              Tier details here.
            </p>
            <button
              type="button"
              className="mt-6 h-11 w-full rounded-xl bg-gray-900 text-sm font-semibold text-white transition hover:bg-black"
            >
              Choose {tier}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

