import BookingForm from "@/components/BookingForm";

export default function BookingPage() {
  return (
    <div className="space-y-10">
      <div className="text-center">
        <h1 className="text-5xl font-bold">
          Book Your Appointment
        </h1>

        <p className="text-gray-600 mt-4 text-lg">
          Schedule your AI consultation in just a few steps.
        </p>
      </div>

      <BookingForm />
    </div>
  );
}