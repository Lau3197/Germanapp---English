
import { GrammarSection } from '../../../types.ts';

export const passivAlternativenB2: GrammarSection = {
  title: "3. Alternatives to the Passive (Passiversatzformen)",
  topics: [
    {
      id: "b2-3-1",
      title: "3.1 Why Avoid the Passive?",
      content: "The passive with 'werden' is grammatically correct, but often heavy. Alternatives allow you to:\n• Make the text more fluent.\n• Express nuances of **possibility** or **obligation** concisely.",
      examples: [
        { de: "Das Problem kann gelöst werden.", fr: "The problem can be solved (standard passive)." },
        { de: "Das Problem ist lösbar.", fr: "The problem is solvable (concise alternative)." }
      ]
    },
    {
      id: "b2-3-2",
      title: "3.2 The Structure 'sich lassen' + Infinitive",
      content: "This is the most elegant alternative for expressing **possibility**. It replaces *können + passive*.\n\n• *Transformation*: Das Auto kann repariert werden → Das Auto **lässt sich** reparieren.",
      examples: [
        { de: "Die Tür **lässt sich** nicht **öffnen**.", fr: "The door cannot be opened.", note: "Meaning of possibility." }
      ]
    },
    {
      id: "b2-3-3",
      title: "3.3 The Structure 'sein + zu + Infinitive'",
      content: "A very formal structure used in administration and instructions. It expresses:\n1. **Obligation** (müssen): *Die Hausaufgaben sind zu machen.*\n2. **Possibility** (können): *Die Schrift ist schwer zu lesen.*",
      examples: [
        { de: "Dieses Formular **ist auszufüllen**.", fr: "This form must be filled in.", note: "Meaning of obligation." }
      ]
    },
    {
      id: "b2-3-4",
      title: "3.4 Adjectives in '-bar' and '-lich'",
      content: "Some suffixes turn a verb into an adjective with a passive meaning of possibility.\n• **-bar**: machbar (feasible), essbar (edible).\n• **-lich**: leserlich (legible), erklärlich (explainable).",
      examples: [
        { de: "Das Wasser ist nicht **trinkbar**.", fr: "The water is not drinkable." }
      ]
    },
    {
      id: "b2-3-5",
      title: "3.5 Reflexive Verbs with Passive Meaning",
      content: "Some reflexive verb forms describe an automatic process.\n• *Ex:* Das Buch **verkauft sich** gut. (The book sells well.)",
      examples: [
        { de: "Die Frage **beantwortet sich** von selbst.", fr: "The question answers itself." }
      ]
    },
    {
      id: "b2-3-6",
      title: "3.6 Summary Table of Equivalents",
      content: "| Structure | Meaning | Passive Equivalent |\n|---|---|---|\n| **man** + active | Neutral | werden |\n| **sich lassen** + inf. | Possibility | können + werden |\n| **sein + zu** + inf. | Obligation / possibility | müssen / können + werden |\n| **Adj. in -bar / -lich** | Capacity | können + werden |",
      examples: [
        { de: "Das ist nicht **machbar**.", fr: "That is not feasible.", note: "Equivalent to 'kann nicht gemacht werden'." }
      ]
    }
  ]
};
