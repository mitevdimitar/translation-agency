export default function AboutUs() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="bg-page py-20 text-primary-text sm:py-24 lg:py-32"
    >
      <div className="site-container grid items-center gap-12 lg:grid-cols-12 lg:gap-16 xl:gap-24">
        <div className="min-w-0 lg:col-span-7">
          <p className="flex items-center gap-3 text-xs font-semibold tracking-widest sm:text-sm">
            <span aria-hidden="true" className="size-2 shrink-0 bg-teal-accent" />
            ABOUT US
          </p>
          <h2
            id="about-heading"
            className="mt-5 max-w-2xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl"
          >
            Built at the intersection of language and technology.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-market-secondary sm:text-lg">
            We&apos;re a founder-led translation and localization agency bringing
            together experience in translation project management and software
            engineering.
          </p>
          <p className="mt-4 max-w-2xl text-base leading-8 text-market-secondary sm:text-lg">
            Our approach combines attention to language, an understanding of
            digital products, and structured project coordination — helping
            international businesses communicate naturally with audiences across
            the Balkans.
          </p>
          <p className="mt-8 border-l-2 border-teal-accent pl-5 text-lg font-medium leading-8 tracking-tight">
            Two perspectives. One shared approach.
          </p>
        </div>
        <FoundersIllustration />
      </div>
    </section>
  );
}

function FoundersIllustration() {
  return (
    <div
      aria-hidden="true"
      className="mx-auto w-full min-w-0 max-w-lg lg:col-span-5"
    >
      <div className="grid grid-cols-2 gap-6 border-t border-market-divider pt-5 font-mono text-xs leading-5 text-market-secondary">
        <span>Translation project management</span>
        <span className="text-right">Software engineering</span>
      </div>
      {/* SVG coordinates define scalable artwork, not page layout offsets. */}
      <svg
        aria-hidden="true"
        focusable="false"
        viewBox="0 0 480 400"
        fill="none"
        className="my-6 h-auto w-full"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path
          d="M24 72H456M24 328H456M240 24V376"
          stroke="var(--color-market-divider)"
          strokeDasharray="2 8"
        />
        <path
          d="M40 96C40 64 64 40 96 40H168V256H96C64 256 40 232 40 200Z"
          fill="var(--color-teal-accent)"
          fillOpacity="0.08"
        />
        <path
          d="M312 144H384C416 144 440 168 440 200V304C440 336 416 360 384 360H312Z"
          fill="var(--color-secondary-accent)"
          fillOpacity="0.08"
        />
        {/* An open manuscript: text, an editorial underline, and a margin note. */}
        <g stroke="var(--color-primary-text)" strokeWidth="2">
          <path d="M64 96H136M64 112H120M64 144H144M64 160H104" />
          <path d="M64 192H128M64 208H112" opacity="0.35" />
        </g>
        <path
          d="M60 121Q92 117 124 121M148 140L156 148L172 128"
          stroke="var(--color-teal-accent)"
          strokeWidth="3"
        />
        {/* Two distinct threads meet, then continue on a shared baseline. */}
        <path
          d="M168 96C272 96 168 304 280 304H352"
          stroke="var(--color-teal-accent)"
          strokeWidth="3"
        />
        <path
          d="M352 192H312C208 192 312 304 200 304H128"
          stroke="var(--color-secondary-accent)"
          strokeWidth="3"
        />
        <path
          d="M128 304H352"
          stroke="var(--color-primary-text)"
          strokeWidth="2"
        />
        {/* Connected modules suggest software structure without a dashboard UI. */}
        <g stroke="var(--color-secondary-accent)" strokeWidth="2">
          <path d="M372 212V240H408V268M372 240H336V268" />
          <rect x="352" y="172" width="40" height="40" rx="4" fill="var(--color-page)" />
          <rect x="328" y="268" width="16" height="16" rx="2" fill="var(--color-page)" />
          <rect x="400" y="268" width="16" height="16" rx="2" fill="var(--color-page)" />
        </g>
        <path d="M364 186L370 192L364 198M376 198H382" stroke="var(--color-primary-text)" strokeWidth="2" />
        <circle cx="128" cy="304" r="5" fill="var(--color-teal-accent)" />
        <circle cx="352" cy="304" r="5" fill="var(--color-secondary-accent)" />
        <circle cx="240" cy="304" r="9" fill="var(--color-page)" stroke="var(--color-primary-text)" strokeWidth="2" />
        <path d="M240 328V352M228 352H252" stroke="var(--color-market-divider)" />
      </svg>
      <div className="flex items-center gap-4 border-t border-market-divider pt-5">
        <span className="h-px flex-1 bg-teal-accent" />
        <span className="font-mono text-xs text-market-secondary">Language + technology</span>
        <span className="h-px flex-1 bg-secondary-accent" />
      </div>
    </div>
  );
}
