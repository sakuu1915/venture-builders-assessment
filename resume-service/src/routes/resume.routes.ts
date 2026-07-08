import { Router } from "express";
import { generateResume } from "../controllers/resume.controller";

const router = Router();

// Generate Resume
router.post("/generate", generateResume);

export default router;