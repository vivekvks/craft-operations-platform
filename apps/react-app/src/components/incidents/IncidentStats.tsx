type IncidentStatsProps = {
  incidents: {
    severity: string;
    status: string;
  }[];
};

export default function IncidentStats({ incidents }: IncidentStatsProps) {
  const open = incidents.filter(
    (incident) => incident.status !== "Resolved"
  ).length;

  const critical = incidents.filter(
    (incident) => incident.severity === "Critical"
  ).length;

  const investigating = incidents.filter(
    (incident) => incident.status === "Investigating"
  ).length;

  const resolved = incidents.filter(
    (incident) => incident.status === "Resolved"
  ).length;

  const stats = [
    {
      label: "Open",
      value: open,
      description: "Active incidents",
      className: "text-amber-400",
    },
    {
      label: "Critical",
      value: critical,
      description: "Immediate attention",
      className: "text-red-400",
    },
    {
      label: "Investigating",
      value: investigating,
      description: "Currently being handled",
      className: "text-indigo-400",
    },
    {
      label: "Resolved",
      value: resolved,
      description: "Successfully closed",
      className: "text-emerald-400",
    },
  ];

  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="rounded-xl border border-white/10 bg-[#10141c] p-5"
        >
          <div className="text-xs text-slate-500">{stat.label}</div>

          <div className={`mt-3 text-3xl font-semibold ${stat.className}`}>
            {stat.value}
          </div>

          <div className="mt-2 text-xs text-slate-600">{stat.description}</div>
        </div>
      ))}
    </div>
  );
}
