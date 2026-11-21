import { useMemo, useState } from "react";
import IncidentDetails from "./IncidentDetails";
import IncidentStats from "./IncidentStats";
import IncidentTable, { type Incident } from "./IncidentTable";
import CreateIncidentModal from "./CreateIncidentModal";

const initialIncidents: Incident[] = [
  {
    id: "INC-1048",
    title: "Production API latency",
    severity: "Critical",
    status: "Investigating",
    service: "API Gateway",
    team: "Platform",
    created: "2m ago",
  },
  {
    id: "INC-1047",
    title: "Database connection pool",
    severity: "High",
    status: "Monitoring",
    service: "PostgreSQL",
    team: "Infrastructure",
    created: "18m ago",
  },
  {
    id: "INC-1046",
    title: "Delayed notification delivery",
    severity: "Medium",
    status: "Investigating",
    service: "Notifications",
    team: "Messaging",
    created: "34m ago",
  },
  {
    id: "INC-1045",
    title: "Worker memory threshold",
    severity: "High",
    status: "Resolved",
    service: "Job Workers",
    team: "Platform",
    created: "1h ago",
  },
  {
    id: "INC-1044",
    title: "Analytics sync delay",
    severity: "Low",
    status: "Resolved",
    service: "Analytics",
    team: "Data",
    created: "2h ago",
  },
];

export default function Incidents() {
  const [incidents, setIncidents] = useState<Incident[]>(initialIncidents);

  const [selectedIncident, setSelectedIncident] = useState<Incident | null>(
    null
  );

  const [search, setSearch] = useState("");

  const [severityFilter, setSeverityFilter] = useState<
    "All" | Incident["severity"]
  >("All");

  const [statusFilter, setStatusFilter] = useState<"All" | Incident["status"]>(
    "All"
  );

  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  const filteredIncidents = useMemo(() => {
    const query = search.trim().toLowerCase();

    return incidents.filter((incident) => {
      const matchesSearch =
        query.length === 0 ||
        incident.id.toLowerCase().includes(query) ||
        incident.title.toLowerCase().includes(query) ||
        incident.service.toLowerCase().includes(query) ||
        incident.team.toLowerCase().includes(query);

      const matchesSeverity =
        severityFilter === "All" || incident.severity === severityFilter;

      const matchesStatus =
        statusFilter === "All" || incident.status === statusFilter;

      return matchesSearch && matchesSeverity && matchesStatus;
    });
  }, [incidents, search, severityFilter, statusFilter]);

  const handleStatusChange = (
    incidentId: string,
    status: Incident["status"]
  ) => {
    setIncidents((current) =>
      current.map((incident) =>
        incident.id === incidentId ? { ...incident, status } : incident
      )
    );

    setSelectedIncident((current) =>
      current?.id === incidentId ? { ...current, status } : current
    );
  };

  const handleCreateIncident = (
    data: Pick<Incident, "title" | "severity" | "service" | "team">
  ) => {
    const nextId =
      Math.max(
        1048,
        ...incidents.map((incident) => {
          const match = incident.id.match(/^INC-(\d+)$/);
          return match ? Number(match[1]) : 1048;
        })
      ) + 1;

    const newIncident: Incident = {
      id: `INC-${nextId}`,
      ...data,
      status: "Investigating",
      created: "Just now",
    };

    setIncidents((current) => [newIncident, ...current]);
    setSelectedIncident(newIncident);

    // Ensure the new incident is visible even when filters are active.
    setSearch("");
    setSeverityFilter("All");
    setStatusFilter("All");

    setIsCreateModalOpen(false);
  };

  return (
    <section className="space-y-6">
      {/* Page heading */}
      <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
        <div>
          <div className="mb-2 text-[10px] font-medium uppercase tracking-[0.18em] text-slate-600">
            CRAFT / INCIDENTS
          </div>

          <h1 className="text-2xl font-semibold tracking-tight text-white">
            Incident Management
          </h1>

          <p className="mt-2 max-w-2xl text-sm text-slate-500">
            Monitor, investigate, and resolve operational incidents across the
            platform.
          </p>
        </div>

        <button
          type="button"
          onClick={() => setIsCreateModalOpen(true)}
          className="rounded-lg bg-white px-4 py-2.5 text-xs font-semibold text-slate-900 transition hover:bg-slate-200"
        >
          + New Incident
        </button>
      </div>

      {/* Stats */}
      <IncidentStats incidents={incidents} />

      {/* Filters */}
      <div className="rounded-xl border border-white/10 bg-[#10141c] p-4">
        <div className="flex flex-col gap-3 lg:flex-row">
          <div className="relative flex-1">
            <input
              type="text"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search incidents, services, teams..."
              className="w-full rounded-lg border border-white/10 bg-[#0b0f15] px-3 py-2.5 text-xs text-white outline-none placeholder:text-slate-700 focus:border-indigo-500/40"
            />
          </div>

          <select
            value={severityFilter}
            onChange={(event) =>
              setSeverityFilter(
                event.target.value as "All" | Incident["severity"]
              )
            }
            className="rounded-lg border border-white/10 bg-[#0b0f15] px-3 py-2.5 text-xs text-slate-400 outline-none focus:border-indigo-500/40"
          >
            <option value="All">All Severities</option>
            <option value="Critical">Critical</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>

          <select
            value={statusFilter}
            onChange={(event) =>
              setStatusFilter(event.target.value as "All" | Incident["status"])
            }
            className="rounded-lg border border-white/10 bg-[#0b0f15] px-3 py-2.5 text-xs text-slate-400 outline-none focus:border-indigo-500/40"
          >
            <option value="All">All Statuses</option>
            <option value="Investigating">Investigating</option>
            <option value="Monitoring">Monitoring</option>
            <option value="Resolved">Resolved</option>
          </select>

          <button
            type="button"
            onClick={() => {
              setSearch("");
              setSeverityFilter("All");
              setStatusFilter("All");
            }}
            className="rounded-lg border border-white/10 bg-[#0b0f15] px-4 py-2.5 text-xs text-slate-500 transition hover:text-white"
          >
            Reset
          </button>
        </div>
      </div>

      {/* Table + details */}
      <div className="grid gap-5 xl:grid-cols-[minmax(0,1.6fr)_360px]">
        <IncidentTable
          incidents={filteredIncidents}
          selectedIncident={selectedIncident}
          onSelect={setSelectedIncident}
        />

        <IncidentDetails
          incident={selectedIncident}
          onClose={() => setSelectedIncident(null)}
          onStatusChange={handleStatusChange}
        />
      </div>

      {/* Create incident modal */}
      {isCreateModalOpen && (
        <CreateIncidentModal
          onClose={() => setIsCreateModalOpen(false)}
          onCreate={handleCreateIncident}
        />
      )}
    </section>
  );
}
