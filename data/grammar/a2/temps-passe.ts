
import { GrammarSection } from '../../../types';

export const tempsPasse: GrammarSection = {
  title: "2.1 Past Tenses (Vergangenheit)",
  topics: [
    {
      id: "a2-1-1",
      title: "2.1.1 Introduction to Past Tenses",
      content: "German has two main tenses for expressing the past:\n\n**The Perfekt (present perfect)**:\n- The past tense most often used in speech\n- Used in everyday conversation\n- Structure: auxiliary (haben/sein) + Participle II\n\n**The Präteritum (simple past/preterite)**:\n- The written and literary past tense\n- Used in narratives, newspapers, books\n- Very common with sein, haben, and modal verbs\n\n### How is this different from English?\n\nEnglish distinguishes between forms such as simple past, present perfect, and past continuous. German does not make these distinctions in exactly the same way. Depending on context, both Perfekt and Präteritum can correspond to 'I ate', 'I have eaten', or 'I was eating'.",
      examples: [
        { de: "Perfekt: Ich habe gegessen.", fr: "I ate / I have eaten / I was eating.", note: "Spoken language, conversation." },
        { de: "Präteritum: Ich aß.", fr: "I ate / I was eating.", note: "Written or literary language." }
      ]
    },
    {
      id: "a2-1-2",
      title: "2.1.2 The Perfekt: Structure and Formation",
      content: "The Perfekt is the past tense most often used in spoken German.\n\n### Perfekt Structure\n\n**Auxiliary (haben or sein) in the present tense + Participle II at the end**\n\n### Choosing the Auxiliary\n\n**With HABEN** (most verbs):\n- All transitive verbs (with a direct object)\n- Reflexive verbs\n- Modal verbs\n- Verbs without movement or change of state\n\n**With SEIN** (verbs of movement or change of state):\n- Verbs of **movement**: gehen, kommen, fahren, fliegen, laufen, reisen...\n- Verbs of **change of state**: werden, aufstehen, einschlafen, sterben, wachsen...\n- Special verbs: sein, bleiben, passieren, geschehen\n\n### Forming Participle II\n\n**Regular verbs (schwache Verben)**:\nge- + stem + -t\n\n| Infinitive | Participle II | Example |\n|---|---|---|\n| lernen | ge**lern**t | Ich habe Deutsch gelernt. |\n| arbeiten | ge**arbeit**et | Er hat gearbeitet. |\n| kaufen | ge**kauf**t | Wir haben eingekauft. |\n| machen | ge**mach**t | Was hast du gemacht? |\n| spielen | ge**spiel**t | Die Kinder haben gespielt. |\n\n**Irregular verbs (starke Verben)**:\nge- + changed stem + -en\n\n| Infinitive | Participle II | Example |\n|---|---|---|\n| sehen | ge**seh**en | Ich habe ihn gesehen. |\n| gehen | ge**gang**en | Er ist nach Hause gegangen. |\n| schreiben | ge**schrieb**en | Sie hat einen Brief geschrieben. |\n| essen | ge**gess**en | Wir haben Pizza gegessen. |\n| trinken | ge**trunk**en | Was hast du getrunken? |\n| fahren | ge**fahr**en | Wir sind nach Berlin gefahren. |\n| kommen | ge**komm**en | Er ist spät gekommen. |",
      examples: [
        { de: "Ich habe gestern Deutsch gelernt.", fr: "I learned German yesterday.", note: "Regular verb with haben." },
        { de: "Wir sind nach Berlin gefahren.", fr: "We went to Berlin.", note: "Verb of movement with sein." },
        { de: "Sie hat einen Brief geschrieben.", fr: "She wrote a letter.", note: "Irregular verb with haben." },
        { de: "Er ist um 7 Uhr aufgestanden.", fr: "He got up at 7 o'clock.", note: "Change of state with sein." }
      ]
    },
    {
      id: "a2-1-3",
      title: "2.1.3 Participle II of Prefix Verbs",
      content: "Separable and inseparable prefix verbs have special rules for Participle II.\n\n### SEPARABLE Prefix Verbs\n\nThe **ge-** is inserted **between** the prefix and the stem.\n\n| Infinitive | Participle II | Example |\n|---|---|---|\n| auf**stehen** | auf**ge**standen | Ich bin früh aufgestanden. |\n| ein**kaufen** | ein**ge**kauft | Wir haben eingekauft. |\n| an**rufen** | an**ge**rufen | Sie hat mich angerufen. |\n| mit**bringen** | mit**ge**bracht | Er hat Kuchen mitgebracht. |\n| ab**fahren** | ab**ge**fahren | Der Zug ist abgefahren. |\n| an**kommen** | an**ge**kommen | Wir sind angekommen. |\n| aus**gehen** | aus**ge**gangen | Sie ist ausgegangen. |\n\n**Common separable prefixes**: ab-, an-, auf-, aus-, ein-, mit-, vor-, zu-, zurück-\n\n### INSEPARABLE Prefix Verbs\n\n**No \"ge-\"** in Participle II.\n\n| Infinitive | Participle II | Example |\n|---|---|---|\n| be**suchen** | besucht | Ich habe ihn besucht. |\n| ver**stehen** | verstanden | Hast du das verstanden? |\n| er**zählen** | erzählt | Sie hat eine Geschichte erzählt. |\n| ent**decken** | entdeckt | Wir haben etwas entdeckt. |\n| ge**fallen** | gefallen | Das hat mir gefallen. |\n| emp**fehlen** | empfohlen | Er hat mir ein Buch empfohlen. |\n\n**Inseparable prefixes**: be-, emp-, ent-, er-, ge-, miss-, ver-, zer-\n\n### Verbs Ending in -ieren\n\n**No \"ge-\"** in Participle II.\n\n| Infinitive | Participle II | Example |\n|---|---|---|\n| stud**ieren** | studiert | Ich habe in Berlin studiert. |\n| telefon**ieren** | telefoniert | Wir haben telefoniert. |\n| repar**ieren** | repariert | Er hat das Auto repariert. |\n| organ**isieren** | organisiert | Sie hat alles organisiert. |",
      examples: [
        { de: "Ich bin um 7 Uhr aufgestanden.", fr: "I got up at 7 o'clock.", note: "Separable prefix: ge- between auf and standen." },
        { de: "Wir haben im Supermarkt eingekauft.", fr: "We did the shopping at the supermarket.", note: "Separable prefix with haben." },
        { de: "Hast du das verstanden?", fr: "Did you understand that?", note: "Inseparable prefix: no ge-." },
        { de: "Ich habe in München studiert.", fr: "I studied in Munich.", note: "Verb ending in -ieren: no ge-." }
      ]
    },
    {
      id: "a2-1-4",
      title: "2.1.4 Mixed Verbs in the Perfekt",
      content: "Mixed verbs (Mischverben) combine features of regular and irregular verbs:\n- Ending **-t** (like regular verbs)\n- Vowel change in the stem (like irregular verbs)\n\n### Important Mixed Verbs\n\n| Infinitive | Participle II | Example |\n|---|---|---|\n| bringen | ge**brach**t | Er hat Blumen gebracht. |\n| denken | ge**dach**t | Ich habe an dich gedacht. |\n| kennen | ge**kann**t | Wir haben uns schon gekannt. |\n| nennen | ge**nann**t | Sie hat mich genannt. |\n| rennen | ge**rann**t | Er ist gerannt. |\n| wissen | ge**wuss**t | Das habe ich nicht gewusst. |\n| brennen | ge**brann**t | Das Feuer hat gebrannt. |\n| senden | ge**sand**t/gesendet | Ich habe eine E-Mail gesendet. |\n\n### Modal Verbs in the Perfekt\n\nModal verbs use **haben** and have a regular Participle II:\n\n| Infinitive | Participle II | Example |\n|---|---|---|\n| können | gekonnt | Das habe ich nicht gekonnt. |\n| müssen | gemusst | Ich habe das gemusst. |\n| wollen | gewollt | Sie hat das gewollt. |\n| dürfen | gedurft | Das hast du nicht gedurft. |\n| sollen | gesollt | Das habe ich gesollt. |\n| mögen | gemocht | Ich habe ihn gemocht. |\n\n**Careful**: When a modal verb is followed by an infinitive, German uses the infinitive form, not Participle II:\n• Ich habe nicht kommen **können**. (not \"gekonnt\")",
      examples: [
        { de: "Er hat mir Blumen gebracht.", fr: "He brought me flowers.", note: "Mixed verb: changed stem + -t ending." },
        { de: "Ich habe an dich gedacht.", fr: "I thought of you.", note: "denken -> gedacht (mixed verb)." },
        { de: "Das habe ich nicht gewusst.", fr: "I did not know that.", note: "wissen -> gewusst (mixed verb)." },
        { de: "Ich habe nicht kommen können.", fr: "I could not come.", note: "Modal + infinitive: infinitive at the end, no Participle II." }
      ]
    },
    {
      id: "a2-1-5",
      title: "2.1.5 The Präteritum: The Tense of Written Narrative",
      content: "The **Präteritum** (simple past/preterite) is the past tense used mainly in writing (newspapers, books, stories). In speech, it is mostly used with a few very frequent verbs.\n\n### Essential Verbs in the Präteritum\n\n**SEIN** (to be):\n| Person | Präteritum |\n|---|---|\n| ich | **war** |\n| du | **warst** |\n| er/sie/es | **war** |\n| wir | **waren** |\n| ihr | **wart** |\n| sie/Sie | **waren** |\n\n**HABEN** (to have):\n| Person | Präteritum |\n|---|---|\n| ich | **hatte** |\n| du | **hattest** |\n| er/sie/es | **hatte** |\n| wir | **hatten** |\n| ihr | **hattet** |\n| sie/Sie | **hatten** |\n\n### Why use the Präteritum with sein and haben?\n\nIn speech, saying \"Ich **war** im Kino\" is much more natural than \"Ich **bin** im Kino **gewesen**\". It is shorter and more fluent.\n\n### Common Examples\n\n**With sein**:\n• Wo **warst** du gestern? (Where were you yesterday?)\n• Das **war** toll! (That was great!)\n• Wir **waren** in Berlin. (We were in Berlin.)\n\n**With haben**:\n• Ich **hatte** keine Zeit. (I did not have time.)\n• **Hattest** du Hunger? (Were you hungry?)\n• Sie **hatten** viel Glück. (They were very lucky.)",
      examples: [
        { de: "Gestern war ich im Kino.", fr: "Yesterday, I was at the cinema.", note: "More natural than 'Ich bin im Kino gewesen'." },
        { de: "Früher hatte ich einen Hund.", fr: "Before, I had a dog.", note: "Präteritum of haben." },
        { de: "Das war ein toller Film!", fr: "That was a great film!", note: "Prefer 'war' in speech." },
        { de: "Wir waren sehr müde.", fr: "We were very tired.", note: "Plural of sein in the Präteritum." }
      ]
    },
    {
      id: "a2-1-6",
      title: "2.1.6 Modal Verbs in the Präteritum",
      content: "Modal verbs are very often used in the Präteritum, even in speech, because it is simpler than the Perfekt.\n\n### KÖNNEN (can / be able to)\n| Person | Präteritum |\n|---|---|\n| ich | **konnte** |\n| du | **konntest** |\n| er/sie/es | **konnte** |\n| wir | **konnten** |\n| ihr | **konntet** |\n| sie/Sie | **konnten** |\n\n### MÜSSEN (must / have to)\n| Person | Präteritum |\n|---|---|\n| ich | **musste** |\n| du | **musstest** |\n| er/sie/es | **musste** |\n| wir | **mussten** |\n| ihr | **musstet** |\n| sie/Sie | **mussten** |\n\n### WOLLEN (want to)\n| Person | Präteritum |\n|---|---|\n| ich | **wollte** |\n| du | **wolltest** |\n| er/sie/es | **wollte** |\n| wir | **wollten** |\n| ihr | **wolltet** |\n| sie/Sie | **wollten** |\n\n### DÜRFEN (be allowed to)\n| Person | Präteritum |\n|---|---|\n| ich | **durfte** |\n| du | **durftest** |\n| er/sie/es | **durfte** |\n| wir | **durften** |\n| ihr | **durftet** |\n| sie/Sie | **durften** |\n\n### SOLLEN (should / be supposed to)\n| Person | Präteritum |\n|---|---|\n| ich | **sollte** |\n| du | **solltest** |\n| er/sie/es | **sollte** |\n| wir | **sollten** |\n| ihr | **solltet** |\n| sie/Sie | **sollten** |\n\n### MÖGEN (like)\n| Person | Präteritum |\n|---|---|\n| ich | **mochte** |\n| du | **mochtest** |\n| er/sie/es | **mochte** |\n| wir | **mochten** |\n| ihr | **mochtet** |\n| sie/Sie | **mochten** |",
      examples: [
        { de: "Ich konnte nicht kommen.", fr: "I could not come.", note: "können in the Präteritum." },
        { de: "Er musste früh aufstehen.", fr: "He had to get up early.", note: "müssen in the Präteritum." },
        { de: "Wir wollten ins Kino gehen.", fr: "We wanted to go to the cinema.", note: "wollen in the Präteritum." },
        { de: "Sie durfte nicht ausgehen.", fr: "She was not allowed to go out.", note: "dürfen in the Präteritum." },
        { de: "Du solltest mehr lernen.", fr: "You were supposed to study more.", note: "sollen in the Präteritum." }
      ]
    }
  ]
};
