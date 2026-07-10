export function WaypointPin({ num }: { num: string }) {
  return (
    <div className="reveal-pin relative flex h-11 w-11 shrink-0 items-center justify-center sm:h-14 sm:w-14">
      <svg viewBox="0 0 40 48" className="absolute inset-0 h-full w-full text-[color:var(--route)]" fill="none">
        <path
          d="M20 2C10.6 2 3 9.4 3 18.5c0 12 17 27 17 27s17-15 17-27C37 9.4 29.4 2 20 2Z"
          fill="var(--card)"
          stroke="currentColor"
          strokeWidth="2"
        />
        <circle cx="20" cy="18" r="7" fill="currentColor" opacity="0.9" />
      </svg>
      <span className="relative z-10 mt-[-10px] font-chart-mono text-[0.6rem] text-[color:var(--card)] sm:text-xs">
        {num}
      </span>
    </div>
  );
}

/** Vertical dotted "route" connector between two waypoints on the chart spine. */
export function RouteConnector({ className = "" }: { className?: string }) {
  return (
    <div className={`relative flex justify-center ${className}`}>
      <div className="route-line h-full" />
    </div>
  );
}
