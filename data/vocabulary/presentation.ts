
import { ThemeContent, LanguageLevel } from '../../types';

export const presentationContent: ThemeContent = {
  words: [
    // === SALUTATIONS (15) ===
    { article: '', german: 'Hallo', english: 'Hello', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Salutations', example: 'Hallo, wie geht es dir?' },
    { article: '', german: 'Guten Morgen', english: 'Good morning', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Salutations', example: 'Guten Morgen! Hast du gut geschlafen?' },
    { article: '', german: 'Guten Tag', english: 'Good day / Hello', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Salutations', example: 'Guten Tag, Frau Müller!' },
    { article: '', german: 'Guten Abend', english: 'Good evening', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Salutations', example: 'Guten Abend!' },
    { article: '', german: 'Willkommen', english: 'Welcome', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Salutations', example: 'Herzlich willkommen!' },
    { article: '', german: 'Grüß Gott', english: 'Hello (South)', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Salutations', example: 'Grüß Gott!' },
    { article: '', german: 'Moin', english: 'Hello (North)', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Salutations', example: 'Moin moin!' },
    { article: '', german: 'Servus', english: 'Hello (Austria/Bavaria)', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Salutations', example: 'Servus!' },
    { article: 'die', german: 'Begrüßung', english: 'Greeting', plural: 'Begrüßungen', level: LanguageLevel.A2, subTheme: 'Salutations', example: 'Die Begrüßung.' },
    { article: '', german: 'begrüßen', english: 'to greet / to welcome', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Salutations', example: 'Ich begrüße die Gäste.' },

    // === ADIEUX (10) ===
    { article: '', german: 'Tschüss', english: 'Bye', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Adieux', example: 'Tschüss, bis dann!' },
    { article: '', german: 'Auf Wiedersehen', english: 'Goodbye (formal)', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Adieux', example: 'Auf Wiedersehen, Herr Schmidt!' },
    { article: '', german: 'Gute Nacht', english: 'Good night', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Adieux', example: 'Gute Nacht, schlaf gut.' },
    { article: '', german: 'Bis bald', english: 'See you soon', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Adieux', example: 'Bis bald!' },
    { article: '', german: 'Bis später', english: 'See you later', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Adieux', example: 'Wir sehen uns. Bis später!' },
    { article: '', german: 'Bis morgen', english: 'See you tomorrow', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Adieux', example: 'Bis morgen in der Schule.' },
    { article: '', german: 'Mach\'s gut', english: 'Take care', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Adieux', example: 'Tschüss, mach\'s gut!' },
    { article: 'der', german: 'Abschied', english: 'Farewell / Departure', plural: 'Abschiede', level: LanguageLevel.A2, subTheme: 'Adieux', example: 'Der Abschied.' },
    { article: '', german: 'verabschieden', english: 'to say goodbye', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Adieux', example: 'Sich verabschieden.' },

    // === POLITESSE (10) ===
    { article: '', german: 'Bitte', english: 'Please / You\'re welcome', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Politesse', example: 'Bitte schön.' },
    { article: '', german: 'Danke', english: 'Thank you', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Politesse', example: 'Danke sehr!' },
    { article: '', german: 'Entschuldigung', english: 'Sorry / Excuse me', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Politesse', example: 'Entschuldigung, darf ich vorbei?' },
    { article: '', german: 'Leid tun', english: 'to be sorry', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Politesse', example: 'Es tut mir leid.' },
    { article: '', german: 'Gern geschehen', english: 'You\'re welcome / My pleasure', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Politesse', example: 'Danke! - Gern geschehen.' },
    { article: '', german: 'Wie bitte?', english: 'Pardon? / Excuse me?', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Politesse', example: 'Wie bitte? Ich habe nicht verstanden.' },
    { article: 'der', german: 'Dank', english: 'Thanks / Gratitude', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Politesse', example: 'Vielen Dank.' },

    // === ESSENTIELS PRÉSENTATION (15) ===
    { article: 'der', german: 'Name', english: 'Name', plural: 'Namen', level: LanguageLevel.A1, subTheme: 'Présentation', example: 'Mein Name ist...' },
    { article: '', german: 'heißen', english: 'to be called', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Présentation', example: 'Ich heiße Anna.' },
    { article: '', german: 'sein', english: 'to be', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Présentation', example: 'Ich bin Paul.' },
    { article: '', german: 'kommen', english: 'to come', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Présentation', example: 'Ich komme aus Frankreich.' },
    { article: '', german: 'wohnen', english: 'to live', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Présentation', example: 'Ich wohne in Berlin.' },
    { article: '', german: 'sprechen', english: 'to speak', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Présentation', example: 'Ich spreche Deutsch.' },
    { article: '', german: 'lernen', english: 'to learn', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Présentation', example: 'Ich lerne Deutsch.' },
    { article: '', german: 'vorstellen', english: 'to introduce', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Présentation', example: 'Darf ich mich vorstellen?' },
    { article: 'das', german: 'Deutsch', english: 'German (language)', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Présentation', example: 'Mein Deutsch ist gut.' },
    { article: 'das', german: 'Französisch', english: 'French (language)', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Présentation', example: 'Sie spricht Französisch.' },
    { article: '', german: 'Herr', english: 'Mr.', plural: 'Herren', level: LanguageLevel.A1, subTheme: 'Présentation', example: 'Das ist Herr Müller.' },
    { article: '', german: 'Frau', english: 'Ms. / Mrs. / Woman', plural: 'Frauen', level: LanguageLevel.A1, subTheme: 'Présentation', example: 'Das ist Frau Meier.' }
  ],
  phrases: [
    { german: 'Guten Tag!', english: 'Hello!', context: 'Salutations' },
    { german: 'Wie geht es Ihnen?', english: 'How are you?', context: 'Salutations' },
    { german: 'Mir geht es gut, danke.', english: 'I am fine, thank you.', context: 'Salutations' },
    { german: 'Ich heiße...', english: 'My name is...', context: 'Présentation' },
    { german: 'Freut mich!', english: 'Nice to meet you!', context: 'Présentation' },
    { german: 'Auf Wiedersehen!', english: 'Goodbye!', context: 'Adieux' }
  ]
};
