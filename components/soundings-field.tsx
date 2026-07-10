const PRESETS: Record<string, { x: number; y: number; v: string }[]> = {
  a: [
    { x: 6, y: 14, v: "12" },
    { x: 88, y: 22, v: "34" },
    { x: 18, y: 68, v: "8" },
    { x: 72, y: 78, v: "21" },
    { x: 46, y: 40, v: "17" },
    { x: 94, y: 55, v: "29" },
  ],
  b: [
    { x: 10, y: 30, v: "24" },
    { x: 82, y: 12, v: "11" },
    { x: 60, y: 60, v: "38" },
    { x: 30, y: 82, v: "15" },
    { x: 92, y: 70, v: "6" },
  ],
  c: [
    { x: 14, y: 20, v: "19" },
    { x: 70, y: 30, v: "42" },
    { x: 44, y: 74, v: "9" },
    { x: 90, y: 88, v: "26" },
  ],
};

/**
 * Scattered depth-sounding numbers — decorative texture mimicking the tiny
 * fathom figures printed across real nautical charts. Purely ornamental,
 * aria-hidden, low-opacity so it never competes with real content.
 */
export function SoundingsField({ preset = "a" }: { preset?: "a" | "b" | "c" }) {
  const points = PRESETS[preset];
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {points.map((p, i) => (
        <span
          key={i}
          className="absolute font-chart-mono italic"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            fontSize: "0.7rem",
            color: "var(--sounding)",
            opacity: 0.4,
          }}
        >
          {p.v}
        </span>
      ))}
    </div>
  );
}
