
import { GrammarLevel, LanguageLevel } from '../../../types.ts';
import { phraseComplexeC1 } from './phrase-complexe-c1.ts';
import { nominalisationVerbalisationC1 } from './nominalisation-verbalisation.ts';
import { passifAlternativesC1 } from './passif-alternatives.ts';
import { subjonctifNuancesC1 } from './subjonctif-nuances.ts';
import { connecteursAvancesC1 } from './connecteurs-avances.ts';
import { structuresExpertesC1 } from './structures-expertes.ts';

export const c1Grammar: GrammarLevel = {
  level: LanguageLevel.C1,
  title: "C1 Level: Refinement",
  description: "Express yourself fluently and spontaneously without having to search too much for words. Use the language flexibly and effectively.",
  sections: [
    phraseComplexeC1,              // 5.1
    nominalisationVerbalisationC1, // 5.2
    passifAlternativesC1,          // 5.3
    subjonctifNuancesC1,           // 5.4
    connecteursAvancesC1,          // 5.5
    structuresExpertesC1           // 5.6
  ]
};


