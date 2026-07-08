import { Request, Response } from "express";
import asyncHandler from "../utils/asyncHandler";
import AppError from "../errors/AppError";

import {
  createBookingService,
  getAllBookingsService,
  getBookingByIdService,
  updateBookingService,
  deleteBookingService,
} from "../services/booking.service";

export const createBooking = asyncHandler(
  async (req: Request, res: Response) => {
    const { name, email, phone, meetingAgenda } = req.body;

    const booking = await createBookingService({
      name,
      email,
      phone,
      meetingAgenda,
    });

    res.status(201).json({
      success: true,
      message: "Booking created successfully",
      data: booking,
    });
  }
);

export const getAllBookings = asyncHandler(
  async (req: Request, res: Response) => {
    const bookings = await getAllBookingsService();

    res.status(200).json({
      success: true,
      count: bookings.length,
      data: bookings,
    });
  }
);

export const getBookingById = asyncHandler(
  async (req: Request, res: Response) => {
    const id = String(req.params.id);

    const booking = await getBookingByIdService(id);

    if (!booking) {
      throw new AppError("Booking not found", 404);
    }

    res.status(200).json({
      success: true,
      data: booking,
    });
  }
);

export const updateBooking = asyncHandler(
  async (req: Request, res: Response) => {
    const id = String(req.params.id);

    const { name, email, phone, meetingAgenda } = req.body;

    const updatedBooking = await updateBookingService(id, {
      name,
      email,
      phone,
      meetingAgenda,
    });

    if (!updatedBooking) {
      throw new AppError("Booking not found", 404);
    }

    res.status(200).json({
      success: true,
      message: "Booking updated successfully",
      data: updatedBooking,
    });
  }
);

export const deleteBooking = asyncHandler(
  async (req: Request, res: Response) => {
    const id = String(req.params.id);

    const deletedBooking = await deleteBookingService(id);

    if (!deletedBooking) {
      throw new AppError("Booking not found", 404);
    }

    res.status(200).json({
      success: true,
      message: "Booking deleted successfully",
    });
  }
);