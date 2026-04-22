import logo from "../../assets/logos/logo.svg"
import { Button } from "../ui/Button"

export function Hero() {
  const navItems = [
    "About us",
    "Services",
    "Use Cases",
    "Pricing",
    "Blog"
  ]

  return (
    <div className="flex items-center justify-between">
      <img src={logo} alt="Logo Positivus" style={{ height: "40px" }} />
      
      <nav className="flex items-center gap-8">
        {navItems.map((item) => (
          <a 
            className="no-underline color-black text-h4 font-normal leading-7" 
            href={`#${item.toLowerCase().replace(/\s+/g, "-")}`} 
            key={item}>
              {item}
          </a>
        ))}
        <Button variant="secondary"> Request a quote </Button>
      </nav>
      
    </div>
  )
}