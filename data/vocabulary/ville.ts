
import { ThemeContent, LanguageLevel } from '../../types.ts';

export const villeContent: ThemeContent = {
  words: [
    { article: 'die', german: 'Stadt', french: 'Ville', plural: 'Städte', level: LanguageLevel.A1, subTheme: 'Bâtiments', example: 'Ich wohne in einer kleinen Stadt.' },
    { article: 'das', german: 'Zentrum', french: 'Centre-ville', plural: 'Zentren', level: LanguageLevel.A1, subTheme: 'Bâtiments', example: 'Das Zentrum ist sehr belebt.' },
    { article: 'das', german: 'Rathaus', french: 'Mairie', plural: 'Rathäuser', level: LanguageLevel.A2, subTheme: 'Bâtiments', example: 'Das Rathaus ist am Marktplatz.' },
    { article: 'die', german: 'Kirche', french: 'Église', plural: 'Kirchen', level: LanguageLevel.A1, subTheme: 'Bâtiments', example: 'Eine alte Kirche.' },
    { article: 'die', german: 'Straße', french: 'Rue', plural: 'Straßen', level: LanguageLevel.A1, subTheme: 'Bâtiments', example: 'In dieser Straße gibt es viele Läden.' },
    { article: 'der', german: 'Platz', french: 'Place / Espace', plural: 'Plätze', level: LanguageLevel.A1, subTheme: 'Bâtiments', example: 'Ein großer öffentlicher Platz.' },
    { article: 'das', german: 'Geschäft', french: 'Magasin / Affaire', plural: 'Geschäfte', level: LanguageLevel.A1, subTheme: 'Magasins', example: 'Die Geschäfte schließen um 20 Uhr.' },
    { article: 'das', german: 'Kaufhaus', french: 'Grand magasin', plural: 'Kaufhäuser', level: LanguageLevel.A2, subTheme: 'Magasins', example: 'Shoppen im Kaufhaus.' },
    { article: 'die', german: 'Bäckerei', french: 'Boulangerie', plural: 'Bäckereien', level: LanguageLevel.A1, subTheme: 'Magasins', example: 'Frische Brötchen aus der Bäckerei.' },
    { article: 'die', german: 'Apotheke', french: 'Pharmacie', plural: 'Apotheken', level: LanguageLevel.A1, subTheme: 'Services', example: 'Die Apotheke hat Notdienst.' },
    { article: 'die', german: 'Bank', french: 'Banque', plural: 'Banken', level: LanguageLevel.A1, subTheme: 'Services', example: 'Ich muss Geld auf die Bank bringen.' },
    { article: 'die', german: 'Post', french: 'Poste', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Services', example: 'Bring diesen Brief zur Post.' },
    { article: 'die', german: 'Polizei', french: 'Police', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Services', example: 'Rufen Sie die Polizei!' },
    { article: 'das', german: 'Museum', french: 'Musée', plural: 'Museen', level: LanguageLevel.A2, subTheme: 'Bâtiments', example: 'Das Museum ist montags geschlossen.' },
    { article: 'die', german: 'Ampel', french: 'Feu de signalisation', plural: 'Ampeln', level: LanguageLevel.A2, subTheme: 'Bâtiments', example: 'Warte bei Rot an der Ampel.' }
  ],
  phrases: [
    { german: 'Entschuldigung, wie komme ich zum Bahnhof?', french: 'Excusez-moi, comment vais-je à la gare ?', context: 'Direction' },
    { german: 'Gibt es hier in der Nähe eine Bank?', french: 'Y a-t-il une banque près d\'ici ?', context: 'Services' }
  ]
};
