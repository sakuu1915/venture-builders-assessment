import ResumeBuilder from "@/components/ResumeBuilder";

export default function ResumePage() {
  return (
    <div className="space-y-8">

      <div className="text-center">

  <h1 className="text-5xl font-bold">
    AI Resume Builder
  </h1>

  <p className="text-gray-500 mt-4">
    Fill in your details and let AI generate a professional ATS-friendly resume.
  </p>

</div>

      <ResumeBuilder />

    </div>
  );
}