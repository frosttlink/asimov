import { Hero } from "./components/hero/hero";
import { Navbar } from "./components/layout/navbar";

export function App() {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <Navbar />
      <Hero />
    </div>
  );
}
