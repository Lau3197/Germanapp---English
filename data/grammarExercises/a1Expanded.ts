import { GrammarExercise, LanguageLevel } from '../../types';

const A1 = LanguageLevel.A1;

// Five additional, theory-grounded exercises per A1 topic. Combined with the
// original bank, every topic now offers at least ten exercises and can feed
// several consecutive practice sessions without repeating the same prompts.
export const A1_EXPANDED_EXERCISES: GrammarExercise[] = [
  { id: 'a1-1-ex-6', topicId: 'a1-1', level: A1, stage: 'guided', prompt: 'Which spelling sounds like English « eye »? (ei / ie)', answer: 'ei', explanation: 'German ei is pronounced like English « eye »: mein, drei.' },
  { id: 'a1-1-ex-7', topicId: 'a1-1', level: A1, stage: 'guided', prompt: 'Which spelling gives a long « ee » sound? (ei / ie)', answer: 'ie', explanation: 'German ie is a long /iː/ sound: Liebe, sieben.' },
  { id: 'a1-1-ex-8', topicId: 'a1-1', level: A1, stage: 'controlled', prompt: 'What sound does German « z » usually make? (s / ts)', answer: 'ts', explanation: 'German z is pronounced /ts/, as in zehn.' },
  { id: 'a1-1-ex-9', topicId: 'a1-1', level: A1, stage: 'contrast', prompt: 'Choose the word with the « sh » sound: (Schule / Haus)', answer: 'Schule', acceptedAnswers: ['schule'], explanation: 'The group sch is pronounced like English « sh ».' },
  { id: 'a1-1-ex-10', topicId: 'a1-1', level: A1, stage: 'independent', prompt: 'Complete the morning greeting: Guten ___!', answer: 'Morgen', acceptedAnswers: ['morgen'], explanation: 'Guten Morgen is the standard morning greeting.' },

  { id: 'a1-2-ex-6', topicId: 'a1-2', level: A1, stage: 'guided', prompt: 'Complete: Heute ___ wir Deutsch. (lernen)', answer: 'lernen', explanation: 'Heute occupies position 1; the conjugated verb remains in position 2.' },
  { id: 'a1-2-ex-7', topicId: 'a1-2', level: A1, stage: 'controlled', prompt: 'Complete: Am Montag ___ er in Brüssel. (arbeiten)', answer: 'arbeitet', explanation: 'Am Montag is position 1, so arbeitet is in position 2.' },
  { id: 'a1-2-ex-8', topicId: 'a1-2', level: A1, stage: 'controlled', prompt: 'Complete the yes/no question: ___ ihr heute? (kommen)', answer: 'Kommt', acceptedAnswers: ['kommt'], explanation: 'A yes/no question begins with the conjugated verb: Kommt ihr heute?' },
  { id: 'a1-2-ex-9', topicId: 'a1-2', level: A1, stage: 'contrast', prompt: 'Correct the order: « Morgen ich arbeite. » Write the full sentence.', answer: 'Morgen arbeite ich.', acceptedAnswers: ['Morgen arbeite ich', 'morgen arbeite ich'], explanation: 'The verb must be second: Morgen arbeite ich.' },
  { id: 'a1-2-ex-10', topicId: 'a1-2', level: A1, stage: 'independent', prompt: 'Build the sentence: (heute / wir / wohnen / in Gent)', answer: 'Heute wohnen wir in Gent.', acceptedAnswers: ['Heute wohnen wir in Gent', 'heute wohnen wir in Gent'], explanation: 'Heute takes position 1, wohnen position 2, then the subject.' },

  { id: 'a1-3-ex-6', topicId: 'a1-3', level: A1, stage: 'guided', prompt: 'Du ___ heute lange. (arbeiten)', answer: 'arbeitest', explanation: 'A stem ending in -t inserts -e- before the du ending: arbeitest.' },
  { id: 'a1-3-ex-7', topicId: 'a1-3', level: A1, stage: 'controlled', prompt: 'Wie ___ du? (heißen)', answer: 'heißt', explanation: 'After ß, the du form uses only -t: du heißt.' },
  { id: 'a1-3-ex-8', topicId: 'a1-3', level: A1, stage: 'controlled', prompt: 'Er ___ den Schlüssel. (finden)', answer: 'findet', explanation: 'A stem ending in -d inserts -e-: er findet.' },
  { id: 'a1-3-ex-9', topicId: 'a1-3', level: A1, stage: 'contrast', prompt: 'Choose the correct form: Ihr ___ in Brüssel. (wohnt / wohnen)', answer: 'wohnt', explanation: 'The ihr ending is -t: ihr wohnt.' },
  { id: 'a1-3-ex-10', topicId: 'a1-3', level: A1, stage: 'independent', prompt: 'Complete: Ich ___ Briefmarken. (sammeln)', answer: 'sammle', explanation: 'With verbs in -eln, the ich form commonly drops the stem e: ich sammle.' },

  { id: 'a1-3-stammwechsel-ex-6', topicId: 'a1-3-stammwechsel', level: A1, stage: 'guided', prompt: 'Du ___ gern Pizza. (essen)', answer: 'isst', explanation: 'essen changes e → i with du: du isst.' },
  { id: 'a1-3-stammwechsel-ex-7', topicId: 'a1-3-stammwechsel', level: A1, stage: 'controlled', prompt: 'Er ___ den Bus. (nehmen)', answer: 'nimmt', explanation: 'nehmen becomes nimmt with er: vowel change plus doubled m.' },
  { id: 'a1-3-stammwechsel-ex-8', topicId: 'a1-3-stammwechsel', level: A1, stage: 'controlled', prompt: 'Du ___ den Film. (sehen)', answer: 'siehst', explanation: 'sehen changes e → ie with du: du siehst.' },
  { id: 'a1-3-stammwechsel-ex-9', topicId: 'a1-3-stammwechsel', level: A1, stage: 'contrast', prompt: 'Choose the correct form: Ihr ___ nach Köln. (fahrt / fährt)', answer: 'fahrt', explanation: 'The stem change does not affect ihr: ihr fahrt.' },
  { id: 'a1-3-stammwechsel-ex-10', topicId: 'a1-3-stammwechsel', level: A1, stage: 'independent', prompt: 'Complete: Meine Schwester ___ lange. (schlafen)', answer: 'schläft', explanation: 'schlafen changes a → ä with er/sie/es: sie schläft.' },

  { id: 'a1-modalverben-ex-6', topicId: 'a1-modalverben', level: A1, stage: 'guided', prompt: 'Ich ___ einen Tee, bitte. (möchten)', answer: 'möchte', explanation: 'Ich möchte is the polite way to order or request something.' },
  { id: 'a1-modalverben-ex-7', topicId: 'a1-modalverben', level: A1, stage: 'controlled', prompt: 'Du ___ heute früher gehen. (wollen)', answer: 'willst', explanation: 'The du form of wollen is willst; gehen stays at the end.' },
  { id: 'a1-modalverben-ex-8', topicId: 'a1-modalverben', level: A1, stage: 'controlled', prompt: 'Ihr ___ hier nicht parken. (dürfen)', answer: 'dürft', explanation: 'Ihr takes dürft; nicht dürfen expresses prohibition.' },
  { id: 'a1-modalverben-ex-9', topicId: 'a1-modalverben', level: A1, stage: 'contrast', prompt: 'Complete the permission question: ___ Sie hier rauchen? (dürfen)', answer: 'Dürfen', acceptedAnswers: ['dürfen'], explanation: 'A yes/no question begins with the conjugated modal: Dürfen Sie…?' },
  { id: 'a1-modalverben-ex-10', topicId: 'a1-modalverben', level: A1, stage: 'independent', prompt: 'Complete: Er ___ Schokolade. (mögen)', answer: 'mag', explanation: 'mögen is used with a thing: Er mag Schokolade.' },

  { id: 'a1-trennbare-verben-ex-6', topicId: 'a1-trennbare-verben', level: A1, stage: 'guided', prompt: 'Der Zug ___ um acht Uhr ___. (abfahren)', answer: 'fährt ab', explanation: 'abfahren separates and fahren changes a → ä: fährt … ab.' },
  { id: 'a1-trennbare-verben-ex-7', topicId: 'a1-trennbare-verben', level: A1, stage: 'controlled', prompt: 'Der Film ___ um 20 Uhr ___. (anfangen)', answer: 'fängt an', explanation: 'anfangen separates and changes a → ä: fängt … an.' },
  { id: 'a1-trennbare-verben-ex-8', topicId: 'a1-trennbare-verben', level: A1, stage: 'controlled', prompt: 'Sie ___ jeden Abend ___. (fernsehen)', answer: 'sieht fern', explanation: 'fernsehen separates and sehen changes e → ie: sieht … fern.' },
  { id: 'a1-trennbare-verben-ex-9', topicId: 'a1-trennbare-verben', level: A1, stage: 'contrast', prompt: 'After a modal, choose the correct form: Ich muss früh ___. (aufstehen / stehe auf)', answer: 'aufstehen', explanation: 'After a modal, the infinitive stays attached at the end.' },
  { id: 'a1-trennbare-verben-ex-10', topicId: 'a1-trennbare-verben', level: A1, stage: 'independent', prompt: 'Complete: ___ du heute ___? (mitkommen)', answer: 'Kommst mit', acceptedAnswers: ['kommst mit'], explanation: 'The question begins with Kommst and the prefix mit goes to the end.' },

  { id: 'a1-4-ex-6', topicId: 'a1-4', level: A1, stage: 'guided', prompt: '___ Hund schläft. (der / den)', answer: 'Der', acceptedAnswers: ['der'], explanation: 'The dog is the subject, so masculine nominative der is required.' },
  { id: 'a1-4-ex-7', topicId: 'a1-4', level: A1, stage: 'controlled', prompt: 'Ich kaufe ___ Tisch. (der / den)', answer: 'den', explanation: 'Tisch is a masculine direct object, so der becomes den.' },
  { id: 'a1-4-ex-8', topicId: 'a1-4', level: A1, stage: 'controlled', prompt: '___ Kind sieht die Frau. (das / den)', answer: 'Das', acceptedAnswers: ['das'], explanation: 'Kind is neuter and the subject: das Kind.' },
  { id: 'a1-4-ex-9', topicId: 'a1-4', level: A1, stage: 'contrast', prompt: 'Der Mann liest ___ Zeitung. (die / den)', answer: 'die', explanation: 'Feminine die does not change in the accusative.' },
  { id: 'a1-4-ex-10', topicId: 'a1-4', level: A1, stage: 'independent', prompt: 'Complete both articles: ___ Lehrer sieht ___ Schüler. (masculine)', answer: 'Der, den', acceptedAnswers: ['der den', 'Der den'], explanation: 'The teacher is nominative der; the male pupil is accusative den.' },

  { id: 'a1-unbestimmter-artikel-ex-6', topicId: 'a1-unbestimmter-artikel', level: A1, stage: 'guided', prompt: 'Das ist ___ Mann. (ein / eine / einen)', answer: 'ein', explanation: 'Masculine nominative uses ein Mann.' },
  { id: 'a1-unbestimmter-artikel-ex-7', topicId: 'a1-unbestimmter-artikel', level: A1, stage: 'controlled', prompt: 'Ich esse ___ Apfel. (ein / eine / einen)', answer: 'einen', explanation: 'Apfel is masculine and a direct object: einen Apfel.' },
  { id: 'a1-unbestimmter-artikel-ex-8', topicId: 'a1-unbestimmter-artikel', level: A1, stage: 'controlled', prompt: 'Sie braucht ___ Lampe. (ein / eine / einen)', answer: 'eine', explanation: 'Lampe is feminine: eine Lampe.' },
  { id: 'a1-unbestimmter-artikel-ex-9', topicId: 'a1-unbestimmter-artikel', level: A1, stage: 'contrast', prompt: 'Wir haben ___ Geld. (kein / keine / keinen)', answer: 'kein', explanation: 'Geld is neuter: kein Geld.' },
  { id: 'a1-unbestimmter-artikel-ex-10', topicId: 'a1-unbestimmter-artikel', level: A1, stage: 'independent', prompt: 'Er hat ___ Freunde. (kein / keine / keinen)', answer: 'keine', explanation: 'kein has a plural form: keine Freunde.' },

  { id: 'a1-plural-ex-6', topicId: 'a1-plural', level: A1, stage: 'guided', prompt: 'One dog, two ___. (Hund)', answer: 'Hunde', acceptedAnswers: ['hunde'], explanation: 'der Hund forms the plural die Hunde with -e.' },
  { id: 'a1-plural-ex-7', topicId: 'a1-plural', level: A1, stage: 'controlled', prompt: 'One newspaper, two ___. (Zeitung)', answer: 'Zeitungen', acceptedAnswers: ['zeitungen'], explanation: 'Feminine nouns in -ung take -en: Zeitungen.' },
  { id: 'a1-plural-ex-8', topicId: 'a1-plural', level: A1, stage: 'controlled', prompt: 'One house, two ___. (Haus)', answer: 'Häuser', acceptedAnswers: ['häuser'], explanation: 'das Haus becomes die Häuser with an umlaut and -er.' },
  { id: 'a1-plural-ex-9', topicId: 'a1-plural', level: A1, stage: 'contrast', prompt: 'One teacher, two ___. (Lehrer)', answer: 'Lehrer', acceptedAnswers: ['lehrer'], explanation: 'Nouns ending in -er often have no plural ending: die Lehrer.' },
  { id: 'a1-plural-ex-10', topicId: 'a1-plural', level: A1, stage: 'independent', prompt: 'One photo, three ___. (Foto)', answer: 'Fotos', acceptedAnswers: ['fotos'], explanation: 'Foreign nouns ending in a vowel often take -s: Fotos.' },

  { id: 'a1-5-1-ex-6', topicId: 'a1-5-1', level: A1, stage: 'guided', prompt: 'Choose the article for « Möglichkeit »: (der / die / das)', answer: 'die', explanation: 'Nouns ending in -keit are feminine.' },
  { id: 'a1-5-1-ex-7', topicId: 'a1-5-1', level: A1, stage: 'controlled', prompt: 'Choose the article for « Museum »: (der / die / das)', answer: 'das', explanation: 'Nouns ending in -um are neuter: das Museum.' },
  { id: 'a1-5-1-ex-8', topicId: 'a1-5-1', level: A1, stage: 'controlled', prompt: 'Choose the article for « Dokument »: (der / die / das)', answer: 'das', explanation: 'Nouns ending in -ment are neuter: das Dokument.' },
  { id: 'a1-5-1-ex-9', topicId: 'a1-5-1', level: A1, stage: 'contrast', prompt: 'Choose the article for « Frühling »: (der / die / das)', answer: 'der', explanation: 'Nouns ending in -ling are masculine: der Frühling.' },
  { id: 'a1-5-1-ex-10', topicId: 'a1-5-1', level: A1, stage: 'independent', prompt: 'Complete: ___ Universität.', answer: 'die', explanation: 'Nouns ending in -tät are feminine: die Universität.' },

  { id: 'a1-5-2-ex-6', topicId: 'a1-5-2', level: A1, stage: 'guided', prompt: 'Choose the article for the day « Montag »: (der / die / das)', answer: 'der', explanation: 'Days of the week are masculine: der Montag.' },
  { id: 'a1-5-2-ex-7', topicId: 'a1-5-2', level: A1, stage: 'controlled', prompt: 'Choose the article for the flower « Rose »: (der / die / das)', answer: 'die', explanation: 'Flowers are generally feminine: die Rose.' },
  { id: 'a1-5-2-ex-8', topicId: 'a1-5-2', level: A1, stage: 'controlled', prompt: 'Choose the article for the metal « Gold »: (der / die / das)', answer: 'das', explanation: 'Metals are neuter: das Gold.' },
  { id: 'a1-5-2-ex-9', topicId: 'a1-5-2', level: A1, stage: 'contrast', prompt: 'Choose the article for the language « Deutsch »: (der / die / das)', answer: 'das', explanation: 'Languages used as nouns are neuter: das Deutsch.' },
  { id: 'a1-5-2-ex-10', topicId: 'a1-5-2', level: A1, stage: 'independent', prompt: 'Choose the article for the drink « Wein »: (der / die / das)', answer: 'der', explanation: 'Alcoholic drinks are generally masculine: der Wein; Bier is the exception.' },

  { id: 'a1-5-3-ex-6', topicId: 'a1-5-3', level: A1, stage: 'guided', prompt: 'Write the complete chunk: woman → women.', answer: 'die Frau, die Frauen', explanation: 'Learn the article and plural together: die Frau, die Frauen.' },
  { id: 'a1-5-3-ex-7', topicId: 'a1-5-3', level: A1, stage: 'controlled', prompt: 'Write the complete chunk: child → children.', answer: 'das Kind, die Kinder', explanation: 'Learn the noun as das Kind, die Kinder.' },
  { id: 'a1-5-3-ex-8', topicId: 'a1-5-3', level: A1, stage: 'controlled', prompt: 'Write the complete chunk: man → men.', answer: 'der Mann, die Männer', explanation: 'Learn the noun as der Mann, die Männer.' },
  { id: 'a1-5-3-ex-9', topicId: 'a1-5-3', level: A1, stage: 'contrast', prompt: 'Complete the plural chunk: das Mädchen → ___ Mädchen.', answer: 'die', explanation: 'All plural nouns take die, even when the singular is neuter.' },
  { id: 'a1-5-3-ex-10', topicId: 'a1-5-3', level: A1, stage: 'independent', prompt: 'Which learning form is best? (Buch / das Buch, die Bücher)', answer: 'das Buch, die Bücher', explanation: 'Store every noun together with its singular article and plural.' },

  { id: 'a1-negation-ex-6', topicId: 'a1-negation', level: A1, stage: 'guided', prompt: 'Ich trinke ___ Kaffee. (kein / keinen / nicht)', answer: 'keinen', explanation: 'Kaffee is masculine accusative and has no article in the positive: keinen Kaffee.' },
  { id: 'a1-negation-ex-7', topicId: 'a1-negation', level: A1, stage: 'controlled', prompt: 'Der Film ist ___ gut. (kein / nicht)', answer: 'nicht', explanation: 'nicht comes before an adjective: nicht gut.' },
  { id: 'a1-negation-ex-8', topicId: 'a1-negation', level: A1, stage: 'controlled', prompt: 'Er fährt ___ schnell. (kein / nicht)', answer: 'nicht', explanation: 'nicht comes before the adverb schnell.' },
  { id: 'a1-negation-ex-9', topicId: 'a1-negation', level: A1, stage: 'contrast', prompt: 'Ich kann heute ___ kommen. (kein / nicht)', answer: 'nicht', explanation: 'nicht stands before the final infinitive kommen.' },
  { id: 'a1-negation-ex-10', topicId: 'a1-negation', level: A1, stage: 'independent', prompt: 'Complete: Ich rufe dich heute ___ an.', answer: 'nicht', explanation: 'With a separable verb, nicht comes before the detached prefix.' },

  { id: 'a1-imperativ-ex-6', topicId: 'a1-imperativ', level: A1, stage: 'guided', prompt: '___ bitte her! (kommen, du form)', answer: 'Komm', acceptedAnswers: ['komm'], explanation: 'The du imperative removes du and -st: Komm!' },
  { id: 'a1-imperativ-ex-7', topicId: 'a1-imperativ', level: A1, stage: 'controlled', prompt: '___ auf mich! (warten, ihr form)', answer: 'Wartet', acceptedAnswers: ['wartet'], explanation: 'The ihr imperative is the present ihr form without ihr: Wartet!' },
  { id: 'a1-imperativ-ex-8', topicId: 'a1-imperativ', level: A1, stage: 'controlled', prompt: '___ bitte langsamer! (sprechen, du form)', answer: 'Sprich', acceptedAnswers: ['sprich'], explanation: 'The e → i change remains in the du imperative: Sprich!' },
  { id: 'a1-imperativ-ex-9', topicId: 'a1-imperativ', level: A1, stage: 'contrast', prompt: '___ vorsichtig! (fahren, du form)', answer: 'Fahr', acceptedAnswers: ['fahr'], explanation: 'The du imperative of fahren loses the umlaut: Fahr!' },
  { id: 'a1-imperativ-ex-10', topicId: 'a1-imperativ', level: A1, stage: 'independent', prompt: 'Complete the irregular command: ___ ruhig! (sein, du form)', answer: 'Sei', acceptedAnswers: ['sei'], explanation: 'sein has the irregular du imperative Sei!' },

  { id: 'a1-zahlen-ex-6', topicId: 'a1-zahlen', level: A1, stage: 'guided', prompt: 'Write 16 in German.', answer: 'sechzehn', explanation: '16 is sechzehn, without the s of sechs.' },
  { id: 'a1-zahlen-ex-7', topicId: 'a1-zahlen', level: A1, stage: 'controlled', prompt: 'Write 17 in German.', answer: 'siebzehn', explanation: '17 is siebzehn, with a shortened stem.' },
  { id: 'a1-zahlen-ex-8', topicId: 'a1-zahlen', level: A1, stage: 'controlled', prompt: 'Write 34 in German.', answer: 'vierunddreißig', explanation: 'German says the unit first: vier-und-dreißig.' },
  { id: 'a1-zahlen-ex-9', topicId: 'a1-zahlen', level: A1, stage: 'contrast', prompt: 'Write 67 in German.', answer: 'siebenundsechzig', explanation: '67 is sieben-und-sechzig, written as one word.' },
  { id: 'a1-zahlen-ex-10', topicId: 'a1-zahlen', level: A1, stage: 'independent', prompt: 'Write 99 in German.', answer: 'neunundneunzig', explanation: '99 is neun-und-neunzig, written as one word.' },

  { id: 'a1-uhrzeit-datum-ex-6', topicId: 'a1-uhrzeit-datum', level: A1, stage: 'guided', prompt: 'Complete: 8:30 = Es ist halb ___.', answer: 'neun', explanation: 'halb neun means halfway to nine: 8:30.' },
  { id: 'a1-uhrzeit-datum-ex-7', topicId: 'a1-uhrzeit-datum', level: A1, stage: 'controlled', prompt: 'Complete: 8:15 = Viertel ___ acht.', answer: 'nach', explanation: '8:15 is Viertel nach acht.' },
  { id: 'a1-uhrzeit-datum-ex-8', topicId: 'a1-uhrzeit-datum', level: A1, stage: 'controlled', prompt: 'The meeting is at 9:00: ___ neun Uhr. (um / am / im)', answer: 'um', explanation: 'Use um with clock times.' },
  { id: 'a1-uhrzeit-datum-ex-9', topicId: 'a1-uhrzeit-datum', level: A1, stage: 'contrast', prompt: 'Complete: ___ Montag. (um / am / im)', answer: 'am', explanation: 'Use am with days of the week.' },
  { id: 'a1-uhrzeit-datum-ex-10', topicId: 'a1-uhrzeit-datum', level: A1, stage: 'independent', prompt: 'Complete the date phrase: am ___ Mai. (1st)', answer: 'ersten', explanation: 'After am, the ordinal takes -n: am ersten Mai.' },

  { id: 'a1-w-fragen-ex-6', topicId: 'a1-w-fragen', level: A1, stage: 'guided', prompt: '___ machst du? – Ich arbeite. (what)', answer: 'Was', acceptedAnswers: ['was'], explanation: 'Was asks about a thing or activity.' },
  { id: 'a1-w-fragen-ex-7', topicId: 'a1-w-fragen', level: A1, stage: 'controlled', prompt: '___ beginnt der Film? – Um 20 Uhr. (when)', answer: 'Wann', acceptedAnswers: ['wann'], explanation: 'Wann asks about time.' },
  { id: 'a1-w-fragen-ex-8', topicId: 'a1-w-fragen', level: A1, stage: 'controlled', prompt: '___ kostet das? – Zehn Euro. (how much)', answer: 'Wie viel', acceptedAnswers: ['wie viel'], explanation: 'Wie viel asks about an amount or price.' },
  { id: 'a1-w-fragen-ex-9', topicId: 'a1-w-fragen', level: A1, stage: 'contrast', prompt: '___ siehst du? – Meinen Bruder. (who, accusative)', answer: 'Wen', acceptedAnswers: ['wen'], explanation: 'Wen is the accusative form of wer.' },
  { id: 'a1-w-fragen-ex-10', topicId: 'a1-w-fragen', level: A1, stage: 'independent', prompt: '___ Buch liest du? – Das neue Buch. (which)', answer: 'Welches', acceptedAnswers: ['welches'], explanation: 'Buch is neuter, so welcher becomes welches.' },

  { id: 'a1-alltagsstrukturen-ex-6', topicId: 'a1-alltagsstrukturen', level: A1, stage: 'guided', prompt: 'Complete: Es ___ hier einen Bahnhof.', answer: 'gibt', explanation: 'The fixed expression is es gibt.' },
  { id: 'a1-alltagsstrukturen-ex-7', topicId: 'a1-alltagsstrukturen', level: A1, stage: 'controlled', prompt: 'Complete the question: ___ es hier ein Hotel?', answer: 'Gibt', acceptedAnswers: ['gibt'], explanation: 'The question form is Gibt es…?' },
  { id: 'a1-alltagsstrukturen-ex-8', topicId: 'a1-alltagsstrukturen', level: A1, stage: 'controlled', prompt: '___ sagt man das auf Deutsch?', answer: 'Wie', acceptedAnswers: ['wie'], explanation: 'The useful question is Wie sagt man das auf Deutsch?' },
  { id: 'a1-alltagsstrukturen-ex-9', topicId: 'a1-alltagsstrukturen', level: A1, stage: 'contrast', prompt: 'I like coffee: Ich ___ Kaffee. (mögen)', answer: 'mag', explanation: 'Use mögen for liking a thing: Ich mag Kaffee.' },
  { id: 'a1-alltagsstrukturen-ex-10', topicId: 'a1-alltagsstrukturen', level: A1, stage: 'independent', prompt: 'I like reading: Ich lese ___.', answer: 'gern', explanation: 'Use gern with an activity: Ich lese gern.' },
];
