import Link from "next/link";
import { nav, site } from "@/lib/site";

export default function Footer() {
  const h = "mb-3 text-sm font-semibold text-[var(--color-text-tertiary)]";
  const a = "block py-1 text-sm text-[var(--color-text-secondary)] transition-colors hover:text-primary";
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-bg-secondary)] px-6 py-16">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="font-serif text-2xl font-black">{site.handle}<span className="text-primary">.</span></p>
          <p className="mt-3 max-w-sm text-sm text-[var(--color-text-secondary)]">{site.tagline}</p>
          <p className="mt-6 font-serif italic text-[var(--color-text-tertiary)]">{"{ "}{site.quote}{" }"}</p>
        </div>
        <div><p className={h}>Navigation</p>{nav.slice(0, 4).map(n => <Link key={n.href} href={n.href} className={a}>{n.label}</Link>)}</div>
        <div>
          <p className={h}>Elsewhere</p>
          <a href={site.githubUrl} className={a}>GitHub</a>
          <a href={"https://discord.com/users/" + site.discordId} className={a}>Discord</a>
          <a href={"mailto:" + site.email} className={a}>Email</a>
          <p className={h + " mt-5"}>Legal</p>
          <Link href="/privacy" className={a}>Privacy Policy</Link>
          <Link href="/terms" className={a}>Terms of Use</Link>
        </div>
      </div>
      <p className="mx-auto mt-12 max-w-6xl text-sm text-[var(--color-text-tertiary)]">© 2026 {site.name}. All rights reserved.</p>
    </footer>
  );
}
