
import { GrammarSection } from '../../../types';

export const nomsArticlesCas: GrammarSection = {
  title: "1.5 Nouns, Articles, and Cases",
  topics: [
    {
      id: "a1-4",
      title: "1.5.1 Gender and the First Two Cases",
      content: "All German nouns are **capitalized**, wherever they appear in the sentence: der Mann, die Frau, das Kind, ein Buch. This is not optional, and it is the easiest rule in the language to apply.\n\nEvery noun is masculine (**der**), feminine (**die**) or neuter (**das**). The gender is a property of the word, not of the thing: *das Mädchen* (the girl) is neuter because of its ending.\n\n### The Definite Article: Nominative and Accusative\n\n| Case | Masculine | Feminine | Neuter | Plural |\n|---|---|---|---|---|\n| **Nominative** (subject) | **der** Mann | **die** Frau | **das** Kind | **die** Kinder |\n| **Accusative** (direct object) | **den** Mann | **die** Frau | **das** Kind | **die** Kinder |\n\nRead that table again and notice how little changes: **only the masculine moves**, from *der* to *den*. Feminine, neuter and plural are identical in both cases.\n\nThat single change is the whole accusative at A1.\n\n### Which Case Do I Use?\n\nAsk **who or what is doing the action** (nominative) and **who or what is receiving it** (accusative):\n\n• **Der Mann** liest **das Buch**. → *der Mann* acts, *das Buch* is acted upon.\n• **Der Hund** beißt **den Mann**. → the dog bites the man.\n• **Den Mann** beißt **der Hund**. → same meaning! The articles carry the roles, so German can reorder the words for emphasis.\n\nThis is why the cases matter: in English *the dog bites the man* and *the man bites the dog* differ only by word order. In German the article does that job.\n\n### Verbs Followed by the Accusative\n\nMost verbs with a direct object take the accusative. The frequent ones at A1:\n\n**haben, kaufen, sehen, essen, trinken, lesen, nehmen, brauchen, suchen, finden, machen, lieben, verstehen**\n\n• Ich habe **einen** Bruder.\n• Wir brauchen **den** Schlüssel.\n• Sie sucht **die** Adresse.\n\n### A Glance Ahead: the Dative\n\nA third case, the **dative**, marks the indirect object - the person you give something *to*:\n\n• Ich gebe **dem** Mann ein Buch. (masculine: dem)\n• Ich gebe **der** Frau ein Buch. (feminine: der)\n\nYou will meet it in full at A2. At A1 it is enough to recognise it in set phrases such as *Wie geht es **dir**?* and after the prepositions *mit*, *aus*, *bei*, *zu*, *von*, *nach*, *seit*.",
      examples: [
        { de: "Der Mann liest das Buch.", fr: "The man is reading the book.", note: "der = subject (nominative), das = object (accusative)." },
        { de: "Ich sehe den Mann.", fr: "I see the man.", note: "Masculine accusative: der becomes den." },
        { de: "Ich sehe die Frau / das Kind.", fr: "I see the woman / the child.", note: "Feminine and neuter do not change in the accusative." },
        { de: "Wir brauchen den Schlüssel.", fr: "We need the key.", note: "brauchen + accusative." },
        { de: "Kennst du die Kinder?", fr: "Do you know the children?", note: "Plural: die in both cases." },
        { de: "Ich gebe dem Mann ein Buch.", fr: "I give the man a book.", note: "First glimpse of the dative - developed at A2." }
      ]
    },
    {
      id: "a1-unbestimmter-artikel",
      title: "1.5.2 The Indefinite Article: ein, eine, einen",
      content: "**ein** is the equivalent of *a / an*. It follows the definite article closely - if you know *der / die / das*, you already know most of it.\n\n### The Table\n\n| Case | Masculine | Feminine | Neuter | Plural |\n|---|---|---|---|---|\n| **Nominative** | **ein** Mann | **eine** Frau | **ein** Kind | *(none)* Kinder |\n| **Accusative** | **einen** Mann | **eine** Frau | **ein** Kind | *(none)* Kinder |\n\nAgain, only the masculine moves: *ein* → **einen**. And note that masculine and neuter are identical in the nominative - *ein Mann*, *ein Kind* - which is why the accusative *einen* is such a useful signal.\n\n### There is No Plural of ein\n\nJust as English drops the article (*a book* → *books*), German uses **no article** at all:\n\n• Ich habe **einen** Freund. → Ich habe **Freunde**.\n• Das ist **ein** Buch. → Das sind **Bücher**.\n\n### kein: the Negative Twin\n\n**kein** means *no / not a / not any*. It declines **exactly like ein** - and, unlike *ein*, it does have a plural:\n\n| Case | Masculine | Feminine | Neuter | Plural |\n|---|---|---|---|---|\n| **Nominative** | **kein** Mann | **keine** Frau | **kein** Kind | **keine** Kinder |\n| **Accusative** | **keinen** Mann | **keine** Frau | **kein** Kind | **keine** Kinder |\n\n• Ich habe **keinen** Bruder. (I do not have a brother.)\n• Das ist **keine** gute Idee. (That is not a good idea.)\n• Wir haben **keine** Zeit. (We have no time.)\n\nWhen to use *kein* rather than *nicht* is covered in **1.7 Negation**.\n\n### der or ein?\n\nSame logic as English:\n\n• **Ein** Mann steht vor der Tür. (a man - you are introducing him)\n• **Der** Mann ist mein Nachbar. (the man - now we both know which one)\n\n### Where German Uses No Article at All\n\n• **Professions**: Ich bin Lehrer. (I am *a* teacher.)\n• **Nationalities**: Sie ist Französin.\n• **Uncountable quantities**: Ich trinke Wasser. Wir kaufen Brot.\n• **Most countries and cities**: Ich wohne in Deutschland, in Berlin.",
      examples: [
        { de: "Das ist ein Buch.", fr: "This is a book.", note: "Neuter nominative: ein." },
        { de: "Ich habe einen Hund.", fr: "I have a dog.", note: "Masculine accusative: einen. The most common A1 mistake." },
        { de: "Sie kauft eine Zeitung.", fr: "She buys a newspaper.", note: "Feminine: eine in both cases." },
        { de: "Wir haben Kinder.", fr: "We have children.", note: "No plural form of ein: the article simply disappears." },
        { de: "Ich habe keinen Bruder.", fr: "I do not have a brother.", note: "kein declines like ein: keinen in the accusative." },
        { de: "Er hat keine Zeit.", fr: "He has no time.", note: "Feminine: keine." },
        { de: "Ich bin Lehrer.", fr: "I am a teacher.", note: "No article before a profession." }
      ]
    },
    {
      id: "a1-plural",
      title: "1.5.3 Forming the Plural",
      content: "German has no single plural ending. Where English adds **-s** to almost everything, German has five patterns - and the plural is best learned together with the word, like the gender.\n\nThe good news: **in the plural, every noun takes the article *die***, whatever its singular gender.\n\n### The Five Patterns\n\n**1. -e** (often with Umlaut) - most masculine nouns\n\n| Singular | Plural |\n|---|---|\n| der Tag | die Tag**e** |\n| der Hund | die Hund**e** |\n| der Stuhl | die St**ü**hl**e** |\n| die Stadt | die St**ä**dt**e** |\n\n**2. -en / -n** - almost all feminine nouns\n\n| Singular | Plural |\n|---|---|\n| die Frau | die Frau**en** |\n| die Zeitung | die Zeitung**en** |\n| die Blume | die Blume**n** |\n| die Schwester | die Schwester**n** |\n\nNouns in **-ung, -heit, -keit, -schaft, -ion** always take **-en**. Since those endings are also always feminine, one clue gives you two answers.\n\n**3. -er** (with Umlaut where possible) - many neuter nouns\n\n| Singular | Plural |\n|---|---|\n| das Kind | die Kind**er** |\n| das Buch | die B**ü**ch**er** |\n| der Mann | die M**ä**nn**er** |\n| das Haus | die H**äu**s**er** |\n\n**4. No ending** (sometimes just an Umlaut) - nouns in **-er, -en, -el** and diminutives\n\n| Singular | Plural |\n|---|---|\n| der Lehrer | die Lehrer |\n| das Zimmer | die Zimmer |\n| der Vater | die V**ä**ter |\n| das Mädchen | die Mädchen |\n\n**5. -s** - foreign words and abbreviations\n\n| Singular | Plural |\n|---|---|\n| das Auto | die Auto**s** |\n| das Hotel | die Hotel**s** |\n| das Foto | die Foto**s** |\n| der Chef | die Chef**s** |\n\n### Rules of Thumb\n\n• Feminine noun? → **-en** in nine cases out of ten.\n• Ends in **-chen** or **-lein**? → no change at all.\n• Ends in **-er**, **-en**, **-el**? → usually no ending, perhaps an Umlaut.\n• Foreign-looking word ending in a vowel? → **-s**.\n\n### Nouns With No Singular or No Plural\n\n• Only plural: **die Eltern** (parents), **die Leute** (people), **die Ferien** (holidays).\n• Only singular: **das Obst** (fruit), **das Gemüse** (vegetables), **die Milch**, **das Geld**.\n\n*Die Leute* is a useful one: it is always plural, so it takes a plural verb - **Die Leute sind nett.**\n\n### How to Learn Them\n\nNever store a noun as *Buch*. Store it as **das Buch, die Bücher** - three words, one unit. Dictionaries write it as *das Buch, -es, ¨-er*.",
      examples: [
        { de: "der Hund → die Hunde", fr: "the dog → the dogs", note: "Pattern 1: -e." },
        { de: "die Zeitung → die Zeitungen", fr: "the newspaper → the newspapers", note: "Pattern 2: feminine in -ung always takes -en." },
        { de: "das Buch → die Bücher", fr: "the book → the books", note: "Pattern 3: -er with Umlaut." },
        { de: "der Lehrer → die Lehrer", fr: "the teacher → the teachers", note: "Pattern 4: no change. Only the article tells you it is plural." },
        { de: "das Auto → die Autos", fr: "the car → the cars", note: "Pattern 5: -s for foreign words." },
        { de: "Die Leute sind sehr nett.", fr: "The people are very nice.", note: "die Leute exists only in the plural." },
        { de: "Meine Eltern wohnen in Hamburg.", fr: "My parents live in Hamburg.", note: "die Eltern: plural only." }
      ]
    }
  ]
};
