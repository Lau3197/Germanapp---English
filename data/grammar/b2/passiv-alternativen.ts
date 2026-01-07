
import { GrammarSection } from '../../../types.ts';

export const passivAlternativenB2: GrammarSection = {
  title: "3. Les alternatives au passif (Passiversatzformen)",
  topics: [
    {
      id: "b2-3-1",
      title: "3.1 Pourquoi éviter le passif ?",
      content: "Le passif avec 'werden' est grammaticalement juste mais souvent lourd. Les alternatives permettent :\n• De rendre le texte plus fluide.\n• D'exprimer des nuances de **possibilité** ou d'**obligation** de façon concise.",
      examples: [
        { de: "Das Problem kann gelöst werden.", fr: "Le problème peut être résolu (Passif standard)." },
        { de: "Das Problem ist lösbar.", fr: "Le problème est résolvable (Alternative concise)." }
      ]
    },
    {
      id: "b2-3-2",
      title: "3.2 La structure 'sich lassen' + infinitif",
      content: "C'est l'alternative la plus élégante pour exprimer la **possibilité**. Elle remplace *können + Passif*.\n\n• *Transformation* : Das Auto kann repariert werden -> Das Auto **lässt sich** reparieren.",
      examples: [
        { de: "Die Tür **lässt sich** nicht **öffnen**.", fr: "La porte ne peut pas être ouverte.", note: "Sens de possibilité." }
      ]
    },
    {
      id: "b2-3-3",
      title: "3.3 La structure 'sein + zu + infinitif'",
      content: "Structure très formelle (administration, mode d'emploi). Elle exprime :\n1. **L'obligation** (müssen) : *Die Hausaufgaben sind zu machen.*\n2. **La possibilité** (können) : *Die Schrift ist schwer zu lesen.*",
      examples: [
        { de: "Dieses Formular **ist auszufüllen**.", fr: "Ce formulaire est à remplir / doit être rempli.", note: "Sens d'obligation." }
      ]
    },
    {
      id: "b2-3-4",
      title: "3.4 Les adjectifs en '-bar' und '-lich'",
      content: "Certains suffixes transforment le verbe en adjectif avec un sens passif de possibilité.\n• **-bar** : machbar (faisable), essbar (comestible).\n• **-lich** : leserlich (lisible), erklärlich (explicable).",
      examples: [
        { de: "Das Wasser ist nicht **trinkbar**.", fr: "L'eau n'est pas potable (ne peut pas être bue)." }
      ]
    },
    {
      id: "b2-3-5",
      title: "3.5 Les verbes réfléchis à sens passif",
      content: "Certains verbes à la forme réfléchie décrivent un processus automatique.\n• *Ex:* Das Buch **verkauft sich** gut. (Le livre se vend bien / est bien vendu).",
      examples: [
        { de: "Die Frage **beantwortet sich** von selbst.", fr: "La question se répond d'elle-même." }
      ]
    },
    {
      id: "b2-3-6",
      title: "3.6 Le tableau récapitulatif des équivalences",
      content: "| Structure | Sens | Équivalent Passif |\n|---|---|---|\n| **man** + actif | Neutre | werden |\n| **sich lassen** + Inf. | Possibilité | können + werden |\n| **sein + zu** + Inf. | Obligation / Poss. | müssen / können + werden |\n| **Adj. in -bar / -lich** | Capacité | können + werden |",
      examples: [
        { de: "Das ist nicht **machbar**.", fr: "Ce n'est pas faisable.", note: "Équivaut à 'kann nicht gemacht werden'." }
      ]
    }
  ]
};
