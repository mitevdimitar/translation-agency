const benefits = [
  {
    title: "Regional Expertise",
    description:
      "Navigate the linguistic and cultural nuances of Balkan markets with localization tailored to local audiences.",
    illustration: "regional",
    borderClass: "border-[#CBE9E2]",
  },
  {
    title: "Technology-Driven Workflows",
    description:
      "From software interfaces to multilingual content, we use modern localization tools and efficient processes to keep projects organized and scalable.",
    illustration: "workflow",
    borderClass: "border-[#D4DEFF]",
  },
  {
    title: "Quality-Focused Delivery",
    description:
      "A structured approach to translation, review, and quality assurance helps maintain consistency across languages, channels, and markets.",
    illustration: "quality",
    borderClass: "border-[#D8E2EC]",
  },
] as const;

export default function ValueProposition() {
  return (
    <section
      aria-labelledby="value-proposition-heading"
      className="bg-page py-20 text-primary-text sm:py-24 lg:py-32"
    >
      <div className="site-container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold tracking-[0.16em] sm:text-sm">
            <span
              aria-hidden="true"
              className="mx-auto mb-5 block h-1 w-9 rounded-full bg-teal-accent"
            />
            WHY WORK WITH US
          </p>
          <h2
            id="value-proposition-heading"
            className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.035em] sm:text-4xl lg:text-5xl"
          >
            Localization built for cross-border growth.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            Translation is only the beginning. We help businesses communicate
            naturally across Balkan markets by combining regional understanding,
            technology, and a structured approach to localization.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {benefits.map(
            ({ title, description, illustration, borderClass }, index) => (
              <article
                key={title}
                className={`${borderClass} flex flex-col overflow-hidden rounded-2xl border bg-(--color-card) hover:border-teal-accent motion-safe:transition-colors motion-safe:duration-200`}
              >
                <div
                  className={`${borderClass} relative flex h-44 shrink-0 items-center justify-center overflow-hidden border-b text-primary-text`}
                >
                  <span
                    aria-hidden="true"
                    className="absolute top-5 left-6 font-mono text-xs tracking-wider text-primary-text/70"
                  >
                    0{index + 1}
                  </span>
                  <span
                    aria-hidden="true"
                    className="absolute top-5 right-6 flex gap-1.5"
                  >
                    <span className="size-1 bg-primary-text/40" />
                    <span className="size-1 bg-primary-text/20" />
                    <span className="size-1 bg-primary-text/10" />
                  </span>
                  <CardIllustration variant={illustration} />
                </div>
                <div className="flex-1 p-6 sm:p-7">
                  <h3 className="max-w-64 text-xl font-semibold leading-snug tracking-tight">
                    {title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-slate-600">
                    {description}
                  </p>
                </div>
              </article>
            ),
          )}
        </div>
      </div>
    </section>
  );
}

function CardIllustration({
  variant,
}: {
  variant: (typeof benefits)[number]["illustration"];
}) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 320 176"
      fill="none"
      className="h-full w-full max-w-sm"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Shared registration marks keep the three compositions visually related. */}
      <path
        d="M28 145h12m-6-6v12M280 145h12m-6-6v12"
        stroke="currentColor"
        opacity="0.2"
      />
      {variant === "regional" && (
        <>
          <path
            d="m78 107 47-51 40 63 42-60 39 52M78 107l87 12 81-8M125 56l82 3"
            stroke="currentColor"
            strokeOpacity="0.3"
          />
          <path
            d="m78 107 87 12 42-60"
            stroke="var(--color-teal-accent)"
            strokeWidth="2"
          />
          {[
            [78, 107],
            [125, 56],
            [165, 119],
            [207, 59],
            [246, 111],
          ].map(([cx, cy], index) => (
            <g key={cx}>
              <rect
                x={cx - 10}
                y={cy - 10}
                width="20"
                height="20"
                rx="5"
                fill={
                  index === 2 ? "var(--color-dark-hero)" : "var(--color-page)"
                }
                stroke="currentColor"
                strokeOpacity="0.35"
              />
              <circle cx={cx} cy={cy} r="3" fill="var(--color-teal-accent)" />
            </g>
          ))}
        </>
      )}
      {variant === "workflow" && (
        <>
          <path d="M69 96h182" stroke="currentColor" strokeOpacity="0.25" />
          <path
            d="m109 92 4 4-4 4m98-8 4 4-4 4"
            stroke="currentColor"
            strokeOpacity="0.5"
          />
          {[46, 137, 228].map((x, index) => (
            <g key={x}>
              <rect
                x={x}
                y="72"
                width="46"
                height="48"
                rx="8"
                fill="var(--color-page)"
                stroke="currentColor"
                strokeOpacity="0.25"
              />
              {index === 0 ? (
                <path
                  d="M59 86h20M59 93h14M59 100h18M59 107h10"
                  stroke="var(--color-primary-text)"
                  strokeOpacity="0.6"
                />
              ) : index === 1 ? (
                <path
                  d="m154 88-7 8 7 8m12-16 7 8-7 8"
                  stroke="var(--color-secondary-accent)"
                  strokeWidth="2"
                />
              ) : (
                <path
                  d="m240 96 7 7 14-15"
                  stroke="var(--color-teal-accent)"
                  strokeWidth="2"
                />
              )}
            </g>
          ))}
          <circle cx="103" cy="96" r="3" fill="var(--color-dark-hero)" />
        </>
      )}
      {variant === "quality" && (
        <>
          <rect
            x="100"
            y="44"
            width="132"
            height="82"
            rx="7"
            fill="var(--color-teal-accent)"
            fillOpacity="0.12"
            stroke="currentColor"
            strokeOpacity="0.2"
          />
          <rect
            x="89"
            y="55"
            width="132"
            height="82"
            rx="7"
            fill="var(--color-page)"
            stroke="currentColor"
            strokeOpacity="0.25"
          />
          <rect
            x="78"
            y="66"
            width="132"
            height="82"
            rx="7"
            fill="white"
            stroke="currentColor"
            strokeOpacity="0.4"
          />
          <path
            d="M94 84h45M94 92h29"
            stroke="currentColor"
            strokeOpacity="0.35"
          />
          <path
            d="M94 112h99M94 121h75M94 130h86"
            stroke="currentColor"
            strokeOpacity="0.15"
          />
          <path
            d="m164 87 8 8 15-17"
            stroke="var(--color-teal-accent)"
            strokeWidth="3"
          />
          <path
            d="M232 82v54h-11"
            stroke="currentColor"
            strokeOpacity="0.25"
            strokeDasharray="2 4"
          />
          <rect
            x="229"
            y="93"
            width="6"
            height="12"
            rx="2"
            fill="var(--color-teal-accent)"
          />
        </>
      )}
    </svg>
  );
}
