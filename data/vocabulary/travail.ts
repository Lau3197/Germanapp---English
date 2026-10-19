
import { ThemeContent, LanguageLevel } from '../../types';

export const travailContent: ThemeContent = {
  words: [
    // === GÉNÉRAL ===
    { article: 'die', german: 'Arbeit', english: 'Work', french: 'Travail', plural: 'Arbeiten', level: LanguageLevel.A1, subTheme: 'Général', example: 'Ich habe viel Arbeit.' },
    { article: 'der', german: 'Beruf', english: 'Profession / Job', french: 'Métier / Profession', plural: 'Berufe', level: LanguageLevel.A1, subTheme: 'Général', example: 'Was bist du von Beruf?' },
    { article: 'der', german: 'Job', english: 'Job', french: 'Boulot', plural: 'Jobs', level: LanguageLevel.A1, subTheme: 'Général', example: 'Ein interessanter Job.' },
    { article: 'die', german: 'Stelle', english: 'Position / Job', french: 'Poste', plural: 'Stellen', level: LanguageLevel.A2, subTheme: 'Général', example: 'Eine neue Stelle suchen.' },
    { article: 'die', german: 'Beschäftigung', english: 'Employment / Occupation', french: 'Emploi / Occupation', plural: 'Beschäftigungen', level: LanguageLevel.B1, subTheme: 'Général', example: 'Ich bin auf der Suche nach einer Beschäftigung.' },
    { article: 'der', german: 'Arbeitsplatz', english: 'Workplace', french: 'Lieu de travail', plural: 'Arbeitsplätze', level: LanguageLevel.A2, subTheme: 'Général', example: 'Ein sicherer Arbeitsplatz.' },
    { article: 'die', german: 'Arbeitszeit', english: 'Working hours', french: 'Horaires de travail', plural: 'Arbeitszeiten', level: LanguageLevel.A2, subTheme: 'Général', example: 'Flexible Arbeitszeiten.' },
    { article: 'die', german: 'Vollzeit', english: 'Full-time', french: 'Temps plein', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Général', example: 'Ich arbeite Vollzeit.' },
    { article: 'die', german: 'Teilzeit', english: 'Part-time', french: 'Temps partiel', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Général', example: 'Sie arbeitet Teilzeit.' },
    { article: 'der', german: 'Feierabend', english: 'End of work day / Quitting time', french: 'Fin de journée de travail', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Général', example: 'Schönen Feierabend!' },
    { article: 'die', german: 'Pause', english: 'Break', french: 'Pause', plural: 'Pausen', level: LanguageLevel.A1, subTheme: 'Général', example: 'Ich mache eine Pause.' },
    { article: 'die', german: 'Mittagspause', english: 'Lunch break', french: 'Pause déjeuner', plural: 'Mittagspausen', level: LanguageLevel.A1, subTheme: 'Général', example: 'Die Mittagspause dauert eine Stunde.' },

    // === ENTREPRISE ===
    { article: 'die', german: 'Firma', english: 'Company / Firm', french: 'Entreprise', plural: 'Firmen', level: LanguageLevel.A1, subTheme: 'Entreprise', example: 'Er arbeitet in einer großen Firma.' },
    { article: 'das', german: 'Unternehmen', english: 'Company / Enterprise', french: 'Entreprise', plural: 'Unternehmen', level: LanguageLevel.A2, subTheme: 'Entreprise', example: 'Ein internationales Unternehmen.' },
    { article: 'die', german: 'Gesellschaft', english: 'Society / Company', french: 'Société', plural: 'Gesellschaften', level: LanguageLevel.B1, subTheme: 'Entreprise', example: 'Eine GmbH (Gesellschaft mit beschränkter Haftung).' },
    { article: 'der', german: 'Betrieb', english: 'Business / Company / Operation', french: 'Établissement / Exploitation', plural: 'Betriebe', level: LanguageLevel.A2, subTheme: 'Entreprise', example: 'Ein kleiner Familienbetrieb.' },
    { article: 'die', german: 'Branche', english: 'Industry / Sector', french: 'Secteur d\'activité', plural: 'Branchen', level: LanguageLevel.B1, subTheme: 'Entreprise', example: 'Die IT-Branche wächst.' },
    { article: 'die', german: 'Abteilung', english: 'Department', french: 'Service / Département', plural: 'Abteilungen', level: LanguageLevel.A2, subTheme: 'Entreprise', example: 'Die Marketingabteilung.' },
    { article: 'die', german: 'Zentrale', english: 'Headquarters', french: 'Siège social', plural: 'Zentralen', level: LanguageLevel.B1, subTheme: 'Entreprise', example: 'Die Zentrale ist in Berlin.' },
    { article: 'die', german: 'Filiale', english: 'Branch', french: 'Succursale', plural: 'Filialen', level: LanguageLevel.B1, subTheme: 'Entreprise', example: 'Wir haben Filialen in ganz Deutschland.' },
    { article: 'die', german: 'Niederlassung', english: 'Branch / Subsidiary', french: 'Filiale / Antenne', plural: 'Niederlassungen', level: LanguageLevel.B1, subTheme: 'Entreprise', example: 'Eine Niederlassung in Paris.' },

    // === BUREAU ===
    { article: 'das', german: 'Büro', english: 'Office', french: 'Bureau', plural: 'Büros', level: LanguageLevel.A1, subTheme: 'Bureau', example: 'Ins Büro gehen.' },
    { article: 'der', german: 'Schreibtisch', english: 'Desk', french: 'Bureau (meuble)', plural: 'Schreibtische', level: LanguageLevel.A1, subTheme: 'Bureau', example: 'Der Schreibtisch ist voll.' },
    { article: 'der', german: 'Stuhl', english: 'Chair', french: 'Chaise', plural: 'Stühle', level: LanguageLevel.A1, subTheme: 'Bureau', example: 'Ein bequemer Stuhl.' },
    { article: 'der', german: 'Computer', english: 'Computer', french: 'Ordinateur', plural: 'Computer', level: LanguageLevel.A1, subTheme: 'Bureau', example: 'Ich arbeite am Computer.' },
    { article: 'der', german: 'Laptop', english: 'Laptop', french: 'Ordinateur portable', plural: 'Laptops', level: LanguageLevel.A1, subTheme: 'Bureau', example: 'Ich nehme meinen Laptop mit.' },
    { article: 'der', german: 'Bildschirm', english: 'Screen / Monitor', french: 'Écran', plural: 'Bildschirme', level: LanguageLevel.A2, subTheme: 'Bureau', example: 'Zwei Bildschirme sind praktisch.' },
    { article: 'die', german: 'Tastatur', english: 'Keyboard', french: 'Clavier', plural: 'Tastaturen', level: LanguageLevel.A2, subTheme: 'Bureau', example: 'Eine neue Tastatur kaufen.' },
    { article: 'die', german: 'Maus', english: 'Mouse', french: 'Souris', plural: 'Mäuse', level: LanguageLevel.A2, subTheme: 'Bureau', example: 'Die Maus funktioniert nicht.' },
    { article: 'der', german: 'Drucker', english: 'Printer', french: 'Imprimante', plural: 'Drucker', level: LanguageLevel.A2, subTheme: 'Bureau', example: 'Das Dokument ausdrucken.' },
    { article: 'der', german: 'Kopierer', english: 'Copier', french: 'Photocopieuse', plural: 'Kopierer', level: LanguageLevel.A2, subTheme: 'Bureau', example: 'Eine Kopie machen.' },
    { article: 'das', german: 'Telefon', english: 'Telephone', french: 'Téléphone', plural: 'Telefone', level: LanguageLevel.A1, subTheme: 'Bureau', example: 'Das Telefon klingelt.' },
    { article: 'der', german: 'Konferenzraum', english: 'Conference room', french: 'Salle de réunion', plural: 'Konferenzräume', level: LanguageLevel.A2, subTheme: 'Bureau', example: 'Die Besprechung im Konferenzraum.' },
    { article: 'das', german: 'Homeoffice', english: 'Work from home / Home office', french: 'Télétravail', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Bureau', example: 'Ich arbeite heute im Homeoffice.' },
    { article: 'die', german: 'Kaffeemaschine', english: 'Coffee machine', french: 'Machine à café', plural: 'Kaffeemaschinen', level: LanguageLevel.A2, subTheme: 'Bureau', example: 'Eine Tasse Kaffee aus der Kaffeemaschine.' },

    // === HIÉRARCHIE ===
    { article: 'der', german: 'Chef', english: 'Boss (m)', french: 'Chef / Patron', plural: 'Chefs', level: LanguageLevel.A1, subTheme: 'Hiérarchie', example: 'Mein Chef ist sehr nett.' },
    { article: 'die', german: 'Chefin', english: 'Boss (f)', french: 'Cheffe / Patronne', plural: 'Chefinnen', level: LanguageLevel.A1, subTheme: 'Hiérarchie', example: 'Meine Chefin ist streng.' },
    { article: 'der', german: 'Vorgesetzte', english: 'Superior / Supervisor (m)', french: 'Supérieur hiérarchique', plural: 'Vorgesetzten', level: LanguageLevel.B1, subTheme: 'Hiérarchie', example: 'Ich frage meinen Vorgesetzten.' },
    { article: 'die', german: 'Vorgesetzte', english: 'Superior / Supervisor (f)', french: 'Supérieure hiérarchique', plural: 'Vorgesetzten', level: LanguageLevel.B1, subTheme: 'Hiérarchie', example: 'Meine Vorgesetzte hat zugestimmt.' },
    { article: 'der', german: 'Geschäftsführer', english: 'Managing Director / CEO', french: 'Directeur général', plural: 'Geschäftsführer', level: LanguageLevel.B1, subTheme: 'Hiérarchie', example: 'Der Geschäftsführer hält eine Rede.' },
    { article: 'der', german: 'Abteilungsleiter', english: 'Head of Department', french: 'Chef de service', plural: 'Abteilungsleiter', level: LanguageLevel.B1, subTheme: 'Hiérarchie', example: 'Der Abteilungsleiter ist im Urlaub.' },
    { article: 'der', german: 'Teamleiter', english: 'Team Leader', french: 'Chef d\'équipe', plural: 'Teamleiter', level: LanguageLevel.B1, subTheme: 'Hiérarchie', example: 'Der Teamleiter organisiert die Projekte.' },
    { article: 'der', german: 'Mitarbeiter', english: 'Employee (m)', french: 'Employé', plural: 'Mitarbeiter', level: LanguageLevel.A2, subTheme: 'Hiérarchie', example: 'Ein fleißiger Mitarbeiter.' },
    { article: 'die', german: 'Mitarbeiterin', english: 'Employee (f)', french: 'Employée', plural: 'Mitarbeiterinnen', level: LanguageLevel.A2, subTheme: 'Hiérarchie', example: 'Eine kompetente Mitarbeiterin.' },
    { article: 'der', german: 'Kollege', english: 'Colleague (m)', french: 'Collègue', plural: 'Kollegen', level: LanguageLevel.A1, subTheme: 'Hiérarchie', example: 'Mein Kollege hilft mir.' },
    { article: 'die', german: 'Kollegin', english: 'Colleague (f)', french: 'Collègue (f)', plural: 'Kolleginnen', level: LanguageLevel.A1, subTheme: 'Hiérarchie', example: 'Meine Kollegin ist sehr nett.' },
    { article: 'das', german: 'Team', english: 'Team', french: 'Équipe', plural: 'Teams', level: LanguageLevel.A1, subTheme: 'Hiérarchie', example: 'Wir sind ein gutes Team.' },
    { article: 'der', german: 'Praktikant', english: 'Intern (m)', french: 'Stagiaire', plural: 'Praktikanten', level: LanguageLevel.A2, subTheme: 'Hiérarchie', example: 'Der Praktikant ist neu.' },
    { article: 'die', german: 'Praktikantin', english: 'Intern (f)', french: 'Stagiaire (f)', plural: 'Praktikantinnen', level: LanguageLevel.A2, subTheme: 'Hiérarchie', example: 'Die Praktikantin lernt schnell.' },
    { article: 'der', german: 'Azubi', english: 'Apprentice / Trainee', french: 'Apprenti', plural: 'Azubis', level: LanguageLevel.A2, subTheme: 'Hiérarchie', example: 'Der Azubi macht eine Ausbildung.' },

    // === MÉTIERS ===
    { article: 'der', german: 'Arzt', english: 'Doctor (m)', french: 'Médecin', plural: 'Ärzte', level: LanguageLevel.A1, subTheme: 'Métiers', example: 'Er ist Arzt von Beruf.' },
    { article: 'die', german: 'Ärztin', english: 'Doctor (f)', french: 'Médecin (f)', plural: 'Ärztinnen', level: LanguageLevel.A1, subTheme: 'Métiers', example: 'Sie ist Ärztin.' },
    { article: 'der', german: 'Lehrer', english: 'Teacher (m)', french: 'Professeur', plural: 'Lehrer', level: LanguageLevel.A1, subTheme: 'Métiers', example: 'Der Lehrer unterrichtet Deutsch.' },
    { article: 'die', german: 'Lehrerin', english: 'Teacher (f)', french: 'Professeure', plural: 'Lehrerinnen', level: LanguageLevel.A1, subTheme: 'Métiers', example: 'Die Lehrerin ist streng.' },
    { article: 'der', german: 'Ingenieur', english: 'Engineer (m)', french: 'Ingénieur', plural: 'Ingenieure', level: LanguageLevel.A2, subTheme: 'Métiers', example: 'Er arbeitet als Ingenieur.' },
    { article: 'die', german: 'Ingenieurin', english: 'Engineer (f)', french: 'Ingénieure', plural: 'Ingenieurinnen', level: LanguageLevel.A2, subTheme: 'Métiers', example: 'Sie ist Softwareingenieurin.' },
    { article: 'der', german: 'Anwalt', english: 'Lawyer (m)', french: 'Avocat', plural: 'Anwälte', level: LanguageLevel.A2, subTheme: 'Métiers', example: 'Er ist Anwalt.' },
    { article: 'die', german: 'Anwältin', english: 'Lawyer (f)', french: 'Avocate', plural: 'Anwältinnen', level: LanguageLevel.A2, subTheme: 'Métiers', example: 'Die Anwältin vertritt ihren Mandanten.' },
    { article: 'der', german: 'Programmierer', english: 'Programmer', french: 'Programmeur', plural: 'Programmierer', level: LanguageLevel.A2, subTheme: 'Métiers', example: 'Der Programmierer schreibt Code.' },
    { article: 'der', german: 'Designer', english: 'Designer', french: 'Designer', plural: 'Designer', level: LanguageLevel.A2, subTheme: 'Métiers', example: 'Der Designer entwirft Webseiten.' },
    { article: 'der', german: 'Verkäufer', english: 'Salesperson (m)', french: 'Vendeur', plural: 'Verkäufer', level: LanguageLevel.A1, subTheme: 'Métiers', example: 'Der Verkäufer berät die Kunden.' },
    { article: 'die', german: 'Verkäuferin', english: 'Salesperson (f)', french: 'Vendeuse', plural: 'Verkäuferinnen', level: LanguageLevel.A1, subTheme: 'Métiers', example: 'Die Verkäuferin ist freundlich.' },
    { article: 'der', german: 'Kellner', english: 'Waiter', french: 'Serveur', plural: 'Kellner', level: LanguageLevel.A1, subTheme: 'Métiers', example: 'Der Kellner bringt das Essen.' },
    { article: 'die', german: 'Kellnerin', english: 'Waitress', french: 'Serveuse', plural: 'Kellnerinnen', level: LanguageLevel.A1, subTheme: 'Métiers', example: 'Die Kellnerin nimmt die Bestellung auf.' },
    { article: 'der', german: 'Koch', english: 'Cook / Chef (m)', french: 'Cuisinier', plural: 'Köche', level: LanguageLevel.A1, subTheme: 'Métiers', example: 'Der Koch bereitet das Essen zu.' },
    { article: 'die', german: 'Köchin', english: 'Cook / Chef (f)', french: 'Cuisinière', plural: 'Köchinnen', level: LanguageLevel.A1, subTheme: 'Métiers', example: 'Die Köchin ist sehr talentiert.' },
    { article: 'der', german: 'Mechaniker', english: 'Mechanic', french: 'Mécanicien', plural: 'Mechaniker', level: LanguageLevel.A2, subTheme: 'Métiers', example: 'Der Mechaniker repariert das Auto.' },
    { article: 'der', german: 'Elektriker', english: 'Electrician', french: 'Électricien', plural: 'Elektriker', level: LanguageLevel.A2, subTheme: 'Métiers', example: 'Der Elektriker installiert die Lampen.' },
    { article: 'der', german: 'Polizist', english: 'Police officer', french: 'Policier', plural: 'Polizisten', level: LanguageLevel.A1, subTheme: 'Métiers', example: 'Der Polizist kontrolliert den Verkehr.' },
    { article: 'der', german: 'Feuerwehrmann', english: 'Firefighter', french: 'Pompier', plural: 'Feuerwehrleute', level: LanguageLevel.A2, subTheme: 'Métiers', example: 'Der Feuerwehrmann löscht das Feuer.' },
    { article: 'der', german: 'Krankenpfleger', english: 'Nurse (m)', french: 'Infirmier', plural: 'Krankenpfleger', level: LanguageLevel.A2, subTheme: 'Métiers', example: 'Der Krankenpfleger hilft den Patienten.' },
    { article: 'die', german: 'Krankenschwester', english: 'Nurse (f)', french: 'Infirmière', plural: 'Krankenschwestern', level: LanguageLevel.A1, subTheme: 'Métiers', example: 'Die Krankenschwester misst den Blutdruck.' },
    { article: 'der', german: 'Architekt', english: 'Architect (m)', french: 'Architecte', plural: 'Architekten', level: LanguageLevel.A2, subTheme: 'Métiers', example: 'Der Architekt plant das Gebäude.' },
    { article: 'der', german: 'Journalist', english: 'Journalist (m)', french: 'Journaliste', plural: 'Journalisten', level: LanguageLevel.A2, subTheme: 'Métiers', example: 'Der Journalist schreibt einen Artikel.' },
    { article: 'der', german: 'Buchhalter', english: 'Accountant', french: 'Comptable', plural: 'Buchhalter', level: LanguageLevel.B1, subTheme: 'Métiers', example: 'Der Buchhalter prüft die Rechnungen.' },
    { article: 'der', german: 'Manager', english: 'Manager', french: 'Manager', plural: 'Manager', level: LanguageLevel.A2, subTheme: 'Métiers', example: 'Der Manager leitet das Projekt.' },

    // === SALAIRE / ARGENT ===
    { article: 'das', german: 'Gehalt', english: 'Salary', french: 'Salaire', plural: 'Gehälter', level: LanguageLevel.A2, subTheme: 'Salaire', example: 'Ein faires Gehalt bekommen.' },
    { article: 'der', german: 'Lohn', english: 'Wage', french: 'Paie / Rémunération', plural: 'Löhne', level: LanguageLevel.A2, subTheme: 'Salaire', example: 'Der Lohn wird wöchentlich gezahlt.' },
    { article: 'das', german: 'Einkommen', english: 'Income', french: 'Revenu', plural: 'Einkommen', level: LanguageLevel.B1, subTheme: 'Salaire', example: 'Ein hohes Einkommen.' },
    { article: 'die', german: 'Gehaltserhöhung', english: 'Raise / Salary increase', french: 'Augmentation de salaire', plural: 'Gehaltserhöhungen', level: LanguageLevel.B1, subTheme: 'Salaire', example: 'Ich bekomme eine Gehaltserhöhung.' },
    { article: 'der', german: 'Bonus', english: 'Bonus', french: 'Prime', plural: 'Boni', level: LanguageLevel.B1, subTheme: 'Salaire', example: 'Der Jahresbonus wird ausgezahlt.' },
    { article: 'die', german: 'Sozialversicherung', english: 'Social security', french: 'Sécurité sociale', plural: 'n/a', level: LanguageLevel.B1, subTheme: 'Salaire', example: 'Die Sozialversicherung wird abgezogen.' },
    { article: 'die', german: 'Steuer', english: 'Tax', french: 'Impôt', plural: 'Steuern', level: LanguageLevel.B1, subTheme: 'Salaire', example: 'Steuern zahlen.' },
    { article: 'das', german: 'Brutto', english: 'Gross', french: 'Brut', plural: 'n/a', level: LanguageLevel.B1, subTheme: 'Salaire', example: 'Das Bruttogehalt.' },
    { article: 'das', german: 'Netto', english: 'Net', french: 'Net', plural: 'n/a', level: LanguageLevel.B1, subTheme: 'Salaire', example: 'Das Nettogehalt.' },

    // === CANDIDATURE ===
    { article: 'die', german: 'Bewerbung', english: 'Application', french: 'Candidature', plural: 'Bewerbungen', level: LanguageLevel.A2, subTheme: 'Candidature', example: 'Eine Bewerbung schreiben.' },
    { article: 'das', german: 'Bewerbungsschreiben', english: 'Cover letter', french: 'Lettre de motivation', plural: 'Bewerbungsschreiben', level: LanguageLevel.B1, subTheme: 'Candidature', example: 'Das Bewerbungsschreiben formulieren.' },
    { article: 'der', german: 'Lebenslauf', english: 'CV / Resume', french: 'CV', plural: 'Lebensläufe', level: LanguageLevel.A2, subTheme: 'Candidature', example: 'Den Lebenslauf aktualisieren.' },
    { article: 'das', german: 'Vorstellungsgespräch', english: 'Job interview', french: 'Entretien d\'embauche', plural: 'Vorstellungsgespräche', level: LanguageLevel.A2, subTheme: 'Candidature', example: 'Ein Vorstellungsgespräch haben.' },
    { article: 'die', german: 'Stellenanzeige', english: 'Job advertisement', french: 'Offre d\'emploi', plural: 'Stellenanzeigen', level: LanguageLevel.A2, subTheme: 'Candidature', example: 'Eine Stellenanzeige lesen.' },
    { article: 'die', german: 'Qualifikation', english: 'Qualification', french: 'Qualification', plural: 'Qualifikationen', level: LanguageLevel.B1, subTheme: 'Candidature', example: 'Die nötigen Qualifikationen haben.' },
    { article: 'die', german: 'Erfahrung', english: 'Experience', french: 'Expérience', plural: 'Erfahrungen', level: LanguageLevel.A2, subTheme: 'Candidature', example: 'Berufserfahrung sammeln.' },
    { article: 'das', german: 'Zeugnis', english: 'Certificate / Reference', french: 'Certificat de travail', plural: 'Zeugnisse', level: LanguageLevel.A2, subTheme: 'Candidature', example: 'Das Zeugnis der letzten Stelle.' },
    { article: 'die', german: 'Referenz', english: 'Reference', french: 'Référence', plural: 'Referenzen', level: LanguageLevel.B1, subTheme: 'Candidature', example: 'Gute Referenzen haben.' },

    // === CONTRAT ===
    { article: 'der', german: 'Vertrag', english: 'Contract', french: 'Contrat', plural: 'Verträge', level: LanguageLevel.A2, subTheme: 'Contrat', example: 'Den Arbeitsvertrag unterschreiben.' },
    { article: 'der', german: 'Arbeitsvertrag', english: 'Employment contract', french: 'Contrat de travail', plural: 'Arbeitsverträge', level: LanguageLevel.A2, subTheme: 'Contrat', example: 'Ein unbefristeter Arbeitsvertrag.' },
    { article: '', german: 'befristet', english: 'fixed-term / temporary', french: 'à durée déterminée', plural: 'n/a', level: LanguageLevel.B1, subTheme: 'Contrat', example: 'Ein befristeter Vertrag.' },
    { article: '', german: 'unbefristet', english: 'permanent / indefinite', french: 'à durée indéterminée', plural: 'n/a', level: LanguageLevel.B1, subTheme: 'Contrat', example: 'Ein unbefristeter Vertrag.' },
    { article: 'die', german: 'Probezeit', english: 'Probation period', french: 'Période d\'essai', plural: 'Probezeiten', level: LanguageLevel.B1, subTheme: 'Contrat', example: 'Die Probezeit dauert drei Monate.' },
    { article: 'die', german: 'Kündigung', english: 'Termination / Resignation', french: 'Licenciement / Démission', plural: 'Kündigungen', level: LanguageLevel.B1, subTheme: 'Contrat', example: 'Die Kündigung einreichen.' },
    { article: 'die', german: 'Kündigungsfrist', english: 'Notice period', french: 'Préavis', plural: 'Kündigungsfristen', level: LanguageLevel.B1, subTheme: 'Contrat', example: 'Die Kündigungsfrist beträgt einen Monat.' },

    // === RÉUNIONS ===
    { article: 'die', german: 'Besprechung', english: 'Meeting', french: 'Réunion', plural: 'Besprechungen', level: LanguageLevel.A2, subTheme: 'Réunions', example: 'Wir haben eine Besprechung.' },
    { article: 'das', german: 'Meeting', english: 'Meeting', french: 'Réunion', plural: 'Meetings', level: LanguageLevel.A2, subTheme: 'Réunions', example: 'Das Meeting beginnt um 10 Uhr.' },
    { article: 'die', german: 'Konferenz', english: 'Conference', french: 'Conférence', plural: 'Konferenzen', level: LanguageLevel.B1, subTheme: 'Réunions', example: 'Eine internationale Konferenz.' },
    { article: 'die', german: 'Videokonferenz', english: 'Video conference', french: 'Visioconférence', plural: 'Videokonferenzen', level: LanguageLevel.A2, subTheme: 'Réunions', example: 'Eine Videokonferenz mit den Kollegen.' },
    { article: 'die', german: 'Präsentation', english: 'Presentation', french: 'Présentation', plural: 'Präsentationen', level: LanguageLevel.A2, subTheme: 'Réunions', example: 'Eine Präsentation halten.' },
    { article: 'das', german: 'Protokoll', english: 'Minutes', french: 'Compte rendu', plural: 'Protokolle', level: LanguageLevel.B1, subTheme: 'Réunions', example: 'Das Protokoll der Besprechung.' },
    { article: 'die', german: 'Tagesordnung', english: 'Agenda', french: 'Ordre du jour', plural: 'Tagesordnungen', level: LanguageLevel.B1, subTheme: 'Réunions', example: 'Die Tagesordnung besprechen.' },

    // === CONGÉS ===
    { article: 'der', german: 'Urlaub', english: 'Vacation / Leave', french: 'Congés', plural: 'Urlaube', level: LanguageLevel.A1, subTheme: 'Congés', example: 'Urlaub nehmen.' },
    { article: 'der', german: 'Urlaubstag', english: 'Vacation day', french: 'Jour de congé', plural: 'Urlaubstage', level: LanguageLevel.A2, subTheme: 'Congés', example: 'Ich habe noch fünf Urlaubstage.' },
    { article: 'der', german: 'Feiertag', english: 'Public holiday', french: 'Jour férié', plural: 'Feiertage', level: LanguageLevel.A1, subTheme: 'Congés', example: 'Montag ist ein Feiertag.' },
    { article: 'der', german: 'Brückentag', english: 'Bridging day', french: 'Jour de pont', plural: 'Brückentage', level: LanguageLevel.A2, subTheme: 'Congés', example: 'Ich mache einen Brückentag.' },
    { article: 'der', german: 'Krankheitstag', english: 'Sick day', french: 'Jour d\'arrêt maladie', plural: 'Krankheitstage', level: LanguageLevel.A2, subTheme: 'Congés', example: 'Ich bin krank und nehme einen Krankheitstag.' },
    { article: 'die', german: 'Krankmeldung', english: 'Sick note', french: 'Arrêt maladie', plural: 'Krankmeldungen', level: LanguageLevel.B1, subTheme: 'Congés', example: 'Die Krankmeldung einreichen.' },

    // === TEMPS SUPPLÉMENTAIRE ===
    { article: 'die', german: 'Überstunden', english: 'Overtime', french: 'Heures supplémentaires', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Temps sup', example: 'Heute muss ich Überstunden machen.' },
    { article: 'die', german: 'Deadline', english: 'Deadline', french: 'Échéance', plural: 'Deadlines', level: LanguageLevel.A2, subTheme: 'Temps sup', example: 'Die Deadline einhalten.' },
    { article: 'der', german: 'Stress', english: 'Stress', french: 'Stress', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Temps sup', example: 'Viel Stress bei der Arbeit.' },
    { article: 'der', german: 'Druck', english: 'Pressure', french: 'Pression', plural: 'n/a', level: LanguageLevel.B1, subTheme: 'Temps sup', example: 'Unter Druck arbeiten.' },

    // === VERBES ===
    { article: '', german: 'arbeiten', english: 'to work', french: 'travailler', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Verbes', example: 'Ich arbeite im Büro.' },
    { article: '', german: 'verdienen', english: 'to earn', french: 'gagner (de l\'argent)', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Verbes', example: 'Gut verdienen.' },
    { article: '', german: 'kündigen', english: 'to resign / to fire', french: 'démissionner / licencier', plural: 'n/a', level: LanguageLevel.B1, subTheme: 'Verbes', example: 'Er hat gekündigt.' },
    { article: '', german: 'einstellen', english: 'to hire', french: 'embaucher', plural: 'n/a', level: LanguageLevel.B1, subTheme: 'Verbes', example: 'Eine neue Mitarbeiterin einstellen.' },
    { article: '', german: 'bewerben (sich)', english: 'to apply', french: 'postuler', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Verbes', example: 'Sich um eine Stelle bewerben.' },
    { article: '', german: 'leiten', english: 'to lead / manage', french: 'diriger', plural: 'n/a', level: LanguageLevel.B1, subTheme: 'Verbes', example: 'Ein Projekt leiten.' },
    { article: '', german: 'organisieren', english: 'to organize', french: 'organiser', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Verbes', example: 'Eine Besprechung organisieren.' },
    { article: '', german: 'telefonieren', english: 'to make a phone call', french: 'téléphoner', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Verbes', example: 'Mit dem Chef telefonieren.' },
    { article: '', german: 'mailen', english: 'to email', french: 'envoyer un e-mail', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Verbes', example: 'Ich maile Ihnen die Dokumente.' },
    { article: '', german: 'drucken', english: 'to print', french: 'imprimer', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Verbes', example: 'Das Dokument drucken.' },
    { article: '', german: 'kopieren', english: 'to copy', french: 'copier', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Verbes', example: 'Eine Datei kopieren.' },
    { article: '', german: 'speichern', english: 'to save', french: 'enregistrer', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Verbes', example: 'Die Datei speichern.' },
    { article: '', german: 'unterschreiben', english: 'to sign', french: 'signer', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Verbes', example: 'Den Vertrag unterschreiben.' }
  ],
  phrases: [
    // Candidature
    { german: 'Ich bewerbe mich um die Stelle als...', english: 'I am applying for the position of...', french: 'Je pose ma candidature au poste de...', italian: 'Mi candido per la posizione di...', context: 'Candidature' },
    { german: 'Anbei erhalten Sie meinen Lebenslauf.', english: 'Please find attached my CV.', french: 'Veuillez trouver ci-joint mon CV.', italian: 'In allegato trova il mio curriculum.', context: 'Candidature' },
    { german: 'Ich verfüge über mehrjährige Berufserfahrung.', english: 'I have several years of professional experience.', french: 'Je dispose de plusieurs années d\'expérience professionnelle.', italian: 'Dispongo di più anni di esperienza professionale.', context: 'Candidature' },
    { german: 'Ich freue mich auf Ihre Rückmeldung.', english: 'I look forward to hearing from you.', french: 'Dans l\'attente de votre réponse.', italian: 'Resto in attesa di un suo riscontro.', context: 'Candidature' },

    // Entretien
    { german: 'Was sind Ihre Stärken und Schwächen?', english: 'What are your strengths and weaknesses?', french: 'Quels sont vos points forts et vos points faibles ?', italian: 'Quali sono i suoi punti di forza e di debolezza?', context: 'Entretien' },
    { german: 'Warum möchten Sie bei uns arbeiten?', english: 'Why do you want to work with us?', french: 'Pourquoi voulez-vous travailler chez nous ?', italian: 'Perché vuole lavorare da noi?', context: 'Entretien' },
    { german: 'Was sind Ihre Gehaltsvorstellungen?', english: 'What are your salary expectations?', french: 'Quelles sont vos prétentions salariales ?', italian: 'Quali sono le sue aspettative salariali?', context: 'Entretien' },
    { german: 'Wann können Sie anfangen?', english: 'When can you start?', french: 'Quand pouvez-vous commencer ?', italian: 'Quando può iniziare?', context: 'Entretien' },

    // Bureau quotidien
    { german: 'Können Sie mir bitte helfen?', english: 'Can you help me, please?', french: 'Pouvez-vous m\'aider, s\'il vous plaît ?', italian: 'Può aiutarmi, per favore?', context: 'Bureau' },
    { german: 'Ich bin gerade in einer Besprechung.', english: 'I am currently in a meeting.', french: 'Je suis en réunion en ce moment.', italian: 'Sono in riunione in questo momento.', context: 'Bureau' },
    { german: 'Können wir das später besprechen?', english: 'Can we discuss this later?', french: 'Pouvons-nous en discuter plus tard ?', italian: 'Possiamo parlarne più tardi?', context: 'Bureau' },
    { german: 'Ich schicke Ihnen die Unterlagen per E-Mail.', english: 'I will email you the documents.', french: 'Je vous envoie les documents par e-mail.', italian: 'Le mando i documenti per e-mail.', context: 'Bureau' },
    { german: 'Die Deadline ist morgen.', english: 'The deadline is tomorrow.', french: 'L\'échéance est demain.', italian: 'La scadenza è domani.', context: 'Bureau' },
    { german: 'Ich arbeite heute im Homeoffice.', english: 'I am working from home today.', french: 'Je suis en télétravail aujourd\'hui.', italian: 'Oggi lavoro da casa.', context: 'Bureau' },

    // Réunions
    { german: 'Wann findet das Meeting statt?', english: 'When is the meeting taking place?', french: 'Quand a lieu la réunion ?', italian: 'Quando si tiene la riunione?', context: 'Réunion' },
    { german: 'Können Sie das Protokoll schreiben?', english: 'Can you take the minutes?', french: 'Pouvez-vous rédiger le compte rendu ?', italian: 'Può redigere il verbale?', context: 'Réunion' },
    { german: 'Ich habe noch eine Frage.', english: 'I have another question.', french: 'J\'ai encore une question.', italian: 'Ho ancora una domanda.', context: 'Réunion' },

    // Congés
    { german: 'Ich möchte Urlaub beantragen.', english: 'I would like to request leave.', french: 'Je voudrais poser des congés.', italian: 'Vorrei richiedere le ferie.', context: 'Congés' },
    { german: 'Ich bin nächste Woche nicht im Büro.', english: 'I will not be in the office next week.', french: 'Je ne serai pas au bureau la semaine prochaine.', italian: 'La prossima settimana non sarò in ufficio.', context: 'Congés' },
    { german: 'Ich bin heute krank und kann nicht kommen.', english: 'I am ill today and cannot come in.', french: 'Je suis malade aujourd\'hui et je ne peux pas venir.', italian: 'Oggi sto male e non posso venire.', context: 'Congés' },

    // Fin de journée
    { german: 'Schönen Feierabend!', english: 'Have a nice evening!', french: 'Bonne fin de journée !', italian: 'Buona serata!', context: 'Social' },
    { german: 'Bis morgen!', english: 'See you tomorrow!', french: 'À demain !', italian: 'A domani!', context: 'Social' },
    { german: 'Ich freue mich auf eine gute Zusammenarbeit.', english: 'I look forward to a good cooperation.', french: 'Je me réjouis d\'une bonne collaboration.', italian: 'Non vedo l\'ora di collaborare con voi.', context: 'Social' }
  ]
};
