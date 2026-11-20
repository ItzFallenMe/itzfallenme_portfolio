import Marquee from "./Marquee";
export type Project = { title: string; kind: string; desc: string; tags: string[] };
export default function ProjectCard({ p, i, className = "" }: { p: Project; i: number; className?: string }) {
  return (
    <article className={`group spin-border relative flex flex-col overflow-hidden rounded-3xl border border-[var(--color-border)] bg-[var(--color-card)] transition-colors hover:bg-[var(--color-card-hover)] ${className}`}>
      <div className="flex-1 p-8 md:p-10">
        <div className="flex items-baseline justify-between text-sm text-[var(--color-text-tertiary)]"><span className="font-serif text-5xl font-black text-primary/80">{String(i + 1).padStart(2, "0")}</span><span>{p.kind}</span></div>
        <h3 className="mt-10 font-serif text-4xl font-black transition-transform duration-500 group-hover:translate-x-2">{p.title}</h3>
        <p className="mt-4 max-w-md leading-relaxed text-[var(--color-text-secondary)]">{p.desc}</p>
        <div className="mt-6 flex flex-wrap gap-2">{p.tags.map((t) => <span key={t} className="rounded-full border border-[var(--color-border)] px-3 py-1 text-xs text-[var(--color-text-secondary)]">{t}</span>)}</div>
      </div>
      <div className="max-h-0 overflow-hidden bg-primary text-black transition-all duration-500 group-hover:max-h-12"><Marquee items={["Open to Explore"]} className="py-3" duration={20} /></div>
    </article>
  );
}
