export default function ContactSection() {
  return (
    <section id="contact" className="mx-auto w-full max-w-6xl px-6 py-24">
      <div className="text-center">
      
        <h2 className="mt-10 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
          Talk to the FastOcron team
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base text-gray-600">
          Tell us what you want to connect and what insights you need. We’ll
          respond with next steps and a tailored demo.
        </p>
      </div>

      <div className="mx-auto mt-12 max-w-3xl rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
        <form className="grid gap-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="flex flex-col gap-2">
              <span className="text-sm font-medium text-gray-700">Name</span>
              <input
                className="h-11 rounded-xl border border-gray-200 bg-gray-50 px-4 text-sm outline-none focus:border-gray-900"
                placeholder="Your name"
                name="name"
              />
            </label>
            <label className="flex flex-col gap-2">
              <span className="text-sm font-medium text-gray-700">
                Work email
              </span>
              <input
                className="h-11 rounded-xl border border-gray-200 bg-gray-50 px-4 text-sm outline-none focus:border-gray-900"
                placeholder="name@company.com"
                name="email"
              />
            </label>
          </div>

          <label className="flex flex-col gap-2">
            <span className="text-sm font-medium text-gray-700">Company</span>
            <input
              className="h-11 rounded-xl border border-gray-200 bg-gray-50 px-4 text-sm outline-none focus:border-gray-900"
              placeholder="Company name"
              name="company"
            />
          </label>

          <label className="flex flex-col gap-2">
            <span className="text-sm font-medium text-gray-700">
              What do you want to build?
            </span>
            <textarea
              className="min-h-[120px] rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none focus:border-gray-900"
              placeholder="e.g. Connect MySQL + PostgreSQL and generate pivot tables for finance reports..."
              name="message"
            />
          </label>

          <button
            type="button"
            className="mt-2 h-12 rounded-xl bg-gray-900 px-6 text-sm font-semibold text-white transition hover:bg-black"
          >
            Request a demo
          </button>
        
        </form>
      </div>
    </section>
  );
}

