import Reveal from "@/components/Reveal";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/site";
export default function Projects() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-28 pt-24">
      <Reveal><h1 className="font-serif text-5xl font-black md:text-7xl">Projects</h1><p className="mt-4 text-[var(--color-text-secondary)]">The full collection.</p></Reveal>
      <div className="mt-14 grid gap-4 md:grid-cols-2">{projects.map((p, i) => (<Reveal key={p.title} delay={(i % 2) * 0.1}><ProjectCard p={p} i={i} className="h-full" /></Reveal>))}</div>
    </section>
  );
}
