
import { GrammarSection } from '../../../types';

export const pointsSpecifiquesB2: GrammarSection = {
  title: "Points de grammaire spécifiques",
  topics: [
    {
      id: "b2-3-1",
      title: "1. Verbes à modalité avec un sens subjectif",
      content: "Les modaux expriment ici une supposition ou une rumeur.\n\n• **sollen** : On dit que... (rumeur).\n• **wollen** : Il prétend que... (affirmation du sujet).",
      examples: [
        { de: "Er **soll** sehr reich sein.", fr: "On dit qu'il est très riche." },
        { de: "Er **will** den Chef gesehen haben.", fr: "Il prétend avoir vu le chef." }
      ]
    },
    {
      id: "b2-3-2",
      title: "2. Maîtrise des déclinaisons complexes",
      content: "Au niveau B2, on maîtrise les adjectifs substantivés (Ein Deutscher, der Deutsche).",
      examples: [
        { de: "Ich habe **etwas Gutes** getan.", fr: "J'ai fait quelque chose de bien." },
        { de: "Herzliche Grüße an alle **Anwesenden**.", fr: "Salutations cordiales à tous les présents." }
      ]
    },
    {
      id: "b2-3-3",
      title: "3. Prépositions vs Conjonctions : Le guide B2",
      content: `Pour réussir le niveau B2, vous devez savoir transformer une subordonnée (**Style Verbal**) en groupe nominal (**Style Nominal**).

### I. La Différence Fondamentale
• **La Conjonction** : Introduit une subordonnée. Le **verbe est à la fin**.
• **La Préposition** : Introduit un groupe nominal. Elle impose un **cas** (Génitif ou Datif).

### II. Tableau de correspondance (Logik-Tabelle)

| Intention | Conjonction (Verbal) | Préposition (Nominal) |
|---|---|---|
| **Cause** | **weil / da** (+ verbe fin) | **wegen / aufgrund** (+ Gén.) |
| **Concession** | **obwohl** (+ verbe fin) | **trotz** (+ Gén.) |
| **Condition** | **wenn / falls** (+ verbe fin) | **bei** (+ Datif) |
| **Temps (pendant)** | **während** (+ verbe fin) | **während** (+ Gén.) |
| **Temps (après)** | **nachdem** (+ verbe fin) | **nach** (+ Datif) |
| **Temps (avant)** | **bevor** (+ verbe fin) | **vor** (+ Datif) |

### III. Focus : ALS vs WENN (Le piège temporel)
• **ALS** : Action **unique** et **terminée** dans le passé.
• **WENN** : Action **répétée** dans le passé OU action au **présent/futur**.

### IV. Focus : NACH vs NACHDEM
C'est l'erreur la plus fréquente :
• *Nach dem Essen* (Préposition + Nom) -> **Correct**
• *Nachdem ich gegessen hatte* (Conjonction + Sujet/Verbe) -> **Correct**
• *Nach ich gegessen habe* -> **FAUX**`,
      examples: [
        { de: "**Trotz** des Regens gingen wir spazieren.", fr: "Malgré la pluie (Préposition), nous sommes allés nous promener.", note: "Style Nominal." },
        { de: "**Obwohl** es regnete, gingen wir spazieren.", fr: "Bien qu'il plût (Conjonction), nous sommes allés nous promener.", note: "Style Verbal." },
        { de: "**Nachdem** er die Prüfung bestanden hatte, feierte er.", fr: "Après avoir réussi l'examen (Conjonction), il a fêté ça.", note: "Antériorité : PQP dans la subordonnée." },
        { de: "**Bei** Ankunft des Zuges rufen Sie mich bitte an.", fr: "À l'arrivée du train, appelez-moi s'il vous plaît.", note: "Transformation nominale de 'Wenn der Zug ankommt'." }
      ]
    }
  ]
};
