import Hero from "./components/hero";
import MarketCoverage from "./components/market-coverage";
import Services from "./components/services";
import TechnologyAdvantage from "./components/technology-advantage";
import ValueProposition from "./components/value-proposition";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <ValueProposition />
      <MarketCoverage />
      <Services />
      <TechnologyAdvantage />
    </main>
  );
}
