
import { GrammarSection } from '../../../types';

export const nominalisationB2: GrammarSection = {
  title: "4. La nominalisation (Nominalisierung)",
  topics: [
    {
      id: "b2-4-1",
      title: "4.1 Philosophie : Pourquoi nominaliser ?",
      content: "La nominalisation consiste à transformer un message porté par un verbe (**Style Verbal**) en un message porté par un nom (**Style Nominal**).\n\n### Pourquoi l'utiliser ?\n• **Formalité** : C'est la langue de l'administration, de la science et de la presse.\n• **Concision** : On gagne de la place en supprimant les subordonnées (weil, obwohl, wenn).\n• **Objectivité** : Le nom efface souvent l'action pour se concentrer sur le concept.\n\n### La règle de base\nAu lieu de dire : *On a décidé que...* (Verbe)\nOn dit : *La décision de...* (Nom)",
      examples: [
        { de: "Er entscheidet schnell.", fr: "Il décide vite (Style verbal)." },
        { de: "Seine **schnelle Entscheidung** überraschte uns.", fr: "Sa décision rapide nous a surpris (Style nominal)." }
      ]
    },
    {
      id: "b2-4-2",
      title: "4.2 La mécanique : Les 3 transformations clés",
      content: "Pour nominaliser une phrase, vous devez effectuer un glissement grammatical systématique :\n\n### 1. Le Verbe devient un Nom\nC'est le pivot. Vous devez trouver le nom correspondant au verbe.\n• *entscheiden* -> die Entscheidung\n• *besuchen* -> der Besuch\n• *essen* -> das Essen\n\n### 2. Le Sujet devient un complément au Génitif\nLe sujet de l'action se place après le nouveau nom, généralement au **Génitif**.\n• *Der Chef* entscheidet -> Die Entscheidung **des Chefs**.\n\n### 3. L'Adverbe devient un Adjectif\nL'adverbe qui qualifiait le verbe doit maintenant qualifier le nom. Il se place devant lui et se décline.\n• Er entscheidet *schnell* -> Seine **schnelle** Entscheidung.",
      examples: [
        { de: "Die Regierung (S) diskutiert (V) intensiv (Adv).", fr: "Le gouvernement discute intensément." },
        { de: "Die **intensive Diskussion der Regierung**.", fr: "L'intense discussion du gouvernement.", note: "Notez l'accord de l'adjectif intensive." }
      ]
    },
    {
      id: "b2-4-3",
      title: "4.3 Tableau de conversion : Connecteurs logiques",
      content: "C'est le point le plus important pour les examens B2. Vous devez savoir remplacer une conjonction (parce que, bien que...) par une préposition équivalente.\n\n| Logique | Conjonction (Verbal + Verbe fin) | Préposition (Nominal + Cas) |\n|---|---|---|\n| **Cause** | weil / da | **wegen / aufgrund** (+ Gen) |\n| **Concession** | obwohl | **trotz** (+ Gen) |\n| **Temps (après)** | nachdem | **nach** (+ Dat) |\n| **Temps (avant)** | bevor | **vor** (+ Dat) |\n| **Temps (pendant)** | während | **während** (+ Gen) |\n| **Condition** | wenn / falls | **bei** (+ Dat) |\n| **Manière** | indem | **durch** (+ Acc) |",
      examples: [
        { de: "**Obwohl** es regnete, gingen wir raus.", fr: "Bien qu'il plût, nous sommes sortis." },
        { de: "**Trotz des Regens** gingen wir raus.", fr: "Malgré la pluie, nous sommes sortis.", note: "Transformation de la subordonnée en groupe prépositionnel." }
      ]
    },
    {
      id: "b2-4-4",
      title: "4.4 Gérer les compléments (COD et COI)",
      content: "Que faire du complément d'objet quand le verbe disparaît ?\n\n### I. Le COD (Accusatif) -> Génitif\nSi le verbe avait un COD, celui-ci devient souvent le complément du nom au génitif.\n• *Wir bauen das Haus* -> Der Bau **des Hauses**.\n\n### II. Les prépositions fixes\nSi le verbe utilisait une préposition, le nom la garde presque toujours.\n• *Wir warten auf den Bus* -> Das Warten **auf den Bus**.\n• *Er interessiert sich für Kunst* -> Sein Interesse **für Kunst**.",
      examples: [
        { de: "Wir prüfen die Dokumente.", fr: "Nous vérifions les documents." },
        { de: "Die Prüfung **der Dokumente** dauert lange.", fr: "La vérification des documents dure longtemps." }
      ]
    },
    {
      id: "b2-4-5",
      title: "4.5 Focus : La formation des noms (Suffixes)",
      content: "Comment trouver le nom à partir du verbe ? Voici les modèles fréquents :\n\n• **-ung (Féminin)** : Le plus fréquent pour les processus. *planen -> die Planung*.\n• **L'Infinitif Substantivé (Neutre)** : Pour l'action brute. *essen -> das Essen*.\n• **Le radical pur** : Souvent masculin. *besuchen -> der Besuch*, *laufen -> der Lauf*.\n• **Changement de voyelle** : *schließen -> der Schluss*, *ziehen -> der Zug*.\n• **-ion / -tät / -ur** : Pour les mots d'origine latine. *produzieren -> die Produktion*.",
      examples: [
        { de: "Wir informieren die Kunden.", fr: "Nous informons les clients." },
        { de: "Die **Information** der Kunden ist wichtig.", fr: "L'information des clients est importante." }
      ]
    }
  ]
};
