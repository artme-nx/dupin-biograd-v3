/** Nautical chart scale bar — alternating filled/empty segments, like on old maritime charts. */
export function ScaleBar({ className = "" }: { className?: string }) {
  const segments = 5;
  return (
    <div className={`inline-flex flex-col items-start gap-1 ${className}`}>
      <div className="flex h-3 border" style={{ borderColor: "var(--foreground)" }}>
        {Array.from({ length: segments }).map((_, i) => (
          <div
            key={i}
            className="w-8"
            style={{
              background: i % 2 === 0 ? "var(--foreground)" : "transparent",
              borderRight: i < segments - 1 ? "1px solid var(--foreground)" : "none",
            }}
          />
        ))}
      </div>
      <div className="flex w-full font-chart-mono text-[0.6rem]" style={{ color: "var(--muted-foreground)" }}>
        <span>0</span>
        <span className="ml-auto">1 NM</span>
        <span className="ml-6">2</span>
      </div>
    </div>
  );
}
