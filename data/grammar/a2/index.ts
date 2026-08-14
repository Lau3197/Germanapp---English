
import { GrammarLevel, LanguageLevel } from '../../../types';
import { tempsPasse } from './temps-passe';
import { declinaisonAdjectif } from './declinaison-adjectif';
import { casApprofondissement } from './cas-approfondissement';
import { phraseComplexe } from './phrase-complexe';
import { autresPoints } from './autres-points';
import { pronomsDeterminants } from './pronoms-determinants';
import { connecteursAdverbiaux } from './connecteurs-adverbiaux';
import { ordreDesMots } from './ordre-des-mots';

export const a2Grammar: GrammarLevel = {
  level: LanguageLevel.A2,
  title: "A2 Level: Consolidation",
  description: "Communicate in simple, routine tasks, describe your environment, and talk about your background.",
  sections: [
    tempsPasse,             // 2.1
    declinaisonAdjectif,    // 2.2
    casApprofondissement,   // 2.3
    phraseComplexe,         // 2.4
    autresPoints,           // 2.5
    pronomsDeterminants,    // 2.6
    connecteursAdverbiaux,  // 2.7
    ordreDesMots            // 2.8
  ]
};
