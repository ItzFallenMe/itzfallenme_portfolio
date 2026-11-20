import Link from "next/link";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";
import DiscordCard from "@/components/DiscordCard";
import GithubStats from "@/components/GithubStats";
import ProjectsScroller from "@/components/ProjectsScroller";
import MiscBoard from "@/components/MiscBoard";
import { site, experience, skills, achievements, stats } from "@/lib/site";
const sec = "mx-auto max-w-6xl px-6 py-20 md:py-28";
const h2 = "font-serif text-4xl font-black md:text-6xl";
const card = "spin-border rounded-3xl border border-[var(--color-border)] bg-[var(--color-card)] p-8";
export default function Home() {
  return (
    <>
      <Hero />
      <section className={sec}>
        <Reveal><h2 className={h2}>About Me</h2></Reveal>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          <Reveal className={`${card} md:col-span-2`}><div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary font-serif text-xl font-black text-black">{site.name.slice(0, 2).toUpperCase()}</div><h3 className="mt-6 font-serif text-3xl font-black">{site.name}</h3><p className="text-[var(--color-text-tertiary)]">{site.title}</p><p className="mt-5 max-w-prose leading-relaxed text-[var(--color-text-secondary)]">{site.bio}</p></Reveal>
          <Reveal delay={0.1}><DiscordCard /></Reveal>
          <Reveal delay={0.15} className={card}><p className="text-sm text-[var(--color-text-tertiary)]">Based in</p><p className="mt-2 font-serif text-2xl font-bold">India, available globally</p></Reveal>
          <Reveal delay={0.2} className={`${card} md:col-span-2`}><span className="inline-flex items-center gap-2 text-sm text-[var(--color-text-secondary)]"><span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" /><span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" /></span>Available for work</span><p className="mt-4 font-serif text-3xl font-black md:text-4xl">Have a vision? Let’s build it together.</p></Reveal>
        </div>
        <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((s, i) => (<Reveal key={s.l} delay={i * 0.08} className={`${card} text-center`}><p className="font-serif text-6xl font-black text-primary"><Counter to={s.n} /></p><p className="mt-2 text-sm text-[var(--color-text-secondary)]">{s.l}</p></Reveal>))}
        </div>
      </section>
      <section className={sec}>
        <Reveal><h2 className={h2}>Experience</h2></Reveal>
        <div className="relative mt-12 ml-3 border-l border-[var(--color-border)] pl-10">
          {experience.map((e) => (
            <Reveal key={e.role} className="relative pb-14">
              <span className="absolute -left-[46px] top-2 h-3 w-3 rounded-full bg-primary-light" style={{ animation: "timeline-pulse 3s ease-in-out infinite" }} />
              <p className="text-sm text-[var(--color-text-tertiary)]">{e.when}</p><h3 className="font-serif text-3xl font-black">{e.role}</h3><p className="text-primary-light">{e.org}</p><p className="mt-3 max-w-prose text-[var(--color-text-secondary)]">{e.text}</p>
              <div className="mt-4 flex flex-wrap gap-2">{e.tags.map((t) => <span key={t} className="rounded-full border border-[var(--color-border)] px-3 py-1 text-xs text-[var(--color-text-secondary)]">{t}</span>)}</div>
            </Reveal>
          ))}
        </div>
      </section>
      <section className={sec}>
        <Reveal><h2 className={h2}>Skills</h2></Reveal>
        <div className="mt-12 flex flex-wrap gap-3">{skills.map((s, i) => (<Reveal key={s} delay={i * 0.03}><span className="spin-border inline-block rounded-full border border-[var(--color-border)] bg-[var(--color-card)] px-6 py-2.5 text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-text)]">{s}</span></Reveal>))}</div>
      </section>
      <ProjectsScroller />
      <div className="text-center"><Link href="/projects" className="inline-block rounded-full border border-[var(--color-border)] px-8 py-3 transition-colors hover:border-primary hover:text-primary">View All Projects</Link></div>
      <section className={sec}>
        <Reveal><h2 className={h2}>Achievements</h2></Reveal>
        <div className="mt-12 grid gap-4 md:grid-cols-2">{achievements.map((a) => (<Reveal key={a.title} className={card}><h3 className="font-serif text-2xl font-black">{a.title}</h3><p className="mt-1 text-sm text-primary-light">{a.meta}</p><p className="mt-4 text-[var(--color-text-secondary)]">{a.text}</p></Reveal>))}</div>
      </section>
      <section className={sec}><Reveal><h2 className={`${h2} mb-12`}>Code & Contributions</h2><GithubStats /></Reveal></section>
      <MiscBoard />
      <section className="relative overflow-hidden px-6 py-32 text-center md:py-44">
        <div className="absolute left-[10%] top-0 h-96 w-96 rounded-full bg-primary/25 blur-[120px]" style={{ animation: "cta-aurora-drift 18s ease-in-out infinite" }} />
        <div className="absolute bottom-0 right-[10%] h-96 w-96 rounded-full bg-orange-600/25 blur-[120px]" style={{ animation: "cta-aurora-drift 22s ease-in-out infinite reverse" }} />
        <Reveal className="relative"><p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--color-text-secondary)]">From idea to impact</p><h2 className="cta-shimmer mx-auto mt-6 max-w-4xl font-serif text-5xl font-black md:text-8xl">Let’s build something real.</h2><Link href="/contact" className="mt-12 inline-block rounded-full bg-primary px-10 py-4 font-medium text-black transition-transform hover:scale-105 hover:bg-primary-dark">Get in Touch</Link></Reveal>
      </section>
    </>
  );
}
