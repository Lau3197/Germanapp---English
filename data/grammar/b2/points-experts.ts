
import { GrammarSection } from '../../../types.ts';

export const pointsExpertsB2: GrammarSection = {
  title: "4.3 Specific Grammar Points",
  topics: [
    {
      id: "b2-modaux-subjectifs",
      title: "Modal Verbs with Subjective Meaning",
      content: "Expressing a rumor, an assumption, or a claim.\n\n• **sollen**: rumor (people say that...). *Er soll sehr reich sein.*\n• **wollen**: claim (he/she claims that...). *Er will den Minister kennen.*\n• **dürften**: strong probability (75%). *Das dürfte stimmen.*\n• **müssen**: near certainty. *Er muss den Zug verpasst haben.*",
      examples: [
        { de: "Er **soll** im Lotto gewonnen haben.", fr: "People say he won the lottery (rumor)." }
      ]
    },
    {
      id: "b2-declinaisons-expert",
      title: "Mastering Complex Declensions",
      content: "The hardest point at B2 level. Focus on adjectives that become nouns.\n\n### I. Substantivized Adjectives (The Phantom Noun)\nAn adjective acts as a noun. It keeps its **adjective declension** according to the article.\n\n| Article | Masculine | Feminine | Neuter |\n|---|---|---|---|\n| **Definite (der/die/das)** | der Deutsche | die Deutsche | das Gute |\n| **Indefinite (ein/etwas)** | ein Deutsche**r** | eine Deutsche | etwas Gute**s** |\n\n### II. N-Declension (Weak Masculines)\nSome masculine nouns, especially humans or animals ending in -e, take **-n** or **-en** in ALL cases except nominative.\n• *Typical words:* der Kollege, der Junge, der Tourist, der Herr, der Nachbar.\n• *Example:* Ich sehe den **Kollegen**. (Accusative).",
      examples: [
        { de: "Herzliche Grüße an alle **Anwesenden**.", fr: "Warm greetings to everyone present.", note: "Dative plural: -en." },
        { de: "Haben Sie mit dem **Touristen** gesprochen?", fr: "Did you speak with the tourist?", note: "N-declension in the dative." },
        { de: "Ich habe **etwas Interessantes** gelesen.", fr: "I read something interesting.", note: "Neuter after 'etwas': -es." }
      ]
    },
    {
      id: "b2-prepositions-conj",
      title: "Subtleties: Prepositions vs Conjunctions",
      content: "Mastering time and cause shifts.\n\n• **als vs wenn**: 'Als' for a one-time past event. 'Wenn' for the present or habits.\n• **nach vs nachdem**: 'Nach' + noun. 'Nachdem' + clause, often with the pluperfect.\n• **vor vs bevor**: 'Vor' + noun. 'Bevor' + clause.",
      examples: [
        { de: "**Nachdem** er gegessen hatte, ging er.", fr: "After he had eaten, he left." },
        { de: "**Vor** dem Essen (N) / **Bevor** er isst (V).", fr: "Before the meal / Before he eats." }
      ]
    }
  ]
};
