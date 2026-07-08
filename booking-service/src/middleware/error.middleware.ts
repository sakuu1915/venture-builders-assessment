import { Request, Response, NextFunction } from "express";
import AppError from "../errors/AppError";

const errorHandler = (
  err: Error | AppError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = err instanceof AppError ? err.statusCode : 500;

  const message =
    err instanceof AppError ? err.message : "Internal Server Error";

  console.error(err);

  res.status(statusCode).json({
    success: false,
    message,
  });
};

export default errorHandler;