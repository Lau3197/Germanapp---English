
import React, { useState, useEffect } from 'react';
import { GRAMMAR_DATA, KII_CONJUGATIONS } from '../data/grammarData';
import { LanguageLevel } from '../types';

export const GrammarView: React.FC = () => {
  const [selectedLevel, setSelectedLevel] = useState<LanguageLevel>(LanguageLevel.A1);
  const [activeSectionIndex, setActiveSectionIndex] = useState<number | 'all'>('all');
  const [conjugationModal, setConjugationModal] = useState<{ verb: string; forms: string[] } | null>(null);

  const currentLevelData = GRAMMAR_DATA.find(l => l.level === selectedLevel) || GRAMMAR_DATA[0];

  useEffect(() => {
    setActiveSectionIndex('all');
  }, [selectedLevel]);

  const displayedSections = activeSectionIndex === 'all' 
    ? currentLevelData.sections 
    : [currentLevelData.sections[activeSectionIndex]];

  const handleVerbClick = (verb: string) => {
    const forms = KII_CONJUGATIONS[verb.toLowerCase()];
    if (forms) {
      setConjugationModal({ verb, forms });
    }
  };

  const scrollToTopic = (topicId: string, sectionIdx: number) => {
    // Si la section n'est pas affichée, on l'active d'abord
    if (activeSectionIndex !== 'all' && activeSectionIndex !== sectionIdx) {
      setActiveSectionIndex(sectionIdx);
      // On attend un court instant que le DOM se mette à jour avant de scroller
      setTimeout(() => {
        const element = document.getElementById(`topic-${topicId}`);
        if (element) {
          const headerOffset = 100;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    } else {
      // Si déjà affiché, on scrolle directement
      const element = document.getElementById(`topic-${topicId}`);
      if (element) {
        const headerOffset = 100;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  const parseInlineMarkdown = (text: string | undefined) => {
    if (!text) return "";
    
    const parts = text.split(/(\*\*.*?\*\*|\[\[.*?\]\])/g);
    
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={index} className="font-black text-slate-900 border-b-2 border-indigo-100">{part.slice(2, -2)}</strong>;
      }
      if (part.startsWith('[[') && part.endsWith(']]')) {
        const verb = part.slice(2, -2);
        return (
          <button 
            key={index} 
            onClick={() => handleVerbClick(verb)}
            className="px-2 py-0.5 bg-indigo-600 text-white rounded-md font-black text-xs hover:bg-indigo-700 hover:scale-105 transition-all inline-flex items-center gap-1 mx-1"
          >
            {verb}
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7"></path></svg>
          </button>
        );
      }
      return part;
    });
  };

  const renderTable = (rows: string[]) => {
    return (
      <div className="my-8 overflow-hidden rounded-2xl border border-slate-200 shadow-sm overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200">
              {rows[0].split('|').filter(cell => cell.trim() !== '').map((cell, i) => (
                <th key={i} className="px-6 py-4 text-xs font-black uppercase tracking-widest text-indigo-600">
                  {parseInlineMarkdown(cell.trim())}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {rows.slice(1).map((row, i) => (
              <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                {row.split('|').filter(cell => cell.trim() !== '').map((cell, j) => (
                  <td key={j} className="px-6 py-4 text-sm text-slate-600 font-medium">
                    {parseInlineMarkdown(cell.trim())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  const renderFormattedContent = (content: string) => {
    const lines = content.split('\n');
    const elements: React.ReactNode[] = [];
    let currentTable: string[] = [];

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();

      if (line.startsWith('|')) {
        currentTable.push(line);
        if (i === lines.length - 1 || !lines[i + 1].trim().startsWith('|')) {
          elements.push(renderTable(currentTable));
          currentTable = [];
        }
        continue;
      }

      if (line.startsWith('###')) {
        elements.push(
          <h6 key={i} className="text-xl font-black text-slate-900 mt-12 mb-6 flex items-center gap-3">
            <span className="w-2 h-8 bg-indigo-600 rounded-full"></span>
            {parseInlineMarkdown(line.replace('###', '').trim())}
          </h6>
        );
      } else if (line.startsWith('**') && line.endsWith('**')) {
        elements.push(
          <p key={i} className="font-black text-indigo-600 mt-10 mb-4 uppercase text-[11px] tracking-[0.25em] flex items-center gap-2">
            <span className="w-4 h-px bg-indigo-200"></span>
            {line.replace(/\*\*/g, '').trim()}
            <span className="w-4 h-px bg-indigo-200"></span>
          </p>
        );
      } else if (line.startsWith('•')) {
        elements.push(
          <div key={i} className="flex gap-4 mb-4 ml-2 group">
            <span className="text-indigo-500 font-black group-hover:scale-125 transition-transform">•</span>
            <span className="text-slate-600 font-medium leading-relaxed">
              {parseInlineMarkdown(line.replace('•', '').trim())}
            </span>
          </div>
        );
      } else if (line) {
        elements.push(
          <p key={i} className="text-slate-600 leading-relaxed font-medium mb-5 text-lg">
            {parseInlineMarkdown(line)}
          </p>
        );
      } else {
        elements.push(<div key={i} className="h-4"></div>);
      }
    }

    return elements;
  };

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 relative">
      {/* Conjugation Modal */}
      {conjugationModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-slate-900/60 backdrop-blur-sm">
          <div className="bg-white rounded-[2.5rem] shadow-2xl w-full max-w-sm overflow-hidden animate-in zoom-in-95 duration-300">
            <div className="bg-indigo-600 p-8 text-white flex justify-between items-center">
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest opacity-80 mb-1">Konjunktiv II</p>
                <h5 className="text-3xl font-black tracking-tight">{conjugationModal.verb}</h5>
              </div>
              <button onClick={() => setConjugationModal(null)} className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/40 transition-all">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12"></path></svg>
              </button>
            </div>
            <div className="p-8 space-y-4">
              {conjugationModal.forms.map((form, idx) => (
                <div key={idx} className="flex justify-between items-center border-b border-slate-50 pb-2">
                  <span className="text-slate-400 text-xs font-bold uppercase tracking-wider">{form.split(' ')[0]}</span>
                  <span className="text-slate-900 font-black text-lg">{form.split(' ')[1]}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="mb-12 text-center sm:text-left border-b border-slate-100 pb-10">
        <h2 className="text-6xl font-black text-slate-900 mb-4 tracking-tighter">Grammatik</h2>
        <p className="text-2xl text-slate-400 font-medium max-w-2xl">Maîtrisez les structures de la langue allemande avec clarté et précision.</p>
      </div>

      <div className="flex flex-wrap gap-3 mb-12 bg-white p-2.5 rounded-2xl shadow-sm border border-slate-100 w-fit mx-auto sm:mx-0">
        {[LanguageLevel.A1, LanguageLevel.A2, LanguageLevel.B1, LanguageLevel.B2, LanguageLevel.C1].map(lvl => (
          <button
            key={lvl}
            onClick={() => setSelectedLevel(lvl)}
            className={`px-8 py-4 rounded-xl font-black transition-all ${
              selectedLevel === lvl 
                ? 'bg-indigo-600 text-white shadow-xl shadow-indigo-200 scale-105' 
                : 'text-slate-400 hover:bg-slate-50'
            }`}
          >
            {lvl}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-4">
          <div className="sticky top-24 bg-white p-8 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100">
            <div className="mb-8">
              <span className="inline-block px-3 py-1 bg-indigo-50 text-indigo-600 text-[10px] font-black uppercase tracking-widest rounded-md mb-3">Module Actuel</span>
              <h3 className="text-3xl font-black text-slate-900 mb-2">{currentLevelData.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed italic">"{currentLevelData.description}"</p>
            </div>
            
            <div className="space-y-3 pt-8 border-t border-slate-50">
              <button
                onClick={() => setActiveSectionIndex('all')}
                className={`w-full flex items-center gap-5 p-5 rounded-2xl text-sm font-black transition-all text-left ${
                  activeSectionIndex === 'all' 
                    ? 'bg-slate-900 text-white shadow-2xl scale-[1.02]' 
                    : 'text-slate-400 hover:bg-slate-50 hover:text-slate-600'
                }`}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm shrink-0 ${activeSectionIndex === 'all' ? 'bg-white/20' : 'bg-slate-100'}`}>
                  ∞
                </div>
                Tout le programme
              </button>

              {currentLevelData.sections.map((section, idx) => (
                <div key={idx} className="space-y-1">
                  <button 
                    onClick={() => setActiveSectionIndex(idx)}
                    className={`w-full flex items-start gap-5 p-5 rounded-2xl text-sm font-bold transition-all text-left group ${
                      activeSectionIndex === idx 
                        ? 'bg-indigo-50 text-indigo-700 ring-2 ring-indigo-200/50 shadow-sm scale-[1.02]' 
                        : 'text-slate-400 hover:bg-slate-50 hover:text-slate-600'
                    }`}
                  >
                    <div className={`w-8 h-8 rounded-xl flex items-center justify-center text-xs shrink-0 mt-0.5 transition-all ${activeSectionIndex === idx ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200 rotate-6' : 'bg-slate-100 text-slate-400 group-hover:rotate-3'}`}>
                      {idx + 1}
                    </div>
                    <span className="leading-snug pt-1">{section.title}</span>
                  </button>
                  
                  {(activeSectionIndex === idx || activeSectionIndex === 'all') && (
                    <div className="ml-14 space-y-1 pb-4 animate-in fade-in slide-in-from-top-1 duration-300">
                      {section.topics.map((topic, tIdx) => (
                        <button 
                          key={tIdx} 
                          onClick={() => scrollToTopic(topic.id, idx)}
                          className="w-full text-left text-[11px] font-bold text-slate-500 hover:text-indigo-600 hover:translate-x-1 flex items-start gap-2 py-1 px-2 border-l border-slate-100 ml-1 transition-all"
                        >
                           <div className="w-1.5 h-1.5 bg-indigo-200 rounded-full mt-1.5 shrink-0"></div>
                           <span>{topic.title}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-8 space-y-32">
          {displayedSections.map((section, sIdx) => (
            <div key={sIdx} className="animate-in fade-in slide-in-from-right-8 duration-700">
              <div className="mb-12 relative">
                <div className="flex items-center gap-6 mb-6">
                  <span className="text-8xl font-black text-slate-100 leading-none select-none">
                    {activeSectionIndex === 'all' ? sIdx + 1 : activeSectionIndex + 1}
                  </span>
                  <div className="h-0.5 bg-slate-100 flex-1"></div>
                </div>
                <h4 className="text-5xl font-black text-slate-900 tracking-tight leading-tight">
                  {section.title}
                </h4>
              </div>
              
              <div className="space-y-20">
                {section.topics.map((topic, tIdx) => (
                  <div key={tIdx} id={`topic-${topic.id}`} className="relative">
                    <div className="bg-white border border-slate-100 p-12 rounded-[3rem] shadow-xl shadow-slate-200/30 mb-12 relative overflow-hidden">
                       <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 rounded-bl-[5rem] -mr-16 -mt-16 opacity-50"></div>
                       <h5 className="text-2xl font-black text-indigo-600 mb-8 flex items-center gap-3">
                         <span className="w-8 h-1 bg-indigo-600 rounded-full"></span>
                         {topic.title}
                       </h5>
                       {renderFormattedContent(topic.content)}
                    </div>
                    
                    {topic.examples && (
                      <div className="space-y-8 pl-4 lg:pl-8 border-l-4 border-indigo-50">
                        <div className="flex items-center gap-4">
                          <div className="flex -space-x-2">
                             <div className="w-3 h-3 bg-indigo-400 rounded-full animate-ping"></div>
                             <div className="w-3 h-3 bg-indigo-600 rounded-full"></div>
                          </div>
                          <p className="text-[11.4px] font-black text-slate-400 uppercase tracking-[0.4em]">Exemples d'application</p>
                        </div>
                        <div className="grid grid-cols-1 gap-6">
                          {topic.examples.map((ex, exIdx) => (
                            <div key={exIdx} className="bg-white border border-slate-100 p-8 rounded-[2rem] hover:ring-2 hover:ring-indigo-100 hover:shadow-2xl transition-all duration-500 group">
                              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10">
                                <div className="space-y-3">
                                  <p className="text-slate-900 font-black text-[19.95px] group-hover:text-indigo-600 transition-colors">
                                    {parseInlineMarkdown(ex.de)}
                                  </p>
                                  <p className="text-slate-400 font-bold text-[13.3px]">
                                    {parseInlineMarkdown(ex.fr)}
                                  </p>
                                </div>
                                {ex.note && (
                                  <div className="bg-indigo-50/50 px-6 py-5 rounded-2xl border border-indigo-100 lg:max-w-[340px] shrink-0">
                                    <div className="flex items-center gap-2 mb-2">
                                      <svg className="w-4 h-4 text-indigo-600" fill="currentColor" viewBox="0 0 20 20"><path d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" fillRule="evenodd" clipRule="evenodd"></path></svg>
                                      <p className="text-[10px] text-indigo-600 font-black uppercase tracking-widest">Le conseil du prof</p>
                                    </div>
                                    <p className="text-[13.3px] text-slate-600 font-semibold leading-relaxed">
                                      {parseInlineMarkdown(ex.note)}
                                    </p>
                                  </div>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
