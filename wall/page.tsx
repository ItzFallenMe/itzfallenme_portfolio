"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
type Note = { id: number; text: string; rot: number };
export default function Wall() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [text, setText] = useState("");
  useEffect(() => { try { setNotes(JSON.parse(localStorage.getItem("wall") || "[]")); } catch {} }, []);
  const add = () => {
    if (!text.trim()) return;
    const next = [{ id: Date.now(), text: text.trim().slice(0, 120), rot: Math.round(Math.random() * 10 - 5) }, ...notes];
    setNotes(next); setText(""); try { localStorage.setItem("wall", JSON.stringify(next)); } catch {}
  };
  return (
    <section className="mx-auto max-w-5xl px-6 pb-28 pt-24">
      <h1 className="font-serif text-5xl font-black md:text-7xl">The Wall</h1>
      <p className="mt-3 text-[var(--color-text-secondary)]">Leave a note. This demo stores notes in your browser only; connect a database to share them with every visitor.</p>
      <div className="mt-8 flex gap-2">
        <input value={text} onChange={(e) => setText(e.target.value)} onKeyDown={(e) => e.key === "Enter" && add()} maxLength={120} placeholder="Write something…" className="flex-1 rounded-full border border-[var(--color-border)] bg-[var(--color-card)] px-5 py-3 outline-none focus:border-primary" />
        <button onClick={add} className="rounded-full bg-primary px-6 py-3 font-medium text-black">Pin it</button>
      </div>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        <AnimatePresence>{notes.map((n) => (
          <motion.div key={n.id} layout initial={{ scale: 0.6, opacity: 0, y: -30 }} animate={{ scale: 1, opacity: 1, y: 0, rotate: n.rot }} whileHover={{ rotate: 0, scale: 1.04 }} exit={{ scale: 0.6, opacity: 0 }} className="rounded-2xl bg-primary p-5 text-black shadow-xl">{n.text}</motion.div>
        ))}</AnimatePresence>
      </div>
    </section>
  );
}
