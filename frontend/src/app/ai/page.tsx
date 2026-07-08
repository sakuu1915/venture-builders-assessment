import AIChat from "@/components/AIChat";

export default function AIPage() {
  return (
    <div className="space-y-8">

      <div className="text-center">

        <h1 className="text-5xl font-bold">
          AI Career Assistant
        </h1>

        <p className="text-gray-600 mt-3 text-lg">
          Ask anything about MERN, AWS, React, Interviews,
          Resume or Programming.
        </p>

      </div>

      <AIChat />

    </div>
  );
}