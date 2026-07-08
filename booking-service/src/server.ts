import "./config/env";
import app from "./app";
import connectDB from "./config/db";


const PORT = process.env.PORT || 5001;

const startServer = async () => {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`Booking Service running on port ${PORT}`);
  });
};

startServer();