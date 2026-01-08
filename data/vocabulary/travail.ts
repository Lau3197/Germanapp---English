
import { ThemeContent, LanguageLevel } from '../../types.ts';

export const travailContent: ThemeContent = {
  words: [
    // === GÉNÉRAL ===
    { article: 'die', german: 'Arbeit', french: 'Travail', plural: 'Arbeiten', level: LanguageLevel.A1, subTheme: 'Général', example: 'Ich habe viel Arbeit.' },
    { article: 'der', german: 'Beruf', french: 'Métier / Profession', plural: 'Berufe', level: LanguageLevel.A1, subTheme: 'Général', example: 'Was bist du von Beruf?' },
    { article: 'der', german: 'Job', french: 'Job / Emploi', plural: 'Jobs', level: LanguageLevel.A1, subTheme: 'Général', example: 'Ein interessanter Job.' },
    { article: 'die', german: 'Stelle', french: 'Poste', plural: 'Stellen', level: LanguageLevel.A2, subTheme: 'Général', example: 'Eine neue Stelle suchen.' },
    { article: 'die', german: 'Beschäftigung', french: 'Emploi / Occupation', plural: 'Beschäftigungen', level: LanguageLevel.B1, subTheme: 'Général', example: 'Ich bin auf der Suche nach einer Beschäftigung.' },
    { article: 'der', german: 'Arbeitsplatz', french: 'Lieu de travail', plural: 'Arbeitsplätze', level: LanguageLevel.A2, subTheme: 'Général', example: 'Ein sicherer Arbeitsplatz.' },
    { article: 'die', german: 'Arbeitszeit', french: 'Temps de travail', plural: 'Arbeitszeiten', level: LanguageLevel.A2, subTheme: 'Général', example: 'Flexible Arbeitszeiten.' },
    { article: 'die', german: 'Vollzeit', french: 'Temps plein', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Général', example: 'Ich arbeite Vollzeit.' },
    { article: 'die', german: 'Teilzeit', french: 'Temps partiel', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Général', example: 'Sie arbeitet Teilzeit.' },
    { article: 'der', german: 'Feierabend', french: 'Fin de journée', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Général', example: 'Schönen Feierabend!' },
    { article: 'die', german: 'Pause', french: 'Pause', plural: 'Pausen', level: LanguageLevel.A1, subTheme: 'Général', example: 'Ich mache eine Pause.' },
    { article: 'die', german: 'Mittagspause', french: 'Pause déjeuner', plural: 'Mittagspausen', level: LanguageLevel.A1, subTheme: 'Général', example: 'Die Mittagspause dauert eine Stunde.' },
    
    // === ENTREPRISE ===
    { article: 'die', german: 'Firma', french: 'Entreprise', plural: 'Firmen', level: LanguageLevel.A1, subTheme: 'Entreprise', example: 'Er arbeitet in einer großen Firma.' },
    { article: 'das', german: 'Unternehmen', french: 'Entreprise', plural: 'Unternehmen', level: LanguageLevel.A2, subTheme: 'Entreprise', example: 'Ein internationales Unternehmen.' },
    { article: 'die', german: 'Gesellschaft', french: 'Société', plural: 'Gesellschaften', level: LanguageLevel.B1, subTheme: 'Entreprise', example: 'Eine GmbH (Gesellschaft mit beschränkter Haftung).' },
    { article: 'der', german: 'Betrieb', french: 'Exploitation / Entreprise', plural: 'Betriebe', level: LanguageLevel.A2, subTheme: 'Entreprise', example: 'Ein kleiner Familienbetrieb.' },
    { article: 'die', german: 'Branche', french: 'Secteur', plural: 'Branchen', level: LanguageLevel.B1, subTheme: 'Entreprise', example: 'Die IT-Branche wächst.' },
    { article: 'die', german: 'Abteilung', french: 'Département', plural: 'Abteilungen', level: LanguageLevel.A2, subTheme: 'Entreprise', example: 'Die Marketingabteilung.' },
    { article: 'die', german: 'Zentrale', french: 'Siège social', plural: 'Zentralen', level: LanguageLevel.B1, subTheme: 'Entreprise', example: 'Die Zentrale ist in Berlin.' },
    { article: 'die', german: 'Filiale', french: 'Succursale', plural: 'Filialen', level: LanguageLevel.B1, subTheme: 'Entreprise', example: 'Wir haben Filialen in ganz Deutschland.' },
    { article: 'die', german: 'Niederlassung', french: 'Filiale', plural: 'Niederlassungen', level: LanguageLevel.B1, subTheme: 'Entreprise', example: 'Eine Niederlassung in Paris.' },
    
    // === BUREAU ===
    { article: 'das', german: 'Büro', french: 'Bureau (lieu)', plural: 'Büros', level: LanguageLevel.A1, subTheme: 'Bureau', example: 'Ins Büro gehen.' },
    { article: 'der', german: 'Schreibtisch', french: 'Bureau (meuble)', plural: 'Schreibtische', level: LanguageLevel.A1, subTheme: 'Bureau', example: 'Der Schreibtisch ist voll.' },
    { article: 'der', german: 'Stuhl', french: 'Chaise', plural: 'Stühle', level: LanguageLevel.A1, subTheme: 'Bureau', example: 'Ein bequemer Stuhl.' },
    { article: 'der', german: 'Computer', french: 'Ordinateur', plural: 'Computer', level: LanguageLevel.A1, subTheme: 'Bureau', example: 'Ich arbeite am Computer.' },
    { article: 'der', german: 'Laptop', french: 'Ordinateur portable', plural: 'Laptops', level: LanguageLevel.A1, subTheme: 'Bureau', example: 'Ich nehme meinen Laptop mit.' },
    { article: 'der', german: 'Bildschirm', french: 'Écran', plural: 'Bildschirme', level: LanguageLevel.A2, subTheme: 'Bureau', example: 'Zwei Bildschirme sind praktisch.' },
    { article: 'die', german: 'Tastatur', french: 'Clavier', plural: 'Tastaturen', level: LanguageLevel.A2, subTheme: 'Bureau', example: 'Eine neue Tastatur kaufen.' },
    { article: 'die', german: 'Maus', french: 'Souris', plural: 'Mäuse', level: LanguageLevel.A2, subTheme: 'Bureau', example: 'Die Maus funktioniert nicht.' },
    { article: 'der', german: 'Drucker', french: 'Imprimante', plural: 'Drucker', level: LanguageLevel.A2, subTheme: 'Bureau', example: 'Das Dokument ausdrucken.' },
    { article: 'der', german: 'Kopierer', french: 'Photocopieur', plural: 'Kopierer', level: LanguageLevel.A2, subTheme: 'Bureau', example: 'Eine Kopie machen.' },
    { article: 'das', german: 'Telefon', french: 'Téléphone', plural: 'Telefone', level: LanguageLevel.A1, subTheme: 'Bureau', example: 'Das Telefon klingelt.' },
    { article: 'der', german: 'Konferenzraum', french: 'Salle de conférence', plural: 'Konferenzräume', level: LanguageLevel.A2, subTheme: 'Bureau', example: 'Die Besprechung im Konferenzraum.' },
    { article: 'das', german: 'Homeoffice', french: 'Télétravail', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Bureau', example: 'Ich arbeite heute im Homeoffice.' },
    { article: 'die', german: 'Kaffeemaschine', french: 'Machine à café', plural: 'Kaffeemaschinen', level: LanguageLevel.A2, subTheme: 'Bureau', example: 'Eine Tasse Kaffee aus der Kaffeemaschine.' },
    
    // === HIÉRARCHIE ===
    { article: 'der', german: 'Chef', french: 'Chef / Patron', plural: 'Chefs', level: LanguageLevel.A1, subTheme: 'Hiérarchie', example: 'Mein Chef ist sehr nett.' },
    { article: 'die', german: 'Chefin', french: 'Chef (f)', plural: 'Chefinnen', level: LanguageLevel.A1, subTheme: 'Hiérarchie', example: 'Meine Chefin ist streng.' },
    { article: 'der', german: 'Vorgesetzte', french: 'Supérieur hiérarchique (m)', plural: 'Vorgesetzten', level: LanguageLevel.B1, subTheme: 'Hiérarchie', example: 'Ich frage meinen Vorgesetzten.' },
    { article: 'die', german: 'Vorgesetzte', french: 'Supérieure hiérarchique (f)', plural: 'Vorgesetzten', level: LanguageLevel.B1, subTheme: 'Hiérarchie', example: 'Meine Vorgesetzte hat zugestimmt.' },
    { article: 'der', german: 'Geschäftsführer', french: 'Directeur général', plural: 'Geschäftsführer', level: LanguageLevel.B1, subTheme: 'Hiérarchie', example: 'Der Geschäftsführer hält eine Rede.' },
    { article: 'der', german: 'Abteilungsleiter', french: 'Chef de département', plural: 'Abteilungsleiter', level: LanguageLevel.B1, subTheme: 'Hiérarchie', example: 'Der Abteilungsleiter ist im Urlaub.' },
    { article: 'der', german: 'Teamleiter', french: 'Chef d\'équipe', plural: 'Teamleiter', level: LanguageLevel.B1, subTheme: 'Hiérarchie', example: 'Der Teamleiter organisiert die Projekte.' },
    { article: 'der', german: 'Mitarbeiter', french: 'Collaborateur', plural: 'Mitarbeiter', level: LanguageLevel.A2, subTheme: 'Hiérarchie', example: 'Ein fleißiger Mitarbeiter.' },
    { article: 'die', german: 'Mitarbeiterin', french: 'Collaboratrice', plural: 'Mitarbeiterinnen', level: LanguageLevel.A2, subTheme: 'Hiérarchie', example: 'Eine kompetente Mitarbeiterin.' },
    { article: 'der', german: 'Kollege', french: 'Collègue (m)', plural: 'Kollegen', level: LanguageLevel.A1, subTheme: 'Hiérarchie', example: 'Mein Kollege hilft mir.' },
    { article: 'die', german: 'Kollegin', french: 'Collègue (f)', plural: 'Kolleginnen', level: LanguageLevel.A1, subTheme: 'Hiérarchie', example: 'Meine Kollegin ist sehr nett.' },
    { article: 'das', german: 'Team', french: 'Équipe', plural: 'Teams', level: LanguageLevel.A1, subTheme: 'Hiérarchie', example: 'Wir sind ein gutes Team.' },
    { article: 'der', german: 'Praktikant', french: 'Stagiaire (m)', plural: 'Praktikanten', level: LanguageLevel.A2, subTheme: 'Hiérarchie', example: 'Der Praktikant ist neu.' },
    { article: 'die', german: 'Praktikantin', french: 'Stagiaire (f)', plural: 'Praktikantinnen', level: LanguageLevel.A2, subTheme: 'Hiérarchie', example: 'Die Praktikantin lernt schnell.' },
    { article: 'der', german: 'Azubi', french: 'Apprenti', plural: 'Azubis', level: LanguageLevel.A2, subTheme: 'Hiérarchie', example: 'Der Azubi macht eine Ausbildung.' },
    
    // === MÉTIERS ===
    { article: 'der', german: 'Arzt', french: 'Médecin (m)', plural: 'Ärzte', level: LanguageLevel.A1, subTheme: 'Métiers', example: 'Er ist Arzt von Beruf.' },
    { article: 'die', german: 'Ärztin', french: 'Médecin (f)', plural: 'Ärztinnen', level: LanguageLevel.A1, subTheme: 'Métiers', example: 'Sie ist Ärztin.' },
    { article: 'der', german: 'Lehrer', french: 'Professeur (m)', plural: 'Lehrer', level: LanguageLevel.A1, subTheme: 'Métiers', example: 'Der Lehrer unterrichtet Deutsch.' },
    { article: 'die', german: 'Lehrerin', french: 'Professeur (f)', plural: 'Lehrerinnen', level: LanguageLevel.A1, subTheme: 'Métiers', example: 'Die Lehrerin ist streng.' },
    { article: 'der', german: 'Ingenieur', french: 'Ingénieur (m)', plural: 'Ingenieure', level: LanguageLevel.A2, subTheme: 'Métiers', example: 'Er arbeitet als Ingenieur.' },
    { article: 'die', german: 'Ingenieurin', french: 'Ingénieur (f)', plural: 'Ingenieurinnen', level: LanguageLevel.A2, subTheme: 'Métiers', example: 'Sie ist Softwareingenieurin.' },
    { article: 'der', german: 'Anwalt', french: 'Avocat', plural: 'Anwälte', level: LanguageLevel.A2, subTheme: 'Métiers', example: 'Er ist Anwalt.' },
    { article: 'die', german: 'Anwältin', french: 'Avocate', plural: 'Anwältinnen', level: LanguageLevel.A2, subTheme: 'Métiers', example: 'Die Anwältin vertritt ihren Mandanten.' },
    { article: 'der', german: 'Programmierer', french: 'Programmeur', plural: 'Programmierer', level: LanguageLevel.A2, subTheme: 'Métiers', example: 'Der Programmierer schreibt Code.' },
    { article: 'der', german: 'Designer', french: 'Designer', plural: 'Designer', level: LanguageLevel.A2, subTheme: 'Métiers', example: 'Der Designer entwirft Webseiten.' },
    { article: 'der', german: 'Verkäufer', french: 'Vendeur', plural: 'Verkäufer', level: LanguageLevel.A1, subTheme: 'Métiers', example: 'Der Verkäufer berät die Kunden.' },
    { article: 'die', german: 'Verkäuferin', french: 'Vendeuse', plural: 'Verkäuferinnen', level: LanguageLevel.A1, subTheme: 'Métiers', example: 'Die Verkäuferin ist freundlich.' },
    { article: 'der', german: 'Kellner', french: 'Serveur', plural: 'Kellner', level: LanguageLevel.A1, subTheme: 'Métiers', example: 'Der Kellner bringt das Essen.' },
    { article: 'die', german: 'Kellnerin', french: 'Serveuse', plural: 'Kellnerinnen', level: LanguageLevel.A1, subTheme: 'Métiers', example: 'Die Kellnerin nimmt die Bestellung auf.' },
    { article: 'der', german: 'Koch', french: 'Cuisinier', plural: 'Köche', level: LanguageLevel.A1, subTheme: 'Métiers', example: 'Der Koch bereitet das Essen zu.' },
    { article: 'die', german: 'Köchin', french: 'Cuisinière', plural: 'Köchinnen', level: LanguageLevel.A1, subTheme: 'Métiers', example: 'Die Köchin ist sehr talentiert.' },
    { article: 'der', german: 'Mechaniker', french: 'Mécanicien', plural: 'Mechaniker', level: LanguageLevel.A2, subTheme: 'Métiers', example: 'Der Mechaniker repariert das Auto.' },
    { article: 'der', german: 'Elektriker', french: 'Électricien', plural: 'Elektriker', level: LanguageLevel.A2, subTheme: 'Métiers', example: 'Der Elektriker installiert die Lampen.' },
    { article: 'der', german: 'Polizist', french: 'Policier', plural: 'Polizisten', level: LanguageLevel.A1, subTheme: 'Métiers', example: 'Der Polizist kontrolliert den Verkehr.' },
    { article: 'der', german: 'Feuerwehrmann', french: 'Pompier', plural: 'Feuerwehrleute', level: LanguageLevel.A2, subTheme: 'Métiers', example: 'Der Feuerwehrmann löscht das Feuer.' },
    { article: 'der', german: 'Krankenpfleger', french: 'Infirmier', plural: 'Krankenpfleger', level: LanguageLevel.A2, subTheme: 'Métiers', example: 'Der Krankenpfleger hilft den Patienten.' },
    { article: 'die', german: 'Krankenschwester', french: 'Infirmière', plural: 'Krankenschwestern', level: LanguageLevel.A1, subTheme: 'Métiers', example: 'Die Krankenschwester misst den Blutdruck.' },
    { article: 'der', german: 'Architekt', french: 'Architecte (m)', plural: 'Architekten', level: LanguageLevel.A2, subTheme: 'Métiers', example: 'Der Architekt plant das Gebäude.' },
    { article: 'der', german: 'Journalist', french: 'Journaliste (m)', plural: 'Journalisten', level: LanguageLevel.A2, subTheme: 'Métiers', example: 'Der Journalist schreibt einen Artikel.' },
    { article: 'der', german: 'Buchhalter', french: 'Comptable', plural: 'Buchhalter', level: LanguageLevel.B1, subTheme: 'Métiers', example: 'Der Buchhalter prüft die Rechnungen.' },
    { article: 'der', german: 'Manager', french: 'Manager', plural: 'Manager', level: LanguageLevel.A2, subTheme: 'Métiers', example: 'Der Manager leitet das Projekt.' },
    
    // === SALAIRE / ARGENT ===
    { article: 'das', german: 'Gehalt', french: 'Salaire (mensuel)', plural: 'Gehälter', level: LanguageLevel.A2, subTheme: 'Salaire', example: 'Ein faires Gehalt bekommen.' },
    { article: 'der', german: 'Lohn', french: 'Salaire (horaire)', plural: 'Löhne', level: LanguageLevel.A2, subTheme: 'Salaire', example: 'Der Lohn wird wöchentlich gezahlt.' },
    { article: 'das', german: 'Einkommen', french: 'Revenu', plural: 'Einkommen', level: LanguageLevel.B1, subTheme: 'Salaire', example: 'Ein hohes Einkommen.' },
    { article: 'die', german: 'Gehaltserhöhung', french: 'Augmentation', plural: 'Gehaltserhöhungen', level: LanguageLevel.B1, subTheme: 'Salaire', example: 'Ich bekomme eine Gehaltserhöhung.' },
    { article: 'der', german: 'Bonus', french: 'Prime', plural: 'Boni', level: LanguageLevel.B1, subTheme: 'Salaire', example: 'Der Jahresbonus wird ausgezahlt.' },
    { article: 'die', german: 'Sozialversicherung', french: 'Sécurité sociale', plural: 'n/a', level: LanguageLevel.B1, subTheme: 'Salaire', example: 'Die Sozialversicherung wird abgezogen.' },
    { article: 'die', german: 'Steuer', french: 'Impôt', plural: 'Steuern', level: LanguageLevel.B1, subTheme: 'Salaire', example: 'Steuern zahlen.' },
    { article: 'das', german: 'Brutto', french: 'Brut', plural: 'n/a', level: LanguageLevel.B1, subTheme: 'Salaire', example: 'Das Bruttogehalt.' },
    { article: 'das', german: 'Netto', french: 'Net', plural: 'n/a', level: LanguageLevel.B1, subTheme: 'Salaire', example: 'Das Nettogehalt.' },
    
    // === CANDIDATURE ===
    { article: 'die', german: 'Bewerbung', french: 'Candidature', plural: 'Bewerbungen', level: LanguageLevel.A2, subTheme: 'Candidature', example: 'Eine Bewerbung schreiben.' },
    { article: 'das', german: 'Bewerbungsschreiben', french: 'Lettre de motivation', plural: 'Bewerbungsschreiben', level: LanguageLevel.B1, subTheme: 'Candidature', example: 'Das Bewerbungsschreiben formulieren.' },
    { article: 'der', german: 'Lebenslauf', french: 'CV', plural: 'Lebensläufe', level: LanguageLevel.A2, subTheme: 'Candidature', example: 'Den Lebenslauf aktualisieren.' },
    { article: 'das', german: 'Vorstellungsgespräch', french: 'Entretien d\'embauche', plural: 'Vorstellungsgespräche', level: LanguageLevel.A2, subTheme: 'Candidature', example: 'Ein Vorstellungsgespräch haben.' },
    { article: 'die', german: 'Stellenanzeige', french: 'Offre d\'emploi', plural: 'Stellenanzeigen', level: LanguageLevel.A2, subTheme: 'Candidature', example: 'Eine Stellenanzeige lesen.' },
    { article: 'die', german: 'Qualifikation', french: 'Qualification', plural: 'Qualifikationen', level: LanguageLevel.B1, subTheme: 'Candidature', example: 'Die nötigen Qualifikationen haben.' },
    { article: 'die', german: 'Erfahrung', french: 'Expérience', plural: 'Erfahrungen', level: LanguageLevel.A2, subTheme: 'Candidature', example: 'Berufserfahrung sammeln.' },
    { article: 'das', german: 'Zeugnis', french: 'Certificat / Diplôme', plural: 'Zeugnisse', level: LanguageLevel.A2, subTheme: 'Candidature', example: 'Das Zeugnis der letzten Stelle.' },
    { article: 'die', german: 'Referenz', french: 'Référence', plural: 'Referenzen', level: LanguageLevel.B1, subTheme: 'Candidature', example: 'Gute Referenzen haben.' },
    
    // === CONTRAT ===
    { article: 'der', german: 'Vertrag', french: 'Contrat', plural: 'Verträge', level: LanguageLevel.A2, subTheme: 'Contrat', example: 'Den Arbeitsvertrag unterschreiben.' },
    { article: 'der', german: 'Arbeitsvertrag', french: 'Contrat de travail', plural: 'Arbeitsverträge', level: LanguageLevel.A2, subTheme: 'Contrat', example: 'Ein unbefristeter Arbeitsvertrag.' },
    { article: '', german: 'befristet', french: 'à durée déterminée', plural: 'n/a', level: LanguageLevel.B1, subTheme: 'Contrat', example: 'Ein befristeter Vertrag.' },
    { article: '', german: 'unbefristet', french: 'à durée indéterminée', plural: 'n/a', level: LanguageLevel.B1, subTheme: 'Contrat', example: 'Ein unbefristeter Vertrag.' },
    { article: 'die', german: 'Probezeit', french: 'Période d\'essai', plural: 'Probezeiten', level: LanguageLevel.B1, subTheme: 'Contrat', example: 'Die Probezeit dauert drei Monate.' },
    { article: 'die', german: 'Kündigung', french: 'Licenciement / Démission', plural: 'Kündigungen', level: LanguageLevel.B1, subTheme: 'Contrat', example: 'Die Kündigung einreichen.' },
    { article: 'die', german: 'Kündigungsfrist', french: 'Préavis', plural: 'Kündigungsfristen', level: LanguageLevel.B1, subTheme: 'Contrat', example: 'Die Kündigungsfrist beträgt einen Monat.' },
    
    // === RÉUNIONS ===
    { article: 'die', german: 'Besprechung', french: 'Réunion', plural: 'Besprechungen', level: LanguageLevel.A2, subTheme: 'Réunions', example: 'Wir haben eine Besprechung.' },
    { article: 'das', german: 'Meeting', french: 'Meeting', plural: 'Meetings', level: LanguageLevel.A2, subTheme: 'Réunions', example: 'Das Meeting beginnt um 10 Uhr.' },
    { article: 'die', german: 'Konferenz', french: 'Conférence', plural: 'Konferenzen', level: LanguageLevel.B1, subTheme: 'Réunions', example: 'Eine internationale Konferenz.' },
    { article: 'die', german: 'Videokonferenz', french: 'Vidéoconférence', plural: 'Videokonferenzen', level: LanguageLevel.A2, subTheme: 'Réunions', example: 'Eine Videokonferenz mit den Kollegen.' },
    { article: 'die', german: 'Präsentation', french: 'Présentation', plural: 'Präsentationen', level: LanguageLevel.A2, subTheme: 'Réunions', example: 'Eine Präsentation halten.' },
    { article: 'das', german: 'Protokoll', french: 'Compte-rendu', plural: 'Protokolle', level: LanguageLevel.B1, subTheme: 'Réunions', example: 'Das Protokoll der Besprechung.' },
    { article: 'die', german: 'Tagesordnung', french: 'Ordre du jour', plural: 'Tagesordnungen', level: LanguageLevel.B1, subTheme: 'Réunions', example: 'Die Tagesordnung besprechen.' },
    
    // === CONGÉS ===
    { article: 'der', german: 'Urlaub', french: 'Vacances / Congé', plural: 'Urlaube', level: LanguageLevel.A1, subTheme: 'Congés', example: 'Urlaub nehmen.' },
    { article: 'der', german: 'Urlaubstag', french: 'Jour de congé', plural: 'Urlaubstage', level: LanguageLevel.A2, subTheme: 'Congés', example: 'Ich habe noch fünf Urlaubstage.' },
    { article: 'der', german: 'Feiertag', french: 'Jour férié', plural: 'Feiertage', level: LanguageLevel.A1, subTheme: 'Congés', example: 'Montag ist ein Feiertag.' },
    { article: 'der', german: 'Brückentag', french: 'Jour de pont', plural: 'Brückentage', level: LanguageLevel.A2, subTheme: 'Congés', example: 'Ich mache einen Brückentag.' },
    { article: 'der', german: 'Krankheitstag', french: 'Jour de maladie', plural: 'Krankheitstage', level: LanguageLevel.A2, subTheme: 'Congés', example: 'Ich bin krank und nehme einen Krankheitstag.' },
    { article: 'die', german: 'Krankmeldung', french: 'Arrêt maladie', plural: 'Krankmeldungen', level: LanguageLevel.B1, subTheme: 'Congés', example: 'Die Krankmeldung einreichen.' },
    
    // === TEMPS SUPPLÉMENTAIRE ===
    { article: 'die', german: 'Überstunden', french: 'Heures supplémentaires', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Temps sup', example: 'Heute muss ich Überstunden machen.' },
    { article: 'die', german: 'Deadline', french: 'Date limite', plural: 'Deadlines', level: LanguageLevel.A2, subTheme: 'Temps sup', example: 'Die Deadline einhalten.' },
    { article: 'der', german: 'Stress', french: 'Stress', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Temps sup', example: 'Viel Stress bei der Arbeit.' },
    { article: 'der', german: 'Druck', french: 'Pression', plural: 'n/a', level: LanguageLevel.B1, subTheme: 'Temps sup', example: 'Unter Druck arbeiten.' },
    
    // === VERBES ===
    { article: '', german: 'arbeiten', french: 'travailler', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Verbes', example: 'Ich arbeite im Büro.' },
    { article: '', german: 'verdienen', french: 'gagner (argent)', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Verbes', example: 'Gut verdienen.' },
    { article: '', german: 'kündigen', french: 'démissionner / licencier', plural: 'n/a', level: LanguageLevel.B1, subTheme: 'Verbes', example: 'Er hat gekündigt.' },
    { article: '', german: 'einstellen', french: 'embaucher', plural: 'n/a', level: LanguageLevel.B1, subTheme: 'Verbes', example: 'Eine neue Mitarbeiterin einstellen.' },
    { article: '', german: 'bewerben (sich)', french: 'postuler', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Verbes', example: 'Sich um eine Stelle bewerben.' },
    { article: '', german: 'leiten', french: 'diriger', plural: 'n/a', level: LanguageLevel.B1, subTheme: 'Verbes', example: 'Ein Projekt leiten.' },
    { article: '', german: 'organisieren', french: 'organiser', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Verbes', example: 'Eine Besprechung organisieren.' },
    { article: '', german: 'telefonieren', french: 'téléphoner', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Verbes', example: 'Mit dem Chef telefonieren.' },
    { article: '', german: 'mailen', french: 'envoyer un e-mail', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Verbes', example: 'Ich maile Ihnen die Dokumente.' },
    { article: '', german: 'drucken', french: 'imprimer', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Verbes', example: 'Das Dokument drucken.' },
    { article: '', german: 'kopieren', french: 'copier', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Verbes', example: 'Eine Datei kopieren.' },
    { article: '', german: 'speichern', french: 'sauvegarder', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Verbes', example: 'Die Datei speichern.' },
    { article: '', german: 'unterschreiben', french: 'signer', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Verbes', example: 'Den Vertrag unterschreiben.' }
  ],
  phrases: [
    // Candidature
    { german: 'Ich bewerbe mich um die Stelle als...', french: 'Je postule pour le poste de...', context: 'Candidature' },
    { german: 'Anbei erhalten Sie meinen Lebenslauf.', french: 'Vous trouverez ci-joint mon CV.', context: 'Candidature' },
    { german: 'Ich verfüge über mehrjährige Berufserfahrung.', french: 'Je dispose de plusieurs années d\'expérience professionnelle.', context: 'Candidature' },
    { german: 'Ich freue mich auf Ihre Rückmeldung.', french: 'J\'attends votre réponse avec impatience.', context: 'Candidature' },
    
    // Entretien
    { german: 'Was sind Ihre Stärken und Schwächen?', french: 'Quels sont vos points forts et vos points faibles ?', context: 'Entretien' },
    { german: 'Warum möchten Sie bei uns arbeiten?', french: 'Pourquoi voulez-vous travailler chez nous ?', context: 'Entretien' },
    { german: 'Was sind Ihre Gehaltsvorstellungen?', french: 'Quelles sont vos prétentions salariales ?', context: 'Entretien' },
    { german: 'Wann können Sie anfangen?', french: 'Quand pouvez-vous commencer ?', context: 'Entretien' },
    
    // Bureau quotidien
    { german: 'Können Sie mir bitte helfen?', french: 'Pouvez-vous m\'aider, s\'il vous plaît ?', context: 'Bureau' },
    { german: 'Ich bin gerade in einer Besprechung.', french: 'Je suis en réunion.', context: 'Bureau' },
    { german: 'Können wir das später besprechen?', french: 'Pouvons-nous en parler plus tard ?', context: 'Bureau' },
    { german: 'Ich schicke Ihnen die Unterlagen per E-Mail.', french: 'Je vous envoie les documents par e-mail.', context: 'Bureau' },
    { german: 'Die Deadline ist morgen.', french: 'La date limite est demain.', context: 'Bureau' },
    { german: 'Ich arbeite heute im Homeoffice.', french: 'Je travaille de chez moi aujourd\'hui.', context: 'Bureau' },
    
    // Réunions
    { german: 'Wann findet das Meeting statt?', french: 'Quand a lieu la réunion ?', context: 'Réunion' },
    { german: 'Können Sie das Protokoll schreiben?', french: 'Pouvez-vous rédiger le compte-rendu ?', context: 'Réunion' },
    { german: 'Ich habe noch eine Frage.', french: 'J\'ai encore une question.', context: 'Réunion' },
    
    // Congés
    { german: 'Ich möchte Urlaub beantragen.', french: 'Je voudrais demander des congés.', context: 'Congés' },
    { german: 'Ich bin nächste Woche nicht im Büro.', french: 'Je ne serai pas au bureau la semaine prochaine.', context: 'Congés' },
    { german: 'Ich bin heute krank und kann nicht kommen.', french: 'Je suis malade aujourd\'hui et ne peux pas venir.', context: 'Congés' },
    
    // Fin de journée
    { german: 'Schönen Feierabend!', french: 'Bonne fin de journée !', context: 'Social' },
    { german: 'Bis morgen!', french: 'À demain !', context: 'Social' },
    { german: 'Ich freue mich auf eine gute Zusammenarbeit.', french: 'Je me réjouis d\'une bonne collaboration.', context: 'Social' }
  ]
};
