export type StructureCategory =
  | 'translation-shift'
  | 'clause-structure'
  | 'cohesion'
  | 'voice'
  | 'reported-speech'
  | 'nominal-style'
  | 'tense'
  | 'word-order'
  | 'perspective'
  | 'lexical';

export interface StructureExample {
  english: string;
  german: string;
  note: string;
}

export interface StructureComparison {
  id: string;
  category: StructureCategory;
  level: 'B1' | 'B2' | 'B2+';
  title: string;
  sourcePattern: string;
  germanPattern: string;
  coreAnswer: string;
  explanation: string;
  examples: StructureExample[];
  avoid: string[];
}

export const STRUCTURE_COMPARISONS: StructureComparison[] = [
  {
    id: 'not-until-erst-als',
    category: 'translation-shift',
    level: 'B2+',
    title: 'Not until: erst als / erst wenn',
    sourcePattern: 'EN: not until + clause',
    germanPattern: 'Erst als/wenn + subordinate clause, verb in position 2 in the main clause',
    coreAnswer: 'It was not until I moved that I understood it → Erst als ich umgezogen war, habe ich es verstanden.',
    explanation:
      'English builds emphasis with it was not until. German usually starts with erst als or erst wenn. After the initial subordinate clause, the main clause starts with the finite verb.',
    examples: [
      {
        english: 'It was not until I moved to Belgium that I understood the problem.',
        german: 'Erst als ich nach Belgien gezogen war, habe ich das Problem verstanden.',
        note: 'als for a one-time past event; habe comes immediately after the first clause.'
      },
      {
        english: 'You will only understand it when you try it yourself.',
        german: 'Erst wenn du es selbst ausprobierst, wirst du es verstehen.',
        note: 'wenn for a future condition.'
      },
      {
        english: 'Only after the meeting did he change his mind.',
        german: 'Erst nach der Besprechung änderte er seine Meinung.',
        note: 'Compact nominal version with nach + dative.'
      }
    ],
    avoid: [
      'Nicht bis ich umgezogen bin, habe ich es verstanden.',
      'Erst als ich war umgezogen, ...',
      'Keeping English cleft structure word for word.'
    ]
  },
  {
    id: 'unless-shifts',
    category: 'translation-shift',
    level: 'B2+',
    title: 'Unless: wenn nicht, es sei denn, sonst',
    sourcePattern: 'EN: unless + clause',
    germanPattern: 'wenn ... nicht | es sei denn, ... | otherwise = sonst/andernfalls',
    coreAnswer: 'Unless you call, I will leave → Wenn du nicht anrufst, gehe ich.',
    explanation:
      'There is no single automatic German equivalent for unless. Choose the structure from the logic of the sentence: condition, exception, or warning/consequence.',
    examples: [
      {
        english: 'Unless you call, I will leave.',
        german: 'Wenn du nicht anrufst, gehe ich.',
        note: 'Plain condition: if you do not call.'
      },
      {
        english: 'I will leave, unless you call me.',
        german: 'Ich gehe, es sei denn, du rufst mich an.',
        note: 'es sei denn introduces an exception.'
      },
      {
        english: 'Call me, unless it is too late.',
        german: 'Ruf mich an, außer wenn es zu spät ist.',
        note: 'außer wenn is direct and clear.'
      }
    ],
    avoid: [
      'Translating unless mechanically as außer in every sentence.',
      'Using wenn without nicht when the English meaning is negative.',
      'Forgetting final verb order after wenn.'
    ]
  },
  {
    id: 'no-matter-how',
    category: 'translation-shift',
    level: 'B2+',
    title: 'No matter how: so ... auch / egal wie',
    sourcePattern: 'EN: no matter how/what/who...',
    germanPattern: 'So + adjective/adverb + clause + auch, ... | Egal wie/was/wer ...',
    coreAnswer: 'No matter how hard I try, it does not work → So sehr ich mich auch bemühe, es funktioniert nicht.',
    explanation:
      'For polished B2 writing, so ... auch is more elegant than always using egal. It expresses concession and often sounds closer to written German.',
    examples: [
      {
        english: 'No matter how hard I try, it does not work.',
        german: 'So sehr ich mich auch bemühe, es funktioniert nicht.',
        note: 'High-value written structure.'
      },
      {
        english: 'No matter what he says, I do not believe him.',
        german: 'Was er auch sagt, ich glaube ihm nicht.',
        note: 'was ... auch works without egal.'
      },
      {
        english: 'No matter how expensive it is, we need it.',
        german: 'Egal wie teuer es ist, wir brauchen es.',
        note: 'Direct spoken version.'
      }
    ],
    avoid: [
      'No matter = kein Matter.',
      'So sehr ich bemühe mich auch...',
      'Using egal for every register when a more formal structure fits better.'
    ]
  },
  {
    id: 'causative-lassen-have-done',
    category: 'translation-shift',
    level: 'B2+',
    title: 'Have something done: lassen',
    sourcePattern: 'EN: have/get + object + past participle',
    germanPattern: 'object + infinitive + lassen; often with mir/dir/sich for personal services',
    coreAnswer: 'I had the contract checked → Ich habe den Vertrag prüfen lassen.',
    explanation:
      'English have something done is not a normal passive in German. German usually uses lassen to show that you arrange for another person to do the action.',
    examples: [
      {
        english: 'I had the contract checked.',
        german: 'Ich habe den Vertrag prüfen lassen.',
        note: 'You arranged the checking; you did not check it yourself.'
      },
      {
        english: 'She had her hair cut.',
        german: 'Sie hat sich die Haare schneiden lassen.',
        note: 'sich + body/service context.'
      },
      {
        english: 'We need to get the heating repaired.',
        german: 'Wir müssen die Heizung reparieren lassen.',
        note: 'Modal + infinitive + lassen.'
      }
    ],
    avoid: [
      'Ich habe den Vertrag geprüft bekommen.',
      'Sie hat ihre Haare geschnitten gehabt.',
      'Using passive when the point is arranging a service.'
    ]
  },
  {
    id: 'make-let-causatives',
    category: 'translation-shift',
    level: 'B2+',
    title: 'Make / let someone do something',
    sourcePattern: 'EN: make/let/have someone do something',
    germanPattern: 'lassen | dazu bringen | veranlassen | erlauben',
    coreAnswer: 'The delay made us change the plan → Die Verspätung hat uns dazu gebracht, den Plan zu ändern.',
    explanation:
      'English uses make very broadly. German separates permission, cause, pressure, and arrangement. The right translation depends on who controls the action.',
    examples: [
      {
        english: 'She let me use her phone.',
        german: 'Sie hat mich ihr Handy benutzen lassen.',
        note: 'Permission: jemanden etwas tun lassen.'
      },
      {
        english: 'The delay made us change the plan.',
        german: 'Die Verspätung hat uns dazu gebracht, den Plan zu ändern.',
        note: 'Cause leading to an action.'
      },
      {
        english: 'The manager had the team revise the report.',
        german: 'Der Manager veranlasste das Team, den Bericht zu überarbeiten.',
        note: 'Formal: veranlassen + accusative + zu-infinitive.'
      }
    ],
    avoid: [
      'Die Verspätung machte uns ändern den Plan.',
      'Using machen + infinitive like English make.',
      'Confusing permission lassen with causal dazu bringen.'
    ]
  },
  {
    id: 'supposed-to-sollen',
    category: 'translation-shift',
    level: 'B2',
    title: 'Supposed to: sollen, eigentlich, angeblich',
    sourcePattern: 'EN: be supposed to + verb',
    germanPattern: 'sollen for instruction/reported claim; eigentlich for expectation',
    coreAnswer: 'I am supposed to call him → Ich soll ihn anrufen.',
    explanation:
      'Supposed to can mean obligation, expectation, or reported information. German often uses sollen, but sometimes eigentlich or angeblich is the missing nuance.',
    examples: [
      {
        english: 'I am supposed to call him.',
        german: 'Ich soll ihn anrufen.',
        note: 'Someone told me or expects me to do it.'
      },
      {
        english: 'The train is supposed to arrive at eight.',
        german: 'Der Zug soll um acht ankommen.',
        note: 'Reported schedule or claim.'
      },
      {
        english: 'This was supposed to be easy.',
        german: 'Das sollte eigentlich einfach sein.',
        note: 'eigentlich adds the disappointed expectation.'
      }
    ],
    avoid: [
      'Ich bin supponiert zu...',
      'Using müssen when the meaning is reported expectation, not strict necessity.',
      'Forgetting eigentlich when the sentence implies contrast with reality.'
    ]
  },
  {
    id: 'used-to-vs-be-used-to',
    category: 'translation-shift',
    level: 'B2',
    title: 'Used to vs be used to',
    sourcePattern: 'EN: used to do | be used to doing',
    germanPattern: 'früher/immer + past tense | gewohnt sein + zu-infinitive/noun',
    coreAnswer: 'I used to work late → Früher habe ich oft lange gearbeitet.',
    explanation:
      'English used to has two unrelated meanings. Habit in the past is usually früher or oft/immer. Being accustomed to something is gewohnt sein.',
    examples: [
      {
        english: 'I used to work late.',
        german: 'Früher habe ich oft lange gearbeitet.',
        note: 'Past habit, no würde needed.'
      },
      {
        english: 'I am used to working late.',
        german: 'Ich bin es gewohnt, lange zu arbeiten.',
        note: 'Accustomed to it.'
      },
      {
        english: 'He used to live in Cologne.',
        german: 'Er hat früher in Köln gewohnt.',
        note: 'Simple past habit/state.'
      }
    ],
    avoid: [
      'Ich benutzte zu arbeiten.',
      'Ich würde früher spät arbeiten for a normal past habit.',
      'Mixing gewohnt sein with früher.'
    ]
  },
  {
    id: 'would-past-habit',
    category: 'translation-shift',
    level: 'B2+',
    title: 'Would for past habit: not würde',
    sourcePattern: 'EN: would + verb for repeated past actions',
    germanPattern: 'früher / damals / oft / immer + Präteritum or Perfekt',
    coreAnswer: 'When I was a child, we would visit my grandparents every Sunday → Als Kind haben wir sonntags oft meine Großeltern besucht.',
    explanation:
      'English would can describe repeated past actions. German normally does not use würde here, because würde sounds hypothetical.',
    examples: [
      {
        english: 'When I was a child, we would visit my grandparents every Sunday.',
        german: 'Als Kind haben wir sonntags oft meine Großeltern besucht.',
        note: 'Habitual past: oft/immer carries the repetition.'
      },
      {
        english: 'In winter he would get up before sunrise.',
        german: 'Im Winter stand er oft vor Sonnenaufgang auf.',
        note: 'Präteritum sounds natural in narrative.'
      },
      {
        english: 'She would always say that everything takes time.',
        german: 'Sie sagte immer, dass alles Zeit braucht.',
        note: 'immer replaces English habitual would.'
      }
    ],
    avoid: [
      'Als Kind würden wir jeden Sonntag...',
      'Treating every would as Konjunktiv II.',
      'Missing the repetition marker.'
    ]
  },
  {
    id: 'end-up-keep-doing',
    category: 'translation-shift',
    level: 'B2+',
    title: 'End up / keep doing',
    sourcePattern: 'EN: end up doing | keep doing',
    germanPattern: 'am Ende/schließlich/letztlich | weiter-, immer wieder, ständig',
    coreAnswer: 'We ended up staying at home → Am Ende sind wir zu Hause geblieben.',
    explanation:
      'These English verbs often express discourse logic, not a literal action. German translates the result or repetition directly.',
    examples: [
      {
        english: 'We ended up staying at home.',
        german: 'Am Ende sind wir zu Hause geblieben.',
        note: 'Result after other possibilities.'
      },
      {
        english: 'He keeps asking the same question.',
        german: 'Er stellt immer wieder dieselbe Frage.',
        note: 'Repeated action: immer wieder.'
      },
      {
        english: 'Please keep working on it.',
        german: 'Bitte arbeite weiter daran.',
        note: 'Continuation: weiterarbeiten.'
      }
    ],
    avoid: [
      'Wir endeten auf zu Hause bleiben.',
      'Er hält fragen...',
      'Translating keep as halten when it means continue/repeat.'
    ]
  },
  {
    id: 'get-passive-bekommen',
    category: 'translation-shift',
    level: 'B2+',
    title: 'Get-passive: wurde vs bekam',
    sourcePattern: 'EN: get + past participle',
    germanPattern: 'werden-passive for affected subject; bekommen/kriegen + participle for recipient passive',
    coreAnswer: 'I got asked about it → Ich wurde danach gefragt.',
    explanation:
      'English get-passive is vague. German distinguishes a normal passive from a recipient passive where someone receives something.',
    examples: [
      {
        english: 'I got asked about it.',
        german: 'Ich wurde danach gefragt.',
        note: 'Normal passive: someone asked me.'
      },
      {
        english: 'I got sent the documents.',
        german: 'Ich bekam die Unterlagen zugeschickt.',
        note: 'Recipient passive: documents came to me.'
      },
      {
        english: 'He got promoted.',
        german: 'Er wurde befördert.',
        note: 'Change of status: werden-passive.'
      }
    ],
    avoid: [
      'Ich bekam gefragt.',
      'Ich wurde die Unterlagen geschickt.',
      'Using bekommen for every English get-passive.'
    ]
  },
  {
    id: 'feel-like',
    category: 'translation-shift',
    level: 'B2',
    title: 'Feel like: Lust haben vs das Gefühl haben',
    sourcePattern: 'EN: feel like doing | feel like + clause',
    germanPattern: 'Lust haben + zu-infinitive | das Gefühl haben, dass...',
    coreAnswer: 'I feel like going out → Ich habe Lust auszugehen.',
    explanation:
      'English feel like can express desire or intuition. German must choose between Lust haben and das Gefühl haben.',
    examples: [
      {
        english: 'I feel like going out.',
        german: 'Ich habe Lust auszugehen.',
        note: 'Desire: Lust haben.'
      },
      {
        english: 'I do not feel like discussing it.',
        german: 'Ich habe keine Lust, darüber zu diskutieren.',
        note: 'No desire to do something.'
      },
      {
        english: 'I feel like he is hiding something.',
        german: 'Ich habe das Gefühl, dass er etwas verheimlicht.',
        note: 'Intuition, not desire.'
      }
    ],
    avoid: [
      'Ich fühle wie ausgehen.',
      'Ich fühle, dass er etwas versteckt, when you mean intuition.',
      'Using Lust haben for a suspicion.'
    ]
  },
  {
    id: 'it-takes-time',
    category: 'translation-shift',
    level: 'B2',
    title: 'It takes time: brauchen / dauern / kosten',
    sourcePattern: 'EN: it takes + person + time/effort/money',
    germanPattern: 'Person + brauchen | process + dauern | thing + kosten',
    coreAnswer: 'It took me two hours to write it → Ich habe zwei Stunden gebraucht, um es zu schreiben.',
    explanation:
      'English it takes hides the real subject. German usually chooses between the person needing time, the process lasting, or the thing costing effort/money.',
    examples: [
      {
        english: 'It took me two hours to write it.',
        german: 'Ich habe zwei Stunden gebraucht, um es zu schreiben.',
        note: 'Person + brauchen.'
      },
      {
        english: 'The meeting took two hours.',
        german: 'Die Besprechung hat zwei Stunden gedauert.',
        note: 'Event duration: dauern.'
      },
      {
        english: 'It took a lot of courage to say that.',
        german: 'Es hat viel Mut gekostet, das zu sagen.',
        note: 'Abstract cost: kosten.'
      }
    ],
    avoid: [
      'Es nahm mich zwei Stunden.',
      'Die Besprechung hat zwei Stunden gebraucht.',
      'Using nehmen just because English says take.'
    ]
  },
  {
    id: 'as-if-als-ob',
    category: 'clause-structure',
    level: 'B2+',
    title: 'As if: als ob / als würde / als hätte',
    sourcePattern: 'EN: as if + clause',
    germanPattern: 'als ob + Konjunktiv II | als + verb in position 1',
    coreAnswer: 'He acts as if he knew everything → Er tut so, als wüsste er alles.',
    explanation:
      'German often uses Konjunktiv II after als ob to mark that the comparison is unreal or doubtful. The shorter als + verb-first form is common and elegant.',
    examples: [
      {
        english: 'He acts as if he knew everything.',
        german: 'Er tut so, als wüsste er alles.',
        note: 'Short form: als + finite verb.'
      },
      {
        english: 'It looks as if it were going to rain.',
        german: 'Es sieht so aus, als würde es gleich regnen.',
        note: 'als würde + infinitive is productive.'
      },
      {
        english: 'She spoke as if nothing had happened.',
        german: 'Sie sprach, als wäre nichts passiert.',
        note: 'Past unreal comparison.'
      }
    ],
    avoid: [
      'als ob er weiß alles',
      'Forgetting Konjunktiv II when the comparison is unreal.',
      'Keeping English word order after als ob.'
    ]
  },
  {
    id: 'so-that-purpose-result',
    category: 'translation-shift',
    level: 'B2',
    title: 'So that: damit vs sodass',
    sourcePattern: 'EN: so that / so ... that',
    germanPattern: 'damit for purpose | sodass for result | so ..., dass for degree',
    coreAnswer: 'I am saying it so that you understand → Ich sage es, damit du es verstehst.',
    explanation:
      'English so that can mean purpose or result. German forces the distinction: damit answers why, sodass answers what result came from it.',
    examples: [
      {
        english: 'I am saying it so that you understand.',
        german: 'Ich sage es, damit du es verstehst.',
        note: 'Purpose: I want this result.'
      },
      {
        english: 'He spoke very quietly, so that nobody heard him.',
        german: 'Er sprach sehr leise, sodass ihn niemand hörte.',
        note: 'Result: this happened as a consequence.'
      },
      {
        english: 'It was so loud that I could not sleep.',
        german: 'Es war so laut, dass ich nicht schlafen konnte.',
        note: 'Degree: so ... dass.'
      }
    ],
    avoid: [
      'Using damit for every so that.',
      'Using sodass when the meaning is intentional purpose.',
      'Forgetting comma + verb-final in the subordinate clause.'
    ]
  },
  {
    id: 'what-matters-cleft',
    category: 'translation-shift',
    level: 'B2+',
    title: 'What matters is... / It is X who...',
    sourcePattern: 'EN: what matters is that... | it is X who...',
    germanPattern: 'Wichtig/Entscheidend ist, dass... | X ist es, der/die/das...',
    coreAnswer: 'What matters is that we react quickly → Entscheidend ist, dass wir schnell reagieren.',
    explanation:
      'English cleft sentences are common for emphasis. German often prefers an adjective or noun at the front, or a lighter es ist construction only when the contrast really matters.',
    examples: [
      {
        english: 'What matters is that we react quickly.',
        german: 'Entscheidend ist, dass wir schnell reagieren.',
        note: 'Natural German emphasis.'
      },
      {
        english: 'The problem is that nobody feels responsible.',
        german: 'Das Problem besteht darin, dass sich niemand verantwortlich fühlt.',
        note: 'Formal B2 pattern: darin bestehen, dass...'
      },
      {
        english: 'It was Maria who solved the problem.',
        german: 'Maria war es, die das Problem gelöst hat.',
        note: 'Use this when the person is the contrastive focus.'
      }
    ],
    avoid: [
      'Was zählt ist dass... without proper comma structure.',
      'Overusing Es ist X, der... when simple fronting is better.',
      'Translating the English cleft mechanically.'
    ]
  },
  {
    id: 'let-alone-geschweige-denn',
    category: 'cohesion',
    level: 'B2+',
    title: 'Let alone: geschweige denn',
    sourcePattern: 'EN: let alone + stronger idea',
    germanPattern: 'negative/limiting statement + geschweige denn + stronger item/clause',
    coreAnswer: 'He cannot write an email, let alone a formal complaint → Er kann keine E-Mail schreiben, geschweige denn eine formelle Beschwerde.',
    explanation:
      'Geschweige denn is a compact advanced connector for escalation. It usually follows a negative or limiting statement and introduces something even less likely.',
    examples: [
      {
        english: 'He cannot write an email, let alone a formal complaint.',
        german: 'Er kann keine E-Mail schreiben, geschweige denn eine formelle Beschwerde.',
        note: 'Noun phrase after geschweige denn.'
      },
      {
        english: 'I did not understand the text, let alone the irony.',
        german: 'Ich habe den Text nicht verstanden, geschweige denn die Ironie.',
        note: 'The second element is stronger.'
      },
      {
        english: 'We do not have time to discuss it, let alone rewrite everything.',
        german: 'Wir haben keine Zeit, darüber zu diskutieren, geschweige denn alles neu zu schreiben.',
        note: 'Can introduce an infinitive structure.'
      }
    ],
    avoid: [
      'lass allein',
      'Using geschweige denn after a positive statement without contrast.',
      'Making the second element weaker than the first.'
    ]
  },
  {
    id: 'worth-doing',
    category: 'translation-shift',
    level: 'B2',
    title: 'Worth doing: sich lohnen',
    sourcePattern: 'EN: be worth + -ing / worth it',
    germanPattern: 'sich lohnen + zu-infinitive | es wert sein + zu-infinitive',
    coreAnswer: 'It is worth applying early → Es lohnt sich, sich früh zu bewerben.',
    explanation:
      'Worth is often better translated with sich lohnen than with wert. Use wert sein when the sentence has a stronger evaluative or moral tone.',
    examples: [
      {
        english: 'It is worth applying early.',
        german: 'Es lohnt sich, sich früh zu bewerben.',
        note: 'Practical benefit.'
      },
      {
        english: 'The trip was worth it.',
        german: 'Die Reise hat sich gelohnt.',
        note: 'Past evaluation.'
      },
      {
        english: 'This issue is worth discussing.',
        german: 'Dieses Thema ist es wert, diskutiert zu werden.',
        note: 'More formal and emphatic.'
      }
    ],
    avoid: [
      'Es ist wert bewerben.',
      'Forgetting reflexive sich with lohnen.',
      'Using wert for every everyday worth it sentence.'
    ]
  },
  {
    id: 'probability-modals',
    category: 'translation-shift',
    level: 'B2+',
    title: 'Likely to / bound to: modal probability',
    sourcePattern: 'EN: likely to, bound to, must have, may well',
    germanPattern: 'dürfte | wird wohl | muss wohl | könnte durchaus',
    coreAnswer: 'He is likely to be late → Er dürfte sich verspäten.',
    explanation:
      'B2 German often expresses probability with modal verbs and particles, not only with wahrscheinlich. These forms make opinions sound more precise and less flat.',
    examples: [
      {
        english: 'He is likely to be late.',
        german: 'Er dürfte sich verspäten.',
        note: 'Careful probability.'
      },
      {
        english: 'She must have forgotten it.',
        german: 'Sie muss es wohl vergessen haben.',
        note: 'Strong inference, not obligation.'
      },
      {
        english: 'This may well become a problem.',
        german: 'Das könnte durchaus zum Problem werden.',
        note: 'Possible and plausible.'
      }
    ],
    avoid: [
      'Translating must have as musste haben.',
      'Using wahrscheinlich for every probability nuance.',
      'Forgetting the perfect infinitive: vergessen haben.'
    ]
  },
  {
    id: 'rather-than-instead-of',
    category: 'translation-shift',
    level: 'B2+',
    title: 'Rather than / instead of',
    sourcePattern: 'EN: rather than doing | instead of doing',
    germanPattern: 'statt/anstatt + zu-infinitive | lieber/eher ... als',
    coreAnswer: 'Rather than complain, we should suggest a solution → Statt uns zu beschweren, sollten wir eine Lösung vorschlagen.',
    explanation:
      'German usually turns rather than + verb into statt ... zu. When comparing preferences, lieber/eher ... als is more natural.',
    examples: [
      {
        english: 'Rather than complain, we should suggest a solution.',
        german: 'Statt uns zu beschweren, sollten wir eine Lösung vorschlagen.',
        note: 'Same subject, so zu-infinitive works.'
      },
      {
        english: 'I would rather call than write an email.',
        german: 'Ich würde lieber anrufen, als eine E-Mail zu schreiben.',
        note: 'Preference comparison.'
      },
      {
        english: 'Instead of waiting, she left.',
        german: 'Anstatt zu warten, ist sie gegangen.',
        note: 'Infinitive phrase at the front.'
      }
    ],
    avoid: [
      'Rather than = eher als in every context.',
      'Statt dass ich zu beschweren...',
      'Forgetting zu after statt/anstatt with an infinitive.'
    ]
  },
  {
    id: 'progressive-aspect-shifts',
    category: 'translation-shift',
    level: 'B2',
    title: 'Continuous forms when the meaning is not just now',
    sourcePattern: 'EN: be + -ing for plan, interruption, irritation, almost-action',
    germanPattern: 'gerade | zurzeit | Präsens + time marker | wollte gerade | ständig',
    coreAnswer: 'I was about to call you → Ich wollte dich gerade anrufen.',
    explanation:
      'The English continuous is not one German structure. At B2, the useful question is what the -ing form means: right now, temporary phase, future plan, repeated irritation, or action about to happen.',
    examples: [
      {
        english: 'I was about to call you.',
        german: 'Ich wollte dich gerade anrufen.',
        note: 'Almost-action: wollte gerade + infinitive.'
      },
      {
        english: 'I am working on it these days.',
        german: 'Ich arbeite zurzeit daran.',
        note: 'Temporary phase: zurzeit.'
      },
      {
        english: 'She is always interrupting me.',
        german: 'Sie unterbricht mich ständig.',
        note: 'Irritated repetition: ständig.'
      }
    ],
    avoid: [
      'Ich bin dich anzurufen.',
      'Using gerade for every English -ing form.',
      'Forgetting that future plans often use Präsens with a time marker.'
    ]
  },
  {
    id: 'je-desto',
    category: 'cohesion',
    level: 'B2',
    title: 'Proportional comparison: the more..., the more...',
    sourcePattern: 'EN: the + comparative..., the + comparative...',
    germanPattern: 'Je + comparative + verb-final, desto + comparative + verb in position 2',
    coreAnswer: 'The more you practice, the more confident you become → Je mehr du übst, desto sicherer wirst du.',
    explanation:
      'This is a high-value B2 structure for argumentation. The je-clause is subordinate, so the finite verb moves to the end. The desto-clause works like a main clause, so the finite verb is in position 2.',
    examples: [
      {
        english: 'The more you practice, the more confident you become.',
        german: 'Je mehr du übst, desto sicherer wirst du.',
        note: 'übst closes the first clause; wirst is position 2 after desto sicherer.'
      },
      {
        english: 'The earlier we start, the less stress we have.',
        german: 'Je früher wir anfangen, desto weniger Stress haben wir.',
        note: 'Good for comparing consequences.'
      },
      {
        english: 'The more clearly you explain it, the easier it is to understand.',
        german: 'Je klarer du es erklärst, desto leichter ist es zu verstehen.',
        note: 'Useful for B2 spoken and written opinions.'
      }
    ],
    avoid: [
      'Je mehr du übst, desto du wirst sicherer.',
      'The English word order after desto.',
      'Using mehr for every comparative when a proper adjective comparative is needed.'
    ]
  },
  {
    id: 'relative-preposition',
    category: 'clause-structure',
    level: 'B1',
    title: 'Relative clauses with a preposition',
    sourcePattern: 'EN: the thing/person I talk about, the place I live in',
    germanPattern: 'noun + comma + preposition + relative pronoun + verb-final',
    coreAnswer: 'the topic I am interested in → das Thema, für das ich mich interessiere',
    explanation:
      'German keeps the preposition inside the relative structure and places it before the relative pronoun. The case of the relative pronoun comes from the preposition, not from the English sentence.',
    examples: [
      {
        english: 'the topic I am interested in',
        german: 'das Thema, für das ich mich interessiere',
        note: 'sich interessieren für + accusative.'
      },
      {
        english: 'the colleague I spoke with',
        german: 'der Kollege, mit dem ich gesprochen habe',
        note: 'mit always takes dative: dem.'
      },
      {
        english: 'the restaurant where you can eat well',
        german: 'das Restaurant, in dem man gut essen kann',
        note: 'Location answers where, so dative: in dem.'
      }
    ],
    avoid: [
      'das Thema, das ich interessiere für',
      'der Kollege, den ich mit gesprochen habe',
      'Choosing case from the English object instead of the German preposition.'
    ]
  },
  {
    id: 'da-wo-compounds',
    category: 'lexical',
    level: 'B1',
    title: 'da- and wo-compounds for things and ideas',
    sourcePattern: 'EN: for it, about it, with it, what... about',
    germanPattern: 'da(r)- + preposition | wo(r)- + preposition',
    coreAnswer: 'I am waiting for it → Ich warte darauf.',
    explanation:
      'German often does not say für es, mit das, or über was for objects and abstract ideas. Use da-compounds for it/that and wo-compounds for what/which idea. For people, keep the normal pronoun.',
    examples: [
      {
        english: 'I am waiting for it.',
        german: 'Ich warte darauf.',
        note: 'warten auf → darauf.'
      },
      {
        english: 'What are you thinking about?',
        german: 'Woran denkst du?',
        note: 'denken an → woran.'
      },
      {
        english: 'I am waiting for him.',
        german: 'Ich warte auf ihn.',
        note: 'People do not become da-compounds.'
      }
    ],
    avoid: [
      'Ich warte für es.',
      'Ich warte darauf ihn.',
      'Using womit/wofür for people.'
    ]
  },
  {
    id: 'obwohl-trotz-trotzdem',
    category: 'cohesion',
    level: 'B1',
    title: 'Concession: although, despite, nevertheless',
    sourcePattern: 'EN: although + clause | despite + noun | nevertheless + sentence',
    germanPattern: 'obwohl + verb-final | trotz + genitive/dative in speech | trotzdem + verb in position 2',
    coreAnswer: 'Although it was raining, we went out → Obwohl es geregnet hat, sind wir ausgegangen.',
    explanation:
      'These three words express a similar logic, but their grammar is different. obwohl introduces a subordinate clause, trotz takes a noun phrase, and trotzdem starts or modifies a main clause.',
    examples: [
      {
        english: 'Although it was raining, we went out.',
        german: 'Obwohl es geregnet hat, sind wir ausgegangen.',
        note: 'obwohl sends hat to the end of its clause.'
      },
      {
        english: 'Despite the delay, the meeting starts on time.',
        german: 'Trotz der Verspätung beginnt die Sitzung pünktlich.',
        note: 'trotz is followed by a noun phrase.'
      },
      {
        english: 'It was raining. Nevertheless, we went out.',
        german: 'Es hat geregnet. Trotzdem sind wir ausgegangen.',
        note: 'trotzdem is followed by inversion: sind wir.'
      }
    ],
    avoid: [
      'Obwohl es hat geregnet, ...',
      'Trotz es geregnet hat, ...',
      'Trotzdem wir sind ausgegangen.'
    ]
  },
  {
    id: 'nachdem-bevor-waehrend',
    category: 'clause-structure',
    level: 'B1',
    title: 'Time clauses: after, before, while',
    sourcePattern: 'EN: after/before/while + clause',
    germanPattern: 'nachdem/bevor/während + verb-final',
    coreAnswer: 'After I had checked the documents, I sent the application → Nachdem ich die Unterlagen geprüft hatte, schickte ich die Bewerbung ab.',
    explanation:
      'B1/B2 German often needs precise sequencing. Nachdem usually marks an earlier completed action; bevor marks the later action that has not happened yet; während can be a clause or a preposition.',
    examples: [
      {
        english: 'After I had checked the documents, I sent the application.',
        german: 'Nachdem ich die Unterlagen geprüft hatte, schickte ich die Bewerbung ab.',
        note: 'The earlier action is complete before the main action.'
      },
      {
        english: 'Before we sign the contract, we must clarify the costs.',
        german: 'Bevor wir den Vertrag unterschreiben, müssen wir die Kosten klären.',
        note: 'The subordinate clause closes with unterschreiben.'
      },
      {
        english: 'During the meeting, he took notes.',
        german: 'Während der Besprechung machte er Notizen.',
        note: 'während + noun is compact and common in formal contexts.'
      }
    ],
    avoid: [
      'Nach ich habe geprüft, ...',
      'Bevor wir unterschreiben den Vertrag, ...',
      'Forgetting verb-final order in the subordinate clause.'
    ]
  },
  {
    id: 'process-state-passive',
    category: 'voice',
    level: 'B1',
    title: 'Process passive vs state passive',
    sourcePattern: 'EN: is being done vs is done/closed/finished',
    germanPattern: 'werden + participle for process | sein + participle for state/result',
    coreAnswer: 'The door is being closed → Die Tür wird geschlossen.',
    explanation:
      'German separates an action in progress from the resulting state. werden + participle shows that something is being done. sein + participle describes the result after the action.',
    examples: [
      {
        english: 'The door is being closed.',
        german: 'Die Tür wird geschlossen.',
        note: 'Process: someone is closing it.'
      },
      {
        english: 'The door is closed.',
        german: 'Die Tür ist geschlossen.',
        note: 'State/result: the door is not open.'
      },
      {
        english: 'The application was rejected.',
        german: 'Die Bewerbung wurde abgelehnt.',
        note: 'Past process passive.'
      }
    ],
    avoid: [
      'Using ist geschlossen for an action that is happening now.',
      'Using wird geschlossen when you only mean the final state.',
      'Translating every English passive with a German passive when man or an active sentence sounds better.'
    ]
  },
  {
    id: 'passive-alternatives',
    category: 'voice',
    level: 'B2',
    title: 'Passive alternatives: man, sich lassen, adjective style',
    sourcePattern: 'EN: can be solved, can be explained, is easy to read',
    germanPattern: 'man + active | sich lassen + infinitive | adjective + sein',
    coreAnswer: 'The problem can be solved → Das Problem lässt sich lösen.',
    explanation:
      'B2 German often avoids heavy passive forms by choosing a more natural alternative. sich lassen is especially useful for can be done when the focus is possibility.',
    examples: [
      {
        english: 'The problem can be solved.',
        german: 'Das Problem lässt sich lösen.',
        note: 'Natural when the focus is feasibility.'
      },
      {
        english: 'This can be explained easily.',
        german: 'Das lässt sich leicht erklären.',
        note: 'A compact B2 pattern.'
      },
      {
        english: 'One can solve the problem this way.',
        german: 'Man kann das Problem so lösen.',
        note: 'man is often clearer than a passive.'
      }
    ],
    avoid: [
      'Overusing wird ... werden when German has a simpler option.',
      'Using sich lassen for people as if it meant allow oneself in every context.',
      'Forgetting the final infinitive after lässt sich.'
    ]
  },
  {
    id: 'konjunktiv-ii',
    category: 'clause-structure',
    level: 'B1',
    title: 'Konjunktiv II: unreal conditions and polite distance',
    sourcePattern: 'EN: would, could, if I had/were',
    germanPattern: 'würde + infinitive | hätte/wäre/könnte/sollte + verb-final in wenn-clauses',
    coreAnswer: 'If I had more time, I would learn more → Wenn ich mehr Zeit hätte, würde ich mehr lernen.',
    explanation:
      'Konjunktiv II is not just a polite form. It marks hypothetical situations, cautious suggestions, wishes, and distance from reality.',
    examples: [
      {
        english: 'If I had more time, I would learn more.',
        german: 'Wenn ich mehr Zeit hätte, würde ich mehr lernen.',
        note: 'hätte closes the wenn-clause.'
      },
      {
        english: 'Could you help me?',
        german: 'Könnten Sie mir helfen?',
        note: 'Polite request with könnten.'
      },
      {
        english: 'I would do it differently.',
        german: 'Ich würde es anders machen.',
        note: 'würde + infinitive is productive and clear.'
      }
    ],
    avoid: [
      'Wenn ich habe mehr Zeit, ...',
      'Ich würde es mache.',
      'Treating would as a future marker instead of a hypothetical marker.'
    ]
  },
  {
    id: 'reported-speech-konjunktiv-i',
    category: 'reported-speech',
    level: 'B2',
    title: 'Reported speech: Konjunktiv I and neutral distance',
    sourcePattern: 'EN: he says that..., according to...',
    germanPattern: 'sagen/berichten/erklären + Konjunktiv I; Konjunktiv II when forms are unclear',
    coreAnswer: 'He says he is ill → Er sagt, er sei krank.',
    explanation:
      'Formal German uses Konjunktiv I to report someone else\'s statement without presenting it as your own claim. When Konjunktiv I looks the same as the indicative, German often switches to Konjunktiv II.',
    examples: [
      {
        english: 'He says he is ill.',
        german: 'Er sagt, er sei krank.',
        note: 'sei marks reported speech.'
      },
      {
        english: 'The minister said the situation was under control.',
        german: 'Der Minister sagte, die Lage sei unter Kontrolle.',
        note: 'Useful for news, summaries, and formal writing.'
      },
      {
        english: 'They say they have no time.',
        german: 'Sie sagen, sie hätten keine Zeit.',
        note: 'hätten avoids ambiguity with haben.'
      }
    ],
    avoid: [
      'Using reported speech forms in casual conversation when normal dass-clauses are enough.',
      'Presenting another person\'s claim as a fact in formal summaries.',
      'Forgetting that word order still follows German clause rules.'
    ]
  },
  {
    id: 'nominalization-verbalization',
    category: 'nominal-style',
    level: 'B2',
    title: 'Nominal style vs verbal style',
    sourcePattern: 'EN: after checking..., because costs increased...',
    germanPattern: 'preposition + nominal phrase | subordinate clause with a verb',
    coreAnswer: 'After checking the documents → Nach Prüfung der Unterlagen',
    explanation:
      'B2 learners need to recognize formal nominal style, but also know when a verbal sentence is clearer. German official texts often compress actions into nouns; spoken German usually prefers clauses.',
    examples: [
      {
        english: 'After checking the documents, I sent the application.',
        german: 'Nach Prüfung der Unterlagen schickte ich die Bewerbung ab.',
        note: 'Compact and formal.'
      },
      {
        english: 'After I had checked the documents, I sent the application.',
        german: 'Nachdem ich die Unterlagen geprüft hatte, schickte ich die Bewerbung ab.',
        note: 'Clearer and often better for speaking.'
      },
      {
        english: 'Because the costs increased, the plan changed.',
        german: 'Wegen der gestiegenen Kosten wurde der Plan geändert.',
        note: 'Nominal phrase with wegen + genitive.'
      }
    ],
    avoid: [
      'Using nominal style so heavily that the sentence becomes hard to read.',
      'Nach ich habe geprüft...',
      'Forgetting case endings inside the noun phrase.'
    ]
  },
  {
    id: 'participle-attributes',
    category: 'nominal-style',
    level: 'B2',
    title: 'Participle adjectives before nouns',
    sourcePattern: 'EN: the application submitted yesterday, rising costs',
    germanPattern: 'participle + adjective ending + noun',
    coreAnswer: 'the application submitted yesterday → die gestern eingereichte Bewerbung',
    explanation:
      'German can compress a relative clause into an adjective-like participle before the noun. This is common in formal B2 reading and writing.',
    examples: [
      {
        english: 'the application submitted yesterday',
        german: 'die gestern eingereichte Bewerbung',
        note: 'Past participle used like an adjective.'
      },
      {
        english: 'rising costs',
        german: 'die steigenden Kosten',
        note: 'Present participle describes an ongoing development.'
      },
      {
        english: 'a problem that must be solved',
        german: 'ein zu lösendes Problem',
        note: 'Advanced formal structure: zu + participle-like adjective.'
      }
    ],
    avoid: [
      'Keeping English word order inside the noun phrase.',
      'Ignoring adjective endings.',
      'Using this structure in every spoken sentence when a relative clause would sound clearer.'
    ]
  },
  {
    id: 'double-infinitive',
    category: 'word-order',
    level: 'B2',
    title: 'Double infinitive with modals in perfect tenses',
    sourcePattern: 'EN: had to work, wanted to call, could have stayed',
    germanPattern: 'haben/hätten + object/detail + infinitive + modal infinitive',
    coreAnswer: 'I had to work → Ich habe arbeiten müssen.',
    explanation:
      'When a modal verb appears with another infinitive in the perfect tense, German often uses the Ersatzinfinitiv: the modal stays as an infinitive instead of becoming a normal past participle.',
    examples: [
      {
        english: 'I had to work.',
        german: 'Ich habe arbeiten müssen.',
        note: 'müssen replaces gemusst in this double-infinitive pattern.'
      },
      {
        english: 'She wanted to call him.',
        german: 'Sie hat ihn anrufen wollen.',
        note: 'anrufen and wollen both appear at the end.'
      },
      {
        english: 'We could have stayed.',
        german: 'Wir hätten bleiben können.',
        note: 'Konjunktiv II perfect with double infinitive.'
      }
    ],
    avoid: [
      'Ich habe arbeiten gemusst when there is another infinitive.',
      'Sie hat gewollt ihn anrufen.',
      'Moving the object after the final infinitive cluster.'
    ]
  },
  {
    id: 'present-for-future',
    category: 'tense',
    level: 'B1',
    title: 'Future plans: present tense with a time marker',
    sourcePattern: 'EN: will / be going to + verb',
    germanPattern: 'present tense + clear future time marker; werden only when prediction or emphasis is needed',
    coreAnswer: 'I will call you tomorrow → Ich rufe dich morgen an.',
    explanation:
      'German often uses the present tense for planned future actions when the time marker already makes the future clear. Werden is useful for predictions, promises, or emphasis, but it is not required in every future sentence.',
    examples: [
      {
        english: 'I will call you tomorrow.',
        german: 'Ich rufe dich morgen an.',
        note: 'Morgen makes the future meaning clear, so Präsens sounds natural.'
      },
      {
        english: 'We are going to move next month.',
        german: 'Wir ziehen nächsten Monat um.',
        note: 'A planned future action often uses the present tense.'
      },
      {
        english: 'It will probably rain later.',
        german: 'Es wird später wahrscheinlich regnen.',
        note: 'Werden fits a prediction rather than a fixed plan.'
      }
    ],
    avoid: [
      'Using werden mechanically for every English will.',
      'Ich werde dich morgen anrufen when a simple plan sounds more natural as Ich rufe dich morgen an.',
      'Forgetting the separable prefix in future plans: Ich rufe dich morgen an.'
    ]
  },
  {
    id: 'perfekt-vs-praeteritum',
    category: 'tense',
    level: 'B1',
    title: 'Past narration: Perfekt vs Präteritum',
    sourcePattern: 'EN: simple past / present perfect',
    germanPattern: 'Perfekt for spoken completed events; Präteritum for sein, haben, modals and written narration',
    coreAnswer: 'I went home early → Ich bin früh nach Hause gegangen.',
    explanation:
      'English tense names do not map directly onto German. In everyday German, completed actions are often in Perfekt, while Präteritum is common with sein, haben, modal verbs, and written or narrative style.',
    examples: [
      {
        english: 'I went home early.',
        german: 'Ich bin früh nach Hause gegangen.',
        note: 'Spoken completed action: Perfekt is natural.'
      },
      {
        english: 'I had no time.',
        german: 'Ich hatte keine Zeit.',
        note: 'Haben is very common in Präteritum.'
      },
      {
        english: 'She had to wait.',
        german: 'Sie musste warten.',
        note: 'Modal verbs often use Präteritum in everyday German.'
      }
    ],
    avoid: [
      'Translating English simple past automatically as German Präteritum.',
      'Overusing Perfekt with war, hatte, musste in basic narration.',
      'Mixing tense choice with word-for-word English tense labels.'
    ]
  },
  {
    id: 'had-done-plusquamperfekt',
    category: 'tense',
    level: 'B2',
    title: 'Earlier past: Plusquamperfekt',
    sourcePattern: 'EN: had + past participle before another past event',
    germanPattern: 'hatte/war + past participle to mark the earlier completed action',
    coreAnswer: 'After I had sent the application, I received an answer → Nachdem ich die Bewerbung abgeschickt hatte, bekam ich eine Antwort.',
    explanation:
      'When two past events are linked and one clearly happened first, German can use Plusquamperfekt for the earlier action. This is especially useful after nachdem or in written explanations.',
    examples: [
      {
        english: 'After I had sent the application, I received an answer.',
        german: 'Nachdem ich die Bewerbung abgeschickt hatte, bekam ich eine Antwort.',
        note: 'Abgeschickt hatte marks the action completed before the answer came.'
      },
      {
        english: 'When we arrived, the meeting had already started.',
        german: 'Als wir ankamen, hatte die Besprechung schon begonnen.',
        note: 'The meeting started before the arrival.'
      },
      {
        english: 'He was tired because he had slept badly.',
        german: 'Er war müde, weil er schlecht geschlafen hatte.',
        note: 'Plusquamperfekt explains the earlier cause.'
      }
    ],
    avoid: [
      'Using Plusquamperfekt for every past sentence.',
      'Nach ich hatte geschickt...',
      'Forgetting verb-final order after nachdem and weil.'
    ]
  },
  {
    id: 'dative-experiencer',
    category: 'perspective',
    level: 'B1',
    title: 'Dative experiencer: mir ist kalt, mir gefällt...',
    sourcePattern: 'EN: I am cold / I like it / I miss you',
    germanPattern: 'dative person + verb; the thing or state often becomes the grammatical subject',
    coreAnswer: 'I like the city → Die Stadt gefällt mir.',
    explanation:
      'German often presents feelings, impressions, and needs from the receiver\'s perspective. The person is in the dative, while the thing, person, or situation can become the subject.',
    examples: [
      {
        english: 'I like the city.',
        german: 'Die Stadt gefällt mir.',
        note: 'The city is the grammatical subject; mir is the experiencer.'
      },
      {
        english: 'I am cold.',
        german: 'Mir ist kalt.',
        note: 'State + dative person, not ich bin kalt.'
      },
      {
        english: 'I miss you.',
        german: 'Du fehlst mir.',
        note: 'The missed person becomes the subject in German.'
      }
    ],
    avoid: [
      'Ich bin kalt when you mean I feel cold.',
      'Ich mag die Stadt for every I like sentence when gefallen fits the perspective.',
      'Ich vermisse dich is possible, but Du fehlst mir is the useful dative-perspective pattern.'
    ]
  },
  {
    id: 'impersonal-es',
    category: 'perspective',
    level: 'B1',
    title: 'Impersonal perspective: es gibt, es geht, es fehlt',
    sourcePattern: 'EN: there is / things are going / something is missing',
    germanPattern: 'es + verb as a neutral frame; often no personal subject',
    coreAnswer: 'There is a problem → Es gibt ein Problem.',
    explanation:
      'English often uses there, people, or a personal subject where German uses an impersonal es. This helps the sentence sound neutral and natural before adding details.',
    examples: [
      {
        english: 'There is a problem.',
        german: 'Es gibt ein Problem.',
        note: 'Existence is expressed with es gibt + accusative.'
      },
      {
        english: 'Things are going well.',
        german: 'Es läuft gut.',
        note: 'German can describe the situation without naming a subject.'
      },
      {
        english: 'Something is still missing.',
        german: 'Es fehlt noch etwas.',
        note: 'Fehlen often reverses the English perspective.'
      }
    ],
    avoid: [
      'Da ist ein Problem as the automatic translation of there is in every context.',
      'Die Dinge gehen gut word for word from English.',
      'Forgetting that es gibt takes the accusative: Es gibt einen Grund.'
    ]
  },
  {
    id: 'man-vs-passive',
    category: 'perspective',
    level: 'B2',
    title: 'General perspective: man instead of heavy passive',
    sourcePattern: 'EN: it is said / you can / people often',
    germanPattern: 'man + active verb for general statements, instructions, and practical advice',
    coreAnswer: 'You can solve it this way → Man kann es so lösen.',
    explanation:
      'English often uses you, they, people, or passive forms for general statements. German frequently uses man to keep the sentence active, clear, and impersonal.',
    examples: [
      {
        english: 'You can solve it this way.',
        german: 'Man kann es so lösen.',
        note: 'General you becomes man.'
      },
      {
        english: 'It is often said that German is difficult.',
        german: 'Man sagt oft, dass Deutsch schwierig ist.',
        note: 'Man + active verb can sound lighter than a passive.'
      },
      {
        english: 'People should check the documents first.',
        german: 'Man sollte zuerst die Unterlagen prüfen.',
        note: 'Useful for advice and instructions.'
      }
    ],
    avoid: [
      'Translating general you as du in formal or neutral contexts.',
      'Overusing passive when man is clearer.',
      'Man is singular in grammar: Man kann, not Man können.'
    ]
  },
  {
    id: 'zu-infinitive',
    category: 'clause-structure',
    level: 'B1',
    title: 'zu + infinitive clauses',
    sourcePattern: 'EN: to apply, to call, to explain it',
    germanPattern: 'comma + zu + infinitive at the end; separable verbs: zu inside the verb',
    coreAnswer: 'It is important to apply early → Es ist wichtig, sich früh zu bewerben.',
    explanation:
      'German uses zu-infinitive clauses after many adjectives, nouns, and verbs. With separable verbs, zu goes between the prefix and the verb stem.',
    examples: [
      {
        english: 'It is important to apply early.',
        german: 'Es ist wichtig, sich früh zu bewerben.',
        note: 'zu + infinitive closes the clause.'
      },
      {
        english: 'I have no time to call.',
        german: 'Ich habe keine Zeit, anzurufen.',
        note: 'anrufen becomes anzurufen.'
      },
      {
        english: 'He tries to explain it.',
        german: 'Er versucht, es zu erklären.',
        note: 'versuchen often triggers zu + infinitive.'
      }
    ],
    avoid: [
      'Ich muss zu gehen. Modals do not take zu.',
      'Ich habe keine Zeit, zu anrufen.',
      'Forgetting the comma in longer infinitive clauses.'
    ]
  },
  {
    id: 'because-so-linkers',
    category: 'cohesion',
    level: 'B1',
    title: 'Because / so: weil, denn, deshalb',
    sourcePattern: 'EN: because + clause | so/therefore + sentence',
    germanPattern: 'weil + verb-final | denn + normal word order | deshalb/deswegen + verb in position 2',
    coreAnswer: 'I stayed home because I was ill → Ich bin zu Hause geblieben, weil ich krank war.',
    explanation:
      'B1 German needs the connector and the word order together. Weil introduces a subordinate clause, denn connects two main clauses, and deshalb or deswegen starts the consequence with inversion.',
    examples: [
      {
        english: 'I stayed home because I was ill.',
        german: 'Ich bin zu Hause geblieben, weil ich krank war.',
        note: 'war closes the weil-clause.'
      },
      {
        english: 'I was ill, so I stayed home.',
        german: 'Ich war krank, deshalb bin ich zu Hause geblieben.',
        note: 'After deshalb, the finite verb comes immediately: bin ich.'
      },
      {
        english: 'I stayed home because I was ill.',
        german: 'Ich bin zu Hause geblieben, denn ich war krank.',
        note: 'Denn keeps normal main-clause word order.'
      }
    ],
    avoid: [
      'Weil ich war krank, ...',
      'Deshalb ich bin zu Hause geblieben.',
      'Using denn with verb-final word order.'
    ]
  },
  {
    id: 'purpose-um-zu-damit',
    category: 'clause-structure',
    level: 'B1',
    title: 'Purpose: um ... zu vs damit',
    sourcePattern: 'EN: to / in order to / so that',
    germanPattern: 'um + details + zu-infinitive for the same subject | damit + verb-final when subjects differ',
    coreAnswer: 'I am learning German to find work → Ich lerne Deutsch, um Arbeit zu finden.',
    explanation:
      'Use um ... zu when the same person does both actions. Use damit when the purpose concerns another subject or when you need a full clause.',
    examples: [
      {
        english: 'I am learning German to find work in Belgium.',
        german: 'Ich lerne Deutsch, um in Belgien Arbeit zu finden.',
        note: 'Same subject: ich lerne and ich finde Arbeit.'
      },
      {
        english: 'I speak slowly so that you understand me.',
        german: 'Ich spreche langsam, damit du mich verstehst.',
        note: 'Different subjects: ich speak, du understand.'
      },
      {
        english: 'She is saving money to move later.',
        german: 'Sie spart Geld, um später umzuziehen.',
        note: 'Separable verb: umziehen becomes umzuziehen.'
      }
    ],
    avoid: [
      'Ich spreche langsam, um du mich verstehst.',
      'Ich lerne Deutsch, damit Arbeit zu finden.',
      'Forgetting zu inside separable verbs: um zu umziehen.'
    ]
  },
  {
    id: 'als-wenn-wann',
    category: 'tense',
    level: 'B1',
    title: 'When: als, wenn, wann',
    sourcePattern: 'EN: when + past event | repeated event | question',
    germanPattern: 'als for one-time past events | wenn for repeated/conditional events | wann for questions',
    coreAnswer: 'When I arrived, it was raining → Als ich ankam, hat es geregnet.',
    explanation:
      'English when covers several German choices. At B1, the key reflex is als for one specific event in the past, wenn for repeated or conditional situations, and wann for direct or indirect questions.',
    examples: [
      {
        english: 'When I arrived, it was raining.',
        german: 'Als ich ankam, hat es geregnet.',
        note: 'One specific past event: als.'
      },
      {
        english: 'When I have time, I go swimming.',
        german: 'Wenn ich Zeit habe, gehe ich schwimmen.',
        note: 'Repeated or conditional situation: wenn.'
      },
      {
        english: 'Do you know when the office opens?',
        german: 'Weißt du, wann das Büro öffnet?',
        note: 'Indirect question: wann.'
      }
    ],
    avoid: [
      'Wenn ich gestern ankam, ... for a single past event.',
      'Using wann for every English when.',
      'Forgetting verb-final word order after als and wenn.'
    ]
  },
  {
    id: 'seit-seitdem',
    category: 'tense',
    level: 'B1',
    title: 'Since / for: seit and seitdem',
    sourcePattern: 'EN: since + date | for + duration',
    germanPattern: 'seit + dative noun phrase | seitdem/seit + clause with verb-final',
    coreAnswer: 'I have lived here for three years → Ich wohne seit drei Jahren hier.',
    explanation:
      'For situations that started in the past and continue now, German often uses the present tense with seit. Seit can introduce a noun phrase; seitdem or seit can introduce a full clause.',
    examples: [
      {
        english: 'I have lived here for three years.',
        german: 'Ich wohne seit drei Jahren hier.',
        note: 'The situation still continues, so present tense is natural.'
      },
      {
        english: 'She has worked here since 2022.',
        german: 'Sie arbeitet seit 2022 hier.',
        note: 'Since + date often becomes seit + date.'
      },
      {
        english: 'Since he moved, he takes the train.',
        german: 'Seitdem er umgezogen ist, fährt er mit dem Zug.',
        note: 'Seitdem introduces a subordinate clause.'
      }
    ],
    avoid: [
      'Ich wohne hier für drei Jahren.',
      'Ich habe hier gewohnt for a situation that is still true.',
      'Seitdem er ist umgezogen, ...'
    ]
  },
  {
    id: 'position-of-nicht',
    category: 'word-order',
    level: 'B1',
    title: 'Position of nicht',
    sourcePattern: 'EN: not + verb/object/detail',
    germanPattern: 'nicht before the element it negates; often near the end for whole-sentence negation',
    coreAnswer: 'I am not coming tomorrow → Ich komme morgen nicht.',
    explanation:
      'German nicht does not simply sit after the subject like English not. It usually stands before the part you want to negate, or near the end when the whole statement is negative.',
    examples: [
      {
        english: 'I am not coming tomorrow.',
        german: 'Ich komme morgen nicht.',
        note: 'Whole statement negation: nicht near the end.'
      },
      {
        english: 'I do not know this answer.',
        german: 'Ich kenne diese Antwort nicht.',
        note: 'Nicht follows the definite object.'
      },
      {
        english: 'I am not going to Berlin, but to Cologne.',
        german: 'Ich fahre nicht nach Berlin, sondern nach Köln.',
        note: 'Nicht stands before the detail being corrected.'
      }
    ],
    avoid: [
      'Ich nicht komme morgen.',
      'Putting nicht after the finite verb mechanically.',
      'Using nicht before nouns when kein is required: Ich habe keine Zeit.'
    ]
  },
  {
    id: 'two-way-prepositions',
    category: 'lexical',
    level: 'B1',
    title: 'Two-way prepositions: where vs where to',
    sourcePattern: 'EN: in/on/under + place | to/into/onto + place',
    germanPattern: 'dative for location | accusative for direction or change of place',
    coreAnswer: 'I am in the office / I go into the office → Ich bin im Büro / Ich gehe ins Büro.',
    explanation:
      'With two-way prepositions, German asks whether the sentence describes a location or a movement toward a new place. The same English preposition can therefore need two different cases.',
    examples: [
      {
        english: 'The keys are on the table.',
        german: 'Die Schlüssel liegen auf dem Tisch.',
        note: 'Location: auf + dative.'
      },
      {
        english: 'I put the keys on the table.',
        german: 'Ich lege die Schlüssel auf den Tisch.',
        note: 'Direction/change of place: auf + accusative.'
      },
      {
        english: 'I am going into the office.',
        german: 'Ich gehe ins Büro.',
        note: 'Movement into a place: in + accusative, contracted as ins.'
      }
    ],
    avoid: [
      'Die Schlüssel liegen auf den Tisch.',
      'Ich gehe im Büro when you mean movement into the office.',
      'Choosing the case from the English preposition instead of the German meaning.'
    ]
  },
  {
    id: 'basic-relative-clauses',
    category: 'clause-structure',
    level: 'B1',
    title: 'Basic relative clauses: der, die, das',
    sourcePattern: 'EN: the person/thing who/that...',
    germanPattern: 'noun + comma + relative pronoun + verb-final',
    coreAnswer: 'The woman who lives here is friendly → Die Frau, die hier wohnt, ist freundlich.',
    explanation:
      'A B1 relative clause gives more information about a noun. The relative pronoun points back to the noun, but its case comes from its role inside the relative clause.',
    examples: [
      {
        english: 'The woman who lives here is friendly.',
        german: 'Die Frau, die hier wohnt, ist freundlich.',
        note: 'Die Frau is feminine, and die is the subject of the relative clause.'
      },
      {
        english: 'The book that I bought is interesting.',
        german: 'Das Buch, das ich gekauft habe, ist interessant.',
        note: 'Das refers to Buch and habe closes the relative clause.'
      },
      {
        english: 'The man whom I helped thanked me.',
        german: 'Der Mann, dem ich geholfen habe, hat sich bedankt.',
        note: 'Helfen takes dative, so the relative pronoun is dem.'
      }
    ],
    avoid: [
      'Die Frau, die wohnt hier, ...',
      'Forgetting the comma before the relative clause.',
      'Choosing der/die/das only from gender and ignoring case.'
    ]
  },
  {
    id: 'too-enough',
    category: 'translation-shift',
    level: 'B1',
    title: 'Too / enough: zu, genug, um ... zu',
    sourcePattern: 'EN: too ... to | enough ... to',
    germanPattern: 'zu + adjective + um ... zu | adjective/adverb + genug + um ... zu',
    coreAnswer: 'It is too late to call → Es ist zu spät, um anzurufen.',
    explanation:
      'English too and enough often introduce a result. German usually keeps the adjective in the main clause and adds um ... zu for the action that is possible or impossible.',
    examples: [
      {
        english: 'It is too late to call.',
        german: 'Es ist zu spät, um anzurufen.',
        note: 'Separable verb: anrufen becomes anzurufen.'
      },
      {
        english: 'She is old enough to drive.',
        german: 'Sie ist alt genug, um Auto zu fahren.',
        note: 'Genug normally follows the adjective.'
      },
      {
        english: 'The apartment is too small for us.',
        german: 'Die Wohnung ist zu klein für uns.',
        note: 'No infinitive clause is needed when the complement is just for us.'
      }
    ],
    avoid: [
      'Es ist zu spät zu anrufen.',
      'Sie ist genug alt, um Auto zu fahren.',
      'Translating enough as genügend in every simple sentence.'
    ]
  }
];

export const STRUCTURE_CATEGORY_LABELS: Record<StructureCategory | 'all', string> = {
  all: 'All',
  'translation-shift': 'Translation shifts',
  'clause-structure': 'Clause structure',
  cohesion: 'Cohesion',
  voice: 'Voice',
  'reported-speech': 'Reported speech',
  'nominal-style': 'Nominal style',
  tense: 'Tense and aspect',
  'word-order': 'Word order',
  perspective: 'Perspective',
  lexical: 'Lexical patterns'
};
