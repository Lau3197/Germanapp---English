
import { GrammarSection } from '../../../types.ts';

export const pointsExpertsB2: GrammarSection = {
  title: "4.3 Points de Grammaire Spécifiques",
  topics: [
    {
      id: "b2-modaux-subjectifs",
      title: "Verbes modaux avec sens subjectif",
      content: "Exprimer une rumeur, une supposition ou une prétention.\n\n• **sollen** : La rumeur (On dit que...). *Er soll sehr reich sein.*\n• **wollen** : La prétention (Il prétend que...). *Er will den Minister kennen.*\n• **dürften** : La probabilité forte (75%). *Das dürfte stimmen.*\n• **müssen** : La quasi-certitude. *Er muss den Zug verpasst haben.*",
      examples: [
        { de: "Er **soll** im Lotto gewonnen haben.", fr: "On dit qu'il a gagné au loto (Rumeur)." }
      ]
    },
    {
      id: "b2-declinaisons-expert",
      title: "Maîtrise des déclinaisons complexes",
      content: "Le point le plus difficile du B2. Focus sur les adjectifs qui deviennent des noms.\n\n### I. Les Adjectifs Substantivés (Le nom fantôme)\nUn adjectif qui joue le rôle d'un nom. Il garde sa **déclinaison d'adjectif** selon l'article !\n\n| Article | Masculin | Féminin | Neutre |\n|---|---|---|---|\n| **Défini (der/die/das)** | der Deutsche | die Deutsche | das Gute |\n| **Indéfini (ein/etwas)** | ein Deutsche**r** | eine Deutsche | etwas Gute**s** |\n\n### II. La N-Deklination (Masculins faibles)\nCertains noms masculins (humains ou animaux en -e) prennent un **-n** ou **-en** à TOUS les cas sauf au nominatif.\n• *Mots types :* der Kollege, der Junge, der Tourist, der Herr, der Nachbar.\n• *Exemple :* Ich sehe den **Kollegen**. (Accusatif).",
      examples: [
        { de: "Herzliche Grüße an alle **Anwesenden**.", fr: "Salutations cordiales à toutes les personnes présentes.", note: "Pluriel Datif : -en." },
        { de: "Haben Sie mit dem **Touristen** gesprochen?", fr: "Avez-vous parlé au touriste ?", note: "N-Deklination au Datif." },
        { de: "Ich habe **etwas Interessantes** gelesen.", fr: "J'ai lu quelque chose d'intéressant.", note: "Neutre après 'etwas' : -es." }
      ]
    },
    {
      id: "b2-prepositions-conj",
      title: "Subtilités Prépositions vs Conjonctions",
      content: "Maîtriser le passage du temps et de la cause.\n\n• **als vs wenn** : 'Als' pour un fait unique passé. 'Wenn' pour le présent ou l'habitude.\n• **nach vs nachdem** : 'Nach' + Nom. 'Nachdem' + Proposition (Souvent au PQP).\n• **vor vs bevor** : 'Vor' + Nom. 'Bevor' + Proposition.",
      examples: [
        { de: "**Nachdem** er gegessen hatte, ging er.", fr: "Après qu'il eut mangé (PQP), il partit." },
        { de: "**Vor** dem Essen (N) / **Bevor** il isst (V).", fr: "Avant le repas / Avant qu'il ne mange." }
      ]
    }
  ]
};
