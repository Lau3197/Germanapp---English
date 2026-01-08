
import { ThemeContent, LanguageLevel } from '../../types';

export const voyagesContent: ThemeContent = {
  words: [
    // === VOYAGE GÉNÉRAL ===
    { article: 'die', german: 'Reise', french: 'Voyage', plural: 'Reisen', level: LanguageLevel.A1, subTheme: 'Général', example: 'Gute Reise!' },
    { article: 'der', german: 'Urlaub', french: 'Vacances', plural: 'Urlaube', level: LanguageLevel.A1, subTheme: 'Général', example: 'Ich fahre bald in den Urlaub.' },
    { article: 'die', german: 'Ferien', french: 'Vacances (scolaires)', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Général', example: 'In den Ferien fahren wir ans Meer.' },
    { article: 'der', german: 'Tourist', french: 'Touriste (m)', plural: 'Touristen', level: LanguageLevel.A1, subTheme: 'Général', example: 'Der Tourist macht viele Fotos.' },
    { article: 'die', german: 'Touristin', french: 'Touriste (f)', plural: 'Touristinnen', level: LanguageLevel.A1, subTheme: 'Général', example: 'Die Touristin fragt nach dem Weg.' },
    { article: 'der', german: 'Reisende', french: 'Voyageur', plural: 'Reisenden', level: LanguageLevel.A2, subTheme: 'Général', example: 'Die Reisenden warten am Gleis.' },
    { article: 'das', german: 'Reiseziel', french: 'Destination', plural: 'Reiseziele', level: LanguageLevel.A2, subTheme: 'Général', example: 'Unser Reiseziel ist Italien.' },
    { article: 'die', german: 'Rundreise', french: 'Circuit / Tour', plural: 'Rundreisen', level: LanguageLevel.B1, subTheme: 'Général', example: 'Wir machen eine Rundreise durch Europa.' },
    { article: 'die', german: 'Pauschalreise', french: 'Voyage organisé', plural: 'Pauschalreisen', level: LanguageLevel.B1, subTheme: 'Général', example: 'Eine Pauschalreise nach Ägypten.' },
    { article: 'das', german: 'Abenteuer', french: 'Aventure', plural: 'Abenteuer', level: LanguageLevel.A2, subTheme: 'Général', example: 'Die Reise war ein großes Abenteuer.' },
    { article: 'die', german: 'Weltreise', french: 'Tour du monde', plural: 'Weltreisen', level: LanguageLevel.B1, subTheme: 'Général', example: 'Er träumt von einer Weltreise.' },
    { article: 'das', german: 'Ausland', french: 'Étranger (pays)', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Général', example: 'Im Ausland studieren.' },
    { article: 'das', german: 'Inland', french: 'Pays (national)', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Général', example: 'Eine Reise im Inland.' },
    
    // === TRANSPORTS ===
    { article: 'das', german: 'Flugzeug', french: 'Avion', plural: 'Flugzeuge', level: LanguageLevel.A1, subTheme: 'Transports', example: 'Das Flugzeug landet pünktlich.' },
    { article: 'der', german: 'Flug', french: 'Vol', plural: 'Flüge', level: LanguageLevel.A1, subTheme: 'Transports', example: 'Der Flug dauert zwei Stunden.' },
    { article: 'der', german: 'Flughafen', french: 'Aéroport', plural: 'Flughäfen', level: LanguageLevel.A1, subTheme: 'Transports', example: 'Der Flughafen ist weit weg.' },
    { article: 'die', german: 'Landung', french: 'Atterrissage', plural: 'Landungen', level: LanguageLevel.A2, subTheme: 'Transports', example: 'Die Landung war sanft.' },
    { article: 'der', german: 'Abflug', french: 'Départ (avion)', plural: 'Abflüge', level: LanguageLevel.A2, subTheme: 'Transports', example: 'Der Abflug ist um 14 Uhr.' },
    { article: 'die', german: 'Ankunft', french: 'Arrivée', plural: 'Ankünfte', level: LanguageLevel.A2, subTheme: 'Transports', example: 'Die Ankunft ist pünktlich.' },
    { article: 'das', german: 'Gate', french: 'Porte d\'embarquement', plural: 'Gates', level: LanguageLevel.A2, subTheme: 'Transports', example: 'Das Boarding ist am Gate B12.' },
    { article: 'die', german: 'Bordkarte', french: 'Carte d\'embarquement', plural: 'Bordkarten', level: LanguageLevel.A2, subTheme: 'Transports', example: 'Zeigen Sie bitte Ihre Bordkarte.' },
    { article: 'der', german: 'Zug', french: 'Train', plural: 'Züge', level: LanguageLevel.A1, subTheme: 'Transports', example: 'Der Zug hat zehn Minuten Verspätung.' },
    { article: 'der', german: 'Bahnhof', french: 'Gare', plural: 'Bahnhöfe', level: LanguageLevel.A1, subTheme: 'Transports', example: 'Treffen wir uns am Bahnhof?' },
    { article: 'der', german: 'Hauptbahnhof', french: 'Gare centrale', plural: 'Hauptbahnhöfe', level: LanguageLevel.A1, subTheme: 'Transports', example: 'Der Hauptbahnhof ist im Zentrum.' },
    { article: 'das', german: 'Gleis', french: 'Quai / Voie', plural: 'Gleise', level: LanguageLevel.A1, subTheme: 'Transports', example: 'Der Zug fährt von Gleis 5 ab.' },
    { article: 'die', german: 'S-Bahn', french: 'Train de banlieue', plural: 'S-Bahnen', level: LanguageLevel.A1, subTheme: 'Transports', example: 'Ich nehme die S-Bahn zur Arbeit.' },
    { article: 'die', german: 'U-Bahn', french: 'Métro', plural: 'U-Bahnen', level: LanguageLevel.A1, subTheme: 'Transports', example: 'Die U-Bahn fährt alle 5 Minuten.' },
    { article: 'die', german: 'Straßenbahn', french: 'Tramway', plural: 'Straßenbahnen', level: LanguageLevel.A1, subTheme: 'Transports', example: 'Die Straßenbahn hält hier.' },
    { article: 'der', german: 'Bus', french: 'Bus', plural: 'Busse', level: LanguageLevel.A1, subTheme: 'Transports', example: 'Der Bus kommt in 10 Minuten.' },
    { article: 'die', german: 'Haltestelle', french: 'Arrêt', plural: 'Haltestellen', level: LanguageLevel.A1, subTheme: 'Transports', example: 'Die Haltestelle ist dort drüben.' },
    { article: 'das', german: 'Auto', french: 'Voiture', plural: 'Autos', level: LanguageLevel.A1, subTheme: 'Transports', example: 'Ich fahre mit dem Auto zur Arbeit.' },
    { article: 'der', german: 'Mietwagen', french: 'Voiture de location', plural: 'Mietwagen', level: LanguageLevel.A2, subTheme: 'Transports', example: 'Wir haben einen Mietwagen gebucht.' },
    { article: 'das', german: 'Taxi', french: 'Taxi', plural: 'Taxis', level: LanguageLevel.A1, subTheme: 'Transports', example: 'Ich nehme ein Taxi zum Hotel.' },
    { article: 'das', german: 'Fahrrad', french: 'Vélo', plural: 'Fahrräder', level: LanguageLevel.A1, subTheme: 'Transports', example: 'Ich fahre gern Fahrrad.' },
    { article: 'das', german: 'Schiff', french: 'Bateau', plural: 'Schiffe', level: LanguageLevel.A1, subTheme: 'Transports', example: 'Das Schiff fährt nach Schweden.' },
    { article: 'die', german: 'Fähre', french: 'Ferry', plural: 'Fähren', level: LanguageLevel.A2, subTheme: 'Transports', example: 'Die Fähre nach England.' },
    { article: 'der', german: 'Hafen', french: 'Port', plural: 'Häfen', level: LanguageLevel.A2, subTheme: 'Transports', example: 'Das Schiff liegt im Hafen.' },
    { article: 'die', german: 'Kreuzfahrt', french: 'Croisière', plural: 'Kreuzfahrten', level: LanguageLevel.B1, subTheme: 'Transports', example: 'Eine Kreuzfahrt durch die Karibik.' },
    
    // === BILLETS / RÉSERVATIONS ===
    { article: 'die', german: 'Fahrkarte', french: 'Billet (transport)', plural: 'Fahrkarten', level: LanguageLevel.A1, subTheme: 'Billets', example: 'Haben Sie eine Fahrkarte?' },
    { article: 'das', german: 'Ticket', french: 'Ticket', plural: 'Tickets', level: LanguageLevel.A1, subTheme: 'Billets', example: 'Ich habe das Ticket online gekauft.' },
    { article: 'die', german: 'Einzelfahrkarte', french: 'Billet simple', plural: 'Einzelfahrkarten', level: LanguageLevel.A2, subTheme: 'Billets', example: 'Eine Einzelfahrkarte nach München.' },
    { article: 'die', german: 'Rückfahrkarte', french: 'Billet aller-retour', plural: 'Rückfahrkarten', level: LanguageLevel.A2, subTheme: 'Billets', example: 'Eine Rückfahrkarte, bitte.' },
    { article: 'die', german: 'Monatskarte', french: 'Carte mensuelle', plural: 'Monatskarten', level: LanguageLevel.A2, subTheme: 'Billets', example: 'Ich habe eine Monatskarte.' },
    { article: 'die', german: 'Reservierung', french: 'Réservation', plural: 'Reservierungen', level: LanguageLevel.A2, subTheme: 'Billets', example: 'Haben Sie eine Reservierung?' },
    { article: 'die', german: 'Buchung', french: 'Réservation', plural: 'Buchungen', level: LanguageLevel.A2, subTheme: 'Billets', example: 'Die Buchung ist bestätigt.' },
    { article: 'der', german: 'Preis', french: 'Prix', plural: 'Preise', level: LanguageLevel.A1, subTheme: 'Billets', example: 'Was kostet das Ticket?' },
    { article: 'die', german: 'Ermäßigung', french: 'Réduction', plural: 'Ermäßigungen', level: LanguageLevel.A2, subTheme: 'Billets', example: 'Gibt es eine Ermäßigung für Studenten?' },
    { article: 'die', german: 'erste Klasse', french: 'Première classe', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Billets', example: 'Ein Ticket erster Klasse.' },
    { article: 'die', german: 'zweite Klasse', french: 'Deuxième classe', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Billets', example: 'Zweite Klasse ist günstiger.' },
    
    // === BAGAGES ===
    { article: 'das', german: 'Gepäck', french: 'Bagages', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Bagages', example: 'Wo kann ich mein Gepäck abgeben?' },
    { article: 'der', german: 'Koffer', french: 'Valise', plural: 'Koffer', level: LanguageLevel.A1, subTheme: 'Bagages', example: 'Hast du den Koffer schon gepackt?' },
    { article: 'die', german: 'Tasche', french: 'Sac', plural: 'Taschen', level: LanguageLevel.A1, subTheme: 'Bagages', example: 'Meine Tasche ist schwer.' },
    { article: 'der', german: 'Rucksack', french: 'Sac à dos', plural: 'Rucksäcke', level: LanguageLevel.A1, subTheme: 'Bagages', example: 'Ich reise nur mit dem Rucksack.' },
    { article: 'das', german: 'Handgepäck', french: 'Bagage à main', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Bagages', example: 'Das Handgepäck darf 8 kg wiegen.' },
    { article: 'die', german: 'Gepäckaufgabe', french: 'Enregistrement bagages', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Bagages', example: 'Die Gepäckaufgabe ist am Schalter 3.' },
    { article: 'die', german: 'Gepäckausgabe', french: 'Livraison bagages', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Bagages', example: 'Die Gepäckausgabe ist in der Halle B.' },
    { article: 'der', german: 'Gepäckwagen', french: 'Chariot à bagages', plural: 'Gepäckwagen', level: LanguageLevel.A2, subTheme: 'Bagages', example: 'Ich brauche einen Gepäckwagen.' },
    
    // === HÉBERGEMENT ===
    { article: 'das', german: 'Hotel', french: 'Hôtel', plural: 'Hotels', level: LanguageLevel.A1, subTheme: 'Hébergement', example: 'Ein Zimmer im Hotel reservieren.' },
    { article: 'die', german: 'Pension', french: 'Pension', plural: 'Pensionen', level: LanguageLevel.A2, subTheme: 'Hébergement', example: 'Wir übernachten in einer Pension.' },
    { article: 'die', german: 'Jugendherberge', french: 'Auberge de jeunesse', plural: 'Jugendherbergen', level: LanguageLevel.A2, subTheme: 'Hébergement', example: 'Die Jugendherberge ist günstig.' },
    { article: 'die', german: 'Ferienwohnung', french: 'Appartement de vacances', plural: 'Ferienwohnungen', level: LanguageLevel.A2, subTheme: 'Hébergement', example: 'Wir mieten eine Ferienwohnung.' },
    { article: 'das', german: 'Ferienhaus', french: 'Maison de vacances', plural: 'Ferienhäuser', level: LanguageLevel.A2, subTheme: 'Hébergement', example: 'Ein Ferienhaus am Meer.' },
    { article: 'der', german: 'Campingplatz', french: 'Camping', plural: 'Campingplätze', level: LanguageLevel.A2, subTheme: 'Hébergement', example: 'Der Campingplatz ist am See.' },
    { article: 'das', german: 'Zelt', french: 'Tente', plural: 'Zelte', level: LanguageLevel.A1, subTheme: 'Hébergement', example: 'Wir schlafen im Zelt.' },
    { article: 'die', german: 'Unterkunft', french: 'Hébergement', plural: 'Unterkünfte', level: LanguageLevel.B1, subTheme: 'Hébergement', example: 'Wir suchen eine günstige Unterkunft.' },
    { article: 'das', german: 'Zimmer', french: 'Chambre', plural: 'Zimmer', level: LanguageLevel.A1, subTheme: 'Hébergement', example: 'Ein Zimmer für zwei Nächte.' },
    { article: 'das', german: 'Einzelzimmer', french: 'Chambre simple', plural: 'Einzelzimmer', level: LanguageLevel.A1, subTheme: 'Hébergement', example: 'Ein Einzelzimmer, bitte.' },
    { article: 'das', german: 'Doppelzimmer', french: 'Chambre double', plural: 'Doppelzimmer', level: LanguageLevel.A1, subTheme: 'Hébergement', example: 'Ein Doppelzimmer mit Bad.' },
    { article: 'die', german: 'Rezeption', french: 'Réception', plural: 'Rezeptionen', level: LanguageLevel.A1, subTheme: 'Hébergement', example: 'An der Rezeption einchecken.' },
    { article: 'der', german: 'Schlüssel', french: 'Clé', plural: 'Schlüssel', level: LanguageLevel.A1, subTheme: 'Hébergement', example: 'Kann ich den Schlüssel haben?' },
    { article: 'das', german: 'Frühstück', french: 'Petit-déjeuner', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Hébergement', example: 'Das Frühstück ist inbegriffen.' },
    { article: 'die', german: 'Halbpension', french: 'Demi-pension', plural: 'n/a', level: LanguageLevel.B1, subTheme: 'Hébergement', example: 'Wir buchen mit Halbpension.' },
    { article: 'die', german: 'Vollpension', french: 'Pension complète', plural: 'n/a', level: LanguageLevel.B1, subTheme: 'Hébergement', example: 'Vollpension ist teurer.' },
    { article: 'der', german: 'Check-in', french: 'Enregistrement', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Hébergement', example: 'Der Check-in ist ab 14 Uhr.' },
    { article: 'der', german: 'Check-out', french: 'Départ', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Hébergement', example: 'Der Check-out ist bis 11 Uhr.' },
    
    // === DOCUMENTS ===
    { article: 'der', german: 'Reisepass', french: 'Passeport', plural: 'Reisepässe', level: LanguageLevel.A1, subTheme: 'Documents', example: 'Ihren Reisepass, bitte.' },
    { article: 'der', german: 'Personalausweis', french: 'Carte d\'identité', plural: 'Personalausweise', level: LanguageLevel.A1, subTheme: 'Documents', example: 'Der Personalausweis reicht in der EU.' },
    { article: 'das', german: 'Visum', french: 'Visa', plural: 'Visa', level: LanguageLevel.A2, subTheme: 'Documents', example: 'Brauche ich ein Visum?' },
    { article: 'der', german: 'Führerschein', french: 'Permis de conduire', plural: 'Führerscheine', level: LanguageLevel.A2, subTheme: 'Documents', example: 'Zeigen Sie Ihren Führerschein.' },
    { article: 'die', german: 'Reiseversicherung', french: 'Assurance voyage', plural: 'Reiseversicherungen', level: LanguageLevel.B1, subTheme: 'Documents', example: 'Eine Reiseversicherung ist wichtig.' },
    
    // === TOURISME ===
    { article: 'die', german: 'Sehenswürdigkeit', french: 'Site touristique', plural: 'Sehenswürdigkeiten', level: LanguageLevel.A2, subTheme: 'Tourisme', example: 'Berlin hat viele Sehenswürdigkeiten.' },
    { article: 'das', german: 'Museum', french: 'Musée', plural: 'Museen', level: LanguageLevel.A1, subTheme: 'Tourisme', example: 'Das Museum ist montags geschlossen.' },
    { article: 'die', german: 'Kirche', french: 'Église', plural: 'Kirchen', level: LanguageLevel.A1, subTheme: 'Tourisme', example: 'Eine alte Kirche besichtigen.' },
    { article: 'das', german: 'Schloss', french: 'Château', plural: 'Schlösser', level: LanguageLevel.A2, subTheme: 'Tourisme', example: 'Das Schloss Neuschwanstein.' },
    { article: 'die', german: 'Burg', french: 'Forteresse', plural: 'Burgen', level: LanguageLevel.A2, subTheme: 'Tourisme', example: 'Die Burg steht auf einem Berg.' },
    { article: 'der', german: 'Dom', french: 'Cathédrale', plural: 'Dome', level: LanguageLevel.A2, subTheme: 'Tourisme', example: 'Der Kölner Dom ist berühmt.' },
    { article: 'das', german: 'Denkmal', french: 'Monument', plural: 'Denkmäler', level: LanguageLevel.A2, subTheme: 'Tourisme', example: 'Ein historisches Denkmal.' },
    { article: 'die', german: 'Stadtführung', french: 'Visite guidée', plural: 'Stadtführungen', level: LanguageLevel.A2, subTheme: 'Tourisme', example: 'Wir machen eine Stadtführung.' },
    { article: 'der', german: 'Reiseführer', french: 'Guide de voyage', plural: 'Reiseführer', level: LanguageLevel.A2, subTheme: 'Tourisme', example: 'Der Reiseführer kennt die Stadt gut.' },
    { article: 'die', german: 'Karte', french: 'Carte / Plan', plural: 'Karten', level: LanguageLevel.A1, subTheme: 'Tourisme', example: 'Haben Sie eine Karte von der Stadt?' },
    { article: 'der', german: 'Stadtplan', french: 'Plan de ville', plural: 'Stadtpläne', level: LanguageLevel.A1, subTheme: 'Tourisme', example: 'Ich brauche einen Stadtplan.' },
    { article: 'das', german: 'Souvenir', french: 'Souvenir', plural: 'Souvenirs', level: LanguageLevel.A1, subTheme: 'Tourisme', example: 'Ein Souvenir kaufen.' },
    { article: 'die', german: 'Postkarte', french: 'Carte postale', plural: 'Postkarten', level: LanguageLevel.A1, subTheme: 'Tourisme', example: 'Ich schreibe eine Postkarte.' },
    
    // === PLAGE / MER ===
    { article: 'der', german: 'Strand', french: 'Plage', plural: 'Strände', level: LanguageLevel.A1, subTheme: 'Plage', example: 'Wir gehen an den Strand.' },
    { article: 'das', german: 'Meer', french: 'Mer', plural: 'Meere', level: LanguageLevel.A1, subTheme: 'Plage', example: 'Im Meer schwimmen.' },
    { article: 'der', german: 'Ozean', french: 'Océan', plural: 'Ozeane', level: LanguageLevel.A2, subTheme: 'Plage', example: 'Der Atlantische Ozean.' },
    { article: 'die', german: 'Insel', french: 'Île', plural: 'Inseln', level: LanguageLevel.A1, subTheme: 'Plage', example: 'Eine tropische Insel.' },
    { article: 'die', german: 'Küste', french: 'Côte', plural: 'Küsten', level: LanguageLevel.A2, subTheme: 'Plage', example: 'Entlang der Küste fahren.' },
    { article: 'die', german: 'Welle', french: 'Vague', plural: 'Wellen', level: LanguageLevel.A2, subTheme: 'Plage', example: 'Die Wellen sind heute hoch.' },
    { article: 'der', german: 'Sand', french: 'Sable', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Plage', example: 'Feiner Sand am Strand.' },
    { article: 'die', german: 'Sonnenbrille', french: 'Lunettes de soleil', plural: 'Sonnenbrillen', level: LanguageLevel.A1, subTheme: 'Plage', example: 'Ich brauche meine Sonnenbrille.' },
    { article: 'die', german: 'Sonnencreme', french: 'Crème solaire', plural: 'Sonnencremes', level: LanguageLevel.A1, subTheme: 'Plage', example: 'Vergiss die Sonnencreme nicht!' },
    { article: 'das', german: 'Handtuch', french: 'Serviette', plural: 'Handtücher', level: LanguageLevel.A1, subTheme: 'Plage', example: 'Ein Handtuch für den Strand.' },
    { article: 'der', german: 'Sonnenschirm', french: 'Parasol', plural: 'Sonnenschirme', level: LanguageLevel.A2, subTheme: 'Plage', example: 'Unter dem Sonnenschirm liegen.' },
    { article: 'die', german: 'Badehose', french: 'Maillot de bain (h)', plural: 'Badehosen', level: LanguageLevel.A1, subTheme: 'Plage', example: 'Hast du deine Badehose dabei?' },
    { article: 'der', german: 'Bikini', french: 'Bikini', plural: 'Bikinis', level: LanguageLevel.A1, subTheme: 'Plage', example: 'Sie trägt einen roten Bikini.' },
    { article: 'der', german: 'Badeanzug', french: 'Maillot de bain (f)', plural: 'Badeanzüge', level: LanguageLevel.A1, subTheme: 'Plage', example: 'Ein Badeanzug zum Schwimmen.' },
    
    // === MONTAGNE ===
    { article: 'der', german: 'Berg', french: 'Montagne', plural: 'Berge', level: LanguageLevel.A1, subTheme: 'Montagne', example: 'Die Alpen sind hohe Berge.' },
    { article: 'das', german: 'Gebirge', french: 'Chaîne de montagnes', plural: 'Gebirge', level: LanguageLevel.A2, subTheme: 'Montagne', example: 'Das Gebirge ist beeindruckend.' },
    { article: 'der', german: 'Gipfel', french: 'Sommet', plural: 'Gipfel', level: LanguageLevel.A2, subTheme: 'Montagne', example: 'Der Gipfel ist 3000 Meter hoch.' },
    { article: 'das', german: 'Tal', french: 'Vallée', plural: 'Täler', level: LanguageLevel.A2, subTheme: 'Montagne', example: 'Ein grünes Tal.' },
    { article: 'die', german: 'Wanderung', french: 'Randonnée', plural: 'Wanderungen', level: LanguageLevel.A2, subTheme: 'Montagne', example: 'Eine Wanderung in den Bergen.' },
    { article: 'die', german: 'Seilbahn', french: 'Téléphérique', plural: 'Seilbahnen', level: LanguageLevel.A2, subTheme: 'Montagne', example: 'Mit der Seilbahn nach oben.' },
    { article: 'der', german: 'Skilift', french: 'Téléski', plural: 'Skilifte', level: LanguageLevel.A2, subTheme: 'Montagne', example: 'Der Skilift bringt uns hoch.' },
    { article: 'die', german: 'Skier', french: 'Skis', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Montagne', example: 'Ich brauche neue Skier.' },
    { article: 'die', german: 'Piste', french: 'Piste', plural: 'Pisten', level: LanguageLevel.A2, subTheme: 'Montagne', example: 'Die Piste ist steil.' },
    { article: 'der', german: 'Schnee', french: 'Neige', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Montagne', example: 'Es liegt viel Schnee.' },
    
    // === VERBES ===
    { article: '', german: 'reisen', french: 'voyager', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Verbes', example: 'Ich reise gern.' },
    { article: '', german: 'fliegen', french: 'voler / prendre l\'avion', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Verbes', example: 'Wir fliegen nach Spanien.' },
    { article: '', german: 'fahren', french: 'conduire / aller', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Verbes', example: 'Wir fahren mit dem Auto.' },
    { article: '', german: 'ankommen', french: 'arriver', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Verbes', example: 'Wann kommst du an?' },
    { article: '', german: 'abfahren', french: 'partir', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Verbes', example: 'Der Zug fährt um 10 Uhr ab.' },
    { article: '', german: 'umsteigen', french: 'changer (de transport)', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Verbes', example: 'In München umsteigen.' },
    { article: '', german: 'landen', french: 'atterrir', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Verbes', example: 'Das Flugzeug landet bald.' },
    { article: '', german: 'starten', french: 'décoller', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Verbes', example: 'Das Flugzeug startet pünktlich.' },
    { article: '', german: 'buchen', french: 'réserver', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Verbes', example: 'Ein Hotel buchen.' },
    { article: '', german: 'reservieren', french: 'réserver', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Verbes', example: 'Einen Tisch reservieren.' },
    { article: '', german: 'packen', french: 'faire les bagages', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Verbes', example: 'Ich muss noch packen.' },
    { article: '', german: 'auspacken', french: 'défaire les bagages', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Verbes', example: 'Im Hotel auspacken.' },
    { article: '', german: 'übernachten', french: 'passer la nuit', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Verbes', example: 'Wir übernachten im Hotel.' },
    { article: '', german: 'besichtigen', french: 'visiter', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Verbes', example: 'Die Altstadt besichtigen.' },
    { article: '', german: 'fotografieren', french: 'photographier', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Verbes', example: 'Darf man hier fotografieren?' },
    { article: '', german: 'entspannen', french: 'se détendre', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Verbes', example: 'Im Urlaub entspannen.' },
    { article: '', german: 'schwimmen', french: 'nager', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Verbes', example: 'Im Meer schwimmen.' },
    { article: '', german: 'wandern', french: 'randonner', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Verbes', example: 'In den Bergen wandern.' },
    { article: '', german: 'Ski fahren', french: 'faire du ski', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Verbes', example: 'Im Winter Ski fahren.' },
    
    // === PROBLÈMES / SITUATIONS ===
    { article: 'die', german: 'Verspätung', french: 'Retard', plural: 'Verspätungen', level: LanguageLevel.A1, subTheme: 'Problèmes', example: 'Der Zug hat Verspätung.' },
    { article: 'die', german: 'Panne', french: 'Panne', plural: 'Pannen', level: LanguageLevel.A2, subTheme: 'Problèmes', example: 'Wir haben eine Panne.' },
    { article: 'der', german: 'Stau', french: 'Embouteillage', plural: 'Staus', level: LanguageLevel.A2, subTheme: 'Problèmes', example: 'Auf der Autobahn ist Stau.' },
    { article: 'die', german: 'Annullierung', french: 'Annulation', plural: 'Annullierungen', level: LanguageLevel.B1, subTheme: 'Problèmes', example: 'Die Annullierung des Fluges.' },
    { article: '', german: 'verloren', french: 'perdu', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Problèmes', example: 'Ich habe meinen Koffer verloren.' },
    { article: '', german: 'verpasst', french: 'raté', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Problèmes', example: 'Ich habe den Zug verpasst.' }
  ],
  phrases: [
    // À l'aéroport
    { german: 'Wo ist der Check-in?', french: 'Où est l\'enregistrement ?', context: 'Aéroport' },
    { german: 'Wo ist das Gate B12?', french: 'Où est la porte B12 ?', context: 'Aéroport' },
    { german: 'Haben Sie nur Handgepäck?', french: 'Avez-vous seulement un bagage à main ?', context: 'Aéroport' },
    { german: 'Der Flug hat Verspätung.', french: 'Le vol a du retard.', context: 'Aéroport' },
    { german: 'Wann landet das Flugzeug?', french: 'Quand l\'avion atterrit-il ?', context: 'Aéroport' },
    
    // À la gare
    { german: 'Von welchem Gleis fährt der Zug ab?', french: 'De quel quai part le train ?', context: 'Gare' },
    { german: 'Muss ich umsteigen?', french: 'Dois-je changer ?', context: 'Gare' },
    { german: 'Der Zug nach Berlin, bitte.', french: 'Le train pour Berlin, s\'il vous plaît.', context: 'Gare' },
    { german: 'Einmal hin und zurück.', french: 'Un aller-retour.', context: 'Gare' },
    { german: 'Gibt es eine Verbindung nach...?', french: 'Y a-t-il une correspondance pour... ?', context: 'Gare' },
    
    // Billets
    { german: 'Wo kann ich ein Ticket kaufen?', french: 'Où puis-je acheter un billet ?', context: 'Transport' },
    { german: 'Was kostet eine Fahrkarte nach...?', french: 'Combien coûte un billet pour... ?', context: 'Transport' },
    { german: 'Gibt es eine Ermäßigung für Studenten?', french: 'Y a-t-il une réduction pour les étudiants ?', context: 'Transport' },
    
    // Hôtel
    { german: 'Haben Sie ein Zimmer frei?', french: 'Avez-vous une chambre libre ?', context: 'Hôtel' },
    { german: 'Ein Doppelzimmer mit Frühstück, bitte.', french: 'Une chambre double avec petit-déjeuner, s\'il vous plaît.', context: 'Hôtel' },
    { german: 'Wie viel kostet das Zimmer pro Nacht?', french: 'Combien coûte la chambre par nuit ?', context: 'Hôtel' },
    { german: 'Ist das Frühstück inbegriffen?', french: 'Le petit-déjeuner est-il inclus ?', context: 'Hôtel' },
    { german: 'Ich möchte auschecken.', french: 'Je voudrais faire le check-out.', context: 'Hôtel' },
    { german: 'Kann ich den Schlüssel haben?', french: 'Puis-je avoir la clé ?', context: 'Hôtel' },
    { german: 'Gibt es WLAN im Hotel?', french: 'Y a-t-il le WiFi à l\'hôtel ?', context: 'Hôtel' },
    
    // Orientation
    { german: 'Wie komme ich zum Bahnhof?', french: 'Comment aller à la gare ?', context: 'Orientation' },
    { german: 'Wo ist die nächste U-Bahn-Station?', french: 'Où est la station de métro la plus proche ?', context: 'Orientation' },
    { german: 'Ist es weit von hier?', french: 'Est-ce loin d\'ici ?', context: 'Orientation' },
    { german: 'Können Sie mir den Weg zeigen?', french: 'Pouvez-vous me montrer le chemin ?', context: 'Orientation' },
    
    // Tourisme
    { german: 'Wann öffnet das Museum?', french: 'Quand ouvre le musée ?', context: 'Tourisme' },
    { german: 'Was kostet der Eintritt?', french: 'Combien coûte l\'entrée ?', context: 'Tourisme' },
    { german: 'Gibt es eine Führung auf Französisch?', french: 'Y a-t-il une visite guidée en français ?', context: 'Tourisme' },
    { german: 'Darf man hier fotografieren?', french: 'Peut-on photographier ici ?', context: 'Tourisme' },
    
    // Problèmes
    { german: 'Ich habe meinen Koffer verloren.', french: 'J\'ai perdu ma valise.', context: 'Problèmes' },
    { german: 'Mein Gepäck ist nicht angekommen.', french: 'Mes bagages ne sont pas arrivés.', context: 'Problèmes' },
    { german: 'Ich habe meinen Flug verpasst.', french: 'J\'ai raté mon vol.', context: 'Problèmes' },
    { german: 'Der Zug hatte eine Stunde Verspätung.', french: 'Le train avait une heure de retard.', context: 'Problèmes' }
  ]
};
