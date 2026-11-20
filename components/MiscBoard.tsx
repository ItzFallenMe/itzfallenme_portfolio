"use client";
import { useRef } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import { site } from "@/lib/site";
import SectionHeading from "./SectionHeading";
type Item = { id: string; left: number; top: number; rot: number; scale?: number; z?: number; img?: string; alt?: string; kind?: "quote" | "letter" };
const items: Item[] = [
  { id: "quote", kind: "quote", left: 25, top: 48, rot: -2, z: 0 },
  { id: "letter", kind: "letter", left: 3, top: 5, rot: -5, scale: 1.2, z: 0 },
  { id: "maki", img: "maki", alt: "Maki", left: 44, top: 32, rot: 3 },
  { id: "aizen", img: "aizen", alt: "Aizen", left: 20, top: 8, rot: -4 },
  { id: "flutter", img: "flutter", alt: "Flutter", left: 40, top: 3, rot: -2 },
  { id: "gwen", img: "gwen", alt: "Gwen", left: 60, top: 10, rot: 5 },
  { id: "tung", img: "tung", alt: "Tung", left: 78, top: 5, rot: -3 },
  { id: "itachi", img: "itachi", alt: "Itachi", left: 5, top: 36, rot: 3 },
  { id: "mikasa", img: "mikasa", alt: "Mikasa", left: 64, top: 42, rot: 4 },
  { id: "sawako", img: "sawako", alt: "Sawako", left: 80, top: 38, rot: -2 },
  { id: "mikey", img: "mikey", alt: "Mikey", left: 48, top: 66, rot: -3 },
  { id: "yuta", img: "yuta", alt: "Yuta", left: 70, top: 72, rot: 4 },
  { id: "android", img: "android", alt: "Android", left: 24, top: 70, rot: 6 },
  { id: "kora", img: "kora", alt: "Kurapika", left: 4, top: 66, rot: -5 },
  { id: "hutao", img: "hutao", alt: "Hu Tao", left: 8, top: 5, rot: -4, scale: 0.8 },
];
function Cutline() {
  return (
    <svg width="0" height="0" aria-hidden focusable="false" className="pointer-events-none absolute overflow-hidden">
      <defs>
        <filter id="misc-image-sticker-cutline" x="-30%" y="-30%" width="165%" height="175%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feMorphology in="SourceAlpha" operator="dilate" radius="2.75" result="expandedAlpha" />
          <feGaussianBlur in="expandedAlpha" stdDeviation="0.25" result="smoothAlpha" />
          <feGaussianBlur in="expandedAlpha" stdDeviation="3.5" result="softShadowBlur" />
          <feOffset in="softShadowBlur" dx="1.5" dy="4" result="softShadowOffset" />
          <feFlood floodColor="#000000" floodOpacity="0.24" result="softShadowColor" />
          <feComposite in="softShadowColor" in2="softShadowOffset" operator="in" result="softShadow" />
          <feGaussianBlur in="expandedAlpha" stdDeviation="0.8" result="contactShadowBlur" />
          <feOffset in="contactShadowBlur" dx="0.5" dy="1.5" result="contactShadowOffset" />
          <feFlood floodColor="#000000" floodOpacity="0.2" result="contactShadowColor" />
          <feComposite in="contactShadowColor" in2="contactShadowOffset" operator="in" result="contactShadow" />
          <feFlood floodColor="#ffffff" result="paperColor" />
          <feComposite in="paperColor" in2="smoothAlpha" operator="in" result="paperCutline" />
          <feMerge><feMergeNode in="softShadow" /><feMergeNode in="contactShadow" /><feMergeNode in="paperCutline" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
    </svg>
  );
}
export default function MiscBoard() {
  const board = useRef<HTMLDivElement>(null);
  return (
    <section id="misc" className="py-20 md:py-28">
      <div className="mx-auto mb-16 max-w-6xl px-6"><SectionHeading title="Misc" /></div>
      <div className="mx-auto max-w-6xl px-6">
        <div className="misc-board-dots relative overflow-hidden rounded-2xl border border-[var(--color-border)]">
          <div ref={board} className="relative h-[550px] w-full sm:h-[650px] lg:h-[700px]">
            <Cutline />
            {items.map((it) => (
              <motion.div key={it.id} drag dragConstraints={board} dragMomentum={false} dragElastic={0.1} whileDrag={{ zIndex: 60, cursor: "grabbing" }} className="absolute cursor-grab" style={{ left: `${it.left}%`, top: `${it.top}%`, zIndex: it.z ?? 2 }}>
                <div className="misc-item" style={{ ["--item-rotation" as string]: `${it.rot}deg`, ["--item-scale" as string]: it.scale ?? 1 }}>
                  {it.kind === "quote" ? (
                    <div className="w-[140px] rounded-xl border border-[var(--color-border)] bg-[var(--color-card)] p-3 shadow-lg sm:w-[170px] lg:w-[200px] lg:p-4"><p className="text-xs font-medium leading-relaxed sm:text-sm">{site.quote}</p></div>
                  ) : it.kind === "letter" ? (
                    <svg viewBox="0 0 109 88" width="109" height="88" role="img" aria-label={site.name[0]} style={{ filter: "drop-shadow(1px 2px 2px #0003) drop-shadow(6px 9px 10px #0000006b)" }}>
                      <text x="54.5" y="64" textAnchor="middle" fontSize="72" fontWeight="900" fill="#050505" stroke="#fafafa" strokeWidth="13" strokeLinejoin="round" strokeLinecap="round" paintOrder="stroke fill" style={{ fontFamily: "var(--font-playfair), serif" }}>{site.name[0]}</text>
                    </svg>
                  ) : (
                    <div className="misc-image-sticker"><img src={`/misc/${it.img}.png`} alt={it.alt} width={180} loading="lazy" decoding="async" draggable={false} className="block h-auto w-[90px] sm:w-[130px] lg:w-[180px]" /></div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <Link href="/wall" className="mt-8 block text-[var(--color-text-secondary)] hover:text-primary">Want to leave your mark? Pin something on the visitor wall.</Link>
      </div>
    </section>
  );
}
