import React, { useState, useEffect } from 'react';

interface SyncData {
  favorites: any[];
  annotations: any[];
  stats: any;
  version: string;
  exportedAt: string;
}

interface SyncModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SyncModal: React.FC<SyncModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'export' | 'import'>('export');
  const [syncCode, setSyncCode] = useState('');
  const [importCode, setImportCode] = useState('');
  const [importStatus, setImportStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [importMessage, setImportMessage] = useState('');
  const [copied, setCopied] = useState(false);

  // Générer le code de synchronisation
  useEffect(() => {
    if (isOpen && activeTab === 'export') {
      generateSyncCode();
    }
  }, [isOpen, activeTab]);

  const generateSyncCode = () => {
    const data: SyncData = {
      favorites: JSON.parse(localStorage.getItem('grammarFavorites') || '[]'),
      annotations: JSON.parse(localStorage.getItem('grammarAnnotations') || '[]'),
      stats: JSON.parse(localStorage.getItem('grammarStats') || '{}'),
      version: '1.0',
      exportedAt: new Date().toISOString()
    };
    
    // Encoder en base64
    const jsonString = JSON.stringify(data);
    const base64 = btoa(unescape(encodeURIComponent(jsonString)));
    setSyncCode(base64);
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(syncCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = syncCode;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const importData = () => {
    try {
      // Décoder le base64
      const jsonString = decodeURIComponent(escape(atob(importCode.trim())));
      const data: SyncData = JSON.parse(jsonString);
      
      // Vérifier la version
      if (!data.version) {
        throw new Error('Format de code invalide');
      }

      // Importer les données
      if (data.favorites && Array.isArray(data.favorites)) {
        localStorage.setItem('grammarFavorites', JSON.stringify(data.favorites));
      }
      
      if (data.annotations && Array.isArray(data.annotations)) {
        localStorage.setItem('grammarAnnotations', JSON.stringify(data.annotations));
      }
      
      if (data.stats && typeof data.stats === 'object') {
        // Fusionner avec les stats existantes si nécessaire
        const existingStats = JSON.parse(localStorage.getItem('grammarStats') || '{}');
        const mergedStats = {
          ...existingStats,
          ...data.stats,
          // Garder le meilleur streak
          longestStreak: Math.max(existingStats.longestStreak || 0, data.stats.longestStreak || 0),
          // Additionner le temps total
          totalTimeSpent: (existingStats.totalTimeSpent || 0) + (data.stats.totalTimeSpent || 0),
          // Fusionner les leçons complétées
          completedLessons: [...new Set([
            ...(existingStats.completedLessons || []),
            ...(data.stats.completedLessons || [])
          ])],
          // Fusionner l'historique quotidien
          dailyHistory: mergeDailyHistory(existingStats.dailyHistory || [], data.stats.dailyHistory || [])
        };
        localStorage.setItem('grammarStats', JSON.stringify(mergedStats));
      }

      setImportStatus('success');
      setImportMessage(`Données importées avec succès ! (exportées le ${new Date(data.exportedAt).toLocaleDateString('fr-FR')})`);
      
      // Recharger la page après 2 secondes
      setTimeout(() => {
        window.location.reload();
      }, 2000);
      
    } catch (err) {
      setImportStatus('error');
      setImportMessage('Code invalide. Vérifiez que vous avez copié le code complet.');
    }
  };

  const mergeDailyHistory = (existing: any[], imported: any[]) => {
    const merged = [...existing];
    imported.forEach(importedDay => {
      const existingIndex = merged.findIndex(d => d.date === importedDay.date);
      if (existingIndex >= 0) {
        // Fusionner les données du même jour
        merged[existingIndex] = {
          ...merged[existingIndex],
          timeSpent: Math.max(merged[existingIndex].timeSpent || 0, importedDay.timeSpent || 0),
          lessonsCompleted: [...new Set([
            ...(merged[existingIndex].lessonsCompleted || []),
            ...(importedDay.lessonsCompleted || [])
          ])]
        };
      } else {
        merged.push(importedDay);
      }
    });
    return merged.sort((a, b) => a.date.localeCompare(b.date));
  };

  const resetImport = () => {
    setImportCode('');
    setImportStatus('idle');
    setImportMessage('');
  };

  const getDataSummary = () => {
    const favorites = JSON.parse(localStorage.getItem('grammarFavorites') || '[]');
    const annotations = JSON.parse(localStorage.getItem('grammarAnnotations') || '[]');
    const stats = JSON.parse(localStorage.getItem('grammarStats') || '{}');
    
    return {
      favoritesCount: favorites.length,
      annotationsCount: annotations.length,
      completedLessons: stats.completedLessons?.length || 0,
      totalTime: stats.totalTimeSpent || 0,
      streak: stats.currentStreak || 0
    };
  };

  const summary = getDataSummary();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-slate-900/60 backdrop-blur-sm" onClick={onClose}>
      <div className="bg-white rounded-[2rem] shadow-2xl w-full max-w-lg overflow-hidden animate-in zoom-in-95 duration-300" onClick={e => e.stopPropagation()}>
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest opacity-80">Synchronisation</p>
                <h5 className="text-xl font-black">Transférer mes données</h5>
              </div>
            </div>
            <button onClick={onClose} className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/40 transition-all">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-slate-100">
          <button
            onClick={() => { setActiveTab('export'); resetImport(); }}
            className={`flex-1 px-6 py-4 font-bold text-sm transition-all ${
              activeTab === 'export' 
                ? 'text-indigo-600 border-b-2 border-indigo-600' 
                : 'text-slate-400 hover:text-slate-600'
            }`}
          >
            📤 Exporter
          </button>
          <button
            onClick={() => setActiveTab('import')}
            className={`flex-1 px-6 py-4 font-bold text-sm transition-all ${
              activeTab === 'import' 
                ? 'text-indigo-600 border-b-2 border-indigo-600' 
                : 'text-slate-400 hover:text-slate-600'
            }`}
          >
            📥 Importer
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {activeTab === 'export' ? (
            <div className="space-y-4">
              {/* Résumé des données */}
              <div className="bg-slate-50 rounded-xl p-4">
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Données à exporter</p>
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center gap-2">
                    <span className="text-amber-500">⭐</span>
                    <span className="text-sm text-slate-600"><strong>{summary.favoritesCount}</strong> favoris</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-500">📝</span>
                    <span className="text-sm text-slate-600"><strong>{summary.annotationsCount}</strong> notes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span className="text-sm text-slate-600"><strong>{summary.completedLessons}</strong> leçons</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-orange-500">🔥</span>
                    <span className="text-sm text-slate-600"><strong>{summary.streak}</strong> jours streak</span>
                  </div>
                </div>
              </div>

              {/* Code */}
              <div>
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 block">Code de synchronisation</label>
                <div className="relative">
                  <textarea
                    value={syncCode}
                    readOnly
                    className="w-full h-24 p-3 bg-slate-100 rounded-xl text-xs font-mono text-slate-600 resize-none"
                  />
                  <button
                    onClick={copyToClipboard}
                    className={`absolute top-2 right-2 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                      copied 
                        ? 'bg-green-500 text-white' 
                        : 'bg-indigo-600 text-white hover:bg-indigo-700'
                    }`}
                  >
                    {copied ? '✓ Copié !' : 'Copier'}
                  </button>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-100 rounded-xl p-4">
                <p className="text-sm text-blue-700">
                  <strong>💡 Instructions :</strong><br />
                  1. Copiez ce code<br />
                  2. Sur votre autre appareil, ouvrez l'app<br />
                  3. Allez dans Sync → Importer<br />
                  4. Collez le code
                </p>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              {importStatus === 'idle' ? (
                <>
                  <div>
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 block">Coller le code</label>
                    <textarea
                      value={importCode}
                      onChange={(e) => setImportCode(e.target.value)}
                      placeholder="Collez ici le code de synchronisation..."
                      className="w-full h-32 p-3 border border-slate-200 rounded-xl text-xs font-mono text-slate-600 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>

                  <div className="bg-amber-50 border border-amber-100 rounded-xl p-4">
                    <p className="text-sm text-amber-700">
                      <strong>⚠️ Attention :</strong><br />
                      L'importation fusionnera les données avec vos données actuelles. Vos leçons complétées et notes seront préservées.
                    </p>
                  </div>

                  <button
                    onClick={importData}
                    disabled={!importCode.trim()}
                    className={`w-full py-3 rounded-xl font-bold transition-all ${
                      importCode.trim()
                        ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                        : 'bg-slate-100 text-slate-400 cursor-not-allowed'
                    }`}
                  >
                    Importer les données
                  </button>
                </>
              ) : (
                <div className={`text-center py-8 ${importStatus === 'success' ? 'text-green-600' : 'text-red-600'}`}>
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
                    importStatus === 'success' ? 'bg-green-100' : 'bg-red-100'
                  }`}>
                    {importStatus === 'success' ? (
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    ) : (
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>
                  <p className="font-bold text-lg mb-2">
                    {importStatus === 'success' ? 'Importation réussie !' : 'Erreur'}
                  </p>
                  <p className="text-sm opacity-80">{importMessage}</p>
                  {importStatus === 'success' && (
                    <p className="text-xs mt-2 text-slate-400">Rechargement de la page...</p>
                  )}
                  {importStatus === 'error' && (
                    <button
                      onClick={resetImport}
                      className="mt-4 px-4 py-2 bg-slate-100 text-slate-600 rounded-lg font-bold text-sm hover:bg-slate-200 transition-all"
                    >
                      Réessayer
                    </button>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

