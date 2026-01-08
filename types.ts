
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
  french: string;
  article: 'der' | 'die' | 'das' | '';
  plural: string;
  example: string;
  level: LanguageLevel;
  subTheme?: string; // Optionnel pour le filtrage par sous-thème
}

export interface Phrase {
  german: string;
  french: string;
  context: string;
}

export interface Theme {
  id: string;
  name: string;
  icon: string;
  description: string;
  subThemes?: string[]; // Liste des sous-thèmes disponibles
}

export type MainTab = 'vocabulary' | 'nomen-verben' | 'grammar' | 'stats' | 'tables' | 'expressions';
export type ViewMode = 'themes' | 'learn' | 'quiz' | 'phrases' | 'trainer';

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
