"use client";

import { useState } from "react";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/site";

export const metadata = { title: "Contact" };

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = new FormData(e.currentTarget);

    const payload = {
      name: String(form.get("name") || ""),
      email: String(form.get("email") || ""),
      phone: String(form.get("phone") || ""),
      message: String(form.get("message") || "")
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    setStatus(res.ok ? "sent" : "error");
    if (res.ok) e.currentTarget.reset();
  }

  return (
    <div>
      <Section
        eyebrow="Contact"
        title="Book a consultation"
        subtitle="Use the form for appointment requests. Prefer phone/email? Details are below."
      >
        <div className="grid gap-4 md:grid-cols-12 md:items-start">
          <Reveal>
            <form onSubmit={onSubmit} className="glass rounded-xl p-6 md:col-span-7">
              <div className="grid gap-3 md:grid-cols-2">
                <div>
                  <label className="text-xs text-white/70">Name</label>
                  <input
                    name="name"
                    required
                    className="mt-1 w-full rounded-lg bg-white/5 px-3 py-2 text-sm ring-1 ring-white/10 focus:ring-white/25 outline-none"
                  />
                </div>
                <div>
                  <label className="text-xs text-white/70">Email</label>
                  <input
                    name="email"
                    type="email"
                    required
                    className="mt-1 w-full rounded-lg bg-white/5 px-3 py-2 text-sm ring-1 ring-white/10 focus:ring-white/25 outline-none"
                  />
                </div>
                <div>
                  <label className="text-xs text-white/70">Phone (optional)</label>
                  <input
                    name="phone"
                    className="mt-1 w-full rounded-lg bg-white/5 px-3 py-2 text-sm ring-1 ring-white/10 focus:ring-white/25 outline-none"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="text-xs text-white/70">Message</label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    className="mt-1 w-full rounded-lg bg-white/5 px-3 py-2 text-sm ring-1 ring-white/10 focus:ring-white/25 outline-none"
                  />
                </div>
              </div>

              <button
                disabled={status === "sending"}
                className="mt-4 rounded-lg bg-white px-4 py-2 text-sm font-semibold text-ink hover:bg-white/90 disabled:opacity-70 transition"
              >
                {status === "sending" ? "Sending..." : "Send request"}
              </button>

              {status === "sent" && (
                <p className="mt-3 text-sm text-white/80">Thank you. We’ll respond shortly.</p>
              )}
              {status === "error" && (
                <p className="mt-3 text-sm text-white/80">
                  Something went wrong. Please email directly at {site.contact.email}.
                </p>
              )}
            </form>
          </Reveal>

          <Reveal>
            <div className="glass rounded-xl p-6 md:col-span-5">
              <div className="text-sm font-semibold">Direct contact</div>
              <div className="mt-3 text-sm text-white/70">
                <div>{site.contact.phone}</div>
                <div>{site.contact.email}</div>
              </div>

              <div className="mt-6 rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
                <div className="text-xs font-semibold text-white/70">Opening hours</div>
                <div className="mt-2 text-sm">Mon–Fri: 8:30am – 5:30pm</div>
              </div>

              <div className="mt-6 text-xs text-white/55">
                Note: Add clinic address and embedded map once confirmed.
              </div>
            </div>
          </Reveal>
        </div>
      </Section>
    </div>
  );
}
