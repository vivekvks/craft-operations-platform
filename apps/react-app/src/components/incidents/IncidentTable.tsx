export type Incident = {
  id: string;
  title: string;
  severity: "Critical" | "High" | "Medium" | "Low";
  status: "Investigating" | "Monitoring" | "Resolved";
  service: string;
  team: string;
  created: string;
};

type IncidentTableProps = {
  incidents: Incident[];
  selectedIncident: Incident | null;
  onSelect: (incident: Incident) => void;
};

function severityClass(severity: Incident["severity"]) {
  switch (severity) {
    case "Critical":
      return "border-red-500/20 bg-red-500/10 text-red-400";
    case "High":
      return "border-orange-500/20 bg-orange-500/10 text-orange-400";
    case "Medium":
      return "border-amber-500/20 bg-amber-500/10 text-amber-400";
    default:
      return "border-slate-500/20 bg-slate-500/10 text-slate-400";
  }
}

function statusClass(status: Incident["status"]) {
  switch (status) {
    case "Investigating":
      return "text-indigo-400";
    case "Monitoring":
      return "text-amber-400";
    case "Resolved":
      return "text-emerald-400";
  }
}

export default function IncidentTable({
  incidents,
  selectedIncident,
  onSelect,
}: IncidentTableProps) {
  return (
    <div className="overflow-hidden rounded-xl border border-white/10 bg-[#10141c]">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[850px] text-left">
          <thead>
            <tr className="border-b border-white/10 text-[10px] uppercase tracking-wider text-slate-600">
              <th className="px-5 py-4 font-medium">Incident</th>
              <th className="px-5 py-4 font-medium">Severity</th>
              <th className="px-5 py-4 font-medium">Status</th>
              <th className="px-5 py-4 font-medium">Service</th>
              <th className="px-5 py-4 font-medium">Team</th>
              <th className="px-5 py-4 font-medium">Created</th>
            </tr>
          </thead>

          <tbody>
            {incidents.map((incident) => {
              const selected = selectedIncident?.id === incident.id;

              return (
                <tr
                  key={incident.id}
                  onClick={() => onSelect(incident)}
                  className={`cursor-pointer border-b border-white/5 transition last:border-0 ${
                    selected ? "bg-indigo-500/[0.07]" : "hover:bg-white/[0.025]"
                  }`}
                >
                  <td className="px-5 py-4">
                    <div className="font-medium text-sm text-slate-200">
                      {incident.title}
                    </div>

                    <div className="mt-1 text-[10px] text-slate-600">
                      {incident.id}
                    </div>
                  </td>

                  <td className="px-5 py-4">
                    <span
                      className={`inline-flex rounded-md border px-2 py-1 text-[10px] font-medium ${severityClass(
                        incident.severity
                      )}`}
                    >
                      {incident.severity}
                    </span>
                  </td>

                  <td className="px-5 py-4">
                    <span
                      className={`text-xs font-medium ${statusClass(
                        incident.status
                      )}`}
                    >
                      {incident.status}
                    </span>
                  </td>

                  <td className="px-5 py-4 text-xs text-slate-400">
                    {incident.service}
                  </td>

                  <td className="px-5 py-4 text-xs text-slate-400">
                    {incident.team}
                  </td>

                  <td className="px-5 py-4 text-xs text-slate-600">
                    {incident.created}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {incidents.length === 0 && (
        <div className="px-5 py-16 text-center">
          <div className="text-sm text-slate-500">No incidents found</div>

          <div className="mt-1 text-xs text-slate-700">
            Try changing your search or filters.
          </div>
        </div>
      )}
    </div>
  );
}
