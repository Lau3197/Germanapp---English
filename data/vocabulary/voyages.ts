
import { ThemeContent, LanguageLevel } from '../../types';

export const voyagesContent: ThemeContent = {
  words: [
    // === VOYAGE GÉNÉRAL ===
    { article: 'die', german: 'Reise', english: 'Trip / Journey', plural: 'Reisen', level: LanguageLevel.A1, subTheme: 'Général', example: 'Gute Reise!' },
    { article: 'der', german: 'Urlaub', english: 'Vacation / Holiday', plural: 'Urlaube', level: LanguageLevel.A1, subTheme: 'Général', example: 'Ich fahre bald in den Urlaub.' },
    { article: 'die', german: 'Ferien', english: 'Vacation (school)', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Général', example: 'In den Ferien fahren wir ans Meer.' },
    { article: 'der', german: 'Tourist', english: 'Tourist (m)', plural: 'Touristen', level: LanguageLevel.A1, subTheme: 'Général', example: 'Der Tourist macht viele Fotos.' },
    { article: 'die', german: 'Touristin', english: 'Tourist (f)', plural: 'Touristinnen', level: LanguageLevel.A1, subTheme: 'Général', example: 'Die Touristin fragt nach dem Weg.' },
    { article: 'der', german: 'Reisende', english: 'Traveler', plural: 'Reisenden', level: LanguageLevel.A2, subTheme: 'Général', example: 'Die Reisenden warten am Gleis.' },
    { article: 'das', german: 'Reiseziel', english: 'Destination', plural: 'Reiseziele', level: LanguageLevel.A2, subTheme: 'Général', example: 'Unser Reiseziel ist Italien.' },
    { article: 'die', german: 'Rundreise', english: 'Round trip / Circuit', plural: 'Rundreisen', level: LanguageLevel.B1, subTheme: 'Général', example: 'Wir machen eine Rundreise durch Europa.' },
    { article: 'die', german: 'Pauschalreise', english: 'Package tour', plural: 'Pauschalreisen', level: LanguageLevel.B1, subTheme: 'Général', example: 'Eine Pauschalreise nach Ägypten.' },
    { article: 'das', german: 'Abenteuer', english: 'Adventure', plural: 'Abenteuer', level: LanguageLevel.A2, subTheme: 'Général', example: 'Die Reise war ein großes Abenteuer.' },
    { article: 'die', german: 'Weltreise', english: 'World trip', plural: 'Weltreisen', level: LanguageLevel.B1, subTheme: 'Général', example: 'Er träumt von einer Weltreise.' },
    { article: 'das', german: 'Ausland', english: 'Abroad / Foreign country', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Général', example: 'Im Ausland studieren.' },
    { article: 'das', german: 'Inland', english: 'Domestic / Inland', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Général', example: 'Eine Reise im Inland.' },

    // === TRANSPORTS ===
    { article: 'das', german: 'Flugzeug', english: 'Airplane', plural: 'Flugzeuge', level: LanguageLevel.A1, subTheme: 'Transports', example: 'Das Flugzeug landet pünktlich.' },
    { article: 'der', german: 'Flug', english: 'Flight', plural: 'Flüge', level: LanguageLevel.A1, subTheme: 'Transports', example: 'Der Flug dauert zwei Stunden.' },
    { article: 'der', german: 'Flughafen', english: 'Airport', plural: 'Flughäfen', level: LanguageLevel.A1, subTheme: 'Transports', example: 'Der Flughafen ist weit weg.' },
    { article: 'die', german: 'Landung', english: 'Landing', plural: 'Landungen', level: LanguageLevel.A2, subTheme: 'Transports', example: 'Die Landung war sanft.' },
    { article: 'der', german: 'Abflug', english: 'Departure (flight)', plural: 'Abflüge', level: LanguageLevel.A2, subTheme: 'Transports', example: 'Der Abflug ist um 14 Uhr.' },
    { article: 'die', german: 'Ankunft', english: 'Arrival', plural: 'Ankünfte', level: LanguageLevel.A2, subTheme: 'Transports', example: 'Die Ankunft ist pünktlich.' },
    { article: 'das', german: 'Gate', english: 'Gate', plural: 'Gates', level: LanguageLevel.A2, subTheme: 'Transports', example: 'Das Boarding ist am Gate B12.' },
    { article: 'die', german: 'Bordkarte', english: 'Boarding pass', plural: 'Bordkarten', level: LanguageLevel.A2, subTheme: 'Transports', example: 'Zeigen Sie bitte Ihre Bordkarte.' },
    { article: 'der', german: 'Zug', english: 'Train', plural: 'Züge', level: LanguageLevel.A1, subTheme: 'Transports', example: 'Der Zug hat zehn Minuten Verspätung.' },
    { article: 'der', german: 'Bahnhof', english: 'Train station', plural: 'Bahnhöfe', level: LanguageLevel.A1, subTheme: 'Transports', example: 'Treffen wir uns am Bahnhof?' },
    { article: 'der', german: 'Hauptbahnhof', english: 'Central station', plural: 'Hauptbahnhöfe', level: LanguageLevel.A1, subTheme: 'Transports', example: 'Der Hauptbahnhof ist im Zentrum.' },
    { article: 'das', german: 'Gleis', english: 'Platform / Track', plural: 'Gleise', level: LanguageLevel.A1, subTheme: 'Transports', example: 'Der Zug fährt von Gleis 5 ab.' },
    { article: 'die', german: 'S-Bahn', english: 'Suburban train', plural: 'S-Bahnen', level: LanguageLevel.A1, subTheme: 'Transports', example: 'Ich nehme die S-Bahn zur Arbeit.' },
    { article: 'die', german: 'U-Bahn', english: 'Subway / Metro', plural: 'U-Bahnen', level: LanguageLevel.A1, subTheme: 'Transports', example: 'Die U-Bahn fährt alle 5 Minuten.' },
    { article: 'die', german: 'Straßenbahn', english: 'Tram', plural: 'Straßenbahnen', level: LanguageLevel.A1, subTheme: 'Transports', example: 'Die Straßenbahn hält hier.' },
    { article: 'der', german: 'Bus', english: 'Bus', plural: 'Busse', level: LanguageLevel.A1, subTheme: 'Transports', example: 'Der Bus kommt in 10 Minuten.' },
    { article: 'die', german: 'Haltestelle', english: 'Stop', plural: 'Haltestellen', level: LanguageLevel.A1, subTheme: 'Transports', example: 'Die Haltestelle ist dort drüben.' },
    { article: 'das', german: 'Auto', english: 'Car', plural: 'Autos', level: LanguageLevel.A1, subTheme: 'Transports', example: 'Ich fahre mit dem Auto zur Arbeit.' },
    { article: 'der', german: 'Mietwagen', english: 'Rental car', plural: 'Mietwagen', level: LanguageLevel.A2, subTheme: 'Transports', example: 'Wir haben einen Mietwagen gebucht.' },
    { article: 'das', german: 'Taxi', english: 'Taxi', plural: 'Taxis', level: LanguageLevel.A1, subTheme: 'Transports', example: 'Ich nehme ein Taxi zum Hotel.' },
    { article: 'das', german: 'Fahrrad', english: 'Bicycle', plural: 'Fahrräder', level: LanguageLevel.A1, subTheme: 'Transports', example: 'Ich fahre gern Fahrrad.' },
    { article: 'das', german: 'Schiff', english: 'Ship', plural: 'Schiffe', level: LanguageLevel.A1, subTheme: 'Transports', example: 'Das Schiff fährt nach Schweden.' },
    { article: 'die', german: 'Fähre', english: 'Ferry', plural: 'Fähren', level: LanguageLevel.A2, subTheme: 'Transports', example: 'Die Fähre nach England.' },
    { article: 'der', german: 'Hafen', english: 'Port / Harbor', plural: 'Häfen', level: LanguageLevel.A2, subTheme: 'Transports', example: 'Das Schiff liegt im Hafen.' },
    { article: 'die', german: 'Kreuzfahrt', english: 'Cruise', plural: 'Kreuzfahrten', level: LanguageLevel.B1, subTheme: 'Transports', example: 'Eine Kreuzfahrt durch die Karibik.' },

    // === BILLETS / RÉSERVATIONS ===
    { article: 'die', german: 'Fahrkarte', english: 'Ticket', plural: 'Fahrkarten', level: LanguageLevel.A1, subTheme: 'Billets', example: 'Haben Sie eine Fahrkarte?' },
    { article: 'das', german: 'Ticket', english: 'Ticket', plural: 'Tickets', level: LanguageLevel.A1, subTheme: 'Billets', example: 'Ich habe das Ticket online gekauft.' },
    { article: 'die', german: 'Einzelfahrkarte', english: 'Single ticket', plural: 'Einzelfahrkarten', level: LanguageLevel.A2, subTheme: 'Billets', example: 'Eine Einzelfahrkarte nach München.' },
    { article: 'die', german: 'Rückfahrkarte', english: 'Return ticket', plural: 'Rückfahrkarten', level: LanguageLevel.A2, subTheme: 'Billets', example: 'Eine Rückfahrkarte, bitte.' },
    { article: 'die', german: 'Monatskarte', english: 'Monthly pass', plural: 'Monatskarten', level: LanguageLevel.A2, subTheme: 'Billets', example: 'Ich habe eine Monatskarte.' },
    { article: 'die', german: 'Reservierung', english: 'Reservation', plural: 'Reservierungen', level: LanguageLevel.A2, subTheme: 'Billets', example: 'Haben Sie eine Reservierung?' },
    { article: 'die', german: 'Buchung', english: 'Booking', plural: 'Buchungen', level: LanguageLevel.A2, subTheme: 'Billets', example: 'Die Buchung ist bestätigt.' },
    { article: 'der', german: 'Preis', english: 'Price', plural: 'Preise', level: LanguageLevel.A1, subTheme: 'Billets', example: 'Was kostet das Ticket?' },
    { article: 'die', german: 'Ermäßigung', english: 'Discount / Reduction', plural: 'Ermäßigungen', level: LanguageLevel.A2, subTheme: 'Billets', example: 'Gibt es eine Ermäßigung für Studenten?' },
    { article: 'die', german: 'erste Klasse', english: 'First class', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Billets', example: 'Ein Ticket erster Klasse.' },
    { article: 'die', german: 'zweite Klasse', english: 'Second class', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Billets', example: 'Zweite Klasse ist günstiger.' },

    // === BAGAGES ===
    { article: 'das', german: 'Gepäck', english: 'Luggage', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Bagages', example: 'Wo kann ich mein Gepäck abgeben?' },
    { article: 'der', german: 'Koffer', english: 'Suitcase', plural: 'Koffer', level: LanguageLevel.A1, subTheme: 'Bagages', example: 'Hast du den Koffer schon gepackt?' },
    { article: 'die', german: 'Tasche', english: 'Bag', plural: 'Taschen', level: LanguageLevel.A1, subTheme: 'Bagages', example: 'Meine Tasche ist schwer.' },
    { article: 'der', german: 'Rucksack', english: 'Backpack', plural: 'Rucksäcke', level: LanguageLevel.A1, subTheme: 'Bagages', example: 'Ich reise nur mit dem Rucksack.' },
    { article: 'das', german: 'Handgepäck', english: 'Carry-on luggage', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Bagages', example: 'Das Handgepäck darf 8 kg wiegen.' },
    { article: 'die', german: 'Gepäckaufgabe', english: 'Baggage drop-off', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Bagages', example: 'Die Gepäckaufgabe ist am Schalter 3.' },
    { article: 'die', german: 'Gepäckausgabe', english: 'Baggage claim', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Bagages', example: 'Die Gepäckausgabe ist in der Halle B.' },
    { article: 'der', german: 'Gepäckwagen', english: 'Luggage trolley', plural: 'Gepäckwagen', level: LanguageLevel.A2, subTheme: 'Bagages', example: 'Ich brauche einen Gepäckwagen.' },

    // === HÉBERGEMENT ===
    { article: 'das', german: 'Hotel', english: 'Hotel', plural: 'Hotels', level: LanguageLevel.A1, subTheme: 'Hébergement', example: 'Ein Zimmer im Hotel reservieren.' },
    { article: 'die', german: 'Pension', english: 'Guesthouse / Pension', plural: 'Pensionen', level: LanguageLevel.A2, subTheme: 'Hébergement', example: 'Wir übernachten in einer Pension.' },
    { article: 'die', german: 'Jugendherberge', english: 'Youth hostel', plural: 'Jugendherbergen', level: LanguageLevel.A2, subTheme: 'Hébergement', example: 'Die Jugendherberge ist günstig.' },
    { article: 'die', german: 'Ferienwohnung', english: 'Vacation apartment', plural: 'Ferienwohnungen', level: LanguageLevel.A2, subTheme: 'Hébergement', example: 'Wir mieten eine Ferienwohnung.' },
    { article: 'das', german: 'Ferienhaus', english: 'Vacation home', plural: 'Ferienhäuser', level: LanguageLevel.A2, subTheme: 'Hébergement', example: 'Ein Ferienhaus am Meer.' },
    { article: 'der', german: 'Campingplatz', english: 'Campsite', plural: 'Campingplätze', level: LanguageLevel.A2, subTheme: 'Hébergement', example: 'Der Campingplatz ist am See.' },
    { article: 'das', german: 'Zelt', english: 'Tent', plural: 'Zelte', level: LanguageLevel.A1, subTheme: 'Hébergement', example: 'Wir schlafen im Zelt.' },
    { article: 'die', german: 'Unterkunft', english: 'Accommodation', plural: 'Unterkünfte', level: LanguageLevel.B1, subTheme: 'Hébergement', example: 'Wir suchen eine günstige Unterkunft.' },
    { article: 'das', german: 'Zimmer', english: 'Room', plural: 'Zimmer', level: LanguageLevel.A1, subTheme: 'Hébergement', example: 'Ein Zimmer für zwei Nächte.' },
    { article: 'das', german: 'Einzelzimmer', english: 'Single room', plural: 'Einzelzimmer', level: LanguageLevel.A1, subTheme: 'Hébergement', example: 'Ein Einzelzimmer, bitte.' },
    { article: 'das', german: 'Doppelzimmer', english: 'Double room', plural: 'Doppelzimmer', level: LanguageLevel.A1, subTheme: 'Hébergement', example: 'Ein Doppelzimmer mit Bad.' },
    { article: 'die', german: 'Rezeption', english: 'Reception', plural: 'Rezeptionen', level: LanguageLevel.A1, subTheme: 'Hébergement', example: 'An der Rezeption einchecken.' },
    { article: 'der', german: 'Schlüssel', english: 'Key', plural: 'Schlüssel', level: LanguageLevel.A1, subTheme: 'Hébergement', example: 'Kann ich den Schlüssel haben?' },
    { article: 'das', german: 'Frühstück', english: 'Breakfast', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Hébergement', example: 'Das Frühstück ist inbegriffen.' },
    { article: 'die', german: 'Halbpension', english: 'Half board', plural: 'n/a', level: LanguageLevel.B1, subTheme: 'Hébergement', example: 'Wir buchen mit Halbpension.' },
    { article: 'die', german: 'Vollpension', english: 'Full board', plural: 'n/a', level: LanguageLevel.B1, subTheme: 'Hébergement', example: 'Vollpension ist teurer.' },
    { article: 'der', german: 'Check-in', english: 'Check-in', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Hébergement', example: 'Der Check-in ist ab 14 Uhr.' },
    { article: 'der', german: 'Check-out', english: 'Check-out', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Hébergement', example: 'Der Check-out ist bis 11 Uhr.' },

    // === DOCUMENTS ===
    { article: 'der', german: 'Reisepass', english: 'Passport', plural: 'Reisepässe', level: LanguageLevel.A1, subTheme: 'Documents', example: 'Ihren Reisepass, bitte.' },
    { article: 'der', german: 'Personalausweis', english: 'ID card', plural: 'Personalausweise', level: LanguageLevel.A1, subTheme: 'Documents', example: 'Der Personalausweis reicht in der EU.' },
    { article: 'das', german: 'Visum', english: 'Visa', plural: 'Visa', level: LanguageLevel.A2, subTheme: 'Documents', example: 'Brauche ich ein Visum?' },
    { article: 'der', german: 'Führerschein', english: 'Driver\'s license', plural: 'Führerscheine', level: LanguageLevel.A2, subTheme: 'Documents', example: 'Zeigen Sie Ihren Führerschein.' },
    { article: 'die', german: 'Reiseversicherung', english: 'Travel insurance', plural: 'Reiseversicherungen', level: LanguageLevel.B1, subTheme: 'Documents', example: 'Eine Reiseversicherung ist wichtig.' },

    // === TOURISME ===
    { article: 'die', german: 'Sehenswürdigkeit', english: 'Sight / Attraction', plural: 'Sehenswürdigkeiten', level: LanguageLevel.A2, subTheme: 'Tourisme', example: 'Berlin hat viele Sehenswürdigkeiten.' },
    { article: 'das', german: 'Museum', english: 'Museum', plural: 'Museen', level: LanguageLevel.A1, subTheme: 'Tourisme', example: 'Das Museum ist montags geschlossen.' },
    { article: 'die', german: 'Kirche', english: 'Church', plural: 'Kirchen', level: LanguageLevel.A1, subTheme: 'Tourisme', example: 'Eine alte Kirche besichtigen.' },
    { article: 'das', german: 'Schloss', english: 'Castle / Palace', plural: 'Schlösser', level: LanguageLevel.A2, subTheme: 'Tourisme', example: 'Das Schloss Neuschwanstein.' },
    { article: 'die', german: 'Burg', english: 'Fortress / Castle', plural: 'Burgen', level: LanguageLevel.A2, subTheme: 'Tourisme', example: 'Die Burg steht auf einem Berg.' },
    { article: 'der', german: 'Dom', english: 'Cathedral', plural: 'Dome', level: LanguageLevel.A2, subTheme: 'Tourisme', example: 'Der Kölner Dom ist berühmt.' },
    { article: 'das', german: 'Denkmal', english: 'Monument', plural: 'Denkmäler', level: LanguageLevel.A2, subTheme: 'Tourisme', example: 'Ein historisches Denkmal.' },
    { article: 'die', german: 'Stadtführung', english: 'Guided city tour', plural: 'Stadtführungen', level: LanguageLevel.A2, subTheme: 'Tourisme', example: 'Wir machen eine Stadtführung.' },
    { article: 'der', german: 'Reiseführer', english: 'Travel guide', plural: 'Reiseführer', level: LanguageLevel.A2, subTheme: 'Tourisme', example: 'Der Reiseführer kennt die Stadt gut.' },
    { article: 'die', german: 'Karte', english: 'Map', plural: 'Karten', level: LanguageLevel.A1, subTheme: 'Tourisme', example: 'Haben Sie eine Karte von der Stadt?' },
    { article: 'der', german: 'Stadtplan', english: 'City map', plural: 'Stadtpläne', level: LanguageLevel.A1, subTheme: 'Tourisme', example: 'Ich brauche einen Stadtplan.' },
    { article: 'das', german: 'Souvenir', english: 'Souvenir', plural: 'Souvenirs', level: LanguageLevel.A1, subTheme: 'Tourisme', example: 'Ein Souvenir kaufen.' },
    { article: 'die', german: 'Postkarte', english: 'Postcard', plural: 'Postkarten', level: LanguageLevel.A1, subTheme: 'Tourisme', example: 'Ich schreibe eine Postkarte.' },

    // === PLAGE / MER ===
    { article: 'der', german: 'Strand', english: 'Beach', plural: 'Strände', level: LanguageLevel.A1, subTheme: 'Plage', example: 'Wir gehen an den Strand.' },
    { article: 'das', german: 'Meer', english: 'Sea', plural: 'Meere', level: LanguageLevel.A1, subTheme: 'Plage', example: 'Im Meer schwimmen.' },
    { article: 'der', german: 'Ozean', english: 'Ocean', plural: 'Ozeane', level: LanguageLevel.A2, subTheme: 'Plage', example: 'Der Atlantische Ozean.' },
    { article: 'die', german: 'Insel', english: 'Island', plural: 'Inseln', level: LanguageLevel.A1, subTheme: 'Plage', example: 'Eine tropische Insel.' },
    { article: 'die', german: 'Küste', english: 'Coast', plural: 'Küsten', level: LanguageLevel.A2, subTheme: 'Plage', example: 'Entlang der Küste fahren.' },
    { article: 'die', german: 'Welle', english: 'Wave', plural: 'Wellen', level: LanguageLevel.A2, subTheme: 'Plage', example: 'Die Wellen sind heute hoch.' },
    { article: 'der', german: 'Sand', english: 'Sand', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Plage', example: 'Feiner Sand am Strand.' },
    { article: 'die', german: 'Sonnenbrille', english: 'Sunglasses', plural: 'Sonnenbrillen', level: LanguageLevel.A1, subTheme: 'Plage', example: 'Ich brauche meine Sonnenbrille.' },
    { article: 'die', german: 'Sonnencreme', english: 'Sunscreen', plural: 'Sonnencremes', level: LanguageLevel.A1, subTheme: 'Plage', example: 'Vergiss die Sonnencreme nicht!' },
    { article: 'das', german: 'Handtuch', english: 'Towel', plural: 'Handtücher', level: LanguageLevel.A1, subTheme: 'Plage', example: 'Ein Handtuch für den Strand.' },
    { article: 'der', german: 'Sonnenschirm', english: 'Parasol', plural: 'Sonnenschirme', level: LanguageLevel.A2, subTheme: 'Plage', example: 'Unter dem Sonnenschirm liegen.' },
    { article: 'die', german: 'Badehose', english: 'Swimming trunks', plural: 'Badehosen', level: LanguageLevel.A1, subTheme: 'Plage', example: 'Hast du deine Badehose dabei?' },
    { article: 'der', german: 'Bikini', english: 'Bikini', plural: 'Bikinis', level: LanguageLevel.A1, subTheme: 'Plage', example: 'Sie trägt einen roten Bikini.' },
    { article: 'der', german: 'Badeanzug', english: 'Swimsuit', plural: 'Badeanzüge', level: LanguageLevel.A1, subTheme: 'Plage', example: 'Ein Badeanzug zum Schwimmen.' },

    // === MONTAGNE ===
    { article: 'der', german: 'Berg', english: 'Mountain', plural: 'Berge', level: LanguageLevel.A1, subTheme: 'Montagne', example: 'Die Alpen sind hohe Berge.' },
    { article: 'das', german: 'Gebirge', english: 'Mountain range', plural: 'Gebirge', level: LanguageLevel.A2, subTheme: 'Montagne', example: 'Das Gebirge ist beeindruckend.' },
    { article: 'der', german: 'Gipfel', english: 'Summit / Peak', plural: 'Gipfel', level: LanguageLevel.A2, subTheme: 'Montagne', example: 'Der Gipfel ist 3000 Meter hoch.' },
    { article: 'das', german: 'Tal', english: 'Valley', plural: 'Täler', level: LanguageLevel.A2, subTheme: 'Montagne', example: 'Ein grünes Tal.' },
    { article: 'die', german: 'Wanderung', english: 'Hike', plural: 'Wanderungen', level: LanguageLevel.A2, subTheme: 'Montagne', example: 'Eine Wanderung in den Bergen.' },
    { article: 'die', german: 'Seilbahn', english: 'Cable car', plural: 'Seilbahnen', level: LanguageLevel.A2, subTheme: 'Montagne', example: 'Mit der Seilbahn nach oben.' },
    { article: 'der', german: 'Skilift', english: 'Ski lift', plural: 'Skilifte', level: LanguageLevel.A2, subTheme: 'Montagne', example: 'Der Skilift bringt uns hoch.' },
    { article: 'die', german: 'Skier', english: 'Skis', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Montagne', example: 'Ich brauche neue Skier.' },
    { article: 'die', german: 'Piste', english: 'Slope / Piste', plural: 'Pisten', level: LanguageLevel.A2, subTheme: 'Montagne', example: 'Die Piste ist steil.' },
    { article: 'der', german: 'Schnee', english: 'Snow', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Montagne', example: 'Es liegt viel Schnee.' },

    // === VERBES ===
    { article: '', german: 'reisen', english: 'to travel', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Verbes', example: 'Ich reise gern.' },
    { article: '', german: 'fliegen', english: 'to fly', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Verbes', example: 'Wir fliegen nach Spanien.' },
    { article: '', german: 'fahren', english: 'to drive / to go', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Verbes', example: 'Wir fahren mit dem Auto.' },
    { article: '', german: 'ankommen', english: 'to arrive', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Verbes', example: 'Wann kommst du an?' },
    { article: '', german: 'abfahren', english: 'to depart', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Verbes', example: 'Der Zug fährt um 10 Uhr ab.' },
    { article: '', german: 'umsteigen', english: 'to transfer', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Verbes', example: 'In München umsteigen.' },
    { article: '', german: 'landen', english: 'to land', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Verbes', example: 'Das Flugzeug landet bald.' },
    { article: '', german: 'starten', english: 'to take off', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Verbes', example: 'Das Flugzeug startet pünktlich.' },
    { article: '', german: 'buchen', english: 'to book', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Verbes', example: 'Ein Hotel buchen.' },
    { article: '', german: 'reservieren', english: 'to reserve', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Verbes', example: 'Einen Tisch reservieren.' },
    { article: '', german: 'packen', english: 'to pack', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Verbes', example: 'Ich muss noch packen.' },
    { article: '', german: 'auspacken', english: 'to unpack', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Verbes', example: 'Im Hotel auspacken.' },
    { article: '', german: 'übernachten', english: 'to stay overnight', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Verbes', example: 'Wir übernachten im Hotel.' },
    { article: '', german: 'besichtigen', english: 'to visit', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Verbes', example: 'Die Altstadt besichtigen.' },
    { article: '', german: 'fotografieren', english: 'to take photos', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Verbes', example: 'Darf man hier fotografieren?' },
    { article: '', german: 'entspannen', english: 'to relax', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Verbes', example: 'Im Urlaub entspannen.' },
    { article: '', german: 'schwimmen', english: 'to swim', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Verbes', example: 'Im Meer schwimmen.' },
    { article: '', german: 'wandern', english: 'to hike', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Verbes', example: 'In den Bergen wandern.' },
    { article: '', german: 'Ski fahren', english: 'to ski', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Verbes', example: 'Im Winter Ski fahren.' },

    // === PROBLÈMES / SITUATIONS ===
    { article: 'die', german: 'Verspätung', english: 'Delay', plural: 'Verspätungen', level: LanguageLevel.A1, subTheme: 'Problèmes', example: 'Der Zug hat Verspätung.' },
    { article: 'die', german: 'Panne', english: 'Breakdown', plural: 'Pannen', level: LanguageLevel.A2, subTheme: 'Problèmes', example: 'Wir haben eine Panne.' },
    { article: 'der', german: 'Stau', english: 'Traffic jam', plural: 'Staus', level: LanguageLevel.A2, subTheme: 'Problèmes', example: 'Auf der Autobahn ist Stau.' },
    { article: 'die', german: 'Annullierung', english: 'Cancellation', plural: 'Annullierungen', level: LanguageLevel.B1, subTheme: 'Problèmes', example: 'Die Annullierung des Fluges.' },
    { article: '', german: 'verloren', english: 'lost', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Problèmes', example: 'Ich habe meinen Koffer verloren.' },
    { article: '', german: 'verpasst', english: 'missed', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Problèmes', example: 'Ich habe den Zug verpasst.' }
  ],
  phrases: [
    // À l'aéroport
    { german: 'Wo ist der Check-in?', english: 'Where is the check-in?', context: 'Aéroport' },
    { german: 'Wo ist das Gate B12?', english: 'Where is gate B12?', context: 'Aéroport' },
    { german: 'Haben Sie nur Handgepäck?', english: 'Do you only have carry-on luggage?', context: 'Aéroport' },
    { german: 'Der Flug hat Verspätung.', english: 'The flight is delayed.', context: 'Aéroport' },
    { german: 'Wann landet das Flugzeug?', english: 'When does the plane land?', context: 'Aéroport' },

    // À la gare
    { german: 'Von welchem Gleis fährt der Zug ab?', english: 'From which platform does the train depart?', context: 'Gare' },
    { german: 'Muss ich umsteigen?', english: 'Do I have to change trains?', context: 'Gare' },
    { german: 'Der Zug nach Berlin, bitte.', english: 'The train to Berlin, please.', context: 'Gare' },
    { german: 'Einmal hin und zurück.', english: 'One return ticket.', context: 'Gare' },
    { german: 'Gibt es eine Verbindung nach...?', english: 'Is there a connection to...?', context: 'Gare' },

    // Billets
    { german: 'Wo kann ich ein Ticket kaufen?', english: 'Where can I buy a ticket?', context: 'Transport' },
    { german: 'Was kostet eine Fahrkarte nach...?', english: 'How much is a ticket to...?', context: 'Transport' },
    { german: 'Gibt es eine Ermäßigung für Studenten?', english: 'Is there a student discount?', context: 'Transport' },

    // Hôtel
    { german: 'Haben Sie ein Zimmer frei?', english: 'Do you have a room available?', context: 'Hôtel' },
    { german: 'Ein Doppelzimmer mit Frühstück, bitte.', english: 'A double room with breakfast, please.', context: 'Hôtel' },
    { german: 'Wie viel kostet das Zimmer pro Nacht?', english: 'How much does the room cost per night?', context: 'Hôtel' },
    { german: 'Ist das Frühstück inbegriffen?', english: 'Is breakfast included?', context: 'Hôtel' },
    { german: 'Ich möchte auschecken.', english: 'I would like to check out.', context: 'Hôtel' },
    { german: 'Kann ich den Schlüssel haben?', english: 'Can I have the key?', context: 'Hôtel' },
    { german: 'Gibt es WLAN im Hotel?', english: 'Is there Wi-Fi in the hotel?', context: 'Hôtel' },

    // Orientation
    { german: 'Wie komme ich zum Bahnhof?', english: 'How do I get to the train station?', context: 'Orientation' },
    { german: 'Wo ist die nächste U-Bahn-Station?', english: 'Where is the nearest subway station?', context: 'Orientation' },
    { german: 'Ist es weit von hier?', english: 'Is it far from here?', context: 'Orientation' },
    { german: 'Können Sie mir den Weg zeigen?', english: 'Can you show me the way?', context: 'Orientation' },

    // Tourisme
    { german: 'Wann öffnet das Museum?', english: 'When does the museum open?', context: 'Tourisme' },
    { german: 'Was kostet der Eintritt?', english: 'How much is the entrance fee?', context: 'Tourisme' },
    { german: 'Gibt es eine Führung auf Französisch?', english: 'Is there a guided tour in French?', context: 'Tourisme' },
    { german: 'Darf man hier fotografieren?', english: 'Are photos allowed here?', context: 'Tourisme' },

    // Problèmes
    { german: 'Ich habe meinen Koffer verloren.', english: 'I have lost my suitcase.', context: 'Problèmes' },
    { german: 'Mein Gepäck ist nicht angekommen.', english: 'My luggage has not arrived.', context: 'Problèmes' },
    { german: 'Ich habe meinen Flug verpasst.', english: 'I missed my flight.', context: 'Problèmes' },
    { german: 'Der Zug hatte eine Stunde Verspätung.', english: 'The train was an hour late.', context: 'Problèmes' }
  ]
};
