"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Bot,
  Calendar,
  CheckCircle,
  FileText,
} from "lucide-react";

export default function Home() {
  return (
    <div className="space-y-24">

      {/* Hero Section */}
      <section className="grid lg:grid-cols-2 gap-10 items-center">

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
            🚀 AI Powered Microservice Platform
          </span>

          <h1 className="text-6xl font-extrabold mt-6 leading-tight">
            Smart Booking
            <br />

            <span className="text-blue-600">
              Powered by AI
            </span>
          </h1>

          <p className="text-gray-600 mt-6 text-lg leading-8">
            Book consulting sessions, pay securely with Razorpay,
            chat with AI and analyze resumes using a modern
            microservices architecture.
          </p>

          <div className="flex gap-5 mt-10">

            <Link
              href="/booking"
              className="bg-blue-600 text-white px-7 py-4 rounded-xl flex items-center gap-2 hover:bg-blue-700 shadow-lg"
            >
              Book Now
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/ai"
              className="border border-blue-600 text-blue-600 px-7 py-4 rounded-xl hover:bg-blue-50"
            >
              Try AI
            </Link>

          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=900"
            alt="AI"
            className="rounded-3xl shadow-2xl"
          />
        </motion.div>

      </section>

      {/* Features */}

      <section>

        <h2 className="text-4xl font-bold text-center mb-14">
          Platform Features
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <FeatureCard
            icon={<Calendar size={45} />}
            title="Online Booking"
            desc="Book consulting meetings in just a few clicks."
          />

          <FeatureCard
            icon={<Bot size={45} />}
            title="AI Assistant"
            desc="Ask technical or career questions instantly."
          />

          <FeatureCard
            icon={<FileText size={45} />}
            title="Resume Analyzer"
            desc="Upload your resume and receive AI feedback."
          />

        </div>

      </section>

      {/* Why Choose */}

      <section className="bg-white rounded-3xl shadow-xl p-12">

        <h2 className="text-4xl font-bold text-center">
          Why Venture Builders?
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mt-12">

          <Benefit text="Microservice Architecture" />
          <Benefit text="Google Calendar Integration" />
          <Benefit text="Secure Razorpay Payments" />
          <Benefit text="AI Powered Chat" />
          <Benefit text="Resume Analysis" />
          <Benefit text="Modern Responsive UI" />

        </div>

      </section>

      {/* Statistics */}

      <section className="grid md:grid-cols-4 gap-8">

        <Stat number="3" label="Microservices" />

        <Stat number="100%" label="Responsive" />

        <Stat number="AI" label="Powered" />

        <Stat number="24x7" label="Available" />

      </section>

    </div>
  );
}

function FeatureCard({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
      }}
      className="bg-white rounded-3xl shadow-xl p-8 text-center"
    >
      <div className="text-blue-600 flex justify-center">
        {icon}
      </div>

      <h3 className="text-2xl font-bold mt-6">
        {title}
      </h3>

      <p className="text-gray-600 mt-4">
        {desc}
      </p>
    </motion.div>
  );
}

function Benefit({
  text,
}: {
  text: string;
}) {
  return (
    <div className="flex items-center gap-4">

      <CheckCircle className="text-green-600" />

      <span className="text-lg">
        {text}
      </span>

    </div>
  );
}

function Stat({
  number,
  label,
}: {
  number: string;
  label: string;
}) {
  return (
    <div className="bg-white rounded-3xl shadow-lg p-8 text-center">

      <h2 className="text-5xl font-bold text-blue-600">
        {number}
      </h2>

      <p className="mt-3 text-gray-600">
        {label}
      </p>

    </div>
  );
}