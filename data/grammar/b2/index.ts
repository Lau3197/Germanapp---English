
import { GrammarLevel, LanguageLevel } from '../../../types.ts';
import { konjunktivIB2 } from './konjunktiv-i.ts';
import { passivDetailsB2 } from './passiv-details.ts';
import { passivAlternativenB2 } from './passiv-alternativen.ts';
import { nominalisationB2 } from './nominalisation.ts';
import { participialesB2 } from './constructions-participiales.ts';
import { connecteursComplexesB2 } from './connecteurs-complexes.ts';
import { modauxSubjectifsB2 } from './modaux-subjectifs.ts';
import { declinaisonsComplexesB2 } from './declinaisons-complexes.ts';
import { prepositionsConjonctionsB2 } from './prepositions-conjonctions.ts';

export const b2Grammar: GrammarLevel = {
  level: LanguageLevel.B2,
  title: "B2 Level: Mastery and Nuance",
  description: "Understand the essential content of concrete and abstract topics, and express yourself fluently and precisely.",
  sections: [
    konjunktivIB2,              // 1
    passivDetailsB2,           // 2
    passivAlternativenB2,      // 3
    nominalisationB2,          // 4
    participialesB2,           // 5
    connecteursComplexesB2,    // 6
    modauxSubjectifsB2,        // 7
    declinaisonsComplexesB2,   // 8
    prepositionsConjonctionsB2 // 9
  ]
};
