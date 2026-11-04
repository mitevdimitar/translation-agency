import LocalizationWorkflow from "./localization-workflow";

const supportingPoints = [
  {
    title: "Structured Processes",
    description:
      "Clear project stages help keep localization organized from preparation to delivery.",
  },
  {
    title: "Technology-Aware Approach",
    description:
      "We understand the technical context behind websites, software, and multilingual content.",
  },
  {
    title: "Consistency by Design",
    description:
      "Thoughtful terminology management and review processes support consistent results across languages.",
  },
] as const;

export default function TechnologyAdvantage() {
  return (
    <section
      aria-labelledby="technology-heading"
      className="bg-dark-hero py-20 text-white sm:py-24 lg:py-32"
    >
      <div className="site-container grid items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-24">
        <div className="min-w-0">
          <p className="flex items-center gap-3 text-xs font-semibold tracking-[0.16em] text-teal-accent sm:text-sm">
            <span aria-hidden="true" className="size-2 shrink-0 bg-teal-accent" />
            THE TECHNOLOGY ADVANTAGE
          </p>
          <h2
            id="technology-heading"
            className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.035em] sm:text-5xl lg:text-6xl"
          >
            Language expertise. Technical thinking.
          </h2>
          <p className="mt-6 text-xl leading-8 sm:text-2xl sm:leading-9">
            Localization works best when language and technology work together.
          </p>
          <p className="mt-4 text-base leading-8 text-technology-secondary">
            We combine linguistic project management expertise with an
            understanding of digital products and modern workflows to make
            multilingual projects easier to manage.
          </p>
          <ol className="mt-10 space-y-7">
            {supportingPoints.map(({ title, description }, index) => (
              <li key={title} className="flex gap-4 sm:gap-5">
                <span
                  aria-hidden="true"
                  className="pt-1 font-mono text-sm text-teal-accent"
                >
                  0{index + 1}
                </span>
                <div className="min-w-0">
                  <h3 className="text-lg font-semibold leading-7 tracking-tight">
                    {title}
                  </h3>
                  <p className="mt-1 text-base leading-7 text-technology-secondary">
                    {description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
        <LocalizationWorkflow />
      </div>
    </section>
  );
}
