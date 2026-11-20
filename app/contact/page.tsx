"use client";
import {useState} from "react";
import Reveal from "@/components/Reveal";
import {site} from "@/lib/site";
export default function Contact(){
 const [name,setName]=useState(""); const [message,setMessage]=useState("");
 const subject=encodeURIComponent(name.trim()? `Hello from ${name.trim()}`:"Portfolio contact");
 const body=encodeURIComponent(message);
 const card="group rounded-3xl border border-[var(--color-border)] bg-[var(--color-card)] p-6 transition hover:-translate-y-1 hover:border-primary/50";
 return <section className="mx-auto max-w-6xl px-6 pb-28 pt-24">
  <Reveal><p className="text-xs font-semibold uppercase tracking-[.28em] text-primary">Have something in mind?</p><h1 className="mt-4 font-serif text-5xl font-black md:text-8xl">LET’S <span className="text-primary">Connect.</span></h1><p className="mt-5 max-w-2xl text-base leading-relaxed text-[var(--color-text-secondary)]">Ideas, questions, project discussions, or just a hello — find me through one of these channels.</p></Reveal>
  <div className="mt-12 grid gap-4 md:grid-cols-3">
   <Reveal className={card}><p className="text-xs uppercase tracking-[.2em] text-[var(--color-text-tertiary)]">01 · Email</p><h2 className="mt-5 font-serif text-2xl font-black">Drop a message</h2><p className="mt-2 break-all text-sm text-[var(--color-text-secondary)]">{site.email}</p><a href={`mailto:${site.email}`} className="mt-6 inline-block text-sm font-semibold text-primary">Open email ↗</a></Reveal>
   <Reveal delay={.05} className={card}><p className="text-xs uppercase tracking-[.2em] text-[var(--color-text-tertiary)]">02 · GitHub</p><h2 className="mt-5 font-serif text-2xl font-black">Explore my work</h2><p className="mt-2 text-sm text-[var(--color-text-secondary)]">Repositories, experiments, and code.</p><a href={site.githubUrl} target="_blank" rel="noreferrer" className="mt-6 inline-block text-sm font-semibold text-primary">Visit GitHub ↗</a></Reveal>
   <Reveal delay={.1} className={card}><p className="text-xs uppercase tracking-[.2em] text-[var(--color-text-tertiary)]">03 · Discord</p><h2 className="mt-5 font-serif text-2xl font-black">Say hi</h2><p className="mt-2 text-sm text-[var(--color-text-secondary)]">Connect through my Discord profile.</p><a href={`https://discord.com/users/${site.discordId}`} target="_blank" rel="noreferrer" className="mt-6 inline-block text-sm font-semibold text-primary">Open profile ↗</a></Reveal>
  </div>
  <Reveal delay={.15} className="mt-8 rounded-3xl border border-[var(--color-border)] bg-[var(--color-card)] p-6 md:p-10"><h2 className="font-serif text-3xl font-black">Write a message<span className="text-primary">.</span></h2><p className="mt-2 text-sm text-[var(--color-text-secondary)]">This opens your email app with the message filled in.</p><div className="mt-6 grid gap-4"><input value={name} onChange={e=>setName(e.target.value)} placeholder="Your name (optional)" className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] px-5 py-3 outline-none focus:border-primary"/><textarea value={message} onChange={e=>setMessage(e.target.value)} placeholder="What would you like to talk about?" rows={6} className="resize-y rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] px-5 py-3 outline-none focus:border-primary"/><a href={`mailto:${site.email}?subject=${subject}&body=${body}`} className="w-fit rounded-full bg-primary px-8 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5">Send message ↗</a></div></Reveal>
 </section>;
}
