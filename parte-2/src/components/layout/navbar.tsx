import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="border-b border-white/8 backdrop-blur-sm relative">
      <div className="mx-auto max-w-350 px-8 py-5">
        <div className="flex items-center justify-between">
          
          <div className="text-white text-xl font-semibold">Axion</div>

          <div className="hidden md:flex items-center gap-8">
            <a className="text-white/60 hover:text-white transition-colors">
              Cursos
            </a>
            <a className="text-white/60 hover:text-white transition-colors">
              Projetos
            </a>
            <a className="text-white/60 hover:text-white transition-colors">
              Comunidade
            </a>
            <button className="px-5 py-2 bg-white text-black rounded-lg hover:bg-white/90 transition-colors">
              Entrar
            </button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-md transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-6 px-8 py-6">
          <a
            className="text-white/70 hover:text-white transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Cursos
          </a>
          <a
            className="text-white/70 hover:text-white transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Projetos
          </a>
          <a
            className="text-white/70 hover:text-white transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Comunidade
          </a>
          <button className="w-full px-5 py-2 bg-white text-black rounded-lg hover:bg-white/90 transition-colors">
            Entrar
          </button>
        </div>
      </div>
    </nav>
  );
}