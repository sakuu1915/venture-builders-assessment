"use client";

import { Editor, EditorContent } from "@tiptap/react";

interface Props {
  editor: Editor;
}

export default function MinimalTemplate({
  editor,
}: Props) {
  return (
    <div className="bg-gray-50 p-12 border-l-8 border-black rounded-xl">

      <h1 className="text-5xl font-light mb-10">
        Minimal Resume
      </h1>

      <EditorContent
        editor={editor}
        className="prose max-w-none"
      />

    </div>
  );
}