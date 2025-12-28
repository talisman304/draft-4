export default function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
}) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-4 py-14">
      <div className="mb-8">
        {eyebrow && (
          <div className="text-xs font-semibold tracking-wide text-white/60">
            {eyebrow}
          </div>
        )}
        <h2 className="mt-2 text-2xl font-semibold md:text-3xl">{title}</h2>
        {subtitle && <p className="mt-3 max-w-2xl text-white/70">{subtitle}</p>}
      </div>
      {children}
    </section>
  );
}
