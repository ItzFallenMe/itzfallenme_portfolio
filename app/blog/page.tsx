import Reveal from "@/components/Reveal";
export default function Blog() {
  return <section className="mx-auto max-w-5xl px-6 pb-28 pt-24">
    <Reveal><p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-primary">Notes from the process</p><h1 className="font-serif text-5xl font-black md:text-7xl">Thoughts & Ideas<span className="text-primary">.</span></h1><p className="mt-5 max-w-2xl text-base leading-relaxed text-[var(--color-text-secondary)]">A place for project notes, lessons learned, and ideas worth keeping.</p></Reveal>
    <Reveal delay={.1} className="mt-12 rounded-3xl border border-[var(--color-border)] bg-[var(--color-card)] p-8 md:p-12"><p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">The journal is quiet for now</p><h2 className="mt-4 font-serif text-3xl font-black md:text-4xl">No posts published yet.</h2><p className="mt-4 max-w-xl text-sm leading-7 text-[var(--color-text-secondary)]">When there’s something worth writing about, it’ll show up here. No filler posts just to make the page look busy.</p></Reveal>
  </section>;
}
