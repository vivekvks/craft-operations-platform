export default function OperationalActivity() {
  return (
    <section className="min-h-[360px] rounded-xl border border-white/10 bg-[#10141c] p-5">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-sm font-semibold text-white">
            Operational Activity
          </h3>

          <p className="mt-1 text-xs text-slate-500">
            Real-time activity across the platform
          </p>
        </div>

        <span className="rounded-md border border-emerald-500/20 bg-emerald-500/10 px-2 py-1 text-[10px] text-emerald-400">
          LIVE
        </span>
      </div>

      <div className="mt-8 flex h-56 items-center justify-center rounded-lg border border-dashed border-white/10 bg-[#0b0f15]">
        <div className="text-center">
          <div className="text-sm text-slate-400">Activity visualization</div>

          <div className="mt-1 text-xs text-slate-600">
            Data layer will connect here
          </div>
        </div>
      </div>
    </section>
  );
}
