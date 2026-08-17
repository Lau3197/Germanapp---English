
import { ThemeContent, LanguageLevel } from '../../types';

export const loisirsContent: ThemeContent = {
  words: [
    // === GÉNÉRAL ===
    { article: 'das', german: 'Hobby', english: 'Hobby', french: 'Passe-temps', plural: 'Hobbys', level: LanguageLevel.A1, subTheme: 'Général', example: 'Was sind deine Hobbys?' },
    { article: 'die', german: 'Freizeit', english: 'Free time / Leisure time', french: 'Temps libre', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Général', example: 'Was machst du in deiner Freizeit?' },
    { article: 'die', german: 'Aktivität', english: 'Activity', french: 'Activité', plural: 'Aktivitäten', level: LanguageLevel.A2, subTheme: 'Général', example: 'Freizeitaktivitäten planen.' },
    { article: 'die', german: 'Unterhaltung', english: 'Entertainment', french: 'Divertissement', plural: 'Unterhaltungen', level: LanguageLevel.A2, subTheme: 'Général', example: 'Zur Unterhaltung fernsehen.' },
    { article: 'die', german: 'Entspannung', english: 'Relaxation', french: 'Détente', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Général', example: 'Yoga dient der Entspannung.' },
    { article: 'der', german: 'Spaß', english: 'Fun', french: 'Amusement', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Général', example: 'Das macht viel Spaß!' },
    { article: 'die', german: 'Leidenschaft', english: 'Passion', french: 'Passion', plural: 'Leidenschaften', level: LanguageLevel.B1, subTheme: 'Général', example: 'Fotografie ist meine Leidenschaft.' },

    // === SPORT ===
    { article: 'der', german: 'Sport', english: 'Sport', french: 'Sport', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Sport', example: 'Ich treibe jeden Tag Sport.' },
    { article: 'der', german: 'Fußball', english: 'Football / Soccer', french: 'Football', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Sport', example: 'Fußball ist in Deutschland sehr beliebt.' },
    { article: 'der', german: 'Basketball', english: 'Basketball', french: 'Basket-ball', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Sport', example: 'Basketball spielen.' },
    { article: 'der', german: 'Volleyball', english: 'Volleyball', french: 'Volley-ball', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Sport', example: 'Am Strand Volleyball spielen.' },
    { article: 'das', german: 'Tennis', english: 'Tennis', french: 'Tennis', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Sport', example: 'Tennis spielen lernen.' },
    { article: 'das', german: 'Tischtennis', english: 'Table tennis / Ping pong', french: 'Tennis de table', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Sport', example: 'Tischtennis macht Spaß.' },
    { article: 'das', german: 'Schwimmen', english: 'Swimming', french: 'Natation', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Sport', example: 'Schwimmen hält fit.' },
    { article: 'das', german: 'Radfahren', english: 'Cycling', french: 'Cyclisme', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Sport', example: 'Ich liebe Radfahren.' },
    { article: 'das', german: 'Joggen', english: 'Jogging', french: 'Jogging', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Sport', example: 'Jeden Morgen joggen gehen.' },
    { article: 'das', german: 'Laufen', english: 'Running', french: 'Course à pied', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Sport', example: 'Laufen ist gesund.' },
    { article: 'das', german: 'Yoga', english: 'Yoga', french: 'Yoga', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Sport', example: 'Yoga entspannt.' },
    { article: 'das', german: 'Fitness', english: 'Fitness', french: 'Fitness', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Sport', example: 'Ins Fitnessstudio gehen.' },
    { article: 'das', german: 'Boxen', english: 'Boxing', french: 'Boxe', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Sport', example: 'Boxen trainieren.' },
    { article: 'das', german: 'Golf', english: 'Golf', french: 'Golf', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Sport', example: 'Golf spielen.' },
    { article: 'das', german: 'Skifahren', english: 'Skiing', french: 'Ski', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Sport', example: 'Im Winter Skifahren.' },
    { article: 'das', german: 'Snowboarden', english: 'Snowboarding', french: 'Snowboard', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Sport', example: 'Snowboarden ist cool.' },
    { article: 'das', german: 'Eislaufen', english: 'Ice skating', french: 'Patinage sur glace', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Sport', example: 'Im Winter Eislaufen gehen.' },
    { article: 'das', german: 'Wandern', english: 'Hiking', french: 'Randonnée', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Sport', example: 'Wandern in den Alpen.' },
    { article: 'das', german: 'Klettern', english: 'Climbing', french: 'Escalade', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Sport', example: 'Klettern in der Halle.' },
    { article: 'das', german: 'Surfen', english: 'Surfing', french: 'Surf', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Sport', example: 'Surfen am Meer.' },
    { article: 'das', german: 'Segeln', english: 'Sailing', french: 'Voile', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Sport', example: 'Segeln lernen.' },
    { article: 'das', german: 'Tauchen', english: 'Diving', french: 'Plongée', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Sport', example: 'Tauchen im Mittelmeer.' },
    { article: 'das', german: 'Angeln', english: 'Fishing', french: 'Pêche', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Sport', example: 'Am Wochenende angeln gehen.' },
    { article: 'das', german: 'Reiten', english: 'Horseback riding', french: 'Équitation', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Sport', example: 'Reiten macht Spaß.' },
    { article: 'die', german: 'Mannschaft', english: 'Team', french: 'Équipe', plural: 'Mannschaften', level: LanguageLevel.A2, subTheme: 'Sport', example: 'Unsere Mannschaft hat gewonnen.' },
    { article: 'das', german: 'Spiel', english: 'Match / Game', french: 'Match', plural: 'Spiele', level: LanguageLevel.A1, subTheme: 'Sport', example: 'Das Spiel beginnt um 20 Uhr.' },
    { article: 'der', german: 'Wettbewerb', english: 'Competition', french: 'Compétition', plural: 'Wettbewerbe', level: LanguageLevel.B1, subTheme: 'Sport', example: 'Ein sportlicher Wettbewerb.' },
    { article: 'das', german: 'Turnier', english: 'Tournament', french: 'Tournoi', plural: 'Turniere', level: LanguageLevel.A2, subTheme: 'Sport', example: 'Ein Tennisturnier.' },
    { article: 'der', german: 'Verein', english: 'Club', french: 'Club / Association', plural: 'Vereine', level: LanguageLevel.A2, subTheme: 'Sport', example: 'Mitglied im Sportverein.' },
    { article: 'das', german: 'Fitnessstudio', english: 'Gym', french: 'Salle de sport', plural: 'Fitnessstudios', level: LanguageLevel.A1, subTheme: 'Sport', example: 'Ins Fitnessstudio gehen.' },
    { article: 'das', german: 'Stadion', english: 'Stadium', french: 'Stade', plural: 'Stadien', level: LanguageLevel.A2, subTheme: 'Sport', example: 'Ins Stadion gehen.' },
    { article: 'das', german: 'Schwimmbad', english: 'Swimming pool', french: 'Piscine', plural: 'Schwimmbäder', level: LanguageLevel.A1, subTheme: 'Sport', example: 'Ins Schwimmbad gehen.' },
    { article: 'das', german: 'Hallenbad', english: 'Indoor pool', french: 'Piscine couverte', plural: 'Hallenbäder', level: LanguageLevel.A2, subTheme: 'Sport', example: 'Im Winter ins Hallenbad.' },
    { article: 'das', german: 'Freibad', english: 'Outdoor pool', french: 'Piscine en plein air', plural: 'Freibäder', level: LanguageLevel.A2, subTheme: 'Sport', example: 'Im Sommer ins Freibad.' },

    // === MUSIQUE ===
    { article: 'die', german: 'Musik', english: 'Music', french: 'Musique', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Musique', example: 'Ich höre gerne Musik.' },
    { article: 'das', german: 'Lied', english: 'Song', french: 'Chanson', plural: 'Lieder', level: LanguageLevel.A1, subTheme: 'Musique', example: 'Ein schönes Lied.' },
    { article: 'das', german: 'Konzert', english: 'Concert', french: 'Concert', plural: 'Konzerte', level: LanguageLevel.A1, subTheme: 'Musique', example: 'Ins Konzert gehen.' },
    { article: 'das', german: 'Instrument', english: 'Instrument', french: 'Instrument', plural: 'Instrumente', level: LanguageLevel.A1, subTheme: 'Musique', example: 'Spielst du ein Instrument?' },
    { article: 'die', german: 'Gitarre', english: 'Guitar', french: 'Guitare', plural: 'Gitarren', level: LanguageLevel.A1, subTheme: 'Musique', example: 'Er spielt Gitarre.' },
    { article: 'das', german: 'Klavier', english: 'Piano', french: 'Piano', plural: 'Klaviere', level: LanguageLevel.A1, subTheme: 'Musique', example: 'Klavier spielen lernen.' },
    { article: 'die', german: 'Geige', english: 'Violin', french: 'Violon', plural: 'Geigen', level: LanguageLevel.A2, subTheme: 'Musique', example: 'Geige spielen.' },
    { article: 'die', german: 'Flöte', english: 'Flute', french: 'Flûte', plural: 'Flöten', level: LanguageLevel.A2, subTheme: 'Musique', example: 'Blockflöte spielen.' },
    { article: 'die', german: 'Trompete', english: 'Trumpet', french: 'Trompette', plural: 'Trompeten', level: LanguageLevel.A2, subTheme: 'Musique', example: 'Jazz-Trompete spielen.' },
    { article: 'das', german: 'Schlagzeug', english: 'Drums', french: 'Batterie', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Musique', example: 'Schlagzeug spielen.' },
    { article: 'die', german: 'Band', english: 'Band', french: 'Groupe', plural: 'Bands', level: LanguageLevel.A1, subTheme: 'Musique', example: 'Er spielt in einer Band.' },
    { article: 'der', german: 'Chor', english: 'Choir', french: 'Chorale', plural: 'Chöre', level: LanguageLevel.A2, subTheme: 'Musique', example: 'Im Chor singen.' },
    { article: 'der', german: 'Sänger', english: 'Singer (m)', french: 'Chanteur', plural: 'Sänger', level: LanguageLevel.A1, subTheme: 'Musique', example: 'Ein berühmter Sänger.' },
    { article: 'die', german: 'Sängerin', english: 'Singer (f)', french: 'Chanteuse', plural: 'Sängerinnen', level: LanguageLevel.A1, subTheme: 'Musique', example: 'Meine Lieblingssängerin.' },
    { article: 'der', german: 'Musiker', english: 'Musician', french: 'Musicien', plural: 'Musiker', level: LanguageLevel.A2, subTheme: 'Musique', example: 'Ein talentierter Musiker.' },

    // === CINÉMA / THÉÂTRE ===
    { article: 'das', german: 'Kino', english: 'Cinema', french: 'Cinéma', plural: 'Kinos', level: LanguageLevel.A1, subTheme: 'Cinéma', example: 'Wir gehen am Freitag ins Kino.' },
    { article: 'der', german: 'Film', english: 'Movie / Film', french: 'Film', plural: 'Filme', level: LanguageLevel.A1, subTheme: 'Cinéma', example: 'Ein spannender Film.' },
    { article: 'das', german: 'Theater', english: 'Theater', french: 'Théâtre', plural: 'Theater', level: LanguageLevel.A1, subTheme: 'Cinéma', example: 'Ins Theater gehen.' },
    { article: 'das', german: 'Stück', english: 'Play (theater)', french: 'Pièce de théâtre', plural: 'Stücke', level: LanguageLevel.A2, subTheme: 'Cinéma', example: 'Ein Theaterstück ansehen.' },
    { article: 'die', german: 'Vorstellung', english: 'Performance / Show', french: 'Représentation', plural: 'Vorstellungen', level: LanguageLevel.A2, subTheme: 'Cinéma', example: 'Die Vorstellung beginnt um 20 Uhr.' },
    { article: 'der', german: 'Schauspieler', english: 'Actor', french: 'Acteur', plural: 'Schauspieler', level: LanguageLevel.A2, subTheme: 'Cinéma', example: 'Mein Lieblingsschauspieler.' },
    { article: 'die', german: 'Schauspielerin', english: 'Actress', french: 'Actrice', plural: 'Schauspielerinnen', level: LanguageLevel.A2, subTheme: 'Cinéma', example: 'Eine berühmte Schauspielerin.' },
    { article: 'die', german: 'Komödie', english: 'Comedy', french: 'Comédie', plural: 'Komödien', level: LanguageLevel.A2, subTheme: 'Cinéma', example: 'Ich mag Komödien.' },
    { article: 'der', german: 'Krimi', english: 'Detective story / Crime thriller', french: 'Polar', plural: 'Krimis', level: LanguageLevel.A2, subTheme: 'Cinéma', example: 'Ein spannender Krimi.' },
    { article: 'der', german: 'Actionfilm', english: 'Action movie', french: 'Film d\'action', plural: 'Actionfilme', level: LanguageLevel.A2, subTheme: 'Cinéma', example: 'Actionfilme mit viel Spannung.' },
    { article: 'der', german: 'Horrorfilm', english: 'Horror movie', french: 'Film d\'horreur', plural: 'Horrorfilme', level: LanguageLevel.A2, subTheme: 'Cinéma', example: 'Horrorfilme sind nichts für mich.' },
    { article: 'die', german: 'Serie', english: 'Series', french: 'Série', plural: 'Serien', level: LanguageLevel.A1, subTheme: 'Cinéma', example: 'Eine gute Serie auf Netflix.' },

    // === LECTURE / CULTURE ===
    { article: 'das', german: 'Lesen', english: 'Reading', french: 'Lecture', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Lecture', example: 'Lesen ist mein Hobby.' },
    { article: 'das', german: 'Buch', english: 'Book', french: 'Livre', plural: 'Bücher', level: LanguageLevel.A1, subTheme: 'Lecture', example: 'Ein gutes Buch lesen.' },
    { article: 'der', german: 'Roman', english: 'Novel', french: 'Roman', plural: 'Romane', level: LanguageLevel.A2, subTheme: 'Lecture', example: 'Einen Roman lesen.' },
    { article: 'die', german: 'Zeitung', english: 'Newspaper', french: 'Journal', plural: 'Zeitungen', level: LanguageLevel.A1, subTheme: 'Lecture', example: 'Die Zeitung lesen.' },
    { article: 'die', german: 'Zeitschrift', english: 'Magazine', french: 'Magazine', plural: 'Zeitschriften', level: LanguageLevel.A2, subTheme: 'Lecture', example: 'Eine Zeitschrift kaufen.' },
    { article: 'das', german: 'Museum', english: 'Museum', french: 'Musée', plural: 'Museen', level: LanguageLevel.A1, subTheme: 'Lecture', example: 'Ins Museum gehen.' },
    { article: 'die', german: 'Ausstellung', english: 'Exhibition', french: 'Exposition', plural: 'Ausstellungen', level: LanguageLevel.A2, subTheme: 'Lecture', example: 'Eine Ausstellung besuchen.' },
    { article: 'die', german: 'Galerie', english: 'Gallery', french: 'Galerie', plural: 'Galerien', level: LanguageLevel.A2, subTheme: 'Lecture', example: 'Eine Kunstgalerie.' },
    { article: 'die', german: 'Bibliothek', english: 'Library', french: 'Bibliothèque', plural: 'Bibliotheken', level: LanguageLevel.A1, subTheme: 'Lecture', example: 'In die Bibliothek gehen.' },

    // === JEUX ===
    { article: 'das', german: 'Spiel', english: 'Game', french: 'Jeu', plural: 'Spiele', level: LanguageLevel.A1, subTheme: 'Jeux', example: 'Ein Spiel spielen.' },
    { article: 'das', german: 'Brettspiel', english: 'Board game', french: 'Jeu de société', plural: 'Brettspiele', level: LanguageLevel.A2, subTheme: 'Jeux', example: 'Ein Brettspiel mit der Familie.' },
    { article: 'das', german: 'Kartenspiel', english: 'Card game', french: 'Jeu de cartes', plural: 'Kartenspiele', level: LanguageLevel.A2, subTheme: 'Jeux', example: 'Poker ist ein Kartenspiel.' },
    { article: 'das', german: 'Schach', english: 'Chess', french: 'Échecs', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Jeux', example: 'Schach spielen.' },
    { article: 'das', german: 'Videospiel', english: 'Video game', french: 'Jeu vidéo', plural: 'Videospiele', level: LanguageLevel.A1, subTheme: 'Jeux', example: 'Videospiele spielen.' },
    { article: 'das', german: 'Computerspiel', english: 'Computer game', french: 'Jeu sur ordinateur', plural: 'Computerspiele', level: LanguageLevel.A1, subTheme: 'Jeux', example: 'Computerspiele am PC.' },
    { article: 'die', german: 'Konsole', english: 'Console', french: 'Console', plural: 'Konsolen', level: LanguageLevel.A2, subTheme: 'Jeux', example: 'Eine Spielkonsole.' },
    { article: 'das', german: 'Puzzle', english: 'Puzzle', french: 'Puzzle', plural: 'Puzzles', level: LanguageLevel.A1, subTheme: 'Jeux', example: 'Ein Puzzle machen.' },

    // === CRÉATIVITÉ ===
    { article: 'die', german: 'Fotografie', english: 'Photography', french: 'Photographie', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Créativité', example: 'Fotografie als Hobby.' },
    { article: 'das', german: 'Foto', english: 'Photo', french: 'Photo', plural: 'Fotos', level: LanguageLevel.A1, subTheme: 'Créativité', example: 'Fotos machen.' },
    { article: 'die', german: 'Kamera', english: 'Camera', french: 'Appareil photo', plural: 'Kameras', level: LanguageLevel.A1, subTheme: 'Créativité', example: 'Eine neue Kamera kaufen.' },
    { article: 'das', german: 'Malen', english: 'Painting', french: 'Peinture', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Créativité', example: 'Ich male gern.' },
    { article: 'das', german: 'Zeichnen', english: 'Drawing', french: 'Dessin', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Créativité', example: 'Zeichnen lernen.' },
    { article: 'das', german: 'Basteln', english: 'Arts and crafts / Handicraft', french: 'Bricolage créatif', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Créativité', example: 'Mit den Kindern basteln.' },
    { article: 'das', german: 'Stricken', english: 'Knitting', french: 'Tricot', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Créativité', example: 'Einen Pullover stricken.' },
    { article: 'das', german: 'Nähen', english: 'Sewing', french: 'Couture', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Créativité', example: 'Kleidung nähen.' },
    { article: 'das', german: 'Tanzen', english: 'Dancing', french: 'Danse', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Créativité', example: 'Tanzen gehen.' },
    { article: 'der', german: 'Tanz', english: 'Dance', french: 'Danse', plural: 'Tänze', level: LanguageLevel.A1, subTheme: 'Créativité', example: 'Ein lateinamerikanischer Tanz.' },
    { article: 'das', german: 'Kochen', english: 'Cooking', french: 'Cuisine', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Créativité', example: 'Kochen ist mein Hobby.' },
    { article: 'das', german: 'Backen', english: 'Baking', french: 'Pâtisserie', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Créativité', example: 'Kuchen backen.' },
    { article: 'das', german: 'Gärtnern', english: 'Gardening', french: 'Jardinage', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Créativité', example: 'Im Garten arbeiten.' },

    // === SORTIES ===
    { article: 'die', german: 'Party', english: 'Party', french: 'Fête', plural: 'Partys', level: LanguageLevel.A1, subTheme: 'Sorties', example: 'Auf eine Party gehen.' },
    { article: 'die', german: 'Feier', english: 'Celebration / Party', french: 'Célébration', plural: 'Feiern', level: LanguageLevel.A1, subTheme: 'Sorties', example: 'Eine Geburtstagsfeier.' },
    { article: 'der', german: 'Club', english: 'Club', french: 'Club', plural: 'Clubs', level: LanguageLevel.A2, subTheme: 'Sorties', example: 'In den Club gehen.' },
    { article: 'die', german: 'Disko', english: 'Disco', french: 'Discothèque', plural: 'Diskos', level: LanguageLevel.A2, subTheme: 'Sorties', example: 'In die Disko gehen.' },
    { article: 'die', german: 'Bar', english: 'Bar', french: 'Bar', plural: 'Bars', level: LanguageLevel.A1, subTheme: 'Sorties', example: 'In eine Bar gehen.' },
    { article: 'das', german: 'Restaurant', english: 'Restaurant', french: 'Restaurant', plural: 'Restaurants', level: LanguageLevel.A1, subTheme: 'Sorties', example: 'Im Restaurant essen.' },
    { article: 'das', german: 'Café', english: 'Café', french: 'Café', plural: 'Cafés', level: LanguageLevel.A1, subTheme: 'Sorties', example: 'Ins Café gehen.' },
    { article: 'das', german: 'Picknick', english: 'Picnic', french: 'Pique-nique', plural: 'Picknicke', level: LanguageLevel.A1, subTheme: 'Sorties', example: 'Ein Picknick im Park.' },
    { article: 'das', german: 'Festival', english: 'Festival', french: 'Festival', plural: 'Festivals', level: LanguageLevel.A2, subTheme: 'Sorties', example: 'Ein Musikfestival.' },

    // === VERBES ===
    { article: '', german: 'spielen', english: 'to play', french: 'jouer', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Verbes', example: 'Fußball spielen.' },
    { article: '', german: 'treiben', english: 'to practice', french: 'pratiquer', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Verbes', example: 'Sport treiben.' },
    { article: '', german: 'üben', english: 'to practice', french: 's\'exercer', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Verbes', example: 'Jeden Tag üben.' },
    { article: '', german: 'trainieren', english: 'to train', french: 's\'entraîner', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Verbes', example: 'Im Fitnessstudio trainieren.' },
    { article: '', german: 'gewinnen', english: 'to win', french: 'gagner', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Verbes', example: 'Das Spiel gewinnen.' },
    { article: '', german: 'verlieren', english: 'to lose', french: 'perdre', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Verbes', example: 'Das Spiel verlieren.' },
    { article: '', german: 'sammeln', english: 'to collect', french: 'collectionner', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Verbes', example: 'Briefmarken sammeln.' },
    { article: '', german: 'entspannen (sich)', english: 'to relax', french: 'se détendre', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Verbes', example: 'Am Wochenende entspannen.' },
    { article: '', german: 'ausgehen', english: 'to go out', french: 'sortir', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Verbes', example: 'Am Samstag ausgehen.' },
    { article: '', german: 'feiern', english: 'to celebrate', french: 'faire la fête', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Verbes', example: 'Geburtstag feiern.' },
    { article: '', german: 'singen', english: 'to sing', french: 'chanter', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Verbes', example: 'Ein Lied singen.' },
    { article: '', german: 'tanzen', english: 'to dance', french: 'danser', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Verbes', example: 'Gern tanzen.' },
    { article: '', german: 'fotografieren', english: 'to photograph', french: 'photographier', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Verbes', example: 'Landschaften fotografieren.' },
    { article: '', german: 'malen', english: 'to paint', french: 'peindre', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Verbes', example: 'Ein Bild malen.' },
    { article: '', german: 'zeichnen', english: 'to draw', french: 'dessiner', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Verbes', example: 'Porträts zeichnen.' }
  ],
  phrases: [
    // Questions sur les loisirs
    { german: 'Was machst du in deiner Freizeit?', english: 'What do you do in your free time?', french: 'Que fais-tu pendant ton temps libre ?', italian: 'Cosa fai nel tempo libero?', context: 'Général' },
    { german: 'Was sind deine Hobbys?', english: 'What are your hobbies?', french: 'Quels sont tes loisirs ?', italian: 'Quali sono i tuoi hobby?', context: 'Général' },
    { german: 'Wofür interessierst du dich?', english: 'What are you interested in?', french: 'Qu\'est-ce qui t\'intéresse ?', italian: 'Di cosa ti interessi?', context: 'Général' },
    { german: 'Hast du am Wochenende Zeit?', english: 'Do you have time on the weekend?', french: 'As-tu du temps ce week-end ?', italian: 'Hai tempo nel fine settimana?', context: 'Général' },

    // Réponses
    { german: 'Ich interessiere mich für...', english: 'I am interested in...', french: 'Je m\'intéresse à...', italian: 'Mi interesso di...', context: 'Hobbys' },
    { german: 'Mein Hobby ist...', english: 'My hobby is...', french: 'Mon loisir, c\'est...', italian: 'Il mio hobby è...', context: 'Hobbys' },
    { german: 'Ich spiele gern...', english: 'I like playing...', french: 'J\'aime jouer à...', italian: 'Mi piace giocare a...', context: 'Hobbys' },
    { german: 'In meiner Freizeit...', english: 'In my free time...', french: 'Pendant mon temps libre...', italian: 'Nel mio tempo libero...', context: 'Hobbys' },

    // Sport
    { german: 'Ich treibe regelmäßig Sport.', english: 'I exercise regularly.', french: 'Je fais du sport régulièrement.', italian: 'Faccio sport regolarmente.', context: 'Sport' },
    { german: 'Ich gehe zweimal pro Woche ins Fitnessstudio.', english: 'I go to the gym twice a week.', french: 'Je vais à la salle de sport deux fois par semaine.', italian: 'Vado in palestra due volte a settimana.', context: 'Sport' },
    { german: 'Spielst du in einem Verein?', english: 'Do you play in a club?', french: 'Joues-tu dans un club ?', italian: 'Giochi in una società sportiva?', context: 'Sport' },
    { german: 'Wer hat das Spiel gewonnen?', english: 'Who won the match?', french: 'Qui a gagné le match ?', italian: 'Chi ha vinto la partita?', context: 'Sport' },

    // Musique
    { german: 'Ich spiele seit fünf Jahren Klavier.', english: 'I\'ve been playing the piano for five years.', french: 'Je joue du piano depuis cinq ans.', italian: 'Suono il pianoforte da cinque anni.', context: 'Musique' },
    { german: 'Welche Musik hörst du gern?', english: 'What music do you like listening to?', french: 'Quelle musique aimes-tu écouter ?', italian: 'Che musica ti piace ascoltare?', context: 'Musique' },
    { german: 'Gehen wir ins Konzert?', english: 'Shall we go to the concert?', french: 'On va au concert ?', italian: 'Andiamo al concerto?', context: 'Musique' },

    // Cinéma
    { german: 'Hast du Lust, ins Kino zu gehen?', english: 'Do you feel like going to the cinema?', french: 'As-tu envie d\'aller au cinéma ?', italian: 'Ti va di andare al cinema?', context: 'Cinéma' },
    { german: 'Was für Filme magst du?', english: 'What kind of movies do you like?', french: 'Quel genre de films aimes-tu ?', italian: 'Che tipo di film ti piacciono?', context: 'Cinéma' },
    { german: 'Der Film war super!', english: 'The movie was great!', french: 'Le film était génial !', italian: 'Il film era fantastico!', context: 'Cinéma' },
    { german: 'Wann fängt die Vorstellung an?', english: 'When does the show start?', french: 'À quelle heure commence la séance ?', italian: 'A che ora inizia lo spettacolo?', context: 'Cinéma' },

    // Sorties
    { german: 'Gehen wir heute Abend aus?', english: 'Are we going out tonight?', french: 'On sort ce soir ?', italian: 'Usciamo stasera?', context: 'Sorties' },
    { german: 'Ich lade dich zu meiner Party ein.', english: 'I invite you to my party.', french: 'Je t\'invite à ma fête.', italian: 'Ti invito alla mia festa.', context: 'Sorties' },
    { german: 'Wollen wir ein Picknick machen?', english: 'Shall we have a picnic?', french: 'On fait un pique-nique ?', italian: 'Facciamo un picnic?', context: 'Sorties' },
    { german: 'Treffen wir uns im Café?', english: 'Shall we meet at the café?', french: 'On se retrouve au café ?', italian: 'Ci vediamo al bar?', context: 'Sorties' }
  ]
};
