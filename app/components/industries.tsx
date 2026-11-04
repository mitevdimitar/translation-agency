import IndustryIllustration from "./industry-illustration";

const industries = [
  {
    title: "Technology & SaaS",
    description:
      "From user interfaces to support content, we help digital products communicate clearly across languages.",
    visual: "technology",
  },
  {
    title: "E-commerce & Retail",
    description:
      "Make product information, online stores, and customer experiences feel natural in every target market.",
    visual: "retail",
  },
  {
    title: "Manufacturing & Industry",
    description:
      "Translate technical information with attention to terminology, clarity, and consistency.",
    visual: "manufacturing",
  },
  {
    title: "Marketing & Digital Agencies",
    description:
      "Adapt campaigns, brand messaging, and creative content while preserving the intent behind every word.",
    visual: "marketing",
  },
] as const;

export default function Industries() {
  return (
    <section
      aria-labelledby="industries-heading"
      className="bg-page py-20 text-primary-text sm:py-24 lg:py-32"
    >
      <div className="site-container">
        <p className="flex items-center gap-3 text-xs font-semibold tracking-[0.16em] sm:text-sm">
          <span aria-hidden="true" className="size-2 shrink-0 bg-teal-accent" />
          INDUSTRIES
        </p>
        <div className="mt-5 grid gap-6 lg:grid-cols-2 lg:items-end lg:gap-16">
          <h2
            id="industries-heading"
            className="max-w-2xl text-4xl font-semibold leading-tight tracking-[-0.035em] sm:text-5xl lg:text-6xl"
          >
            Built around your business.
          </h2>
          <p className="max-w-xl text-base leading-8 text-market-secondary sm:text-lg">
            Different industries have different language needs. We tailor our
            localization approach to your content, audience, and business goals.
          </p>
        </div>
        <div className="mt-12 grid gap-x-8 gap-y-12 md:grid-cols-2 lg:mt-16 lg:gap-x-12 lg:gap-y-16">
          {industries.map(({ title, description, visual }, index) => (
            <article key={title} className="min-w-0">
              {/* Keep this media slot when replacing illustrations with approved images. */}
              <div className="relative aspect-[8/5] overflow-hidden bg-market-background">
                <IndustryIllustration variant={visual} />
              </div>
              <div className="mt-6 flex items-start gap-4 border-t border-market-divider pt-5 sm:gap-5">
                <span
                  aria-hidden="true"
                  className="shrink-0 pt-1 font-mono text-sm text-market-secondary"
                >
                  0{index + 1}
                </span>
                <div className="min-w-0">
                  <h3 className="text-xl font-semibold leading-7 tracking-tight lg:text-2xl lg:leading-8">
                    {title}
                  </h3>
                  <p className="mt-3 max-w-lg text-base leading-7 text-market-secondary">
                    {description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
