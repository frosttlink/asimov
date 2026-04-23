import { Hero } from "./components/sections/hero";
import { Services } from "./components/sections/services";



export function App() {
  return (
    <div className="max-w-360 mx-auto px-25 py-15">
      <Hero />
      <Services />
    </div>
  );
}
