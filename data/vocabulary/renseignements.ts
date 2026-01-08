
import { ThemeContent, LanguageLevel } from '../../types';

export const renseignementsContent: ThemeContent = {
  words: [
    // === IDENTITÉ ===
    { article: 'der', german: 'Name', french: 'Nom', plural: 'Namen', level: LanguageLevel.A1, subTheme: 'Identité', example: 'Wie ist Ihr Name?' },
    { article: 'der', german: 'Vorname', french: 'Prénom', plural: 'Vornamen', level: LanguageLevel.A1, subTheme: 'Identité', example: 'Mein Vorname ist Anna.' },
    { article: 'der', german: 'Nachname', french: 'Nom de famille', plural: 'Nachnamen', level: LanguageLevel.A1, subTheme: 'Identité', example: 'Wie schreibt man Ihren Nachnamen?' },
    { article: 'das', german: 'Geburtsdatum', french: 'Date de naissance', plural: 'Geburtsdaten', level: LanguageLevel.A1, subTheme: 'Identité', example: 'Mein Geburtsdatum ist der 15. März.' },
    { article: 'der', german: 'Geburtsort', french: 'Lieu de naissance', plural: 'Geburtsorte', level: LanguageLevel.A2, subTheme: 'Identité', example: 'Mein Geburtsort ist Berlin.' },
    { article: 'das', german: 'Alter', french: 'Âge', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Identité', example: 'Wie alt sind Sie?' },
    { article: 'das', german: 'Geschlecht', french: 'Sexe', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Identité', example: 'Geschlecht: männlich oder weiblich.' },
    { article: 'die', german: 'Staatsangehörigkeit', french: 'Nationalité', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Identité', example: 'Welche Staatsangehörigkeit haben Sie?' },
    { article: 'die', german: 'Nationalität', french: 'Nationalité', plural: 'Nationalitäten', level: LanguageLevel.A1, subTheme: 'Identité', example: 'Nationalität: deutsch.' },
    { article: 'der', german: 'Familienstand', french: 'Situation familiale', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Identité', example: 'Familienstand: verheiratet.' },
    { article: '', german: 'ledig', french: 'célibataire', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Identité', example: 'Ich bin ledig.' },
    { article: '', german: 'verheiratet', french: 'marié(e)', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Identité', example: 'Sind Sie verheiratet?' },
    { article: '', german: 'geschieden', french: 'divorcé(e)', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Identité', example: 'Er ist geschieden.' },
    { article: '', german: 'verwitwet', french: 'veuf/veuve', plural: 'n/a', level: LanguageLevel.B1, subTheme: 'Identité', example: 'Sie ist verwitwet.' },
    
    // === ADRESSE ===
    { article: 'die', german: 'Adresse', french: 'Adresse', plural: 'Adressen', level: LanguageLevel.A1, subTheme: 'Adresse', example: 'Wie ist Ihre Adresse?' },
    { article: 'die', german: 'Straße', french: 'Rue', plural: 'Straßen', level: LanguageLevel.A1, subTheme: 'Adresse', example: 'In welcher Straße wohnen Sie?' },
    { article: 'die', german: 'Hausnummer', french: 'Numéro', plural: 'Hausnummern', level: LanguageLevel.A1, subTheme: 'Adresse', example: 'Hausnummer 15.' },
    { article: 'die', german: 'Postleitzahl', french: 'Code postal', plural: 'Postleitzahlen', level: LanguageLevel.A1, subTheme: 'Adresse', example: 'Die Postleitzahl ist 10115.' },
    { article: 'die', german: 'PLZ', french: 'CP', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Adresse', example: 'PLZ: 80331.' },
    { article: 'der', german: 'Ort', french: 'Lieu / Ville', plural: 'Orte', level: LanguageLevel.A1, subTheme: 'Adresse', example: 'Ort: München.' },
    { article: 'die', german: 'Stadt', french: 'Ville', plural: 'Städte', level: LanguageLevel.A1, subTheme: 'Adresse', example: 'In welcher Stadt wohnen Sie?' },
    { article: 'das', german: 'Land', french: 'Pays', plural: 'Länder', level: LanguageLevel.A1, subTheme: 'Adresse', example: 'Aus welchem Land kommen Sie?' },
    { article: 'der', german: 'Wohnort', french: 'Lieu de résidence', plural: 'Wohnorte', level: LanguageLevel.A1, subTheme: 'Adresse', example: 'Mein Wohnort ist Hamburg.' },
    
    // === CONTACT ===
    { article: 'die', german: 'Telefonnummer', french: 'Numéro de téléphone', plural: 'Telefonnummern', level: LanguageLevel.A1, subTheme: 'Contact', example: 'Wie ist Ihre Telefonnummer?' },
    { article: 'die', german: 'Handynummer', french: 'Numéro de portable', plural: 'Handynummern', level: LanguageLevel.A1, subTheme: 'Contact', example: 'Geben Sie Ihre Handynummer an.' },
    { article: 'die', german: 'E-Mail-Adresse', french: 'Adresse e-mail', plural: 'E-Mail-Adressen', level: LanguageLevel.A1, subTheme: 'Contact', example: 'Wie ist Ihre E-Mail-Adresse?' },
    { article: 'die', german: 'Faxnummer', french: 'Numéro de fax', plural: 'Faxnummern', level: LanguageLevel.A2, subTheme: 'Contact', example: 'Die Faxnummer der Firma.' },
    
    // === DOCUMENTS ===
    { article: 'der', german: 'Ausweis', french: 'Pièce d\'identité', plural: 'Ausweise', level: LanguageLevel.A1, subTheme: 'Documents', example: 'Zeigen Sie Ihren Ausweis.' },
    { article: 'der', german: 'Personalausweis', french: 'Carte d\'identité', plural: 'Personalausweise', level: LanguageLevel.A1, subTheme: 'Documents', example: 'Der Personalausweis ist abgelaufen.' },
    { article: 'der', german: 'Reisepass', french: 'Passeport', plural: 'Reisepässe', level: LanguageLevel.A1, subTheme: 'Documents', example: 'Haben Sie Ihren Reisepass dabei?' },
    { article: 'der', german: 'Führerschein', french: 'Permis de conduire', plural: 'Führerscheine', level: LanguageLevel.A1, subTheme: 'Documents', example: 'Den Führerschein vorzeigen.' },
    { article: 'die', german: 'Geburtsurkunde', french: 'Acte de naissance', plural: 'Geburtsurkunden', level: LanguageLevel.A2, subTheme: 'Documents', example: 'Eine Geburtsurkunde beantragen.' },
    { article: 'die', german: 'Heiratsurkunde', french: 'Acte de mariage', plural: 'Heiratsurkunden', level: LanguageLevel.B1, subTheme: 'Documents', example: 'Die Heiratsurkunde vorlegen.' },
    { article: 'die', german: 'Aufenthaltserlaubnis', french: 'Titre de séjour', plural: 'Aufenthaltserlaubnisse', level: LanguageLevel.B1, subTheme: 'Documents', example: 'Eine Aufenthaltserlaubnis beantragen.' },
    { article: 'das', german: 'Visum', french: 'Visa', plural: 'Visa', level: LanguageLevel.A2, subTheme: 'Documents', example: 'Ein Visum brauchen.' },
    { article: 'die', german: 'Meldebescheinigung', french: 'Attestation de domicile', plural: 'Meldebescheinigungen', level: LanguageLevel.B1, subTheme: 'Documents', example: 'Eine Meldebescheinigung abholen.' },
    { article: 'die', german: 'Versicherungskarte', french: 'Carte d\'assurance', plural: 'Versicherungskarten', level: LanguageLevel.A2, subTheme: 'Documents', example: 'Die Versicherungskarte vorlegen.' },
    
    // === FORMULAIRES ===
    { article: 'das', german: 'Formular', french: 'Formulaire', plural: 'Formulare', level: LanguageLevel.A1, subTheme: 'Formulaires', example: 'Das Formular ausfüllen.' },
    { article: 'der', german: 'Antrag', french: 'Demande / Requête', plural: 'Anträge', level: LanguageLevel.A2, subTheme: 'Formulaires', example: 'Einen Antrag stellen.' },
    { article: 'die', german: 'Unterschrift', french: 'Signature', plural: 'Unterschriften', level: LanguageLevel.A1, subTheme: 'Formulaires', example: 'Bitte hier Ihre Unterschrift.' },
    { article: 'das', german: 'Datum', french: 'Date', plural: 'Daten', level: LanguageLevel.A1, subTheme: 'Formulaires', example: 'Das Datum eintragen.' },
    { article: 'die', german: 'Angabe', french: 'Indication', plural: 'Angaben', level: LanguageLevel.A2, subTheme: 'Formulaires', example: 'Persönliche Angaben.' },
    { article: '', german: 'ausfüllen', french: 'remplir', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Formulaires', example: 'Das Formular ausfüllen.' },
    { article: '', german: 'unterschreiben', french: 'signer', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Formulaires', example: 'Bitte hier unterschreiben.' },
    { article: '', german: 'beantragen', french: 'demander', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Formulaires', example: 'Einen Pass beantragen.' },
    { article: '', german: 'angeben', french: 'indiquer', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Formulaires', example: 'Ihren Namen angeben.' },
    
    // === CHIFFRES / NUMÉROS ===
    { article: 'die', german: 'Nummer', french: 'Numéro', plural: 'Nummern', level: LanguageLevel.A1, subTheme: 'Numéros', example: 'Welche Nummer haben Sie?' },
    { article: 'die', german: 'Kontonummer', french: 'Numéro de compte', plural: 'Kontonummern', level: LanguageLevel.A2, subTheme: 'Numéros', example: 'Die Kontonummer angeben.' },
    { article: 'die', german: 'Steuernummer', french: 'Numéro fiscal', plural: 'Steuernummern', level: LanguageLevel.B1, subTheme: 'Numéros', example: 'Ihre Steuernummer bitte.' },
    { article: 'die', german: 'Sozialversicherungsnummer', french: 'Numéro de sécurité sociale', plural: 'Sozialversicherungsnummern', level: LanguageLevel.B1, subTheme: 'Numéros', example: 'Ihre Sozialversicherungsnummer.' },
    { article: 'die', german: 'Kundennummer', french: 'Numéro client', plural: 'Kundennummern', level: LanguageLevel.A2, subTheme: 'Numéros', example: 'Ihre Kundennummer bitte.' }
  ],
  phrases: [
    // Questions d'identité
    { german: 'Wie heißen Sie?', french: 'Comment vous appelez-vous ?', context: 'Identité' },
    { german: 'Wie ist Ihr Name?', french: 'Quel est votre nom ?', context: 'Identité' },
    { german: 'Wie alt sind Sie?', french: 'Quel âge avez-vous ?', context: 'Identité' },
    { german: 'Wann sind Sie geboren?', french: 'Quand êtes-vous né(e) ?', context: 'Identité' },
    { german: 'Wo sind Sie geboren?', french: 'Où êtes-vous né(e) ?', context: 'Identité' },
    { german: 'Welche Staatsangehörigkeit haben Sie?', french: 'Quelle est votre nationalité ?', context: 'Identité' },
    
    // Questions d'adresse
    { german: 'Wo wohnen Sie?', french: 'Où habitez-vous ?', context: 'Adresse' },
    { german: 'Wie ist Ihre Adresse?', french: 'Quelle est votre adresse ?', context: 'Adresse' },
    { german: 'Was ist Ihre Postleitzahl?', french: 'Quel est votre code postal ?', context: 'Adresse' },
    
    // Questions de contact
    { german: 'Wie ist Ihre Telefonnummer?', french: 'Quel est votre numéro de téléphone ?', context: 'Contact' },
    { german: 'Wie ist Ihre E-Mail-Adresse?', french: 'Quelle est votre adresse e-mail ?', context: 'Contact' },
    { german: 'Unter welcher Nummer kann ich Sie erreichen?', french: 'À quel numéro puis-je vous joindre ?', context: 'Contact' },
    
    // Formulaires
    { german: 'Bitte füllen Sie das Formular aus.', french: 'Veuillez remplir le formulaire.', context: 'Formulaires' },
    { german: 'Unterschreiben Sie hier bitte.', french: 'Signez ici, s\'il vous plaît.', context: 'Formulaires' },
    { german: 'Können Sie Ihren Ausweis zeigen?', french: 'Pouvez-vous montrer votre pièce d\'identité ?', context: 'Documents' },
    
    // Réponses
    { german: 'Ich heiße...', french: 'Je m\'appelle...', context: 'Réponses' },
    { german: 'Ich wohne in...', french: 'J\'habite à...', context: 'Réponses' },
    { german: 'Meine Telefonnummer ist...', french: 'Mon numéro de téléphone est...', context: 'Réponses' },
    { german: 'Ich bin ... Jahre alt.', french: 'J\'ai ... ans.', context: 'Réponses' }
  ]
};
