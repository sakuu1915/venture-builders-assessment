"use client";

import { useRef } from "react";
import { useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

import ProfessionalTemplate from "./templates/ProfessionalTemplate";
import ModernTemplate from "./templates/ModernTemplate";
import MinimalTemplate from "./templates/MinimalTemplate";

interface Props {
  html: string;
  template: string;
  theme: string;
  photo: string;
  name: string;
}

export default function ResumeEditor({
  html,
  template,
  theme,
  photo,
  name,
}: Props) {
  const resumeRef = useRef<HTMLDivElement>(null);

  const editor = useEditor({
    extensions: [StarterKit],
    content: html,
    immediatelyRender: false,
  });

  const downloadPDF = async () => {
    if (!resumeRef.current) return;

    const canvas = await html2canvas(resumeRef.current, {
      scale: 2,
      useCORS: true,
    });

    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");

    const pdfWidth = pdf.internal.pageSize.getWidth();

    const pdfHeight =
      (canvas.height * pdfWidth) / canvas.width;

    pdf.addImage(
      imgData,
      "PNG",
      0,
      0,
      pdfWidth,
      pdfHeight
    );

    pdf.save(`${name || "Resume"}.pdf`);
  };

  if (!editor) return null;

  return (
    <div className="mt-12">

      {/* Header */}

      <div className="flex items-center justify-between mb-6 flex-wrap gap-4">

        <div>
          <h2 className="text-3xl font-bold">
            Resume Editor
          </h2>

          <p className="text-gray-500 mt-1">
            Edit your AI-generated resume before downloading.
          </p>
        </div>

        <div className="flex gap-3">

          <button
            onClick={() => window.print()}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl"
          >
            Print Resume
          </button>

          <button
            onClick={downloadPDF}
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl"
          >
            Download PDF
          </button>

        </div>

      </div>

      {/* Resume */}

      <div
        ref={resumeRef}
        className={`
          rounded-2xl
          shadow-xl
          overflow-hidden
          p-10

          ${
            theme === "blue"
              ? "border-l-8 border-blue-600"
              : theme === "purple"
              ? "border-l-8 border-purple-600"
              : "border-l-8 border-green-600"
          }
        `}
      >

        {/* Profile Photo */}

        {photo && (
          <div className="flex justify-center mb-8">
            <img
              src={photo}
              alt="Profile"
              className="w-32 h-32 rounded-full object-cover border-4 border-gray-300 shadow-lg"
            />
          </div>
        )}

        {template === "professional" && (
          <ProfessionalTemplate editor={editor} />
        )}

        {template === "modern" && (
          <ModernTemplate editor={editor} />
        )}

        {template === "minimal" && (
          <MinimalTemplate editor={editor} />
        )}

      </div>

      {/* ATS Score */}

      <div className="mt-10 bg-green-50 border border-green-200 rounded-2xl p-6">

        <h2 className="text-2xl font-bold mb-4">
          ATS Score
        </h2>

        <div className="text-6xl font-bold text-green-600">
          91%
        </div>

        <ul className="list-disc ml-6 mt-5 space-y-2 text-gray-700">
          <li>Excellent resume formatting</li>
          <li>Good keyword matching</li>
          <li>Add more measurable achievements</li>
          <li>Include certifications</li>
          <li>Keep experience results-focused</li>
        </ul>

      </div>

    </div>
  );
}