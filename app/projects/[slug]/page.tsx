import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import { projects } from "@/lib/site";
export function generateStaticParams(){return projects.map(p=>({slug:p.slug}));}
export default async function ProjectDetail({params}:{params:Promise<{slug:string}>}) {
  const {slug}=await params; const p=projects.find(x=>x.slug===slug); if(!p) notFound();
  return <section className="mx-auto max-w-4xl px-6 pb-28 pt-24">
    <Link href="/projects" className="text-sm text-[var(--color-text-secondary)] transition hover:text-primary">← All projects</Link>
    <Reveal><p className="mt-8 text-xs font-semibold uppercase tracking-[0.28em] text-primary">{p.kind}</p><h1 className="mt-3 font-serif text-5xl font-black md:text-7xl">{p.title}<span className="text-primary">.</span></h1><p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--color-text-secondary)]">{p.desc}</p></Reveal>
    <div className="mt-10 flex flex-wrap gap-2">{p.tags.map(t=><span key={t} className="rounded-full border border-[var(--color-border)] bg-[var(--color-card)] px-4 py-2 text-sm text-[var(--color-text-secondary)]">{t}</span>)}</div>
    {p.details?.length ? <div className="mt-14"><h2 className="font-serif text-3xl font-black">Highlights<span className="text-primary">.</span></h2><div className="mt-5 grid gap-3 sm:grid-cols-2">{p.details.map((d,i)=><Reveal key={d} delay={i*.04} className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-5"><span className="font-mono text-xs text-primary">{String(i+1).padStart(2,"0")}</span><p className="mt-2 font-semibold">{d}</p></Reveal>)}</div></div>:null}
    <div className="mt-14 rounded-3xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] p-7"><p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">More soon</p><p className="mt-3 text-sm leading-7 text-[var(--color-text-secondary)]">Additional screenshots, links, and project notes will be added as they’re ready.</p></div>
  </section>;
}
