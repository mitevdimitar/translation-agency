import Hero from "./components/hero";
import ValueProposition from "./components/value-proposition";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <ValueProposition />
    </main>
  );
}
