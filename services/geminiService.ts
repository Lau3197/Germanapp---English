
import { GoogleGenAI, Type } from "@google/genai";
import { Theme, GermanWord, Phrase, LanguageLevel, ThemeContent } from "../types";

// Note: On initialise l'instance à chaque appel pour s'assurer d'avoir la clé la plus récente
const getAi = () => new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function fetchThemeBatch(
  theme: Theme, 
  level: LanguageLevel | 'PHRASES'
): Promise<any> {
  const ai = getAi();
  
  const isPhrases = level === 'PHRASES';
  
  const prompt = isPhrases 
    ? `Génère exactement 20 phrases utiles en allemand avec leur traduction française pour le thème "${theme.name}" (${theme.description}). Les phrases doivent être variées et prêtes à l'emploi.`
    : `Génère exactement 50 mots de vocabulaire allemand de niveau ${level} pour le thème "${theme.name}". 
       Pour chaque mot, tu DOIS fournir : 
       - L'article (der, die, das ou null si pas applicable)
       - Le mot en allemand
       - La traduction française
       - Le pluriel (si applicable, sinon 'n/a')
       - Une phrase d'exemple courte et naturelle.`;

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

  if (!response.text) throw new Error("Réponse vide de l'IA");
  return JSON.parse(response.text);
}
