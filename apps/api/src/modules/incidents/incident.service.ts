import type { Incident } from "./incident.types.js";
import type { CreateIncidentInput } from "./incident.schema.js";

const incidents: Incident[] = [
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
    title: "Database connection failures",
    severity: "High",
    status: "Monitoring",
    service: "Database",
    team: "Backend",
    created: "15m ago",
  },
];

export const getAllIncidents = (): Incident[] => {
  return incidents;
};

export const createIncident = (input: CreateIncidentInput): Incident => {
  const newIncident: Incident = {
    id: `INC-${Date.now()}`,
    ...input,
    status: "Investigating",
    created: "Just now",
  };

  incidents.unshift(newIncident);

  return newIncident;
};
