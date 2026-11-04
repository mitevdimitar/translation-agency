type IndustryVariant = "technology" | "retail" | "manufacturing" | "marketing";

export default function IndustryIllustration({
  variant,
}: {
  variant: IndustryVariant;
}) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 640 400"
      fill="none"
      className="absolute inset-0 h-full w-full"
    >
      {variant === "technology" && <TechnologyComposition />}
      {variant === "retail" && <RetailComposition />}
      {variant === "manufacturing" && <ManufacturingComposition />}
      {variant === "marketing" && <MarketingComposition />}
    </svg>
  );
}

function TechnologyComposition() {
  return (
    <>
      <path fill="var(--color-dark-hero)" d="M0 0h640v400H0z" />
      <g stroke="var(--color-workflow-border)">
        {[80, 160, 240, 320, 400, 480, 560].map((x) => (
          <path key={x} d={`M${x} 0v400`} />
        ))}
        {[80, 160, 240, 320].map((y) => (
          <path key={y} d={`M0 ${y}h640`} />
        ))}
      </g>
      <rect x="80" y="64" width="424" height="264" rx="4" fill="var(--color-workflow-panel)" stroke="var(--color-market-secondary)" />
      <path d="M80 104h424M176 104v224" stroke="var(--color-workflow-border)" />
      <circle cx="102" cy="84" r="4" fill="var(--color-teal-accent)" />
      <path d="M118 84h44M102 132h48M102 156h32M102 180h40" stroke="var(--color-technology-secondary)" strokeWidth="4" />
      <rect x="200" y="128" width="128" height="72" fill="var(--color-secondary-accent)" fillOpacity="0.15" />
      <path d="m238 152-12 12 12 12m52-24 12 12-12 12m-19-30-12 40" stroke="var(--color-secondary-accent)" strokeWidth="3" />
      <path d="M352 140h120M352 156h88M352 180h64M200 232h88M200 252h64M200 284h120" stroke="var(--color-technology-secondary)" strokeOpacity="0.5" strokeWidth="5" />
      <rect x="354" y="218" width="208" height="110" rx="4" fill="var(--color-teal-accent)" />
      <path d="M378 246h80M378 263h52" stroke="var(--color-dark-hero)" strokeWidth="5" />
      <path d="M378 304v-16m22 16v-26m22 26v-12m22 12v-38m22 38v-22m22 22v-46m22 46v-34m22 34v-58" stroke="var(--color-dark-hero)" strokeWidth="8" />
    </>
  );
}

function RetailComposition() {
  return (
    <>
      <path fill="var(--color-market-background)" d="M0 0h640v400H0z" />
      <path d="M0 316h640M48 0v400M592 0v400" stroke="var(--color-market-divider)" />
      <rect x="80" y="62" width="272" height="270" fill="var(--color-page)" stroke="var(--color-market-divider)" />
      <path d="M100 82h232v188H100z" fill="var(--color-teal-accent)" fillOpacity="0.18" />
      <path d="M166 144h100l12 104H154z" fill="var(--color-teal-accent)" />
      <path d="M194 151v-21a22 22 0 0 1 44 0v21" stroke="var(--color-primary-text)" strokeWidth="3" />
      <path d="M104 294h112M104 310h64" stroke="var(--color-market-secondary)" strokeWidth="4" />
      <rect x="376" y="94" width="184" height="238" fill="var(--color-page)" stroke="var(--color-market-divider)" />
      <path d="M392 110h152v160H392z" fill="var(--color-secondary-accent)" fillOpacity="0.15" />
      <path d="m423 161 45-24 45 24v67l-45 24-45-24z" fill="var(--color-secondary-accent)" />
      <path d="m423 161 45 24 45-24m-45 24v67m-23-103 45 24v22" stroke="var(--color-primary-text)" strokeOpacity="0.65" strokeWidth="2" />
      <path d="M396 294h100M396 310h56" stroke="var(--color-market-secondary)" strokeWidth="4" />
      <circle cx="304" cy="302" r="8" fill="var(--color-teal-accent)" />
      <circle cx="524" cy="302" r="8" fill="var(--color-secondary-accent)" />
    </>
  );
}

function ManufacturingComposition() {
  return (
    <>
      <path fill="var(--color-primary-text)" d="M0 0h640v400H0z" />
      <g stroke="var(--color-technology-secondary)" strokeOpacity="0.15">
        {[40, 80, 120, 160, 200, 240, 280, 320, 360].map((y) => (
          <path key={y} d={`M0 ${y}h640`} />
        ))}
        {[40, 80, 120, 160, 200, 240, 280, 320, 360, 400, 440, 480, 520, 560, 600].map((x) => (
          <path key={x} d={`M${x} 0v400`} />
        ))}
      </g>
      <g stroke="var(--color-technology-secondary)">
        <path d="M112 80v240m-8-240h16m-16 240h16M160 348h240m-240-8v16m240-16v16" />
        <path d="M144 200h272M280 64v272" strokeDasharray="6 6" />
        <circle cx="280" cy="200" r="120" />
        <circle cx="280" cy="200" r="88" strokeDasharray="3 7" />
        <path d="m280 100 87 50v100l-87 50-87-50V150z" fill="var(--color-workflow-panel)" stroke="var(--color-teal-accent)" strokeWidth="2" />
        <circle cx="280" cy="200" r="52" strokeWidth="2" />
        <circle cx="280" cy="200" r="32" stroke="var(--color-teal-accent)" />
        <path d="M367 150h81l24-24h80M367 250h81l24 24h80" />
      </g>
      <g fill="var(--color-teal-accent)">
        <circle cx="280" cy="124" r="5" />
        <circle cx="214" cy="238" r="5" />
        <circle cx="346" cy="238" r="5" />
      </g>
      <path d="M480 110h40M480 258h56M480 292h32" stroke="var(--color-technology-secondary)" strokeWidth="4" />
    </>
  );
}

function MarketingComposition() {
  return (
    <>
      <path fill="var(--color-market-background)" d="M0 0h640v400H0z" />
      <path d="M56 48h16m-8-8v16M568 352h16m-8-8v16" stroke="var(--color-market-secondary)" />
      <g transform="rotate(-8 226 200)">
        <path d="M100 56h252v284H100z" fill="var(--color-primary-text)" />
        <path d="M124 82h64M124 98h40" stroke="var(--color-page)" strokeWidth="4" />
        <circle cx="226" cy="198" r="68" fill="var(--color-teal-accent)" />
        <path d="m226 130 68 136H158z" fill="var(--color-secondary-accent)" />
        <path d="M124 298h128M124 314h80" stroke="var(--color-page)" strokeWidth="5" />
      </g>
      <g transform="rotate(6 434 212)">
        <path d="M334 94h200v236H334z" fill="var(--color-page)" stroke="var(--color-market-divider)" />
        <path d="M354 114h160v132H354z" fill="var(--color-secondary-accent)" />
        <circle cx="434" cy="180" r="46" fill="var(--color-primary-text)" />
        <path d="M434 134a46 46 0 0 1 0 92z" fill="var(--color-teal-accent)" />
        <path d="M354 270h136M354 288h100" stroke="var(--color-primary-text)" strokeWidth="5" />
        <path d="M354 308h48" stroke="var(--color-market-secondary)" strokeWidth="3" />
      </g>
      <path d="M480 340h24v24h-24z" fill="var(--color-primary-text)" />
      <path d="M512 340h24v24h-24z" fill="var(--color-teal-accent)" />
      <path d="M544 340h24v24h-24z" fill="var(--color-secondary-accent)" />
    </>
  );
}
