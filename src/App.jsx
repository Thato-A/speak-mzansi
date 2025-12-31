import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Offers from "./components/Offers";
import StatsCta from "./components/StatsCta";

function Home() {
  return <div className="p-10">Home Page</div>;
}

function Languages() {
  return <div className="p-10">Languages Page</div>;
}

function Culture() {
  return <div className="p-10">Culture Page</div>;
}

function Destinations() {
  return <div className="p-10">Destinations Page</div>;
}

export default function App() {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/languages" element={<Languages />} />
        <Route path="/culture" element={<Culture />} />
        <Route path="/destinations" element={<Destinations />} />
      </Routes>
      <main className="px-4">
        <Hero />
        <Offers />
        <StatsCta />
      </main>
    </div>
  );
}
