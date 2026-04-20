import { Button } from "./ui/moving-boder";
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

      <div className="mx-auto mt-12 max-w-3xl rounded-3xl border-5 border-black bg-white p-6 shadow-sm sm:p-8">
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
                Work email
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
              className="border-3 border-cyan-500/30 bg-blue-100 text-gray-900 backdrop-blur"
            >
              Submit
            </Button>
            </div>
        </form>
      </div>
    </section>
  );
}

