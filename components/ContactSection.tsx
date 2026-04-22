import { Button } from "./ui/moving-boder";
export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative mx-auto w-full max-w-6xl overflow-hidden px-6 py-24"
    >
      <div className="pointer-events-none absolute -left-20 top-8 h-60 w-60 rounded-full bg-cyan-300/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-8 h-72 w-72 rounded-full bg-indigo-300/20 blur-3xl" />

      <div className="relative text-center">
       
        <h2 className="mt-6 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
          Talk to the{" "}
          <span className=" bg-gradient-to-r from-sky-400 to-emerald-400 bg-clip-text text-transparent">
            FastOcron team
          </span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base text-gray-600">
          Tell us what you want to connect and what insights you need. We’ll
          respond with next steps and a tailored demo.
        </p>
      </div>

      <div className="relative mx-auto mt-12 max-w-3xl overflow-hidden rounded-3xl border border-slate-200 bg-white/95 p-6 shadow-xl shadow-slate-200/70 backdrop-blur sm:p-8">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(34,211,238,0.12),transparent_55%)]" />
        <form className="grid gap-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="flex flex-col gap-2">
              <span className="text-sm font-medium text-gray-800">Name</span>
              <input
                className="h-11 rounded-xl border border-black bg-gray-50 px-4 text-sm outline-none focus:border-gray-900"
                placeholder="Your name"
                name="name"
              />
            </label>
            <label className="flex flex-col gap-2">
              <span className="text-sm font-medium text-gray-800">
                Email
              </span>
              <input
                className="h-11 rounded-xl border border-black bg-gray-50 px-4 text-sm outline-none focus:border-gray-900"
                placeholder="name@company.com"
                name="email"
              />
            </label>
          </div>

          <label className="flex flex-col gap-2">
            <span className="text-sm font-medium text-gray-800">Company</span>
            <input
              className="h-11 rounded-xl border border-black bg-gray-50 px-4 text-sm outline-none focus:border-gray-900"
              placeholder="Company name"
              name="company"
            />
          </label>

          <label className="flex flex-col gap-2">
            <span className="text-sm font-medium text-gray-800">
              Your Query
            </span>
            <textarea
              className="min-h-[120px] rounded-xl border border-black bg-gray-50 px-4 py-3 text-sm outline-none focus:border-gray-900"
             
              name="message"
            />
          </label>
          <div className="flex justify-center">
            <Button
              borderRadius="1.75rem"
              className="border border-cyan-500/35 bg-gradient-to-r from-cyan-500/15 to-indigo-500/20 text-gray-900 backdrop-blur"
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}

