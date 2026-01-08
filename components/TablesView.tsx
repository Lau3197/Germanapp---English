import React, { useState } from 'react';

type TableCategory = 'declension' | 'conjugation' | 'cheatsheets';

export const TablesView: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<TableCategory>('declension');
  const [expandedTable, setExpandedTable] = useState<string | null>(null);

  const toggleTable = (id: string) => {
    setExpandedTable(expandedTable === id ? null : id);
  };

  const downloadCheatSheet = (name: string, content: string) => {
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${name}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const declensionTables = [
    {
      id: 'articles-def',
      title: 'Articles définis',
      subtitle: 'der, die, das',
      color: 'indigo',
      table: [
        ['Cas', 'Masculin', 'Féminin', 'Neutre', 'Pluriel'],
        ['Nominatif', 'der', 'die', 'das', 'die'],
        ['Accusatif', 'den', 'die', 'das', 'die'],
        ['Datif', 'dem', 'der', 'dem', 'den'],
        ['Génitif', 'des', 'der', 'des', 'der']
      ]
    },
    {
      id: 'articles-indef',
      title: 'Articles indéfinis',
      subtitle: 'ein, eine, ein',
      color: 'violet',
      table: [
        ['Cas', 'Masculin', 'Féminin', 'Neutre'],
        ['Nominatif', 'ein', 'eine', 'ein'],
        ['Accusatif', 'einen', 'eine', 'ein'],
        ['Datif', 'einem', 'einer', 'einem'],
        ['Génitif', 'eines', 'einer', 'eines']
      ]
    },
    {
      id: 'pronouns-personal',
      title: 'Pronoms personnels',
      subtitle: 'ich, du, er, sie, es...',
      color: 'emerald',
      table: [
        ['Cas', 'ich', 'du', 'er', 'sie', 'es', 'wir', 'ihr', 'sie/Sie'],
        ['Nominatif', 'ich', 'du', 'er', 'sie', 'es', 'wir', 'ihr', 'sie/Sie'],
        ['Accusatif', 'mich', 'dich', 'ihn', 'sie', 'es', 'uns', 'euch', 'sie/Sie'],
        ['Datif', 'mir', 'dir', 'ihm', 'ihr', 'ihm', 'uns', 'euch', 'ihnen/Ihnen'],
        ['Génitif', 'meiner', 'deiner', 'seiner', 'ihrer', 'seiner', 'unser', 'euer', 'ihrer/Ihrer']
      ]
    },
    {
      id: 'possessive',
      title: 'Pronoms possessifs',
      subtitle: 'mein, dein, sein...',
      color: 'amber',
      table: [
        ['Personne', 'Pronom', 'Exemple'],
        ['ich', 'mein', 'mein Buch'],
        ['du', 'dein', 'dein Haus'],
        ['er/es', 'sein', 'sein Auto'],
        ['sie', 'ihr', 'ihr Kind'],
        ['wir', 'unser', 'unser Garten'],
        ['ihr', 'euer', 'euer Freund'],
        ['sie/Sie', 'ihr/Ihr', 'ihr/Ihr Zimmer']
      ]
    },
    {
      id: 'adj-def',
      title: 'Déclinaison adjectif (après article défini)',
      subtitle: 'Déclinaison faible',
      color: 'rose',
      table: [
        ['Cas', 'Masculin', 'Féminin', 'Neutre', 'Pluriel'],
        ['Nominatif', 'der gute Mann', 'die gute Frau', 'das gute Kind', 'die guten Kinder'],
        ['Accusatif', 'den guten Mann', 'die gute Frau', 'das gute Kind', 'die guten Kinder'],
        ['Datif', 'dem guten Mann', 'der guten Frau', 'dem guten Kind', 'den guten Kindern'],
        ['Génitif', 'des guten Mannes', 'der guten Frau', 'des guten Kindes', 'der guten Kinder']
      ]
    },
    {
      id: 'adj-indef',
      title: 'Déclinaison adjectif (après article indéfini)',
      subtitle: 'Déclinaison mixte',
      color: 'cyan',
      table: [
        ['Cas', 'Masculin', 'Féminin', 'Neutre'],
        ['Nominatif', 'ein guter Mann', 'eine gute Frau', 'ein gutes Kind'],
        ['Accusatif', 'einen guten Mann', 'eine gute Frau', 'ein gutes Kind'],
        ['Datif', 'einem guten Mann', 'einer guten Frau', 'einem guten Kind'],
        ['Génitif', 'eines guten Mannes', 'einer guten Frau', 'eines guten Kindes']
      ]
    },
    {
      id: 'adj-no-article',
      title: 'Déclinaison adjectif (sans article)',
      subtitle: 'Déclinaison forte',
      color: 'orange',
      table: [
        ['Cas', 'Masculin', 'Féminin', 'Neutre', 'Pluriel'],
        ['Nominatif', 'guter Wein', 'gute Milch', 'gutes Brot', 'gute Leute'],
        ['Accusatif', 'guten Wein', 'gute Milch', 'gutes Brot', 'gute Leute'],
        ['Datif', 'gutem Wein', 'guter Milch', 'gutem Brot', 'guten Leuten'],
        ['Génitif', 'guten Weines', 'guter Milch', 'guten Brotes', 'guter Leute']
      ]
    },
    {
      id: 'prepositions',
      title: 'Prépositions et leurs cas',
      subtitle: 'Accusatif, Datif, Génitif',
      color: 'teal',
      table: [
        ['Cas', 'Prépositions'],
        ['Accusatif', 'durch, für, gegen, ohne, um, bis, entlang'],
        ['Datif', 'aus, bei, mit, nach, seit, von, zu, gegenüber'],
        ['Génitif', 'während, wegen, trotz, statt, außerhalb, innerhalb'],
        ['Wechselpräp.', 'an, auf, hinter, in, neben, über, unter, vor, zwischen']
      ]
    },
    {
      id: 'n-deklination',
      title: 'N-Deklination',
      subtitle: 'Noms masculins faibles',
      color: 'purple',
      table: [
        ['Cas', 'der Student', 'der Junge', 'der Herr'],
        ['Nominatif', 'der Student', 'der Junge', 'der Herr'],
        ['Accusatif', 'den Studenten', 'den Jungen', 'den Herrn'],
        ['Datif', 'dem Studenten', 'dem Jungen', 'dem Herrn'],
        ['Génitif', 'des Studenten', 'des Jungen', 'des Herrn']
      ]
    }
  ];

  const conjugationTables = [
    {
      id: 'present',
      title: 'Présent (Präsens)',
      subtitle: 'machen, haben, sein',
      color: 'blue',
      tables: [
        {
          verb: 'machen (faire)',
          rows: [
            ['Pronom', 'Conjugaison'],
            ['ich', 'mache'],
            ['du', 'machst'],
            ['er/sie/es', 'macht'],
            ['wir', 'machen'],
            ['ihr', 'macht'],
            ['sie/Sie', 'machen']
          ]
        },
        {
          verb: 'haben (avoir)',
          rows: [
            ['Pronom', 'Conjugaison'],
            ['ich', 'habe'],
            ['du', 'hast'],
            ['er/sie/es', 'hat'],
            ['wir', 'haben'],
            ['ihr', 'habt'],
            ['sie/Sie', 'haben']
          ]
        },
        {
          verb: 'sein (être)',
          rows: [
            ['Pronom', 'Conjugaison'],
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
      title: 'Prétérit (Präteritum)',
      subtitle: 'Temps du récit écrit',
      color: 'indigo',
      tables: [
        {
          verb: 'machen (faire)',
          rows: [
            ['Pronom', 'Conjugaison'],
            ['ich', 'machte'],
            ['du', 'machtest'],
            ['er/sie/es', 'machte'],
            ['wir', 'machten'],
            ['ihr', 'machtet'],
            ['sie/Sie', 'machten']
          ]
        },
        {
          verb: 'haben (avoir)',
          rows: [
            ['Pronom', 'Conjugaison'],
            ['ich', 'hatte'],
            ['du', 'hattest'],
            ['er/sie/es', 'hatte'],
            ['wir', 'hatten'],
            ['ihr', 'hattet'],
            ['sie/Sie', 'hatten']
          ]
        },
        {
          verb: 'sein (être)',
          rows: [
            ['Pronom', 'Conjugaison'],
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
      title: 'Parfait (Perfekt)',
      subtitle: 'haben/sein + Partizip II',
      color: 'emerald',
      tables: [
        {
          verb: 'machen → gemacht',
          rows: [
            ['Pronom', 'Conjugaison'],
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
            ['Pronom', 'Conjugaison'],
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
      id: 'modal',
      title: 'Verbes modaux',
      subtitle: 'können, müssen, wollen...',
      color: 'violet',
      tables: [
        {
          verb: 'können (pouvoir)',
          rows: [
            ['Pronom', 'Présent', 'Prétérit'],
            ['ich', 'kann', 'konnte'],
            ['du', 'kannst', 'konntest'],
            ['er/sie/es', 'kann', 'konnte'],
            ['wir', 'können', 'konnten'],
            ['ihr', 'könnt', 'konntet'],
            ['sie/Sie', 'können', 'konnten']
          ]
        },
        {
          verb: 'müssen (devoir)',
          rows: [
            ['Pronom', 'Présent', 'Prétérit'],
            ['ich', 'muss', 'musste'],
            ['du', 'musst', 'musstest'],
            ['er/sie/es', 'muss', 'musste'],
            ['wir', 'müssen', 'mussten'],
            ['ihr', 'müsst', 'musstet'],
            ['sie/Sie', 'müssen', 'mussten']
          ]
        },
        {
          verb: 'wollen (vouloir)',
          rows: [
            ['Pronom', 'Présent', 'Prétérit'],
            ['ich', 'will', 'wollte'],
            ['du', 'willst', 'wolltest'],
            ['er/sie/es', 'will', 'wollte'],
            ['wir', 'wollen', 'wollten'],
            ['ihr', 'wollt', 'wolltet'],
            ['sie/Sie', 'wollen', 'wollten']
          ]
        }
      ]
    },
    {
      id: 'konjunktiv2',
      title: 'Konjunktiv II',
      subtitle: 'Conditionnel / Irréel',
      color: 'rose',
      tables: [
        {
          verb: 'haben → hätte',
          rows: [
            ['Pronom', 'Conjugaison'],
            ['ich', 'hätte'],
            ['du', 'hättest'],
            ['er/sie/es', 'hätte'],
            ['wir', 'hätten'],
            ['ihr', 'hättet'],
            ['sie/Sie', 'hätten']
          ]
        },
        {
          verb: 'sein → wäre',
          rows: [
            ['Pronom', 'Conjugaison'],
            ['ich', 'wäre'],
            ['du', 'wärst'],
            ['er/sie/es', 'wäre'],
            ['wir', 'wären'],
            ['ihr', 'wärt'],
            ['sie/Sie', 'wären']
          ]
        },
        {
          verb: 'werden → würde',
          rows: [
            ['Pronom', 'Conjugaison'],
            ['ich', 'würde'],
            ['du', 'würdest'],
            ['er/sie/es', 'würde'],
            ['wir', 'würden'],
            ['ihr', 'würdet'],
            ['sie/Sie', 'würden']
          ]
        }
      ]
    },
    {
      id: 'passiv',
      title: 'Passif (Passiv)',
      subtitle: 'werden + Partizip II',
      color: 'amber',
      tables: [
        {
          verb: 'Vorgangspassiv (processus)',
          rows: [
            ['Temps', 'Exemple'],
            ['Présent', 'Das Buch wird gelesen'],
            ['Prétérit', 'Das Buch wurde gelesen'],
            ['Parfait', 'Das Buch ist gelesen worden'],
            ['Futur', 'Das Buch wird gelesen werden']
          ]
        },
        {
          verb: 'Zustandspassiv (état)',
          rows: [
            ['Temps', 'Exemple'],
            ['Présent', 'Das Fenster ist geöffnet'],
            ['Prétérit', 'Das Fenster war geöffnet'],
            ['Parfait', 'Das Fenster ist geöffnet gewesen']
          ]
        }
      ]
    }
  ];

  const cheatSheets = [
    {
      id: 'cases',
      title: 'Les 4 Cas Allemands',
      description: 'Résumé complet des cas avec exemples',
      icon: '📋',
      color: 'indigo',
      content: `LES 4 CAS ALLEMANDS - CHEAT SHEET
=====================================

NOMINATIF (Wer? Was?) - Sujet
- der Mann / die Frau / das Kind / die Kinder
- Qui fait l'action ?
- Ex: Der Mann liest. (L'homme lit.)

ACCUSATIF (Wen? Was?) - COD
- den Mann / die Frau / das Kind / die Kinder
- Qui/quoi reçoit l'action directement ?
- Ex: Ich sehe den Mann. (Je vois l'homme.)
- Prépositions: durch, für, gegen, ohne, um

DATIF (Wem?) - COI
- dem Mann / der Frau / dem Kind / den Kindern
- À qui ? Pour qui ?
- Ex: Ich gebe dem Mann das Buch. (Je donne le livre à l'homme.)
- Prépositions: aus, bei, mit, nach, seit, von, zu

GÉNITIF (Wessen?) - Possession
- des Mannes / der Frau / des Kindes / der Kinder
- De qui ? À qui appartient ?
- Ex: Das Buch des Mannes. (Le livre de l'homme.)
- Prépositions: während, wegen, trotz, statt

ASTUCE MÉMO: "ADNG" = Accusatif-Datif-Nominatif-Génitif
`
    },
    {
      id: 'adjectives',
      title: 'Déclinaison des Adjectifs',
      description: 'Les 3 types de déclinaison',
      icon: '🎯',
      color: 'emerald',
      content: `DÉCLINAISON DES ADJECTIFS - CHEAT SHEET
=========================================

RÈGLE D'OR: L'information du genre doit apparaître UNE SEULE FOIS !

1. APRÈS ARTICLE DÉFINI (déclinaison faible)
   → Terminaison: -e ou -en
   Nominatif: -e (tous genres) / -en (pluriel)
   Autres cas: -en (partout)
   Ex: der gute Mann, die gute Frau, das gute Kind

2. APRÈS ARTICLE INDÉFINI (déclinaison mixte)
   → Nominatif masc: -er / Nominatif neutre: -es
   → Autres: comme la déclinaison faible
   Ex: ein guter Mann, eine gute Frau, ein gutes Kind

3. SANS ARTICLE (déclinaison forte)
   → L'adjectif porte TOUTE l'information du cas
   → Terminaisons identiques aux articles définis
   Ex: guter Wein, gute Milch, gutes Brot

ASTUCE: "Défini = facile (-e/-en), Indéfini = regarder le nominatif"
`
    },
    {
      id: 'verbs',
      title: 'Conjugaison Express',
      description: 'Terminaisons et verbes irréguliers',
      icon: '⚡',
      color: 'violet',
      content: `CONJUGAISON EXPRESS - CHEAT SHEET
====================================

TERMINAISONS RÉGULIÈRES (Présent)
ich: -e      wir: -en
du: -st      ihr: -t
er/sie/es: -t    sie/Sie: -en

VERBES FORTS (changement de voyelle)
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

PARFAIT: haben/sein + ge___t (régulier) ou ge___en (irrégulier)
- machen → gemacht, spielen → gespielt
- gehen → gegangen, sehen → gesehen

PRÉTÉRIT: -(e)te pour réguliers, changement de voyelle pour irréguliers
`
    },
    {
      id: 'word-order',
      title: 'Ordre des Mots',
      description: 'Structure de la phrase allemande',
      icon: '🔤',
      color: 'amber',
      content: `ORDRE DES MOTS - CHEAT SHEET
==============================

PHRASE PRINCIPALE
Position 1: Sujet OU complément
Position 2: VERBE CONJUGUÉ (TOUJOURS!)
Fin: Verbe à l'infinitif / Participe

Ex: Ich gehe heute ins Kino.
    Heute gehe ich ins Kino. (inversion!)
    Ich will heute ins Kino gehen.
           ^                  ^
           V2              V-fin

PHRASE SUBORDONNÉE
Conjonction + Sujet + ... + VERBE À LA FIN
Ex: ..., weil ich müde bin.
    ..., dass er nach Hause geht.
    ..., obwohl sie krank ist.

TeKaMoLo (ordre des compléments)
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
      title: 'Prépositions',
      description: 'Accusatif, Datif et Wechselpräpositionen',
      icon: '🎪',
      color: 'rose',
      content: `PRÉPOSITIONS - CHEAT SHEET
============================

ACCUSATIF (FUDGEOB)
Für - pour
Um - autour de
Durch - à travers
Gegen - contre
Entlang - le long de
Ohne - sans
Bis - jusqu'à

DATIF (AUSSERVONMITBEINACHSEITZU)
Aus - de (provenance)
Außer - sauf
Von - de (appartenance)
Mit - avec
Bei - chez
Nach - après, vers
Seit - depuis
Zu - vers, chez
Gegenüber - en face de

WECHSELPRÄPOSITIONEN (Accusatif OU Datif)
an, auf, hinter, in, neben, über, unter, vor, zwischen

→ ACCUSATIF = mouvement (Wohin? Où va-t-on?)
   Ich gehe IN die Schule.
   
→ DATIF = position (Wo? Où est-on?)
   Ich bin IN der Schule.

ASTUCE: "Wohin? = Accusatif / Wo? = Datif"
`
    },
    {
      id: 'modal-verbs',
      title: 'Verbes Modaux',
      description: 'können, müssen, wollen, sollen, dürfen, mögen',
      icon: '🎭',
      color: 'cyan',
      content: `VERBES MODAUX - CHEAT SHEET
=============================

können = pouvoir (capacité)
Ich kann schwimmen. (Je sais nager.)

müssen = devoir (obligation)
Ich muss arbeiten. (Je dois travailler.)

wollen = vouloir (volonté)
Ich will schlafen. (Je veux dormir.)

sollen = devoir (conseil, ordre)
Du sollst nicht lügen. (Tu ne dois pas mentir.)

dürfen = avoir le droit (permission)
Darf ich rauchen? (Puis-je fumer?)

mögen = aimer bien
Ich mag Schokolade. (J'aime le chocolat.)

möchten = voudrais (forme polie)
Ich möchte ein Bier. (Je voudrais une bière.)

STRUCTURE: Sujet + Modal conjugué + ... + Infinitif
Ex: Ich kann gut Deutsch sprechen.
         ^                   ^
       Modal              Infinitif (fin!)

AU PARFAIT: haben + Infinitif + Infinitif modal
Ex: Ich habe arbeiten müssen. (J'ai dû travailler.)
`
    }
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; text: string; border: string; light: string }> = {
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
        <h2 className="text-6xl font-black mb-4 tracking-tighter" style={{ color: 'var(--terracotta-800)' }}>Tabellen</h2>
        <p className="text-2xl font-medium max-w-2xl" style={{ color: 'var(--sand-600)' }}>Tous les tableaux essentiels pour maîtriser la grammaire allemande.</p>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap gap-3 mb-10">
        {[
          { id: 'declension', label: 'Déclinaisons', icon: '📊' },
          { id: 'conjugation', label: 'Conjugaisons', icon: '🔄' },
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
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {section.tables.map((t, tIdx) => (
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
                    Télécharger
                  </button>
                  <button
                    onClick={() => toggleTable(sheet.id)}
                    className="w-full mt-2 py-2 text-slate-500 font-medium text-sm hover:text-slate-700 transition-all"
                  >
                    {expandedTable === sheet.id ? 'Masquer l\'aperçu' : 'Voir l\'aperçu'}
                  </button>
                  
                  {expandedTable === sheet.id && (
                    <div className="mt-4 p-4 bg-slate-50 rounded-xl animate-in slide-in-from-top-2 duration-200">
                      <pre className="text-xs text-slate-600 whitespace-pre-wrap font-mono leading-relaxed">
                        {sheet.content}
                      </pre>
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

