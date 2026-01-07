
import { GrammarSection } from '../../../types.ts';

export const passivDetailsB2: GrammarSection = {
  title: "2. Le Passif (Passiv)",
  topics: [
    {
      id: "b2-2-1",
      title: "2.1 La logique : processus et résultats",
      content: "L'allemand distingue deux types de passif là où le français n'utilise qu'une structure.\n\n### Vorgangspassiv (Passif d'action)\nIl décrit l'action pendant qu'elle se passe. On utilise **werden**.\n• *Ex:* Der Brief **wird** geschrieben. (On écrit la lettre).\n\n### Zustandspassiv (Passif d'état)\nIl décrit le résultat final, l'état une fois l'action finie. On utilise **sein**.\n• *Ex:* Der Brief **ist** geschrieben. (La lettre est écrite/terminée).",
      examples: [
        { de: "Die Tür **wird** geschlossen.", fr: "On ferme la porte (action).", note: "Passif de processus." },
        { de: "Die Tür **ist** geschlossen.", fr: "La porte est fermée (état).", note: "Passif d'état." }
      ]
    },
    {
      id: "b2-2-2",
      title: "2.2 Le passif d'état à tous les temps",
      content: "Le passif d'état se conjugue avec l'auxiliaire **sein**.\n\n| Temps | Structure | Exemple |\n|---|---|---|\n| **Présent** | ist + P.II | Die Arbeit **ist** getan. |\n| **Prétérit** | war + P.II | Die Arbeit **war** getan. |\n| **Futur I** | wird... sein + P.II | Die Arbeit **wird** getan **sein**. |\n| **Parfait** | ist... gewesen + P.II | Die Arbeit **ist** getan **gewesen** (rare). |\n\n**Note** : On utilise presque exclusivement le Présent et le Prétérit.",
      examples: [
        { de: "Morgen wird alles **erledigt sein**.", fr: "Demain, tout sera réglé.", note: "Futur du passif d'état." }
      ]
    },
    {
      id: "b2-2-3",
      title: "2.3 Quels verbes peut-on utiliser ?",
      content: "On ne peut pas créer un passif d'état avec tous les verbes. \n\n### Les conditions :\n1. Le verbe doit être **transitif** (avoir un COD).\n2. L'action doit aboutir à un **changement d'état durable**.\n\n• **Verbes OK** : öffnen, schließen, reparieren, kochen, verletzen.\n• **Verbes interdits** : \n  - *Intransitifs* : gehen, schlafen.\n  - *Sans état final* : helfen, bewundern, schlagen.",
      examples: [
        { de: "Er **ist verletzt**.", fr: "Il est blessé.", note: "Correct." },
        { de: "Mir ist geholfen. ❌", fr: "J'ai été aidé. ❌", note: "Faux ! On dira : 'Mir wurde geholfen' (Action)." }
      ]
    },
    {
      id: "b2-2-4",
      title: "2.4 Focus francophone : éviter les confusions",
      content: "Le piège est la confusion avec le **Passé Composé Actif**.\n\n• **Actif** : *Ich bin gegangen*. (Je suis allé). C'est moi qui fais l'action.\n• **Passif d'état** : *Die Tür ist geöffnet*. (La porte est ouverte). Elle subit l'action.\n\n**Astuce** : Si le sujet est un objet inanimé, c'est presque toujours un passif d'état.",
      examples: [
        { de: "Der Kuchen **ist** schon **gebacken**.", fr: "Le gâteau est déjà cuit.", note: "Passif d'état (résultat)." }
      ]
    }
  ]
};
