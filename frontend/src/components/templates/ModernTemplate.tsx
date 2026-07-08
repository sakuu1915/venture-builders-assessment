"use client";

import { Editor, EditorContent } from "@tiptap/react";

interface Props {
  editor: Editor;
}

export default function ModernTemplate({
  editor,
}: Props) {
  return (
    <div className="grid grid-cols-3 rounded-xl overflow-hidden shadow-xl">

      <div className="bg-blue-700 text-white p-8">

        <div className="w-32 h-32 rounded-full bg-white mx-auto mb-8"></div>

        <h2 className="text-2xl font-bold">
          Modern Resume
        </h2>

        <p className="mt-3">
          Clean • Elegant • Modern
        </p>

      </div>

      <div className="col-span-2 bg-white p-10">

        <EditorContent
          editor={editor}
          className="prose max-w-none"
        />

      </div>

    </div>
  );
}