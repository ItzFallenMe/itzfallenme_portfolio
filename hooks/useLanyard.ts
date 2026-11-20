"use client";
import { useEffect, useState } from "react";
export type Presence = {
  discord_user: { id: string; username: string; global_name?: string | null; avatar: string | null };
  discord_status: "online" | "idle" | "dnd" | "offline";
  activities: { name: string; type: number; state?: string; details?: string }[];
  listening_to_spotify: boolean;
  spotify?: { song: string; artist: string; album_art_url: string };
};
export function useLanyard(id: string) {
  const [data, setData] = useState<Presence | null>(null);
  useEffect(() => {
    let ws: WebSocket, hb: ReturnType<typeof setInterval>, dead = false;
    const connect = () => {
      ws = new WebSocket("wss://api.lanyard.rest/socket");
      ws.onmessage = (e) => {
        const m = JSON.parse(e.data);
        if (m.op === 1) {
          hb = setInterval(() => ws.send(JSON.stringify({ op: 3 })), m.d.heartbeat_interval);
          ws.send(JSON.stringify({ op: 2, d: { subscribe_to_id: id } }));
        }
        if (m.op === 0) setData(m.d);
      };
      ws.onclose = () => { clearInterval(hb); if (!dead) setTimeout(connect, 3000); };
    };
    connect();
    return () => { dead = true; clearInterval(hb); ws.close(); };
  }, [id]);
  return data;
}
