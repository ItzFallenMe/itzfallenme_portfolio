import Reveal from "@/components/Reveal";
import ProjectCard from "@/components/ProjectCard";
import SectionHeading from "@/components/SectionHeading";
import ActionButton from "@/components/ActionButton";
import { projects } from "@/lib/site";

export default function Projects() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-28 pt-24">
      <Reveal>
        <SectionHeading eyebrow="Selected work · 2024—2026" title="Projects">
          A collection of mobile, web and product experiments. Each project is an opportunity to solve a real problem with thoughtful engineering.
        </SectionHeading>
      </Reveal>
      <div className="mt-14 grid gap-5 md:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={(i % 2) * 0.08}>
            <ProjectCard p={p} i={i} className="h-full min-h-[360px]" />
          </Reveal>
        ))}
      </div>
      <div className="mt-14 flex justify-center">
        <ActionButton href="/contact" variant="outline">Have a project in mind? <span aria-hidden>↗</span></ActionButton>
      </div>
    </section>
  );
}
