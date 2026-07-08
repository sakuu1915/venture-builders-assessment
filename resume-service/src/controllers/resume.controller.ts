import { Request, Response } from "express";
import { generateResumeAI } from "../services/resume.service";

export const generateResume = async (
  req: Request,
  res: Response
) => {
  try {
    const result = await generateResumeAI(req.body);

    res.status(200).json({
      success: true,
      html: result,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Resume generation failed",
    });
  }
};