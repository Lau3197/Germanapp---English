
import { GrammarSection } from '../../../types';

export const nominalisationB2: GrammarSection = {
  title: "4. Nominalization (Nominalisierung)",
  topics: [
    {
      id: "b2-4-1",
      title: "4.1 Philosophy: Why Nominalize?",
      content: "Nominalization means transforming a message carried by a verb (**verbal style**) into a message carried by a noun (**nominal style**).\n\n### Why use it?\n• **Formality**: It is the language of administration, science, and the press.\n• **Conciseness**: You save space by removing subordinate clauses (weil, obwohl, wenn).\n• **Objectivity**: The noun often removes the action and focuses on the concept.\n\n### Basic Rule\nInstead of saying: *It was decided that...* (verb)\nSay: *The decision to/of...* (noun)",
      examples: [
        { de: "Er entscheidet schnell.", fr: "He decides quickly (verbal style)." },
        { de: "Seine **schnelle Entscheidung** überraschte uns.", fr: "His quick decision surprised us (nominal style)." }
      ]
    },
    {
      id: "b2-4-2",
      title: "4.2 Mechanics: The 3 Key Transformations",
      content: "To nominalize a sentence, you need to perform a systematic grammatical shift:\n\n### 1. The Verb Becomes a Noun\nThis is the pivot. You need to find the noun corresponding to the verb.\n• *entscheiden* → die Entscheidung\n• *besuchen* → der Besuch\n• *essen* → das Essen\n\n### 2. The Subject Becomes a Genitive Complement\nThe subject of the action is placed after the new noun, usually in the **genitive**.\n• *Der Chef* entscheidet → Die Entscheidung **des Chefs**.\n\n### 3. The Adverb Becomes an Adjective\nThe adverb that described the verb must now describe the noun. It goes before the noun and is declined.\n• Er entscheidet *schnell* → Seine **schnelle** Entscheidung.",
      examples: [
        { de: "Die Regierung (S) diskutiert (V) intensiv (Adv).", fr: "The government discusses intensively." },
        { de: "Die **intensive Diskussion der Regierung**.", fr: "The government's intensive discussion.", note: "Notice the adjective agreement in intensive." }
      ]
    },
    {
      id: "b2-4-3",
      title: "4.3 Conversion Table: Logical Connectors",
      content: "This is the most important point for B2 exams. You need to know how to replace a conjunction (because, although...) with an equivalent preposition.\n\n| Logic | Conjunction (verbal + final verb) | Preposition (nominal + case) |\n|---|---|---|\n| **Cause** | weil / da | **wegen / aufgrund** (+ gen.) |\n| **Concession** | obwohl | **trotz** (+ gen.) |\n| **Time (after)** | nachdem | **nach** (+ dat.) |\n| **Time (before)** | bevor | **vor** (+ dat.) |\n| **Time (during)** | während | **während** (+ gen.) |\n| **Condition** | wenn / falls | **bei** (+ dat.) |\n| **Manner** | indem | **durch** (+ acc.) |",
      examples: [
        { de: "**Obwohl** es regnete, gingen wir raus.", fr: "Although it was raining, we went out." },
        { de: "**Trotz des Regens** gingen wir raus.", fr: "Despite the rain, we went out.", note: "Transformation of the subordinate clause into a prepositional group." }
      ]
    },
    {
      id: "b2-4-4",
      title: "4.4 Handling Complements (Direct and Indirect Objects)",
      content: "What happens to the object when the verb disappears?\n\n### I. The Direct Object (Accusative) → Genitive\nIf the verb had a direct object, it often becomes the noun's genitive complement.\n• *Wir bauen das Haus* → Der Bau **des Hauses**.\n\n### II. Fixed Prepositions\nIf the verb used a fixed preposition, the noun almost always keeps it.\n• *Wir warten auf den Bus* → Das Warten **auf den Bus**.\n• *Er interessiert sich für Kunst* → Sein Interesse **für Kunst**.",
      examples: [
        { de: "Wir prüfen die Dokumente.", fr: "We check the documents." },
        { de: "Die Prüfung **der Dokumente** dauert lange.", fr: "Checking the documents takes a long time." }
      ]
    },
    {
      id: "b2-4-5",
      title: "4.5 Focus: Forming Nouns (Suffixes)",
      content: "How do you find the noun from the verb? Here are frequent patterns:\n\n• **-ung (feminine)**: The most frequent ending for processes. *planen → die Planung*.\n• **Substantivized infinitive (neuter)**: For the raw action. *essen → das Essen*.\n• **Bare stem**: Often masculine. *besuchen → der Besuch*, *laufen → der Lauf*.\n• **Vowel change**: *schließen → der Schluss*, *ziehen → der Zug*.\n• **-ion / -tät / -ur**: For words of Latin origin. *produzieren → die Produktion*.",
      examples: [
        { de: "Wir informieren die Kunden.", fr: "We inform the customers." },
        { de: "Die **Information** der Kunden ist wichtig.", fr: "Informing the customers is important." }
      ]
    }
  ]
};
