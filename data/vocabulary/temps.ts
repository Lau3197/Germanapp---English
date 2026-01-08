
import { ThemeContent, LanguageLevel } from '../../types';

export const tempsContent: ThemeContent = {
  words: [
    // === HEURE ===
    { article: 'die', german: 'Zeit', french: 'Temps', plural: 'Zeiten', level: LanguageLevel.A1, subTheme: 'Heure', example: 'Ich habe keine Zeit.' },
    { article: 'die', german: 'Uhr', french: 'Heure / Montre', plural: 'Uhren', level: LanguageLevel.A1, subTheme: 'Heure', example: 'Wie viel Uhr ist es?' },
    { article: 'die', german: 'Stunde', french: 'Heure (durée)', plural: 'Stunden', level: LanguageLevel.A1, subTheme: 'Heure', example: 'Eine Stunde warten.' },
    { article: 'die', german: 'Minute', french: 'Minute', plural: 'Minuten', level: LanguageLevel.A1, subTheme: 'Heure', example: 'Fünf Minuten später.' },
    { article: 'die', german: 'Sekunde', french: 'Seconde', plural: 'Sekunden', level: LanguageLevel.A1, subTheme: 'Heure', example: 'In wenigen Sekunden.' },
    { article: 'der', german: 'Moment', french: 'Moment', plural: 'Momente', level: LanguageLevel.A1, subTheme: 'Heure', example: 'Einen Moment bitte.' },
    { article: 'der', german: 'Augenblick', french: 'Instant', plural: 'Augenblicke', level: LanguageLevel.A2, subTheme: 'Heure', example: 'Ein wunderbarer Augenblick.' },
    { article: '', german: 'halb', french: 'demi', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Heure', example: 'Halb drei (14h30).' },
    { article: '', german: 'Viertel', french: 'quart', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Heure', example: 'Viertel nach zwei.' },
    { article: 'der', german: 'Mittag', french: 'Midi', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Heure', example: 'Um Mittag essen.' },
    { article: 'die', german: 'Mitternacht', french: 'Minuit', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Heure', example: 'Um Mitternacht schlafen.' },
    
    // === JOUR ===
    { article: 'der', german: 'Tag', french: 'Jour', plural: 'Tage', level: LanguageLevel.A1, subTheme: 'Jour', example: 'Ein schöner Tag.' },
    { article: 'der', german: 'Morgen', french: 'Matin', plural: 'Morgen', level: LanguageLevel.A1, subTheme: 'Jour', example: 'Am Morgen frühstücken.' },
    { article: 'der', german: 'Vormittag', french: 'Matinée', plural: 'Vormittage', level: LanguageLevel.A2, subTheme: 'Jour', example: 'Am Vormittag arbeiten.' },
    { article: 'der', german: 'Nachmittag', french: 'Après-midi', plural: 'Nachmittage', level: LanguageLevel.A1, subTheme: 'Jour', example: 'Am Nachmittag Sport machen.' },
    { article: 'der', german: 'Abend', french: 'Soir', plural: 'Abende', level: LanguageLevel.A1, subTheme: 'Jour', example: 'Am Abend fernsehen.' },
    { article: 'die', german: 'Nacht', french: 'Nuit', plural: 'Nächte', level: LanguageLevel.A1, subTheme: 'Jour', example: 'In der Nacht schlafen.' },
    { article: '', german: 'heute', french: 'aujourd\'hui', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Jour', example: 'Heute ist Montag.' },
    { article: '', german: 'morgen', french: 'demain', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Jour', example: 'Bis morgen!' },
    { article: '', german: 'gestern', french: 'hier', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Jour', example: 'Gestern war Sonntag.' },
    { article: '', german: 'übermorgen', french: 'après-demain', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Jour', example: 'Übermorgen ist Mittwoch.' },
    { article: '', german: 'vorgestern', french: 'avant-hier', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Jour', example: 'Vorgestern war Samstag.' },
    
    // === JOURS DE LA SEMAINE ===
    { article: 'die', german: 'Woche', french: 'Semaine', plural: 'Wochen', level: LanguageLevel.A1, subTheme: 'Semaine', example: 'Diese Woche.' },
    { article: 'der', german: 'Montag', french: 'Lundi', plural: 'Montage', level: LanguageLevel.A1, subTheme: 'Semaine', example: 'Am Montag arbeiten.' },
    { article: 'der', german: 'Dienstag', french: 'Mardi', plural: 'Dienstage', level: LanguageLevel.A1, subTheme: 'Semaine', example: 'Dienstag ist der zweite Tag.' },
    { article: 'der', german: 'Mittwoch', french: 'Mercredi', plural: 'Mittwoche', level: LanguageLevel.A1, subTheme: 'Semaine', example: 'Mittwoch ist Wochenmitte.' },
    { article: 'der', german: 'Donnerstag', french: 'Jeudi', plural: 'Donnerstage', level: LanguageLevel.A1, subTheme: 'Semaine', example: 'Am Donnerstag Sport.' },
    { article: 'der', german: 'Freitag', french: 'Vendredi', plural: 'Freitage', level: LanguageLevel.A1, subTheme: 'Semaine', example: 'Freitag ist vor dem Wochenende.' },
    { article: 'der', german: 'Samstag', french: 'Samedi', plural: 'Samstage', level: LanguageLevel.A1, subTheme: 'Semaine', example: 'Am Samstag einkaufen.' },
    { article: 'der', german: 'Sonnabend', french: 'Samedi (Nord)', plural: 'Sonnabende', level: LanguageLevel.A2, subTheme: 'Semaine', example: 'Sonnabend im Norden.' },
    { article: 'der', german: 'Sonntag', french: 'Dimanche', plural: 'Sonntage', level: LanguageLevel.A1, subTheme: 'Semaine', example: 'Am Sonntag ausruhen.' },
    { article: 'das', german: 'Wochenende', french: 'Week-end', plural: 'Wochenenden', level: LanguageLevel.A1, subTheme: 'Semaine', example: 'Schönes Wochenende!' },
    { article: 'der', german: 'Wochentag', french: 'Jour de semaine', plural: 'Wochentage', level: LanguageLevel.A2, subTheme: 'Semaine', example: 'An Wochentagen arbeiten.' },
    
    // === MOIS ===
    { article: 'der', german: 'Monat', french: 'Mois', plural: 'Monate', level: LanguageLevel.A1, subTheme: 'Mois', example: 'Diesen Monat.' },
    { article: 'der', german: 'Januar', french: 'Janvier', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Mois', example: 'Im Januar ist es kalt.' },
    { article: 'der', german: 'Februar', french: 'Février', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Mois', example: 'Der Februar ist kurz.' },
    { article: 'der', german: 'März', french: 'Mars', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Mois', example: 'Im März beginnt der Frühling.' },
    { article: 'der', german: 'April', french: 'Avril', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Mois', example: 'April, April!' },
    { article: 'der', german: 'Mai', french: 'Mai', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Mois', example: 'Im Mai blühen die Blumen.' },
    { article: 'der', german: 'Juni', french: 'Juin', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Mois', example: 'Im Juni beginnen die Ferien.' },
    { article: 'der', german: 'Juli', french: 'Juillet', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Mois', example: 'Der Juli ist sehr heiß.' },
    { article: 'der', german: 'August', french: 'Août', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Mois', example: 'Im August Urlaub machen.' },
    { article: 'der', german: 'September', french: 'Septembre', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Mois', example: 'Die Schule beginnt im September.' },
    { article: 'der', german: 'Oktober', french: 'Octobre', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Mois', example: 'Oktoberfest in München.' },
    { article: 'der', german: 'November', french: 'Novembre', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Mois', example: 'Im November wird es dunkel.' },
    { article: 'der', german: 'Dezember', french: 'Décembre', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Mois', example: 'Weihnachten im Dezember.' },
    
    // === SAISONS ===
    { article: 'die', german: 'Jahreszeit', french: 'Saison', plural: 'Jahreszeiten', level: LanguageLevel.A1, subTheme: 'Saisons', example: 'Vier Jahreszeiten.' },
    { article: 'der', german: 'Frühling', french: 'Printemps', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Saisons', example: 'Im Frühling blühen die Blumen.' },
    { article: 'der', german: 'Sommer', french: 'Été', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Saisons', example: 'Der Sommer ist heiß.' },
    { article: 'der', german: 'Herbst', french: 'Automne', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Saisons', example: 'Im Herbst fallen die Blätter.' },
    { article: 'der', german: 'Winter', french: 'Hiver', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Saisons', example: 'Im Winter schneit es.' },
    
    // === ANNÉE / DURÉE ===
    { article: 'das', german: 'Jahr', french: 'Année', plural: 'Jahre', level: LanguageLevel.A1, subTheme: 'Durée', example: 'Dieses Jahr.' },
    { article: 'das', german: 'Jahrzehnt', french: 'Décennie', plural: 'Jahrzehnte', level: LanguageLevel.B1, subTheme: 'Durée', example: 'Ein Jahrzehnt dauert zehn Jahre.' },
    { article: 'das', german: 'Jahrhundert', french: 'Siècle', plural: 'Jahrhunderte', level: LanguageLevel.A2, subTheme: 'Durée', example: 'Das 21. Jahrhundert.' },
    { article: 'die', german: 'Dauer', french: 'Durée', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Durée', example: 'Die Dauer des Films.' },
    { article: 'die', german: 'Zukunft', french: 'Avenir', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Durée', example: 'In der Zukunft.' },
    { article: 'die', german: 'Vergangenheit', french: 'Passé', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Durée', example: 'In der Vergangenheit.' },
    { article: 'die', german: 'Gegenwart', french: 'Présent', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Durée', example: 'Im Hier und Jetzt.' },
    
    // === FÊTES ===
    { article: 'das', german: 'Weihnachten', french: 'Noël', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Fêtes', example: 'Frohe Weihnachten!' },
    { article: 'das', german: 'Ostern', french: 'Pâques', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Fêtes', example: 'Frohe Ostern!' },
    { article: 'das', german: 'Silvester', french: 'Saint-Sylvestre', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Fêtes', example: 'Silvester feiern.' },
    { article: 'das', german: 'Neujahr', french: 'Nouvel An', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Fêtes', example: 'Frohes neues Jahr!' },
    { article: 'der', german: 'Geburtstag', french: 'Anniversaire', plural: 'Geburtstage', level: LanguageLevel.A1, subTheme: 'Fêtes', example: 'Herzlichen Glückwunsch zum Geburtstag!' },
    { article: 'der', german: 'Feiertag', french: 'Jour férié', plural: 'Feiertage', level: LanguageLevel.A1, subTheme: 'Fêtes', example: 'Morgen ist ein Feiertag.' },
    { article: 'der', german: 'Valentinstag', french: 'Saint-Valentin', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Fêtes', example: 'Am Valentinstag Blumen schenken.' },
    { article: 'der', german: 'Muttertag', french: 'Fête des mères', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Fêtes', example: 'Am Muttertag Danke sagen.' },
    { article: 'der', german: 'Vatertag', french: 'Fête des pères', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Fêtes', example: 'Am Vatertag einen Ausflug machen.' },
    
    // === FRÉQUENCE ===
    { article: '', german: 'immer', french: 'toujours', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Fréquence', example: 'Ich bin immer pünktlich.' },
    { article: '', german: 'oft', french: 'souvent', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Fréquence', example: 'Ich gehe oft ins Kino.' },
    { article: '', german: 'manchmal', french: 'parfois', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Fréquence', example: 'Manchmal bin ich müde.' },
    { article: '', german: 'selten', french: 'rarement', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Fréquence', example: 'Ich esse selten Fleisch.' },
    { article: '', german: 'nie', french: 'jamais', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Fréquence', example: 'Ich bin nie spät.' },
    { article: '', german: 'täglich', french: 'quotidien', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Fréquence', example: 'Täglich Sport machen.' },
    { article: '', german: 'wöchentlich', french: 'hebdomadaire', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Fréquence', example: 'Wöchentlich einkaufen.' },
    { article: '', german: 'monatlich', french: 'mensuel', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Fréquence', example: 'Monatlich bezahlen.' },
    { article: '', german: 'jährlich', french: 'annuel', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Fréquence', example: 'Jährlich in Urlaub fahren.' },
    
    // === EXPRESSIONS TEMPORELLES ===
    { article: '', german: 'früh', french: 'tôt', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Expressions', example: 'Früh aufstehen.' },
    { article: '', german: 'spät', french: 'tard', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Expressions', example: 'Spät ins Bett gehen.' },
    { article: '', german: 'pünktlich', french: 'à l\'heure', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Expressions', example: 'Pünktlich ankommen.' },
    { article: '', german: 'sofort', french: 'immédiatement', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Expressions', example: 'Sofort kommen!' },
    { article: '', german: 'bald', french: 'bientôt', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Expressions', example: 'Bis bald!' },
    { article: '', german: 'gerade', french: 'juste maintenant', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Expressions', example: 'Ich bin gerade angekommen.' },
    { article: '', german: 'vorher', french: 'avant', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Expressions', example: 'Vorher essen.' },
    { article: '', german: 'nachher', french: 'après', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Expressions', example: 'Nachher einkaufen.' },
    { article: '', german: 'zuerst', french: 'd\'abord', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Expressions', example: 'Zuerst die Hausaufgaben.' },
    { article: '', german: 'dann', french: 'ensuite', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Expressions', example: 'Dann gehen wir.' },
    { article: '', german: 'schließlich', french: 'finalement', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Expressions', example: 'Schließlich bin ich fertig.' }
  ],
  phrases: [
    // L'heure
    { german: 'Wie spät ist es?', french: 'Quelle heure est-il ?', context: 'Heure' },
    { german: 'Es ist acht Uhr.', french: 'Il est huit heures.', context: 'Heure' },
    { german: 'Es ist halb neun.', french: 'Il est huit heures et demie.', context: 'Heure' },
    { german: 'Es ist Viertel nach zehn.', french: 'Il est dix heures et quart.', context: 'Heure' },
    { german: 'Es ist Viertel vor zwölf.', french: 'Il est midi moins le quart.', context: 'Heure' },
    
    // Rendez-vous
    { german: 'Wann treffen wir uns?', french: 'Quand se retrouve-t-on ?', context: 'Rendez-vous' },
    { german: 'Um wie viel Uhr?', french: 'À quelle heure ?', context: 'Rendez-vous' },
    { german: 'Ich bin in fünf Minuten da.', french: 'J\'arrive dans cinq minutes.', context: 'Rendez-vous' },
    { german: 'Tut mir leid, ich bin zu spät.', french: 'Désolé, je suis en retard.', context: 'Rendez-vous' },
    
    // Durée
    { german: 'Wie lange dauert das?', french: 'Combien de temps cela dure-t-il ?', context: 'Durée' },
    { german: 'Das dauert ungefähr eine Stunde.', french: 'Cela dure environ une heure.', context: 'Durée' },
    
    // Proverbes
    { german: 'Pünktlichkeit ist eine Zier.', french: 'La ponctualité est une vertu.', context: 'Proverbe' },
    { german: 'Alles zu seiner Zeit.', french: 'Chaque chose en son temps.', context: 'Proverbe' },
    { german: 'Die Zeit vergeht wie im Flug.', french: 'Le temps passe si vite.', context: 'Proverbe' }
  ]
};
