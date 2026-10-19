
import { ThemeContent, LanguageLevel } from '../../types';

export const villeContent: ThemeContent = {
  words: [
    // === GÉNÉRAL ===
    { article: 'die', german: 'Stadt', english: 'City', french: 'Ville', plural: 'Städte', level: LanguageLevel.A1, subTheme: 'Général', example: 'Ich wohne in einer Stadt.' },
    { article: 'das', german: 'Dorf', english: 'Village', french: 'Village', plural: 'Dörfer', level: LanguageLevel.A1, subTheme: 'Général', example: 'Ein kleines Dorf auf dem Land.' },
    { article: 'die', german: 'Großstadt', english: 'Big city / Metropolis', french: 'Grande ville', plural: 'Großstädte', level: LanguageLevel.A2, subTheme: 'Général', example: 'Berlin ist eine Großstadt.' },
    { article: 'die', german: 'Hauptstadt', english: 'Capital', french: 'Capitale', plural: 'Hauptstädte', level: LanguageLevel.A1, subTheme: 'Général', example: 'Berlin ist die Hauptstadt von Deutschland.' },
    { article: 'das', german: 'Zentrum', english: 'Center / City center', french: 'Centre-ville', plural: 'Zentren', level: LanguageLevel.A1, subTheme: 'Général', example: 'Das Zentrum ist sehr belebt.' },
    { article: 'die', german: 'Altstadt', english: 'Old town', french: 'Vieille ville', plural: 'Altstädte', level: LanguageLevel.A2, subTheme: 'Général', example: 'Die Altstadt ist sehr schön.' },
    { article: 'das', german: 'Viertel', english: 'Quarter / District', french: 'Quartier', plural: 'Viertel', level: LanguageLevel.A2, subTheme: 'Général', example: 'Ein ruhiges Viertel.' },
    { article: 'der', german: 'Stadtrand', english: 'Outskirts', french: 'Périphérie', plural: 'Stadtränder', level: LanguageLevel.B1, subTheme: 'Général', example: 'Am Stadtrand wohnen.' },
    { article: 'der', german: 'Vorort', english: 'Suburb', french: 'Banlieue', plural: 'Vororte', level: LanguageLevel.A2, subTheme: 'Général', example: 'Ein Vorort von München.' },
    { article: 'der', german: 'Einwohner', english: 'Inhabitant', french: 'Habitant', plural: 'Einwohner', level: LanguageLevel.A2, subTheme: 'Général', example: 'Die Stadt hat 500.000 Einwohner.' },

    // === RUES / PLACES ===
    { article: 'die', german: 'Straße', english: 'Street', french: 'Rue', plural: 'Straßen', level: LanguageLevel.A1, subTheme: 'Rues', example: 'In dieser Straße gibt es viele Läden.' },
    { article: 'die', german: 'Hauptstraße', english: 'Main street', french: 'Rue principale', plural: 'Hauptstraßen', level: LanguageLevel.A1, subTheme: 'Rues', example: 'Die Hauptstraße ist immer voll.' },
    { article: 'die', german: 'Gasse', english: 'Alley / Lane', french: 'Ruelle', plural: 'Gassen', level: LanguageLevel.A2, subTheme: 'Rues', example: 'Eine enge Gasse.' },
    { article: 'die', german: 'Allee', english: 'Avenue / Boulevard', french: 'Avenue', plural: 'Alleen', level: LanguageLevel.A2, subTheme: 'Rues', example: 'Eine Allee mit Bäumen.' },
    { article: 'der', german: 'Platz', english: 'Square', french: 'Place', plural: 'Plätze', level: LanguageLevel.A1, subTheme: 'Rues', example: 'Ein großer Platz.' },
    { article: 'der', german: 'Marktplatz', english: 'Market square', french: 'Place du marché', plural: 'Marktplätze', level: LanguageLevel.A1, subTheme: 'Rues', example: 'Der Marktplatz ist im Zentrum.' },
    { article: 'der', german: 'Bürgersteig', english: 'Sidewalk', french: 'Trottoir', plural: 'Bürgersteige', level: LanguageLevel.A2, subTheme: 'Rues', example: 'Auf dem Bürgersteig gehen.' },
    { article: 'der', german: 'Gehweg', english: 'Sidewalk / Footpath', french: 'Trottoir / Chemin piéton', plural: 'Gehwege', level: LanguageLevel.A2, subTheme: 'Rues', example: 'Der Gehweg ist breit.' },
    { article: 'die', german: 'Kreuzung', english: 'Intersection / Crossroads', french: 'Carrefour', plural: 'Kreuzungen', level: LanguageLevel.A2, subTheme: 'Rues', example: 'An der Kreuzung links abbiegen.' },
    { article: 'die', german: 'Ecke', english: 'Corner', french: 'Coin', plural: 'Ecken', level: LanguageLevel.A1, subTheme: 'Rues', example: 'An der Ecke ist eine Bäckerei.' },
    { article: 'die', german: 'Brücke', english: 'Bridge', french: 'Pont', plural: 'Brücken', level: LanguageLevel.A1, subTheme: 'Rues', example: 'Eine alte Brücke über den Fluss.' },
    { article: 'der', german: 'Tunnel', english: 'Tunnel', french: 'Tunnel', plural: 'Tunnel', level: LanguageLevel.A2, subTheme: 'Rues', example: 'Ein Tunnel unter der Stadt.' },
    { article: 'die', german: 'Fußgängerzone', english: 'Pedestrian zone', french: 'Zone piétonne', plural: 'Fußgängerzonen', level: LanguageLevel.A2, subTheme: 'Rues', example: 'Shoppen in der Fußgängerzone.' },

    // === BÂTIMENTS PUBLICS ===
    { article: 'das', german: 'Gebäude', english: 'Building', french: 'Bâtiment', plural: 'Gebäude', level: LanguageLevel.A1, subTheme: 'Bâtiments', example: 'Ein hohes Gebäude.' },
    { article: 'das', german: 'Rathaus', english: 'Town hall', french: 'Mairie', plural: 'Rathäuser', level: LanguageLevel.A1, subTheme: 'Bâtiments', example: 'Das Rathaus ist am Marktplatz.' },
    { article: 'die', german: 'Kirche', english: 'Church', french: 'Église', plural: 'Kirchen', level: LanguageLevel.A1, subTheme: 'Bâtiments', example: 'Eine alte Kirche.' },
    { article: 'der', german: 'Dom', english: 'Cathedral', french: 'Cathédrale', plural: 'Dome', level: LanguageLevel.A2, subTheme: 'Bâtiments', example: 'Der Kölner Dom.' },
    { article: 'die', german: 'Moschee', english: 'Mosque', french: 'Mosquée', plural: 'Moscheen', level: LanguageLevel.A2, subTheme: 'Bâtiments', example: 'Eine Moschee in der Stadt.' },
    { article: 'die', german: 'Synagoge', english: 'Synagogue', french: 'Synagogue', plural: 'Synagogen', level: LanguageLevel.A2, subTheme: 'Bâtiments', example: 'Die alte Synagoge.' },
    { article: 'das', german: 'Museum', english: 'Museum', french: 'Musée', plural: 'Museen', level: LanguageLevel.A1, subTheme: 'Bâtiments', example: 'Das Museum ist montags geschlossen.' },
    { article: 'die', german: 'Bibliothek', english: 'Library', french: 'Bibliothèque', plural: 'Bibliotheken', level: LanguageLevel.A1, subTheme: 'Bâtiments', example: 'Bücher in der Bibliothek ausleihen.' },
    { article: 'das', german: 'Theater', english: 'Theater', french: 'Théâtre', plural: 'Theater', level: LanguageLevel.A1, subTheme: 'Bâtiments', example: 'Ins Theater gehen.' },
    { article: 'die', german: 'Oper', english: 'Opera', french: 'Opéra', plural: 'Opern', level: LanguageLevel.A2, subTheme: 'Bâtiments', example: 'Eine Oper besuchen.' },
    { article: 'das', german: 'Kino', english: 'Cinema', french: 'Cinéma', plural: 'Kinos', level: LanguageLevel.A1, subTheme: 'Bâtiments', example: 'Ins Kino gehen.' },
    { article: 'das', german: 'Stadion', english: 'Stadium', french: 'Stade', plural: 'Stadien', level: LanguageLevel.A2, subTheme: 'Bâtiments', example: 'Ein Fußballspiel im Stadion.' },
    { article: 'das', german: 'Schwimmbad', english: 'Swimming pool', french: 'Piscine', plural: 'Schwimmbäder', level: LanguageLevel.A1, subTheme: 'Bâtiments', example: 'Ins Schwimmbad gehen.' },
    { article: 'die', german: 'Sporthalle', english: 'Sports hall / Gym', french: 'Salle de sport', plural: 'Sporthallen', level: LanguageLevel.A2, subTheme: 'Bâtiments', example: 'Sport in der Sporthalle.' },
    { article: 'das', german: 'Krankenhaus', english: 'Hospital', french: 'Hôpital', plural: 'Krankenhäuser', level: LanguageLevel.A1, subTheme: 'Bâtiments', example: 'Im Krankenhaus behandelt werden.' },
    { article: 'die', german: 'Schule', english: 'School', french: 'École', plural: 'Schulen', level: LanguageLevel.A1, subTheme: 'Bâtiments', example: 'Die Schule beginnt um 8 Uhr.' },
    { article: 'die', german: 'Universität', english: 'University', french: 'Université', plural: 'Universitäten', level: LanguageLevel.A1, subTheme: 'Bâtiments', example: 'An der Universität studieren.' },
    { article: 'das', german: 'Gefängnis', english: 'Prison', french: 'Prison', plural: 'Gefängnisse', level: LanguageLevel.B1, subTheme: 'Bâtiments', example: 'Das Gefängnis am Stadtrand.' },
    { article: 'das', german: 'Gericht', english: 'Court', french: 'Tribunal', plural: 'Gerichte', level: LanguageLevel.B1, subTheme: 'Bâtiments', example: 'Vor Gericht erscheinen.' },

    // === MAGASINS ===
    { article: 'das', german: 'Geschäft', english: 'Shop / Store', french: 'Magasin', plural: 'Geschäfte', level: LanguageLevel.A1, subTheme: 'Magasins', example: 'Die Geschäfte schließen um 20 Uhr.' },
    { article: 'der', german: 'Laden', english: 'Shop / Store', french: 'Boutique', plural: 'Läden', level: LanguageLevel.A1, subTheme: 'Magasins', example: 'Ein kleiner Laden.' },
    { article: 'das', german: 'Kaufhaus', english: 'Department store', french: 'Grand magasin', plural: 'Kaufhäuser', level: LanguageLevel.A2, subTheme: 'Magasins', example: 'Shoppen im Kaufhaus.' },
    { article: 'das', german: 'Einkaufszentrum', english: 'Shopping center / Mall', french: 'Centre commercial', plural: 'Einkaufszentren', level: LanguageLevel.A2, subTheme: 'Magasins', example: 'Im Einkaufszentrum einkaufen.' },
    { article: 'der', german: 'Supermarkt', english: 'Supermarket', french: 'Supermarché', plural: 'Supermärkte', level: LanguageLevel.A1, subTheme: 'Magasins', example: 'Im Supermarkt einkaufen.' },
    { article: 'der', german: 'Markt', english: 'Market', french: 'Marché', plural: 'Märkte', level: LanguageLevel.A1, subTheme: 'Magasins', example: 'Auf dem Markt Gemüse kaufen.' },
    { article: 'die', german: 'Bäckerei', english: 'Bakery', french: 'Boulangerie', plural: 'Bäckereien', level: LanguageLevel.A1, subTheme: 'Magasins', example: 'Frische Brötchen aus der Bäckerei.' },
    { article: 'die', german: 'Metzgerei', english: 'Butcher shop', french: 'Boucherie', plural: 'Metzgereien', level: LanguageLevel.A1, subTheme: 'Magasins', example: 'Fleisch in der Metzgerei kaufen.' },
    { article: 'die', german: 'Konditorei', english: 'Pastry shop / Confectionery', french: 'Pâtisserie', plural: 'Konditorei', level: LanguageLevel.A2, subTheme: 'Magasins', example: 'Kuchen aus der Konditorei.' },
    { article: 'die', german: 'Drogerie', english: 'Drugstore', french: 'Droguerie', plural: 'Drogerien', level: LanguageLevel.A2, subTheme: 'Magasins', example: 'Kosmetik in der Drogerie.' },
    { article: 'die', german: 'Buchhandlung', english: 'Bookstore', french: 'Librairie', plural: 'Buchhandlungen', level: LanguageLevel.A2, subTheme: 'Magasins', example: 'Ein Buch in der Buchhandlung kaufen.' },
    { article: 'der', german: 'Blumenladen', english: 'Flower shop / Florist', french: 'Fleuriste', plural: 'Blumenläden', level: LanguageLevel.A2, subTheme: 'Magasins', example: 'Blumen im Blumenladen kaufen.' },
    { article: 'das', german: 'Schuhgeschäft', english: 'Shoe store', french: 'Magasin de chaussures', plural: 'Schuhgeschäfte', level: LanguageLevel.A2, subTheme: 'Magasins', example: 'Schuhe im Schuhgeschäft kaufen.' },
    { article: 'der', german: 'Friseursalon', english: 'Hair salon', french: 'Salon de coiffure', plural: 'Friseursalons', level: LanguageLevel.A2, subTheme: 'Magasins', example: 'Zum Friseur gehen.' },
    { article: 'der', german: 'Kiosk', english: 'Kiosk / Newsstand', french: 'Kiosque', plural: 'Kioske', level: LanguageLevel.A2, subTheme: 'Magasins', example: 'Eine Zeitung am Kiosk kaufen.' },

    // === SERVICES ===
    { article: 'die', german: 'Apotheke', english: 'Pharmacy', french: 'Pharmacie', plural: 'Apotheken', level: LanguageLevel.A1, subTheme: 'Services', example: 'Medikamente in der Apotheke kaufen.' },
    { article: 'die', german: 'Bank', english: 'Bank', french: 'Banque', plural: 'Banken', level: LanguageLevel.A1, subTheme: 'Services', example: 'Geld auf die Bank bringen.' },
    { article: 'der', german: 'Geldautomat', english: 'ATM', french: 'Distributeur automatique', plural: 'Geldautomaten', level: LanguageLevel.A1, subTheme: 'Services', example: 'Geld am Geldautomaten abheben.' },
    { article: 'die', german: 'Post', english: 'Post office', french: 'Bureau de poste', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Services', example: 'Einen Brief zur Post bringen.' },
    { article: 'die', german: 'Polizei', english: 'Police', french: 'Police', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Services', example: 'Rufen Sie die Polizei!' },
    { article: 'die', german: 'Polizeiwache', english: 'Police station', french: 'Commissariat', plural: 'Polizeiwachen', level: LanguageLevel.A2, subTheme: 'Services', example: 'Zur Polizeiwache gehen.' },
    { article: 'die', german: 'Feuerwehr', english: 'Fire department', french: 'Pompiers', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Services', example: 'Die Feuerwehr rufen.' },
    { article: 'das', german: 'Einwohnermeldeamt', english: 'Registration office', french: 'Bureau de déclaration de domicile', plural: 'Einwohnermeldeämter', level: LanguageLevel.B1, subTheme: 'Services', example: 'Sich beim Einwohnermeldeamt anmelden.' },
    { article: 'das', german: 'Arbeitsamt', english: 'Employment agency', french: 'Agence pour l\'emploi', plural: 'Arbeitsämter', level: LanguageLevel.B1, subTheme: 'Services', example: 'Sich beim Arbeitsamt melden.' },
    { article: 'die', german: 'Tankstelle', english: 'Gas station', french: 'Station-service', plural: 'Tankstellen', level: LanguageLevel.A1, subTheme: 'Services', example: 'An der Tankstelle tanken.' },
    { article: 'die', german: 'Werkstatt', english: 'Workshop / Garage', french: 'Atelier / Garage', plural: 'Werkstätten', level: LanguageLevel.A2, subTheme: 'Services', example: 'Das Auto in die Werkstatt bringen.' },
    { article: 'die', german: 'Reinigung', english: 'Dry cleaner', french: 'Pressing', plural: 'Reinigungen', level: LanguageLevel.A2, subTheme: 'Services', example: 'Kleidung zur Reinigung bringen.' },

    // === RESTAURATION ===
    { article: 'das', german: 'Restaurant', english: 'Restaurant', french: 'Restaurant', plural: 'Restaurants', level: LanguageLevel.A1, subTheme: 'Restauration', example: 'Im Restaurant essen.' },
    { article: 'das', german: 'Café', english: 'Café', french: 'Café', plural: 'Cafés', level: LanguageLevel.A1, subTheme: 'Restauration', example: 'Ins Café gehen.' },
    { article: 'die', german: 'Bar', english: 'Bar', french: 'Bar', plural: 'Bars', level: LanguageLevel.A1, subTheme: 'Restauration', example: 'In eine Bar gehen.' },
    { article: 'die', german: 'Kneipe', english: 'Pub', french: 'Bistrot', plural: 'Kneipen', level: LanguageLevel.A2, subTheme: 'Restauration', example: 'In der Kneipe ein Bier trinken.' },
    { article: 'der', german: 'Biergarten', english: 'Beer garden', french: 'Jardin à bière', plural: 'Biergärten', level: LanguageLevel.A2, subTheme: 'Restauration', example: 'Im Biergarten sitzen.' },
    { article: 'die', german: 'Imbissbude', english: 'Snack stand / Snack bar', french: 'Stand de restauration rapide', plural: 'Imbissbuden', level: LanguageLevel.A2, subTheme: 'Restauration', example: 'Eine Currywurst an der Imbissbude.' },
    { article: 'die', german: 'Eisdiele', english: 'Ice cream parlor', french: 'Glacier', plural: 'Eisdielen', level: LanguageLevel.A2, subTheme: 'Restauration', example: 'Eis in der Eisdiele kaufen.' },

    // === ESPACES VERTS ===
    { article: 'der', german: 'Park', english: 'Park', french: 'Parc', plural: 'Parks', level: LanguageLevel.A1, subTheme: 'Espaces verts', example: 'Spazieren im Park.' },
    { article: 'der', german: 'Garten', english: 'Garden', french: 'Jardin', plural: 'Gärten', level: LanguageLevel.A1, subTheme: 'Espaces verts', example: 'Ein schöner Garten.' },
    { article: 'der', german: 'Spielplatz', english: 'Playground', french: 'Aire de jeux', plural: 'Spielplätze', level: LanguageLevel.A1, subTheme: 'Espaces verts', example: 'Kinder auf dem Spielplatz.' },
    { article: 'der', german: 'Friedhof', english: 'Cemetery', french: 'Cimetière', plural: 'Friedhöfe', level: LanguageLevel.A2, subTheme: 'Espaces verts', example: 'Ein alter Friedhof.' },
    { article: 'der', german: 'Zoo', english: 'Zoo', french: 'Zoo', plural: 'Zoos', level: LanguageLevel.A1, subTheme: 'Espaces verts', example: 'In den Zoo gehen.' },
    { article: 'der', german: 'Brunnen', english: 'Fountain', french: 'Fontaine', plural: 'Brunnen', level: LanguageLevel.A2, subTheme: 'Espaces verts', example: 'Ein alter Brunnen auf dem Platz.' },

    // === TRANSPORTS ===
    { article: 'der', german: 'Bahnhof', english: 'Train station', french: 'Gare', plural: 'Bahnhöfe', level: LanguageLevel.A1, subTheme: 'Transports', example: 'Am Bahnhof ankommen.' },
    { article: 'der', german: 'Busbahnhof', english: 'Bus station', french: 'Gare routière', plural: 'Busbahnhöfe', level: LanguageLevel.A2, subTheme: 'Transports', example: 'Der Busbahnhof ist im Zentrum.' },
    { article: 'der', german: 'Flughafen', english: 'Airport', french: 'Aéroport', plural: 'Flughäfen', level: LanguageLevel.A1, subTheme: 'Transports', example: 'Zum Flughafen fahren.' },
    { article: 'die', german: 'Haltestelle', english: 'Stop', french: 'Arrêt', plural: 'Haltestellen', level: LanguageLevel.A1, subTheme: 'Transports', example: 'An der Haltestelle warten.' },
    { article: 'die', german: 'U-Bahn-Station', english: 'Subway station', french: 'Station de métro', plural: 'U-Bahn-Stationen', level: LanguageLevel.A1, subTheme: 'Transports', example: 'Die U-Bahn-Station ist dort.' },
    { article: 'der', german: 'Parkplatz', english: 'Parking lot', french: 'Parking', plural: 'Parkplätze', level: LanguageLevel.A1, subTheme: 'Transports', example: 'Einen Parkplatz suchen.' },
    { article: 'das', german: 'Parkhaus', english: 'Parking garage', french: 'Parking couvert', plural: 'Parkhäuser', level: LanguageLevel.A2, subTheme: 'Transports', example: 'Im Parkhaus parken.' },
    { article: 'der', german: 'Fahrradweg', english: 'Bike lane', french: 'Piste cyclable', plural: 'Fahrradwege', level: LanguageLevel.A2, subTheme: 'Transports', example: 'Auf dem Fahrradweg fahren.' },

    // === CIRCULATION ===
    { article: 'die', german: 'Ampel', english: 'Traffic light', french: 'Feu tricolore', plural: 'Ampeln', level: LanguageLevel.A1, subTheme: 'Circulation', example: 'Bei Rot an der Ampel warten.' },
    { article: 'das', german: 'Verkehrsschild', english: 'Traffic sign', french: 'Panneau de signalisation', plural: 'Verkehrsschilder', level: LanguageLevel.A2, subTheme: 'Circulation', example: 'Das Verkehrsschild beachten.' },
    { article: 'der', german: 'Zebrastreifen', english: 'Crosswalk', french: 'Passage piéton', plural: 'Zebrastreifen', level: LanguageLevel.A2, subTheme: 'Circulation', example: 'Über den Zebrastreifen gehen.' },
    { article: 'der', german: 'Verkehr', english: 'Traffic', french: 'Circulation', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Circulation', example: 'Viel Verkehr in der Stadt.' },
    { article: 'der', german: 'Stau', english: 'Traffic jam', french: 'Embouteillage', plural: 'Staus', level: LanguageLevel.A2, subTheme: 'Circulation', example: 'Im Stau stehen.' },

    // === LOGEMENT ===
    { article: 'das', german: 'Haus', english: 'House', french: 'Maison', plural: 'Häuser', level: LanguageLevel.A1, subTheme: 'Logement', example: 'Ein schönes Haus.' },
    { article: 'die', german: 'Wohnung', english: 'Apartment', french: 'Appartement', plural: 'Wohnungen', level: LanguageLevel.A1, subTheme: 'Logement', example: 'Eine Wohnung mieten.' },
    { article: 'das', german: 'Hochhaus', english: 'High-rise building', french: 'Tour d\'habitation', plural: 'Hochhäuser', level: LanguageLevel.A2, subTheme: 'Logement', example: 'Ein Hochhaus in der Stadt.' },
    { article: 'der', german: 'Wolkenkratzer', english: 'Skyscraper', french: 'Gratte-ciel', plural: 'Wolkenkratzer', level: LanguageLevel.A2, subTheme: 'Logement', example: 'Ein moderner Wolkenkratzer.' },
    { article: 'der', german: 'Turm', english: 'Tower', french: 'Tour', plural: 'Türme', level: LanguageLevel.A2, subTheme: 'Logement', example: 'Ein hoher Turm.' },

    // === VERBES / DIRECTIONS ===
    { article: '', german: 'gehen', english: 'to go (walk)', french: 'aller (à pied)', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Directions', example: 'Zu Fuß gehen.' },
    { article: '', german: 'fahren', english: 'to go (drive/ride)', french: 'aller (en véhicule)', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Directions', example: 'Mit dem Bus fahren.' },
    { article: '', german: 'abbiegen', english: 'to turn', french: 'tourner', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Directions', example: 'Links abbiegen.' },
    { article: '', german: 'geradeaus', english: 'straight ahead', french: 'tout droit', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Directions', example: 'Gehen Sie geradeaus.' },
    { article: '', german: 'links', english: 'left', french: 'à gauche', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Directions', example: 'Biegen Sie links ab.' },
    { article: '', german: 'rechts', english: 'right', french: 'à droite', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Directions', example: 'Biegen Sie rechts ab.' },
    { article: '', german: 'überqueren', english: 'to cross', french: 'traverser', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Directions', example: 'Die Straße überqueren.' },
    { article: '', german: 'vorbei', english: 'past', french: 'devant / au-delà', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Directions', example: 'An der Kirche vorbei.' },
    { article: '', german: 'gegenüber', english: 'opposite', french: 'en face de', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Directions', example: 'Gegenüber dem Bahnhof.' },
    { article: '', german: 'neben', english: 'next to', french: 'à côté de', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Directions', example: 'Neben der Bank.' },
    { article: '', german: 'zwischen', english: 'between', french: 'entre', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Directions', example: 'Zwischen der Post und dem Café.' }
  ],
  phrases: [
    // Demander son chemin
    { german: 'Entschuldigung, wie komme ich zum Bahnhof?', english: 'Excuse me, how do I get to the train station?', french: 'Excusez-moi, comment aller à la gare ?', italian: 'Scusi, come arrivo alla stazione?', context: 'Directions' },
    { german: 'Wo ist die nächste U-Bahn-Station?', english: 'Where is the nearest subway station?', french: 'Où est la station de métro la plus proche ?', italian: 'Dov\'è la stazione della metro più vicina?', context: 'Directions' },
    { german: 'Ist es weit von hier?', english: 'Is it far from here?', french: 'Est-ce loin d\'ici ?', italian: 'È lontano da qui?', context: 'Directions' },
    { german: 'Kann ich zu Fuß gehen?', english: 'Can I walk there?', french: 'Puis-je y aller à pied ?', italian: 'Posso andarci a piedi?', context: 'Directions' },
    { german: 'Wie lange dauert es?', english: 'How long does it take?', french: 'Combien de temps faut-il ?', italian: 'Quanto ci vuole?', context: 'Directions' },

    // Donner des directions
    { german: 'Gehen Sie geradeaus und dann links.', english: 'Go straight ahead and then left.', french: 'Allez tout droit puis à gauche.', italian: 'Vada dritto e poi a sinistra.', context: 'Directions' },
    { german: 'Es ist die zweite Straße rechts.', english: 'It is the second street on the right.', french: 'C\'est la deuxième rue à droite.', italian: 'È la seconda strada a destra.', context: 'Directions' },
    { german: 'Überqueren Sie den Platz.', english: 'Cross the square.', french: 'Traversez la place.', italian: 'Attraversi la piazza.', context: 'Directions' },
    { german: 'Es ist gegenüber dem Rathaus.', english: 'It is opposite the town hall.', french: 'C\'est en face de la mairie.', italian: 'È di fronte al municipio.', context: 'Directions' },
    { german: 'Sie sehen es auf der linken Seite.', english: 'You will see it on the left side.', french: 'Vous le verrez sur votre gauche.', italian: 'Lo vedrà sulla sinistra.', context: 'Directions' },

    // Services
    { german: 'Gibt es hier in der Nähe eine Bank?', english: 'Is there a bank nearby?', french: 'Y a-t-il une banque dans les environs ?', italian: 'C\'è una banca qui vicino?', context: 'Services' },
    { german: 'Wo ist die nächste Apotheke?', english: 'Where is the nearest pharmacy?', french: 'Où est la pharmacie la plus proche ?', italian: 'Dov\'è la farmacia più vicina?', context: 'Services' },
    { german: 'Ich suche einen Supermarkt.', english: 'I am looking for a supermarket.', french: 'Je cherche un supermarché.', italian: 'Cerco un supermercato.', context: 'Services' },
    { german: 'Gibt es hier ein Restaurant?', english: 'Is there a restaurant here?', french: 'Y a-t-il un restaurant ici ?', italian: 'C\'è un ristorante qui?', context: 'Services' },

    // Transports
    { german: 'Wo kann ich ein Taxi bekommen?', english: 'Where can I get a taxi?', french: 'Où puis-je trouver un taxi ?', italian: 'Dove posso trovare un taxi?', context: 'Transports' },
    { german: 'Welcher Bus fährt ins Zentrum?', english: 'Which bus goes to the center?', french: 'Quel bus va au centre-ville ?', italian: 'Quale autobus va in centro?', context: 'Transports' },
    { german: 'Wo kann ich parken?', english: 'Where can I park?', french: 'Où puis-je me garer ?', italian: 'Dove posso parcheggiare?', context: 'Transports' }
  ]
};
