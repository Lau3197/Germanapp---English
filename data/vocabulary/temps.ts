
import { ThemeContent, LanguageLevel } from '../../types';

export const tempsContent: ThemeContent = {
  words: [
    // === HEURE ===
    { article: 'die', german: 'Zeit', english: 'Time', plural: 'Zeiten', level: LanguageLevel.A1, subTheme: 'Heure', example: 'Ich habe keine Zeit.' },
    { article: 'die', german: 'Uhr', english: 'Clock / Watch', plural: 'Uhren', level: LanguageLevel.A1, subTheme: 'Heure', example: 'Wie viel Uhr ist es?' },
    { article: 'die', german: 'Stunde', english: 'Hour', plural: 'Stunden', level: LanguageLevel.A1, subTheme: 'Heure', example: 'Eine Stunde warten.' },
    { article: 'die', german: 'Minute', english: 'Minute', plural: 'Minuten', level: LanguageLevel.A1, subTheme: 'Heure', example: 'Fünf Minuten später.' },
    { article: 'die', german: 'Sekunde', english: 'Second', plural: 'Sekunden', level: LanguageLevel.A1, subTheme: 'Heure', example: 'In wenigen Sekunden.' },
    { article: 'der', german: 'Moment', english: 'Moment', plural: 'Momente', level: LanguageLevel.A1, subTheme: 'Heure', example: 'Einen Moment bitte.' },
    { article: 'der', german: 'Augenblick', english: 'Instant / Moment', plural: 'Augenblicke', level: LanguageLevel.A2, subTheme: 'Heure', example: 'Ein wunderbarer Augenblick.' },
    { article: '', german: 'halb', english: 'half', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Heure', example: 'Halb drei (14h30).' },
    { article: '', german: 'Viertel', english: 'quarter', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Heure', example: 'Viertel nach zwei.' },
    { article: 'der', german: 'Mittag', english: 'Noon', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Heure', example: 'Um Mittag essen.' },
    { article: 'die', german: 'Mitternacht', english: 'Midnight', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Heure', example: 'Um Mitternacht schlafen.' },

    // === JOUR ===
    { article: 'der', german: 'Tag', english: 'Day', plural: 'Tage', level: LanguageLevel.A1, subTheme: 'Jour', example: 'Ein schöner Tag.' },
    { article: 'der', german: 'Morgen', english: 'Morning', plural: 'Morgen', level: LanguageLevel.A1, subTheme: 'Jour', example: 'Am Morgen frühstücken.' },
    { article: 'der', german: 'Vormittag', english: 'Morning / Before noon', plural: 'Vormittage', level: LanguageLevel.A2, subTheme: 'Jour', example: 'Am Vormittag arbeiten.' },
    { article: 'der', german: 'Nachmittag', english: 'Afternoon', plural: 'Nachmittage', level: LanguageLevel.A1, subTheme: 'Jour', example: 'Am Nachmittag Sport machen.' },
    { article: 'der', german: 'Abend', english: 'Evening', plural: 'Abende', level: LanguageLevel.A1, subTheme: 'Jour', example: 'Am Abend fernsehen.' },
    { article: 'die', german: 'Nacht', english: 'Night', plural: 'Nächte', level: LanguageLevel.A1, subTheme: 'Jour', example: 'In der Nacht schlafen.' },
    { article: '', german: 'heute', english: 'today', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Jour', example: 'Heute ist Montag.' },
    { article: '', german: 'morgen', english: 'tomorrow', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Jour', example: 'Bis morgen!' },
    { article: '', german: 'gestern', english: 'yesterday', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Jour', example: 'Gestern war Sonntag.' },
    { article: '', german: 'übermorgen', english: 'the day after tomorrow', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Jour', example: 'Übermorgen ist Mittwoch.' },
    { article: '', german: 'vorgestern', english: 'the day before yesterday', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Jour', example: 'Vorgestern war Samstag.' },

    // === JOURS DE LA SEMAINE ===
    { article: 'die', german: 'Woche', english: 'Week', plural: 'Wochen', level: LanguageLevel.A1, subTheme: 'Semaine', example: 'Diese Woche.' },
    { article: 'der', german: 'Montag', english: 'Monday', plural: 'Montage', level: LanguageLevel.A1, subTheme: 'Semaine', example: 'Am Montag arbeiten.' },
    { article: 'der', german: 'Dienstag', english: 'Tuesday', plural: 'Dienstage', level: LanguageLevel.A1, subTheme: 'Semaine', example: 'Dienstag ist der zweite Tag.' },
    { article: 'der', german: 'Mittwoch', english: 'Wednesday', plural: 'Mittwoche', level: LanguageLevel.A1, subTheme: 'Semaine', example: 'Mittwoch ist Wochenmitte.' },
    { article: 'der', german: 'Donnerstag', english: 'Thursday', plural: 'Donnerstage', level: LanguageLevel.A1, subTheme: 'Semaine', example: 'Am Donnerstag Sport.' },
    { article: 'der', german: 'Freitag', english: 'Friday', plural: 'Freitage', level: LanguageLevel.A1, subTheme: 'Semaine', example: 'Freitag ist vor dem Wochenende.' },
    { article: 'der', german: 'Samstag', english: 'Saturday', plural: 'Samstage', level: LanguageLevel.A1, subTheme: 'Semaine', example: 'Am Samstag einkaufen.' },
    { article: 'der', german: 'Sonnabend', english: 'Saturday (North / Alternate)', plural: 'Sonnabende', level: LanguageLevel.A2, subTheme: 'Semaine', example: 'Sonnabend im Norden.' },
    { article: 'der', german: 'Sonntag', english: 'Sunday', plural: 'Sonntage', level: LanguageLevel.A1, subTheme: 'Semaine', example: 'Am Sonntag ausruhen.' },
    { article: 'das', german: 'Wochenende', english: 'Weekend', plural: 'Wochenenden', level: LanguageLevel.A1, subTheme: 'Semaine', example: 'Schönes Wochenende!' },
    { article: 'der', german: 'Wochentag', english: 'Weekday', plural: 'Wochentage', level: LanguageLevel.A2, subTheme: 'Semaine', example: 'An Wochentagen arbeiten.' },

    // === MOIS ===
    { article: 'der', german: 'Monat', english: 'Month', plural: 'Monate', level: LanguageLevel.A1, subTheme: 'Mois', example: 'Diesen Monat.' },
    { article: 'der', german: 'Januar', english: 'January', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Mois', example: 'Im Januar ist es kalt.' },
    { article: 'der', german: 'Februar', english: 'February', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Mois', example: 'Der Februar ist kurz.' },
    { article: 'der', german: 'März', english: 'March', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Mois', example: 'Im März beginnt der Frühling.' },
    { article: 'der', german: 'April', english: 'April', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Mois', example: 'April, April!' },
    { article: 'der', german: 'Mai', english: 'May', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Mois', example: 'Im Mai blühen die Blumen.' },
    { article: 'der', german: 'Juni', english: 'June', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Mois', example: 'Im Juni beginnen die Ferien.' },
    { article: 'der', german: 'Juli', english: 'July', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Mois', example: 'Der Juli ist sehr heiß.' },
    { article: 'der', german: 'August', english: 'August', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Mois', example: 'Im August Urlaub machen.' },
    { article: 'der', german: 'September', english: 'September', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Mois', example: 'Die Schule beginnt im September.' },
    { article: 'der', german: 'Oktober', english: 'October', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Mois', example: 'Oktoberfest in München.' },
    { article: 'der', german: 'November', english: 'November', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Mois', example: 'Im November wird es dunkel.' },
    { article: 'der', german: 'Dezember', english: 'December', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Mois', example: 'Weihnachten im Dezember.' },

    // === SAISONS ===
    { article: 'die', german: 'Jahreszeit', english: 'Season', plural: 'Jahreszeiten', level: LanguageLevel.A1, subTheme: 'Saisons', example: 'Vier Jahreszeiten.' },
    { article: 'der', german: 'Frühling', english: 'Spring', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Saisons', example: 'Im Frühling blühen die Blumen.' },
    { article: 'der', german: 'Sommer', english: 'Summer', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Saisons', example: 'Der Sommer ist heiß.' },
    { article: 'der', german: 'Herbst', english: 'Autumn', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Saisons', example: 'Im Herbst fallen die Blätter.' },
    { article: 'der', german: 'Winter', english: 'Winter', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Saisons', example: 'Im Winter schneit es.' },

    // === ANNÉE / DURÉE ===
    { article: 'das', german: 'Jahr', english: 'Year', plural: 'Jahre', level: LanguageLevel.A1, subTheme: 'Durée', example: 'Dieses Jahr.' },
    { article: 'das', german: 'Jahrzehnt', english: 'Decade', plural: 'Jahrzehnte', level: LanguageLevel.B1, subTheme: 'Durée', example: 'Ein Jahrzehnt dauert zehn Jahre.' },
    { article: 'das', german: 'Jahrhundert', english: 'Century', plural: 'Jahrhunderte', level: LanguageLevel.A2, subTheme: 'Durée', example: 'Das 21. Jahrhundert.' },
    { article: 'die', german: 'Dauer', english: 'Duration', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Durée', example: 'Die Dauer des Films.' },
    { article: 'die', german: 'Zukunft', english: 'Future', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Durée', example: 'In der Zukunft.' },
    { article: 'die', german: 'Vergangenheit', english: 'Past', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Durée', example: 'In der Vergangenheit.' },
    { article: 'die', german: 'Gegenwart', english: 'Present', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Durée', example: 'Im Hier und Jetzt.' },

    // === FÊTES ===
    { article: 'das', german: 'Weihnachten', english: 'Christmas', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Fêtes', example: 'Frohe Weihnachten!' },
    { article: 'das', german: 'Ostern', english: 'Easter', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Fêtes', example: 'Frohe Ostern!' },
    { article: 'das', german: 'Silvester', english: 'New Year\'s Eve', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Fêtes', example: 'Silvester feiern.' },
    { article: 'das', german: 'Neujahr', english: 'New Year\'s Day', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Fêtes', example: 'Frohes neues Jahr!' },
    { article: 'der', german: 'Geburtstag', english: 'Birthday', plural: 'Geburtstage', level: LanguageLevel.A1, subTheme: 'Fêtes', example: 'Herzlichen Glückwunsch zum Geburtstag!' },
    { article: 'der', german: 'Feiertag', english: 'Public holiday / Holiday', plural: 'Feiertage', level: LanguageLevel.A1, subTheme: 'Fêtes', example: 'Morgen ist ein Feiertag.' },
    { article: 'der', german: 'Valentinstag', english: 'Valentine\'s Day', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Fêtes', example: 'Am Valentinstag Blumen schenken.' },
    { article: 'der', german: 'Muttertag', english: 'Mother\'s Day', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Fêtes', example: 'Am Muttertag Danke sagen.' },
    { article: 'der', german: 'Vatertag', english: 'Father\'s Day', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Fêtes', example: 'Am Vatertag einen Ausflug machen.' },

    // === FRÉQUENCE ===
    { article: '', german: 'immer', english: 'always', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Fréquence', example: 'Ich bin immer pünktlich.' },
    { article: '', german: 'oft', english: 'often', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Fréquence', example: 'Ich gehe oft ins Kino.' },
    { article: '', german: 'manchmal', english: 'sometimes', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Fréquence', example: 'Manchmal bin ich müde.' },
    { article: '', german: 'selten', english: 'rarely / seldom', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Fréquence', example: 'Ich esse selten Fleisch.' },
    { article: '', german: 'nie', english: 'never', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Fréquence', example: 'Ich bin nie spät.' },
    { article: '', german: 'täglich', english: 'daily', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Fréquence', example: 'Täglich Sport machen.' },
    { article: '', german: 'wöchentlich', english: 'weekly', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Fréquence', example: 'Wöchentlich einkaufen.' },
    { article: '', german: 'monatlich', english: 'monthly', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Fréquence', example: 'Monatlich bezahlen.' },
    { article: '', german: 'jährlich', english: 'yearly / annually', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Fréquence', example: 'Jährlich in Urlaub fahren.' },

    // === EXPRESSIONS TEMPORELLES ===
    { article: '', german: 'früh', english: 'early', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Expressions', example: 'Früh aufstehen.' },
    { article: '', german: 'spät', english: 'late', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Expressions', example: 'Spät ins Bett gehen.' },
    { article: '', german: 'pünktlich', english: 'on time / punctual', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Expressions', example: 'Pünktlich ankommen.' },
    { article: '', german: 'sofort', english: 'immediately', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Expressions', example: 'Sofort kommen!' },
    { article: '', german: 'bald', english: 'soon', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Expressions', example: 'Bis bald!' },
    { article: '', german: 'gerade', english: 'just now', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Expressions', example: 'Ich bin gerade angekommen.' },
    { article: '', german: 'vorher', english: 'before', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Expressions', example: 'Vorher essen.' },
    { article: '', german: 'nachher', english: 'afterwards / later', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Expressions', example: 'Nachher einkaufen.' },
    { article: '', german: 'zuerst', english: 'first', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Expressions', example: 'Zuerst die Hausaufgaben.' },
    { article: '', german: 'dann', english: 'then', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Expressions', example: 'Dann gehen wir.' },
    { article: '', german: 'schließlich', english: 'finally', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Expressions', example: 'Schließlich bin ich fertig.' }
  ],
  phrases: [
    // L'heure
    { german: 'Wie spät ist es?', english: 'What time is it?', context: 'Heure' },
    { german: 'Es ist acht Uhr.', english: 'It is eight o\'clock.', context: 'Heure' },
    { german: 'Es ist halb neun.', english: 'It is half past eight.', context: 'Heure' },
    { german: 'Es ist Viertel nach zehn.', english: 'It is a quarter past ten.', context: 'Heure' },
    { german: 'Es ist Viertel vor zwölf.', english: 'It is a quarter to twelve.', context: 'Heure' },

    // Rendez-vous
    { german: 'Wann treffen wir uns?', english: 'When are we meeting?', context: 'Rendez-vous' },
    { german: 'Um wie viel Uhr?', english: 'At what time?', context: 'Rendez-vous' },
    { german: 'Ich bin in fünf Minuten da.', english: 'I\'ll be there in five minutes.', context: 'Rendez-vous' },
    { german: 'Tut mir leid, ich bin zu spät.', english: 'Sorry, I am late.', context: 'Rendez-vous' },

    // Durée
    { german: 'Wie lange dauert das?', english: 'How long does that take?', context: 'Durée' },
    { german: 'Das dauert ungefähr eine Stunde.', english: 'That takes about an hour.', context: 'Durée' },

    // Proverbes
    { german: 'Pünktlichkeit ist eine Zier.', english: 'Punctuality is a virtue.', context: 'Proverbe' },
    { german: 'Alles zu seiner Zeit.', english: 'Everything in its own time.', context: 'Proverbe' },
    { german: 'Die Zeit vergeht wie im Flug.', english: 'Time flies.', context: 'Proverbe' }
  ]
};
