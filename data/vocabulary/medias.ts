
import { ThemeContent, LanguageLevel } from '../../types';

export const mediasContent: ThemeContent = {
  words: [
    { article: 'das', german: 'Handy', french: 'Téléphone portable', plural: 'Handys', level: LanguageLevel.A1, subTheme: 'Téléphone', example: 'Mein Handy ist leer.' },
    { article: 'das', german: 'Internet', french: 'Internet', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Internet', example: 'Im Internet surfen.' },
    { article: 'die', german: 'Nachricht', french: 'Nouvelle / Message', plural: 'Nachrichten', level: LanguageLevel.A2, subTheme: 'Internet', example: 'Ich habe dir eine Nachricht geschickt.' },
    { article: 'der', german: 'Computer', french: 'Ordinateur', plural: 'Computer', level: LanguageLevel.A1, subTheme: 'Internet', example: 'Am Computer arbeiten.' },
    { article: 'die', german: 'Zeitung', french: 'Journal', plural: 'Zeitungen', level: LanguageLevel.A1, subTheme: 'Presse', example: 'Zeitung lesen.' },
    { article: 'das', german: 'Fernsehen', french: 'Télévision', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Presse', example: 'Abends fernsehen.' },
    { article: 'die', german: 'Werbung', french: 'Publicité', plural: 'Werbungen', level: LanguageLevel.A2, subTheme: 'Presse', example: 'Viel Werbung im Fernsehen.' },
    { article: 'das', german: 'Passwort', french: 'Mot de passe', plural: 'Passwörter', level: LanguageLevel.A2, subTheme: 'Internet', example: 'Vergiss dein Passwort nicht.' },
    { article: 'die', german: 'Soziale Medien', french: 'Réseaux sociaux', plural: 'n/a', level: LanguageLevel.B1, subTheme: 'Internet', example: 'Zeit in sozialen Medien verbringen.' },
    { article: 'die', german: 'Information', french: 'Information', plural: 'Informationen', level: LanguageLevel.A2, subTheme: 'Presse', example: 'Wichtige Informationen finden.' },
    { article: 'der', german: 'Anruf', french: 'Appel téléphonique', plural: 'Anrufe', level: LanguageLevel.A2, subTheme: 'Téléphone', example: 'Ich warte auf einen Anruf.' },
    { article: 'die', german: 'App', french: 'Application', plural: 'Apps', level: LanguageLevel.A1, subTheme: 'Internet', example: 'Eine nützliche App installieren.' },
    { article: 'der', german: 'Bildschirm', french: 'Écran', plural: 'Bildschirme', level: LanguageLevel.A2, subTheme: 'Internet', example: 'Ein großer Bildschirm.' },
    { article: 'die', german: 'E-Mail', french: 'E-mail', plural: 'E-Mails', level: LanguageLevel.A1, subTheme: 'Internet', example: 'Eine E-Mail schreiben.' },
    { article: 'die', german: 'Kamera', french: 'Caméra / Appareil photo', plural: 'Kameras', level: LanguageLevel.A1, subTheme: 'Téléphone', example: 'Eine gute Kamera am Handy.' }
  ],
  phrases: [
    { german: 'Ich bin gerade offline.', french: 'Je suis hors ligne en ce moment.', context: 'Internet' },
    { german: 'Können wir per WhatsApp schreiben?', french: 'Pouvons-nous nous écrire par WhatsApp ?', context: 'Communication' }
  ]
};