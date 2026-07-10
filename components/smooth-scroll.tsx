"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({ lerp: 0.1 });

    lenis.on("scroll", ScrollTrigger.update);

    const raf = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    // Lazy-loaded images finish loading well after Lenis's initial measurement,
    // growing the page taller than Lenis's cached scroll limit — resync on each load.
    const refresh = () => {
      lenis.resize();
      ScrollTrigger.refresh();
    };
    const pendingImages = Array.from(document.images).filter((img) => !img.complete);
    pendingImages.forEach((img) => img.addEventListener("load", refresh, { once: true }));
    window.addEventListener("load", refresh);

    return () => {
      gsap.ticker.remove(raf);
      lenis.destroy();
      pendingImages.forEach((img) => img.removeEventListener("load", refresh));
      window.removeEventListener("load", refresh);
    };
  }, []);

  return <>{children}</>;
}
