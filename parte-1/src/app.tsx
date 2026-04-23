import { Cta } from "./components/sections/cta";
import { Hero } from "./components/sections/hero";
import { Services } from "./components/sections/services";
import { StudiesCases } from "./components/sections/studies-cases";

export function App() {
  return (
    <div className="max-w-360 mx-auto px-4 sm:px-6 md:px-8 lg:px-15 py-6 sm:py-8 md:py-10 lg:py-15">
      <Hero />
      <Services />
      <Cta />
      <StudiesCases />
    </div>
  );
}
