import { Router } from "express";
import { getIncidents, postIncident } from "./incident.controller.js";
import { createIncidentSchema } from "./incident.schema.js";
import { validateBody } from "../../middleware/validate.js";

const router = Router();

router.get("/", getIncidents);

router.post("/", validateBody(createIncidentSchema), postIncident);

export default router;
