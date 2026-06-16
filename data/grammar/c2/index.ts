import { GrammarLevel, LanguageLevel } from '../../../types';

export const c2Grammar: GrammarLevel = {
  level: LanguageLevel.C2,
  title: "C2 Level: Mastery",
  description: "Refine your command of German to a near-native level.",
  sections: [
    {
      title: "6.1 Registers and Style",
      topics: [
        {
          id: "c2-6-1-1",
          title: "6.1.1 Different Registers",
          content: `**Registers in German**

At C2 level, you need to recognise and use several registers accurately.

### 1. Hochdeutsch: standard German
The official standard used in education, administration, national media, and formal writing.

Features:
- precise grammar
- neutral vocabulary
- expected in official or professional contexts

### 2. Umgangssprache: everyday spoken German
The everyday register used with friends, family, colleagues, and in informal speech.

Features:
- contractions
- colloquial expressions
- relaxed syntax

Examples:
- **haben wir** -> **ham wir**
- **ist das** -> **is das**
- **einmal** -> **mal**

### 3. Gehobene Sprache: elevated style
Used in literature, formal speeches, essays, and refined public language.

Examples:
- **bekommen** -> **erhalten**
- **anfangen** -> **beginnen**
- **sagen** -> **äußern**

### 4. Fachsprache: specialist language
Technical vocabulary varies by field.

Examples:
- legal: **Rechtsbehelfsbelehrung**
- medical: **Differentialdiagnose**
- economics/accounting: **Kapitalflussrechnung**

### 5. Jugendsprache: youth language
This register changes quickly and is often influenced by English.

Examples:
- **cringe**
- **lost**
- **flexen**

At C2, the goal is not to imitate every register, but to recognise it and choose your own register deliberately.`,
          examples: [
            { de: "Könntest du mir bitte behilflich sein?", fr: "Could you please assist me?", note: "Elevated or very polite style." },
            { de: "Kannste mir mal helfen?", fr: "Can you help me for a sec?", note: "Colloquial spoken German." },
            { de: "Ich ersuche Sie um Unterstützung.", fr: "I request your support.", note: "Administrative or very formal style." }
          ]
        },
        {
          id: "c2-6-1-2",
          title: "6.1.2 Advanced Stylistic Nuance",
          content: `**Stylistic subtlety**

### Advanced modal particles
Modal particles subtly change the tone of a sentence.

| Particle | Nuance | Example |
|---|---|---|
| schon | reassurance | Das wird **schon** klappen. |
| eben | resignation | Das ist **eben** so. |
| halt | fatalistic acceptance | Das ist **halt** das Leben. |
| wohl | assumption | Er wird **wohl** kommen. |
| etwa | doubt or surprise | Ist das **etwa** wahr? |
| bloß | insistence/warning | Vergiss das **bloß** nicht! |
| ruhig | encouragement/permission | Komm **ruhig** rein! |

### Particle combinations
- **doch mal**: insistent but friendly invitation: Komm doch mal vorbei!
- **ja wohl**: obviousness or strong judgement: Das ist ja wohl klar!
- **denn eigentlich**: curious follow-up: Was machst du denn eigentlich?

### Irony and implication
Tone can reverse the apparent meaning:
- Na, das kann ja heiter werden!
- Das hast du ja toll hingekriegt!

Depending on intonation, the second sentence can be praise or criticism.

### Hedging
Hedging softens or qualifies a statement:
- **gewissermaßen**: in a sense
- **sozusagen**: so to speak
- **im Grunde genommen**: basically / at bottom
- **wenn ich mich nicht irre**: if I am not mistaken`,
          examples: [
            { de: "Das ist wohl kaum zu glauben.", fr: "That is hardly believable.", note: "wohl softens and frames the judgement." },
            { de: "Du könntest ruhig mal anrufen.", fr: "You could call once in a while.", note: "A softened reproach." },
            { de: "Das war ja wohl nichts!", fr: "That was no good at all.", note: "Strong criticism reinforced by particles." }
          ]
        }
      ]
    },
    {
      title: "6.2 Literary and Archaic Structures",
      topics: [
        {
          id: "c2-6-2-1",
          title: "6.2.1 Konjunktiv I: Full Mastery",
          content: `**Advanced use of Konjunktiv I**

### Complete formation
| Person | sein | haben | werden | können |
|---|---|---|---|---|
| ich | sei | habe | werde | könne |
| du | seiest | habest | werdest | könnest |
| er/sie/es | sei | habe | werde | könne |
| wir | seien | haben | werden | können |
| ihr | seiet | habet | werdet | könnet |
| sie/Sie | seien | haben | werden | können |

### C2 uses
#### 1. Formal reported speech
Used in journalism, academic writing, official reports, and formal summaries.

Examples:
- Er sagte, er **sei** müde.
- Sie behauptet, sie **habe** nichts gewusst.

#### 2. Wishes and fixed formulas
- Es **lebe** der König!
- **Möge** er in Frieden ruhen.
- **Gott sei Dank**!
- **Wie dem auch sei**...

#### 3. Instructions and recipes
- Man **nehme** zwei Eier...
- Man **beachte** die Sicherheitshinweise.

#### 4. Concessive formulas with sei
- **Sei** es nun richtig oder falsch...
- **Sei** es, wie es **wolle**...

### Substitution with Konjunktiv II
When the Konjunktiv I form is identical to the indicative, German often replaces it with Konjunktiv II:
- Sie sagten, sie haben... -> Sie sagten, sie **hätten**...

At C2 level, you should recognise both the strict formal system and the stylistic choices writers make.`,
          examples: [
            { de: "Der Minister erklärte, die Lage sei unter Kontrolle.", fr: "The minister stated that the situation was under control.", note: "Journalistic style." },
            { de: "Man bedenke, dass Rom nicht an einem Tag erbaut wurde.", fr: "Consider that Rome was not built in a day.", note: "Literary or rhetorical style." },
            { de: "Seien wir ehrlich: Das ist ein Problem.", fr: "Let us be honest: this is a problem.", note: "Rhetorical formula." }
          ]
        },
        {
          id: "c2-6-2-2",
          title: "6.2.2 Literary and Poetic Constructions",
          content: `**Structures of literary German**

### 1. Preposed genitive
Structure: genitive + noun. This is literary or archaic.

Examples:
- **Des Menschen** Wille
- **Gottes** Wege sind unergründlich.
- **Der Liebe** Macht

### 2. Stylistic inversion
An important element is placed first:
- Schön **war** die Zeit.
- Groß **ist** seine Güte.
- Vergessen **werde** ich das nie.

### 3. Extended participial attribute
Structure: article + [participle + complements] + noun

Examples:
- der **im Garten spielende** Junge
- die **von allen geliebte** Großmutter
- ein **seit Jahren nicht mehr gefahrener** Zug

### 4. Extended impersonal passive
- Es wurde getanzt und gelacht.
- Hier wird nicht geraucht!

### 5. Archaic or elevated formulas still used
- **dessen ungeachtet**: notwithstanding that
- **nichtsdestotrotz / nichtsdestoweniger**: nevertheless
- **meines Erachtens**: in my opinion, formally
- **kraft meines Amtes**: by virtue of my office`,
          examples: [
            { de: "Des Lebens Mühen sind vergessen.", fr: "Life's hardships are forgotten.", note: "Preposed genitive." },
            { de: "Die seit Wochen auf eine Antwort wartenden Kunden wurden informiert.", fr: "The customers who had been waiting for an answer for weeks were informed.", note: "Extended participial attribute." },
            { de: "Dessen ungeachtet müssen wir weitermachen.", fr: "Notwithstanding that, we must continue.", note: "Administrative or legal style." }
          ]
        }
      ]
    },
    {
      title: "6.3 Regional Variation and Dialects",
      topics: [
        {
          id: "c2-6-3-1",
          title: "6.3.1 Standard German vs Dialects",
          content: `**Linguistic diversity in the German-speaking world**

Standard German coexists with many regional varieties and dialects. At C2 level, you should be able to recognise major regional markers and adjust your own register.

### 1. Northern varieties: Niederdeutsch / Plattdeutsch
Associated with northern Germany, including areas such as Hamburg, Bremen, and Lower Saxony.

Typical markers:
- forms such as **ik** instead of **ich**
- forms such as **Water** instead of **Wasser**
- historically different sound shifts from High German

### 2. Central German varieties: Mitteldeutsch
Includes varieties associated with Berlin, Saxony, and Thuringia.

Examples:
- Berlinerisch: **Ick bin een Berliner**
- Saxon varieties often have characteristic softer consonant realisations.

### 3. Southern varieties: Oberdeutsch
**Bairisch**: Bavaria and Austria
- **Grüß Gott**
- **Servus**
- **I mog di**

**Alemannisch**: Switzerland, Alsace, Baden-Württemberg and neighbouring areas
- **Grüezi**
- **Sali**

### Broad comparison
| Standard | Bavarian/Austrian examples | Swiss German examples | Meaning |
|---|---|---|---|
| nicht | ned / net | nöd | not |
| ich bin | i bin | ich bi | I am |
| es gibt | es gibt | es git | there is/are |
| wir haben | mir ham | mir händ | we have |

These examples are orientation points, not a full dialect map. Actual usage varies strongly by region and speaker.

### Austrian German
Some standard Austrian words differ from standard German usage in Germany:
- **Erdapfel** for potato
- **Paradeiser** for tomato
- **Schlagobers** for whipped cream
- **Jänner** for January`,
          examples: [
            { de: "Mia san mia! (Bairisch)", fr: "We are who we are.", note: "Well-known Bavarian expression." },
            { de: "Grüezi mitenand! (Schweizerdeutsch)", fr: "Hello everyone.", note: "Swiss greeting." },
            { de: "Dit is ja janz toll! (Berlinerisch)", fr: "That is really great.", note: "Berlin dialect colouring." }
          ]
        },
        {
          id: "c2-6-3-2",
          title: "6.3.2 Understanding and Adapting Your Register",
          content: `**Adapting to regional contexts**

### Common regional expressions
Northern Germany:
- **Moin! / Moin moin!**: greeting used beyond the morning
- **plietsch**: clever, sharp
- **Tschüs**: goodbye, strongly associated with northern usage historically but now widespread

Southern Germany and Austria:
- **Grüß Gott!**: formal greeting
- **Pfiat di!**: goodbye, literally a blessing formula
- **Bussi**: kiss
- **leiwand**: great, excellent, especially Austrian colloquial usage

Switzerland:
- **Grüezi**: formal hello
- **Merci vilmal**: thank you very much
- **Es freut mich**: pleased to meet you
- **Chrüsimüsi**: mess, jumble

### Denglisch
Denglisch mixes German and English and is common in business, technology, youth speech, and advertising.

Examples:
- Ich habe das gedownloadet.
- Das ist very important.
- Wir müssen das asap machen.
- Lass uns das Thema mal pitchen.

### Regional vocabulary
Some words are regionally marked, and their status depends on country, region, and register.

Examples:
- **Velo** is common in Switzerland for bicycle.
- **Paradeiser** is common in Austria for tomato.
- **heuer** means "this year" in Austrian and southern usage, and can sound regional or literary elsewhere.
- **Trottoir** is used in Swiss and some regional/formal contexts for pavement/sidewalk.

At C2, the key skill is not using dialect randomly, but recognising it and deciding whether standard German, regional language, or colloquial language is appropriate.`,
          examples: [
            { de: "In Bayern sagt man 'Servus' zur Begrüßung und zum Abschied.", fr: "In Bavaria, 'Servus' can be used both as a greeting and as a farewell.", note: "Regional flexibility." },
            { de: "Das Wort 'geil' war früher vulgär, ist heute umgangssprachlich normal.", fr: "The word 'geil' used to be vulgar; today it is normal colloquial usage in many contexts.", note: "Register change over time." }
          ]
        }
      ]
    },
    {
      title: "6.4 Rhetoric and Advanced Argumentation",
      topics: [
        {
          id: "c2-6-4-1",
          title: "6.4.1 Rhetorical Techniques",
          content: `**The art of rhetoric in German**

### Advanced argumentative connectors
To introduce:
- **Zunächst einmal...**
- **An erster Stelle...**
- **Vorweg sei gesagt...**

To develop:
- **Darüber hinaus...**
- **Hinzu kommt, dass...**
- **Ferner ist zu beachten...**
- **In diesem Zusammenhang...**

To nuance:
- **Zwar... aber...**
- **Einerseits... andererseits...**
- **Wenngleich... so...**
- **Unbeschadet dessen...**

To conclude:
- **Zusammenfassend lässt sich sagen...**
- **Alles in allem...**
- **Im Endeffekt...**
- **Schlussendlich...**

### Common rhetorical figures
| Figure | German term | Example |
|---|---|---|
| antithesis | Antithese | Klein, aber fein. |
| metaphor | Metapher | Das Leben ist eine Reise. |
| hyperbole | Hyperbel | Ich sterbe vor Hunger. |
| litotes | Litotes | nicht uninteressant |
| euphemism | Euphemismus | von uns gehen |

At C2, rhetorical structures should support clarity. A text becomes stronger when the rhetorical device fits the argument, not when it is merely decorative.`,
          examples: [
            { de: "Zwar mag diese Lösung kurzfristig teuer erscheinen, langfristig jedoch wird sie sich auszahlen.", fr: "Admittedly, this solution may seem expensive in the short term, but in the long term it will pay off.", note: "Concessive structure." },
            { de: "Zusammenfassend lässt sich festhalten, dass die Vorteile die Nachteile bei Weitem überwiegen.", fr: "In summary, it can be stated that the advantages far outweigh the disadvantages.", note: "Argumentative conclusion." }
          ]
        },
        {
          id: "c2-6-4-2",
          title: "6.4.2 Expressing Nuanced Opinions",
          content: `**Expressing opinions with precision**

### Degrees of certainty
Absolute certainty:
- **Es steht fest, dass...**
- **Zweifellos... / Ohne Zweifel...**
- **Es ist unbestritten, dass...**

Strong probability:
- **Es ist sehr wahrscheinlich, dass...**
- **Allem Anschein nach...**
- **Es deutet alles darauf hin, dass...**

Moderate probability:
- **Es könnte sein, dass...**
- **Möglicherweise...**
- **Es ist nicht auszuschließen, dass...**

Uncertainty or doubt:
- **Es bleibt fraglich, ob...**
- **Es ist zweifelhaft, ob...**
- **Man darf bezweifeln, dass...**

### Distancing formulas
Use these to report without committing yourself:
- **angeblich**: allegedly
- **vermeintlich**: supposedly, purported
- **den Aussagen zufolge**: according to the statements
- **wie verlautet**: as is being reported

### Polite disagreement
- Da muss ich Ihnen leider widersprechen.
- Mit Verlaub, das sehe ich anders.
- Erlauben Sie mir, eine andere Sichtweise einzubringen.
- Bei allem Respekt, ich bin anderer Meinung.`,
          examples: [
            { de: "Es ist nicht von der Hand zu weisen, dass diese Entwicklung besorgniserregend ist.", fr: "It cannot be denied that this development is worrying.", note: "Elegant concession." },
            { de: "Mit Verlaub gesagt, diese Argumentation greift meines Erachtens zu kurz.", fr: "With all due respect, this argument does not go far enough in my view.", note: "Respectful criticism." }
          ]
        }
      ]
    },
    {
      title: "6.5 Advanced Grammatical Subtleties",
      topics: [
        {
          id: "c2-6-5-1",
          title: "6.5.1 Complex Constructions",
          content: `**High-level grammatical structures**

### 1. Double infinitive in the perfect
With modal verbs and some perception verbs, the expected past participle is replaced by an infinitive.

Examples:
- Er hat das nicht machen **können**.
- Sie hat ihn kommen **sehen**.
- Ich habe es dir sagen **wollen**.

In subordinate clauses, the finite auxiliary moves before the infinitive group:
- ..., weil er es nicht **hat machen können**.

### 2. Genitivus partitivus
This is a genitive of quantity, typical of elevated style.

Examples:
- ein Glas **guten Weines**
- eine Tasse **heißen Kaffees**
- voll **des Lobes**

### 3. Genitive relative pronouns: dessen / deren
Examples:
- Der Mann, **dessen** Auto gestohlen wurde...
- Die Frau, **deren** Kinder hier spielen...
- Das Haus, **dessen** Dach beschädigt ist...

### 4. Advanced zu-infinitive constructions
**anstatt... zu + infinitive**
- Anstatt zu arbeiten, spielte er.

**ohne... zu + infinitive**
- Er ging, ohne sich zu verabschieden.

**um... zu + infinitive**
- Ich lerne Deutsch, um in Deutschland zu studieren.

### 5. Expletive es
German often uses **es** as a formal placeholder.

Examples:
- **Es** wird erzählt, dass...
- **Es** heißt, dass...
- **Es** gilt als sicher, dass...`,
          examples: [
            { de: "Das ist der Autor, dessen letztes Buch zum Bestseller wurde.", fr: "That is the author whose latest book became a bestseller.", note: "Genitive relative pronoun." },
            { de: "Er behauptete, das Problem gelöst zu haben.", fr: "He claimed to have solved the problem.", note: "Past infinitive." },
            { de: "Sie hat das Buch lesen wollen, aber nicht können.", fr: "She wanted to read the book but could not.", note: "Double infinitive." }
          ]
        },
        {
          id: "c2-6-5-2",
          title: "6.5.2 Passive Nuances and Alternatives",
          content: `**Full command of passive meaning**

### 1. Passive with dative verbs
With verbs that govern a dative complement, the dative remains dative. It does not become a nominative subject.

Examples:
- **Mir** wurde geholfen.
- **Ihm** wird gratuliert.
- **Ihr** wurde gekündigt.

### 2. Impersonal passive
Used when there is no logical subject or when the action itself matters.

Examples:
- Es wurde viel gelacht.
- Hier wird nicht geraucht.
- Es wurde bis spät in die Nacht gefeiert.

### 3. Passive alternatives at C2 level
**sich lassen + infinitive**: possibility
- Das lässt sich machen.
- Das Problem lässt sich lösen.

**sein + zu + infinitive**: necessity or possibility
- Das ist zu beachten.
- Die Arbeit ist bis morgen abzugeben.

**bleiben + zu + infinitive**: remains to be done
- Es bleibt abzuwarten.
- Das bleibt noch zu klären.

**bekommen/kriegen + Partizip II**: recipient passive
- Er bekam das Buch geschenkt.
- Sie kriegt den Kaffee gebracht.

**gehören + Partizip II**: deserves to be
- Das gehört bestraft.
- Er gehört gelobt.

Some of these alternatives are colloquial or register-sensitive. At C2, the important skill is choosing them deliberately.`,
          examples: [
            { de: "Dieses Verhalten lässt sich nicht rechtfertigen.", fr: "This behaviour cannot be justified.", note: "Passive alternative with lassen." },
            { de: "Die Frist ist unbedingt einzuhalten.", fr: "The deadline must absolutely be observed.", note: "sein + zu + infinitive expresses obligation." },
            { de: "Er bekam die Stelle angeboten.", fr: "He was offered the position.", note: "Recipient passive." }
          ]
        }
      ]
    },
    {
      title: "6.6 Advanced Textual Skills",
      topics: [
        {
          id: "c2-6-6-1",
          title: "6.6.1 Academic and Professional Writing",
          content: `**Conventions of formal writing**

### Structure of an argumentative text
1. **Einleitung**
- introduce the topic
- present the central question or thesis
- outline the structure

2. **Hauptteil**
- develop structured arguments
- give examples and evidence
- address counterarguments

3. **Schluss**
- summarise the argument
- give an outlook, recommendation, or final judgement

### Essential academic formulas
To define:
- **Unter X versteht man...**
- **X wird definiert als...**
- **Im Sinne dieser Arbeit bedeutet X...**

To cite:
- **Laut + dative / Nach + dative**
- **Wie X (Jahr) feststellt,...**
- **X zufolge...**

To analyse:
- **Es fällt auf, dass...**
- **Bei näherer Betrachtung zeigt sich...**
- **Aus X ergibt sich...**

To compare:
- **Im Vergleich zu...**
- **Im Gegensatz zu...**
- **Analog zu...**

### High-level connectors
| Function | Connector |
|---|---|
| Cause | aufgrund + genitive, infolge + genitive |
| Consequence | demzufolge, folglich, infolgedessen |
| Concession | wenngleich, obschon, ungeachtet + genitive |
| Purpose | zwecks + genitive, behufs + genitive (archaic) |`,
          examples: [
            { de: "Aufgrund der vorliegenden Daten lässt sich schlussfolgern, dass...", fr: "On the basis of the available data, it can be concluded that...", note: "Academic style." },
            { de: "Wenngleich diese These plausibel erscheint, so weist sie doch erhebliche Schwächen auf.", fr: "Although this thesis appears plausible, it nevertheless has considerable weaknesses.", note: "Nuanced criticism." }
          ]
        },
        {
          id: "c2-6-6-2",
          title: "6.6.2 Understanding Complex Texts",
          content: `**Analysing literary and specialist texts**

### Recognising style markers
#### 1. Irony and sarcasm
Clues:
- obvious exaggeration
- mismatch between tone and content
- distancing quotation marks, for example **sogenannt**

#### 2. Implicit meaning and presuppositions
- **wieder** implies repetition
- **sogar** implies a scale or unexpected degree
- **schon** can imply obviousness, reassurance, or reproach

#### 3. Cultural references
Texts may refer to:
- literature: Goethe, Schiller, Kafka
- history: Nazi-Zeit, Wende
- philosophy: Kant, Hegel, Nietzsche

### Register analysis
Journalistic text:
- apparent objectivity
- Konjunktiv I for reported speech
- frequent passive

Literary text:
- explicit subjectivity
- elaborate figures of speech
- play with registers

Legal or administrative text:
- heavy nominalisation
- long and complex sentences
- technical vocabulary

### Understanding nuance
| Expression | Nuance |
|---|---|
| nicht unbedingt | not necessarily |
| gewissermaßen | in a sense |
| im Grunde genommen | basically / at bottom |
| streng genommen | strictly speaking |
| wohlgemerkt | mind you / note carefully |`,
          examples: [
            { de: "Seine 'Hilfe' hat das Problem nur verschlimmert.", fr: "His 'help' only made the problem worse.", note: "Ironic quotation marks." },
            { de: "Er hat es wieder nicht geschafft.", fr: "He failed again.", note: "wieder implies repetition and possibly reproach." }
          ]
        }
      ]
    }
  ]
};
