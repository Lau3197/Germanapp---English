
import { GrammarSection } from '../../../types';

export const modauxSubjectifsB2: GrammarSection = {
  title: "7. Modal Verbs with Subjective Meaning",
  topics: [
    {
      id: "b2-7-1",
      title: "7.1 The Concept: Objective vs Subjective Meaning",
      content: "Up to B1, you used modal verbs to talk about reality (objective meaning).\n\n• **Objective**: *Ich muss arbeiten.* (This is a fact; I have an obligation.)\n• **Subjective**: *Er muss krank sein.* (I do not know whether he is ill, but based on what I see, I am about 95% sure.)\n\nAt B2 level, the modal no longer indicates the subject's modality, but the speaker's **degree of certainty**.",
      examples: [
        { de: "Er kann gut Deutsch sprechen.", fr: "He can speak German well (ability - objective)." },
        { de: "Das kann nicht wahr sein!", fr: "That cannot be true! (disbelief - subjective)." }
      ]
    },
    {
      id: "b2-7-2",
      title: "7.2 The Probability Scale",
      content: "Four modal verbs can express a stronger or weaker assumption.\n\n| Modal | Certainty | Meaning |\n|---|---|---|\n| **müssen** | **~95%** | Near certainty. There is no other explanation. |\n| **dürften** | **~75%** | Strong probability. It is very likely. |\n| **können** | **~50%** | Possibility. It is one hypothesis among others. |\n| **mögen** | **~50%** | Similar to 'können', often with a concessive nuance. |\n\n**Note**: In subjective meaning, *dürfen* is almost always used in **Konjunktiv II** (*dürfte*).",
      examples: [
        { de: "Es klopft. Das **muss** der Postbote sein.", fr: "There is a knock. That must be the mail carrier (certainty)." },
        { de: "Das Wetter **dürfte** morgen besser werden.", fr: "The weather is likely to get better tomorrow (probability)." },
        { de: "Er **könnte** im Stau stehen.", fr: "He could be stuck in traffic (possibility)." }
      ]
    },
    {
      id: "b2-7-3",
      title: "7.3 Reporting Statements: Rumor (sollen)",
      content: "The verb **sollen** loses its meaning of 'should' and means **'people say that...'**.\n\nThe speaker reports information from a third-party source (newspaper, hearsay, rumor) without taking responsibility for it.\n\n• *Equivalent:* Man sagt, dass... / Es heißt, dass...",
      examples: [
        { de: "Der neue Chef **soll** sehr streng sein.", fr: "The new boss is said to be very strict." },
        { de: "In Berlin **soll** es gestern geschneit haben.", fr: "Apparently, it snowed in Berlin yesterday." }
      ]
    },
    {
      id: "b2-7-4",
      title: "7.4 Reporting Statements: Claim (wollen)",
      content: "The verb **wollen** loses its meaning of 'to want' and means **'he/she claims that...'**.\n\nHere, the subject states something about themselves, but the speaker expresses **doubt** or distrust.\n\n• *Equivalent:* Er behauptet, dass...",
      examples: [
        { de: "Er **will** den Minister persönlich kennen.", fr: "He claims to know the minister personally, but I doubt it." },
        { de: "Sie **will** das Geld nicht gestohlen haben.", fr: "She claims not to have stolen the money." }
      ]
    },
    {
      id: "b2-7-5",
      title: "7.5 Tense Structure: The Past",
      content: "This is the most delicate technical point. To express an assumption about a **past** event, you do not put the modal in the past; you change the infinitive.\n\n### Structure\n**Modal (present) + Infinitive II (Partizip II + haben/sein)**\n\n• *Present*: Er muss krank sein. (He must be ill now.)\n• *Past*: Er muss krank **gewesen sein**. (He must have been ill.)\n\n**Golden rule**: The modal stays in the present because your assumption is happening **now** about a **past** fact.",
      examples: [
        { de: "Er **soll** im Lotto gewonnen haben.", fr: "He is said to have won the lottery (past)." },
        { de: "Du **musst** den Schlüssel vergessen haben.", fr: "You must have forgotten the key." }
      ]
    },
    {
      id: "b2-7-6",
      title: "7.6 Summary for the B2 Exam",
      content: "In short, when you see a modal verb, ask yourself: is this a real ability/obligation, or the speaker's estimate?\n\n| If you want to say... | Use... |\n|---|---|\n| 'I am sure' | müssen |\n| 'It is almost certain' | dürfte |\n| 'It is possible' | könnte / mag |\n| 'People say that...' | soll |\n| 'He/she claims that...' | will |\n| 'It is impossible' | kann nicht |",
      examples: [
        { de: "Das **mag** stimmen, aber ich glaube es nicht.", fr: "That may be true, but I do not believe it (concession)." }
      ]
    }
  ]
};
