export function Badge() {
  return (
    <div className="flex justify-center mb-8">
      <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/6 border border-white/8 rounded-full">
        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400"></div>
        <span className="text-sm text-white/80">
          O curso mais prático do Brasil
        </span>
      </div>
    </div>
  );
}
