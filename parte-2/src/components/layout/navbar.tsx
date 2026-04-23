export function Navbar() {
  return (
    <nav className="border-b border-white/8 backdrop-blur-sm">
      <div className="mx-auto max-w-350 px-8 py-5">
        <div className="flex items-center justify-between">
          <div className="text-white text-xl font-semibold">Asimov</div>
          <div className="flex items-center gap-8">
            <a
              href="#"
              className="text-white/60 hover:text-white transition-colors"
            >
              Cursos
            </a>
            <a
              href="#"
              className="text-white/60 hover:text-white transition-colors"
            >
              Projetos
            </a>
            <a
              href="#"
              className="text-white/60 hover:text-white transition-colors"
            >
              Comunidade
            </a>
            <button className="px-5 py-2 bg-white text-black rounded-lg hover:bg-white/90 transition-colors">
              Entrar
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
