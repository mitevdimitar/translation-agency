export default function FinalCta() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="bg-page pb-20 text-white sm:pb-24 lg:pb-32"
    >
      <div className="site-container">
        <div className="rounded-2xl bg-dark-hero px-6 py-10 sm:p-10 lg:p-16">
          <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="min-w-0 lg:col-span-8">
              <p className="flex items-center gap-3 text-xs font-semibold tracking-widest text-teal-accent sm:text-sm">
                <span aria-hidden="true" className="h-px w-7 shrink-0 bg-teal-accent" />
                LET&apos;S WORK TOGETHER
              </p>
              <h2
                id="contact-heading"
                className="mt-5 max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-balance sm:text-4xl lg:text-5xl"
              >
                Ready to speak your next market&apos;s language?
              </h2>
              <p className="mt-6 max-w-xl text-base leading-8 text-technology-secondary sm:text-lg">
                Tell us what you&apos;re working on and which markets you want to
                reach. We&apos;ll help you explore the right localization approach.
              </p>
            </div>
            <div className="min-w-0 lg:col-span-4">
              {/* TODO (Task 17): Replace this placeholder with a link to the Contact page. */}
              <button
                type="button"
                disabled
                className="inline-flex min-h-13 w-full cursor-not-allowed items-center justify-center rounded-lg bg-teal-accent px-6 py-3.5 text-sm font-semibold text-dark-hero sm:w-auto lg:w-full"
              >
                Start a Project
              </button>
              <p className="mt-4 text-sm leading-6 text-technology-secondary lg:text-center">
                Translation. Localization. Regional expertise.
              </p>
            </div>
          </div>
          <p className="mt-10 border-t border-workflow-border pt-6 text-sm leading-7 text-technology-secondary lg:mt-12">
            Bulgaria · Romania · Greece · Serbia · Türkiye
          </p>
        </div>
      </div>
    </section>
  );
}
