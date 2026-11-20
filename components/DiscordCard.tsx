"use client";
import { useLanyard } from "@/hooks/useLanyard";
import { site } from "@/lib/site";
const dot = { online: "bg-green-400", idle: "bg-yellow-400", dnd: "bg-red-500", offline: "bg-gray-500" } as const;
export default function DiscordCard() {
  const d = useLanyard(site.discordId);
  const box = "spin-border rounded-3xl border border-[var(--color-border)] bg-[var(--color-card)] p-6";
  if (!d) return <div className={`${box} h-40 animate-pulse`} />;
  const u = d.discord_user;
  const avatar = u.avatar ? `https://cdn.discordapp.com/avatars/${u.id}/${u.avatar}.png?size=256` : "https://cdn.discordapp.com/embed/avatars/0.png";
  const act = d.activities.find((a) => a.type !== 4 && a.name !== "Spotify");
  return (
    <div className={`${box} flex flex-col gap-4`}>
      <div className="flex items-center gap-4">
        <div className="relative"><img src={avatar} alt="" className="h-16 w-16 rounded-full" /><span className={`absolute bottom-0 right-0 h-4 w-4 rounded-full border-2 border-[var(--color-card)] ${dot[d.discord_status]}`} /></div>
        <div><p className="font-serif text-xl font-bold">{u.global_name || u.username}</p><p className="text-sm text-[var(--color-text-tertiary)]">@{u.username} · {d.discord_status}</p></div>
      </div>
      {d.listening_to_spotify && d.spotify && (<div className="flex items-center gap-3 rounded-2xl bg-[var(--color-bg-secondary)] p-3"><img src={d.spotify.album_art_url} alt="" className="h-10 w-10 rounded-lg" /><div className="min-w-0"><p className="truncate text-sm">{d.spotify.song}</p><p className="truncate text-xs text-[var(--color-text-tertiary)]">{d.spotify.artist}</p></div></div>)}
      {act && <p className="text-sm text-[var(--color-text-secondary)]">Playing {act.name}{act.details ? ` · ${act.details}` : ""}</p>}
    </div>
  );
}
