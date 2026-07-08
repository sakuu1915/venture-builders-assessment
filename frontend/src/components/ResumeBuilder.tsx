"use client";

import { useState } from "react";
import { resumeAPI } from "@/services/api";
import toast from "react-hot-toast";
import ResumeEditor from "./ResumeEditor";

export default function ResumeBuilder() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    summary: "",
    skills: "",
    education: "",
    experience: "",
    projects: "",
  });

  const [resumeHTML, setResumeHTML] = useState("");
  const [loading, setLoading] = useState(false);
  const [template, setTemplate] = useState("professional");
  const [themeColor, setThemeColor] = useState("blue");
  const [photo, setPhoto] = useState("");

  const generateResume = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await resumeAPI.post("/resume/generate", {
        ...formData,
        template,
      });

      setResumeHTML(res.data.html);

      toast.success("Resume Generated Successfully!");
    } catch (error) {
      console.error(error);
      toast.error("Resume Generation Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl p-10">
      {/* Heading */}

      <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl text-white p-10 mb-10 text-center shadow-lg">
        <h1 className="text-5xl font-bold">AI Resume Builder</h1>

        <p className="mt-4 text-lg text-blue-100">
          Generate ATS-Friendly Resume using AI in seconds.
        </p>
      </div>

      {/* Form */}

      <form
        onSubmit={generateResume}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {/* Name */}

        <input
          type="text"
          placeholder="Full Name"
          className="border rounded-xl p-3"
          value={formData.name}
          onChange={(e) =>
            setFormData({
              ...formData,
              name: e.target.value,
            })
          }
          required
        />

        {/* Email */}

        <input
          type="email"
          placeholder="Email"
          className="border rounded-xl p-3"
          value={formData.email}
          onChange={(e) =>
            setFormData({
              ...formData,
              email: e.target.value,
            })
          }
          required
        />

        {/* Phone */}

        <input
          type="text"
          placeholder="Phone Number"
          className="border rounded-xl p-3"
          value={formData.phone}
          onChange={(e) =>
            setFormData({
              ...formData,
              phone: e.target.value,
            })
          }
          required
        />

        {/* Template */}

        <div className="md:col-span-2">
          <label className="block font-semibold mb-2">Resume Template</label>

          <select
            value={template}
            onChange={(e) => setTemplate(e.target.value)}
            className="border rounded-xl p-3 w-full"
          >
            <option value="professional">Professional</option>

            <option value="modern">Modern</option>

            <option value="minimal">Minimal</option>
          </select>
        </div>

        {/* Profile Photo */}

        <div className="md:col-span-2">
          <label className="font-semibold mb-2 block">
            Profile Photo (Optional)
          </label>

          <input
            type="file"
            accept="image/*"
            onChange={(e) => {
              const file = e.target.files?.[0];

              if (file) {
                setPhoto(URL.createObjectURL(file));
              }
            }}
          />
        </div>
        {/* Summary */}

        <textarea
          rows={4}
          placeholder="Professional Summary"
          className="border rounded-xl p-3 md:col-span-2"
          value={formData.summary}
          onChange={(e) =>
            setFormData({
              ...formData,
              summary: e.target.value,
            })
          }
          required
        />

        {/* Skills */}

        <textarea
          rows={4}
          placeholder="Skills"
          className="border rounded-xl p-3 md:col-span-2"
          value={formData.skills}
          onChange={(e) =>
            setFormData({
              ...formData,
              skills: e.target.value,
            })
          }
          required
        />

        {/* Education */}

        <textarea
          rows={4}
          placeholder="Education"
          className="border rounded-xl p-3 md:col-span-2"
          value={formData.education}
          onChange={(e) =>
            setFormData({
              ...formData,
              education: e.target.value,
            })
          }
          required
        />

        {/* Experience */}

        <textarea
          rows={4}
          placeholder="Experience (Optional)"
          className="border rounded-xl p-3 md:col-span-2"
          value={formData.experience}
          onChange={(e) =>
            setFormData({
              ...formData,
              experience: e.target.value,
            })
          }
        />

        {/* Projects */}

        <textarea
          rows={4}
          placeholder="Projects"
          className="border rounded-xl p-3 md:col-span-2"
          value={formData.projects}
          onChange={(e) =>
            setFormData({
              ...formData,
              projects: e.target.value,
            })
          }
          required
        />

        {/* Button */}

        <button
          type="submit"
          disabled={loading}
          className="md:col-span-2 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition"
        >
          {loading ? "Generating Resume..." : "Generate Resume"}
        </button>
      </form>

      <div className="mt-8">
        <h3 className="font-semibold mb-3">Theme Color</h3>

        <div className="flex gap-4">
          <button
            type="button"
            className={`w-10 h-10 rounded-full bg-blue-600 border-4 ${
              themeColor === "blue" ? "border-black" : "border-white"
            }`}
            onClick={() => setThemeColor("blue")}
          />

          <button
            type="button"
            className={`w-10 h-10 rounded-full bg-purple-600 border-4 ${
              themeColor === "purple" ? "border-black" : "border-white"
            }`}
            onClick={() => setThemeColor("purple")}
          />

          <button
            type="button"
            className={`w-10 h-10 rounded-full bg-green-600 border-4 ${
              themeColor === "green" ? "border-black" : "border-white"
            }`}
            onClick={() => setThemeColor("green")}
          />
        </div>
      </div>

      {/* Resume Editor */}

      {resumeHTML && (
        <ResumeEditor
          html={resumeHTML}
          template={template}
          theme={themeColor}
          photo={photo}
          name={formData.name}
        />
      )}
    </div>
  );
}
