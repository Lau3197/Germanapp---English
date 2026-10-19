
import { GrammarSection } from '../../../types';

export const casApprofondissement: GrammarSection = {
  title: "2.3 Cases (Fälle) - In Depth",
  topics: [
    {
      id: "a2-3-1",
      title: "2.3.1 Mastering the Dative (Dativ)",
      content: "The dative is the case of the **indirect object** (to whom? for whom?). It is essential for expressing relationships between people.\n\n### Articles in the Dative\n\n| Gender | Definite article | Indefinite article |\n|---|---|---|\n| Masculine | **dem** Mann | ein**em** Mann |\n| Feminine | **der** Frau | ein**er** Frau |\n| Neuter | **dem** Kind | ein**em** Kind |\n| Plural | **den** Kindern | keinen Kindern |\n\n**Careful with the plural**: The noun takes an **-n** at the end, unless it already ends in -n or -s.\n\n### Possessives in the Dative\n\n| Possessive | Masculine | Feminine | Neuter | Plural |\n|---|---|---|---|---|\n| mein | mein**em** | mein**er** | mein**em** | mein**en** |\n| dein | dein**em** | dein**er** | dein**em** | dein**en** |\n| sein | sein**em** | sein**er** | sein**em** | sein**en** |\n| ihr | ihr**em** | ihr**er** | ihr**em** | ihr**en** |\n| unser | unser**em** | unser**er** | unser**em** | unser**en** |\n| euer | eur**em** | eur**er** | eur**em** | eur**en** |\n| Ihr | Ihr**em** | Ihr**er** | Ihr**em** | Ihr**en** |",
      examples: [
        { de: "Ich gebe dem Mann das Buch.", fr: "I give the book to the man.", note: "dem = masculine dative." },
        { de: "Er hilft der Frau.", fr: "He helps the woman.", note: "der = feminine dative." },
        { de: "Wir schenken dem Kind ein Spielzeug.", fr: "We give the child a toy.", note: "dem = neuter dative." },
        { de: "Sie gibt den Kindern Schokolade.", fr: "She gives chocolate to the children.", note: "den + -n on the noun (plural)." }
      ]
    },
    {
      id: "a2-3-2",
      title: "2.3.2 Personal Pronouns in the Dative",
      content: "Personal pronouns change form in the dative to express 'to me, to you, to him...'.\n\n### Complete Table of Dative Pronouns\n\n| Nominative | Accusative | **Dative** | Translation |\n|---|---|---|---|\n| ich | mich | **mir** | to me |\n| du | dich | **dir** | to you |\n| er | ihn | **ihm** | to him |\n| sie | sie | **ihr** | to her |\n| es | es | **ihm** | to it / to him / to her (neuter) |\n| wir | uns | **uns** | to us |\n| ihr | euch | **euch** | to you (informal plural) |\n| sie | sie | **ihnen** | to them |\n| Sie | Sie | **Ihnen** | to you (formal) |\n\n### Common Usage\n\n**Verbs with two complements**:\nWhen a verb has a direct object (accusative) and an indirect object (dative), the dative comes **before** the accusative:\n• Ich gebe **dir** (dative) **das Buch** (accusative).\n\n**Exception**: If the direct object is a pronoun, it comes before the dative:\n• Ich gebe **es** (accusative) **dir** (dative).\n\n### Common Expressions with Dative Pronouns\n\n• Wie geht es **dir**? (How are you?)\n• Es geht **mir** gut. (I am fine.)\n• Kannst du **mir** helfen? (Can you help me?)\n• Das gefällt **mir**. (I like that.)\n• Es tut **mir** leid. (I am sorry.)",
      examples: [
        { de: "Kannst du mir helfen?", fr: "Can you help me?", note: "mir = dative pronoun for ich." },
        { de: "Ich schreibe dir eine E-Mail.", fr: "I am writing you an email.", note: "dir = dative pronoun for du." },
        { de: "Sie gibt ihm das Buch.", fr: "She gives him the book.", note: "ihm = dative pronoun for er." },
        { de: "Das gefällt ihr sehr.", fr: "She likes that very much.", note: "ihr = dative pronoun for sie." },
        { de: "Wie geht es Ihnen?", fr: "How are you?", note: "Ihnen = formal dative pronoun." }
      ]
    },
    {
      id: "a2-3-3",
      title: "2.3.3 Verbs That Require the Dative",
      content: "Some German verbs always require the **dative** for their complement, even when English would use a direct object.\n\n### Important Verbs with the Dative\n\n| Verb | Meaning | Example |\n|---|---|---|\n| **helfen** | to help | Ich helfe **dir**. (I help you.) |\n| **danken** | to thank | Ich danke **dir**. (I thank you.) |\n| **gefallen** | to please / to appeal to | Das gefällt **mir**. (I like that.) |\n| **gehören** | to belong to | Das Buch gehört **mir**. (This book belongs to me.) |\n| **folgen** | to follow | Folgen Sie **mir**! (Follow me!) |\n| **antworten** | to answer | Antworte **mir**! (Answer me!) |\n| **glauben** | to believe | Ich glaube **dir**. (I believe you.) |\n| **passen** | to fit / suit | Die Hose passt **mir**. (The trousers fit me.) |\n| **schmecken** | to taste good | Das schmeckt **mir**. (I like the taste.) |\n| **fehlen** | to be missing | Du fehlst **mir**. (I miss you.) |\n| **gratulieren** | to congratulate | Ich gratuliere **dir**! (Congratulations!) |\n| **zuhören** | to listen to | Hör **mir** zu! (Listen to me!) |\n\n### Memory Tip\n\n**\"HDDG\"**: Helfen, Danken, Gefallen → always dative!\n\n### Difference from English\n\n**In English**: I help MY brother. (direct object)\n**In German**: Ich helfe **meinem** Bruder. (dative)\n\nThese verbs can **never** take an accusative object.",
      examples: [
        { de: "Kannst du mir helfen?", fr: "Can you help me?", note: "helfen + dative (accusative is not possible)." },
        { de: "Ich danke dir für das Geschenk.", fr: "I thank you for the gift.", note: "danken + dative." },
        { de: "Diese Stadt gefällt mir sehr.", fr: "I like this city very much.", note: "gefallen + dative." },
        { de: "Das Buch gehört meinem Bruder.", fr: "The book belongs to my brother.", note: "gehören + dative." },
        { de: "Du fehlst mir.", fr: "I miss you.", note: "fehlen + dative." },
        { de: "Ich gratuliere dir zum Geburtstag!", fr: "Happy birthday!", note: "gratulieren + dative." }
      ]
    },
    {
      id: "a2-3-4",
      title: "2.3.4 Two-Way Prepositions (Wechselpräpositionen)",
      content: "The 9 two-way prepositions can be followed by the **accusative** or the **dative**, depending on context.\n\n### The 9 Two-Way Prepositions\n\n**an, auf, hinter, in, neben, über, unter, vor, zwischen**\n\n### Golden Rule\n\n**ACCUSATIVE = Movement / Direction (Wohin?)**:\nIt answers the question \"Where to?\" → The subject moves toward a place.\n\n**DATIVE = Position / Fixed Location (Wo?)**:\nIt answers the question \"Where?\" → The subject is stationary in a place.\n\n### Comparison Table\n\n| Preposition | Accusative (Wohin?) | Dative (Wo?) |\n|---|---|---|\n| **in** | Ich gehe **ins** Kino. | Ich bin **im** Kino. |\n| **an** | Ich gehe **ans** Fenster. | Ich stehe **am** Fenster. |\n| **auf** | Ich lege das Buch **auf den** Tisch. | Das Buch liegt **auf dem** Tisch. |\n| **hinter** | Ich gehe **hinter das** Haus. | Ich bin **hinter dem** Haus. |\n| **neben** | Ich setze mich **neben dich**. | Ich sitze **neben dir**. |\n| **über** | Ich hänge das Bild **über das** Sofa. | Das Bild hängt **über dem** Sofa. |\n| **unter** | Die Katze läuft **unter den** Tisch. | Die Katze ist **unter dem** Tisch. |\n| **vor** | Ich stelle mich **vor die** Tür. | Ich stehe **vor der** Tür. |\n| **zwischen** | Ich setze mich **zwischen** die Kinder. | Ich sitze **zwischen** den Kindern. |\n\n### Common Contractions\n\n| Preposition + Article | Contraction |\n|---|---|\n| in + das | **ins** |\n| in + dem | **im** |\n| an + das | **ans** |\n| an + dem | **am** |\n| auf + das | **aufs** (informal) |\n\n### Position Verbs vs Movement Verbs\n\n| Movement (Accusative) | Position (Dative) |\n|---|---|\n| **stellen** (to put upright) | **stehen** (to be standing) |\n| **legen** (to lay flat) | **liegen** (to be lying) |\n| **setzen** (to seat) | **sitzen** (to be sitting) |\n| **hängen** (to hang something) | **hängen** (to be hanging) |",
      examples: [
        { de: "Ich gehe ins Kino.", fr: "I am going to the cinema.", note: "Accusative (movement)." },
        { de: "Ich bin im Kino.", fr: "I am at the cinema.", note: "Dative (position)." },
        { de: "Ich stelle das Glas auf den Tisch.", fr: "I put the glass on the table.", note: "Accusative (movement)." },
        { de: "Das Glas steht auf dem Tisch.", fr: "The glass is on the table.", note: "Dative (position)." },
        { de: "Die Katze läuft unter den Tisch.", fr: "The cat runs under the table.", note: "Accusative (movement)." },
        { de: "Die Katze schläft unter dem Tisch.", fr: "The cat sleeps under the table.", note: "Dative (position)." }
      ]
    },
    {
      id: "a2-3-5",
      title: "2.3.5 Prepositions That Always Take Accusative or Dative",
      content: "Unlike two-way prepositions, these prepositions **always** require the same case.\n\n### Prepositions That ALWAYS TAKE ACCUSATIVE\n\n| Preposition | Meaning | Example |\n|---|---|---|\n| **bis** | until / up to | Bis nächste Woche! (See you next week!) |\n| **durch** | through | Wir gehen durch **den** Park. |\n| **für** | for | Das Geschenk ist für **dich**. |\n| **gegen** | against | Ich bin gegen **diesen** Plan. |\n| **ohne** | without | Ich trinke Kaffee ohne **Milch**. |\n| **um** | around / at | Wir sitzen um **den** Tisch. |\n| **entlang** | along | Wir gehen die Straße **entlang**. |\n\n**Tip**: \"**DOGFU**\" = Durch, Ohne, Gegen, Für, Um\n\n### Prepositions That ALWAYS TAKE DATIVE\n\n| Preposition | Meaning | Example |\n|---|---|---|\n| **aus** | from / out of (origin) | Ich komme aus **der** Schweiz. |\n| **bei** | at / with / near | Ich bin bei **meinem** Freund. |\n| **mit** | with / by | Ich fahre mit **dem** Bus. |\n| **nach** | after / to | Nach **dem** Essen gehe ich. |\n| **seit** | since / for | Seit **einem** Jahr lerne ich Deutsch. |\n| **von** | from / by | Ein Brief von **meiner** Mutter. |\n| **zu** | to / toward / to someone's place | Ich gehe zu **meinem** Arzt. |\n| **außer** | except | Alle außer **mir**. |\n| **gegenüber** | opposite / across from | Gegenüber **dem** Bahnhof. |\n\n**Tip**: \"**ABMNSV**\" = Aus, Bei, Mit, Nach, Seit, Von\n\n### Dative Contractions\n\n| Preposition + Article | Contraction |\n|---|---|\n| bei + dem | **beim** |\n| von + dem | **vom** |\n| zu + dem | **zum** |\n| zu + der | **zur** |",
      examples: [
        { de: "Das Geschenk ist für dich.", fr: "The gift is for you.", note: "für + accusative." },
        { de: "Wir gehen durch den Park.", fr: "We walk through the park.", note: "durch + accusative." },
        { de: "Ich fahre mit dem Bus.", fr: "I go by bus.", note: "mit + dative." },
        { de: "Ich komme aus der Schweiz.", fr: "I come from Switzerland.", note: "aus + dative." },
        { de: "Seit einem Jahr lerne ich Deutsch.", fr: "I have been learning German for one year.", note: "seit + dative." },
        { de: "Ich gehe zum Arzt.", fr: "I am going to the doctor.", note: "zu + dem = zum (dative)." }
      ]
    }
  ]
};
