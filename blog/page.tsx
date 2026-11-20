import Reveal from "@/components/Reveal";
export default function Blog() {
  return (
    <section className="mx-auto max-w-3xl px-6 pb-28 pt-24">
      <Reveal><h1 className="font-serif text-5xl font-black md:text-7xl">Blog</h1>
        <div className="spin-border mt-12 rounded-3xl border border-[var(--color-border)] bg-[var(--color-card)] p-8"><p className="font-serif text-2xl font-bold">No posts yet.</p><p className="mt-2 text-[var(--color-text-secondary)]">Add your first post as a file in app/blog and list it here.</p></div></Reveal>
    </section>
  );
}
