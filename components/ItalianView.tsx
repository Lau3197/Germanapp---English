import React, { useState } from 'react';

// Contrastive Italian -> German guide. All learner-facing text is intentionally
// in Italian: this tab is written for an Italian native speaker, not for the
// English UI audience.
type ItalianPanel = 'frase' | 'casi' | 'verbi' | 'trappole' | 'suoni' | 'siciliano';

interface ContrastBlock {
  id: string;
  badge: string;
  title: string;
  rule: string;
  it: string;
  de: string;
  literal?: string;
  trap: string;
}

interface Mistake {
  id: string;
  tag: string;
  wrong: string;
  right: string;
  why: string;
}

interface FalseFriend {
  de: string;
  meaning: string;
  looksLike: string;
  realWord: string;
}

interface Rection {
  it: string;
  de: string;
  note: string;
}

interface SoundNote {
  id: string;
  symbol: string;
  title: string;
  text: string;
  examples: string[];
}

interface SicilyNote {
  id: string;
  verdict: 'aiuta' | 'attenzione' | 'uguale';
  title: string;
  text: string;
}

const sentenceBlocks: ContrastBlock[] = [
  {
    id: 'v2',
    badge: 'Regola numero uno',
    title: 'Il verbo coniugato sta sempre al secondo posto',
    rule: 'In italiano l’ordine è flessibile e il verbo segue il soggetto. In tedesco, nella frase principale, il verbo coniugato occupa la seconda casella e basta. Se in prima posizione metti qualcosa che non è il soggetto (tempo, luogo, complemento), il soggetto scivola subito dopo il verbo.',
    it: 'Domani vado a Berlino con Marco.',
    de: 'Morgen fahre ich mit Marco nach Berlin.',
    literal: 'parola per parola: «Domani vado io con Marco a Berlino.»',
    trap: '«Morgen ich fahre…» è l’errore più frequente in assoluto. Prima del verbo ci sta un elemento solo: «morgen» e «ich» non possono occupare tutti e due la prima casella.'
  },
  {
    id: 'klammer',
    badge: 'Satzklammer',
    title: 'Il verbo si spezza in due e abbraccia la frase',
    rule: 'La parte coniugata resta al secondo posto, tutto il resto del verbo (participio, infinito, prefisso separabile) va in fondo. In mezzo ci finisce l’intero contenuto della frase.',
    it: 'Ieri ho parlato a lungo con mio fratello del problema.',
    de: 'Ich habe gestern mit meinem Bruder lange über das Problem gesprochen.',
    literal: 'parola per parola: «Ho ieri con mio fratello a lungo del problema parlato.»',
    trap: 'In italiano «ho parlato» è un blocco unico. In tedesco separarlo non è una scelta stilistica: haben e gesprochen non possono stare vicini. Chi ascolta capisce che cosa hai fatto solo all’ultima parola — bisogna abituarsi ad aspettare la fine invece di rispondere a metà frase.'
  },
  {
    id: 'nebensatz',
    badge: 'Subordinate',
    title: 'Dopo dass, weil, wenn… il verbo va all’ultimo posto',
    rule: 'Dopo dass, weil, wenn, ob, obwohl, während, als, damit e dopo i pronomi relativi, il verbo coniugato scivola alla fine, dopo ogni complemento.',
    it: 'So che Marco domani viene a Monaco.',
    de: 'Ich weiß, dass Marco morgen nach München kommt.',
    trap: 'weil manda il verbo in fondo, denn no («…, denn Marco kommt morgen»). Siccome tutti e due si traducono con «perché», l’italofono usa weil mantenendo l’ordine italiano. E la virgola davanti alla subordinata in tedesco è obbligatoria, non è questione di gusto.'
  },
  {
    id: 'tekamolo',
    badge: 'TeKaMoLo',
    title: 'L’ordine dei complementi è quasi l’inverso dell’italiano',
    rule: 'Con più complementi l’ordine di default è Tempo – Causa – Modo – Luogo (TEmporal, KAusal, MOdal, LOkal). L’italiano tende a mettere il luogo subito dopo il verbo e il tempo in fondo.',
    it: 'Vado a Colonia in treno domani per lavoro.',
    de: 'Ich fahre morgen wegen der Arbeit mit dem Zug nach Köln.',
    trap: 'Puoi spostare un complemento in prima posizione per enfasi («Nach Köln fahre ich morgen…»), ma allora scatta l’inversione del soggetto. Quello che non si può fare è sparpagliare i complementi a orecchio come in italiano.'
  },
  {
    id: 'objekte',
    badge: 'Due oggetti',
    title: 'Dativo prima dell’accusativo — tranne con i pronomi',
    rule: 'Con due nomi: prima il dativo, poi l’accusativo. Se uno dei due è pronome, il pronome passa davanti. Se sono pronomi tutti e due, l’ordine si ribalta: prima accusativo, poi dativo.',
    it: 'Do il libro a mio fratello. → Glielo do.',
    de: 'Ich gebe meinem Bruder das Buch. → Ich gebe es ihm.',
    trap: 'L’italiano «glielo» è dativo + accusativo saldati insieme. In tedesco l’ordine è esattamente il contrario: es ihm, mai «ihm es».'
  },
  {
    id: 'negation',
    badge: 'Negazione',
    title: 'nicht ha un posto preciso, e non si raddoppia mai',
    rule: 'Se neghi tutta la frase, nicht va il più a destra possibile ma prima della parte finale del verbo, prima dell’aggettivo predicativo e prima del complemento di luogo legato al verbo. Se neghi un solo elemento, nicht sta subito davanti a quell’elemento.',
    it: 'Non ho visto il film. / Non ho visto niente.',
    de: 'Ich habe den Film nicht gesehen. / Ich habe nichts gesehen.',
    trap: 'Niente doppia negazione. «Non ho visto niente» ha due negazioni in italiano, in tedesco ne resta una sola: nichts. Vale anche per nie, niemand, nirgendwo: «Ich habe nie nichts gesagt» significherebbe il contrario di quello che vuoi dire.'
  },
  {
    id: 'subjekt',
    badge: 'Soggetto',
    title: 'Il soggetto non si può mai omettere',
    rule: 'L’italiano è una lingua a soggetto nullo: «piove», «vengo subito». Il tedesco no: ogni frase ha un soggetto espresso, anche solo formale (es).',
    it: 'Piove. / C’è troppo rumore. / Ci sono molti problemi.',
    de: 'Es regnet. / Es ist zu laut. / Es gibt viele Probleme.',
    trap: 'es gibt regge sempre l’accusativo ed è sempre singolare: «es gibt viele Probleme», mai «es gibt sind». «C’è» e «ci sono» si traducono con la stessa identica forma.'
  }
];

const caseBlocks: ContrastBlock[] = [
  {
    id: 'faelle',
    badge: 'Quattro casi',
    title: 'Il caso fa il lavoro che in italiano fanno le preposizioni',
    rule: 'Molto di ciò che l’italiano esprime con «a» o «di», il tedesco lo esprime cambiando la forma dell’articolo. Il dativo da solo vale «a qualcuno», il genitivo da solo vale «di qualcuno».',
    it: 'Do il libro al bambino. / Il libro del bambino.',
    de: 'Ich gebe dem Kind das Buch. / Das Buch des Kindes.',
    trap: 'Non aggiungere una preposizione per sicurezza: «Ich gebe zu dem Kind…» è sbagliato. Il caso ha già fatto tutto il lavoro da solo.'
  },
  {
    id: 'endungen',
    badge: 'Desinenze',
    title: 'La grammatica sta nelle sillabe finali atone',
    rule: 'In italiano l’informazione grammaticale sta sulla desinenza del nome (amico → amici). In tedesco il nome spesso non cambia: cambiano l’articolo e la desinenza dell’aggettivo, in sillabe deboli e non accentate — der/den/dem/des, -e/-en/-em/-er.',
    it: 'un brav’uomo → a un brav’uomo',
    de: 'ein guter Mann → einem guten Mann',
    trap: 'Sono proprio le sillabe che l’orecchio italiano tende a mangiarsi o a chiudere. Ma den Mann ≠ dem Mann: sbagliare la vocale finale non è un accento straniero, è un’altra frase.'
  },
  {
    id: 'genus',
    badge: 'Tre generi',
    title: 'Il genere non coincide quasi mai con l’italiano',
    rule: 'Oltre a maschile e femminile c’è il neutro, che in italiano non esiste. Il genere va imparato insieme alla parola, sempre, perché la corrispondenza con l’italiano è puramente casuale.',
    it: 'il sole, la luna, la ragazza, il latte, la macchina, il burro',
    de: 'die Sonne, der Mond, das Mädchen, die Milch, das Auto, die Butter',
    trap: 'Sole e luna sono invertiti rispetto all’italiano. Mädchen («ragazza») è neutro: tutti i diminutivi in -chen e -lein lo sono, anche quando indicano persone. Non imparare mai «Milch», impara «die Milch».'
  },
  {
    id: 'wechsel',
    badge: 'Wechselpräpositionen',
    title: 'Accusativo = movimento, dativo = posizione',
    rule: 'in, an, auf, über, unter, vor, hinter, neben, zwischen reggono due casi. Se rispondono alla domanda wohin? (dove vai) → accusativo. Se rispondono a wo? (dove sei) → dativo.',
    it: 'Vado a scuola. / Sono a scuola.',
    de: 'Ich gehe in die Schule. / Ich bin in der Schule.',
    trap: 'In italiano la preposizione è identica nei due casi, quindi manca completamente il campanello d’allarme. Prima di ogni in/auf/an fermati e chiediti: wohin o wo?'
  },
  {
    id: 'plural',
    badge: 'Plurale',
    title: 'Il plurale non ha una regola: si impara a memoria',
    rule: 'Ci sono cinque tipi di plurale (-e, -er, -(e)n, -s, invariato), più l’eventuale Umlaut sulla vocale della radice. Va memorizzato insieme all’articolo, come il genere.',
    it: 'il libro → i libri (regolare e prevedibile)',
    de: 'das Buch → die Bücher; der Mann → die Männer; die Frau → die Frauen; das Auto → die Autos',
    trap: 'Al dativo plurale il nome prende una -n in più: mit den Kindern, mit den Freunden, aus den Städten. Insieme al genitivo singolare in -s è l’unico punto in cui si declina davvero anche il nome.'
  },
  {
    id: 'artikel',
    badge: 'Articoli',
    title: 'A volte l’articolo c’è dove l’italiano non ce l’ha, e viceversa',
    rule: 'Mestieri, nazionalità e religioni vanno senza articolo dopo sein e werden. I nomi di paese normalmente non hanno articolo, tranne un gruppo chiuso (die Schweiz, die Türkei, die USA, der Iran).',
    it: 'Sono un ingegnere. / Vado in Germania. / Vado in Svizzera.',
    de: 'Ich bin Ingenieur. / Ich fahre nach Deutschland. / Ich fahre in die Schweiz.',
    trap: '«Ich bin ein Ingenieur» suona come «sono un ingegnere fra tanti» ed è quasi sempre da evitare. E il moto a luogo è nach per i paesi senza articolo, in + accusativo per quelli con articolo.'
  }
];

const verbBlocks: ContrastBlock[] = [
  {
    id: 'trennbar',
    badge: 'Verbi separabili',
    title: 'Il prefisso vola in fondo alla frase',
    rule: 'Non esiste niente di simile in italiano. Il prefisso fa parte del verbo e ne cambia il significato, ma nella frase principale si stacca e va all’ultimo posto.',
    it: 'Mi alzo alle sette.',
    de: 'Ich stehe um sieben Uhr auf.',
    literal: 'parola per parola: «Io sto alle sette su.»',
    trap: 'Il prefisso non è un dettaglio, è il verbo: stehen (stare in piedi), aufstehen (alzarsi), verstehen (capire), bestehen (superare un esame). Con zu il prefisso si infila in mezzo: aufzustehen, non «zu aufstehen».'
  },
  {
    id: 'vergangenheit',
    badge: 'Passato',
    title: 'Un solo passato al posto di tre',
    rule: 'Il tedesco non distingue imperfetto, passato prossimo e passato remoto. «Mangiavo», «ho mangiato» e «mangiai» finiscono tutti in ich habe gegessen (parlato) oppure ich aß (scritto). La differenza fra Perfekt e Präteritum è di registro, non di aspetto.',
    it: 'Da bambino mangiavo sempre alle sette.',
    de: 'Als Kind habe ich immer um sieben gegessen.',
    trap: 'Non cercare l’imperfetto: non c’è. L’abitudine e la durata si esprimono con gli avverbi (früher, immer, jeden Tag, gerade, lange). Nel parlato si usa quasi sempre il Perfekt, tranne sein, haben e i modali, che restano al Präteritum anche a voce: war, hatte, konnte, wollte, musste.'
  },
  {
    id: 'progressiv',
    badge: 'Aspetto',
    title: 'La forma progressiva non esiste',
    rule: '«Sto mangiando» non ha un equivalente grammaticale. Il presente copre entrambi i valori; per insistere sul «proprio adesso» si aggiunge gerade.',
    it: 'Sto lavorando, ti richiamo dopo.',
    de: 'Ich arbeite gerade, ich rufe dich später an.',
    trap: '«Ich bin arbeitend» non esiste in nessun registro. «Ich bin am Arbeiten» esiste nel parlato regionale (soprattutto a ovest), ma in un esame non usarlo.'
  },
  {
    id: 'hilfsverb',
    badge: 'haben o sein',
    title: 'Le regole dell’ausiliare non sono quelle italiane',
    rule: 'sein con i verbi di movimento con meta e di cambiamento di stato (gehen, fahren, kommen, aufstehen, einschlafen, werden, passieren) e con sein e bleiben. Tutto il resto vuole haben.',
    it: 'Mi sono lavato. / Sono rimasto a casa.',
    de: 'Ich habe mich gewaschen. / Ich bin zu Hause geblieben.',
    trap: 'Questo è l’errore automatico numero uno: i verbi riflessivi tedeschi prendono sempre haben, quelli italiani sempre essere. «Ich bin mich gewaschen» è la traduzione letterale di «mi sono lavato», ed è sbagliata.'
  },
  {
    id: 'konjunktiv',
    badge: 'Konjunktiv',
    title: 'Il Konjunktiv non è il congiuntivo italiano',
    rule: 'Dopo penso che, credo che, voglio che, è possibile che, in tedesco si usa l’indicativo e basta. Il Konjunktiv II corrisponde piuttosto al condizionale e al periodo ipotetico italiano; il Konjunktiv I serve al discorso indiretto formale dei giornali.',
    it: 'Penso che sia troppo caro. / Sarebbe troppo caro.',
    de: 'Ich denke, dass es zu teuer ist. / Es wäre zu teuer.',
    trap: 'Non «alzare il registro» mettendo wäre o sei dopo denken, glauben, wollen, hoffen: in tedesco non suona colto, suona come un’ipotesi irreale o come una citazione di seconda mano.'
  },
  {
    id: 'modalverben',
    badge: 'Modali',
    title: 'Infinito nudo dopo i modali, zu quasi ovunque altrove',
    rule: 'Dopo müssen, können, wollen, sollen, dürfen, mögen — e dopo werden, lassen, sehen, hören, gehen — l’infinito va senza zu. In tutti gli altri casi serve zu.',
    it: 'Devo lavorare. / Cerco di lavorare.',
    de: 'Ich muss arbeiten. / Ich versuche zu arbeiten.',
    trap: 'müssen negato non vuol dire «non devo» nel senso di divieto, ma «non è necessario»: «Ich muss nicht arbeiten» = non sono obbligato a lavorare. Il divieto è nicht dürfen: «Ich darf nicht arbeiten» = non mi è permesso.'
  }
];

const rections: Rection[] = [
  { it: 'aspettare qualcosa', de: 'warten auf + accusativo', note: 'Ich warte auf den Bus. In italiano il verbo è transitivo, in tedesco no.' },
  { it: 'telefonare a qualcuno', de: 'jemanden anrufen (accusativo)', note: 'Ich rufe meine Mutter an. Qui succede il contrario: l’italiano ha «a», il tedesco è transitivo.' },
  { it: 'aiutare qualcuno', de: 'jemandem helfen (dativo)', note: 'Ich helfe dir. Stessa cosa con danken, folgen, gratulieren, antworten, gehören.' },
  { it: 'chiedere a qualcuno', de: 'jemanden fragen (accusativo)', note: 'Ich frage meinen Chef. Ma «rispondere a qualcuno» è jemandem antworten, col dativo.' },
  { it: 'pensare a qualcosa', de: 'denken an + accusativo', note: 'Ich denke oft an dich. Con über + accusativo il senso cambia: riflettere su un tema.' },
  { it: 'partecipare a qualcosa', de: 'teilnehmen an + dativo', note: 'Ich nehme an dem Kurs teil. Verbo separabile: teil vola in fondo.' },
  { it: 'avere paura di', de: 'Angst haben vor + dativo', note: 'Ich habe Angst vor Hunden. Mai «Angst von».' },
  { it: 'essere contento di', de: 'sich freuen über + acc. / auf + acc.', note: 'über per qualcosa che è già successo, auf per qualcosa che deve ancora arrivare.' },
  { it: 'interessarsi di', de: 'sich interessieren für + accusativo', note: 'Ich interessiere mich für Musik. Il riflessivo qui è obbligatorio.' },
  { it: 'dipendere da', de: 'abhängen von + dativo', note: 'Das hängt von dir ab. Separabile, e la preposizione non è «da».' }
];

const mistakes: Mistake[] = [
  { id: 'm1', tag: 'Ordine', wrong: 'Morgen ich gehe ins Kino.', right: 'Morgen gehe ich ins Kino.', why: 'Il verbo coniugato è il secondo elemento. Se «morgen» prende la prima casella, il soggetto passa dopo il verbo.' },
  { id: 'm2', tag: 'Ordine', wrong: 'Ich weiß, dass er kommt morgen.', right: 'Ich weiß, dass er morgen kommt.', why: 'Nella subordinata il verbo coniugato va all’ultimo posto, dopo tutti i complementi.' },
  { id: 'm3', tag: 'Ordine', wrong: 'Weil ich bin müde, bleibe ich zu Hause.', right: 'Weil ich müde bin, bleibe ich zu Hause.', why: 'weil è subordinante e manda il verbo in fondo. Con denn l’ordine sarebbe rimasto normale.' },
  { id: 'm4', tag: 'Aspetto', wrong: 'Ich bin arbeitend.', right: 'Ich arbeite gerade.', why: 'Il tedesco non ha la forma progressiva: il presente semplice copre anche «sto facendo».' },
  { id: 'm5', tag: 'Verbi', wrong: 'Ich habe 30 Jahre.', right: 'Ich bin 30 Jahre alt.', why: 'L’età si esprime con sein, non con haben come in italiano e in francese.' },
  { id: 'm6', tag: 'Verbi', wrong: 'Ich bin mich gewaschen.', right: 'Ich habe mich gewaschen.', why: 'I verbi riflessivi tedeschi formano il Perfekt con haben, senza eccezioni.' },
  { id: 'm7', tag: 'Reggenza', wrong: 'Ich warte den Bus.', right: 'Ich warte auf den Bus.', why: 'warten regge auf + accusativo, anche se «aspettare» in italiano è transitivo.' },
  { id: 'm8', tag: 'Reggenza', wrong: 'Ich rufe meiner Mutter an.', right: 'Ich rufe meine Mutter an.', why: 'anrufen è transitivo e vuole l’accusativo, anche se in italiano si telefona «a» qualcuno.' },
  { id: 'm9', tag: 'Reggenza', wrong: 'Ich helfe dich.', right: 'Ich helfe dir.', why: 'helfen regge il dativo. Stessa cosa per danken, folgen, gratulieren, antworten.' },
  { id: 'm10', tag: 'Reggenza', wrong: 'Ich habe Angst von Hunden.', right: 'Ich habe Angst vor Hunden.', why: 'La reggenza è fissa: Angst vor + dativo. La preposizione non si traduce a senso.' },
  { id: 'm11', tag: 'Negazione', wrong: 'Ich habe nicht nichts gesagt.', right: 'Ich habe nichts gesagt.', why: 'Una sola negazione per frase. La doppia negazione italiana qui si annulla e ribalta il senso.' },
  { id: 'm12', tag: 'Negazione', wrong: 'Ich mag nicht Fisch.', right: 'Ich mag keinen Fisch.', why: 'Davanti a un nome senza articolo o con articolo indeterminativo la negazione è kein, non nicht.' },
  { id: 'm13', tag: 'Verbi', wrong: 'Ich muss nicht rauchen (per dire «non posso fumare»).', right: 'Ich darf nicht rauchen.', why: 'nicht müssen = non è necessario. Il divieto si esprime con nicht dürfen.' },
  { id: 'm14', tag: 'Modo', wrong: 'Ich denke, dass er Recht hätte.', right: 'Ich denke, dass er Recht hat.', why: 'Dopo denken, glauben, hoffen si usa l’indicativo: il congiuntivo italiano qui non si traduce.' },
  { id: 'm15', tag: 'Preposizioni', wrong: 'Ich gehe zur Hause.', right: 'Ich gehe nach Hause. (ma: Ich bin zu Hause.)', why: 'nach Hause per il movimento, zu Hause per lo stato. Sono due espressioni fisse.' },
  { id: 'm16', tag: 'Preposizioni', wrong: 'Ich fahre in Deutschland.', right: 'Ich fahre nach Deutschland.', why: 'nach per i paesi e le città senza articolo; in + accusativo solo per i paesi con articolo (in die Schweiz).' },
  { id: 'm17', tag: 'Casi', wrong: 'Ich bin einverstanden mit dich.', right: 'Ich bin mit dir einverstanden.', why: 'mit regge sempre il dativo, e in tedesco l’aggettivo predicativo chiude la frase.' },
  { id: 'm18', tag: 'Casi', wrong: 'Ich lerne Deutsch seit drei Jahre.', right: 'Ich lerne seit drei Jahren Deutsch.', why: 'seit regge il dativo, e al dativo plurale il nome prende la -n.' },
  { id: 'm19', tag: 'Articoli', wrong: 'Ich bin ein Ingenieur.', right: 'Ich bin Ingenieur.', why: 'Mestieri, nazionalità e religioni vanno senza articolo dopo sein e werden.' },
  { id: 'm20', tag: 'Soggetto', wrong: 'Ist viele Leute hier.', right: 'Es gibt hier viele Leute. / Hier sind viele Leute.', why: 'Il soggetto non si omette mai, e «c’è / ci sono» si dice es gibt + accusativo, sempre al singolare.' }
];

const falseFriends: FalseFriend[] = [
  { de: 'die Firma', meaning: 'l’azienda', looksLike: 'la firma', realWord: 'die Unterschrift' },
  { de: 'das Gymnasium', meaning: 'il liceo', looksLike: 'la palestra', realWord: 'die Turnhalle' },
  { de: 'der Chef', meaning: 'il capo, il responsabile', looksLike: 'lo chef, il cuoco', realWord: 'der Koch' },
  { de: 'brav', meaning: 'ubbidiente, per bene', looksLike: 'bravo, capace', realWord: 'gut, tüchtig' },
  { de: 'das Regal', meaning: 'lo scaffale', looksLike: 'il regalo', realWord: 'das Geschenk' },
  { de: 'die Peperoni', meaning: 'i peperoncini piccanti', looksLike: 'i peperoni', realWord: 'die Paprika' },
  { de: 'die Mappe', meaning: 'la cartellina', looksLike: 'la mappa', realWord: 'die Karte' },
  { de: 'die Birne', meaning: 'la pera (e la lampadina)', looksLike: 'la birra', realWord: 'das Bier' },
  { de: 'die Note', meaning: 'il voto scolastico', looksLike: 'la nota, il conto', realWord: 'die Rechnung' },
  { de: 'der Termin', meaning: 'l’appuntamento fissato', looksLike: 'il termine, la scadenza', realWord: 'die Frist' },
  { de: 'das Konfetti', meaning: 'i coriandoli', looksLike: 'i confetti', realWord: 'die Dragees' },
  { de: 'das Handy', meaning: 'il cellulare', looksLike: 'un anglicismo che in inglese non esiste', realWord: 'in inglese: mobile phone' }
];

const soundNotes: SoundNote[] = [
  {
    id: 'umlaut',
    symbol: 'ü ö',
    title: 'Le vocali che l’italiano non ha',
    text: 'ü si ottiene dicendo «i» con le labbra arrotondate da «u». ö si ottiene dicendo «e» con le labbra da «o». Non sono un vezzo: l’Umlaut è spesso l’unica differenza fra singolare e plurale.',
    examples: ['Mutter → Mütter', 'Bruder → Brüder', 'schön, hören, können', 'Tür, für, müde']
  },
  {
    id: 'h',
    symbol: 'h',
    title: 'La h iniziale è un soffio vero',
    text: 'In italiano la h è muta e questo è il riflesso più difficile da rompere. A inizio di parola il tedesco la pronuncia davvero, con un soffio di aria. Dopo una vocale invece è muta e serve solo ad allungare la vocale.',
    examples: ['Haus, hier, Hund, haben (soffiata)', 'gehen, Uhr, ihn, sehr (muta, vocale lunga)']
  },
  {
    id: 'wv',
    symbol: 'w / v',
    title: 'w si legge v, v si legge f',
    text: 'È uno scambio meccanico che va automatizzato. Solo nei prestiti stranieri la v resta v (Vase, Villa, Video).',
    examples: ['Wasser = «vasser»', 'Wein = «vain»', 'Vater = «fater»', 'viel = «fil»']
  },
  {
    id: 'z',
    symbol: 'z / tz',
    title: 'z è sempre «ts», mai la z di «zaino»',
    text: 'La z tedesca è sempre sorda e affricata, in qualunque posizione. Lo stesso vale per tz e per il gruppo -tion.',
    examples: ['Zeit = «tsait»', 'zwei, Zimmer, Katze', 'Nation = «natsion»']
  },
  {
    id: 's',
    symbol: 's / ß',
    title: 's davanti a vocale è sonora, ss e ß sono sorde',
    text: 'La s iniziale davanti a vocale suona come la s di «rosa». ss e ß invece sono sempre sorde; ß segnala anche che la vocale prima è lunga.',
    examples: ['Sonne, sagen, lesen (sonora)', 'essen, Straße, Fuß (sorda)']
  },
  {
    id: 'stsp',
    symbol: 'st- / sp-',
    title: 'A inizio di parola si leggono «sht-» e «shp-»',
    text: 'Vale solo all’inizio di parola o di elemento composto. All’interno restano st e sp normali.',
    examples: ['Straße = «shtrasse»', 'Stadt, sprechen, Sport', 'ma: Fenster, Wespe (normali)']
  },
  {
    id: 'ch',
    symbol: 'ch',
    title: 'Due suoni diversi, nessuno dei due è «k»',
    text: 'Dopo a, o, u e au è gutturale, un raschio in gola. Dopo e, i, ä, ö, ü e dopo consonante è palatale, una specie di «sc» molto morbida e soffiata. sch invece è sempre la «sc» di «scena».',
    examples: ['Buch, machen, auch (gutturale)', 'ich, nicht, Milch, München (palatale)', 'Schule, Tisch, schön (= «sc»)']
  },
  {
    id: 'diphthonge',
    symbol: 'ei / ie / eu',
    title: 'Si leggono al contrario di come sembra',
    text: 'ei si legge «ai», ie si legge «i» lunga, eu e äu si leggono «oi». Confondere ei e ie è l’errore di lettura più frequente.',
    examples: ['mein, Wein, Zeit = «main, vain, tsait»', 'Liebe, Bier, wie = «libe, bir, vi»', 'Leute, heute, Häuser = «loite, hoite, hoiser»']
  },
  {
    id: 'doppel',
    symbol: 'nn / tt',
    title: 'Le doppie non si allungano: accorciano la vocale',
    text: 'Questa è la differenza fonetica più sottile e più importante fra italiano e tedesco. In italiano la doppia si tiene a lungo («nonna»). In tedesco la consonante doppia si pronuncia semplice e segnala solo che la vocale prima è breve.',
    examples: ['Sonne: una n breve, o corta', 'Miete (lunga) ≠ Mitte (corta)', 'Staat ≠ Stadt, ihn ≠ in, Ofen ≠ offen']
  },
  {
    id: 'auslaut',
    symbol: '-b -d -g',
    title: 'A fine parola le sonore diventano sorde',
    text: 'Si chiama Auslautverhärtung. Vale a fine parola e a fine sillaba, anche dentro le parole composte.',
    examples: ['und = «unt»', 'Tag = «tak»', 'Kind = «kint»', 'gib = «gip»']
  },
  {
    id: 'schwa',
    symbol: '-e / -er',
    title: 'Le finali sono deboli, ma non si mangiano',
    text: 'La -e finale è una vocale neutra e sorda, non una «e» piena all’italiana; -er finale suona quasi come una «a» debole. Deboli sì, ma sono le desinenze: eliminarle o sostituirle cambia il caso e il genere.',
    examples: ['ich sage, eine gute Frau', 'Vater, Mutter, besser, wieder = «fata, muta, bessa, vida»']
  },
  {
    id: 'stuetzvokal',
    symbol: '— |',
    title: 'Niente vocale d’appoggio, e stacco davanti alle vocali',
    text: 'L’italiano evita le parole che finiscono in consonante e tende ad aggiungere una vocalina finale. In tedesco la parola si chiude di netto sulla consonante. E ogni parola che inizia per vocale parte con un piccolo colpo di glottide, invece di legarsi alla precedente come in italiano.',
    examples: ['gesprochen, Hund, und — senza «-e» finale', '«am Abend» con uno stacco, non «amabend»']
  },
  {
    id: 'akzent',
    symbol: 'Á',
    title: 'L’accento cade quasi sempre sulla prima sillaba',
    text: 'Nelle parole germaniche l’accento è sulla radice, cioè di norma sulla prima sillaba. Nei verbi separabili cade sul prefisso, in quelli inseparabili sulla radice. I prestiti spesso fanno eccezione e portano l’accento in fondo.',
    examples: ['ÁRbeiten, LÉHrerin, FREUNDschaft', 'ÁUFstehen (separabile) ≠ verSTÉHen (inseparabile)', 'StuDÉNT, NaTÚR, TeleFÓN']
  }
];

const sicilyNotes: SicilyNote[] = [
  {
    id: 's1',
    verdict: 'uguale',
    title: 'La grammatica di partenza è la stessa',
    text: 'Il siciliano è una lingua romanza autonoma, non una versione storpiata dell’italiano. Ma rispetto al tedesco le grandi distanze — i quattro casi, il verbo al secondo posto, il verbo in fondo alle subordinate, i verbi separabili, il genere neutro — sono estranee tanto all’italiano quanto al siciliano. Su tutto quello che c’è in questa pagina il percorso di studio è identico: nessuna scorciatoia e nessun ostacolo in più.'
  },
  {
    id: 's2',
    verdict: 'aiuta',
    title: 'Il futuro: lo fai già come i tedeschi',
    text: 'Il siciliano non ha un futuro sintetico: si usa il presente con un avverbio di tempo (dumani vaiu a Palermu). Il tedesco parlato fa esattamente la stessa cosa: «Morgen fahre ich nach Palermo» è più naturale di «Ich werde morgen nach Palermo fahren», e werden + infinito si tiene per previsioni, promesse e supposizioni. È un’abitudine che agli italofoni di solito bisogna insegnare, e che tu hai già in partenza.'
  },
  {
    id: 's3',
    verdict: 'aiuta',
    title: 'Il gruppo str- ti viene gratis',
    text: 'In gran parte della Sicilia str- si pronuncia con un suono retroflesso, molto vicino a «shtr» (strata). È quasi esattamente la pronuncia tedesca di Straße, Strand, Streit, Strom. Dove l’italofono standard deve correggersi a fatica, tu parti avvantaggiato. L’unica accortezza è non estendere il suono dove il tedesco vuole una s normale, cioè all’interno di parola: Fenster, Wespe.'
  },
  {
    id: 's4',
    verdict: 'attenzione',
    title: 'Le vocali finali: è lì che si gioca la grammatica',
    text: 'Il siciliano ha un sistema a cinque vocali e le e/o atone si chiudono in i/u (pani, libbru, aviri). Trasferito al tedesco, questo riflesso trasforma le desinenze in poltiglia: -e diventa -i, -en diventa -in o -un. Ma in tedesco quelle sillabe atone sono la grammatica: dem Mann non è den Mann, eine gute Frau non è einen guten Mann. Vanno pronunciate con una vocale neutra e indistinta, mai chiuse in i o in u.'
  },
  {
    id: 's5',
    verdict: 'attenzione',
    title: 'Il passato remoto ti manda fuori strada',
    text: 'In siciliano il passato remoto copre anche il passato recentissimo (stamatina manciai). L’istinto porta a cercare l’equivalente tedesco, cioè il Präteritum (ich aß). Nel tedesco parlato vale il contrario: si usa il Perfekt quasi sempre (ich habe gegessen) e il Präteritum resta soprattutto lingua scritta. Le eccezioni da usare anche a voce sono war, hatte, konnte, wollte, musste, durfte.'
  },
  {
    id: 's6',
    verdict: 'attenzione',
    title: 'aviri a non è haben zu',
    text: 'L’obbligo in siciliano si costruisce con aviri a + infinito (haiu a travagghiari). La traduzione letterale haben zu + infinito in tedesco esiste, ma è formale e poco frequente. Nella lingua normale l’obbligo è müssen: Ich muss arbeiten. Per «bisogna, ci vuole» in senso impersonale si dice man muss.'
  },
  {
    id: 's7',
    verdict: 'uguale',
    title: 'Mettere davanti quello che conta: sì, ma con un vincolo',
    text: 'Il siciliano mette volentieri in testa alla frase l’elemento che porta il peso (bedda è, stancu sugnu). Il tedesco ama la stessa cosa e ti lascia spostare quasi qualunque elemento in prima posizione — con un vincolo assoluto: il verbo coniugato resta comunque al secondo posto e il soggetto lo segue. Müde bin ich. Nach Palermo fahre ich morgen. L’istinto della focalizzazione è utile, va solo incanalato nella regola V2.'
  },
  {
    id: 's8',
    verdict: 'attenzione',
    title: 'La h muta e le parole che finiscono in consonante',
    text: 'In siciliano come in italiano la h non si pronuncia mai e le parole finiscono quasi sempre in vocale. In tedesco la h iniziale è un soffio reale (Haus, Hund, haben) e le parole si chiudono di netto sulla consonante: niente vocale d’appoggio dopo gesprochen, Hund, und. Sono due riflessi da smontare con la lettura ad alta voce, non con la teoria.'
  }
];

const panelTabs = [
  { id: 'frase', label: 'La frase', icon: '🧱' },
  { id: 'casi', label: 'Casi e generi', icon: '🎯' },
  { id: 'verbi', label: 'Il verbo', icon: '⚙️' },
  { id: 'trappole', label: 'Trappole', icon: '⚠️' },
  { id: 'suoni', label: 'Pronuncia', icon: '🔊' },
  { id: 'siciliano', label: 'Se parli siciliano', icon: '🇮🇹' }
] as const;

const verdictStyles: Record<SicilyNote['verdict'], { label: string; bg: string; fg: string; card: string; border: string }> = {
  aiuta: {
    label: 'Vantaggio',
    bg: 'var(--sage-100)',
    fg: 'var(--sage-800)',
    card: 'var(--sage-50)',
    border: 'var(--sage-200)'
  },
  attenzione: {
    label: 'Attenzione',
    bg: 'var(--terracotta-100)',
    fg: 'var(--terracotta-800)',
    card: 'var(--terracotta-50)',
    border: 'var(--terracotta-100)'
  },
  uguale: {
    label: 'Nessuna differenza',
    bg: 'var(--sand-100)',
    fg: 'var(--sand-700)',
    card: 'var(--sand-50)',
    border: 'var(--sand-200)'
  }
};

const ContrastCard: React.FC<{ block: ContrastBlock; isOpen: boolean; onToggle: () => void }> = ({ block, isOpen, onToggle }) => (
  <div className="bg-white rounded-[2rem] overflow-hidden shadow-sm" style={{ border: '1px solid var(--terracotta-100)' }}>
    <button
      onClick={onToggle}
      className="w-full p-6 text-left flex items-start justify-between gap-4 hover:bg-slate-50"
    >
      <div>
        <span className="inline-block px-3 py-1 rounded-full text-xs font-black mb-3" style={{ backgroundColor: 'var(--turquoise-100)', color: 'var(--turquoise-800)' }}>
          {block.badge}
        </span>
        <h3 className="text-2xl font-black" style={{ color: 'var(--sand-900)' }}>{block.title}</h3>
      </div>
      <svg className={`w-6 h-6 transition-transform shrink-0 ${isOpen ? 'rotate-180' : ''}`} style={{ color: 'var(--sand-400)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
      </svg>
    </button>

    {isOpen && (
      <div className="px-6 pb-6 animate-in slide-in-from-top-2 duration-200">
        <p className="font-medium mb-5 text-lg" style={{ color: 'var(--sand-700)' }}>{block.rule}</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
          <div className="rounded-2xl p-5" style={{ backgroundColor: 'var(--sand-50)', border: '1px solid var(--sand-200)' }}>
            <p className="text-xs font-black uppercase tracking-wider mb-2" style={{ color: 'var(--sand-600)' }}>Italiano</p>
            <p className="text-lg font-bold" style={{ color: 'var(--sand-800)' }}>{block.it}</p>
          </div>
          <div className="rounded-2xl p-5" style={{ backgroundColor: 'var(--turquoise-50)', border: '1px solid var(--turquoise-100)' }}>
            <p className="text-xs font-black uppercase tracking-wider mb-2" style={{ color: 'var(--turquoise-800)' }}>Deutsch</p>
            <p className="text-lg font-black" style={{ color: 'var(--turquoise-900)' }}>{block.de}</p>
            {block.literal && (
              <p className="text-sm font-medium mt-2" style={{ color: 'var(--turquoise-700)' }}>{block.literal}</p>
            )}
          </div>
        </div>

        <div className="rounded-2xl p-5" style={{ backgroundColor: 'var(--terracotta-50)', border: '1px solid var(--terracotta-100)' }}>
          <p className="text-xs font-black uppercase tracking-wider mb-2" style={{ color: 'var(--terracotta-800)' }}>⚠️ La trappola</p>
          <p className="font-medium" style={{ color: 'var(--terracotta-900)' }}>{block.trap}</p>
        </div>
      </div>
    )}
  </div>
);

// Each accordion panel opens on its own first card, so switching tabs never
// lands the user on a wall of collapsed headers.
const firstBlockOf: Partial<Record<ItalianPanel, string>> = {
  frase: sentenceBlocks[0].id,
  casi: caseBlocks[0].id,
  verbi: verbBlocks[0].id
};

export const ItalianView: React.FC = () => {
  const [activePanel, setActivePanel] = useState<ItalianPanel>('frase');
  const [openBlock, setOpenBlock] = useState<string>(sentenceBlocks[0].id);

  const selectPanel = (panel: ItalianPanel) => {
    setActivePanel(panel);
    setOpenBlock(firstBlockOf[panel] ?? '');
  };

  const toggleBlock = (id: string) => setOpenBlock(current => (current === id ? '' : id));

  const renderBlocks = (blocks: ContrastBlock[]) => (
    <div className="space-y-5">
      {blocks.map(block => (
        <ContrastCard
          key={block.id}
          block={block}
          isOpen={openBlock === block.id}
          onToggle={() => toggleBlock(block.id)}
        />
      ))}
    </div>
  );

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="mb-10 text-center sm:text-left pb-10" style={{ borderBottom: '1px solid var(--terracotta-100)' }}>
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-black mb-5" style={{ backgroundColor: 'var(--sage-100)', color: 'var(--sage-800)' }}>
          <span>🇮🇹 → 🇩🇪</span>
          <span>Guida in italiano</span>
        </div>
        <h2 className="text-5xl sm:text-6xl font-black mb-4 tracking-tighter" style={{ color: 'var(--terracotta-800)' }}>Italiano e tedesco</h2>
        <p className="text-xl sm:text-2xl font-medium max-w-3xl" style={{ color: 'var(--sand-600)' }}>
          Le differenze di struttura che contano davvero e le trappole in cui cade quasi ogni italofono. Tutta la pagina è in italiano; gli esempi tedeschi sono in tedesco.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
        <div className="bg-white rounded-[2rem] p-6" style={{ border: '1px solid var(--terracotta-100)' }}>
          <p className="text-xs font-black uppercase tracking-wider mb-2" style={{ color: 'var(--terracotta-600)' }}>Il salto più grosso</p>
          <h3 className="text-2xl font-black mb-2" style={{ color: 'var(--sand-900)' }}>La posizione del verbo</h3>
          <p className="font-medium" style={{ color: 'var(--sand-600)' }}>Secondo posto nella principale, ultimo posto nella subordinata, e il verbo che si spezza in due abbracciando la frase.</p>
        </div>
        <div className="bg-white rounded-[2rem] p-6" style={{ border: '1px solid var(--terracotta-100)' }}>
          <p className="text-xs font-black uppercase tracking-wider mb-2" style={{ color: 'var(--turquoise-600)' }}>Il secondo salto</p>
          <h3 className="text-2xl font-black mb-2" style={{ color: 'var(--sand-900)' }}>I casi e le desinenze</h3>
          <p className="font-medium" style={{ color: 'var(--sand-600)' }}>Quattro casi al posto delle preposizioni, e l’informazione grammaticale nascosta in sillabe atone che l’orecchio italiano tende a ignorare.</p>
        </div>
        <div className="bg-white rounded-[2rem] p-6" style={{ border: '1px solid var(--terracotta-100)' }}>
          <p className="text-xs font-black uppercase tracking-wider mb-2" style={{ color: 'var(--sage-700)' }}>La buona notizia</p>
          <h3 className="text-2xl font-black mb-2" style={{ color: 'var(--sand-900)' }}>Meno tempi verbali</h3>
          <p className="font-medium" style={{ color: 'var(--sand-600)' }}>Niente imperfetto, niente passato remoto, niente forma progressiva, niente congiuntivo di cortesia: il sistema verbale tedesco è più povero di quello italiano.</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-3 mb-8">
        {panelTabs.map(panel => (
          <button
            key={panel.id}
            onClick={() => selectPanel(panel.id)}
            className="px-6 py-3 rounded-xl font-bold transition-all flex items-center gap-2"
            style={{
              backgroundColor: activePanel === panel.id ? 'var(--terracotta-600)' : 'white',
              color: activePanel === panel.id ? 'white' : 'var(--sand-600)',
              border: activePanel === panel.id ? 'none' : '1px solid var(--terracotta-200)',
              boxShadow: activePanel === panel.id ? '0 10px 30px -10px rgba(184, 93, 62, 0.4)' : 'none'
            }}
          >
            <span>{panel.icon}</span>
            {panel.label}
          </button>
        ))}
      </div>

      {activePanel === 'frase' && renderBlocks(sentenceBlocks)}
      {activePanel === 'casi' && renderBlocks(caseBlocks)}

      {activePanel === 'verbi' && (
        <div className="space-y-5">
          {renderBlocks(verbBlocks)}

          <div className="bg-white rounded-[2rem] p-8 shadow-sm" style={{ border: '1px solid var(--terracotta-100)' }}>
            <h3 className="text-3xl font-black mb-2" style={{ color: 'var(--terracotta-800)' }}>Reggenza: quando il verbo cambia le regole</h3>
            <p className="text-lg mb-6 max-w-3xl" style={{ color: 'var(--sand-600)' }}>
              Il caso e la preposizione richiesti da un verbo tedesco vanno imparati insieme al verbo. Tradurre a senso dall’italiano funziona raramente: spesso i due sistemi sono proprio invertiti.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {rections.map(rection => (
                <div key={rection.de} className="rounded-2xl p-5" style={{ backgroundColor: 'var(--sand-50)', border: '1px solid var(--sand-200)' }}>
                  <p className="text-sm font-bold mb-1" style={{ color: 'var(--sand-600)' }}>{rection.it}</p>
                  <p className="text-lg font-black mb-2" style={{ color: 'var(--turquoise-900)' }}>{rection.de}</p>
                  <p className="text-sm font-medium" style={{ color: 'var(--sand-600)' }}>{rection.note}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {activePanel === 'trappole' && (
        <div className="space-y-5">
          <div className="bg-white rounded-[2rem] p-8 shadow-sm" style={{ border: '1px solid var(--terracotta-100)' }}>
            <h3 className="text-3xl font-black mb-2" style={{ color: 'var(--terracotta-800)' }}>Gli errori che fanno tutti</h3>
            <p className="text-lg mb-6 max-w-3xl" style={{ color: 'var(--sand-600)' }}>
              Venti frasi sbagliate raccolte dall’interferenza tipica dell’italiano. Se ne riconosci qualcuna, è normale: sono errori di sistema, non di distrazione.
            </p>

            <div className="space-y-4">
              {mistakes.map(mistake => (
                <div key={mistake.id} className="rounded-2xl p-5" style={{ backgroundColor: 'var(--sand-50)', border: '1px solid var(--sand-200)' }}>
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-black mb-3" style={{ backgroundColor: 'var(--sand-100)', color: 'var(--sand-700)' }}>
                    {mistake.tag}
                  </span>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 mb-3">
                    <div className="rounded-xl px-4 py-3" style={{ backgroundColor: 'var(--terracotta-50)', border: '1px solid var(--terracotta-100)' }}>
                      <p className="text-xs font-black uppercase tracking-wider mb-1" style={{ color: 'var(--terracotta-700)' }}>✗ Sbagliato</p>
                      <p className="font-bold line-through" style={{ color: 'var(--terracotta-900)' }}>{mistake.wrong}</p>
                    </div>
                    <div className="rounded-xl px-4 py-3" style={{ backgroundColor: 'var(--sage-50)', border: '1px solid var(--sage-200)' }}>
                      <p className="text-xs font-black uppercase tracking-wider mb-1" style={{ color: 'var(--sage-700)' }}>✓ Giusto</p>
                      <p className="font-black" style={{ color: 'var(--sage-900)' }}>{mistake.right}</p>
                    </div>
                  </div>
                  <p className="font-medium" style={{ color: 'var(--sand-700)' }}>{mistake.why}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-[2rem] p-8 shadow-sm" style={{ border: '1px solid var(--terracotta-100)' }}>
            <h3 className="text-3xl font-black mb-2" style={{ color: 'var(--terracotta-800)' }}>Falsi amici</h3>
            <p className="text-lg mb-6 max-w-3xl" style={{ color: 'var(--sand-600)' }}>
              Parole tedesche che un italofono capisce «al volo» — e sbagliate.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {falseFriends.map(friend => (
                <div key={friend.de} className="rounded-2xl p-5" style={{ backgroundColor: 'var(--sand-50)', border: '1px solid var(--sand-200)' }}>
                  <p className="text-xl font-black mb-1" style={{ color: 'var(--turquoise-900)' }}>{friend.de}</p>
                  <p className="font-bold mb-3" style={{ color: 'var(--sand-800)' }}>= {friend.meaning}</p>
                  <p className="text-sm font-medium" style={{ color: 'var(--sand-600)' }}>
                    Sembra «{friend.looksLike}», che invece si dice <span className="font-black" style={{ color: 'var(--terracotta-700)' }}>{friend.realWord}</span>.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {activePanel === 'suoni' && (
        <div className="space-y-5">
          <div className="rounded-[2rem] p-8 text-white" style={{ background: 'linear-gradient(135deg, var(--turquoise-600), var(--turquoise-800))' }}>
            <p className="text-white/70 text-xs font-black uppercase tracking-wider mb-2">Perché conta</p>
            <p className="text-2xl font-black mb-3">In tedesco le sillabe deboli sono la grammatica.</p>
            <p className="text-lg text-white/90 max-w-3xl">
              L’italiano concentra l’energia sulle vocali piene e chiude quasi ogni parola con una vocale. Il tedesco fa il contrario: appoggia tutto sulla prima sillaba e affida i finali sfumati a informazioni grammaticali decisive. Chi pronuncia il tedesco «all’italiana» non ha solo un accento: perde dei casi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {soundNotes.map(note => (
              <div key={note.id} className="bg-white rounded-[2rem] p-6 shadow-sm" style={{ border: '1px solid var(--terracotta-100)' }}>
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-4 py-2 rounded-xl text-lg font-black" style={{ backgroundColor: 'var(--turquoise-100)', color: 'var(--turquoise-900)' }}>
                    {note.symbol}
                  </span>
                  <h3 className="text-xl font-black" style={{ color: 'var(--sand-900)' }}>{note.title}</h3>
                </div>
                <p className="font-medium mb-4" style={{ color: 'var(--sand-700)' }}>{note.text}</p>
                <ul className="space-y-1">
                  {note.examples.map(example => (
                    <li key={example} className="font-black" style={{ color: 'var(--terracotta-800)' }}>{example}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}

      {activePanel === 'siciliano' && (
        <div className="space-y-5">
          <div className="bg-white rounded-[2rem] p-8 shadow-sm" style={{ border: '1px solid var(--terracotta-100)' }}>
            <span className="inline-block px-4 py-2 rounded-full text-sm font-black mb-4" style={{ backgroundColor: 'var(--sage-100)', color: 'var(--sage-800)' }}>
              La risposta breve
            </span>
            <h3 className="text-3xl font-black mb-4" style={{ color: 'var(--terracotta-800)' }}>Sì, cambia qualcosa — ma non dove ti aspetti</h3>
            <p className="text-lg mb-3 max-w-3xl" style={{ color: 'var(--sand-700)' }}>
              Per la <strong>grammatica</strong> tedesca non cambia praticamente nulla: casi, ordine delle parole, verbi separabili e neutro sono lontani dal siciliano esattamente quanto lo sono dall’italiano. Il programma di studio è lo stesso.
            </p>
            <p className="text-lg max-w-3xl" style={{ color: 'var(--sand-700)' }}>
              Dove cambia davvero è nella <strong>pronuncia</strong> e in due o tre abitudini profonde: il sistema vocalico a cinque vocali, il passato remoto usato per il passato recente, il futuro espresso col presente. Due di queste sono un vantaggio, le altre un rischio preciso. Qui sotto sono separate le une dalle altre.
            </p>
          </div>

          {sicilyNotes.map(note => {
            const style = verdictStyles[note.verdict];

            return (
              <div key={note.id} className="rounded-[2rem] p-6" style={{ backgroundColor: style.card, border: `1px solid ${style.border}` }}>
                <span className="inline-block px-3 py-1 rounded-full text-xs font-black mb-3" style={{ backgroundColor: style.bg, color: style.fg }}>
                  {style.label}
                </span>
                <h3 className="text-2xl font-black mb-3" style={{ color: 'var(--sand-900)' }}>{note.title}</h3>
                <p className="text-lg font-medium" style={{ color: 'var(--sand-700)' }}>{note.text}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
