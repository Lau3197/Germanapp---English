import React, { useState } from 'react';

type ExamPanel = 'writing' | 'speaking' | 'official';
type WritingType = 'forum' | 'formal-email';
type SpeakingType = 'presentation' | 'discussion' | 'planning';

interface WritingTask {
  id: string;
  type: WritingType;
  style: string;
  title: string;
  time: string;
  length: string;
  situation: string;
  prompt: string;
  mustCover: string[];
  usefulLanguage: string[];
}

interface SpeakingTask {
  id: string;
  type: SpeakingType;
  style: string;
  title: string;
  time: string;
  prompt: string;
  mustDo: string[];
  followUps: string[];
  usefulLanguage: string[];
}

interface OfficialResource {
  title: string;
  provider: string;
  type: string;
  href: string;
  note: string;
}

const writingTasks: WritingTask[] = [
  {
    id: 'forum-transport',
    type: 'forum',
    style: 'Goethe-style forum post',
    title: 'Free public transport in big cities',
    time: '30-35 min',
    length: 'about 150 words',
    situation: 'A German forum is discussing whether buses and trains should be free in large cities.',
    prompt: 'Sollten öffentliche Verkehrsmittel in Großstädten kostenlos sein?',
    mustCover: [
      'State your opinion clearly.',
      'Give two arguments with examples.',
      'Mention one possible disadvantage.',
      'End with a balanced conclusion.'
    ],
    usefulLanguage: [
      'Meiner Ansicht nach ...',
      'Ein wichtiger Vorteil besteht darin, dass ...',
      'Allerdings darf man nicht vergessen, dass ...',
      'Zusammenfassend lässt sich sagen, dass ...'
    ]
  },
  {
    id: 'forum-homeoffice',
    type: 'forum',
    style: 'Goethe-style forum post',
    title: 'Working from home',
    time: '30-35 min',
    length: 'about 150 words',
    situation: 'A forum asks whether employees should have the right to work from home several days a week.',
    prompt: 'Sollten Arbeitnehmerinnen und Arbeitnehmer mehrere Tage pro Woche im Homeoffice arbeiten dürfen?',
    mustCover: [
      'Explain why home office can be useful.',
      'Discuss one problem for teamwork or communication.',
      'Use at least three connectors.',
      'Give a personal or realistic example.'
    ],
    usefulLanguage: [
      'Einerseits ..., andererseits ...',
      'Aus eigener Erfahrung kann ich sagen, dass ...',
      'Für kreative Aufgaben ist es wichtig, dass ...',
      'Deshalb wäre eine Mischung sinnvoll.'
    ]
  },
  {
    id: 'forum-smartphones',
    type: 'forum',
    style: 'Goethe-style forum post',
    title: 'Smartphones at school',
    time: '30-35 min',
    length: 'about 150 words',
    situation: 'A parents’ forum is debating a smartphone ban in schools.',
    prompt: 'Sollten Smartphones in der Schule verboten werden?',
    mustCover: [
      'Present one educational argument.',
      'Present one social or practical argument.',
      'Make a clear recommendation.',
      'Avoid a one-sided answer.'
    ],
    usefulLanguage: [
      'Ich bin nur teilweise mit einem Verbot einverstanden.',
      'Der größte Nachteil ist, dass ...',
      'Trotzdem können Smartphones auch nützlich sein, wenn ...',
      'Eine klare Regel wäre besser als ein vollständiges Verbot.'
    ]
  },
  {
    id: 'forum-online-learning',
    type: 'forum',
    style: 'Goethe-style forum post',
    title: 'Online courses for adults',
    time: '30-35 min',
    length: 'about 150 words',
    situation: 'A language-learning forum asks whether online courses are as effective as classroom courses.',
    prompt: 'Sind Online-Kurse für Erwachsene genauso effektiv wie Präsenzkurse?',
    mustCover: [
      'Compare flexibility and motivation.',
      'Mention interaction with teachers or classmates.',
      'Use a concrete example from language learning.',
      'Finish with your preferred solution.'
    ],
    usefulLanguage: [
      'Im Vergleich zu Präsenzkursen ...',
      'Besonders für Berufstätige ist es praktisch, dass ...',
      'Der persönliche Austausch fehlt jedoch manchmal.',
      'Am effektivsten finde ich ...'
    ]
  },
  {
    id: 'forum-consumption',
    type: 'forum',
    style: 'Goethe-style forum post',
    title: 'Buying less',
    time: '30-35 min',
    length: 'about 150 words',
    situation: 'A sustainability forum asks whether people should buy fewer new products.',
    prompt: 'Sollten wir weniger neue Produkte kaufen und mehr reparieren?',
    mustCover: [
      'Explain the environmental argument.',
      'Mention cost or convenience.',
      'Give one example such as clothes, phones, or furniture.',
      'Use a conclusion that sounds realistic.'
    ],
    usefulLanguage: [
      'Aus ökologischer Sicht ...',
      'Viele Geräte werden ersetzt, obwohl ...',
      'Das Problem dabei ist, dass ...',
      'Meiner Meinung nach sollte man zuerst prüfen, ob ...'
    ]
  },
  {
    id: 'forum-four-day-week',
    type: 'forum',
    style: 'Goethe-style forum post',
    title: 'Four-day work week',
    time: '30-35 min',
    length: 'about 150 words',
    situation: 'A business forum is discussing whether companies should introduce a four-day work week.',
    prompt: 'Sollten Unternehmen eine Vier-Tage-Woche einführen?',
    mustCover: [
      'Discuss productivity.',
      'Discuss stress or work-life balance.',
      'Mention one risk for companies or customers.',
      'Use a nuanced final sentence.'
    ],
    usefulLanguage: [
      'Eine kürzere Arbeitswoche könnte dazu führen, dass ...',
      'Gleichzeitig besteht die Gefahr, dass ...',
      'Für manche Branchen wäre das einfacher als für andere.',
      'Daher sollte man dieses Modell zunächst testen.'
    ]
  },
  {
    id: 'email-course-schedule',
    type: 'formal-email',
    style: 'Goethe/telc-style formal message',
    title: 'Course schedule does not match the advertisement',
    time: '20-25 min',
    length: '100-140 words',
    situation: 'You booked an intensive German course. The schedule you received is different from the advertised schedule.',
    prompt: 'Write an email to the course center and ask for clarification.',
    mustCover: [
      'Refer to your booking and the advertised schedule.',
      'Explain the problem precisely.',
      'Ask whether the schedule can be corrected.',
      'Use a formal greeting and closing.'
    ],
    usefulLanguage: [
      'Sehr geehrte Damen und Herren,',
      'ich habe mich für den Kurs ... angemeldet.',
      'In der Anzeige stand jedoch, dass ...',
      'Könnten Sie mir bitte mitteilen, ob ...',
      'Mit freundlichen Grüßen'
    ]
  },
  {
    id: 'email-internship',
    type: 'formal-email',
    style: 'ÖSD/telc-style complaint',
    title: 'Internship did not match the offer',
    time: '25-30 min',
    length: '120-160 words',
    situation: 'You completed an internship abroad. The tasks were very different from what was promised.',
    prompt: 'Write a complaint to the agency that organized the internship.',
    mustCover: [
      'Say when and where the internship took place.',
      'Describe at least two differences between offer and reality.',
      'Explain how this affected your learning.',
      'Ask for a response or compensation.'
    ],
    usefulLanguage: [
      'hiermit möchte ich mich über ... beschweren.',
      'Laut Anzeige sollte ich ...',
      'Tatsächlich musste ich jedoch ...',
      'Ich bitte Sie daher um eine Stellungnahme.',
      'Ich hoffe auf eine schnelle Lösung.'
    ]
  },
  {
    id: 'email-apartment',
    type: 'formal-email',
    style: 'Formal message',
    title: 'Apartment viewing cancellation',
    time: '20 min',
    length: '90-120 words',
    situation: 'You had an appointment to view an apartment, but you cannot come because of work.',
    prompt: 'Write to the landlord and ask for a new appointment.',
    mustCover: [
      'Apologize for cancelling.',
      'Give a short reason.',
      'Suggest two alternative dates.',
      'Sound polite and reliable.'
    ],
    usefulLanguage: [
      'leider kann ich den Termin am ... nicht wahrnehmen.',
      'Der Grund dafür ist, dass ...',
      'Wäre es möglich, den Termin auf ... zu verschieben?',
      'Vielen Dank für Ihr Verständnis.'
    ]
  },
  {
    id: 'email-damaged-order',
    type: 'formal-email',
    style: 'Formal complaint',
    title: 'Damaged online order',
    time: '20-25 min',
    length: '100-140 words',
    situation: 'You ordered a desk online. It arrived damaged and one part is missing.',
    prompt: 'Write to customer service and request a solution.',
    mustCover: [
      'Mention order number and delivery date.',
      'Describe the damage and missing part.',
      'Ask for replacement, repair, or refund.',
      'Attach/request next steps politely.'
    ],
    usefulLanguage: [
      'am ... habe ich ... erhalten.',
      'Leider ist die Ware beschädigt angekommen.',
      'Außerdem fehlt ...',
      'Ich bitte Sie, mir entweder ... zu schicken oder ...',
      'Für Rückfragen stehe ich gern zur Verfügung.'
    ]
  },
  {
    id: 'email-exam-registration',
    type: 'formal-email',
    style: 'Formal request',
    title: 'Exam registration question',
    time: '20 min',
    length: '90-120 words',
    situation: 'You want to register for a B2 exam in Belgium, but you are not sure which documents you need.',
    prompt: 'Write to the exam center and ask for the missing information.',
    mustCover: [
      'Say which exam and date you are interested in.',
      'Ask about required documents.',
      'Ask about payment or deadline.',
      'Close formally.'
    ],
    usefulLanguage: [
      'ich interessiere mich für die B2-Prüfung am ...',
      'Könnten Sie mir bitte mitteilen, welche Unterlagen erforderlich sind?',
      'Außerdem würde ich gern wissen, bis wann ...',
      'Vielen Dank im Voraus.'
    ]
  },
  {
    id: 'email-noise',
    type: 'formal-email',
    style: 'Formal complaint',
    title: 'Noise in student residence',
    time: '25 min',
    length: '110-150 words',
    situation: 'You live in a residence. There has been loud noise every night for a week, and you cannot study.',
    prompt: 'Write to the residence administration.',
    mustCover: [
      'Describe the problem and when it happens.',
      'Explain the consequence for your studies or sleep.',
      'Ask for a concrete action.',
      'Stay polite but firm.'
    ],
    usefulLanguage: [
      'seit einer Woche gibt es jeden Abend ...',
      'Dadurch kann ich mich kaum konzentrieren.',
      'Ich möchte Sie bitten, ...',
      'Ich wäre Ihnen sehr dankbar, wenn ...'
    ]
  }
];

const speakingTasks: SpeakingTask[] = [
  {
    id: 'presentation-language-learning',
    type: 'presentation',
    style: 'Goethe-style short talk',
    title: 'Learning a language as an adult',
    time: '2-3 min talk + questions',
    prompt: 'What helps adults learn a foreign language successfully?',
    mustDo: [
      'Give your own experience or an example.',
      'Explain two effective methods.',
      'Mention one difficulty.',
      'Finish with advice for other learners.'
    ],
    followUps: [
      'Which skill is hardest for you: speaking, writing, listening, or reading?',
      'Is it better to study alone or with a teacher?',
      'How can adults stay motivated for several months?'
    ],
    usefulLanguage: [
      'Ich möchte heute über ... sprechen.',
      'Aus meiner Sicht spielt ... eine große Rolle.',
      'Ein konkretes Beispiel dafür ist ...',
      'Zum Schluss würde ich empfehlen, ...'
    ]
  },
  {
    id: 'presentation-social-media',
    type: 'presentation',
    style: 'Goethe-style short talk',
    title: 'Social media and everyday life',
    time: '2-3 min talk + questions',
    prompt: 'How does social media change the way people communicate?',
    mustDo: [
      'Describe one positive effect.',
      'Describe one negative effect.',
      'Give an example from everyday life.',
      'State your personal position.'
    ],
    followUps: [
      'Should children have access to social media?',
      'Can social media be useful for learning?',
      'What rules would you recommend?'
    ],
    usefulLanguage: [
      'Der Vorteil liegt darin, dass ...',
      'Problematisch finde ich jedoch ...',
      'Man sieht das zum Beispiel daran, dass ...',
      'Ich persönlich nutze soziale Medien ...'
    ]
  },
  {
    id: 'presentation-environment',
    type: 'presentation',
    style: 'Goethe/ÖSD-style presentation',
    title: 'Living more sustainably',
    time: '2-3 min talk + questions',
    prompt: 'What can individuals realistically do to live in a more environmentally friendly way?',
    mustDo: [
      'Choose two areas: transport, food, energy, shopping, or travel.',
      'Explain what is realistic and what is difficult.',
      'Use one comparison.',
      'End with one personal goal.'
    ],
    followUps: [
      'Should governments force people to change their habits?',
      'Is sustainable living more expensive?',
      'Which habit would be easiest for you to change?'
    ],
    usefulLanguage: [
      'Realistisch wäre zum Beispiel ...',
      'Im Gegensatz dazu ist ... schwieriger.',
      'Ich halte es für wichtig, dass ...',
      'Mein persönliches Ziel wäre ...'
    ]
  },
  {
    id: 'presentation-work-life',
    type: 'presentation',
    style: 'Goethe-style short talk',
    title: 'Work-life balance',
    time: '2-3 min talk + questions',
    prompt: 'Why is work-life balance important, and how can people improve it?',
    mustDo: [
      'Define what work-life balance means.',
      'Give two practical measures.',
      'Mention one problem in modern workplaces.',
      'Finish with your opinion.'
    ],
    followUps: [
      'Is a high salary more important than free time?',
      'Can employers be responsible for employees’ stress?',
      'Would you prefer a four-day week?'
    ],
    usefulLanguage: [
      'Unter Work-Life-Balance verstehe ich ...',
      'Eine Möglichkeit wäre, ...',
      'Besonders problematisch ist, dass ...',
      'Für mich persönlich wäre ...'
    ]
  },
  {
    id: 'presentation-city-country',
    type: 'presentation',
    style: 'Goethe-style short talk',
    title: 'City life or country life',
    time: '2-3 min talk + questions',
    prompt: 'Would you rather live in a big city or in the countryside?',
    mustDo: [
      'Compare at least two aspects.',
      'Mention work, transport, housing, or social life.',
      'Give your preference.',
      'Say whether your opinion could change later.'
    ],
    followUps: [
      'What is the biggest disadvantage of big cities?',
      'Do young people and older people need different living environments?',
      'How important is public transport?'
    ],
    usefulLanguage: [
      'Wenn ich ... mit ... vergleiche, dann ...',
      'Ein entscheidender Punkt ist ...',
      'Zurzeit würde ich lieber ...',
      'In ein paar Jahren könnte sich das ändern, weil ...'
    ]
  },
  {
    id: 'discussion-university',
    type: 'discussion',
    style: 'Goethe/telc-style argument exchange',
    title: 'University degree and career',
    time: '3-5 min discussion',
    prompt: 'Your partner says: "For a good career today, everyone needs a university degree." Respond and discuss.',
    mustDo: [
      'React to your partner’s statement.',
      'Agree partly or disagree politely.',
      'Give at least one example.',
      'Ask your partner a question.'
    ],
    followUps: [
      'What jobs require practical experience more than academic knowledge?',
      'Should companies value certificates or skills more?',
      'Would you study again to improve your career?'
    ],
    usefulLanguage: [
      'Da stimme ich nur teilweise zu.',
      'In manchen Berufen ist das sicher richtig, aber ...',
      'Ein gutes Beispiel dafür ist ...',
      'Wie siehst du das?'
    ]
  },
  {
    id: 'discussion-public-transport',
    type: 'discussion',
    style: 'Goethe/telc-style argument exchange',
    title: 'Free public transport',
    time: '3-5 min discussion',
    prompt: 'Your partner says: "Public transport should be free for everyone." Respond and discuss.',
    mustDo: [
      'React with a clear position.',
      'Mention cost, environment, or fairness.',
      'Challenge one point politely.',
      'Suggest a compromise.'
    ],
    followUps: [
      'Who should pay for free public transport?',
      'Would free tickets reduce car traffic?',
      'Should students or low-income people get priority?'
    ],
    usefulLanguage: [
      'Der Gedanke ist gut, allerdings ...',
      'Man müsste auch berücksichtigen, dass ...',
      'Ein möglicher Kompromiss wäre ...',
      'Ich frage mich, ob ...'
    ]
  },
  {
    id: 'discussion-ai',
    type: 'discussion',
    style: 'B2 current-topic discussion',
    title: 'Artificial intelligence in education',
    time: '3-5 min discussion',
    prompt: 'Your partner says: "Students should be allowed to use AI tools for homework." Respond and discuss.',
    mustDo: [
      'Say what can be useful about AI.',
      'Mention one risk.',
      'Give a rule you would introduce.',
      'Invite your partner to react.'
    ],
    followUps: [
      'Is using AI cheating?',
      'Can AI help language learners?',
      'What should teachers check more carefully?'
    ],
    usefulLanguage: [
      'Das hängt davon ab, wie man KI benutzt.',
      'Hilfreich ist KI vor allem, wenn ...',
      'Gefährlich wird es, wenn ...',
      'Eine klare Regel könnte lauten: ...'
    ]
  },
  {
    id: 'discussion-tourism',
    type: 'discussion',
    style: 'B2 argument exchange',
    title: 'Tourism and local life',
    time: '3-5 min discussion',
    prompt: 'Your partner says: "Cities should limit the number of tourists." Respond and discuss.',
    mustDo: [
      'Mention local residents and economy.',
      'Give one example of a possible limit.',
      'React to your partner’s strongest argument.',
      'End with a compromise.'
    ],
    followUps: [
      'Is tourism more positive or negative for cities?',
      'Should tourist apartments be restricted?',
      'How can visitors behave more respectfully?'
    ],
    usefulLanguage: [
      'Für die Wirtschaft ist Tourismus wichtig, trotzdem ...',
      'Die Einwohnerinnen und Einwohner leiden darunter, wenn ...',
      'Ich würde nicht alles verbieten, sondern ...',
      'Damit könnte man beide Seiten berücksichtigen.'
    ]
  },
  {
    id: 'planning-language-event',
    type: 'planning',
    style: 'telc-style planning task',
    title: 'Plan a German conversation evening',
    time: '5-7 min with a partner',
    prompt: 'You and your partner want to organize a German conversation evening for adult learners.',
    mustDo: [
      'Decide date, place, and duration.',
      'Choose activities for speaking practice.',
      'Plan how to invite participants.',
      'Divide responsibilities.'
    ],
    followUps: [
      'What will you do if too many people register?',
      'How will you help shy participants speak?',
      'Should the event be free?'
    ],
    usefulLanguage: [
      'Wir könnten zuerst ...',
      'Ich würde vorschlagen, dass du ...',
      'Dafür wäre ... geeignet.',
      'Lass uns am Ende noch klären, wer ...'
    ]
  },
  {
    id: 'planning-weekend-trip',
    type: 'planning',
    style: 'telc-style planning task',
    title: 'Plan a weekend trip',
    time: '5-7 min with a partner',
    prompt: 'You and your partner want to organize a weekend trip for your language class.',
    mustDo: [
      'Choose destination and transport.',
      'Discuss budget.',
      'Plan one cultural activity.',
      'Agree on what information you need next.'
    ],
    followUps: [
      'What if some participants have a small budget?',
      'Should the trip include free time?',
      'How will you collect payment?'
    ],
    usefulLanguage: [
      'Als Ziel käme ... infrage.',
      'Was hältst du davon, wenn ...?',
      'Wir sollten auch an ... denken.',
      'Bevor wir entscheiden, müssen wir ...'
    ]
  },
  {
    id: 'planning-study-group',
    type: 'planning',
    style: 'telc-style planning task',
    title: 'Create a B2 study group',
    time: '5-7 min with a partner',
    prompt: 'You and your partner want to create a weekly B2 study group before the exam.',
    mustDo: [
      'Decide how often to meet.',
      'Choose which skills to train.',
      'Plan homework between meetings.',
      'Agree how to give feedback.'
    ],
    followUps: [
      'How will you keep the group motivated?',
      'Should one person lead each meeting?',
      'What will you do if people do not prepare?'
    ],
    usefulLanguage: [
      'Am wichtigsten wäre für mich ...',
      'Wir könnten jede Woche einen Schwerpunkt setzen.',
      'Nach jedem Treffen sollten alle ...',
      'Feedback sollte konkret und freundlich sein.'
    ]
  }
];

const officialResources: OfficialResource[] = [
  {
    title: 'Goethe B2 official model test for adults',
    provider: 'Goethe-Institut',
    type: 'PDF',
    href: 'https://www.goethe.de/pro/relaunch/prf/materialien/B2/b2_modellsatz_erwachsene.pdf',
    note: 'Open this for exact official tasks, including writing and speaking sheets.'
  },
  {
    title: 'Goethe B2 official audio',
    provider: 'Goethe-Institut',
    type: 'Audio',
    href: 'https://goethemp4s.akamaized.net/resources/files/mp477/b2_modellsatz_rahmen_erwachsene-v15.mp4',
    note: 'Use this with the official Goethe model test.'
  },
  {
    title: 'Goethe B2 online training',
    provider: 'Goethe-Institut',
    type: 'Online',
    href: 'https://bfu.goethe.de/b2_mod_2MX6/index.php',
    note: 'Interactive official training with answer checking.'
  },
  {
    title: 'telc Deutsch B2 mock examination',
    provider: 'telc',
    type: 'ZIP',
    href: 'https://www.telc.net/fileadmin/user_upload/mock_exams/Deutsch/telc_deutsch_b2.zip',
    note: 'Official telc mock exam package.'
  },
  {
    title: 'telc B2 preparation tips',
    provider: 'telc',
    type: 'PDF',
    href: 'https://www.telc.net/fileadmin/user_upload/pdfs/Handbuch_und_Tipps_fuer_Pruefungsvorbereitung/Deutsch_B2_tipps_zur_Pruefungsvorbereitung.pdf',
    note: 'Official preparation advice, especially useful for writing and speaking criteria.'
  },
  {
    title: 'ÖSD Zertifikat B2 model set',
    provider: 'ÖSD',
    type: 'ZIP',
    href: 'https://www.osd.at/wp-content/uploads/2020/03/ZB2_Modellsatz_gesamt.zip',
    note: 'Official ÖSD package with reading, listening, writing, speaking, answer key, and audio.'
  }
];

const panelTabs = [
  { id: 'writing', label: 'Writing practice', icon: '✍️' },
  { id: 'speaking', label: 'Speaking practice', icon: '🎙️' },
  { id: 'official', label: 'Official exam files', icon: '📎' }
] as const;

const writingLabels: Record<WritingType, string> = {
  forum: 'Forum post',
  'formal-email': 'Formal email'
};

const speakingLabels: Record<SpeakingType, string> = {
  presentation: 'Presentation',
  discussion: 'Discussion',
  planning: 'Planning together'
};

export const ExamView: React.FC = () => {
  const [activePanel, setActivePanel] = useState<ExamPanel>('writing');
  const [openWritingTask, setOpenWritingTask] = useState('forum-transport');
  const [openSpeakingTask, setOpenSpeakingTask] = useState('presentation-language-learning');

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="mb-10 text-center sm:text-left pb-10" style={{ borderBottom: '1px solid var(--terracotta-100)' }}>
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-black mb-5" style={{ backgroundColor: 'var(--turquoise-100)', color: 'var(--turquoise-800)' }}>
          <span>B2</span>
          <span>German exam training</span>
        </div>
        <h2 className="text-5xl sm:text-6xl font-black mb-4 tracking-tighter" style={{ color: 'var(--terracotta-800)' }}>B2 Writing & Speaking</h2>
        <p className="text-xl sm:text-2xl font-medium max-w-3xl" style={{ color: 'var(--sand-600)' }}>
          Practice prompts for the productive parts of Goethe, telc, and ÖSD exams. Instructions are in English; the exam prompts and useful phrases are in German.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
        <div className="bg-white rounded-[2rem] p-6" style={{ border: '1px solid var(--terracotta-100)' }}>
          <p className="text-xs font-black uppercase tracking-wider mb-2" style={{ color: 'var(--terracotta-600)' }}>Writing target</p>
          <h3 className="text-2xl font-black mb-2" style={{ color: 'var(--sand-900)' }}>Clear argument + correct register</h3>
          <p className="font-medium" style={{ color: 'var(--sand-600)' }}>Train forum posts and formal emails with a word count, required points, and ready-to-use B2 phrases.</p>
        </div>
        <div className="bg-white rounded-[2rem] p-6" style={{ border: '1px solid var(--terracotta-100)' }}>
          <p className="text-xs font-black uppercase tracking-wider mb-2" style={{ color: 'var(--turquoise-600)' }}>Speaking target</p>
          <h3 className="text-2xl font-black mb-2" style={{ color: 'var(--sand-900)' }}>React, argue, negotiate</h3>
          <p className="font-medium" style={{ color: 'var(--sand-600)' }}>Train presentations, partner discussions, and planning tasks with follow-up examiner questions.</p>
        </div>
        <div className="bg-white rounded-[2rem] p-6" style={{ border: '1px solid var(--terracotta-100)' }}>
          <p className="text-xs font-black uppercase tracking-wider mb-2" style={{ color: 'var(--sage-700)' }}>Exact official tasks</p>
          <h3 className="text-2xl font-black mb-2" style={{ color: 'var(--sand-900)' }}>Use the official files</h3>
          <p className="font-medium" style={{ color: 'var(--sand-600)' }}>The exact official PDFs/ZIPs are linked below. They should be opened from the exam providers.</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-3 mb-8">
        {panelTabs.map(panel => (
          <button
            key={panel.id}
            onClick={() => setActivePanel(panel.id)}
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

      {activePanel === 'writing' && (
        <div className="space-y-5">
          {writingTasks.map(task => {
            const isOpen = openWritingTask === task.id;

            return (
              <div key={task.id} className="bg-white rounded-[2rem] overflow-hidden shadow-sm" style={{ border: '1px solid var(--terracotta-100)' }}>
                <button
                  onClick={() => setOpenWritingTask(isOpen ? '' : task.id)}
                  className="w-full p-6 text-left flex items-start justify-between gap-4 hover:bg-slate-50"
                >
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className="px-3 py-1 rounded-full text-xs font-black" style={{ backgroundColor: 'var(--terracotta-100)', color: 'var(--terracotta-800)' }}>
                        {writingLabels[task.type]}
                      </span>
                      <span className="px-3 py-1 rounded-full text-xs font-black" style={{ backgroundColor: 'var(--turquoise-100)', color: 'var(--turquoise-800)' }}>
                        {task.time}
                      </span>
                      <span className="px-3 py-1 rounded-full text-xs font-black" style={{ backgroundColor: 'var(--sand-100)', color: 'var(--sand-700)' }}>
                        {task.length}
                      </span>
                    </div>
                    <p className="text-xs font-black uppercase tracking-wider mb-2" style={{ color: 'var(--terracotta-600)' }}>{task.style}</p>
                    <h3 className="text-2xl font-black" style={{ color: 'var(--sand-900)' }}>{task.title}</h3>
                  </div>
                  <svg className={`w-6 h-6 transition-transform shrink-0 ${isOpen ? 'rotate-180' : ''}`} style={{ color: 'var(--sand-400)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 animate-in slide-in-from-top-2 duration-200">
                    <div className="rounded-2xl p-5 mb-5" style={{ backgroundColor: 'var(--sand-50)', border: '1px solid var(--sand-200)' }}>
                      <p className="text-xs font-black uppercase tracking-wider mb-2" style={{ color: 'var(--sand-600)' }}>Situation</p>
                      <p className="font-medium mb-4" style={{ color: 'var(--sand-700)' }}>{task.situation}</p>
                      <p className="text-xs font-black uppercase tracking-wider mb-2" style={{ color: 'var(--terracotta-600)' }}>Exam prompt</p>
                      <p className="text-xl font-black" style={{ color: 'var(--sand-900)' }}>{task.prompt}</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                      <div className="rounded-2xl p-5" style={{ backgroundColor: 'var(--turquoise-50)', border: '1px solid var(--turquoise-100)' }}>
                        <p className="text-xs font-black uppercase tracking-wider mb-3" style={{ color: 'var(--turquoise-800)' }}>You must cover</p>
                        <ul className="space-y-2">
                          {task.mustCover.map(item => (
                            <li key={item} className="flex items-start gap-2 font-medium" style={{ color: 'var(--turquoise-900)' }}>
                              <span className="mt-2 h-1.5 w-1.5 rounded-full shrink-0" style={{ backgroundColor: 'var(--turquoise-600)' }} />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="rounded-2xl p-5" style={{ backgroundColor: 'var(--terracotta-50)', border: '1px solid var(--terracotta-100)' }}>
                        <p className="text-xs font-black uppercase tracking-wider mb-3" style={{ color: 'var(--terracotta-800)' }}>Useful German phrases</p>
                        <ul className="space-y-2">
                          {task.usefulLanguage.map(item => (
                            <li key={item} className="font-black" style={{ color: 'var(--terracotta-900)' }}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {activePanel === 'speaking' && (
        <div className="space-y-5">
          {speakingTasks.map(task => {
            const isOpen = openSpeakingTask === task.id;

            return (
              <div key={task.id} className="bg-white rounded-[2rem] overflow-hidden shadow-sm" style={{ border: '1px solid var(--terracotta-100)' }}>
                <button
                  onClick={() => setOpenSpeakingTask(isOpen ? '' : task.id)}
                  className="w-full p-6 text-left flex items-start justify-between gap-4 hover:bg-slate-50"
                >
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className="px-3 py-1 rounded-full text-xs font-black" style={{ backgroundColor: 'var(--turquoise-100)', color: 'var(--turquoise-800)' }}>
                        {speakingLabels[task.type]}
                      </span>
                      <span className="px-3 py-1 rounded-full text-xs font-black" style={{ backgroundColor: 'var(--sand-100)', color: 'var(--sand-700)' }}>
                        {task.time}
                      </span>
                    </div>
                    <p className="text-xs font-black uppercase tracking-wider mb-2" style={{ color: 'var(--turquoise-700)' }}>{task.style}</p>
                    <h3 className="text-2xl font-black" style={{ color: 'var(--sand-900)' }}>{task.title}</h3>
                  </div>
                  <svg className={`w-6 h-6 transition-transform shrink-0 ${isOpen ? 'rotate-180' : ''}`} style={{ color: 'var(--sand-400)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 animate-in slide-in-from-top-2 duration-200">
                    <div className="rounded-2xl p-5 mb-5 text-white" style={{ background: 'linear-gradient(135deg, var(--turquoise-600), var(--turquoise-800))' }}>
                      <p className="text-white/70 text-xs font-black uppercase tracking-wider mb-2">Speaking prompt</p>
                      <p className="text-2xl font-black">{task.prompt}</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                      <div className="rounded-2xl p-5" style={{ backgroundColor: 'var(--sand-50)', border: '1px solid var(--sand-200)' }}>
                        <p className="text-xs font-black uppercase tracking-wider mb-3" style={{ color: 'var(--sand-700)' }}>You must do</p>
                        <ul className="space-y-2">
                          {task.mustDo.map(item => (
                            <li key={item} className="flex items-start gap-2 font-medium" style={{ color: 'var(--sand-800)' }}>
                              <span className="mt-2 h-1.5 w-1.5 rounded-full shrink-0" style={{ backgroundColor: 'var(--sand-500)' }} />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="rounded-2xl p-5" style={{ backgroundColor: 'var(--turquoise-50)', border: '1px solid var(--turquoise-100)' }}>
                        <p className="text-xs font-black uppercase tracking-wider mb-3" style={{ color: 'var(--turquoise-800)' }}>Possible examiner questions</p>
                        <ul className="space-y-2">
                          {task.followUps.map(item => (
                            <li key={item} className="font-medium" style={{ color: 'var(--turquoise-900)' }}>{item}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="rounded-2xl p-5" style={{ backgroundColor: 'var(--terracotta-50)', border: '1px solid var(--terracotta-100)' }}>
                        <p className="text-xs font-black uppercase tracking-wider mb-3" style={{ color: 'var(--terracotta-800)' }}>Useful German phrases</p>
                        <ul className="space-y-2">
                          {task.usefulLanguage.map(item => (
                            <li key={item} className="font-black" style={{ color: 'var(--terracotta-900)' }}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {activePanel === 'official' && (
        <div className="bg-white rounded-[2rem] p-8 shadow-sm" style={{ border: '1px solid var(--terracotta-100)' }}>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
            <div>
              <h3 className="text-3xl font-black mb-2" style={{ color: 'var(--terracotta-800)' }}>Exact official exam files</h3>
              <p className="text-lg max-w-2xl" style={{ color: 'var(--sand-600)' }}>
                These links open the real official model tests from the exam providers. Use them for exact official questions; use the practice bank above for repeated training.
              </p>
            </div>
            <span className="px-4 py-2 rounded-full text-sm font-black" style={{ backgroundColor: 'var(--sand-100)', color: 'var(--sand-700)' }}>
              Checked on 16 June 2026
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {officialResources.map(resource => (
              <a
                key={resource.href}
                href={resource.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl p-5 hover:shadow-lg transition-all block"
                style={{ backgroundColor: 'var(--sand-50)', border: '1px solid var(--sand-200)' }}
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <p className="text-xs font-black uppercase tracking-wider mb-1" style={{ color: 'var(--terracotta-600)' }}>{resource.provider}</p>
                    <h4 className="font-black" style={{ color: 'var(--sand-900)' }}>{resource.title}</h4>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-black" style={{ backgroundColor: 'var(--turquoise-100)', color: 'var(--turquoise-800)' }}>
                    {resource.type}
                  </span>
                </div>
                <p className="text-sm" style={{ color: 'var(--sand-600)' }}>{resource.note}</p>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
