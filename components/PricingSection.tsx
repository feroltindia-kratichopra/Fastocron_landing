export default function PricingSection() {
  const plans = [
    {
      name: "Basic",
      price: "$25",
      features: [
        "Unlimited chat",
        "300 pivot tables",
        "50 dashboards",
      ],
      cta: "Choose Basic",
    },
    {
      name: "Standard",
      price: "$50",
      features: [
        "Unlimited chat",
        "800 pivot tables",
        "120 dashboards",
      ],
      cta: "Choose Standard",
    },
    {
      name: "Business",
      price: "Contact for pricing",
      features: [
        "On usage charge",
      ],
      cta: "Contact Sales",
    },
  ];

  return (
    <section
      id="pricing"
      className="mx-auto w-full mt-10 px-6 py-24 bg-gray-100"
    >
      <div className="text-center">
        <h2 className="mt-3 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
          Simple plans for every team
        </h2>
      </div>

      <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-3">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm flex flex-col"
          >
            <p className="text-sm font-semibold text-gray-900">
              {plan.name}
            </p>

            <p className="mt-2 text-3xl font-semibold text-gray-900">
              {plan.price}
            </p>

            <ul className="mt-4 space-y-2 text-sm text-gray-600">
              {plan.features.map((feature, idx) => (
                <li key={idx}>• {feature}</li>
              ))}
            </ul>

            <button
              type="button"
              className="mt-6 h-11 w-full rounded-xl bg-gray-900 text-sm font-semibold text-white transition hover:bg-black"
            >
              {plan.cta}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}