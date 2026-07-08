import { Request, Response, NextFunction } from "express";
import AppError from "../errors/AppError";

const validateBooking = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { name, email, phone, meetingAgenda } = req.body;

  if (!name || !email || !phone || !meetingAgenda) {
    throw new AppError("All fields are required", 400);
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    throw new AppError("Invalid email address", 400);
  }

  next();
};

export default validateBooking;