import { GrammarSection } from '../../../types';

export const connecteursAvancesC1: GrammarSection = {
  title: "5.5 Style and Advanced Connectors",
  topics: [
    {
      id: "c1-5-5",
      title: "5.5 Introduction",
      content: `To structure complex discourse at C1 level, you need a richer set of logical connectors than at B2. These connectors help you build elegant, precise, and well-organised texts.`,
      examples: [
        { de: "Einerseits möchte ich bleiben, andererseits muss ich gehen.", fr: "On the one hand, I would like to stay; on the other hand, I have to leave.", note: "Two-part connector." }
      ]
    },
    {
      id: "c1-5-5-1",
      title: "5.5.1 Two-Part Connectors (Doppelkonjunktionen)",
      content: `Two-part connectors express complex logical relations in a clear and elegant way.

### einerseits... andererseits
Meaning: on the one hand... on the other hand

Use: contrast, balanced argument, two aspects of a question.

Examples:
- **Einerseits** möchte ich bleiben, **andererseits** muss ich gehen.
- **Einerseits** ist es teuer, **andererseits** ist es qualitativ hochwertig.

### sowohl... als auch
Meaning: both... and

Use: positive addition of two elements.

Examples:
- Ich will **sowohl** Berlin **als auch** München besuchen.
- Er spricht **sowohl** Deutsch **als auch** Französisch.
- **Sowohl** der Preis **als auch** die Qualität sind wichtig.

Rule: the two elements should have the same grammatical structure.

### weder... noch
Meaning: neither... nor

Use: negative addition, complete exclusion.

Examples:
- Ich trinke **weder** Kaffee **noch** Tee.
- Er mag **weder** das eine **noch** das andere.
- **Weder** der Preis **noch** die Qualität sind akzeptabel.

Do not add an extra **nicht**.

### zwar... aber
Meaning: admittedly... but / it is true that... but

Use: concession. The first point is acknowledged; the second point limits or opposes it.

Examples:
- Es ist **zwar** teuer, **aber** es ist qualitativ hochwertig.
- Er kommt **zwar** heute, **aber** er kann nicht lange bleiben.

### je... desto / je... umso
Meaning: the more..., the more...

Use: proportional relation.

Examples:
- **Je** mehr ich lerne, **desto** besser wird mein Deutsch.
- **Je** schneller wir fahren, **umso** gefährlicher wird es.
- **Je** früher, **desto** besser.

Rule: **je** and **desto/umso** belong together.

More formal variant:
- **Je** mehr, **je** besser.

### Summary
| Connector | Use | Example |
|---|---|---|
| einerseits... andererseits | contrast | Einerseits X, andererseits Y. |
| sowohl... als auch | positive addition | Sowohl X als auch Y. |
| weder... noch | negative addition | Weder X noch Y. |
| zwar... aber | concession | Zwar X, aber Y. |
| je... desto/umso | proportion | Je mehr X, desto besser Y. |`,
      examples: [
        { de: "Einerseits möchte ich bleiben, andererseits muss ich gehen.", fr: "On the one hand, I would like to stay; on the other hand, I have to leave.", note: "Contrast with einerseits... andererseits." },
        { de: "Ich will sowohl Berlin als auch München besuchen.", fr: "I want to visit both Berlin and Munich.", note: "Positive addition." },
        { de: "Ich trinke weder Kaffee noch Tee.", fr: "I drink neither coffee nor tea.", note: "Negative addition." },
        { de: "Es ist zwar teuer, aber es ist qualitativ hochwertig.", fr: "It is admittedly expensive, but it is high quality.", note: "Concession with zwar... aber." },
        { de: "Je mehr ich lerne, desto besser wird mein Deutsch.", fr: "The more I learn, the better my German becomes.", note: "Proportional relation with je... desto." },
        { de: "Je schneller wir fahren, umso gefährlicher wird es.", fr: "The faster we drive, the more dangerous it becomes.", note: "Proportional relation with je... umso." }
      ]
    },
    {
      id: "c1-5-5-2",
      title: "5.5.2 Complex Concessive Connectors",
      content: `Concessive connectors express contrast, restriction, or an opposing fact with different levels of formality.

### obwohl
Meaning: although

Use: standard concession.

Examples:
- **Obwohl** es regnet, gehen wir spazieren.
- Er kommt, **obwohl** er krank ist.

Formal KI can appear in highly formal reported contexts, but the indicative is normal in ordinary use.

### obgleich
Meaning: although, even though

Use: more formal synonym of **obwohl**, especially in written German.

Examples:
- **Obgleich** er krank war, kam er zur Arbeit.
- **Obgleich** die Bedingungen schwierig sind, wird das Projekt fortgesetzt.

### wenngleich
Meaning: although, even if

Use: very formal, typical of academic, legal, administrative, and essay style.

Examples:
- **Wenngleich** dies problematisch erscheint, ist es dennoch möglich.
- **Wenngleich** die Kosten hoch sind, lohnt sich die Investition.

### trotzdem / dennoch / gleichwohl
These are concessive adverbs, not subordinating conjunctions. They do not send the verb to the end.

Examples:
- Es regnet. **Trotzdem** gehen wir spazieren.
- Die Bedingungen sind schwierig. **Dennoch** machen wir weiter.
- Er war krank. **Gleichwohl** kam er zur Arbeit.

Differences:
- **trotzdem**: common and natural
- **dennoch**: more formal, written
- **gleichwohl**: very formal and literary

### Comparison
| Connector | Formality | Use |
|---|---|---|
| obwohl | common | general concession |
| obgleich | formal | written, academic |
| wenngleich | very formal | academic/legal/administrative |
| trotzdem | common | adverbial contrast |
| dennoch | formal | written adverbial contrast |
| gleichwohl | very formal | literary/formal contrast |`,
      examples: [
        { de: "Obwohl es regnet, gehen wir spazieren.", fr: "Although it is raining, we are going for a walk.", note: "Common concession with obwohl." },
        { de: "Obgleich die Bedingungen schwierig sind, wird das Projekt fortgesetzt.", fr: "Although the conditions are difficult, the project is continuing.", note: "obgleich is more formal." },
        { de: "Wenngleich dies problematisch erscheint, ist es dennoch möglich.", fr: "Although this appears problematic, it is nevertheless possible.", note: "Very formal concession." },
        { de: "Es regnet. Trotzdem gehen wir spazieren.", fr: "It is raining. Nevertheless, we are going for a walk.", note: "trotzdem is an adverb." },
        { de: "Die Bedingungen sind schwierig. Dennoch machen wir weiter.", fr: "The conditions are difficult. Nevertheless, we continue.", note: "dennoch is more formal than trotzdem." },
        { de: "Er war krank. Gleichwohl kam er zur Arbeit.", fr: "He was ill. Nevertheless, he came to work.", note: "gleichwohl is very formal." }
      ]
    },
    {
      id: "c1-5-5-3",
      title: "5.5.3 Complex Causal Connectors",
      content: `Complex causal connectors let you express reasons in a more formal and nuanced way.

### angesichts + genitive
Meaning: in view of, given

Use: formal reason based on a situation or circumstances.

Examples:
- **Angesichts** der hohen Kosten entschieden wir uns dagegen.
- **Angesichts** der aktuellen Situation müssen wir handeln.

Rule: followed by the genitive.

### infolge + genitive
Meaning: as a result of, due to

Use: formal cause, often the result of an event.

Examples:
- **Infolge** des Unwetters wurden Straßen gesperrt.
- **Infolge** der Kürzungen wurden Stellen gestrichen.

Rule: followed by the genitive.

### zumal
Meaning: especially since, all the more because

Use: adds an extra reason that strengthens the main statement.

Examples:
- Wir sollten gehen, **zumal** es schon spät ist.
- Er ist der richtige Kandidat, **zumal** er viel Erfahrung hat.
- Es ist wichtig, **zumal** die Situation kritisch ist.

### wegen vs aufgrund vs angesichts vs infolge
| Connector | Followed by | Style | Use |
|---|---|---|---|
| wegen | genitive, sometimes dative in speech | general | simple cause |
| aufgrund | genitive | formal | reasoned cause |
| angesichts | genitive | very formal | in view of circumstances |
| infolge | genitive | formal | consequence of an event |

Examples:
- **Wegen** des Regens bleiben wir zu Hause.
- **Aufgrund** der Untersuchungen wurde eine Entscheidung getroffen.
- **Angesichts** der Beweise ist dies problematisch.
- **Infolge** des Unfalls wurde die Straße gesperrt.`,
      examples: [
        { de: "Angesichts der hohen Kosten entschieden wir uns dagegen.", fr: "Given the high costs, we decided against it.", note: "angesichts + genitive; very formal." },
        { de: "Infolge des Unwetters wurden Straßen gesperrt.", fr: "As a result of the storm, roads were closed.", note: "infolge + genitive; formal." },
        { de: "Wir sollten gehen, zumal es schon spät ist.", fr: "We should leave, especially since it is already late.", note: "zumal adds an additional reason." },
        { de: "Er ist der richtige Kandidat, zumal er viel Erfahrung hat.", fr: "He is the right candidate, especially since he has a lot of experience.", note: "zumal strengthens the argument." },
        { de: "Aufgrund der Untersuchungen wurde eine Entscheidung getroffen.", fr: "A decision was made based on the investigations.", note: "aufgrund + genitive." }
      ]
    },
    {
      id: "c1-5-5-4",
      title: "5.5.4 Complex Conditional Connectors",
      content: `Complex conditional connectors express requirements, hypotheses, and exceptions more precisely than simple **wenn** or **falls**.

### vorausgesetzt, dass
Meaning: provided that, on condition that

Use: formal condition or prerequisite.

Examples:
- Wir machen mit, **vorausgesetzt, dass** alle zustimmen.
- Es funktioniert, **vorausgesetzt, dass** die Bedingungen erfüllt sind.

More compact variant:
- Wir machen mit, **vorausgesetzt** alle stimmen zu.

### im Falle, dass / für den Fall, dass
Meaning: in case, should it happen that

Use: hypothetical condition or eventuality.

Examples:
- **Im Falle, dass** es regnet, bleiben wir zu Hause.
- **Für den Fall, dass** er nicht kommt, haben wir einen Plan B.

### es sei denn, (dass)
Meaning: unless, except if

Use: exception or negative condition.

Examples:
- Wir gehen spazieren, **es sei denn, es regnet**.
- Ich komme, **es sei denn, dass** etwas dazwischenkommt.
- Wir machen mit, **es sei denn**, Sie sind dagegen.

**es sei denn** contains a fixed Konjunktiv I form (**sei**). The following clause can be indicative.

### Comparison with wenn and falls
| Connector | Level | Use |
|---|---|---|
| wenn | B1 | general condition |
| falls | B2 | hypothetical condition |
| vorausgesetzt, dass | C1 | formal prerequisite |
| im Falle, dass | C1 | hypothetical eventuality |
| für den Fall, dass | C1 | planned eventuality |
| es sei denn | C1 | exception / negative condition |`,
      examples: [
        { de: "Wir machen mit, vorausgesetzt, dass alle zustimmen.", fr: "We will participate provided that everyone agrees.", note: "Formal condition." },
        { de: "Es funktioniert, vorausgesetzt die Bedingungen sind erfüllt.", fr: "It works provided the conditions are met.", note: "Variant without dass." },
        { de: "Im Falle, dass es regnet, bleiben wir zu Hause.", fr: "In case it rains, we will stay at home.", note: "Hypothetical condition." },
        { de: "Für den Fall, dass er nicht kommt, haben wir einen Plan B.", fr: "In case he does not come, we have a plan B.", note: "Eventuality." },
        { de: "Wir gehen spazieren, es sei denn, es regnet.", fr: "We are going for a walk unless it rains.", note: "Exception with es sei denn." },
        { de: "Ich komme, es sei denn, dass etwas dazwischenkommt.", fr: "I will come unless something gets in the way.", note: "With dass." }
      ]
    },
    {
      id: "c1-5-5-5",
      title: "5.5.5 Consequence Connectors",
      content: `Consequence connectors express results and conclusions in a formal or elegant way.

### folglich
Meaning: consequently, therefore

Use: formal logical consequence.

Examples:
- Es regnet stark. **Folglich** bleiben wir zu Hause.
- Die Kosten sind zu hoch. **Folglich** müssen wir sparen.

Style: very written; uncommon in casual speech.

### infolgedessen
Meaning: as a consequence, consequently

Use: formal result following an event or development.

Examples:
- Die Preise sind gestiegen. **Infolgedessen** kaufen die Leute weniger.
- Die Firma hat Verluste gemacht. **Infolgedessen** wurden Stellen gestrichen.

Style: very formal, common in administrative, economic, or analytical texts.

### demzufolge
Meaning: accordingly, consequently

Use: logical conclusion based on previous information.

Examples:
- Die Untersuchungen zeigen positive Ergebnisse. **Demzufolge** können wir weitermachen.
- Alle Bedingungen sind erfüllt. **Demzufolge** wird der Vertrag unterschrieben.

Nuance: **demzufolge** suggests a deduction from what was just stated.

### Comparison
| Connector | Level | Style | Use |
|---|---|---|---|
| deshalb | B2 | common | general result |
| daher | B2 | common/written | general result |
| deswegen | B2 | common | general result |
| folglich | C1 | formal | logical consequence |
| infolgedessen | C1 | very formal | consequence of an event |
| demzufolge | C1 | formal | deduction |`,
      examples: [
        { de: "Es regnet stark. Folglich bleiben wir zu Hause.", fr: "It is raining heavily. Consequently, we are staying at home.", note: "Formal consequence." },
        { de: "Die Preise sind gestiegen. Infolgedessen kaufen die Leute weniger.", fr: "Prices have risen. As a result, people buy less.", note: "Formal consequence after a development." },
        { de: "Die Untersuchungen zeigen positive Ergebnisse. Demzufolge können wir weitermachen.", fr: "The investigations show positive results. Accordingly, we can continue.", note: "Logical deduction." },
        { de: "Alle Bedingungen sind erfüllt. Demzufolge wird der Vertrag unterschrieben.", fr: "All conditions are fulfilled. Consequently, the contract will be signed.", note: "Deductive consequence." }
      ]
    }
  ]
};
