import type { Incident } from "@/components/incidents/IncidentTable";

const API_BASE_URL = "http://localhost:5000/api";

export type CreateIncidentInput = Pick<
  Incident,
  "title" | "severity" | "service" | "team"
>;

type ApiResponse<T> = {
  success: boolean;
  message?: string;
  data: T;
};

const handleResponse = async <T>(response: Response): Promise<T> => {
  const result: ApiResponse<T> = await response.json();

  if (!response.ok || !result.success) {
    throw new Error(result.message || "Something went wrong");
  }

  return result.data;
};

export const getIncidents = async (): Promise<Incident[]> => {
  const response = await fetch(`${API_BASE_URL}/incidents`);

  return handleResponse<Incident[]>(response);
};

export const createIncident = async (
  input: CreateIncidentInput,
): Promise<Incident> => {
  const response = await fetch(`${API_BASE_URL}/incidents`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(input),
  });

  return handleResponse<Incident>(response);
};
