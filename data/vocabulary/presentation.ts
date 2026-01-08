
import { ThemeContent, LanguageLevel } from '../../types';

export const presentationContent: ThemeContent = {
  words: [
    // === SALUTATIONS ===
    { article: '', german: 'Hallo', french: 'Salut / Bonjour', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Salutations', example: 'Hallo, wie geht es dir?' },
    { article: '', german: 'Guten Morgen', french: 'Bonjour (matin)', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Salutations', example: 'Guten Morgen! Hast du gut geschlafen?' },
    { article: '', german: 'Guten Tag', french: 'Bonjour (journée)', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Salutations', example: 'Guten Tag, Frau Müller!' },
    { article: '', german: 'Guten Abend', french: 'Bonsoir', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Salutations', example: 'Guten Abend, meine Damen und Herren!' },
    { article: '', german: 'Gute Nacht', french: 'Bonne nuit', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Salutations', example: 'Gute Nacht, schlaf gut!' },
    { article: '', german: 'Willkommen', french: 'Bienvenue', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Salutations', example: 'Herzlich willkommen in Berlin!' },
    { article: '', german: 'Tschüss', french: 'Salut / Au revoir', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Salutations', example: 'Tschüss, bis morgen!' },
    { article: '', german: 'Auf Wiedersehen', french: 'Au revoir (formel)', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Salutations', example: 'Auf Wiedersehen, Herr Schmidt!' },
    { article: '', german: 'Bis bald', french: 'À bientôt', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Salutations', example: 'Bis bald, pass auf dich auf!' },
    { article: '', german: 'Bis später', french: 'À plus tard', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Salutations', example: 'Bis später im Büro!' },
    { article: '', german: 'Bis morgen', french: 'À demain', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Salutations', example: 'Bis morgen in der Schule!' },
    { article: '', german: 'Servus', french: 'Salut (Bavière/Autriche)', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Salutations', example: 'Servus! Wie geht\'s?' },
    { article: '', german: 'Grüß Gott', french: 'Bonjour (sud Allemagne)', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Salutations', example: 'Grüß Gott! Schönes Wetter heute!' },
    { article: '', german: 'Moin', french: 'Salut (nord Allemagne)', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Salutations', example: 'Moin! Alles klar?' },
    { article: 'die', german: 'Begrüßung', french: 'Salutation', plural: 'Begrüßungen', level: LanguageLevel.A2, subTheme: 'Salutations', example: 'Die Begrüßung war sehr herzlich.' },
    { article: 'der', german: 'Abschied', french: 'Adieu / Départ', plural: 'Abschiede', level: LanguageLevel.A2, subTheme: 'Salutations', example: 'Der Abschied fiel mir schwer.' },
    
    // === IDENTITÉ ===
    { article: 'der', german: 'Name', french: 'Nom', plural: 'Namen', level: LanguageLevel.A1, subTheme: 'Identité', example: 'Wie ist Ihr Name?' },
    { article: 'der', german: 'Vorname', french: 'Prénom', plural: 'Vornamen', level: LanguageLevel.A1, subTheme: 'Identité', example: 'Mein Vorname ist Thomas.' },
    { article: 'der', german: 'Nachname', french: 'Nom de famille', plural: 'Nachnamen', level: LanguageLevel.A1, subTheme: 'Identité', example: 'Wie schreibt man Ihren Nachnamen?' },
    { article: 'der', german: 'Familienname', french: 'Nom de famille', plural: 'Familiennamen', level: LanguageLevel.A1, subTheme: 'Identité', example: 'Mein Familienname ist Müller.' },
    { article: 'der', german: 'Spitzname', french: 'Surnom', plural: 'Spitznamen', level: LanguageLevel.A2, subTheme: 'Identité', example: 'Mein Spitzname ist Max.' },
    { article: 'das', german: 'Alter', french: 'Âge', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Identité', example: 'Wie alt bist du? - Ich bin 25 Jahre alt.' },
    { article: 'der', german: 'Geburtstag', french: 'Anniversaire', plural: 'Geburtstage', level: LanguageLevel.A1, subTheme: 'Identité', example: 'Wann hast du Geburtstag?' },
    { article: 'das', german: 'Geburtsdatum', french: 'Date de naissance', plural: 'Geburtsdaten', level: LanguageLevel.A2, subTheme: 'Identité', example: 'Mein Geburtsdatum ist der 15. März 1990.' },
    { article: 'der', german: 'Geburtsort', french: 'Lieu de naissance', plural: 'Geburtsorte', level: LanguageLevel.A2, subTheme: 'Identité', example: 'Mein Geburtsort ist Hamburg.' },
    { article: 'das', german: 'Geschlecht', french: 'Sexe / Genre', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Identité', example: 'Geschlecht: männlich oder weiblich.' },
    { article: '', german: 'männlich', french: 'masculin', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Identité', example: 'Er ist männlich.' },
    { article: '', german: 'weiblich', french: 'féminin', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Identité', example: 'Sie ist weiblich.' },
    { article: 'die', german: 'Staatsangehörigkeit', french: 'Nationalité', plural: 'Staatsangehörigkeiten', level: LanguageLevel.A2, subTheme: 'Identité', example: 'Meine Staatsangehörigkeit ist deutsch.' },
    { article: 'die', german: 'Nationalität', french: 'Nationalité', plural: 'Nationalitäten', level: LanguageLevel.A1, subTheme: 'Identité', example: 'Welche Nationalität haben Sie?' },
    { article: 'das', german: 'Land', french: 'Pays', plural: 'Länder', level: LanguageLevel.A1, subTheme: 'Identité', example: 'Aus welchem Land kommst du?' },
    { article: 'die', german: 'Herkunft', french: 'Origine', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Identité', example: 'Meine Herkunft ist französisch.' },
    
    // === NATIONALITÉS ===
    { article: '', german: 'deutsch', french: 'allemand', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Nationalités', example: 'Ich bin deutsch.' },
    { article: '', german: 'französisch', french: 'français', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Nationalités', example: 'Er spricht französisch.' },
    { article: '', german: 'englisch', french: 'anglais', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Nationalités', example: 'Sie ist englisch.' },
    { article: '', german: 'spanisch', french: 'espagnol', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Nationalités', example: 'Er lernt spanisch.' },
    { article: '', german: 'italienisch', french: 'italien', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Nationalités', example: 'Das Essen ist italienisch.' },
    { article: '', german: 'österreichisch', french: 'autrichien', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Nationalités', example: 'Mozart war österreichisch.' },
    { article: '', german: 'schweizerisch', french: 'suisse', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Nationalités', example: 'Schweizer Schokolade ist schweizerisch.' },
    { article: '', german: 'amerikanisch', french: 'américain', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Nationalités', example: 'Hollywood ist amerikanisch.' },
    { article: '', german: 'chinesisch', french: 'chinois', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Nationalités', example: 'Das Restaurant ist chinesisch.' },
    { article: '', german: 'japanisch', french: 'japonais', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Nationalités', example: 'Sushi ist japanisch.' },
    { article: '', german: 'russisch', french: 'russe', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Nationalités', example: 'Wodka ist russisch.' },
    { article: '', german: 'portugiesisch', french: 'portugais', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Nationalités', example: 'Fado ist portugiesisch.' },
    { article: '', german: 'polnisch', french: 'polonais', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Nationalités', example: 'Er kommt aus Polen und ist polnisch.' },
    { article: '', german: 'türkisch', french: 'turc', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Nationalités', example: 'Döner ist türkisch.' },
    { article: '', german: 'griechisch', french: 'grec', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Nationalités', example: 'Gyros ist griechisch.' },
    
    // === ADRESSE / CONTACT ===
    { article: 'die', german: 'Adresse', french: 'Adresse', plural: 'Adressen', level: LanguageLevel.A1, subTheme: 'Contact', example: 'Wie ist Ihre Adresse?' },
    { article: 'die', german: 'Straße', french: 'Rue', plural: 'Straßen', level: LanguageLevel.A1, subTheme: 'Contact', example: 'Ich wohne in der Hauptstraße.' },
    { article: 'die', german: 'Hausnummer', french: 'Numéro de maison', plural: 'Hausnummern', level: LanguageLevel.A1, subTheme: 'Contact', example: 'Meine Hausnummer ist 42.' },
    { article: 'die', german: 'Postleitzahl', french: 'Code postal', plural: 'Postleitzahlen', level: LanguageLevel.A1, subTheme: 'Contact', example: 'Die Postleitzahl von Berlin ist 10115.' },
    { article: 'die', german: 'Stadt', french: 'Ville', plural: 'Städte', level: LanguageLevel.A1, subTheme: 'Contact', example: 'In welcher Stadt wohnst du?' },
    { article: 'der', german: 'Wohnort', french: 'Lieu de résidence', plural: 'Wohnorte', level: LanguageLevel.A2, subTheme: 'Contact', example: 'Mein Wohnort ist München.' },
    { article: 'die', german: 'Telefonnummer', french: 'Numéro de téléphone', plural: 'Telefonnummern', level: LanguageLevel.A1, subTheme: 'Contact', example: 'Können Sie mir Ihre Telefonnummer geben?' },
    { article: 'die', german: 'Handynummer', french: 'Numéro de portable', plural: 'Handynummern', level: LanguageLevel.A1, subTheme: 'Contact', example: 'Hast du eine Handynummer?' },
    { article: 'die', german: 'E-Mail-Adresse', french: 'Adresse e-mail', plural: 'E-Mail-Adressen', level: LanguageLevel.A1, subTheme: 'Contact', example: 'Wie ist Ihre E-Mail-Adresse?' },
    { article: 'die', german: 'Webseite', french: 'Site web', plural: 'Webseiten', level: LanguageLevel.A2, subTheme: 'Contact', example: 'Besuchen Sie unsere Webseite.' },
    
    // === ÉTAT CIVIL / FAMILLE ===
    { article: 'der', german: 'Familienstand', french: 'Situation familiale', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'État civil', example: 'Familienstand: verheiratet.' },
    { article: '', german: 'ledig', french: 'célibataire', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'État civil', example: 'Ich bin ledig.' },
    { article: '', german: 'verheiratet', french: 'marié(e)', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'État civil', example: 'Sie ist seit fünf Jahren verheiratet.' },
    { article: '', german: 'geschieden', french: 'divorcé(e)', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'État civil', example: 'Er ist geschieden.' },
    { article: '', german: 'verwitwet', french: 'veuf/veuve', plural: 'n/a', level: LanguageLevel.B1, subTheme: 'État civil', example: 'Sie ist verwitwet.' },
    { article: '', german: 'verlobt', french: 'fiancé(e)', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'État civil', example: 'Wir sind verlobt!' },
    { article: 'der', german: 'Ehemann', french: 'Mari', plural: 'Ehemänner', level: LanguageLevel.A1, subTheme: 'État civil', example: 'Das ist mein Ehemann Peter.' },
    { article: 'die', german: 'Ehefrau', french: 'Épouse', plural: 'Ehefrauen', level: LanguageLevel.A1, subTheme: 'État civil', example: 'Meine Ehefrau heißt Anna.' },
    { article: 'der', german: 'Partner', french: 'Partenaire (m)', plural: 'Partner', level: LanguageLevel.A1, subTheme: 'État civil', example: 'Mein Partner und ich wohnen zusammen.' },
    { article: 'die', german: 'Partnerin', french: 'Partenaire (f)', plural: 'Partnerinnen', level: LanguageLevel.A1, subTheme: 'État civil', example: 'Meine Partnerin ist Ärztin.' },
    { article: 'das', german: 'Kind', french: 'Enfant', plural: 'Kinder', level: LanguageLevel.A1, subTheme: 'État civil', example: 'Wir haben zwei Kinder.' },
    { article: 'der', german: 'Sohn', french: 'Fils', plural: 'Söhne', level: LanguageLevel.A1, subTheme: 'État civil', example: 'Mein Sohn ist zehn Jahre alt.' },
    { article: 'die', german: 'Tochter', french: 'Fille', plural: 'Töchter', level: LanguageLevel.A1, subTheme: 'État civil', example: 'Meine Tochter studiert Medizin.' },
    
    // === PROFESSION ===
    { article: 'der', german: 'Beruf', french: 'Profession', plural: 'Berufe', level: LanguageLevel.A1, subTheme: 'Profession', example: 'Was ist Ihr Beruf?' },
    { article: 'die', german: 'Arbeit', french: 'Travail', plural: 'Arbeiten', level: LanguageLevel.A1, subTheme: 'Profession', example: 'Ich gehe zur Arbeit.' },
    { article: 'der', german: 'Arbeitsplatz', french: 'Lieu de travail', plural: 'Arbeitsplätze', level: LanguageLevel.A2, subTheme: 'Profession', example: 'Mein Arbeitsplatz ist im Zentrum.' },
    { article: 'der', german: 'Student', french: 'Étudiant', plural: 'Studenten', level: LanguageLevel.A1, subTheme: 'Profession', example: 'Ich bin Student an der Universität.' },
    { article: 'die', german: 'Studentin', french: 'Étudiante', plural: 'Studentinnen', level: LanguageLevel.A1, subTheme: 'Profession', example: 'Sie ist Studentin.' },
    { article: 'der', german: 'Schüler', french: 'Élève (m)', plural: 'Schüler', level: LanguageLevel.A1, subTheme: 'Profession', example: 'Der Schüler macht seine Hausaufgaben.' },
    { article: 'die', german: 'Schülerin', french: 'Élève (f)', plural: 'Schülerinnen', level: LanguageLevel.A1, subTheme: 'Profession', example: 'Die Schülerin ist sehr fleißig.' },
    { article: 'der', german: 'Lehrer', french: 'Professeur (m)', plural: 'Lehrer', level: LanguageLevel.A1, subTheme: 'Profession', example: 'Der Lehrer erklärt die Grammatik.' },
    { article: 'die', german: 'Lehrerin', french: 'Professeur (f)', plural: 'Lehrerinnen', level: LanguageLevel.A1, subTheme: 'Profession', example: 'Die Lehrerin ist sehr nett.' },
    { article: 'der', german: 'Arzt', french: 'Médecin (m)', plural: 'Ärzte', level: LanguageLevel.A1, subTheme: 'Profession', example: 'Der Arzt untersucht den Patienten.' },
    { article: 'die', german: 'Ärztin', french: 'Médecin (f)', plural: 'Ärztinnen', level: LanguageLevel.A1, subTheme: 'Profession', example: 'Die Ärztin verschreibt ein Medikament.' },
    { article: 'der', german: 'Ingenieur', french: 'Ingénieur (m)', plural: 'Ingenieure', level: LanguageLevel.A2, subTheme: 'Profession', example: 'Er arbeitet als Ingenieur.' },
    { article: 'die', german: 'Ingenieurin', french: 'Ingénieure (f)', plural: 'Ingenieurinnen', level: LanguageLevel.A2, subTheme: 'Profession', example: 'Sie ist Ingenieurin.' },
    { article: 'der', german: 'Anwalt', french: 'Avocat', plural: 'Anwälte', level: LanguageLevel.A2, subTheme: 'Profession', example: 'Der Anwalt verteidigt seinen Mandanten.' },
    { article: 'die', german: 'Anwältin', french: 'Avocate', plural: 'Anwältinnen', level: LanguageLevel.A2, subTheme: 'Profession', example: 'Die Anwältin ist sehr erfahren.' },
    { article: '', german: 'arbeitslos', french: 'au chômage', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Profession', example: 'Er ist seit drei Monaten arbeitslos.' },
    { article: '', german: 'selbstständig', french: 'indépendant', plural: 'n/a', level: LanguageLevel.B1, subTheme: 'Profession', example: 'Sie ist selbstständig und hat ihre eigene Firma.' },
    { article: 'der', german: 'Rentner', french: 'Retraité', plural: 'Rentner', level: LanguageLevel.A2, subTheme: 'Profession', example: 'Mein Großvater ist Rentner.' },
    { article: 'die', german: 'Rentnerin', french: 'Retraitée', plural: 'Rentnerinnen', level: LanguageLevel.A2, subTheme: 'Profession', example: 'Die Rentnerin genießt ihren Ruhestand.' },
    
    // === LANGUES ===
    { article: 'die', german: 'Sprache', french: 'Langue', plural: 'Sprachen', level: LanguageLevel.A1, subTheme: 'Langues', example: 'Welche Sprachen sprichst du?' },
    { article: 'die', german: 'Muttersprache', french: 'Langue maternelle', plural: 'Muttersprachen', level: LanguageLevel.A2, subTheme: 'Langues', example: 'Meine Muttersprache ist Deutsch.' },
    { article: 'die', german: 'Fremdsprache', french: 'Langue étrangère', plural: 'Fremdsprachen', level: LanguageLevel.A2, subTheme: 'Langues', example: 'Ich lerne Französisch als Fremdsprache.' },
    { article: 'das', german: 'Deutsch', french: 'Allemand', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Langues', example: 'Ich lerne Deutsch.' },
    { article: 'das', german: 'Französisch', french: 'Français', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Langues', example: 'Sie spricht Französisch.' },
    { article: 'das', german: 'Englisch', french: 'Anglais', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Langues', example: 'Englisch ist eine Weltsprache.' },
    { article: 'das', german: 'Spanisch', french: 'Espagnol', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Langues', example: 'Spanisch ist meine dritte Sprache.' },
    { article: '', german: 'sprechen', french: 'parler', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Langues', example: 'Sprechen Sie Deutsch?' },
    { article: '', german: 'verstehen', french: 'comprendre', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Langues', example: 'Ich verstehe nicht.' },
    { article: '', german: 'lernen', french: 'apprendre', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Langues', example: 'Ich lerne jeden Tag neue Wörter.' },
    { article: '', german: 'übersetzen', french: 'traduire', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Langues', example: 'Können Sie das übersetzen?' },
    
    // === VERBES DE PRÉSENTATION ===
    { article: '', german: 'heißen', french: 's\'appeler', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Verbes', example: 'Ich heiße Maria.' },
    { article: '', german: 'sein', french: 'être', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Verbes', example: 'Ich bin 30 Jahre alt.' },
    { article: '', german: 'kommen', french: 'venir', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Verbes', example: 'Ich komme aus Frankreich.' },
    { article: '', german: 'wohnen', french: 'habiter', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Verbes', example: 'Ich wohne in Berlin.' },
    { article: '', german: 'leben', french: 'vivre', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Verbes', example: 'Ich lebe seit drei Jahren in Deutschland.' },
    { article: '', german: 'arbeiten', french: 'travailler', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Verbes', example: 'Ich arbeite als Programmierer.' },
    { article: '', german: 'studieren', french: 'étudier', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Verbes', example: 'Ich studiere Informatik.' },
    { article: '', german: 'vorstellen', french: 'présenter', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Verbes', example: 'Darf ich mich vorstellen?' },
    { article: '', german: 'kennenlernen', french: 'faire connaissance', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Verbes', example: 'Freut mich, Sie kennenzulernen!' },
    { article: '', german: 'buchstabieren', french: 'épeler', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Verbes', example: 'Können Sie Ihren Namen buchstabieren?' }
  ],
  phrases: [
    // Présentations basiques
    { german: 'Ich heiße...', french: 'Je m\'appelle...', context: 'Présentation' },
    { german: 'Mein Name ist...', french: 'Mon nom est...', context: 'Présentation formelle' },
    { german: 'Ich bin...', french: 'Je suis...', context: 'Présentation' },
    { german: 'Ich komme aus...', french: 'Je viens de...', context: 'Origine' },
    { german: 'Ich wohne in...', french: 'J\'habite à...', context: 'Lieu de résidence' },
    { german: 'Ich bin ... Jahre alt.', french: 'J\'ai ... ans.', context: 'Âge' },
    
    // Questions de présentation
    { german: 'Wie heißt du?', french: 'Comment tu t\'appelles ?', context: 'Question informelle' },
    { german: 'Wie heißen Sie?', french: 'Comment vous appelez-vous ?', context: 'Question formelle' },
    { german: 'Woher kommst du?', french: 'D\'où viens-tu ?', context: 'Question informelle' },
    { german: 'Woher kommen Sie?', french: 'D\'où venez-vous ?', context: 'Question formelle' },
    { german: 'Wo wohnst du?', french: 'Où habites-tu ?', context: 'Question informelle' },
    { german: 'Wie alt bist du?', french: 'Quel âge as-tu ?', context: 'Question informelle' },
    { german: 'Was machst du beruflich?', french: 'Que fais-tu dans la vie ?', context: 'Profession' },
    { german: 'Was sind Sie von Beruf?', french: 'Quelle est votre profession ?', context: 'Profession formelle' },
    
    // Formules de politesse
    { german: 'Freut mich!', french: 'Enchanté(e) !', context: 'Première rencontre' },
    { german: 'Freut mich, Sie kennenzulernen.', french: 'Ravi(e) de vous rencontrer.', context: 'Première rencontre formelle' },
    { german: 'Gleichfalls!', french: 'De même !', context: 'Réponse à "Freut mich"' },
    { german: 'Wie geht es Ihnen?', french: 'Comment allez-vous ?', context: 'Question formelle' },
    { german: 'Wie geht\'s?', french: 'Comment ça va ?', context: 'Question informelle' },
    { german: 'Mir geht es gut, danke.', french: 'Je vais bien, merci.', context: 'Réponse' },
    { german: 'Und dir? / Und Ihnen?', french: 'Et toi ? / Et vous ?', context: 'Retourner la question' },
    
    // Présentation de la famille
    { german: 'Das ist meine Frau / mein Mann.', french: 'C\'est ma femme / mon mari.', context: 'Présentation famille' },
    { german: 'Ich habe zwei Kinder.', french: 'J\'ai deux enfants.', context: 'Famille' },
    { german: 'Ich bin verheiratet / ledig.', french: 'Je suis marié(e) / célibataire.', context: 'Situation familiale' },
    
    // Langues
    { german: 'Sprechen Sie Deutsch?', french: 'Parlez-vous allemand ?', context: 'Langues' },
    { german: 'Ich spreche ein bisschen Deutsch.', french: 'Je parle un peu allemand.', context: 'Niveau de langue' },
    { german: 'Ich lerne seit einem Jahr Deutsch.', french: 'J\'apprends l\'allemand depuis un an.', context: 'Apprentissage' },
    { german: 'Können Sie das wiederholen, bitte?', french: 'Pouvez-vous répéter, s\'il vous plaît ?', context: 'Compréhension' },
    { german: 'Wie bitte?', french: 'Pardon ? / Comment ?', context: 'Demander de répéter' },
    { german: 'Entschuldigung, ich verstehe nicht.', french: 'Excusez-moi, je ne comprends pas.', context: 'Compréhension' }
  ]
};
