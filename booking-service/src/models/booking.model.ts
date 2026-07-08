import mongoose, { Document, Schema } from "mongoose";

export interface IBooking extends Document {
  name: string;
  email: string;
  phone: string;
  meetingAgenda: string;
  paymentStatus: "pending" | "paid";
  razorpayOrderId: string;
  razorpayPaymentId: string;
  calendarEventId?: string;
  createdAt: Date;
}

const bookingSchema = new Schema<IBooking>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },

    phone: {
      type: String,
      required: true,
      trim: true,
    },

    meetingAgenda: {
      type: String,
      required: true,
      trim: true,
    },

    paymentStatus: {
      type: String,
      enum: ["pending", "paid"],
      default: "pending",
    },
    razorpayOrderId: {
      type: String,
      default: "",
    },

    razorpayPaymentId: {
      type: String,
      default: "",
    },

    calendarEventId: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  },
);

const Booking = mongoose.model<IBooking>("Booking", bookingSchema);

export default Booking;
