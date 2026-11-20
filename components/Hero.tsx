"use client";
import { motion } from "motion/react";
import Marquee from "./Marquee";
import HeroBeams from "./HeroBeams";
import { site } from "@/lib/site";
const dots = [[12, 22], [82, 18], [30, 68], [70, 60], [90, 80], [8, 85]];
export default function Hero() {
  return (
    <section className="relative -mt-20 flex min-h-screen items-center justify-center overflow-hidden pt-20">
      <HeroBeams />
      <div className="pointer-events-none absolute inset-0 z-[1] overflow-hidden">
        <div className="absolute left-[-20%] top-[75%] w-[140%] rotate-[4deg] bg-gradient-to-r from-orange-800 via-orange-700 to-orange-800 py-3.5 text-white/80 md:top-[85%] md:py-5"><Marquee items={site.roles} duration={35} /></div>
        <div className="absolute left-[-20%] top-[80%] w-[140%] -rotate-[3deg] border-y border-[var(--color-border)] bg-[var(--color-bg)]/60 py-3 text-[var(--color-text-secondary)] backdrop-blur-sm md:top-[91%]"><Marquee items={site.traits} reverse duration={45} /></div>
      </div>
      {dots.map(([x, y], i) => (<div key={i} className="float-slow absolute h-1 w-1 rounded-full bg-primary/30" style={{ left: `${x}%`, top: `${y}%`, animationDelay: `${i * 1.5}s` }} />))}
      <div className="relative z-10 max-w-4xl -translate-y-16 px-6 text-center">
        <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[var(--color-text-secondary)] md:text-base">Hi, I’m</motion.p>
        <motion.span initial={{ scaleX: 0, opacity: 0 }} animate={{ scaleX: 1, opacity: 1 }} transition={{ delay: 0.4, duration: 0.6 }} className="mx-auto mb-8 block h-px w-10 bg-gradient-to-r from-transparent via-primary to-transparent" />
        <h1 aria-label={site.name} className="hero-name mb-10 font-serif text-5xl font-black sm:text-6xl md:text-8xl lg:text-9xl">
          {site.name.split("").map((c, i) => (<motion.span key={i} aria-hidden className="inline-block" initial={{ opacity: 0, y: 60, rotateX: -70 }} animate={{ opacity: 1, y: 0, rotateX: 0 }} transition={{ delay: 0.5 + i * 0.05, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>{c}</motion.span>))}
        </h1>
        <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.4 }} className="text-lg text-[var(--color-text-secondary)] md:text-xl">{site.title}</motion.p>
      </div>
    </section>
  );
}
