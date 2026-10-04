
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
  italian?: string;
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
  // Phrases carry their Italian inline rather than through the
  // italianVocabularyTranslations overlay, whose keys embed the English text and
  // therefore break whenever a translation is edited. Words still use the overlay.
  italian?: string;
  // Word-for-word rendering, set only on figurative phrases where the idiomatic
  // translation hides the German image ("das Fass zum Überlaufen bringen").
  // Literal sentences leave this undefined — the translation already is literal.
  literal?: string;
  context: string;
}

export interface Theme {
  id: string;
  name: string;
  icon: string;
  description: string;
  subThemes?: string[]; // List of available sub-themes
}

export type MainTab = 'dashboard' | 'vocabulary' | 'gender' | 'structures' | 'nomen-verben' | 'verben-mit-praepositionen' | 'grammar' | 'grammar-exercises' | 'tables' | 'expressions' | 'revision' | 'exam' | 'italian';
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

export interface GrammarExercise {
  id: string;
  topicId: string;
  level: LanguageLevel;
  prompt: string;
  answer: string;
  acceptedAnswers?: string[];
  explanation: string;
  stage?: 'guided' | 'controlled' | 'independent' | 'contrast' | 'challenge';
}

export interface GrammarLevel {
  level: LanguageLevel;
  title: string;
  description: string;
  sections: GrammarSection[];
}
