import crypto from "crypto";
import razorpay from "../config/razorpay";
import Booking from "../models/booking.model";
import { createCalendarEvent } from "./calendar.service";
import { sendBookingConfirmationEmail } from "./email.service";

// Create Razorpay Order
export const createOrderService = async (amount: number) => {
  const options = {
    amount: amount * 100,
    currency: "INR",
    receipt: `receipt_${Date.now()}`,
  };

  return await razorpay.orders.create(options);
};

// Verify Payment
export const verifyPaymentService = async (
  razorpay_order_id: string,
  razorpay_payment_id: string,
  razorpay_signature: string,
  bookingId: string,
) => {
  const generatedSignature = crypto
    .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET!)
    .update(`${razorpay_order_id}|${razorpay_payment_id}`)
    .digest("hex");

  if (generatedSignature !== razorpay_signature) {
    throw new Error("Invalid Payment Signature");
  }

  const booking = await Booking.findById(bookingId);

  if (!booking) {
    throw new Error("Booking not found");
  }

  if (booking.paymentStatus === "paid") {
    throw new Error("Payment already verified");
  }

  booking.paymentStatus = "paid";

  booking.razorpayOrderId = razorpay_order_id;
  booking.razorpayPaymentId = razorpay_payment_id;

  const calendarEvent = await createCalendarEvent(
    booking.name,
    booking.email,
    booking.meetingAgenda,
  );

  booking.calendarEventId = calendarEvent.id || "";

  await booking.save();

  const meetingDate = new Date(Date.now() + 5 * 60 * 1000).toLocaleString();

  await sendBookingConfirmationEmail(
    booking.email,
    booking.name,
    booking.meetingAgenda,
    meetingDate,
  );

  return booking;
};
