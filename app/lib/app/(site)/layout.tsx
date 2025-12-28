import "../globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    default: `${site.name} — ${site.brandLine}`,
    template: `%s — ${site.name}`
  },
  description:
    "Private cosmetic and restorative dentistry with a focus on smile design, comfort, and long-lasting results.",
  metadataBase: new URL(`https://${site.domain}`)
};

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-grain">
        <Navbar />
        <main className="min-h-[70vh]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
