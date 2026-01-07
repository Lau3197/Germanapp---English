
import { ThemeContent, LanguageLevel } from '../../types';

export const educationContent: ThemeContent = {
  words: [
    { article: 'die', german: 'Schule', french: 'École', plural: 'Schulen', level: LanguageLevel.A1, subTheme: 'École', example: 'In die Schule gehen.' },
    { article: 'die', german: 'Universität', french: 'Université', plural: 'Universitäten', level: LanguageLevel.A2, subTheme: 'Université', example: 'An der Universität studieren.' },
    { article: 'der', german: 'Lehrer', french: 'Professeur', plural: 'Lehrer', level: LanguageLevel.A1, subTheme: 'École', example: 'Ein geduldiger Lehrer.' },
    { article: 'der', german: 'Schüler', french: 'Élève', plural: 'Schüler', level: LanguageLevel.A1, subTheme: 'École', example: 'Die Schüler lernen fleißig.' },
    { article: 'das', german: 'Studium', french: 'Études (supérieures)', plural: 'Studien', level: LanguageLevel.B1, subTheme: 'Université', example: 'Ein langes Studium.' },
    { article: 'die', german: 'Prüfung', french: 'Examen', plural: 'Prüfungen', level: LanguageLevel.A2, subTheme: 'École', example: 'Eine schwere Prüfung bestehen.' },
    { article: 'das', german: 'Fach', french: 'Matière / Discipline', plural: 'Fächer', level: LanguageLevel.A2, subTheme: 'École', example: 'Mein liebstes Fach ist Deutsch.' },
    { article: 'die', german: 'Hausaufgabe', french: 'Devoirs', plural: 'Hausaufgaben', level: LanguageLevel.A1, subTheme: 'École', example: 'Hausaufgaben machen.' },
    { article: 'der', german: 'Abschluss', french: 'Diplôme / Fin d\'études', plural: 'Abschlüsse', level: LanguageLevel.B1, subTheme: 'Université', example: 'Einen guten Abschluss machen.' },
    { article: 'das', german: 'Stipendium', french: 'Bourse d\'études', plural: 'Stipendien', level: LanguageLevel.B2, subTheme: 'Université', example: 'Ein Stipendium beantragen.' },
    { article: 'die', german: 'Sprache', french: 'Langue', plural: 'Sprachen', level: LanguageLevel.A1, subTheme: 'Langues', example: 'Fremdsprachen lernen.' },
    { article: 'der', german: 'Kurs', french: 'Cours', plural: 'Kurse', level: LanguageLevel.A1, subTheme: 'École', example: 'Einen Sprachkurs besuchen.' },
    { article: 'die', german: 'Note', french: 'Note', plural: 'Noten', level: LanguageLevel.A2, subTheme: 'École', example: 'Gute Noten bekommen.' },
    { article: 'das', german: 'Wissen', french: 'Savoir / Connaissance', plural: 'n/a', level: LanguageLevel.B1, subTheme: 'Université', example: 'Sein Wissen erweitern.' },
    { article: 'die', german: 'Bibliothek', french: 'Bibliothèque', plural: 'Bibliotheken', level: LanguageLevel.A2, subTheme: 'Université', example: 'Bücher in der Bibliothek ausleihen.' }
  ],
  phrases: [
    { german: 'Ich studiere Informatik an der TU Berlin.', french: 'J\'étudie l\'informatique à l\'université technique de Berlin.', context: 'Université' },
    { german: 'Hast du für den Test gelernt?', french: 'As-tu révisé pour le test ?', context: 'École' }
  ]
};