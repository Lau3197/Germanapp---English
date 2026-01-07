
import { ThemeContent, LanguageLevel } from '../../types';

export const presentationContent: ThemeContent = {
  words: [
    { article: '', german: 'Hallo', french: 'Salut / Bonjour', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Salutations', example: 'Hallo, wie geht es dir?' },
    { article: 'der', german: 'Vorname', french: 'Prénom', plural: 'Vornamen', level: LanguageLevel.A1, subTheme: 'Identité', example: 'Mein Vorname ist Thomas.' },
    { article: 'der', german: 'Nachname', french: 'Nom de famille', plural: 'Nachnamen', level: LanguageLevel.A1, subTheme: 'Identité', example: 'Wie schreibt man Ihren Nachnamen?' },
    { article: '', german: 'Willkommen', french: 'Bienvenue', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Salutations', example: 'Herzlich willkommen in Berlin!' },
    { article: 'die', german: 'Begrüßung', french: 'Salutation / Accueil', plural: 'Begrüßungen', level: LanguageLevel.A2, subTheme: 'Salutations', example: 'Die Begrüßung war sehr herzlich.' }
  ],
  phrases: [
    { german: 'Freut mich, Sie kennenzulernen.', french: 'Ravi de vous rencontrer.', context: 'Présentation' },
    { german: 'Wie war dein Tag?', french: 'Comment s\'est passée ta journée ?', context: 'Social' }
  ]
};
