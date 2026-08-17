
import { ThemeContent, LanguageLevel } from '../../types';

export const educationContent: ThemeContent = {
  words: [
    // === ÉCOLE ===
    { article: 'die', german: 'Schule', english: 'School', french: 'École', plural: 'Schulen', level: LanguageLevel.A1, subTheme: 'École', example: 'In die Schule gehen.' },
    { article: 'die', german: 'Grundschule', english: 'Primary school / Elementary school', french: 'École primaire', plural: 'Grundschulen', level: LanguageLevel.A1, subTheme: 'École', example: 'Die Grundschule dauert 4 Jahre.' },
    { article: 'das', german: 'Gymnasium', english: 'High school / Grammar school', french: 'Lycée', plural: 'Gymnasien', level: LanguageLevel.A2, subTheme: 'École', example: 'Er besucht das Gymnasium.' },
    { article: 'die', german: 'Realschule', english: 'Secondary school (intermediate)', french: 'Collège (filière intermédiaire)', plural: 'Realschulen', level: LanguageLevel.A2, subTheme: 'École', example: 'Die Realschule endet mit der 10. Klasse.' },
    { article: 'die', german: 'Hauptschule', english: 'Secondary school (vocational)', french: 'Collège (filière professionnelle)', plural: 'Hauptschulen', level: LanguageLevel.A2, subTheme: 'École', example: 'Die Hauptschule bereitet auf Berufe vor.' },
    { article: 'die', german: 'Gesamtschule', english: 'Comprehensive school', french: 'École polyvalente', plural: 'Gesamtschulen', level: LanguageLevel.B1, subTheme: 'École', example: 'Eine Gesamtschule vereint alle Schulformen.' },
    { article: 'der', german: 'Kindergarten', english: 'Kindergarten', french: 'École maternelle', plural: 'Kindergärten', level: LanguageLevel.A1, subTheme: 'École', example: 'Kinder gehen in den Kindergarten.' },
    { article: 'die', german: 'Klasse', english: 'Class / Grade', french: 'Classe / Niveau', plural: 'Klassen', level: LanguageLevel.A1, subTheme: 'École', example: 'In welche Klasse gehst du?' },
    { article: 'das', german: 'Klassenzimmer', english: 'Classroom', french: 'Salle de classe', plural: 'Klassenzimmer', level: LanguageLevel.A1, subTheme: 'École', example: 'Das Klassenzimmer ist groß.' },
    { article: 'die', german: 'Tafel', english: 'Blackboard', french: 'Tableau', plural: 'Tafeln', level: LanguageLevel.A1, subTheme: 'École', example: 'An die Tafel schreiben.' },
    { article: 'die', german: 'Kreide', english: 'Chalk', french: 'Craie', plural: 'Kreiden', level: LanguageLevel.A2, subTheme: 'École', example: 'Mit Kreide schreiben.' },
    { article: 'der', german: 'Schwamm', english: 'Sponge', french: 'Éponge', plural: 'Schwämme', level: LanguageLevel.A2, subTheme: 'École', example: 'Die Tafel mit dem Schwamm wischen.' },
    { article: 'die', german: 'Schulbank', english: 'Desk (school)', french: 'Pupitre', plural: 'Schulbänke', level: LanguageLevel.A2, subTheme: 'École', example: 'In der Schulbank sitzen.' },
    { article: 'der', german: 'Schulhof', english: 'Schoolyard / Playground', french: 'Cour de récréation', plural: 'Schulhöfe', level: LanguageLevel.A1, subTheme: 'École', example: 'In der Pause auf dem Schulhof spielen.' },
    { article: 'die', german: 'Turnhalle', english: 'Gym', french: 'Gymnase', plural: 'Turnhallen', level: LanguageLevel.A2, subTheme: 'École', example: 'Sport in der Turnhalle.' },
    { article: 'die', german: 'Mensa', english: 'Canteen / Cafeteria', french: 'Cantine', plural: 'Mensen', level: LanguageLevel.A2, subTheme: 'École', example: 'In der Mensa essen.' },

    // === PERSONNES ===
    { article: 'der', german: 'Lehrer', english: 'Teacher (m)', french: 'Professeur', plural: 'Lehrer', level: LanguageLevel.A1, subTheme: 'Personnes', example: 'Ein geduldiger Lehrer.' },
    { article: 'die', german: 'Lehrerin', english: 'Teacher (f)', french: 'Professeure', plural: 'Lehrerinnen', level: LanguageLevel.A1, subTheme: 'Personnes', example: 'Meine Lehrerin ist nett.' },
    { article: 'der', german: 'Schüler', english: 'Student / Pupil (m)', french: 'Élève', plural: 'Schüler', level: LanguageLevel.A1, subTheme: 'Personnes', example: 'Die Schüler lernen fleißig.' },
    { article: 'die', german: 'Schülerin', english: 'Student / Pupil (f)', french: 'Élève (f)', plural: 'Schülerinnen', level: LanguageLevel.A1, subTheme: 'Personnes', example: 'Die Schülerin meldet sich.' },
    { article: 'der', german: 'Direktor', english: 'Principal / Headmaster', french: 'Directeur', plural: 'Direktoren', level: LanguageLevel.A2, subTheme: 'Personnes', example: 'Der Direktor der Schule.' },
    { article: 'die', german: 'Direktorin', english: 'Principal (f)', french: 'Directrice', plural: 'Direktorinnen', level: LanguageLevel.A2, subTheme: 'Personnes', example: 'Die Direktorin hält eine Rede.' },
    { article: 'der', german: 'Klassenlehrer', english: 'Homeroom teacher', french: 'Professeur principal', plural: 'Klassenlehrer', level: LanguageLevel.A2, subTheme: 'Personnes', example: 'Mein Klassenlehrer ist Herr Müller.' },
    { article: 'der', german: 'Mitschüler', english: 'Classmate', french: 'Camarade de classe', plural: 'Mitschüler', level: LanguageLevel.A2, subTheme: 'Personnes', example: 'Meine Mitschüler sind nett.' },

    // === MATIÈRES ===
    { article: 'das', german: 'Fach', english: 'Subject', french: 'Matière', plural: 'Fächer', level: LanguageLevel.A1, subTheme: 'Matières', example: 'Mein Lieblingsfach ist Mathe.' },
    { article: 'die', german: 'Mathematik', english: 'Mathematics / Math', french: 'Mathématiques', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Matières', example: 'Mathematik ist schwer.' },
    { article: 'das', german: 'Deutsch', english: 'German', french: 'Allemand', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Matières', example: 'Wir haben Deutsch.' },
    { article: 'das', german: 'Englisch', english: 'English', french: 'Anglais', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Matières', example: 'Englisch lernen.' },
    { article: 'das', german: 'Französisch', english: 'French', french: 'Français', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Matières', example: 'Französisch als Fremdsprache.' },
    { article: 'die', german: 'Geschichte', english: 'History', french: 'Histoire', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Matières', example: 'Geschichte ist interessant.' },
    { article: 'die', german: 'Geografie', english: 'Geography', french: 'Géographie', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Matières', example: 'In Geografie lernen wir über Länder.' },
    { article: 'die', german: 'Biologie', english: 'Biology', french: 'Biologie', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Matières', example: 'Biologie ist spannend.' },
    { article: 'die', german: 'Physik', english: 'Physics', french: 'Physique', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Matières', example: 'Physik-Experimente.' },
    { article: 'die', german: 'Chemie', english: 'Chemistry', french: 'Chimie', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Matières', example: 'Chemie im Labor.' },
    { article: 'die', german: 'Kunst', english: 'Art', french: 'Arts plastiques', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Matières', example: 'In Kunst malen wir.' },
    { article: 'die', german: 'Musik', english: 'Music', french: 'Musique', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Matières', example: 'Im Musikunterricht singen.' },
    { article: 'der', german: 'Sport', english: 'PE / Sports', french: 'Éducation physique', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Matières', example: 'Sport in der Turnhalle.' },
    { article: 'die', german: 'Informatik', english: 'Computer science', french: 'Informatique', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Matières', example: 'Informatik lernen.' },
    { article: 'die', german: 'Religion', english: 'Religion', french: 'Religion', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Matières', example: 'Religionsunterricht.' },
    { article: 'die', german: 'Philosophie', english: 'Philosophy', french: 'Philosophie', plural: 'n/a', level: LanguageLevel.B1, subTheme: 'Matières', example: 'Philosophie studieren.' },

    // === FOURNITURES ===
    { article: 'das', german: 'Buch', english: 'Book', french: 'Livre', plural: 'Bücher', level: LanguageLevel.A1, subTheme: 'Fournitures', example: 'Das Buch lesen.' },
    { article: 'das', german: 'Heft', english: 'Notebook', french: 'Cahier', plural: 'Hefte', level: LanguageLevel.A1, subTheme: 'Fournitures', example: 'Im Heft schreiben.' },
    { article: 'das', german: 'Schulbuch', english: 'Textbook', french: 'Manuel scolaire', plural: 'Schulbücher', level: LanguageLevel.A1, subTheme: 'Fournitures', example: 'Das Schulbuch aufschlagen.' },
    { article: 'der', german: 'Kugelschreiber', english: 'Pen', french: 'Stylo', plural: 'Kugelschreiber', level: LanguageLevel.A1, subTheme: 'Fournitures', example: 'Mit dem Kugelschreiber schreiben.' },
    { article: 'der', german: 'Bleistift', english: 'Pencil', french: 'Crayon', plural: 'Bleistifte', level: LanguageLevel.A1, subTheme: 'Fournitures', example: 'Den Bleistift spitzen.' },
    { article: 'der', german: 'Radiergummi', english: 'Eraser', french: 'Gomme', plural: 'Radiergummis', level: LanguageLevel.A1, subTheme: 'Fournitures', example: 'Mit dem Radiergummi radieren.' },
    { article: 'das', german: 'Lineal', english: 'Ruler', french: 'Règle', plural: 'Lineale', level: LanguageLevel.A1, subTheme: 'Fournitures', example: 'Mit dem Lineal messen.' },
    { article: 'die', german: 'Schere', english: 'Scissors', french: 'Ciseaux', plural: 'Scheren', level: LanguageLevel.A1, subTheme: 'Fournitures', example: 'Mit der Schere schneiden.' },
    { article: 'der', german: 'Kleber', english: 'Glue', french: 'Colle', plural: 'Kleber', level: LanguageLevel.A1, subTheme: 'Fournitures', example: 'Mit Kleber kleben.' },
    { article: 'die', german: 'Schultasche', english: 'Schoolbag', french: 'Cartable', plural: 'Schultaschen', level: LanguageLevel.A1, subTheme: 'Fournitures', example: 'Die Schultasche packen.' },
    { article: 'der', german: 'Rucksack', english: 'Backpack', french: 'Sac à dos', plural: 'Rucksäcke', level: LanguageLevel.A1, subTheme: 'Fournitures', example: 'Der Rucksack ist schwer.' },
    { article: 'das', german: 'Mäppchen', english: 'Pencil case', french: 'Trousse', plural: 'Mäppchen', level: LanguageLevel.A1, subTheme: 'Fournitures', example: 'Stifte im Mäppchen.' },
    { article: 'der', german: 'Taschenrechner', english: 'Calculator', french: 'Calculatrice', plural: 'Taschenrechner', level: LanguageLevel.A2, subTheme: 'Fournitures', example: 'Den Taschenrechner benutzen.' },
    { article: 'der', german: 'Computer', english: 'Computer', french: 'Ordinateur', plural: 'Computer', level: LanguageLevel.A1, subTheme: 'Fournitures', example: 'Am Computer arbeiten.' },

    // === EXAMENS / NOTES ===
    { article: 'die', german: 'Prüfung', english: 'Exam', french: 'Examen', plural: 'Prüfungen', level: LanguageLevel.A1, subTheme: 'Examens', example: 'Eine Prüfung schreiben.' },
    { article: 'der', german: 'Test', english: 'Test', french: 'Test', plural: 'Tests', level: LanguageLevel.A1, subTheme: 'Examens', example: 'Einen Test machen.' },
    { article: 'die', german: 'Klassenarbeit', english: 'Class test', french: 'Contrôle', plural: 'Klassenarbeiten', level: LanguageLevel.A1, subTheme: 'Examens', example: 'Eine Klassenarbeit schreiben.' },
    { article: 'die', german: 'Note', english: 'Grade / Mark', french: 'Note', plural: 'Noten', level: LanguageLevel.A1, subTheme: 'Examens', example: 'Gute Noten bekommen.' },
    { article: 'das', german: 'Zeugnis', english: 'Report card', french: 'Bulletin scolaire', plural: 'Zeugnisse', level: LanguageLevel.A1, subTheme: 'Examens', example: 'Das Zeugnis abholen.' },
    { article: 'die', german: 'Hausaufgabe', english: 'Homework', french: 'Devoir', plural: 'Hausaufgaben', level: LanguageLevel.A1, subTheme: 'Examens', example: 'Hausaufgaben machen.' },
    { article: 'das', german: 'Abitur', english: 'High school graduation exam', french: 'Baccalauréat', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Examens', example: 'Das Abitur bestehen.' },
    { article: 'das', german: 'Ergebnis', english: 'Result', french: 'Résultat', plural: 'Ergebnisse', level: LanguageLevel.A2, subTheme: 'Examens', example: 'Das Ergebnis der Prüfung.' },

    // === UNIVERSITÉ ===
    { article: 'die', german: 'Universität', english: 'University', french: 'Université', plural: 'Universitäten', level: LanguageLevel.A1, subTheme: 'Université', example: 'An der Universität studieren.' },
    { article: 'die', german: 'Uni', english: 'Uni', french: 'Fac', plural: 'Unis', level: LanguageLevel.A1, subTheme: 'Université', example: 'Ich gehe zur Uni.' },
    { article: 'die', german: 'Hochschule', english: 'College / University of Applied Sciences', french: 'Établissement supérieur', plural: 'Hochschulen', level: LanguageLevel.A2, subTheme: 'Université', example: 'Eine technische Hochschule.' },
    { article: 'die', german: 'Fakultät', english: 'Faculty', french: 'Faculté', plural: 'Fakultäten', level: LanguageLevel.B1, subTheme: 'Université', example: 'Die juristische Fakultät.' },
    { article: 'das', german: 'Studium', english: 'Studies', french: 'Études', plural: 'Studien', level: LanguageLevel.A2, subTheme: 'Université', example: 'Das Studium abschließen.' },
    { article: 'der', german: 'Student', english: 'Student (m)', french: 'Étudiant', plural: 'Studenten', level: LanguageLevel.A1, subTheme: 'Université', example: 'Er ist Student.' },
    { article: 'die', german: 'Studentin', english: 'Student (f)', french: 'Étudiante', plural: 'Studentinnen', level: LanguageLevel.A1, subTheme: 'Université', example: 'Sie ist Studentin.' },
    { article: 'der', german: 'Professor', english: 'Professor', french: 'Professeur d\'université', plural: 'Professoren', level: LanguageLevel.A2, subTheme: 'Université', example: 'Professor Müller.' },
    { article: 'der', german: 'Dozent', english: 'Lecturer', french: 'Chargé de cours', plural: 'Dozenten', level: LanguageLevel.B1, subTheme: 'Université', example: 'Der Dozent hält eine Vorlesung.' },
    { article: 'die', german: 'Vorlesung', english: 'Lecture', french: 'Cours magistral', plural: 'Vorlesungen', level: LanguageLevel.A2, subTheme: 'Université', example: 'Eine Vorlesung besuchen.' },
    { article: 'das', german: 'Seminar', english: 'Seminar', french: 'Séminaire', plural: 'Seminare', level: LanguageLevel.A2, subTheme: 'Université', example: 'Ein Seminar über Literatur.' },
    { article: 'das', german: 'Semester', english: 'Semester', french: 'Semestre', plural: 'Semester', level: LanguageLevel.A2, subTheme: 'Université', example: 'Im ersten Semester.' },
    { article: 'die', german: 'Bibliothek', english: 'Library', french: 'Bibliothèque', plural: 'Bibliotheken', level: LanguageLevel.A1, subTheme: 'Université', example: 'In der Bibliothek lernen.' },
    { article: 'das', german: 'Stipendium', english: 'Scholarship', french: 'Bourse', plural: 'Stipendien', level: LanguageLevel.B1, subTheme: 'Université', example: 'Ein Stipendium bekommen.' },
    { article: 'der', german: 'Abschluss', english: 'Degree / Graduation', french: 'Diplôme', plural: 'Abschlüsse', level: LanguageLevel.A2, subTheme: 'Université', example: 'Den Abschluss machen.' },
    { article: 'der', german: 'Bachelor', english: 'Bachelor', french: 'Licence', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Université', example: 'Den Bachelor in Wirtschaft machen.' },
    { article: 'der', german: 'Master', english: 'Master', french: 'Master', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Université', example: 'Einen Master machen.' },
    { article: 'die', german: 'Dissertation', english: 'Dissertation / Thesis', french: 'Thèse', plural: 'Dissertationen', level: LanguageLevel.B2, subTheme: 'Université', example: 'Die Dissertation schreiben.' },
    { article: 'der', german: 'Doktor', english: 'Doctorate / PhD', french: 'Doctorat', plural: 'Doktoren', level: LanguageLevel.B1, subTheme: 'Université', example: 'Den Doktor machen.' },

    // === FORMATION PROFESSIONNELLE ===
    { article: 'die', german: 'Ausbildung', english: 'Apprenticeship / Vocational training', french: 'Formation professionnelle', plural: 'Ausbildungen', level: LanguageLevel.A2, subTheme: 'Formation', example: 'Eine Ausbildung machen.' },
    { article: 'der', german: 'Azubi', english: 'Apprentice', french: 'Apprenti', plural: 'Azubis', level: LanguageLevel.A2, subTheme: 'Formation', example: 'Er ist Azubi bei BMW.' },
    { article: 'die', german: 'Berufsschule', english: 'Vocational school', french: 'École professionnelle', plural: 'Berufsschulen', level: LanguageLevel.A2, subTheme: 'Formation', example: 'Die Berufsschule besuchen.' },
    { article: 'das', german: 'Praktikum', english: 'Internship', french: 'Stage', plural: 'Praktika', level: LanguageLevel.A2, subTheme: 'Formation', example: 'Ein Praktikum machen.' },
    { article: 'der', german: 'Praktikant', english: 'Intern', french: 'Stagiaire', plural: 'Praktikanten', level: LanguageLevel.A2, subTheme: 'Formation', example: 'Der Praktikant ist neu.' },
    { article: 'die', german: 'Weiterbildung', english: 'Further education / Training', french: 'Formation continue', plural: 'Weiterbildungen', level: LanguageLevel.B1, subTheme: 'Formation', example: 'Eine Weiterbildung besuchen.' },

    // === VERBES ===
    { article: '', german: 'lernen', english: 'to learn / to study', french: 'apprendre / réviser', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Verbes', example: 'Deutsch lernen.' },
    { article: '', german: 'studieren', english: 'to study (at university)', french: 'faire des études', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Verbes', example: 'An der Uni studieren.' },
    { article: '', german: 'unterrichten', english: 'to teach', french: 'enseigner', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Verbes', example: 'Er unterrichtet Deutsch.' },
    { article: '', german: 'lehren', english: 'to teach', french: 'enseigner', plural: 'n/a', level: LanguageLevel.B1, subTheme: 'Verbes', example: 'An der Universität lehren.' },
    { article: '', german: 'üben', english: 'to practice', french: 's\'exercer', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Verbes', example: 'Jeden Tag üben.' },
    { article: '', german: 'wiederholen', english: 'to revise / to repeat', french: 'réviser / répéter', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Verbes', example: 'Die Lektion wiederholen.' },
    { article: '', german: 'verstehen', english: 'to understand', french: 'comprendre', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Verbes', example: 'Ich verstehe nicht.' },
    { article: '', german: 'erklären', english: 'to explain', french: 'expliquer', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Verbes', example: 'Können Sie das erklären?' },
    { article: '', german: 'bestehen', english: 'to pass (exam)', french: 'réussir (un examen)', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Verbes', example: 'Die Prüfung bestehen.' },
    { article: '', german: 'durchfallen', english: 'to fail', french: 'échouer', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Verbes', example: 'Bei der Prüfung durchfallen.' },
    { article: '', german: 'abschließen', english: 'to complete / to finish', french: 'achever / terminer', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Verbes', example: 'Das Studium abschließen.' },
    { article: '', german: 'sich anmelden', english: 'to register', french: 's\'inscrire', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Verbes', example: 'Sich für den Kurs anmelden.' },
    { article: '', german: 'sich konzentrieren', english: 'to concentrate', french: 'se concentrer', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Verbes', example: 'Ich muss mich konzentrieren.' }
  ],
  phrases: [
    // Questions en classe
    { german: 'Können Sie das bitte wiederholen?', english: 'Could you please repeat that?', french: 'Pouvez-vous répéter, s\'il vous plaît ?', italian: 'Può ripetere, per favore?', context: 'Classe' },
    { german: 'Ich verstehe das nicht.', english: 'I don\'t understand that.', french: 'Je ne comprends pas.', italian: 'Non capisco.', context: 'Classe' },
    { german: 'Wie sagt man das auf Deutsch?', english: 'How do you say that in German?', french: 'Comment dit-on cela en allemand ?', italian: 'Come si dice in tedesco?', context: 'Classe' },
    { german: 'Darf ich eine Frage stellen?', english: 'May I ask a question?', french: 'Puis-je poser une question ?', italian: 'Posso fare una domanda?', context: 'Classe' },
    { german: 'Was bedeutet dieses Wort?', english: 'What does this word mean?', french: 'Que signifie ce mot ?', italian: 'Che cosa significa questa parola?', context: 'Classe' },

    // Études
    { german: 'Ich studiere Informatik.', english: 'I study computer science.', french: 'J\'étudie l\'informatique.', italian: 'Studio informatica.', context: 'Université' },
    { german: 'In welchem Semester bist du?', english: 'Which semester are you in?', french: 'En quel semestre es-tu ?', italian: 'A che semestre sei?', context: 'Université' },
    { german: 'Hast du für die Prüfung gelernt?', english: 'Did you study for the exam?', french: 'As-tu révisé pour l\'examen ?', italian: 'Hai studiato per l\'esame?', context: 'Examens' },
    { german: 'Ich muss noch meine Hausaufgaben machen.', english: 'I still have to do my homework.', french: 'Je dois encore faire mes devoirs.', italian: 'Devo ancora fare i compiti.', context: 'École' },
    { german: 'Wann ist die nächste Prüfung?', english: 'When is the next exam?', french: 'Quand a lieu le prochain examen ?', italian: 'Quando è il prossimo esame?', context: 'Examens' },

    // Résultats
    { german: 'Ich habe die Prüfung bestanden!', english: 'I passed the exam!', french: 'J\'ai réussi l\'examen !', italian: 'Ho superato l\'esame!', context: 'Examens' },
    { german: 'Welche Note hast du bekommen?', english: 'What grade did you get?', french: 'Quelle note as-tu eue ?', italian: 'Che voto hai preso?', context: 'Examens' },
    { german: 'Ich bin durch die Prüfung gefallen.', english: 'I failed the exam.', french: 'J\'ai raté l\'examen.', italian: 'Sono stato bocciato all\'esame.', context: 'Examens' }
  ]
};
