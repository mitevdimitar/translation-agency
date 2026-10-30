import Hero from "./components/hero";
import MarketCoverage from "./components/market-coverage";
import ValueProposition from "./components/value-proposition";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <ValueProposition />
      <MarketCoverage />
    </main>
  );
}
