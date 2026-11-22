import type { Request, Response } from "express";
import { getAllIncidents, createIncident } from "./incident.service.js";

export const getIncidents = (_req: Request, res: Response) => {
  const incidents = getAllIncidents();

  res.status(200).json({
    success: true,
    data: incidents,
  });
};

export const postIncident = (req: Request, res: Response) => {
  const incident = createIncident(req.body);

  res.status(201).json({
    success: true,
    message: "Incident created successfully",
    data: incident,
  });
};
