"use client";
import { useMemo, useState } from "react";
import { projects } from "@/lib/site";
import ProjectCard from "@/components/ProjectCard";
const kinds = ["All", ...Array.from(new Set(projects.map(p => p.kind)))];
export default function ProjectsGallery() {
  const [kind, setKind] = useState("All");
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => projects.filter(p => (kind === "All" || p.kind === kind) && (query.trim() === "" || [p.title,p.desc,...p.tags].join(" ").toLowerCase().includes(query.toLowerCase())), [kind,query]);
  return <>
    <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search projects…" aria-label="Search projects" className="w-full rounded-full border border-[var(--color-border)] bg-[var(--color-card)] px-5 py-3 outline-none transition focus:border-primary sm:max-w-xs"/>
      <div className="flex flex-wrap gap-2">{kinds.map(k=><button key={k} onClick={()=>setKind(k)} className={`rounded-full border px-4 py-2 text-xs font-semibold transition ${kind===k?"border-primary bg-primary text-white":"border-[var(--color-border)] text-[var(--color-text-secondary)] hover:border-primary hover:text-primary"}`}>{k}</button>)}</div>
    </div>
    <p className="mt-5 text-xs text-[var(--color-text-tertiary)]">{filtered.length} project{filtered.length===1?"":"s"}</p>
    <div className="mt-6 grid gap-5 md:grid-cols-2">{filtered.map((p,i)=><ProjectCard key={p.slug} p={p} i={i} className="min-h-[340px]"/>)}</div>
    {filtered.length===0 && <div className="mt-10 rounded-3xl border border-dashed border-[var(--color-border)] p-12 text-center text-[var(--color-text-secondary)]">No projects match that search.</div>}
  </>;
}
