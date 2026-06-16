import { GrammarSection } from '../../../types';

export const phraseComplexeC1: GrammarSection = {
  title: "5.1 Refining Complex Sentences (Satzbau für Fortgeschrittene)",
  topics: [
    {
      id: "c1-5-1",
      title: "5.1 Introduction",
      content: `At C1 level, you move beyond simply joining subordinate clauses. You learn to build denser, more elegant sentences that are typical of formal written German.

This section focuses on condensing information and using complex structures in a refined but still readable way.`,
      examples: [
        { de: "B2: Der Mann, der am Fenster sitzt, liest ein Buch. -> C1: Der am Fenster sitzende Mann liest ein Buch.", fr: "The man sitting by the window is reading a book.", note: "The relative clause is condensed into a participial construction." }
      ]
    },
    {
      id: "c1-5-1-1",
      title: "5.1.1 Participial Constructions (Partizipialsätze)",
      content: `Participial constructions condense relative or circumstantial clauses. They create a concise, formal, and information-rich style.

### Basic principle
Instead of using a full relative clause, German can use a participle before the noun it describes. The participle behaves like an adjective and is declined like one.

**Structure**: modifiers + participle + noun. There is normally no comma inside this noun phrase.

### Present participle: Partizip I
The **Partizip I** expresses an **active** and usually **simultaneous** action.

Transformation:
- B2: Der Mann, **der** am Fenster **sitzt**, liest ein Buch.
- C1: Der am Fenster **sitzende** Mann liest ein Buch.

Rule:
1. Remove the relative pronoun.
2. Change the verb into Partizip I: infinitive + **-d**.
3. Put the participle before the noun.
4. Decline the participle for gender, number, and case.

### Declension of Partizip I
| Case | Masculine | Feminine | Neuter | Plural |
|---|---|---|---|---|
| Nominative | der **sitzende** Mann | die **sitzende** Frau | das **sitzende** Kind | die **sitzenden** Menschen |
| Accusative | den **sitzenden** Mann | die **sitzende** Frau | das **sitzende** Kind | die **sitzenden** Menschen |
| Dative | dem **sitzenden** Mann | der **sitzenden** Frau | dem **sitzenden** Kind | den **sitzenden** Menschen |
| Genitive | des **sitzenden** Mannes | der **sitzenden** Frau | des **sitzenden** Kindes | der **sitzenden** Menschen |

### Transformation examples
- Die Studenten, **die** die Bibliothek **besuchen**, studieren viel.
- Die die Bibliothek **besuchenden** Studenten studieren viel.

- Das Kind, **das** auf der Straße **spielt**, ist gefährdet.
- Das auf der Straße **spielende** Kind ist gefährdet.

- Die Frau, **die** in Berlin **wohnt**, arbeitet hier.
- Die in Berlin **wohnende** Frau arbeitet hier.

### Past participle: Partizip II
The **Partizip II** replaces a passive relative clause. It normally expresses a **passive** and often **prior** action.

Transformation:
- B2: Das Auto, **das** in Deutschland **repariert wurde**, ist teuer.
- C1: Das in Deutschland **reparierte** Auto ist teuer.

Rule:
1. Remove the relative pronoun.
2. Remove the passive auxiliary.
3. Keep the Partizip II.
4. Put it before the noun and decline it.

### Declension of Partizip II
| Case | Masculine | Feminine | Neuter | Plural |
|---|---|---|---|---|
| Nominative | der **reparierte** Wagen | die **reparierte** Tür | das **reparierte** Auto | die **reparierten** Autos |
| Accusative | den **reparierten** Wagen | die **reparierte** Tür | das **reparierte** Auto | die **reparierten** Autos |
| Dative | dem **reparierten** Wagen | der **reparierten** Tür | dem **reparierten** Auto | den **reparierten** Autos |
| Genitive | des **reparierten** Wagens | der **reparierten** Tür | des **reparierten** Autos | der **reparierten** Autos |

### Partizip II transformations
- Die Briefe, **die** gestern **geschrieben wurden**, sind wichtig.
- Die gestern **geschriebenen** Briefe sind wichtig.

- Das Buch, **das** von Goethe **geschrieben wurde**, ist bekannt.
- Das von Goethe **geschriebene** Buch ist bekannt.

- Die Entscheidung, **die** gestern **getroffen wurde**, ist wichtig.
- Die gestern **getroffene** Entscheidung ist wichtig.

### Important rules
1. The participle agrees with the noun in gender, number, and case.
2. It comes before the noun.
3. Complements and adverbs come before the participle.
4. This style is more formal than a relative clause.

### When to use participial constructions
Use them in formal writing, reports, academic texts, and compact written summaries.

Avoid them in everyday spoken German when the group becomes too long or hard to process. If the relative clause contains several verbs or complex logic, a full relative clause is often clearer.

### Common traps
Incorrect: Der **sitzende** Männer.
Correct: Die **sitzenden** Männer.

Incorrect: Der, am Fenster sitzende, Mann.
Correct: Der am Fenster **sitzende** Mann.

Incorrect: Der **repariert** Auto.
Correct: Das **reparierte** Auto.`,
      examples: [
        { de: "Der am Fenster sitzende Mann liest ein Buch.", fr: "The man sitting by the window is reading a book.", note: "Partizip I: active relative clause transformed." },
        { de: "Das in Deutschland reparierte Auto ist teuer.", fr: "The car repaired in Germany is expensive.", note: "Partizip II: passive relative clause transformed." },
        { de: "Die die Bibliothek besuchenden Studenten studieren viel.", fr: "The students who visit the library study a lot.", note: "Partizip I with a complement." },
        { de: "Die gestern geschriebenen Briefe sind wichtig.", fr: "The letters written yesterday are important.", note: "Partizip II with a time adverb." },
        { de: "Das von Goethe geschriebene Buch ist bekannt.", fr: "The book written by Goethe is well known.", note: "Partizip II with an agent introduced by von + dative." },
        { de: "Ich kenne den am Fenster sitzenden Mann.", fr: "I know the man sitting by the window.", note: "Accusative masculine: sitzenden." },
        { de: "Ich helfe den in Berlin wohnenden Studenten.", fr: "I help the students who live in Berlin.", note: "Dative plural: wohnenden." }
      ]
    },
    {
      id: "c1-5-1-2",
      title: "5.1.2 The Gerundive (das Gerundivum)",
      content: `The German gerundive, **zu + Partizip I**, expresses passive **necessity** or **possibility**. It is formal and compact, and often replaces a relative clause with passive **müssen** or **können**.

### Formation
**zu + infinitive + -d + adjective ending**

Example:
- lösen -> zu lösend -> ein **zu lösendes** Problem

### Basic transformation
- B2: Das ist ein Problem, **das gelöst werden muss**.
- C1: Das ist ein **zu lösendes** Problem.

Rule:
1. Remove the relative clause.
2. Transform the passive modal idea into **zu + Partizip I**.
3. Put the gerundive before the noun.
4. Decline it like an adjective.

### Declension
| Case | Masculine | Feminine | Neuter | Plural |
|---|---|---|---|---|
| Nominative | der **zu lösende** Konflikt | die **zu lösende** Frage | das **zu lösende** Problem | die **zu lösenden** Probleme |
| Accusative | den **zu lösenden** Konflikt | die **zu lösende** Frage | das **zu lösende** Problem | die **zu lösenden** Probleme |
| Dative | dem **zu lösenden** Konflikt | der **zu lösenden** Frage | dem **zu lösenden** Problem | den **zu lösenden** Problemen |
| Genitive | des **zu lösenden** Konflikts | der **zu lösenden** Frage | des **zu lösenden** Problems | der **zu lösenden** Probleme |

### Meaning: necessity or possibility
Necessity:
- Das ist eine Aufgabe, **die erledigt werden muss**.
- Das ist eine **zu erledigende** Aufgabe.

Possibility:
- Das ist ein Problem, **das gelöst werden kann**.
- Das ist ein **zu lösendes** Problem.

The context decides whether the meaning is "must be done" or "can be done".

### Separable-prefix verbs
With separable verbs, **zu** goes between the prefix and the verb:
- aufgeben -> auf**zu**gebend -> ein **aufzugebender** Plan
- einkaufen -> ein**zu**kaufend -> die **einzukaufenden** Lebensmittel
- abgeben -> ab**zu**gebend -> das **abzugebende** Dokument

### With complements
Complements come before the gerundive:
- Eine **von allen zu akzeptierende** Entscheidung.
- Das **bis morgen zu erledigende** Projekt.
- Die **in dieser Woche zu besprechenden** Themen.

### Comparison with other structures
| Structure | Example | Style |
|---|---|---|
| Gerundive | Das ist ein **zu lösendes** Problem. | C1, formal |
| Relative clause | Das ist ein Problem, **das gelöst werden muss**. | clearer, more neutral |
| -bar adjective | Das ist ein **lösbares** Problem. | concise |
| sein + zu | Das Problem **ist zu lösen**. | formal alternative |

### Usage
Use the gerundive in academic, administrative, legal, and formal written style. Avoid it in casual conversation when a relative clause is clearer.`,
      examples: [
        { de: "Das ist ein zu lösendes Problem.", fr: "This is a problem to be solved.", note: "Gerundive with passive necessity or possibility." },
        { de: "Die zu erledigende Aufgabe ist wichtig.", fr: "The task to be completed is important.", note: "Feminine nominative." },
        { de: "Ich sehe das zu prüfende Dokument.", fr: "I see the document to be checked.", note: "Neuter accusative." },
        { de: "Die aufzugebende Wohnung ist groß.", fr: "The apartment to be given up is large.", note: "Separable prefix: zu is inserted after the prefix." },
        { de: "Die einzukaufenden Lebensmittel sind teuer.", fr: "The groceries to be bought are expensive.", note: "Separable-prefix verb." },
        { de: "Eine von allen zu akzeptierende Entscheidung.", fr: "A decision to be accepted by everyone.", note: "With a complement introduced by von + dative." },
        { de: "Das bis morgen zu erledigende Projekt.", fr: "The project to be completed by tomorrow.", note: "With a time complement." }
      ]
    },
    {
      id: "c1-5-1-3",
      title: "5.1.3 Expanded Infinitive Clauses",
      content: `Infinitive clauses with **zu** can become very dense at C1 level. Several elements can be inserted before the infinitive: complements, negation, adverbs, reflexive pronouns, and time expressions.

### Simple vs complex structure
Simple:
- Er hat die Absicht, **das Land zu verlassen**.

Complex:
- Er hat die Absicht, **ohne sich von jemandem zu verabschieden, das Land heimlich zu verlassen**.

### What can appear inside the infinitive group?
1. Prepositional complements: von jemandem, mit ihm, auf etwas
2. Adverbs: langsam, vorsichtig, gern
3. Negation: nicht, kein, niemals
4. Pronouns: sich, es, ihn
5. Circumstantial elements: heute, morgen, hier

### Examples
- Es ist schwierig, **sich von seiner Familie zu trennen**.
- Er versucht, **langsam und vorsichtig zu fahren**.
- Er beschloss, **niemals wieder zurückzukommen**.
- Er hat die Absicht, **ohne sich von jemandem zu verabschieden, das Land heimlich zu verlassen**.

### Separable-prefix verbs
With separable verbs, **zu** goes between prefix and verb even in long infinitive clauses:
- Es ist wichtig, **rechtzeitig abzureisen**.
- Er plant, **ohne Erlaubnis einzutreten**.
- Er beschloss, **niemals wieder zurückzukommen**.

### Word order
Complements normally come before the infinitive with **zu**:
- **sich von jemandem zu verabschieden**
- **ohne Erlaubnis einzutreten**
- **langsam und sicher zu fahren**
- **mit ihm zusammenzuarbeiten**

### Common triggers
Verbs of intention or will:
- vorhaben, zu...
- sich entscheiden, zu...
- planen, zu...
- versuchen, zu...

Verbs of opinion or expectation:
- glauben, zu...
- hoffen, zu...
- erwarten, zu...

Verbs of appearance or risk:
- scheinen, zu...
- drohen, zu...

Adjective + sein:
- Es ist wichtig, zu...
- Es ist schwierig, zu...
- Es ist möglich, zu...

### Several coordinated infinitives
- Er hat vor, **zu studieren und später zu arbeiten**.
- Es ist wichtig, **zu lernen und sich zu verbessern**.

### Common mistakes
Incorrect: Er versucht, **langsam fahren**.
Correct: Er versucht, **langsam zu fahren**.

Incorrect: Er plant, **zu eintreten**.
Correct: Er plant, **einzutreten**.

Incorrect: Es ist schwierig, **von seiner Familie zu trennen**.
Correct: Es ist schwierig, **sich von seiner Familie zu trennen**.`,
      examples: [
        { de: "Er hat die Absicht, ohne sich von jemandem zu verabschieden, das Land zu verlassen.", fr: "He intends to leave the country without saying goodbye to anyone.", note: "Complex infinitive clause with several elements." },
        { de: "Es ist schwierig, sich von seiner Familie zu trennen.", fr: "It is difficult to separate from one's family.", note: "Reflexive verb with a prepositional complement." },
        { de: "Er versucht, langsam und vorsichtig zu fahren.", fr: "He tries to drive slowly and carefully.", note: "With adverbs." },
        { de: "Er beschloss, niemals wieder zurückzukommen.", fr: "He decided never to come back again.", note: "Negation with a separable-prefix verb." },
        { de: "Es ist wichtig, rechtzeitig abzureisen.", fr: "It is important to leave on time.", note: "Time adverb with a separable-prefix verb." },
        { de: "Er plant, ohne Erlaubnis einzutreten.", fr: "He plans to enter without permission.", note: "Prepositional complement with a separable-prefix verb." },
        { de: "Er hat vor, zu studieren und später zu arbeiten.", fr: "He intends to study and work later.", note: "Two coordinated infinitive clauses." }
      ]
    }
  ]
};
