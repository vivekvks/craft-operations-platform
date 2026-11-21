type SidebarItem = {
  label: string;
  icon: string;
};

const items: SidebarItem[] = [
  { label: "Command Center", icon: "⌂" },
  { label: "Operations", icon: "○" },
  { label: "Incidents", icon: "△" },
  { label: "Live Map", icon: "⌖" },
  { label: "Analytics", icon: "▥" },
];

export default function Sidebar() {
  return (
    <aside className="fixed inset-y-0 left-0 z-20 flex w-64 flex-col border-r border-white/10 bg-[#090c11]">
      <div className="flex h-16 items-center gap-3 border-b border-white/10 px-5">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/15 bg-[#121722] text-sm font-bold text-white">
          C
        </div>

        <div>
          <div className="text-sm font-semibold tracking-wide text-white">
            CRAFT
          </div>
          <div className="text-[10px] text-slate-500">Operations Platform</div>
        </div>
      </div>

      <nav className="flex-1 space-y-1 px-3 py-5">
        {items.map((item, index) => (
          <button
            key={item.label}
            type="button"
            className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm transition ${
              index === 0
                ? "bg-[#1b202a] text-white"
                : "text-slate-500 hover:bg-white/5 hover:text-slate-200"
            }`}
          >
            <span className="w-5 text-center text-xs">{item.icon}</span>
            <span>{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="border-t border-white/10 px-5 py-4">
        <div className="flex items-center gap-2 text-xs text-slate-500">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          All systems operational
        </div>
      </div>
    </aside>
  );
}
