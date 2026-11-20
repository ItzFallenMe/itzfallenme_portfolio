import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import ActionButton from "@/components/ActionButton";
import { projects } from "@/lib/site";

function slugify(title: string) {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: slugify(project.title) }));
}

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => slugify(p.title) === slug);
  if (!project) notFound();

  return (
    <main className="mx-auto max-w-4xl px-6 pb-28 pt-24">
      <Reveal>
        <Link href="/projects" className="inline-flex items-center gap-2 text-sm text-[var(--color-text-secondary)] transition hover:text-primary">← All projects</Link>
        <div className="mt-10 rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-card)] p-7 md:p-12">
          <p className="text-xs font-semibold uppercase tracking-[.22em] text-primary">{project.kind}</p>
          <h1 className="mt-4 font-serif text-4xl font-black tracking-tight md:text-6xl">{project.title}</h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--color-text-secondary)]">{project.desc}</p>
          <div className="mt-8 flex flex-wrap gap-2">{project.tags.map((tag) => <span key={tag} className="rounded-full border border-[var(--color-border)] px-3 py-1.5 text-xs text-[var(--color-text-secondary)]">{tag}</span>)}</div>
          <div className="mt-10 border-t border-[var(--color-border)] pt-8">
            <h2 className="font-serif text-2xl font-bold">Project overview</h2>
            <p className="mt-3 leading-7 text-[var(--color-text-secondary)]">This project is part of my selected work. More details, screenshots, and links will be added as the project page is expanded.</p>
            <div className="mt-8 flex flex-wrap gap-3"><ActionButton href="/contact">Discuss a similar idea</ActionButton><ActionButton href="/projects" variant="outline">Back to projects</ActionButton></div>
          </div>
        </div>
      </Reveal>
    </main>
  );
}
