
import { GrammarLevel, LanguageLevel } from '../../../types';
import { phraseComplexeB1 } from './phrase-complexe';
import { plusquamperfektB1, futurB1, konjunktivIIB1, passivPresentB1, passivPasseB1, passivModauxB1 } from './temps-modes';
import { casFinalisationB1 } from './cas-finalisation';
import { verbesNomsB1 } from './verbes-noms';
import { prepositionsSubtilitesB1 } from './prepositions-subtilites';

export const b1Grammar: GrammarLevel = {
  level: LanguageLevel.B1,
  title: "B1 Level: Independence",
  description: "Express yourself simply and coherently on familiar topics and in your areas of interest.",
  sections: [
    phraseComplexeB1,
    plusquamperfektB1,
    futurB1,
    konjunktivIIB1,
    passivPresentB1,
    passivPasseB1,
    passivModauxB1,
    casFinalisationB1,
    verbesNomsB1,
    prepositionsSubtilitesB1
  ]
};
