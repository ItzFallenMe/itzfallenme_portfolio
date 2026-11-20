export default function Marquee({ items, reverse, className = "", duration = 35 }: { items: string[]; reverse?: boolean; className?: string; duration?: number }) {
  const row = [...items, ...items];
  const set = (k: string) => row.map((t, i) => (
    <span key={k + i} className="inline-flex shrink-0 items-center">
      <span className="whitespace-nowrap px-4 text-sm font-bold uppercase tracking-wider md:px-6 md:text-base">{t}</span><span className="text-[0.5rem] opacity-60">◆</span>
    </span>
  ));
  return (
    <div className={`overflow-hidden ${className}`}>
      <div className={reverse ? "marquee-track-reverse" : "marquee-track"} style={{ ["--marquee-duration" as string]: `${duration}s` }}>{set("a")}{set("b")}</div>
    </div>
  );
}
