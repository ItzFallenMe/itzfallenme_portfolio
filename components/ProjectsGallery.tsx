"use client";

import { useMemo, useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";
import { projects } from "@/lib/site";

const categories = ["All", ...Array.from(new Set(projects.map((p) => p.kind)))];

export default function ProjectsGallery() {
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => projects.filter((p) => {
    const matchesCategory = category === "All" || p.kind === category;
    const haystack = [p.title, p.kind, p.desc, ...p.tags].join(" ").toLowerCase();
    return matchesCategory && haystack.includes(query.trim().toLowerCase());
  }), [category, query]);

  return (
    <>
      <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <label className="relative block w-full sm:max-w-sm">
          <span className="sr-only">Search projects</span>
          <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search projects or technologies…" className="w-full rounded-full border border-[var(--color-border)] bg-[var(--color-card)] px-5 py-3 text-sm outline-none transition focus:border-primary" />
          <span aria-hidden className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-[var(--color-text-tertiary)]">⌕</span>
        </label>
        <div className="flex flex-wrap gap-2">
          {categories.map((item) => (
            <button key={item} onClick={() => setCategory(item)} aria-pressed={category === item} className={`rounded-full border px-4 py-2 text-xs font-semibold transition ${category === item ? "border-primary bg-primary text-white" : "border-[var(--color-border)] bg-[var(--color-card)] text-[var(--color-text-secondary)] hover:border-primary/50"}`}>
              {item}
            </button>
          ))}
        </div>
      </div>
      <p className="mt-5 text-xs text-[var(--color-text-tertiary)]">{filtered.length} {filtered.length === 1 ? "project" : "projects"} found</p>
      <div className="mt-5 grid gap-5 md:grid-cols-2">
        {filtered.map((p, i) => (
          <Reveal key={p.title} delay={(i % 2) * 0.08}>
            <ProjectCard p={p} i={i} className="h-full min-h-[360px]" />
          </Reveal>
        ))}
      </div>
      {filtered.length === 0 && (
        <div className="mt-8 rounded-3xl border border-[var(--color-border)] bg-[var(--color-card)] px-6 py-12 text-center">
          <h2 className="font-serif text-2xl font-bold">Nothing matched that search.</h2>
          <p className="mt-2 text-sm text-[var(--color-text-secondary)]">Try another keyword or reset the filters.</p>
          <button onClick={() => { setQuery(""); setCategory("All"); }} className="mt-5 text-sm font-semibold text-primary underline underline-offset-4">Clear filters</button>
        </div>
      )}
    </>
  );
}
