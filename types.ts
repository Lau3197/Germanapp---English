
export enum LanguageLevel {
  A1 = 'A1',
  A2 = 'A2',
  B1 = 'B1',
  B2 = 'B2',
  C1 = 'C1',
  C2 = 'C2'
}

export interface GermanWord {
  german: string;
  english?: string;
  french?: string;
  article: 'der' | 'die' | 'das' | '';
  plural: string;
  example: string;
  level: LanguageLevel;
  subTheme?: string; // Optional, used for filtering by sub-theme
}

export interface Phrase {
  german: string;
  english?: string;
  french?: string;
  context: string;
}

export interface Theme {
  id: string;
  name: string;
  icon: string;
  description: string;
  subThemes?: string[]; // List of available sub-themes
}

export type MainTab = 'dashboard' | 'vocabulary' | 'gender' | 'structures' | 'nomen-verben' | 'verben-mit-praepositionen' | 'grammar' | 'tables' | 'expressions' | 'revision' | 'exam' | 'italian';
export type ViewMode = 'themes' | 'learn' | 'quiz' | 'phrases' | 'trainer';
export type AppTheme = 'classic' | 'panda' | 'cane';

export interface ThemeContent {
  words: GermanWord[];
  phrases: Phrase[];
}

export interface GrammarSection {
  title: string;
  topics: {
    id: string;
    title: string;
    content: string;
    examples?: { de: string; fr: string; note?: string }[];
  }[];
}

export interface GrammarLevel {
  level: LanguageLevel;
  title: string;
  description: string;
  sections: GrammarSection[];
}
