type Props = {
  src: string;
  alt: string;
  caption: string;
  rotate?: number;
  className?: string;
  priority?: boolean;
};

/** A photo treated like a postcard pinned to the chart — aged tone, torn paper
 * frame, slight hand-set rotation. Kept photographic (not illustrated) per
 * the "postcards on the map" idea rather than a plain gallery grid tile.
 *
 * Uses a plain <img> (not next/image) for these external Unsplash URLs —
 * next/image with remote sources needs `images.remotePatterns` configured
 * even when `unoptimized: true`, and plain <img> sidesteps that basePath/
 * export interaction entirely, matching the pattern already proven safe
 * across the sibling v3 sites. */
export function Postcard({ src, alt, caption, rotate = 0, className = "", priority }: Props) {
  return (
    <figure
      className={`reveal paper-card inline-block bg-[var(--card)] p-2.5 pb-4 shadow-[0_8px_20px_rgba(36,26,16,0.22)] ${className}`}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <div className="relative aspect-[4/5] w-full overflow-hidden" style={{ filter: "sepia(0.32) saturate(0.82) contrast(1.04) brightness(0.98)" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          className="h-full w-full object-cover"
          loading={priority ? "eager" : "lazy"}
        />
        <div
          className="pointer-events-none absolute inset-0"
          style={{ boxShadow: "inset 0 0 24px rgba(36,26,16,0.35)" }}
        />
      </div>
      <figcaption className="mt-2 text-center font-chart-mono text-[0.65rem] tracking-wide" style={{ color: "var(--muted-foreground)" }}>
        {caption}
      </figcaption>
      <span
        aria-hidden
        className="absolute -top-2 left-1/2 h-4 w-9 -translate-x-1/2 -rotate-2"
        style={{ background: "rgba(200, 168, 92, 0.55)", boxShadow: "0 1px 2px rgba(36,26,16,0.3)" }}
      />
    </figure>
  );
}
