import Image from "next/image";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";

export const metadata = { title: "About" };

export default function AboutPage() {
  return (
    <div>
      <Section
        eyebrow="About"
        title="Aesthetics-first dentistry, grounded in function"
        subtitle="This page is intentionally structured for trust: credentials, philosophy, process, and reassurance."
      >
        <div className="grid gap-6 md:grid-cols-12 md:items-start">
          <Reveal>
            <div className="glass overflow-hidden rounded-xl md:col-span-5">
              <Image
                src="/images/portrait.jpg"
                alt="Portrait"
                width={1200}
                height={1400}
                className="h-[420px] w-full object-cover"
              />
            </div>
          </Reveal>

          <Reveal>
            <div className="md:col-span-7">
              <div className="glass rounded-xl p-6">
                <h3 className="text-lg font-semibold">Dr Charles Brandon</h3>
                <p className="mt-3 text-sm text-white/70">
                  A clinician focused on smile design and the disciplines that support it—alignment, whitening,
                  bonding, veneers and restorative dentistry—planned to look natural and perform long-term.
                </p>

                <div className="mt-5 grid gap-3 md:grid-cols-2">
                  {[
                    ["Education", "King’s College London (BDS)"],
                    ["Focus", "Facially-driven smile design"],
                    ["Approach", "Conservative when possible"],
                    ["Patient experience", "Calm, guided, transparent"]
                  ].map(([k, v]) => (
                    <div key={k} className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
                      <div className="text-xs font-semibold text-white/70">{k}</div>
                      <div className="mt-1 text-sm">{v}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 glass rounded-xl p-6">
                <h4 className="text-base font-semibold">How consultations work</h4>
                <ol className="mt-3 space-y-3 text-sm text-white/70">
                  <li>1) Goals, concerns, and what “natural” means to you</li>
                  <li>2) Photos/records as needed, and a clear set of options</li>
                  <li>3) A phased plan (if appropriate): align → brighten → refine shape</li>
                  <li>4) Maintenance guidance so your result stays stable</li>
                </ol>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>
    </div>
  );
}
