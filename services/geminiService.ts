import { GoogleGenAI, Type } from "@google/genai";
import { Course } from '../types';

export const generateCourseWithAI = async (topic: string): Promise<Partial<Course>> => {
  if (!process.env.API_KEY) {
    throw new Error("API Key not found");
  }

  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

  const systemInstruction = `
    You are an expert curriculum developer for a high-end design and tech LMS.
    Create a realistic, attractive course object based on the user's topic.
    The response must follow a strict JSON schema.
  `;

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: `Generate a course about: ${topic}`,
    config: {
      systemInstruction: systemInstruction,
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          title: { type: Type.STRING, description: "A catchy, professional course title" },
          category: { 
            type: Type.ARRAY, 
            items: { type: Type.STRING },
            description: "Up to 2 relevant tags (e.g., 'UX Design', 'React')"
          },
          lessonsCount: { type: Type.INTEGER, description: "Number of lessons (5-25)" },
          level: { type: Type.STRING, enum: ["Junior", "Medium", "Advance"] },
          thumbnailColor: { 
            type: Type.STRING, 
            description: "A valid tailwind pastel bg class, e.g. bg-[#F0F4F4], bg-[#FCEFF5], bg-[#EBF3FA]" 
          },
          iconType: { type: Type.STRING, enum: ["folder", "play", "file", "code", "pen", "layer"] }
        },
        required: ["title", "category", "lessonsCount", "level", "thumbnailColor", "iconType"]
      }
    }
  });

  const text = response.text;
  if (!text) throw new Error("No response from AI");

  return JSON.parse(text);
};