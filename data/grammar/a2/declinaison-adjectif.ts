
import { GrammarSection } from '../../../types';

export const declinaisonAdjectif: GrammarSection = {
  title: "2.2 La Déclinaison de l'Adjectif (Adjektivdeklination)",
  topics: [
    {
      id: "a2-2-1",
      title: "I. L'Adjectif Épithète vs Attribut",
      content: "Avant d'apprendre les tableaux, il faut comprendre quand décliner :\n\n• **L'Adjectif Attribut** (placé après le verbe être/paraître) : Il ne change **JAMAIS**.\n• **L'Adjectif Épithète** (placé entre l'article et le nom) : Il doit **TOUJOURS** être décliné.\n\nEn allemand, la terminaison de l'adjectif sert à porter l'information du genre ou du cas quand l'article ne suffit pas à le montrer clairement.",
      examples: [
        { de: "Das Auto ist **schnell**.", fr: "La voiture est rapide (Invariable).", note: "Placé après 'ist', l'adjectif reste brut." },
        { de: "Das **schnelle** Auto gehört mir.", fr: "La voiture rapide m'appartient (Décliné).", note: "Placé devant le nom, il s'accorde." }
      ]
    },
    {
      id: "a2-2-2",
      title: "II. Déclinaison Faible (Après article défini)",
      content: "On l'utilise après : **der, die, das, dieser, jener, jeder**.\nL'article porte déjà toute l'information. L'adjectif est 'paresseux' : il ne prend que **-e** ou **-en**.\n\n| CAS | MASCULIN (der Mann) | FÉMININ (die Frau) | NEUTRE (das Kind) | PLURIEL (die Leute) |\n|---|---|---|---|---|\n| **Nom.** | der gut**e** Mann | die gut**e** Frau | das gut**e** Kind | die gut**en** Leute |\n| **Acc.** | den gut**en** Mann | die gut**e** Frau | das gut**e** Kind | die gut**en** Leute |\n| **Dat.** | dem gut**en** Mann | der gut**en** Frau | dem gut**en** Kind | den gut**en** Leute**n** |\n| **Gén.** | des gut**en** Manne**s** | der gut**en** Frau | des gut**en** Kinde**s** | der gut**en** Leute |",
      examples: [
        { de: "Ich sehe den gut**en** Mann.", fr: "Je vois le bon homme.", note: "À l'accusatif masculin, tout finit en -en." },
        { de: "Mit den neu**en** Freunde**n**.", fr: "Avec les nouveaux amis.", note: "Au datif pluriel, le nom prend aussi un -n." }
      ]
    },
    {
      id: "a2-2-3",
      title: "III. Déclinaison Mixte (Après article indéfini)",
      content: "On l'utilise après : **ein, eine, kein** ou les possessifs (**mein, dein...**).\nIci, l'adjectif doit 'aider' l'article à montrer le genre au Nominatif (car 'ein' est identique au masculin et au neutre).\n\n| CAS | MASCULIN (ein Wein) | FÉMININ (eine Suppe) | NEUTRE (ein Buch) | PLURIEL (keine Ideen) |\n|---|---|---|---|---|\n| **Nom.** | ein gut**er** Wein | eine gut**e** Suppe | ein gut**es** Buch | keine gut**en** Ideen |\n| **Acc.** | einen gut**en** Wein | eine gut**e** Suppe | ein gut**es** Buch | keine gut**en** Ideen |\n| **Dat.** | einem gut**en** Wein | einer gut**en** Suppe | einem gut**en** Buch | keinen gut**en** Ideen |\n| **Gén.** | eines gut**en** Weine**s** | einer gut**en** Suppe | eines gut**en** Buche**s** | keiner gut**en** Ideen |",
      examples: [
        { de: "Ein gut**er** Wein.", fr: "Un bon vin.", note: "L'adjectif prend le -er car 'ein' est neutre de forme." },
        { de: "Mein neu**es** Handy.", fr: "Mon nouveau portable.", note: "Le -es rappelle l'article 'das' (Neutre)." }
      ]
    },
    {
      id: "a2-2-4",
      title: "IV. Déclinaison Forte (Sans article)",
      content: "On l'utilise quand il n'y a **aucun article**. L'adjectif doit tout faire tout seul ! Il prend les terminaisons de l'article défini (**der, die, das**).\n\n| CAS | MASCULIN (Kaffee) | FÉMININ (Milch) | NEUTRE (Wasser) | PLURIEL (Freunde) |\n|---|---|---|---|---|\n| **Nom.** | gut**er** Kaffee | frisch**e** Milch | kalt**es** Wasser | gut**e** Freunde |\n| **Acc.** | gut**en** Kaffee | frisch**e** Milch | kalt**es** Wasser | gut**e** Freunde |\n| **Dat.** | gut**em** Kaffee | frisch**er** Milch | kalt**em** Wasser | gut**en** Freunde**n** |\n| **Gén.** | gut**en** Kaffee**s** | frisch**er** Milch | gut**en** Wasser**s** | gut**er** Freunde |",
      examples: [
        { de: "Kalt**es** Wasser ist gesund.", fr: "L'eau froide est saine.", note: "Pas d'article : l'adjectif porte le 'es' du neutre." },
        { de: "Ich wünsche dir viel**en** Dank.", fr: "Je te remercie beaucoup.", note: "Accusatif masculin sans article : -en (comme 'den')." }
      ]
    },
    {
      id: "a2-2-5",
      title: "V. Résumé Stratégique",
      content: "Pour ne plus faire d'erreur, posez-vous ces deux questions :\n\n1. **Y a-t-il un article 'riche' ?** (der/die/das/den/dem...) -> Oui ? Alors l'adjectif est 'pauvre' (**-e** ou **-en**).\n2. **L'article est-il absent ou 'pauvre' ?** (ein/mein/kein au nominatif) -> Oui ? Alors l'adjectif doit être 'riche' et montrer le genre (**-er, -es, -e**).\n\n**Note sur le Génitif** : Au masculin et au neutre singulier, le nom prend presque toujours un **-(e)s** à la fin.",
      examples: [
        { de: "Wegen des schlecht**en** Wetter**s**.", fr: "À cause du mauvais temps.", note: "Génitif : -en sur l'adjectif et -s sur le nom." }
      ]
    }
  ]
};
