
import { ThemeContent, LanguageLevel } from '../../types';

export const presentationContent: ThemeContent = {
  words: [
    // === SALUTATIONS (15) ===
    { article: '', german: 'Hallo', french: 'Salut / Bonjour', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Salutations', example: 'Hallo, wie geht es dir?' },
    { article: '', german: 'Guten Morgen', french: 'Bonjour (matin)', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Salutations', example: 'Guten Morgen! Hast du gut geschlafen?' },
    { article: '', german: 'Guten Tag', french: 'Bonjour (journée)', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Salutations', example: 'Guten Tag, Frau Müller!' },
    { article: '', german: 'Guten Abend', french: 'Bonsoir', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Salutations', example: 'Guten Abend!' },
    { article: '', german: 'Willkommen', french: 'Bienvenue', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Salutations', example: 'Herzlich willkommen!' },
    { article: '', german: 'Grüß Gott', french: 'Bonjour (Sud)', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Salutations', example: 'Grüß Gott!' },
    { article: '', german: 'Moin', french: 'Salut (Nord)', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Salutations', example: 'Moin moin!' },
    { article: '', german: 'Servus', french: 'Salut (Autriche/Bavière)', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Salutations', example: 'Servus!' },
    { article: 'die', german: 'Begrüßung', french: 'Salutation', plural: 'Begrüßungen', level: LanguageLevel.A2, subTheme: 'Salutations', example: 'Die Begrüßung.' },
    { article: '', german: 'begrüßen', french: 'saluer / accueillir', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Salutations', example: 'Ich begrüße die Gäste.' },

    // === ADIEUX (10) ===
    { article: '', german: 'Tschüss', french: 'Salut / Au revoir', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Adieux', example: 'Tschüss, bis dann!' },
    { article: '', german: 'Auf Wiedersehen', french: 'Au revoir (formel)', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Adieux', example: 'Auf Wiedersehen, Herr Schmidt!' },
    { article: '', german: 'Gute Nacht', french: 'Bonne nuit', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Adieux', example: 'Gute Nacht, schlaf gut.' },
    { article: '', german: 'Bis bald', french: 'À bientôt', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Adieux', example: 'Bis bald!' },
    { article: '', german: 'Bis später', french: 'À plus tard', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Adieux', example: 'Wir sehen uns. Bis später!' },
    { article: '', german: 'Bis morgen', french: 'À demain', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Adieux', example: 'Bis morgen in der Schule.' },
    { article: '', german: 'Mach\'s gut', french: 'Porte-toi bien', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Adieux', example: 'Tschüss, mach\'s gut!' },
    { article: 'der', german: 'Abschied', french: 'Adieu / Départ', plural: 'Abschiede', level: LanguageLevel.A2, subTheme: 'Adieux', example: 'Der Abschied.' },
    { article: '', german: 'verabschieden', french: 'dire au revoir', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Adieux', example: 'Sich verabschieden.' },

    // === POLITESSE (10) ===
    { article: '', german: 'Bitte', french: 'S\'il vous plaît / Je t\'en prie', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Politesse', example: 'Bitte schön.' },
    { article: '', german: 'Danke', french: 'Merci', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Politesse', example: 'Danke sehr!' },
    { article: '', german: 'Entschuldigung', french: 'Pardon / Excusez-moi', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Politesse', example: 'Entschuldigung, darf ich vorbei?' },
    { article: '', german: 'Leid tun', french: 'Désolé (verbe)', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Politesse', example: 'Es tut mir leid.' },
    { article: '', german: 'Gern geschehen', french: 'De rien / Avec plaisir', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Politesse', example: 'Danke! - Gern geschehen.' },
    { article: '', german: 'Wie bitte?', french: 'Pardon ? / Comment ?', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Politesse', example: 'Wie bitte? Ich habe nicht verstanden.' },
    { article: 'der', german: 'Dank', french: 'Remerciement', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Politesse', example: 'Vielen Dank.' },

    // === ESSENTIELS PRÉSENTATION (15) ===
    { article: 'der', german: 'Name', french: 'Nom', plural: 'Namen', level: LanguageLevel.A1, subTheme: 'Présentation', example: 'Mein Name ist...' },
    { article: '', german: 'heißen', french: 's\'appeler', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Présentation', example: 'Ich heiße Anna.' },
    { article: '', german: 'sein', french: 'être', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Présentation', example: 'Ich bin Paul.' },
    { article: '', german: 'kommen', french: 'venir', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Présentation', example: 'Ich komme aus Frankreich.' },
    { article: '', german: 'wohnen', french: 'habiter', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Présentation', example: 'Ich wohne in Berlin.' },
    { article: '', german: 'sprechen', french: 'parler', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Présentation', example: 'Ich spreche Deutsch.' },
    { article: '', german: 'lernen', french: 'apprendre', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Présentation', example: 'Ich lerne Deutsch.' },
    { article: '', german: 'vorstellen', french: 'présenter', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Présentation', example: 'Darf ich mich vorstellen?' },
    { article: 'das', german: 'Deutsch', french: 'Allemand (langue)', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Présentation', example: 'Mein Deutsch ist gut.' },
    { article: 'das', german: 'Französisch', french: 'Français (langue)', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Présentation', example: 'Sie spricht Französisch.' },
    { article: '', german: 'Herr', french: 'Monsieur', plural: 'Herren', level: LanguageLevel.A1, subTheme: 'Présentation', example: 'Das ist Herr Müller.' },
    { article: '', german: 'Frau', french: 'Madame', plural: 'Frauen', level: LanguageLevel.A1, subTheme: 'Présentation', example: 'Das ist Frau Meier.' }
  ],
  phrases: [
    { german: 'Guten Tag!', french: 'Bonjour !', context: 'Salutations' },
    { german: 'Wie geht es Ihnen?', french: 'Comment allez-vous ?', context: 'Salutations' },
    { german: 'Mir geht es gut, danke.', french: 'Je vais bien, merci.', context: 'Salutations' },
    { german: 'Ich heiße...', french: 'Je m\'appelle...', context: 'Présentation' },
    { german: 'Freut mich!', french: 'Enchanté(e) !', context: 'Présentation' },
    { german: 'Auf Wiedersehen!', french: 'Au revoir !', context: 'Adieux' }
  ]
};
