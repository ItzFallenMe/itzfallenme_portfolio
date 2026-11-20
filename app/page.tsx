import Link from "next/link";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";
import DiscordCard from "@/components/DiscordCard";
import GithubStats from "@/components/GithubStats";
import ProjectsScroller from "@/components/ProjectsScroller";
import MiscBoard from "@/components/MiscBoard";
import SectionHeading from "@/components/SectionHeading";
import { site, experience, skills, achievements, stats } from "@/lib/site";

const sec = "mx-auto max-w-6xl px-6 py-20 md:py-28";
const h2 = "font-serif text-4xl font-black tracking-tight md:text-6xl";
const card = "rounded-[1.6rem] border border-[var(--color-border)] bg-[var(--color-card)] p-7 md:p-8";

export default function Home() {
  return (
    <>
      <Hero />

      <section className={sec}>
        <Reveal><SectionHeading eyebrow="A little introduction" title="About Me" /></Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          <Reveal className={`${card} md:col-span-2`}>
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-xl font-black text-white">
              {site.name.slice(0, 2).toUpperCase()}
            </div>
            <h3 className="mt-6 font-serif text-3xl font-black">{site.name}</h3>
            <p className="mt-1 text-sm text-primary">{site.title}</p>
            <p className="mt-5 max-w-prose text-sm leading-7 text-[var(--color-text-secondary)] md:text-base">{site.bio}</p>
            <a href={site.githubUrl} target="_blank" rel="noreferrer" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-text)] transition hover:text-primary">
              Explore my GitHub <span aria-hidden>↗</span>
            </a>
          </Reveal>
          <Reveal delay={0.1}><DiscordCard /></Reveal>
          <Reveal delay={0.15} className={card}>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-text-tertiary)]">Based in</p>
            <p className="mt-3 font-serif text-2xl font-bold">India</p>
            <p className="mt-2 text-sm leading-6 text-[var(--color-text-secondary)]">Available for remote collaboration.</p>
          </Reveal>
          <Reveal delay={0.2} className={`${card} flex flex-col justify-between md:col-span-2`}>
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-text-secondary)]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Building and learning
            </span>
            <p className="mt-6 max-w-2xl font-serif text-3xl font-black leading-tight md:text-4xl">Have an idea worth building? Let’s make it real.</p>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {stats.map((s, i) => (
            <Reveal key={s.l} delay={i * 0.07} className={`${card} text-center`}>
              <p className="font-serif text-4xl font-black text-primary md:text-6xl"><Counter to={s.n} /></p>
              <p className="mt-2 text-xs leading-5 text-[var(--color-text-secondary)] md:text-sm">{s.l}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className={sec}>
        <Reveal><SectionHeading eyebrow="The journey so far" title="Experience" /></Reveal>
        <div className="relative ml-3 mt-12 border-l border-[var(--color-border)] pl-8 md:pl-10">
          {experience.map((e, i) => (
            <Reveal key={e.role} delay={i * 0.08} className="relative pb-12 last:pb-0">
              <span className="absolute -left-[37px] top-2 h-3 w-3 rounded-full bg-primary shadow-[0_0_18px_var(--color-primary-glow)] md:-left-[46px]" />
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-text-tertiary)]">{e.when}</p>
              <h3 className="mt-2 font-serif text-2xl font-black md:text-3xl">{e.role}</h3>
              <p className="mt-1 text-sm font-medium text-primary">{e.org}</p>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-[var(--color-text-secondary)] md:text-base">{e.text}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {e.tags.map((t) => <span key={t} className="rounded-full border border-[var(--color-border)] px-3 py-1.5 text-[11px] font-medium text-[var(--color-text-secondary)]">{t}</span>)}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className={sec}>
        <Reveal><SectionHeading eyebrow="Tools of the trade" title="Skills" /></Reveal>
        <div className="mt-10 flex flex-wrap gap-3">
          {skills.map((s, i) => (
            <Reveal key={s} delay={i * 0.025}>
              <span className="inline-block rounded-full border border-[var(--color-border)] bg-[var(--color-card)] px-5 py-2.5 text-sm text-[var(--color-text-secondary)] transition duration-300 hover:-translate-y-0.5 hover:border-primary hover:text-primary">{s}</span>
            </Reveal>
          ))}
        </div>
      </section>

      <ProjectsScroller />
      <div className="px-6 pb-20 text-center md:pb-28">
        <Link href="/projects" className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] px-7 py-3 text-sm font-semibold transition hover:border-primary hover:text-primary">
          View all projects <span aria-hidden>↗</span>
        </Link>
      </div>

      {achievements.length > 0 && (
        <section className={sec}>
          <Reveal><SectionHeading eyebrow="Milestones" title="Achievements" /></Reveal>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {achievements.map((a) => (
              <Reveal key={a.title} className={card}>
                <h3 className="font-serif text-2xl font-black">{a.title}</h3>
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary">{a.meta}</p>
                <p className="mt-4 text-sm leading-7 text-[var(--color-text-secondary)]">{a.text}</p>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      <section className={sec}>
        <Reveal>
          <SectionHeading eyebrow="Open-source activity" title="Code & Contributions" className="mb-10" />
          <GithubStats />
        </Reveal>
      </section>

      <MiscBoard />

      <section className="relative overflow-hidden px-6 py-28 text-center md:py-40">
        <div className="absolute left-[10%] top-0 h-80 w-80 rounded-full bg-primary/20 blur-[120px]" style={{ animation: "cta-aurora-drift 18s ease-in-out infinite" }} />
        <div className="absolute bottom-0 right-[10%] h-80 w-80 rounded-full bg-primary/10 blur-[120px]" style={{ animation: "cta-aurora-drift 22s ease-in-out infinite reverse" }} />
        <Reveal className="relative">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-text-secondary)]">From idea to impact</p>
          <h2 className="cta-shimmer mx-auto mt-6 max-w-4xl font-serif text-5xl font-black md:text-8xl">Let’s build something real.</h2>
          <Link href="/contact" className="mt-10 inline-block rounded-full bg-primary px-9 py-4 text-sm font-semibold text-white shadow-[0_0_32px_var(--color-primary-glow)] transition hover:-translate-y-0.5 hover:bg-primary-dark">Get in touch</Link>
        </Reveal>
      </section>
    </>
  );
}
