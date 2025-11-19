import { GoogleGenAI } from "@google/genai";

// Initialize the Gemini Client
// NOTE: In a real production app, calls should go through a backend to protect the API KEY.
// For this frontend demo, we assume the env is available.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export interface AIRecommendation {
  drinkName: string;
  reasoning: string;
  suggestedCustomization: string;
}

export const getCoffeeRecommendation = async (
  userMood: string,
  weather: string,
  timeOfDay: string
): Promise<string> => {
  try {
    const model = 'gemini-2.5-flash';
    const prompt = `
      Act as a world-class barista at a high-end coffee shop called "Brew & Byte".
      
      The user says: "${userMood}".
      Context: It is ${timeOfDay} and the weather is ${weather}.
      
      Recommend ONE specific drink from a typical coffee shop menu (e.g., Latte, Cold Brew, Cappuccino, Matcha).
      Provide a short, friendly, and inviting response (max 50 words) explaining why this drink is perfect for right now.
      Do not use markdown. Just plain text.
    `;

    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
    });

    return response.text || "How about a classic Latte? It's always a good choice.";
  } catch (error) {
    console.error("AI Barista Error:", error);
    return "I'm having a little trouble connecting to the coffee beans right now. Try a Vanilla Latte!";
  }
};
