import AboutUs from "./components/about-us";
import FinalCta from "./components/final-cta";
import Hero from "./components/hero";
import HowWeWork from "./components/how-we-work";
import Industries from "./components/industries";
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
      <Industries />
      <HowWeWork />
      <AboutUs />
      <FinalCta />
    </main>
  );
}
