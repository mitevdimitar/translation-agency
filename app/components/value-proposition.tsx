const benefits = [
  {
    title: "Regional Expertise",
    description:
      "Navigate the linguistic and cultural nuances of Balkan markets with localization tailored to local audiences.",
    motif: (
      <>
        <circle cx="12" cy="12" r="8" />
        <ellipse cx="12" cy="12" rx="3.5" ry="8" />
        <path d="M4 12h16" />
      </>
    ),
  },
  {
    title: "Technology-Driven Workflows",
    description:
      "From software interfaces to multilingual content, we use modern localization tools and efficient processes to keep projects organized and scalable.",
    motif: (
      <>
        <rect x="3" y="3" width="6" height="6" rx="1.5" />
        <rect x="15" y="15" width="6" height="6" rx="1.5" />
        <path d="M9 6h7a2 2 0 0 1 2 2v3M15 18H8a2 2 0 0 1-2-2v-3" />
      </>
    ),
  },
  {
    title: "Quality-Focused Delivery",
    description:
      "A structured approach to translation, review, and quality assurance helps maintain consistency across languages, channels, and markets.",
    motif: (
      <>
        <path d="m12 3 8 3v6c0 4-4 7-8 9-4-2-8-5-8-9V6l8-3Z" />
        <path d="m8.5 12 2.5 2.5 4.5-5" />
      </>
    ),
  },
];

export default function ValueProposition() {
  return (
    <section aria-labelledby="value-proposition-heading" className="bg-page py-20 text-primary-text sm:py-24 lg:py-32">
      <div className="site-container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold tracking-[0.16em] sm:text-sm">
            <span aria-hidden="true" className="mx-auto mb-5 block h-1 w-9 rounded-full bg-teal-accent" />
            WHY WORK WITH US
          </p>
          <h2 id="value-proposition-heading" className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.035em] sm:text-4xl lg:text-5xl">
            Localization built for cross-border growth.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            Translation is only the beginning. We help businesses communicate naturally across Balkan markets by combining regional understanding, technology, and a structured approach to localization.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {benefits.map(({ title, description, motif }) => (
            <article key={title} className="rounded-2xl border border-slate-200 bg-white p-7 hover:border-teal-accent motion-safe:transition-colors sm:p-8">
              <div className="mb-7 flex size-12 items-center justify-center rounded-xl bg-teal-accent/15">
                <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-6 text-primary-text">
                  {motif}
                </svg>
              </div>
              <h3 className="text-xl font-semibold leading-snug tracking-tight">{title}</h3>
              <p className="mt-4 text-base leading-7 text-slate-600">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
