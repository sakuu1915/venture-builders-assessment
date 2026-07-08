import { Request, Response } from "express";
import asyncHandler from "../utils/asyncHandler";
import { createOrderService, verifyPaymentService } from "../services/payment.service";

export const createOrder = asyncHandler(
  async (req: Request, res: Response) => {
    const { amount } = req.body;

    if (!amount) {
      res.status(400).json({
        success: false,
        message: "Amount is required",
      });
      return;
    }

    const order = await createOrderService(amount);

    res.status(200).json({
      success: true,
      order,
    });
  }
);

export const verifyPayment = asyncHandler(
  async (req: Request, res: Response) => {
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      bookingId,
    } = req.body;

    const booking = await verifyPaymentService(
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      bookingId
    );

    res.status(200).json({
      success: true,
      message: "Payment Verified",
      booking,
    });
  }
);