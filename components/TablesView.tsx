import React, { useState } from 'react';

type TableCategory = 'declension' | 'conjugation' | 'cheatsheets';
type SimpleTable = { title: string; table: string[][] };
type DeclensionTable = {
  id: string;
  title: string;
  subtitle: string;
  color: string;
  table: string[][];
  extraTables?: SimpleTable[];
  notes?: string[];
};
type ConjugationCard = { verb: string; rows: string[][] };
type ConjugationSection = {
  id: string;
  title: string;
  subtitle: string;
  color: string;
  tables?: ConjugationCard[];
  mode?: 'modal-selector';
};
type ModalVerbId = 'können' | 'müssen' | 'dürfen' | 'sollen' | 'wollen' | 'mögen';
type ColorClasses = { bg: string; text: string; border: string; light: string };
type CheatSheetBlock =
  | { type: 'title'; text: string }
  | { type: 'heading'; text: string }
  | { type: 'bullet'; text: string }
  | { type: 'example'; text: string }
  | { type: 'definition'; label: string; value: string }
  | { type: 'keyValue'; label: string; value: string }
  | { type: 'paragraph'; text: string };

const PRONOUNS = ['ich', 'du', 'er/sie/es', 'wir', 'ihr', 'sie/Sie'];
const HABEN_PRESENT = ['habe', 'hast', 'hat', 'haben', 'habt', 'haben'];
const HABEN_PRETERITE = ['hatte', 'hattest', 'hatte', 'hatten', 'hattet', 'hatten'];
const WERDEN_PRESENT = ['werde', 'wirst', 'wird', 'werden', 'werdet', 'werden'];
const MODAL_VERB_ORDER: ModalVerbId[] = ['können', 'müssen', 'dürfen', 'sollen', 'wollen', 'mögen'];

const makeConjugationRows = (forms: string[]) => [
  ['Pronoun', 'Conjugation'],
  ...PRONOUNS.map((pronoun, index) => [pronoun, forms[index]])
];

const MODAL_VERBS: Record<ModalVerbId, {
  meaning: string;
  complement: string;
  infinitive: string;
  present: string[];
  preterite: string[];
  kii: string[];
  participle?: string;
  objectMode?: boolean;
}> = {
  können: {
    meaning: 'can / be able to',
    complement: 'arbeiten',
    infinitive: 'können',
    present: ['kann', 'kannst', 'kann', 'können', 'könnt', 'können'],
    preterite: ['konnte', 'konntest', 'konnte', 'konnten', 'konntet', 'konnten'],
    kii: ['könnte', 'könntest', 'könnte', 'könnten', 'könntet', 'könnten']
  },
  müssen: {
    meaning: 'must / have to',
    complement: 'arbeiten',
    infinitive: 'müssen',
    present: ['muss', 'musst', 'muss', 'müssen', 'müsst', 'müssen'],
    preterite: ['musste', 'musstest', 'musste', 'mussten', 'musstet', 'mussten'],
    kii: ['müsste', 'müsstest', 'müsste', 'müssten', 'müsstet', 'müssten']
  },
  dürfen: {
    meaning: 'may / be allowed to',
    complement: 'arbeiten',
    infinitive: 'dürfen',
    present: ['darf', 'darfst', 'darf', 'dürfen', 'dürft', 'dürfen'],
    preterite: ['durfte', 'durftest', 'durfte', 'durften', 'durftet', 'durften'],
    kii: ['dürfte', 'dürftest', 'dürfte', 'dürften', 'dürftet', 'dürften']
  },
  sollen: {
    meaning: 'should / be supposed to',
    complement: 'arbeiten',
    infinitive: 'sollen',
    present: ['soll', 'sollst', 'soll', 'sollen', 'sollt', 'sollen'],
    preterite: ['sollte', 'solltest', 'sollte', 'sollten', 'solltet', 'sollten'],
    kii: ['sollte', 'solltest', 'sollte', 'sollten', 'solltet', 'sollten']
  },
  wollen: {
    meaning: 'want to',
    complement: 'arbeiten',
    infinitive: 'wollen',
    present: ['will', 'willst', 'will', 'wollen', 'wollt', 'wollen'],
    preterite: ['wollte', 'wolltest', 'wollte', 'wollten', 'wolltet', 'wollten'],
    kii: ['wollte', 'wolltest', 'wollte', 'wollten', 'wolltet', 'wollten']
  },
  mögen: {
    meaning: 'like',
    complement: 'Kaffee',
    infinitive: 'mögen',
    participle: 'gemocht',
    objectMode: true,
    present: ['mag', 'magst', 'mag', 'mögen', 'mögt', 'mögen'],
    preterite: ['mochte', 'mochtest', 'mochte', 'mochten', 'mochtet', 'mochten'],
    kii: ['möchte', 'möchtest', 'möchte', 'möchten', 'möchtet', 'möchten']
  }
};

const buildModalRows = (modalId: ModalVerbId) => {
  const modal = MODAL_VERBS[modalId];

  return [
    ['Pronoun', 'Present', 'Preterite', 'Perfect', 'Pluperfect', 'Future I', 'Konjunktiv II'],
    ...PRONOUNS.map((pronoun, index) => {
      const complement = modal.complement;
      const perfectTail = modal.objectMode
        ? `${complement} ${modal.participle}`
        : `${complement} ${modal.infinitive}`;

      return [
        pronoun,
        `${pronoun} ${modal.present[index]} ${complement}`,
        `${pronoun} ${modal.preterite[index]} ${complement}`,
        `${pronoun} ${HABEN_PRESENT[index]} ${perfectTail}`,
        `${pronoun} ${HABEN_PRETERITE[index]} ${perfectTail}`,
        `${pronoun} ${WERDEN_PRESENT[index]} ${complement} ${modal.infinitive}`,
        `${pronoun} ${modal.kii[index]} ${complement}`
      ];
    })
  ];
};

const cleanCheatSheetTitle = (line: string) => line.replace(/\s+-\s+CHEAT SHEET$/i, '').trim();

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

const formatCheatSheetFileName = (name: string) =>
  `${name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'cheat-sheet'}.html`;

const isUppercaseHeading = (line: string) => {
  const letters = line.replace(/[^A-Za-zÄÖÜäöüß]/g, '');
  return letters.length > 2 && line === line.toUpperCase();
};

const parseCheatSheetContent = (content: string): CheatSheetBlock[] => {
  const blocks: CheatSheetBlock[] = [];
  const lines = content.replace(/\r\n/g, '\n').split('\n').map(line => line.trim()).filter(Boolean);

  for (const line of lines) {
    if (/^={3,}$/.test(line)) continue;

    if (blocks.length === 0) {
      blocks.push({ type: 'title', text: cleanCheatSheetTitle(line) });
      continue;
    }

    if (line.startsWith('- ') || line.startsWith('• ')) {
      blocks.push({ type: 'bullet', text: line.replace(/^[-•]\s*/, '') });
      continue;
    }

    if (line.startsWith('Ex:')) {
      blocks.push({ type: 'example', text: line.replace(/^Ex:\s*/, '') });
      continue;
    }

    const keyValueMatch = line.match(/^([^:]{2,45}):\s+(.+)$/);
    if (keyValueMatch) {
      blocks.push({ type: 'keyValue', label: keyValueMatch[1].trim(), value: keyValueMatch[2].trim() });
      continue;
    }

    const definitionMatch = line.match(/^([^→^=-][^-]{1,45})\s+-\s+(.+)$/);
    if (definitionMatch && !isUppercaseHeading(line)) {
      blocks.push({ type: 'definition', label: definitionMatch[1].trim(), value: definitionMatch[2].trim() });
      continue;
    }

    if (/^\d+\.\s+/.test(line) || isUppercaseHeading(line) || line.endsWith(':')) {
      blocks.push({ type: 'heading', text: line.replace(/:$/, '') });
      continue;
    }

    blocks.push({ type: 'paragraph', text: line });
  }

  return blocks;
};

const renderHtmlBlock = (block: CheatSheetBlock) => {
  switch (block.type) {
    case 'title':
      return `<h1>${escapeHtml(block.text)}</h1>`;
    case 'heading':
      return `<h2>${escapeHtml(block.text)}</h2>`;
    case 'bullet':
      return `<div class="bullet"><span>•</span><p>${escapeHtml(block.text)}</p></div>`;
    case 'example':
      return `<div class="example"><strong>Example</strong><p>${escapeHtml(block.text)}</p></div>`;
    case 'definition':
      return `<div class="definition"><strong>${escapeHtml(block.label)}</strong><span>${escapeHtml(block.value)}</span></div>`;
    case 'keyValue':
      return `<div class="key-value"><strong>${escapeHtml(block.label)}</strong><span>${escapeHtml(block.value)}</span></div>`;
    case 'paragraph':
    default:
      return `<p>${escapeHtml(block.text)}</p>`;
  }
};

const buildCheatSheetHtml = (name: string, content: string) => {
  const blocks = parseCheatSheetContent(content);
  const title = escapeHtml(name);
  const body = blocks.map(renderHtmlBlock).join('\n');

  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${title}</title>
  <style>
    :root {
      color: #2f241d;
      background: #faf7f1;
      font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    }
    body { margin: 0; padding: 32px; }
    main {
      max-width: 860px;
      margin: 0 auto;
      background: #fff;
      border: 1px solid #ead8c5;
      border-radius: 18px;
      padding: 34px;
      box-shadow: 0 24px 60px rgba(80, 45, 24, 0.10);
    }
    h1 { margin: 0 0 24px; color: #a33d17; font-size: 34px; line-height: 1.05; }
    h2 {
      margin: 26px 0 12px;
      padding: 10px 12px;
      border-left: 5px solid #e85d04;
      border-radius: 10px;
      background: #fff4e8;
      color: #7c2d12;
      font-size: 17px;
      text-transform: uppercase;
      letter-spacing: .02em;
    }
    p { margin: 8px 0; line-height: 1.6; }
    .bullet { display: flex; gap: 10px; align-items: flex-start; margin: 8px 0; }
    .bullet span { color: #e85d04; font-weight: 900; }
    .bullet p { margin: 0; }
    .example {
      margin: 10px 0;
      padding: 12px 14px;
      border-radius: 12px;
      background: #f6f8fb;
      border: 1px solid #e2e8f0;
    }
    .example strong { color: #475569; display: block; margin-bottom: 4px; }
    .definition, .key-value {
      display: grid;
      grid-template-columns: minmax(120px, 220px) 1fr;
      gap: 12px;
      padding: 10px 12px;
      margin: 7px 0;
      border-radius: 12px;
      background: #fffbf5;
      border: 1px solid #f0dfca;
    }
    .definition strong, .key-value strong { color: #8a3a17; }
    @media print {
      body { background: #fff; padding: 0; }
      main { box-shadow: none; border: none; border-radius: 0; }
    }
    @media (max-width: 640px) {
      body { padding: 16px; }
      main { padding: 22px; }
      .definition, .key-value { grid-template-columns: 1fr; }
    }
  </style>
</head>
<body>
  <main>
    ${body}
  </main>
</body>
</html>`;
};

const CheatSheetPreview: React.FC<{ content: string; colors: ColorClasses }> = ({ content, colors }) => {
  const blocks = parseCheatSheetContent(content);

  return (
    <div className="space-y-3 text-sm text-slate-700">
      {blocks.map((block, index) => {
        const key = `${block.type}-${index}`;

        if (block.type === 'title') {
          return (
            <h4 key={key} className={`font-black ${colors.text} text-base leading-tight`}>
              {block.text}
            </h4>
          );
        }

        if (block.type === 'heading') {
          return (
            <div key={key} className={`${colors.light} ${colors.text} rounded-lg px-3 py-2 font-black text-xs uppercase tracking-wider`}>
              {block.text}
            </div>
          );
        }

        if (block.type === 'bullet') {
          return (
            <div key={key} className="flex gap-2">
              <span className={`${colors.text} font-black`}>•</span>
              <p className="m-0 leading-relaxed">{block.text}</p>
            </div>
          );
        }

        if (block.type === 'example') {
          return (
            <div key={key} className="rounded-lg bg-white border border-slate-200 px-3 py-2">
              <p className="text-[11px] uppercase tracking-wider font-black text-slate-400 mb-1">Example</p>
              <p className="m-0 leading-relaxed font-medium text-slate-700">{block.text}</p>
            </div>
          );
        }

        if (block.type === 'definition' || block.type === 'keyValue') {
          return (
            <div key={key} className="grid grid-cols-1 sm:grid-cols-[9rem_1fr] gap-1 sm:gap-3 rounded-lg bg-white border border-slate-200 px-3 py-2">
              <span className="font-black text-slate-800">{block.label}</span>
              <span className="leading-relaxed">{block.value}</span>
            </div>
          );
        }

        return (
          <p key={key} className="m-0 leading-relaxed">
            {block.text}
          </p>
        );
      })}
    </div>
  );
};

export const TablesView: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<TableCategory>('declension');
  const [expandedTable, setExpandedTable] = useState<string | null>(null);
  const [selectedModalVerb, setSelectedModalVerb] = useState<ModalVerbId>('können');

  const toggleTable = (id: string) => {
    setExpandedTable(expandedTable === id ? null : id);
  };

  const downloadCheatSheet = (name: string, content: string) => {
    const blob = new Blob([buildCheatSheetHtml(name, content)], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = formatCheatSheetFileName(name);
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.setTimeout(() => URL.revokeObjectURL(url), 0);
  };

  const declensionTables: DeclensionTable[] = [
    {
      id: 'articles-def',
      title: 'Definite Articles',
      subtitle: 'der, die, das',
      color: 'indigo',
      table: [
        ['Case', 'Masculine', 'Feminine', 'Neuter', 'Plural'],
        ['Nominative', 'der', 'die', 'das', 'die'],
        ['Accusative', 'den', 'die', 'das', 'die'],
        ['Dative', 'dem', 'der', 'dem', 'den'],
        ['Genitive', 'des', 'der', 'des', 'der']
      ]
    },
    {
      id: 'articles-indef',
      title: 'Indefinite Articles',
      subtitle: 'ein, eine, ein',
      color: 'violet',
      table: [
        ['Case', 'Masculine', 'Feminine', 'Neuter'],
        ['Nominative', 'ein', 'eine', 'ein'],
        ['Accusative', 'einen', 'eine', 'ein'],
        ['Dative', 'einem', 'einer', 'einem'],
        ['Genitive', 'eines', 'einer', 'eines']
      ]
    },
    {
      id: 'pronouns-personal',
      title: 'Personal Pronouns',
      subtitle: 'ich, du, er, sie, es...',
      color: 'emerald',
      table: [
        ['Case', 'ich', 'du', 'er', 'sie', 'es', 'wir', 'ihr', 'sie/Sie'],
        ['Nominative', 'ich', 'du', 'er', 'sie', 'es', 'wir', 'ihr', 'sie/Sie'],
        ['Accusative', 'mich', 'dich', 'ihn', 'sie', 'es', 'uns', 'euch', 'sie/Sie'],
        ['Dative', 'mir', 'dir', 'ihm', 'ihr', 'ihm', 'uns', 'euch', 'ihnen/Ihnen'],
        ['Genitive', 'meiner', 'deiner', 'seiner', 'ihrer', 'seiner', 'unser', 'euer', 'ihrer/Ihrer']
      ]
    },
    {
      id: 'possessive',
      title: 'Possessive Pronouns',
      subtitle: 'base forms + full declension',
      color: 'amber',
      table: [
        ['Possessor', 'Stem', 'Meaning'],
        ['ich', 'mein', 'my'],
        ['du', 'dein', 'your (informal singular)'],
        ['er', 'sein', 'his'],
        ['sie', 'ihr', 'her'],
        ['es', 'sein', 'its'],
        ['wir', 'unser', 'our'],
        ['ihr', 'euer', 'your (informal plural)'],
        ['sie', 'ihr', 'their'],
        ['Sie', 'Ihr', 'your (formal)']
      ],
      extraTables: [
        {
          title: 'Full declension pattern with mein',
          table: [
            ['Case', 'Masculine', 'Feminine', 'Neuter', 'Plural'],
            ['Nominative', 'mein Bruder', 'meine Schwester', 'mein Kind', 'meine Eltern'],
            ['Accusative', 'meinen Bruder', 'meine Schwester', 'mein Kind', 'meine Eltern'],
            ['Dative', 'meinem Bruder', 'meiner Schwester', 'meinem Kind', 'meinen Eltern'],
            ['Genitive', 'meines Bruders', 'meiner Schwester', 'meines Kindes', 'meiner Eltern']
          ]
        },
        {
          title: 'Endings used by every possessive stem',
          table: [
            ['Case', 'Masculine', 'Feminine', 'Neuter', 'Plural'],
            ['Nominative', '-', '-e', '-', '-e'],
            ['Accusative', '-en', '-e', '-', '-e'],
            ['Dative', '-em', '-er', '-em', '-en'],
            ['Genitive', '-es', '-er', '-es', '-er']
          ]
        }
      ],
      notes: [
        'Possessives decline like ein/kein: the ending agrees with the possessed noun, not with the owner.',
        'euer loses the middle e when it takes an ending: eure Mutter, eurem Vater, euren Freunden.',
        'Capitalized Ihr is the formal polite possessive; lowercase ihr can mean her or their.'
      ]
    },
    {
      id: 'adj-def',
      title: 'Adjective Declension (after a definite article)',
      subtitle: 'Weak declension',
      color: 'rose',
      table: [
        ['Case', 'Masculine', 'Feminine', 'Neuter', 'Plural'],
        ['Nominative', 'der gute Mann', 'die gute Frau', 'das gute Kind', 'die guten Kinder'],
        ['Accusative', 'den guten Mann', 'die gute Frau', 'das gute Kind', 'die guten Kinder'],
        ['Dative', 'dem guten Mann', 'der guten Frau', 'dem guten Kind', 'den guten Kindern'],
        ['Genitive', 'des guten Mannes', 'der guten Frau', 'des guten Kindes', 'der guten Kinder']
      ]
    },
    {
      id: 'adj-indef',
      title: 'Adjective Declension (after an indefinite article)',
      subtitle: 'Mixed declension',
      color: 'cyan',
      table: [
        ['Case', 'Masculine', 'Feminine', 'Neuter'],
        ['Nominative', 'ein guter Mann', 'eine gute Frau', 'ein gutes Kind'],
        ['Accusative', 'einen guten Mann', 'eine gute Frau', 'ein gutes Kind'],
        ['Dative', 'einem guten Mann', 'einer guten Frau', 'einem guten Kind'],
        ['Genitive', 'eines guten Mannes', 'einer guten Frau', 'eines guten Kindes']
      ]
    },
    {
      id: 'adj-no-article',
      title: 'Adjective Declension (without an article)',
      subtitle: 'Strong declension',
      color: 'orange',
      table: [
        ['Case', 'Masculine', 'Feminine', 'Neuter', 'Plural'],
        ['Nominative', 'guter Wein', 'gute Milch', 'gutes Brot', 'gute Leute'],
        ['Accusative', 'guten Wein', 'gute Milch', 'gutes Brot', 'gute Leute'],
        ['Dative', 'gutem Wein', 'guter Milch', 'gutem Brot', 'guten Leuten'],
        ['Genitive', 'guten Weines', 'guter Milch', 'guten Brotes', 'guter Leute']
      ]
    },
    {
      id: 'prepositions',
      title: 'Prepositions and Their Cases',
      subtitle: 'Accusative, Dative, Genitive',
      color: 'teal',
      table: [
        ['Case', 'Prepositions'],
        ['Accusative', 'durch, für, gegen, ohne, um, bis, entlang'],
        ['Dative', 'aus, bei, mit, nach, seit, von, zu, gegenüber'],
        ['Genitive', 'während, wegen, trotz, statt, außerhalb, innerhalb'],
        ['Two-way prep.', 'an, auf, hinter, in, neben, über, unter, vor, zwischen']
      ]
    },
    {
      id: 'n-deklination',
      title: 'N-Declension',
      subtitle: 'weak masculine nouns + exceptions',
      color: 'purple',
      table: [
        ['Case', 'der Student', 'der Junge', 'der Herr'],
        ['Nominative', 'der Student', 'der Junge', 'der Herr'],
        ['Accusative', 'den Studenten', 'den Jungen', 'den Herrn'],
        ['Dative', 'dem Studenten', 'dem Jungen', 'dem Herrn'],
        ['Genitive', 'des Studenten', 'des Jungen', 'des Herrn']
      ],
      extraTables: [
        {
          title: 'Main recognition groups',
          table: [
            ['Group', 'Typical nouns', 'Rule'],
            ['Living beings ending in -e', 'der Junge, der Kollege, der Löwe, der Hase', 'add -n outside nominative'],
            ['Nationalities ending in -e', 'der Franzose, der Russe, der Pole, der Chinese', 'add -n outside nominative'],
            ['Learned suffixes', 'der Student, der Tourist, der Soldat, der Biologe', 'usually add -en outside nominative'],
            ['Memorized nouns without -e', 'der Mensch, der Herr, der Bär, der Nachbar, der Held', 'learn individually']
          ]
        },
        {
          title: 'Special and mixed exceptions',
          table: [
            ['Type', 'Nominative', 'Accusative / Dative', 'Genitive', 'Note'],
            ['Standard suffix noun', 'der Student', 'den/dem Studenten', 'des Studenten', 'regular N-Declension'],
            ['Special singular', 'der Herr', 'den/dem Herrn', 'des Herrn', 'plural: die Herren'],
            ['-ns mixed group', 'der Name', 'den/dem Namen', 'des Namens', 'also: Gedanke, Buchstabe, Friede, Wille, Glaube'],
            ['Neuter exception', 'das Herz', 'das Herz / dem Herzen', 'des Herzens', 'only common neuter in this pattern']
          ]
        }
      ],
      notes: [
        'Core rule: accusative, dative, and genitive take -(e)n; nominative stays unchanged.',
        'The -ns mixed group takes -n in accusative/dative but -ns in the genitive: der Name, den Namen, des Namens.',
        'das Herz is not masculine, but it behaves partly like this group: dem Herzen, des Herzens.'
      ]
    }
  ];

  const conjugationTables: ConjugationSection[] = [
    {
      id: 'present',
      title: 'Present (Präsens)',
      subtitle: 'machen, haben, sein',
      color: 'blue',
      tables: [
        {
          verb: 'machen (to do/make)',
          rows: [
            ['Pronoun', 'Conjugation'],
            ['ich', 'mache'],
            ['du', 'machst'],
            ['er/sie/es', 'macht'],
            ['wir', 'machen'],
            ['ihr', 'macht'],
            ['sie/Sie', 'machen']
          ]
        },
        {
          verb: 'haben (to have)',
          rows: [
            ['Pronoun', 'Conjugation'],
            ['ich', 'habe'],
            ['du', 'hast'],
            ['er/sie/es', 'hat'],
            ['wir', 'haben'],
            ['ihr', 'habt'],
            ['sie/Sie', 'haben']
          ]
        },
        {
          verb: 'sein (to be)',
          rows: [
            ['Pronoun', 'Conjugation'],
            ['ich', 'bin'],
            ['du', 'bist'],
            ['er/sie/es', 'ist'],
            ['wir', 'sind'],
            ['ihr', 'seid'],
            ['sie/Sie', 'sind']
          ]
        }
      ]
    },
    {
      id: 'preterit',
      title: 'Preterite (Präteritum)',
      subtitle: 'Written narrative tense',
      color: 'indigo',
      tables: [
        {
          verb: 'machen (to do/make)',
          rows: [
            ['Pronoun', 'Conjugation'],
            ['ich', 'machte'],
            ['du', 'machtest'],
            ['er/sie/es', 'machte'],
            ['wir', 'machten'],
            ['ihr', 'machtet'],
            ['sie/Sie', 'machten']
          ]
        },
        {
          verb: 'haben (to have)',
          rows: [
            ['Pronoun', 'Conjugation'],
            ['ich', 'hatte'],
            ['du', 'hattest'],
            ['er/sie/es', 'hatte'],
            ['wir', 'hatten'],
            ['ihr', 'hattet'],
            ['sie/Sie', 'hatten']
          ]
        },
        {
          verb: 'sein (to be)',
          rows: [
            ['Pronoun', 'Conjugation'],
            ['ich', 'war'],
            ['du', 'warst'],
            ['er/sie/es', 'war'],
            ['wir', 'waren'],
            ['ihr', 'wart'],
            ['sie/Sie', 'waren']
          ]
        }
      ]
    },
    {
      id: 'perfekt',
      title: 'Present Perfect (Perfekt)',
      subtitle: 'haben/sein + Partizip II',
      color: 'emerald',
      tables: [
        {
          verb: 'machen → gemacht',
          rows: [
            ['Pronoun', 'Conjugation'],
            ['ich', 'habe gemacht'],
            ['du', 'hast gemacht'],
            ['er/sie/es', 'hat gemacht'],
            ['wir', 'haben gemacht'],
            ['ihr', 'habt gemacht'],
            ['sie/Sie', 'haben gemacht']
          ]
        },
        {
          verb: 'gehen → gegangen',
          rows: [
            ['Pronoun', 'Conjugation'],
            ['ich', 'bin gegangen'],
            ['du', 'bist gegangen'],
            ['er/sie/es', 'ist gegangen'],
            ['wir', 'sind gegangen'],
            ['ihr', 'seid gegangen'],
            ['sie/Sie', 'sind gegangen']
          ]
        }
      ]
    },
    {
      id: 'future',
      title: 'Future I (Futur I)',
      subtitle: 'werden + infinitive',
      color: 'cyan',
      tables: [
        {
          verb: 'werden as future auxiliary',
          rows: [
            ['Pronoun', 'werden', 'Example'],
            ['ich', 'werde', 'ich werde lernen'],
            ['du', 'wirst', 'du wirst lernen'],
            ['er/sie/es', 'wird', 'er wird lernen'],
            ['wir', 'werden', 'wir werden lernen'],
            ['ihr', 'werdet', 'ihr werdet lernen'],
            ['sie/Sie', 'werden', 'sie/Sie werden lernen']
          ]
        },
        {
          verb: 'Common uses',
          rows: [
            ['Use', 'Example'],
            ['Future action', 'Morgen werde ich arbeiten.'],
            ['Intention / promise', 'Ich werde dich anrufen.'],
            ['Assumption', 'Er wird wohl krank sein.'],
            ['Spoken alternative', 'Ich arbeite morgen.']
          ]
        }
      ]
    },
    {
      id: 'modal',
      title: 'Modal Verbs',
      subtitle: 'choose a modal to see all common tenses',
      color: 'violet',
      mode: 'modal-selector'
    },
    {
      id: 'konjunktiv2',
      title: 'Konjunktiv II',
      subtitle: 'Conditional / Unreal',
      color: 'rose',
      tables: [
        {
          verb: 'haben → hätte',
          rows: makeConjugationRows(['hätte', 'hättest', 'hätte', 'hätten', 'hättet', 'hätten'])
        },
        {
          verb: 'sein → wäre',
          rows: makeConjugationRows(['wäre', 'wärst', 'wäre', 'wären', 'wärt', 'wären'])
        },
        {
          verb: 'werden → würde',
          rows: makeConjugationRows(['würde', 'würdest', 'würde', 'würden', 'würdet', 'würden'])
        },
        {
          verb: 'wissen → wüsste',
          rows: makeConjugationRows(['wüsste', 'wüsstest', 'wüsste', 'wüssten', 'wüsstet', 'wüssten'])
        },
        {
          verb: 'kommen → käme',
          rows: makeConjugationRows(['käme', 'kämest', 'käme', 'kämen', 'kämet', 'kämen'])
        },
        {
          verb: 'gehen → ginge',
          rows: makeConjugationRows(['ginge', 'gingest', 'ginge', 'gingen', 'ginget', 'gingen'])
        },
        {
          verb: 'lassen → ließe',
          rows: makeConjugationRows(['ließe', 'ließest', 'ließe', 'ließen', 'ließet', 'ließen'])
        },
        {
          verb: 'geben → gäbe',
          rows: makeConjugationRows(['gäbe', 'gäbest', 'gäbe', 'gäben', 'gäbet', 'gäben'])
        },
        {
          verb: 'nehmen → nähme',
          rows: makeConjugationRows(['nähme', 'nähmest', 'nähme', 'nähmen', 'nähmet', 'nähmen'])
        }
      ]
    },
    {
      id: 'passiv',
      title: 'Passive (Passiv)',
      subtitle: 'werden + Partizip II',
      color: 'amber',
      tables: [
        {
          verb: 'Vorgangspassiv (process)',
          rows: [
            ['Tense', 'Example'],
            ['Present', 'Das Buch wird gelesen'],
            ['Preterite', 'Das Buch wurde gelesen'],
            ['Present Perfect', 'Das Buch ist gelesen worden'],
            ['Future', 'Das Buch wird gelesen werden']
          ]
        },
        {
          verb: 'Zustandspassiv (state)',
          rows: [
            ['Tense', 'Example'],
            ['Present', 'Das Fenster ist geöffnet'],
            ['Preterite', 'Das Fenster war geöffnet'],
            ['Present Perfect', 'Das Fenster ist geöffnet gewesen']
          ]
        }
      ]
    }
  ];

  const cheatSheets = [
    {
      id: 'cases',
      title: 'The 4 German Cases',
      description: 'Complete case summary with examples',
      icon: '📋',
      color: 'indigo',
      content: `THE 4 GERMAN CASES - CHEAT SHEET
=====================================

NOMINATIVE (Wer? Was?) - Subject
- der Mann / die Frau / das Kind / die Kinder
- Who or what performs the action?
- Ex: Der Mann liest. (The man reads.)

ACCUSATIVE (Wen? Was?) - Direct object
- den Mann / die Frau / das Kind / die Kinder
- Who or what receives the action directly?
- Ex: Ich sehe den Mann. (I see the man.)
- Prepositions: durch, für, gegen, ohne, um

DATIVE (Wem?) - Indirect object
- dem Mann / der Frau / dem Kind / den Kindern
- To whom? For whom?
- Ex: Ich gebe dem Mann das Buch. (I give the book to the man.)
- Prepositions: aus, bei, mit, nach, seit, von, zu

GENITIVE (Wessen?) - Possession
- des Mannes / der Frau / des Kindes / der Kinder
- Whose? Who does it belong to?
- Ex: Das Buch des Mannes. (The man's book.)
- Prepositions: während, wegen, trotz, statt

MEMORY TIP: "ADNG" = Accusative-Dative-Nominative-Genitive
`
    },
    {
      id: 'adjectives',
      title: 'Adjective Declension',
      description: 'The 3 types of declension',
      icon: '🎯',
      color: 'emerald',
      content: `ADJECTIVE DECLENSION - CHEAT SHEET
=========================================

GOLDEN RULE: Gender information should appear ONLY ONCE!

1. AFTER A DEFINITE ARTICLE (weak declension)
   → Ending: -e or -en
   Nominative: -e (all genders) / -en (plural)
   Other cases: -en (everywhere)
   Ex: der gute Mann, die gute Frau, das gute Kind

2. AFTER AN INDEFINITE ARTICLE (mixed declension)
   → Nominative masculine: -er / nominative neuter: -es
   → Other cases: like weak declension
   Ex: ein guter Mann, eine gute Frau, ein gutes Kind

3. WITHOUT AN ARTICLE (strong declension)
   → The adjective carries ALL case information
   → Endings match the definite articles
   Ex: guter Wein, gute Milch, gutes Brot

TIP: "Definite = easy (-e/-en), Indefinite = check the nominative"
`
    },
    {
      id: 'verbs',
      title: 'Quick Conjugation',
      description: 'Endings and irregular verbs',
      icon: '⚡',
      color: 'violet',
      content: `QUICK CONJUGATION - CHEAT SHEET
====================================

REGULAR ENDINGS (Present)
ich: -e      wir: -en
du: -st      ihr: -t
er/sie/es: -t    sie/Sie: -en

STRONG VERBS (vowel change)
a → ä: fahren (du fährst), schlafen (du schläfst)
e → i: sprechen (du sprichst), essen (du isst)
e → ie: sehen (du siehst), lesen (du liest)

HABEN / SEIN / WERDEN
      haben    sein     werden
ich   habe     bin      werde
du    hast     bist     wirst
er    hat      ist      wird
wir   haben    sind     werden
ihr   habt     seid     werdet
sie   haben    sind     werden

PRESENT PERFECT: haben/sein + ge___t (regular) or ge___en (irregular)
- machen → gemacht, spielen → gespielt
- gehen → gegangen, sehen → gesehen

PRETERITE: -(e)te for regular verbs, vowel change for irregular verbs

FUTURE I: werden + infinitive
ich werde lernen, du wirst lernen, er wird lernen
`
    },
    {
      id: 'word-order',
      title: 'Word Order',
      description: 'German sentence structure',
      icon: '🔤',
      color: 'amber',
      content: `WORD ORDER - CHEAT SHEET
==============================

MAIN CLAUSE
Position 1: Subject OR complement
Position 2: CONJUGATED VERB (ALWAYS!)
End: Infinitive verb / participle

Ex: Ich gehe heute ins Kino.
    Heute gehe ich ins Kino. (inversion!)
    Ich will heute ins Kino gehen.
           ^                  ^
           V2              V-fin

SUBORDINATE CLAUSE
Conjunction + subject + ... + VERB AT THE END
Ex: ..., weil ich müde bin.
    ..., dass er nach Hause geht.
    ..., obwohl sie krank ist.

TeKaMoLo (adverbial order)
Te = Temporal (wann?)    → heute, morgen
Ka = Kausal (warum?)     → wegen der Arbeit
Mo = Modal (wie?)        → schnell, gern
Lo = Lokal (wo? wohin?)  → nach Berlin

Ex: Ich fahre morgen wegen der Arbeit schnell nach Berlin.
              Te         Ka            Mo       Lo
`
    },
    {
      id: 'prepositions',
      title: 'Prepositions',
      description: 'Accusative, dative, and two-way prepositions',
      icon: '🎪',
      color: 'rose',
      content: `PREPOSITIONS - CHEAT SHEET
============================

ACCUSATIVE (FUDGEOB)
Für - for
Um - around / at
Durch - through
Gegen - against
Entlang - along
Ohne - without
Bis - until / as far as

DATIVE (AUSSERVONMITBEINACHSEITZU)
Aus - from / out of
Außer - except
Von - from / of
Mit - with
Bei - at / with
Nach - after / to
Seit - since / for
Zu - to / toward
Gegenüber - opposite / across from

TWO-WAY PREPOSITIONS (Accusative OR Dative)
an, auf, hinter, in, neben, über, unter, vor, zwischen

→ ACCUSATIVE = movement (Wohin? Where to?)
   Ich gehe IN die Schule.
   
→ DATIVE = position (Wo? Where?)
   Ich bin IN der Schule.

TIP: "Wohin? = Accusative / Wo? = Dative"
`
    },
    {
      id: 'modal-verbs',
      title: 'Modal Verbs',
      description: 'können, müssen, wollen, sollen, dürfen, mögen',
      icon: '🎭',
      color: 'cyan',
      content: `MODAL VERBS - CHEAT SHEET
=============================

können = can / be able to (ability)
Ich kann schwimmen. (I can swim.)

müssen = must / have to (obligation)
Ich muss arbeiten. (I have to work.)

wollen = want to (intention)
Ich will schlafen. (I want to sleep.)

sollen = should / be supposed to (advice, order)
Du sollst nicht lügen. (You should not lie.)

dürfen = may / be allowed to (permission)
Darf ich rauchen? (May I smoke?)

mögen = like
Ich mag Schokolade. (I like chocolate.)

möchten = would like (polite form)
Ich möchte ein Bier. (I would like a beer.)

STRUCTURE: Subject + conjugated modal + ... + infinitive
Ex: Ich kann gut Deutsch sprechen.
         ^                   ^
       Modal              Infinitive (at the end!)

COMMON TENSES WITH ANOTHER INFINITIVE:
Present: Ich muss arbeiten.
Preterite: Ich musste arbeiten.
Perfect: Ich habe arbeiten müssen.
Pluperfect: Ich hatte arbeiten müssen.
Future I: Ich werde arbeiten müssen.
Konjunktiv II: Ich müsste arbeiten.

IN THE PERFECT: haben + infinitive + modal infinitive
Ex: Ich habe arbeiten müssen. (I had to work.)

NOTE: möchten is the polite Konjunktiv II form of mögen:
ich möchte, du möchtest, er möchte, wir möchten, ihr möchtet, sie möchten.
`
    }
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, ColorClasses> = {
      indigo: { bg: 'bg-indigo-600', text: 'text-indigo-600', border: 'border-indigo-200', light: 'bg-indigo-50' },
      violet: { bg: 'bg-violet-600', text: 'text-violet-600', border: 'border-violet-200', light: 'bg-violet-50' },
      emerald: { bg: 'bg-emerald-600', text: 'text-emerald-600', border: 'border-emerald-200', light: 'bg-emerald-50' },
      amber: { bg: 'bg-amber-600', text: 'text-amber-600', border: 'border-amber-200', light: 'bg-amber-50' },
      rose: { bg: 'bg-rose-600', text: 'text-rose-600', border: 'border-rose-200', light: 'bg-rose-50' },
      cyan: { bg: 'bg-cyan-600', text: 'text-cyan-600', border: 'border-cyan-200', light: 'bg-cyan-50' },
      teal: { bg: 'bg-teal-600', text: 'text-teal-600', border: 'border-teal-200', light: 'bg-teal-50' },
      orange: { bg: 'bg-orange-600', text: 'text-orange-600', border: 'border-orange-200', light: 'bg-orange-50' },
      purple: { bg: 'bg-purple-600', text: 'text-purple-600', border: 'border-purple-200', light: 'bg-purple-50' },
      blue: { bg: 'bg-blue-600', text: 'text-blue-600', border: 'border-blue-200', light: 'bg-blue-50' }
    };
    return colors[color] || colors.indigo;
  };

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Header */}
      <div className="mb-12 text-center sm:text-left pb-10" style={{ borderBottom: '1px solid var(--terracotta-100)' }}>
        <h2 className="text-6xl font-black mb-4 tracking-tighter" style={{ color: 'var(--terracotta-800)' }}>Tables</h2>
        <p className="text-2xl font-medium max-w-2xl" style={{ color: 'var(--sand-600)' }}>All the essential tables for mastering German grammar.</p>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap gap-3 mb-10">
        {[
          { id: 'declension', label: 'Declensions', icon: '📊' },
          { id: 'conjugation', label: 'Conjugations', icon: '🔄' },
          { id: 'cheatsheets', label: 'Cheat Sheets', icon: '📥' }
        ].map(cat => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id as TableCategory)}
            className="px-6 py-3 rounded-xl font-bold transition-all flex items-center gap-2"
            style={{
              backgroundColor: activeCategory === cat.id ? 'var(--terracotta-600)' : 'white',
              color: activeCategory === cat.id ? 'white' : 'var(--sand-600)',
              border: activeCategory === cat.id ? 'none' : '1px solid var(--terracotta-200)',
              boxShadow: activeCategory === cat.id ? '0 10px 30px -10px rgba(184, 93, 62, 0.4)' : 'none'
            }}
          >
            <span>{cat.icon}</span>
            {cat.label}
          </button>
        ))}
      </div>

      {/* Declension Tables */}
      {activeCategory === 'declension' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {declensionTables.map(table => {
            const colors = getColorClasses(table.color);
            const isExpanded = expandedTable === table.id;
            
            return (
              <div 
                key={table.id}
                className={`bg-white rounded-[2rem] border ${colors.border} overflow-hidden transition-all ${
                  isExpanded ? 'md:col-span-2' : ''
                }`}
              >
                <button
                  onClick={() => toggleTable(table.id)}
                  className="w-full p-6 flex items-center justify-between text-left hover:bg-slate-50 transition-all"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 ${colors.light} ${colors.text} rounded-xl flex items-center justify-center font-black text-lg`}>
                      📋
                    </div>
                    <div>
                      <h3 className="font-black text-slate-900 text-lg">{table.title}</h3>
                      <p className="text-sm text-slate-400">{table.subtitle}</p>
                    </div>
                  </div>
                  <svg className={`w-6 h-6 text-slate-400 transition-transform ${isExpanded ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {isExpanded && (
                  <div className="px-6 pb-6 animate-in slide-in-from-top-4 duration-300">
                    <div className="overflow-x-auto rounded-xl border border-slate-200">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className={`${colors.light}`}>
                            {table.table[0].map((cell, i) => (
                              <th key={i} className={`px-4 py-3 text-left font-black ${colors.text} text-xs uppercase tracking-wider`}>
                                {cell}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                          {table.table.slice(1).map((row, rIdx) => (
                            <tr key={rIdx} className="hover:bg-slate-50">
                              {row.map((cell, cIdx) => (
                                <td key={cIdx} className={`px-4 py-3 ${cIdx === 0 ? 'font-bold text-slate-700' : 'text-slate-600'}`}>
                                  {cell}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    {table.extraTables?.map(extra => (
                      <div key={extra.title} className="mt-5">
                        <h4 className="font-black text-slate-800 text-sm mb-3">{extra.title}</h4>
                        <div className="overflow-x-auto rounded-xl border border-slate-200">
                          <table className="w-full text-sm">
                            <thead>
                              <tr className={`${colors.light}`}>
                                {extra.table[0].map((cell, i) => (
                                  <th key={i} className={`px-4 py-3 text-left font-black ${colors.text} text-xs uppercase tracking-wider`}>
                                    {cell}
                                  </th>
                                ))}
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                              {extra.table.slice(1).map((row, rIdx) => (
                                <tr key={rIdx} className="hover:bg-slate-50">
                                  {row.map((cell, cIdx) => (
                                    <td key={cIdx} className={`px-4 py-3 ${cIdx === 0 ? 'font-bold text-slate-700' : 'text-slate-600'}`}>
                                      {cell}
                                    </td>
                                  ))}
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    ))}

                    {table.notes && (
                      <div className={`${colors.light} mt-5 rounded-xl p-4`}>
                        <ul className="space-y-2 text-sm text-slate-700">
                          {table.notes.map(note => (
                            <li key={note} className="flex gap-2">
                              <span className={`${colors.text} font-black`}>•</span>
                              <span>{note}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* Conjugation Tables */}
      {activeCategory === 'conjugation' && (
        <div className="space-y-8">
          {conjugationTables.map(section => {
            const colors = getColorClasses(section.color);
            const isExpanded = expandedTable === section.id;
            
            return (
              <div key={section.id} className={`bg-white rounded-[2rem] border ${colors.border} overflow-hidden`}>
                <button
                  onClick={() => toggleTable(section.id)}
                  className="w-full p-6 flex items-center justify-between text-left hover:bg-slate-50 transition-all"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 ${colors.bg} text-white rounded-xl flex items-center justify-center font-black text-lg`}>
                      🔄
                    </div>
                    <div>
                      <h3 className="font-black text-slate-900 text-xl">{section.title}</h3>
                      <p className="text-sm text-slate-400">{section.subtitle}</p>
                    </div>
                  </div>
                  <svg className={`w-6 h-6 text-slate-400 transition-transform ${isExpanded ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {isExpanded && (
                  <div className="px-6 pb-6 animate-in slide-in-from-top-4 duration-300">
                    {section.mode === 'modal-selector' ? (
                      <div className="space-y-5">
                        <div className="flex flex-wrap gap-2">
                          {MODAL_VERB_ORDER.map(modalId => {
                            const isSelected = selectedModalVerb === modalId;

                            return (
                              <button
                                key={modalId}
                                type="button"
                                onClick={() => setSelectedModalVerb(modalId)}
                                className="px-4 py-2 rounded-xl text-sm font-black transition-all"
                                style={{
                                  backgroundColor: isSelected ? 'var(--terracotta-600)' : 'white',
                                  color: isSelected ? 'white' : 'var(--sand-700)',
                                  border: isSelected ? 'none' : '1px solid var(--terracotta-200)'
                                }}
                              >
                                {modalId}
                              </button>
                            );
                          })}
                        </div>

                        <div className={`${colors.light} rounded-xl overflow-hidden`}>
                          <div className={`${colors.bg} text-white px-4 py-3`}>
                            <h4 className="font-black text-sm">
                              {selectedModalVerb} ({MODAL_VERBS[selectedModalVerb].meaning})
                            </h4>
                            <p className="text-xs text-white/80 mt-1">
                              Present, preterite, perfect, pluperfect, Future I, and Konjunktiv II.
                            </p>
                          </div>

                          <div className="overflow-x-auto">
                            <table className="w-full text-sm">
                              <thead>
                                <tr className="bg-white/60">
                                  {buildModalRows(selectedModalVerb)[0].map((cell, i) => (
                                    <th key={i} className={`px-4 py-3 text-left font-black ${colors.text} text-xs uppercase tracking-wider whitespace-nowrap`}>
                                      {cell}
                                    </th>
                                  ))}
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-white/70">
                                {buildModalRows(selectedModalVerb).slice(1).map((row, rIdx) => (
                                  <tr key={rIdx}>
                                    {row.map((cell, cIdx) => (
                                      <td key={cIdx} className={`px-4 py-3 whitespace-nowrap ${cIdx === 0 ? 'font-bold text-slate-600' : 'text-slate-800 font-medium'}`}>
                                        {cell}
                                      </td>
                                    ))}
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>

                        <div className="bg-slate-50 rounded-xl p-4 text-sm text-slate-600 space-y-2">
                          <p>
                            With another infinitive, German normally uses the double infinitive in the perfect:
                            <strong> Ich habe arbeiten müssen.</strong>
                          </p>
                          <p>
                            <strong>möchten</strong> is the polite Konjunktiv II form of <strong>mögen</strong>: ich möchte, du möchtest, er möchte...
                          </p>
                        </div>
                      </div>
                    ) : (
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {section.tables?.map((t, tIdx) => (
                          <div key={tIdx} className={`${colors.light} rounded-xl overflow-hidden`}>
                            <div className={`${colors.bg} text-white px-4 py-2 font-bold text-sm`}>
                              {t.verb}
                            </div>
                            <table className="w-full text-sm">
                              <tbody className="divide-y divide-white/50">
                                {t.rows.slice(1).map((row, rIdx) => (
                                  <tr key={rIdx}>
                                    {row.map((cell, cIdx) => (
                                      <td key={cIdx} className={`px-4 py-2 ${cIdx === 0 ? 'font-bold text-slate-600 w-24' : 'text-slate-800 font-medium'}`}>
                                        {cell}
                                      </td>
                                    ))}
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* Cheat Sheets */}
      {activeCategory === 'cheatsheets' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cheatSheets.map(sheet => {
            const colors = getColorClasses(sheet.color);
            
            return (
              <div key={sheet.id} className={`bg-white rounded-[2rem] border ${colors.border} overflow-hidden hover:shadow-xl transition-all group`}>
                <div className={`${colors.light} p-6`}>
                  <div className={`w-16 h-16 ${colors.bg} text-white rounded-2xl flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform`}>
                    {sheet.icon}
                  </div>
                  <h3 className="font-black text-slate-900 text-xl mb-2">{sheet.title}</h3>
                  <p className="text-sm text-slate-500">{sheet.description}</p>
                </div>
                <div className="p-6 pt-4">
                  <button
                    onClick={() => downloadCheatSheet(sheet.title, sheet.content)}
                    className={`w-full py-3 ${colors.bg} text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-all`}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Download HTML
                  </button>
                  <button
                    onClick={() => toggleTable(sheet.id)}
                    className="w-full mt-2 py-2 text-slate-500 font-medium text-sm hover:text-slate-700 transition-all"
                  >
                    {expandedTable === sheet.id ? 'Hide preview' : 'View preview'}
                  </button>
                  
                  {expandedTable === sheet.id && (
                    <div className="mt-4 p-4 bg-slate-50 rounded-xl animate-in slide-in-from-top-2 duration-200 max-h-[34rem] overflow-y-auto">
                      <CheatSheetPreview content={sheet.content} colors={colors} />
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
