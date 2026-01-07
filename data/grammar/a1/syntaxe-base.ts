
import { GrammarSection } from '../../../types';

export const syntaxeBase: GrammarSection = {
  title: "1.2 La Structure de la Phrase (Satzbau)",
  topics: [
    {
      id: "a1-2",
      title: "La place du verbe",
      content: "La règle d'or en allemand : le verbe conjugué occupe TOUJOURS la 2ème position dans une phrase affirmative.",
      examples: [
        { de: "Ich lerne Deutsch.", fr: "Phrase affirmative (Sujet-Verbe-Complément)" },
        { de: "Lernst du Deutsch?", fr: "Question fermée (Verbe en 1ère position)" },
        { de: "Was lernst du?", fr: "Question ouverte (Mot en W + Verbe en 2ème)" }
      ]
    }
  ]
};
