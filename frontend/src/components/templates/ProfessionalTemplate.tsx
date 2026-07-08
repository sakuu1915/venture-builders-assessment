"use client";

import { Editor, EditorContent } from "@tiptap/react";

interface Props {
  editor: Editor;
}

export default function ProfessionalTemplate({
  editor,
}: Props) {
  return (
    <div className="bg-white p-12 rounded-xl shadow-lg border">

      <div className="border-b-4 border-blue-700 pb-5 mb-8">

        <h1 className="text-4xl font-bold text-blue-700">
          Professional Resume
        </h1>

        <p className="text-gray-500">
          ATS Friendly Professional Template
        </p>

      </div>

      <EditorContent
        editor={editor}
        className="prose max-w-none"
      />

    </div>
  );
}