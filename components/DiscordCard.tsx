"use client";
import { useLanyard } from "@/hooks/useLanyard";
import { site } from "@/lib/site";

const status = {
  online: { label: "Online", color: "bg-emerald-400", glow: "shadow-[0_0_12px_#34d39980]" },
  idle: { label: "Idle", color: "bg-amber-400", glow: "shadow-[0_0_12px_#fbbf2480]" },
  dnd: { label: "Do Not Disturb", color: "bg-rose-400", glow: "shadow-[0_0_12px_#fb718580]" },
  offline: { label: "Offline", color: "bg-zinc-500", glow: "" },
} as const;
function assetUrl(image?: string) {
  if (!image) return "";
  if (image.startsWith("mp:")) return `https://media.discordapp.net/${image.slice(3)}`;
  return `https://cdn.discordapp.com/app-assets/${image}`;
}
function elapsed(start?: number) {
  if (!start) return "";
  const seconds = Math.max(0, Math.floor((Date.now() - start) / 1000));
  const mins = Math.floor(seconds / 60);
  return mins < 60 ? `${mins}m` : `${Math.floor(mins / 60)}h ${mins % 60}m`;
}
export default function DiscordCard() {
  const d = useLanyard(site.discordId);
  const shell = "spin-border overflow-hidden rounded-3xl border border-[var(--color-border)] bg-[var(--color-card)]";
  if (!d) return <div className={`${shell} h-64 animate-pulse`} />;
  const u = d.discord_user;
  const s = status[d.discord_status];
  const avatar = u.avatar
    ? `https://cdn.discordapp.com/avatars/${u.id}/${u.avatar}.${u.avatar.startsWith("a_") ? "gif" : "png"}?size=512`
    : `https://cdn.discordapp.com/embed/avatars/0.png`;
  const custom = d.activities.find(a => a.type === 4);
  const spotify = d.listening_to_spotify && d.spotify ? d.spotify : null;
  const activity = d.activities.find(a => a.type !== 4 && a.name !== "Spotify");
  const activityImage = activity?.assets?.large_image ? assetUrl(activity.assets.large_image) : "";
  const device = [d.active_on_discord_desktop && "Desktop", d.active_on_discord_mobile && "Mobile", d.active_on_discord_web && "Web"].filter(Boolean);
  return (
    <div className={shell}>
      <div className="relative h-24 overflow-hidden bg-gradient-to-br from-primary/30 via-primary/10 to-[var(--color-bg-secondary)]">
        <div className="absolute -right-8 -top-12 h-40 w-40 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute bottom-3 right-4 flex gap-1.5">
          {device.map((d) => <span key={d} className="rounded-full border border-white/10 bg-black/20 px-2 py-1 text-[10px] uppercase tracking-wide text-white/80 backdrop-blur">{d}</span>)}
        </div>
      </div>
      <div className="relative px-5 pb-5">
        <div className="-mt-12 flex items-end justify-between">
          <div className="relative">
            <img src={avatar} alt="" className="h-20 w-20 rounded-full border-[5px] border-[var(--color-card)] object-cover" />
            <span className={`absolute bottom-1 right-1 h-4 w-4 rounded-full border-[3px] border-[var(--color-card)] ${s.color} ${s.glow}`} />
          </div>
          <a href={`https://discord.com/users/${u.id}`} target="_blank" rel="noreferrer" className="mb-2 rounded-full border border-[var(--color-border)] px-3 py-1.5 text-xs font-semibold transition hover:border-primary hover:text-primary">View profile ↗</a>
        </div>
        <div className="mt-3">
          <p className="font-serif text-xl font-black">{u.global_name || u.username}</p>
          <p className="text-sm text-[var(--color-text-tertiary)]">@{u.username}</p>
          <p className="mt-2 flex items-center gap-2 text-xs text-[var(--color-text-secondary)]"><span className={`h-2 w-2 rounded-full ${s.color}`} />{s.label}</p>
        </div>
        {custom?.state && <div className="mt-4 rounded-2xl bg-[var(--color-bg-secondary)] px-3 py-2 text-sm"><span className="mr-2">💬</span>{custom.state}</div>}
        {spotify && <div className="mt-4 rounded-2xl border border-emerald-500/20 bg-emerald-500/[0.06] p-3">
          <div className="flex items-center gap-3">
            <img src={spotify.album_art_url} alt="" className="h-12 w-12 rounded-xl object-cover" />
            <div className="min-w-0 flex-1"><p className="text-[10px] font-bold uppercase tracking-widest text-emerald-500">Listening to Spotify</p><p className="mt-1 truncate text-sm font-semibold">{spotify.song}</p><p className="truncate text-xs text-[var(--color-text-secondary)]">{spotify.artist}</p></div>
            <span className="text-emerald-500">♫</span>
          </div>
        </div>}
        {!spotify && activity && <div className="mt-4 flex gap-3 rounded-2xl bg-[var(--color-bg-secondary)] p-3">
          {activityImage ? <img src={activityImage} alt="" className="h-12 w-12 rounded-xl object-cover" /> : <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-xl">◈</div>}
          <div className="min-w-0 flex-1"><p className="text-[10px] font-bold uppercase tracking-widest text-primary">Currently {activity.type === 0 ? "playing" : "doing"}</p><p className="truncate text-sm font-semibold">{activity.name}</p>{activity.details && <p className="truncate text-xs text-[var(--color-text-secondary)]">{activity.details}</p>}{activity.state && <p className="truncate text-xs text-[var(--color-text-tertiary)]">{activity.state}</p>}</div>
          {activity.timestamps?.start && <span className="self-center text-xs text-[var(--color-text-tertiary)]">{elapsed(activity.timestamps.start)}</span>}
        </div>}
        {!spotify && !activity && <p className="mt-4 rounded-2xl bg-[var(--color-bg-secondary)] px-3 py-3 text-sm text-[var(--color-text-secondary)]">No activity right now.</p>}
        <div className="mt-4 flex items-center justify-between border-t border-[var(--color-border)] pt-3 text-[10px] uppercase tracking-widest text-[var(--color-text-tertiary)]"><span>Live via Lanyard</span><span>Updates in real time</span></div>
      </div>
    </div>
  );
}
