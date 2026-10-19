import { GrammarExercise, LanguageLevel } from '../../types';

type Item = { prompt: string; answer: string; explanation: string; acceptedAnswers?: string[] };
type Row = readonly [string, string];
const B1 = LanguageLevel.B1;
const labels = ['Review', 'Use it in context', 'Check the contrast', 'Apply independently'];
const stages: NonNullable<GrammarExercise['stage']>[] = ['guided', 'controlled', 'contrast', 'independent'];
const make = (prompt: string, answer: string, explanation: string): Item => ({ prompt, answer, explanation, acceptedAnswers: [answer.toLocaleLowerCase('de-DE')] });
const fromRows = (values: readonly Row[], prompt: (left: string) => string, explanation: string) => values.map(([left, answer]) => make(prompt(left), answer, explanation));
const topic = (topicId: string, items: Item[]): GrammarExercise[] => Array.from({ length: 100 }, (_, index) => {
  const source = items[index % items.length];
  const cycle = Math.floor(index / items.length);
  return { ...source, id: `${topicId}-ex-${index + 1}`, topicId, level: B1, stage: stages[Math.floor(index / 25)], prompt: cycle ? `${labels[cycle]}: ${source.prompt}` : source.prompt };
});

const relative = fromRows([
  ['Das ist der Mann, ___ mir geholfen hat.', 'der'], ['Das ist der Mann, ___ ich gesehen habe.', 'den'], ['Das ist der Mann, mit ___ ich spreche.', 'dem'],
  ['Das ist die Frau, ___ hier arbeitet.', 'die'], ['Das ist die Frau, ___ ich kenne.', 'die'], ['Das ist die Frau, mit ___ ich fahre.', 'der'],
  ['Das ist das Kind, ___ dort spielt.', 'das'], ['Das ist das Kind, ___ ich betreue.', 'das'], ['Das ist das Kind, mit ___ ich spiele.', 'dem'],
  ['Das sind die Leute, ___ hier wohnen.', 'die'], ['Das sind die Leute, ___ ich eingeladen habe.', 'die'], ['Das sind die Leute, ___ ich geholfen habe.', 'denen'],
  ['Der Mann, ___ Auto rot ist, wohnt hier.', 'dessen'], ['Die Frau, ___ Sohn studiert, ist Ärztin.', 'deren'], ['Das Kind, ___ Fahrrad fehlt, weint.', 'dessen'],
  ['Die Eltern, ___ Kinder hier lernen, warten.', 'deren'], ['Der Film, ___ wir gestern gesehen haben, war gut.', 'den'],
  ['Die Stadt, in ___ ich geboren bin, liegt am Meer.', 'der'], ['Das Haus, in ___ wir wohnen, ist alt.', 'dem'],
  ['Die Freunde, mit ___ wir reisen, sind nett.', 'denen'], ['Der Kollege, ___ heute fehlt, ist krank.', 'der'],
  ['Die Aufgabe, ___ du lösen musst, ist schwer.', 'die'], ['Das Buch, ___ auf dem Tisch liegt, gehört mir.', 'das'],
  ['Der Lehrer, ___ Meinung ich respektiere, spricht.', 'dessen'], ['Die Firma, für ___ er arbeitet, ist groß.', 'die'],
] as const, left => left, 'The relative pronoun matches the antecedent in gender and number; its case comes from its role inside the relative clause.');

const pairedConnectors = fromRows([
  ['Ich besuche ___ Berlin ___ München. (both...and)', 'sowohl, als auch'], ['Wir können ___ heute ___ morgen fahren. (either...or)', 'entweder, oder'],
  ['Er trinkt ___ Kaffee ___ Tee. (neither...nor)', 'weder, noch'], ['Der Film ist ___ lang, ___ interessant. (admittedly...but)', 'zwar, aber'],
  ['Sie spricht ___ Deutsch ___ Französisch.', 'sowohl, als auch'], ['___ du kommst mit, ___ du bleibst hier.', 'Entweder, oder'],
  ['Ich habe ___ Zeit ___ Lust.', 'weder, noch'], ['Das Hotel ist ___ teuer, ___ sehr schön.', 'zwar, aber'],
  ['Er kann ___ kochen ___ backen.', 'sowohl, als auch'], ['Wir nehmen ___ den Bus ___ den Zug.', 'entweder, oder'],
  ['Sie kennt ___ Anna ___ Paul.', 'weder, noch'], ['Die Aufgabe ist ___ schwer, ___ lösbar.', 'zwar, aber'],
  ['Das Gerät ist ___ klein ___ leistungsstark.', 'sowohl, als auch'], ['___ rufst du an, ___ du schreibst.', 'Entweder, oder'],
  ['Wir waren ___ in Köln ___ in Bonn.', 'weder, noch'], ['Er ist ___ müde, ___ arbeitet er weiter.', 'zwar, aber'],
  ['Ich mag ___ Musik ___ Kunst.', 'sowohl, als auch'], ['Du musst ___ sparen ___ mehr arbeiten.', 'entweder, oder'],
  ['Das Kind isst ___ Gemüse ___ Obst.', 'weder, noch'], ['Sie ist ___ jung, ___ sehr erfahren.', 'zwar, aber'],
  ['Wir brauchen ___ Ruhe ___ Zeit.', 'sowohl, als auch'], ['___ wir bleiben zu Hause, ___ wir gehen spazieren.', 'Entweder, oder'],
  ['Er hat ___ angerufen ___ geschrieben.', 'weder, noch'], ['Das Buch ist ___ kurz, ___ sehr informativ.', 'zwar, aber'],
  ['Die Reise war ___ günstig ___ angenehm.', 'sowohl, als auch'],
] as const, left => left, 'Two-part connectors express alternatives, additions, negated additions or concessions and must be used as a complete pair.');

const infinitiveZu = fromRows([
  ['Ich lerne, ___ die Prüfung ___ bestehen.', 'um, zu'], ['Er geht weg, ___ ein Wort ___ sagen.', 'ohne, zu'], ['Sie fährt Zug, ___ das Auto ___ nehmen.', 'anstatt, zu'],
  ['Wir sparen, ___ ein Haus ___ kaufen.', 'um, zu'], ['Du gehst, ___ dich ___ verabschieden.', 'ohne, zu'], ['Er spielt, ___ seine Hausaufgaben ___ machen.', 'anstatt, zu'],
  ['Ich rufe an, ___ einen Termin ___ vereinbaren.', 'um, zu'], ['Sie antwortet, ___ lange ___ überlegen.', 'ohne, zu'],
  ['Wir kochen selbst, ___ Essen ___ bestellen.', 'anstatt, zu'], ['Er trainiert, ___ fitter ___ werden.', 'um, zu'],
  ['Sie verlässt das Haus, ___ die Tür ___ schließen.', 'ohne, zu'], ['Ich lese, ___ fern___sehen.', 'anstatt, zu'],
  ['Wir fahren früh, ___ Stau ___ vermeiden.', 'um, zu'], ['Er unterschreibt, ___ den Vertrag ___ lesen.', 'ohne, zu'],
  ['Sie arbeitet, ___ Urlaub ___ machen.', 'anstatt, zu'], ['Ich komme, ___ dir ___ helfen.', 'um, zu'],
  ['Er kauft, ___ den Preis ___ vergleichen.', 'ohne, zu'], ['Wir gehen zu Fuß, ___ den Bus ___ nehmen.', 'anstatt, zu'],
  ['Sie übt, ___ besser Deutsch ___ sprechen.', 'um, zu'], ['Du fährst, ___ einen Helm ___ tragen.', 'ohne, zu'],
  ['Ich schreibe eine Mail, ___ anzurufen.', 'anstatt, zu'], ['Er öffnet das Fenster, ___ frische Luft ___ bekommen.', 'um, zu'],
  ['Sie geht schlafen, ___ das Licht aus___machen.', 'ohne, zu'], ['Wir bleiben hier, ___ weiter___fahren.', 'anstatt, zu'],
  ['Ich frage nach, ___ sicher___gehen.', 'um, zu'],
] as const, left => left, 'Use um...zu for purpose, ohne...zu for an omitted action and (an)statt...zu for an alternative when both clauses share the same subject.');

const pluperfect = fromRows([
  ['Nachdem ich gegessen ___, ging ich spazieren. (haben)', 'hatte'], ['Er ___ schon gegangen, als ich ankam. (sein)', 'war'],
  ['Nachdem wir gearbeitet ___, fuhren wir heim.', 'hatten'], ['Sie ___ eingeschlafen, bevor der Film endete.', 'war'],
  ['Ich ___ das Buch gelesen, bevor wir darüber sprachen.', 'hatte'], ['Die Gäste ___ angekommen, als das Essen fertig war.', 'waren'],
  ['Du ___ schon angerufen, bevor ich schrieb.', 'hattest'], ['Ihr ___ abgefahren, als der Regen begann.', 'wart'],
  ['Nachdem er die Tür geschlossen ___, ging er.', 'hatte'], ['Das Kind ___ aufgewacht, bevor die Eltern kamen.', 'war'],
  ['Wir ___ alles vorbereitet, als die Gäste kamen.', 'hatten'], ['Sie ___ nach Berlin gezogen, bevor sie ihn traf.', 'war'],
  ['Ich ___ meinen Schlüssel verloren, deshalb kam ich nicht hinein.', 'hatte'], ['Die Züge ___ schon abgefahren, als wir ankamen.', 'waren'],
  ['Nachdem du bezahlt ___, konntest du gehen.', 'hattest'], ['Er ___ gestürzt, bevor der Arzt kam.', 'war'],
  ['Sie ___ die Aufgabe beendet, bevor die Stunde endete.', 'hatte'], ['Wir ___ nach Hause gegangen, bevor es schneite.', 'waren'],
  ['Ihr ___ das schon gehört, bevor ich es erzählte.', 'hattet'], ['Anna ___ verreist, als Paul anrief.', 'war'],
  ['Nachdem ich Kaffee getrunken ___, war ich wach.', 'hatte'], ['Die Kinder ___ eingeschlafen, bevor wir ankamen.', 'waren'],
  ['Er ___ sein Auto verkauft, bevor er umzog.', 'hatte'], ['Ich ___ noch nie geflogen, bevor ich nach Japan reiste.', 'war'],
  ['Nachdem sie den Brief geschrieben ___, brachte sie ihn zur Post.', 'hatte'],
] as const, left => left, 'Plusquamperfekt uses hatte/war plus Participle II for an event completed before another past event.');

const future = fromRows([
  ['Ich ___ nächstes Jahr nach Berlin ziehen.', 'werde'], ['Du ___ morgen arbeiten.', 'wirst'], ['Das Wetter ___ besser werden.', 'wird'],
  ['Wir ___ bald umziehen.', 'werden'], ['Ihr ___ die Prüfung bestehen.', 'werdet'], ['Sie ___ uns besuchen. (plural)', 'werden'],
  ['Er ___ wohl zu Hause sein.', 'wird'], ['Ich ___ dich anrufen.', 'werde'], ['Wann ___ du kommen?', 'wirst'],
  ['Anna ___ Ärztin werden.', 'wird'], ['Wir ___ das Problem lösen.', 'werden'], ['Herr Klein, Sie ___ informiert werden.', 'werden'],
  ['Die Preise ___ steigen.', 'werden'], ['Es ___ morgen regnen.', 'wird'], ['Ich ___ mehr lernen.', 'werde'],
  ['Du ___ das verstehen.', 'wirst'], ['Die Kinder ___ später schlafen.', 'werden'], ['Ihr ___ nach Hamburg fahren.', 'werdet'],
  ['Er ___ vermutlich krank sein.', 'wird'], ['Wir ___ nächstes Jahr heiraten.', 'werden'], ['Die Firma ___ neue Mitarbeiter einstellen.', 'wird'],
  ['Ich ___ nie aufgeben.', 'werde'], ['Sie ___ das schaffen. (singular)', 'wird'], ['Wann ___ ihr zurückkommen?', 'werdet'],
  ['Der Zug ___ pünktlich ankommen.', 'wird'],
] as const, left => left, 'Future I uses present-tense werden in position 2 and the infinitive at the end for plans, intentions and predictions.');

const wouldForm = fromRows([
  ['Ich ___ das gerne machen.', 'würde'], ['Du ___ öfter Sport treiben.', 'würdest'], ['Er ___ es sicher kaufen.', 'würde'], ['Wir ___ gerne reisen.', 'würden'],
  ['Ihr ___ das auch sagen.', 'würdet'], ['Sie ___ Fehler machen. (plural)', 'würden'], ['___ Sie mir bitte helfen?', 'Würden'],
  ['Ich ___ an deiner Stelle warten.', 'würde'], ['Was ___ du tun?', 'würdest'], ['Anna ___ gerne mitkommen.', 'würde'],
  ['Wir ___ lieber zu Hause bleiben.', 'würden'], ['___ ihr das versuchen?', 'Würdet'], ['Die Kinder ___ gerne spielen.', 'würden'],
  ['Er ___ niemals lügen.', 'würde'], ['Ich ___ das nicht empfehlen.', 'würde'], ['Du ___ dich freuen.', 'würdest'],
  ['Sie ___ später anrufen. (singular)', 'würde'], ['Wir ___ das anders organisieren.', 'würden'], ['Herr Weber, ___ Sie kurz warten?', 'würden'],
  ['Ihr ___ mehr verstehen.', 'würdet'], ['Ich ___ gerne besser kochen.', 'würde'], ['Du ___ das schaffen.', 'würdest'],
  ['Man ___ das anders formulieren.', 'würde'], ['Die Firma ___ mehr investieren.', 'würde'], ['Wir ___ sofort beginnen.', 'würden'],
] as const, left => left, 'The standard present Konjunktiv II uses conjugated würde plus an infinitive at the end.');

const strongK2 = fromRows([
  ['Wenn ich Zeit ___, käme ich. (haben)', 'hätte'], ['Wenn ich reich ___, reiste ich. (sein)', 'wäre'], ['Ich ___ gerne die Antwort. (wissen)', 'wüsste'],
  ['Er ___ morgen, wenn er könnte. (kommen)', 'käme'], ['Ich ___ früher nach Hause. (gehen)', 'ginge'], ['Sie ___ ihn nicht warten. (lassen)', 'ließe'],
  ['Du ___ mehr Zeit. (haben)', 'hättest'], ['Wir ___ glücklich. (sein)', 'wären'], ['___ du, wo er ist? (wissen)', 'Wüsstest'],
  ['Ihr ___ bestimmt mit. (kommen)', 'kämet'], ['Wir ___ gern spazieren. (gehen)', 'gingen'], ['Er ___ das Fenster offen. (lassen)', 'ließe'],
  ['Sie ___ ein Auto. (haben, plural)', 'hätten'], ['Du ___ dort sicherer. (sein)', 'wärst'], ['Ich ___ sofort. (kommen)', 'käme'],
  ['Sie ___ früher. (gehen, singular)', 'ginge'], ['Wir ___ die Kinder spielen. (lassen)', 'ließen'], ['Er ___ die Lösung. (wissen)', 'wüsste'],
  ['___ Sie Zeit? (haben)', 'Hätten'], ['___ ihr bereit? (sein)', 'Wärt'], ['Wenn er Geld ___, kaufte er das Haus.', 'hätte'],
  ['Wenn sie hier ___, könnten wir beginnen.', 'wäre'], ['Ich ___ mit, aber ich muss arbeiten.', 'käme'], ['Er ___ lieber zu Fuß.', 'ginge'],
  ['Sie ___ uns früher gehen.', 'ließe'],
] as const, left => left, 'Frequent strong verbs and auxiliaries use compact Konjunktiv II forms, often based on the Präteritum stem with an umlaut.');

const modalK2 = fromRows([
  ['Du ___ mehr schlafen. (advice)', 'solltest'], ['___ du mir helfen? (polite ability)', 'Könntest'], ['Ich ___ heute kommen. (possibility)', 'könnte'],
  ['Wir ___ früher gehen. (theoretical obligation)', 'müssten'], ['Er ___ schon zu Hause sein. (probability)', 'dürfte'], ['Ich ___ einen Kaffee. (polite desire)', 'möchte'],
  ['Du ___ den Arzt anrufen.', 'solltest'], ['___ ich das Fenster öffnen?', 'Könnte'], ['Sie ___ mehr lernen. (plural)', 'müssten'],
  ['Das ___ stimmen.', 'könnte'], ['Er ___ ungefähr 40 sein.', 'dürfte'], ['Wir ___ gerne bestellen.', 'möchten'],
  ['Ihr ___ leiser sein.', 'solltet'], ['___ Sie das wiederholen?', 'Könnten'], ['Ich ___ jetzt arbeiten.', 'müsste'],
  ['Sie ___ später kommen. (singular possibility)', 'könnte'], ['Der Zug ___ bald ankommen. (probability)', 'dürfte'], ['Was ___ du trinken?', 'möchtest'],
  ['Man ___ vorsichtiger fahren.', 'sollte'], ['Wir ___ das versuchen.', 'könnten'], ['Du ___ dich beeilen.', 'müsstest'],
  ['Das ___ erlaubt sein.', 'dürfte'], ['Ich ___ gern zahlen.', 'möchte'], ['Ihr ___ mehr üben.', 'solltet'],
  ['___ wir hier parken?', 'Dürften'],
] as const, left => left, 'Konjunktiv II modal forms express advice, politeness, possibility, probability and hypothetical obligation.');

const pastK2 = fromRows([
  ['Ich ___ dich angerufen. (haben)', 'hätte'], ['Ich ___ gekommen. (sein)', 'wäre'], ['Du ___ das getan.', 'hättest'], ['Er ___ früher gegangen.', 'wäre'],
  ['Wir ___ mehr gelernt.', 'hätten'], ['Ihr ___ pünktlich angekommen.', 'wärt'], ['Sie ___ das gesehen. (plural)', 'hätten'], ['Anna ___ geblieben.', 'wäre'],
  ['Wenn ich Zeit gehabt ___, hätte ich geholfen.', 'hätte'], ['Wenn du gekommen ___, wären wir gegangen.', 'wärst'],
  ['Er ___ den Bus nicht verpasst.', 'hätte'], ['Sie ___ rechtzeitig aufgestanden.', 'wäre'], ['Wir ___ das Problem gelöst.', 'hätten'],
  ['Ihr ___ nicht so spät gefahren.', 'wärt'], ['Ich ___ gern mitgekommen.', 'wäre'], ['Du ___ die Tür geschlossen.', 'hättest'],
  ['Die Gäste ___ früher abgereist.', 'wären'], ['Er ___ mehr gearbeitet.', 'hätte'], ['Sie ___ zu Hause geblieben. (singular)', 'wäre'],
  ['Wir ___ den Zug genommen.', 'hätten'], ['Ich ___ beinahe gefallen.', 'wäre'], ['Du ___ die Prüfung bestanden.', 'hättest'],
  ['Das Kind ___ eingeschlafen.', 'wäre'], ['Sie ___ uns informiert. (plural)', 'hätten'], ['Wenn er gefragt ___, hätte ich geantwortet.', 'hätte'],
] as const, left => left, 'Unreal past Konjunktiv II uses hätte or wäre plus Participle II to describe something that did not happen.');

const pastModalK2 = fromRows([
  ['Ich ___ es machen können.', 'hätte'], ['Du ___ mir das sagen sollen.', 'hättest'], ['Wir ___ länger bleiben können.', 'hätten'],
  ['Er ___ früher gehen müssen.', 'hätte'], ['Ihr ___ das nicht tun dürfen.', 'hättet'], ['Sie ___ kommen wollen. (plural)', 'hätten'],
  ['Ich hätte mehr ___ müssen.', 'arbeiten'], ['Du hättest früher ___ sollen.', 'anrufen'], ['Er hätte helfen ___ .', 'können'],
  ['Wir hätten zu Hause bleiben ___ .', 'müssen'], ['Ihr hättet das sagen ___ .', 'dürfen'], ['Sie hätte mitfahren ___ .', 'wollen'],
  ['Ich ___ dich besuchen können.', 'hätte'], ['Du ___ besser zuhören sollen.', 'hättest'], ['Anna ___ länger arbeiten müssen.', 'hätte'],
  ['Wir ___ dort parken dürfen.', 'hätten'], ['Ihr ___ früher kommen können.', 'hättet'], ['Die Kinder ___ schlafen sollen.', 'hätten'],
  ['Er hätte das Problem lösen ___ .', 'können'], ['Ich hätte nicht warten ___ .', 'müssen'], ['Du hättest fragen ___ .', 'dürfen'],
  ['Sie hätten absagen ___ .', 'können'], ['Wir hätten mehr sparen ___ .', 'sollen'], ['Ihr hättet bleiben ___ .', 'dürfen'],
  ['Man hätte vorsichtiger fahren ___ .', 'müssen'],
] as const, left => left, 'Past modal Konjunktiv II uses hätte plus main-verb infinitive and modal infinitive at the end.');

const passivePresent = fromRows([
  ['Das Haus ___ gebaut.', 'wird'], ['Die Briefe ___ geschrieben.', 'werden'], ['Ich ___ operiert.', 'werde'], ['Du ___ gerufen.', 'wirst'],
  ['Das Kind ___ abgeholt.', 'wird'], ['Wir ___ informiert.', 'werden'], ['Ihr ___ gesucht.', 'werdet'], ['Sie ___ gefragt. (plural)', 'werden'],
  ['Hier ___ ein Hotel gebaut.', 'wird'], ['Die Tür ___ geöffnet.', 'wird'], ['Das Essen ___ vorbereitet.', 'wird'], ['Die Autos ___ repariert.', 'werden'],
  ['Der Patient ___ untersucht.', 'wird'], ['Die Pakete ___ geliefert.', 'werden'], ['Die Straße ___ gesperrt.', 'wird'], ['Das Problem ___ gelöst.', 'wird'],
  ['Die Rechnung ___ bezahlt.', 'wird'], ['Neue Mitarbeiter ___ eingestellt.', 'werden'], ['Der Text ___ übersetzt.', 'wird'], ['Die Zimmer ___ gereinigt.', 'werden'],
  ['Die Daten ___ gespeichert.', 'werden'], ['Das Formular ___ ausgefüllt.', 'wird'], ['Die Gäste ___ eingeladen.', 'werden'], ['Der Vertrag ___ unterschrieben.', 'wird'],
  ['Die Ergebnisse ___ veröffentlicht.', 'werden'],
] as const, left => left, 'Present process passive uses present-tense werden plus Participle II.');

const passivePast = fromRows([
  ['Das Haus ___ gebaut.', 'wurde'], ['Die Briefe ___ geschrieben.', 'wurden'], ['Ich ___ informiert.', 'wurde'], ['Du ___ gerufen.', 'wurdest'],
  ['Das Kind ___ abgeholt.', 'wurde'], ['Wir ___ eingeladen.', 'wurden'], ['Ihr ___ untersucht.', 'wurdet'], ['Sie ___ gefragt. (plural)', 'wurden'],
  ['Amerika ___ 1492 entdeckt.', 'wurde'], ['Der Brief ___ gestern geschickt.', 'wurde'], ['Die Straße ___ gesperrt.', 'wurde'], ['Die Autos ___ repariert.', 'wurden'],
  ['Der Termin ___ verschoben.', 'wurde'], ['Die Fenster ___ geöffnet.', 'wurden'], ['Das Essen ___ vorbereitet.', 'wurde'], ['Die Gäste ___ begrüßt.', 'wurden'],
  ['Der Vertrag ___ unterschrieben.', 'wurde'], ['Die Ergebnisse ___ veröffentlicht.', 'wurden'], ['Das Problem ___ gelöst.', 'wurde'], ['Die Häuser ___ verkauft.', 'wurden'],
  ['Die Stadt ___ zerstört.', 'wurde'], ['Die Daten ___ gelöscht.', 'wurden'], ['Das Museum ___ eröffnet.', 'wurde'], ['Die Pakete ___ geliefert.', 'wurden'],
  ['Die Entscheidung ___ erklärt.', 'wurde'],
] as const, left => left, 'Präteritum passive uses wurde/wurden plus Participle II and is common in history and written narrative.');

const passivePerfect = fromRows([
  ['Das Auto ___ repariert worden.', 'ist'], ['Die Gäste ___ eingeladen worden.', 'sind'], ['Ich ___ informiert worden.', 'bin'], ['Du ___ angerufen worden.', 'bist'],
  ['Das Haus ___ verkauft worden.', 'ist'], ['Wir ___ untersucht worden.', 'sind'], ['Ihr ___ ausgewählt worden.', 'seid'], ['Sie ___ gefragt worden. (plural)', 'sind'],
  ['Der Brief ist geschickt ___.', 'worden'], ['Die Türen sind geöffnet ___.', 'worden'], ['Das Essen ist gekocht ___.', 'worden'],
  ['Die Autos sind repariert ___.', 'worden'], ['Der Termin ___ verschoben worden.', 'ist'], ['Die Daten ___ gespeichert worden.', 'sind'],
  ['Das Problem ___ gelöst worden.', 'ist'], ['Die Rechnungen ___ bezahlt worden.', 'sind'], ['Das Hotel ___ renoviert worden.', 'ist'],
  ['Die Mitarbeiter ___ informiert worden.', 'sind'], ['Der Text ___ übersetzt worden.', 'ist'], ['Die Zimmer ___ gereinigt worden.', 'sind'],
  ['Die Ware ___ geliefert worden.', 'ist'], ['Die Formulare ___ ausgefüllt worden.', 'sind'], ['Der Vertrag ___ unterschrieben worden.', 'ist'],
  ['Die Ergebnisse ___ veröffentlicht worden.', 'sind'], ['Das Gebäude ___ geschlossen worden.', 'ist'],
] as const, left => left, 'Perfekt passive uses sein in the present plus Participle II plus worden, never geworden.');

const passiveChoice = fromRows([
  ['A dated historical fact', 'wurde'], ['A written historical narrative', 'wurde'], ['A result visible now in conversation', 'ist...worden'],
  ['Telling a friend the car is finally repaired', 'ist...worden'], ['A newspaper account of a past event', 'wurde'], ['An official historical report', 'wurde'],
  ['A completed repair relevant now', 'ist...worden'], ['A building opened in 1980', 'wurde'], ['A package that has just been delivered', 'ist...worden'],
  ['A battle described in a history book', 'wurde'], ['A room that has now been cleaned', 'ist...worden'], ['A law passed in 1995', 'wurde'],
  ['A message that has finally been sent', 'ist...worden'], ['A bridge built in the nineteenth century', 'wurde'], ['A task that has already been completed', 'ist...worden'],
  ['A discovery narrated with a date', 'wurde'], ['A meal that has just been prepared', 'ist...worden'], ['A contract signed yesterday in a report', 'wurde'],
  ['A computer that is now fixed', 'ist...worden'], ['A city founded in 1200', 'wurde'], ['A reservation that has now been confirmed', 'ist...worden'],
  ['A war described chronologically', 'wurde'], ['An application that has just been approved', 'ist...worden'], ['A historical person arrested in 1940', 'wurde'],
  ['A visible present result in spoken German', 'ist...worden'],
] as const, left => `Choose the normal passive past form for this context: ${left}. (wurde / ist...worden)`, 'Use wurde for historical/written narrative and ist...worden for conversational perfect and a present result.');

const passiveModalPresent = fromRows([
  ['Die Hausaufgaben ___ gemacht werden. (müssen)', 'müssen'], ['Hier ___ nicht geparkt werden. (dürfen)', 'darf'], ['Das Problem ___ gelöst werden. (können)', 'kann'],
  ['Der Brief ___ heute geschickt werden. (sollen)', 'soll'], ['Die Tür ___ geschlossen werden. (müssen)', 'muss'], ['Die Gäste ___ informiert werden. (müssen)', 'müssen'],
  ['Das Auto ___ repariert werden. (können)', 'kann'], ['Die Rechnung ___ bezahlt werden. (müssen)', 'muss'], ['Hier ___ fotografiert werden. (dürfen)', 'darf'],
  ['Die Formulare ___ ausgefüllt werden. (sollen)', 'sollen'], ['Der Termin ___ verschoben werden. (können)', 'kann'], ['Das Zimmer ___ gereinigt werden. (müssen)', 'muss'],
  ['Die Daten ___ gespeichert werden. (sollen)', 'sollen'], ['Das Paket ___ abgeholt werden. (müssen)', 'muss'], ['Die Regeln ___ beachtet werden. (müssen)', 'müssen'],
  ['Die Fenster ___ geöffnet werden. (können)', 'können'], ['Hier ___ geraucht werden. (dürfen)', 'darf'], ['Der Text ___ übersetzt werden. (sollen)', 'soll'],
  ['Die Maschine ___ geprüft werden. (müssen)', 'muss'], ['Die Fragen ___ beantwortet werden. (können)', 'können'],
  ['Das Essen ___ vorbereitet werden. (müssen)', 'muss'], ['Die Tickets ___ online gekauft werden. (können)', 'können'],
  ['Der Antrag ___ unterschrieben werden. (müssen)', 'muss'], ['Die Aufgabe ___ bis morgen erledigt werden. (sollen)', 'soll'],
  ['Die Produkte ___ getestet werden. (müssen)', 'müssen'],
] as const, left => left, 'Present passive with a modal uses conjugated modal plus Participle II plus werden.');

const passiveModalPast = fromRows([
  ['Das Haus ___ renoviert werden. (müssen)', 'musste'], ['Der Termin ___ nicht verschoben werden. (können)', 'konnte'],
  ['Die Briefe ___ geschickt werden. (müssen, plural)', 'mussten'], ['Hier ___ nicht geparkt werden. (dürfen)', 'durfte'],
  ['Das Problem ___ gelöst werden. (sollen)', 'sollte'], ['Die Gäste ___ informiert werden. (müssen)', 'mussten'],
  ['Das Auto ___ repariert werden. (können)', 'konnte'], ['Die Rechnung ___ bezahlt werden. (müssen)', 'musste'],
  ['Die Daten ___ gelöscht werden. (dürfen, plural)', 'durften'], ['Der Vertrag ___ unterschrieben werden. (sollen)', 'sollte'],
  ['Die Zimmer ___ gereinigt werden. (müssen)', 'mussten'], ['Das Paket ___ abgeholt werden. (können)', 'konnte'],
  ['Die Regeln ___ geändert werden. (sollen)', 'sollten'], ['Die Fenster ___ geöffnet werden. (dürfen)', 'durften'],
  ['Der Text ___ übersetzt werden. (müssen)', 'musste'], ['Die Maschine ___ geprüft werden. (können)', 'konnte'],
  ['Die Fragen ___ beantwortet werden. (sollen)', 'sollten'], ['Das Essen ___ vorbereitet werden. (müssen)', 'musste'],
  ['Die Tickets ___ online gekauft werden. (können)', 'konnten'], ['Der Antrag ___ eingereicht werden. (müssen)', 'musste'],
  ['Die Aufgabe ___ erledigt werden. (sollen)', 'sollte'], ['Die Produkte ___ getestet werden. (müssen)', 'mussten'],
  ['Hier ___ fotografiert werden. (dürfen)', 'durfte'], ['Der Flug ___ abgesagt werden. (müssen)', 'musste'],
  ['Die Patienten ___ untersucht werden. (können)', 'konnten'],
] as const, left => left, 'Präteritum passive with a modal uses the past modal form plus Participle II plus werden.');

const passiveModalPerfect = fromRows([
  ['Das Auto hat repariert werden ___.', 'müssen'], ['Der Brief hat geschickt werden ___.', 'sollen'], ['Das Problem hat gelöst werden ___.', 'können'],
  ['Hier hat nicht geparkt werden ___.', 'dürfen'], ['Das Haus hat renoviert werden ___.', 'müssen'], ['Die Gäste haben informiert werden ___.', 'müssen'],
  ['Der Termin hat verschoben werden ___.', 'können'], ['Die Rechnung hat bezahlt werden ___.', 'müssen'], ['Die Daten haben gespeichert werden ___.', 'sollen'],
  ['Das Paket hat abgeholt werden ___.', 'müssen'], ['Die Regeln haben beachtet werden ___.', 'müssen'], ['Die Fenster haben geöffnet werden ___.', 'können'],
  ['Der Text hat übersetzt werden ___.', 'sollen'], ['Die Maschine hat geprüft werden ___.', 'müssen'], ['Die Fragen haben beantwortet werden ___.', 'können'],
  ['Das Essen hat vorbereitet werden ___.', 'müssen'], ['Die Tickets haben gekauft werden ___.', 'können'], ['Der Antrag hat unterschrieben werden ___.', 'müssen'],
  ['Die Aufgabe hat erledigt werden ___.', 'sollen'], ['Die Produkte haben getestet werden ___.', 'müssen'], ['Der Flug hat abgesagt werden ___.', 'müssen'],
  ['Die Patienten haben untersucht werden ___.', 'können'], ['Das Formular hat ausgefüllt werden ___.', 'müssen'], ['Die Software hat aktualisiert werden ___.', 'sollen'],
  ['Der Fehler hat behoben werden ___.', 'können'],
] as const, left => left, 'The perfect passive with a modal uses haben plus Participle II plus werden plus the modal infinitive.');

const genitive = fromRows([
  ['Das Auto ___ Vaters. (mein)', 'meines'], ['Die Farbe ___ Tür. (die)', 'der'], ['Das Spielzeug ___ Kindes. (das)', 'des'],
  ['Die Meinung ___ Leute. (die, plural)', 'der'], ['Der Name ___ Mannes. (der)', 'des'], ['Das Haus ___ Frau. (eine)', 'einer'],
  ['Das Zimmer ___ Kindes. (ein)', 'eines'], ['Die Stimmen ___ Gäste. (die)', 'der'], ['Das Ende ___ Films. (der)', 'des'],
  ['Die Tür ___ Hauses. (das)', 'des'], ['Der Beruf ___ Mutter. (meine)', 'meiner'], ['Das Fahrrad ___ Bruders. (dein)', 'deines'],
  ['Die Idee ___ Kollegin. (unsere)', 'unserer'], ['Die Eltern ___ Kindes. (das)', 'des'], ['Der Motor ___ Autos. (das)', 'des'],
  ['Die Hauptstadt ___ Landes. (das)', 'des'], ['Der Anfang ___ Geschichte. (die)', 'der'], ['Die Ergebnisse ___ Studie. (die)', 'der'],
  ['Der Hund ___ Nachbarn. (der)', 'des'], ['Die Zukunft ___ Firma. (die)', 'der'], ['Das Dach ___ Gebäudes. (das)', 'des'],
  ['Die Rechte ___ Arbeitnehmer. (die, plural)', 'der'], ['Der Preis ___ Produkts. (das)', 'des'], ['Die Entscheidung ___ Gerichts. (das)', 'des'],
  ['Das Büro ___ Chefs. (der)', 'des'],
] as const, left => left, 'Genitive marks possession; masculine and neuter nouns normally add -s or -es.');

const genitivePreps = fromRows([
  ['___ des Wetters bleiben wir hier. (because of)', 'Wegen'], ['___ der Kälte geht er joggen. (despite)', 'Trotz'],
  ['___ des Urlaubs war das Büro geschlossen. (during)', 'Während'], ['___ eines Autos fährt er Fahrrad. (instead of)', 'Statt'],
  ['___ des Regens fiel das Spiel aus.', 'Wegen'], ['___ der Probleme machten wir weiter.', 'Trotz'], ['___ der Sitzung klingelte sein Handy.', 'Während'],
  ['___ des Zuges nahmen wir den Bus.', 'Statt'], ['___ seiner Krankheit blieb er zu Hause.', 'Wegen'], ['___ ihrer Angst flog sie.', 'Trotz'],
  ['___ des Essens sprachen wir.', 'Während'], ['___ einer Antwort stellte er eine Frage.', 'Statt'], ['___ des starken Verkehrs kamen wir spät.', 'Wegen'],
  ['___ der hohen Kosten kauften sie es.', 'Trotz'], ['___ der Reise las ich viel.', 'Während'], ['___ des Hotels mieteten wir eine Wohnung.', 'Statt'],
  ['___ eines Fehlers funktionierte es nicht.', 'Wegen'], ['___ des schlechten Wetters gingen wir raus.', 'Trotz'],
  ['___ des Konzerts blieb es ruhig.', 'Während'], ['___ eines Briefes schickte sie eine Mail.', 'Statt'],
  ['___ der Baustelle ist die Straße gesperrt.', 'Wegen'], ['___ seiner Müdigkeit arbeitete er weiter.', 'Trotz'],
  ['___ des Unterrichts darf man nicht telefonieren.', 'Während'], ['___ des Kaffees trank ich Tee.', 'Statt'],
  ['___ der Verspätung verpassten wir den Anschluss.', 'Wegen'],
] as const, left => left, 'wegen, während, trotz and statt commonly govern the genitive, especially in formal and written German.');

const fixedVerbPreps = fromRows([
  ['Ich warte ___ den Bus.', 'auf'], ['Ich freue mich ___ den Urlaub. (future)', 'auf'], ['Ich freue mich ___ das Geschenk. (present)', 'über'],
  ['Ich träume ___ einem Haus.', 'von'], ['Ich spreche ___ meiner Kollegin.', 'mit'], ['Ich denke ___ den Urlaub.', 'an'],
  ['Er interessiert sich ___ Politik.', 'für'], ['Wir bitten ___ Hilfe.', 'um'], ['Sie erinnert sich ___ ihre Kindheit.', 'an'],
  ['Ich kümmere mich ___ die Kinder.', 'um'], ['Er nimmt ___ dem Kurs teil.', 'an'], ['Wir sprechen ___ das Problem.', 'über'],
  ['Sie leidet ___ Kopfschmerzen.', 'an'], ['Das hängt ___ Wetter ab.', 'vom'], ['Ich entschuldige mich ___ den Fehler.', 'für'],
  ['Er bedankt sich ___ dir.', 'bei'], ['Sie bewirbt sich ___ eine Stelle.', 'um'], ['Wir beginnen ___ der Arbeit.', 'mit'],
  ['Ich höre ___ dem Rauchen auf.', 'mit'], ['Er fragt ___ dem Weg.', 'nach'], ['Sie glaubt ___ den Erfolg.', 'an'],
  ['Wir diskutieren ___ das Thema.', 'über'], ['Ich habe Angst ___ Spinnen.', 'vor'], ['Er gehört ___ unserer Gruppe.', 'zu'],
  ['Sie entscheidet sich ___ das Angebot.', 'für'],
] as const, left => left, 'Fixed verb-preposition combinations must be learned together with their required case.');

const woDa = fromRows([
  ['___ wartest du? – Auf den Bus.', 'Worauf'], ['Ich warte ___ . (on it)', 'darauf'], ['___ träumst du? – Von einem Haus.', 'Wovon'],
  ['Ich träume ___ . (of it)', 'davon'], ['___ denkst du? – An den Urlaub.', 'Woran'], ['Ich denke ___ . (about it)', 'daran'],
  ['___ freust du dich? – Auf die Reise.', 'Worauf'], ['Ich freue mich ___ . (about it, future)', 'darauf'],
  ['___ interessierst du dich? – Für Musik.', 'Wofür'], ['Ich interessiere mich ___ .', 'dafür'], ['___ sprichst du? – Über das Problem.', 'Worüber'],
  ['Wir sprechen ___ .', 'darüber'], ['___ bittest du? – Um Hilfe.', 'Worum'], ['Ich bitte ___ .', 'darum'],
  ['___ erinnerst du dich? – An die Schule.', 'Woran'], ['Ich erinnere mich ___ .', 'daran'], ['___ hängt das ab? – Vom Wetter.', 'Wovon'],
  ['Es hängt ___ ab.', 'davon'], ['___ hast du Angst? – Vor Spinnen.', 'Wovor'], ['Ich habe Angst ___ .', 'davor'],
  ['___ nimmst du teil? – An einem Kurs.', 'Woran'], ['Ich nehme ___ teil.', 'daran'], ['___ entscheidest du dich? – Für das Angebot.', 'Wofür'],
  ['Ich entscheide mich ___ .', 'dafür'], ['___ redet ihr? – Mit wem?', 'Mit wem'],
] as const, left => left, 'Use wo(r)+preposition to ask about things and da(r)+preposition to replace things; use preposition + personal pronoun for people.');

const schoolPrep = fromRows([
  ['Ich gehe ___ Schule, um meine Tasche zu holen. (inside)', 'in die'], ['Ich gehe jeden Morgen ___ Schule. (route)', 'zur'],
  ['Mein Sohn geht ___ Realschule. (attendance)', 'auf die'], ['Ich bin ___ Schule. (inside)', 'in der'], ['Ich bin Schüler ___ Schule. (attendance)', 'auf der'],
  ['Gehst du noch ___ Schule?', 'zur'], ['Ich muss schnell ___ Schule hinein.', 'in die'], ['Er geht ___ Gymnasium.', 'auf ein'],
  ['Wir sind gerade ___ Schule.', 'in der'], ['Sie fährt mit dem Bus ___ Schule.', 'zur'], ['Das Kind läuft ___ Schule hinein.', 'in die'],
  ['Anna geht ___ Goethe-Schule.', 'auf die'], ['Der Hausmeister ist ___ Schule.', 'in der'], ['Paul ist nicht mehr ___ Schule.', 'auf der'],
  ['Morgen gehe ich wieder ___ Schule.', 'zur'], ['Ich betrete ___ Schule.', 'die'], ['Welcher Ausdruck means “toward school”?', 'zur Schule'],
  ['Welcher Ausdruck focuses on entering the building?', 'in die Schule'], ['Welcher Ausdruck indicates enrolment?', 'auf die Schule'],
  ['Wo bist du physisch? – ___ Schule.', 'in der'], ['Wo bist du eingeschrieben? – ___ Schule.', 'auf der'],
  ['Wohin gehst du jeden Morgen? – ___ Schule.', 'zur'], ['Wohin gehst du, um etwas zu holen? – ___ Schule.', 'in die'],
  ['Welche Schule besucht er? – Er geht ___ Gymnasium.', 'auf das'], ['Sie ist Lehrerin ___ Schule. (inside workplace)', 'in der'],
] as const, left => left, 'in die Schule focuses on entering, zur Schule on destination/routine, and auf die Schule on enrolment.');

const universityPrep = fromRows([
  ['Sie arbeitet ___ Universität. (standard)', 'an der'], ['Ich studiere ___ Universität München.', 'an der'], ['Er ist Professor ___ Humboldt-Universität.', 'an der'],
  ['Das Café ist ___ Uni. (inside)', 'in der'], ['Ich warte ___ Uni auf dich. (inside)', 'in der'], ['Ich bin noch ___ Uni. (Austria/informal)', 'auf der'],
  ['Er forscht ___ Max-Planck-Institut.', 'am'], ['Sie studiert ___ Hochschule.', 'an der'], ['Er geht ___ Gymnasium. (attendance)', 'auf das'],
  ['Die Bibliothek befindet sich ___ Universität.', 'in der'], ['Standard German: Ich bin ___ Uni.', 'an der'], ['Regional Austrian: Ich bin ___ Uni.', 'auf der'],
  ['Physical interior: Wir treffen uns ___ Uni.', 'in der'], ['Sie lehrt ___ Universität Wien.', 'an der'], ['Er arbeitet ___ Institut.', 'am'],
  ['Die Mensa ist ___ Hochschulgebäude.', 'im'], ['Ich habe einen Termin ___ Universität.', 'an der'], ['Sie ist Studentin ___ Freien Universität.', 'an der'],
  ['Das Seminar findet ___ Uni statt. (inside)', 'in der'], ['In Austria hört man oft: ___ Uni.', 'auf der'],
  ['Which is the standard institutional expression?', 'an der Universität'], ['Which expression means physically inside?', 'in der Universität'],
  ['Which expression is regional/informal?', 'auf der Universität'], ['Der Forscher arbeitet ___ Institut.', 'am'], ['Meine Schwester studiert ___ Hochschule.', 'an der'],
] as const, left => left, 'Standard German uses an der Universität for institutional affiliation, in der for physical interior, and auf der mainly regionally or informally.');

const destinationPrep = fromRows([
  ['Ich fahre ___ Berlin.', 'nach'], ['Wir fliegen ___ Deutschland.', 'nach'], ['Sie reist ___ Japan.', 'nach'], ['Geh ___ links!', 'nach'],
  ['Ich fahre ___ Schweiz.', 'in die'], ['Wir fliegen ___ Türkei.', 'in die'], ['Sie reisen ___ USA.', 'in die'], ['Er fährt ___ Iran.', 'in den'],
  ['Wir fahren ___ Alpen.', 'in die'], ['Ich gehe ___ meiner Oma.', 'zu'], ['Er muss ___ Arzt.', 'zum'], ['Sie fährt ___ Bank.', 'zur'],
  ['Wir gehen ___ Konzert.', 'zum'], ['Kommst du ___ mir?', 'zu'], ['Ich fahre ___ Hause.', 'nach'], ['Sie geht ___ Freundin.', 'zu ihrer'],
  ['Wir reisen ___ Italien.', 'nach'], ['Er fährt ___ Niederlande.', 'in die'], ['Sie geht ___ Post.', 'zur'], ['Ich muss ___ Friseur.', 'zum'],
  ['City without article → which preposition?', 'nach'], ['Country with article → which preposition?', 'in'], ['Person → which preposition?', 'zu'],
  ['Professional/service → which preposition?', 'zu'], ['Homeward fixed expression?', 'nach Hause'],
] as const, left => left, 'Use nach for cities and countries without an article, in + accusative for countries with an article, and zu + dative for people and services.');

const beiZu = fromRows([
  ['Ich bin ___ meiner Oma. (position)', 'bei'], ['Ich gehe ___ meiner Oma. (movement)', 'zu'], ['Ich wohne ___ meinen Eltern.', 'bei'],
  ['Komm ___ mir!', 'zu'], ['Ich arbeite ___ Siemens.', 'bei'], ['Ich bringe dich ___ deinen Eltern.', 'zu'],
  ['Ich bin ___ Arzt.', 'beim'], ['Ich gehe ___ Arzt.', 'zum'], ['Er ist ___ der Arbeit.', 'bei'], ['Er geht ___ Arbeit.', 'zur'],
  ['Ich bin ___ dir.', 'bei'], ['Ich komme ___ dir.', 'zu'], ['Wir bleiben ___ Hause.', 'zu'], ['Wir gehen ___ Hause.', 'nach'],
  ['Sie arbeitet ___ einer Bank.', 'bei'], ['Sie fährt ___ Bank.', 'zur'], ['Das Kind ist ___ seiner Freundin.', 'bei'], ['Das Kind geht ___ seiner Freundin.', 'zu'],
  ['Wo? Use bei or zu?', 'bei'], ['Wohin? Use bei or zu?', 'zu'], ['At home?', 'zu Hause'], ['Homeward?', 'nach Hause'],
  ['Er ist ___ Friseur.', 'beim'], ['Er geht ___ Friseur.', 'zum'], ['Ich übernachte ___ Freunden.', 'bei'],
] as const, left => left, 'bei + dative answers Wo? for position; zu + dative answers Wohin? for movement toward a person or service.');

const surfacePrep = fromRows([
  ['Das Buch liegt ___ Tisch.', 'auf dem'], ['Ich lege das Buch ___ Tisch.', 'auf den'], ['Das Bild hängt ___ Wand.', 'an der'],
  ['Ich hänge das Bild ___ Wand.', 'an die'], ['Die Katze sitzt ___ Dach.', 'auf dem'], ['Er steht ___ Fenster.', 'am'],
  ['Wir sitzen ___ Tisch.', 'am'], ['Ich sitze ___ Stuhl.', 'auf dem'], ['Sie wartet ___ Tür.', 'an der'], ['Das Kind spielt ___ Boden.', 'auf dem'],
  ['Wir wohnen ___ Meer.', 'am'], ['Die Stadt liegt ___ Donau.', 'an der'], ['Das Auto steht ___ Straße.', 'auf der'],
  ['Das Poster klebt ___ Tür.', 'an der'], ['Die Tasse steht ___ Tisch.', 'auf dem'], ['Er legt die Zeitung ___ Boden.', 'auf den'],
  ['Sie stellt die Leiter ___ Wand.', 'an die'], ['Wir treffen uns ___ Strand.', 'am'], ['Das Dorf liegt ___ See.', 'am'],
  ['Horizontal surface → an or auf?', 'auf'], ['Vertical contact → an or auf?', 'an'], ['At the table → ?', 'am Tisch'],
  ['On the chair → ?', 'auf dem Stuhl'], ['By the river → ?', 'am Fluss'], ['On the street → ?', 'auf der Straße'],
] as const, left => left, 'auf describes horizontal surfaces; an describes vertical contact, edges and locations beside water.');

const prepTraps = fromRows([
  ['I am going to Berlin: Ich fahre ___ Berlin.', 'nach'], ['I am in Berlin: Ich bin ___ Berlin.', 'in'], ['I am at home: Ich bin ___.', 'zu Hause'],
  ['I am going home: Ich gehe ___.', 'nach Hause'], ['I study at university: Ich studiere ___ Uni.', 'an der'], ['I am at the beach: Ich bin ___ Strand.', 'am'],
  ['I travel to Switzerland: Ich fahre ___ Schweiz.', 'in die'], ['I travel to Germany: Ich fahre ___ Deutschland.', 'nach'],
  ['I go to my friend: Ich gehe ___ meinem Freund.', 'zu'], ['I go to Berlin: Ich fahre ___ Berlin.', 'nach'],
  ['He studies at the university: Er studiert ___ Uni.', 'an der'], ['She attends the Goethe-Gymnasium: Sie geht ___ Goethe-Gymnasium.', 'auf das'],
  ['Correct contraction: zu dem Arzt', 'zum Arzt'], ['Correct contraction: zu der Schule', 'zur Schule'], ['Correct contraction: an dem Tisch', 'am Tisch'],
  ['Correct contraction: in dem Haus', 'im Haus'], ['Wo? normally selects which case?', 'Dativ'], ['Wohin? normally selects which case?', 'Akkusativ'],
  ['City/country without article?', 'nach'], ['Country with article?', 'in + Akkusativ'], ['Person?', 'zu + Dativ'],
  ['University standard?', 'an der Universität'], ['School attendance?', 'auf der Schule'], ['Position at someone’s place?', 'bei + Dativ'],
  ['Movement to someone’s place?', 'zu + Dativ'],
] as const, left => left, 'Choose German place prepositions by meaning: position versus movement, destination type, institution and conventional expression.');

export const B1_PRACTICE_EXERCISES: GrammarExercise[] = [
  ...topic('b1-1-1', relative), ...topic('b1-1-2', pairedConnectors), ...topic('b1-1-3', infinitiveZu),
  ...topic('b1-2-1', pluperfect), ...topic('b1-2-2', future), ...topic('b1-2-3-1', wouldForm), ...topic('b1-2-3-2', strongK2),
  ...topic('b1-2-3-3', modalK2), ...topic('b1-2-3-4', pastK2), ...topic('b1-2-3-5', pastModalK2),
  ...topic('b1-2-4-1', passivePresent), ...topic('b1-2-5-1', passivePast), ...topic('b1-2-5-2', passivePerfect), ...topic('b1-2-5-3', passiveChoice),
  ...topic('b1-2-6-1', passiveModalPresent), ...topic('b1-2-6-2', passiveModalPast), ...topic('b1-2-6-3', passiveModalPerfect),
  ...topic('b1-3-1', genitive), ...topic('b1-3-2', genitivePreps), ...topic('b1-4-1', fixedVerbPreps), ...topic('b1-4-2', woDa),
  ...topic('b1-prep-in-zu-an', schoolPrep), ...topic('b1-prep-universite', universityPrep), ...topic('b1-prep-nach-in-zu', destinationPrep),
  ...topic('b1-prep-bei-zu', beiZu), ...topic('b1-prep-an-auf-position', surfacePrep), ...topic('b1-prep-pieges', prepTraps),
];
