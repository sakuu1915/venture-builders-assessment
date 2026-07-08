import { Request, Response } from "express";
import { askAI } from "../services/ai.service";

export const chatWithAI = async (
  req: Request,
  res: Response
) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({
      success: false,
      message: "Message is required",
    });
  }

  const reply = await askAI(message);

  res.status(200).json({
    success: true,
    reply,
  });
};