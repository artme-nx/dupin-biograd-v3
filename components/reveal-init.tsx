"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Content is visible by default in markup/CSS (no `.reveal { opacity: 0 }`
// hide-by-default rule). GSAP only animates FROM an offset state using
// gsap.from() — if JS never runs, everything stays fully visible.
export function RevealInit() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".reveal").forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          y: 26,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 88%" },
        });
      });

      gsap.utils.toArray<HTMLElement>(".reveal-pin").forEach((el, i) => {
        gsap.from(el, {
          opacity: 0,
          scale: 0.4,
          duration: 0.6,
          delay: (i % 4) * 0.05,
          ease: "back.out(2)",
          scrollTrigger: { trigger: el, start: "top 92%" },
        });
      });

      gsap.utils.toArray<HTMLElement>(".reveal-draw").forEach((el) => {
        const path = el as unknown as SVGPathElement;
        const length = path.getTotalLength ? path.getTotalLength() : 1000;
        gsap.set(path, { strokeDasharray: length, strokeDashoffset: 0 });
        gsap.from(path, {
          strokeDashoffset: length,
          duration: 1.6,
          ease: "power1.inOut",
          scrollTrigger: { trigger: el, start: "top 85%" },
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return null;
}
