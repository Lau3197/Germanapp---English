
import { ThemeContent, LanguageLevel } from '../../types';

export const presentationContent: ThemeContent = {
  words: [
    // === SALUTATIONS (15) ===
    { article: '', german: 'Hallo', english: 'Hello', french: 'Bonjour / Salut', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Salutations', example: 'Hallo, wie geht es dir?' },
    { article: '', german: 'Guten Morgen', english: 'Good morning', french: 'Bonjour (le matin)', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Salutations', example: 'Guten Morgen! Hast du gut geschlafen?' },
    { article: '', german: 'Guten Tag', english: 'Good day / Hello', french: 'Bonjour', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Salutations', example: 'Guten Tag, Frau Müller!' },
    { article: '', german: 'Guten Abend', english: 'Good evening', french: 'Bonsoir', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Salutations', example: 'Guten Abend!' },
    { article: '', german: 'Willkommen', english: 'Welcome', french: 'Bienvenue', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Salutations', example: 'Herzlich willkommen!' },
    { article: '', german: 'Grüß Gott', english: 'Hello (South)', french: 'Bonjour (Allemagne du Sud/Autriche)', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Salutations', example: 'Grüß Gott!' },
    { article: '', german: 'Moin', english: 'Hello (North)', french: 'Salut (Allemagne du Nord)', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Salutations', example: 'Moin moin!' },
    { article: '', german: 'Servus', english: 'Hello (Austria/Bavaria)', french: 'Salut (Autriche/Bavière)', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Salutations', example: 'Servus!' },
    { article: 'die', german: 'Begrüßung', english: 'Greeting', french: 'Salutation', plural: 'Begrüßungen', level: LanguageLevel.A2, subTheme: 'Salutations', example: 'Die Begrüßung.' },
    { article: '', german: 'begrüßen', english: 'to greet / to welcome', french: 'saluer / accueillir', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Salutations', example: 'Ich begrüße die Gäste.' },

    // === ADIEUX (10) ===
    { article: '', german: 'Tschüss', english: 'Bye', french: 'Salut (au revoir)', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Adieux', example: 'Tschüss, bis dann!' },
    { article: '', german: 'Auf Wiedersehen', english: 'Goodbye (formal)', french: 'Au revoir (formel)', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Adieux', example: 'Auf Wiedersehen, Herr Schmidt!' },
    { article: '', german: 'Gute Nacht', english: 'Good night', french: 'Bonne nuit', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Adieux', example: 'Gute Nacht, schlaf gut.' },
    { article: '', german: 'Bis bald', english: 'See you soon', french: 'À bientôt', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Adieux', example: 'Bis bald!' },
    { article: '', german: 'Bis später', english: 'See you later', french: 'À plus tard', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Adieux', example: 'Wir sehen uns. Bis später!' },
    { article: '', german: 'Bis morgen', english: 'See you tomorrow', french: 'À demain', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Adieux', example: 'Bis morgen in der Schule.' },
    { article: '', german: 'Mach\'s gut', english: 'Take care', french: 'Porte-toi bien', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Adieux', example: 'Tschüss, mach\'s gut!' },
    { article: 'der', german: 'Abschied', english: 'Farewell / Departure', french: 'Adieu / Départ', plural: 'Abschiede', level: LanguageLevel.A2, subTheme: 'Adieux', example: 'Der Abschied.' },
    { article: '', german: 'verabschieden', english: 'to say goodbye', french: 'prendre congé / dire au revoir', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Adieux', example: 'Sich verabschieden.' },

    // === POLITESSE (10) ===
    { article: '', german: 'Bitte', english: 'Please / You\'re welcome', french: 'S\'il vous plaît / Je vous en prie', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Politesse', example: 'Bitte schön.' },
    { article: '', german: 'Danke', english: 'Thank you', french: 'Merci', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Politesse', example: 'Danke sehr!' },
    { article: '', german: 'Entschuldigung', english: 'Sorry / Excuse me', french: 'Pardon / Excusez-moi', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Politesse', example: 'Entschuldigung, darf ich vorbei?' },
    { article: '', german: 'Leid tun', english: 'to be sorry', french: 'regretter / être désolé', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Politesse', example: 'Es tut mir leid.' },
    { article: '', german: 'Gern geschehen', english: 'You\'re welcome / My pleasure', french: 'Avec plaisir / De rien', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Politesse', example: 'Danke! - Gern geschehen.' },
    { article: '', german: 'Wie bitte?', english: 'Pardon? / Excuse me?', french: 'Pardon ? / Comment ?', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Politesse', example: 'Wie bitte? Ich habe nicht verstanden.' },
    { article: 'der', german: 'Dank', english: 'Thanks / Gratitude', french: 'Remerciement / Gratitude', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Politesse', example: 'Vielen Dank.' },

    // === ESSENTIELS PRÉSENTATION (15) ===
    { article: 'der', german: 'Name', english: 'Name', french: 'Nom', plural: 'Namen', level: LanguageLevel.A1, subTheme: 'Présentation', example: 'Mein Name ist...' },
    { article: '', german: 'heißen', english: 'to be called', french: 's\'appeler', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Présentation', example: 'Ich heiße Anna.' },
    { article: '', german: 'sein', english: 'to be', french: 'être', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Présentation', example: 'Ich bin Paul.' },
    { article: '', german: 'kommen', english: 'to come', french: 'venir', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Présentation', example: 'Ich komme aus Frankreich.' },
    { article: '', german: 'wohnen', english: 'to live', french: 'habiter', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Présentation', example: 'Ich wohne in Berlin.' },
    { article: '', german: 'sprechen', english: 'to speak', french: 'parler', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Présentation', example: 'Ich spreche Deutsch.' },
    { article: '', german: 'lernen', english: 'to learn', french: 'apprendre', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Présentation', example: 'Ich lerne Deutsch.' },
    { article: '', german: 'vorstellen', english: 'to introduce', french: 'présenter', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Présentation', example: 'Darf ich mich vorstellen?' },
    { article: 'das', german: 'Deutsch', english: 'German (language)', french: 'Allemand (langue)', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Présentation', example: 'Mein Deutsch ist gut.' },
    { article: 'das', german: 'Französisch', english: 'French (language)', french: 'Français (langue)', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Présentation', example: 'Sie spricht Französisch.' },
    { article: '', german: 'Herr', english: 'Mr.', french: 'Monsieur', plural: 'Herren', level: LanguageLevel.A1, subTheme: 'Présentation', example: 'Das ist Herr Müller.' },
    { article: '', german: 'Frau', english: 'Ms. / Mrs. / Woman', french: 'Madame / Femme', plural: 'Frauen', level: LanguageLevel.A1, subTheme: 'Présentation', example: 'Das ist Frau Meier.' }
  ],
  phrases: [
    { german: 'Guten Tag!', english: 'Hello!', french: 'Bonjour !', italian: 'Buongiorno!', context: 'Salutations' },
    { german: 'Wie geht es Ihnen?', english: 'How are you?', french: 'Comment allez-vous ?', italian: 'Come sta?', context: 'Salutations' },
    { german: 'Mir geht es gut, danke.', english: 'I am fine, thank you.', french: 'Je vais bien, merci.', italian: 'Sto bene, grazie.', context: 'Salutations' },
    { german: 'Ich heiße...', english: 'My name is...', french: 'Je m\'appelle...', italian: 'Mi chiamo...', context: 'Présentation' },
    { german: 'Freut mich!', english: 'Nice to meet you!', french: 'Enchanté !', italian: 'Piacere!', context: 'Présentation' },
    { german: 'Auf Wiedersehen!', english: 'Goodbye!', french: 'Au revoir !', italian: 'Arrivederci!', context: 'Adieux' }
  ]
};
