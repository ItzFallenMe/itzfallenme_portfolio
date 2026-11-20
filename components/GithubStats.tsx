"use client";
import { useEffect, useState } from "react";
import Counter from "./Counter";
import { site } from "@/lib/site";
export default function GithubStats() {
  const [s, setS] = useState<{ followers: number; public_repos: number } | null>(null);
  useEffect(() => { fetch(`https://api.github.com/users/${site.github}`).then((r) => r.json()).then(setS).catch(() => {}); }, []);
  return (
    <div className="spin-border rounded-3xl border border-[var(--color-border)] bg-[var(--color-card)] p-8">
      <a href={site.githubUrl} className="text-[var(--color-text-secondary)] hover:text-primary">@{site.github}</a>
      <img src={`https://ghchart.rshah.org/ea883d/${site.github}`} alt="GitHub contribution activity" className="my-6 w-full rounded-xl bg-white p-2" />
      {s && <div className="flex gap-12 font-serif text-5xl font-black"><div><Counter to={s.followers} /><p className="font-sans text-sm font-normal text-[var(--color-text-tertiary)]">Followers</p></div><div><Counter to={s.public_repos} /><p className="font-sans text-sm font-normal text-[var(--color-text-tertiary)]">Repositories</p></div></div>}
    </div>
  );
}
