
import { GrammarSection } from '../../../types';

export const modauxSubjectifsB2: GrammarSection = {
  title: "7. Les verbes modaux avec un sens subjectif",
  topics: [
    {
      id: "b2-7-1",
      title: "7.1 Le Concept : Sens Objectif vs Subjectif",
      content: "Jusqu'au B1, vous utilisiez les modaux pour parler de la réalité (Sens Objectif).\n\n• **Objectif** : *Ich muss arbeiten.* (C'est un fait, j'ai une obligation).\n• **Subjectif** : *Er muss krank sein.* (Je ne sais pas s'il est malade, mais j'en suis presque sûr à 95% d'après ce que je vois).\n\nEn B2, le modal n'indique plus la modalité du sujet, mais le **degré de certitude** de celui qui parle.",
      examples: [
        { de: "Er kann gut Deutsch sprechen.", fr: "Il sait bien parler allemand (Capacité - Objectif)." },
        { de: "Das kann nicht wahr sein!", fr: "Cela ne peut pas être vrai ! (Incrédulité - Subjectif)." }
      ]
    },
    {
      id: "b2-7-2",
      title: "7.2 L'Échelle de Probabilité",
      content: "Quatre modaux permettent d'exprimer une supposition plus ou moins forte.\n\n| Modal | Certitude | Signification |\n|---|---|---|\n| **müssen** | **~95%** | Quasi-certitude. Il n'y a pas d'autre explication. |\n| **dürften** | **~75%** | Probabilité forte. C'est très probable. |\n| **können** | **~50%** | Possibilité. C'est une hypothèse parmi d'autres. |\n| **mögen** | **~50%** | Idem que 'können', souvent avec une nuance de concession. |\n\n**Note** : Au sens subjectif, *dürfen* s'utilise presque toujours au **Konjunktiv II** (*dürfte*).",
      examples: [
        { de: "Es klopft. Das **muss** der Postbote sein.", fr: "On frappe. Ce doit être le facteur (Certitude)." },
        { de: "Das Wetter **dürfte** morgen besser werden.", fr: "Le temps devrait s'améliorer demain (Probabilité)." },
        { de: "Er **könnte** im Stau stehen.", fr: "Il se pourrait qu'il soit dans les bouchons (Possibilité)." }
      ]
    },
    {
      id: "b2-7-3",
      title: "7.3 Rapporter des propos : La Rumeur (sollen)",
      content: "Le verbe **sollen** perd son sens de 'devoir' pour signifier **'On dit que...'**.\n\nLe locuteur rapporte une information venant d'une source tierce (journal, on-dit, rumeur) sans en prendre la responsabilité.\n\n• *Équivalent :* Man sagt, dass... / Es heißt, dass...",
      examples: [
        { de: "Der neue Chef **soll** sehr streng sein.", fr: "On dit que le nouveau chef est très sévère." },
        { de: "In Berlin **soll** es gestern geschneit haben.", fr: "Il paraît qu'il a neigé à Berlin hier." }
      ]
    },
    {
      id: "b2-7-4",
      title: "7.4 Rapporter des propos : La Prétention (wollen)",
      content: "Le verbe **wollen** perd son sens de 'vouloir' pour signifier **'Il prétend que...'**.\n\nIci, le sujet affirme quelque chose sur lui-même, mais le locuteur (vous) exprime un **doute** ou une méfiance.\n\n• *Équivalent :* Er behauptet, dass...",
      examples: [
        { de: "Er **will** den Minister persönlich kennen.", fr: "Il prétend connaître le ministre personnellement (mais j'en doute)." },
        { de: "Sie **will** das Geld nicht gestohlen haben.", fr: "Elle prétend ne pas avoir volé l'argent." }
      ]
    },
    {
      id: "b2-7-5",
      title: "7.5 La Structure Temporelle : Le Passé",
      content: "C'est le point technique le plus délicat. Pour exprimer une supposition sur un événement **passé**, on ne conjugue pas le modal au passé, mais l'infinitif.\n\n### Structure\n**Modal (Présent) + Infinitif II (Partizip II + haben/sein)**\n\n• *Présent* : Er muss krank sein. (Il doit être malade maintenant).\n• *Passé* : Er muss krank **gewesen sein**. (Il a dû être malade / Il devait être malade).\n\n**Règle d'or** : Le modal reste au présent car votre supposition a lieu **maintenant** sur un fait **passé**.",
      examples: [
        { de: "Er **soll** im Lotto gewonnen haben.", fr: "On dit qu'il a gagné au loto (Passé)." },
        { de: "Du **musst** den Schlüssel vergessen haben.", fr: "Tu as dû oublier la clé." }
      ]
    },
    {
      id: "b2-7-6",
      title: "7.6 Récapitulatif pour l'examen B2",
      content: "En résumé, quand vous voyez un modal, demandez-vous : Est-ce une capacité/obligation réelle ou une estimation du locuteur ?\n\n| Si vous voulez dire... | Utilisez... |\n|---|---|\n| 'J'en suis sûr' | müssen |\n| 'C'est presque sûr' | dürfte |\n| 'C'est possible' | könnte / mag |\n| 'On dit que...' | soll |\n| 'Il prétend que...' | will |\n| 'C'est impossible' | kann nicht |",
      examples: [
        { de: "Das **mag** stimmen, aber ich glaube es nicht.", fr: "C'est peut-être vrai, mais je n'y crois pas (Concession)." }
      ]
    }
  ]
};
