
import { ThemeContent, LanguageLevel } from '../../types';

export const villeContent: ThemeContent = {
  words: [
    // === GÉNÉRAL ===
    { article: 'die', german: 'Stadt', english: 'City', plural: 'Städte', level: LanguageLevel.A1, subTheme: 'Général', example: 'Ich wohne in einer Stadt.' },
    { article: 'das', german: 'Dorf', english: 'Village', plural: 'Dörfer', level: LanguageLevel.A1, subTheme: 'Général', example: 'Ein kleines Dorf auf dem Land.' },
    { article: 'die', german: 'Großstadt', english: 'Big city / Metropolis', plural: 'Großstädte', level: LanguageLevel.A2, subTheme: 'Général', example: 'Berlin ist eine Großstadt.' },
    { article: 'die', german: 'Hauptstadt', english: 'Capital', plural: 'Hauptstädte', level: LanguageLevel.A1, subTheme: 'Général', example: 'Berlin ist die Hauptstadt von Deutschland.' },
    { article: 'das', german: 'Zentrum', english: 'Center / City center', plural: 'Zentren', level: LanguageLevel.A1, subTheme: 'Général', example: 'Das Zentrum ist sehr belebt.' },
    { article: 'die', german: 'Altstadt', english: 'Old town', plural: 'Altstädte', level: LanguageLevel.A2, subTheme: 'Général', example: 'Die Altstadt ist sehr schön.' },
    { article: 'das', german: 'Viertel', english: 'Quarter / District', plural: 'Viertel', level: LanguageLevel.A2, subTheme: 'Général', example: 'Ein ruhiges Viertel.' },
    { article: 'der', german: 'Stadtrand', english: 'Outskirts', plural: 'Stadtränder', level: LanguageLevel.B1, subTheme: 'Général', example: 'Am Stadtrand wohnen.' },
    { article: 'der', german: 'Vorort', english: 'Suburb', plural: 'Vororte', level: LanguageLevel.A2, subTheme: 'Général', example: 'Ein Vorort von München.' },
    { article: 'der', german: 'Einwohner', english: 'Inhabitant', plural: 'Einwohner', level: LanguageLevel.A2, subTheme: 'Général', example: 'Die Stadt hat 500.000 Einwohner.' },

    // === RUES / PLACES ===
    { article: 'die', german: 'Straße', english: 'Street', plural: 'Straßen', level: LanguageLevel.A1, subTheme: 'Rues', example: 'In dieser Straße gibt es viele Läden.' },
    { article: 'die', german: 'Hauptstraße', english: 'Main street', plural: 'Hauptstraßen', level: LanguageLevel.A1, subTheme: 'Rues', example: 'Die Hauptstraße ist immer voll.' },
    { article: 'die', german: 'Gasse', english: 'Alley / Lane', plural: 'Gassen', level: LanguageLevel.A2, subTheme: 'Rues', example: 'Eine enge Gasse.' },
    { article: 'die', german: 'Allee', english: 'Avenue / Boulevard', plural: 'Alleen', level: LanguageLevel.A2, subTheme: 'Rues', example: 'Eine Allee mit Bäumen.' },
    { article: 'der', german: 'Platz', english: 'Square', plural: 'Plätze', level: LanguageLevel.A1, subTheme: 'Rues', example: 'Ein großer Platz.' },
    { article: 'der', german: 'Marktplatz', english: 'Market square', plural: 'Marktplätze', level: LanguageLevel.A1, subTheme: 'Rues', example: 'Der Marktplatz ist im Zentrum.' },
    { article: 'der', german: 'Bürgersteig', english: 'Sidewalk', plural: 'Bürgersteige', level: LanguageLevel.A2, subTheme: 'Rues', example: 'Auf dem Bürgersteig gehen.' },
    { article: 'der', german: 'Gehweg', english: 'Sidewalk / Footpath', plural: 'Gehwege', level: LanguageLevel.A2, subTheme: 'Rues', example: 'Der Gehweg ist breit.' },
    { article: 'die', german: 'Kreuzung', english: 'Intersection / Crossroads', plural: 'Kreuzungen', level: LanguageLevel.A2, subTheme: 'Rues', example: 'An der Kreuzung links abbiegen.' },
    { article: 'die', german: 'Ecke', english: 'Corner', plural: 'Ecken', level: LanguageLevel.A1, subTheme: 'Rues', example: 'An der Ecke ist eine Bäckerei.' },
    { article: 'die', german: 'Brücke', english: 'Bridge', plural: 'Brücken', level: LanguageLevel.A1, subTheme: 'Rues', example: 'Eine alte Brücke über den Fluss.' },
    { article: 'der', german: 'Tunnel', english: 'Tunnel', plural: 'Tunnel', level: LanguageLevel.A2, subTheme: 'Rues', example: 'Ein Tunnel unter der Stadt.' },
    { article: 'die', german: 'Fußgängerzone', english: 'Pedestrian zone', plural: 'Fußgängerzonen', level: LanguageLevel.A2, subTheme: 'Rues', example: 'Shoppen in der Fußgängerzone.' },

    // === BÂTIMENTS PUBLICS ===
    { article: 'das', german: 'Gebäude', english: 'Building', plural: 'Gebäude', level: LanguageLevel.A1, subTheme: 'Bâtiments', example: 'Ein hohes Gebäude.' },
    { article: 'das', german: 'Rathaus', english: 'Town hall', plural: 'Rathäuser', level: LanguageLevel.A1, subTheme: 'Bâtiments', example: 'Das Rathaus ist am Marktplatz.' },
    { article: 'die', german: 'Kirche', english: 'Church', plural: 'Kirchen', level: LanguageLevel.A1, subTheme: 'Bâtiments', example: 'Eine alte Kirche.' },
    { article: 'der', german: 'Dom', english: 'Cathedral', plural: 'Dome', level: LanguageLevel.A2, subTheme: 'Bâtiments', example: 'Der Kölner Dom.' },
    { article: 'die', german: 'Moschee', english: 'Mosque', plural: 'Moscheen', level: LanguageLevel.A2, subTheme: 'Bâtiments', example: 'Eine Moschee in der Stadt.' },
    { article: 'die', german: 'Synagoge', english: 'Synagogue', plural: 'Synagogen', level: LanguageLevel.A2, subTheme: 'Bâtiments', example: 'Die alte Synagoge.' },
    { article: 'das', german: 'Museum', english: 'Museum', plural: 'Museen', level: LanguageLevel.A1, subTheme: 'Bâtiments', example: 'Das Museum ist montags geschlossen.' },
    { article: 'die', german: 'Bibliothek', english: 'Library', plural: 'Bibliotheken', level: LanguageLevel.A1, subTheme: 'Bâtiments', example: 'Bücher in der Bibliothek ausleihen.' },
    { article: 'das', german: 'Theater', english: 'Theater', plural: 'Theater', level: LanguageLevel.A1, subTheme: 'Bâtiments', example: 'Ins Theater gehen.' },
    { article: 'die', german: 'Oper', english: 'Opera', plural: 'Opern', level: LanguageLevel.A2, subTheme: 'Bâtiments', example: 'Eine Oper besuchen.' },
    { article: 'das', german: 'Kino', english: 'Cinema', plural: 'Kinos', level: LanguageLevel.A1, subTheme: 'Bâtiments', example: 'Ins Kino gehen.' },
    { article: 'das', german: 'Stadion', english: 'Stadium', plural: 'Stadien', level: LanguageLevel.A2, subTheme: 'Bâtiments', example: 'Ein Fußballspiel im Stadion.' },
    { article: 'das', german: 'Schwimmbad', english: 'Swimming pool', plural: 'Schwimmbäder', level: LanguageLevel.A1, subTheme: 'Bâtiments', example: 'Ins Schwimmbad gehen.' },
    { article: 'die', german: 'Sporthalle', english: 'Sports hall / Gym', plural: 'Sporthallen', level: LanguageLevel.A2, subTheme: 'Bâtiments', example: 'Sport in der Sporthalle.' },
    { article: 'das', german: 'Krankenhaus', english: 'Hospital', plural: 'Krankenhäuser', level: LanguageLevel.A1, subTheme: 'Bâtiments', example: 'Im Krankenhaus behandelt werden.' },
    { article: 'die', german: 'Schule', english: 'School', plural: 'Schulen', level: LanguageLevel.A1, subTheme: 'Bâtiments', example: 'Die Schule beginnt um 8 Uhr.' },
    { article: 'die', german: 'Universität', english: 'University', plural: 'Universitäten', level: LanguageLevel.A1, subTheme: 'Bâtiments', example: 'An der Universität studieren.' },
    { article: 'das', german: 'Gefängnis', english: 'Prison', plural: 'Gefängnisse', level: LanguageLevel.B1, subTheme: 'Bâtiments', example: 'Das Gefängnis am Stadtrand.' },
    { article: 'das', german: 'Gericht', english: 'Court', plural: 'Gerichte', level: LanguageLevel.B1, subTheme: 'Bâtiments', example: 'Vor Gericht erscheinen.' },

    // === MAGASINS ===
    { article: 'das', german: 'Geschäft', english: 'Shop / Store', plural: 'Geschäfte', level: LanguageLevel.A1, subTheme: 'Magasins', example: 'Die Geschäfte schließen um 20 Uhr.' },
    { article: 'der', german: 'Laden', english: 'Shop / Store', plural: 'Läden', level: LanguageLevel.A1, subTheme: 'Magasins', example: 'Ein kleiner Laden.' },
    { article: 'das', german: 'Kaufhaus', english: 'Department store', plural: 'Kaufhäuser', level: LanguageLevel.A2, subTheme: 'Magasins', example: 'Shoppen im Kaufhaus.' },
    { article: 'das', german: 'Einkaufszentrum', english: 'Shopping center / Mall', plural: 'Einkaufszentren', level: LanguageLevel.A2, subTheme: 'Magasins', example: 'Im Einkaufszentrum einkaufen.' },
    { article: 'der', german: 'Supermarkt', english: 'Supermarket', plural: 'Supermärkte', level: LanguageLevel.A1, subTheme: 'Magasins', example: 'Im Supermarkt einkaufen.' },
    { article: 'der', german: 'Markt', english: 'Market', plural: 'Märkte', level: LanguageLevel.A1, subTheme: 'Magasins', example: 'Auf dem Markt Gemüse kaufen.' },
    { article: 'die', german: 'Bäckerei', english: 'Bakery', plural: 'Bäckereien', level: LanguageLevel.A1, subTheme: 'Magasins', example: 'Frische Brötchen aus der Bäckerei.' },
    { article: 'die', german: 'Metzgerei', english: 'Butcher shop', plural: 'Metzgereien', level: LanguageLevel.A1, subTheme: 'Magasins', example: 'Fleisch in der Metzgerei kaufen.' },
    { article: 'die', german: 'Konditorei', english: 'Pastry shop / Confectionery', plural: 'Konditorei', level: LanguageLevel.A2, subTheme: 'Magasins', example: 'Kuchen aus der Konditorei.' },
    { article: 'die', german: 'Drogerie', english: 'Drugstore', plural: 'Drogerien', level: LanguageLevel.A2, subTheme: 'Magasins', example: 'Kosmetik in der Drogerie.' },
    { article: 'die', german: 'Buchhandlung', english: 'Bookstore', plural: 'Buchhandlungen', level: LanguageLevel.A2, subTheme: 'Magasins', example: 'Ein Buch in der Buchhandlung kaufen.' },
    { article: 'der', german: 'Blumenladen', english: 'Flower shop / Florist', plural: 'Blumenläden', level: LanguageLevel.A2, subTheme: 'Magasins', example: 'Blumen im Blumenladen kaufen.' },
    { article: 'das', german: 'Schuhgeschäft', english: 'Shoe store', plural: 'Schuhgeschäfte', level: LanguageLevel.A2, subTheme: 'Magasins', example: 'Schuhe im Schuhgeschäft kaufen.' },
    { article: 'der', german: 'Friseursalon', english: 'Hair salon', plural: 'Friseursalons', level: LanguageLevel.A2, subTheme: 'Magasins', example: 'Zum Friseur gehen.' },
    { article: 'der', german: 'Kiosk', english: 'Kiosk / Newsstand', plural: 'Kioske', level: LanguageLevel.A2, subTheme: 'Magasins', example: 'Eine Zeitung am Kiosk kaufen.' },

    // === SERVICES ===
    { article: 'die', german: 'Apotheke', english: 'Pharmacy', plural: 'Apotheken', level: LanguageLevel.A1, subTheme: 'Services', example: 'Medikamente in der Apotheke kaufen.' },
    { article: 'die', german: 'Bank', english: 'Bank', plural: 'Banken', level: LanguageLevel.A1, subTheme: 'Services', example: 'Geld auf die Bank bringen.' },
    { article: 'der', german: 'Geldautomat', english: 'ATM', plural: 'Geldautomaten', level: LanguageLevel.A1, subTheme: 'Services', example: 'Geld am Geldautomaten abheben.' },
    { article: 'die', german: 'Post', english: 'Post office', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Services', example: 'Einen Brief zur Post bringen.' },
    { article: 'die', german: 'Polizei', english: 'Police', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Services', example: 'Rufen Sie die Polizei!' },
    { article: 'die', german: 'Polizeiwache', english: 'Police station', plural: 'Polizeiwachen', level: LanguageLevel.A2, subTheme: 'Services', example: 'Zur Polizeiwache gehen.' },
    { article: 'die', german: 'Feuerwehr', english: 'Fire department', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Services', example: 'Die Feuerwehr rufen.' },
    { article: 'das', german: 'Einwohnermeldeamt', english: 'Registration office', plural: 'Einwohnermeldeämter', level: LanguageLevel.B1, subTheme: 'Services', example: 'Sich beim Einwohnermeldeamt anmelden.' },
    { article: 'das', german: 'Arbeitsamt', english: 'Employment agency', plural: 'Arbeitsämter', level: LanguageLevel.B1, subTheme: 'Services', example: 'Sich beim Arbeitsamt melden.' },
    { article: 'die', german: 'Tankstelle', english: 'Gas station', plural: 'Tankstellen', level: LanguageLevel.A1, subTheme: 'Services', example: 'An der Tankstelle tanken.' },
    { article: 'die', german: 'Werkstatt', english: 'Workshop / Garage', plural: 'Werkstätten', level: LanguageLevel.A2, subTheme: 'Services', example: 'Das Auto in die Werkstatt bringen.' },
    { article: 'die', german: 'Reinigung', english: 'Dry cleaner', plural: 'Reinigungen', level: LanguageLevel.A2, subTheme: 'Services', example: 'Kleidung zur Reinigung bringen.' },

    // === RESTAURATION ===
    { article: 'das', german: 'Restaurant', english: 'Restaurant', plural: 'Restaurants', level: LanguageLevel.A1, subTheme: 'Restauration', example: 'Im Restaurant essen.' },
    { article: 'das', german: 'Café', english: 'Café', plural: 'Cafés', level: LanguageLevel.A1, subTheme: 'Restauration', example: 'Ins Café gehen.' },
    { article: 'die', german: 'Bar', english: 'Bar', plural: 'Bars', level: LanguageLevel.A1, subTheme: 'Restauration', example: 'In eine Bar gehen.' },
    { article: 'die', german: 'Kneipe', english: 'Pub', plural: 'Kneipen', level: LanguageLevel.A2, subTheme: 'Restauration', example: 'In der Kneipe ein Bier trinken.' },
    { article: 'der', german: 'Biergarten', english: 'Beer garden', plural: 'Biergärten', level: LanguageLevel.A2, subTheme: 'Restauration', example: 'Im Biergarten sitzen.' },
    { article: 'die', german: 'Imbissbude', english: 'Snack stand / Snack bar', plural: 'Imbissbuden', level: LanguageLevel.A2, subTheme: 'Restauration', example: 'Eine Currywurst an der Imbissbude.' },
    { article: 'die', german: 'Eisdiele', english: 'Ice cream parlor', plural: 'Eisdielen', level: LanguageLevel.A2, subTheme: 'Restauration', example: 'Eis in der Eisdiele kaufen.' },

    // === ESPACES VERTS ===
    { article: 'der', german: 'Park', english: 'Park', plural: 'Parks', level: LanguageLevel.A1, subTheme: 'Espaces verts', example: 'Spazieren im Park.' },
    { article: 'der', german: 'Garten', english: 'Garden', plural: 'Gärten', level: LanguageLevel.A1, subTheme: 'Espaces verts', example: 'Ein schöner Garten.' },
    { article: 'der', german: 'Spielplatz', english: 'Playground', plural: 'Spielplätze', level: LanguageLevel.A1, subTheme: 'Espaces verts', example: 'Kinder auf dem Spielplatz.' },
    { article: 'der', german: 'Friedhof', english: 'Cemetery', plural: 'Friedhöfe', level: LanguageLevel.A2, subTheme: 'Espaces verts', example: 'Ein alter Friedhof.' },
    { article: 'der', german: 'Zoo', english: 'Zoo', plural: 'Zoos', level: LanguageLevel.A1, subTheme: 'Espaces verts', example: 'In den Zoo gehen.' },
    { article: 'der', german: 'Brunnen', english: 'Fountain', plural: 'Brunnen', level: LanguageLevel.A2, subTheme: 'Espaces verts', example: 'Ein alter Brunnen auf dem Platz.' },

    // === TRANSPORTS ===
    { article: 'der', german: 'Bahnhof', english: 'Train station', plural: 'Bahnhöfe', level: LanguageLevel.A1, subTheme: 'Transports', example: 'Am Bahnhof ankommen.' },
    { article: 'der', german: 'Busbahnhof', english: 'Bus station', plural: 'Busbahnhöfe', level: LanguageLevel.A2, subTheme: 'Transports', example: 'Der Busbahnhof ist im Zentrum.' },
    { article: 'der', german: 'Flughafen', english: 'Airport', plural: 'Flughäfen', level: LanguageLevel.A1, subTheme: 'Transports', example: 'Zum Flughafen fahren.' },
    { article: 'die', german: 'Haltestelle', english: 'Stop', plural: 'Haltestellen', level: LanguageLevel.A1, subTheme: 'Transports', example: 'An der Haltestelle warten.' },
    { article: 'die', german: 'U-Bahn-Station', english: 'Subway station', plural: 'U-Bahn-Stationen', level: LanguageLevel.A1, subTheme: 'Transports', example: 'Die U-Bahn-Station ist dort.' },
    { article: 'der', german: 'Parkplatz', english: 'Parking lot', plural: 'Parkplätze', level: LanguageLevel.A1, subTheme: 'Transports', example: 'Einen Parkplatz suchen.' },
    { article: 'das', german: 'Parkhaus', english: 'Parking garage', plural: 'Parkhäuser', level: LanguageLevel.A2, subTheme: 'Transports', example: 'Im Parkhaus parken.' },
    { article: 'der', german: 'Fahrradweg', english: 'Bike lane', plural: 'Fahrradwege', level: LanguageLevel.A2, subTheme: 'Transports', example: 'Auf dem Fahrradweg fahren.' },

    // === CIRCULATION ===
    { article: 'die', german: 'Ampel', english: 'Traffic light', plural: 'Ampeln', level: LanguageLevel.A1, subTheme: 'Circulation', example: 'Bei Rot an der Ampel warten.' },
    { article: 'das', german: 'Verkehrsschild', english: 'Traffic sign', plural: 'Verkehrsschilder', level: LanguageLevel.A2, subTheme: 'Circulation', example: 'Das Verkehrsschild beachten.' },
    { article: 'der', german: 'Zebrastreifen', english: 'Crosswalk', plural: 'Zebrastreifen', level: LanguageLevel.A2, subTheme: 'Circulation', example: 'Über den Zebrastreifen gehen.' },
    { article: 'der', german: 'Verkehr', english: 'Traffic', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Circulation', example: 'Viel Verkehr in der Stadt.' },
    { article: 'der', german: 'Stau', english: 'Traffic jam', plural: 'Staus', level: LanguageLevel.A2, subTheme: 'Circulation', example: 'Im Stau stehen.' },

    // === LOGEMENT ===
    { article: 'das', german: 'Haus', english: 'House', plural: 'Häuser', level: LanguageLevel.A1, subTheme: 'Logement', example: 'Ein schönes Haus.' },
    { article: 'die', german: 'Wohnung', english: 'Apartment', plural: 'Wohnungen', level: LanguageLevel.A1, subTheme: 'Logement', example: 'Eine Wohnung mieten.' },
    { article: 'das', german: 'Hochhaus', english: 'High-rise building', plural: 'Hochhäuser', level: LanguageLevel.A2, subTheme: 'Logement', example: 'Ein Hochhaus in der Stadt.' },
    { article: 'der', german: 'Wolkenkratzer', english: 'Skyscraper', plural: 'Wolkenkratzer', level: LanguageLevel.A2, subTheme: 'Logement', example: 'Ein moderner Wolkenkratzer.' },
    { article: 'der', german: 'Turm', english: 'Tower', plural: 'Türme', level: LanguageLevel.A2, subTheme: 'Logement', example: 'Ein hoher Turm.' },

    // === VERBES / DIRECTIONS ===
    { article: '', german: 'gehen', english: 'to go (walk)', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Directions', example: 'Zu Fuß gehen.' },
    { article: '', german: 'fahren', english: 'to go (drive/ride)', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Directions', example: 'Mit dem Bus fahren.' },
    { article: '', german: 'abbiegen', english: 'to turn', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Directions', example: 'Links abbiegen.' },
    { article: '', german: 'geradeaus', english: 'straight ahead', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Directions', example: 'Gehen Sie geradeaus.' },
    { article: '', german: 'links', english: 'left', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Directions', example: 'Biegen Sie links ab.' },
    { article: '', german: 'rechts', english: 'right', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Directions', example: 'Biegen Sie rechts ab.' },
    { article: '', german: 'überqueren', english: 'to cross', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Directions', example: 'Die Straße überqueren.' },
    { article: '', german: 'vorbei', english: 'past', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Directions', example: 'An der Kirche vorbei.' },
    { article: '', german: 'gegenüber', english: 'opposite', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Directions', example: 'Gegenüber dem Bahnhof.' },
    { article: '', german: 'neben', english: 'next to', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Directions', example: 'Neben der Bank.' },
    { article: '', german: 'zwischen', english: 'between', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Directions', example: 'Zwischen der Post und dem Café.' }
  ],
  phrases: [
    // Demander son chemin
    { german: 'Entschuldigung, wie komme ich zum Bahnhof?', english: 'Excuse me, how do I get to the train station?', context: 'Directions' },
    { german: 'Wo ist die nächste U-Bahn-Station?', english: 'Where is the nearest subway station?', context: 'Directions' },
    { german: 'Ist es weit von hier?', english: 'Is it far from here?', context: 'Directions' },
    { german: 'Kann ich zu Fuß gehen?', english: 'Can I walk there?', context: 'Directions' },
    { german: 'Wie lange dauert es?', english: 'How long does it take?', context: 'Directions' },

    // Donner des directions
    { german: 'Gehen Sie geradeaus und dann links.', english: 'Go straight ahead and then left.', context: 'Directions' },
    { german: 'Es ist die zweite Straße rechts.', english: 'It is the second street on the right.', context: 'Directions' },
    { german: 'Überqueren Sie den Platz.', english: 'Cross the square.', context: 'Directions' },
    { german: 'Es ist gegenüber dem Rathaus.', english: 'It is opposite the town hall.', context: 'Directions' },
    { german: 'Sie sehen es auf der linken Seite.', english: 'You will see it on the left side.', context: 'Directions' },

    // Services
    { german: 'Gibt es hier in der Nähe eine Bank?', english: 'Is there a bank nearby?', context: 'Services' },
    { german: 'Wo ist die nächste Apotheke?', english: 'Where is the nearest pharmacy?', context: 'Services' },
    { german: 'Ich suche einen Supermarkt.', english: 'I am looking for a supermarket.', context: 'Services' },
    { german: 'Gibt es hier ein Restaurant?', english: 'Is there a restaurant here?', context: 'Services' },

    // Transports
    { german: 'Wo kann ich ein Taxi bekommen?', english: 'Where can I get a taxi?', context: 'Transports' },
    { german: 'Welcher Bus fährt ins Zentrum?', english: 'Which bus goes to the center?', context: 'Transports' },
    { german: 'Wo kann ich parken?', english: 'Where can I park?', context: 'Transports' }
  ]
};
