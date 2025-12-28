export default function Testimonial({
  quote,
  name,
  detail
}: {
  quote: string;
  name: string;
  detail: string;
}) {
  return (
    <div className="glass rounded-xl p-6">
      <p className="text-sm text-white/80">“{quote}”</p>
      <div className="mt-4 text-sm font-semibold">{name}</div>
      <div className="text-xs text-white/60">{detail}</div>
    </div>
  );
}
