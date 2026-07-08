import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export const askAI = async (message: string) => {
  try {
    const response = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
        {
          role: "system",
          content: `
You are an expert AI career assistant.

Always respond using VALID Markdown.

Rules:
- Every heading must be on its own line.
- Leave one blank line after every heading.
- Use bullet lists with "- ".
- Use numbered lists only when needed.
- Never return one long paragraph.
- Use bold only for important keywords.

Example format:

# React

React is a JavaScript library.

## Features

- Component-based
- Virtual DOM
- JSX
- Reusable UI

## Advantages

- Fast
- Easy to learn
- Large ecosystem

## Example

\`\`\`javascript
const App = () => <h1>Hello</h1>;
\`\`\`
`
        },
        {
          role: "user",
          content: message,
        },
      ],
      temperature: 0.7,
      max_tokens: 1024,
    });

    return response.choices[0].message.content;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
