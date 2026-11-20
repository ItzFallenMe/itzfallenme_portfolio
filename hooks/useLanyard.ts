"use client";
import { useEffect, useState } from "react";

export type Activity = {
  name: string;
  type: number;
  state?: string;
  details?: string;
  application_id?: string;
  assets?: { large_image?: string; large_text?: string; small_image?: string; small_text?: string };
  timestamps?: { start?: number; end?: number };
  buttons?: string[];
};
export type Presence = {
  discord_user: {
    id: string; username: string; global_name?: string | null; avatar: string | null;
    avatar_decoration_data?: { asset: string; sku_id?: string; expires_at?: string | null } | null;
    public_flags?: number;
  };
  discord_status: "online" | "idle" | "dnd" | "offline";
  activities: Activity[];
  listening_to_spotify: boolean;
  active_on_discord_web?: boolean;
  active_on_discord_desktop?: boolean;
  active_on_discord_mobile?: boolean;
  spotify?: {
    song: string; artist: string; album_art_url: string; album?: string; track_id?: string;
    timestamps?: { start?: number; end?: number };
  };
  kv?: Record<string, unknown>;
};
export function useLanyard(id: string) {
  const [data, setData] = useState<Presence | null>(null);
  useEffect(() => {
    let ws: WebSocket | undefined;
    let hb: ReturnType<typeof setInterval> | undefined;
    let reconnect: ReturnType<typeof setTimeout> | undefined;
    let dead = false;
    const connect = () => {
      if (dead) return;
      ws = new WebSocket("wss://api.lanyard.rest/socket");
      ws.onmessage = (e) => {
        const m = JSON.parse(e.data);
        if (m.op === 1) {
          if (hb) clearInterval(hb);
          hb = setInterval(() => {
            if (ws?.readyState === WebSocket.OPEN) ws.send(JSON.stringify({ op: 3 }));
          }, m.d.heartbeat_interval);
          ws.send(JSON.stringify({ op: 2, d: { subscribe_to_id: id } }));
        }
        if (m.op === 0 && m.d?.discord_user) setData(m.d);
      };
      ws.onclose = () => {
        if (hb) clearInterval(hb);
        if (!dead) reconnect = setTimeout(connect, 3000);
      };
      ws.onerror = () => ws?.close();
    };
    connect();
    return () => {
      dead = true;
      if (hb) clearInterval(hb);
      if (reconnect) clearTimeout(reconnect);
      ws?.close();
    };
  }, [id]);
  return data;
}
