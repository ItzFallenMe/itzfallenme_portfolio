import Reveal from "@/components/Reveal";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/site";

export default function Projects() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-28 pt-24">
      <Reveal>
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-primary">Selected work · 2024—2026</p>
        <h1 className="font-serif text-5xl font-black tracking-tight md:text-7xl">Projects<span className="text-primary">.</span></h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-[var(--color-text-secondary)]">
          A collection of mobile, web and product experiments. Each project is an opportunity to solve a real problem with thoughtful engineering.
        </p>
      </Reveal>
      <div className="mt-14 grid gap-5 md:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={(i % 2) * 0.08}>
            <ProjectCard p={p} i={i} className="h-full min-h-[360px]" />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
