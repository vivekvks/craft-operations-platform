import express from "express";
import cors from "cors";
import incidentRoutes from "./modules/incidents/incident.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.status(200).json({
    success: true,
    message: "CRAFT API is running",
    timestamp: new Date().toISOString(),
  });
});

app.use("/api/incidents", incidentRoutes);

export default app;
