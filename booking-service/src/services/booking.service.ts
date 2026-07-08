import Booking from "../models/booking.model";

export const createBookingService = async (bookingData: {
  name: string;
  email: string;
  phone: string;
  meetingAgenda: string;
}) => {
  const booking = await Booking.create({
    ...bookingData,
    paymentStatus: "pending",
  });

  return booking;
};

export const getAllBookingsService = async () => {
  return await Booking.find().sort({ createdAt: -1 });
};

export const getBookingByIdService = async (id: string) => {
  return await Booking.findById(id);
};

export const updateBookingService = async (
  id: string,
  bookingData: {
    name: string;
    email: string;
    phone: string;
    meetingAgenda: string;
  }
) => {
  return await Booking.findByIdAndUpdate(id, bookingData, {
    new: true,
    runValidators: true,
  });
};

export const deleteBookingService = async (id: string) => {
  return await Booking.findByIdAndDelete(id);
};