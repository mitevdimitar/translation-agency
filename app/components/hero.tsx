import MarketNetwork from "./market-network";

const focusStyles = "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-accent";

export default function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="relative isolate overflow-hidden bg-dark-hero text-white">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_85%_45%,var(--color-secondary-accent)/10,transparent_55%)]" />
      <div className="site-container">
        <div className="grid items-center gap-12 py-20 sm:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8 lg:py-32 xl:py-36">
          <div className="min-w-0">
            <p className="flex items-center gap-3 text-xs font-semibold tracking-[0.16em] text-teal-accent sm:text-sm">
              <span aria-hidden="true" className="h-px w-7 shrink-0 bg-teal-accent" />
              BALKAN TRANSLATION &amp; LOCALIZATION
            </p>
            <h1 id="hero-heading" className="mt-7 text-[clamp(2.75rem,5.5vw,5.5rem)] font-semibold leading-[1.06] tracking-[-0.045em]">
              <span className="block">Go Global.</span>{" "}
              <span className="block text-teal-accent">Speak Local.</span>
            </h1>
            <p className="mt-7 max-w-lg text-xl font-medium leading-relaxed tracking-tight sm:text-2xl">
              Your partner for entering Balkan markets.
            </p>
            <p className="mt-4 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
              We help international companies adapt their products, websites, and content for audiences across the Balkans — combining linguistic expertise, technology, and a streamlined workflow.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              <a href="#contact" className={`inline-flex min-h-13 items-center justify-center gap-4 rounded-lg bg-teal-accent px-6 py-3.5 text-sm font-semibold text-dark-hero hover:bg-teal-accent/85 motion-safe:transition-colors ${focusStyles}`}>
                Start a Project <span aria-hidden="true">↗</span>
              </a>
              <a href="#services" className={`inline-flex min-h-13 items-center justify-center rounded-lg border border-white/25 px-6 py-3.5 text-sm font-semibold hover:border-white/50 hover:bg-white/5 motion-safe:transition-colors ${focusStyles}`}>
                Explore Our Services
              </a>
            </div>
          </div>
          <MarketNetwork />
        </div>
      </div>
    </section>
  );
}
