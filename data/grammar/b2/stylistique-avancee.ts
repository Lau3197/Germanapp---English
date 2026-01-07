
import { GrammarSection } from '../../../types.ts';

export const stylistiqueB2: GrammarSection = {
  title: "4.2 Stylistique et Structure Avancée",
  topics: [
    {
      id: "b2-nominalisierung",
      title: "La nominalisation (Style Nominal)",
      content: "C'est l'art de transformer une phrase verbale en un concept nominal. Indispensable pour les rapports officiels et les examens.\n\n### I. Transformations logiques\n\n| Type | Conjonction (Verbe fin) | Préposition (Style nominal) |\n|---|---|---|\n| **Cause** | weil / da | **wegen / aufgrund** (+ Gen) |\n| **Concession** | obwohl | **trotz** (+ Gen) |\n| **Temps (après)** | nachdem | **nach** (+ Dat) |\n| **Temps (pendant)** | während | **während** (+ Gen) |\n| **Condition** | wenn / falls | **bei** (+ Dat) |\n\n### II. Changements de fonctions\n• Le **Sujet** devient un **complément au Génitif** : Der Chef entscheidet -> Die Entscheidung **des Chefs**.\n• L'**Adverbe** devient un **Adjectif** : Er liest **schnell** -> Sein **schnelles** Lesen.",
      examples: [
        { de: "**Trotz** des Regens (N) / **Obwohl** es regnete (V).", fr: "Malgré la pluie / Bien qu'il plût." },
        { de: "**Nach der Ankunft** der Gäste begann das Essen.", fr: "Après l'arrivée des invités, le repas commença." }
      ]
    },
    {
      id: "b2-participiales",
      title: "Constructions participiales (Attributs étendus)",
      content: "Permettent de supprimer les propositions relatives en plaçant l'information avant le nom.\n\n### I. Participe I (Actif / Simultané)\n• Der Mann, der singt -> Der **singende** Mann.\n\n### II. Participe II (Passif / Terminé)\n• Das Buch, das geschrieben wurde -> Das **geschriebene** Buch.\n\n### III. La structure complexe (Master B2)\n[Article] + {Adverbes/Compléments} + [Participe décliné] + [Nom]\n• *Ex:* Das [von mir gestern in Berlin] **geschriebene** Buch.",
      examples: [
        { de: "Die **sich ständig beschwerenden** Kunden nerven.", fr: "Les clients qui se plaignent sans cesse sont énervants." }
      ]
    },
    {
      id: "b2-connecteurs",
      title: "Connecteurs logiques complexes",
      content: "Maîtriser les connecteurs doubles et la proportionnalité.\n\n• **Je ... desto/umso** : Je mehr du liest, desto besser wirst du. (Plus..., plus...).\n• **Sowohl ... als auch** : Tant ... que.\n• **Nicht nur ... sondern auch** : Non seulement... mais aussi.\n• **Einerseits ... andererseits** : D'une part... d'autre part.",
      examples: [
        { de: "**Je** schneller wir arbeiten, **desto** früher sind wir fertig.", fr: "Plus vite nous travaillons, plus tôt nous finissons." }
      ]
    }
  ]
};
