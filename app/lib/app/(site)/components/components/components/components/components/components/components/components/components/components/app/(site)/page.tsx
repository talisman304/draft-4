import Image from "next/image";
import Link from "next/link";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import ServiceCard from "@/components/ServiceCard";
import Testimonial from "@/components/Testimonial";
import CTA from "@/components/CTA";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import Hero3D from "@/components/Hero3D";
import { site } from "@/lib/site";

export default function HomePage() {
  return (
    <div>
      {/* HERO */}
      <div className="mx-auto max-w-6xl px-4 pt-10">
        <div className="grid gap-6 md:grid-cols-12 md:items-center">
          <div className="md:col-span-7">
            <Reveal>
              <div className="glass inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs text-white/70">
                <span className="h-1.5 w-1.5 rounded-full bg-white/70" />
                Private smile design • Aesthetic + functional outcomes
              </div>
              <h1 className="mt-5 text-4xl font-semibold leading-tight md:text-5xl">
                Smile design dentistry with precision, comfort, and longevity.
              </h1>
              <p className="mt-4 max-w-xl text-white/75">
                Bespoke treatment planning across alignment, whitening, bonding, veneers and restorative work—built
                around facial aesthetics and long-term function.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                <Link
                  href={site.ctas.primary.href}
                  className="rounded-lg bg-white px-5 py-3 text-sm font-semibold text-ink hover:bg-white/90 transition"
                >
                  {site.ctas.primary.label}
                </Link>
                <Link
                  href={site.ctas.secondary.href}
                  className="rounded-lg bg-white/10 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/15 hover:bg-white/15 transition"
                >
                  {site.ctas.secondary.label}
                </Link>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-3">
                {[
                  ["Planning-led", "Digital-first smile design"],
                  ["Minimal-prep", "Conservative techniques"],
                  ["Patient comfort", "Calm, guided care"]
                ].map(([k, v]) => (
                  <div key={k} className="glass rounded-xl p-4">
                    <div className="text-sm font-semibold">{k}</div>
                    <div className="mt-1 text-xs text-white/70">{v}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="md:col-span-5">
            <Reveal>
              <div className="grid gap-4">
                <div className="glass overflow-hidden rounded-xl">
                  <Image
                    src="/images/hero.jpg"
                    alt="Clinic and smile design aesthetic"
                    width={1200}
                    height={900}
                    className="h-[260px] w-full object-cover"
                    priority
                  />
                </div>
                <Hero3D />
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      {/* TREATMENTS */}
      <Section
        id="treatments"
        eyebrow="Treatments"
        title="A cohesive pathway from consultation to final finish"
        subtitle="High-conversion layout: simple options, clear outcomes, strong CTAs."
      >
        <div className="grid gap-4 md:grid-cols-3">
          <Reveal>
            <ServiceCard
              title="Alignment & Smile Position"
              points={["Invisalign / aligners", "Fixed braces (if suitable)", "Bite and midline considerations"]}
              href="/contact"
            />
          </Reveal>
          <Reveal>
            <ServiceCard
              title="Brightness & Surface Detail"
              points={["Whitening plans", "Composite edge enhancement", "Texture and polish protocols"]}
              href="/contact"
            />
          </Reveal>
          <Reveal>
            <ServiceCard
              title="Shape & Harmony"
              points={["Composite bonding", "Veneers (as needed)", "Gum contouring and proportion"]}
              href="/contact"
            />
          </Reveal>
        </div>
      </Section>

      {/* PROOF / BEFORE-AFTER */}
      <Section
        eyebrow="Results"
        title="Natural-looking improvements, designed to suit the face"
        subtitle="Swap these placeholders with real cases (with consent)."
      >
        <div className="grid gap-4 md:grid-cols-2">
          <Reveal>
            <BeforeAfterSlider
              beforeSrc="/images/clinic-1.jpg"
              afterSrc="/images/clinic-2.jpg"
              alt="Before and after smile result"
            />
          </Reveal>
          <Reveal>
            <div className="glass rounded-xl p-6">
              <div className="text-sm font-semibold">What you can expect</div>
              <ul className="mt-4 space-y-3 text-sm text-white/70">
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-white/60" />
                  Clear consultation outcomes, options and timelines
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-white/60" />
                  Conservative planning where possible (minimal prep)
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-white/60" />
                  Finishing protocols for long-term gloss and stability
                </li>
              </ul>
              <div className="mt-6">
                <Link
                  href="/contact"
                  className="rounded-lg bg-white px-4 py-2 text-sm font-semibold text-ink hover:bg-white/90 transition"
                >
                  Request an appointment
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* REVIEWS */}
      <Section id="reviews" eyebrow="Patient feedback" title="A calm, guided process from start to finish">
        <div className="grid gap-4 md:grid-cols-3">
          <Reveal>
            <Testimonial
              quote="Everything was explained clearly and the final result looked natural, not artificial."
              name="Patient"
              detail="Smile design consultation"
            />
          </Reveal>
          <Reveal>
            <Testimonial
              quote="Super reassuring throughout. The finishing and detail were exceptional."
              name="Patient"
              detail="Bonding and whitening"
            />
          </Reveal>
          <Reveal>
            <Testimonial
              quote="I finally feel confident smiling in photos."
              name="Patient"
              detail="Alignment + restorative plan"
            />
          </Reveal>
        </div>
      </Section>

      {/* CTA */}
      <div className="mx-auto max-w-6xl px-4 pb-14">
        <CTA />
      </div>
    </div>
  );
}
