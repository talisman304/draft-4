import Link from "next/link";

export default function ServiceCard({
  title,
  points,
  href
}: {
  title: string;
  points: string[];
  href: string;
}) {
  return (
    <div className="glass rounded-xl p-6 hover:bg-white/10 transition">
      <div className="text-base font-semibold">{title}</div>
      <ul className="mt-3 space-y-2 text-sm text-white/70">
        {points.map((p) => (
          <li key={p} className="flex gap-2">
            <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-white/60" />
            <span>{p}</span>
          </li>
        ))}
      </ul>
      <Link
        href={href}
        className="mt-5 inline-flex text-sm font-semibold text-white hover:text-white/80"
      >
        Learn more →
      </Link>
    </div>
  );
}
