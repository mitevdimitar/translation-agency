const markets = [
  { number: "01", name: "Bulgaria", language: "Bulgarian" },
  { number: "02", name: "Romania", language: "Romanian" },
  { number: "03", name: "Greece", language: "Greek" },
  { number: "04", name: "Serbia", language: "Serbian" },
  { number: "05", name: "Türkiye", language: "Turkish" },
] as const;

export default function MarketCoverage() {
  return (
    <section
      aria-labelledby="markets"
      className="bg-market-background py-20 text-primary-text sm:py-24 lg:py-32"
    >
      <div className="site-container">
        <p className="flex items-center gap-3 text-xs font-semibold tracking-[0.16em] sm:text-sm">
          <span aria-hidden="true" className="h-px w-7 bg-teal-accent" />
          OUR MARKETS
        </p>
        <div className="mt-5 grid gap-6 lg:grid-cols-[1.2fr_1fr] lg:items-end lg:gap-16">
          <h2
            id="markets"
            className="max-w-xl text-4xl font-semibold leading-tight tracking-[-0.035em] sm:text-5xl lg:text-6xl"
          >
            One region. Many local voices.
          </h2>
          <p className="max-w-xl text-base leading-8 text-market-secondary sm:text-lg">
            Every market has its own language, expectations, and cultural nuances.
            We help international businesses adapt their content for audiences
            across Southeast Europe.
          </p>
        </div>
        <ol className="mt-12 border-t border-market-divider lg:mt-16">
          {markets.map(({ number, name, language }) => (
            <li
              key={number}
              className="group relative grid grid-cols-[2rem_minmax(0,1fr)] items-baseline gap-x-4 gap-y-2 border-b border-market-divider py-7 sm:grid-cols-[3rem_minmax(0,1fr)_minmax(8rem,0.4fr)] sm:gap-x-8 sm:py-9 lg:grid-cols-[5rem_minmax(0,1fr)_minmax(10rem,0.4fr)] lg:py-10"
            >
              <span
                aria-hidden="true"
                className="absolute inset-y-7 left-0 w-0.5 bg-teal-accent opacity-0 group-hover:opacity-100 motion-safe:transition-opacity motion-safe:duration-200 sm:inset-y-9 lg:inset-y-10"
              />
              <span className="pl-2 font-mono text-sm text-market-secondary group-hover:text-primary-text motion-safe:transition-colors motion-safe:duration-200">
                {number}
              </span>
              <span className="text-3xl font-medium leading-tight tracking-[-0.035em] sm:text-4xl lg:text-5xl">
                {name}
              </span>
              <span className="col-start-2 text-base text-market-secondary sm:col-start-auto sm:text-lg">
                {language}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
