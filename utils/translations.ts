import { AppTheme } from '../types';

type Translatable = {
  english?: string;
  french?: string;
  italian?: string;
};

export type TranslationLanguage = 'english' | 'french' | 'italian';

// Each app theme is bound to exactly one translation language. This table is the
// single source of truth: views must call getThemeLanguage rather than re-deriving
// the mapping, which is how Vocabulary, Review and Der/Die/Das drifted into three
// different rules (Der/Die/Das was still defaulting to French).
const THEME_LANGUAGE: Record<AppTheme, TranslationLanguage> = {
  classic: 'french',
  panda: 'english',
  cane: 'italian'
};

// Takes a loose string on purpose: the active theme is restored from localStorage,
// so an unknown or stale value is possible at runtime. Anything unrecognised falls
// back to English rather than showing the raw key.
export const getThemeLanguage = (theme?: string): TranslationLanguage =>
  THEME_LANGUAGE[theme as AppTheme] ?? 'english';

export const getTranslation = (
  item: Translatable,
  language: TranslationLanguage = 'english'
): string => {
  if (language === 'italian') {
    return item.italian || item.english || item.french || '';
  }

  if (language === 'french') {
    return item.french || item.english || '';
  }

  return item.english || item.french || '';
};
