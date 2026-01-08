import React, { useState } from 'react';

type ExpressionCategory = 'daily' | 'proverbs' | 'idioms' | 'formal';

interface Expression {
  german: string;
  french: string;
  literal?: string;
  context?: string;
  example?: string;
}

export const ExpressionsView: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ExpressionCategory>('daily');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedExpr, setExpandedExpr] = useState<string | null>(null);

  const dailyExpressions: Expression[] = [
    { german: 'Wie geht\'s?', french: 'Comment ça va ?', context: 'Salutation informelle', example: 'Hey Maria, wie geht\'s?' },
    { german: 'Was ist los?', french: 'Qu\'est-ce qui se passe ?', context: 'Demander ce qui ne va pas', example: 'Du siehst traurig aus. Was ist los?' },
    { german: 'Keine Ahnung!', french: 'Aucune idée !', context: 'Exprimer l\'ignorance', example: 'Wo ist der Schlüssel? - Keine Ahnung!' },
    { german: 'Macht nichts!', french: 'Ce n\'est pas grave !', context: 'Rassurer quelqu\'un', example: 'Entschuldigung! - Macht nichts!' },
    { german: 'Genau!', french: 'Exactement !', context: 'Exprimer l\'accord', example: 'Das ist doch falsch! - Genau!' },
    { german: 'Na ja...', french: 'Eh bien...', context: 'Hésitation', example: 'Magst du das? - Na ja, es geht.' },
    { german: 'Ach so!', french: 'Ah d\'accord !', context: 'Comprendre quelque chose', example: 'Das war ein Witz! - Ach so!' },
    { german: 'Stimmt!', french: 'C\'est vrai !', context: 'Confirmer', example: 'Berlin ist groß. - Stimmt!' },
    { german: 'Auf jeden Fall!', french: 'Absolument !', context: 'Accord fort', example: 'Kommst du mit? - Auf jeden Fall!' },
    { german: 'Lass mich in Ruhe!', french: 'Laisse-moi tranquille !', context: 'Demander qu\'on nous laisse', example: 'Lass mich in Ruhe, ich arbeite!' },
    { german: 'Das ist mir egal.', french: 'Ça m\'est égal.', context: 'Indifférence', example: 'Pizza oder Pasta? - Das ist mir egal.' },
    { german: 'Ich habe keine Lust.', french: 'Je n\'ai pas envie.', context: 'Refuser poliment', example: 'Gehen wir schwimmen? - Ich habe keine Lust.' },
    { german: 'Gute Besserung!', french: 'Bon rétablissement !', context: 'À quelqu\'un de malade', example: 'Ich bin krank. - Gute Besserung!' },
    { german: 'Viel Erfolg!', french: 'Bonne chance !', context: 'Souhaiter la réussite', example: 'Ich habe morgen eine Prüfung. - Viel Erfolg!' },
    { german: 'Schönes Wochenende!', french: 'Bon week-end !', context: 'Salutation de fin de semaine', example: 'Bis Montag! - Schönes Wochenende!' },
    { german: 'Alles klar?', french: 'Tout est clair ?', context: 'Vérifier la compréhension', example: 'Das musst du so machen. Alles klar?' },
    { german: 'Kein Problem!', french: 'Pas de problème !', context: 'Rassurer', example: 'Kannst du mir helfen? - Kein Problem!' },
    { german: 'Bis gleich!', french: 'À tout de suite !', context: 'Séparation courte', example: 'Ich hole nur meine Jacke. Bis gleich!' },
    { german: 'Na klar!', french: 'Bien sûr !', context: 'Accord enthousiaste', example: 'Hilfst du mir? - Na klar!' },
    { german: 'Ich bin gespannt!', french: 'J\'ai hâte de voir !', context: 'Anticipation', example: 'Morgen ist die Überraschung. - Ich bin gespannt!' }
  ];

  const proverbs: Expression[] = [
    { 
      german: 'Übung macht den Meister.', 
      french: 'C\'est en forgeant qu\'on devient forgeron.', 
      literal: 'L\'exercice fait le maître.',
      context: 'Encourager la pratique régulière'
    },
    { 
      german: 'Morgenstund hat Gold im Mund.', 
      french: 'Le monde appartient à ceux qui se lèvent tôt.', 
      literal: 'L\'heure matinale a de l\'or dans la bouche.',
      context: 'Valoriser le lever tôt'
    },
    { 
      german: 'Wer zuletzt lacht, lacht am besten.', 
      french: 'Rira bien qui rira le dernier.', 
      literal: 'Celui qui rit en dernier rit le mieux.',
      context: 'Patience et persévérance'
    },
    { 
      german: 'Aller Anfang ist schwer.', 
      french: 'Tout début est difficile.', 
      literal: 'Tout commencement est difficile.',
      context: 'Encourager face aux difficultés initiales'
    },
    { 
      german: 'Ohne Fleiß kein Preis.', 
      french: 'On n\'a rien sans rien.', 
      literal: 'Sans effort, pas de récompense.',
      context: 'Valoriser le travail'
    },
    { 
      german: 'Der Apfel fällt nicht weit vom Stamm.', 
      french: 'Tel père, tel fils.', 
      literal: 'La pomme ne tombe pas loin du tronc.',
      context: 'Ressemblance familiale'
    },
    { 
      german: 'Was du heute kannst besorgen, das verschiebe nicht auf morgen.', 
      french: 'Il ne faut pas remettre au lendemain ce qu\'on peut faire le jour même.', 
      literal: 'Ce que tu peux faire aujourd\'hui, ne le reporte pas à demain.',
      context: 'Contre la procrastination'
    },
    { 
      german: 'Lügen haben kurze Beine.', 
      french: 'Les mensonges ne mènent pas loin.', 
      literal: 'Les mensonges ont de courtes jambes.',
      context: 'Contre le mensonge'
    },
    { 
      german: 'Stille Wasser sind tief.', 
      french: 'Il faut se méfier de l\'eau qui dort.', 
      literal: 'Les eaux calmes sont profondes.',
      context: 'Apparences trompeuses'
    },
    { 
      german: 'Wer A sagt, muss auch B sagen.', 
      french: 'Quand on commence quelque chose, il faut aller jusqu\'au bout.', 
      literal: 'Qui dit A doit aussi dire B.',
      context: 'Cohérence dans ses actes'
    },
    { 
      german: 'Viele Köche verderben den Brei.', 
      french: 'Trop de cuisiniers gâtent la sauce.', 
      literal: 'Beaucoup de cuisiniers gâtent la bouillie.',
      context: 'Trop de personnes compliquent les choses'
    },
    { 
      german: 'In der Kürze liegt die Würze.', 
      french: 'La brièveté est l\'âme de l\'esprit.', 
      literal: 'Dans la brièveté réside l\'assaisonnement.',
      context: 'Valoriser la concision'
    },
    { 
      german: 'Der frühe Vogel fängt den Wurm.', 
      french: 'L\'avenir appartient à ceux qui se lèvent tôt.', 
      literal: 'L\'oiseau matinal attrape le ver.',
      context: 'Avantage d\'être proactif'
    },
    { 
      german: 'Aus den Augen, aus dem Sinn.', 
      french: 'Loin des yeux, loin du cœur.', 
      literal: 'Hors des yeux, hors de l\'esprit.',
      context: 'L\'éloignement fait oublier'
    },
    { 
      german: 'Ende gut, alles gut.', 
      french: 'Tout est bien qui finit bien.', 
      literal: 'Fin bonne, tout bon.',
      context: 'L\'important est le résultat final'
    }
  ];

  const idioms: Expression[] = [
    { 
      german: 'Da steppt der Bär!', 
      french: 'C\'est la fête !', 
      literal: 'L\'ours y danse !',
      context: 'Ambiance festive',
      example: 'Kommst du zur Party? Da steppt der Bär!'
    },
    { 
      german: 'Das ist nicht mein Bier.', 
      french: 'Ce n\'est pas mon problème.', 
      literal: 'Ce n\'est pas ma bière.',
      context: 'Se désengager',
      example: 'Warum hilfst du ihm nicht? - Das ist nicht mein Bier.'
    },
    { 
      german: 'Ich verstehe nur Bahnhof.', 
      french: 'Je n\'y comprends rien.', 
      literal: 'Je ne comprends que gare.',
      context: 'Incompréhension totale',
      example: 'Kannst du mir Physik erklären? - Ich verstehe nur Bahnhof.'
    },
    { 
      german: 'Die Daumen drücken', 
      french: 'Croiser les doigts', 
      literal: 'Presser les pouces',
      context: 'Souhaiter bonne chance',
      example: 'Ich drücke dir die Daumen für die Prüfung!'
    },
    { 
      german: 'Schwein haben', 
      french: 'Avoir de la chance', 
      literal: 'Avoir du cochon',
      context: 'Chance inattendue',
      example: 'Ich habe den Bus noch erwischt. Schwein gehabt!'
    },
    { 
      german: 'Tomaten auf den Augen haben', 
      french: 'Ne pas voir ce qui est évident', 
      literal: 'Avoir des tomates sur les yeux',
      context: 'Ne pas remarquer l\'évident',
      example: 'Hast du Tomaten auf den Augen? Das Buch liegt direkt vor dir!'
    },
    { 
      german: 'Auf dem Holzweg sein', 
      french: 'Faire fausse route', 
      literal: 'Être sur le chemin de bois',
      context: 'Se tromper',
      example: 'Wenn du das glaubst, bist du auf dem Holzweg.'
    },
    { 
      german: 'Einen Vogel haben', 
      french: 'Être fou', 
      literal: 'Avoir un oiseau',
      context: 'Être un peu fou',
      example: 'Du hast wohl einen Vogel!'
    },
    { 
      german: 'Die Kirche im Dorf lassen', 
      french: 'Ne pas exagérer', 
      literal: 'Laisser l\'église au village',
      context: 'Rester raisonnable',
      example: 'Lass mal die Kirche im Dorf! So schlimm ist es nicht.'
    },
    { 
      german: 'Ins Fettnäpfchen treten', 
      french: 'Faire une gaffe', 
      literal: 'Marcher dans le petit pot de graisse',
      context: 'Commettre une maladresse',
      example: 'Mit diesem Kommentar bin ich voll ins Fettnäpfchen getreten.'
    },
    { 
      german: 'Alles in Butter', 
      french: 'Tout va bien', 
      literal: 'Tout dans le beurre',
      context: 'Rassurer',
      example: 'Keine Sorge, alles in Butter!'
    },
    { 
      german: 'Jetzt mal Butter bei die Fische!', 
      french: 'Maintenant, passons aux choses sérieuses !', 
      literal: 'Maintenant du beurre avec le poisson !',
      context: 'Demander du concret',
      example: 'Jetzt mal Butter bei die Fische! Was willst du wirklich?'
    },
    { 
      german: 'Das geht mir auf den Keks!', 
      french: 'Ça me tape sur les nerfs !', 
      literal: 'Ça me monte sur le biscuit !',
      context: 'Exprimer l\'agacement',
      example: 'Diese Musik geht mir auf den Keks!'
    },
    { 
      german: 'Um den heißen Brei herumreden', 
      french: 'Tourner autour du pot', 
      literal: 'Parler autour de la bouillie chaude',
      context: 'Éviter le sujet',
      example: 'Red nicht um den heißen Brei herum! Sag, was du denkst!'
    },
    { 
      german: 'Das ist mir Wurst.', 
      french: 'Ça m\'est égal.', 
      literal: 'C\'est saucisse pour moi.',
      context: 'Indifférence totale',
      example: 'Rot oder blau? - Das ist mir Wurst.'
    },
    { 
      german: 'Sich wie ein Elefant im Porzellanladen benehmen', 
      french: 'Se comporter comme un éléphant dans un magasin de porcelaine', 
      literal: 'Identique',
      context: 'Être très maladroit',
      example: 'Bei der Verhandlung hat er sich wie ein Elefant im Porzellanladen benommen.'
    }
  ];

  const formalExpressions: Expression[] = [
    { german: 'Sehr geehrte Damen und Herren', french: 'Madame, Monsieur', context: 'Début de lettre formelle' },
    { german: 'Mit freundlichen Grüßen', french: 'Cordialement', context: 'Fin de lettre formelle' },
    { german: 'Ich wäre Ihnen sehr dankbar, wenn...', french: 'Je vous serais très reconnaissant si...', context: 'Demande polie' },
    { german: 'Könnten Sie mir bitte mitteilen...', french: 'Pourriez-vous me faire savoir...', context: 'Demande d\'information' },
    { german: 'Bezüglich Ihrer Anfrage...', french: 'Concernant votre demande...', context: 'Réponse à une demande' },
    { german: 'Ich erlaube mir, Sie darauf hinzuweisen...', french: 'Je me permets de vous signaler...', context: 'Signaler quelque chose' },
    { german: 'Es würde mich freuen, wenn...', french: 'Je serais ravi(e) si...', context: 'Exprimer un souhait' },
    { german: 'Vielen Dank im Voraus', french: 'Merci d\'avance', context: 'Remercier par anticipation' },
    { german: 'Ich bitte um Verständnis.', french: 'Je vous prie de bien vouloir comprendre.', context: 'Demander la compréhension' },
    { german: 'Bei Rückfragen stehe ich Ihnen gerne zur Verfügung.', french: 'Je reste à votre disposition pour toute question.', context: 'Offrir son aide' },
    { german: 'Hiermit möchte ich mich bewerben...', french: 'Par la présente, je souhaite poser ma candidature...', context: 'Lettre de motivation' },
    { german: 'Ich freue mich auf Ihre Rückmeldung.', french: 'J\'attends votre réponse avec impatience.', context: 'Attendre une réponse' },
    { german: 'Entschuldigen Sie die Unannehmlichkeiten.', french: 'Veuillez nous excuser pour la gêne occasionnée.', context: 'S\'excuser formellement' },
    { german: 'In Anbetracht der Umstände...', french: 'Compte tenu des circonstances...', context: 'Justification' },
    { german: 'Ich möchte Sie höflich darum bitten...', french: 'Je vous prie poliment de...', context: 'Demande très polie' }
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
    expr.french.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const categoryInfo = {
    daily: { title: 'Expressions du quotidien', icon: '💬', color: 'indigo', description: 'Phrases utiles pour tous les jours' },
    proverbs: { title: 'Proverbes allemands', icon: '📜', color: 'amber', description: 'Sagesse populaire allemande' },
    idioms: { title: 'Expressions idiomatiques', icon: '🎭', color: 'emerald', description: 'Expressions imagées et colorées' },
    formal: { title: 'Expressions formelles', icon: '👔', color: 'violet', description: 'Pour les contextes professionnels' }
  };

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Header */}
      <div className="mb-12 text-center sm:text-left pb-10" style={{ borderBottom: '1px solid var(--terracotta-100)' }}>
        <h2 className="text-6xl font-black mb-4 tracking-tighter" style={{ color: 'var(--terracotta-800)' }}>Redewendungen</h2>
        <p className="text-2xl font-medium max-w-2xl" style={{ color: 'var(--sand-600)' }}>Expressions idiomatiques et proverbes pour parler comme un vrai Allemand.</p>
      </div>

      {/* Search */}
      <div className="relative mb-8 max-w-md">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Rechercher une expression..."
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
                    <p className="font-bold" style={{ color: 'var(--terracotta-600)' }}>{expr.french}</p>
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
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Sens littéral</span>
                      <p className="text-slate-600 mt-1 italic">"{expr.literal}"</p>
                    </div>
                  )}
                  {expr.example && (
                    <div className="bg-indigo-50 rounded-xl p-4 mt-3">
                      <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">Exemple</span>
                      <p className="text-slate-800 font-medium mt-1">{expr.example}</p>
                    </div>
                  )}
                  <button className="mt-4 text-sm text-indigo-600 font-bold hover:text-indigo-800 transition-colors flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                    </svg>
                    Ajouter aux favoris
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
          <p className="text-slate-500 font-bold text-lg">Aucune expression trouvée</p>
          <p className="text-slate-400 text-sm mt-1">Essayez un autre terme de recherche</p>
        </div>
      )}

      {/* Tips Section */}
      <div className="mt-12 bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-100 rounded-[2rem] p-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-3xl">💡</span>
          <h3 className="text-xl font-black text-amber-800">Conseils d'utilisation</h3>
        </div>
        <ul className="space-y-2 text-amber-700">
          <li className="flex items-start gap-2">
            <span className="text-amber-500">•</span>
            <span>Utilisez les expressions idiomatiques avec modération - elles impressionnent quand elles sont bien placées !</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-500">•</span>
            <span>Les proverbes sont parfaits pour conclure une conversation ou illustrer un point.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-500">•</span>
            <span>En contexte formel, privilégiez toujours le vouvoiement (Sie) et les formules respectueuses.</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

