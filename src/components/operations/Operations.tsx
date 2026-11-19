import { useState } from "react";

const Operations = () => {
  const operations = [
    {
      id: "OP-1042",
      name: "North Sector Deployment",
      location: "Sector 12",
      team: "Alpha Team",
      status: "Active",
      priority: "High",
      started: "08:42",
    },
    {
      id: "OP-1041",
      name: "Warehouse Inspection",
      location: "West Industrial Zone",
      team: "Bravo Team",
      status: "Active",
      priority: "Medium",
      started: "09:15",
    },
    {
      id: "OP-1040",
      name: "Perimeter Security",
      location: "East Gate",
      team: "Charlie Team",
      status: "Standby",
      priority: "Low",
      started: "10:05",
    },
    {
      id: "OP-1039",
      name: "Emergency Response",
      location: "Central District",
      team: "Delta Team",
      status: "Completed",
      priority: "Critical",
      started: "06:30",
    },
  ];

    const [activeFilter, setActiveFilter] = useState("All");
    
    

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-white">Operations</h1>
        <p className="mt-1 text-sm text-slate-400">
          Monitor and manage active field operations.
        </p>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex gap-2">
          {["All", "Active", "Standby", "Completed"].map((filter) => (
            <button
              key={filter}
              className="rounded-lg border border-slate-700 bg-slate-900 px-4 py-2 text-sm text-slate-300 transition hover:bg-slate-800"
            >
              {filter}
            </button>
          ))}
        </div>

        <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-500">
          + New Operation
        </button>
      </div>

      <div className="overflow-hidden rounded-xl border border-slate-800 bg-slate-900">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="border-b border-slate-800 bg-slate-950">
              <tr>
                <th className="px-5 py-4 text-xs font-medium uppercase tracking-wider text-slate-500">
                  Operation
                </th>
                <th className="px-5 py-4 text-xs font-medium uppercase tracking-wider text-slate-500">
                  Location
                </th>
                <th className="px-5 py-4 text-xs font-medium uppercase tracking-wider text-slate-500">
                  Team
                </th>
                <th className="px-5 py-4 text-xs font-medium uppercase tracking-wider text-slate-500">
                  Status
                </th>
                <th className="px-5 py-4 text-xs font-medium uppercase tracking-wider text-slate-500">
                  Priority
                </th>
                <th className="px-5 py-4 text-xs font-medium uppercase tracking-wider text-slate-500">
                  Started
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-800">
              {operations.map((operation) => (
                <tr
                  key={operation.id}
                  className="transition hover:bg-slate-800/40"
                >
                  <td className="px-5 py-4">
                    <div className="font-medium text-white">
                      {operation.name}
                    </div>
                    <div className="mt-1 text-xs text-slate-500">
                      {operation.id}
                    </div>
                  </td>

                  <td className="px-5 py-4 text-sm text-slate-300">
                    {operation.location}
                  </td>

                  <td className="px-5 py-4 text-sm text-slate-300">
                    {operation.team}
                  </td>

                  <td className="px-5 py-4">
                    <span className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300">
                      {operation.status}
                    </span>
                  </td>

                  <td className="px-5 py-4 text-sm text-slate-300">
                    {operation.priority}
                  </td>

                  <td className="px-5 py-4 text-sm text-slate-400">
                    {operation.started}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Operations;
