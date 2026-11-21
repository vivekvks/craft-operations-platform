export default function Header() {
  return (
    <header className="fixed left-64 right-0 top-0 z-10 h-16 border-b border-white/10 bg-[#090c11]/95 backdrop-blur">
      <div className="flex h-full items-center justify-between px-7">
        <div>
          <div className="text-[10px] font-medium uppercase tracking-[0.18em] text-slate-600">
            CRAFT / COMMAND CENTER
          </div>

          <h1 className="mt-0.5 text-sm font-semibold text-white">
            Command Center
          </h1>

          <p className="text-[11px] text-slate-500">
            Unified operational overview
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            className="rounded-lg border border-white/10 bg-[#11151d] px-3 py-2 text-xs text-slate-400 transition hover:border-white/20 hover:text-white"
          >
            Search
          </button>

          <button
            type="button"
            className="rounded-lg border border-white/10 bg-[#11151d] px-3 py-2 text-xs text-slate-400 transition hover:border-white/20 hover:text-white"
          >
            Alerts
          </button>

          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-500 text-[11px] font-semibold text-white">
            VS
          </div>
        </div>
      </div>
    </header>
  )
}