import logo from "../../assets/logos/logo.svg"
import { Button } from "../ui/button"

import { useState } from "react"
import { Menu, X } from "lucide-react"

export function Navbar() { 
  const [isOpen, setIsOpen] = useState(false)
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
      
      <nav className="hidden lg:flex items-center gap-8">
        {navItems.map((item) => (
          <a 
            className="no-underline color-black text-h4 font-normal leading-7 transition-smooth decoration-green hover:underline" 
            href={`#${item.toLowerCase().replace(/\s+/g, "-")}`} 
            key={item}>
              {item}
          </a>
        ))}
        <Button variant="secondary"> Request a quote </Button>
      </nav>

      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden p-2 transition-smooth"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {isOpen && (
        <nav className="absolute top-22 left-0 right-0 bg-white flex flex-col gap-4 p-6 lg:hidden shadow-md">
          {navItems.map((item) => (
            <a 
              className="no-underline color-black text-base font-normal leading-7 transition-smooth decoration-green hover:underline" 
              href={`#${item.toLowerCase().replace(/\s+/g, "-")}`} 
              key={item}
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
          <Button variant="secondary" className="w-full"> Request a quote </Button>
        </nav>
      )}
    </div>
  )
}