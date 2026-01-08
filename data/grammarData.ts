
import { GrammarLevel } from '../types.ts';
import { a1Grammar } from './grammar/a1/index.ts';
import { a2Grammar } from './grammar/a2/index.ts';
import { b1Grammar } from './grammar/b1/index.ts';
import { b2Grammar } from './grammar/b2/index.ts';
import { c1Grammar } from './grammar/c1/index.ts';
import { c2Grammar } from './grammar/c2/index.ts';

export const GRAMMAR_DATA: GrammarLevel[] = [
  a1Grammar,
  a2Grammar,
  b1Grammar,
  b2Grammar,
  c1Grammar,
  c2Grammar
];

export const KII_CONJUGATIONS: Record<string, string[]> = {
  'haben': ['ich hätte', 'du hättest', 'er/sie/es hätte', 'wir hätten', 'ihr hättet', 'sie/Sie hätten'],
  'sein': ['ich wäre', 'du wärest', 'er/sie/es wäre', 'wir wären', 'ihr wäret', 'sie/Sie wären'],
  'werden': ['ich würde', 'du würdest', 'er/sie/es würde', 'wir würden', 'ihr würdet', 'sie/Sie würden'],
  'wissen': ['ich wüsste', 'du wüsstest', 'er/sie/es wüsste', 'wir wüssten', 'ihr wüsstet', 'sie/Sie wüssten'],
  'kommen': ['ich käme', 'du kämest', 'er/sie/es käme', 'wir kämen', 'ihr kämet', 'sie/Sie kämen'],
  'gehen': ['ich ginge', 'du gingest', 'er/sie/es ginge', 'wir gingen', 'ihr ginget', 'sie/Sie gingen'],
  'lassen': ['ich ließe', 'du ließest', 'er/sie/es ließe', 'wir ließen', 'ihr ließet', 'sie/Sie ließen'],
  'können': ['ich könnte', 'du könntest', 'er/sie/es könnte', 'wir könnten', 'ihr könntet', 'sie/Sie könnten'],
  'müssen': ['ich müsste', 'du müsstest', 'er/sie/es müsste', 'wir müssten', 'ihr müsstet', 'sie/Sie müssten'],
  'dürfen': ['ich dürfte', 'du dürftest', 'er/sie/es dürfte', 'wir dürften', 'ihr dürftet', 'sie/Sie dürften'],
  'sollen': ['ich sollte', 'du solltest', 'er/sie/es sollte', 'wir sollten', 'ihr solltet', 'sie/Sie sollten'],
  'wollen': ['ich wollte', 'du wolltest', 'er/sie/es wollte', 'wir wollten', 'ihr wolltet', 'sie/Sie wollten'],
  'mögen': ['ich möchte', 'du möchtest', 'er/sie/es möchte', 'wir möchten', 'ihr möchtet', 'sie/Sie möchten'],
};
