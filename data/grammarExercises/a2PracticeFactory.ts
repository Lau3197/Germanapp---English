import { GrammarExercise, LanguageLevel } from '../../types';

type Item = { prompt: string; answer: string; explanation: string; acceptedAnswers?: string[] };
type Row = readonly [string, string];

const A2 = LanguageLevel.A2;
const labels = ['Review', 'Use it in context', 'Check the contrast', 'Apply independently'];
const stages: NonNullable<GrammarExercise['stage']>[] = ['guided', 'controlled', 'contrast', 'independent'];
const lower = (answer: string) => [answer.toLocaleLowerCase('de-DE')];
const item = (prompt: string, answer: string, explanation: string): Item => ({ prompt, answer, explanation, acceptedAnswers: lower(answer) });
const rows = (values: readonly Row[], prompt: (left: string) => string, explanation: string) =>
  values.map(([left, answer]) => item(prompt(left), answer, explanation));
const topic = (topicId: string, items: Item[]): GrammarExercise[] => Array.from({ length: 100 }, (_, index) => {
  const source = items[index % items.length];
  const cycle = Math.floor(index / items.length);
  return {
    ...source,
    id: `${topicId}-ex-${index + 1}`,
    topicId,
    level: A2,
    stage: stages[Math.min(3, Math.floor(index / 25))],
    prompt: cycle === 0 ? source.prompt : `${labels[cycle]}: ${source.prompt}`,
  };
});

const tenseChoice = rows([
  ['everyday spoken conversation', 'Perfekt'], ['a novel or written story', 'Präteritum'], ['chatting about yesterday', 'Perfekt'],
  ['a newspaper narrative', 'Präteritum'], ['spoken German with sein', 'Präteritum'], ['spoken German with haben', 'Präteritum'],
  ['telling a friend what happened', 'Perfekt'], ['a literary biography', 'Präteritum'], ['a casual phone call', 'Perfekt'],
  ['a written fairy tale', 'Präteritum'], ['describing a completed trip aloud', 'Perfekt'], ['a historical narrative', 'Präteritum'],
  ['asking what someone did yesterday', 'Perfekt'], ['a police report in writing', 'Präteritum'], ['spoken past with a modal verb', 'Präteritum'],
  ['an informal conversation', 'Perfekt'], ['a short story', 'Präteritum'], ['a personal conversation about dinner', 'Perfekt'],
  ['a written account of events', 'Präteritum'], ['talking about the weekend', 'Perfekt'], ['a book chapter', 'Präteritum'],
  ['spoken German with war', 'Präteritum'], ['spoken German with hatte', 'Präteritum'], ['telling a colleague about a meeting', 'Perfekt'],
  ['an everyday answer to “Was hast du gemacht?”', 'Perfekt'],
] as const, left => `Which past tense is the normal default for ${left}? (Perfekt / Präteritum)`, 'Perfekt is the conversational default; Präteritum dominates written narrative and is common in speech with sein, haben and modal verbs.');

const perfektData = [
  ['lernen', 'hat gelernt'], ['arbeiten', 'hat gearbeitet'], ['kaufen', 'hat gekauft'], ['machen', 'hat gemacht'], ['spielen', 'hat gespielt'],
  ['sehen', 'hat gesehen'], ['schreiben', 'hat geschrieben'], ['essen', 'hat gegessen'], ['trinken', 'hat getrunken'], ['lesen', 'hat gelesen'],
  ['gehen', 'ist gegangen'], ['kommen', 'ist gekommen'], ['fahren', 'ist gefahren'], ['fliegen', 'ist geflogen'], ['laufen', 'ist gelaufen'],
  ['reisen', 'ist gereist'], ['bleiben', 'ist geblieben'], ['aufstehen', 'ist aufgestanden'], ['einschlafen', 'ist eingeschlafen'], ['werden', 'ist geworden'],
  ['besuchen', 'hat besucht'], ['telefonieren', 'hat telefoniert'], ['finden', 'hat gefunden'], ['nehmen', 'hat genommen'], ['bringen', 'hat gebracht'],
] as const;
const perfekt = rows(perfektData, verb => `Complete with the third-person Perfekt form of “${verb}”: Er/Sie ___.`, 'Perfekt uses present-tense haben or sein plus Participle II at the end.');

const prefixParticiples = rows([
  ['aufstehen', 'aufgestanden'], ['einkaufen', 'eingekauft'], ['anrufen', 'angerufen'], ['mitbringen', 'mitgebracht'], ['abfahren', 'abgefahren'],
  ['ankommen', 'angekommen'], ['ausgehen', 'ausgegangen'], ['zurückkommen', 'zurückgekommen'], ['zumachen', 'zugemacht'], ['vorbereiten', 'vorbereitet'],
  ['besuchen', 'besucht'], ['verstehen', 'verstanden'], ['erzählen', 'erzählt'], ['entdecken', 'entdeckt'], ['gefallen', 'gefallen'],
  ['empfehlen', 'empfohlen'], ['verkaufen', 'verkauft'], ['bestellen', 'bestellt'], ['erklären', 'erklärt'], ['bezahlen', 'bezahlt'],
  ['studieren', 'studiert'], ['telefonieren', 'telefoniert'], ['reparieren', 'repariert'], ['organisieren', 'organisiert'], ['fotografieren', 'fotografiert'],
] as const, verb => `Write Participle II: ${verb} → ___.`, 'Separable prefixes insert ge-; inseparable prefixes and verbs ending in -ieren do not take ge-.');

const mixedParticiples = rows([
  ['bringen', 'gebracht'], ['denken', 'gedacht'], ['kennen', 'gekannt'], ['nennen', 'genannt'], ['rennen', 'gerannt'],
  ['wissen', 'gewusst'], ['brennen', 'gebrannt'], ['senden', 'gesendet'], ['können', 'gekonnt'], ['müssen', 'gemusst'],
  ['wollen', 'gewollt'], ['dürfen', 'gedurft'], ['sollen', 'gesollt'], ['mögen', 'gemocht'], ['Ich habe nicht kommen ___. (können)', 'können'],
  ['Er hat früh aufstehen ___. (müssen)', 'müssen'], ['Wir haben länger bleiben ___. (dürfen)', 'dürfen'], ['Sie hat das machen ___. (wollen)', 'wollen'],
  ['Du hast mehr lernen ___. (sollen)', 'sollen'], ['Ich habe ihn nicht ___. (mögen)', 'gemocht'],
  ['Das Feuer hat ___. (brennen)', 'gebrannt'], ['Sie hat mich Anna ___. (nennen)', 'genannt'], ['Wir haben die Antwort ___. (wissen)', 'gewusst'],
  ['Er ist schnell ___. (rennen)', 'gerannt'], ['Ich habe an dich ___. (denken)', 'gedacht'],
] as const, left => left.includes('___') ? left : `Write Participle II: ${left} → ___.`, 'Mixed verbs change their stem but end in -t. With a second infinitive, a modal uses the Ersatzinfinitiv.');

const pastSeinHaben = rows([
  ['Ich ___ gestern müde. (sein)', 'war'], ['Du ___ zu Hause. (sein)', 'warst'], ['Er ___ krank. (sein)', 'war'], ['Wir ___ in Berlin. (sein)', 'waren'],
  ['Ihr ___ sehr nett. (sein)', 'wart'], ['Sie ___ im Kino. (sein, plural)', 'waren'], ['Das Wetter ___ gut. (sein)', 'war'],
  ['Ich ___ keine Zeit. (haben)', 'hatte'], ['Du ___ Hunger. (haben)', 'hattest'], ['Sie ___ einen Termin. (haben)', 'hatte'],
  ['Wir ___ Glück. (haben)', 'hatten'], ['Ihr ___ viele Fragen. (haben)', 'hattet'], ['Sie ___ ein Auto. (haben, plural)', 'hatten'],
  ['Wo ___ du gestern? (sein)', 'warst'], ['Früher ___ ich einen Hund. (haben)', 'hatte'], ['Das ___ toll! (sein)', 'war'],
  ['Warum ___ ihr spät? (sein)', 'wart'], ['Die Kinder ___ müde. (sein)', 'waren'], ['Anna ___ Fieber. (haben)', 'hatte'],
  ['Meine Eltern ___ Besuch. (haben)', 'hatten'], ['Der Film ___ lang. (sein)', 'war'], ['Wir ___ wenig Geld. (haben)', 'hatten'],
  ['Herr Klein, wo ___ Sie? (sein)', 'waren'], ['___ du Angst? (haben)', 'Hattest'], ['___ ihr im Urlaub? (sein)', 'Wart'],
] as const, left => left, 'In spoken German, sein and haben normally use Präteritum: war/waren and hatte/hatten.');

const modalPast = rows([
  ['Ich ___ nicht kommen. (können)', 'konnte'], ['Du ___ gut schwimmen. (können)', 'konntest'], ['Wir ___ das lösen. (können)', 'konnten'],
  ['Ich ___ arbeiten. (müssen)', 'musste'], ['Er ___ früh gehen. (müssen)', 'musste'], ['Ihr ___ warten. (müssen)', 'musstet'],
  ['Sie ___ ins Kino gehen. (wollen)', 'wollte'], ['Wir ___ bestellen. (wollen)', 'wollten'], ['Du ___ anrufen. (wollen)', 'wolltest'],
  ['Ich ___ länger bleiben. (dürfen)', 'durfte'], ['Er ___ nicht ausgehen. (dürfen)', 'durfte'], ['Ihr ___ hier spielen. (dürfen)', 'durftet'],
  ['Du ___ mehr lernen. (sollen)', 'solltest'], ['Wir ___ helfen. (sollen)', 'sollten'], ['Sie ___ den Arzt anrufen. (sollen)', 'sollte'],
  ['Ich ___ den Film. (mögen)', 'mochte'], ['Die Kinder ___ Pizza. (mögen)', 'mochten'], ['Du ___ das Buch. (mögen)', 'mochtest'],
  ['___ du gestern kommen? (können)', 'Konntest'], ['___ ihr lange warten? (müssen)', 'Musstet'], ['Warum ___ er gehen? (wollen)', 'wollte'],
  ['Wir ___ nicht laut sein. (dürfen)', 'durften'], ['Sie ___ pünktlich sein. (sollen, plural)', 'sollten'],
  ['Herr Weber, ___ Sie helfen? (können)', 'konnten'], ['Als Kind ___ ich keinen Spinat. (mögen)', 'mochte'],
] as const, left => left, 'Modal verbs commonly use Präteritum in speech and place the second verb in the infinitive at the end.');

const adjectiveUse = rows([
  ['Das Auto ist ___. (schnell)', 'schnell'], ['Das ___ Auto fährt schnell. (schnell)', 'schnelle'], ['Die Suppe ist ___. (warm)', 'warm'],
  ['Die ___ Suppe schmeckt gut. (warm)', 'warme'], ['Der Film bleibt ___. (interessant)', 'interessant'], ['Der ___ Film dauert lange. (interessant)', 'interessante'],
  ['Das Kind wirkt ___. (müde)', 'müde'], ['Das ___ Kind schläft. (müde)', 'müde'], ['Die Wohnung ist ___. (klein)', 'klein'],
  ['Die ___ Wohnung ist teuer. (klein)', 'kleine'], ['Der Kaffee wird ___. (kalt)', 'kalt'], ['Der ___ Kaffee steht hier. (kalt)', 'kalte'],
  ['Die Musik klingt ___. (schön)', 'schön'], ['Die ___ Musik gefällt mir. (schön)', 'schöne'], ['Das Wetter bleibt ___. (gut)', 'gut'],
  ['Das ___ Wetter kommt zurück. (gut)', 'gute'], ['Der Mann ist ___. (freundlich)', 'freundlich'], ['Der ___ Mann hilft uns. (freundlich)', 'freundliche'],
  ['Die Aufgabe scheint ___. (leicht)', 'leicht'], ['Die ___ Aufgabe ist fertig. (leicht)', 'leichte'], ['Das Brot riecht ___. (frisch)', 'frisch'],
  ['Das ___ Brot kostet zwei Euro. (frisch)', 'frische'], ['Die Straße ist ___. (lang)', 'lang'], ['Die ___ Straße führt ins Zentrum. (lang)', 'lange'],
  ['Der Computer bleibt ___. (neu)', 'neu'],
] as const, left => left, 'Predicative adjectives remain unchanged; attributive adjectives before a noun take an ending.');

const weakAdj = rows([
  ['der ___ Mann (gut)', 'gute'], ['die ___ Frau (nett)', 'nette'], ['das ___ Kind (klein)', 'kleine'], ['die ___ Leute (jung)', 'jungen'],
  ['den ___ Mann (gut)', 'guten'], ['die ___ Tasche (neu)', 'neue'], ['das ___ Buch (alt)', 'alte'], ['die ___ Bücher (alt)', 'alten'],
  ['dem ___ Mann (gut)', 'guten'], ['der ___ Frau (nett)', 'netten'], ['dem ___ Kind (klein)', 'kleinen'], ['den ___ Kindern (klein)', 'kleinen'],
  ['dieser ___ Film (lang)', 'lange'], ['diesen ___ Film (lang)', 'langen'], ['diesem ___ Film (lang)', 'langen'],
  ['jede ___ Woche (neu)', 'neue'], ['jeden ___ Tag (lang)', 'langen'], ['mit der ___ Bahn (schnell)', 'schnellen'],
  ['für das ___ Auto (rot)', 'rote'], ['bei den ___ Freunden (gut)', 'guten'], ['über den ___ Tisch (rund)', 'runden'],
  ['in dem ___ Haus (groß)', 'großen'], ['die ___ Jacke (blau)', 'blaue'], ['der ___ Lehrer (freundlich)', 'freundliche'],
  ['den ___ Zug (schnell)', 'schnellen'],
] as const, left => `Complete the weak adjective ending: ${left}.`, 'After a definite-article word, adjectives normally take -e in the basic nominative forms and -en elsewhere.');

const mixedAdj = rows([
  ['ein ___ Mann (gut)', 'guter'], ['eine ___ Frau (nett)', 'nette'], ['ein ___ Kind (klein)', 'kleines'], ['keine ___ Leute (jung)', 'jungen'],
  ['einen ___ Mann (gut)', 'guten'], ['eine ___ Tasche (neu)', 'neue'], ['ein ___ Buch (alt)', 'altes'], ['keine ___ Bücher (alt)', 'alten'],
  ['einem ___ Mann (gut)', 'guten'], ['einer ___ Frau (nett)', 'netten'], ['einem ___ Kind (klein)', 'kleinen'], ['keinen ___ Kindern (klein)', 'kleinen'],
  ['mein ___ Bruder (alt)', 'alter'], ['meine ___ Schwester (jung)', 'junge'], ['mein ___ Handy (neu)', 'neues'],
  ['meinen ___ Bruder (alt)', 'alten'], ['deine ___ Wohnung (schön)', 'schöne'], ['unser ___ Auto (rot)', 'rotes'],
  ['mit meinem ___ Freund (gut)', 'guten'], ['bei deiner ___ Mutter (nett)', 'netten'], ['für ihr ___ Kind (klein)', 'kleines'],
  ['kein ___ Problem (groß)', 'großes'], ['keinen ___ Kaffee (kalt)', 'kalten'], ['eure ___ Freunde (neu)', 'neuen'],
  ['Ihr ___ Termin (wichtig)', 'wichtiger'],
] as const, left => `Complete the mixed adjective ending: ${left}.`, 'After ein, kein or a possessive, the adjective supplies missing gender information and otherwise usually takes -en.');

const strongAdj = rows([
  ['___ Kaffee (gut, nominative)', 'guter'], ['___ Milch (frisch, nominative)', 'frische'], ['___ Wasser (kalt, nominative)', 'kaltes'], ['___ Freunde (gut, nominative)', 'gute'],
  ['Ich trinke ___ Kaffee. (gut)', 'guten'], ['Ich kaufe ___ Milch. (frisch)', 'frische'], ['Ich brauche ___ Wasser. (kalt)', 'kaltes'], ['Ich treffe ___ Freunde. (gut)', 'gute'],
  ['mit ___ Kaffee (gut)', 'gutem'], ['mit ___ Milch (frisch)', 'frischer'], ['mit ___ Wasser (kalt)', 'kaltem'], ['mit ___ Freunden (gut)', 'guten'],
  ['___ Wein schmeckt gut. (rot)', 'Roter'], ['___ Suppe ist gesund. (warm)', 'Warme'], ['___ Brot liegt hier. (frisch)', 'Frisches'],
  ['Wir essen ___ Obst. (frisch)', 'frisches'], ['Er trinkt ___ Tee. (heiß)', 'heißen'], ['Sie kauft ___ Äpfel. (grün)', 'grüne'],
  ['aus ___ Interesse (groß)', 'großem'], ['bei ___ Musik (laut)', 'lauter'], ['mit ___ Kindern (klein)', 'kleinen'],
  ['___ Hilfe ist willkommen. (schnell)', 'Schnelle'], ['___ Deutsch ist schwer. (korrekt)', 'Korrektes'],
  ['Ich wünsche ___ Dank. (viel)', 'vielen'], ['Wir brauchen ___ Ideen. (neu)', 'neue'],
] as const, left => `Complete the strong adjective ending: ${left}.`, 'Without an article, the adjective carries the gender and case ending itself.');

const adjectiveStrategy = rows([
  ['der gute Mann: article type', 'rich article'], ['ein guter Mann: article type', 'poor article'], ['guter Kaffee: article type', 'no article'],
  ['After der/die/das, the usual adjective endings are...', '-e or -en'], ['Without an article, the adjective follows...', 'strong declension'],
  ['After ein/mein/kein, use...', 'mixed declension'], ['der neu___ Film', 'e'], ['den neu___ Film', 'en'], ['ein neu___ Film', 'er'],
  ['ein neu___ Auto', 'es'], ['eine neu___ Wohnung', 'e'], ['mit einem neu___ Auto', 'en'], ['kalt___ Wasser', 'es'],
  ['frisch___ Milch', 'e'], ['gut___ Kaffee', 'er'], ['mit gut___ Kaffee', 'em'], ['wegen des schlecht___ Wetters', 'en'],
  ['In masculine/neuter genitive, the noun usually takes...', '-(e)s'], ['The adjective after dieser uses...', 'weak declension'],
  ['The adjective after mein uses...', 'mixed declension'], ['The adjective with zero article uses...', 'strong declension'],
  ['die gut___ Leute', 'en'], ['keine gut___ Ideen', 'en'], ['gut___ Freunde', 'e'], ['dem alt___ Mann', 'en'],
] as const, left => `Apply the adjective strategy: ${left}.`, 'First identify the article type, then choose weak, mixed or strong declension.');

const dativeArticles = rows([
  ['Ich helfe ___ Mann. (der)', 'dem'], ['Ich helfe ___ Frau. (die)', 'der'], ['Ich helfe ___ Kind. (das)', 'dem'], ['Ich helfe ___ Kindern. (die, plural)', 'den'],
  ['mit ___ Bruder (ein)', 'einem'], ['mit ___ Schwester (eine)', 'einer'], ['mit ___ Kind (ein)', 'einem'], ['mit ___ Freunden (keine)', 'keinen'],
  ['bei ___ Arzt (der)', 'dem'], ['bei ___ Arbeit (die)', 'der'], ['aus ___ Haus (das)', 'dem'], ['von ___ Eltern (die, plural)', 'den'],
  ['zu ___ Bahnhof (der)', 'dem'], ['zu ___ Schule (die)', 'der'], ['Ich gebe ___ Mann das Buch. (der)', 'dem'],
  ['Sie schenkt ___ Kind ein Spielzeug. (das)', 'dem'], ['Wir danken ___ Leuten. (die, plural)', 'den'], ['Er spricht mit ___ Kollegin. (eine)', 'einer'],
  ['Das gehört ___ Nachbarn. (der)', 'dem'], ['Ich fahre mit ___ Bus. (der)', 'dem'], ['Wir wohnen bei ___ Familie. (eine)', 'einer'],
  ['Sie kommt aus ___ Stadt. (die)', 'der'], ['Er hilft sein___ Bruder.', 'em'], ['Sie hilft ihr___ Mutter.', 'er'], ['Wir helfen unser___ Freunden.', 'en'],
] as const, left => left, 'Dative articles are dem/der/dem/den; dative plural nouns normally add -n.');

const dativePronouns = rows([
  ['Kannst du ___ helfen? (ich)', 'mir'], ['Ich schreibe ___ eine E-Mail. (du)', 'dir'], ['Sie gibt ___ das Buch. (er)', 'ihm'],
  ['Das gefällt ___. (sie, singular)', 'ihr'], ['Wir geben ___ Wasser. (es)', 'ihm'], ['Er hilft ___. (wir)', 'uns'],
  ['Ich antworte ___. (ihr)', 'euch'], ['Sie schreibt ___. (sie, plural)', 'ihnen'], ['Wie geht es ___? (Sie)', 'Ihnen'],
  ['Es geht ___ gut. (ich)', 'mir'], ['Das tut ___ leid. (du)', 'dir'], ['Der Film gefällt ___. (er)', 'ihm'],
  ['Die Musik gefällt ___. (sie, singular)', 'ihr'], ['Kann er ___ helfen? (wir)', 'uns'], ['Ich gebe ___ das Ticket. (ihr)', 'euch'],
  ['Der Lehrer erklärt ___ die Regel. (sie, plural)', 'ihnen'], ['Ich danke ___. (Sie)', 'Ihnen'], ['Gib ___ bitte das Salz. (ich)', 'mir'],
  ['Ich zeige ___ die Stadt. (du)', 'dir'], ['Wir wünschen ___ Glück. (er)', 'ihm'], ['Sie erzählt ___ eine Geschichte. (wir)', 'uns'],
  ['Das Essen schmeckt ___. (ihr)', 'euch'], ['Ich schicke ___ die Datei. (sie, singular)', 'ihr'], ['Er bringt ___ Kaffee. (Sie)', 'Ihnen'],
  ['Ich gebe es ___. (er)', 'ihm'],
] as const, left => left, 'Dative pronouns answer “to whom?”: mir, dir, ihm, ihr, uns, euch, ihnen/Ihnen.');

const dativeVerbs = rows([
  ['Kannst du ___ helfen? (ich)', 'mir'], ['Ich danke ___. (du)', 'dir'], ['Das gefällt ___. (er)', 'ihm'], ['Das Buch gehört ___. (sie)', 'ihr'],
  ['Folgen Sie ___! (ich)', 'mir'], ['Bitte antworte ___. (ich)', 'mir'], ['Ich glaube ___. (du)', 'dir'], ['Die Hose passt ___. (sie)', 'ihr'],
  ['Die Suppe schmeckt ___. (wir)', 'uns'], ['Du fehlst ___. (ich)', 'mir'], ['Ich gratuliere ___. (du)', 'dir'], ['Hör ___ zu! (ich)', 'mir'],
  ['Wir helfen ___ Mann. (der)', 'dem'], ['Sie dankt ___ Frau. (die)', 'der'], ['Der Film gefällt ___ Kindern. (die)', 'den'],
  ['Das Auto gehört ___ Nachbarn. (der)', 'dem'], ['Der Hund folgt ___ Kind. (das)', 'dem'], ['Er antwortet ___ Lehrerin. (die)', 'der'],
  ['Ich glaube mein___ Bruder.', 'em'], ['Die Jacke passt mein___ Schwester.', 'er'], ['Der Kuchen schmeckt unser___ Freunden.', 'en'],
  ['Die Familie fehlt ___. (wir)', 'uns'], ['Wir gratulieren ___. (Sie)', 'Ihnen'], ['Hört ___ zu! (wir)', 'uns'],
  ['Das Ergebnis gefällt ___. (sie, plural)', 'ihnen'],
] as const, left => left, 'The verbs helfen, danken, gefallen, gehören, folgen and others require the dative.');

const twoWay = rows([
  ['Ich gehe ___ Kino. (in + das)', 'ins'], ['Ich bin ___ Kino. (in + dem)', 'im'], ['Ich gehe ___ Fenster. (an + das)', 'ans'], ['Ich stehe ___ Fenster. (an + dem)', 'am'],
  ['Ich lege das Buch auf ___ Tisch. (der)', 'den'], ['Das Buch liegt auf ___ Tisch. (der)', 'dem'], ['Ich gehe hinter ___ Haus. (das)', 'das'],
  ['Ich bin hinter ___ Haus. (das)', 'dem'], ['Ich setze mich neben ___. (du)', 'dich'], ['Ich sitze neben ___. (du)', 'dir'],
  ['Ich hänge das Bild über ___ Sofa. (das)', 'das'], ['Das Bild hängt über ___ Sofa. (das)', 'dem'], ['Die Katze läuft unter ___ Tisch. (der)', 'den'],
  ['Die Katze schläft unter ___ Tisch. (der)', 'dem'], ['Ich stelle mich vor ___ Tür. (die)', 'die'], ['Ich stehe vor ___ Tür. (die)', 'der'],
  ['Ich setze mich zwischen ___ Kinder. (die)', 'die'], ['Ich sitze zwischen ___ Kindern. (die)', 'den'],
  ['Wir gehen in ___ Park. (der)', 'den'], ['Wir sind in ___ Park. (der)', 'dem'], ['Er stellt die Lampe neben ___ Bett. (das)', 'das'],
  ['Die Lampe steht neben ___ Bett. (das)', 'dem'], ['Sie hängt die Jacke an ___ Tür. (die)', 'die'], ['Die Jacke hängt an ___ Tür. (die)', 'der'],
  ['Wohin? Choose the case.', 'Akkusativ'],
] as const, left => left, 'Two-way prepositions take accusative for direction (Wohin?) and dative for location (Wo?).');

const fixedPreps = rows([
  ['___ den Regen (through)', 'durch'], ['___ meinen Bruder (for)', 'für'], ['___ den Plan (against)', 'gegen'], ['___ dich (without)', 'ohne'],
  ['___ den Tisch herum (around)', 'um'], ['Das Geschenk ist ___ dich.', 'für'], ['Wir gehen ___ den Park.', 'durch'], ['Ich komme ___ meinen Freund.', 'ohne'],
  ['___ dem Essen (after)', 'nach'], ['___ meiner Mutter (with)', 'mit'], ['___ einem Jahr (since)', 'seit'], ['___ meinem Bruder (from)', 'von'],
  ['___ der Schule (to)', 'zu'], ['Ich komme ___ dem Büro.', 'aus'], ['Er wohnt ___ seinen Eltern.', 'bei'], ['Wir fahren ___ Berlin.', 'nach'],
  ['Das ist ein Brief ___ meiner Schwester.', 'von'], ['Ich gehe ___ Arzt.', 'zum'], ['Sie fährt ___ der Bahn.', 'mit'], ['Er lernt Deutsch ___ einem Monat.', 'seit'],
  ['Accusative or dative after für?', 'Akkusativ'], ['Accusative or dative after ohne?', 'Akkusativ'], ['Accusative or dative after mit?', 'Dativ'],
  ['Accusative or dative after aus?', 'Dativ'], ['Accusative or dative after von?', 'Dativ'],
] as const, left => `Complete: ${left}`, 'durch, für, gegen, ohne and um take accusative; aus, bei, mit, nach, seit, von and zu take dative.');

const coordination = rows([
  ['Ich lerne Deutsch, ___ ich lese viel. (and)', 'und'], ['Ich möchte kommen, ___ ich habe keine Zeit. (but)', 'aber'],
  ['Kommst du mit, ___ bleibst du zu Hause? (or)', 'oder'], ['Ich bleibe zu Hause, ___ ich bin krank. (because, verb position 2)', 'denn'],
  ['Er ist nicht alt, ___ jung.', 'sondern'], ['Ich bin müde, ___ ich arbeite weiter.', 'aber'], ['Wir fahren mit dem Zug ___ wir nehmen den Bus.', 'oder'],
  ['Sie kocht ___ er deckt den Tisch.', 'und'], ['Ich trinke keinen Kaffee, ___ Tee.', 'sondern'], ['Er kommt nicht heute, ___ morgen.', 'sondern'],
  ['Das Hotel ist teuer, ___ es ist schön.', 'aber'], ['Ich rufe an, ___ ich brauche Hilfe.', 'denn'], ['Du kannst warten ___ du kannst gehen.', 'oder'],
  ['Wir lernen ___ wir üben jeden Tag.', 'und'], ['Sie fährt nicht, ___ sie fliegt.', 'sondern'], ['Ich gehe spazieren, ___ es regnet.', 'aber'],
  ['Er bleibt im Bett, ___ er hat Fieber.', 'denn'], ['Möchtest du Tee ___ Kaffee?', 'oder'], ['Anna arbeitet ___ Paul studiert.', 'und'],
  ['Das ist nicht blau, ___ grün.', 'sondern'], ['Ich mag den Film, ___ er ist lang.', 'aber'], ['Wir müssen gehen, ___ es ist spät.', 'denn'],
  ['Kommst du heute ___ morgen?', 'oder'], ['Sie singt ___ er spielt Gitarre.', 'und'], ['Er ist nicht unfreundlich, ___ schüchtern.', 'sondern'],
] as const, left => left, 'Coordinating conjunctions do not change verb position; sondern corrects a negated statement.');

const subordination = rows([
  ['Ich bleibe zu Hause, weil ich krank ___. (sein)', 'bin'], ['Ich hoffe, dass du morgen ___. (kommen)', 'kommst'],
  ['Ich weiß nicht, ob er heute ___. (arbeiten)', 'arbeitet'], ['Ich gehe, obwohl ich müde ___. (sein)', 'bin'],
  ['Wenn es ___, bleibe ich zu Hause. (regnen)', 'regnet'], ['Als ich jung ___, wohnte ich in Gent. (sein)', 'war'],
  ['Während ich ___, liest du. (kochen)', 'koche'], ['Bevor ich ___, rufe ich an. (gehen)', 'gehe'],
  ['Nachdem ich gegessen ___, gehe ich spazieren. (haben)', 'habe'], ['Warte, bis ich ___. (kommen)', 'komme'],
  ['Ich lerne, damit ich die Prüfung ___. (bestehen)', 'bestehe'], ['Ich weiß, dass er um sieben Uhr ___. (aufstehen)', 'aufsteht'],
  ['Sie sagt, dass sie keine Zeit ___. (haben)', 'hat'], ['Er fragt, ob du Deutsch ___. (sprechen)', 'sprichst'],
  ['Wir bleiben hier, weil der Zug spät ___. (sein)', 'ist'], ['Obwohl es kalt ___, gehen wir raus. (sein)', 'ist'],
  ['Wenn du Zeit ___, ruf mich an. (haben)', 'hast'], ['Bevor der Film ___, kaufen wir Popcorn. (beginnen)', 'beginnt'],
  ['Ich warte, bis der Bus ___. (kommen)', 'kommt'], ['Sie spart, damit sie reisen ___. (können)', 'kann'],
  ['Er erzählt, dass er in Berlin ___. (wohnen)', 'wohnt'], ['Ich frage, ob das Geschäft offen ___. (sein)', 'ist'],
  ['Während wir ___, hört er Musik. (arbeiten)', 'arbeiten'], ['Nachdem sie angekommen ___, ruft sie an. (sein)', 'ist'],
  ['Ich gehe schlafen, weil ich früh aufstehen ___. (müssen)', 'muss'],
] as const, left => left, 'A subordinating conjunction sends the conjugated verb to the end of its clause.');

const wennAls = rows([
  ['___ ich Zeit habe, lese ich. (present)', 'Wenn'], ['___ du morgen kommst, gehen wir ins Kino. (future)', 'Wenn'],
  ['___ er kam, brachte er immer Blumen. (repeated past)', 'Wenn'], ['___ ich jung war, lebte ich in Berlin. (one period in the past)', 'Als'],
  ['___ ich ihn zum ersten Mal traf, war er Student.', 'Als'], ['___ es regnet, nehme ich den Bus. (habit)', 'Wenn'],
  ['___ der Film endete, gingen wir nach Hause. (one event)', 'Als'], ['___ wir Urlaub hatten, fuhren wir immer ans Meer. (repeated)', 'Wenn'],
  ['___ ich gestern ankam, war niemand da.', 'Als'], ['___ du Hilfe brauchst, ruf mich an.', 'Wenn'],
  ['___ sie ein Kind war, wohnte sie in Köln.', 'Als'], ['___ er früher zu Besuch kam, kochte er immer.', 'Wenn'],
  ['___ der Krieg endete, war er zehn.', 'Als'], ['___ ich Kaffee trinke, kann ich nicht schlafen.', 'Wenn'],
  ['___ wir uns 2020 trafen, arbeitete sie in Gent.', 'Als'], ['___ ich morgen frei habe, komme ich.', 'Wenn'],
  ['___ die Tür aufging, sah ich Anna.', 'Als'], ['___ die Kinder müde waren, gingen sie immer früh ins Bett.', 'Wenn'],
  ['___ ich 18 wurde, bekam ich ein Auto.', 'Als'], ['___ du in Brüssel bist, besuch uns.', 'Wenn'],
  ['___ er anrief, war es Mitternacht. (one call)', 'Als'], ['___ er anrief, redeten wir jedes Mal lange. (repeated)', 'Wenn'],
  ['___ der Kurs beginnt, müssen alle ruhig sein.', 'Wenn'], ['___ ich das erste Mal Deutsch hörte, verstand ich nichts.', 'Als'],
  ['___ wir Zeit haben, gehen wir spazieren.', 'Wenn'],
] as const, left => left, 'Use wenn for present, future, conditions and repeated events; use als for one-time past events.');

const clauseFirst = rows([
  ['Wenn es regnet, ___ ich zu Hause. (bleiben)', 'bleibe'], ['Weil ich müde bin, ___ ich früh ins Bett. (gehen)', 'gehe'],
  ['Obwohl es kalt ist, ___ wir schwimmen. (gehen)', 'gehen'], ['Als ich Kind war, ___ ich in Hamburg. (wohnen)', 'wohnte'],
  ['Wenn du kommst, ___ wir zusammen. (essen)', 'essen'], ['Weil der Bus spät ist, ___ ich ein Taxi. (nehmen)', 'nehme'],
  ['Obwohl er krank ist, ___ er. (arbeiten)', 'arbeitet'], ['Wenn ich Zeit habe, ___ ich dich an. (rufen)', 'rufe'],
  ['Als der Film endete, ___ wir nach Hause. (gehen)', 'gingen'], ['Bevor ich gehe, ___ ich die Tür. (schließen)', 'schließe'],
  ['Nachdem ich esse, ___ ich Kaffee. (trinken)', 'trinke'], ['Während sie kocht, ___ er den Tisch. (decken)', 'deckt'],
  ['Wenn es warm ist, ___ die Kinder draußen. (spielen)', 'spielen'], ['Weil ich Hunger habe, ___ ich ein Brot. (kaufen)', 'kaufe'],
  ['Obwohl es regnet, ___ sie spazieren. (gehen)', 'geht'], ['Als ich ihn sah, ___ er müde. (sein)', 'war'],
  ['Wenn der Zug kommt, ___ wir ein. (steigen)', 'steigen'], ['Bevor der Kurs beginnt, ___ wir Kaffee. (trinken)', 'trinken'],
  ['Nachdem sie ankommt, ___ sie uns an. (rufen)', 'ruft'], ['Obwohl das Hotel teuer ist, ___ wir dort. (bleiben)', 'bleiben'],
  ['Wenn du lernst, ___ du die Prüfung. (bestehen)', 'bestehst'], ['Weil er kein Auto hat, ___ er Bus. (fahren)', 'fährt'],
  ['Als ich jung war, ___ ich viel Fußball. (spielen)', 'spielte'], ['Wenn ihr fertig seid, ___ ihr gehen. (können)', 'könnt'],
  ['Obwohl sie wenig Zeit hat, ___ sie uns. (helfen)', 'hilft'],
] as const, left => left, 'A subordinate clause in position 1 is followed immediately by the main-clause verb, then the subject.');

const possessives = rows([
  ['Das ist ___ Bruder. (ich)', 'mein'], ['Das ist ___ Schwester. (ich)', 'meine'], ['Ich sehe ___ Bruder. (ich)', 'meinen'],
  ['Ich helfe ___ Schwester. (ich)', 'meiner'], ['Er liest ___ Buch. (er)', 'sein'], ['Sie liest ___ Buch. (sie)', 'ihr'],
  ['Wir besuchen ___ Eltern. (wir)', 'unsere'], ['Wo ist ___ Mutter? (ihr)', 'eure'], ['Ich spreche mit ___ Vater. (ihr)', 'eurem'],
  ['Ist das ___ Auto? (du)', 'dein'], ['Ich kenne ___ Freundin. (du)', 'deine'], ['Er hilft ___ Kind. (er)', 'seinem'],
  ['Sie besucht ___ Mutter. (sie)', 'ihre'], ['Wir verkaufen ___ Wohnung. (wir)', 'unsere'], ['Ihr seht ___ Lehrer. (ihr)', 'euren'],
  ['Sie besuchen ___ Freunde. (sie, plural)', 'ihre'], ['Ist das ___ Pass? (Sie)', 'Ihr'], ['Ich spreche mit ___ Kollegin. (Sie)', 'Ihrer'],
  ['mein + masculine dative', 'meinem'], ['dein + feminine dative', 'deiner'], ['sein + neuter accusative', 'sein'],
  ['unser + plural nominative', 'unsere'], ['euer + feminine nominative', 'eure'], ['ihr + masculine accusative', 'ihren'],
  ['Ihr + plural dative', 'Ihren'],
] as const, left => left, 'Possessives agree with the possessed noun and decline like ein/kein; euer loses its middle e before an ending.');

const comparisons = rows([
  ['schnell → comparative', 'schneller'], ['klein → comparative', 'kleiner'], ['interessant → comparative', 'interessanter'],
  ['gut → comparative', 'besser'], ['viel → comparative', 'mehr'], ['gern → comparative', 'lieber'], ['hoch → comparative', 'höher'],
  ['nah → comparative', 'näher'], ['groß → comparative', 'größer'], ['alt → comparative', 'älter'], ['jung → comparative', 'jünger'],
  ['lang → comparative', 'länger'], ['kurz → comparative', 'kürzer'], ['kalt → comparative', 'kälter'], ['warm → comparative', 'wärmer'],
  ['schnell → am + superlative', 'am schnellsten'], ['gut → am + superlative', 'am besten'], ['gern → am + superlative', 'am liebsten'],
  ['groß → am + superlative', 'am größten'], ['alt → am + superlative', 'am ältesten'], ['Er ist größer ___ ich.', 'als'],
  ['Sie ist so groß ___ ihre Mutter.', 'wie'], ['Berlin ist nicht so klein ___ Bonn.', 'wie'], ['Das ist das ___ Restaurant. (gut)', 'beste'],
  ['Er läuft ___. (fastest)', 'am schnellsten'],
] as const, left => `Complete the comparison: ${left}.`, 'Comparatives normally take -er and use als; equality uses so...wie; superlatives use am...sten or an attributive -ste form.');

const reflexives = rows([
  ['Ich wasche ___.', 'mich'], ['Du wäschst ___.', 'dich'], ['Er wäscht ___.', 'sich'], ['Wir waschen ___.', 'uns'], ['Ihr wascht ___.', 'euch'],
  ['Sie waschen ___. (plural)', 'sich'], ['Ich wasche ___ die Hände.', 'mir'], ['Du wäschst ___ die Hände.', 'dir'], ['Er wäscht ___ die Hände.', 'sich'],
  ['Wir waschen ___ die Hände.', 'uns'], ['Ich freue ___ auf den Urlaub.', 'mich'], ['Du freust ___ über das Geschenk.', 'dich'],
  ['Sie interessiert ___ für Musik.', 'sich'], ['Ich erinnere ___ an dich.', 'mich'], ['Wir kümmern ___ um die Kinder.', 'uns'],
  ['Er fühlt ___ gut.', 'sich'], ['Wir treffen ___ morgen.', 'uns'], ['Ihr unterhaltet ___.', 'euch'], ['Beeil ___! (du)', 'dich'],
  ['Setzen Sie ___!', 'sich'], ['Ich kaufe ___ ein Buch.', 'mir'], ['Du ziehst ___ an.', 'dich'], ['Die Kinder erholen ___.', 'sich'],
  ['Sie entschuldigt ___.', 'sich'], ['Er verliebt ___ in Anna.', 'sich'],
] as const, left => left, 'Reflexive pronouns refer back to the subject; use dative when another accusative object such as a body part is present.');

const future = rows([
  ['Ich ___ morgen anrufen. (werden)', 'werde'], ['Du ___ das verstehen. (werden)', 'wirst'], ['Er ___ nächste Woche kommen. (werden)', 'wird'],
  ['Wir ___ bald umziehen. (werden)', 'werden'], ['Ihr ___ später arbeiten. (werden)', 'werdet'], ['Sie ___ uns besuchen. (werden, plural)', 'werden'],
  ['Das Wetter ___ besser werden.', 'wird'], ['Ich ___ dich nie vergessen.', 'werde'], ['Er ___ wohl krank sein.', 'wird'],
  ['Wir ___ nächstes Jahr heiraten.', 'werden'], ['Morgen ___ ich ins Kino gehen.', 'werde'], ['Wann ___ du anrufen?', 'wirst'],
  ['Anna ___ die Prüfung bestehen.', 'wird'], ['Die Kinder ___ bald schlafen.', 'werden'], ['Herr Klein, Sie ___ das schaffen.', 'werden'],
  ['Ich werde morgen ___. (arbeiten)', 'arbeiten'], ['Du wirst später ___. (kommen)', 'kommen'], ['Er wird wohl zu Hause ___. (sein)', 'sein'],
  ['Wir werden nach Berlin ___. (fahren)', 'fahren'], ['Ihr werdet Deutsch ___. (lernen)', 'lernen'], ['Sie werden ein Haus ___. (kaufen)', 'kaufen'],
  ['Next year, I will travel: Nächstes Jahr ___ ich reisen.', 'werde'], ['She will call: Sie ___ anrufen.', 'wird'],
  ['We will help: Wir ___ helfen.', 'werden'], ['They will arrive: Sie ___ ankommen.', 'werden'],
] as const, left => left, 'Future I uses conjugated werden in position 2 and the infinitive at the end.');

const accusativePronouns = rows([
  ['Er sieht ___. (ich)', 'mich'], ['Ich sehe ___. (du)', 'dich'], ['Wir kennen ___. (er)', 'ihn'], ['Ich rufe ___ an. (sie, singular)', 'sie'],
  ['Sie kauft ___. (es)', 'es'], ['Er besucht ___. (wir)', 'uns'], ['Ich höre ___. (ihr)', 'euch'], ['Wir treffen ___. (sie, plural)', 'sie'],
  ['Kann ich ___ anrufen? (Sie)', 'Sie'], ['Der Lehrer fragt ___. (ich)', 'mich'], ['Anna liebt ___. (du)', 'dich'], ['Ich brauche ___. (er)', 'ihn'],
  ['Wir sehen ___. (sie, singular)', 'sie'], ['Hast du ___? (es)', 'es'], ['Sie besucht ___. (wir)', 'uns'], ['Er versteht ___. (ihr)', 'euch'],
  ['Ich kenne ___. (sie, plural)', 'sie'], ['Der Arzt untersucht ___. (Sie)', 'Sie'], ['Kannst du ___ hören? (ich)', 'mich'],
  ['Ich lade ___ ein. (du)', 'dich'], ['Sie fragt ___. (er)', 'ihn'], ['Wir holen ___ ab. (sie, singular)', 'sie'],
  ['Er repariert ___. (es)', 'es'], ['Die Freunde besuchen ___. (wir)', 'uns'], ['Ich gebe es ihm: Which pronoun is accusative?', 'es'],
] as const, left => left, 'Accusative pronouns replace direct objects: mich, dich, ihn, sie, es, uns, euch, sie/Sie.');

const demonstratives = rows([
  ['___ Mann ist mein Nachbar. (this)', 'Dieser'], ['Ich nehme ___ Zug. (this)', 'diesen'], ['In ___ Haus wohnt sie. (this)', 'diesem'],
  ['___ Frau arbeitet hier. (this)', 'Diese'], ['Ich kaufe ___ Tasche. (this)', 'diese'], ['Mit ___ Frau spreche ich. (this)', 'dieser'],
  ['___ Kind spielt hier. (this)', 'Dieses'], ['Ich sehe ___ Kind. (this)', 'dieses'], ['Mit ___ Kind spiele ich. (this)', 'diesem'],
  ['___ Bücher sind teuer. (these)', 'Diese'], ['Ich kaufe ___ Bücher. (these)', 'diese'], ['Mit ___ Freunden fahre ich. (these)', 'diesen'],
  ['Wir haben ___ Lehrer. (the same)', 'denselben'], ['Sie wohnt in ___ Straße. (the same)', 'derselben'], ['Ich möchte ___ wie du. (the same thing)', 'dasselbe'],
  ['Er trägt ___ Jacke. (the same)', 'dieselbe'], ['Wir fahren mit ___ Zug. (the same)', 'demselben'], ['Die Kinder haben ___ Bücher. (the same)', 'dieselben'],
  ['Welches Hemd? – ___ hier.', 'Dieses'], ['___ kenne ich nicht. (that man, accusative)', 'Den'], ['___ ist mein Bruder.', 'Das'],
  ['Mit ___ rede ich nicht. (those people)', 'denen'], ['dieser neu___ Film', 'e'], ['diesen neu___ Film', 'en'],
  ['Same identical item: dasselbe or das Gleiche?', 'dasselbe'],
] as const, left => left, 'dieser takes definite-article endings; adjectives after it are weak. derselbe declines at both ends.');

const quantifiers = rows([
  ['___ hat angerufen. (someone)', 'Jemand'], ['Ich habe ___ gesehen. (nobody, accusative)', 'niemanden'], ['Ich habe es ___ gesagt. (nobody, dative)', 'niemandem'],
  ['Ich möchte ___ trinken. (something)', 'etwas'], ['Ich habe ___ verstanden. (nothing)', 'nichts'], ['___ sind gekommen. (all people)', 'Alle'],
  ['___ ist gut. (everything)', 'Alles'], ['___ Tag ist anders. (every)', 'Jeder'], ['Ich sehe ihn ___ Tag. (every)', 'jeden'],
  ['___ Kind bekommt ein Geschenk. (every)', 'Jedes'], ['Ich habe ___ Zeit. (much)', 'viel'], ['Ich kenne ___ Leute. (many)', 'viele'],
  ['Wir haben ___ Geld. (little)', 'wenig'], ['___ Studenten fehlen. (a few)', 'Einige'], ['___ Personen warten. (several)', 'Mehrere'],
  ['___ Leute mögen das nicht. (some)', 'Manche'], ['___ Kinder kommen. (both)', 'Beide'], ['Hast du einen Stift? – Ja, ich habe ___.', 'einen'],
  ['Hast du einen Stift? – Nein, ich habe ___.', 'keinen'], ['Möchtest du ein Bier? – Ich habe schon ___.', 'eins'],
  ['___ weiß nie.', 'Man'], ['Das macht ___ müde. (man, accusative)', 'einen'], ['Das hilft ___. (man, dative)', 'einem'],
  ['___ hat seine Meinung. (everyone)', 'Jeder'], ['___ war teuer. (everything)', 'Alles'],
] as const, left => left, 'Choose the pronoun or quantifier according to case, countability and singular/plural agreement.');

const connectors = rows([
  ['Ich bin krank. ___ bleibe ich zu Hause. (therefore)', 'Deshalb'], ['Es regnet. ___ gehen wir spazieren. (nevertheless)', 'Trotzdem'],
  ['Es ist teuer. ___ gefällt es mir nicht. (besides)', 'Außerdem'], ['Beeil dich, ___ kommen wir zu spät. (otherwise)', 'sonst'],
  ['Es regnet, ___ bleiben wir hier. (so)', 'also'], ['Zuerst esse ich, ___ arbeite ich.', 'dann'], ['Ich habe gearbeitet. ___ bin ich nach Hause gegangen.', 'Danach'],
  ['Er war müde. ___ hat er weitergearbeitet.', 'Trotzdem'], ['Der Zug fällt aus. ___ nehmen wir den Bus.', 'Deshalb'],
  ['Ich habe keine Zeit. ___ kann ich nicht kommen.', 'Darum'], ['Das Hotel ist voll. ___ suchen wir ein anderes.', 'Deswegen'],
  ['Sie spricht Deutsch. ___ spricht sie Französisch.', 'Außerdem'], ['Wir müssen sparen, ___ können wir nicht reisen.', 'sonst'],
  ['Es ist spät. ___ gehen wir jetzt.', 'Also'], ['Zuerst lernen wir, ___ machen wir eine Pause.', 'dann'],
  ['Er hat viel geübt. ___ hat er bestanden.', 'Deshalb'], ['Das Wetter ist schlecht. ___ fahren wir.', 'Trotzdem'],
  ['Der Film ist lang. ___ ist er langweilig.', 'Außerdem'], ['Ruf mich an, ___ mache ich mir Sorgen.', 'sonst'],
  ['Ich bin fertig. ___ kann ich helfen.', 'Jetzt'], ['Sie hat gegessen. ___ trinkt sie Kaffee.', 'Danach'],
  ['Wir kaufen ein. ___ kochen wir.', 'Dann'], ['Er hat kein Auto. ___ fährt er mit dem Bus.', 'Daher'],
  ['Es ist kalt. ___ ziehe ich eine Jacke an.', 'Deshalb'], ['Ich mag das Restaurant. ___ ist es teuer.', 'Allerdings'],
] as const, left => left, 'A connecting adverb in position 1 is followed immediately by the conjugated verb, before the subject.');

const tekamolo = rows([
  ['Order: (nach Berlin / morgen / mit dem Zug)', 'morgen mit dem Zug nach Berlin'],
  ['Order: (zur Arbeit / heute / zu Fuß)', 'heute zu Fuß zur Arbeit'], ['Order: (nach Italien / im Sommer)', 'im Sommer nach Italien'],
  ['Order: (wegen der Arbeit / morgen / nach Gent / mit dem Auto)', 'morgen wegen der Arbeit mit dem Auto nach Gent'],
  ['Order: (in der Schule / jeden Tag / gern)', 'jeden Tag gern in der Schule'], ['Time comes before...', 'place'],
  ['TeKaMoLo: Te means...', 'temporal'], ['TeKaMoLo: Ka means...', 'causal'], ['TeKaMoLo: Mo means...', 'modal'], ['TeKaMoLo: Lo means...', 'local'],
  ['Ich habe ___ gestern gegeben. (es / ihm)', 'es ihm'], ['Ich schenke ___ morgen ein Buch. (ihr)', 'ihr'],
  ['Ich gebe ___ ein Buch. (dem Kind)', 'dem Kind'], ['Morgen ___ ich nach Berlin. (fahren)', 'fahre'],
  ['Nach Berlin ___ ich morgen. (fahren)', 'fahre'], ['Mit dem Zug ___ ich morgen nach Berlin. (fahren)', 'fahre'],
  ['Ich fahre morgen ___ nach Berlin. (nicht)', 'nicht'], ['Ich habe ihn gestern ___ gesehen. (nicht)', 'nicht'],
  ['Ich kann heute ___ kommen. (nicht)', 'nicht'], ['Ich muss morgen früh zum Arzt ___. (gehen)', 'gehen'],
  ['Ich habe gestern mit meinem Bruder ___. (telefonieren)', 'telefoniert'],
  ['Order: (aus Angst / heute / schnell / nach Hause)', 'heute aus Angst schnell nach Hause'],
  ['Order: (wegen des Wetters / morgen / mit dem Bus / zur Arbeit)', 'morgen wegen des Wetters mit dem Bus zur Arbeit'],
  ['How many elements may occupy position 1?', 'one'], ['Pronouns normally come before...', 'TeKaMoLo elements'],
] as const, left => left, 'The safe middle-field order is pronouns first, then Temporal–Kausal–Modal–Lokal; nicht normally sits before the closing verb or focused element.');

export const A2_PRACTICE_EXERCISES: GrammarExercise[] = [
  ...topic('a2-1-1', tenseChoice), ...topic('a2-1-2', perfekt), ...topic('a2-1-3', prefixParticiples),
  ...topic('a2-1-4', mixedParticiples), ...topic('a2-1-5', pastSeinHaben), ...topic('a2-1-6', modalPast),
  ...topic('a2-2-1', adjectiveUse), ...topic('a2-2-2', weakAdj), ...topic('a2-2-3', mixedAdj),
  ...topic('a2-2-4', strongAdj), ...topic('a2-2-5', adjectiveStrategy),
  ...topic('a2-3-1', dativeArticles), ...topic('a2-3-2', dativePronouns), ...topic('a2-3-3', dativeVerbs),
  ...topic('a2-3-4', twoWay), ...topic('a2-3-5', fixedPreps),
  ...topic('a2-4-1', coordination), ...topic('a2-4-2', subordination), ...topic('a2-4-3', wennAls), ...topic('a2-4-4', clauseFirst),
  ...topic('a2-5-1', possessives), ...topic('a2-5-2', comparisons), ...topic('a2-5-3', reflexives), ...topic('a2-5-4', future),
  ...topic('a2-6-1', accusativePronouns), ...topic('a2-6-2', demonstratives), ...topic('a2-6-3', quantifiers),
  ...topic('a2-7-1', connectors), ...topic('a2-8-1', tekamolo),
];
