
import { GrammarSection } from '../../../types';

export const autresPoints: GrammarSection = {
  title: "2.5 Other Essential A2 Points",
  topics: [
    {
      id: "a2-5-1",
      title: "2.5.1 Possessive Pronouns and Their Declension",
      content: "Possessives (mein, dein, sein...) are declined like the indefinite article \"ein\".\n\n### List of Possessives\n\n| Person | Possessive | Translation |\n|---|---|---|\n| ich | **mein** | my |\n| du | **dein** | your (informal singular) |\n| er | **sein** | his |\n| sie | **ihr** | her |\n| es | **sein** | its |\n| wir | **unser** | our |\n| ihr | **euer** | your (informal plural) |\n| sie | **ihr** | their |\n| Sie | **Ihr** | your (formal) |\n\n### Declension of Possessives\n\nPossessives are declined exactly like **\"ein\"** or **\"kein\"**.\n\n**Example with \"mein\"**:\n\n| Case | Masculine | Feminine | Neuter | Plural |\n|---|---|---|---|---|\n| Nominative | mein Bruder | mein**e** Schwester | mein Kind | mein**e** Eltern |\n| Accusative | mein**en** Bruder | mein**e** Schwester | mein Kind | mein**e** Eltern |\n| Dative | mein**em** Bruder | mein**er** Schwester | mein**em** Kind | mein**en** Eltern |\n| Genitive | mein**es** Bruders | mein**er** Schwester | mein**es** Kindes | mein**er** Eltern |\n\n### Important Points\n\n**1. The possessive agrees with the possessed object, not the possessor**:\n• Er liest **sein** Buch. (He is reading his book.) - \"Buch\" is neuter\n• Sie liest **ihr** Buch. (She is reading her book.) - \"ihr\" because the possessor is feminine\n\n**2. Watch out for \"euer\"**:\nWhen \"euer\" takes an ending, the middle \"e\" disappears:\n• eur**e** Mutter (your mother)\n• eur**em** Vater (to your father)\n\n**3. Capitalized \"Ihr\"**:\n• **ihr** (lowercase) = her or their\n• **Ihr** (capitalized) = your (polite/formal form)",
      examples: [
        { de: "Das ist mein Bruder.", fr: "This is my brother.", note: "Masculine nominative: no ending." },
        { de: "Ich sehe meinen Bruder.", fr: "I see my brother.", note: "Masculine accusative: -en ending." },
        { de: "Ich helfe meiner Schwester.", fr: "I help my sister.", note: "Feminine dative: -er ending." },
        { de: "Er liebt seine Mutter.", fr: "He loves his mother.", note: "sein + feminine accusative = seine." },
        { de: "Sie besucht ihre Eltern.", fr: "She visits her parents.", note: "ihr + plural = ihre." },
        { de: "Wo ist eure Mutter?", fr: "Where is your mother?", note: "euer + ending = eure; the e disappears." }
      ]
    },
    {
      id: "a2-5-2",
      title: "2.5.2 Comparatives and Superlatives",
      content: "German forms comparatives and superlatives differently from English.\n\n### Forming the Comparative\n\n**Adjective + -er**\n\n| Adjective | Comparative | Example |\n|---|---|---|\n| schnell (fast) | schnell**er** | Er ist schneller als ich. |\n| klein (small) | klein**er** | Sie ist kleiner als er. |\n| interessant | interessant**er** | Das Buch ist interessanter. |\n\n### Forming the Superlative\n\n**am + adjective + -sten** (adverbial use) or **der/die/das + adjective + -ste** (attributive adjective)\n\n| Adjective | Superlative (am...) | Superlative (der...) |\n|---|---|---|\n| schnell | **am schnellsten** | der **schnellste** |\n| klein | **am kleinsten** | der **kleinste** |\n| interessant | **am interessantesten** | das **interessanteste** |\n\n### Important Irregular Forms\n\n| Adjective | Comparative | Superlative |\n|---|---|---|\n| gut (good) | **besser** | **am besten** / der beste |\n| viel (much/many) | **mehr** | **am meisten** / der meiste |\n| gern (gladly / like to) | **lieber** | **am liebsten** |\n| hoch (high) | **höher** | **am höchsten** / der höchste |\n| nah (near) | **näher** | **am nächsten** / der nächste |\n| groß (big/tall) | **größer** | **am größten** / der größte |\n| alt (old) | **älter** | **am ältesten** / der älteste |\n| jung (young) | **jünger** | **am jüngsten** / der jüngste |\n| lang (long) | **länger** | **am längsten** / der längste |\n| kurz (short) | **kürzer** | **am kürzesten** / der kürzeste |\n| kalt (cold) | **kälter** | **am kältesten** / der kälteste |\n| warm (warm) | **wärmer** | **am wärmsten** / der wärmste |\n\n### Comparison Structures\n\n**Comparative + als** (than):\n• Er ist größer **als** ich. (He is taller than me.)\n• Berlin ist größer **als** München. (Berlin is bigger than Munich.)\n\n**so + adjective + wie** (as... as):\n• Er ist **so** groß **wie** ich. (He is as tall as me.)\n• Berlin ist nicht **so** schön **wie** München. (Berlin is not as beautiful as Munich.)\n\n### Declension of Comparatives and Superlatives\n\nWhen the comparative or superlative is **attributive** (before a noun), it is declined like a normal adjective:\n\n• ein schneller**er** Wagen (a faster car)\n• der schnellst**e** Wagen (the fastest car)\n• mit ein**em** schneller**en** Wagen (with a faster car)",
      examples: [
        { de: "Er ist größer als ich.", fr: "He is taller than me.", note: "Comparative + als." },
        { de: "Sie ist so groß wie ihre Mutter.", fr: "She is as tall as her mother.", note: "so... wie = as... as." },
        { de: "Das ist das beste Restaurant.", fr: "This is the best restaurant.", note: "Irregular superlative of 'gut'." },
        { de: "Ich trinke am liebsten Kaffee.", fr: "I like drinking coffee best.", note: "Superlative of 'gern'." },
        { de: "Berlin ist größer als München.", fr: "Berlin is bigger than Munich.", note: "Regular comparative with Umlaut." },
        { de: "Er läuft am schnellsten.", fr: "He runs the fastest.", note: "Superlative with 'am'." },
        { de: "Das ist ein interessanteres Buch.", fr: "This is a more interesting book.", note: "Declined comparative." }
      ]
    },
    {
      id: "a2-5-3",
      title: "2.5.3 Reflexive Verbs (Reflexive Verben)",
      content: "Reflexive verbs use a reflexive pronoun that refers back to the subject.\n\n### Reflexive Pronouns\n\n| Person | Accusative | Dative |\n|---|---|---|\n| ich | **mich** | **mir** |\n| du | **dich** | **dir** |\n| er/sie/es | **sich** | **sich** |\n| wir | **uns** | **uns** |\n| ihr | **euch** | **euch** |\n| sie/Sie | **sich** | **sich** |\n\n### When Should You Use Accusative or Dative?\n\n**Accusative**: When the action directly affects oneself and there is no other direct object\n• Ich wasche **mich**. (I wash myself.)\n• Er freut **sich**. (He is pleased / happy.)\n\n**Dative**: When you specify a body part or when there is another direct object\n• Ich wasche **mir** die Hände. (I wash my hands.)\n• Ich kaufe **mir** ein Buch. (I buy myself a book.)\n\n### Common Reflexive Verbs (Always Reflexive)\n\n| Verb | Meaning | Case | Example |\n|---|---|---|---|\n| sich freuen | to be pleased / look forward to | Acc. | Ich freue mich auf den Urlaub. |\n| sich beeilen | to hurry | Acc. | Beeil dich! |\n| sich erholen | to recover / rest | Acc. | Wir erholen uns. |\n| sich interessieren | to be interested | Acc. | Ich interessiere mich für Musik. |\n| sich erinnern | to remember | Acc. | Ich erinnere mich an dich. |\n| sich entschuldigen | to apologize | Acc. | Ich entschuldige mich. |\n| sich fühlen | to feel | Acc. | Ich fühle mich gut. |\n| sich treffen | to meet | Acc. | Wir treffen uns morgen. |\n| sich unterhalten | to have a conversation | Acc. | Wir unterhalten uns. |\n| sich setzen | to sit down | Acc. | Setz dich! |\n\n### Verbs That Are Sometimes Reflexive (They Can Have Another Object)\n\n| Non-reflexive | Reflexive |\n|---|---|\n| Ich wasche das Auto. | Ich wasche **mich**. |\n| Ich ziehe die Jacke an. | Ich ziehe **mich** an. |\n| Er kämmt das Kind. | Er kämmt **sich**. |\n\n### Reflexive Verbs with Prepositions\n\n| Verb | Preposition | Example |\n|---|---|---|\n| sich freuen **auf** | about / for (future) | Ich freue mich **auf** den Urlaub. |\n| sich freuen **über** | about (present) | Ich freue mich **über** das Geschenk. |\n| sich interessieren **für** | in | Ich interessiere mich **für** Sport. |\n| sich erinnern **an** | of / about (memory) | Ich erinnere mich **an** dich. |\n| sich kümmern **um** | of / for (take care of) | Ich kümmere mich **um** die Kinder. |\n| sich verlieben **in** | with / in (fall in love with) | Er hat sich **in** sie verliebt. |",
      examples: [
        { de: "Ich freue mich auf den Urlaub.", fr: "I am looking forward to the holiday.", note: "sich freuen auf + accusative." },
        { de: "Beeil dich! Wir sind spät.", fr: "Hurry up! We are late.", note: "sich beeilen (imperative)." },
        { de: "Er wäscht sich die Hände.", fr: "He washes his hands.", note: "Dative because a body part is specified." },
        { de: "Wir treffen uns morgen um 10 Uhr.", fr: "We are meeting tomorrow at 10 o'clock.", note: "sich treffen." },
        { de: "Ich interessiere mich für Musik.", fr: "I am interested in music.", note: "sich interessieren für." },
        { de: "Sie fühlt sich heute nicht gut.", fr: "She does not feel well today.", note: "sich fühlen." },
        { de: "Setz dich bitte!", fr: "Please sit down!", note: "sich setzen (imperative)." }
      ]
    },
    {
      id: "a2-5-4",
      title: "2.5.4 Future I (werden)",
      content: "Future I expresses a future action or an intention.\n\n### Formation\n\n**werden (conjugated) + infinitive (at the end)**\n\n### Conjugation of \"werden\"\n\n| Person | werden |\n|---|---|\n| ich | **werde** |\n| du | **wirst** |\n| er/sie/es | **wird** |\n| wir | **werden** |\n| ihr | **werdet** |\n| sie/Sie | **werden** |\n\n### Sentence Structure\n\nSubject + **werden** (conjugated) + ... + **infinitive** (at the end)\n\n• Ich **werde** morgen **anrufen**.\n• Er **wird** nächste Woche **kommen**.\n• Wir **werden** bald **umziehen**.\n\n### Uses of Future I\n\n**1. Future actions**:\n• Morgen **werde** ich ins Kino **gehen**.\n(Tomorrow, I will go to the cinema.)\n\n**2. Intentions / Promises**:\n• Ich **werde** dich nie **vergessen**.\n(I will never forget you.)\n\n**3. Assumptions**:\n• Er **wird** wohl krank **sein**.\n(He is probably ill.)\n\n### Alternative: Present Tense + Time Expression\n\nIn German, the **present tense** is often used with a time expression to refer to the future:\n\n• Ich **gehe** morgen ins Kino. (= Ich werde morgen ins Kino gehen.)\n• Er **kommt** nächste Woche. (= Er wird nächste Woche kommen.)\n\nThis form is more common in speech.",
      examples: [
        { de: "Ich werde morgen anrufen.", fr: "I will call tomorrow.", note: "Future I: basic structure." },
        { de: "Das Wetter wird besser werden.", fr: "The weather will get better.", note: "werden + werden (to become)." },
        { de: "Wir werden nächstes Jahr heiraten.", fr: "We will get married next year.", note: "Future intention." },
        { de: "Er wird wohl zu Hause sein.", fr: "He is probably at home.", note: "Assumption." },
        { de: "Du wirst das verstehen.", fr: "You will understand that.", note: "Future I." },
        { de: "Sie werden uns besuchen.", fr: "They will visit us.", note: "Plural: werden + infinitive." }
      ]
    }
  ]
};
