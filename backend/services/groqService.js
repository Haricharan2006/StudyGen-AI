const Groq = require("groq-sdk");

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

async function generateContent(topic, type) {
  let prompt = "";

  switch (type) {
    case "notes":
      prompt = `
Generate comprehensive study notes on "${topic}".

Requirements:
- Use clear headings.
- Use bullet points.
- Explain concepts in simple language.
- Include important definitions.
- Include key points.
- Include applications if applicable.
- Make the notes suitable for exam preparation.
`;
      break;

    case "flashcards":
      prompt = `
Create exactly 10 flashcards on "${topic}".

Rules:
- Format every flashcard exactly like this:

Q: Question
A: Answer

- Leave one blank line after every flashcard.
- Keep answers short and easy to remember.
`;
      break;

    case "quiz":
      prompt = `
Generate 10 multiple-choice questions on "${topic}".

Format exactly like this:

Question 1:
What is ...?

A. Option A
B. Option B
C. Option C
D. Option D

Answer: B

Repeat this format for all 10 questions.
`;
      break;

    case "summary":
      prompt = `
Write a concise study summary on "${topic}".

Requirements:
- Maximum 400 words.
- Use headings.
- Use bullet points.
- Highlight the most important concepts.
- Keep it suitable for quick revision.
`;
      break;

    default:
      prompt = `
Generate detailed study notes on "${topic}".
`;
  }

  const completion = await groq.chat.completions.create({
    model: "llama-3.3-70b-versatile",
    messages: [
      {
        role: "system",
        content:
          "You are an expert AI study assistant. Always return well-formatted educational content.",
      },
      {
        role: "user",
        content: prompt,
      },
    ],
    temperature: 0.5,
    max_tokens: 2048,
  });

  return completion.choices[0].message.content;
}

async function generateFromDocument(text, type) {
  let prompt = "";

  switch (type) {
    case "notes":
      prompt = `
Generate detailed study notes from the following document.

Document:
${text}
`;
      break;

    case "flashcards":
      prompt = `
Create exactly 10 flashcards from this document.

Format:

Q: Question
A: Answer

Document:
${text}
`;
      break;

    case "quiz":
      prompt = `
Generate exactly 10 multiple-choice questions from this document.

Each question must have:

Question:
A.
B.
C.
D.

Answer:

Document:
${text}
`;
      break;

    case "summary":
      prompt = `
Write a concise study summary from this document.

Document:
${text}
`;
      break;

    default:
      prompt = `
Generate study notes from this document.

Document:
${text}
`;
  }

  const completion = await groq.chat.completions.create({
    model: "llama-3.3-70b-versatile",
    messages: [
      {
        role: "system",
        content:
          "You are an expert AI study assistant.",
      },
      {
        role: "user",
        content: prompt,
      },
    ],
    temperature: 0.5,
    max_tokens: 2048,
  });

  return completion.choices[0].message.content;
}

module.exports = {
  generateContent,
  generateFromDocument,
};