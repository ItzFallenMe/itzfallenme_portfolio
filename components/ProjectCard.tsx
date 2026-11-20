import Marquee from "./Marquee";

export type Project = { title: string; kind: string; desc: string; tags: string[] };

export default function ProjectCard({ p, i, className = "" }: { p: Project; i: number; className?: string }) {
  return (
    <article className={`group relative flex flex-col overflow-hidden rounded-[1.6rem] border border-[var(--color-border)] bg-[var(--color-card)] transition duration-500 hover:-translate-y-1 hover:border-primary/50 hover:bg-[var(--color-card-hover)] ${className}`}>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--color-primary-glow),transparent_52%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="relative flex-1 p-7 md:p-9">
        <div className="flex items-center justify-between gap-4 text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-text-tertiary)]">
          <span className="font-mono text-sm text-primary/90">{String(i + 1).padStart(2, "0")}</span>
          <span>{p.kind}</span>
        </div>
        <h3 className="mt-12 font-serif text-3xl font-black tracking-tight transition-colors duration-300 group-hover:text-primary md:text-4xl">{p.title}</h3>
        <p className="mt-4 max-w-lg text-sm leading-7 text-[var(--color-text-secondary)] md:text-base">{p.desc}</p>
        <div className="mt-7 flex flex-wrap gap-2">
          {p.tags.map((t) => (
            <span key={t} className="rounded-full border border-[var(--color-border)] bg-[var(--color-bg-secondary)]/70 px-3 py-1.5 text-[11px] font-medium tracking-wide text-[var(--color-text-secondary)] transition-colors group-hover:border-primary/20">{t}</span>
          ))}
        </div>
      </div>
      <div className="relative border-t border-[var(--color-border)] bg-primary/5 text-primary opacity-80 transition duration-300 group-hover:bg-primary group-hover:text-white">
        <Marquee items={["Open to Explore", "Built with care"]} className="py-2.5 text-[10px] font-semibold uppercase tracking-[0.2em]" duration={24} />
      </div>
    </article>
  );
}
