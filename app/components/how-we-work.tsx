const steps = [
  {
    title: "Discover",
    description:
      "We learn about your content, target audiences, languages, and project goals.",
  },
  {
    title: "Plan",
    description:
      "We define the scope, requirements, and workflow to keep the project organized.",
  },
  {
    title: "Localize & Review",
    description:
      "Your content is translated, adapted, and reviewed with attention to accuracy and consistency.",
  },
  {
    title: "Deliver",
    description:
      "We provide the localized content in the agreed format, ready for your next steps.",
  },
] as const;

export default function HowWeWork() {
  return (
    <section
      aria-labelledby="how-we-work-heading"
      className="bg-market-background py-20 text-primary-text sm:py-24 lg:py-28"
    >
      <div className="site-container">
        <p className="flex items-center gap-3 text-xs font-semibold tracking-[0.16em] sm:text-sm">
          <span aria-hidden="true" className="size-2 shrink-0 bg-teal-accent" />
          HOW WE WORK
        </p>
        <h2
          id="how-we-work-heading"
          className="mt-5 max-w-3xl text-4xl font-semibold leading-tight tracking-[-0.035em] sm:text-5xl"
        >
          A clear path from brief to delivery.
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-8 text-market-secondary sm:text-lg">
          A straightforward process built around your content, goals, and target
          markets.
        </p>
        <ol role="list" className="mt-10 lg:mt-12 lg:grid lg:grid-cols-4">
          {steps.map(({ title, description }, index) => (
            <li
              key={title}
              className="relative flex min-w-0 gap-x-5 pb-8 last:pb-0 sm:gap-x-7 lg:block lg:pb-0"
            >
              {/* Each segment joins node centers, including across variable-height mobile steps. */}
              {index < steps.length - 1 && (
                <span
                  aria-hidden="true"
                  className="absolute inset-y-0 left-0 flex w-14 justify-center lg:bottom-auto lg:left-1/2 lg:h-16 lg:w-full lg:items-center"
                >
                  <span className="absolute -bottom-7 top-7 w-0.5 bg-teal-accent/60 lg:static lg:h-0.5 lg:w-full" />
                </span>
              )}
              <span
                aria-hidden="true"
                className={`relative flex size-14 shrink-0 items-center justify-center rounded-full border-2 font-mono text-lg font-medium tracking-tight lg:mx-auto lg:size-16 lg:text-xl ${
                  index === 0
                    ? "border-dark-hero bg-dark-hero text-white"
                    : "border-process-divider bg-market-background text-primary-text"
                }`}
              >
                0{index + 1}
              </span>
              <div className="min-w-0 flex-1 pt-3 lg:mt-6 lg:px-3 lg:pt-0 lg:text-center">
                <h3 className="text-xl font-semibold leading-8 tracking-tight xl:text-2xl">
                  {title}
                </h3>
                <p className="mt-3 max-w-xl text-base leading-7 text-market-secondary lg:mx-auto lg:max-w-64">
                  {description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
