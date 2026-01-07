
import { GrammarSection } from '../../../types';

export const casApprofondissement: GrammarSection = {
  title: "2.3 Les Cas (Fälle) - Approfondissement",
  topics: [
    {
      id: "a2-3-1",
      title: "Les prépositions de lieu (Wechselpräpositionen)",
      content: "Certaines prépositions demandent soit l'**Accusatif**, soit le **Datif** selon le contexte.\n\n• **Accusatif = Mouvement / Direction** (Wohin?): On déplace un objet.\n• **Datif = Position / Lieu fixe** (Wo?): L'objet est immobile.\n\n### Liste des 9 prépositions mixtes\n**an, auf, hinter, in, neben, über, unter, vor, zwischen**.",
      examples: [
        { de: "Ich stelle das Glas auf den Tisch.", fr: "Je pose le verre sur la table.", note: "Accusatif (Mouvement)." },
        { de: "Das Glas steht auf dem Tisch.", fr: "Le verre est (posé) sur la table.", note: "Datif (Position fixe)." }
      ]
    },
    {
      id: "a2-3-2",
      title: "Prépositions toujours Datif ou Accusatif",
      content: "Certaines prépositions ne changent jamais de cas.\n\n• **Toujours ACCUSATIF** : bis, durch, für, gegen, ohne, um.\n• **Toujours DATIF** : aus, bei, mit, nach, seit, von, zu.",
      examples: [
        { de: "Das Geschenk ist für dich.", fr: "Le cadeau est pour toi.", note: "Accusatif obligatoire." },
        { de: "Ich fahre mit dem Bus.", fr: "Je vais en bus.", note: "Datif obligatoire (der Bus -> dem Bus)." }
      ]
    }
  ]
};
