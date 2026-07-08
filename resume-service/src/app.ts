import express from "express";
import cors from "cors";
import resumeRoutes from "./routes/resume.routes";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Resume Service Running...");
});

app.use("/api/resume", resumeRoutes);

export default app;