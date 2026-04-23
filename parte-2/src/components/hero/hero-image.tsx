import { ImageWithFallback } from "../image-with-fallback";

export function HeroImage() {
  return (
    <div className="mt-20 max-w-300 mx-auto">
      <div className="relative rounded-xl overflow-hidden border border-white/8 bg-linear-to-br from-white/8 to-white/2">
        <div className="aspect-video relative">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1660616246653-e2c57d1077b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxweXRob24lMjBwcm9ncmFtbWluZyUyMGNvZGUlMjBzY3JlZW58ZW58MXx8fHwxNzc2OTA2ODY4fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Python code editor"
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-linear-to-t from-[#0A0A0A] via-transparent to-transparent"></div>
        </div>

        <div className="absolute bottom-6 left-6 flex items-center gap-3 px-4 py-3 bg-black/60 backdrop-blur-xl border border-white/8 rounded-lg">
          <div className="flex -space-x-2">
            <div className="w-8 h-8 rounded-full bg-linear-to-br from-blue-400 to-blue-600 border-2 border-black"></div>
            <div className="w-8 h-8 rounded-full bg-linear-to-br from-purple-400 to-purple-600 border-2 border-black"></div>
            <div className="w-8 h-8 rounded-full bg-linear-to-br from-emerald-400 to-emerald-600 border-2 border-black"></div>
          </div>
          <div>
            <div className="text-sm font-medium text-white">
              20.000+ alunos ativos
            </div>
            <div className="text-xs text-white/50">Aprendendo agora</div>
          </div>
        </div>

        <div className="absolute top-6 right-6 px-4 py-3 bg-black/60 backdrop-blur-xl border border-white/8 rounded-lg">
          <div className="text-xs text-white/50 mb-1">Taxa de conclusão</div>
          <div className="text-2xl font-bold text-emerald-400">87%</div>
        </div>
      </div>
    </div>
  );
}
