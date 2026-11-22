export type IncidentSeverity = "Critical" | "High" | "Medium" | "Low";

export type IncidentStatus = "Investigating" | "Monitoring" | "Resolved";

export type Incident = {
  id: string;
  title: string;
  severity: IncidentSeverity;
  status: IncidentStatus;
  service: string;
  team: string;
  created: string;
};
