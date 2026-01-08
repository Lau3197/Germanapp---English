
import { GrammarLevel, LanguageLevel } from '../../../types';
import { tempsPasse } from './temps-passe';
import { declinaisonAdjectif } from './declinaison-adjectif';
import { casApprofondissement } from './cas-approfondissement';
import { phraseComplexe } from './phrase-complexe';
import { autresPoints } from './autres-points';

export const a2Grammar: GrammarLevel = {
  level: LanguageLevel.A2,
  title: "Niveau A2 : La Consolidation",
  description: "Communiquer lors de tâches simples et habituelles, décrire son environnement, son parcours.",
  sections: [
    tempsPasse,
    declinaisonAdjectif,
    casApprofondissement,
    phraseComplexe,
    autresPoints
  ]
};
