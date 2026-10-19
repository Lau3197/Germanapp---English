import React, { useState } from 'react';

type ExpressionCategory = 'daily' | 'proverbs' | 'idioms' | 'formal';

interface Expression {
  german: string;
  english: string;
  literal?: string;
  context?: string;
  example?: string;
}

export const ExpressionsView: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ExpressionCategory>('daily');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedExpr, setExpandedExpr] = useState<string | null>(null);

  const dailyExpressions: Expression[] = [
    { german: 'Wie geht\'s?', english: 'How are you?', context: 'Informal greeting', example: 'Hey Maria, wie geht\'s?' },
    { german: 'Was ist los?', english: 'What\'s going on?', context: 'Asking what is wrong', example: 'Du siehst traurig aus. Was ist los?' },
    { german: 'Keine Ahnung!', english: 'No idea!', context: 'Expressing that you do not know', example: 'Wo ist der Schlüssel? - Keine Ahnung!' },
    { german: 'Macht nichts!', english: 'No worries!', context: 'Reassuring someone', example: 'Entschuldigung! - Macht nichts!' },
    { german: 'Genau!', english: 'Exactly!', context: 'Expressing agreement', example: 'Das ist doch falsch! - Genau!' },
    { german: 'Na ja...', english: 'Well...', context: 'Hesitation', example: 'Magst du das? - Na ja, es geht.' },
    { german: 'Ach so!', english: 'Oh, I see!', context: 'Understanding something', example: 'Das war ein Witz! - Ach so!' },
    { german: 'Stimmt!', english: 'That\'s true!', context: 'Confirming', example: 'Berlin ist groß. - Stimmt!' },
    { german: 'Auf jeden Fall!', english: 'Absolutely!', context: 'Strong agreement', example: 'Kommst du mit? - Auf jeden Fall!' },
    { german: 'Lass mich in Ruhe!', english: 'Leave me alone!', context: 'Asking to be left alone', example: 'Lass mich in Ruhe, ich arbeite!' },
    { german: 'Das ist mir egal.', english: 'I don\'t care.', context: 'Indifference', example: 'Pizza oder Pasta? - Das ist mir egal.' },
    { german: 'Ich habe keine Lust.', english: 'I don\'t feel like it.', context: 'Politely refusing', example: 'Gehen wir schwimmen? - Ich habe keine Lust.' },
    { german: 'Gute Besserung!', english: 'Get well soon!', context: 'For someone who is ill', example: 'Ich bin krank. - Gute Besserung!' },
    { german: 'Viel Erfolg!', english: 'Good luck!', context: 'Wishing success', example: 'Ich habe morgen eine Prüfung. - Viel Erfolg!' },
    { german: 'Schönes Wochenende!', english: 'Have a nice weekend!', context: 'End-of-week greeting', example: 'Bis Montag! - Schönes Wochenende!' },
    { german: 'Alles klar?', english: 'Is everything clear?', context: 'Checking understanding', example: 'Das musst du so machen. Alles klar?' },
    { german: 'Kein Problem!', english: 'No problem!', context: 'Reassuring', example: 'Kannst du mir helfen? - Kein Problem!' },
    { german: 'Bis gleich!', english: 'See you in a moment!', context: 'Short separation', example: 'Ich hole nur meine Jacke. Bis gleich!' },
    { german: 'Na klar!', english: 'Of course!', context: 'Enthusiastic agreement', example: 'Hilfst du mir? - Na klar!' },
    { german: 'Ich bin gespannt!', english: 'I\'m curious to see!', context: 'Anticipation', example: 'Morgen ist die Überraschung. - Ich bin gespannt!' }
  ];

  const proverbs: Expression[] = [
    { 
      german: 'Übung macht den Meister.', 
      english: 'Practice makes perfect.', 
      literal: 'Practice makes the master.',
      context: 'Encouraging regular practice'
    },
    { 
      german: 'Morgenstund hat Gold im Mund.', 
      english: 'The early bird catches the worm.', 
      literal: 'The morning hour has gold in its mouth.',
      context: 'Valuing getting up early'
    },
    { 
      german: 'Wer zuletzt lacht, lacht am besten.', 
      english: 'He who laughs last laughs best.', 
      literal: 'Whoever laughs last laughs best.',
      context: 'Patience and perseverance'
    },
    { 
      german: 'Aller Anfang ist schwer.', 
      english: 'Every beginning is hard.', 
      literal: 'Every beginning is hard.',
      context: 'Encouraging someone through initial difficulties'
    },
    { 
      german: 'Ohne Fleiß kein Preis.', 
      english: 'No pain, no gain.', 
      literal: 'Without effort, no prize.',
      context: 'Valuing hard work'
    },
    { 
      german: 'Der Apfel fällt nicht weit vom Stamm.', 
      english: 'The apple doesn\'t fall far from the tree.', 
      literal: 'The apple does not fall far from the trunk.',
      context: 'Family resemblance'
    },
    { 
      german: 'Was du heute kannst besorgen, das verschiebe nicht auf morgen.', 
      english: 'Don\'t put off until tomorrow what you can do today.', 
      literal: 'What you can take care of today, do not postpone until tomorrow.',
      context: 'Against procrastination'
    },
    { 
      german: 'Lügen haben kurze Beine.', 
      english: 'Lies don\'t get you far.', 
      literal: 'Lies have short legs.',
      context: 'Against lying'
    },
    { 
      german: 'Stille Wasser sind tief.', 
      english: 'Still waters run deep.', 
      literal: 'Still waters are deep.',
      context: 'Deceptive appearances'
    },
    { 
      german: 'Wer A sagt, muss auch B sagen.', 
      english: 'If you start something, you have to see it through.', 
      literal: 'Whoever says A must also say B.',
      context: 'Consistency in one\'s actions'
    },
    { 
      german: 'Viele Köche verderben den Brei.', 
      english: 'Too many cooks spoil the broth.', 
      literal: 'Many cooks spoil the porridge.',
      context: 'Too many people complicate things'
    },
    { 
      german: 'In der Kürze liegt die Würze.', 
      english: 'Brevity is the soul of wit.', 
      literal: 'In brevity lies the seasoning.',
      context: 'Valuing concision'
    },
    { 
      german: 'Der frühe Vogel fängt den Wurm.', 
      english: 'The early bird catches the worm.', 
      literal: 'The early bird catches the worm.',
      context: 'The advantage of being proactive'
    },
    { 
      german: 'Aus den Augen, aus dem Sinn.', 
      english: 'Out of sight, out of mind.', 
      literal: 'Out of the eyes, out of the mind.',
      context: 'Distance makes people forget'
    },
    { 
      german: 'Ende gut, alles gut.', 
      english: 'All\'s well that ends well.', 
      literal: 'End good, everything good.',
      context: 'What matters is the final result'
    }
  ];

  const idioms: Expression[] = [
    { 
      german: 'Da steppt der Bär!', 
      english: 'The place is buzzing!', 
      literal: 'The bear is dancing there!',
      context: 'Festive atmosphere',
      example: 'Kommst du zur Party? Da steppt der Bär!'
    },
    { 
      german: 'Das ist nicht mein Bier.', 
      english: 'That\'s not my problem.', 
      literal: 'That is not my beer.',
      context: 'Disengaging',
      example: 'Warum hilfst du ihm nicht? - Das ist nicht mein Bier.'
    },
    { 
      german: 'Ich verstehe nur Bahnhof.', 
      english: 'It\'s all Greek to me.', 
      literal: 'I only understand train station.',
      context: 'Total incomprehension',
      example: 'Kannst du mir Physik erklären? - Ich verstehe nur Bahnhof.'
    },
    { 
      german: 'Die Daumen drücken', 
      english: 'To keep one\'s fingers crossed', 
      literal: 'To press the thumbs',
      context: 'Wishing someone good luck',
      example: 'Ich drücke dir die Daumen für die Prüfung!'
    },
    { 
      german: 'Schwein haben', 
      english: 'To luck out', 
      literal: 'To have pig',
      context: 'Unexpected luck',
      example: 'Ich habe den Bus noch erwischt. Schwein gehabt!'
    },
    { 
      german: 'Tomaten auf den Augen haben', 
      english: 'To be blind to what is obvious', 
      literal: 'To have tomatoes on one\'s eyes',
      context: 'Not noticing the obvious',
      example: 'Hast du Tomaten auf den Augen? Das Buch liegt direkt vor dir!'
    },
    { 
      german: 'Auf dem Holzweg sein', 
      english: 'To be on the wrong track', 
      literal: 'To be on the wooden path',
      context: 'Being mistaken',
      example: 'Wenn du das glaubst, bist du auf dem Holzweg.'
    },
    { 
      german: 'Einen Vogel haben', 
      english: 'To be crazy', 
      literal: 'To have a bird',
      context: 'Being a bit crazy',
      example: 'Du hast wohl einen Vogel!'
    },
    { 
      german: 'Die Kirche im Dorf lassen', 
      english: 'To keep things in proportion', 
      literal: 'To leave the church in the village',
      context: 'Staying reasonable',
      example: 'Lass mal die Kirche im Dorf! So schlimm ist es nicht.'
    },
    { 
      german: 'Ins Fettnäpfchen treten', 
      english: 'To put one\'s foot in it', 
      literal: 'To step into the little fat bowl',
      context: 'Making a social blunder',
      example: 'Mit diesem Kommentar bin ich voll ins Fettnäpfchen getreten.'
    },
    { 
      german: 'Alles in Butter', 
      english: 'Everything is fine', 
      literal: 'Everything in butter',
      context: 'Reassuring',
      example: 'Keine Sorge, alles in Butter!'
    },
    { 
      german: 'Jetzt mal Butter bei die Fische!', 
      english: 'Let\'s get down to business!', 
      literal: 'Now butter with the fish!',
      context: 'Asking for something concrete',
      example: 'Jetzt mal Butter bei die Fische! Was willst du wirklich?'
    },
    { 
      german: 'Das geht mir auf den Keks!', 
      english: 'That\'s getting on my nerves!', 
      literal: 'That gets on my cookie!',
      context: 'Expressing annoyance',
      example: 'Diese Musik geht mir auf den Keks!'
    },
    { 
      german: 'Um den heißen Brei herumreden', 
      english: 'To beat around the bush', 
      literal: 'To talk around the hot porridge',
      context: 'Avoiding the subject',
      example: 'Red nicht um den heißen Brei herum! Sag, was du denkst!'
    },
    { 
      german: 'Das ist mir Wurst.', 
      english: 'I don\'t care.', 
      literal: 'That is sausage to me.',
      context: 'Complete indifference',
      example: 'Rot oder blau? - Das ist mir Wurst.'
    },
    { 
      german: 'Sich wie ein Elefant im Porzellanladen benehmen', 
      english: 'To behave like a bull in a china shop', 
      literal: 'To behave like an elephant in a porcelain shop',
      context: 'Being very clumsy',
      example: 'Bei der Verhandlung hat er sich wie ein Elefant im Porzellanladen benommen.'
    }
  ];

  const formalExpressions: Expression[] = [
    { german: 'Sehr geehrte Damen und Herren', english: 'Dear Sir or Madam', context: 'Beginning a formal letter' },
    { german: 'Mit freundlichen Grüßen', english: 'Kind regards', context: 'Ending a formal letter' },
    { german: 'Ich wäre Ihnen sehr dankbar, wenn...', english: 'I would be very grateful if...', context: 'Polite request' },
    { german: 'Könnten Sie mir bitte mitteilen...', english: 'Could you please let me know...', context: 'Request for information' },
    { german: 'Bezüglich Ihrer Anfrage...', english: 'Regarding your inquiry...', context: 'Reply to an inquiry' },
    { german: 'Ich erlaube mir, Sie darauf hinzuweisen...', english: 'I would like to draw your attention to...', context: 'Pointing something out' },
    { german: 'Es würde mich freuen, wenn...', english: 'I would be pleased if...', context: 'Expressing a wish' },
    { german: 'Vielen Dank im Voraus', english: 'Thank you in advance', context: 'Thanking in advance' },
    { german: 'Ich bitte um Verständnis.', english: 'I ask for your understanding.', context: 'Asking for understanding' },
    { german: 'Bei Rückfragen stehe ich Ihnen gerne zur Verfügung.', english: 'Please feel free to contact me if you have any questions.', context: 'Offering help' },
    { german: 'Hiermit möchte ich mich bewerben...', english: 'I would like to apply...', context: 'Cover letter' },
    { german: 'Ich freue mich auf Ihre Rückmeldung.', english: 'I look forward to your reply.', context: 'Waiting for a reply' },
    { german: 'Entschuldigen Sie die Unannehmlichkeiten.', english: 'Please accept our apologies for the inconvenience.', context: 'Formal apology' },
    { german: 'In Anbetracht der Umstände...', english: 'Given the circumstances...', context: 'Justification' },
    { german: 'Ich möchte Sie höflich darum bitten...', english: 'I would kindly like to ask you to...', context: 'Very polite request' }
  ];

  const getCategoryData = () => {
    switch (activeCategory) {
      case 'daily': return dailyExpressions;
      case 'proverbs': return proverbs;
      case 'idioms': return idioms;
      case 'formal': return formalExpressions;
      default: return dailyExpressions;
    }
  };

  const filteredExpressions = getCategoryData().filter(expr => 
    expr.german.toLowerCase().includes(searchQuery.toLowerCase()) ||
    expr.english.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const categoryInfo = {
    daily: { title: 'Everyday Expressions', icon: '💬', color: 'indigo', description: 'Useful phrases for everyday use' },
    proverbs: { title: 'German Proverbs', icon: '📜', color: 'amber', description: 'German folk wisdom' },
    idioms: { title: 'Idiomatic Expressions', icon: '🎭', color: 'emerald', description: 'Colorful figurative expressions' },
    formal: { title: 'Formal Expressions', icon: '👔', color: 'violet', description: 'For professional contexts' }
  };

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Header */}
      <div className="mb-12 text-center sm:text-left pb-10" style={{ borderBottom: '1px solid var(--terracotta-100)' }}>
        <h2 className="text-6xl font-black mb-4 tracking-tighter" style={{ color: 'var(--terracotta-800)' }}>Redewendungen</h2>
        <p className="text-2xl font-medium max-w-2xl" style={{ color: 'var(--sand-600)' }}>Idioms and proverbs for sounding more natural in German.</p>
      </div>

      {/* Search */}
      <div className="relative mb-8 max-w-md">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search for an expression..."
          className="w-full pl-12 pr-4 py-4 bg-white rounded-2xl outline-none transition-all"
          style={{ border: '1px solid var(--terracotta-200)' }}
        />
        <svg className="absolute left-4 top-4 w-5 h-5" style={{ color: 'var(--sand-500)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap gap-3 mb-10">
        {Object.entries(categoryInfo).map(([key, info]) => (
          <button
            key={key}
            onClick={() => setActiveCategory(key as ExpressionCategory)}
            className="px-6 py-3 rounded-xl font-bold transition-all flex items-center gap-2"
            style={{
              backgroundColor: activeCategory === key ? 'var(--terracotta-600)' : 'white',
              color: activeCategory === key ? 'white' : 'var(--sand-600)',
              border: activeCategory === key ? 'none' : '1px solid var(--terracotta-200)',
              boxShadow: activeCategory === key ? '0 10px 30px -10px rgba(184, 93, 62, 0.4)' : 'none'
            }}
          >
            <span>{info.icon}</span>
            {info.title}
          </button>
        ))}
      </div>

      {/* Category Header */}
      <div className="rounded-[2rem] p-8 mb-8 text-white" style={{ background: 'linear-gradient(135deg, var(--terracotta-600), var(--terracotta-700))' }}>
        <div className="flex items-center gap-4">
          <span className="text-5xl">{categoryInfo[activeCategory].icon}</span>
          <div>
            <h3 className="text-3xl font-black">{categoryInfo[activeCategory].title}</h3>
            <p className="text-white/80">{categoryInfo[activeCategory].description}</p>
          </div>
        </div>
        <div className="mt-4 text-white/60 text-sm">
          {filteredExpressions.length} expression{filteredExpressions.length > 1 ? 's' : ''}
        </div>
      </div>

      {/* Expressions Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredExpressions.map((expr, idx) => {
          const isExpanded = expandedExpr === `${activeCategory}-${idx}`;
          
          return (
            <div
              key={idx}
              className={`bg-white rounded-2xl overflow-hidden hover:shadow-lg transition-all ${
                isExpanded ? 'md:col-span-2' : ''
              }`}
              style={{ border: '1px solid var(--terracotta-100)' }}
            >
              <button
                onClick={() => setExpandedExpr(isExpanded ? null : `${activeCategory}-${idx}`)}
                className="w-full p-6 text-left"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <p className="text-xl font-black mb-2" style={{ color: 'var(--terracotta-800)' }}>{expr.german}</p>
                    <p className="font-bold" style={{ color: 'var(--terracotta-600)' }}>{expr.english}</p>
                    {expr.context && (
                      <span className="inline-block mt-2 px-3 py-1 text-xs font-bold rounded-full" style={{ backgroundColor: 'var(--sand-100)', color: 'var(--sand-600)' }}>
                        {expr.context}
                      </span>
                    )}
                  </div>
                  <svg className={`w-5 h-5 transition-transform shrink-0 ${isExpanded ? 'rotate-180' : ''}`} style={{ color: 'var(--sand-400)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>

              {isExpanded && (
                <div className="px-6 pb-6 pt-4 animate-in slide-in-from-top-2 duration-200" style={{ borderTop: '1px solid var(--terracotta-100)' }}>
                  {expr.literal && (
                    <div className="mb-3">
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Literal meaning</span>
                      <p className="text-slate-600 mt-1 italic">"{expr.literal}"</p>
                    </div>
                  )}
                  {expr.example && (
                    <div className="bg-indigo-50 rounded-xl p-4 mt-3">
                      <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">Example</span>
                      <p className="text-slate-800 font-medium mt-1">{expr.example}</p>
                    </div>
                  )}
                  <button className="mt-4 text-sm text-indigo-600 font-bold hover:text-indigo-800 transition-colors flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                    </svg>
                    Add to favorites
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {filteredExpressions.length === 0 && (
        <div className="text-center py-16 bg-white rounded-[2rem] border border-slate-100">
          <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-10 h-10 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M12 20a8 8 0 100-16 8 8 0 000 16z" />
            </svg>
          </div>
          <p className="text-slate-500 font-bold text-lg">No expression found</p>
          <p className="text-slate-400 text-sm mt-1">Try another search term</p>
        </div>
      )}

      {/* Tips Section */}
      <div className="mt-12 bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-100 rounded-[2rem] p-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-3xl">💡</span>
          <h3 className="text-xl font-black text-amber-800">Usage Tips</h3>
        </div>
        <ul className="space-y-2 text-amber-700">
          <li className="flex items-start gap-2">
            <span className="text-amber-500">•</span>
            <span>Use idiomatic expressions in moderation: they make an impression when they are well placed.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-500">•</span>
            <span>Proverbs are useful for closing a conversation or illustrating a point.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-500">•</span>
            <span>In formal contexts, always prefer the formal address (Sie) and respectful formulas.</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
