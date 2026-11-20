import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import ActionButton from "@/components/ActionButton";
export default function Blog() {
  return (
    <section className="mx-auto max-w-4xl px-6 pb-28 pt-24">
      <Reveal>
        <SectionHeading eyebrow="Thoughts & ideas" title="Blog">
          Notes from building, learning, experimenting, and shipping software.
        </SectionHeading>
        <div className="spin-border relative mt-12 overflow-hidden rounded-3xl border border-[var(--color-border)] bg-[var(--color-card)] p-8 md:p-12">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--color-primary-glow),transparent_55%)] opacity-50" />
          <div className="relative">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Coming soon</p>
            <h2 className="mt-4 font-serif text-3xl font-black md:text-4xl">The first post is still cooking.</h2>
            <p className="mt-4 max-w-xl leading-7 text-[var(--color-text-secondary)]">When there’s something worth writing, it’ll land here. Until then, take a look at the projects or say hello.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ActionButton href="/projects">Browse projects</ActionButton>
              <ActionButton href="/contact" variant="outline">Get in touch</ActionButton>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
