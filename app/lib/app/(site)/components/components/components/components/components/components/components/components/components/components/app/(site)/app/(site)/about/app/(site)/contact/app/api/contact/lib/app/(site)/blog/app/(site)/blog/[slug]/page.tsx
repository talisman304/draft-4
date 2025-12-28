import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/mdx";
import Section from "@/components/Section";
import { MDXProvider } from "@mdx-js/react";

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const all = getAllPosts();
  const exists = all.find((p) => p.slug === params.slug);
  if (!exists) return notFound();

  const { data, content } = getPostBySlug(params.slug);

  // Basic MDX rendering (Next can compile MDX more deeply if desired; this keeps it simple and deployable)
  // For richer MDX, add next-mdx-remote or compile step.
  return (
    <Section eyebrow="Blog" title={String(data.title)} subtitle={String(data.excerpt || "")}>
      <article className="glass rounded-xl p-6 prose prose-invert max-w-none">
        <MDXProvider>{content as any}</MDXProvider>
      </article>
    </Section>
  );
}
