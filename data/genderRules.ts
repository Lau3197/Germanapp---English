// Common German noun-gender "Merksätze" (mnemonic rules) based on word ending.
// These are teaching heuristics, not laws — German always has a few exceptions.
// The trainer compares each rule's predicted article against the word's real
// article, so exceptions are surfaced honestly rather than asserted as fact.

export type Article = 'der' | 'die' | 'das';

export interface GenderRule {
  id: string;
  article: Article;
  label: string;       // short tag, e.g. "-ung"
  description: string; // full mnemonic sentence
  test: (word: string) => boolean;
}

const endsWith = (word: string, suffix: string) => word.toLowerCase().endsWith(suffix);
const normalized = (word: string) => word.toLowerCase();
const isListed = (word: string, words: ReadonlySet<string>) => words.has(normalized(word));

// These endings are useful only when they are real suffixes. A few common
// German words merely look like they have the suffix, so we suppress the hint.
const NON_DIMINUTIVE_CHEN = new Set(['knochen', 'kuchen']);
const NON_FEMININE_IN = new Set([
  'bein', 'check-in', 'cousin', 'delfin', 'edelstein', 'elfenbein', 'führerschein',
  'kamin', 'pinguin', 'schwein', 'stein', 'verein', 'wein', 'wildschwein',
]);
const NON_FEMININE_IE = new Set(['knie', 'selfie']);
const NON_NEUTER_MENT = new Set(['moment', 'zement']);
const NON_MASCULINE_LING = new Set(['recycling']);
const NON_FEMININE_ANZ = new Set(['pferdeschwanz', 'tanz']);
const NON_MASCULINE_ANT = new Set(['restaurant']);
const NON_FEMININE_UR = new Set(['abitur', 'flur', 'ingenieur']);
const NON_MASCULINE_OR = new Set(['styropor', 'tor']);
const NON_NEUTER_UM = new Set([
  'albtraum', 'baum', 'konferenzraum', 'rasierschaum', 'raum', 'reichtum', 'traum',
]);
const NON_NEUTER_O = new Set(['disko', 'zoo']);

// Days, months, seasons and compass directions are (almost) always masculine.
const DER_BY_MEANING = new Set([
  'montag', 'dienstag', 'mittwoch', 'donnerstag', 'freitag', 'samstag', 'sonnabend', 'sonntag',
  'januar', 'februar', 'märz', 'april', 'mai', 'juni', 'juli', 'august', 'september', 'oktober', 'november', 'dezember',
  'frühling', 'sommer', 'herbst', 'winter',
  'norden', 'süden', 'osten', 'westen',
]);

export const GENDER_RULES: GenderRule[] = [
  {
    id: 'weekday-month-season',
    article: 'der',
    label: 'day / month / season',
    description: 'Weekdays, months, seasons and compass directions are almost always masculine (der).',
    test: word => DER_BY_MEANING.has(word.toLowerCase()),
  },
  { id: 'schaft', article: 'die', label: '-schaft', description: 'Nouns ending in "-schaft" are almost always feminine (die).', test: w => endsWith(w, 'schaft') },
  { id: 'ismus', article: 'der', label: '-ismus', description: 'Nouns ending in "-ismus" are almost always masculine (der).', test: w => endsWith(w, 'ismus') },
  { id: 'heit', article: 'die', label: '-heit', description: 'Nouns ending in "-heit" are almost always feminine (die).', test: w => endsWith(w, 'heit') },
  { id: 'keit', article: 'die', label: '-keit', description: 'Nouns ending in "-keit" are almost always feminine (die).', test: w => endsWith(w, 'keit') },
  { id: 'chen', article: 'das', label: '-chen', description: 'Diminutives ending in "-chen" are always neuter (das), whatever the base word\'s own gender.', test: w => endsWith(w, 'chen') && !isListed(w, NON_DIMINUTIVE_CHEN) },
  { id: 'lein', article: 'das', label: '-lein', description: 'Diminutives ending in "-lein" are always neuter (das), whatever the base word\'s own gender.', test: w => endsWith(w, 'lein') },
  { id: 'ment', article: 'das', label: '-ment', description: 'Nouns ending in "-ment" are almost always neuter (das).', test: w => endsWith(w, 'ment') && !isListed(w, NON_NEUTER_MENT) },
  { id: 'tion', article: 'die', label: '-tion', description: 'Nouns ending in "-tion" are almost always feminine (die).', test: w => endsWith(w, 'tion') },
  { id: 'sion', article: 'die', label: '-sion', description: 'Nouns ending in "-sion" are almost always feminine (die).', test: w => endsWith(w, 'sion') },
  { id: 'ling', article: 'der', label: '-ling', description: 'Nouns ending in "-ling" are almost always masculine (der).', test: w => endsWith(w, 'ling') && !isListed(w, NON_MASCULINE_LING) },
  { id: 'tat', article: 'die', label: '-tät', description: 'Nouns ending in "-tät" are almost always feminine (die).', test: w => endsWith(w, 'tät') },
  { id: 'enz', article: 'die', label: '-enz', description: 'Nouns ending in "-enz" are almost always feminine (die).', test: w => endsWith(w, 'enz') },
  { id: 'anz', article: 'die', label: '-anz', description: 'Nouns ending in "-anz" are almost always feminine (die).', test: w => endsWith(w, 'anz') && !isListed(w, NON_FEMININE_ANZ) },
  { id: 'ment2-ent', article: 'der', label: '-ent', description: 'Nouns ending in "-ent" (often people) are usually masculine (der).', test: w => endsWith(w, 'ent') },
  { id: 'ant', article: 'der', label: '-ant', description: 'Nouns ending in "-ant" are usually masculine (der).', test: w => endsWith(w, 'ant') && !isListed(w, NON_MASCULINE_ANT) },
  { id: 'ung', article: 'die', label: '-ung', description: 'Nouns ending in "-ung" are almost always feminine (die).', test: w => endsWith(w, 'ung') },
  { id: 'ur', article: 'die', label: '-ur', description: 'Nouns ending in "-ur" are usually feminine (die).', test: w => endsWith(w, 'ur') && !isListed(w, NON_FEMININE_UR) },
  { id: 'ie', article: 'die', label: '-ie', description: 'Nouns ending in "-ie" are usually feminine (die).', test: w => endsWith(w, 'ie') && !isListed(w, NON_FEMININE_IE) },
  { id: 'in', article: 'die', label: '-in', description: 'Nouns ending in "-in" are usually the feminine form of a role or animal (die), e.g. Lehrerin, Löwin.', test: w => endsWith(w, 'in') && !isListed(w, NON_FEMININE_IN) },
  { id: 'or', article: 'der', label: '-or', description: 'Nouns ending in "-or" are usually masculine (der).', test: w => endsWith(w, 'or') && !isListed(w, NON_MASCULINE_OR) },
  { id: 'ig', article: 'der', label: '-ig', description: 'Nouns ending in "-ig" are usually masculine (der).', test: w => endsWith(w, 'ig') },
  { id: 'um', article: 'das', label: '-um', description: 'Nouns ending in "-um" are usually neuter (das).', test: w => endsWith(w, 'um') && !isListed(w, NON_NEUTER_UM) },
  { id: 'o', article: 'das', label: '-o', description: 'Nouns ending in "-o" are usually neuter (das).', test: w => endsWith(w, 'o') && !isListed(w, NON_NEUTER_O) },
];

export const findGenderRule = (word: string): GenderRule | null =>
  GENDER_RULES.find(rule => rule.test(word)) || null;
