import { useEffect, useMemo, useState } from "react";
import IncidentDetails from "./IncidentDetails";
import IncidentStats from "./IncidentStats";
import IncidentTable, { type Incident } from "./IncidentTable";
import CreateIncidentModal from "./CreateIncidentModal";

import { createIncident, getIncidents } from "@/services/incidentService";

export default function Incidents() {
  const [incidents, setIncidents] = useState<Incident[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [selectedIncident, setSelectedIncident] = useState<Incident | null>(
    null,
  );

  const [search, setSearch] = useState("");

  const [severityFilter, setSeverityFilter] = useState<
    "All" | Incident["severity"]
  >("All");

  const [statusFilter, setStatusFilter] = useState<"All" | Incident["status"]>(
    "All",
  );

  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  // Load incidents from PostgreSQL
  useEffect(() => {
    let isMounted = true;

    const loadIncidents = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const data = await getIncidents();

        if (isMounted) {
          setIncidents(data);
          setSelectedIncident(data[0] ?? null);
        }
      } catch (err) {
        if (isMounted) {
          setError(
            err instanceof Error ? err.message : "Failed to load incidents",
          );
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    loadIncidents();

    return () => {
      isMounted = false;
    };
  }, []);

  // Filter incidents
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

  // Update incident status locally
  const handleStatusChange = (
    incidentId: string,
    status: Incident["status"],
  ) => {
    setIncidents((current) =>
      current.map((incident) =>
        incident.id === incidentId ? { ...incident, status } : incident,
      ),
    );

    setSelectedIncident((current) =>
      current?.id === incidentId ? { ...current, status } : current,
    );
  };

  // Create incident through the backend API
  const handleCreateIncident = async (
    data: Pick<Incident, "title" | "severity" | "service" | "team">,
  ): Promise<void> => {
    const newIncident = await createIncident(data);

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

      {/* Loading state */}
      {isLoading && (
        <div className="py-8 text-center text-sm text-slate-400">
          Loading incidents...
        </div>
      )}

      {/* Error state */}
      {error && (
        <div className="rounded-lg border border-red-500/20 bg-red-500/10 p-4 text-sm text-red-400">
          {error}
        </div>
      )}

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
                event.target.value as "All" | Incident["severity"],
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
      {!isLoading && !error && (
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
      )}

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
