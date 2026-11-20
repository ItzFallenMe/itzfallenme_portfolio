"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import ProjectCard from "./ProjectCard";
import SectionHeading from "./SectionHeading";
import { projects } from "@/lib/site";
export default function ProjectsScroller() {
  const ref = useRef<HTMLDivElement>(null);
  const items = projects.slice(0, 5);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0, 1], ["0vw", `-${(items.length - 1) * 64}vw`]);
  return (
    <>
      <div ref={ref} className="relative hidden md:block" style={{ height: `${items.length * 80}vh` }}>
        <section className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
          <SectionHeading title="Featured Projects" className="mb-10 pl-[18%]" />
          <motion.div style={{ x }} className="flex gap-[4vw] pl-[18%]">
            {items.map((p, i) => (<ProjectCard key={p.title} p={p} i={i} className="h-[56vh] w-[60vw] shrink-0" />))}
          </motion.div>
        </section>
      </div>
      <section className="px-6 py-20 md:hidden">
        <SectionHeading title="Featured Projects" className="mb-8" />
        <div className="space-y-4">{items.map((p, i) => <ProjectCard key={p.title} p={p} i={i} />)}</div>
      </section>
    </>
  );
}
