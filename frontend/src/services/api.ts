import axios from "axios";

export const bookingAPI = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BOOKING_API,
});

export const aiAPI = axios.create({
  baseURL: process.env.NEXT_PUBLIC_AI_API,
});

export const resumeAPI = axios.create({
  baseURL: process.env.NEXT_PUBLIC_RESUME_API,
});