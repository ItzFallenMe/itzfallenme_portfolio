import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import ActionButton from "@/components/ActionButton";
import ProjectsGallery from "@/components/ProjectsGallery";
export default function Projects(){return <section className="mx-auto max-w-6xl px-6 pb-28 pt-24"><Reveal><SectionHeading eyebrow="Selected work · 2024—2026" title="Projects">A collection of mobile, web and product experiments. Each project is an opportunity to solve a real problem with thoughtful engineering.</SectionHeading></Reveal><ProjectsGallery/><div className="mt-14 flex justify-center"><ActionButton href="/contact" variant="outline">Have a project in mind? <span aria-hidden>↗</span></ActionButton></div></section>;}