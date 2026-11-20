"use client";
import { animate, useInView } from "motion/react";
import { useEffect, useRef } from "react";
export default function Counter({ to }: { to: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const seen = useInView(ref, { once: true });
  useEffect(() => {
    if (!seen || !ref.current) return;
    const c = animate(0, to, { duration: 1.8, ease: "easeOut", onUpdate: (v) => { if (ref.current) ref.current.textContent = String(Math.round(v)); } });
    return () => c.stop();
  }, [seen, to]);
  return <span ref={ref}>0</span>;
}
