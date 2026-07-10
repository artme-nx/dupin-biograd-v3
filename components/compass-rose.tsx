type Props = {
  className?: string;
  spin?: boolean;
};

/**
 * Hand-built SVG compass rose — 32-point nautical chart style, used as the
 * hero centerpiece, the section-nav toggle, and small waypoint bearings.
 */
export function CompassRose({ className, spin }: Props) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      role="img"
      aria-label="Kompas ruža vjetrova"
    >
      <g className={spin ? "origin-center animate-[compass-drift_60s_linear_infinite] motion-reduce:animate-none" : ""}>
        <circle cx="100" cy="100" r="96" fill="none" stroke="currentColor" strokeWidth="0.75" opacity="0.55" />
        <circle cx="100" cy="100" r="82" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.4" />
        <circle cx="100" cy="100" r="4" fill="currentColor" />

        {/* 32 tick marks */}
        {Array.from({ length: 32 }).map((_, i) => {
          const angle = (i * 360) / 32;
          const long = i % 8 === 0;
          const med = i % 4 === 0 && !long;
          const r1 = 96;
          const r2 = long ? 78 : med ? 84 : 90;
          const rad = (angle * Math.PI) / 180;
          const x1 = 100 + r1 * Math.sin(rad);
          const y1 = 100 - r1 * Math.cos(rad);
          const x2 = 100 + r2 * Math.sin(rad);
          const y2 = 100 - r2 * Math.cos(rad);
          return (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="currentColor"
              strokeWidth={long ? 1 : 0.5}
              opacity={long ? 0.85 : 0.4}
            />
          );
        })}

        {/* Primary star — N/E/S/W long spikes */}
        <path
          d="M100 8 L110 92 L100 100 L90 92 Z"
          fill="currentColor"
          opacity="0.92"
        />
        <path
          d="M100 192 L110 108 L100 100 L90 108 Z"
          fill="currentColor"
          opacity="0.55"
        />
        <path
          d="M8 100 L92 90 L100 100 L92 110 Z"
          fill="currentColor"
          opacity="0.7"
        />
        <path
          d="M192 100 L108 90 L100 100 L108 110 Z"
          fill="currentColor"
          opacity="0.7"
        />

        {/* Intercardinal thin spikes */}
        {[45, 135, 225, 315].map((angle) => {
          const rad = (angle * Math.PI) / 180;
          const r = 70;
          const x = 100 + r * Math.sin(rad);
          const y = 100 - r * Math.cos(rad);
          return (
            <line
              key={angle}
              x1="100"
              y1="100"
              x2={x}
              y2={y}
              stroke="currentColor"
              strokeWidth="0.75"
              opacity="0.45"
            />
          );
        })}

        <text x="100" y="26" textAnchor="middle" fontSize="13" fontFamily="var(--type-display)" fill="currentColor">N</text>
        <text x="100" y="182" textAnchor="middle" fontSize="10" fontFamily="var(--type-display)" fill="currentColor" opacity="0.7">S</text>
        <text x="176" y="104" textAnchor="middle" fontSize="10" fontFamily="var(--type-display)" fill="currentColor" opacity="0.7">E</text>
        <text x="24" y="104" textAnchor="middle" fontSize="10" fontFamily="var(--type-display)" fill="currentColor" opacity="0.7">W</text>
      </g>
    </svg>
  );
}
