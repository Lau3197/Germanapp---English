import { GrammarSection } from '../../../types';

export const subjonctifNuancesC1: GrammarSection = {
  title: "5.4 Nuances of the Subjunctive (Konjunktiv I und II)",
  topics: [
    {
      id: "c1-5-4",
      title: "5.4 Introduction",
      content: `At C1 level, the German subjunctive is not just a conditional form. You need to control the nuance between **Konjunktiv I** and **Konjunktiv II** in formal and complex contexts.

This section deepens the B2 material on reported speech, neutrality, doubt, unreal comparison, and formal style.`,
      examples: [
        { de: "Er sagte, er werde morgen kommen.", fr: "He said he would come tomorrow.", note: "Formal Konjunktiv I in reported speech." }
      ]
    },
    {
      id: "c1-5-4-1",
      title: "5.4.1 Konjunktiv I: Full Command",
      content: `**Konjunktiv I** is the mood of formal reported speech. It allows you to report someone's words without taking responsibility for whether they are true.

### Main use
Use KI in journalism, academic writing, administration, official reports, and formal summaries.

### Formation
**Infinitive stem + KI endings**

| Person | Ending | Example: machen |
|---|---|---|
| ich | **-e** | ich mache |
| du | **-est** | du machest |
| er/sie/es | **-e** | er mache |
| wir | **-en** | wir machen |
| ihr | **-et** | ihr machet |
| sie/Sie | **-en** | sie machen |

Crucial point: the stem does **not** change. There is no e->i change and no Umlaut as in the present indicative.

### Important third-person forms
Regular verbs:
| Verb | KI | Indicative | Distinct? |
|---|---|---|---|
| machen | er **mache** | er macht | yes |
| kommen | er **komme** | er kommt | yes |
| lernen | er **lerne** | er lernt | yes |
| arbeiten | er **arbeite** | er arbeitet | yes |
| wohnen | er **wohne** | er wohnt | yes |

Irregular verbs:
| Verb | KI | Indicative | Distinct? |
|---|---|---|---|
| sein | er **sei** | er ist | yes |
| haben | er **habe** | er hat | yes |
| werden | er **werde** | er wird | yes |
| wissen | er **wisse** | er weiß | yes |
| gehen | er **gehe** | er geht | yes |
| geben | er **gebe** | er gibt | yes |
| nehmen | er **nehme** | er nimmt | yes |
| sehen | er **sehe** | er sieht | yes |
| tun | er **tue** | er tut | yes |

For most verbs, the third-person singular KI is distinct from the indicative and can be used directly.

### Substitution when KI is identical to the indicative
Problem: if KI looks exactly like the indicative, the reported-speech signal disappears.

Solution:
1. **KI = indicative?** Use **Konjunktiv II**.
2. **KII = preterite?** Use **würde + infinitive**.

Examples:
- Indicative: wir lernen
- KI: wir lernen -> identical
- KII: wir lernten -> looks like the preterite
- Final form: wir **würden lernen**

- Indicative: sie kommen
- KI: sie kommen -> identical
- KII: sie **kämen** -> distinct
- Final form: sie **kämen** or sie **würden kommen**

### KI in different tenses
Present:
- Er sagte, er **komme** morgen.
- Sie meinte, sie **habe** kein Geld.
- Er behauptete, er **sei** krank.

Past:
**Auxiliary in KI + Partizip II**
- Er sagte, er **habe gearbeitet**.
- Sie meinte, sie **sei gekommen**.
- Er behauptete, er **habe** nichts **gesehen**.

The KI past form covers the meanings of Perfekt, Präteritum, and Plusquamperfekt in reported speech.

Future:
**werden in KI + infinitive**
- Er sagte, er **werde kommen**.
- Sie meinte, sie **werde** es **tun**.

### Formal contexts
Journalistic:
- Der Minister sagte, die Steuern **seien** zu hoch.

Academic:
- Die Studie zeigt, dass die Ergebnisse **signifikant seien**.

Administrative:
- Das Amt teilte mit, der Antrag **werde** geprüft.

### Common reporting verbs
- sagen, meinen, behaupten, erklären, betonen
- mitteilen, berichten, angeben, feststellen
- glauben, denken, vermuten

### Common traps
Do not use KI for ordinary wishes:
- Incorrect: Ich will, dass er **komme**.
- Correct: Ich will, dass er **kommt**.

Do not ignore substitution:
- Incorrect: Sie sagte, sie **lernen**.
- Correct: Sie sagte, sie **würden lernen**.

Remember the core distinction:
- KI = neutral reported speech
- KII = unreal, hypothetical, doubt, or politeness`,
      examples: [
        { de: "Er sagte, er komme morgen.", fr: "He said he would come tomorrow.", note: "Present KI; third person singular is distinct." },
        { de: "Sie meinte, sie habe kein Geld.", fr: "She said she had no money.", note: "Present KI with haben." },
        { de: "Er behauptete, er sei krank.", fr: "He claimed to be ill.", note: "Present KI with sein." },
        { de: "Der Minister sagte, die Steuern seien zu hoch.", fr: "The minister said taxes were too high.", note: "KI with plural sein." },
        { de: "Er sagte, er habe gearbeitet.", fr: "He said he had worked.", note: "Past KI with haben." },
        { de: "Sie meinte, sie sei gekommen.", fr: "She said she had come.", note: "Past KI with sein." },
        { de: "Er behauptete, er werde morgen kommen.", fr: "He claimed he would come tomorrow.", note: "Future KI." },
        { de: "Die Studie zeigt, dass die Ergebnisse signifikant seien.", fr: "The study shows that the results are said to be significant.", note: "Formal academic KI." }
      ]
    },
    {
      id: "c1-5-4-2",
      title: "5.4.2 Konjunktiv II in Unreal Comparisons",
      content: `**Konjunktiv II** is used in unreal comparisons with **als ob**, **als wenn**, or shorter **als**.

### Structure
**Main clause + als ob / als wenn + Konjunktiv II**

Meaning: "as if".

### Basic examples
- Er tut so, **als ob** er alles **wüsste**.
- Er redet, **als wäre** er der Chef.

### Common introductory verbs
- tun: Er tut so, als ob...
- reden: Er redet, als ob...
- aussehen: Er sieht aus, als ob...
- sich verhalten: Er verhält sich, als ob...
- handeln: Er handelt, als ob...

### als ob, als wenn, als
**als ob** is the most common:
- Er tut so, **als ob** er krank wäre.

**als wenn** is equivalent:
- Er tut so, **als wenn** er krank wäre.

**als** alone is shorter and often more literary or compact. It uses inverted order:
- Er tut so, **als** wäre er krank.

### Present unreal comparison
- Sie sieht aus, **als ob** sie **sähe**, was ich denke.
- Er handelt, **als ob** er **wüsste**, was passiert.
- Du redest, **als wäre** ich nicht hier.

### Past unreal comparison
- Er tut so, **als ob** er nichts **gewusst hätte**.
- Sie redet, **als wäre** sie nie **gekommen**.
- Er verhält sich, **als hätte** er es nicht **gemacht**.

### Common forms
| Meaning | Form | Example |
|---|---|---|
| know, present | als ob er **wüsste** | Er tut so, als ob er alles wüsste. |
| be, present | als ob er **wäre** | Er redet, als ob er der Chef wäre. |
| have, present | als ob er **hätte** | Sie tut so, als ob sie Geld hätte. |
| come, present | als ob er **käme** | Er sieht aus, als ob er käme. |
| know, past | als ob er **gewusst hätte** | Er tut so, als ob er es gewusst hätte. |
| be, past | als wäre er **gewesen** | Er redet, als wäre er dort gewesen. |

### Meaning
**als ob** introduces a comparison, not a condition. The speaker presents the situation as imagined, doubtful, or contrary to reality.

Compare:
- Condition: **Wenn** ich Geld hätte, würde ich reisen.
- Unreal comparison: Er tut so, **als hätte** er Geld.

### Common traps
Incorrect: Er tut so, als ob er alles **weiß**.
Correct: Er tut so, als ob er alles **wüsste**.

Incorrect: Er tut so, **als** er alles wüsste.
Correct: Er tut so, **als ob** er alles wüsste.

With **als** alone, use inversion:
- Er tut so, **als wüsste** er alles.`,
      examples: [
        { de: "Er tut so, als ob er alles wüsste.", fr: "He acts as if he knew everything.", note: "Unreal comparison with wüsste." },
        { de: "Er redet, als wäre er der Chef.", fr: "He talks as if he were the boss.", note: "als alone with inverted order." },
        { de: "Sie sieht aus, als ob sie traurig wäre.", fr: "She looks as if she were sad.", note: "With aussehen." },
        { de: "Er verhält sich, als hätte er nichts gesehen.", fr: "He behaves as if he had seen nothing.", note: "Past unreal comparison." },
        { de: "Du redest, als wäre ich nicht hier.", fr: "You talk as if I were not here.", note: "With negation." },
        { de: "Er tut so, als ob er nichts gewusst hätte.", fr: "He acts as if he had known nothing.", note: "Past comparison with hätte." }
      ]
    },
    {
      id: "c1-5-4-3",
      title: "5.4.3 KI vs KII in C1 Contexts",
      content: `At C1 level, you must be able to choose between KI and KII precisely.

### Comparison table
| Aspect | Konjunktiv I | Konjunktiv II |
|---|---|---|
| Main use | formal reported speech | unreal, hypothetical, doubt, politeness |
| Meaning | neutrality | unreality or speaker distance |
| Context | journalism, reports, academic writing | conditions, comparisons, wishes |
| Speaker stance | "I report" | "I doubt / imagine / distance myself" |

### Contrast in reported speech
KI:
- Er sagte, er **habe** kein Geld.
- Neutral report: I do not comment on whether it is true.

KII:
- Er sagte, er **hätte** kein Geld.
- Report with distance or possible doubt.

### Conditions
Use KII:
- **Wenn** ich Geld **hätte**, würde ich reisen.

KI is not used for conditions.

### Unreal comparisons
Use KII:
- Er tut so, **als ob** er Geld **hätte**.

KI is not used for unreal comparisons.

### Subtle C1 nuance
Reported speech with neutrality:
- Er sagte, er **habe** es nicht gemacht.

Reported speech with doubt or distance:
- Er sagte, er **hätte** es nicht gemacht.

Comparison vs quotation:
- KII: Er tut so, **als ob** er **wüsste**, was passiert.
- KI: Er sagte, er **wisse**, was passiert.

### C1 decision rule
1. Formal reported speech -> KI.
2. Unreal conditions and comparisons -> KII.
3. Reported speech with doubt or distance -> KII is possible.
4. If KI is identical to the indicative -> substitute with KII or würde.`,
      examples: [
        { de: "KI: Er sagte, er habe kein Geld.", fr: "He said he had no money.", note: "Neutral reported speech." },
        { de: "KII: Er sagte, er hätte kein Geld.", fr: "He said he had no money.", note: "Reported speech with doubt or distance." },
        { de: "KII: Wenn ich Geld hätte, würde ich reisen.", fr: "If I had money, I would travel.", note: "Unreal condition." },
        { de: "KII: Er tut so, als hätte er Geld.", fr: "He acts as if he had money.", note: "Unreal comparison." }
      ]
    }
  ]
};
