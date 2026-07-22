
import { GoogleGenAI, Type } from "@google/genai";
import { Theme, GermanWord, Phrase, LanguageLevel, ThemeContent } from "../types";

// Note: We initialize the instance on each call to make sure we use the most recent key
const getAi = () => new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function fetchThemeBatch(
  theme: Theme, 
  level: LanguageLevel | 'PHRASES'
): Promise<any> {
  const ai = getAi();
  
  const isPhrases = level === 'PHRASES';
  
  const prompt = isPhrases
    ? `Generate exactly 20 useful German sentences with their English translation for the theme "${theme.name}" (${theme.description}). The sentences must be varied and ready to use. Return the English translation in the "french" field.`
    : `Generate exactly 50 German vocabulary words at level ${level} for the theme "${theme.name}".
       For each word, you MUST provide:
       - The article (der, die, das, or null if not applicable)
       - The word in German
       - The English translation (in the "french" field)
       - The plural (if applicable, otherwise 'n/a')
       - A short, natural example sentence.`;

  const responseSchema = isPhrases ? {
    type: Type.OBJECT,
    properties: {
      phrases: {
        type: Type.ARRAY,
        items: {
          type: Type.OBJECT,
          properties: {
            german: { type: Type.STRING },
            french: { type: Type.STRING },
            context: { type: Type.STRING }
          },
          required: ['german', 'french', 'context']
        }
      }
    },
    required: ['phrases']
  } : {
    type: Type.OBJECT,
    properties: {
      words: {
        type: Type.ARRAY,
        items: {
          type: Type.OBJECT,
          properties: {
            german: { type: Type.STRING },
            french: { type: Type.STRING },
            article: { type: Type.STRING },
            plural: { type: Type.STRING },
            example: { type: Type.STRING },
            level: { type: Type.STRING, enum: [level] }
          },
          required: ['german', 'french', 'article', 'plural', 'example', 'level']
        }
      }
    },
    required: ['words']
  };

  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: prompt,
    config: {
      responseMimeType: "application/json",
      responseSchema: responseSchema as any
    }
  });

  if (!response.text) throw new Error("Empty response from the AI");
  return JSON.parse(response.text);
}
