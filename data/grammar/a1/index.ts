
import { GrammarLevel, LanguageLevel } from '../../../types';
import { alphabetPrononciation } from './alphabet-prononciation';
import { syntaxeBase } from './syntaxe-base';
import { conjugaisonPresent } from './conjugaison-present';
import { nomsArticlesCas } from './noms-articles-cas';
import { identifierGenre } from './identifier-genre';
import { homonymesGenre } from './homonymes-genre';

export const a1Grammar: GrammarLevel = {
  level: LanguageLevel.A1,
  title: "Foundations",
  description: "Understand and use familiar everyday expressions, introduce yourself, and ask simple questions.",
  sections: [
    alphabetPrononciation,
    syntaxeBase,
    conjugaisonPresent,
    nomsArticlesCas,
    identifierGenre,
    homonymesGenre
  ]
};
