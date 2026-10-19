
import { ThemeContent, LanguageLevel } from '../../types';

export const voyagesContent: ThemeContent = {
  words: [
    // === VOYAGE GÉNÉRAL ===
    { article: 'die', german: 'Reise', english: 'Trip / Journey', french: 'Voyage', plural: 'Reisen', level: LanguageLevel.A1, subTheme: 'Général', example: 'Gute Reise!' },
    { article: 'der', german: 'Urlaub', english: 'Vacation / Holiday', french: 'Vacances', plural: 'Urlaube', level: LanguageLevel.A1, subTheme: 'Général', example: 'Ich fahre bald in den Urlaub.' },
    { article: 'die', german: 'Ferien', english: 'Vacation (school)', french: 'Vacances scolaires', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Général', example: 'In den Ferien fahren wir ans Meer.' },
    { article: 'der', german: 'Tourist', english: 'Tourist (m)', french: 'Touriste', plural: 'Touristen', level: LanguageLevel.A1, subTheme: 'Général', example: 'Der Tourist macht viele Fotos.' },
    { article: 'die', german: 'Touristin', english: 'Tourist (f)', french: 'Touriste (f)', plural: 'Touristinnen', level: LanguageLevel.A1, subTheme: 'Général', example: 'Die Touristin fragt nach dem Weg.' },
    { article: 'der', german: 'Reisende', english: 'Traveler', french: 'Voyageur', plural: 'Reisenden', level: LanguageLevel.A2, subTheme: 'Général', example: 'Die Reisenden warten am Gleis.' },
    { article: 'das', german: 'Reiseziel', english: 'Destination', french: 'Destination', plural: 'Reiseziele', level: LanguageLevel.A2, subTheme: 'Général', example: 'Unser Reiseziel ist Italien.' },
    { article: 'die', german: 'Rundreise', english: 'Round trip / Circuit', french: 'Circuit', plural: 'Rundreisen', level: LanguageLevel.B1, subTheme: 'Général', example: 'Wir machen eine Rundreise durch Europa.' },
    { article: 'die', german: 'Pauschalreise', english: 'Package tour', french: 'Voyage organisé', plural: 'Pauschalreisen', level: LanguageLevel.B1, subTheme: 'Général', example: 'Eine Pauschalreise nach Ägypten.' },
    { article: 'das', german: 'Abenteuer', english: 'Adventure', french: 'Aventure', plural: 'Abenteuer', level: LanguageLevel.A2, subTheme: 'Général', example: 'Die Reise war ein großes Abenteuer.' },
    { article: 'die', german: 'Weltreise', english: 'World trip', french: 'Tour du monde', plural: 'Weltreisen', level: LanguageLevel.B1, subTheme: 'Général', example: 'Er träumt von einer Weltreise.' },
    { article: 'das', german: 'Ausland', english: 'Abroad / Foreign country', french: 'Étranger', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Général', example: 'Im Ausland studieren.' },
    { article: 'das', german: 'Inland', english: 'Domestic / Inland', french: 'Territoire national', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Général', example: 'Eine Reise im Inland.' },

    // === TRANSPORTS ===
    { article: 'das', german: 'Flugzeug', english: 'Airplane', french: 'Avion', plural: 'Flugzeuge', level: LanguageLevel.A1, subTheme: 'Transports', example: 'Das Flugzeug landet pünktlich.' },
    { article: 'der', german: 'Flug', english: 'Flight', french: 'Vol', plural: 'Flüge', level: LanguageLevel.A1, subTheme: 'Transports', example: 'Der Flug dauert zwei Stunden.' },
    { article: 'der', german: 'Flughafen', english: 'Airport', french: 'Aéroport', plural: 'Flughäfen', level: LanguageLevel.A1, subTheme: 'Transports', example: 'Der Flughafen ist weit weg.' },
    { article: 'die', german: 'Landung', english: 'Landing', french: 'Atterrissage', plural: 'Landungen', level: LanguageLevel.A2, subTheme: 'Transports', example: 'Die Landung war sanft.' },
    { article: 'der', german: 'Abflug', english: 'Departure (flight)', french: 'Départ (vol)', plural: 'Abflüge', level: LanguageLevel.A2, subTheme: 'Transports', example: 'Der Abflug ist um 14 Uhr.' },
    { article: 'die', german: 'Ankunft', english: 'Arrival', french: 'Arrivée', plural: 'Ankünfte', level: LanguageLevel.A2, subTheme: 'Transports', example: 'Die Ankunft ist pünktlich.' },
    { article: 'das', german: 'Gate', english: 'Gate', french: 'Porte d\'embarquement', plural: 'Gates', level: LanguageLevel.A2, subTheme: 'Transports', example: 'Das Boarding ist am Gate B12.' },
    { article: 'die', german: 'Bordkarte', english: 'Boarding pass', french: 'Carte d\'embarquement', plural: 'Bordkarten', level: LanguageLevel.A2, subTheme: 'Transports', example: 'Zeigen Sie bitte Ihre Bordkarte.' },
    { article: 'der', german: 'Zug', english: 'Train', french: 'Train', plural: 'Züge', level: LanguageLevel.A1, subTheme: 'Transports', example: 'Der Zug hat zehn Minuten Verspätung.' },
    { article: 'der', german: 'Bahnhof', english: 'Train station', french: 'Gare', plural: 'Bahnhöfe', level: LanguageLevel.A1, subTheme: 'Transports', example: 'Treffen wir uns am Bahnhof?' },
    { article: 'der', german: 'Hauptbahnhof', english: 'Central station', french: 'Gare centrale', plural: 'Hauptbahnhöfe', level: LanguageLevel.A1, subTheme: 'Transports', example: 'Der Hauptbahnhof ist im Zentrum.' },
    { article: 'das', german: 'Gleis', english: 'Platform / Track', french: 'Voie / Quai', plural: 'Gleise', level: LanguageLevel.A1, subTheme: 'Transports', example: 'Der Zug fährt von Gleis 5 ab.' },
    { article: 'die', german: 'S-Bahn', english: 'Suburban train', french: 'RER / Train de banlieue', plural: 'S-Bahnen', level: LanguageLevel.A1, subTheme: 'Transports', example: 'Ich nehme die S-Bahn zur Arbeit.' },
    { article: 'die', german: 'U-Bahn', english: 'Subway / Metro', french: 'Métro', plural: 'U-Bahnen', level: LanguageLevel.A1, subTheme: 'Transports', example: 'Die U-Bahn fährt alle 5 Minuten.' },
    { article: 'die', german: 'Straßenbahn', english: 'Tram', french: 'Tramway', plural: 'Straßenbahnen', level: LanguageLevel.A1, subTheme: 'Transports', example: 'Die Straßenbahn hält hier.' },
    { article: 'der', german: 'Bus', english: 'Bus', french: 'Bus', plural: 'Busse', level: LanguageLevel.A1, subTheme: 'Transports', example: 'Der Bus kommt in 10 Minuten.' },
    { article: 'die', german: 'Haltestelle', english: 'Stop', french: 'Arrêt', plural: 'Haltestellen', level: LanguageLevel.A1, subTheme: 'Transports', example: 'Die Haltestelle ist dort drüben.' },
    { article: 'das', german: 'Auto', english: 'Car', french: 'Voiture', plural: 'Autos', level: LanguageLevel.A1, subTheme: 'Transports', example: 'Ich fahre mit dem Auto zur Arbeit.' },
    { article: 'der', german: 'Mietwagen', english: 'Rental car', french: 'Voiture de location', plural: 'Mietwagen', level: LanguageLevel.A2, subTheme: 'Transports', example: 'Wir haben einen Mietwagen gebucht.' },
    { article: 'das', german: 'Taxi', english: 'Taxi', french: 'Taxi', plural: 'Taxis', level: LanguageLevel.A1, subTheme: 'Transports', example: 'Ich nehme ein Taxi zum Hotel.' },
    { article: 'das', german: 'Fahrrad', english: 'Bicycle', french: 'Vélo', plural: 'Fahrräder', level: LanguageLevel.A1, subTheme: 'Transports', example: 'Ich fahre gern Fahrrad.' },
    { article: 'das', german: 'Schiff', english: 'Ship', french: 'Bateau', plural: 'Schiffe', level: LanguageLevel.A1, subTheme: 'Transports', example: 'Das Schiff fährt nach Schweden.' },
    { article: 'die', german: 'Fähre', english: 'Ferry', french: 'Ferry', plural: 'Fähren', level: LanguageLevel.A2, subTheme: 'Transports', example: 'Die Fähre nach England.' },
    { article: 'der', german: 'Hafen', english: 'Port / Harbor', french: 'Port', plural: 'Häfen', level: LanguageLevel.A2, subTheme: 'Transports', example: 'Das Schiff liegt im Hafen.' },
    { article: 'die', german: 'Kreuzfahrt', english: 'Cruise', french: 'Croisière', plural: 'Kreuzfahrten', level: LanguageLevel.B1, subTheme: 'Transports', example: 'Eine Kreuzfahrt durch die Karibik.' },

    // === BILLETS / RÉSERVATIONS ===
    { article: 'die', german: 'Fahrkarte', english: 'Ticket', french: 'Billet', plural: 'Fahrkarten', level: LanguageLevel.A1, subTheme: 'Billets', example: 'Haben Sie eine Fahrkarte?' },
    { article: 'das', german: 'Ticket', english: 'Ticket', french: 'Ticket', plural: 'Tickets', level: LanguageLevel.A1, subTheme: 'Billets', example: 'Ich habe das Ticket online gekauft.' },
    { article: 'die', german: 'Einzelfahrkarte', english: 'Single ticket', french: 'Billet simple', plural: 'Einzelfahrkarten', level: LanguageLevel.A2, subTheme: 'Billets', example: 'Eine Einzelfahrkarte nach München.' },
    { article: 'die', german: 'Rückfahrkarte', english: 'Return ticket', french: 'Billet aller-retour', plural: 'Rückfahrkarten', level: LanguageLevel.A2, subTheme: 'Billets', example: 'Eine Rückfahrkarte, bitte.' },
    { article: 'die', german: 'Monatskarte', english: 'Monthly pass', french: 'Abonnement mensuel', plural: 'Monatskarten', level: LanguageLevel.A2, subTheme: 'Billets', example: 'Ich habe eine Monatskarte.' },
    { article: 'die', german: 'Reservierung', english: 'Reservation', french: 'Réservation', plural: 'Reservierungen', level: LanguageLevel.A2, subTheme: 'Billets', example: 'Haben Sie eine Reservierung?' },
    { article: 'die', german: 'Buchung', english: 'Booking', french: 'Réservation', plural: 'Buchungen', level: LanguageLevel.A2, subTheme: 'Billets', example: 'Die Buchung ist bestätigt.' },
    { article: 'der', german: 'Preis', english: 'Price', french: 'Prix', plural: 'Preise', level: LanguageLevel.A1, subTheme: 'Billets', example: 'Was kostet das Ticket?' },
    { article: 'die', german: 'Ermäßigung', english: 'Discount / Reduction', french: 'Réduction', plural: 'Ermäßigungen', level: LanguageLevel.A2, subTheme: 'Billets', example: 'Gibt es eine Ermäßigung für Studenten?' },
    { article: 'die', german: 'erste Klasse', english: 'First class', french: 'Première classe', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Billets', example: 'Ein Ticket erster Klasse.' },
    { article: 'die', german: 'zweite Klasse', english: 'Second class', french: 'Deuxième classe', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Billets', example: 'Zweite Klasse ist günstiger.' },

    // === BAGAGES ===
    { article: 'das', german: 'Gepäck', english: 'Luggage', french: 'Bagages', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Bagages', example: 'Wo kann ich mein Gepäck abgeben?' },
    { article: 'der', german: 'Koffer', english: 'Suitcase', french: 'Valise', plural: 'Koffer', level: LanguageLevel.A1, subTheme: 'Bagages', example: 'Hast du den Koffer schon gepackt?' },
    { article: 'die', german: 'Tasche', english: 'Bag', french: 'Sac', plural: 'Taschen', level: LanguageLevel.A1, subTheme: 'Bagages', example: 'Meine Tasche ist schwer.' },
    { article: 'der', german: 'Rucksack', english: 'Backpack', french: 'Sac à dos', plural: 'Rucksäcke', level: LanguageLevel.A1, subTheme: 'Bagages', example: 'Ich reise nur mit dem Rucksack.' },
    { article: 'das', german: 'Handgepäck', english: 'Carry-on luggage', french: 'Bagage à main', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Bagages', example: 'Das Handgepäck darf 8 kg wiegen.' },
    { article: 'die', german: 'Gepäckaufgabe', english: 'Baggage drop-off', french: 'Dépôt des bagages', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Bagages', example: 'Die Gepäckaufgabe ist am Schalter 3.' },
    { article: 'die', german: 'Gepäckausgabe', english: 'Baggage claim', french: 'Retrait des bagages', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Bagages', example: 'Die Gepäckausgabe ist in der Halle B.' },
    { article: 'der', german: 'Gepäckwagen', english: 'Luggage trolley', french: 'Chariot à bagages', plural: 'Gepäckwagen', level: LanguageLevel.A2, subTheme: 'Bagages', example: 'Ich brauche einen Gepäckwagen.' },

    // === HÉBERGEMENT ===
    { article: 'das', german: 'Hotel', english: 'Hotel', french: 'Hôtel', plural: 'Hotels', level: LanguageLevel.A1, subTheme: 'Hébergement', example: 'Ein Zimmer im Hotel reservieren.' },
    { article: 'die', german: 'Pension', english: 'Guesthouse / Pension', french: 'Pension de famille', plural: 'Pensionen', level: LanguageLevel.A2, subTheme: 'Hébergement', example: 'Wir übernachten in einer Pension.' },
    { article: 'die', german: 'Jugendherberge', english: 'Youth hostel', french: 'Auberge de jeunesse', plural: 'Jugendherbergen', level: LanguageLevel.A2, subTheme: 'Hébergement', example: 'Die Jugendherberge ist günstig.' },
    { article: 'die', german: 'Ferienwohnung', english: 'Vacation apartment', french: 'Appartement de vacances', plural: 'Ferienwohnungen', level: LanguageLevel.A2, subTheme: 'Hébergement', example: 'Wir mieten eine Ferienwohnung.' },
    { article: 'das', german: 'Ferienhaus', english: 'Vacation home', french: 'Maison de vacances', plural: 'Ferienhäuser', level: LanguageLevel.A2, subTheme: 'Hébergement', example: 'Ein Ferienhaus am Meer.' },
    { article: 'der', german: 'Campingplatz', english: 'Campsite', french: 'Camping', plural: 'Campingplätze', level: LanguageLevel.A2, subTheme: 'Hébergement', example: 'Der Campingplatz ist am See.' },
    { article: 'das', german: 'Zelt', english: 'Tent', french: 'Tente', plural: 'Zelte', level: LanguageLevel.A1, subTheme: 'Hébergement', example: 'Wir schlafen im Zelt.' },
    { article: 'die', german: 'Unterkunft', english: 'Accommodation', french: 'Hébergement', plural: 'Unterkünfte', level: LanguageLevel.B1, subTheme: 'Hébergement', example: 'Wir suchen eine günstige Unterkunft.' },
    { article: 'das', german: 'Zimmer', english: 'Room', french: 'Chambre', plural: 'Zimmer', level: LanguageLevel.A1, subTheme: 'Hébergement', example: 'Ein Zimmer für zwei Nächte.' },
    { article: 'das', german: 'Einzelzimmer', english: 'Single room', french: 'Chambre simple', plural: 'Einzelzimmer', level: LanguageLevel.A1, subTheme: 'Hébergement', example: 'Ein Einzelzimmer, bitte.' },
    { article: 'das', german: 'Doppelzimmer', english: 'Double room', french: 'Chambre double', plural: 'Doppelzimmer', level: LanguageLevel.A1, subTheme: 'Hébergement', example: 'Ein Doppelzimmer mit Bad.' },
    { article: 'die', german: 'Rezeption', english: 'Reception', french: 'Réception', plural: 'Rezeptionen', level: LanguageLevel.A1, subTheme: 'Hébergement', example: 'An der Rezeption einchecken.' },
    { article: 'der', german: 'Schlüssel', english: 'Key', french: 'Clé', plural: 'Schlüssel', level: LanguageLevel.A1, subTheme: 'Hébergement', example: 'Kann ich den Schlüssel haben?' },
    { article: 'das', german: 'Frühstück', english: 'Breakfast', french: 'Petit-déjeuner', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Hébergement', example: 'Das Frühstück ist inbegriffen.' },
    { article: 'die', german: 'Halbpension', english: 'Half board', french: 'Demi-pension', plural: 'n/a', level: LanguageLevel.B1, subTheme: 'Hébergement', example: 'Wir buchen mit Halbpension.' },
    { article: 'die', german: 'Vollpension', english: 'Full board', french: 'Pension complète', plural: 'n/a', level: LanguageLevel.B1, subTheme: 'Hébergement', example: 'Vollpension ist teurer.' },
    { article: 'der', german: 'Check-in', english: 'Check-in', french: 'Enregistrement', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Hébergement', example: 'Der Check-in ist ab 14 Uhr.' },
    { article: 'der', german: 'Check-out', english: 'Check-out', french: 'Départ / Check-out', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Hébergement', example: 'Der Check-out ist bis 11 Uhr.' },

    // === DOCUMENTS ===
    { article: 'der', german: 'Reisepass', english: 'Passport', french: 'Passeport', plural: 'Reisepässe', level: LanguageLevel.A1, subTheme: 'Documents', example: 'Ihren Reisepass, bitte.' },
    { article: 'der', german: 'Personalausweis', english: 'ID card', french: 'Carte d\'identité', plural: 'Personalausweise', level: LanguageLevel.A1, subTheme: 'Documents', example: 'Der Personalausweis reicht in der EU.' },
    { article: 'das', german: 'Visum', english: 'Visa', french: 'Visa', plural: 'Visa', level: LanguageLevel.A2, subTheme: 'Documents', example: 'Brauche ich ein Visum?' },
    { article: 'der', german: 'Führerschein', english: 'Driver\'s license', french: 'Permis de conduire', plural: 'Führerscheine', level: LanguageLevel.A2, subTheme: 'Documents', example: 'Zeigen Sie Ihren Führerschein.' },
    { article: 'die', german: 'Reiseversicherung', english: 'Travel insurance', french: 'Assurance voyage', plural: 'Reiseversicherungen', level: LanguageLevel.B1, subTheme: 'Documents', example: 'Eine Reiseversicherung ist wichtig.' },

    // === TOURISME ===
    { article: 'die', german: 'Sehenswürdigkeit', english: 'Sight / Attraction', french: 'Curiosité touristique', plural: 'Sehenswürdigkeiten', level: LanguageLevel.A2, subTheme: 'Tourisme', example: 'Berlin hat viele Sehenswürdigkeiten.' },
    { article: 'das', german: 'Museum', english: 'Museum', french: 'Musée', plural: 'Museen', level: LanguageLevel.A1, subTheme: 'Tourisme', example: 'Das Museum ist montags geschlossen.' },
    { article: 'die', german: 'Kirche', english: 'Church', french: 'Église', plural: 'Kirchen', level: LanguageLevel.A1, subTheme: 'Tourisme', example: 'Eine alte Kirche besichtigen.' },
    { article: 'das', german: 'Schloss', english: 'Castle / Palace', french: 'Château', plural: 'Schlösser', level: LanguageLevel.A2, subTheme: 'Tourisme', example: 'Das Schloss Neuschwanstein.' },
    { article: 'die', german: 'Burg', english: 'Fortress / Castle', french: 'Forteresse', plural: 'Burgen', level: LanguageLevel.A2, subTheme: 'Tourisme', example: 'Die Burg steht auf einem Berg.' },
    { article: 'der', german: 'Dom', english: 'Cathedral', french: 'Cathédrale', plural: 'Dome', level: LanguageLevel.A2, subTheme: 'Tourisme', example: 'Der Kölner Dom ist berühmt.' },
    { article: 'das', german: 'Denkmal', english: 'Monument', french: 'Monument', plural: 'Denkmäler', level: LanguageLevel.A2, subTheme: 'Tourisme', example: 'Ein historisches Denkmal.' },
    { article: 'die', german: 'Stadtführung', english: 'Guided city tour', french: 'Visite guidée de la ville', plural: 'Stadtführungen', level: LanguageLevel.A2, subTheme: 'Tourisme', example: 'Wir machen eine Stadtführung.' },
    { article: 'der', german: 'Reiseführer', english: 'Travel guide', french: 'Guide de voyage', plural: 'Reiseführer', level: LanguageLevel.A2, subTheme: 'Tourisme', example: 'Der Reiseführer kennt die Stadt gut.' },
    { article: 'die', german: 'Karte', english: 'Map', french: 'Carte', plural: 'Karten', level: LanguageLevel.A1, subTheme: 'Tourisme', example: 'Haben Sie eine Karte von der Stadt?' },
    { article: 'der', german: 'Stadtplan', english: 'City map', french: 'Plan de ville', plural: 'Stadtpläne', level: LanguageLevel.A1, subTheme: 'Tourisme', example: 'Ich brauche einen Stadtplan.' },
    { article: 'das', german: 'Souvenir', english: 'Souvenir', french: 'Souvenir', plural: 'Souvenirs', level: LanguageLevel.A1, subTheme: 'Tourisme', example: 'Ein Souvenir kaufen.' },
    { article: 'die', german: 'Postkarte', english: 'Postcard', french: 'Carte postale', plural: 'Postkarten', level: LanguageLevel.A1, subTheme: 'Tourisme', example: 'Ich schreibe eine Postkarte.' },

    // === PLAGE / MER ===
    { article: 'der', german: 'Strand', english: 'Beach', french: 'Plage', plural: 'Strände', level: LanguageLevel.A1, subTheme: 'Plage', example: 'Wir gehen an den Strand.' },
    { article: 'das', german: 'Meer', english: 'Sea', french: 'Mer', plural: 'Meere', level: LanguageLevel.A1, subTheme: 'Plage', example: 'Im Meer schwimmen.' },
    { article: 'der', german: 'Ozean', english: 'Ocean', french: 'Océan', plural: 'Ozeane', level: LanguageLevel.A2, subTheme: 'Plage', example: 'Der Atlantische Ozean.' },
    { article: 'die', german: 'Insel', english: 'Island', french: 'Île', plural: 'Inseln', level: LanguageLevel.A1, subTheme: 'Plage', example: 'Eine tropische Insel.' },
    { article: 'die', german: 'Küste', english: 'Coast', french: 'Côte', plural: 'Küsten', level: LanguageLevel.A2, subTheme: 'Plage', example: 'Entlang der Küste fahren.' },
    { article: 'die', german: 'Welle', english: 'Wave', french: 'Vague', plural: 'Wellen', level: LanguageLevel.A2, subTheme: 'Plage', example: 'Die Wellen sind heute hoch.' },
    { article: 'der', german: 'Sand', english: 'Sand', french: 'Sable', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Plage', example: 'Feiner Sand am Strand.' },
    { article: 'die', german: 'Sonnenbrille', english: 'Sunglasses', french: 'Lunettes de soleil', plural: 'Sonnenbrillen', level: LanguageLevel.A1, subTheme: 'Plage', example: 'Ich brauche meine Sonnenbrille.' },
    { article: 'die', german: 'Sonnencreme', english: 'Sunscreen', french: 'Crème solaire', plural: 'Sonnencremes', level: LanguageLevel.A1, subTheme: 'Plage', example: 'Vergiss die Sonnencreme nicht!' },
    { article: 'das', german: 'Handtuch', english: 'Towel', french: 'Serviette', plural: 'Handtücher', level: LanguageLevel.A1, subTheme: 'Plage', example: 'Ein Handtuch für den Strand.' },
    { article: 'der', german: 'Sonnenschirm', english: 'Parasol', french: 'Parasol', plural: 'Sonnenschirme', level: LanguageLevel.A2, subTheme: 'Plage', example: 'Unter dem Sonnenschirm liegen.' },
    { article: 'die', german: 'Badehose', english: 'Swimming trunks', french: 'Maillot de bain (homme)', plural: 'Badehosen', level: LanguageLevel.A1, subTheme: 'Plage', example: 'Hast du deine Badehose dabei?' },
    { article: 'der', german: 'Bikini', english: 'Bikini', french: 'Bikini', plural: 'Bikinis', level: LanguageLevel.A1, subTheme: 'Plage', example: 'Sie trägt einen roten Bikini.' },
    { article: 'der', german: 'Badeanzug', english: 'Swimsuit', french: 'Maillot de bain', plural: 'Badeanzüge', level: LanguageLevel.A1, subTheme: 'Plage', example: 'Ein Badeanzug zum Schwimmen.' },

    // === MONTAGNE ===
    { article: 'der', german: 'Berg', english: 'Mountain', french: 'Montagne', plural: 'Berge', level: LanguageLevel.A1, subTheme: 'Montagne', example: 'Die Alpen sind hohe Berge.' },
    { article: 'das', german: 'Gebirge', english: 'Mountain range', french: 'Massif montagneux', plural: 'Gebirge', level: LanguageLevel.A2, subTheme: 'Montagne', example: 'Das Gebirge ist beeindruckend.' },
    { article: 'der', german: 'Gipfel', english: 'Summit / Peak', french: 'Sommet', plural: 'Gipfel', level: LanguageLevel.A2, subTheme: 'Montagne', example: 'Der Gipfel ist 3000 Meter hoch.' },
    { article: 'das', german: 'Tal', english: 'Valley', french: 'Vallée', plural: 'Täler', level: LanguageLevel.A2, subTheme: 'Montagne', example: 'Ein grünes Tal.' },
    { article: 'die', german: 'Wanderung', english: 'Hike', french: 'Randonnée', plural: 'Wanderungen', level: LanguageLevel.A2, subTheme: 'Montagne', example: 'Eine Wanderung in den Bergen.' },
    { article: 'die', german: 'Seilbahn', english: 'Cable car', french: 'Téléphérique', plural: 'Seilbahnen', level: LanguageLevel.A2, subTheme: 'Montagne', example: 'Mit der Seilbahn nach oben.' },
    { article: 'der', german: 'Skilift', english: 'Ski lift', french: 'Remontée mécanique', plural: 'Skilifte', level: LanguageLevel.A2, subTheme: 'Montagne', example: 'Der Skilift bringt uns hoch.' },
    { article: 'die', german: 'Skier', english: 'Skis', french: 'Skis', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Montagne', example: 'Ich brauche neue Skier.' },
    { article: 'die', german: 'Piste', english: 'Slope / Piste', french: 'Piste', plural: 'Pisten', level: LanguageLevel.A2, subTheme: 'Montagne', example: 'Die Piste ist steil.' },
    { article: 'der', german: 'Schnee', english: 'Snow', french: 'Neige', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Montagne', example: 'Es liegt viel Schnee.' },

    // === VERBES ===
    { article: '', german: 'reisen', english: 'to travel', french: 'voyager', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Verbes', example: 'Ich reise gern.' },
    { article: '', german: 'fliegen', english: 'to fly', french: 'voler / prendre l\'avion', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Verbes', example: 'Wir fliegen nach Spanien.' },
    { article: '', german: 'fahren', english: 'to drive / to go', french: 'conduire / se rendre', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Verbes', example: 'Wir fahren mit dem Auto.' },
    { article: '', german: 'ankommen', english: 'to arrive', french: 'arriver', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Verbes', example: 'Wann kommst du an?' },
    { article: '', german: 'abfahren', english: 'to depart', french: 'partir', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Verbes', example: 'Der Zug fährt um 10 Uhr ab.' },
    { article: '', german: 'umsteigen', english: 'to transfer', french: 'changer (de train)', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Verbes', example: 'In München umsteigen.' },
    { article: '', german: 'landen', english: 'to land', french: 'atterrir', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Verbes', example: 'Das Flugzeug landet bald.' },
    { article: '', german: 'starten', english: 'to take off', french: 'décoller', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Verbes', example: 'Das Flugzeug startet pünktlich.' },
    { article: '', german: 'buchen', english: 'to book', french: 'réserver', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Verbes', example: 'Ein Hotel buchen.' },
    { article: '', german: 'reservieren', english: 'to reserve', french: 'réserver', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Verbes', example: 'Einen Tisch reservieren.' },
    { article: '', german: 'packen', english: 'to pack', french: 'faire ses valises', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Verbes', example: 'Ich muss noch packen.' },
    { article: '', german: 'auspacken', english: 'to unpack', french: 'défaire ses valises', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Verbes', example: 'Im Hotel auspacken.' },
    { article: '', german: 'übernachten', english: 'to stay overnight', french: 'passer la nuit', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Verbes', example: 'Wir übernachten im Hotel.' },
    { article: '', german: 'besichtigen', english: 'to visit', french: 'visiter', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Verbes', example: 'Die Altstadt besichtigen.' },
    { article: '', german: 'fotografieren', english: 'to take photos', french: 'prendre des photos', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Verbes', example: 'Darf man hier fotografieren?' },
    { article: '', german: 'entspannen', english: 'to relax', french: 'se détendre', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Verbes', example: 'Im Urlaub entspannen.' },
    { article: '', german: 'schwimmen', english: 'to swim', french: 'nager', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Verbes', example: 'Im Meer schwimmen.' },
    { article: '', german: 'wandern', english: 'to hike', french: 'randonner', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Verbes', example: 'In den Bergen wandern.' },
    { article: '', german: 'Ski fahren', english: 'to ski', french: 'faire du ski', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Verbes', example: 'Im Winter Ski fahren.' },

    // === PROBLÈMES / SITUATIONS ===
    { article: 'die', german: 'Verspätung', english: 'Delay', french: 'Retard', plural: 'Verspätungen', level: LanguageLevel.A1, subTheme: 'Problèmes', example: 'Der Zug hat Verspätung.' },
    { article: 'die', german: 'Panne', english: 'Breakdown', french: 'Panne', plural: 'Pannen', level: LanguageLevel.A2, subTheme: 'Problèmes', example: 'Wir haben eine Panne.' },
    { article: 'der', german: 'Stau', english: 'Traffic jam', french: 'Embouteillage', plural: 'Staus', level: LanguageLevel.A2, subTheme: 'Problèmes', example: 'Auf der Autobahn ist Stau.' },
    { article: 'die', german: 'Annullierung', english: 'Cancellation', french: 'Annulation', plural: 'Annullierungen', level: LanguageLevel.B1, subTheme: 'Problèmes', example: 'Die Annullierung des Fluges.' },
    { article: '', german: 'verloren', english: 'lost', french: 'perdu', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Problèmes', example: 'Ich habe meinen Koffer verloren.' },
    { article: '', german: 'verpasst', english: 'missed', french: 'manqué / raté', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Problèmes', example: 'Ich habe den Zug verpasst.' }
  ],
  phrases: [
    // À l'aéroport
    { german: 'Wo ist der Check-in?', english: 'Where is the check-in?', french: 'Où est l\'enregistrement ?', italian: 'Dov\'è il check-in?', context: 'Aéroport' },
    { german: 'Wo ist das Gate B12?', english: 'Where is gate B12?', french: 'Où est la porte B12 ?', italian: 'Dov\'è il gate B12?', context: 'Aéroport' },
    { german: 'Haben Sie nur Handgepäck?', english: 'Do you only have carry-on luggage?', french: 'N\'avez-vous qu\'un bagage à main ?', italian: 'Ha solo il bagaglio a mano?', context: 'Aéroport' },
    { german: 'Der Flug hat Verspätung.', english: 'The flight is delayed.', french: 'Le vol a du retard.', italian: 'Il volo è in ritardo.', context: 'Aéroport' },
    { german: 'Wann landet das Flugzeug?', english: 'When does the plane land?', french: 'Quand l\'avion atterrit-il ?', italian: 'Quando atterra l\'aereo?', context: 'Aéroport' },

    // À la gare
    { german: 'Von welchem Gleis fährt der Zug ab?', english: 'From which platform does the train depart?', french: 'De quel quai part le train ?', italian: 'Da quale binario parte il treno?', context: 'Gare' },
    { german: 'Muss ich umsteigen?', english: 'Do I have to change trains?', french: 'Dois-je changer de train ?', italian: 'Devo cambiare treno?', context: 'Gare' },
    { german: 'Der Zug nach Berlin, bitte.', english: 'The train to Berlin, please.', french: 'Le train pour Berlin, s\'il vous plaît.', italian: 'Il treno per Berlino, per favore.', context: 'Gare' },
    { german: 'Einmal hin und zurück.', english: 'One return ticket.', french: 'Un aller-retour.', italian: 'Un biglietto di andata e ritorno.', context: 'Gare' },
    { german: 'Gibt es eine Verbindung nach...?', english: 'Is there a connection to...?', french: 'Y a-t-il une correspondance pour... ?', italian: 'C\'è un collegamento per...?', context: 'Gare' },

    // Billets
    { german: 'Wo kann ich ein Ticket kaufen?', english: 'Where can I buy a ticket?', french: 'Où puis-je acheter un billet ?', italian: 'Dove posso comprare un biglietto?', context: 'Transport' },
    { german: 'Was kostet eine Fahrkarte nach...?', english: 'How much is a ticket to...?', french: 'Combien coûte un billet pour... ?', italian: 'Quanto costa un biglietto per...?', context: 'Transport' },
    { german: 'Gibt es eine Ermäßigung für Studenten?', english: 'Is there a student discount?', french: 'Y a-t-il un tarif réduit pour les étudiants ?', italian: 'C\'è uno sconto per studenti?', context: 'Transport' },

    // Hôtel
    { german: 'Haben Sie ein Zimmer frei?', english: 'Do you have a room available?', french: 'Avez-vous une chambre libre ?', italian: 'Avete una camera libera?', context: 'Hôtel' },
    { german: 'Ein Doppelzimmer mit Frühstück, bitte.', english: 'A double room with breakfast, please.', french: 'Une chambre double avec petit-déjeuner, s\'il vous plaît.', italian: 'Una camera doppia con colazione, per favore.', context: 'Hôtel' },
    { german: 'Wie viel kostet das Zimmer pro Nacht?', english: 'How much does the room cost per night?', french: 'Combien coûte la chambre par nuit ?', italian: 'Quanto costa la camera a notte?', context: 'Hôtel' },
    { german: 'Ist das Frühstück inbegriffen?', english: 'Is breakfast included?', french: 'Le petit-déjeuner est-il compris ?', italian: 'La colazione è inclusa?', context: 'Hôtel' },
    { german: 'Ich möchte auschecken.', english: 'I would like to check out.', french: 'Je voudrais régler la note.', italian: 'Vorrei fare il check-out.', context: 'Hôtel' },
    { german: 'Kann ich den Schlüssel haben?', english: 'Can I have the key?', french: 'Puis-je avoir la clé ?', italian: 'Posso avere la chiave?', context: 'Hôtel' },
    { german: 'Gibt es WLAN im Hotel?', english: 'Is there Wi-Fi in the hotel?', french: 'Y a-t-il du wifi à l\'hôtel ?', italian: 'C\'è il wi-fi in hotel?', context: 'Hôtel' },

    // Orientation
    { german: 'Wie komme ich zum Bahnhof?', english: 'How do I get to the train station?', french: 'Comment aller à la gare ?', italian: 'Come arrivo alla stazione?', context: 'Orientation' },
    { german: 'Wo ist die nächste U-Bahn-Station?', english: 'Where is the nearest subway station?', french: 'Où est la station de métro la plus proche ?', italian: 'Dov\'è la stazione della metro più vicina?', context: 'Orientation' },
    { german: 'Ist es weit von hier?', english: 'Is it far from here?', french: 'Est-ce loin d\'ici ?', italian: 'È lontano da qui?', context: 'Orientation' },
    { german: 'Können Sie mir den Weg zeigen?', english: 'Can you show me the way?', french: 'Pouvez-vous m\'indiquer le chemin ?', italian: 'Può indicarmi la strada?', context: 'Orientation' },

    // Tourisme
    { german: 'Wann öffnet das Museum?', english: 'When does the museum open?', french: 'À quelle heure ouvre le musée ?', italian: 'Quando apre il museo?', context: 'Tourisme' },
    { german: 'Was kostet der Eintritt?', english: 'How much is the entrance fee?', french: 'Combien coûte l\'entrée ?', italian: 'Quanto costa l\'ingresso?', context: 'Tourisme' },
    { german: 'Gibt es eine Führung auf Französisch?', english: 'Is there a guided tour in French?', french: 'Y a-t-il une visite guidée en français ?', italian: 'C\'è una visita guidata in francese?', context: 'Tourisme' },
    { german: 'Darf man hier fotografieren?', english: 'Are photos allowed here?', french: 'Peut-on prendre des photos ici ?', italian: 'Si possono fare foto qui?', context: 'Tourisme' },

    // Problèmes
    { german: 'Ich habe meinen Koffer verloren.', english: 'I have lost my suitcase.', french: 'J\'ai perdu ma valise.', italian: 'Ho perso la valigia.', context: 'Problèmes' },
    { german: 'Mein Gepäck ist nicht angekommen.', english: 'My luggage has not arrived.', french: 'Mes bagages ne sont pas arrivés.', italian: 'Il mio bagaglio non è arrivato.', context: 'Problèmes' },
    { german: 'Ich habe meinen Flug verpasst.', english: 'I missed my flight.', french: 'J\'ai raté mon vol.', italian: 'Ho perso il volo.', context: 'Problèmes' },
    { german: 'Der Zug hatte eine Stunde Verspätung.', english: 'The train was an hour late.', french: 'Le train avait une heure de retard.', italian: 'Il treno aveva un\'ora di ritardo.', context: 'Problèmes' }
  ]
};
