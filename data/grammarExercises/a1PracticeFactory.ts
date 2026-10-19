import { GrammarExercise, LanguageLevel } from '../../types';

type PracticeItem = {
  prompt: string;
  answer: string;
  explanation: string;
  acceptedAnswers?: string[];
};

const A1 = LanguageLevel.A1;
const modes = ['Review', 'Use it', 'Check the contrast', 'Apply independently'];
const stages: NonNullable<GrammarExercise['stage']>[] = ['guided', 'controlled', 'contrast', 'independent'];

const buildSeries = (topicId: string, startAt: number, count: number, items: PracticeItem[]): GrammarExercise[] =>
  Array.from({ length: count }, (_, index) => {
    const item = items[index % items.length];
    const cycle = Math.floor(index / items.length);
    return {
      ...item,
      id: `${topicId}-ex-${startAt + index}`,
      topicId,
      level: A1,
      stage: stages[Math.min(stages.length - 1, Math.floor(index * stages.length / count))],
      prompt: cycle === 0 ? item.prompt : `${modes[cycle % modes.length]}: ${item.prompt}`,
    };
  });

const accepted = (answer: string) => [answer.toLocaleLowerCase('de-DE')];

const alphabetItems: PracticeItem[] = [
  ['Which spelling sounds like English “eye”? (ei / ie)', 'ei', 'German ei sounds like “eye”.'],
  ['Which spelling gives a long “ee” sound? (ei / ie)', 'ie', 'German ie is a long /iː/ sound.'],
  ['What sound does German z begin with? (s / ts)', 'ts', 'German z is pronounced /ts/.'],
  ['Which word contains the “sh” sound? (Schule / Haus)', 'Schule', 'sch sounds like English “sh”.'],
  ['Which word contains the soft ch sound? (ich / Bach)', 'ich', 'The ch after i is soft in ich.'],
  ['Which word contains the rough ch sound? (ich / Bach)', 'Bach', 'The ch after a is rough in Bach.'],
  ['Complete the morning greeting: Guten ___.', 'Morgen', 'Guten Morgen is used in the morning.'],
  ['Complete the daytime greeting: Guten ___.', 'Tag', 'Guten Tag is used during the day.'],
  ['Complete the evening greeting: Guten ___.', 'Abend', 'Guten Abend is used in the evening.'],
  ['Which spelling has the “oy” sound? (eu / ie)', 'eu', 'German eu sounds like “oy”.'],
  ['Which word has the “eye” sound? (mein / lieben)', 'mein', 'The ei in mein sounds like “eye”.'],
  ['Which word has a long “ee” sound? (mein / sieben)', 'sieben', 'The ie in sieben is a long /iː/.'],
  ['Which word begins with /ts/? (zehn / sehen)', 'zehn', 'The z in zehn is pronounced /ts/.'],
  ['Which word begins with the “sh” sound? (Straße / Schule)', 'Schule', 'sch begins with the “sh” sound.'],
  ['Choose the informal greeting: (Hallo / Guten Abend)', 'Hallo', 'Hallo is a neutral informal greeting.'],
  ['Complete: Auf Wieder___.', 'sehen', 'Auf Wiedersehen is a standard goodbye.'],
  ['Which letter has an umlaut? (u / ü)', 'ü', 'The two dots mark an umlaut.'],
  ['Which pair contains an umlaut? (a–ä / a–e)', 'a–ä', 'ä is the umlaut form of a.'],
  ['Which word contains eu? (Europa / Liebe)', 'Europa', 'Europa begins with the eu spelling.'],
  ['Which word contains ie? (Liebe / Eis)', 'Liebe', 'Liebe contains ie.'],
  ['Which word contains ei? (Eis / Europa)', 'Eis', 'Eis contains ei.'],
  ['Complete the greeting: ___ Tag!', 'Guten', 'The fixed greeting is Guten Tag.'],
  ['Complete the greeting: ___ Morgen!', 'Guten', 'The fixed greeting is Guten Morgen.'],
  ['Complete the greeting: ___ Abend!', 'Guten', 'The fixed greeting is Guten Abend.'],
  ['Write the three-letter spelling pronounced “sh”.', 'sch', 'German writes the “sh” sound as sch.'],
].map(([prompt, answer, explanation]) => ({ prompt, answer, explanation, acceptedAnswers: accepted(answer) }));

const subjects = [
  ['ich', 'e'], ['du', 'st'], ['er', 't'], ['sie', 't'], ['wir', 'en'], ['ihr', 't'], ['Sie', 'en'],
] as const;
const regularVerbs = [
  ['lernen', 'lern', 'Deutsch'], ['wohnen', 'wohn', 'in Brüssel'], ['arbeiten', 'arbeit', 'heute'],
  ['spielen', 'spiel', 'Tennis'], ['machen', 'mach', 'eine Pause'], ['kaufen', 'kauf', 'Brot'],
] as const;

const regularItems: PracticeItem[] = subjects.flatMap(([subject, ending]) =>
  regularVerbs.map(([infinitive, stem, complement]) => {
    const adjustedEnding = infinitive === 'arbeiten' && (subject === 'du' || subject === 'er' || subject === 'sie' || subject === 'ihr')
      ? `e${ending}`
      : ending;
    const form = `${stem}${adjustedEnding}`;
    return {
      prompt: `${subject} ___ ${complement}. (${infinitive})`,
      answer: form,
      acceptedAnswers: accepted(form),
      explanation: `${subject} takes the present-tense form ${form}.`,
    };
  })
).slice(0, 25);

const wordOrderItems: PracticeItem[] = [
  ['Heute ___ ich Deutsch. (lernen)', 'lerne'], ['Morgen ___ wir in Gent. (arbeiten)', 'arbeiten'],
  ['Am Montag ___ er Tennis. (spielen)', 'spielt'], ['In Brüssel ___ sie eine Wohnung. (suchen)', 'sucht'],
  ['Um acht Uhr ___ der Kurs. (beginnen)', 'beginnt'], ['Jetzt ___ du eine Pause. (machen)', 'machst'],
  ['Am Abend ___ ihr Musik. (hören)', 'hört'], ['Jeden Tag ___ Anna Kaffee. (trinken)', 'trinkt'],
  ['Im Sommer ___ wir nach Berlin. (fahren)', 'fahren'], ['Zu Hause ___ ich ein Buch. (lesen)', 'lese'],
  ['___ du in Belgien? (wohnen)', 'Wohnst'], ['___ ihr heute Deutsch? (lernen)', 'Lernt'],
  ['___ Anna morgen? (kommen)', 'Kommt'], ['___ Sie in Brüssel? (arbeiten)', 'Arbeiten'],
  ['___ der Kurs um neun Uhr? (beginnen)', 'Beginnt'],
  ['Correct: Morgen ich arbeite.', 'Morgen arbeite ich.'],
  ['Correct: Heute wir lernen Deutsch.', 'Heute lernen wir Deutsch.'],
  ['Correct: In Gent er wohnt.', 'In Gent wohnt er.'],
  ['Correct: Am Abend sie hört Musik.', 'Am Abend hört sie Musik.'],
  ['Correct: Jetzt du machst eine Pause.', 'Jetzt machst du eine Pause.'],
  ['Build: (heute / ich / Deutsch / lernen)', 'Heute lerne ich Deutsch.'],
  ['Build: (morgen / wir / arbeiten)', 'Morgen arbeiten wir.'],
  ['Build: (in Brüssel / Anna / wohnen)', 'In Brüssel wohnt Anna.'],
  ['Build: (am Montag / er / kommen)', 'Am Montag kommt er.'],
  ['Build: (um zehn Uhr / der Kurs / beginnen)', 'Um zehn Uhr beginnt der Kurs.'],
].map(([prompt, answer]) => ({ prompt, answer, acceptedAnswers: accepted(answer), explanation: 'In a statement, the conjugated verb is in position 2; in a yes/no question, it comes first.' }));

const stemItems: PracticeItem[] = [
  ['Du ___ Deutsch. (sprechen)', 'sprichst'], ['Er ___ Englisch. (sprechen)', 'spricht'],
  ['Du ___ ein Buch. (lesen)', 'liest'], ['Sie ___ die Zeitung. (lesen)', 'liest'],
  ['Du ___ den Bus. (sehen)', 'siehst'], ['Er ___ seine Freundin. (sehen)', 'sieht'],
  ['Du ___ eine Pizza. (essen)', 'isst'], ['Anna ___ einen Apfel. (essen)', 'isst'],
  ['Du ___ deinem Bruder. (helfen)', 'hilfst'], ['Er ___ seiner Mutter. (helfen)', 'hilft'],
  ['Du ___ den Zug. (nehmen)', 'nimmst'], ['Sie ___ ein Taxi. (nehmen)', 'nimmt'],
  ['Du ___ nach Gent. (fahren)', 'fährst'], ['Er ___ nach Hause. (fahren)', 'fährt'],
  ['Du ___ lange. (schlafen)', 'schläfst'], ['Das Kind ___ gut. (schlafen)', 'schläft'],
  ['Du ___ schnell. (laufen)', 'läufst'], ['Er ___ im Park. (laufen)', 'läuft'],
  ['Du ___ eine Tasche. (tragen)', 'trägst'], ['Sie ___ einen Mantel. (tragen)', 'trägt'],
  ['Wir ___ Deutsch. (sprechen)', 'sprechen'], ['Ihr ___ ein Buch. (lesen)', 'lest'],
  ['Sie ___ den Bus. (sehen, polite)', 'sehen'], ['Wir ___ eine Pizza. (essen)', 'essen'],
  ['Ihr ___ nach Brüssel. (fahren)', 'fahrt'],
].map(([prompt, answer]) => ({ prompt, answer, acceptedAnswers: accepted(answer), explanation: 'Stem changes normally appear with du and er/sie/es; plural forms usually keep the regular stem.' }));

const modalForms: Record<string, Record<string, string>> = {
  können: { ich: 'kann', du: 'kannst', er: 'kann', wir: 'können', ihr: 'könnt', Sie: 'können' },
  müssen: { ich: 'muss', du: 'musst', er: 'muss', wir: 'müssen', ihr: 'müsst', Sie: 'müssen' },
  wollen: { ich: 'will', du: 'willst', er: 'will', wir: 'wollen', ihr: 'wollt', Sie: 'wollen' },
  dürfen: { ich: 'darf', du: 'darfst', er: 'darf', wir: 'dürfen', ihr: 'dürft', Sie: 'dürfen' },
  sollen: { ich: 'soll', du: 'sollst', er: 'soll', wir: 'sollen', ihr: 'sollt', Sie: 'sollen' },
};
const modalComplements: Record<string, string> = { können: 'Deutsch sprechen', müssen: 'heute arbeiten', wollen: 'Kaffee trinken', dürfen: 'hier parken', sollen: 'mehr lernen' };
const modalItems: PracticeItem[] = Object.entries(modalForms).flatMap(([verb, forms]) =>
  Object.entries(forms).map(([subject, answer]) => ({
    prompt: `${subject} ___ ${modalComplements[verb]}. (${verb})`, answer, acceptedAnswers: accepted(answer),
    explanation: `The modal is conjugated (${answer}) and the second verb stays in the infinitive at the end.`,
  }))
).slice(0, 25);

const separableItems: PracticeItem[] = [
  ['Ich ___ um sieben Uhr ___. (aufstehen)', 'stehe auf'], ['Du ___ um acht Uhr ___. (aufstehen)', 'stehst auf'],
  ['Er ___ seine Mutter ___. (anrufen)', 'ruft an'], ['Wir ___ unsere Freunde ___. (anrufen)', 'rufen an'],
  ['Ich ___ im Supermarkt ___. (einkaufen)', 'kaufe ein'], ['Anna ___ am Samstag ___. (einkaufen)', 'kauft ein'],
  ['Du ___ das Fenster ___. (aufmachen)', 'machst auf'], ['Er ___ die Tür ___. (zumachen)', 'macht zu'],
  ['Der Kurs ___ um neun Uhr ___. (anfangen)', 'fängt an'], ['Die Stunde ___ um zehn Uhr ___. (aufhören)', 'hört auf'],
  ['Ich ___ meinen Ausweis ___. (mitbringen)', 'bringe mit'], ['Du ___ eine Freundin ___. (mitbringen)', 'bringst mit'],
  ['Wir ___ heute Abend ___. (ausgehen)', 'gehen aus'], ['Ihr ___ am Freitag ___. (ausgehen)', 'geht aus'],
  ['Der Zug ___ um sechs Uhr ___. (abfahren)', 'fährt ab'], ['Der Bus ___ um acht Uhr ___. (ankommen)', 'kommt an'],
  ['Ich ___ am Kurs ___. (teilnehmen)', 'nehme teil'], ['Sie ___ am Treffen ___. (teilnehmen)', 'nimmt teil'],
  ['Du ___ das Formular ___. (ausfüllen)', 'füllst aus'], ['Er ___ das Licht ___. (anmachen)', 'macht an'],
  ['Wir ___ um sechs Uhr ___. (zurückkommen)', 'kommen zurück'], ['Ich ___ das Buch ___. (zurückgeben)', 'gebe zurück'],
  ['Sie ___ die Kinder ___. (abholen)', 'holt ab'], ['Ihr ___ das Zimmer ___. (aufräumen)', 'räumt auf'],
  ['Du ___ heute früh ___. (fernsehen)', 'siehst fern'],
].map(([prompt, answer]) => ({ prompt, answer, acceptedAnswers: accepted(answer), explanation: 'In a main clause, the conjugated verb stays in position 2 and the separable prefix moves to the end.' }));

const nounData = [
  ['Mann', 'der', 'den', 'einen'], ['Frau', 'die', 'die', 'eine'], ['Kind', 'das', 'das', 'ein'],
  ['Bruder', 'der', 'den', 'einen'], ['Schwester', 'die', 'die', 'eine'], ['Buch', 'das', 'das', 'ein'],
  ['Tisch', 'der', 'den', 'einen'], ['Lampe', 'die', 'die', 'eine'], ['Auto', 'das', 'das', 'ein'],
  ['Kaffee', 'der', 'den', 'einen'], ['Tasche', 'die', 'die', 'eine'], ['Ticket', 'das', 'das', 'ein'],
  ['Kurs', 'der', 'den', 'einen'], ['Wohnung', 'die', 'die', 'eine'], ['Zimmer', 'das', 'das', 'ein'],
  ['Apfel', 'der', 'den', 'einen'], ['Banane', 'die', 'die', 'eine'], ['Brot', 'das', 'das', 'ein'],
  ['Hund', 'der', 'den', 'einen'], ['Katze', 'die', 'die', 'eine'], ['Foto', 'das', 'das', 'ein'],
  ['Stuhl', 'der', 'den', 'einen'], ['Zeitung', 'die', 'die', 'eine'], ['Handy', 'das', 'das', 'ein'],
  ['Arzt', 'der', 'den', 'einen'],
] as const;

const caseItems: PracticeItem[] = nounData.map(([noun, nominative, accusative]) => ({
  prompt: `Ich sehe ___ ${noun}. (${nominative} / ${accusative})`, answer: accusative,
  acceptedAnswers: accepted(accusative), explanation: `The direct object is accusative: ${accusative} ${noun}.`,
}));
const indefiniteItems: PracticeItem[] = nounData.map(([noun, , , indefinite]) => ({
  prompt: `Ich habe ___ ${noun}. (ein / eine / einen)`, answer: indefinite,
  acceptedAnswers: accepted(indefinite), explanation: `As a direct object, the correct form is ${indefinite} ${noun}.`,
}));
const genderItems: PracticeItem[] = nounData.map(([noun, article]) => ({
  prompt: `Choose the article for ${noun}: (der / die / das)`, answer: article,
  acceptedAnswers: accepted(article), explanation: `Learn the noun with its article: ${article} ${noun}.`,
}));

const pluralData = [
  ['Buch', 'Bücher'], ['Frau', 'Frauen'], ['Mann', 'Männer'], ['Kind', 'Kinder'], ['Auto', 'Autos'],
  ['Tag', 'Tage'], ['Tisch', 'Tische'], ['Stuhl', 'Stühle'], ['Wohnung', 'Wohnungen'], ['Zeitung', 'Zeitungen'],
  ['Handy', 'Handys'], ['Foto', 'Fotos'], ['Apfel', 'Äpfel'], ['Banane', 'Bananen'], ['Bruder', 'Brüder'],
  ['Schwester', 'Schwestern'], ['Freund', 'Freunde'], ['Freundin', 'Freundinnen'], ['Kurs', 'Kurse'], ['Ticket', 'Tickets'],
  ['Zimmer', 'Zimmer'], ['Lehrer', 'Lehrer'], ['Lampe', 'Lampen'], ['Tasche', 'Taschen'], ['Arzt', 'Ärzte'],
] as const;
const pluralItems: PracticeItem[] = pluralData.map(([singular, plural]) => ({
  prompt: `One ${singular}, two ___.`, answer: plural, acceptedAnswers: accepted(plural),
  explanation: `The plural of ${singular} is ${plural}; the plural article is always die.`,
}));

const suffixData = [
  ['Wohnung', 'die', '-ung'], ['Zeitung', 'die', '-ung'], ['Freiheit', 'die', '-heit'], ['Möglichkeit', 'die', '-keit'],
  ['Freundschaft', 'die', '-schaft'], ['Information', 'die', '-ion'], ['Universität', 'die', '-tät'],
  ['Mädchen', 'das', '-chen'], ['Brötchen', 'das', '-chen'], ['Häuschen', 'das', '-chen'], ['Museum', 'das', '-um'],
  ['Zentrum', 'das', '-um'], ['Datum', 'das', '-um'], ['Montag', 'der', 'day'], ['Dienstag', 'der', 'day'],
  ['Januar', 'der', 'month'], ['Sommer', 'der', 'season'], ['Winter', 'der', 'season'], ['Regen', 'der', 'weather'],
  ['Schnee', 'der', 'weather'], ['Rose', 'die', 'flower'], ['Tulpe', 'die', 'flower'], ['Gold', 'das', 'metal'],
  ['Silber', 'das', 'metal'], ['Deutsch', 'das', 'language'],
] as const;
const suffixItems: PracticeItem[] = suffixData.map(([noun, article, clue]) => ({
  prompt: `Use the ${clue} clue: ___ ${noun}. (der / die / das)`, answer: article,
  acceptedAnswers: accepted(article), explanation: `The clue ${clue} helps here: ${article} ${noun}.`,
}));

const articleLearningItems: PracticeItem[] = nounData.map(([noun, article]) => ({
  prompt: `Recall the complete dictionary form: ___ ${noun}.`, answer: article,
  acceptedAnswers: accepted(article), explanation: `Store the noun and article together: ${article} ${noun}.`,
}));

const sein = { ich: 'bin', du: 'bist', er: 'ist', sie: 'ist', wir: 'sind', ihr: 'seid', Sie: 'sind' } as const;
const haben = { ich: 'habe', du: 'hast', er: 'hat', sie: 'hat', wir: 'haben', ihr: 'habt', Sie: 'haben' } as const;
const seinHabenItems: PracticeItem[] = [
  ...Object.entries(sein).flatMap(([subject, answer]) => ['zu Hause', 'müde'].map(complement => ({
    prompt: `${subject} ___ ${complement}. (sein)`, answer, acceptedAnswers: accepted(answer), explanation: `The form of sein with ${subject} is ${answer}.`,
  }))),
  ...Object.entries(haben).flatMap(([subject, answer]) => ['Zeit', 'ein Ticket'].map(complement => ({
    prompt: `${subject} ___ ${complement}. (haben)`, answer, acceptedAnswers: accepted(answer), explanation: `The form of haben with ${subject} is ${answer}.`,
  }))),
].slice(0, 25);

const negationItems: PracticeItem[] = [
  ['Ich habe ___ Auto. (kein / nicht)', 'kein'], ['Sie hat ___ Tasche. (keine / nicht)', 'keine'],
  ['Er hat ___ Bruder. (keinen / nicht)', 'keinen'], ['Wir haben ___ Kinder. (keine / nicht)', 'keine'],
  ['Das ist ___ teuer. (kein / nicht)', 'nicht'], ['Ich komme heute ___. (kein / nicht)', 'nicht'],
  ['Das ist ___ mein Buch. (kein / nicht)', 'nicht'], ['Er spricht ___ schnell. (kein / nicht)', 'nicht'],
  ['Sie trinkt ___ Kaffee. (keinen / nicht)', 'keinen'], ['Wir kaufen ___ Brot. (kein / nicht)', 'kein'],
  ['Ich sehe ___ Mann. (keinen / nicht)', 'keinen'], ['Anna hat ___ Wohnung. (keine / nicht)', 'keine'],
  ['Das Kind ist ___ müde. (kein / nicht)', 'nicht'], ['Du arbeitest morgen ___. (kein / nicht)', 'nicht'],
  ['Hier darf man ___ rauchen. (kein / nicht)', 'nicht'], ['Ich brauche ___ Hilfe. (keine / nicht)', 'keine'],
  ['Er hat ___ Zeit. (keine / nicht)', 'keine'], ['Das ist ___ Problem. (kein / nicht)', 'kein'],
  ['Wir wohnen ___ in Berlin. (kein / nicht)', 'nicht'], ['Sie lernt heute ___. (kein / nicht)', 'nicht'],
  ['Ich esse ___ Apfel. (keinen / nicht)', 'keinen'], ['Er kauft ___ Zeitung. (keine / nicht)', 'keine'],
  ['Das Wetter ist ___ gut. (kein / nicht)', 'nicht'], ['Ihr seid ___ zu Hause. (kein / nicht)', 'nicht'],
  ['Sie haben ___ Ticket. (kein / nicht)', 'kein'],
].map(([prompt, answer]) => ({ prompt, answer, acceptedAnswers: accepted(answer), explanation: 'Use kein with an indefinite noun and nicht to negate other sentence elements.' }));

const imperativeItems: PracticeItem[] = [
  ['___ die Tür! (öffnen, du)', 'Öffne'], ['___ bitte! (warten, du)', 'Warte'], ['___ langsam! (sprechen, du)', 'Sprich'],
  ['___ das Buch! (lesen, du)', 'Lies'], ['___ nach Hause! (fahren, du)', 'Fahr'], ['___ ruhig! (sein, du)', 'Sei'],
  ['___ bitte Platz! (nehmen, du)', 'Nimm'], ['___ die Hände! (waschen, du)', 'Wasch'],
  ['___ Sie bitte! (warten, Sie)', 'Warten'], ['___ Sie die Tür! (öffnen, Sie)', 'Öffnen'],
  ['___ Sie langsam! (sprechen, Sie)', 'Sprechen'], ['___ Sie das Formular! (lesen, Sie)', 'Lesen'],
  ['___ Sie nach links! (gehen, Sie)', 'Gehen'], ['___ Sie bitte ruhig! (sein, Sie)', 'Seien'],
  ['___ das Fenster! (ihr, öffnen)', 'Öffnet'], ['___ bitte! (ihr, kommen)', 'Kommt'], ['___ leise! (ihr, sprechen)', 'Sprecht'],
  ['___ das Buch! (ihr, lesen)', 'Lest'], ['___ nach Hause! (ihr, fahren)', 'Fahrt'], ['___ ruhig! (ihr, sein)', 'Seid'],
  ['___ mich an! (anrufen, du)', 'Ruf'], ['___ früh auf! (aufstehen, du)', 'Steh'], ['___ die Musik aus! (ausmachen, du)', 'Mach'],
  ['___ Sie das Formular aus! (ausfüllen, Sie)', 'Füllen'], ['___ bitte mit! (mitkommen, du)', 'Komm'],
].map(([prompt, answer]) => ({ prompt, answer, acceptedAnswers: accepted(answer), explanation: 'Choose the imperative form that matches du, ihr or polite Sie.' }));

const numberWords = [
  'null','eins','zwei','drei','vier','fünf','sechs','sieben','acht','neun','zehn','elf','zwölf','dreizehn','vierzehn','fünfzehn','sechzehn','siebzehn','achtzehn','neunzehn',
];
const tens: Record<number, string> = { 20: 'zwanzig', 30: 'dreißig', 40: 'vierzig', 50: 'fünfzig', 60: 'sechzig', 70: 'siebzig', 80: 'achtzig', 90: 'neunzig' };
const germanNumber = (value: number) => {
  if (value < 20) return numberWords[value];
  if (value === 100) return 'hundert';
  const ten = Math.floor(value / 10) * 10;
  const unit = value % 10;
  return unit === 0 ? tens[ten] : `${unit === 1 ? 'ein' : numberWords[unit]}und${tens[ten]}`;
};
const numberItems: PracticeItem[] = Array.from({ length: 90 }, (_, index) => {
  const value = index + 1;
  const answer = germanNumber(value);
  return { prompt: `Write ${value} in German.`, answer, acceptedAnswers: accepted(answer), explanation: `${value} is ${answer} in German.` };
});

const timeItems: PracticeItem[] = [
  ...Array.from({ length: 12 }, (_, index) => {
    const hour = index + 1; const answer = germanNumber(hour);
    return { prompt: `Es ist ___ Uhr. (${hour}:00)`, answer, acceptedAnswers: accepted(answer), explanation: `${hour}:00 is Es ist ${answer} Uhr.` };
  }),
  ...[['Montag','Dienstag'],['Dienstag','Mittwoch'],['Mittwoch','Donnerstag'],['Donnerstag','Freitag'],['Freitag','Samstag'],['Samstag','Sonntag'],['Sonntag','Montag']].map(([day, answer]) => ({
    prompt: `Which day comes after ${day}?`, answer, acceptedAnswers: accepted(answer), explanation: `${answer} comes after ${day}.`,
  })),
  ...[['Januar','Februar'],['Februar','März'],['März','April'],['April','Mai'],['Mai','Juni'],['Juni','Juli']].map(([month, answer]) => ({
    prompt: `Which month comes after ${month}?`, answer, acceptedAnswers: accepted(answer), explanation: `${answer} comes after ${month}.`,
  })),
];

const wQuestionItems: PracticeItem[] = [
  ['___ heißt du? – Ich heiße Mia.', 'Wie'], ['___ wohnst du? – In Brüssel.', 'Wo'],
  ['___ kommst du? – Aus Belgien.', 'Woher'], ['___ gehst du? – Nach Hause.', 'Wohin'],
  ['___ lernst du Deutsch? – Für die Arbeit.', 'Warum'], ['___ kommst du? – Am Montag.', 'Wann'],
  ['___ kostet das? – Zehn Euro.', 'Wie viel'], ['___ ist das? – Das ist Anna.', 'Wer'],
  ['___ machst du? – Ich lerne.', 'Was'], ['___ fährst du? – Mit dem Bus.', 'Wie'],
  ['___ alt bist du? – Dreißig.', 'Wie'], ['___ Uhr ist es? – Acht Uhr.', 'Wie viel'],
  ['___ arbeitest du? – Bei einer Bank.', 'Wo'], ['___ beginnt der Kurs? – Um neun.', 'Wann'],
  ['___ Sprachen sprichst du? – Zwei.', 'Wie viele'], ['___ Buch ist das? – Mein Buch.', 'Wessen'],
  ['___ trinkst du? – Kaffee.', 'Was'], ['___ kommt heute? – Paul.', 'Wer'],
  ['___ fährt der Zug? – Nach Gent.', 'Wohin'], ['___ kommt der Zug? – Aus Liège.', 'Woher'],
  ['___ geht es dir? – Gut.', 'Wie'], ['___ kaufst du Brot? – Im Supermarkt.', 'Wo'],
  ['___ hast du frei? – Am Freitag.', 'Wann'], ['___ lernst du? – Weil ich in Belgien lebe.', 'Warum'],
  ['___ Personen kommen? – Vier.', 'Wie viele'],
].map(([prompt, answer]) => ({ prompt, answer, acceptedAnswers: accepted(answer), explanation: `The question word ${answer} matches the information in the reply.` }));

const everydayItems: PracticeItem[] = [
  ['Hier ___ man nicht rauchen. (dürfen)', 'darf'], ['Man ___ hier Deutsch. (sprechen)', 'spricht'],
  ['Ich ___ gern Tennis. (spielen)', 'spiele'], ['Sie ___ gern Musik. (hören)', 'hört'],
  ['Wie ___ man das auf Deutsch? (sagen)', 'sagt'], ['Was ___ das? (bedeuten)', 'bedeutet'],
  ['Ich ___ das nicht. (verstehen)', 'verstehe'], ['Können Sie das bitte ___. (wiederholen)', 'wiederholen'],
  ['Bitte ___ Sie langsamer. (sprechen)', 'sprechen'], ['Ich ___ eine Frage. (haben)', 'habe'],
  ['Entschuldigung, wo ___ der Bahnhof? (sein)', 'ist'], ['Ich ___ einen Kaffee, bitte. (nehmen)', 'nehme'],
  ['Wie viel ___ das? (kosten)', 'kostet'], ['Ich ___ mit Karte. (zahlen)', 'zahle'],
  ['Ich ___ einen Termin. (brauchen)', 'brauche'], ['Wann ___ der Kurs? (beginnen)', 'beginnt'],
  ['Der Bus ___ um acht Uhr. (kommen)', 'kommt'], ['Ich ___ jeden Tag Deutsch. (lernen)', 'lerne'],
  ['Am Wochenende ___ wir Freunde. (treffen)', 'treffen'], ['Ich ___ heute keine Zeit. (haben)', 'habe'],
  ['Das ___ gut. (klingen)', 'klingt'], ['Kein Problem, das ___ gern. (machen)', 'mache'],
  ['Ich ___ aus Belgien. (kommen)', 'komme'], ['Ich ___ in Brüssel. (wohnen)', 'wohne'],
  ['Auf Wiedersehen und einen schönen ___.', 'Tag'],
].map(([prompt, answer]) => ({ prompt, answer, acceptedAnswers: accepted(answer), explanation: 'This is a high-frequency structure for everyday communication.' }));

export const A1_PRACTICE_FACTORY_EXERCISES: GrammarExercise[] = [
  ...buildSeries('a1-1', 11, 90, alphabetItems),
  ...buildSeries('a1-2', 11, 90, wordOrderItems),
  ...buildSeries('a1-3', 11, 90, regularItems),
  ...buildSeries('a1-3-stammwechsel', 11, 90, stemItems),
  ...buildSeries('a1-modalverben', 11, 90, modalItems),
  ...buildSeries('a1-trennbare-verben', 11, 90, separableItems),
  ...buildSeries('a1-4', 11, 90, caseItems),
  ...buildSeries('a1-unbestimmter-artikel', 11, 90, indefiniteItems),
  ...buildSeries('a1-plural', 11, 90, pluralItems),
  ...buildSeries('a1-5-1', 11, 90, suffixItems),
  ...buildSeries('a1-5-2', 11, 90, genderItems),
  ...buildSeries('a1-5-3', 11, 90, articleLearningItems),
  ...buildSeries('a1-3-sein-haben', 31, 70, seinHabenItems),
  ...buildSeries('a1-negation', 11, 90, negationItems),
  ...buildSeries('a1-imperativ', 11, 90, imperativeItems),
  ...buildSeries('a1-zahlen', 11, 90, numberItems),
  ...buildSeries('a1-uhrzeit-datum', 11, 90, timeItems),
  ...buildSeries('a1-w-fragen', 11, 90, wQuestionItems),
  ...buildSeries('a1-alltagsstrukturen', 11, 90, everydayItems),
];
