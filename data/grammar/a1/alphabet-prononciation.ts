
import { GrammarSection } from '../../../types';

export const alphabetPrononciation: GrammarSection = {
  title: "1.1 L'Alphabet et la Prononciation",
  topics: [
    {
      id: "a1-1",
      title: "Phonétique et Sons de base",
      content: "L'allemand est une langue phonétique : elle se prononce comme elle s'écrit, à quelques exceptions près.\n\n### Points clés à retenir\n• Les Umlauts (ä, ö, ü) changent le son de la voyelle.\n• Le 'ch' a deux sons : 'ich-Laut' (doux) et 'ach-Laut' (rugueux).\n• Le 's' au début d'un mot se prononce 'z'.",
      examples: [
        { de: "Ich / Schule / Brot", fr: "Sons ch, sch, r" },
        { de: "Apfel -> Äpfel", fr: "Umlauts (Mutation de voyelles)" },
        { de: "Eis / Liebe / Europa", fr: "Diphtongues (ei, ie, eu)" }
      ]
    }
  ]
};
