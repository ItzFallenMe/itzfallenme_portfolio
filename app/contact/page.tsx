"use client";
import { useState } from "react";
import Reveal from "@/components/Reveal";
import ActionButton from "@/components/ActionButton";
import SectionHeading from "@/components/SectionHeading";
import { site } from "@/lib/site";
export default function Contact() {
  const [f, setF] = useState({ name: "", message: "" });
  const field = "w-full rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] px-5 py-3 outline-none focus:border-primary";
  const mail = `mailto:${site.email}?subject=${encodeURIComponent("Hello from " + f.name)}&body=${encodeURIComponent(f.message)}`;
  return (
    <section className="mx-auto max-w-2xl px-6 pb-28 pt-24">
      <Reveal>
        <SectionHeading eyebrow="Let's connect" title="Contact" className="mb-0" />
        <p className="mt-3 text-[var(--color-text-secondary)]">Open to freelance projects and collaborations.</p>
        <div className="mt-10 space-y-4">
          <input className={field} placeholder="Your name" value={f.name} onChange={(e) => setF({ ...f, name: e.target.value })} />
          <textarea className={`${field} h-40`} placeholder="Your message" value={f.message} onChange={(e) => setF({ ...f, message: e.target.value })} />
          <ActionButton href={mail}>Send message <span aria-hidden>↗</span></ActionButton>
        </div>
        <p className="mt-10 text-sm text-[var(--color-text-tertiary)]">Or find me on <a className="underline" href={site.githubUrl}>GitHub</a> and <a className="underline" href={`https://discord.com/users/${site.discordId}`}>Discord</a>.</p>
      </Reveal>
    </section>
  );
}
