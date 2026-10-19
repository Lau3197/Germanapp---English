
import { GrammarSection } from '../../../types';

export const negation: GrammarSection = {
  title: "1.7 Negation: nicht and kein",
  topics: [
    {
      id: "a1-negation",
      title: "1.7.1 Choosing Between nicht and kein",
      content: "German has two words for *not*, and picking the wrong one is the most audible beginner mistake. The rule itself is short.\n\n### The Rule\n\n**kein** negates a noun that has **ein** or **no article** at all.\n**nicht** negates everything else - verbs, adjectives, adverbs, and nouns carrying a definite article or a possessive.\n\n| Positive sentence | Negative |\n|---|---|\n| Ich habe **ein** Auto. | Ich habe **kein** Auto. |\n| Ich trinke Kaffee. *(no article)* | Ich trinke **keinen** Kaffee. |\n| Ich habe Zeit. *(no article)* | Ich habe **keine** Zeit. |\n| Ich kenne **den** Mann. *(definite)* | Ich kenne **den** Mann **nicht**. |\n| Das ist **mein** Buch. *(possessive)* | Das ist **nicht** mein Buch. |\n| Ich arbeite heute. *(verb)* | Ich arbeite heute **nicht**. |\n| Das Buch ist gut. *(adjective)* | Das Buch ist **nicht** gut. |\n\nA quick test: if you could put **ein** in front of the noun, use **kein**.\n\n### Declining kein\n\n**kein** takes exactly the endings of **ein**, and unlike *ein* it has a plural:\n\n| Case | Masculine | Feminine | Neuter | Plural |\n|---|---|---|---|---|\n| **Nominative** | **kein** | **keine** | **kein** | **keine** |\n| **Accusative** | **keinen** | **keine** | **kein** | **keine** |\n\n• Ich habe **keinen** Hund. (masculine accusative)\n• Sie hat **keine** Schwester. (feminine)\n• Wir haben **kein** Geld. (neuter)\n• Ich habe **keine** Kinder. (plural)\n\n### Where Does nicht Go?\n\nThis is the part that takes practice. **nicht** normally sits **late** in the sentence, but never after the final verb element.\n\n**1. Negating the whole sentence** → *nicht* goes at the end:\n\n• Ich kenne ihn **nicht**.\n• Er kommt heute **nicht**.\n\n**2. But it goes BEFORE:**\n\n| Element | Example |\n|---|---|\n| an adjective | Das ist **nicht** teuer. |\n| an adverb | Er fährt **nicht** schnell. |\n| a place phrase | Ich wohne **nicht** in Berlin. |\n| an infinitive at the end | Ich kann heute **nicht** kommen. |\n| a separable prefix | Ich rufe dich **nicht** an. |\n\nOne way to remember it: **nicht** stands just in front of whatever closes the sentence. If nothing closes it, *nicht* closes it itself.\n\n**3. Negating one specific word** → put *nicht* directly before it:\n\n• Ich fahre **nicht heute** nach Berlin, sondern morgen.\n(It is not *today* that I am going - it is tomorrow.)\n\n### doch: Contradicting a Negative\n\nWhen someone asks a negative question, *ja* is ambiguous. German solves this with **doch**:\n\n• Kommst du **nicht** mit? - **Doch!** (Yes, I am coming!)\n• Hast du kein Auto? - **Doch**, ich habe eins.\n\nUse **nein** to confirm the negative, **doch** to contradict it. English has no equivalent, which is exactly why it is worth learning early.\n\n### Never Two Negatives\n\nUnlike English colloquial speech, German never doubles a negative. *Ich habe nicht kein Geld* is wrong. One negation per idea.",
      examples: [
        { de: "Ich habe kein Auto.", fr: "I do not have a car.", note: "The noun would take 'ein' → kein." },
        { de: "Ich trinke keinen Alkohol.", fr: "I do not drink alcohol.", note: "No article in the positive → kein, masculine accusative." },
        { de: "Ich kenne den Mann nicht.", fr: "I do not know the man.", note: "Definite article → nicht, at the end." },
        { de: "Das ist nicht mein Buch.", fr: "This is not my book.", note: "Possessive → nicht, placed before it." },
        { de: "Der Film ist nicht gut.", fr: "The film is not good.", note: "nicht before the adjective." },
        { de: "Ich kann heute nicht kommen.", fr: "I cannot come today.", note: "nicht before the final infinitive." },
        { de: "Kommst du nicht? – Doch!", fr: "Aren't you coming? – Yes I am!", note: "doch contradicts a negative question." }
      ]
    }
  ]
};
