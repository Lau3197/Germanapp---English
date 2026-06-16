import React, { useState } from 'react';
import { WordCard } from './WordCard';
import { NOMEN_VERBEN_LIST } from '../data/nomenVerbenData';

export const NomenVerbenView: React.FC = () => {
    const [nvSearch, setNvSearch] = useState('');

    const filteredNV = NOMEN_VERBEN_LIST.filter(item => {
        const matchesSearch = item.german.toLowerCase().includes(nvSearch.toLowerCase()) ||
            item.english.toLowerCase().includes(nvSearch.toLowerCase());
        return matchesSearch;
    });

    return (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="mb-10 flex flex-col md:flex-row justify-between items-end gap-6">
                <div className="flex-1">
                    <h2 className="text-4xl font-black text-slate-900 mb-2">Noun-Verb Combinations</h2>
                    <p className="text-lg text-slate-500">Structured idiomatic expressions.</p>
                </div>
                <div className="w-full md:w-80 relative">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
                        value={nvSearch}
                        onChange={(e) => setNvSearch(e.target.value)}
                    />
                    <svg className="absolute left-3 top-3.5 text-slate-400" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredNV.map((word, idx) => (
                    <WordCard key={`nv-${idx}`} word={word} />
                ))}
            </div>
        </div>
    );
};
