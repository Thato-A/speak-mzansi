import Navbar from "./Navbar";
import Hero from "./Hero";
import Offers from "./Offers";
import StatsCta from "./StatsCta";

export default function App() {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <main className="px-4">
        <Hero />
        <Offers />
        <StatsCta />
      </main>
    </div>
  );
}
