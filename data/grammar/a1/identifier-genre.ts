
import { GrammarSection } from '../../../types';

export const identifierGenre: GrammarSection = {
  title: "1.5 Identifying Gender (Der, Die, Das)",
  topics: [
    {
      id: "a1-5-1",
      title: "The Reliable Ending Method",
      content: "If you only remember one thing, remember this: the **word ending** is the most reliable clue in German. About 80% of nouns can be guessed from their suffix.\n\n### I. Feminine (DIE) - 99% Reliable\nHere are endings that almost always force the feminine gender:\n• **-ung** : die Wohnung (apartment), die Übung (exercise), die Meinung (opinion).\n• **-heit** : die Freiheit (freedom), die Krankheit (illness).\n• **-keit** : die Möglichkeit (possibility), die Süßigkeit (candy).\n• **-schaft** : die Freundschaft (friendship), die Mannschaft (team).\n• **-ion** : die Station, die Nation, die Produktion.\n• **-tät** : die Universität, die Realität, die Fakultät.\n• **-ur** : die Natur, die Kultur, die Tastatur (keyboard).\n• **-ie** : die Energie, die Kopie, die Theorie.\n• **-ik** : die Musik, die Fabrik, die Politik.\n\n### II. Neuter (DAS) - The Gender of Objects and Concepts\n• **-um** : das Museum, das Zentrum, das Datum, das Studium.\n• **-ment** : das Dokument, das Instrument, das Experiment, das Medikament.\n• **-ma** : das Thema, das Klima, das Drama, das Koma.\n• **-chen / -lein** (diminutives) : das Mädchen (girl), das Brötchen (small bread roll), das Häuslein (small house).\n• **-o** : das Auto, das Radio, das Kino, das Foto.\n\n### III. Masculine (DER) - Agents and Processes\n• **-er** (for people who act or for tools) : der Lehrer (teacher), der Fahrer (driver), der Computer, der Drucker (printer).\n• **-ismus** : der Optimismus, der Journalismus, der Terrorismus.\n• **-ant / -ent** : der Elefant, der Patient, der Präsident.\n• **-ig / -ling** : der Honig (honey), der König (king), der Frühling (spring), der Flüchtling (refugee).",
      examples: [
        { de: "die Wohnung / die Übung / die Lösung", fr: "Apartment / Exercise / Solution", note: "Suffix -ung = DIE. Always. No exceptions." },
        { de: "das Museum / das Zentrum / das Datum", fr: "Museum / Center / Date", note: "Suffix -um = DAS. Words of Latin origin." },
        { de: "der Lehrer / der Computer / der Wecker", fr: "Teacher / Computer / Alarm clock", note: "Suffix -er = DER. It indicates the agent who performs the action." }
      ]
    },
    {
      id: "a1-5-2",
      title: "Gender by Logical Category (Semantics)",
      content: "If the ending does not help, look at the **meaning** of the word. Many word groups share the same article.\n\n### I. Always Masculine (DER)\n• **Time** : Days (der Montag), months (der Juli), seasons (der Sommer).\n• **Weather** : der Regen (rain), der Wind (wind), der Schnee (snow).\n• **Alcoholic Drinks** : der Wein, der Wodka, der Cognac (exception: **das Bier**).\n• **Car Brands** : der BMW, der VW, der Audi, der Tesla.\n• **Cardinal Directions** : der Norden, der Süden, der Osten, der Westen.\n\n### II. Always Feminine (DIE)\n• **Numbers** : die Eins, die Zwei, die Hundert, die Million.\n• **Trees and Flowers** : die Eiche (oak), die Birke (birch), die Rose, die Tulpe.\n• **German Rivers** : die Donau, die Elbe, die Weser (masculine exceptions: **der Rhein, der Main, der Neckar**).\n\n### III. Always Neuter (DAS)\n• **Colors** : das Rot, das Blau, das Grün.\n• **Languages** : das Deutsch, das Französisch, das Englisch.\n• **Metals** : das Gold, das Silber, das Kupfer, das Eisen.\n• **Infinitive Verbs** (used as nouns) : das Essen (eating/food), das Schlafen (sleeping), das Schwimmen (swimming).",
      examples: [
        { de: "der Montag / der Juli / der Herbst", fr: "Monday / July / Autumn", note: "Almost everything related to the calendar is masculine." },
        { de: "das Gold / das Silber / das Eisen", fr: "Gold / Silver / Iron", note: "Raw materials are often neuter." },
        { de: "die Rose / die Tulpe / die Nelke", fr: "The rose / The tulip / The carnation", note: "Flowers are feminine." }
      ]
    },
    {
      id: "a1-5-3",
      title: "Memorization Tips and Pro Tips",
      content: "Learning gender is the biggest challenge. Here is how polyglots do it:\n\n• **Learn in chunks** : Never say 'Tisch'. Say **'Dertisch'** as if it were one inseparable word.\n• **Use color** : Write masculine words in blue, feminine words in red, and neuter words in green or yellow.\n• **The plural rule** : Remember that in the plural, **all nouns** take the article **die**, whatever their singular gender.\n• **Grammatical gender wins** : Even if a word refers to a human, grammar wins. **Das Mädchen** (the girl) is neuter because of its **-chen** suffix.\n• **The alcohol rule** : If you can drink it and it is strong, it is **der**. Except beer, which is **das** (because people drink a lot of it, like water!).",
      examples: [
        { de: "die Frau → die Frauen", fr: "The woman → The women", note: "In the plural, it is always DIE." },
        { de: "das Kind → die Kinder", fr: "The child → The children", note: "DAS becomes DIE in the plural." },
        { de: "der Mann → die Männer", fr: "The man → The men", note: "DER becomes DIE in the plural." }
      ]
    }
  ]
};
