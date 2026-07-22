import { GrammarSection } from '../../../types';

export const declinaisonsComplexesB2: GrammarSection = {
  title: "8. Declensions in Complex Contexts",
  topics: [
    {
      id: "b2-8-1",
      title: "8.1 N-Deklination",
      content: `The **N-Deklination** (also called "weak masculine nouns") applies to a specific group of masculine nouns. These nouns add **-(e)n** in the accusative, dative, and genitive. Only the nominative stays unchanged.

This pattern affects many common nouns such as Student, Kollege, Tourist, Junge, and Kunde. It is essential for accurate German because the article alone is often not enough: the noun also changes.

### Goals of this section
- Understand the basic declension pattern (8.1.1)
- Identify the four main groups of nouns affected (8.1.2)
- Master the mixed and irregular special cases (8.1.3 and 8.1.4)`,
      examples: [
        { de: "Der Student lernt. → Ich sehe den Studenten.", fr: "The student is studying. → I see the student.", note: "Nominative unchanged; accusative with -en." },
        { de: "Der Kollege kommt. → Ich helfe dem Kollegen.", fr: "The colleague is coming. → I help the colleague.", note: "Nominative unchanged; dative with -en." }
      ]
    },
    {
      id: "b2-8-1-1",
      title: "8.1.1 The Concept",
      content: `Core rule: the affected nouns take **-(e)n** in the accusative, dative, and genitive. The nominative remains unchanged.

### Standard declension: Student
| Case | Article | Form |
|---|---|---|
| Nominative | der | Student |
| Accusative | den | Studenten |
| Dative | dem | Studenten |
| Genitive | des | Studenten |

### -n or -en?
- If the noun ends in **-e**, add **-n**: Kollege → Kollegen
- Otherwise, add **-en**: Student → Studenten

### Memory rule
Only one case has no ending: the nominative. The other three cases take -en: accusative, dative, and genitive.

### Common mistakes
- Ich sehe den Student → Ich sehe den Studenten
- Ich helfe dem Kollege → Ich helfe dem Kollegen`,
      examples: [
        { de: "Ich sehe den Kunden.", fr: "I see the customer.", note: "Kunde belongs to the N-Deklination." }
      ]
    },
    {
      id: "b2-8-1-2",
      title: "8.1.2 The Four Main Groups",
      content: `N-Deklination nouns are almost always **masculine**. They fall into four practical groups:

1. **Living beings ending in -e**: der Junge, der Kollege, der Löwe, der Hase.
2. **Nationalities ending in -e**: der Franzose, der Russe, der Pole, der Chinese.
3. **Latin or Greek suffixes**: -ant (Elefant), -ent (Student), -ist (Journalist), -at (Soldat), -oge (Biologe).
4. **Important exceptions without -e**: der Mensch, der Herr, der Bär, der Nachbar, der Held.

### Recognition guide
- The noun is masculine.
- It often names a person or animal.
- It often ends in **-e** or in a learned suffix such as **-ant, -ent, -ist, -at, -oge**.
- A small group must simply be memorised: **Mensch, Herr, Bär, Nachbar, Held**.

Strategy: masculine + person/animal + ending in -e or a typical suffix = probably N-Deklination.`,
      examples: [
        { de: "Die Arbeit des Biologen.", fr: "The biologist's work.", note: "Biologe takes -n in the genitive: des Biologen." }
      ]
    },
    {
      id: "b2-8-1-3",
      title: "8.1.3 Exceptions to the Exception: the -ns Group",
      content: `A small group of masculine nouns follows the N-Deklination but adds an extra **-s** in the genitive. This is often called **mixed declension**.

These nouns take **-n** in the accusative and dative, but **-ns** in the genitive.

### der Name
| Case | Article | Form |
|---|---|---|
| Nominative | der | Name |
| Accusative | den | Namen |
| Dative | dem | Namen |
| Genitive | des | Namens |

### der Gedanke
| Case | Article | Form |
|---|---|---|
| Nominative | der | Gedanke |
| Accusative | den | Gedanken |
| Dative | dem | Gedanken |
| Genitive | des | Gedankens |

### der Buchstabe
| Case | Article | Form |
|---|---|---|
| Nominative | der | Buchstabe |
| Accusative | den | Buchstaben |
| Dative | dem | Buchstaben |
| Genitive | des | Buchstabens |

### der Friede
| Case | Article | Form |
|---|---|---|
| Nominative | der | Friede |
| Accusative | den | Frieden |
| Dative | dem | Frieden |
| Genitive | des | Friedens |

### der Wille
| Case | Article | Form |
|---|---|---|
| Nominative | der | Wille |
| Accusative | den | Willen |
| Dative | dem | Willen |
| Genitive | des | Willens |

**Rule**: these nouns end in **-e** in the nominative, take **-n** in the accusative and dative, and take **-ns** in the genitive.`,
      examples: [
        { de: "Im Namen des Gesetzes.", fr: "In the name of the law.", note: "Genitive in -ns: des Namens." },
        { de: "Der Name ist bekannt. → Ich kenne den Namen. → Im Namen des Vaters.", fr: "The name is known. → I know the name. → In the name of the father.", note: "Name: Namen in accusative, Namens in genitive." },
        { de: "Die Kraft des Gedankens.", fr: "The power of the thought.", note: "Gedanke becomes Gedankens in the genitive." },
        { de: "Die Form des Buchstabens.", fr: "The shape of the letter.", note: "Buchstabe becomes Buchstabens in the genitive." },
        { de: "Die Hoffnung des Friedens.", fr: "The hope for peace.", note: "Friede becomes Friedens in the genitive." },
        { de: "Die Stärke des Willens.", fr: "The strength of the will.", note: "Wille becomes Willens in the genitive." }
      ]
    },
    {
      id: "b2-8-1-4",
      title: "8.1.4 Special Cases: der Herr and das Herz",
      content: `### der Herr
This noun has a different singular and plural ending:
- Singular accusative/dative/genitive: **Herrn**
- Plural in all cases: **Herren**

Examples: Ich sehe den Herrn. / Ich spreche mit den Herren.

### das Herz
This is the only common **neuter** noun in this pattern. It does not change in the accusative, but it takes **-en** in the dative and **-ens** in the genitive.
- Dative: dem Herzen
- Genitive: des Herzens`,
      examples: [
        { de: "Von ganzem Herzen.", fr: "With all my heart.", note: "Dative: Herzen." }
      ]
    },
    {
      id: "b2-8-2",
      title: "8.2 Substantivised Adjectives",
      content: `A substantivised adjective is an adjective used as a noun. It is written with a capital letter, but it **keeps adjective declension**.

This section teaches you when to use a substantivised adjective instead of an ordinary noun, and how to decline it correctly.`,
      examples: [
        { de: "krank (Adjektiv) → der Kranke (Nomen)", fr: "ill/sick → the sick person", note: "The adjective becomes a noun and is capitalised." }
      ]
    },
    {
      id: "b2-8-2-1",
      title: "8.2.1 When to Use a Substantivised Adjective",
      content: `The key question is: **When should I use a substantivised adjective instead of a normal noun?**

### Criterion 1: There is no specific noun
Use a substantivised adjective when German has no specific noun for the person or concept.

Examples where the substantivised adjective is the natural choice:
- **der Deutsche**: the German person
- **der Kranke**: the sick person
- **der Angestellte**: the employee
- **das Gute**: the good, what is good

Counterexamples with normal nouns:
- **der Arzt**: doctor, not "der Medizinische"
- **der Lehrer**: teacher, not "der Lehrende" in ordinary use
- **der Student**: student, not "der Studierende" unless you deliberately choose inclusive or formal wording

### Criterion 2: A category, not a profession
**Substantivised adjective** = a general category or characteristic:
- **der Alte** = an old man / the old person
- **der Reiche** = a rich person
- **der Jugendliche** = a young person / adolescent

**Normal noun** = a profession, role, or fixed lexical noun:
- **der Arzt** = medical profession
- **der Ingenieur** = technical profession
- **der Vater** = family role

Practical rule: if you mean "a person who is..." → substantivised adjective. If you mean a job, role, or fixed noun → normal noun.

### Criterion 3: Neuter abstract concepts
After **etwas, nichts, alles, viel**, German normally uses a neuter substantivised adjective:
- **etwas Neues** = something new
- **nichts Besonderes** = nothing special
- **alles Gute** = all the best / everything good
- **viel Interessantes** = many interesting things / much that is interesting

These pronouns point to abstract content, not to a concrete noun.

### Criterion 4: Nationalities and groups
Many nationalities are expressed through substantivised adjectives:
- **der Deutsche, die Deutsche** = the German man/woman
- **die Deutschen** = the Germans

Some nationalities, however, are normal N-Deklination nouns: **der Franzose, der Russe, der Pole, der Chinese**.

### English test
If English uses an adjective as a noun-like category, German often does the same:
- "the old", "the sick", "the young", "something new" → substantivised adjective
- "the doctor", "the teacher", "the student" → normal noun

### Decision checklist
Before writing, ask:
1. Is there a specific noun? If yes, use the noun: der Arzt, der Lehrer.
2. Am I naming a category or characteristic? If yes, use a substantivised adjective: der Alte, der Kranke.
3. Is it an abstract concept after etwas/nichts/alles/viel? If yes, use the neuter form: etwas Neues.
4. Is it a nationality or group? Check whether German uses a substantivised adjective or a fixed noun.

### Spelling test
A substantivised adjective can usually be expanded to adjective + noun:
- **der Alte** → der alte Mann
- **der Arzt** → not "der arzt Mann"

### Semantic test
A substantivised adjective turns a quality into a noun:
- **alt** → **der Alte**
- **krank** → **der Kranke**

A normal noun names a specific entity or role:
- **der Arzt** = doctor as a profession.`,
      examples: [
        { de: "Der Deutsche spricht Deutsch.", fr: "The German speaks German.", note: "Substantivised adjective: no separate noun like 'Deutschlander'." },
        { de: "Der Arzt behandelt Patienten.", fr: "The doctor treats patients.", note: "Normal noun: a specific profession." },
        { de: "Gibt es etwas Neues?", fr: "Is there anything new?", note: "After etwas, German uses the neuter substantivised adjective." },
        { de: "Ich kenne einen Deutschen.", fr: "I know a German.", note: "Masculine accusative: einen Deutschen." },
        { de: "Der Lehrer unterrichtet.", fr: "The teacher teaches.", note: "Profession = normal noun." },
        { de: "Die Alten brauchen Hilfe.", fr: "The old people need help.", note: "Category = substantivised adjective." }
      ]
    },
    {
      id: "b2-8-2-2",
      title: "8.2.2 The Concept and the Declension",
      content: `Because these nouns come from adjectives, their ending depends on what comes before them: definite article, indefinite article, possessive, demonstrative, or no article.

**Fundamental rule**: a substantivised adjective keeps exactly the same ending as a normal adjective in the same position.

### After a definite article: weak declension
| Case | Masculine | Feminine | Neuter | Plural |
|---|---|---|---|---|
| Nominative | der Alte | die Alte | das Alte | die Alten |
| Accusative | den Alten | die Alte | das Alte | die Alten |
| Dative | dem Alten | der Alten | dem Alten | den Alten |
| Genitive | des Alten | der Alten | des Alten | der Alten |

Same pattern as **der gute Mann**.

### After an indefinite article: mixed declension
| Case | Masculine | Feminine | Neuter |
|---|---|---|---|
| Nominative | ein Alter | eine Alte | ein Altes |
| Accusative | einen Alten | eine Alte | ein Altes |
| Dative | einem Alten | einer Alten | einem Alten |
| Genitive | eines Alten | einer Alten | eines Alten |

Same pattern as **ein guter Mann**.

### Without an article: strong declension
Substantivised adjectives without an article are uncommon in the singular but common in the plural.

Important distinction:
- **Alter Mann** = normal adjective + noun
- **Alte** = substantivised adjective, no following noun

Plural without an article:
| Case | Form | Example |
|---|---|---|
| Nominative | Alte | Alte brauchen Hilfe. |
| Accusative | Alte | Ich kenne Alte. |
| Dative | Alten | Wir helfen Alten. |
| Genitive | Alter | Die Häuser Alter. |

### Possessives: mixed declension
Possessives such as **mein, dein, sein, ihr, unser, euer, Ihr** behave like indefinite articles.

| Case | Masculine | Feminine | Neuter |
|---|---|---|---|
| Nominative | mein Alter | meine Alte | mein Altes |
| Accusative | meinen Alten | meine Alte | mein Altes |
| Dative | meinem Alten | meiner Alten | meinem Alten |
| Genitive | meines Alten | meiner Alten | meines Alten |

### Demonstratives: weak declension
Demonstratives such as **dieser, jener, jeder, welcher** behave like definite articles.

| Case | Masculine | Feminine | Neuter | Plural |
|---|---|---|---|---|
| Nominative | dieser Alte | diese Alte | dieses Alte | diese Alten |
| Accusative | diesen Alten | diese Alte | dieses Alte | diese Alten |
| Dative | diesem Alten | dieser Alten | diesem Alten | diesen Alten |
| Genitive | dieses Alten | dieser Alten | dieses Alten | dieser Alten |

### Direct comparison
| Case | Normal adjective | Substantivised adjective |
|---|---|---|
| Nom. masc. definite | der **gute** Mann | der **Alte** |
| Acc. masc. definite | den **guten** Mann | den **Alten** |
| Dat. masc. definite | dem **guten** Mann | dem **Alten** |
| Gen. masc. definite | des **guten** Mannes | des **Alten** |
| Nom. masc. indefinite | ein **guter** Mann | ein **Alter** |
| Acc. masc. indefinite | einen **guten** Mann | einen **Alten** |

The ending follows the same grammar. The difference is capitalisation and the absence of a following noun.`,
      examples: [
        { de: "Der Kranke braucht Medizin.", fr: "The sick person needs medicine.", note: "Weak declension after a definite article; nominative." },
        { de: "Ich sehe den Kranken.", fr: "I see the sick person.", note: "Weak declension; accusative masculine." },
        { de: "Ich helfe dem Kranken.", fr: "I help the sick person.", note: "Weak declension; dative masculine." },
        { de: "Das Buch des Kranken.", fr: "The sick person's book.", note: "Weak declension; genitive masculine." },
        { de: "Ein Reisender wartet am Gleis.", fr: "A traveller is waiting on the platform.", note: "Mixed declension after an indefinite article." },
        { de: "Ich treffe einen Reisenden.", fr: "I am meeting a traveller.", note: "Mixed declension; accusative masculine." },
        { de: "Ich gebe einem Reisenden eine Karte.", fr: "I give a traveller a ticket.", note: "Mixed declension; dative masculine." },
        { de: "Mein Alter braucht Hilfe.", fr: "My old man needs help.", note: "Mixed declension after a possessive." },
        { de: "Ich kenne diesen Alten.", fr: "I know this old man.", note: "Weak declension after a demonstrative." }
      ]
    },
    {
      id: "b2-8-2-3",
      title: "8.2.3 Declension for People: Masculine and Feminine",
      content: `For people, substantivised adjectives usually have masculine and feminine forms.

### With a definite article
| Case | Masculine | Feminine |
|---|---|---|
| Nominative | der Kranke | die Kranke |
| Accusative | den Kranken | die Kranke |
| Dative | dem Kranken | der Kranken |
| Genitive | des Kranken | der Kranken |

### With an indefinite article
| Case | Masculine | Feminine |
|---|---|---|
| Nominative | ein Kranker | eine Kranke |
| Accusative | einen Kranken | eine Kranke |
| Dative | einem Kranken | einer Kranken |
| Genitive | eines Kranken | einer Kranken |

### Without an article in the plural
| Case | Form |
|---|---|
| Nominative | Kranke |
| Accusative | Kranke |
| Dative | Kranken |
| Genitive | Kranker |

The gender is grammatical and follows the person referred to. The endings are not optional: **der Kranke**, but **ein Kranker**.`,
      examples: [
        { de: "Der Verletzte liegt im Krankenhaus.", fr: "The injured man is in hospital.", note: "Masculine nominative after a definite article." },
        { de: "Eine Verletzte wartet im Flur.", fr: "An injured woman is waiting in the corridor.", note: "Feminine nominative after an indefinite article." },
        { de: "Ich helfe einem Kranken.", fr: "I help a sick man/person.", note: "Dative masculine after an indefinite article." },
        { de: "Kranke brauchen Ruhe.", fr: "Sick people need rest.", note: "Plural without article." }
      ]
    },
    {
      id: "b2-8-2-4",
      title: "8.2.4 Abstract Concepts: Neuter Forms",
      content: `For abstract ideas, German uses the neuter substantivised adjective, especially after **etwas, nichts, alles, viel, wenig**.

### Common forms
| Trigger | Example | Meaning |
|---|---|---|
| etwas | etwas Neues | something new |
| nichts | nichts Besonderes | nothing special |
| alles | alles Gute | all the best / everything good |
| viel | viel Interessantes | much that is interesting |
| wenig | wenig Neues | little that is new |

### Why the ending changes
After **etwas, nichts, viel, wenig**, the adjective usually takes strong neuter endings:
- etwas Neues
- nichts Besonderes
- viel Interessantes

After **alles**, the adjective usually has weak declension:
- alles Gute
- alles Neue

### Useful fixed expressions
- Alles Gute!
- Etwas Neues?
- Nichts Besonderes.
- Viel Interessantes erfahren.`,
      examples: [
        { de: "Ich habe etwas Interessantes gelesen.", fr: "I read something interesting.", note: "Neuter strong ending after etwas." },
        { de: "Es gibt nichts Neues.", fr: "There is nothing new.", note: "Neuter strong ending after nichts." },
        { de: "Alles Gute zum Geburtstag!", fr: "All the best for your birthday!", note: "Weak ending after alles." },
        { de: "Wir haben viel Neues gelernt.", fr: "We learned many new things.", note: "Neuter abstract use after viel." }
      ]
    },
    {
      id: "b2-8-2-5",
      title: "8.2.5 Plural of Substantivised Adjectives",
      content: `Plural forms are very common when you refer to groups of people.

### With a definite article
| Case | Form | Example |
|---|---|---|
| Nominative | die Kranken | Die Kranken warten. |
| Accusative | die Kranken | Ich sehe die Kranken. |
| Dative | den Kranken | Ich helfe den Kranken. |
| Genitive | der Kranken | Die Zimmer der Kranken. |

### Without an article
| Case | Form | Example |
|---|---|---|
| Nominative | Kranke | Kranke warten. |
| Accusative | Kranke | Ich sehe Kranke. |
| Dative | Kranken | Ich helfe Kranken. |
| Genitive | Kranker | Die Zimmer Kranker. |

### After alle and viele
This is a frequent B2 trap:
- **alle Deutschen** = all Germans (weak: -en)
- **viele Deutsche** = many Germans (strong plural nominative/accusative: -e)
- **allen Deutschen** = to all Germans
- **vielen Deutschen** = to many Germans

Do not add an extra ending by analogy with English. The form is controlled by German adjective declension.`,
      examples: [
        { de: "Die Jugendlichen diskutieren.", fr: "The young people are discussing.", note: "Plural after a definite article." },
        { de: "Jugendliche diskutieren.", fr: "Young people are discussing.", note: "Plural without article." },
        { de: "Alle Deutschen kennen das Wort.", fr: "All Germans know the word.", note: "Weak declension after alle." },
        { de: "Viele Deutsche leben im Ausland.", fr: "Many Germans live abroad.", note: "Strong declension after viele." }
      ]
    },
    {
      id: "b2-8-2-6",
      title: "8.2.6 Common Mistakes",
      content: `### Mistake 1: Forgetting the capital letter
Incorrect: der kranke
Correct: der Kranke

The word is now used as a noun, so it is capitalised.

### Mistake 2: Using noun endings instead of adjective endings
Incorrect: ein Kranken
Correct: ein Kranker

After **ein**, masculine nominative needs the mixed adjective ending **-er**.

### Mistake 3: Treating the form as fixed
Incorrect: Ich sehe der Kranke.
Correct: Ich sehe den Kranken.

The article and the substantivised adjective both follow case.

### Mistake 4: Confusing normal adjective + noun with substantivised adjective
- **alte Menschen** = old people, adjective + noun
- **Alte** = old people / the old, substantivised adjective

If a noun follows, the adjective is not substantivised.

### Mistake 5: Confusing alle Deutschen and viele Deutsche
- **alle Deutschen**: weak declension after alle
- **viele Deutsche**: strong declension after viele

### Quick correction checklist
1. Is the word capitalised?
2. Is there a following noun? If yes, it is a normal adjective.
3. Which determiner comes before it: der/ein/no article/alle/viele?
4. Which case and gender are needed?
5. Does the ending match ordinary adjective declension?`,
      examples: [
        { de: "Incorrect: ein Kranken → Correct: ein Kranker", fr: "After ein, masculine nominative takes -er.", note: "Mixed declension." },
        { de: "Incorrect: Ich sehe der Kranke → Correct: Ich sehe den Kranken", fr: "Accusative masculine requires den Kranken.", note: "Case agreement." },
        { de: "Alte Menschen vs Alte", fr: "Old people (with noun) vs old people/the old (without noun).", note: "Normal adjective vs substantivised adjective." }
      ]
    },
    {
      id: "b2-8-3",
      title: "8.3 Declension after Indefinite Pronouns",
      content: `Some German indefinite pronouns behave like complete determiners; others behave more like quantity words. This changes the adjective ending that follows them.

The main contrast is:
- **total determiners**: alle, beide, sämtliche → weak declension
- **partial determiners**: viele, einige, manche, mehrere, wenige → strong declension

This distinction is especially important in the plural.`,
      examples: [
        { de: "alle guten Freunde vs viele gute Freunde", fr: "all good friends vs many good friends", note: "alle takes weak adjective endings; viele takes strong endings." }
      ]
    },
    {
      id: "b2-8-3-1",
      title: "8.3.1 The Fundamental Principle: Total vs Partial Determiners",
      content: `### Total determiners
Words such as **alle, beide, sämtliche** present the group as complete. They already carry clear grammatical information, so the adjective uses **weak declension**.

Examples:
- alle **guten** Freunde
- beide **neuen** Autos
- sämtliche **wichtigen** Dokumente

### Partial determiners
Words such as **viele, einige, manche, mehrere, wenige** present only part of a group. The adjective must carry more grammatical information, so it uses **strong declension**.

Examples:
- viele **gute** Freunde
- einige **neue** Bücher
- mehrere **wichtige** Dokumente

### Practical shortcut
If the word means "all/both/every single one" → weak ending **-en** in nominative/accusative plural.
If the word means "many/some/several/few" → strong ending **-e** in nominative/accusative plural.`,
      examples: [
        { de: "Alle guten Freunde kommen.", fr: "All good friends are coming.", note: "Total group → weak declension." },
        { de: "Viele gute Freunde kommen.", fr: "Many good friends are coming.", note: "Partial group → strong declension." }
      ]
    },
    {
      id: "b2-8-3-2",
      title: "8.3.2 Declension after alle",
      content: `**alle** means "all" and behaves like a definite determiner. The adjective takes **weak declension**.

### Complete pattern: alle + adjective
| Case | Pronoun | Adjective | Noun | Meaning |
|---|---|---|---|---|
| Nominative | alle | guten | Freunde | all good friends |
| Accusative | alle | guten | Freunde | all good friends |
| Dative | allen | guten | Freunden | to all good friends |
| Genitive | aller | guten | Freunde | of all good friends |

### Key points
1. **alle** is mainly used in the plural.
2. The adjective takes **-en** after alle in nominative and accusative plural.
3. The pronoun itself also declines: alle, alle, allen, aller.

### With substantivised adjectives
The same rule applies:
- Alle **Deutschen**
- Alle **Alten**
- Alle **Jungen**
- Alle **Kranken**

### Singular neuter: alles
**alles** is different from plural **alle**:
- Alles **Gute**
- Alles **Neue**

Here you are dealing with a neuter abstract expression, not a plural group.`,
      examples: [
        { de: "Alle guten Freunde helfen mir.", fr: "All good friends help me.", note: "Nominative plural; weak declension." },
        { de: "Ich kenne alle neuen Schüler.", fr: "I know all the new pupils.", note: "Accusative plural." },
        { de: "Ich schreibe allen guten Freunden.", fr: "I write to all good friends.", note: "Dative plural: allen + adjective in -en." },
        { de: "Die Hilfe aller guten Freunde.", fr: "The help of all good friends.", note: "Genitive plural: aller." },
        { de: "Alle Deutschen sind pünktlich.", fr: "All Germans are punctual.", note: "With a substantivised adjective." },
        { de: "Ich helfe allen Kranken.", fr: "I help all the sick people.", note: "Dative after allen." }
      ]
    },
    {
      id: "b2-8-3-3",
      title: "8.3.3 Declension after beide",
      content: `**beide** means "both" and behaves like **alle**. It takes **weak declension**.

### Complete pattern
| Case | Plural | Example |
|---|---|---|
| Nominative | beide **guten** Freunde | Beide **guten** Freunde kommen. |
| Accusative | beide **guten** Freunde | Ich kenne beide **guten** Freunde. |
| Dative | beiden **guten** Freunden | Ich helfe beiden **guten** Freunden. |
| Genitive | beider **guten** Freunde | Die Hilfe beider **guten** Freunde. |

### Difference from alle
- **alle** = all, usually more than two
- **beide** = both, exactly two

The declension pattern is the same: weak adjective endings.`,
      examples: [
        { de: "Beide neuen Autos sind rot.", fr: "Both new cars are red.", note: "Nominative; weak declension." },
        { de: "Ich sehe beide schönen Häuser.", fr: "I see both beautiful houses.", note: "Accusative." },
        { de: "Ich helfe beiden alten Leuten.", fr: "I help both elderly people.", note: "Dative: beiden + adjective in -en." },
        { de: "Die Meinung beider jungen Männer.", fr: "The opinion of both young men.", note: "Genitive: beider." },
        { de: "Beide Deutschen sprechen Deutsch.", fr: "Both Germans speak German.", note: "With a substantivised adjective." }
      ]
    },
    {
      id: "b2-8-3-4",
      title: "8.3.4 Declension after viele, einige, manche, mehrere",
      content: `These indefinite pronouns refer to **part of a group** and trigger **strong declension**.

### General rule
**viele** (many), **einige** (some), **manche** (some/certain), **mehrere** (several):
- strong declension
- adjective ending **-e** in nominative/accusative plural
- adjective ending **-en** in dative plural
- adjective ending **-er** in genitive plural

### Complete pattern: viele + adjective
| Case | Plural | Example |
|---|---|---|
| Nominative | viele **gute** Freunde | Viele **gute** Freunde kommen. |
| Accusative | viele **gute** Freunde | Ich kenne viele **gute** Freunde. |
| Dative | vielen **guten** Freunden | Ich helfe vielen **guten** Freunden. |
| Genitive | vieler **guter** Freunde | Die Hilfe vieler **guter** Freunde. |

### Patterns by pronoun
| Pronoun | Nominative/Accusative | Dative | Genitive |
|---|---|---|---|
| viele | viele gute Freunde | vielen guten Freunden | vieler guter Freunde |
| einige | einige neue Bücher | einigen neuen Büchern | einiger neuer Bücher |
| manche | manche schöne Häuser | manchen schönen Häusern | mancher schöner Häuser |
| mehrere | mehrere interessante Ideen | mehreren interessanten Ideen | mehrerer interessanter Ideen |

### With substantivised adjectives
Pay attention to the contrast:
- Viele **Deutsche**
- Einige **Alte**
- Manche **Junge**
- Mehrere **Kranke**

In nominative/accusative plural, there is no extra **-n** after these partial determiners. Compare:
- Alle **Deutschen**
- Viele **Deutsche**`,
      examples: [
        { de: "Viele gute Schüler bestehen die Prüfung.", fr: "Many good pupils pass the exam.", note: "Nominative; strong declension." },
        { de: "Ich kenne einige neue Kollegen.", fr: "I know some new colleagues.", note: "Accusative; strong declension." },
        { de: "Ich helfe manchen alten Menschen.", fr: "I help some elderly people.", note: "Dative plural; -en is required." },
        { de: "Die Hilfe mehrerer guter Freunde.", fr: "The help of several good friends.", note: "Genitive plural; strong ending -er." },
        { de: "Viele Deutsche leben hier.", fr: "Many Germans live here.", note: "Substantivised adjective after viele." },
        { de: "Einige Alte brauchen Hilfe.", fr: "Some old people need help.", note: "Substantivised adjective after einige." }
      ]
    },
    {
      id: "b2-8-3-5",
      title: "8.3.5 Special Cases: wenige, sämtliche, mancher",
      content: `Some less frequent indefinite pronouns follow specific patterns.

### wenige: strong declension
**wenige** means "few" and follows the same pattern as **viele**.

| Case | Plural | Example |
|---|---|---|
| Nominative | wenige **gute** Freunde | Wenige **gute** Freunde bleiben. |
| Accusative | wenige **gute** Freunde | Ich kenne wenige **gute** Freunde. |
| Dative | wenigen **guten** Freunden | Ich helfe wenigen **guten** Freunden. |
| Genitive | weniger **guter** Freunde | Die Meinung weniger **guter** Freunde. |

### sämtliche: weak declension
**sämtliche** means "all without exception" and behaves like **alle**.

| Case | Plural | Example |
|---|---|---|
| Nominative | sämtliche **guten** Freunde | Sämtliche **guten** Freunde sind da. |
| Accusative | sämtliche **guten** Freunde | Ich kenne sämtliche **guten** Freunde. |
| Dative | sämtlichen **guten** Freunden | Ich helfe sämtlichen **guten** Freunden. |
| Genitive | sämtlicher **guten** Freunde | Die Hilfe sämtlicher **guten** Freunde. |

**sämtliche** is formal and less common than **alle**.

### mancher in the singular: mixed declension
In the singular, **mancher** behaves like an indefinite article and takes **mixed declension**.

| Case | Masculine | Feminine | Neuter |
|---|---|---|---|
| Nominative | mancher **gute** Freund | manche **gute** Freundin | manches **gute** Buch |
| Accusative | manchen **guten** Freund | manche **gute** Freundin | manches **gute** Buch |
| Dative | manchem **guten** Freund | mancher **guten** Freundin | manchem **guten** Buch |
| Genitive | manches **guten** Freundes | mancher **guten** Freundin | manches **guten** Buches |

Rule:
- singular **mancher** behaves like **ein** → mixed declension
- plural **manche** behaves like **viele** → strong declension`,
      examples: [
        { de: "Wenige gute Schüler bestehen nicht.", fr: "Few good pupils fail.", note: "Strong declension after wenige." },
        { de: "Sämtliche neuen Mitarbeiter sind da.", fr: "All new employees are here.", note: "Weak declension after sämtliche." },
        { de: "Mancher gute Freund hilft mir.", fr: "Many a good friend helps me.", note: "Mixed declension; masculine singular." },
        { de: "Manche gute Freundin ruft an.", fr: "Many a good female friend calls.", note: "Mixed declension; feminine singular." },
        { de: "Manches gute Buch ist teuer.", fr: "Many a good book is expensive.", note: "Mixed declension; neuter singular." }
      ]
    },
    {
      id: "b2-8-3-6",
      title: "8.3.6 Complete Comparison Table",
      content: `Use this comparison to separate the two major families: total determiners and partial determiners.

### alle vs viele in the plural
| Case | alle + adjective | viele + adjective |
|---|---|---|
| Nominative | alle **guten** Freunde | viele **gute** Freunde |
| Accusative | alle **guten** Freunde | viele **gute** Freunde |
| Dative | allen **guten** Freunden | vielen **guten** Freunden |
| Genitive | aller **guten** Freunde | vieler **guter** Freunde |

### Key difference
- **alle** → **-en** in nominative/accusative plural: weak declension
- **viele** → **-e** in nominative/accusative plural: strong declension
- Dative plural: both take **-en**
- Genitive plural: total determiners keep **-en**, partial determiners take **-er**

### Nominative/accusative plural
| Pronoun | Type | Adjective ending | Example |
|---|---|---|---|
| alle | total | **-en** | alle **guten** Freunde |
| beide | total | **-en** | beide **guten** Freunde |
| sämtliche | total | **-en** | sämtliche **guten** Freunde |
| viele | partial | **-e** | viele **gute** Freunde |
| einige | partial | **-e** | einige **gute** Freunde |
| manche | partial | **-e** | manche **gute** Freunde |
| mehrere | partial | **-e** | mehrere **gute** Freunde |
| wenige | partial | **-e** | wenige **gute** Freunde |

### Dative plural
All forms take **-en** on the adjective:
| Pronoun form | Example |
|---|---|
| allen | allen **guten** Freunden |
| beiden | beiden **guten** Freunden |
| sämtlichen | sämtlichen **guten** Freunden |
| vielen | vielen **guten** Freunden |
| einigen | einigen **guten** Freunden |
| manchen | manchen **guten** Freunden |
| mehreren | mehreren **guten** Freunden |
| wenigen | wenigen **guten** Freunden |

### Genitive plural
| Pronoun | Declension | Ending | Example |
|---|---|---|---|
| aller | weak | **-en** | aller **guten** Freunde |
| beider | weak | **-en** | beider **guten** Freunde |
| sämtlicher | weak | **-en** | sämtlicher **guten** Freunde |
| vieler | strong | **-er** | vieler **guter** Freunde |
| einiger | strong | **-er** | einiger **guter** Freunde |
| mancher | strong | **-er** | mancher **guter** Freunde |
| mehrerer | strong | **-er** | mehrerer **guter** Freunde |
| weniger | strong | **-er** | weniger **guter** Freunde |`,
      examples: [
        { de: "Alle guten vs viele gute Freunde", fr: "All good vs many good friends.", note: "Direct comparison of adjective endings." },
        { de: "Ich helfe allen guten Freunden.", fr: "I help all good friends.", note: "Dative after allen." },
        { de: "Ich helfe vielen guten Freunden.", fr: "I help many good friends.", note: "Same dative adjective ending." },
        { de: "Die Hilfe aller guten Freunde.", fr: "The help of all good friends.", note: "Genitive; weak declension." },
        { de: "Die Hilfe vieler guter Freunde.", fr: "The help of many good friends.", note: "Genitive; strong declension." }
      ]
    },
    {
      id: "b2-8-3-7",
      title: "8.3.7 Common Mistakes and Traps",
      content: `### Mistake 1: Confusing alle and viele in nominative/accusative
Incorrect: Alle **gute** Freunde
Incorrect: Viele **guten** Freunde

Correct: Alle **guten** Freunde
Correct: Viele **gute** Freunde

Reason: **alle** is a total determiner → weak declension. **viele** is a partial determiner → strong declension.

### Mistake 2: Forgetting that the dative plural always takes -en
Incorrect: Ich helfe vielen **gute** Freunden.
Correct: Ich helfe vielen **guten** Freunden.

In the dative plural, adjectives take **-en** regardless of whether the broader pattern is weak or strong.

### Mistake 3: Using -en in the genitive after viele
Incorrect: Die Hilfe vieler **guten** Freunde.
Correct: Die Hilfe vieler **guter** Freunde.

After **viele** with strong declension, the genitive plural adjective ending is **-er**.

Compare:
- aller **guten** Freunde
- vieler **guter** Freunde

### Mistake 4: Confusing singular mancher and plural manche
Incorrect: Mancher **guten** Freund.
Correct: Mancher **gute** Freund.

Correct plural: Manche **gute** Freunde.

Reason: singular **mancher** behaves like **ein**, while plural **manche** behaves like **viele**.

### Mistake 5: Forgetting to decline the pronoun itself
Incorrect: Ich helfe alle **guten** Freunden.
Correct: Ich helfe **allen guten** Freunden.

The pronoun declines too: alle, alle, **allen**, aller.

### Mistake 6: Adding -n after viele with substantivised adjectives
Incorrect: Viele **Deutschen**
Correct: Viele **Deutsche**

Compare:
- Alle **Deutschen**: weak declension after alle
- Viele **Deutsche**: strong declension after viele

### Verification checklist
1. Is the pronoun total (alle, beide, sämtliche) or partial (viele, einige, manche, mehrere, wenige)?
2. If total: weak declension, usually **-en** in nominative/accusative plural.
3. If partial: strong declension, usually **-e** in nominative/accusative plural.
4. In the dative plural: adjective **-en**.
5. In the genitive plural: **-en** for total determiners, **-er** for partial determiners.
6. Has the pronoun itself been declined?
7. With substantivised adjectives, check the contrast: alle Deutschen vs viele Deutsche.`,
      examples: [
        { de: "Incorrect: Alle gute Freunde → Correct: Alle guten Freunde", fr: "Do not forget -en after alle.", note: "Weak declension after a total determiner." },
        { de: "Incorrect: Viele guten Freunde → Correct: Viele gute Freunde", fr: "After viele, use strong declension with -e.", note: "Strong declension after a partial determiner." },
        { de: "Ich helfe allen guten Freunden.", fr: "I help all good friends.", note: "Correct dative plural." },
        { de: "Die Hilfe vieler guter Freunde.", fr: "The help of many good friends.", note: "Correct genitive plural after viele." },
        { de: "Alle Deutschen vs viele Deutsche", fr: "All Germans vs many Germans.", note: "Substantivised adjective contrast." }
      ]
    }
  ]
};
