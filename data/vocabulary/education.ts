
import { ThemeContent, LanguageLevel } from '../../types';

export const educationContent: ThemeContent = {
  words: [
    // === ÉCOLE ===
    { article: 'die', german: 'Schule', french: 'École', plural: 'Schulen', level: LanguageLevel.A1, subTheme: 'École', example: 'In die Schule gehen.' },
    { article: 'die', german: 'Grundschule', french: 'École primaire', plural: 'Grundschulen', level: LanguageLevel.A1, subTheme: 'École', example: 'Die Grundschule dauert 4 Jahre.' },
    { article: 'das', german: 'Gymnasium', french: 'Lycée', plural: 'Gymnasien', level: LanguageLevel.A2, subTheme: 'École', example: 'Er besucht das Gymnasium.' },
    { article: 'die', german: 'Realschule', french: 'Collège (Allemagne)', plural: 'Realschulen', level: LanguageLevel.A2, subTheme: 'École', example: 'Die Realschule endet mit der 10. Klasse.' },
    { article: 'die', german: 'Hauptschule', french: 'École secondaire', plural: 'Hauptschulen', level: LanguageLevel.A2, subTheme: 'École', example: 'Die Hauptschule bereitet auf Berufe vor.' },
    { article: 'die', german: 'Gesamtschule', french: 'École polyvalente', plural: 'Gesamtschulen', level: LanguageLevel.B1, subTheme: 'École', example: 'Eine Gesamtschule vereint alle Schulformen.' },
    { article: 'der', german: 'Kindergarten', french: 'École maternelle', plural: 'Kindergärten', level: LanguageLevel.A1, subTheme: 'École', example: 'Kinder gehen in den Kindergarten.' },
    { article: 'die', german: 'Klasse', french: 'Classe', plural: 'Klassen', level: LanguageLevel.A1, subTheme: 'École', example: 'In welche Klasse gehst du?' },
    { article: 'das', german: 'Klassenzimmer', french: 'Salle de classe', plural: 'Klassenzimmer', level: LanguageLevel.A1, subTheme: 'École', example: 'Das Klassenzimmer ist groß.' },
    { article: 'die', german: 'Tafel', french: 'Tableau', plural: 'Tafeln', level: LanguageLevel.A1, subTheme: 'École', example: 'An die Tafel schreiben.' },
    { article: 'die', german: 'Kreide', french: 'Craie', plural: 'Kreiden', level: LanguageLevel.A2, subTheme: 'École', example: 'Mit Kreide schreiben.' },
    { article: 'der', german: 'Schwamm', french: 'Éponge', plural: 'Schwämme', level: LanguageLevel.A2, subTheme: 'École', example: 'Die Tafel mit dem Schwamm wischen.' },
    { article: 'die', german: 'Schulbank', french: 'Banc d\'école', plural: 'Schulbänke', level: LanguageLevel.A2, subTheme: 'École', example: 'In der Schulbank sitzen.' },
    { article: 'der', german: 'Schulhof', french: 'Cour de récréation', plural: 'Schulhöfe', level: LanguageLevel.A1, subTheme: 'École', example: 'In der Pause auf dem Schulhof spielen.' },
    { article: 'die', german: 'Turnhalle', french: 'Gymnase', plural: 'Turnhallen', level: LanguageLevel.A2, subTheme: 'École', example: 'Sport in der Turnhalle.' },
    { article: 'die', german: 'Mensa', french: 'Cantine', plural: 'Mensen', level: LanguageLevel.A2, subTheme: 'École', example: 'In der Mensa essen.' },
    
    // === PERSONNES ===
    { article: 'der', german: 'Lehrer', french: 'Professeur (m)', plural: 'Lehrer', level: LanguageLevel.A1, subTheme: 'Personnes', example: 'Ein geduldiger Lehrer.' },
    { article: 'die', german: 'Lehrerin', french: 'Professeur (f)', plural: 'Lehrerinnen', level: LanguageLevel.A1, subTheme: 'Personnes', example: 'Meine Lehrerin ist nett.' },
    { article: 'der', german: 'Schüler', french: 'Élève (m)', plural: 'Schüler', level: LanguageLevel.A1, subTheme: 'Personnes', example: 'Die Schüler lernen fleißig.' },
    { article: 'die', german: 'Schülerin', french: 'Élève (f)', plural: 'Schülerinnen', level: LanguageLevel.A1, subTheme: 'Personnes', example: 'Die Schülerin meldet sich.' },
    { article: 'der', german: 'Direktor', french: 'Directeur', plural: 'Direktoren', level: LanguageLevel.A2, subTheme: 'Personnes', example: 'Der Direktor der Schule.' },
    { article: 'die', german: 'Direktorin', french: 'Directrice', plural: 'Direktorinnen', level: LanguageLevel.A2, subTheme: 'Personnes', example: 'Die Direktorin hält eine Rede.' },
    { article: 'der', german: 'Klassenlehrer', french: 'Professeur principal', plural: 'Klassenlehrer', level: LanguageLevel.A2, subTheme: 'Personnes', example: 'Mein Klassenlehrer ist Herr Müller.' },
    { article: 'der', german: 'Mitschüler', french: 'Camarade de classe', plural: 'Mitschüler', level: LanguageLevel.A2, subTheme: 'Personnes', example: 'Meine Mitschüler sind nett.' },
    
    // === MATIÈRES ===
    { article: 'das', german: 'Fach', french: 'Matière', plural: 'Fächer', level: LanguageLevel.A1, subTheme: 'Matières', example: 'Mein Lieblingsfach ist Mathe.' },
    { article: 'die', german: 'Mathematik', french: 'Mathématiques', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Matières', example: 'Mathematik ist schwer.' },
    { article: 'das', german: 'Deutsch', french: 'Allemand', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Matières', example: 'Wir haben Deutsch.' },
    { article: 'das', german: 'Englisch', french: 'Anglais', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Matières', example: 'Englisch lernen.' },
    { article: 'das', german: 'Französisch', french: 'Français', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Matières', example: 'Französisch als Fremdsprache.' },
    { article: 'die', german: 'Geschichte', french: 'Histoire', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Matières', example: 'Geschichte ist interessant.' },
    { article: 'die', german: 'Geografie', french: 'Géographie', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Matières', example: 'In Geografie lernen wir über Länder.' },
    { article: 'die', german: 'Biologie', french: 'Biologie', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Matières', example: 'Biologie ist spannend.' },
    { article: 'die', german: 'Physik', french: 'Physique', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Matières', example: 'Physik-Experimente.' },
    { article: 'die', german: 'Chemie', french: 'Chimie', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Matières', example: 'Chemie im Labor.' },
    { article: 'die', german: 'Kunst', french: 'Arts plastiques', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Matières', example: 'In Kunst malen wir.' },
    { article: 'die', german: 'Musik', french: 'Musique', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Matières', example: 'Im Musikunterricht singen.' },
    { article: 'der', german: 'Sport', french: 'Sport', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Matières', example: 'Sport in der Turnhalle.' },
    { article: 'die', german: 'Informatik', french: 'Informatique', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Matières', example: 'Informatik lernen.' },
    { article: 'die', german: 'Religion', french: 'Religion', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Matières', example: 'Religionsunterricht.' },
    { article: 'die', german: 'Philosophie', french: 'Philosophie', plural: 'n/a', level: LanguageLevel.B1, subTheme: 'Matières', example: 'Philosophie studieren.' },
    
    // === FOURNITURES ===
    { article: 'das', german: 'Buch', french: 'Livre', plural: 'Bücher', level: LanguageLevel.A1, subTheme: 'Fournitures', example: 'Das Buch lesen.' },
    { article: 'das', german: 'Heft', french: 'Cahier', plural: 'Hefte', level: LanguageLevel.A1, subTheme: 'Fournitures', example: 'Im Heft schreiben.' },
    { article: 'das', german: 'Schulbuch', french: 'Manuel scolaire', plural: 'Schulbücher', level: LanguageLevel.A1, subTheme: 'Fournitures', example: 'Das Schulbuch aufschlagen.' },
    { article: 'der', german: 'Kugelschreiber', french: 'Stylo', plural: 'Kugelschreiber', level: LanguageLevel.A1, subTheme: 'Fournitures', example: 'Mit dem Kugelschreiber schreiben.' },
    { article: 'der', german: 'Bleistift', french: 'Crayon', plural: 'Bleistifte', level: LanguageLevel.A1, subTheme: 'Fournitures', example: 'Den Bleistift spitzen.' },
    { article: 'der', german: 'Radiergummi', french: 'Gomme', plural: 'Radiergummis', level: LanguageLevel.A1, subTheme: 'Fournitures', example: 'Mit dem Radiergummi radieren.' },
    { article: 'das', german: 'Lineal', french: 'Règle', plural: 'Lineale', level: LanguageLevel.A1, subTheme: 'Fournitures', example: 'Mit dem Lineal messen.' },
    { article: 'die', german: 'Schere', french: 'Ciseaux', plural: 'Scheren', level: LanguageLevel.A1, subTheme: 'Fournitures', example: 'Mit der Schere schneiden.' },
    { article: 'der', german: 'Kleber', french: 'Colle', plural: 'Kleber', level: LanguageLevel.A1, subTheme: 'Fournitures', example: 'Mit Kleber kleben.' },
    { article: 'die', german: 'Schultasche', french: 'Cartable', plural: 'Schultaschen', level: LanguageLevel.A1, subTheme: 'Fournitures', example: 'Die Schultasche packen.' },
    { article: 'der', german: 'Rucksack', french: 'Sac à dos', plural: 'Rucksäcke', level: LanguageLevel.A1, subTheme: 'Fournitures', example: 'Der Rucksack ist schwer.' },
    { article: 'das', german: 'Mäppchen', french: 'Trousse', plural: 'Mäppchen', level: LanguageLevel.A1, subTheme: 'Fournitures', example: 'Stifte im Mäppchen.' },
    { article: 'der', german: 'Taschenrechner', french: 'Calculatrice', plural: 'Taschenrechner', level: LanguageLevel.A2, subTheme: 'Fournitures', example: 'Den Taschenrechner benutzen.' },
    { article: 'der', german: 'Computer', french: 'Ordinateur', plural: 'Computer', level: LanguageLevel.A1, subTheme: 'Fournitures', example: 'Am Computer arbeiten.' },
    
    // === EXAMENS / NOTES ===
    { article: 'die', german: 'Prüfung', french: 'Examen', plural: 'Prüfungen', level: LanguageLevel.A1, subTheme: 'Examens', example: 'Eine Prüfung schreiben.' },
    { article: 'der', german: 'Test', french: 'Test', plural: 'Tests', level: LanguageLevel.A1, subTheme: 'Examens', example: 'Einen Test machen.' },
    { article: 'die', german: 'Klassenarbeit', french: 'Contrôle', plural: 'Klassenarbeiten', level: LanguageLevel.A1, subTheme: 'Examens', example: 'Eine Klassenarbeit schreiben.' },
    { article: 'die', german: 'Note', french: 'Note', plural: 'Noten', level: LanguageLevel.A1, subTheme: 'Examens', example: 'Gute Noten bekommen.' },
    { article: 'das', german: 'Zeugnis', french: 'Bulletin', plural: 'Zeugnisse', level: LanguageLevel.A1, subTheme: 'Examens', example: 'Das Zeugnis abholen.' },
    { article: 'die', german: 'Hausaufgabe', french: 'Devoir', plural: 'Hausaufgaben', level: LanguageLevel.A1, subTheme: 'Examens', example: 'Hausaufgaben machen.' },
    { article: 'das', german: 'Abitur', french: 'Baccalauréat', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Examens', example: 'Das Abitur bestehen.' },
    { article: 'das', german: 'Ergebnis', french: 'Résultat', plural: 'Ergebnisse', level: LanguageLevel.A2, subTheme: 'Examens', example: 'Das Ergebnis der Prüfung.' },
    
    // === UNIVERSITÉ ===
    { article: 'die', german: 'Universität', french: 'Université', plural: 'Universitäten', level: LanguageLevel.A1, subTheme: 'Université', example: 'An der Universität studieren.' },
    { article: 'die', german: 'Uni', french: 'Fac (familier)', plural: 'Unis', level: LanguageLevel.A1, subTheme: 'Université', example: 'Ich gehe zur Uni.' },
    { article: 'die', german: 'Hochschule', french: 'École supérieure', plural: 'Hochschulen', level: LanguageLevel.A2, subTheme: 'Université', example: 'Eine technische Hochschule.' },
    { article: 'die', german: 'Fakultät', french: 'Faculté', plural: 'Fakultäten', level: LanguageLevel.B1, subTheme: 'Université', example: 'Die juristische Fakultät.' },
    { article: 'das', german: 'Studium', french: 'Études', plural: 'Studien', level: LanguageLevel.A2, subTheme: 'Université', example: 'Das Studium abschließen.' },
    { article: 'der', german: 'Student', french: 'Étudiant (m)', plural: 'Studenten', level: LanguageLevel.A1, subTheme: 'Université', example: 'Er ist Student.' },
    { article: 'die', german: 'Studentin', french: 'Étudiante (f)', plural: 'Studentinnen', level: LanguageLevel.A1, subTheme: 'Université', example: 'Sie ist Studentin.' },
    { article: 'der', german: 'Professor', french: 'Professeur d\'université', plural: 'Professoren', level: LanguageLevel.A2, subTheme: 'Université', example: 'Professor Müller.' },
    { article: 'der', german: 'Dozent', french: 'Maître de conférence', plural: 'Dozenten', level: LanguageLevel.B1, subTheme: 'Université', example: 'Der Dozent hält eine Vorlesung.' },
    { article: 'die', german: 'Vorlesung', french: 'Cours magistral', plural: 'Vorlesungen', level: LanguageLevel.A2, subTheme: 'Université', example: 'Eine Vorlesung besuchen.' },
    { article: 'das', german: 'Seminar', french: 'Séminaire', plural: 'Seminare', level: LanguageLevel.A2, subTheme: 'Université', example: 'Ein Seminar über Literatur.' },
    { article: 'das', german: 'Semester', french: 'Semestre', plural: 'Semester', level: LanguageLevel.A2, subTheme: 'Université', example: 'Im ersten Semester.' },
    { article: 'die', german: 'Bibliothek', french: 'Bibliothèque', plural: 'Bibliotheken', level: LanguageLevel.A1, subTheme: 'Université', example: 'In der Bibliothek lernen.' },
    { article: 'das', german: 'Stipendium', french: 'Bourse', plural: 'Stipendien', level: LanguageLevel.B1, subTheme: 'Université', example: 'Ein Stipendium bekommen.' },
    { article: 'der', german: 'Abschluss', french: 'Diplôme', plural: 'Abschlüsse', level: LanguageLevel.A2, subTheme: 'Université', example: 'Den Abschluss machen.' },
    { article: 'der', german: 'Bachelor', french: 'Licence', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Université', example: 'Den Bachelor in Wirtschaft machen.' },
    { article: 'der', german: 'Master', french: 'Master', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Université', example: 'Einen Master machen.' },
    { article: 'die', german: 'Dissertation', french: 'Thèse', plural: 'Dissertationen', level: LanguageLevel.B2, subTheme: 'Université', example: 'Die Dissertation schreiben.' },
    { article: 'der', german: 'Doktor', french: 'Doctorat', plural: 'Doktoren', level: LanguageLevel.B1, subTheme: 'Université', example: 'Den Doktor machen.' },
    
    // === FORMATION PROFESSIONNELLE ===
    { article: 'die', german: 'Ausbildung', french: 'Formation', plural: 'Ausbildungen', level: LanguageLevel.A2, subTheme: 'Formation', example: 'Eine Ausbildung machen.' },
    { article: 'der', german: 'Azubi', french: 'Apprenti', plural: 'Azubis', level: LanguageLevel.A2, subTheme: 'Formation', example: 'Er ist Azubi bei BMW.' },
    { article: 'die', german: 'Berufsschule', french: 'École professionnelle', plural: 'Berufsschulen', level: LanguageLevel.A2, subTheme: 'Formation', example: 'Die Berufsschule besuchen.' },
    { article: 'das', german: 'Praktikum', french: 'Stage', plural: 'Praktika', level: LanguageLevel.A2, subTheme: 'Formation', example: 'Ein Praktikum machen.' },
    { article: 'der', german: 'Praktikant', french: 'Stagiaire', plural: 'Praktikanten', level: LanguageLevel.A2, subTheme: 'Formation', example: 'Der Praktikant ist neu.' },
    { article: 'die', german: 'Weiterbildung', french: 'Formation continue', plural: 'Weiterbildungen', level: LanguageLevel.B1, subTheme: 'Formation', example: 'Eine Weiterbildung besuchen.' },
    
    // === VERBES ===
    { article: '', german: 'lernen', french: 'apprendre', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Verbes', example: 'Deutsch lernen.' },
    { article: '', german: 'studieren', french: 'étudier', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Verbes', example: 'An der Uni studieren.' },
    { article: '', german: 'unterrichten', french: 'enseigner', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Verbes', example: 'Er unterrichtet Deutsch.' },
    { article: '', german: 'lehren', french: 'enseigner', plural: 'n/a', level: LanguageLevel.B1, subTheme: 'Verbes', example: 'An der Universität lehren.' },
    { article: '', german: 'üben', french: 'pratiquer', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Verbes', example: 'Jeden Tag üben.' },
    { article: '', german: 'wiederholen', french: 'réviser / répéter', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Verbes', example: 'Die Lektion wiederholen.' },
    { article: '', german: 'verstehen', french: 'comprendre', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Verbes', example: 'Ich verstehe nicht.' },
    { article: '', german: 'erklären', french: 'expliquer', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Verbes', example: 'Können Sie das erklären?' },
    { article: '', german: 'bestehen', french: 'réussir (examen)', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Verbes', example: 'Die Prüfung bestehen.' },
    { article: '', german: 'durchfallen', french: 'échouer', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Verbes', example: 'Bei der Prüfung durchfallen.' },
    { article: '', german: 'abschließen', french: 'terminer (études)', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Verbes', example: 'Das Studium abschließen.' },
    { article: '', german: 'sich anmelden', french: 's\'inscrire', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Verbes', example: 'Sich für den Kurs anmelden.' },
    { article: '', german: 'sich konzentrieren', french: 'se concentrer', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Verbes', example: 'Ich muss mich konzentrieren.' }
  ],
  phrases: [
    // Questions en classe
    { german: 'Können Sie das bitte wiederholen?', french: 'Pouvez-vous répéter, s\'il vous plaît ?', context: 'Classe' },
    { german: 'Ich verstehe das nicht.', french: 'Je ne comprends pas cela.', context: 'Classe' },
    { german: 'Wie sagt man das auf Deutsch?', french: 'Comment dit-on cela en allemand ?', context: 'Classe' },
    { german: 'Darf ich eine Frage stellen?', french: 'Puis-je poser une question ?', context: 'Classe' },
    { german: 'Was bedeutet dieses Wort?', french: 'Que signifie ce mot ?', context: 'Classe' },
    
    // Études
    { german: 'Ich studiere Informatik.', french: 'J\'étudie l\'informatique.', context: 'Université' },
    { german: 'In welchem Semester bist du?', french: 'En quel semestre es-tu ?', context: 'Université' },
    { german: 'Hast du für die Prüfung gelernt?', french: 'As-tu révisé pour l\'examen ?', context: 'Examens' },
    { german: 'Ich muss noch meine Hausaufgaben machen.', french: 'Je dois encore faire mes devoirs.', context: 'École' },
    { german: 'Wann ist die nächste Prüfung?', french: 'Quand est le prochain examen ?', context: 'Examens' },
    
    // Résultats
    { german: 'Ich habe die Prüfung bestanden!', french: 'J\'ai réussi l\'examen !', context: 'Examens' },
    { german: 'Welche Note hast du bekommen?', french: 'Quelle note as-tu obtenue ?', context: 'Examens' },
    { german: 'Ich bin durch die Prüfung gefallen.', french: 'J\'ai échoué à l\'examen.', context: 'Examens' }
  ]
};
