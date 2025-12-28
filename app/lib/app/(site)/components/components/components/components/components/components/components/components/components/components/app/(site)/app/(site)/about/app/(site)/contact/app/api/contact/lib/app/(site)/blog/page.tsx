import Link from "next/link";
import Section from "@/components/Section";
import { getAllPosts } from "@/lib/mdx";

export const metadata = { title: "Blog" };

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <Section
      eyebrow="Blog"
      title="Guides, insights, and treatment explainers"
      subtitle="Short, high-signal posts designed to reduce friction and improve conversions."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {posts.map((p) => (
          <Link key={p.slug} href={`/blog/${p.slug}`} className="glass rounded-xl p-6 hover:bg-white/10 transition">
            <div className="text-xs text-white/60">{p.date}</div>
            <div className="mt-2 text-lg font-semibold">{p.title}</div>
            <div className="mt-2 text-sm text-white/70">{p.excerpt}</div>
            <div className="mt-4 text-sm font-semibold">Read →</div>
          </Link>
        ))}
      </div>
    </Section>
  );
}
