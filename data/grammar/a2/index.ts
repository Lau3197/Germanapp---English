
import { GrammarLevel, LanguageLevel } from '../../../types';
import { tempsPasse } from './temps-passe';
import { declinaisonAdjectif } from './declinaison-adjectif';
import { casApprofondissement } from './cas-approfondissement';
import { phraseComplexe } from './phrase-complexe';
import { autresPoints } from './autres-points';

export const a2Grammar: GrammarLevel = {
  level: LanguageLevel.A2,
  title: "Niveau A2 : La Consolidation",
  description: "Communiquer lors de tâches simples, décrire son environnement et son parcours avec plus de précision.",
  sections: [
    tempsPasse,
    declinaisonAdjectif,
    casApprofondissement,
    phraseComplexe,
    autresPoints
  ]
};
