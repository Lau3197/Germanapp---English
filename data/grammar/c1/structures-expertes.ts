import { GrammarSection } from '../../../types';

export const structuresExpertesC1: GrammarSection = {
  title: "5.6 Specific Points and Expert Structures",
  topics: [
    {
      id: "c1-5-6",
      title: "5.6 Introduction",
      content: `This section presents some of the most advanced and specific C1 structures. They are called "expert" structures because they require precise control of register, syntax, and meaning.

The focus is on **Funktionsverbgefüge**, complex double conjunctions, and subtle vocabulary distinctions that matter in advanced German.`,
      examples: [
        { de: "Funktionsverbgefüge: kritisieren → Kritik üben an", fr: "to criticise → to express criticism of", note: "A verb-noun construction." }
      ]
    },
    {
      id: "c1-5-6-1",
      title: "5.6.1 Funktionsverbgefüge: Verb-Noun Constructions",
      content: `**Funktionsverbgefüge** are fixed expressions made of a "functional" verb and a noun. They are very common in formal, administrative, academic, and journalistic German.

The verb often has little meaning on its own in the expression; the noun carries the main semantic weight.

### Basic principle
Simple verbal style:
- Er **kritisiert** das System.

Funktionsverbgefüge:
- Er **übt Kritik** an dem System.

### Typical structure
**Functional verb + noun + optional preposition + complement**

Common functional verbs:
- bringen
- kommen
- stellen
- nehmen
- setzen
- geraten
- finden
- leisten
- führen
- treffen

### Transformations
**kritisieren → Kritik üben**
- Er **kritisiert** das System.
- Er **übt Kritik** an dem System.

**anwenden → zur Anwendung kommen**
- Wir **wenden** diese Methode **an**.
- Diese Methode **kommt zur Anwendung**.

**beeinflussen → Einfluss nehmen**
- Er **beeinflusst** die Entscheidung.
- Er **nimmt Einfluss** auf die Entscheidung.

### Common Funktionsverbgefüge
| Simple verb | Funktionsverbgefüge | Preposition | Example |
|---|---|---|---|
| kritisieren | **Kritik üben** | an + dative | Er übt Kritik **an** dem System. |
| anwenden | **zur Anwendung kommen** | - | Die Methode kommt zur Anwendung. |
| beeinflussen | **Einfluss nehmen** | auf + accusative | Er nimmt Einfluss **auf** die Entscheidung. |
| erfüllen | **in Erfüllung gehen** | - | Der Wunsch geht in Erfüllung. |
| helfen | **Hilfe leisten** | - | Er leistet Hilfe. |
| entscheiden | **eine Entscheidung treffen** | - | Wir treffen eine Entscheidung. |
| beantragen | **einen Antrag stellen** | - | Er stellt einen Antrag. |
| kontaktieren | **in Kontakt treten** | mit + dative | Wir treten in Kontakt **mit** ihm. |
| berücksichtigen | **Berücksichtigung finden** | - | Dies findet Berücksichtigung. |
| prüfen | **eine Prüfung vornehmen** | - | Wir nehmen eine Prüfung vor. |

### Useful groups
**bringen + noun**
- **zum Ausdruck bringen**: express
- **zur Sprache bringen**: mention, bring up
- **in Gang bringen**: set in motion
- **zur Kenntnis bringen**: notify, bring to someone's attention

**kommen + noun**
- **zur Anwendung kommen**: be applied
- **zum Einsatz kommen**: be used/deployed
- **in Frage kommen**: be an option
- **in Betracht kommen**: be considered
- **zustande kommen**: come about
- **zum Tragen kommen**: take effect

**stellen + noun**
- **einen Antrag stellen**: submit an application
- **eine Frage stellen**: ask a question
- **zur Verfügung stellen**: make available
- **in Frage stellen**: call into question
- **zur Diskussion stellen**: put up for discussion

**nehmen + noun**
- **Einfluss nehmen**: influence
- **Stellung nehmen**: take a position
- **Abschied nehmen**: say goodbye
- **Rücksicht nehmen**: take into consideration
- **einen Anlauf nehmen**: make a new attempt
- **eine Prüfung vornehmen**: carry out an examination

**setzen + noun**
- **aufs Spiel setzen**: put at risk
- **in Gang setzen**: set in motion
- **umsetzen**: implement
- **außer Kraft setzen**: repeal / invalidate

**geraten + noun**
- **in Vergessenheit geraten**: fall into oblivion
- **außer Kontrolle geraten**: get out of control
- **in Schwierigkeiten geraten**: get into difficulty

### Declension
The nouns inside these expressions can appear in different cases:
- Er übt **Kritik** an dem System. (accusative object)
- Die **Kritik** an dem System ist berechtigt. (nominative subject)
- Wir nehmen **Einfluss** auf die Entscheidung. (accusative object)
- Der **Einfluss** auf die Entscheidung ist groß. (nominative subject)

### Usage
Use Funktionsverbgefüge in formal writing, reports, administration, academic style, and official documents.

Avoid overusing them in casual conversation. In spoken German, the simple verb is often clearer and more natural.

### Common traps
Incorrect: Er übt Kritik **das** System.
Correct: Er übt Kritik **an dem** System.

Incorrect: Er **kritisiert Kritik**.
Correct: Er **übt Kritik** or Er **kritisiert**.`,
      examples: [
        { de: "Er übt Kritik an dem System.", fr: "He criticises the system.", note: "Kritik üben an + dative." },
        { de: "Diese Methode kommt zur Anwendung.", fr: "This method is applied.", note: "zur Anwendung kommen." },
        { de: "Er nimmt Einfluss auf die Entscheidung.", fr: "He influences the decision.", note: "Einfluss nehmen auf + accusative." },
        { de: "Wir treffen eine Entscheidung.", fr: "We make a decision.", note: "eine Entscheidung treffen." },
        { de: "Er bringt seine Meinung zum Ausdruck.", fr: "He expresses his opinion.", note: "zum Ausdruck bringen." },
        { de: "Wir stellen einen Antrag.", fr: "We submit an application.", note: "einen Antrag stellen." },
        { de: "Er nimmt Stellung zu dem Thema.", fr: "He takes a position on the topic.", note: "Stellung nehmen zu." },
        { de: "Wir treten in Kontakt mit ihm.", fr: "We get in contact with him.", note: "in Kontakt treten mit + dative." }
      ]
    },
    {
      id: "c1-5-6-2",
      title: "5.6.2 Complex Double Conjunctions",
      content: `Complex double conjunctions express very specific logical relations.

### als dass
Meaning: too... for / too... for it to be possible that

Use: negative consequence after **zu + adjective**.

Structure: **zu + adjective + als dass + Konjunktiv II**

Examples:
- Er ist **zu** klug, **als dass** er das glauben würde.
- Es ist **zu** spät, **als dass** wir noch gehen könnten.
- Die Aufgabe ist **zu** schwierig, **als dass** ich sie lösen könnte.

Rule: **als dass** is followed by Konjunktiv II. The negation is implicit; do not add **nicht**.

Simpler B2 variant:
- Er ist **zu** klug, **um** das **zu** glauben.

Difference:
- **als dass + KII**: more formal and elegant
- **um... zu**: simpler and more common

### ohne dass
Meaning: without

Use: one event happens without another event happening.

Examples:
- Er verließ das Land, **ohne dass** sich jemand verabschiedete.
- Sie ging weg, **ohne dass** er es bemerkte.
- Wir handelten, **ohne dass** eine Diskussion stattfand.

Infinitive variant:
- Er verließ das Land, **ohne sich zu verabschieden**.

Difference:
- **ohne dass + clause** can have a different subject.
- **ohne... zu + infinitive** normally has the same subject.

### anstatt dass / statt dass
Meaning: instead of

Use: one action happens instead of another.

Examples:
- Er arbeitet, **anstatt dass** er sich ausruht.
- Sie kritisierte, **statt dass** sie half.
- Wir diskutieren, **anstatt dass** wir handeln.

Infinitive variant:
- Er arbeitet, **anstatt** sich **auszuruhen**.

Difference:
- **anstatt dass + clause** can have a different subject.
- **anstatt... zu + infinitive** normally has the same subject.

### Summary
| Conjunction | Structure | Meaning | Level |
|---|---|---|---|
| als dass | zu + adjective + als dass + KII | too... for | C1 |
| ohne dass | clause + ohne dass + clause | without | C1 |
| anstatt dass | clause + anstatt dass + clause | instead of | C1 |
| statt dass | clause + statt dass + clause | instead of | C1 |`,
      examples: [
        { de: "Er ist zu klug, als dass er das glauben würde.", fr: "He is too intelligent to believe that.", note: "als dass with Konjunktiv II." },
        { de: "Es ist zu spät, als dass wir noch gehen könnten.", fr: "It is too late for us to still be able to leave.", note: "als dass with könnten." },
        { de: "Er verließ das Land, ohne dass sich jemand verabschiedete.", fr: "He left the country without anyone saying goodbye.", note: "ohne dass with a different subject." },
        { de: "Sie ging weg, ohne dass er es bemerkte.", fr: "She went away without him noticing.", note: "ohne dass with a clause." },
        { de: "Er arbeitet, anstatt dass er sich ausruht.", fr: "He works instead of resting.", note: "anstatt dass." },
        { de: "Wir diskutieren, statt dass wir handeln.", fr: "We discuss instead of acting.", note: "statt dass variant." }
      ]
    },
    {
      id: "c1-5-6-3",
      title: "5.6.3 Subtle Vocabulary Distinctions",
      content: `At C1 level, you need to control subtle differences between words that look similar but do not mean exactly the same thing.

### scheinbar vs anscheinend
**scheinbar** means the appearance is deceptive: it seems so, but it is not true.

Example:
- Er ist **scheinbar** krank, aber in Wirklichkeit ist er gesund.

Meaning: he seems ill, but he is not actually ill.

**anscheinend** means apparently / it seems likely to be true.

Example:
- Er ist **anscheinend** krank, denn er hustet viel.

Meaning: he seems ill, and that is probably true.

| Word | Meaning | Connotation |
|---|---|---|
| scheinbar | deceptive appearance | false appearance |
| anscheinend | apparently, likely | probably true |

### wegen vs aufgrund
**wegen** expresses a general cause.

Examples:
- **Wegen** des Regens bleiben wir zu Hause.
- **Wegen** des Unfalls wurde die Straße gesperrt.

It is traditionally followed by the genitive; dative is common in spoken German.

**aufgrund** is more formal and analytical.

Examples:
- **Aufgrund** der Untersuchungen wurde eine Entscheidung getroffen.
- **Aufgrund** der neuen Beweise wurde der Fall neu aufgerollt.

It is followed by the genitive and often suggests an argument, analysis, or evidence-based reason.

| Word | Style | Use |
|---|---|---|
| wegen | general | simple cause |
| aufgrund | formal | reasoned or analytical cause |

### weitere
**weitere** can mean "another", "additional", or "further", depending on context.

Examples:
- Ich möchte eine **weitere** Aufgabe. = I would like another/additional task.
- **Weitere** Informationen folgen. = Further information will follow.

The exact English translation depends on whether the context stresses difference or addition.

### Summary
| Word 1 | Word 2 | Key difference | Example |
|---|---|---|---|
| scheinbar | anscheinend | false appearance vs probable appearance | scheinbar krank vs anscheinend krank |
| wegen | aufgrund | general cause vs formal analytical cause | wegen des Regens vs aufgrund der Untersuchungen |

### Common traps
Incorrect if you mean "probably ill":
- Er ist **scheinbar** krank.

Correct:
- Er ist **anscheinend** krank.

In formal analytical writing, **aufgrund** is often better than **wegen**:
- **Aufgrund** der Untersuchungen...

In everyday contexts, **wegen** is natural:
- **Wegen** des Regens...`,
      examples: [
        { de: "Er ist scheinbar krank, aber in Wirklichkeit ist er gesund.", fr: "He is seemingly ill, but in reality he is healthy.", note: "scheinbar: false appearance." },
        { de: "Er ist anscheinend krank, denn er hustet viel.", fr: "He is apparently ill because he coughs a lot.", note: "anscheinend: probably true." },
        { de: "Wegen des Regens bleiben wir zu Hause.", fr: "Because of the rain, we are staying at home.", note: "wegen: simple cause." },
        { de: "Aufgrund der Untersuchungen wurde eine Entscheidung getroffen.", fr: "A decision was made based on the investigations.", note: "aufgrund: formal analytical cause." },
        { de: "Ich möchte eine weitere Aufgabe.", fr: "I would like another task.", note: "weitere can mean another or additional." },
        { de: "Weitere Informationen folgen.", fr: "Further information will follow.", note: "weitere as further/additional." }
      ]
    }
  ]
};
