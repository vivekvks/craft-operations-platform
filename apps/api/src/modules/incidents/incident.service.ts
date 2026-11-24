import type { Incident } from "./incident.types.js";
import type { CreateIncidentInput } from "./incident.schema.js";
import { prisma } from "../../lib/prisma.js";

type IncidentRecord = {
  id: string;
  title: string;
  severity: Incident["severity"];
  status: Incident["status"];
  service: string;
  team: string;
  createdAt: Date;
};

const formatRelativeTime = (date: Date): string => {
  const diffMinutes = Math.floor((Date.now() - date.getTime()) / 60000);

  if (diffMinutes < 1) return "Just now";
  if (diffMinutes < 60) return `${diffMinutes}m ago`;

  const diffHours = Math.floor(diffMinutes / 60);

  if (diffHours < 24) return `${diffHours}h ago`;

  const diffDays = Math.floor(diffHours / 24);

  return `${diffDays}d ago`;
};

const mapIncident = (record: IncidentRecord): Incident => ({
  id: record.id,
  title: record.title,
  severity: record.severity,
  status: record.status,
  service: record.service,
  team: record.team,
  created: formatRelativeTime(record.createdAt),
});

export const getAllIncidents = async (): Promise<Incident[]> => {
  const incidents = await prisma.incident.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return incidents.map(mapIncident);
};

export const createIncident = async (
  input: CreateIncidentInput,
): Promise<Incident> => {
  const newIncident = await prisma.incident.create({
    data: {
      id: `INC-${Date.now()}`,
      ...input,
      status: "Investigating",
    },
  });

  return mapIncident(newIncident);
};
