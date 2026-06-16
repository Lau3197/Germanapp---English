
import { ThemeContent, LanguageLevel } from '../../types';

export const loisirsContent: ThemeContent = {
  words: [
    // === GÉNÉRAL ===
    { article: 'das', german: 'Hobby', english: 'Hobby', plural: 'Hobbys', level: LanguageLevel.A1, subTheme: 'Général', example: 'Was sind deine Hobbys?' },
    { article: 'die', german: 'Freizeit', english: 'Free time / Leisure time', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Général', example: 'Was machst du in deiner Freizeit?' },
    { article: 'die', german: 'Aktivität', english: 'Activity', plural: 'Aktivitäten', level: LanguageLevel.A2, subTheme: 'Général', example: 'Freizeitaktivitäten planen.' },
    { article: 'die', german: 'Unterhaltung', english: 'Entertainment', plural: 'Unterhaltungen', level: LanguageLevel.A2, subTheme: 'Général', example: 'Zur Unterhaltung fernsehen.' },
    { article: 'die', german: 'Entspannung', english: 'Relaxation', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Général', example: 'Yoga dient der Entspannung.' },
    { article: 'der', german: 'Spaß', english: 'Fun', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Général', example: 'Das macht viel Spaß!' },
    { article: 'die', german: 'Leidenschaft', english: 'Passion', plural: 'Leidenschaften', level: LanguageLevel.B1, subTheme: 'Général', example: 'Fotografie ist meine Leidenschaft.' },

    // === SPORT ===
    { article: 'der', german: 'Sport', english: 'Sport', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Sport', example: 'Ich treibe jeden Tag Sport.' },
    { article: 'der', german: 'Fußball', english: 'Football / Soccer', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Sport', example: 'Fußball ist in Deutschland sehr beliebt.' },
    { article: 'der', german: 'Basketball', english: 'Basketball', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Sport', example: 'Basketball spielen.' },
    { article: 'der', german: 'Volleyball', english: 'Volleyball', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Sport', example: 'Am Strand Volleyball spielen.' },
    { article: 'das', german: 'Tennis', english: 'Tennis', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Sport', example: 'Tennis spielen lernen.' },
    { article: 'das', german: 'Tischtennis', english: 'Table tennis / Ping pong', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Sport', example: 'Tischtennis macht Spaß.' },
    { article: 'das', german: 'Schwimmen', english: 'Swimming', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Sport', example: 'Schwimmen hält fit.' },
    { article: 'das', german: 'Radfahren', english: 'Cycling', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Sport', example: 'Ich liebe Radfahren.' },
    { article: 'das', german: 'Joggen', english: 'Jogging', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Sport', example: 'Jeden Morgen joggen gehen.' },
    { article: 'das', german: 'Laufen', english: 'Running', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Sport', example: 'Laufen ist gesund.' },
    { article: 'das', german: 'Yoga', english: 'Yoga', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Sport', example: 'Yoga entspannt.' },
    { article: 'das', german: 'Fitness', english: 'Fitness', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Sport', example: 'Ins Fitnessstudio gehen.' },
    { article: 'das', german: 'Boxen', english: 'Boxing', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Sport', example: 'Boxen trainieren.' },
    { article: 'das', german: 'Golf', english: 'Golf', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Sport', example: 'Golf spielen.' },
    { article: 'das', german: 'Skifahren', english: 'Skiing', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Sport', example: 'Im Winter Skifahren.' },
    { article: 'das', german: 'Snowboarden', english: 'Snowboarding', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Sport', example: 'Snowboarden ist cool.' },
    { article: 'das', german: 'Eislaufen', english: 'Ice skating', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Sport', example: 'Im Winter Eislaufen gehen.' },
    { article: 'das', german: 'Wandern', english: 'Hiking', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Sport', example: 'Wandern in den Alpen.' },
    { article: 'das', german: 'Klettern', english: 'Climbing', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Sport', example: 'Klettern in der Halle.' },
    { article: 'das', german: 'Surfen', english: 'Surfing', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Sport', example: 'Surfen am Meer.' },
    { article: 'das', german: 'Segeln', english: 'Sailing', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Sport', example: 'Segeln lernen.' },
    { article: 'das', german: 'Tauchen', english: 'Diving', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Sport', example: 'Tauchen im Mittelmeer.' },
    { article: 'das', german: 'Angeln', english: 'Fishing', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Sport', example: 'Am Wochenende angeln gehen.' },
    { article: 'das', german: 'Reiten', english: 'Horseback riding', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Sport', example: 'Reiten macht Spaß.' },
    { article: 'die', german: 'Mannschaft', english: 'Team', plural: 'Mannschaften', level: LanguageLevel.A2, subTheme: 'Sport', example: 'Unsere Mannschaft hat gewonnen.' },
    { article: 'das', german: 'Spiel', english: 'Match / Game', plural: 'Spiele', level: LanguageLevel.A1, subTheme: 'Sport', example: 'Das Spiel beginnt um 20 Uhr.' },
    { article: 'der', german: 'Wettbewerb', english: 'Competition', plural: 'Wettbewerbe', level: LanguageLevel.B1, subTheme: 'Sport', example: 'Ein sportlicher Wettbewerb.' },
    { article: 'das', german: 'Turnier', english: 'Tournament', plural: 'Turniere', level: LanguageLevel.A2, subTheme: 'Sport', example: 'Ein Tennisturnier.' },
    { article: 'der', german: 'Verein', english: 'Club', plural: 'Vereine', level: LanguageLevel.A2, subTheme: 'Sport', example: 'Mitglied im Sportverein.' },
    { article: 'das', german: 'Fitnessstudio', english: 'Gym', plural: 'Fitnessstudios', level: LanguageLevel.A1, subTheme: 'Sport', example: 'Ins Fitnessstudio gehen.' },
    { article: 'das', german: 'Stadion', english: 'Stadium', plural: 'Stadien', level: LanguageLevel.A2, subTheme: 'Sport', example: 'Ins Stadion gehen.' },
    { article: 'das', german: 'Schwimmbad', english: 'Swimming pool', plural: 'Schwimmbäder', level: LanguageLevel.A1, subTheme: 'Sport', example: 'Ins Schwimmbad gehen.' },
    { article: 'das', german: 'Hallenbad', english: 'Indoor pool', plural: 'Hallenbäder', level: LanguageLevel.A2, subTheme: 'Sport', example: 'Im Winter ins Hallenbad.' },
    { article: 'das', german: 'Freibad', english: 'Outdoor pool', plural: 'Freibäder', level: LanguageLevel.A2, subTheme: 'Sport', example: 'Im Sommer ins Freibad.' },

    // === MUSIQUE ===
    { article: 'die', german: 'Musik', english: 'Music', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Musique', example: 'Ich höre gerne Musik.' },
    { article: 'das', german: 'Lied', english: 'Song', plural: 'Lieder', level: LanguageLevel.A1, subTheme: 'Musique', example: 'Ein schönes Lied.' },
    { article: 'das', german: 'Konzert', english: 'Concert', plural: 'Konzerte', level: LanguageLevel.A1, subTheme: 'Musique', example: 'Ins Konzert gehen.' },
    { article: 'das', german: 'Instrument', english: 'Instrument', plural: 'Instrumente', level: LanguageLevel.A1, subTheme: 'Musique', example: 'Spielst du ein Instrument?' },
    { article: 'die', german: 'Gitarre', english: 'Guitar', plural: 'Gitarren', level: LanguageLevel.A1, subTheme: 'Musique', example: 'Er spielt Gitarre.' },
    { article: 'das', german: 'Klavier', english: 'Piano', plural: 'Klaviere', level: LanguageLevel.A1, subTheme: 'Musique', example: 'Klavier spielen lernen.' },
    { article: 'die', german: 'Geige', english: 'Violin', plural: 'Geigen', level: LanguageLevel.A2, subTheme: 'Musique', example: 'Geige spielen.' },
    { article: 'die', german: 'Flöte', english: 'Flute', plural: 'Flöten', level: LanguageLevel.A2, subTheme: 'Musique', example: 'Blockflöte spielen.' },
    { article: 'die', german: 'Trompete', english: 'Trumpet', plural: 'Trompeten', level: LanguageLevel.A2, subTheme: 'Musique', example: 'Jazz-Trompete spielen.' },
    { article: 'das', german: 'Schlagzeug', english: 'Drums', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Musique', example: 'Schlagzeug spielen.' },
    { article: 'die', german: 'Band', english: 'Band', plural: 'Bands', level: LanguageLevel.A1, subTheme: 'Musique', example: 'Er spielt in einer Band.' },
    { article: 'der', german: 'Chor', english: 'Choir', plural: 'Chöre', level: LanguageLevel.A2, subTheme: 'Musique', example: 'Im Chor singen.' },
    { article: 'der', german: 'Sänger', english: 'Singer (m)', plural: 'Sänger', level: LanguageLevel.A1, subTheme: 'Musique', example: 'Ein berühmter Sänger.' },
    { article: 'die', german: 'Sängerin', english: 'Singer (f)', plural: 'Sängerinnen', level: LanguageLevel.A1, subTheme: 'Musique', example: 'Meine Lieblingssängerin.' },
    { article: 'der', german: 'Musiker', english: 'Musician', plural: 'Musiker', level: LanguageLevel.A2, subTheme: 'Musique', example: 'Ein talentierter Musiker.' },

    // === CINÉMA / THÉÂTRE ===
    { article: 'das', german: 'Kino', english: 'Cinema', plural: 'Kinos', level: LanguageLevel.A1, subTheme: 'Cinéma', example: 'Wir gehen am Freitag ins Kino.' },
    { article: 'der', german: 'Film', english: 'Movie / Film', plural: 'Filme', level: LanguageLevel.A1, subTheme: 'Cinéma', example: 'Ein spannender Film.' },
    { article: 'das', german: 'Theater', english: 'Theater', plural: 'Theater', level: LanguageLevel.A1, subTheme: 'Cinéma', example: 'Ins Theater gehen.' },
    { article: 'das', german: 'Stück', english: 'Play (theater)', plural: 'Stücke', level: LanguageLevel.A2, subTheme: 'Cinéma', example: 'Ein Theaterstück ansehen.' },
    { article: 'die', german: 'Vorstellung', english: 'Performance / Show', plural: 'Vorstellungen', level: LanguageLevel.A2, subTheme: 'Cinéma', example: 'Die Vorstellung beginnt um 20 Uhr.' },
    { article: 'der', german: 'Schauspieler', english: 'Actor', plural: 'Schauspieler', level: LanguageLevel.A2, subTheme: 'Cinéma', example: 'Mein Lieblingsschauspieler.' },
    { article: 'die', german: 'Schauspielerin', english: 'Actress', plural: 'Schauspielerinnen', level: LanguageLevel.A2, subTheme: 'Cinéma', example: 'Eine berühmte Schauspielerin.' },
    { article: 'die', german: 'Komödie', english: 'Comedy', plural: 'Komödien', level: LanguageLevel.A2, subTheme: 'Cinéma', example: 'Ich mag Komödien.' },
    { article: 'der', german: 'Krimi', english: 'Detective story / Crime thriller', plural: 'Krimis', level: LanguageLevel.A2, subTheme: 'Cinéma', example: 'Ein spannender Krimi.' },
    { article: 'der', german: 'Actionfilm', english: 'Action movie', plural: 'Actionfilme', level: LanguageLevel.A2, subTheme: 'Cinéma', example: 'Actionfilme mit viel Spannung.' },
    { article: 'der', german: 'Horrorfilm', english: 'Horror movie', plural: 'Horrorfilme', level: LanguageLevel.A2, subTheme: 'Cinéma', example: 'Horrorfilme sind nichts für mich.' },
    { article: 'die', german: 'Serie', english: 'Series', plural: 'Serien', level: LanguageLevel.A1, subTheme: 'Cinéma', example: 'Eine gute Serie auf Netflix.' },

    // === LECTURE / CULTURE ===
    { article: 'das', german: 'Lesen', english: 'Reading', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Lecture', example: 'Lesen ist mein Hobby.' },
    { article: 'das', german: 'Buch', english: 'Book', plural: 'Bücher', level: LanguageLevel.A1, subTheme: 'Lecture', example: 'Ein gutes Buch lesen.' },
    { article: 'der', german: 'Roman', english: 'Novel', plural: 'Romane', level: LanguageLevel.A2, subTheme: 'Lecture', example: 'Einen Roman lesen.' },
    { article: 'die', german: 'Zeitung', english: 'Newspaper', plural: 'Zeitungen', level: LanguageLevel.A1, subTheme: 'Lecture', example: 'Die Zeitung lesen.' },
    { article: 'die', german: 'Zeitschrift', english: 'Magazine', plural: 'Zeitschriften', level: LanguageLevel.A2, subTheme: 'Lecture', example: 'Eine Zeitschrift kaufen.' },
    { article: 'das', german: 'Museum', english: 'Museum', plural: 'Museen', level: LanguageLevel.A1, subTheme: 'Lecture', example: 'Ins Museum gehen.' },
    { article: 'die', german: 'Ausstellung', english: 'Exhibition', plural: 'Ausstellungen', level: LanguageLevel.A2, subTheme: 'Lecture', example: 'Eine Ausstellung besuchen.' },
    { article: 'die', german: 'Galerie', english: 'Gallery', plural: 'Galerien', level: LanguageLevel.A2, subTheme: 'Lecture', example: 'Eine Kunstgalerie.' },
    { article: 'die', german: 'Bibliothek', english: 'Library', plural: 'Bibliotheken', level: LanguageLevel.A1, subTheme: 'Lecture', example: 'In die Bibliothek gehen.' },

    // === JEUX ===
    { article: 'das', german: 'Spiel', english: 'Game', plural: 'Spiele', level: LanguageLevel.A1, subTheme: 'Jeux', example: 'Ein Spiel spielen.' },
    { article: 'das', german: 'Brettspiel', english: 'Board game', plural: 'Brettspiele', level: LanguageLevel.A2, subTheme: 'Jeux', example: 'Ein Brettspiel mit der Familie.' },
    { article: 'das', german: 'Kartenspiel', english: 'Card game', plural: 'Kartenspiele', level: LanguageLevel.A2, subTheme: 'Jeux', example: 'Poker ist ein Kartenspiel.' },
    { article: 'das', german: 'Schach', english: 'Chess', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Jeux', example: 'Schach spielen.' },
    { article: 'das', german: 'Videospiel', english: 'Video game', plural: 'Videospiele', level: LanguageLevel.A1, subTheme: 'Jeux', example: 'Videospiele spielen.' },
    { article: 'das', german: 'Computerspiel', english: 'Computer game', plural: 'Computerspiele', level: LanguageLevel.A1, subTheme: 'Jeux', example: 'Computerspiele am PC.' },
    { article: 'die', german: 'Konsole', english: 'Console', plural: 'Konsolen', level: LanguageLevel.A2, subTheme: 'Jeux', example: 'Eine Spielkonsole.' },
    { article: 'das', german: 'Puzzle', english: 'Puzzle', plural: 'Puzzles', level: LanguageLevel.A1, subTheme: 'Jeux', example: 'Ein Puzzle machen.' },

    // === CRÉATIVITÉ ===
    { article: 'die', german: 'Fotografie', english: 'Photography', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Créativité', example: 'Fotografie als Hobby.' },
    { article: 'das', german: 'Foto', english: 'Photo', plural: 'Fotos', level: LanguageLevel.A1, subTheme: 'Créativité', example: 'Fotos machen.' },
    { article: 'die', german: 'Kamera', english: 'Camera', plural: 'Kameras', level: LanguageLevel.A1, subTheme: 'Créativité', example: 'Eine neue Kamera kaufen.' },
    { article: 'das', german: 'Malen', english: 'Painting', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Créativité', example: 'Ich male gern.' },
    { article: 'das', german: 'Zeichnen', english: 'Drawing', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Créativité', example: 'Zeichnen lernen.' },
    { article: 'das', german: 'Basteln', english: 'Arts and crafts / Handicraft', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Créativité', example: 'Mit den Kindern basteln.' },
    { article: 'das', german: 'Stricken', english: 'Knitting', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Créativité', example: 'Einen Pullover stricken.' },
    { article: 'das', german: 'Nähen', english: 'Sewing', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Créativité', example: 'Kleidung nähen.' },
    { article: 'das', german: 'Tanzen', english: 'Dancing', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Créativité', example: 'Tanzen gehen.' },
    { article: 'der', german: 'Tanz', english: 'Dance', plural: 'Tänze', level: LanguageLevel.A1, subTheme: 'Créativité', example: 'Ein lateinamerikanischer Tanz.' },
    { article: 'das', german: 'Kochen', english: 'Cooking', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Créativité', example: 'Kochen ist mein Hobby.' },
    { article: 'das', german: 'Backen', english: 'Baking', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Créativité', example: 'Kuchen backen.' },
    { article: 'das', german: 'Gärtnern', english: 'Gardening', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Créativité', example: 'Im Garten arbeiten.' },

    // === SORTIES ===
    { article: 'die', german: 'Party', english: 'Party', plural: 'Partys', level: LanguageLevel.A1, subTheme: 'Sorties', example: 'Auf eine Party gehen.' },
    { article: 'die', german: 'Feier', english: 'Celebration / Party', plural: 'Feiern', level: LanguageLevel.A1, subTheme: 'Sorties', example: 'Eine Geburtstagsfeier.' },
    { article: 'der', german: 'Club', english: 'Club', plural: 'Clubs', level: LanguageLevel.A2, subTheme: 'Sorties', example: 'In den Club gehen.' },
    { article: 'die', german: 'Disko', english: 'Disco', plural: 'Diskos', level: LanguageLevel.A2, subTheme: 'Sorties', example: 'In die Disko gehen.' },
    { article: 'die', german: 'Bar', english: 'Bar', plural: 'Bars', level: LanguageLevel.A1, subTheme: 'Sorties', example: 'In eine Bar gehen.' },
    { article: 'das', german: 'Restaurant', english: 'Restaurant', plural: 'Restaurants', level: LanguageLevel.A1, subTheme: 'Sorties', example: 'Im Restaurant essen.' },
    { article: 'das', german: 'Café', english: 'Café', plural: 'Cafés', level: LanguageLevel.A1, subTheme: 'Sorties', example: 'Ins Café gehen.' },
    { article: 'das', german: 'Picknick', english: 'Picnic', plural: 'Picknicke', level: LanguageLevel.A1, subTheme: 'Sorties', example: 'Ein Picknick im Park.' },
    { article: 'das', german: 'Festival', english: 'Festival', plural: 'Festivals', level: LanguageLevel.A2, subTheme: 'Sorties', example: 'Ein Musikfestival.' },

    // === VERBES ===
    { article: '', german: 'spielen', english: 'to play', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Verbes', example: 'Fußball spielen.' },
    { article: '', german: 'treiben', english: 'to practice', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Verbes', example: 'Sport treiben.' },
    { article: '', german: 'üben', english: 'to practice', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Verbes', example: 'Jeden Tag üben.' },
    { article: '', german: 'trainieren', english: 'to train', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Verbes', example: 'Im Fitnessstudio trainieren.' },
    { article: '', german: 'gewinnen', english: 'to win', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Verbes', example: 'Das Spiel gewinnen.' },
    { article: '', german: 'verlieren', english: 'to lose', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Verbes', example: 'Das Spiel verlieren.' },
    { article: '', german: 'sammeln', english: 'to collect', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Verbes', example: 'Briefmarken sammeln.' },
    { article: '', german: 'entspannen (sich)', english: 'to relax', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Verbes', example: 'Am Wochenende entspannen.' },
    { article: '', german: 'ausgehen', english: 'to go out', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Verbes', example: 'Am Samstag ausgehen.' },
    { article: '', german: 'feiern', english: 'to celebrate', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Verbes', example: 'Geburtstag feiern.' },
    { article: '', german: 'singen', english: 'to sing', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Verbes', example: 'Ein Lied singen.' },
    { article: '', german: 'tanzen', english: 'to dance', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Verbes', example: 'Gern tanzen.' },
    { article: '', german: 'fotografieren', english: 'to photograph', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Verbes', example: 'Landschaften fotografieren.' },
    { article: '', german: 'malen', english: 'to paint', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Verbes', example: 'Ein Bild malen.' },
    { article: '', german: 'zeichnen', english: 'to draw', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Verbes', example: 'Porträts zeichnen.' }
  ],
  phrases: [
    // Questions sur les loisirs
    { german: 'Was machst du in deiner Freizeit?', english: 'What do you do in your free time?', context: 'Général' },
    { german: 'Was sind deine Hobbys?', english: 'What are your hobbies?', context: 'Général' },
    { german: 'Wofür interessierst du dich?', english: 'What are you interested in?', context: 'Général' },
    { german: 'Hast du am Wochenende Zeit?', english: 'Do you have time on the weekend?', context: 'Général' },

    // Réponses
    { german: 'Ich interessiere mich für...', english: 'I am interested in...', context: 'Hobbys' },
    { german: 'Mein Hobby ist...', english: 'My hobby is...', context: 'Hobbys' },
    { german: 'Ich spiele gern...', english: 'I like playing...', context: 'Hobbys' },
    { german: 'In meiner Freizeit...', english: 'In my free time...', context: 'Hobbys' },

    // Sport
    { german: 'Ich treibe regelmäßig Sport.', english: 'I exercise regularly.', context: 'Sport' },
    { german: 'Ich gehe zweimal pro Woche ins Fitnessstudio.', english: 'I go to the gym twice a week.', context: 'Sport' },
    { german: 'Spielst du in einem Verein?', english: 'Do you play in a club?', context: 'Sport' },
    { german: 'Wer hat das Spiel gewonnen?', english: 'Who won the match?', context: 'Sport' },

    // Musique
    { german: 'Ich spiele seit fünf Jahren Klavier.', english: 'I\'ve been playing the piano for five years.', context: 'Musique' },
    { german: 'Welche Musik hörst du gern?', english: 'What music do you like listening to?', context: 'Musique' },
    { german: 'Gehen wir ins Konzert?', english: 'Shall we go to the concert?', context: 'Musique' },

    // Cinéma
    { german: 'Hast du Lust, ins Kino zu gehen?', english: 'Do you feel like going to the cinema?', context: 'Cinéma' },
    { german: 'Was für Filme magst du?', english: 'What kind of movies do you like?', context: 'Cinéma' },
    { german: 'Der Film war super!', english: 'The movie was great!', context: 'Cinéma' },
    { german: 'Wann fängt die Vorstellung an?', english: 'When does the show start?', context: 'Cinéma' },

    // Sorties
    { german: 'Gehen wir heute Abend aus?', english: 'Are we going out tonight?', context: 'Sorties' },
    { german: 'Ich lade dich zu meiner Party ein.', english: 'I invite you to my party.', context: 'Sorties' },
    { german: 'Wollen wir ein Picknick machen?', english: 'Shall we have a picnic?', context: 'Sorties' },
    { german: 'Treffen wir uns im Café?', english: 'Shall we meet at the café?', context: 'Sorties' }
  ]
};
