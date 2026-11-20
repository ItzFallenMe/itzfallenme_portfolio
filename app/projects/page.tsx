import Reveal from "@/components/Reveal";
import ProjectsGallery from "@/components/ProjectsGallery";
export default function Projects() {
  return <section className="mx-auto max-w-6xl px-6 pb-28 pt-24">
    <Reveal><p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-primary">Selected work · projects & experiments</p><h1 className="font-serif text-5xl font-black tracking-tight md:text-7xl">Projects<span className="text-primary">.</span></h1><p className="mt-5 max-w-xl text-base leading-relaxed text-[var(--color-text-secondary)]">A collection of mobile, web, and community projects. Each is a little different; all are built by learning through doing.</p></Reveal>
    <ProjectsGallery/>
  </section>;
}
