import { GrammarLevel, LanguageLevel } from '../../../types';
import { alphabetPrononciation } from './alphabet-prononciation';
import { syntaxeBase } from './syntaxe-base';
import { conjugaisonPresent } from './conjugaison-present';
import { verbesModauxSeparables } from './verbes-modaux-separables';
import { nomsArticlesCas } from './noms-articles-cas';
import { identifierGenre } from './identifier-genre';
import { negation } from './negation';
import { imperatif } from './imperatif';
import { nombresHeureDate } from './nombres-heure-date';
import { structuresEssentielles } from './structures-essentielles';
import { complementsA1 } from './complements-a1';

export const a1Grammar: GrammarLevel = {
  level: LanguageLevel.A1,
  title: "Foundations",
  description: "Understand and use familiar everyday expressions, introduce yourself, and ask simple questions.",
  sections: [
    alphabetPrononciation,    // 1.1
    syntaxeBase,              // 1.2
    conjugaisonPresent,       // 1.3
    verbesModauxSeparables,   // 1.4
    nomsArticlesCas,          // 1.5
    identifierGenre,          // 1.6
    negation,                 // 1.7
    imperatif,                // 1.8
    nombresHeureDate,         // 1.9
    structuresEssentielles,   // 1.10
    complementsA1             // 1.11
  ]
};
