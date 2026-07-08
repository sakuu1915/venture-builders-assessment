import express from "express";
import cors from "cors";
import errorHandler from "./middleware/error.middleware";
import bookingRoutes from "./routes/booking.routes";
import paymentRoutes from "./routes/payment.routes";

const app = express();

app.use(cors());
app.use(express.json());

// Health Check
app.get("/", (req, res) => {
  res.send("Booking Service is Running");
});

// Booking Routes
app.use("/api/bookings", bookingRoutes);
// Payment Routes
app.use("/api/payment", paymentRoutes);

app.use(errorHandler);

export default app;