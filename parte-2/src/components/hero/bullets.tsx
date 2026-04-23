import { Check } from "lucide-react";

export function Bullets() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-12 max-w-225 mx-auto">
      <div className="flex flex-col items-center text-center p-6 bg-white/3 border border-white/8 rounded-xl">
        <div className="text-2xl font-bold text-white mb-1">40+</div>
        <div className="text-sm text-white/50">
          horas de conteúdo direto ao ponto
        </div>
      </div>

      <div className="flex flex-col items-center text-center p-6 bg-white/3 border border-white/8 rounded-xl">
        <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center mb-2">
          <Check className="w-4 h-4 text-emerald-400" />
        </div>
        <div className="text-sm text-white/50">
          Projetos com Python + IA desde o módulo 1
        </div>
      </div>

      <div className="flex flex-col items-center text-center p-6 bg-white/3 border border-white/8 rounded-xl">
        <div className="text-2xl font-bold text-white mb-1">20k+</div>
        <div className="text-sm text-white/50">alunos na comunidade</div>
      </div>

      <div className="flex flex-col items-center text-center p-6 bg-white/3 border border-white/8 rounded-xl">
        <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center mb-2">
          <Check className="w-4 h-4 text-emerald-400" />
        </div>
        <div className="text-sm text-white/50">
          Certificado reconhecido pelo mercado
        </div>
      </div>
    </div>
  );
}
