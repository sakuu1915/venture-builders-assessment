"use client";

import { useState, useRef, useEffect } from "react";
import axios from "axios";
import {
  Bot,
  User,
  SendHorizontal,
  Trash2,
} from "lucide-react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ClipLoader } from "react-spinners";
import { aiAPI } from "@/services/api";

interface Message {
  role: "user" | "assistant";
  text: string;
}

export default function AIChat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      text: "👋 Hello! I'm your AI Assistant. Ask me anything about MERN, AWS, Interviews, Career or Programming.",
    },
  ]);

  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);

  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  const askAI = async () => {
    if (!question.trim()) {
      toast.error("Please enter a question");
      return;
    }

    const userQuestion = question;

    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        text: userQuestion,
      },
    ]);

    setQuestion("");

    try {
      setLoading(true);

      const res = await aiAPI.post("/ai/chat", {
  message: userQuestion,
});

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text: res.data.reply,
        },
      ]);
    } catch (err) {
      console.error(err);
      toast.error("AI Service Error");
    } finally {
      setLoading(false);
    }
  };

  const clearChat = () => {
    setMessages([
      {
        role: "assistant",
        text: "👋 Hello! I'm your AI Assistant.",
      },
    ]);
  };

  return (
    <div className="bg-white rounded-3xl shadow-xl h-175 flex flex-col">

      {/* Header */}

      <div className="flex justify-between items-center border-b p-5">

        <div className="flex items-center gap-3">

          <Bot className="text-blue-600" size={30} />

          <div>

            <h2 className="text-2xl font-bold">
              AI Assistant
            </h2>

            <p className="text-sm text-gray-500">
              Powered by Groq
            </p>

          </div>

        </div>

        <button
          onClick={clearChat}
          className="text-red-500 hover:text-red-700"
        >
          <Trash2 />
        </button>

      </div>

      {/* Messages */}

      <div className="flex-1 overflow-y-auto p-6 space-y-5">

        {messages.map((msg, index) => (
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            className={`flex ${
              msg.role === "user"
                ? "justify-end"
                : "justify-start"
            }`}
          >
            <div
              className={`rounded-2xl px-5 py-4 max-w-[75%]
              ${
                msg.role === "assistant"
                  ? "bg-gray-100"
                  : "bg-blue-600 text-white"
              }`}
            >
              <div className="flex items-center gap-2 mb-2">

                {msg.role === "assistant" ? (
                  <Bot size={18} />
                ) : (
                  <User size={18} />
                )}

                <strong>
                  {msg.role === "assistant"
                    ? "AI"
                    : "You"}
                </strong>

              </div>

              <div
  className={`prose prose-lg max-w-none ${
    msg.role === "user" ? "prose-invert" : ""
  }`}
>
  <ReactMarkdown remarkPlugins={[remarkGfm]}>
    {msg.text}
  </ReactMarkdown>
</div>

            </div>
          </motion.div>
        ))}

        {loading && (
<div className="flex items-center gap-3 bg-gray-100 px-4 py-3 rounded-xl w-fit">

<ClipLoader
size={18}
color="#2563eb"
/>

<p>Thinking...</p>

</div>
)}

        <div ref={bottomRef}></div>

      </div>

      {/* Input */}

      <div className="border-t p-5 flex gap-3">

        <input
          value={question}
          onChange={(e) =>
            setQuestion(e.target.value)
          }
          placeholder="Ask anything..."
          className="flex-1 border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              askAI();
            }
          }}
        />

        <button
          onClick={askAI}
          disabled={loading}
          className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl px-6"
        >
          <SendHorizontal />
        </button>

      </div>

    </div>
  );
}