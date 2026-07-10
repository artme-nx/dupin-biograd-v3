"use client";

import { useEffect, useState } from "react";
import { CompassRose } from "@/components/compass-rose";

const WAYPOINTS = [
  { href: "#polazak", num: "00", label: "Polazak" },
  { href: "#prica", num: "01", label: "Priča o Dupinu" },
  { href: "#ulov", num: "02", label: "Ulov dana" },
  { href: "#dubine", num: "03", label: "Dubine (ocjene)" },
  { href: "#obala", num: "04", label: "Slike s obale" },
  { href: "#luka", num: "05", label: "Uplovi u luku" },
];

// Structural note: this replaces a conventional fixed top navbar entirely.
// The compass badge is the only persistent chrome; the waypoint list is a
// full-screen chart "legend" overlay, rendered as a sibling of the badge
// (not nested inside anything with backdrop-filter) so it is never clipped.
export function CompassNav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#polazak");

  useEffect(() => {
    const sections = WAYPOINTS.map((w) => document.querySelector(w.href)).filter(
      (el): el is Element => !!el
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive("#" + entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );
    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        aria-label={open ? "Zatvori legendu karte" : "Otvori legendu karte"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="fixed top-5 right-5 z-50 flex h-16 w-16 items-center justify-center rounded-full text-[color:var(--compass)] shadow-[0_2px_10px_rgba(36,26,16,0.25)] transition-transform hover:scale-105 sm:top-7 sm:right-7 sm:h-20 sm:w-20"
        style={{
          background: "var(--card)",
          border: "1px solid var(--border)",
        }}
      >
        <CompassRose className="h-11 w-11 sm:h-14 sm:w-14" spin={!open} />
        <span className="sr-only">Izbornik karte</span>
      </button>

      {/* Fullscreen legend — sibling of the badge button, own stacking
          context, explicit z-40 (below the z-50 toggle so its close
          affordance stays reachable, but above transformed reveal content). */}
      <nav
        aria-hidden={!open}
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center gap-2 px-8 transition-opacity duration-500 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ background: "var(--background)" }}
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.4]"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 70% 50% at 50% 50%, transparent 55%, rgba(36,26,16,0.12) 100%)",
          }}
        />
        <p className="text-label mb-6" style={{ color: "var(--muted-foreground)" }}>
          Legenda karte — plan plovidbe
        </p>
        <ul className="w-full max-w-md">
          {WAYPOINTS.map((w) => (
            <li key={w.href} className="border-b" style={{ borderColor: "var(--border)" }}>
              <a
                href={w.href}
                onClick={() => setOpen(false)}
                className="group flex items-baseline gap-4 py-4 transition-colors"
              >
                <span
                  className="font-chart-mono text-sm"
                  style={{ color: active === w.href ? "var(--route)" : "var(--muted-foreground)" }}
                >
                  {w.num}
                </span>
                <span
                  className="dot-leader"
                  style={{ borderColor: active === w.href ? "var(--route)" : "var(--border)" }}
                />
                <span
                  className="font-display text-2xl transition-colors group-hover:text-[color:var(--route)] sm:text-3xl"
                  style={{ color: active === w.href ? "var(--route)" : "var(--foreground)" }}
                >
                  {w.label}
                </span>
              </a>
            </li>
          ))}
        </ul>
        <a
          href="tel:+385915423885"
          className="mt-8 text-sm font-chart-mono tracking-wide"
          style={{ color: "var(--muted-foreground)" }}
        >
          +385 91 542 3885
        </a>
      </nav>
    </>
  );
}
