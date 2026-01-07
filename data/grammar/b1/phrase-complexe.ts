
import { GrammarSection } from '../../../types';

export const phraseComplexeB1: GrammarSection = {
  title: "3.1 Maîtrise de la Phrase Complexe",
  topics: [
    {
      id: "b1-1-1",
      title: "Les Pronoms Relatifs (Relativpronomen)",
      content: "La proposition relative apporte une précision sur un nom. Le pronom relatif s'accorde en **genre** et en **nombre** avec le nom qu'il remplace, mais son **cas** dépend de sa fonction dans la subordonnée.\n\n| CAS | MASCULIN | FÉMININ | NEUTRE | PLURIEL |\n|---|---|---|---|---|\n| **Nominatif** | der | die | das | die |\n| **Accusatif** | den | die | das | die |\n| **Datif** | dem | der | dem | denen |\n| **Génitif** | dessen | deren | dessen | deren |",
      examples: [
        { de: "Das ist der Mann, **den** ich gestern gesehen habe.", fr: "C'est l'homme que j'ai vu hier.", note: "Accusatif masculin (COD)." },
        { de: "Das sind die Kinder, **denen** ich geholfen habe.", fr: "Ce sont les enfants que j'ai aidés.", note: "Datif pluriel (helfen + datif)." }
      ]
    },
    {
      id: "b1-1-2",
      title: "Les Conjonctions Doubles (Zweiteilige Konnektoren)",
      content: "Ces connecteurs permettent de lier deux idées avec des nuances précises d'alternative, d'opposition ou d'addition.\n\n• **Entweder ... oder** (Soit ... soit) : Alternative.\n• **Sowohl ... als auch** (Tant ... que) : Addition positive.\n• **Weder ... noch** (Ni ... ni) : Addition négative.\n• **Zwar ... aber** (Certes ... mais) : Concession.",
      examples: [
        { de: "Ich will **sowohl** Berlin **als auch** Munich besuchen.", fr: "Je veux visiter tant Berlin que Munich." },
        { de: "**Entweder** wir gehen heute **oder** wir bleiben zu Hause.", fr: "Soit nous y allons aujourd'hui, soit nous restons à la maison." }
      ]
    },
    {
      id: "b1-1-3",
      title: "L'infinitif avec 'zu' (um...zu, ohne...zu)",
      content: "Ces structures permettent d'exprimer le but ou la manière sans répéter le sujet.\n\n• **um ... zu** : Pour (but).\n• **ohne ... zu** : Sans (manière).\n• **(an)statt ... zu** : Au lieu de (alternative).",
      examples: [
        { de: "Ich lerne, **um** die Prüfung **zu** bestehen.", fr: "J'étudie pour réussir l'examen." },
        { de: "Er geht weg, **ohne** ein Wort **zu** sagen.", fr: "Il part sans dire un mot." }
      ]
    }
  ]
};
