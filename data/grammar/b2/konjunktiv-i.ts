
import { GrammarSection } from '../../../types.ts';

export const konjunktivIB2: GrammarSection = {
  title: "1. Le Subjonctif I (Konjunktiv I) - Le Discours Indirect",
  topics: [
    {
      id: "b2-1-1",
      title: "1.1 Philosophie et usage par personne",
      content: "Le Konjunktiv I est le mode de la **neutralité**. On l'utilise pour rapporter les paroles de quelqu'un sans s'engager sur la véracité des faits.\n\n### À quelles personnes l'utilise-t-on ?\n• **En théorie** : Il existe pour toutes les personnes (ich, du, er, wir, ihr, sie).\n• **En pratique** : L'allemand déteste l'ambiguïté. Si la forme du KI est identique à l'indicatif présent, on ne peut pas l'utiliser. \n• **La règle d'or** : \n  - La **3ème personne du singulier** (er/sie/es) est la forme 'reine' car elle est **toujours** différente de l'indicatif (*er habe* vs *er hat*).\n  - Le verbe **sein** est utilisé à toutes les personnes car ses formes sont toujours distinctes.\n  - Pour les autres personnes (ich, wir, sie pl.), on utilise presque systématiquement la **substitution** par le Konjunktiv II.",
      examples: [
        { de: "Der Minister sagte, die Steuern **seien** zu hoch.", fr: "Le ministre a dit que les impôts étaient (seraient) trop élevés.", note: "3ème pers. pluriel de SEIN : forme distincte autorisée." },
        { de: "Er sagt, er **habe** kein Geld.", fr: "Il dit qu'il n'a pas d'argent.", note: "3ème pers. singulier : forme classique du KI." }
      ]
    },
    {
      id: "b2-1-2",
      title: "1.2 Tableau de conjugaison : le système des terminaisons",
      content: "La formation est simple : **Radical de l'infinitif + Terminaisons du KI**. \n*Note : Contrairement au présent de l'indicatif, le radical ne change JAMAIS (pas de changement e->i ou de Umlaut).*\n\n### Terminaisons fixes\n| Personne | Terminaison | Exemple (machen) |\n|---|---|---|\n| ich | **-e** | ich mache (identique Ind. -> substitution) |\n| du | **-est** | du machest |\n| er/sie/es | **-e** | **er mache** (distinct de 'macht') |\n| wir | **-en** | wir machen (identique Ind. -> substitution) |\n| ihr | **-et** | ihr machet |\n| sie / Sie | **-en** | sie machen (identique Ind. -> substitution) |\n\n### Cas particulier : SEIN (indispensable)\nich **sei**, du **seiest**, er **sei**, wir **seien**, ihr **seiet**, sie **seien**.",
      examples: [
        { de: "Man sagt, er **wisse** alles.", fr: "On dit qu'il sait tout.", note: "KI de 'wissen'. Le radical reste celui de l'infinitif." }
      ]
    },
    {
      id: "b2-1-3",
      title: "1.3 La règle de substitution",
      content: "Quand la forme du KI ressemble à l'indicatif, on utilise la 'chaîne de secours' :\n\n1. **KI = Indicatif ?** -> On remplace par le **Konjunktiv II** simple (ex: *hätten, kämen*).\n2. **KII = Prétérit ?** -> On remplace par la forme **würde + Infinitif**.\n\n### Exemple avec 'lernen'\n• *Indicatif* : wir lernen.\n• *KI (théorique)* : wir lernen. -> **STOP** (Identique).\n• *Substitution KII* : wir lernten. -> **STOP** (Identique au passé).\n• *Forme finale* : wir **würden lernen**.",
      examples: [
        { de: "Sie sagen, sie **hätten** Hunger.", fr: "Ils disent qu'ils ont faim.", note: "Substitution par le KII car 'haben' (KI) = 'haben' (Ind)." }
      ]
    },
    {
      id: "b2-1-4",
      title: "1.4 Le Konjunktiv I à tous les temps",
      content: "Le KI possède son propre système temporel simplifié. Plusieurs temps de l'indicatif fusionnent.\n\n### I. Le Passé (forme unique)\nQu'il s'agisse de Parfait, Prétérit ou PQP à l'indicatif, le KI n'a qu'une forme :\n**Auxiliaire (sei/habe) + Partizip II**.\n• *Ex:* Er **habe gearbeitet** / Er **sei gekommen**.\n\n### II. Le Futur\n**werden (KI) + Infinitif**.\n• *Ex:* Er **werde kommen**.\n\n### III. Le Présent\nLa forme simple vue au point 1.2.\n• *Ex:* Er **gehe**.",
      examples: [
        { de: "Der Zeuge sagte, er **habe** den Mann **gesehen**.", fr: "Le témoin a dit avoir vu l'homme.", note: "KI au passé." }
      ]
    },
    {
      id: "b2-1-5",
      title: "1.5 Focus francophone : les pièges",
      content: "### Les 3 erreurs majeures :\n1. **KI ≠ Souhait** : Ne traduisez pas 'Je veux qu'il vienne' par le KI. Utilisez l'indicatif : *Ich will, dass er kommt*.\n2. **Confusion KI/KII** : \n   - KI = 'On m'a dit que' (neutralité).\n   - KII = 'Il prétend que, mais c'est faux' (doute/irréel).\n3. **L'oubli du -e** : À la 3ème personne, ne dites pas 'Er sagt, er hat', dites 'Er sagt, er **habe**'.",
      examples: [
        { de: "Ich hoffe, dass du **kommst**.", fr: "J'espère que tu viennes (Subjonctif en FR, Indicatif en DE).", note: "Piège classique." }
      ]
    }
  ]
};
