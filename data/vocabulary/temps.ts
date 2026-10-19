
import { ThemeContent, LanguageLevel } from '../../types';

export const tempsContent: ThemeContent = {
  words: [
    // === HEURE ===
    { article: 'die', german: 'Zeit', english: 'Time', french: 'Temps', plural: 'Zeiten', level: LanguageLevel.A1, subTheme: 'Heure', example: 'Ich habe keine Zeit.' },
    { article: 'die', german: 'Uhr', english: 'Clock / Watch', french: 'Horloge / Montre', plural: 'Uhren', level: LanguageLevel.A1, subTheme: 'Heure', example: 'Wie viel Uhr ist es?' },
    { article: 'die', german: 'Stunde', english: 'Hour', french: 'Heure', plural: 'Stunden', level: LanguageLevel.A1, subTheme: 'Heure', example: 'Eine Stunde warten.' },
    { article: 'die', german: 'Minute', english: 'Minute', french: 'Minute', plural: 'Minuten', level: LanguageLevel.A1, subTheme: 'Heure', example: 'Fünf Minuten später.' },
    { article: 'die', german: 'Sekunde', english: 'Second', french: 'Seconde', plural: 'Sekunden', level: LanguageLevel.A1, subTheme: 'Heure', example: 'In wenigen Sekunden.' },
    { article: 'der', german: 'Moment', english: 'Moment', french: 'Moment', plural: 'Momente', level: LanguageLevel.A1, subTheme: 'Heure', example: 'Einen Moment bitte.' },
    { article: 'der', german: 'Augenblick', english: 'Instant / Moment', french: 'Instant', plural: 'Augenblicke', level: LanguageLevel.A2, subTheme: 'Heure', example: 'Ein wunderbarer Augenblick.' },
    { article: '', german: 'halb', english: 'half', french: 'demi', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Heure', example: 'Halb drei (14h30).' },
    { article: '', german: 'Viertel', english: 'quarter', french: 'quart', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Heure', example: 'Viertel nach zwei.' },
    { article: 'der', german: 'Mittag', english: 'Noon', french: 'Midi', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Heure', example: 'Um Mittag essen.' },
    { article: 'die', german: 'Mitternacht', english: 'Midnight', french: 'Minuit', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Heure', example: 'Um Mitternacht schlafen.' },

    // === JOUR ===
    { article: 'der', german: 'Tag', english: 'Day', french: 'Jour', plural: 'Tage', level: LanguageLevel.A1, subTheme: 'Jour', example: 'Ein schöner Tag.' },
    { article: 'der', german: 'Morgen', english: 'Morning', french: 'Matin', plural: 'Morgen', level: LanguageLevel.A1, subTheme: 'Jour', example: 'Am Morgen frühstücken.' },
    { article: 'der', german: 'Vormittag', english: 'Morning / Before noon', french: 'Matinée', plural: 'Vormittage', level: LanguageLevel.A2, subTheme: 'Jour', example: 'Am Vormittag arbeiten.' },
    { article: 'der', german: 'Nachmittag', english: 'Afternoon', french: 'Après-midi', plural: 'Nachmittage', level: LanguageLevel.A1, subTheme: 'Jour', example: 'Am Nachmittag Sport machen.' },
    { article: 'der', german: 'Abend', english: 'Evening', french: 'Soir', plural: 'Abende', level: LanguageLevel.A1, subTheme: 'Jour', example: 'Am Abend fernsehen.' },
    { article: 'die', german: 'Nacht', english: 'Night', french: 'Nuit', plural: 'Nächte', level: LanguageLevel.A1, subTheme: 'Jour', example: 'In der Nacht schlafen.' },
    { article: '', german: 'heute', english: 'today', french: 'aujourd\'hui', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Jour', example: 'Heute ist Montag.' },
    { article: '', german: 'morgen', english: 'tomorrow', french: 'demain', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Jour', example: 'Bis morgen!' },
    { article: '', german: 'gestern', english: 'yesterday', french: 'hier', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Jour', example: 'Gestern war Sonntag.' },
    { article: '', german: 'übermorgen', english: 'the day after tomorrow', french: 'après-demain', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Jour', example: 'Übermorgen ist Mittwoch.' },
    { article: '', german: 'vorgestern', english: 'the day before yesterday', french: 'avant-hier', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Jour', example: 'Vorgestern war Samstag.' },

    // === JOURS DE LA SEMAINE ===
    { article: 'die', german: 'Woche', english: 'Week', french: 'Semaine', plural: 'Wochen', level: LanguageLevel.A1, subTheme: 'Semaine', example: 'Diese Woche.' },
    { article: 'der', german: 'Montag', english: 'Monday', french: 'Lundi', plural: 'Montage', level: LanguageLevel.A1, subTheme: 'Semaine', example: 'Am Montag arbeiten.' },
    { article: 'der', german: 'Dienstag', english: 'Tuesday', french: 'Mardi', plural: 'Dienstage', level: LanguageLevel.A1, subTheme: 'Semaine', example: 'Dienstag ist der zweite Tag.' },
    { article: 'der', german: 'Mittwoch', english: 'Wednesday', french: 'Mercredi', plural: 'Mittwoche', level: LanguageLevel.A1, subTheme: 'Semaine', example: 'Mittwoch ist Wochenmitte.' },
    { article: 'der', german: 'Donnerstag', english: 'Thursday', french: 'Jeudi', plural: 'Donnerstage', level: LanguageLevel.A1, subTheme: 'Semaine', example: 'Am Donnerstag Sport.' },
    { article: 'der', german: 'Freitag', english: 'Friday', french: 'Vendredi', plural: 'Freitage', level: LanguageLevel.A1, subTheme: 'Semaine', example: 'Freitag ist vor dem Wochenende.' },
    { article: 'der', german: 'Samstag', english: 'Saturday', french: 'Samedi', plural: 'Samstage', level: LanguageLevel.A1, subTheme: 'Semaine', example: 'Am Samstag einkaufen.' },
    { article: 'der', german: 'Sonnabend', english: 'Saturday (North / Alternate)', french: 'Samedi (variante du Nord)', plural: 'Sonnabende', level: LanguageLevel.A2, subTheme: 'Semaine', example: 'Sonnabend im Norden.' },
    { article: 'der', german: 'Sonntag', english: 'Sunday', french: 'Dimanche', plural: 'Sonntage', level: LanguageLevel.A1, subTheme: 'Semaine', example: 'Am Sonntag ausruhen.' },
    { article: 'das', german: 'Wochenende', english: 'Weekend', french: 'Week-end', plural: 'Wochenenden', level: LanguageLevel.A1, subTheme: 'Semaine', example: 'Schönes Wochenende!' },
    { article: 'der', german: 'Wochentag', english: 'Weekday', french: 'Jour de semaine', plural: 'Wochentage', level: LanguageLevel.A2, subTheme: 'Semaine', example: 'An Wochentagen arbeiten.' },

    // === MOIS ===
    { article: 'der', german: 'Monat', english: 'Month', french: 'Mois', plural: 'Monate', level: LanguageLevel.A1, subTheme: 'Mois', example: 'Diesen Monat.' },
    { article: 'der', german: 'Januar', english: 'January', french: 'Janvier', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Mois', example: 'Im Januar ist es kalt.' },
    { article: 'der', german: 'Februar', english: 'February', french: 'Février', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Mois', example: 'Der Februar ist kurz.' },
    { article: 'der', german: 'März', english: 'March', french: 'Mars', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Mois', example: 'Im März beginnt der Frühling.' },
    { article: 'der', german: 'April', english: 'April', french: 'Avril', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Mois', example: 'April, April!' },
    { article: 'der', german: 'Mai', english: 'May', french: 'Mai', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Mois', example: 'Im Mai blühen die Blumen.' },
    { article: 'der', german: 'Juni', english: 'June', french: 'Juin', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Mois', example: 'Im Juni beginnen die Ferien.' },
    { article: 'der', german: 'Juli', english: 'July', french: 'Juillet', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Mois', example: 'Der Juli ist sehr heiß.' },
    { article: 'der', german: 'August', english: 'August', french: 'Août', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Mois', example: 'Im August Urlaub machen.' },
    { article: 'der', german: 'September', english: 'September', french: 'Septembre', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Mois', example: 'Die Schule beginnt im September.' },
    { article: 'der', german: 'Oktober', english: 'October', french: 'Octobre', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Mois', example: 'Oktoberfest in München.' },
    { article: 'der', german: 'November', english: 'November', french: 'Novembre', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Mois', example: 'Im November wird es dunkel.' },
    { article: 'der', german: 'Dezember', english: 'December', french: 'Décembre', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Mois', example: 'Weihnachten im Dezember.' },

    // === SAISONS ===
    { article: 'die', german: 'Jahreszeit', english: 'Season', french: 'Saison', plural: 'Jahreszeiten', level: LanguageLevel.A1, subTheme: 'Saisons', example: 'Vier Jahreszeiten.' },
    { article: 'der', german: 'Frühling', english: 'Spring', french: 'Printemps', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Saisons', example: 'Im Frühling blühen die Blumen.' },
    { article: 'der', german: 'Sommer', english: 'Summer', french: 'Été', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Saisons', example: 'Der Sommer ist heiß.' },
    { article: 'der', german: 'Herbst', english: 'Autumn', french: 'Automne', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Saisons', example: 'Im Herbst fallen die Blätter.' },
    { article: 'der', german: 'Winter', english: 'Winter', french: 'Hiver', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Saisons', example: 'Im Winter schneit es.' },

    // === ANNÉE / DURÉE ===
    { article: 'das', german: 'Jahr', english: 'Year', french: 'Année', plural: 'Jahre', level: LanguageLevel.A1, subTheme: 'Durée', example: 'Dieses Jahr.' },
    { article: 'das', german: 'Jahrzehnt', english: 'Decade', french: 'Décennie', plural: 'Jahrzehnte', level: LanguageLevel.B1, subTheme: 'Durée', example: 'Ein Jahrzehnt dauert zehn Jahre.' },
    { article: 'das', german: 'Jahrhundert', english: 'Century', french: 'Siècle', plural: 'Jahrhunderte', level: LanguageLevel.A2, subTheme: 'Durée', example: 'Das 21. Jahrhundert.' },
    { article: 'die', german: 'Dauer', english: 'Duration', french: 'Durée', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Durée', example: 'Die Dauer des Films.' },
    { article: 'die', german: 'Zukunft', english: 'Future', french: 'Avenir', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Durée', example: 'In der Zukunft.' },
    { article: 'die', german: 'Vergangenheit', english: 'Past', french: 'Passé', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Durée', example: 'In der Vergangenheit.' },
    { article: 'die', german: 'Gegenwart', english: 'Present', french: 'Présent', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Durée', example: 'Im Hier und Jetzt.' },

    // === FÊTES ===
    { article: 'das', german: 'Weihnachten', english: 'Christmas', french: 'Noël', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Fêtes', example: 'Frohe Weihnachten!' },
    { article: 'das', german: 'Ostern', english: 'Easter', french: 'Pâques', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Fêtes', example: 'Frohe Ostern!' },
    { article: 'das', german: 'Silvester', english: 'New Year\'s Eve', french: 'Saint-Sylvestre', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Fêtes', example: 'Silvester feiern.' },
    { article: 'das', german: 'Neujahr', english: 'New Year\'s Day', french: 'Nouvel An', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Fêtes', example: 'Frohes neues Jahr!' },
    { article: 'der', german: 'Geburtstag', english: 'Birthday', french: 'Anniversaire', plural: 'Geburtstage', level: LanguageLevel.A1, subTheme: 'Fêtes', example: 'Herzlichen Glückwunsch zum Geburtstag!' },
    { article: 'der', german: 'Feiertag', english: 'Public holiday / Holiday', french: 'Jour férié', plural: 'Feiertage', level: LanguageLevel.A1, subTheme: 'Fêtes', example: 'Morgen ist ein Feiertag.' },
    { article: 'der', german: 'Valentinstag', english: 'Valentine\'s Day', french: 'Saint-Valentin', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Fêtes', example: 'Am Valentinstag Blumen schenken.' },
    { article: 'der', german: 'Muttertag', english: 'Mother\'s Day', french: 'Fête des mères', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Fêtes', example: 'Am Muttertag Danke sagen.' },
    { article: 'der', german: 'Vatertag', english: 'Father\'s Day', french: 'Fête des pères', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Fêtes', example: 'Am Vatertag einen Ausflug machen.' },

    // === FRÉQUENCE ===
    { article: '', german: 'immer', english: 'always', french: 'toujours', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Fréquence', example: 'Ich bin immer pünktlich.' },
    { article: '', german: 'oft', english: 'often', french: 'souvent', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Fréquence', example: 'Ich gehe oft ins Kino.' },
    { article: '', german: 'manchmal', english: 'sometimes', french: 'parfois', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Fréquence', example: 'Manchmal bin ich müde.' },
    { article: '', german: 'selten', english: 'rarely / seldom', french: 'rarement', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Fréquence', example: 'Ich esse selten Fleisch.' },
    { article: '', german: 'nie', english: 'never', french: 'jamais', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Fréquence', example: 'Ich bin nie spät.' },
    { article: '', german: 'täglich', english: 'daily', french: 'quotidien', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Fréquence', example: 'Täglich Sport machen.' },
    { article: '', german: 'wöchentlich', english: 'weekly', french: 'hebdomadaire', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Fréquence', example: 'Wöchentlich einkaufen.' },
    { article: '', german: 'monatlich', english: 'monthly', french: 'mensuel', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Fréquence', example: 'Monatlich bezahlen.' },
    { article: '', german: 'jährlich', english: 'yearly / annually', french: 'annuel', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Fréquence', example: 'Jährlich in Urlaub fahren.' },

    // === EXPRESSIONS TEMPORELLES ===
    { article: '', german: 'früh', english: 'early', french: 'tôt', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Expressions', example: 'Früh aufstehen.' },
    { article: '', german: 'spät', english: 'late', french: 'tard', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Expressions', example: 'Spät ins Bett gehen.' },
    { article: '', german: 'pünktlich', english: 'on time / punctual', french: 'ponctuel / à l\'heure', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Expressions', example: 'Pünktlich ankommen.' },
    { article: '', german: 'sofort', english: 'immediately', french: 'immédiatement', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Expressions', example: 'Sofort kommen!' },
    { article: '', german: 'bald', english: 'soon', french: 'bientôt', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Expressions', example: 'Bis bald!' },
    { article: '', german: 'gerade', english: 'just now', french: 'à l\'instant', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Expressions', example: 'Ich bin gerade angekommen.' },
    { article: '', german: 'vorher', english: 'before', french: 'avant', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Expressions', example: 'Vorher essen.' },
    { article: '', german: 'nachher', english: 'afterwards / later', french: 'après / plus tard', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Expressions', example: 'Nachher einkaufen.' },
    { article: '', german: 'zuerst', english: 'first', french: 'd\'abord', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Expressions', example: 'Zuerst die Hausaufgaben.' },
    { article: '', german: 'dann', english: 'then', french: 'ensuite', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Expressions', example: 'Dann gehen wir.' },
    { article: '', german: 'schließlich', english: 'finally', french: 'finalement', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Expressions', example: 'Schließlich bin ich fertig.' }
  ],
  phrases: [
    // L'heure
    { german: 'Wie spät ist es?', english: 'What time is it?', french: 'Quelle heure est-il ?', italian: 'Che ore sono?', context: 'Heure' },
    { german: 'Es ist acht Uhr.', english: 'It is eight o\'clock.', french: 'Il est huit heures.', italian: 'Sono le otto.', context: 'Heure' },
    { german: 'Es ist halb neun.', english: 'It is half past eight.', french: 'Il est huit heures et demie.', italian: 'Sono le otto e mezza.', context: 'Heure' },
    { german: 'Es ist Viertel nach zehn.', english: 'It is a quarter past ten.', french: 'Il est dix heures et quart.', italian: 'Sono le dieci e un quarto.', context: 'Heure' },
    { german: 'Es ist Viertel vor zwölf.', english: 'It is a quarter to twelve.', french: 'Il est midi moins le quart.', italian: 'Sono le dodici meno un quarto.', context: 'Heure' },

    // Rendez-vous
    { german: 'Wann treffen wir uns?', english: 'When are we meeting?', french: 'Quand est-ce qu\'on se retrouve ?', italian: 'Quando ci vediamo?', context: 'Rendez-vous' },
    { german: 'Um wie viel Uhr?', english: 'At what time?', french: 'À quelle heure ?', italian: 'A che ora?', context: 'Rendez-vous' },
    { german: 'Ich bin in fünf Minuten da.', english: 'I\'ll be there in five minutes.', french: 'J\'arrive dans cinq minutes.', italian: 'Arrivo tra cinque minuti.', context: 'Rendez-vous' },
    { german: 'Tut mir leid, ich bin zu spät.', english: 'Sorry, I am late.', french: 'Désolé, je suis en retard.', italian: 'Scusa, sono in ritardo.', context: 'Rendez-vous' },

    // Durée
    { german: 'Wie lange dauert das?', english: 'How long does that take?', french: 'Combien de temps cela dure-t-il ?', italian: 'Quanto tempo ci vuole?', context: 'Durée' },
    { german: 'Das dauert ungefähr eine Stunde.', english: 'That takes about an hour.', french: 'Cela dure environ une heure.', italian: 'Ci vuole circa un\'ora.', context: 'Durée' },

    // Proverbes
    { german: 'Pünktlichkeit ist eine Zier.', english: 'Punctuality is a virtue.', french: 'La ponctualité est une vertu.', italian: 'La puntualità è una virtù.', literal: 'Punctuality is an ornament.', context: 'Proverbe' },
    { german: 'Alles zu seiner Zeit.', english: 'All in good time.', french: 'Chaque chose en son temps.', italian: 'Ogni cosa a suo tempo.', literal: 'Everything at its time.', context: 'Proverbe' },
    { german: 'Die Zeit vergeht wie im Flug.', english: 'Time flies.', french: 'Le temps passe à toute vitesse.', italian: 'Il tempo vola.', literal: 'Time passes as if in flight.', context: 'Proverbe' }
  ]
};
