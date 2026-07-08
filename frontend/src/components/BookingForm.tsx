"use client";

import { useState } from "react";
import { Calendar, CreditCard, User } from "lucide-react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { bookingAPI } from "@/services/api";
import { openRazorpay } from "@/services/payment";
import { ClipLoader } from "react-spinners";

export default function BookingForm() {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    meetingAgenda: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setLoading(true);

      const bookingRes = await bookingAPI.post("/bookings", formData);

      const bookingId = bookingRes.data.data._id;

      await openRazorpay(bookingId);

      toast.success("Booking Created Successfully!");

      console.log(bookingRes.data);

      setFormData({
        name: "",
        email: "",
        phone: "",
        meetingAgenda: "",
      });
    } catch (err) {
      console.error(err);
      toast.error("Booking Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="grid lg:grid-cols-2 gap-10"
    >
      {/* Left Side */}

      <div className="bg-white rounded-3xl shadow-xl p-8">
        <h2 className="text-4xl font-bold mb-8">Book Consultation</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <Input
            icon={<User size={18} />}
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
          />

          <Input
            icon={"@"}
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />

          <Input
            icon={"📱"}
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
          />

          <textarea
            name="meetingAgenda"
            placeholder="Meeting Agenda"
            value={formData.meetingAgenda}
            onChange={handleChange}
            className="w-full border rounded-xl p-4 outline-none focus:ring-2 focus:ring-blue-500"
            rows={5}
          />

          <button
  className="bg-blue-600 text-white w-full py-3 rounded-xl"
  disabled={loading}
>
  {loading ? (
    <ClipLoader
      size={20}
      color="#ffffff"
    />
  ) : (
    "Book Now"
  )}
</button>
        </form>
      </div>

      {/* Right Side */}

      <motion.div
        whileHover={{ scale: 1.02 }}
        className="bg-linear-to-br from-blue-600 to-purple-600 rounded-3xl text-white p-8 shadow-xl"
      >
        <Calendar size={60} />

        <h2 className="text-3xl font-bold mt-6">Consultation Details</h2>

        <div className="mt-8 space-y-5 text-lg">
          <Info label="Duration" value="30 Minutes" />

          <Info label="Mode" value="Google Meet" />

          <Info label="Payment" value="Razorpay" />

          <Info label="Calendar" value="Google Calendar" />
        </div>

        <div className="border-t border-white/30 mt-10 pt-8">
          <div className="flex justify-between">
            <span className="text-xl">Consultation Fee</span>

            <span className="text-3xl font-bold">₹499</span>
          </div>

          <div className="mt-8 flex items-center gap-3">
            <CreditCard />
            Secure Online Payment
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function Input({ icon, ...props }: any) {
  return (
    <div className="flex items-center border rounded-xl px-4">
      <div className="text-blue-600 mr-3">{icon}</div>

      <input className="w-full py-4 outline-none" required {...props} />
    </div>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between">
      <span>{label}</span>

      <span className="font-semibold">{value}</span>
    </div>
  );
}
