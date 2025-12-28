import Link from "next/link";
import { site } from "@/lib/site";

export default function CTA() {
  return (
    <div className="glass rounded-xl p-6 md:p-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="text-lg font-semibold">Ready to plan your new smile?</div>
          <p className="mt-2 max-w-xl text-sm text-white/70">
            Book a consultation to discuss goals, options, timelines and expected outcomes.
          </p>
        </div>
        <div className="flex gap-2">
          <Link
            href={site.ctas.primary.href}
            className="rounded-lg bg-white px-4 py-2 text-sm font-semibold text-ink hover:bg-white/90 transition"
          >
            {site.ctas.primary.label}
          </Link>
          <Link
            href="/about"
            className="rounded-lg bg-white/10 px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/15 hover:bg-white/15 transition"
          >
            About Dr Brandon
          </Link>
        </div>
      </div>
    </div>
  );
}
