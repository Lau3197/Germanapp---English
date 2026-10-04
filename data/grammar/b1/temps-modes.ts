
import { GrammarSection } from '../../../types';

export const plusquamperfektB1: GrammarSection = {
  title: "3.2.1 The Pluperfect (Plusquamperfekt)",
  topics: [
    {
      id: "b1-2-1",
      title: "Before Another Moment in the Past",
      content: "The pluperfect expresses an action that happened **before** a specific moment in the past.\n\n### Formation\nUse the auxiliary **haben** or **sein** in the **Präteritum** + **Partizip II**.",
      examples: [
        { de: "Nachdem ich **gegessen hatte**, ging ich spazieren.", fr: "After I had eaten, I went for a walk." },
        { de: "Er **war** schon **gegangen**, als ich ankam.", fr: "He had already left when I arrived." }
      ]
    }
  ]
};

export const futurB1: GrammarSection = {
  title: "3.2.2 The Future (Future I)",
  topics: [
    {
      id: "b1-2-2",
      title: "Expressing the Future and Intentions",
      content: "Future I is used to express an intention, a plan, or a prediction.\n\n### Formation\nUse the auxiliary **werden** in the present tense + the **infinitive** at the end.",
      examples: [
        { de: "Ich **werde** nächstes Jahr nach Berlin **ziehen**.", fr: "I will move to Berlin next year." },
        { de: "Das Wetter **wird** morgen besser **werden**.", fr: "The weather will get better tomorrow." }
      ]
    }
  ]
};

export const konjunktivIIB1: GrammarSection = {
  title: "3.2.3 Subjunctive II (Konjunktiv II) - Masterclass",
  topics: [
    {
      id: "b1-2-3-1",
      title: "I. THE FORM WITH WÜRDE (PRESENT)",
      content: "### 1. The standard construction: würde + infinitive\nThis is the form you will use for almost all verbs. It expresses a realistic wish or a polite request.\n\n**Structure**: **würde** (conjugated) ... **infinitive** (placed at the very end).\n\n| Person | Auxiliary | + Infinitive ([[machen]]) | Example sentence |\n|---|---|---|---|\n| ich | **würde** | machen | Ich **würde** das gerne **machen**. |\n| du | **würdest** | machen | **würdest** du das **machen**? |\n| er/sie/es | **würde** | machen | Er **würde** es sicher **machen**. |\n| wir | **würden** | machen | Wir **würden** gerne Urlaub **machen**. |\n| ihr | **würdet** | machen | **würdet** ihr das auch **machen**? |\n| sie/Sie | **würden** | machen | Sie **würden** sicher Fehler **machen**. |",
      examples: [
        { de: "Ich **würde** gerne öfter Sport **treiben**.", fr: "I would like to do sports more often." },
        { de: "**Würden** Sie mir bitte die Tür **öffnen**?", fr: "Would you please open the door for me?" }
      ]
    },
    {
      id: "b1-2-3-2",
      title: "II. STRONG VERBS AND AUXILIARIES",
      content: "### 2. Contracted forms (with Umlaut)\nThe auxiliaries (haben, sein, werden) and some frequent strong verbs (irregular verbs) do not usually use the 'würde' form. They are formed from the Präteritum stem.\n\n*Click the verbs to see the full conjugation.*\n\n| Infinitive | KII Form | Translation |\n|---|---|---|\n| [[haben]] | **hätte** | I would have |\n| [[sein]] | **wäre** | I would be |\n| [[werden]] | **würde** | I would become |\n| [[wissen]] | **wüsste** | I would know |\n| [[kommen]] | **käme** | I would come |\n| [[gehen]] | **ginge** | I would go |\n| [[lassen]] | **ließe** | I would let/leave |",
      examples: [
        { de: "Wenn ich Zeit **hätte**, **wäre** ich glücklich.", fr: "If I had time, I would be happy." },
        { de: "Ich **wüsste** gerne, wo er ist.", fr: "I would like to know where he is." }
      ]
    },
    {
      id: "b1-2-3-3",
      title: "III. MODAL VERBS IN THE PRESENT",
      content: "### 3. Modals: obligation and ability in the subjunctive\nModal verbs are essential in Konjunktiv II. They are used to give advice or express probabilities. They all take an **Umlaut**, except sollen and wollen.\n\n| Modal | Present KII | Main Use |\n|---|---|---|\n| [[können]] | **könnte** | Possibility / politeness |\n| [[müssen]] | **müsste** | Theoretical obligation |\n| [[dürfen]] | **dürfte** | Probability / permission |\n| [[sollen]] | **sollte** | **Advice** (you should) |\n| [[wollen]] | **wollte** | Intended wish |\n| [[mögen]] | **möchte** | Polite desire |",
      examples: [
        { de: "Du **solltest** mehr schlafen.", fr: "You should sleep more (advice)." },
        { de: "**Könntest** du mir kurz helfen?", fr: "Could you help me for a moment?" }
      ]
    },
    {
      id: "b1-2-3-4",
      title: "IV. KONJUNKTIV II IN THE PAST",
      content: "### 4. Expressing regret (something already finished)\nUse the past form to talk about situations that did not happen. This is the unreal past.\n\n**Structure**: **hätte / wäre** (conjugated) ... **Partizip II** (at the end).\n\n| Verb Type | Auxiliary | Example |\n|---|---|---|\n| Action verb | **hätte** | Ich **hätte** das **getan** (I would have done that) |\n| Movement verb | **wäre** | Ich **wäre** **gekommen** (I would have come) |",
      examples: [
        { de: "Ich **hätte** dich **angerufen**, wenn ich Zeit **gehabt hätte**.", fr: "I would have called you if I had had time." },
        { de: "Wenn ich den Bus nicht verpasst **hätte**, **wäre** ich pünktlich **gewesen**.", fr: "If I had not missed the bus, I would have been on time." }
      ]
    },
    {
      id: "b1-2-3-5",
      title: "V. MODALS IN THE PAST",
      content: "### 5. The double infinitive (Ersatzinfinitiv)\nThis is the most technical form at B1 level. To say 'I could have', German does not use the past participle; it uses two infinitives at the end.\n\n**Structure**: **hätte** ... **infinitive of the main verb** + **infinitive of the modal**.\n\n| Person | Auxiliary | + Double Infinitive ([[können]]) | Example |\n|---|---|---|---|\n| ich | **hätte** | machen können | Ich **hätte** es **machen können**. |\n| du | **hättest** | machen können | Du **hättest** es **machen können**. |\n| er/sie/es | **hätte** | machen können | Er **hätte** es **machen können**. |\n| wir | **hätten** | machen können | Wir **hätten** es **machen können**. |\n| ihr | **hättet** | machen können | Ihr **hättet** es **machen können**. |\n| sie/Sie | **hätten** | machen können | Sie **hätten** es **machen können**. |",
      examples: [
        { de: "Ich **hätte** gestern **arbeiten müssen**.", fr: "I should have worked yesterday." },
        { de: "Du **hättest** mir das **sagen sollen**.", fr: "You should have told me that." },
        { de: "Wir **hätten** länger **bleiben können**.", fr: "We could have stayed longer." }
      ]
    }
  ]
};

export const passivPresentB1: GrammarSection = {
  title: "3.2.4 The Passive in the Present",
  topics: [
    {
      id: "b1-2-4-1",
      title: "I. Formation Rule",
      content: "The process passive emphasizes the action in progress.\n\n**Structure**: **werden** (conjugated in the present tense) + **Partizip II** (at the end).\n\n| Person | **Werden** | Example |\n|---|---|---|\n| ich | **werde** | ich werde operiert |\n| du | **wirst** | du wirst gerufen |\n| er/sie/es | **wird** | das Haus **wird** gebaut |\n| wir | **werden** | wir werden informiert |\n| ihr | **werdet** | ihr werdet gesucht |\n| sie/Sie | **werden** | sie werden gefragt |",
      examples: [
        { de: "Das Kind **wird** von der Mutter **geholt**.", fr: "The child is picked up by the mother." },
        { de: "Hier **wird** ein neues Hotel **gebaut**.", fr: "A new hotel is being built here." }
      ]
    }
  ]
};

export const passivPasseB1: GrammarSection = {
  title: "3.2.5 The Passive in the Past",
  topics: [
    {
      id: "b1-2-5-1",
      title: "I. The Präteritum (Passiv im Präteritum)",
      content: "This is the most common form for narrating past events in the passive.\n\n**Structure**: **wurde** (werden in the Präteritum) + **Partizip II**.\n\n| Person | **Wurde** | Example |\n|---|---|---|\n| ich | **wurde** | ich wurde informiert |\n| du | **wurdest** | du wurdest gerufen |\n| er/sie/es | **wurde** | das Haus **wurde** gebaut |\n| wir | **wurden** | wir wurden gerufen |\n| ihr | **wurdet** | ihr werdet informiert |\n| sie/Sie | **wurden** | sie wurden gefragt |\n\n**Language note**: Grammatically, **wurde** is the **Präteritum**. In English, it often corresponds to a simple past passive such as 'was discovered' or 'were informed'.",
      examples: [
        { de: "Amerika **wurde** 1492 **entdeckt**.", fr: "America was discovered in 1492." },
        { de: "Der Brief **wurde** gestern **geschrieben**.", fr: "The letter was written yesterday." }
      ]
    },
    {
      id: "b1-2-5-2",
      title: "II. The Perfekt (Passiv im Perfekt)",
      content: "Used mainly in speech. Use the auxiliary **sein** and replace 'geworden' with **worden**.\n\n**Structure**: **sein** (present tense) + **Partizip II** + **worden**.\n\n| Person | **Sein** | **Partizip II** | **Worden** |\n|---|---|---|---|\n| ich | bin | gefragt | **worden** |\n| du | bist | gefragt | **worden** |\n| er/sie/es | **ist** | **gefragt** | **worden** |\n| wir | sind | gefragt | **worden** |\n| ihr | seid | gefragt | **worden** |\n| sie/Sie | sind | gefragt | **worden** |",
      examples: [
        { de: "Das Auto **ist** bereits **repariert worden**.", fr: "The car has already been repaired." },
        { de: "Die Gäste **sind** noch nicht **eingeladen worden**.", fr: "The guests have not been invited yet." }
      ]
    },
    {
      id: "b1-2-5-3",
      title: "III. How to Choose Between wurde and ist... worden",
      content: "Since English can translate both forms with similar wording, you need to look at the **German context**:\n\n### A. **Präteritum** (**wurde**): for **history** and narrative\n• **Historical facts**: 1492, wars, the fall of the Wall.\n• **Written narratives**: newspapers, novels, official reports.\n\n### B. **Perfekt** (**ist... worden**): for **speech** and a **present result**\n• **Spoken conversation**: what you tell a friend.\n• **Present observation**: the action is finished and the result is visible **now**.",
      examples: [
        { de: "JFK **wurde** 1963 **ermordet**.", fr: "JFK was assassinated in 1963.", note: "Dated historical fact: **Präteritum**." },
        { de: "Mein Auto **ist** endlich **repariert worden**!", fr: "My car has finally been repaired!", note: "Present result: I can drive it now. **Perfekt**." }
      ]
    }
  ]
};

export const passivModauxB1: GrammarSection = {
  title: "3.2.6 The Passive with Modal Verbs",
  topics: [
    {
      id: "b1-2-6-1",
      title: "I. In the Present",
      content: "Conjugate the modal verb and place **werden** as an infinitive after the past participle.\n\n**Structure**: **Modal** (present tense) + **Partizip II** + **werden**.",
      examples: [
        { de: "Die Hausaufgaben **müssen** gemacht **werden**.", fr: "The homework must be done." },
        { de: "Hier **darf** nicht geparkt **werden**.", fr: "Parking is not allowed here." }
      ]
    },
    {
      id: "b1-2-6-2",
      title: "II. In the Präteritum",
      content: "Use the past form of the modal verb.\n\n**Structure**: **Modal** (Präteritum) + **Partizip II** + **werden**.",
      examples: [
        { de: "Das Haus **musste** renoviert **werden**.", fr: "The house had to be renovated." },
        { de: "Der Termin **konnte** nicht verschoben **werden**.", fr: "The appointment could not be postponed." }
      ]
    },
    {
      id: "b1-2-6-3",
      title: "III. In the Perfekt (The Complex Form)",
      content: "Use the **double infinitive** at the end of the sentence.\n\n**Structure**: **hat** + **Partizip II** + **werden** + **Modal** (infinitive).",
      examples: [
        { de: "Das Auto **hat** repariert **werden müssen**.", fr: "The car had to be repaired." },
        { de: "Der Brief **hat** sofort geschickt **werden sollen**.", fr: "The letter was supposed to be sent immediately." }
      ]
    }
  ]
};
