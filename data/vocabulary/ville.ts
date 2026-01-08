
import { ThemeContent, LanguageLevel } from '../../types.ts';

export const villeContent: ThemeContent = {
  words: [
    // === GÉNÉRAL ===
    { article: 'die', german: 'Stadt', french: 'Ville', plural: 'Städte', level: LanguageLevel.A1, subTheme: 'Général', example: 'Ich wohne in einer Stadt.' },
    { article: 'das', german: 'Dorf', french: 'Village', plural: 'Dörfer', level: LanguageLevel.A1, subTheme: 'Général', example: 'Ein kleines Dorf auf dem Land.' },
    { article: 'die', german: 'Großstadt', french: 'Grande ville', plural: 'Großstädte', level: LanguageLevel.A2, subTheme: 'Général', example: 'Berlin ist eine Großstadt.' },
    { article: 'die', german: 'Hauptstadt', french: 'Capitale', plural: 'Hauptstädte', level: LanguageLevel.A1, subTheme: 'Général', example: 'Berlin ist die Hauptstadt von Deutschland.' },
    { article: 'das', german: 'Zentrum', french: 'Centre-ville', plural: 'Zentren', level: LanguageLevel.A1, subTheme: 'Général', example: 'Das Zentrum ist sehr belebt.' },
    { article: 'die', german: 'Altstadt', french: 'Vieille ville', plural: 'Altstädte', level: LanguageLevel.A2, subTheme: 'Général', example: 'Die Altstadt ist sehr schön.' },
    { article: 'das', german: 'Viertel', french: 'Quartier', plural: 'Viertel', level: LanguageLevel.A2, subTheme: 'Général', example: 'Ein ruhiges Viertel.' },
    { article: 'der', german: 'Stadtrand', french: 'Périphérie', plural: 'Stadtränder', level: LanguageLevel.B1, subTheme: 'Général', example: 'Am Stadtrand wohnen.' },
    { article: 'der', german: 'Vorort', french: 'Banlieue', plural: 'Vororte', level: LanguageLevel.A2, subTheme: 'Général', example: 'Ein Vorort von München.' },
    { article: 'der', german: 'Einwohner', french: 'Habitant', plural: 'Einwohner', level: LanguageLevel.A2, subTheme: 'Général', example: 'Die Stadt hat 500.000 Einwohner.' },
    
    // === RUES / PLACES ===
    { article: 'die', german: 'Straße', french: 'Rue', plural: 'Straßen', level: LanguageLevel.A1, subTheme: 'Rues', example: 'In dieser Straße gibt es viele Läden.' },
    { article: 'die', german: 'Hauptstraße', french: 'Rue principale', plural: 'Hauptstraßen', level: LanguageLevel.A1, subTheme: 'Rues', example: 'Die Hauptstraße ist immer voll.' },
    { article: 'die', german: 'Gasse', french: 'Ruelle', plural: 'Gassen', level: LanguageLevel.A2, subTheme: 'Rues', example: 'Eine enge Gasse.' },
    { article: 'die', german: 'Allee', french: 'Allée', plural: 'Alleen', level: LanguageLevel.A2, subTheme: 'Rues', example: 'Eine Allee mit Bäumen.' },
    { article: 'der', german: 'Platz', french: 'Place', plural: 'Plätze', level: LanguageLevel.A1, subTheme: 'Rues', example: 'Ein großer Platz.' },
    { article: 'der', german: 'Marktplatz', french: 'Place du marché', plural: 'Marktplätze', level: LanguageLevel.A1, subTheme: 'Rues', example: 'Der Marktplatz ist im Zentrum.' },
    { article: 'der', german: 'Bürgersteig', french: 'Trottoir', plural: 'Bürgersteige', level: LanguageLevel.A2, subTheme: 'Rues', example: 'Auf dem Bürgersteig gehen.' },
    { article: 'der', german: 'Gehweg', french: 'Trottoir', plural: 'Gehwege', level: LanguageLevel.A2, subTheme: 'Rues', example: 'Der Gehweg ist breit.' },
    { article: 'die', german: 'Kreuzung', french: 'Carrefour', plural: 'Kreuzungen', level: LanguageLevel.A2, subTheme: 'Rues', example: 'An der Kreuzung links abbiegen.' },
    { article: 'die', german: 'Ecke', french: 'Coin', plural: 'Ecken', level: LanguageLevel.A1, subTheme: 'Rues', example: 'An der Ecke ist eine Bäckerei.' },
    { article: 'die', german: 'Brücke', french: 'Pont', plural: 'Brücken', level: LanguageLevel.A1, subTheme: 'Rues', example: 'Eine alte Brücke über den Fluss.' },
    { article: 'der', german: 'Tunnel', french: 'Tunnel', plural: 'Tunnel', level: LanguageLevel.A2, subTheme: 'Rues', example: 'Ein Tunnel unter der Stadt.' },
    { article: 'die', german: 'Fußgängerzone', french: 'Zone piétonne', plural: 'Fußgängerzonen', level: LanguageLevel.A2, subTheme: 'Rues', example: 'Shoppen in der Fußgängerzone.' },
    
    // === BÂTIMENTS PUBLICS ===
    { article: 'das', german: 'Gebäude', french: 'Bâtiment', plural: 'Gebäude', level: LanguageLevel.A1, subTheme: 'Bâtiments', example: 'Ein hohes Gebäude.' },
    { article: 'das', german: 'Rathaus', french: 'Mairie', plural: 'Rathäuser', level: LanguageLevel.A1, subTheme: 'Bâtiments', example: 'Das Rathaus ist am Marktplatz.' },
    { article: 'die', german: 'Kirche', french: 'Église', plural: 'Kirchen', level: LanguageLevel.A1, subTheme: 'Bâtiments', example: 'Eine alte Kirche.' },
    { article: 'der', german: 'Dom', french: 'Cathédrale', plural: 'Dome', level: LanguageLevel.A2, subTheme: 'Bâtiments', example: 'Der Kölner Dom.' },
    { article: 'die', german: 'Moschee', french: 'Mosquée', plural: 'Moscheen', level: LanguageLevel.A2, subTheme: 'Bâtiments', example: 'Eine Moschee in der Stadt.' },
    { article: 'die', german: 'Synagoge', french: 'Synagogue', plural: 'Synagogen', level: LanguageLevel.A2, subTheme: 'Bâtiments', example: 'Die alte Synagoge.' },
    { article: 'das', german: 'Museum', french: 'Musée', plural: 'Museen', level: LanguageLevel.A1, subTheme: 'Bâtiments', example: 'Das Museum ist montags geschlossen.' },
    { article: 'die', german: 'Bibliothek', french: 'Bibliothèque', plural: 'Bibliotheken', level: LanguageLevel.A1, subTheme: 'Bâtiments', example: 'Bücher in der Bibliothek ausleihen.' },
    { article: 'das', german: 'Theater', french: 'Théâtre', plural: 'Theater', level: LanguageLevel.A1, subTheme: 'Bâtiments', example: 'Ins Theater gehen.' },
    { article: 'die', german: 'Oper', french: 'Opéra', plural: 'Opern', level: LanguageLevel.A2, subTheme: 'Bâtiments', example: 'Eine Oper besuchen.' },
    { article: 'das', german: 'Kino', french: 'Cinéma', plural: 'Kinos', level: LanguageLevel.A1, subTheme: 'Bâtiments', example: 'Ins Kino gehen.' },
    { article: 'das', german: 'Stadion', french: 'Stade', plural: 'Stadien', level: LanguageLevel.A2, subTheme: 'Bâtiments', example: 'Ein Fußballspiel im Stadion.' },
    { article: 'das', german: 'Schwimmbad', french: 'Piscine', plural: 'Schwimmbäder', level: LanguageLevel.A1, subTheme: 'Bâtiments', example: 'Ins Schwimmbad gehen.' },
    { article: 'die', german: 'Sporthalle', french: 'Gymnase', plural: 'Sporthallen', level: LanguageLevel.A2, subTheme: 'Bâtiments', example: 'Sport in der Sporthalle.' },
    { article: 'das', german: 'Krankenhaus', french: 'Hôpital', plural: 'Krankenhäuser', level: LanguageLevel.A1, subTheme: 'Bâtiments', example: 'Im Krankenhaus behandelt werden.' },
    { article: 'die', german: 'Schule', french: 'École', plural: 'Schulen', level: LanguageLevel.A1, subTheme: 'Bâtiments', example: 'Die Schule beginnt um 8 Uhr.' },
    { article: 'die', german: 'Universität', french: 'Université', plural: 'Universitäten', level: LanguageLevel.A1, subTheme: 'Bâtiments', example: 'An der Universität studieren.' },
    { article: 'das', german: 'Gefängnis', french: 'Prison', plural: 'Gefängnisse', level: LanguageLevel.B1, subTheme: 'Bâtiments', example: 'Das Gefängnis am Stadtrand.' },
    { article: 'das', german: 'Gericht', french: 'Tribunal', plural: 'Gerichte', level: LanguageLevel.B1, subTheme: 'Bâtiments', example: 'Vor Gericht erscheinen.' },
    
    // === MAGASINS ===
    { article: 'das', german: 'Geschäft', french: 'Magasin', plural: 'Geschäfte', level: LanguageLevel.A1, subTheme: 'Magasins', example: 'Die Geschäfte schließen um 20 Uhr.' },
    { article: 'der', german: 'Laden', french: 'Boutique', plural: 'Läden', level: LanguageLevel.A1, subTheme: 'Magasins', example: 'Ein kleiner Laden.' },
    { article: 'das', german: 'Kaufhaus', french: 'Grand magasin', plural: 'Kaufhäuser', level: LanguageLevel.A2, subTheme: 'Magasins', example: 'Shoppen im Kaufhaus.' },
    { article: 'das', german: 'Einkaufszentrum', french: 'Centre commercial', plural: 'Einkaufszentren', level: LanguageLevel.A2, subTheme: 'Magasins', example: 'Im Einkaufszentrum einkaufen.' },
    { article: 'der', german: 'Supermarkt', french: 'Supermarché', plural: 'Supermärkte', level: LanguageLevel.A1, subTheme: 'Magasins', example: 'Im Supermarkt einkaufen.' },
    { article: 'der', german: 'Markt', french: 'Marché', plural: 'Märkte', level: LanguageLevel.A1, subTheme: 'Magasins', example: 'Auf dem Markt Gemüse kaufen.' },
    { article: 'die', german: 'Bäckerei', french: 'Boulangerie', plural: 'Bäckereien', level: LanguageLevel.A1, subTheme: 'Magasins', example: 'Frische Brötchen aus der Bäckerei.' },
    { article: 'die', german: 'Metzgerei', french: 'Boucherie', plural: 'Metzgereien', level: LanguageLevel.A1, subTheme: 'Magasins', example: 'Fleisch in der Metzgerei kaufen.' },
    { article: 'die', german: 'Konditorei', french: 'Pâtisserie', plural: 'Konditorei', level: LanguageLevel.A2, subTheme: 'Magasins', example: 'Kuchen aus der Konditorei.' },
    { article: 'die', german: 'Drogerie', french: 'Droguerie', plural: 'Drogerien', level: LanguageLevel.A2, subTheme: 'Magasins', example: 'Kosmetik in der Drogerie.' },
    { article: 'die', german: 'Buchhandlung', french: 'Librairie', plural: 'Buchhandlungen', level: LanguageLevel.A2, subTheme: 'Magasins', example: 'Ein Buch in der Buchhandlung kaufen.' },
    { article: 'der', german: 'Blumenladen', french: 'Fleuriste', plural: 'Blumenläden', level: LanguageLevel.A2, subTheme: 'Magasins', example: 'Blumen im Blumenladen kaufen.' },
    { article: 'das', german: 'Schuhgeschäft', french: 'Magasin de chaussures', plural: 'Schuhgeschäfte', level: LanguageLevel.A2, subTheme: 'Magasins', example: 'Schuhe im Schuhgeschäft kaufen.' },
    { article: 'der', german: 'Friseursalon', french: 'Salon de coiffure', plural: 'Friseursalons', level: LanguageLevel.A2, subTheme: 'Magasins', example: 'Zum Friseur gehen.' },
    { article: 'der', german: 'Kiosk', french: 'Kiosque', plural: 'Kioske', level: LanguageLevel.A2, subTheme: 'Magasins', example: 'Eine Zeitung am Kiosk kaufen.' },
    
    // === SERVICES ===
    { article: 'die', german: 'Apotheke', french: 'Pharmacie', plural: 'Apotheken', level: LanguageLevel.A1, subTheme: 'Services', example: 'Medikamente in der Apotheke kaufen.' },
    { article: 'die', german: 'Bank', french: 'Banque', plural: 'Banken', level: LanguageLevel.A1, subTheme: 'Services', example: 'Geld auf die Bank bringen.' },
    { article: 'der', german: 'Geldautomat', french: 'Distributeur', plural: 'Geldautomaten', level: LanguageLevel.A1, subTheme: 'Services', example: 'Geld am Geldautomaten abheben.' },
    { article: 'die', german: 'Post', french: 'Poste', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Services', example: 'Einen Brief zur Post bringen.' },
    { article: 'die', german: 'Polizei', french: 'Police', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Services', example: 'Rufen Sie die Polizei!' },
    { article: 'die', german: 'Polizeiwache', french: 'Commissariat', plural: 'Polizeiwachen', level: LanguageLevel.A2, subTheme: 'Services', example: 'Zur Polizeiwache gehen.' },
    { article: 'die', german: 'Feuerwehr', french: 'Pompiers', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Services', example: 'Die Feuerwehr rufen.' },
    { article: 'das', german: 'Einwohnermeldeamt', french: 'Bureau des habitants', plural: 'Einwohnermeldeämter', level: LanguageLevel.B1, subTheme: 'Services', example: 'Sich beim Einwohnermeldeamt anmelden.' },
    { article: 'das', german: 'Arbeitsamt', french: 'Pôle emploi', plural: 'Arbeitsämter', level: LanguageLevel.B1, subTheme: 'Services', example: 'Sich beim Arbeitsamt melden.' },
    { article: 'die', german: 'Tankstelle', french: 'Station-service', plural: 'Tankstellen', level: LanguageLevel.A1, subTheme: 'Services', example: 'An der Tankstelle tanken.' },
    { article: 'die', german: 'Werkstatt', french: 'Garage', plural: 'Werkstätten', level: LanguageLevel.A2, subTheme: 'Services', example: 'Das Auto in die Werkstatt bringen.' },
    { article: 'die', german: 'Reinigung', french: 'Pressing', plural: 'Reinigungen', level: LanguageLevel.A2, subTheme: 'Services', example: 'Kleidung zur Reinigung bringen.' },
    
    // === RESTAURATION ===
    { article: 'das', german: 'Restaurant', french: 'Restaurant', plural: 'Restaurants', level: LanguageLevel.A1, subTheme: 'Restauration', example: 'Im Restaurant essen.' },
    { article: 'das', german: 'Café', french: 'Café', plural: 'Cafés', level: LanguageLevel.A1, subTheme: 'Restauration', example: 'Ins Café gehen.' },
    { article: 'die', german: 'Bar', french: 'Bar', plural: 'Bars', level: LanguageLevel.A1, subTheme: 'Restauration', example: 'In eine Bar gehen.' },
    { article: 'die', german: 'Kneipe', french: 'Pub', plural: 'Kneipen', level: LanguageLevel.A2, subTheme: 'Restauration', example: 'In der Kneipe ein Bier trinken.' },
    { article: 'der', german: 'Biergarten', french: 'Jardin à bière', plural: 'Biergärten', level: LanguageLevel.A2, subTheme: 'Restauration', example: 'Im Biergarten sitzen.' },
    { article: 'die', german: 'Imbissbude', french: 'Snack', plural: 'Imbissbuden', level: LanguageLevel.A2, subTheme: 'Restauration', example: 'Eine Currywurst an der Imbissbude.' },
    { article: 'die', german: 'Eisdiele', french: 'Glacier', plural: 'Eisdielen', level: LanguageLevel.A2, subTheme: 'Restauration', example: 'Eis in der Eisdiele kaufen.' },
    
    // === ESPACES VERTS ===
    { article: 'der', german: 'Park', french: 'Parc', plural: 'Parks', level: LanguageLevel.A1, subTheme: 'Espaces verts', example: 'Spazieren im Park.' },
    { article: 'der', german: 'Garten', french: 'Jardin', plural: 'Gärten', level: LanguageLevel.A1, subTheme: 'Espaces verts', example: 'Ein schöner Garten.' },
    { article: 'der', german: 'Spielplatz', french: 'Aire de jeux', plural: 'Spielplätze', level: LanguageLevel.A1, subTheme: 'Espaces verts', example: 'Kinder auf dem Spielplatz.' },
    { article: 'der', german: 'Friedhof', french: 'Cimetière', plural: 'Friedhöfe', level: LanguageLevel.A2, subTheme: 'Espaces verts', example: 'Ein alter Friedhof.' },
    { article: 'der', german: 'Zoo', french: 'Zoo', plural: 'Zoos', level: LanguageLevel.A1, subTheme: 'Espaces verts', example: 'In den Zoo gehen.' },
    { article: 'der', german: 'Brunnen', french: 'Fontaine', plural: 'Brunnen', level: LanguageLevel.A2, subTheme: 'Espaces verts', example: 'Ein alter Brunnen auf dem Platz.' },
    
    // === TRANSPORTS ===
    { article: 'der', german: 'Bahnhof', french: 'Gare', plural: 'Bahnhöfe', level: LanguageLevel.A1, subTheme: 'Transports', example: 'Am Bahnhof ankommen.' },
    { article: 'der', german: 'Busbahnhof', french: 'Gare routière', plural: 'Busbahnhöfe', level: LanguageLevel.A2, subTheme: 'Transports', example: 'Der Busbahnhof ist im Zentrum.' },
    { article: 'der', german: 'Flughafen', french: 'Aéroport', plural: 'Flughäfen', level: LanguageLevel.A1, subTheme: 'Transports', example: 'Zum Flughafen fahren.' },
    { article: 'die', german: 'Haltestelle', french: 'Arrêt', plural: 'Haltestellen', level: LanguageLevel.A1, subTheme: 'Transports', example: 'An der Haltestelle warten.' },
    { article: 'die', german: 'U-Bahn-Station', french: 'Station de métro', plural: 'U-Bahn-Stationen', level: LanguageLevel.A1, subTheme: 'Transports', example: 'Die U-Bahn-Station ist dort.' },
    { article: 'der', german: 'Parkplatz', french: 'Parking', plural: 'Parkplätze', level: LanguageLevel.A1, subTheme: 'Transports', example: 'Einen Parkplatz suchen.' },
    { article: 'das', german: 'Parkhaus', french: 'Parking couvert', plural: 'Parkhäuser', level: LanguageLevel.A2, subTheme: 'Transports', example: 'Im Parkhaus parken.' },
    { article: 'der', german: 'Fahrradweg', french: 'Piste cyclable', plural: 'Fahrradwege', level: LanguageLevel.A2, subTheme: 'Transports', example: 'Auf dem Fahrradweg fahren.' },
    
    // === CIRCULATION ===
    { article: 'die', german: 'Ampel', french: 'Feu de signalisation', plural: 'Ampeln', level: LanguageLevel.A1, subTheme: 'Circulation', example: 'Bei Rot an der Ampel warten.' },
    { article: 'das', german: 'Verkehrsschild', french: 'Panneau de signalisation', plural: 'Verkehrsschilder', level: LanguageLevel.A2, subTheme: 'Circulation', example: 'Das Verkehrsschild beachten.' },
    { article: 'der', german: 'Zebrastreifen', french: 'Passage piéton', plural: 'Zebrastreifen', level: LanguageLevel.A2, subTheme: 'Circulation', example: 'Über den Zebrastreifen gehen.' },
    { article: 'der', german: 'Verkehr', french: 'Circulation', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Circulation', example: 'Viel Verkehr in der Stadt.' },
    { article: 'der', german: 'Stau', french: 'Embouteillage', plural: 'Staus', level: LanguageLevel.A2, subTheme: 'Circulation', example: 'Im Stau stehen.' },
    
    // === LOGEMENT ===
    { article: 'das', german: 'Haus', french: 'Maison', plural: 'Häuser', level: LanguageLevel.A1, subTheme: 'Logement', example: 'Ein schönes Haus.' },
    { article: 'die', german: 'Wohnung', french: 'Appartement', plural: 'Wohnungen', level: LanguageLevel.A1, subTheme: 'Logement', example: 'Eine Wohnung mieten.' },
    { article: 'das', german: 'Hochhaus', french: 'Immeuble', plural: 'Hochhäuser', level: LanguageLevel.A2, subTheme: 'Logement', example: 'Ein Hochhaus in der Stadt.' },
    { article: 'der', german: 'Wolkenkratzer', french: 'Gratte-ciel', plural: 'Wolkenkratzer', level: LanguageLevel.A2, subTheme: 'Logement', example: 'Ein moderner Wolkenkratzer.' },
    { article: 'der', german: 'Turm', french: 'Tour', plural: 'Türme', level: LanguageLevel.A2, subTheme: 'Logement', example: 'Ein hoher Turm.' },
    
    // === VERBES / DIRECTIONS ===
    { article: '', german: 'gehen', french: 'aller (à pied)', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Directions', example: 'Zu Fuß gehen.' },
    { article: '', german: 'fahren', french: 'aller (en véhicule)', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Directions', example: 'Mit dem Bus fahren.' },
    { article: '', german: 'abbiegen', french: 'tourner', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Directions', example: 'Links abbiegen.' },
    { article: '', german: 'geradeaus', french: 'tout droit', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Directions', example: 'Gehen Sie geradeaus.' },
    { article: '', german: 'links', french: 'à gauche', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Directions', example: 'Biegen Sie links ab.' },
    { article: '', german: 'rechts', french: 'à droite', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Directions', example: 'Biegen Sie rechts ab.' },
    { article: '', german: 'überqueren', french: 'traverser', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Directions', example: 'Die Straße überqueren.' },
    { article: '', german: 'vorbei', french: 'passé / devant', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Directions', example: 'An der Kirche vorbei.' },
    { article: '', german: 'gegenüber', french: 'en face', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Directions', example: 'Gegenüber dem Bahnhof.' },
    { article: '', german: 'neben', french: 'à côté', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Directions', example: 'Neben der Bank.' },
    { article: '', german: 'zwischen', french: 'entre', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Directions', example: 'Zwischen der Post und dem Café.' }
  ],
  phrases: [
    // Demander son chemin
    { german: 'Entschuldigung, wie komme ich zum Bahnhof?', french: 'Excusez-moi, comment aller à la gare ?', context: 'Directions' },
    { german: 'Wo ist die nächste U-Bahn-Station?', french: 'Où est la station de métro la plus proche ?', context: 'Directions' },
    { german: 'Ist es weit von hier?', french: 'C\'est loin d\'ici ?', context: 'Directions' },
    { german: 'Kann ich zu Fuß gehen?', french: 'Puis-je y aller à pied ?', context: 'Directions' },
    { german: 'Wie lange dauert es?', french: 'Combien de temps cela prend-il ?', context: 'Directions' },
    
    // Donner des directions
    { german: 'Gehen Sie geradeaus und dann links.', french: 'Allez tout droit puis à gauche.', context: 'Directions' },
    { german: 'Es ist die zweite Straße rechts.', french: 'C\'est la deuxième rue à droite.', context: 'Directions' },
    { german: 'Überqueren Sie den Platz.', french: 'Traversez la place.', context: 'Directions' },
    { german: 'Es ist gegenüber dem Rathaus.', french: 'C\'est en face de la mairie.', context: 'Directions' },
    { german: 'Sie sehen es auf der linken Seite.', french: 'Vous le verrez sur votre gauche.', context: 'Directions' },
    
    // Services
    { german: 'Gibt es hier in der Nähe eine Bank?', french: 'Y a-t-il une banque près d\'ici ?', context: 'Services' },
    { german: 'Wo ist die nächste Apotheke?', french: 'Où est la pharmacie la plus proche ?', context: 'Services' },
    { german: 'Ich suche einen Supermarkt.', french: 'Je cherche un supermarché.', context: 'Services' },
    { german: 'Gibt es hier ein Restaurant?', french: 'Y a-t-il un restaurant ici ?', context: 'Services' },
    
    // Transports
    { german: 'Wo kann ich ein Taxi bekommen?', french: 'Où puis-je prendre un taxi ?', context: 'Transports' },
    { german: 'Welcher Bus fährt ins Zentrum?', french: 'Quel bus va au centre-ville ?', context: 'Transports' },
    { german: 'Wo kann ich parken?', french: 'Où puis-je me garer ?', context: 'Transports' }
  ]
};
