
import { GrammarSection } from '../../../types';

export const casFinalisationB1: GrammarSection = {
  title: "3.3 Les Cas (Fälle) - Finalisation",
  topics: [
    {
      id: "b1-3-1",
      title: "Le Génitif (Genitiv)",
      content: "Le Génitif exprime la possession ou l'appartenance. C'est le 'de' français.\n\n| ARTICLE | MASCULIN | FÉMININ | NEUTRE | PLURIEL |\n|---|---|---|---|---|\n| **Défini** | des gut**en** Mann**es** | der gut**en** Frau | des gut**en** Kind**es** | der gut**en** Leute |\n| **Indéfini** | eines gut**en** Mann**es** | einer gut**en** Frau | eines gut**en** Kind**es** | keiner gut**en** Leute |\n\n**Règle importante** : Au masculin et au neutre, le nom prend un **-s** (ou **-es**).",
      examples: [
        { de: "Das Auto **meines Vaters**.", fr: "La voiture de mon père." },
        { de: "Die Farbe **der Tür**.", fr: "La couleur de la porte." }
      ]
    },
    {
      id: "b1-3-2",
      title: "Prépositions suivies du Génitif",
      content: "Certaines prépositions demandent obligatoirement le génitif, surtout à l'écrit.\n\n• **wegen** : à cause de\n• **während** : pendant\n• **trotz** : malgré\n• **statt** : au lieu de",
      examples: [
        { de: "**Wegen des Wetters** bleiben wir hier.", fr: "À cause du temps, nous restons ici." },
        { de: "**Trotz der Kälte** geht er joggen.", fr: "Malgré le froid, il va courir." }
      ]
    }
  ]
};
