import Link from "next/link";
import { motion } from "motion/react";
import Marquee from "./Marquee";
import HeroBeams from "./HeroBeams";
import ActionButton from "./ActionButton";
import { site } from "@/lib/site";

const dots = [[12, 22], [82, 18], [30, 68], [70, 60], [90, 80], [8, 85]];

export default function Hero() {
  return (
    <section className="relative -mt-20 flex min-h-[92vh] items-center justify-center overflow-hidden pt-20">
      <HeroBeams />
      <div className="pointer-events-none absolute inset-0 z-[1] overflow-hidden">
        <div className="absolute left-[-20%] top-[75%] w-[140%] rotate-[4deg] border-y border-primary/20 bg-primary/90 py-3.5 text-white/90 md:top-[83%] md:py-5">
          <Marquee items={site.roles} duration={35} />
        </div>
        <div className="absolute left-[-20%] top-[80%] w-[140%] -rotate-[3deg] border-y border-[var(--color-border)] bg-[var(--color-bg)]/75 py-3 text-[var(--color-text-secondary)] backdrop-blur-sm md:top-[90%]">
          <Marquee items={site.traits} reverse duration={45} />
        </div>
      </div>
      {dots.map(([x, y], i) => (
        <div key={i} className="float-slow absolute h-1 w-1 rounded-full bg-primary/40" style={{ left: `${x}%`, top: `${y}%`, animationDelay: `${i * 1.5}s` }} />
      ))}
      <div className="relative z-10 mx-auto max-w-5xl -translate-y-10 px-6 text-center md:-translate-y-16">
        <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-text-secondary)] md:text-sm">
          Hi, I’m
        </motion.p>
        <motion.span initial={{ scaleX: 0, opacity: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.4, duration: 0.6 }} className="mx-auto mb-8 block h-px w-12 bg-gradient-to-r from-transparent via-primary to-transparent" />
        <h1 aria-label={site.name} className="hero-name mb-8 font-serif text-5xl font-black sm:text-6xl md:text-8xl lg:text-9xl">
          {site.name.split("").map((c, i) => (
            <motion.span key={i} aria-hidden className="inline-block" initial={{ opacity: 0, y: 60, rotateX: -70 }} animate={{ opacity: 1, y: 0, rotateX: 0 }} transition={{ delay: 0.5 + i * 0.05, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
              {c === " " ? "\u00a0" : c}
            </motion.span>
          ))}
        </h1>
        <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.35 }} className="mx-auto max-w-2xl text-base leading-relaxed text-[var(--color-text-secondary)] md:text-xl">
          {site.title}
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.55 }} className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <ActionButton href="/projects">Explore projects <span aria-hidden>↗</span></ActionButton>
          <ActionButton href="/contact" variant="outline">Get in touch <span aria-hidden>↗</span></ActionButton>
        </motion.div>
      </div>
    </section>
  );
}
