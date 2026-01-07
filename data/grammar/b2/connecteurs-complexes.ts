
import { GrammarSection } from '../../../types';

export const connecteursComplexesB2: GrammarSection = {
  title: "6. Connecteurs logiques complexes",
  topics: [
    {
      id: "b2-6-1",
      title: "6.1 Introduction : L'art de l'argumentation",
      content: "Arrivé au niveau B2, il ne suffit plus d'utiliser *und*, *aber* ou *oder*. Les connecteurs complexes (souvent en deux parties) permettent de structurer votre pensée de manière plus précise et professionnelle.\n\n### Pourquoi les utiliser ?\n• **Nuance** : Passer de l'addition simple à l'accentuation.\n• **Structure** : Guider l'auditeur à travers votre raisonnement.\n• **Exigence B2** : Ces structures sont systématiquement évaluées dans les examens écrits et oraux.",
      examples: [
        { de: "Ich mag Tee **und** Kaffee.", fr: "J'aime le thé et le café (A1)." },
        { de: "Ich mag **sowohl** Tee **als auch** Kaffee.", fr: "J'aime tant le thé que le café (B2).", note: "La structure double rend l'affirmation plus élégante et appuyée." }
      ]
    },
    {
      id: "b2-6-2",
      title: "6.2 Les Connecteurs Doubles (Zweiteilige Konnektoren)",
      content: "Ces paires de mots fonctionnent ensemble pour lier deux éléments (mots, groupes nominaux ou propositions).\n\n| Connecteur | Sens | Utilisation |\n|---|---|---|\n| **sowohl ... als auch** | + / + | Addition équilibrée (A et B). |\n| **nicht nur ... sondern auch** | + / ++ | Accentuation (Pas seulement A, mais aussi B). |\n| **weder ... noch** | - / - | Double négation (Ni A, ni B). |\n| **entweder ... oder** | A / B | Alternative exclusive (Soit A, soit B). |\n| **zwar ... aber** | +/- | Concession (Certes A, mais B). |\n\n**Règle syntaxique** : En général, ces connecteurs ne changent pas l'ordre des mots s'ils relient des groupes nominaux. S'ils relient deux phrases, les règles de position habituelles s'appliquent.",
      examples: [
        { de: "Er spricht **nicht nur** Deutsch, **sondern auch** Japanisch.", fr: "Il ne parle pas seulement allemand, mais aussi japonais." },
        { de: "Das Projekt ist **zwar** teuer, **aber** sehr effektiv.", fr: "Le projet est certes cher, mais très efficace." },
        { de: "Ich habe **weder** Zeit **noch** Lust.", fr: "Je n'ai ni le temps ni l'envie.", note: "Attention : ne pas rajouter de négation 'nicht' avec weder/noch." }
      ]
    },
    {
      id: "b2-6-3",
      title: "6.3 La Proportionnalité : Je ... desto / umso",
      content: "C'est la structure technique favorite du B2 pour exprimer que l'évolution d'une chose dépend de l'autre (« Plus..., plus... »).\n\n### La règle de construction (Complexe !)\n1. **Première partie (Je)** : C'est une subordonnée. Le verbe est à la **FIN**.\n2. **Seconde partie (desto/umso)** : C'est la principale. Le verbe est en **POSITION 2** (juste après le bloc comparatif).\n\n**Structure** : **Je** + [comparatif] + sujet + ... + **verbe**, **desto** + [comparatif] + **verbe** + sujet + ...",
      examples: [
        { de: "**Je** mehr ich lerne, **desto** besser verstehe ich.", fr: "Plus j'apprends, mieux je comprends.", note: "Notez l'ordre : 'lerne' à la fin, 'verstehe' juste après le bloc 'desto besser'." },
        { de: "**Je** kälter es wird, **umso** mehr Energie verbrauchen wir.", fr: "Plus il fait froid, plus nous consommons d'énergie." }
      ]
    },
    {
      id: "b2-6-4",
      title: "6.4 L'Alternative et le Contraste : Einerseits ... andererseits",
      content: "Idéal pour les dissertations ou les débats pour présenter deux points de vue.\n\n• **Einerseits** : D'une part.\n• **Andererseits** : D'autre part.\n\n**Syntaxe** : Ce sont des adverbes. Ils occupent la position 1, donc le verbe suit immédiatement (inversion).\n• *Structure :* Einerseits [Verbe] [Sujet]..., andererseits [Verbe] [Sujet]...",
      examples: [
        { de: "**Einerseits** möchte ich reisen, **andererseits** muss ich sparen.", fr: "D'une part j'aimerais voyager, d'autre part je dois économiser.", note: "Le verbe (möchte/muss) arrive en 2ème position après le connecteur." }
      ]
    },
    {
      id: "b2-6-5",
      title: "6.5 Nuances avancées : Falls vs. Sofern",
      content: "En B2, on remplace souvent *wenn* (si) par des termes plus précis :\n\n• **Falls** : Exprime une éventualité plus incertaine (Au cas où).\n• **Sofern** : Exprime une condition restrictive (Pour autant que / Sous réserve que).\n\n**Syntaxe** : Ce sont des conjonctions de subordination (Verbe à la fin).",
      examples: [
        { de: "**Sofern** das Wetter mitspielt, findet das Fest statt.", fr: "Pour autant que la météo le permette, la fête aura lieu." },
        { de: "**Falls** Sie Fragen haben, rufen Sie mich an.", fr: "Au cas où vous auriez des questions, appelez-moi." }
      ]
    }
  ]
};
