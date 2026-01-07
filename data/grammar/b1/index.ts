
import { GrammarLevel, LanguageLevel } from '../../../types';
import { phraseComplexeB1 } from './phrase-complexe';
import { plusquamperfektB1, futurB1, konjunktivIIB1, passivPresentB1, passivPasseB1, passivModauxB1 } from './temps-modes';
import { casFinalisationB1 } from './cas-finalisation';
import { verbesNomsB1 } from './verbes-noms';

export const b1Grammar: GrammarLevel = {
  level: LanguageLevel.B1,
  title: "Niveau B1 : L'Autonomie",
  description: "S'exprimer de façon simple et cohérente sur des sujets familiers et dans ses domaines d'intérêt.",
  sections: [
    phraseComplexeB1,
    plusquamperfektB1,
    futurB1,
    konjunktivIIB1,
    passivPresentB1,
    passivPasseB1,
    passivModauxB1,
    casFinalisationB1,
    verbesNomsB1
  ]
};
