import Link from "next/link";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="mx-auto mt-16 max-w-6xl px-4 pb-10">
      <div className="glass rounded-xl p-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div>
            <div className="text-sm font-semibold">{site.name}</div>
            <div className="mt-1 text-sm text-white/70">
              Private dentistry focused on aesthetics, function, and longevity.
            </div>
            <div className="mt-4 text-sm text-white/70">
              <div>{site.contact.phone}</div>
              <div>{site.contact.email}</div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 text-sm md:grid-cols-3">
            <Link className="text-white/75 hover:text-white" href="/about">About</Link>
            <Link className="text-white/75 hover:text-white" href="/blog">Blog</Link>
            <Link className="text-white/75 hover:text-white" href="/contact">Contact</Link>
            <Link className="text-white/75 hover:text-white" href="/#treatments">Treatments</Link>
            <Link className="text-white/75 hover:text-white" href="/#reviews">Reviews</Link>
            <Link className="text-white/75 hover:text-white" href="/#faq">FAQ</Link>
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-4 text-xs text-white/55">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
