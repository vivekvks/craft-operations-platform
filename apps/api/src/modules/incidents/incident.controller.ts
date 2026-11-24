import type { Request, Response } from "express";
import { getAllIncidents, createIncident } from "./incident.service.js";

export const getIncidents = async (_req: Request, res: Response) => {
  try {
    const incidents = await getAllIncidents();

    return res.status(200).json({
      success: true,
      data: incidents,
    });
  } catch (error) {
    console.error("Failed to fetch incidents:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch incidents",
    });
  }
};

export const postIncident = async (req: Request, res: Response) => {
  try {
    const incident = await createIncident(req.body);

    return res.status(201).json({
      success: true,
      message: "Incident created successfully",
      data: incident,
    });
  } catch (error) {
    console.error("Failed to create incident:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to create incident",
    });
  }
};
