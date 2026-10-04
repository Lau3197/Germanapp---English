import { GrammarExercise, LanguageLevel } from '../../types';

type Row = readonly [prompt: string, answer: string, explanation?: string];
type Item = { prompt: string; answer: string; explanation: string; acceptedAnswers: string[] };

const B2 = LanguageLevel.B2;
const stages: NonNullable<GrammarExercise['stage']>[] = ['guided', 'controlled', 'contrast', 'independent'];
const instructions = [
  'Complete the sentence',
  'Apply the rule',
  'Choose the precise B2 form',
  'Check the contrast',
  'Use the structure in context',
  'Edit the sentence',
  'Work without a hint',
  'Exam practice',
  'Transfer the pattern',
  'Final mastery check',
];

const bank = (rows: readonly Row[], explanation: string): Item[] => rows.map(([prompt, answer, specific]) => ({
  prompt,
  answer,
  explanation: specific ?? explanation,
  acceptedAnswers: [answer.toLocaleLowerCase('de-DE')],
}));

const topic = (topicId: string, items: Item[]): GrammarExercise[] => Array.from({ length: 100 }, (_, index) => {
  const source = items[index % items.length];
  const cycle = Math.floor(index / items.length);
  return {
    ...source,
    id: `${topicId}-ex-${index + 1}`,
    topicId,
    level: B2,
    stage: stages[Math.min(3, Math.floor(index / 25))],
    prompt: `${instructions[cycle % instructions.length]} · ${source.prompt}`,
  };
});

const kiUse = bank([
  ['Er sagt, er ___ keine Zeit. (haben, Konjunktiv I)', 'habe'],
  ['Die Ministerin erklärt, sie ___ bereit. (sein)', 'sei'],
  ['Man berichtet, der Zug ___ verspätet. (sein)', 'sei'],
  ['Der Zeuge sagt, er ___ nichts. (wissen)', 'wisse'],
  ['Sie behauptet, das Problem ___ gelöst. (sein)', 'sei'],
  ['The typical purpose of Konjunktiv I is neutral ___.', 'indirect speech'],
  ['Which person most clearly shows a distinct KI form?', 'third person singular'],
  ['Er sagt: „Ich bin krank.“ → Er sagt, er ___ krank.', 'sei'],
  ['Die Zeitung meldet, die Lage ___ stabil. (sein)', 'sei'],
  ['Der Sprecher betont, er ___ die Wahrheit. (sagen)', 'sage'],
  ['Konjunktiv I reports words without confirming their ___.', 'truth'],
  ['Sie sagt, ihr Sohn ___ in Wien. (wohnen)', 'wohne'],
], 'Konjunktiv I marks neutral indirect speech; the third-person singular is especially clear because its form differs from the indicative.');

const kiForms = bank([
  ['Konjunktiv I: er ___ (machen)', 'mache'], ['Konjunktiv I: du ___ (machen)', 'machest'],
  ['Konjunktiv I: ihr ___ (machen)', 'machet'], ['Konjunktiv I: ich ___ (sein)', 'sei'],
  ['Konjunktiv I: du ___ (sein)', 'seiest'], ['Konjunktiv I: wir ___ (sein)', 'seien'],
  ['Er sagt, sie ___ genug Geld. (haben)', 'habe'], ['Man sagt, er ___ täglich. (arbeiten)', 'arbeite'],
  ['Der Arzt erklärt, das Medikament ___ gut. (wirken)', 'wirke'], ['KI keeps the infinitive stem: er ___ (fahren)', 'fahre'],
  ['Er behauptet, er ___ den Weg. (kennen)', 'kenne'], ['Die Sprecherin sagt, das ___ nicht. (stimmen)', 'stimme'],
], 'Form Konjunktiv I with the infinitive stem and the endings -e, -est, -e, -en, -et, -en; sein has the special forms sei/seiest/seien/seiet.');

const kiSubstitution = bank([
  ['Sie sagen, sie ___ Hunger. (haben; KI is ambiguous)', 'hätten'],
  ['Wir sagen, wir ___ später. (kommen; use KII replacement)', 'kämen'],
  ['Sie behaupten, sie ___ mehr lernen. (final replacement)', 'würden'],
  ['KI = indicative: which mood is the first replacement?', 'Konjunktiv II'],
  ['KII = Präteritum: use ___ + infinitive.', 'würde'],
  ['Er sagt, wir ___ bereit. (sein; distinct KI form)', 'seien'],
  ['Die Leute sagen, sie ___ keine Wahl. (haben)', 'hätten'],
  ['Sie erklären, sie ___ morgen abreisen. (lernen-pattern replacement)', 'würden'],
  ['The first test is whether KI differs from the ___.', 'indicative'],
  ['Wir lernen → indirect speech: sie sagen, wir ___.', 'würden lernen'],
  ['Sie kommen → indirect speech with clear replacement: sie ___.', 'kämen'],
  ['Sie arbeiteten is ambiguous with Präteritum; prefer sie ___.', 'würden arbeiten'],
], 'If Konjunktiv I is identical to the indicative, use Konjunktiv II; if that is ambiguous with Präteritum, use würde + infinitive.');

const kiTenses = bank([
  ['Present report: Er sagt, er ___ nach Hause. (gehen)', 'gehe'],
  ['Past report: Er sagt, er ___ gearbeitet. (haben)', 'habe'],
  ['Past movement: Sie sagt, er ___ gekommen. (sein)', 'sei'],
  ['Future report: Er sagt, er ___ kommen. (werden)', 'werde'],
  ['Der Zeuge sagt, er ___ den Mann gesehen.', 'habe'],
  ['Sie berichtet, das Kind ___ eingeschlafen.', 'sei'],
  ['The KI past uses habe/sei + ___.', 'Partizip II'],
  ['The KI future uses werde + ___.', 'Infinitiv'],
  ['Er erklärte, er ___ alles erledigt.', 'habe'],
  ['Sie sagt, die Lieferung ___ morgen eintreffen.', 'werde'],
  ['Präteritum and Perfekt merge into one KI ___ form.', 'past'],
  ['Der Chef sagt, die Sitzung ___ begonnen. (sein)', 'sei'],
], 'Konjunktiv I uses a present form, one past form with habe/sei + Partizip II, and a future form with werde + infinitive.');

const kiTraps = bank([
  ['Ich hoffe, dass du ___. (kommen; no indirect speech)', 'kommst'],
  ['Er sagt, er ___ krank. (neutral report)', 'sei'],
  ['If the speaker expresses unreality rather than a neutral report, use ___.', 'Konjunktiv II'],
  ['KI is not normally used after ich hoffe, dass; use the ___.', 'indicative'],
  ['Correct the reported form: Er sagt, er hat Zeit. → er ___ Zeit.', 'habe'],
  ['Sie wünscht, dass er ___. (kommen)', 'kommt'],
  ['A wish and a neutral report require ___ moods.', 'different'],
  ['Er behauptet, er ___ unschuldig. (sein)', 'sei'],
  ['Do not omit the final -e: er sag___.', 'sage'],
  ['The form er hat is indicative; clear KI is er ___.', 'habe'],
  ['Ich will, dass er ___. (kommen)', 'kommt'],
  ['Neutral source distance is marked by ___.', 'Konjunktiv I'],
], 'Use Konjunktiv I for indirect speech, not automatically for wishes, hopes or dass-clauses; distinguish it from Konjunktiv II.');

const passiveLogic = bank([
  ['Die Tür ___ geschlossen. (action in progress)', 'wird'], ['Die Tür ___ geschlossen. (resulting state)', 'ist'],
  ['Das Essen ___ gerade gekocht. (process)', 'wird'], ['Das Essen ___ schon gekocht. (state)', 'ist'],
  ['Process passive uses ___.', 'werden'], ['State passive uses ___.', 'sein'],
  ['Das Fenster wird geöffnet = focus on the ___.', 'process'], ['Das Fenster ist geöffnet = focus on the ___.', 'state'],
  ['Die Straße ___ gesperrt worden. (completed process)', 'ist'], ['Nach der Reparatur ___ das Gerät wieder einsatzbereit.', 'ist'],
  ['Der Vertrag ___ gerade unterschrieben.', 'wird'], ['Der Vertrag ___ bereits unterschrieben.', 'ist'],
], 'Vorgangspassiv uses werden for an action or process; Zustandspassiv uses sein for the resulting state.');

const stateTenses = bank([
  ['Present state: Die Arbeit ___ getan.', 'ist'], ['Past state: Die Arbeit ___ getan.', 'war'],
  ['Future state: Morgen wird alles erledigt ___.', 'sein'], ['Perfect state: Die Tür ist geschlossen ___.', 'gewesen'],
  ['Gestern ___ das Museum geschlossen.', 'war'], ['Bis morgen wird der Bericht fertiggestellt ___.', 'sein'],
  ['The most common state-passive tenses are present and ___.', 'Präteritum'], ['Die Zimmer ___ bereits gereinigt. (present)', 'sind'],
  ['Als wir ankamen, ___ die Zimmer gereinigt.', 'waren'], ['Am Freitag wird die Brücke repariert ___.', 'sein'],
  ['State passive perfect uses sein + participle + ___.', 'gewesen'], ['Die Akten sind lange archiviert ___.', 'gewesen'],
], 'Conjugate sein to form the state passive: ist/sind, war/waren, wird ... sein, or ist ... gewesen.');

const passivePossible = bank([
  ['Can öffnen form a state passive? (yes/no)', 'yes'], ['Can schlafen form a state passive? (yes/no)', 'no'],
  ['Er ___ verletzt. (lasting result)', 'ist'], ['Mir ___ geholfen. (process passive)', 'wurde'],
  ['A state passive normally needs a ___ verb.', 'transitive'], ['The action must create a lasting change of ___.', 'state'],
  ['Die Suppe ___ gekocht. (finished result)', 'ist'], ['Der Mann ist bewundert is normally ___ as a state passive.', 'incorrect'],
  ['Can reparieren form a state passive?', 'yes'], ['Can gehen form a state passive?', 'no'],
  ['Die Datei ist gelöscht describes a resulting ___.', 'state'], ['Die Kinder sind geschlafen is ___.', 'incorrect'],
], 'A natural Zustandspassiv normally comes from a transitive verb whose action produces a lasting result.');

const passiveConfusion = bank([
  ['Ich bin gegangen is active ___.', 'Perfekt'], ['Die Tür ist geöffnet is ___.', 'Zustandspassiv'],
  ['Der Kuchen ist gebacken: the subject undergoes the ___.', 'action'], ['Sie ist angekommen is active ___.', 'Perfekt'],
  ['Das Fenster ist zerbrochen can describe a resulting ___.', 'state'], ['Er ist gefahren: who performs the action?', 'Er'],
  ['Die Rechnung ist bezahlt: process or result?', 'result'], ['Das Kind ist eingeschlafen: active perfect or passive?', 'active perfect'],
  ['An inanimate affected subject often signals ___.', 'Zustandspassiv'], ['Die Maschine ist repariert means the repair is ___.', 'complete'],
  ['Wir sind umgezogen is not a ___.', 'passive'], ['Das Paket ist geöffnet focuses on its present ___.', 'state'],
], 'Distinguish active Perfekt with sein from Zustandspassiv by checking whether the subject performs the action or is left in a resulting state.');

const passivePurpose = bank([
  ['Das Problem kann gelöst werden → Das Problem ist ___.', 'lösbar'], ['A passive alternative often makes formal prose more ___.', 'concise'],
  ['Das Formular kann ausgefüllt werden → Das Formular lässt sich ___.', 'ausfüllen'], ['Avoiding repeated werden can improve textual ___.', 'flow'],
  ['Die Aufgabe muss erledigt werden → Die Aufgabe ist zu ___.', 'erledigen'], ['Passive alternatives can express possibility or ___.', 'obligation'],
  ['Das ist nicht machbar means it cannot be ___.', 'done'], ['Which is shorter: kann repariert werden / reparierbar?', 'reparierbar'],
  ['A heavy sequence of passive clauses can be stylistically ___.', 'awkward'], ['Passiversatzformen preserve passive meaning without always using ___.', 'werden'],
], 'Passive substitutes make texts more concise and can express possibility, obligation or capacity without repeated werden-passives.');

const sichLassen = bank([
  ['Das Auto kann repariert werden → Das Auto ___ sich reparieren.', 'lässt'], ['Die Tür kann nicht geöffnet werden → Sie lässt sich nicht ___.', 'öffnen'],
  ['Die Datei kann leicht kopiert werden → Sie lässt sich leicht ___.', 'kopieren'], ['Die Frage kann beantwortet werden → Die Frage lässt sich ___.', 'beantworten'],
  ['Plural: Die Probleme ___ sich lösen.', 'lassen'], ['Past: Das Gerät ___ sich nicht reparieren.', 'ließ'],
  ['sich lassen + infinitive primarily expresses ___.', 'possibility'], ['Das Konzept ist verständlich → Es lässt sich ___.', 'verstehen'],
  ['Die Kosten können gesenkt werden → Die Kosten lassen sich ___.', 'senken'], ['Das Ergebnis kann überprüft werden → Es lässt sich ___.', 'überprüfen'],
  ['The infinitive after sich lassen stays at the ___.', 'end'], ['Das Buch ___ sich schnell lesen.', 'lässt'],
], 'Use sich lassen + infinitive as an elegant alternative to können + passive, especially for possibility.');

const seinZu = bank([
  ['Das Formular muss ausgefüllt werden → Es ist ___.', 'auszufüllen'], ['Die Schrift kann schwer gelesen werden → Sie ist schwer zu ___.', 'lesen'],
  ['Die Regeln müssen beachtet werden → Sie sind zu ___.', 'beachten'], ['Der Fehler kann leicht erkannt werden → Er ist leicht zu ___.', 'erkennen'],
  ['sein + zu + infinitive can express possibility or ___.', 'obligation'], ['Die Rechnung ist bis Freitag zu ___. (bezahlen)', 'bezahlen'],
  ['Das Problem ist kaum zu ___. (lösen)', 'lösen'], ['Die Vorschriften sind einzuhalten = they must be ___.', 'followed'],
  ['Separable verb: Das Formular ist ___. (ausfüllen)', 'auszufüllen'], ['Die Daten sind zu ___. (speichern)', 'speichern'],
  ['This structure is common in formal and ___ language.', 'administrative'], ['Der Text ist gut zu ___. (verstehen)', 'verstehen'],
], 'sein + zu + infinitive is a formal passive substitute expressing obligation or possibility; zu is inserted in separable verbs.');

const passiveAdjectives = bank([
  ['machen → ___.', 'machbar'], ['essen → ___.', 'essbar'], ['trinken → ___.', 'trinkbar'],
  ['lesen → ___. (legible)', 'leserlich'], ['verstehen → ___.', 'verständlich'], ['Das Problem kann gelöst werden → Es ist ___.', 'lösbar'],
  ['Das Wasser kann nicht getrunken werden → Es ist nicht ___.', 'trinkbar'], ['Die Handschrift kann gelesen werden → Sie ist ___.', 'leserlich'],
  ['The suffix -bar usually expresses passive ___.', 'possibility'], ['Das Ziel kann erreicht werden → Es ist ___.', 'erreichbar'],
  ['Die Erklärung kann nachvollzogen werden → Sie ist ___.', 'nachvollziehbar'], ['Ein Produkt, das verkauft werden kann, ist ___.', 'verkäuflich'],
], 'Adjectives in -bar or -lich often express that something can undergo an action.');

const reflexivePassive = bank([
  ['Das Buch ___ sich gut. (verkaufen)', 'verkauft'], ['Die Frage ___ sich von selbst. (beantworten)', 'beantwortet'],
  ['Dieser Stoff ___ sich leicht. (waschen)', 'wäscht'], ['Die Tür ___ sich schwer. (öffnen)', 'öffnet'],
  ['The reflexive construction often describes an automatic ___.', 'process'], ['Die Wohnungen ___ sich schnell. (vermieten)', 'vermieten'],
  ['Das Material ___ sich gut verarbeiten.', 'lässt'], ['Der Roman ___ sich flüssig. (lesen)', 'liest'],
  ['The subject is not an agent but the affected ___.', 'thing'], ['Die Ware ___ sich gut. (verkaufen)', 'verkauft'],
  ['Das Problem ___ sich nicht von allein. (lösen)', 'löst'], ['Diese Oberfläche ___ sich leicht. (reinigen)', 'reinigt'],
], 'Some reflexive verb forms carry a passive-like meaning and describe how something behaves or can be handled.');

const passiveEquivalents = bank([
  ['können + passive → sich ___.', 'lassen'], ['müssen + passive → sein + zu + ___.', 'Infinitiv'],
  ['können + passive → adjective in ___.', '-bar'], ['Neutral agent suppression can use ___ + active.', 'man'],
  ['Das kann gemacht werden → Das ist ___.', 'machbar'], ['Die Tür kann geöffnet werden → Die Tür lässt sich ___.', 'öffnen'],
  ['Das muss geprüft werden → Das ist zu ___.', 'prüfen'], ['Hier wird Deutsch gesprochen → Man ___ hier Deutsch.', 'spricht'],
  ['Capacity is often expressed with an adjective; obligation with sein + ___.', 'zu'], ['Which form is most explicitly passive: wird gemacht / machbar?', 'wird gemacht'],
  ['Man repariert das Gerät preserves an unspecified ___.', 'agent'], ['Die Aufgabe ist lösbar expresses ___.', 'possibility'],
], 'Match each passive substitute to its nuance: man + active, sich lassen, sein + zu, or a passive adjective.');

const nominalPurpose = bank([
  ['entscheiden → die ___.', 'Entscheidung'], ['diskutieren → die ___.', 'Diskussion'],
  ['Nominal style is especially common in administration, science and the ___.', 'press'], ['Nominalization often makes writing more concise and ___.', 'formal'],
  ['Er entscheidet schnell → seine schnelle ___.', 'Entscheidung'], ['The verb becomes the central ___.', 'noun'],
  ['The agent can become a ___ complement.', 'genitive'], ['Nominal style focuses on the concept rather than the ___.', 'action'],
  ['Wir planen sorgfältig → unsere sorgfältige ___.', 'Planung'], ['prüfen → die ___.', 'Prüfung'],
  ['A subordinate clause can often become a ___ group.', 'prepositional'], ['objectivity is a typical effect of ___.', 'nominalization'],
], 'Nominalization converts verbal information into noun-centred, concise and formal nominal style.');

const nominalMechanics = bank([
  ['Der Chef entscheidet schnell → die schnelle Entscheidung des ___.', 'Chefs'], ['intensiv diskutieren → eine intensive ___.', 'Diskussion'],
  ['The subject often becomes a complement in the ___.', 'genitive'], ['The adverb schnell becomes the declined adjective ___.', 'schnelle'],
  ['Die Regierung plant sorgfältig → die sorgfältige Planung der ___.', 'Regierung'], ['produzieren → die ___.', 'Produktion'],
  ['Wir reisen häufig → unsere häufigen ___.', 'Reisen'], ['Der Kunde beschwert sich laut → die laute Beschwerde des ___.', 'Kunden'],
  ['A nominalized infinitive takes the article ___.', 'das'], ['essen → das ___.', 'Essen'],
  ['analysieren → die ___.', 'Analyse'], ['Der Ausschuss prüft gründlich → die gründliche Prüfung des ___.', 'Ausschusses'],
], 'Change the verb into a noun, the subject into a genitive complement and an adverb into a declined adjective.');

const nominalConnectors = bank([
  ['weil → ___ + Genitiv.', 'wegen'], ['obwohl → ___ + Genitiv.', 'trotz'], ['nachdem → ___ + Dativ.', 'nach'],
  ['bevor → ___ + Dativ.', 'vor'], ['wenn/falls → ___ + Dativ.', 'bei'], ['indem → ___ + Akkusativ.', 'durch'],
  ['Obwohl es regnete → Trotz des ___.', 'Regens'], ['Nachdem wir gegessen hatten → Nach dem ___.', 'Essen'],
  ['Weil er krank war → Wegen seiner ___.', 'Krankheit'], ['Während er arbeitete → Während der ___.', 'Arbeit'],
  ['Falls ein Brand ausbricht → Bei einem ___.', 'Brand'], ['Indem man kontrolliert → Durch eine ___.', 'Kontrolle'],
], 'Replace verbal conjunctions with equivalent prepositions and use the case governed by each preposition.');

const nominalComplements = bank([
  ['Wir bauen das Haus → der Bau des ___.', 'Hauses'], ['Wir prüfen die Dokumente → die Prüfung der ___.', 'Dokumente'],
  ['Wir warten auf den Bus → das Warten ___ den Bus.', 'auf'], ['Er interessiert sich für Kunst → sein Interesse ___ Kunst.', 'für'],
  ['A direct object often becomes a ___ complement.', 'genitive'], ['A fixed verb preposition is usually ___.', 'retained'],
  ['Sie löst das Problem → die Lösung des ___.', 'Problems'], ['Er nimmt an der Sitzung teil → seine Teilnahme ___ der Sitzung.', 'an'],
  ['Wir sprechen über Politik → das Gespräch ___ Politik.', 'über'], ['Sie bittet um Hilfe → ihre Bitte ___ Hilfe.', 'um'],
  ['Der Rat unterstützt das Projekt → die Unterstützung des ___.', 'Projekts'], ['Er denkt an seine Familie → der Gedanke ___ seine Familie.', 'an'],
], 'In nominal style, direct objects often become genitive complements while fixed prepositions normally remain.');

const nounFormation = bank([
  ['planen → die ___.', 'Planung'], ['essen → das ___.', 'Essen'], ['besuchen → der ___.', 'Besuch'],
  ['schließen → der ___.', 'Schluss'], ['produzieren → die ___.', 'Produktion'], ['informieren → die ___.', 'Information'],
  ['entscheiden → die ___.', 'Entscheidung'], ['laufen → der ___.', 'Lauf'], ['ziehen → der ___.', 'Zug'],
  ['The suffix -ung normally creates a ___ noun.', 'feminine'], ['A substantivized infinitive is normally ___.', 'neuter'],
  ['organisieren → die ___.', 'Organisation'],
], 'Learn common noun-formation patterns: -ung, substantivized infinitives, bare stems, vowel changes and international suffixes.');

const participleConcept = bank([
  ['der Mann, der wartet → der ___ Mann.', 'wartende'], ['die Kinder, die lachen → die ___ Kinder.', 'lachenden'],
  ['A participial construction condenses a relative ___.', 'clause'], ['It is especially common in formal ___.', 'writing'],
  ['die Frau, die dort arbeitet → die dort ___ Frau.', 'arbeitende'], ['The declined participle stands immediately before the ___.', 'noun'],
  ['der Brief, der gestern geschrieben wurde → der gestern ___ Brief.', 'geschriebene'], ['Participial attributes increase informational ___.', 'density'],
  ['das Kind, das singt → das ___ Kind.', 'singende'], ['die Daten, die gesammelt wurden → die ___ Daten.', 'gesammelten'],
  ['Long relative clauses can become extended ___.', 'attributes'], ['The article remains before the entire participial ___.', 'construction'],
], 'A participial construction condenses a relative clause into a declined participial attribute before the noun.');

const partOne = bank([
  ['laufen → ___. (Partizip I stem)', 'laufend'], ['arbeiten → ___.', 'arbeitend'], ['die Kinder lachen → die ___ Kinder.', 'lachenden'],
  ['der Hund schläft → der ___ Hund.', 'schlafende'], ['Partizip I is formed with infinitive + ___.', 'd'],
  ['Partizip I has an active and ___ meaning.', 'simultaneous'], ['ein Land entwickelt sich → ein sich ___ Land.', 'entwickelndes'],
  ['die Frau wartet → die ___ Frau.', 'wartende'], ['der Student liest → der ___ Student.', 'lesende'],
  ['The noun performs the action: choose Partizip ___.', 'I'], ['die Maschine läuft → die ___ Maschine.', 'laufende'],
  ['ein Kind weint → ein ___ Kind.', 'weinendes'],
], 'Partizip I is infinitive + d plus an adjective ending; it expresses an active action simultaneous with the main event.');

const partTwo = bank([
  ['kaufen → ___. (Partizip II)', 'gekauft'], ['schreiben → ___.', 'geschrieben'], ['das Fahrrad wurde gestohlen → das ___ Fahrrad.', 'gestohlene'],
  ['die Bibliothek wurde eröffnet → die ___ Bibliothek.', 'eröffnete'], ['Partizip II often has a passive or ___ meaning.', 'completed'],
  ['die Daten wurden gespeichert → die ___ Daten.', 'gespeicherten'], ['der Brief wurde unterschrieben → der ___ Brief.', 'unterschriebene'],
  ['The noun undergoes the action: choose Partizip ___.', 'II'], ['das Fenster wurde geöffnet → das ___ Fenster.', 'geöffnete'],
  ['die Ware wurde geliefert → die ___ Ware.', 'gelieferte'], ['ein Problem wurde gelöst → ein ___ Problem.', 'gelöstes'],
  ['die Gäste wurden eingeladen → die ___ Gäste.', 'eingeladenen'],
], 'Partizip II plus an adjective ending expresses a completed action or passive relationship.');

const extendedAttribute = bank([
  ['Das von der Regierung neu verabschiedet__ Gesetz.', 'e'], ['Die heute Morgen geliefert__ Pakete.', 'en'],
  ['Der seit zehn Jahren hier arbeitend__ Mann.', 'e'], ['Eine gestern veröffentlicht__ Studie.', 'e'],
  ['The participle goes immediately before the ___.', 'noun'], ['Article + details + participle + ___ forms the B2 sandwich.', 'noun'],
  ['Die in Belgien lebend__ Deutschen.', 'en'], ['Das von Experten geprüft__ Ergebnis.', 'e'],
  ['Ein schwer verletzt__ Patient.', 'er'], ['Die auf dem Tisch liegend__ Dokumente.', 'en'],
  ['Den gestern angekommen__ Gästen wurde geholfen.', 'en'], ['Mit einer sorgfältig vorbereitet__ Präsentation.', 'en'],
], 'In an extended attribute, all complements stand between the article and the declined participle immediately before the noun.');

const gerundive = bank([
  ['das Problem, das gelöst werden muss → das zu ___ Problem.', 'lösende'], ['die Aufgaben, die erledigt werden müssen → die zu ___ Aufgaben.', 'erledigenden'],
  ['ein Text, der schwer verstanden werden kann → ein schwer zu ___ Text.', 'verstehender'], ['The gerundive uses zu + Partizip ___.', 'I'],
  ['It expresses passive possibility or ___.', 'obligation'], ['die Rechnung, die bezahlt werden muss → die zu ___ Rechnung.', 'bezahlende'],
  ['die Regeln, die beachtet werden müssen → die zu ___ Regeln.', 'beachtenden'], ['ein kaum lösbares Problem → ein kaum zu ___ Problem.', 'lösendes'],
  ['der Antrag, der geprüft werden muss → der zu ___ Antrag.', 'prüfende'], ['die Daten, die gespeichert werden müssen → die zu ___ Daten.', 'speichernden'],
  ['The participle still receives an adjective ___.', 'ending'], ['ein leicht zu bedienend__ Gerät.', 'es'],
], 'The gerundive uses zu + Partizip I + adjective ending to express something that must or can be done.');

const participleEndings = bank([
  ['der lesend__ Student.', 'e'], ['den lesend__ Studenten.', 'en'], ['ein lesend__ Student.', 'er'],
  ['das gelesen__ Buch.', 'e'], ['ein gelesen__ Buch.', 'es'], ['die gelesen__ Bücher.', 'en'],
  ['mit einem schlafend__ Hund.', 'en'], ['frisch gekocht__ Essen.', 'es'], ['die zu lesend__ Texte.', 'en'],
  ['Participles decline like ___.', 'adjectives'], ['Partizip I means active/present; Partizip II often means passive/___.', 'past'],
  ['ein zu lösend__ Problem.', 'es'],
], 'Participles used before nouns take the same weak, mixed or strong endings as adjectives.');

const connectorPurpose = bank([
  ['B2 connectors help structure an ___.', 'argument'], ['sowohl ... als auch expresses balanced ___.', 'addition'],
  ['zwar ... aber expresses ___.', 'concession'], ['weder ... noch expresses double ___.', 'negation'],
  ['entweder ... oder presents an ___.', 'alternative'], ['Complex connectors improve precision and textual ___.', 'cohesion'],
  ['Not only A but also B → nicht nur ... ___.', 'sondern auch'], ['Both A and B → sowohl ... ___.', 'als auch'],
  ['Neither A nor B → weder ... ___.', 'noch'], ['Admittedly A, but B → zwar ... ___.', 'aber'],
], 'Complex connectors guide an argument and express addition, emphasis, alternatives, negation and concession precisely.');

const doubleConnectors = bank([
  ['Er spricht ___ Deutsch ___ Japanisch. (both)', 'sowohl, als auch'], ['Er spricht ___ Deutsch, ___ auch Japanisch. (not only)', 'nicht nur, sondern'],
  ['Ich habe ___ Zeit ___ Lust.', 'weder, noch'], ['Wir fahren ___ heute ___ morgen.', 'entweder, oder'],
  ['Das Projekt ist ___ teuer, ___ effektiv.', 'zwar, aber'], ['___ Anna ___ Paul kommen mit.', 'Sowohl, als auch'],
  ['Sie ist ___ klug, ___ auch erfahren.', 'nicht nur, sondern'], ['Er trinkt ___ Kaffee ___ Tee.', 'weder, noch'],
  ['___ du rufst an, ___ du schreibst.', 'Entweder, oder'], ['Der Weg ist ___ lang, ___ sehr schön.', 'zwar, aber'],
  ['Do not add nicht after weder ... ___.', 'noch'], ['The second half of nicht nur is ___.', 'sondern auch'],
], 'Use both elements of a two-part connector and retain normal word-order rules for the units being linked.');

const proportional = bank([
  ['___ mehr ich lerne, desto besser verstehe ich.', 'Je'], ['Je kälter es wird, ___ mehr heizen wir.', 'desto'],
  ['Je schneller du fährst, umso ___ ist es. (dangerous)', 'gefährlicher'], ['In the je-clause, the finite verb goes at the ___.', 'end'],
  ['After desto/umso + comparative, the verb is in position ___.', '2'], ['Je länger ich warte, desto ungeduldiger ___ ich.', 'werde'],
  ['___ besser die Vorbereitung ist, umso leichter fällt die Prüfung.', 'Je'], ['Je höher der Preis steigt, desto weniger ___ die Kunden.', 'kaufen'],
  ['The two accepted second correlatives are desto and ___.', 'umso'], ['Je öfter man übt, desto sicherer ___ man.', 'wird'],
  ['Je weniger Zeit wir haben, ___ schneller müssen wir arbeiten.', 'desto'], ['The construction expresses linked ___.', 'proportionality'],
], 'Je introduces a verb-final dependent clause; desto/umso begins the comparative block followed by the finite verb in position 2.');

const twoSides = bank([
  ['___ möchte ich reisen, andererseits muss ich sparen.', 'Einerseits'], ['Einerseits ist Homeoffice flexibel, ___ fehlt der Kontakt.', 'andererseits'],
  ['After einerseits in position 1, the finite verb comes ___.', 'immediately'], ['The pair presents two contrasting points of ___.', 'view'],
  ['___ spart das Auto Zeit, andererseits kostet es viel.', 'Einerseits'], ['Einerseits ___ die Idee attraktiv, andererseits ist sie riskant.', 'ist'],
  ['Andererseits ___ wir die langfristigen Kosten bedenken.', 'müssen'], ['Use this pair to structure a balanced ___.', 'argument'],
  ['On the one hand → ___.', 'einerseits'], ['On the other hand → ___.', 'andererseits'],
  ['Einerseits ___ sie Erfahrung, andererseits fehlt ihr Zeit.', 'hat'], ['Both words behave as sentence adverbs occupying position ___.', '1'],
], 'Einerseits ... andererseits presents two sides; each adverb can occupy position 1 and is followed by the finite verb.');

const fallsSofern = bank([
  ['___ Sie Fragen haben, rufen Sie an. (in case)', 'Falls'], ['___ das Wetter mitspielt, findet das Fest statt. (provided that)', 'Sofern'],
  ['Falls expresses a relatively uncertain ___.', 'possibility'], ['Sofern expresses a restrictive ___.', 'condition'],
  ['Both conjunctions send the finite verb to the ___.', 'end'], ['___ keine Einwände bestehen, beginnen wir. (provided that)', 'Sofern'],
  ['___ der Zug ausfällt, nehmen wir den Bus.', 'Falls'], ['Sofern Sie zustimmen, ___ wir fort. (continue)', 'fahren'],
  ['Falls es regnet, ___ die Veranstaltung aus.', 'fällt'], ['In case → ___.', 'falls'],
  ['Provided that → ___.', 'sofern'], ['Use sofern when the condition acts as a ___.', 'restriction'],
], 'Falls means in case and highlights uncertainty; sofern means provided that and sets a restrictive condition. Both introduce verb-final clauses.');

const modalConcept = bank([
  ['Ich muss arbeiten is an ___ use. (objective/subjective)', 'objective'], ['Er muss krank sein is a ___ use.', 'subjective'],
  ['Subjective modals express the speaker’s degree of ___.', 'certainty'], ['Das kann nicht wahr sein expresses ___.', 'disbelief'],
  ['Er kann Deutsch sprechen expresses ___.', 'ability'], ['Er könnte zu Hause sein expresses a ___.', 'possibility'],
  ['A subjective modal evaluates a ___.', 'claim'], ['The same modal can have objective and subjective ___.', 'meanings'],
  ['Du musst gehen = obligation; Er muss gegangen sein = ___.', 'inference'], ['The speaker, not the subject, sets the degree of ___.', 'probability'],
], 'Distinguish objective ability or obligation from subjective modal meanings that express inference, probability, report or claim.');

const probability = bank([
  ['Near certainty: Er ___ krank sein.', 'muss'], ['Strong probability: Er ___ krank sein.', 'dürfte'],
  ['Possibility: Er ___ krank sein.', 'könnte'], ['Concessive possibility: Das ___ stimmen.', 'mag'],
  ['Which modal expresses about 95% certainty?', 'müssen'], ['Which form typically expresses strong probability?', 'dürfte'],
  ['Das ___ unmöglich wahr sein. (disbelief)', 'kann'], ['Er ___ im Stau stehen. (one possibility)', 'könnte'],
  ['Die Lieferung ___ morgen eintreffen. (likely)', 'dürfte'], ['Es ___ ein Irrtum sein. (possible)', 'könnte'],
  ['müssen is stronger than ___.', 'dürfte'], ['mögen often adds a ___ nuance.', 'concessive'],
], 'Use müssen for near certainty, dürfte for strong probability, könnte/kann for possibility and mag for a possible concessive assessment.');

const rumorSollen = bank([
  ['Der Chef ___ sehr streng sein. (people say)', 'soll'], ['In Berlin ___ es geschneit haben. (report)', 'soll'],
  ['Subjective sollen reports information from a third-party ___.', 'source'], ['It is equivalent to Man sagt, ___.', 'dass'],
  ['Die Firma ___ verkauft werden.', 'soll'], ['Der Politiker ___ zurückgetreten sein.', 'soll'],
  ['The speaker does not take full ___ for the report.', 'responsibility'], ['Das Restaurant ___ ausgezeichnet sein.', 'soll'],
  ['Die Preise ___ bald steigen. (plural subject)', 'sollen'], ['Er ___ Millionen verdient haben.', 'soll'],
  ['Apparently / is said to → ___.', 'sollen'], ['Rumor is different from an objective ___.', 'obligation'],
], 'Subjective sollen means that something is said or reported; the speaker attributes the information to another source.');

const claimWollen = bank([
  ['Er ___ den Minister kennen. (claims)', 'will'], ['Sie ___ das Geld nicht gestohlen haben.', 'will'],
  ['Subjective wollen reports the subject’s own ___.', 'claim'], ['The speaker often signals ___.', 'doubt'],
  ['Er ___ alles allein gemacht haben.', 'will'], ['Die Zeugin ___ nichts gesehen haben.', 'will'],
  ['Plural: Sie ___ davon nichts gewusst haben.', 'wollen'], ['Er behauptet, dass ... → Er ___ ...', 'will'],
  ['The subject makes a statement about ___.', 'themselves'], ['Sie ___ die Lösung gefunden haben.', 'will'],
  ['Claims to have → will ... ___ haben.', 'Partizip II'], ['Subjective wollen is not a literal expression of ___.', 'desire'],
], 'Subjective wollen means to claim; the subject makes a statement about themselves and the speaker often keeps a distance from it.');

const modalPast = bank([
  ['Er muss krank ___ sein.', 'gewesen'], ['Du musst den Schlüssel vergessen ___.', 'haben'],
  ['Er soll im Lotto gewonnen ___.', 'haben'], ['Sie dürfte schon angekommen ___.', 'sein'],
  ['Past assumption uses modal present + ___.', 'Infinitiv II'], ['Infinitiv II is Partizip II + haben or ___.', 'sein'],
  ['Das kann ein Fehler gewesen ___.', 'sein'], ['Er will nichts bemerkt ___.', 'haben'],
  ['Sie muss früh aufgestanden ___.', 'sein'], ['Der Zug dürfte schon abgefahren ___.', 'sein'],
  ['The modal stays in the present because the assessment happens ___.', 'now'], ['The event evaluated by the speaker lies in the ___.', 'past'],
], 'For assumptions about the past, keep the modal in the present and use Infinitiv II: Partizip II + haben/sein.');

const modalSummary = bank([
  ['“I am nearly certain” → ___.', 'müssen'], ['“It is very likely” → ___.', 'dürfte'],
  ['“It is possible” → ___.', 'könnte'], ['“People say that” → ___.', 'sollen'],
  ['“He claims that” → ___.', 'wollen'], ['“It is impossible” → ___.', 'kann nicht'],
  ['Das ___ stimmen, aber ich zweifle. (may)', 'mag'], ['Er ___ zu Hause sein; das Licht brennt.', 'muss'],
  ['Sie ___ morgen kommen; es ist wahrscheinlich.', 'dürfte'], ['Er ___ den Zeugen kennen, behauptet er.', 'will'],
  ['Die Insel ___ unbewohnt sein, heißt es.', 'soll'], ['Das ___ ein Zufall sein. (possible)', 'könnte'],
], 'Choose the modal that precisely matches certainty, possibility, hearsay, personal claim or impossibility.');

const nDeclension = bank([
  ['Ich sehe den ___. (Student)', 'Studenten'], ['Ich helfe dem ___. (Kollege)', 'Kollegen'],
  ['Die Arbeit des ___ ist gut. (Journalist)', 'Journalisten'], ['Der ___ kommt. (Kunde, nominative)', 'Kunde'],
  ['Only the ___ normally has no -(e)n ending.', 'nominative'], ['Student takes -en in accusative, dative and ___.', 'genitive'],
  ['Wir sprechen mit dem ___. (Nachbar)', 'Nachbarn'], ['Sie besucht den ___. (Junge)', 'Jungen'],
  ['Der Name des ___ steht hier. (Mensch)', 'Menschen'], ['Ich kenne einen ___. (Biologe)', 'Biologen'],
  ['Das gehört dem ___. (Tourist)', 'Touristen'], ['N-Deklination mainly affects ___ nouns.', 'masculine'],
], 'Weak masculine nouns keep the bare nominative but take -(e)n in the accusative, dative and genitive.');

const nGroups = bank([
  ['der Junge → den ___.', 'Jungen'], ['der Franzose → mit dem ___.', 'Franzosen'],
  ['der Student → des ___.', 'Studenten'], ['der Journalist → einen ___.', 'Journalisten'],
  ['der Mensch → dem ___.', 'Menschen'], ['der Held → den ___.', 'Helden'],
  ['Typical learned suffix: -ent, -ant, -ist, -at or ___.', '-oge'], ['Many affected nouns denote people or ___.', 'animals'],
  ['der Löwe → des ___.', 'Löwen'], ['der Soldat → mit dem ___.', 'Soldaten'],
  ['der Chinese → einen ___.', 'Chinesen'], ['der Bär → dem ___.', 'Bären'],
], 'Recognize N-Deklination among masculine people and animals ending in -e, nationalities, learned suffixes and key exceptions.');

const nsGroup = bank([
  ['des ___. (Name)', 'Namens'], ['mit dem ___. (Name)', 'Namen'], ['die Kraft des ___. (Gedanke)', 'Gedankens'],
  ['die Form des ___. (Buchstabe)', 'Buchstabens'], ['die Hoffnung des ___. (Friede)', 'Friedens'], ['die Stärke des ___. (Wille)', 'Willens'],
  ['These nouns take -n in accusative/dative but ___ in genitive.', '-ns'], ['Ich kenne den ___. (Name)', 'Namen'],
  ['Er folgt seinem guten ___. (Gedanke)', 'Gedanken'], ['Im ___ des Gesetzes. (Name)', 'Namen'],
  ['The mixed-declension genitive of Name is ___.', 'Namens'], ['The nominative remains der ___.', 'Name'],
], 'The mixed -ns group takes -n outside the nominative and adds -ns in the genitive: Namen/Namens, Gedanken/Gedankens.');

const herrHerz = bank([
  ['Ich sehe den ___. (Herr)', 'Herrn'], ['Ich spreche mit den ___. (plural Herr)', 'Herren'],
  ['Sehr geehrter ___ Müller.', 'Herr'], ['von ganzem ___. (Herz)', 'Herzen'],
  ['die Form des ___. (Herz)', 'Herzens'], ['Ich höre mein ___. (accusative)', 'Herz'],
  ['Herr takes ___ in singular non-nominative cases.', 'Herrn'], ['The plural form is ___.', 'Herren'],
  ['Herz is the notable ___ noun in this pattern.', 'neuter'], ['dem ___ / des Herzens.', 'Herzen'],
  ['Wir danken dem ___.', 'Herrn'], ['Die Gesundheit des ___.', 'Herzens'],
], 'Herr uses Herrn in singular oblique cases and Herren in the plural; Herz has Herzen in the dative and Herzens in the genitive.');

const substantivizedUse = bank([
  ['krank → der ___.', 'Kranke'], ['deutsch → der ___.', 'Deutsche'], ['gut → das ___.', 'Gute'],
  ['A substantivized adjective is written with a capital ___.', 'letter'], ['It still follows adjective ___.', 'declension'],
  ['A profession normally uses a fixed noun such as ___. (doctor)', 'Arzt'], ['der Alte describes a general ___.', 'category'],
  ['reich → ein ___. (rich person)', 'Reicher'], ['jugendlich → der ___.', 'Jugendliche'],
  ['A characteristic used as a person noun can be ___.', 'substantivized'], ['The natural ordinary word for teacher is ___.', 'Lehrer'],
  ['what is new → das ___.', 'Neue'],
], 'Use substantivized adjectives for people or abstract categories when no more natural fixed noun is intended; capitalize them and decline them as adjectives.');

const substantivizedConcept = bank([
  ['der krank__ Mann → der Krank__.', 'e'], ['ein krank__ Mann → ein Krank__.', 'er'],
  ['The omitted noun is understood from the ___.', 'context'], ['Capitalization changes, but the adjective ending ___.', 'remains'],
  ['die arbeitslos__ Frau → die Arbeitslos__.', 'e'], ['etwas neu__ → etwas ___.', 'Neues'],
  ['The article determines weak, mixed or strong ___.', 'declension'], ['der bekannt__ Künstler → der Bekannt__.', 'e'],
  ['eine deutsch__ Frau → eine Deutsch__.', 'e'], ['Substantivized adjectives can refer to people or abstract ___.', 'concepts'],
  ['Nichts gut__ → Nichts ___.', 'Gutes'], ['The initial letter becomes ___.', 'uppercase'],
], 'A substantivized adjective omits the noun but preserves the adjective ending and is capitalized.');

const substantivizedPeople = bank([
  ['der Deutsch__ (nominative)', 'e'], ['ein Deutsch__ (nominative)', 'er'], ['den Deutsch__ (accusative)', 'en'],
  ['mit einem Deutsch__ (dative)', 'en'], ['die Krank__ (feminine nominative)', 'e'], ['eine Krank__ (feminine nominative)', 'e'],
  ['mit der Krank__ (dative)', 'en'], ['Ich helfe dem Arbeitslos__.', 'en'], ['Ein Jugendlich__ wartet.', 'er'],
  ['Wir besuchen eine Bekannt__.', 'e'], ['Der Reisend__ fragt nach dem Weg.', 'e'], ['Ich spreche mit einem Reisend__.', 'en'],
], 'Substantivized person adjectives take ordinary adjective endings according to gender, case and determiner.');

const substantivizedAbstract = bank([
  ['etwas Gut___.', 'es'], ['nichts Neu___.', 'es'], ['viel Interessant___.', 'es'],
  ['das Schön___ im Leben.', 'e'], ['alles Wichtig___.', 'e'], ['im Allgemein___.', 'en'],
  ['Neuter abstract forms often end in -es after etwas/nichts/___.', 'viel'], ['The definite article usually gives a weak ending: das Gut___.', 'e'],
  ['Wir sprechen über das Wesentlich___.', 'e'], ['Er erzählt nichts Besonder___.', 'es'],
  ['Ich habe etwas Merkwürdig___ gesehen.', 'es'], ['Vom Neu___ zum Alten.', 'en'],
], 'Abstract substantivized adjectives are neuter; after etwas/nichts/viel they commonly take -es, while definite-article forms take weak endings.');

const substantivizedPlural = bank([
  ['die Arbeitslos___.', 'en'], ['viele Arbeitslos___.', 'e'], ['alle Reisend___.', 'en'],
  ['einige Bekannt___.', 'e'], ['mit den Angestellt___.', 'en'], ['beide Deutsch___.', 'en'],
  ['After die/alle/beide, plural normally takes ___.', '-en'], ['After viele/einige without a strong determiner, plural often takes ___.', '-e'],
  ['Wir helfen mehreren Bedürftig___.', 'en'], ['Die Verletz___ wurden behandelt.', 'en'],
  ['Viele Jugendlich___ nutzen das Angebot.', 'e'], ['Sämtliche Beteilig___ wurden informiert.', 'en'],
], 'Plural substantivized adjectives follow adjective declension: weak -en after determiners and often strong -e after quantifiers such as viele/einige.');

const substantivizedMistakes = bank([
  ['Correct capitalization: der deutsche / der Deutsche', 'der Deutsche'], ['Correct: ein Kranke / ein Kranker', 'ein Kranker'],
  ['Correct: etwas Neues / etwas Neue', 'etwas Neues'], ['Correct: mit einem Deutsche / mit einem Deutschen', 'mit einem Deutschen'],
  ['Do not confuse the fixed noun der Student with der ___.', 'Studierende'], ['A substantivized adjective must be both capitalized and ___.', 'declined'],
  ['Correct: viele Arbeitslosen / viele Arbeitslose', 'viele Arbeitslose'], ['Correct: alle Arbeitslose / alle Arbeitslosen', 'alle Arbeitslosen'],
  ['Correct: das Gute / das Gutes', 'das Gute'], ['Correct: nichts Besonderes / nichts Besondere', 'nichts Besonderes'],
  ['The ending cannot be omitted after an ___.', 'article'], ['Meaning and register determine whether a fixed noun is more ___.', 'natural'],
], 'Avoid missing capitalization, wrong adjective endings and unnatural replacement of established nouns by substantivized adjectives.');

const determinerPrinciple = bank([
  ['After a total determiner, the adjective is usually ___.', 'weak'], ['After a partial quantifier, the adjective often carries a ___ ending.', 'strong'],
  ['alle gut__ Freunde.', 'en'], ['viele gut__ Freunde.', 'e'], ['beide neu__ Projekte.', 'en'], ['einige neu__ Projekte.', 'e'],
  ['Total determiners already mark case/gender ___.', 'clearly'], ['Partial determiners leave more marking to the ___.', 'adjective'],
  ['mit allen wichtig__ Dokumenten.', 'en'], ['mit vielen wichtig__ Dokumenten.', 'en'],
  ['The nominative/accusative plural best reveals weak -en versus strong ___.', '-e'], ['The exact ending still depends on case and ___.', 'number'],
], 'Total determiners such as alle/beide normally trigger weak endings; partial quantifiers such as viele/einige often require strong adjective marking.');

const afterAlle = bank([
  ['alle gut__ Freunde.', 'en'], ['mit allen gut__ Freunden.', 'en'], ['für alle wichtig__ Fragen.', 'en'],
  ['trotz aller groß__ Probleme.', 'en'], ['alle neu__ Bücher.', 'en'], ['Alle Beteilig__ wurden informiert.', 'en'],
  ['alle behaves like a ___ determiner.', 'total'], ['The adjective after alle normally takes ___.', '-en'],
  ['mit all__ wichtig__ Material.', 'em, en'], ['all das schön__ Wetter.', 'e'],
  ['Wir haben alle offen__ Punkte geklärt.', 'en'], ['Sie dankt allen anwesend__ Gästen.', 'en'],
], 'alle/all- supplies strong determiner marking, so a following adjective normally has the weak ending -en (with context-sensitive all- forms).');

const afterBeide = bank([
  ['beide neu__ Autos.', 'en'], ['mit beiden neu__ Autos.', 'en'], ['für beide wichtig__ Termine.', 'en'],
  ['Beide Reisend__ warten.', 'en'], ['die Namen beider deutsch__ Autoren.', 'en'], ['beide behaves like a ___ determiner.', 'total'],
  ['A following adjective normally takes ___.', '-en'], ['Wir prüfen beide eingereicht__ Anträge.', 'en'],
  ['Sie sprach mit beiden zuständig__ Personen.', 'en'], ['Beide verletzt__ Männer wurden behandelt.', 'en'],
  ['Trotz beider unerwartet__ Ausfälle ging es weiter.', 'en'], ['Ich kenne beide neu__ Kollegen.', 'en'],
], 'beide carries determiner marking and normally triggers weak -en on the following adjective or substantivized adjective.');

const afterQuantifiers = bank([
  ['viele gut__ Ideen.', 'e'], ['einige interessant__ Bücher.', 'e'], ['manche schwierig__ Fragen.', 'e'],
  ['mehrere neu__ Projekte.', 'e'], ['mit vielen gut__ Ideen.', 'en'], ['wegen einiger technisch__ Probleme.', 'er'],
  ['These quantifiers often require ___ adjective endings.', 'strong'], ['Nominative/accusative plural commonly takes ___.', '-e'],
  ['Dative plural takes ___.', '-en'], ['Mehrere erfahren__ Fachleute antworteten.', 'e'],
  ['Wir diskutieren manche aktuell__ Themen.', 'e'], ['Sie hilft vielen arbeitslos__ Menschen.', 'en'],
], 'After viele, einige, manche and mehrere, adjectives generally use strong endings: -e in nominative/accusative plural, -en in dative, -er in genitive.');

const quantifierSpecial = bank([
  ['wenige gut__ Beispiele.', 'e'], ['sämtliche wichtig__ Unterlagen.', 'en'], ['manch gut__ Rat.', 'er'],
  ['mit wenigen verfügbar__ Mitteln.', 'en'], ['sämtliche offen__ Fragen.', 'en'], ['mancher erfahren__ Kollege.', 'e'],
  ['sämtliche behaves like a ___ determiner.', 'total'], ['wenige generally patterns with ___.', 'viele'],
  ['manch without an ending can be followed by a ___ adjective ending.', 'strong'], ['Wir haben nur wenige konkret__ Hinweise.', 'e'],
  ['Sämtliche betroffen__ Personen wurden informiert.', 'en'], ['Manch unerwartet__ Ergebnis überrascht.', 'es'],
], 'wenige usually takes strong adjective endings, sämtliche weak endings, while manch/mancher varies with its determiner form.');

const declensionComparison = bank([
  ['alle neu__ Bücher.', 'en'], ['viele neu__ Bücher.', 'e'], ['beide neu__ Bücher.', 'en'],
  ['einige neu__ Bücher.', 'e'], ['sämtliche neu__ Bücher.', 'en'], ['wenige neu__ Bücher.', 'e'],
  ['Total determiner → normally weak ending ___.', '-en'], ['Partial quantifier → nominative plural strong ending ___.', '-e'],
  ['mit allen/vielen neu__ Büchern.', 'en'], ['wegen aller neu__ Regeln.', 'en'],
  ['wegen einiger neu__ Regeln.', 'er'], ['The contrast is clearest in nominative and accusative ___.', 'plural'],
], 'Compare total determiners (alle, beide, sämtliche) with partial quantifiers (viele, einige, manche, mehrere, wenige) and select weak or strong endings.');

const declensionTraps = bank([
  ['Correct: alle gute Freunde / alle guten Freunde', 'alle guten Freunde'], ['Correct: viele guten Freunde / viele gute Freunde', 'viele gute Freunde'],
  ['Correct: beide neue Bücher / beide neuen Bücher', 'beide neuen Bücher'], ['Correct: einige neuen Bücher / einige neue Bücher', 'einige neue Bücher'],
  ['Correct: mit viele guten Freunden / mit vielen guten Freunden', 'mit vielen guten Freunden'], ['Correct: sämtliche wichtige Fragen / sämtliche wichtigen Fragen', 'sämtliche wichtigen Fragen'],
  ['Do not apply one ending mechanically to every ___.', 'case'], ['The determiner, case and number must be evaluated ___.', 'together'],
  ['Correct: wegen einige technischer Probleme / wegen einiger technischer Probleme', 'wegen einiger technischer Probleme'], ['Correct: wenige konkrete Hinweise / wenige konkreten Hinweise', 'wenige konkrete Hinweise'],
  ['alle and viele do not trigger the same ending in ___ plural.', 'nominative'], ['Dative plural often hides the contrast because both yield ___.', '-en'],
], 'Avoid overgeneralizing -en: identify the determiner type, then case and number, before selecting the adjective ending.');

const timeCauseChoice = bank([
  ['___ ich ein Kind war, lebte ich in Gent. (one past period)', 'Als'], ['___ ich Zeit habe, lese ich. (repeated/present)', 'Wenn'],
  ['___ dem Essen gingen wir spazieren.', 'Nach'], ['___ wir gegessen hatten, gingen wir spazieren.', 'Nachdem'],
  ['___ dem Schlafen lese ich.', 'Vor'], ['___ ich schlafe, lese ich.', 'Bevor'],
  ['Preposition + noun: nach or nachdem?', 'nach'], ['Conjunction + final verb: nach or nachdem?', 'nachdem'],
  ['___ des Regens blieben wir zu Hause.', 'Wegen'], ['___ es regnete, blieben wir zu Hause.', 'Weil'],
  ['als is used for a one-time event in the ___.', 'past'], ['wenn is used for repeated events or present/___.', 'future'],
  ['___ er die Prüfung bestanden hatte, feierte er.', 'Nachdem'], ['___ der bestandenen Prüfung feierte er.', 'Nach'],
  ['___ ich anrief, war er jedes Mal beschäftigt.', 'Wenn'], ['___ ich gestern anrief, war er beschäftigt.', 'Als'],
], 'Choose a preposition before a noun group and a conjunction before a clause; use als for one-time past events and wenn for repetition, present or future.');

const prepositionalRection = bank([
  ['Sie interessiert sich ___ moderne Kunst. (für)', 'für'], ['Die Entscheidung hängt ___ den Kosten ab. (von)', 'von'],
  ['Er ist stolz ___ seine Leistung. (auf)', 'auf'], ['Wir haben großes Interesse ___ dem Projekt. (an)', 'an'],
  ['Ich freue mich ___ das Ergebnis. (auf)', 'auf'], ['Sie spricht ___ ihrem Chef. (mit)', 'mit'],
  ['sich interessieren ___ + accusative', 'für'], ['abhängen ___ + dative', 'von'],
  ['stolz sein ___ + accusative', 'auf'], ['Interesse haben ___ + dative', 'an'],
], 'Learn the preposition and case as one fixed expression; use a pronominal adverb for things when appropriate.');

const advancedRelatives = bank([
  ['Das ist die Kollegin, mit ___ ich arbeite. (die)', 'der'], ['Das ist das Thema, über ___ wir gesprochen haben. (das)', 'das'],
  ['Der Mann, ___ Auto vor dem Haus steht, wartet draußen. (whose)', 'dessen'], ['Die Frau, ___ Sohn hier studiert, wohnt nebenan. (whose)', 'deren'],
  ['___ regelmäßig übt, der macht Fortschritte. (whoever)', 'Wer'], ['Was du sagst, ___ verstehe ich. (that)', 'das'],
  ['Use the relative pronoun’s ___ inside its clause.', 'case'], ['Genitive masculine/neuter relative pronoun:', 'dessen'],
  ['Genitive feminine/plural relative pronoun:', 'deren'], ['Wer …, ___ … expresses “whoever …”.', 'der'],
], 'Choose the relative pronoun by its grammatical role inside the relative clause, including preposition and genitive forms.');

const modalParticles = bank([
  ['Komm ___ mal vorbei! (soft, friendly request)', 'doch'], ['Mach ___ die Tür zu! (casual request)', 'mal'],
  ['Das ist ___ interessant. (shared surprise)', 'ja'], ['Er ist ___ schon zu Hause. (cautious assumption)', 'wohl'],
  ['___, das habe ich nicht gewusst! (emphasis)', 'Ach'], ['Du kannst ___ mitkommen. (after all)', 'doch'],
  ['Modal particles change the speaker’s ___, not the basic fact.', 'attitude'], ['___ makes a request sound casual.', 'mal'],
  ['___ often marks information shared or obvious to both speakers.', 'ja'], ['___ expresses a cautious assumption.', 'wohl'],
], 'Modal particles are situation-dependent; learn their pragmatic effect in complete utterances rather than translating them literally.');

const modalClauses = bank([
  ['Man lernt schneller, ___ man regelmäßig wiederholt. (by)', 'indem'], ['Er spart Geld, ___ er weniger ausgibt. (by the fact that)', 'dadurch, dass'],
  ['Er tut so, ___ er alles wüsste. (as if)', 'als ob'], ['Sie ging, ___ sie sich verabschiedete. (without)', 'ohne dass'],
  ['___ man täglich übt, verbessert man sich. (by)', 'Indem'], ['Use ___ for an unreal comparison.', 'als ob'],
  ['Use ___ to express the means or method.', 'indem'], ['Use ___ to stress the result-producing mechanism.', 'dadurch, dass'],
  ['In a modal subordinate clause, the finite verb goes to the ___.', 'end'], ['Er tut so, als ___ er nichts davon. (wissen)', 'wüsste'],
], 'Use indem, dadurch dass, als ob and ohne dass to express manner, mechanism, comparison and accompanying circumstance; keep verb-final order.');

const pronominalAdverbs = bank([
  ['Wir sprechen ___, und ich freue mich darauf. (about it)', 'darüber'], ['___ wartest du? – Auf den Bus. (what for)', 'Worauf'],
  ['Sie denkt ___ nach. (about it)', 'darüber'], ['Ich erinnere mich ___ gern. (of it)', 'daran'],
  ['Er interessiert sich ___ . (for it)', 'dafür'], ['___ hast du Angst? – Vor Spinnen. (what of)', 'Wovor'],
  ['da(r)- + preposition refers to a ___, not usually a person.', 'thing'], ['wo(r)- + preposition is used in ___ or relative clauses.', 'questions'],
  ['For a person, say mit ___, not damit. (him)', 'ihm'], ['womit means “with ___”.', 'what'],
], 'Use da(r)- and wo(r)- compounds for things; keep preposition plus personal pronoun for people.');

const infinitiveWordOrder = bank([
  ['Sie spart Geld, ___ nächstes Jahr reisen zu können. (in order to)', 'um'], ['Er ging, ___ sich zu verabschieden. (without)', 'ohne'],
  ['Statt ___ warten, rief sie an. (to wait)', 'zu'], ['___ er wenig Zeit hat, arbeitet er weiter. (although)', 'Obwohl'],
  ['In a main clause, the conjugated verb is normally in position ___.', '2'], ['In a subordinate clause, the finite verb goes to the ___.', 'end'],
  ['Use ___ … zu when the subjects are the same and the purpose is expressed.', 'um'], ['Use ohne … ___ for a negative accompanying action.', 'zu'],
  ['Correct: Er hat den Bericht nicht gelesen / Er nicht hat den Bericht gelesen.', 'Er hat den Bericht nicht gelesen'], ['Correct: Heute ___ ich den Bericht fertig. (schreiben)', 'schreibe'],
], 'Use um/ohne/statt + zu when the subject is shared, and preserve German verb-second or verb-final word order.');

const topics: Record<string, Item[]> = {
  'b2-1-1': kiUse, 'b2-1-2': kiForms, 'b2-1-3': kiSubstitution, 'b2-1-4': kiTenses, 'b2-1-5': kiTraps,
  'b2-2-1': passiveLogic, 'b2-2-2': stateTenses, 'b2-2-3': passivePossible, 'b2-2-4': passiveConfusion,
  'b2-3-1': passivePurpose, 'b2-3-2': sichLassen, 'b2-3-3': seinZu, 'b2-3-4': passiveAdjectives, 'b2-3-5': reflexivePassive, 'b2-3-6': passiveEquivalents,
  'b2-4-1': nominalPurpose, 'b2-4-2': nominalMechanics, 'b2-4-3': nominalConnectors, 'b2-4-4': nominalComplements, 'b2-4-5': nounFormation,
  'b2-5-1': participleConcept, 'b2-5-2': partOne, 'b2-5-3': partTwo, 'b2-5-4': extendedAttribute, 'b2-5-5': gerundive, 'b2-5-6': participleEndings,
  'b2-6-1': connectorPurpose, 'b2-6-2': doubleConnectors, 'b2-6-3': proportional, 'b2-6-4': twoSides, 'b2-6-5': fallsSofern,
  'b2-7-1': modalConcept, 'b2-7-2': probability, 'b2-7-3': rumorSollen, 'b2-7-4': claimWollen, 'b2-7-5': modalPast, 'b2-7-6': modalSummary,
  'b2-8-1': nDeclension, 'b2-8-1-1': nDeclension, 'b2-8-1-2': nGroups, 'b2-8-1-3': nsGroup, 'b2-8-1-4': herrHerz,
  'b2-8-2': substantivizedUse, 'b2-8-2-1': substantivizedUse, 'b2-8-2-2': substantivizedConcept, 'b2-8-2-3': substantivizedPeople,
  'b2-8-2-4': substantivizedAbstract, 'b2-8-2-5': substantivizedPlural, 'b2-8-2-6': substantivizedMistakes,
  'b2-8-3': determinerPrinciple, 'b2-8-3-1': determinerPrinciple, 'b2-8-3-2': afterAlle, 'b2-8-3-3': afterBeide,
  'b2-8-3-4': afterQuantifiers, 'b2-8-3-5': quantifierSpecial, 'b2-8-3-6': declensionComparison, 'b2-8-3-7': declensionTraps,
  'b2-9-1': timeCauseChoice,
  'b2-10-1': prepositionalRection, 'b2-10-2': advancedRelatives, 'b2-10-3': modalParticles,
  'b2-10-4': modalClauses, 'b2-10-5': pronominalAdverbs, 'b2-10-6': infinitiveWordOrder,
};

export const B2_PRACTICE_EXERCISES: GrammarExercise[] = Object.entries(topics).flatMap(([topicId, items]) => topic(topicId, items));
