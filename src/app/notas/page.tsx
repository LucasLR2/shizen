export default function NotasPage() {
  return (
    <div className="flex flex-col gap-6 text-white">
      <div className="flex justify-between items-center border-b border-[#262626] pb-4">
        <div>
          <h1 className="font-['Arima'] text-2xl font-bold text-white tracking-wide">
            Notas
          </h1>
          <p className="text-sm text-zinc-400">
            Gestión rápida de apuntes y recordatorios
          </p>
        </div>

        <button className="px-4 py-2 rounded-lg bg-[#0d0d0d] border border-[#e63946] text-[#e63946] text-sm font-semibold shadow-[0_0_10px_rgba(230,57,70,0.3)] hover:bg-[#e63946] hover:text-white transition-all">
          + Nueva Nota
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[1, 2, 3].map((id) => (
          <div
            key={id}
            className="p-4 rounded-xl bg-[#0d0d0d] border border-[#262626] hover:border-[#e63946]/50 transition-all flex flex-col gap-2 shadow-inner"
          >
            <div className="flex justify-between items-center">
              <span className="text-xs font-mono text-[#e63946]">Nota #{id}</span>
              <span className="text-[10px] text-zinc-500">21 Sept</span>
            </div>
            <h3 className="font-semibold text-zinc-200 text-sm">
              Título de nota de prueba
            </h3>
            <p className="text-xs text-zinc-400 line-clamp-2">
              Contenido de borrador para visualizar la interfaz del módulo de notas...
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}