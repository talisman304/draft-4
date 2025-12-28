"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { site } from "@/lib/site";
import clsx from "clsx";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50">
      <div className="glass mx-auto mt-4 max-w-6xl rounded-xl px-4 py-3 shadow-soft">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-white/10 ring-1 ring-white/15" />
            <div className="leading-tight">
              <div className="text-sm font-semibold">{site.name}</div>
              <div className="text-xs text-white/70">{site.brandLine}</div>
            </div>
          </Link>

          <nav className="hidden items-center gap-2 md:flex">
            {site.nav.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={clsx(
                    "relative rounded-lg px-3 py-2 text-sm transition",
                    active ? "text-white" : "text-white/75 hover:text-white"
                  )}
                >
                  {active && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-10 rounded-lg bg-white/10 ring-1 ring-white/15"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href={site.ctas.primary.href}
              className="rounded-lg bg-white px-3 py-2 text-sm font-semibold text-ink hover:bg-white/90 transition"
            >
              {site.ctas.primary.label}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
