import { useState } from "react";
import Dashboard from "../dashboard/Dashboard";
import Incidents from "../incidents/Incidents";
import Operations from "../operations/Operations";

type Page =
  | "Command Center"
  | "Operations"
  | "Incidents"
  | "Live Map"
  | "Analytics";

const navigation: Page[] = [
  "Command Center",
  "Operations",
  "Incidents",
  "Live Map",
  "Analytics",
];

function AppShell() {
  const [activePage, setActivePage] = useState<Page>("Command Center");

  const renderContent = () => {
    if (activePage === "Command Center") {
      return <Dashboard />;
    }

    if (activePage === "Incidents") {
      return <Incidents />;
    }


    if (activePage === "Operations") {
      return <Operations />;
    }

    return (
      <section className="rounded-xl border border-white/10 bg-[#10141c] p-8">
        <div className="mb-2 text-[10px] font-medium uppercase tracking-widest text-slate-600">
          CRAFT / {activePage.toUpperCase()}
        </div>

        <h1 className="text-2xl font-semibold tracking-tight text-white">
          {activePage}
        </h1>

        <p className="mt-2 text-sm text-slate-500">
          This workspace is ready for the {activePage.toLowerCase()} module.
        </p>
      </section>
    );
  };

  return (
    <div className="min-h-screen bg-[#07090d] text-white">
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <aside className="relative w-52 shrink-0 border-r border-white/10 bg-[#090c11]">
          {/* Brand */}
          <div className="flex h-16 items-center gap-3 border-b border-white/10 px-4">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-[#121721] text-sm font-semibold">
              C
            </div>

            <div>
              <div className="text-sm font-semibold tracking-wide">CRAFT</div>

              <div className="text-[10px] text-slate-500">
                Operations Platform
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="p-3">
            {navigation.map((item) => {
              const isActive = activePage === item;

              return (
                <button
                  key={item}
                  type="button"
                  onClick={() => setActivePage(item)}
                  className={`mb-1 flex w-full items-center rounded-lg px-3 py-2.5 text-left text-sm transition ${
                    isActive
                      ? "bg-[#1a202b] text-white"
                      : "text-slate-500 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <span
                    className={`mr-3 text-xs ${
                      isActive ? "text-white" : "text-slate-600"
                    }`}
                  >
                    {isActive ? "●" : "○"}
                  </span>

                  {item}
                </button>
              );
            })}
          </nav>

          {/* System Status */}
          <div className="absolute bottom-0 w-full border-t border-white/10 px-4 py-4">
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              All systems operational
            </div>
          </div>
        </aside>

        {/* Main */}
        <main className="min-w-0 flex-1">
          {/* Header */}
          <header className="flex h-16 items-center justify-between border-b border-white/10 px-6">
            <div>
              <div className="text-[10px] font-medium uppercase tracking-widest text-slate-600">
                CRAFT / {activePage.toUpperCase()}
              </div>

              <div className="text-sm font-semibold text-white">
                {activePage}
              </div>

              <div className="text-[10px] text-slate-500">
                Unified operational overview
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                className="rounded-lg border border-white/10 bg-[#11151d] px-3 py-2 text-xs text-slate-300 transition hover:bg-white/5"
              >
                Search
              </button>

              <button
                type="button"
                className="rounded-lg border border-white/10 bg-[#11151d] px-3 py-2 text-xs text-slate-300 transition hover:bg-white/5"
              >
                Alerts
              </button>

              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-500 text-[10px] font-bold">
                VS
              </div>
            </div>
          </header>

          {/* Page Content */}
          <div className="p-6">{renderContent()}</div>
        </main>
      </div>
    </div>
  );
}

export default AppShell;
