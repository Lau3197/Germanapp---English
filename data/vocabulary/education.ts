
import { ThemeContent, LanguageLevel } from '../../types';

export const educationContent: ThemeContent = {
  words: [
    // === ÉCOLE ===
    { article: 'die', german: 'Schule', english: 'School', plural: 'Schulen', level: LanguageLevel.A1, subTheme: 'École', example: 'In die Schule gehen.' },
    { article: 'die', german: 'Grundschule', english: 'Primary school / Elementary school', plural: 'Grundschulen', level: LanguageLevel.A1, subTheme: 'École', example: 'Die Grundschule dauert 4 Jahre.' },
    { article: 'das', german: 'Gymnasium', english: 'High school / Grammar school', plural: 'Gymnasien', level: LanguageLevel.A2, subTheme: 'École', example: 'Er besucht das Gymnasium.' },
    { article: 'die', german: 'Realschule', english: 'Secondary school (intermediate)', plural: 'Realschulen', level: LanguageLevel.A2, subTheme: 'École', example: 'Die Realschule endet mit der 10. Klasse.' },
    { article: 'die', german: 'Hauptschule', english: 'Secondary school (vocational)', plural: 'Hauptschulen', level: LanguageLevel.A2, subTheme: 'École', example: 'Die Hauptschule bereitet auf Berufe vor.' },
    { article: 'die', german: 'Gesamtschule', english: 'Comprehensive school', plural: 'Gesamtschulen', level: LanguageLevel.B1, subTheme: 'École', example: 'Eine Gesamtschule vereint alle Schulformen.' },
    { article: 'der', german: 'Kindergarten', english: 'Kindergarten', plural: 'Kindergärten', level: LanguageLevel.A1, subTheme: 'École', example: 'Kinder gehen in den Kindergarten.' },
    { article: 'die', german: 'Klasse', english: 'Class / Grade', plural: 'Klassen', level: LanguageLevel.A1, subTheme: 'École', example: 'In welche Klasse gehst du?' },
    { article: 'das', german: 'Klassenzimmer', english: 'Classroom', plural: 'Klassenzimmer', level: LanguageLevel.A1, subTheme: 'École', example: 'Das Klassenzimmer ist groß.' },
    { article: 'die', german: 'Tafel', english: 'Blackboard', plural: 'Tafeln', level: LanguageLevel.A1, subTheme: 'École', example: 'An die Tafel schreiben.' },
    { article: 'die', german: 'Kreide', english: 'Chalk', plural: 'Kreiden', level: LanguageLevel.A2, subTheme: 'École', example: 'Mit Kreide schreiben.' },
    { article: 'der', german: 'Schwamm', english: 'Sponge', plural: 'Schwämme', level: LanguageLevel.A2, subTheme: 'École', example: 'Die Tafel mit dem Schwamm wischen.' },
    { article: 'die', german: 'Schulbank', english: 'Desk (school)', plural: 'Schulbänke', level: LanguageLevel.A2, subTheme: 'École', example: 'In der Schulbank sitzen.' },
    { article: 'der', german: 'Schulhof', english: 'Schoolyard / Playground', plural: 'Schulhöfe', level: LanguageLevel.A1, subTheme: 'École', example: 'In der Pause auf dem Schulhof spielen.' },
    { article: 'die', german: 'Turnhalle', english: 'Gym', plural: 'Turnhallen', level: LanguageLevel.A2, subTheme: 'École', example: 'Sport in der Turnhalle.' },
    { article: 'die', german: 'Mensa', english: 'Canteen / Cafeteria', plural: 'Mensen', level: LanguageLevel.A2, subTheme: 'École', example: 'In der Mensa essen.' },

    // === PERSONNES ===
    { article: 'der', german: 'Lehrer', english: 'Teacher (m)', plural: 'Lehrer', level: LanguageLevel.A1, subTheme: 'Personnes', example: 'Ein geduldiger Lehrer.' },
    { article: 'die', german: 'Lehrerin', english: 'Teacher (f)', plural: 'Lehrerinnen', level: LanguageLevel.A1, subTheme: 'Personnes', example: 'Meine Lehrerin ist nett.' },
    { article: 'der', german: 'Schüler', english: 'Student / Pupil (m)', plural: 'Schüler', level: LanguageLevel.A1, subTheme: 'Personnes', example: 'Die Schüler lernen fleißig.' },
    { article: 'die', german: 'Schülerin', english: 'Student / Pupil (f)', plural: 'Schülerinnen', level: LanguageLevel.A1, subTheme: 'Personnes', example: 'Die Schülerin meldet sich.' },
    { article: 'der', german: 'Direktor', english: 'Principal / Headmaster', plural: 'Direktoren', level: LanguageLevel.A2, subTheme: 'Personnes', example: 'Der Direktor der Schule.' },
    { article: 'die', german: 'Direktorin', english: 'Principal (f)', plural: 'Direktorinnen', level: LanguageLevel.A2, subTheme: 'Personnes', example: 'Die Direktorin hält eine Rede.' },
    { article: 'der', german: 'Klassenlehrer', english: 'Homeroom teacher', plural: 'Klassenlehrer', level: LanguageLevel.A2, subTheme: 'Personnes', example: 'Mein Klassenlehrer ist Herr Müller.' },
    { article: 'der', german: 'Mitschüler', english: 'Classmate', plural: 'Mitschüler', level: LanguageLevel.A2, subTheme: 'Personnes', example: 'Meine Mitschüler sind nett.' },

    // === MATIÈRES ===
    { article: 'das', german: 'Fach', english: 'Subject', plural: 'Fächer', level: LanguageLevel.A1, subTheme: 'Matières', example: 'Mein Lieblingsfach ist Mathe.' },
    { article: 'die', german: 'Mathematik', english: 'Mathematics / Math', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Matières', example: 'Mathematik ist schwer.' },
    { article: 'das', german: 'Deutsch', english: 'German', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Matières', example: 'Wir haben Deutsch.' },
    { article: 'das', german: 'Englisch', english: 'English', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Matières', example: 'Englisch lernen.' },
    { article: 'das', german: 'Französisch', english: 'French', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Matières', example: 'Französisch als Fremdsprache.' },
    { article: 'die', german: 'Geschichte', english: 'History', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Matières', example: 'Geschichte ist interessant.' },
    { article: 'die', german: 'Geografie', english: 'Geography', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Matières', example: 'In Geografie lernen wir über Länder.' },
    { article: 'die', german: 'Biologie', english: 'Biology', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Matières', example: 'Biologie ist spannend.' },
    { article: 'die', german: 'Physik', english: 'Physics', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Matières', example: 'Physik-Experimente.' },
    { article: 'die', german: 'Chemie', english: 'Chemistry', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Matières', example: 'Chemie im Labor.' },
    { article: 'die', german: 'Kunst', english: 'Art', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Matières', example: 'In Kunst malen wir.' },
    { article: 'die', german: 'Musik', english: 'Music', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Matières', example: 'Im Musikunterricht singen.' },
    { article: 'der', german: 'Sport', english: 'PE / Sports', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Matières', example: 'Sport in der Turnhalle.' },
    { article: 'die', german: 'Informatik', english: 'Computer science', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Matières', example: 'Informatik lernen.' },
    { article: 'die', german: 'Religion', english: 'Religion', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Matières', example: 'Religionsunterricht.' },
    { article: 'die', german: 'Philosophie', english: 'Philosophy', plural: 'n/a', level: LanguageLevel.B1, subTheme: 'Matières', example: 'Philosophie studieren.' },

    // === FOURNITURES ===
    { article: 'das', german: 'Buch', english: 'Book', plural: 'Bücher', level: LanguageLevel.A1, subTheme: 'Fournitures', example: 'Das Buch lesen.' },
    { article: 'das', german: 'Heft', english: 'Notebook', plural: 'Hefte', level: LanguageLevel.A1, subTheme: 'Fournitures', example: 'Im Heft schreiben.' },
    { article: 'das', german: 'Schulbuch', english: 'Textbook', plural: 'Schulbücher', level: LanguageLevel.A1, subTheme: 'Fournitures', example: 'Das Schulbuch aufschlagen.' },
    { article: 'der', german: 'Kugelschreiber', english: 'Pen', plural: 'Kugelschreiber', level: LanguageLevel.A1, subTheme: 'Fournitures', example: 'Mit dem Kugelschreiber schreiben.' },
    { article: 'der', german: 'Bleistift', english: 'Pencil', plural: 'Bleistifte', level: LanguageLevel.A1, subTheme: 'Fournitures', example: 'Den Bleistift spitzen.' },
    { article: 'der', german: 'Radiergummi', english: 'Eraser', plural: 'Radiergummis', level: LanguageLevel.A1, subTheme: 'Fournitures', example: 'Mit dem Radiergummi radieren.' },
    { article: 'das', german: 'Lineal', english: 'Ruler', plural: 'Lineale', level: LanguageLevel.A1, subTheme: 'Fournitures', example: 'Mit dem Lineal messen.' },
    { article: 'die', german: 'Schere', english: 'Scissors', plural: 'Scheren', level: LanguageLevel.A1, subTheme: 'Fournitures', example: 'Mit der Schere schneiden.' },
    { article: 'der', german: 'Kleber', english: 'Glue', plural: 'Kleber', level: LanguageLevel.A1, subTheme: 'Fournitures', example: 'Mit Kleber kleben.' },
    { article: 'die', german: 'Schultasche', english: 'Schoolbag', plural: 'Schultaschen', level: LanguageLevel.A1, subTheme: 'Fournitures', example: 'Die Schultasche packen.' },
    { article: 'der', german: 'Rucksack', english: 'Backpack', plural: 'Rucksäcke', level: LanguageLevel.A1, subTheme: 'Fournitures', example: 'Der Rucksack ist schwer.' },
    { article: 'das', german: 'Mäppchen', english: 'Pencil case', plural: 'Mäppchen', level: LanguageLevel.A1, subTheme: 'Fournitures', example: 'Stifte im Mäppchen.' },
    { article: 'der', german: 'Taschenrechner', english: 'Calculator', plural: 'Taschenrechner', level: LanguageLevel.A2, subTheme: 'Fournitures', example: 'Den Taschenrechner benutzen.' },
    { article: 'der', german: 'Computer', english: 'Computer', plural: 'Computer', level: LanguageLevel.A1, subTheme: 'Fournitures', example: 'Am Computer arbeiten.' },

    // === EXAMENS / NOTES ===
    { article: 'die', german: 'Prüfung', english: 'Exam', plural: 'Prüfungen', level: LanguageLevel.A1, subTheme: 'Examens', example: 'Eine Prüfung schreiben.' },
    { article: 'der', german: 'Test', english: 'Test', plural: 'Tests', level: LanguageLevel.A1, subTheme: 'Examens', example: 'Einen Test machen.' },
    { article: 'die', german: 'Klassenarbeit', english: 'Class test', plural: 'Klassenarbeiten', level: LanguageLevel.A1, subTheme: 'Examens', example: 'Eine Klassenarbeit schreiben.' },
    { article: 'die', german: 'Note', english: 'Grade / Mark', plural: 'Noten', level: LanguageLevel.A1, subTheme: 'Examens', example: 'Gute Noten bekommen.' },
    { article: 'das', german: 'Zeugnis', english: 'Report card', plural: 'Zeugnisse', level: LanguageLevel.A1, subTheme: 'Examens', example: 'Das Zeugnis abholen.' },
    { article: 'die', german: 'Hausaufgabe', english: 'Homework', plural: 'Hausaufgaben', level: LanguageLevel.A1, subTheme: 'Examens', example: 'Hausaufgaben machen.' },
    { article: 'das', german: 'Abitur', english: 'High school graduation exam', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Examens', example: 'Das Abitur bestehen.' },
    { article: 'das', german: 'Ergebnis', english: 'Result', plural: 'Ergebnisse', level: LanguageLevel.A2, subTheme: 'Examens', example: 'Das Ergebnis der Prüfung.' },

    // === UNIVERSITÉ ===
    { article: 'die', german: 'Universität', english: 'University', plural: 'Universitäten', level: LanguageLevel.A1, subTheme: 'Université', example: 'An der Universität studieren.' },
    { article: 'die', german: 'Uni', english: 'Uni', plural: 'Unis', level: LanguageLevel.A1, subTheme: 'Université', example: 'Ich gehe zur Uni.' },
    { article: 'die', german: 'Hochschule', english: 'College / University of Applied Sciences', plural: 'Hochschulen', level: LanguageLevel.A2, subTheme: 'Université', example: 'Eine technische Hochschule.' },
    { article: 'die', german: 'Fakultät', english: 'Faculty', plural: 'Fakultäten', level: LanguageLevel.B1, subTheme: 'Université', example: 'Die juristische Fakultät.' },
    { article: 'das', german: 'Studium', english: 'Studies', plural: 'Studien', level: LanguageLevel.A2, subTheme: 'Université', example: 'Das Studium abschließen.' },
    { article: 'der', german: 'Student', english: 'Student (m)', plural: 'Studenten', level: LanguageLevel.A1, subTheme: 'Université', example: 'Er ist Student.' },
    { article: 'die', german: 'Studentin', english: 'Student (f)', plural: 'Studentinnen', level: LanguageLevel.A1, subTheme: 'Université', example: 'Sie ist Studentin.' },
    { article: 'der', german: 'Professor', english: 'Professor', plural: 'Professoren', level: LanguageLevel.A2, subTheme: 'Université', example: 'Professor Müller.' },
    { article: 'der', german: 'Dozent', english: 'Lecturer', plural: 'Dozenten', level: LanguageLevel.B1, subTheme: 'Université', example: 'Der Dozent hält eine Vorlesung.' },
    { article: 'die', german: 'Vorlesung', english: 'Lecture', plural: 'Vorlesungen', level: LanguageLevel.A2, subTheme: 'Université', example: 'Eine Vorlesung besuchen.' },
    { article: 'das', german: 'Seminar', english: 'Seminar', plural: 'Seminare', level: LanguageLevel.A2, subTheme: 'Université', example: 'Ein Seminar über Literatur.' },
    { article: 'das', german: 'Semester', english: 'Semester', plural: 'Semester', level: LanguageLevel.A2, subTheme: 'Université', example: 'Im ersten Semester.' },
    { article: 'die', german: 'Bibliothek', english: 'Library', plural: 'Bibliotheken', level: LanguageLevel.A1, subTheme: 'Université', example: 'In der Bibliothek lernen.' },
    { article: 'das', german: 'Stipendium', english: 'Scholarship', plural: 'Stipendien', level: LanguageLevel.B1, subTheme: 'Université', example: 'Ein Stipendium bekommen.' },
    { article: 'der', german: 'Abschluss', english: 'Degree / Graduation', plural: 'Abschlüsse', level: LanguageLevel.A2, subTheme: 'Université', example: 'Den Abschluss machen.' },
    { article: 'der', german: 'Bachelor', english: 'Bachelor', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Université', example: 'Den Bachelor in Wirtschaft machen.' },
    { article: 'der', german: 'Master', english: 'Master', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Université', example: 'Einen Master machen.' },
    { article: 'die', german: 'Dissertation', english: 'Dissertation / Thesis', plural: 'Dissertationen', level: LanguageLevel.B2, subTheme: 'Université', example: 'Die Dissertation schreiben.' },
    { article: 'der', german: 'Doktor', english: 'Doctorate / PhD', plural: 'Doktoren', level: LanguageLevel.B1, subTheme: 'Université', example: 'Den Doktor machen.' },

    // === FORMATION PROFESSIONNELLE ===
    { article: 'die', german: 'Ausbildung', english: 'Apprenticeship / Vocational training', plural: 'Ausbildungen', level: LanguageLevel.A2, subTheme: 'Formation', example: 'Eine Ausbildung machen.' },
    { article: 'der', german: 'Azubi', english: 'Apprentice', plural: 'Azubis', level: LanguageLevel.A2, subTheme: 'Formation', example: 'Er ist Azubi bei BMW.' },
    { article: 'die', german: 'Berufsschule', english: 'Vocational school', plural: 'Berufsschulen', level: LanguageLevel.A2, subTheme: 'Formation', example: 'Die Berufsschule besuchen.' },
    { article: 'das', german: 'Praktikum', english: 'Internship', plural: 'Praktika', level: LanguageLevel.A2, subTheme: 'Formation', example: 'Ein Praktikum machen.' },
    { article: 'der', german: 'Praktikant', english: 'Intern', plural: 'Praktikanten', level: LanguageLevel.A2, subTheme: 'Formation', example: 'Der Praktikant ist neu.' },
    { article: 'die', german: 'Weiterbildung', english: 'Further education / Training', plural: 'Weiterbildungen', level: LanguageLevel.B1, subTheme: 'Formation', example: 'Eine Weiterbildung besuchen.' },

    // === VERBES ===
    { article: '', german: 'lernen', english: 'to learn / to study', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Verbes', example: 'Deutsch lernen.' },
    { article: '', german: 'studieren', english: 'to study (at university)', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Verbes', example: 'An der Uni studieren.' },
    { article: '', german: 'unterrichten', english: 'to teach', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Verbes', example: 'Er unterrichtet Deutsch.' },
    { article: '', german: 'lehren', english: 'to teach', plural: 'n/a', level: LanguageLevel.B1, subTheme: 'Verbes', example: 'An der Universität lehren.' },
    { article: '', german: 'üben', english: 'to practice', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Verbes', example: 'Jeden Tag üben.' },
    { article: '', german: 'wiederholen', english: 'to revise / to repeat', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Verbes', example: 'Die Lektion wiederholen.' },
    { article: '', german: 'verstehen', english: 'to understand', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Verbes', example: 'Ich verstehe nicht.' },
    { article: '', german: 'erklären', english: 'to explain', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Verbes', example: 'Können Sie das erklären?' },
    { article: '', german: 'bestehen', english: 'to pass (exam)', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Verbes', example: 'Die Prüfung bestehen.' },
    { article: '', german: 'durchfallen', english: 'to fail', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Verbes', example: 'Bei der Prüfung durchfallen.' },
    { article: '', german: 'abschließen', english: 'to complete / to finish', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Verbes', example: 'Das Studium abschließen.' },
    { article: '', german: 'sich anmelden', english: 'to register', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Verbes', example: 'Sich für den Kurs anmelden.' },
    { article: '', german: 'sich konzentrieren', english: 'to concentrate', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Verbes', example: 'Ich muss mich konzentrieren.' }
  ],
  phrases: [
    // Questions en classe
    { german: 'Können Sie das bitte wiederholen?', english: 'Could you please repeat that?', context: 'Classe' },
    { german: 'Ich verstehe das nicht.', english: 'I don\'t understand that.', context: 'Classe' },
    { german: 'Wie sagt man das auf Deutsch?', english: 'How do you say that in German?', context: 'Classe' },
    { german: 'Darf ich eine Frage stellen?', english: 'May I ask a question?', context: 'Classe' },
    { german: 'Was bedeutet dieses Wort?', english: 'What does this word mean?', context: 'Classe' },

    // Études
    { german: 'Ich studiere Informatik.', english: 'I study computer science.', context: 'Université' },
    { german: 'In welchem Semester bist du?', english: 'Which semester are you in?', context: 'Université' },
    { german: 'Hast du für die Prüfung gelernt?', english: 'Did you study for the exam?', context: 'Examens' },
    { german: 'Ich muss noch meine Hausaufgaben machen.', english: 'I still have to do my homework.', context: 'École' },
    { german: 'Wann ist die nächste Prüfung?', english: 'When is the next exam?', context: 'Examens' },

    // Résultats
    { german: 'Ich habe die Prüfung bestanden!', english: 'I passed the exam!', context: 'Examens' },
    { german: 'Welche Note hast du bekommen?', english: 'What grade did you get?', context: 'Examens' },
    { german: 'Ich bin durch die Prüfung gefallen.', english: 'I failed the exam.', context: 'Examens' }
  ]
};
