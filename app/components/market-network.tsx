const markets = [
  { name: "Bulgaria", x: 318, y: 110 },
  { name: "Romania", x: 106, y: 154 },
  { name: "Greece", x: 94, y: 360 },
  { name: "Serbia", x: 338, y: 416 },
  { name: "Türkiye", x: 428, y: 280 },
];

export default function MarketNetwork() {
  return (
    <figure className="mx-auto w-full max-w-[34rem] text-teal-accent">
      <figcaption className="sr-only">
        An abstract network connecting Balkan markets: Bulgaria, Romania, Greece,
        Serbia, and Türkiye. Positions are illustrative, not geographical.
      </figcaption>
      <svg viewBox="0 0 520 520" fill="none" aria-hidden="true" className="block h-auto w-full overflow-hidden">
        <defs>
          <radialGradient id="market-network-glow">
            <stop stopColor="currentColor" stopOpacity="0.12" />
            <stop offset="1" stopColor="currentColor" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="market-network-line" x1="94" y1="110" x2="428" y2="416" gradientUnits="userSpaceOnUse">
            <stop stopColor="var(--color-teal-accent)" stopOpacity="0.65" />
            <stop offset="1" stopColor="var(--color-secondary-accent)" stopOpacity="0.35" />
          </linearGradient>
          <pattern id="market-network-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M40 0H0V40" stroke="white" strokeOpacity="0.035" />
          </pattern>
        </defs>
        <circle cx="260" cy="260" r="250" fill="url(#market-network-glow)" />
        <circle cx="260" cy="260" r="230" fill="url(#market-network-grid)" />
        <circle cx="260" cy="260" r="202" stroke="white" strokeOpacity="0.07" />
        <circle cx="260" cy="260" r="145" stroke="white" strokeOpacity="0.06" strokeDasharray="3 9" />
        <g stroke="url(#market-network-line)">
          {markets.map(({ name, x, y }) => <path key={name} d={`M260 260L${x} ${y}`} />)}
          <path d="M318 110L106 154L94 360L338 416L428 280Z" strokeOpacity="0.4" />
        </g>
        <circle cx="260" cy="260" r="56" fill="currentColor" fillOpacity="0.04" />
        <circle cx="260" cy="260" r="42" fill="var(--color-dark-hero)" stroke="currentColor" strokeOpacity="0.4" />
        <path d="M244 260H276M260 244V276M249 249L271 271M249 271L271 249" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="260" cy="260" r="7" fill="currentColor" />
        {markets.map(({ name, x, y }, index) => {
          const color = index % 2 ? "var(--color-secondary-accent)" : "currentColor";
          return (
            <g key={name}>
              <circle cx={x} cy={y} r="23" fill={color} fillOpacity="0.07" />
              <circle cx={x} cy={y} r="10" fill="var(--color-dark-hero)" stroke={color} strokeOpacity="0.55" />
              <circle cx={x} cy={y} r="3.5" fill={color} />
              <rect x={x - 51} y={y + 22} width="102" height="32" rx="8" fill="var(--color-dark-hero)" stroke="white" strokeOpacity="0.12" />
              <text x={x} y={y + 43} textAnchor="middle" fill="white" fontSize="14" fontWeight="500">{name}</text>
            </g>
          );
        })}
      </svg>
    </figure>
  );
}
