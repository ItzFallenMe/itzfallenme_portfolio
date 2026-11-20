"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { nav, site } from "@/lib/site";
function greet() {
  const h = new Date().getHours();
  return h < 5 ? ["🌙", "Good Night"] : h < 12 ? ["☀️", "Good Morning"] : h < 17 ? ["🌤️", "Good Afternoon"] : h < 21 ? ["🌇", "Good Evening"] : ["🌙", "Good Night"];
}
export default function Header() {
  const path = usePathname();
  const [intro, setIntro] = useState(true);
  const [open, setOpen] = useState(false);
  const [g, setG] = useState(["", ""]);
  useEffect(() => { setG(greet()); const t = setTimeout(() => setIntro(false), 2600); return () => clearTimeout(t); }, []);
  useEffect(() => setOpen(false), [path]);
  const blur = [[70, 16, " saturate(1.3)"], [120, 8, ""], [180, 3, ""]] as const;
  return (
    <>
      <div aria-hidden className="pointer-events-none fixed inset-x-0 top-0 z-30">
        {blur.map(([h, b, s]) => (<div key={h} className="absolute inset-x-0 top-0" style={{ height: h, backdropFilter: `blur(${b}px)${s}`, WebkitBackdropFilter: `blur(${b}px)${s}`, maskImage: "linear-gradient(black 0%, transparent 100%)", WebkitMaskImage: "linear-gradient(black 0%, transparent 100%)" }} />))}
      </div>
      <Link href="/" className="fixed left-[18%] top-5 z-50 hidden items-center font-serif text-xl font-black md:flex">{site.handle}<span className="text-primary">.</span></Link>
      <nav className="floating-nav fixed inset-x-0 top-4 z-40 mx-auto hidden w-fit rounded-full border border-[var(--color-border)] bg-[var(--color-navbar)] backdrop-blur-xl md:block">
        <AnimatePresence mode="wait" initial={false}>
          {intro ? (
            <motion.div key="g" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="flex h-12 items-center gap-2.5 px-8">
              <span className="text-base">{g[0]}</span><span className="whitespace-nowrap text-sm font-medium">{g[1]}</span>
            </motion.div>
          ) : (
            <motion.div key="n" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex h-12 items-center gap-1 px-1.5">
              {nav.map((n) => {
                const on = n.href === "/" ? path === "/" : path.startsWith(n.href);
                return (
                  <Link key={n.href} href={n.href} className={`relative z-10 whitespace-nowrap rounded-full px-5 py-1.5 text-sm font-medium transition-colors duration-200 ${on ? "text-[var(--color-text)]" : "text-[var(--color-text-secondary)] hover:text-[var(--color-text)]"}`}>
                    {on && <motion.span layoutId="nav-pill" className="absolute inset-0 -z-10 rounded-full bg-white/[0.12] ring-1 ring-white/[0.08]" transition={{ type: "spring", stiffness: 380, damping: 32 }} />}
                    {on && <motion.span layoutId="nav-beam" className="absolute -top-[5px] left-1/2 h-[2px] w-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-transparent via-primary to-transparent shadow-[0_0_12px_2px_var(--color-primary-glow)]" transition={{ type: "spring", stiffness: 380, damping: 32 }} />}
                    {n.label}
                  </Link>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
      <button onClick={() => setOpen(!open)} aria-label="Tap to Explore" className="mobile-bar floating-nav spin-border fixed left-1/2 top-4 z-[60] flex h-12 w-[200px] -translate-x-1/2 items-center justify-center rounded-full bg-[var(--color-navbar)] text-sm font-medium text-[var(--color-text-secondary)] backdrop-blur-xl md:hidden">
        {open ? "Close" : intro ? `${g[0]} ${g[1]}` : "Tap to Explore"}
      </button>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-6 bg-[var(--color-bg)]/95 backdrop-blur-xl md:hidden">
            {nav.map((n, i) => (<motion.div key={n.href} initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.05 * i }}><Link href={n.href} className="font-serif text-4xl font-black">{n.label}</Link></motion.div>))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
