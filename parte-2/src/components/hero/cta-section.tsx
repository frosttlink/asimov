import { ArrowRight } from "lucide-react";

export function CtaSection() {
  return (
    <div className="flex items-center justify-center gap-4 pt-4">
      <button className="group px-7 py-3.5 bg-white text-black rounded-lg hover:bg-white/90 transition-all flex items-center gap-2">
        <span>Quero começar agora</span>
        <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
      </button>
      <button className="px-7 py-3.5 bg-white/6 hover:bg-white/10 text-white border border-white/8 rounded-lg transition-all">
        Ver o que vou aprender
      </button>
    </div>
  );
}
