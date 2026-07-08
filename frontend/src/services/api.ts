import axios from "axios";

export const bookingAPI = axios.create({
  baseURL: "http://localhost:5001/api",
});

export const aiAPI = axios.create({
  baseURL: "http://localhost:5002/api",
});

export const resumeAPI = axios.create({
  baseURL: "http://localhost:5003/api",
});