import { GrammarSection } from '../../../types';

export const pointsSpecifiquesB2: GrammarSection = {
  title: "Specific Grammar Points",
  topics: [
    {
      id: "b2-3-1",
      title: "1. Modal Verbs with Subjective Meaning",
      content: "Here, modal verbs express an assumption or a rumor.\n\n• **sollen**: people say that... (rumor).\n• **wollen**: he/she claims that... (the subject's own statement).",
      examples: [
        { de: "Er **soll** sehr reich sein.", fr: "People say he is very rich." },
        { de: "Er **will** den Chef gesehen haben.", fr: "He claims to have seen the boss." }
      ]
    },
    {
      id: "b2-3-2",
      title: "2. Mastering Complex Declensions",
      content: "At B2 level, you master substantivized adjectives such as Ein Deutscher and der Deutsche.",
      examples: [
        { de: "Ich habe **etwas Gutes** getan.", fr: "I did something good." },
        { de: "Herzliche Grüße an alle **Anwesenden**.", fr: "Warm greetings to everyone present." }
      ]
    },
    {
      id: "b2-3-3",
      title: "3. Prepositions vs Conjunctions: The B2 Guide",
      content: `To succeed at B2 level, you need to know how to transform a subordinate clause (**verbal style**) into a noun group (**nominal style**).

### I. The Fundamental Difference
• **The conjunction**: Introduces a subordinate clause. The **verb is at the end**.
• **The preposition**: Introduces a noun group. It imposes a **case** (genitive or dative).

### II. Correspondence Table (Logik-Tabelle)

| Intention | Conjunction (verbal) | Preposition (nominal) |
|---|---|---|
| **Cause** | **weil / da** (+ final verb) | **wegen / aufgrund** (+ gen.) |
| **Concession** | **obwohl** (+ final verb) | **trotz** (+ gen.) |
| **Condition** | **wenn / falls** (+ final verb) | **bei** (+ dat.) |
| **Time (during)** | **während** (+ final verb) | **während** (+ gen.) |
| **Time (after)** | **nachdem** (+ final verb) | **nach** (+ dat.) |
| **Time (before)** | **bevor** (+ final verb) | **vor** (+ dat.) |

### III. Focus: ALS vs WENN (The Time Trap)
• **ALS**: **One-time** and **completed** action in the past.
• **WENN**: **Repeated** action in the past OR action in the **present/future**.

### IV. Focus: NACH vs NACHDEM
This is the most frequent mistake:
• *Nach dem Essen* (preposition + noun) -> **Correct**
• *Nachdem ich gegessen hatte* (conjunction + subject/verb) -> **Correct**
• *Nach ich gegessen habe* -> **INCORRECT**`,
      examples: [
        { de: "**Trotz** des Regens gingen wir spazieren.", fr: "Despite the rain (preposition), we went for a walk.", note: "Nominal style." },
        { de: "**Obwohl** es regnete, gingen wir spazieren.", fr: "Although it was raining (conjunction), we went for a walk.", note: "Verbal style." },
        { de: "**Nachdem** er die Prüfung bestanden hatte, feierte er.", fr: "After he had passed the exam (conjunction), he celebrated.", note: "Anteriority: pluperfect in the subordinate clause." },
        { de: "**Bei** Ankunft des Zuges rufen Sie mich bitte an.", fr: "Upon the train's arrival, please call me.", note: "Nominal transformation of 'Wenn der Zug ankommt'." }
      ]
    }
  ]
};
