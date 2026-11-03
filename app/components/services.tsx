const services = [
  {
    title: "Translation & Editing",
    description:
      "Clear, accurate translation and careful editing for business documents, corporate communications, and everyday content.",
  },
  {
    title: "Website Localization",
    description:
      "Adapt your website, landing pages, and digital content to create natural, relevant experiences for local audiences.",
  },
  {
    title: "Software & App Localization",
    description:
      "Make software, mobile apps, and digital products feel native through thoughtful localization of interfaces and user experiences.",
  },
  {
    title: "Marketing & Creative Localization",
    description:
      "Preserve your brand's voice while adapting campaigns, messaging, and creative content for different markets.",
  },
  {
    title: "Technical Translation",
    description:
      "Communicate complex information clearly with specialized translation for documentation, manuals, and technical materials.",
  },
  {
    title: "Linguistic Quality Assurance",
    description:
      "Improve consistency and usability through terminology review, linguistic checks, and localization quality assurance.",
  },
] as const;

export default function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="bg-page py-20 text-primary-text sm:py-24 lg:py-32"
    >
      <div className="site-container">
        <p className="flex items-center gap-3 text-xs font-semibold tracking-[0.16em] sm:text-sm">
          <span aria-hidden="true" className="size-2 bg-teal-accent" />
          WHAT WE DO
        </p>
        <h2
          id="services-heading"
          className="mt-5 max-w-3xl text-4xl font-semibold leading-tight tracking-[-0.035em] sm:text-5xl lg:text-6xl"
        >
          Language solutions for every touchpoint.
        </h2>
        <p className="mt-6 max-w-2xl text-base leading-8 text-market-secondary sm:text-lg">
          From business communication to digital products, we help international
          companies connect with local audiences through translation and
          localization tailored to their goals.
        </p>
        <div className="mt-12 grid gap-px border-y border-market-divider bg-market-divider md:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {services.map(({ title, description }, index) => (
            <article
              key={title}
              className="min-w-0 bg-page px-5 py-8 hover:bg-[#EAF8F5] motion-safe:transition-colors motion-safe:duration-200 sm:p-8 xl:p-10"
            >
              <span
                aria-hidden="true"
                className="block font-mono text-5xl font-light leading-none tracking-[-0.06em] text-market-secondary"
              >
                0{index + 1}
              </span>
              <h3 className="mt-8 text-xl font-semibold leading-7 tracking-tight md:min-h-14">
                {title}
              </h3>
              <p className="mt-4 text-base leading-7 text-market-secondary">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
