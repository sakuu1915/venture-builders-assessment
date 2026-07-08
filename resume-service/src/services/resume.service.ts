import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY!,
});

export const generateResumeAI = async (data: any) => {
  const prompt = `
You are an expert ATS Resume Writer.

Generate ONLY clean HTML.

DO NOT return Markdown.

DO NOT return \`\`\`html.

Return ONLY valid HTML.

Use EXACTLY this structure.

<h1>${data.name}</h1>

<hp>Email: ${data.email}</p>

<p>Phone: ${data.phone}</p>

<hr>

<h2>Professional Summary</h2>

<p>${data.summary}</p>

<h2>Skills</h2>

<ul>
<li>Skill</li>
<li>Skill</li>
</ul>

<h2>Education</h2>

<ul>
<li>Education</li>
</ul>

IF Experience is NOT EMPTY then include:

<h2>Experience</h2>

<ul>
<li>Experience</li>
</ul>

Otherwise DO NOT generate the Experience section.

<h2>Projects</h2>

<ul>
<li>Project</li>
</ul>

Rules:

- Always use <h2> for section headings.
- Skills must always be inside <ul>.
- Projects must always be inside <ul>.
- Education must always be inside <ul>.
- Never use markdown.
- Never write ###.
- Never write **.
- Return ONLY HTML.

User Data

Name: ${data.name}

Email: ${data.email}

Phone: ${data.phone}

Summary: ${data.summary}

Skills: ${data.skills}

Education: ${data.education}

Experience: ${data.experience || "None"}

Projects: ${data.projects}
`;

  const completion = await groq.chat.completions.create({
    model: "llama-3.3-70b-versatile",
    temperature: 0.2,
    messages: [
      {
        role: "system",
        content:
          "You generate only valid HTML resumes. Never return markdown or explanations.",
      },
      {
        role: "user",
        content: prompt,
      },
    ],
  });

  return completion.choices[0].message.content;
};