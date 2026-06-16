export type PrepositionCase = 'A' | 'D';

export interface VerbPrepositionEntry {
  verb: string;
  preposition: string;
  case: PrepositionCase;
  translation: string;
  exampleDe: string;
  exampleEn: string;
}

export const VERBEN_MIT_PRAEPOSITIONEN: VerbPrepositionEntry[] = [
  {
    verb: 'abhängen',
    preposition: 'von',
    case: 'D',
    translation: 'to depend on',
    exampleDe: 'Ob wir fahren, hängt vom Wetter ab.',
    exampleEn: 'Whether we go depends on the weather.'
  },
  {
    verb: 'achten',
    preposition: 'auf',
    case: 'A',
    translation: 'to pay attention to / to watch',
    exampleDe: 'Bitte achte auf den neuen Mantel.',
    exampleEn: 'Please look after the new coat.'
  },
  {
    verb: 'anfangen',
    preposition: 'mit',
    case: 'D',
    translation: 'to start with',
    exampleDe: 'Ich fange mit der Übung an.',
    exampleEn: 'I am starting with the exercise.'
  },
  {
    verb: 'ankommen',
    preposition: 'auf',
    case: 'A',
    translation: 'to depend on / to come down to',
    exampleDe: 'Es kommt auf den richtigen Preis an.',
    exampleEn: 'It comes down to the right price.'
  },
  {
    verb: 'antworten',
    preposition: 'auf',
    case: 'A',
    translation: 'to reply to',
    exampleDe: 'Bitte antworten Sie heute auf den Brief.',
    exampleEn: 'Please reply to the letter today.'
  },
  {
    verb: 'sich ärgern',
    preposition: 'über',
    case: 'A',
    translation: 'to be annoyed about',
    exampleDe: 'Wir ärgern uns über den Regen.',
    exampleEn: 'We are annoyed about the rain.'
  },
  {
    verb: 'aufhören',
    preposition: 'mit',
    case: 'D',
    translation: 'to stop with / to stop doing',
    exampleDe: 'Er hört um 17.00 Uhr mit der Arbeit auf.',
    exampleEn: 'He stops working at 5 p.m.'
  },
  {
    verb: 'aufpassen',
    preposition: 'auf',
    case: 'A',
    translation: 'to look after / to watch',
    exampleDe: 'Ein Babysitter passt auf kleine Kinder auf.',
    exampleEn: 'A babysitter looks after small children.'
  },
  {
    verb: 'sich aufregen',
    preposition: 'über',
    case: 'A',
    translation: 'to get upset about',
    exampleDe: 'Deutsche regen sich über Unpünktlichkeit auf.',
    exampleEn: 'Germans get upset about unpunctuality.'
  },
  {
    verb: 'ausgeben',
    preposition: 'für',
    case: 'A',
    translation: 'to spend on',
    exampleDe: 'Manche geben viel Geld für Schuhe aus.',
    exampleEn: 'Some people spend a lot of money on shoes.'
  },
  {
    verb: 'sich bedanken',
    preposition: 'bei',
    case: 'D',
    translation: 'to thank someone',
    exampleDe: 'Ich bedanke mich herzlich bei dir.',
    exampleEn: 'I thank you warmly.'
  },
  {
    verb: 'sich bedanken',
    preposition: 'für',
    case: 'A',
    translation: 'to thank someone for',
    exampleDe: 'Martin bedankt sich für das Geschenk.',
    exampleEn: 'Martin thanks someone for the gift.'
  },
  {
    verb: 'beginnen',
    preposition: 'mit',
    case: 'D',
    translation: 'to begin with',
    exampleDe: 'Wir beginnen pünktlich mit dem Deutschkurs.',
    exampleEn: 'We start the German course on time.'
  },
  {
    verb: 'sich bemühen',
    preposition: 'um',
    case: 'A',
    translation: 'to make an effort to get / to try for',
    exampleDe: 'Karla bemüht sich um eine Arbeit.',
    exampleEn: 'Karla is trying to get a job.'
  },
  {
    verb: 'berichten',
    preposition: 'über',
    case: 'A',
    translation: 'to report on / about',
    exampleDe: 'Der Reporter berichtet über die Wahlen.',
    exampleEn: 'The reporter reports on the elections.'
  },
  {
    verb: 'sich beschäftigen',
    preposition: 'mit',
    case: 'D',
    translation: 'to occupy oneself with / to work with',
    exampleDe: 'Ich beschäftige mich gern mit Pflanzen.',
    exampleEn: 'I enjoy working with plants.'
  },
  {
    verb: 'sich beschweren',
    preposition: 'bei',
    case: 'D',
    translation: 'to complain to',
    exampleDe: 'Der Gast beschwert sich beim Kellner.',
    exampleEn: 'The guest complains to the waiter.'
  },
  {
    verb: 'bestehen',
    preposition: 'aus',
    case: 'D',
    translation: 'to consist of / to be made of',
    exampleDe: 'Eheringe bestehen aus Gold.',
    exampleEn: 'Wedding rings are made of gold.'
  },
  {
    verb: 'bestehen',
    preposition: 'auf',
    case: 'D',
    translation: 'to insist on',
    exampleDe: 'Ich bestehe auf sofortiger Bezahlung des Autos.',
    exampleEn: 'I insist on immediate payment for the car.'
  },
  {
    verb: 'sich beteiligen',
    preposition: 'an',
    case: 'D',
    translation: 'to participate in',
    exampleDe: 'Viele Studenten beteiligen sich an den Streiks.',
    exampleEn: 'Many students take part in the strikes.'
  },
  {
    verb: 'sich bewerben',
    preposition: 'bei',
    case: 'D',
    translation: 'to apply to / at',
    exampleDe: 'Er bewirbt sich bei einer Bäckerei.',
    exampleEn: 'He applies to a bakery.'
  },
  {
    verb: 'sich bewerben',
    preposition: 'um',
    case: 'A',
    translation: 'to apply for',
    exampleDe: 'Sie bewirbt sich um eine Stelle als Sekretärin.',
    exampleEn: 'She applies for a position as a secretary.'
  },
  {
    verb: 'sich beziehen',
    preposition: 'auf',
    case: 'A',
    translation: 'to refer to',
    exampleDe: 'Meine Frage bezieht sich auf Ihr Angebot.',
    exampleEn: 'My question refers to your offer.'
  },
  {
    verb: 'bitten',
    preposition: 'um',
    case: 'A',
    translation: 'to ask for / to request',
    exampleDe: 'Der Redner bittet um Aufmerksamkeit.',
    exampleEn: 'The speaker asks for attention.'
  },
  {
    verb: 'danken',
    preposition: 'für',
    case: 'A',
    translation: 'to thank for / to be grateful for',
    exampleDe: 'Sam dankt für Ritas Hilfe.',
    exampleEn: 'Sam is grateful for Rita\'s help.'
  },
  {
    verb: 'denken',
    preposition: 'an',
    case: 'A',
    translation: 'to think of / about',
    exampleDe: 'Maria denkt oft an den Urlaub.',
    exampleEn: 'Maria often thinks about the vacation.'
  },
  {
    verb: 'diskutieren',
    preposition: 'über',
    case: 'A',
    translation: 'to discuss / to talk about',
    exampleDe: 'Das Kabinett diskutiert über eine neue Steuer.',
    exampleEn: 'The cabinet is discussing a new tax.'
  },
  {
    verb: 'einladen',
    preposition: 'zu',
    case: 'D',
    translation: 'to invite to',
    exampleDe: 'Ich lade dich zu meinem Geburtstag ein.',
    exampleEn: 'I am inviting you to my birthday party.'
  },
  {
    verb: 'sich entscheiden',
    preposition: 'für',
    case: 'A',
    translation: 'to decide on / in favor of',
    exampleDe: 'Kinder entscheiden sich gern für Schokolade.',
    exampleEn: 'Children like to choose chocolate.'
  },
  {
    verb: 'sich entschließen',
    preposition: 'zu',
    case: 'D',
    translation: 'to decide to do / to resolve to',
    exampleDe: 'Karl entschließt sich zu einem Studium.',
    exampleEn: 'Karl decides to study at university.'
  },
  {
    verb: 'sich entschuldigen',
    preposition: 'bei',
    case: 'D',
    translation: 'to apologize to',
    exampleDe: 'Tom entschuldigt sich bei ihrem Mann.',
    exampleEn: 'Tom apologizes to her husband.'
  },
  {
    verb: 'sich entschuldigen',
    preposition: 'für',
    case: 'A',
    translation: 'to apologize for',
    exampleDe: 'Ich entschuldige mich für das Verhalten meiner Katze.',
    exampleEn: 'I apologize for my cat\'s behavior.'
  },
  {
    verb: 'sich erholen',
    preposition: 'von',
    case: 'D',
    translation: 'to recover from',
    exampleDe: 'Von dem Schock muss ich mich erst erholen.',
    exampleEn: 'I first have to recover from the shock.'
  },
  {
    verb: 'sich erinnern',
    preposition: 'an',
    case: 'A',
    translation: 'to remember',
    exampleDe: 'Wir erinnern uns gern an unser erstes Ehejahr.',
    exampleEn: 'We fondly remember our first year of marriage.'
  },
  {
    verb: 'erkennen',
    preposition: 'an',
    case: 'D',
    translation: 'to recognize by',
    exampleDe: 'Man erkennt Pinocchio an seiner langen Nase.',
    exampleEn: 'You recognize Pinocchio by his long nose.'
  },
  {
    verb: 'sich erkundigen',
    preposition: 'nach',
    case: 'D',
    translation: 'to ask about / to inquire about',
    exampleDe: 'Oma erkundigt sich oft nach meinen Plänen.',
    exampleEn: 'Grandma often asks about my plans.'
  },
  {
    verb: 'erschrecken',
    preposition: 'über',
    case: 'A',
    translation: 'to be frightened by / about',
    exampleDe: 'Der Koch erschrickt über eine Maus.',
    exampleEn: 'The cook is frightened by a mouse.'
  },
  {
    verb: 'erzählen',
    preposition: 'über',
    case: 'A',
    translation: 'to tell about',
    exampleDe: 'Ein Ostberliner erzählt über sein Leben in der ehemaligen DDR.',
    exampleEn: 'An East Berliner talks about his life in the former GDR.'
  },
  {
    verb: 'erzählen',
    preposition: 'von',
    case: 'D',
    translation: 'to tell of / about',
    exampleDe: 'Der Bischoff erzählt von der Reise nach Rom.',
    exampleEn: 'The bishop talks about the trip to Rome.'
  },
  {
    verb: 'fragen',
    preposition: 'nach',
    case: 'D',
    translation: 'to ask about / for',
    exampleDe: 'Die Journalistin fragt nach den Konsequenzen der Gesetzesänderung.',
    exampleEn: 'The journalist asks about the consequences of the change in law.'
  },
  {
    verb: 'sich freuen',
    preposition: 'auf',
    case: 'A',
    translation: 'to look forward to',
    exampleDe: 'Kinder freuen sich auf die Ferien.',
    exampleEn: 'Children look forward to the holidays.'
  },
  {
    verb: 'sich freuen',
    preposition: 'über',
    case: 'A',
    translation: 'to be happy about',
    exampleDe: 'Jeder freut sich über eine Gehaltserhöhung.',
    exampleEn: 'Everyone is happy about a salary raise.'
  },
  {
    verb: 'gehen',
    preposition: 'um',
    case: 'A',
    translation: 'to be about',
    exampleDe: 'Immer geht es um Geld.',
    exampleEn: 'It is always about money.'
  },
  {
    verb: 'gehören',
    preposition: 'zu',
    case: 'D',
    translation: 'to belong to',
    exampleDe: 'Das Elsass gehört zu Frankreich.',
    exampleEn: 'Alsace belongs to France.'
  },
  {
    verb: 'sich gewöhnen',
    preposition: 'an',
    case: 'A',
    translation: 'to get used to',
    exampleDe: 'Ich kann mich nicht an die Zeitumstellung gewöhnen.',
    exampleEn: 'I cannot get used to the time change.'
  },
  {
    verb: 'glauben',
    preposition: 'an',
    case: 'A',
    translation: 'to believe in',
    exampleDe: 'Teenager glauben an die große Liebe.',
    exampleEn: 'Teenagers believe in true love.'
  },
  {
    verb: 'gratulieren',
    preposition: 'zu',
    case: 'D',
    translation: 'to congratulate on',
    exampleDe: 'Wir gratulieren dir zum 18. Geburtstag.',
    exampleEn: 'We congratulate you on your 18th birthday.'
  },
  {
    verb: 'halten',
    preposition: 'für',
    case: 'A',
    translation: 'to consider / to take for',
    exampleDe: 'Ich halte das für keine gute Idee.',
    exampleEn: 'I do not consider that a good idea.'
  },
  {
    verb: 'halten',
    preposition: 'von',
    case: 'D',
    translation: 'to think of / to have an opinion of',
    exampleDe: 'Kinder halten nicht viel von Ordnung.',
    exampleEn: 'Children do not think much of tidiness.'
  },
  {
    verb: 'sich handeln',
    preposition: 'um',
    case: 'A',
    translation: 'to be a matter of / to be',
    exampleDe: 'Bei der Kopie handelt es sich nicht um Originalsoftware.',
    exampleEn: 'The copy is not original software.'
  },
  {
    verb: 'handeln',
    preposition: 'von',
    case: 'D',
    translation: 'to be about',
    exampleDe: 'Märchen handeln von Gut und Böse.',
    exampleEn: 'Fairy tales are about good and evil.'
  },
  {
    verb: 'helfen',
    preposition: 'bei',
    case: 'D',
    translation: 'to help with',
    exampleDe: 'Kann ich dir beim Tischdecken helfen?',
    exampleEn: 'Can I help you set the table?'
  },
  {
    verb: 'hindern',
    preposition: 'an',
    case: 'D',
    translation: 'to prevent from',
    exampleDe: 'Ein langsamer Fahrer hindert Greta am Überholen.',
    exampleEn: 'A slow driver prevents Greta from overtaking.'
  },
  {
    verb: 'hoffen',
    preposition: 'auf',
    case: 'A',
    translation: 'to hope for',
    exampleDe: 'Im März hoffen alle auf warme Frühlingstage.',
    exampleEn: 'In March everyone hopes for warm spring days.'
  },
  {
    verb: 'hören',
    preposition: 'von',
    case: 'D',
    translation: 'to hear from / about',
    exampleDe: 'Ich habe seit Sonntag nichts von Piet gehört.',
    exampleEn: 'I have not heard anything from Piet since Sunday.'
  },
  {
    verb: 'sich informieren',
    preposition: 'über',
    case: 'A',
    translation: 'to get information about',
    exampleDe: 'Auf der Messe kann man sich über die neue Technologie informieren.',
    exampleEn: 'At the trade fair you can get information about the new technology.'
  },
  {
    verb: 'sich interessieren',
    preposition: 'für',
    case: 'A',
    translation: 'to be interested in',
    exampleDe: 'Monika interessiert sich für ein Smartphone.',
    exampleEn: 'Monika is interested in a smartphone.'
  },
  {
    verb: 'klagen',
    preposition: 'über',
    case: 'A',
    translation: 'to complain about',
    exampleDe: 'Tim klagt häufig über Kopfschmerzen.',
    exampleEn: 'Tim often complains about headaches.'
  },
  {
    verb: 'kämpfen',
    preposition: 'für',
    case: 'A',
    translation: 'to fight for',
    exampleDe: 'Die Gewerkschaft kämpft für höhere Löhne.',
    exampleEn: 'The union fights for higher wages.'
  },
  {
    verb: 'kommen',
    preposition: 'zu',
    case: 'D',
    translation: 'to come to / to result in',
    exampleDe: 'In der Besprechung kam es zu einem Streit.',
    exampleEn: 'In the meeting, an argument broke out.'
  },
  {
    verb: 'sich konzentrieren',
    preposition: 'auf',
    case: 'A',
    translation: 'to concentrate on',
    exampleDe: 'Karl konzentriert sich auf seine Hausaufgaben.',
    exampleEn: 'Karl concentrates on his homework.'
  },
  {
    verb: 'sich kümmern',
    preposition: 'um',
    case: 'A',
    translation: 'to take care of',
    exampleDe: 'Im Pflegeheim kümmert man sich um alte Leute, die krank sind.',
    exampleEn: 'In the nursing home, people take care of old people who are ill.'
  },
  {
    verb: 'lachen',
    preposition: 'über',
    case: 'A',
    translation: 'to laugh about / at',
    exampleDe: 'Über einen guten Witz muss man laut lachen.',
    exampleEn: 'You have to laugh loudly at a good joke.'
  },
  {
    verb: 'leiden',
    preposition: 'an',
    case: 'D',
    translation: 'to suffer from',
    exampleDe: 'Jeder fünfte Manager leidet an Burn-out.',
    exampleEn: 'One in five managers suffers from burnout.'
  },
  {
    verb: 'leiden',
    preposition: 'unter',
    case: 'D',
    translation: 'to suffer under / from',
    exampleDe: 'Kaffeetrinker leiden unter Schlafproblemen.',
    exampleEn: 'Coffee drinkers suffer from sleep problems.'
  },
  {
    verb: 'nachdenken',
    preposition: 'über',
    case: 'A',
    translation: 'to think about / to reflect on',
    exampleDe: 'Beamte müssen nicht über ihre Rente nachdenken.',
    exampleEn: 'Civil servants do not have to think about their pension.'
  },
  {
    verb: 'protestieren',
    preposition: 'gegen',
    case: 'A',
    translation: 'to protest against',
    exampleDe: 'Viele Menschen protestieren gegen Atomkraft.',
    exampleEn: 'Many people protest against nuclear power.'
  },
  {
    verb: 'rechnen',
    preposition: 'mit',
    case: 'D',
    translation: 'to expect / to reckon with',
    exampleDe: 'Im Januar muss man mit Schnee rechnen.',
    exampleEn: 'In January, you have to expect snow.'
  },
  {
    verb: 'reden',
    preposition: 'über',
    case: 'A',
    translation: 'to talk about',
    exampleDe: 'Deine Mutter redet gern über Krankheiten.',
    exampleEn: 'Your mother likes talking about illnesses.'
  },
  {
    verb: 'reden',
    preposition: 'von',
    case: 'D',
    translation: 'to talk of / about',
    exampleDe: 'Großvater redet von den guten alten Zeiten.',
    exampleEn: 'Grandfather talks about the good old days.'
  },
  {
    verb: 'riechen',
    preposition: 'nach',
    case: 'D',
    translation: 'to smell like / of',
    exampleDe: 'Hier riecht es nach Kuchen.',
    exampleEn: 'It smells like cake here.'
  },
  {
    verb: 'sagen',
    preposition: 'über',
    case: 'A',
    translation: 'to say about',
    exampleDe: 'Brigitte sagt über Dietmar, dass er oft lügt.',
    exampleEn: 'Brigitte says about Dietmar that he often lies.'
  },
  {
    verb: 'sagen',
    preposition: 'zu',
    case: 'D',
    translation: 'to say about / to',
    exampleDe: 'Was sagst du zu meinem neuen Haarschnitt?',
    exampleEn: 'What do you say about my new haircut?'
  },
  {
    verb: 'schicken',
    preposition: 'an',
    case: 'A',
    translation: 'to send to',
    exampleDe: 'Die E-Mail schicke ich dir morgen.',
    exampleEn: 'I will send you the email tomorrow.'
  },
  {
    verb: 'schicken',
    preposition: 'zu',
    case: 'D',
    translation: 'to send to',
    exampleDe: 'Der Allgemeinmediziner schickt den Patienten zu einem Spezialisten.',
    exampleEn: 'The general practitioner sends the patient to a specialist.'
  },
  {
    verb: 'schimpfen',
    preposition: 'über',
    case: 'A',
    translation: 'to complain about / to rant about',
    exampleDe: 'Alle schimpfen über den Regen.',
    exampleEn: 'Everyone complains about the rain.'
  },
  {
    verb: 'schmecken',
    preposition: 'nach',
    case: 'D',
    translation: 'to taste like / of',
    exampleDe: 'Muscheln schmecken nach Meerwasser.',
    exampleEn: 'Mussels taste like seawater.'
  },
  {
    verb: 'schreiben',
    preposition: 'an',
    case: 'A',
    translation: 'to write to',
    exampleDe: 'Bitte schreibe noch heute an deine Mutter.',
    exampleEn: 'Please write to your mother today.'
  },
  {
    verb: 'sich schützen',
    preposition: 'vor',
    case: 'D',
    translation: 'to protect oneself / something from',
    exampleDe: 'Den Computer muss man vor Hackern schützen.',
    exampleEn: 'You have to protect the computer from hackers.'
  },
  {
    verb: 'sein',
    preposition: 'für',
    case: 'A',
    translation: 'to be in favor of',
    exampleDe: 'Ich bin für die Abschaffung der Kinderarbeit.',
    exampleEn: 'I am in favor of abolishing child labor.'
  },
  {
    verb: 'sein',
    preposition: 'gegen',
    case: 'A',
    translation: 'to be against',
    exampleDe: 'Viele sind gegen Steuererhöhungen.',
    exampleEn: 'Many people are against tax increases.'
  },
  {
    verb: 'sorgen',
    preposition: 'für',
    case: 'A',
    translation: 'to provide for / to take care of',
    exampleDe: 'Kinder müssen im Alter für ihre Eltern sorgen.',
    exampleEn: 'Children have to provide for their parents in old age.'
  },
  {
    verb: 'sprechen',
    preposition: 'mit',
    case: 'D',
    translation: 'to speak with',
    exampleDe: 'Ich spreche noch einmal mit deinem Vater.',
    exampleEn: 'I will speak with your father again.'
  },
  {
    verb: 'sprechen',
    preposition: 'über',
    case: 'A',
    translation: 'to speak / talk about',
    exampleDe: 'Lass uns über deine Zukunft sprechen.',
    exampleEn: 'Let us talk about your future.'
  },
  {
    verb: 'sterben',
    preposition: 'an',
    case: 'D',
    translation: 'to die of / from',
    exampleDe: 'Zwei Deutsche sind an der Grippe gestorben.',
    exampleEn: 'Two Germans died of the flu.'
  },
  {
    verb: 'streiten',
    preposition: 'mit',
    case: 'D',
    translation: 'to argue with',
    exampleDe: 'Ich möchte nicht mit dir streiten.',
    exampleEn: 'I do not want to argue with you.'
  },
  {
    verb: 'streiten',
    preposition: 'über',
    case: 'A',
    translation: 'to argue about',
    exampleDe: 'Die USA und Deutschland streiten über eine neue Strategie.',
    exampleEn: 'The USA and Germany are arguing about a new strategy.'
  },
  {
    verb: 'teilnehmen',
    preposition: 'an',
    case: 'D',
    translation: 'to take part in',
    exampleDe: 'Nordkorea nimmt an der Fußball-WM teil.',
    exampleEn: 'North Korea is taking part in the Football World Cup.'
  },
  {
    verb: 'telefonieren',
    preposition: 'mit',
    case: 'D',
    translation: 'to speak on the phone with / to call',
    exampleDe: 'Hast du schon mit dem Arzt telefoniert?',
    exampleEn: 'Have you already spoken on the phone with the doctor?'
  },
  {
    verb: 'sich treffen',
    preposition: 'mit',
    case: 'D',
    translation: 'to meet with',
    exampleDe: 'Die Kanzlerin trifft sich täglich mit ihrem Pressesprecher.',
    exampleEn: 'The chancellor meets daily with her press spokesperson.'
  },
  {
    verb: 'sich treffen',
    preposition: 'zu',
    case: 'D',
    translation: 'to meet for',
    exampleDe: 'Sie treffen sich nur zu einem kurzen Gespräch.',
    exampleEn: 'They meet only for a short conversation.'
  },
  {
    verb: 'überreden',
    preposition: 'zu',
    case: 'D',
    translation: 'to persuade someone to',
    exampleDe: 'Kann ich dich zu einem Glas Wein überreden?',
    exampleEn: 'Can I persuade you to have a glass of wine?'
  },
  {
    verb: 'sich unterhalten',
    preposition: 'mit',
    case: 'D',
    translation: 'to chat / talk with',
    exampleDe: 'Der Sänger unterhält sich mit dem Bassisten.',
    exampleEn: 'The singer chats with the bassist.'
  },
  {
    verb: 'sich unterhalten',
    preposition: 'über',
    case: 'A',
    translation: 'to chat / talk about',
    exampleDe: 'Die Modedesigner unterhalten sich über die neuesten Trends.',
    exampleEn: 'The fashion designers talk about the latest trends.'
  },
  {
    verb: 'sich verabreden',
    preposition: 'mit',
    case: 'D',
    translation: 'to arrange to meet with',
    exampleDe: 'Heute verabrede ich mich mit einer Freundin.',
    exampleEn: 'Today I am arranging to meet a friend.'
  },
  {
    verb: 'sich verabschieden',
    preposition: 'von',
    case: 'D',
    translation: 'to say goodbye to',
    exampleDe: 'Nun wollen wir uns von euch verabschieden.',
    exampleEn: 'Now we want to say goodbye to you.'
  },
  {
    verb: 'vergleichen',
    preposition: 'mit',
    case: 'D',
    translation: 'to compare with',
    exampleDe: 'Vergleichen Sie München mit Berlin.',
    exampleEn: 'Compare Munich with Berlin.'
  },
  {
    verb: 'sich verlassen',
    preposition: 'auf',
    case: 'A',
    translation: 'to rely on',
    exampleDe: 'Auf mich kann man sich verlassen.',
    exampleEn: 'You can rely on me.'
  },
  {
    verb: 'sich verlieben',
    preposition: 'in',
    case: 'A',
    translation: 'to fall in love with',
    exampleDe: 'Britta hat sich in das alte Bauernhaus verliebt.',
    exampleEn: 'Britta has fallen in love with the old farmhouse.'
  },
  {
    verb: 'sich verstehen',
    preposition: 'mit',
    case: 'D',
    translation: 'to get along with',
    exampleDe: 'Daniel versteht sich gut mit seinem Chef.',
    exampleEn: 'Daniel gets along well with his boss.'
  },
  {
    verb: 'verstehen',
    preposition: 'von',
    case: 'D',
    translation: 'to know about / understand something about',
    exampleDe: 'Verstehst du etwas von Elektrik?',
    exampleEn: 'Do you know anything about electrical work?'
  },
  {
    verb: 'sich vorbereiten',
    preposition: 'auf',
    case: 'A',
    translation: 'to prepare for',
    exampleDe: 'Karl bereitet sich auf eine Präsentation vor.',
    exampleEn: 'Karl is preparing for a presentation.'
  },
  {
    verb: 'warnen',
    preposition: 'vor',
    case: 'D',
    translation: 'to warn about / against',
    exampleDe: 'Man hatte ihn vor den hohen Kosten für das alte Auto gewarnt.',
    exampleEn: 'He had been warned about the high costs of the old car.'
  },
  {
    verb: 'warten',
    preposition: 'auf',
    case: 'A',
    translation: 'to wait for',
    exampleDe: 'Hier wartet man lange auf einen Bus.',
    exampleEn: 'Here you wait a long time for a bus.'
  },
  {
    verb: 'sich wenden',
    preposition: 'an',
    case: 'A',
    translation: 'to contact / turn to',
    exampleDe: 'Bitte wenden Sie sich an die Buchhaltung.',
    exampleEn: 'Please contact the accounting department.'
  },
  {
    verb: 'werden',
    preposition: 'zu',
    case: 'D',
    translation: 'to become / turn into',
    exampleDe: 'Unter null Grad wird Wasser zu Eis.',
    exampleEn: 'Below zero degrees, water becomes ice.'
  },
  {
    verb: 'wissen',
    preposition: 'von',
    case: 'D',
    translation: 'to know about',
    exampleDe: 'Ich weiß nichts von neuen Computern für unser Team.',
    exampleEn: 'I know nothing about new computers for our team.'
  },
  {
    verb: 'sich wundern',
    preposition: 'über',
    case: 'A',
    translation: 'to be surprised about / to wonder about',
    exampleDe: 'Viele Deutsche wundern sich über die plötzlich so hohen Stromkosten.',
    exampleEn: 'Many Germans are surprised by the suddenly very high electricity costs.'
  },
  {
    verb: 'zuschauen',
    preposition: 'bei',
    case: 'D',
    translation: 'to watch someone doing something',
    exampleDe: 'Kann ich dir bei der Reparatur zuschauen?',
    exampleEn: 'Can I watch you repair it?'
  },
  {
    verb: 'zusehen',
    preposition: 'bei',
    case: 'D',
    translation: 'to watch someone doing something',
    exampleDe: 'Willst du mir beim Kochen zusehen?',
    exampleEn: 'Do you want to watch me cook?'
  },
  {
    verb: 'zweifeln',
    preposition: 'an',
    case: 'D',
    translation: 'to doubt',
    exampleDe: 'John zweifelt daran, dass sein Sohn die Wahrheit gesagt hat.',
    exampleEn: 'John doubts that his son told the truth.'
  }
];
