
import { GrammarSection } from '../../../types.ts';

export const konjunktivIB2: GrammarSection = {
  title: "1. Subjunctive I (Konjunktiv I) - Indirect Speech",
  topics: [
    {
      id: "b2-1-1",
      title: "1.1 Philosophy and Use by Person",
      content: "Konjunktiv I is the mood of **neutrality**. It is used to report someone's words without committing yourself to the truth of the statement.\n\n### Which persons is it used with?\n• **In theory**: It exists for all persons (ich, du, er, wir, ihr, sie).\n• **In practice**: German avoids ambiguity. If the KI form is identical to the present indicative, it cannot be used clearly.\n• **Golden rule**:\n  - The **3rd person singular** (er/sie/es) is the 'pure' form because it is **always** different from the indicative (*er habe* vs *er hat*).\n  - The verb **sein** is used in all persons because its forms are always distinct.\n  - For the other persons (ich, wir, sie plural), German almost always uses **substitution** with Konjunktiv II.",
      examples: [
        { de: "Der Minister sagte, die Steuern **seien** zu hoch.", fr: "The minister said that taxes were too high.", note: "3rd person plural of SEIN: distinct form allowed." },
        { de: "Er sagt, er **habe** kein Geld.", fr: "He says that he has no money.", note: "3rd person singular: classic KI form." }
      ]
    },
    {
      id: "b2-1-2",
      title: "1.2 Conjugation Table: The Ending System",
      content: "The formation is simple: **infinitive stem + KI endings**.\n*Note: Unlike the present indicative, the stem NEVER changes. There is no e->i change and no Umlaut.*\n\n### Fixed Endings\n| Person | Ending | Example (machen) |\n|---|---|---|\n| ich | **-e** | ich mache (same as indicative -> substitution) |\n| du | **-est** | du machest |\n| er/sie/es | **-e** | **er mache** (distinct from 'macht') |\n| wir | **-en** | wir machen (same as indicative -> substitution) |\n| ihr | **-et** | ihr machet |\n| sie / Sie | **-en** | sie machen (same as indicative -> substitution) |\n\n### Special Case: SEIN (Essential)\nich **sei**, du **seiest**, er **sei**, wir **seien**, ihr **seiet**, sie **seien**.",
      examples: [
        { de: "Man sagt, er **wisse** alles.", fr: "They say he knows everything.", note: "KI of 'wissen'. The stem stays the infinitive stem." }
      ]
    },
    {
      id: "b2-1-3",
      title: "1.3 The Substitution Rule",
      content: "When the KI form looks like the indicative, German uses a 'backup chain':\n\n1. **KI = indicative?** -> Replace it with the simple **Konjunktiv II** form (for example: *hätten, kämen*).\n2. **KII = Präteritum?** -> Replace it with **würde + infinitive**.\n\n### Example with 'lernen'\n• *Indicative*: wir lernen.\n• *KI (theoretical)*: wir lernen. -> **STOP** (identical).\n• *KII substitution*: wir lernten. -> **STOP** (identical to the past).\n• *Final form*: wir **würden lernen**.",
      examples: [
        { de: "Sie sagen, sie **hätten** Hunger.", fr: "They say they are hungry.", note: "Substitution with KII because 'haben' in KI = 'haben' in the indicative." }
      ]
    },
    {
      id: "b2-1-4",
      title: "1.4 Konjunktiv I in All Tenses",
      content: "KI has its own simplified tense system. Several indicative tenses merge.\n\n### I. The Past (one form)\nWhether the indicative uses Perfekt, Präteritum, or Plusquamperfekt, KI has only one past form:\n**Auxiliary (sei/habe) + Partizip II**.\n• *Ex:* Er **habe gearbeitet** / Er **sei gekommen**.\n\n### II. The Future\n**werden (KI) + infinitive**.\n• *Ex:* Er **werde kommen**.\n\n### III. The Present\nThe simple form seen in section 1.2.\n• *Ex:* Er **gehe**.",
      examples: [
        { de: "Der Zeuge sagte, er **habe** den Mann **gesehen**.", fr: "The witness said he had seen the man.", note: "KI in the past." }
      ]
    },
    {
      id: "b2-1-5",
      title: "1.5 English-Speaker Focus: Common Traps",
      content: "### The 3 Major Mistakes:\n1. **KI is not a wish form**: Do not use KI for 'I want him to come'. Use the indicative: *Ich will, dass er kommt*.\n2. **Confusing KI and KII**:\n   - KI = 'I was told that...' (neutral report).\n   - KII = 'He claims that..., but it may be false' (doubt/unreality).\n3. **Forgetting the -e**: In the 3rd person, do not say 'Er sagt, er hat'; say 'Er sagt, er **habe**'.",
      examples: [
        { de: "Ich hoffe, dass du **kommst**.", fr: "I hope that you come.", note: "Classic trap: German uses the indicative here, not KI." }
      ]
    }
  ]
};
