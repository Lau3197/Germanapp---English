
import { GrammarLevel, LanguageLevel } from '../../../types';
import { tempsPasse } from './temps-passe';
import { declinaisonAdjectif } from './declinaison-adjectif';
import { casApprofondissement } from './cas-approfondissement';
import { phraseComplexe } from './phrase-complexe';
import { autresPoints } from './autres-points';

export const a2Grammar: GrammarLevel = {
  level: LanguageLevel.A2,
  title: "A2 Level: Consolidation",
  description: "Communicate in simple, routine tasks, describe your environment, and talk about your background.",
  sections: [
    tempsPasse,
    declinaisonAdjectif,
    casApprofondissement,
    phraseComplexe,
    autresPoints
  ]
};
