import { z } from "zod";

export const createIncidentSchema = z.object({
  title: z.string().trim().min(1, "Title is required"),
  severity: z.enum(["Critical", "High", "Medium", "Low"]),
  service: z.string().trim().min(1, "Service is required"),
  team: z.string().trim().min(1, "Team is required"),
});

export type CreateIncidentInput = z.infer<typeof createIncidentSchema>;
