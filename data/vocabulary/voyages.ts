
import { ThemeContent, LanguageLevel } from '../../types';

export const voyagesContent: ThemeContent = {
  words: [
    { article: 'die', german: 'Reise', french: 'Voyage', plural: 'Reisen', level: LanguageLevel.A1, subTheme: 'Vacances', example: 'Gute Reise!' },
    { article: 'der', german: 'Urlaub', french: 'Vacances', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Vacances', example: 'Ich fahre bald in den Urlaub.' },
    { article: 'das', german: 'Flugzeug', french: 'Avion', plural: 'Flugzeuge', level: LanguageLevel.A1, subTheme: 'Transports', example: 'Das Flugzeug landet pünktlich.' },
    { article: 'der', german: 'Zug', french: 'Train', plural: 'Züge', level: LanguageLevel.A1, subTheme: 'Transports', example: 'Der Zug hat zehn Minuten Verspätung.' },
    { article: 'das', german: 'Auto', french: 'Voiture', plural: 'Autos', level: LanguageLevel.A1, subTheme: 'Transports', example: 'Ich fahre mit dem Auto zur Arbeit.' },
    { article: 'das', german: 'Hotel', french: 'Hôtel', plural: 'Hotels', level: LanguageLevel.A1, subTheme: 'Hôtel', example: 'Ein Zimmer im Hotel reservieren.' },
    { article: 'der', german: 'Koffer', french: 'Valise', plural: 'Koffer', level: LanguageLevel.A1, subTheme: 'Vacances', example: 'Hast du den Koffer schon gepackt?' },
    { article: 'der', german: 'Bahnhof', french: 'Gare', plural: 'Bahnhöfe', level: LanguageLevel.A1, subTheme: 'Transports', example: 'Treffen wir uns am Bahnhof?' },
    { article: 'der', german: 'Flughafen', french: 'Aéroport', plural: 'Flughäfen', level: LanguageLevel.A2, subTheme: 'Transports', example: 'Der Flughafen ist weit weg.' },
    { article: 'die', german: 'Fahrkarte', french: 'Billet / Ticket', plural: 'Fahrkarten', level: LanguageLevel.A1, subTheme: 'Transports', example: 'Haben Sie eine Fahrkarte?' },
    { article: 'das', german: 'Gepäck', french: 'Bagages', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Vacances', example: 'Wo kann ich mein Gepäck abgeben?' },
    { article: 'die', german: 'Unterkunft', french: 'Hébergement', plural: 'Unterkünfte', level: LanguageLevel.B1, subTheme: 'Hôtel', example: 'Wir suchen eine günstige Unterkunft.' },
    { article: 'die', german: 'Verspätung', french: 'Retard', plural: 'Verspätungen', level: LanguageLevel.A2, subTheme: 'Transports', example: 'Der Bus hat leider Verspätung.' },
    { article: 'das', german: 'Ausland', french: 'Étranger (pays)', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Vacances', example: 'Im Ausland studieren.' },
    { article: 'die', german: 'Sehenswürdigkeit', french: 'Curiosité touristique', plural: 'Sehenswürdigkeiten', level: LanguageLevel.B1, subTheme: 'Vacances', example: 'Berlin hat viele Sehenswürdigkeiten.' }
  ],
  phrases: [
    { german: 'Wo kann ich ein Ticket kaufen?', french: 'Où puis-je acheter un ticket ?', context: 'Transport' },
    { german: 'Ein Doppelzimmer mit Frühstück, bitte.', french: 'Une chambre double avec petit-déjeuner, s\'il vous plaît.', context: 'Hôtel' }
  ]
};