
import { GrammarSection } from '../../../types';

export const declinaisonAdjectif: GrammarSection = {
  title: "2.2 Adjective Declension (Adjektivdeklination)",
  topics: [
    {
      id: "a2-2-1",
      title: "I. Predicative vs Attributive Adjectives",
      content: "Before learning the tables, you need to understand when to decline an adjective:\n\n• **Predicative adjective** (placed after verbs such as to be/to seem): it **NEVER** changes.\n• **Attributive adjective** (placed between the article and the noun): it must **ALWAYS** be declined.\n\nIn German, the adjective ending helps carry gender or case information when the article alone does not show it clearly enough.",
      examples: [
        { de: "Das Auto ist **schnell**.", fr: "The car is fast (unchanged).", note: "Placed after 'ist', the adjective stays in its base form." },
        { de: "Das **schnelle** Auto gehört mir.", fr: "The fast car belongs to me (declined).", note: "Placed before the noun, it takes an ending." }
      ]
    },
    {
      id: "a2-2-2",
      title: "II. Weak Declension (After a Definite Article)",
      content: "Use it after: **der, die, das, dieser, jener, jeder**.\nThe article already carries all the information. The adjective is 'lazy': it only takes **-e** or **-en**.\n\n| CASE | MASCULINE (der Mann) | FEMININE (die Frau) | NEUTER (das Kind) | PLURAL (die Leute) |\n|---|---|---|---|---|\n| **Nom.** | der gut**e** Mann | die gut**e** Frau | das gut**e** Kind | die gut**en** Leute |\n| **Acc.** | den gut**en** Mann | die gut**e** Frau | das gut**e** Kind | die gut**en** Leute |\n| **Dat.** | dem gut**en** Mann | der gut**en** Frau | dem gut**en** Kind | den gut**en** Leute**n** |\n| **Gen.** | des gut**en** Manne**s** | der gut**en** Frau | des gut**en** Kinde**s** | der gut**en** Leute |",
      examples: [
        { de: "Ich sehe den gut**en** Mann.", fr: "I see the good man.", note: "In the masculine accusative, everything ends in -en." },
        { de: "Mit den neu**en** Freunde**n**.", fr: "With the new friends.", note: "In the dative plural, the noun also takes an -n." }
      ]
    },
    {
      id: "a2-2-3",
      title: "III. Mixed Declension (After an Indefinite Article)",
      content: "Use it after: **ein, eine, kein** or possessives (**mein, dein...**).\nHere, the adjective must 'help' the article show gender in the nominative, because 'ein' has the same form in the masculine and neuter.\n\n| CASE | MASCULINE (ein Wein) | FEMININE (eine Suppe) | NEUTER (ein Buch) | PLURAL (keine Ideen) |\n|---|---|---|---|---|\n| **Nom.** | ein gut**er** Wein | eine gut**e** Suppe | ein gut**es** Buch | keine gut**en** Ideen |\n| **Acc.** | einen gut**en** Wein | eine gut**e** Suppe | ein gut**es** Buch | keine gut**en** Ideen |\n| **Dat.** | einem gut**en** Wein | einer gut**en** Suppe | einem gut**en** Buch | keinen gut**en** Ideen |\n| **Gen.** | eines gut**en** Weine**s** | einer gut**en** Suppe | eines gut**en** Buche**s** | keiner gut**en** Ideen |",
      examples: [
        { de: "Ein gut**er** Wein.", fr: "A good wine.", note: "The adjective takes -er because 'ein' is not marked clearly enough." },
        { de: "Mein neu**es** Handy.", fr: "My new phone.", note: "The -es recalls the article 'das' (neuter)." }
      ]
    },
    {
      id: "a2-2-4",
      title: "IV. Strong Declension (Without an Article)",
      content: "Use it when there is **no article**. The adjective has to do all the work by itself. It takes the endings of the definite article (**der, die, das**).\n\n| CASE | MASCULINE (Kaffee) | FEMININE (Milch) | NEUTER (Wasser) | PLURAL (Freunde) |\n|---|---|---|---|---|\n| **Nom.** | gut**er** Kaffee | frisch**e** Milch | kalt**es** Wasser | gut**e** Freunde |\n| **Acc.** | gut**en** Kaffee | frisch**e** Milch | kalt**es** Wasser | gut**e** Freunde |\n| **Dat.** | gut**em** Kaffee | frisch**er** Milch | kalt**em** Wasser | gut**en** Freunde**n** |\n| **Gen.** | gut**en** Kaffee**s** | frisch**er** Milch | gut**en** Wasser**s** | gut**er** Freunde |",
      examples: [
        { de: "Kalt**es** Wasser ist gesund.", fr: "Cold water is healthy.", note: "No article: the adjective carries the neuter 'es' ending." },
        { de: "Ich wünsche dir viel**en** Dank.", fr: "Many thanks to you.", note: "Masculine accusative without an article: -en, like 'den'." }
      ]
    },
    {
      id: "a2-2-5",
      title: "V. Strategic Summary",
      content: "To avoid mistakes, ask yourself these two questions:\n\n1. **Is there a 'rich' article?** (der/die/das/den/dem...) -> Yes? Then the adjective is 'poor' (**-e** or **-en**).\n2. **Is the article missing or 'poor'?** (ein/mein/kein in the nominative) -> Yes? Then the adjective must be 'rich' and show the gender (**-er, -es, -e**).\n\n**Note on the genitive**: In the masculine and neuter singular, the noun almost always takes **-(e)s** at the end.",
      examples: [
        { de: "Wegen des schlecht**en** Wetter**s**.", fr: "Because of the bad weather.", note: "Genitive: -en on the adjective and -s on the noun." }
      ]
    }
  ]
};
