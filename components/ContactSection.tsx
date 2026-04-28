
"use client";

import { FormEvent, useState } from "react";
import { Button } from "./ui/moving-boder";

type FormState = {
  name: string;
  email: string;
  company: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  company: "",
  message: "",
};

export default function ContactSection() {
  const [formData, setFormData] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle",
  );
  const [feedback, setFeedback] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setFeedback("");

    const apiUrl = "/api/contact";

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(data.message ?? "Could not send your message.");
      }

      setStatus("success");
      setFeedback(data.message ?? "Message sent. We will contact you soon.");
      setFormData(initialState);
    } catch (error) {
      setStatus("error");
      setFeedback(
        error instanceof Error ? error.message : "Unexpected error occurred.",
      );
    }
  }

  function updateField(field: keyof FormState, value: string) {
    setFormData((prev) => ({ ...prev, [field]: value }));
  }

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
        <form className="grid gap-4" onSubmit={handleSubmit}>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="flex flex-col gap-2">
              <span className="text-sm font-medium text-gray-800">Name</span>
              <input
                className="h-11 rounded-xl border border-black bg-gray-50 px-4 text-sm outline-none focus:border-gray-900"
                placeholder="Your name"
                name="name"
                value={formData.name}
                onChange={(event) => updateField("name", event.target.value)}
                required
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
                type="email"
                value={formData.email}
                onChange={(event) => updateField("email", event.target.value)}
                required
              />
            </label>
          </div>

          <label className="flex flex-col gap-2">
            <span className="text-sm font-medium text-gray-800">Company</span>
            <input
              className="h-11 rounded-xl border border-black bg-gray-50 px-4 text-sm outline-none focus:border-gray-900"
              placeholder="Company name"
              name="company"
              value={formData.company}
              onChange={(event) => updateField("company", event.target.value)}
            />
          </label>

          <label className="flex flex-col gap-2">
            <span className="text-sm font-medium text-gray-800">
              Your Query
            </span>
            <textarea
              className="min-h-[120px] rounded-xl border border-black bg-gray-50 px-4 py-3 text-sm outline-none focus:border-gray-900"
              name="message"
              value={formData.message}
              onChange={(event) => updateField("message", event.target.value)}
              required
            />
          </label>
          <div className="flex justify-center">
            <Button
              borderRadius="1.75rem"
              className="border border-cyan-500/35 bg-gradient-to-r from-cyan-500/15 to-indigo-500/20 text-gray-900 backdrop-blur"
              type="submit"
              disabled={status === "sending"}
            >
              {status === "sending" ? "Sending..." : "Submit"}
            </Button>
          </div>
          {feedback ? (
            <p
              className={`text-center text-md ${
                status === "success" ? "text-emerald-800 font-bold" : "text-red-600 font-bold"
              }`}
            >
              {feedback}
            </p>
          ) : null}
        </form>
      </div>
    </section>
  );
}

