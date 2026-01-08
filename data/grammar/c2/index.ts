import { GrammarLevel, LanguageLevel } from '../../../types';

export const c2Grammar: GrammarLevel = {
  level: LanguageLevel.C2,
  title: "Niveau C2 : La Maîtrise",
  description: "Perfectionner sa maîtrise de l'allemand à un niveau quasi-natif.",
  sections: [
    {
      title: "6.1 Les Registres de Langue et le Style",
      topics: [
        {
          id: "c2-6-1-1",
          title: "6.1.1 Les différents registres",
          content: `**Les registres de langue en allemand**

L'allemand distingue plusieurs registres qu'il est essentiel de maîtriser au niveau C2 :

**1. Hochdeutsch (Allemand standard)**
La langue officielle, utilisée dans les médias, l'administration et l'enseignement.
• Caractéristiques : grammaire stricte, vocabulaire neutre
• Usage : contextes formels, écrits officiels

**2. Umgangssprache (Langue courante)**
Le registre du quotidien, entre amis et famille.
• Caractéristiques : contractions, expressions familières
• Exemples de contractions :
  - "haben wir" → "ham wir"
  - "ist das" → "is das"
  - "einmal" → "mal"

**3. Gehobene Sprache (Langue soutenue)**
Utilisée dans la littérature, les discours officiels.
• Caractéristiques : vocabulaire recherché, structures complexes
• Exemples :
  - "bekommen" → "erhalten" (recevoir)
  - "anfangen" → "beginnen" (commencer)
  - "sagen" → "äußern" (dire/exprimer)

**4. Fachsprache (Langue technique)**
Vocabulaire spécialisé par domaine.
• Juridique : "Rechtsbehelfsbelehrung" (instruction sur les voies de recours)
• Médical : "Differentialdiagnose" (diagnostic différentiel)
• Économique : "Kapitalflussrechnung" (tableau des flux de trésorerie)

**5. Jugendsprache (Langage des jeunes)**
En constante évolution, fortement influencé par l'anglais.
• "cringe" (gênant)
• "lost" (perdu/confus)
• "flexen" (se vanter)`,
          examples: [
            { de: "Könntest du mir bitte behilflich sein?", fr: "Pourrais-tu m'aider ? (soutenu)", note: "Gehobene Sprache" },
            { de: "Kannste mir mal helfen?", fr: "Tu peux m'aider ? (familier)", note: "Umgangssprache" },
            { de: "Ich ersuche Sie um Unterstützung.", fr: "Je sollicite votre soutien. (formel)", note: "Amtssprache" }
          ]
        },
        {
          id: "c2-6-1-2",
          title: "6.1.2 Nuances stylistiques avancées",
          content: `**Les subtilités stylistiques**

**Particules modales avancées**

Les particules modales nuancent subtilement le sens :

| Particule | Nuance | Exemple |
|-----------|--------|---------|
| schon | rassurance | "Das wird schon klappen." |
| eben | résignation | "Das ist eben so." |
| halt | fatalisme | "Das ist halt das Leben." |
| wohl | supposition | "Er wird wohl kommen." |
| etwa | doute/surprise | "Ist das etwa wahr?" |
| bloß | insistance | "Vergiss das bloß nicht!" |
| ruhig | encouragement | "Komm ruhig rein!" |

**Combinaisons de particules**
• "doch mal" → invitation pressante : "Komm doch mal vorbei!"
• "ja wohl" → évidence : "Das ist ja wohl klar!"
• "denn eigentlich" → curiosité : "Was machst du denn eigentlich?"

**L'ironie et le sous-entendu**
• "Na, das kann ja heiter werden!" (Ça promet ! - ironique)
• "Das hast du ja toll hingekriegt!" (selon le ton : compliment ou reproche)

**Le hedging (atténuation)**
Techniques pour nuancer ses propos :
• "gewissermaßen" (en quelque sorte)
• "sozusagen" (pour ainsi dire)
• "im Grunde genommen" (au fond)
• "wenn ich mich nicht irre" (si je ne m'abuse)`,
          examples: [
            { de: "Das ist wohl kaum zu glauben.", fr: "C'est à peine croyable.", note: "'wohl' atténue l'affirmation" },
            { de: "Du könntest ruhig mal anrufen.", fr: "Tu pourrais appeler de temps en temps.", note: "Reproche atténué" },
            { de: "Das war ja wohl nichts!", fr: "C'était nul !", note: "Critique renforcée" }
          ]
        }
      ]
    },
    {
      title: "6.2 Structures Littéraires et Archaïques",
      topics: [
        {
          id: "c2-6-2-1",
          title: "6.2.1 Le Konjunktiv I - Maîtrise complète",
          content: `**Le Konjunktiv I : usage avancé**

**Formation complète**

| Personne | sein | haben | werden | können |
|----------|------|-------|--------|--------|
| ich | sei | habe | werde | könne |
| du | seiest | habest | werdest | könnest |
| er/sie/es | sei | habe | werde | könne |
| wir | seien | haben | werden | können |
| ihr | seiet | habet | werdet | könnet |
| sie/Sie | seien | haben | werden | können |

**Usages au niveau C2**

**1. Discours indirect formel (presse, académique)**
• Er sagte, er **sei** müde. (Il a dit qu'il était fatigué.)
• Sie behauptet, sie **habe** nichts gewusst.

**2. Souhaits et formules figées**
• "Es **lebe** der König!" (Vive le roi !)
• "**Möge** er in Frieden ruhen."
• "**Gott sei Dank**!" (Dieu merci !)
• "**Wie dem auch sei**..." (Quoi qu'il en soit...)

**3. Instructions (recettes, notices)**
• "Man **nehme** zwei Eier..." (Prenez deux œufs...)
• "Man **beachte** die Sicherheitshinweise."

**4. Concession avec "sei"**
• "**Sei** es nun richtig oder falsch..." (Que ce soit vrai ou faux...)
• "**Sei** es, wie es **wolle**..." (Quoi qu'il advienne...)

**Remplacement par Konjunktiv II**
Quand le Konjunktiv I est identique à l'indicatif :
• "Sie sagten, sie haben..." → "Sie sagten, sie **hätten**..."`,
          examples: [
            { de: "Der Minister erklärte, die Lage sei unter Kontrolle.", fr: "Le ministre a déclaré que la situation était sous contrôle.", note: "Style journalistique" },
            { de: "Man bedenke, dass Rom nicht an einem Tag erbaut wurde.", fr: "Considérons que Rome ne s'est pas construite en un jour.", note: "Style littéraire" },
            { de: "Seien wir ehrlich: Das ist ein Problem.", fr: "Soyons honnêtes : c'est un problème.", note: "Formule rhétorique" }
          ]
        },
        {
          id: "c2-6-2-2",
          title: "6.2.2 Constructions littéraires et poétiques",
          content: `**Structures de la langue littéraire**

**1. Le génitif antéposé (littéraire/archaïque)**
Structure : Génitif + Nom
• "**Des Menschen** Wille" (La volonté de l'homme)
• "**Gottes** Wege sind unergründlich" (Les voies de Dieu sont impénétrables)
• "**Der Liebe** Macht" (Le pouvoir de l'amour)

**2. Inversion stylistique**
Placer l'élément important en première position :
• "Schön **war** die Zeit." (au lieu de "Die Zeit war schön.")
• "Groß **ist** seine Güte."
• "Vergessen **werde** ich das nie."

**3. Participe I étendu (Partizipialattribut)**
Structure : article + [participe + compléments] + nom
• "der **im Garten spielende** Junge"
  (le garçon jouant dans le jardin)
• "die **von allen geliebte** Großmutter"
  (la grand-mère aimée de tous)
• "ein **seit Jahren nicht mehr gefahrener** Zug"
  (un train qui n'a plus circulé depuis des années)

**4. Le passif impersonnel étendu**
• "Es wurde getanzt und gelacht."
  (On a dansé et ri.)
• "Hier wird nicht geraucht!"
  (On ne fume pas ici !)

**5. Formules archaïques encore utilisées**
• "dessen ungeachtet" (nonobstant cela)
• "nichtsdestotrotz" / "nichtsdestoweniger" (néanmoins)
• "meines Erachtens" (à mon avis - formel)
• "kraft meines Amtes" (en vertu de ma fonction)`,
          examples: [
            { de: "Des Lebens Mühen sind vergessen.", fr: "Les peines de la vie sont oubliées.", note: "Génitif antéposé" },
            { de: "Die seit Wochen auf eine Antwort wartenden Kunden wurden informiert.", fr: "Les clients attendant une réponse depuis des semaines ont été informés.", note: "Partizipialattribut étendu" },
            { de: "Dessen ungeachtet müssen wir weitermachen.", fr: "Nonobstant cela, nous devons continuer.", note: "Style administratif/juridique" }
          ]
        }
      ]
    },
    {
      title: "6.3 Variations Régionales et Dialectes",
      topics: [
        {
          id: "c2-6-3-1",
          title: "6.3.1 L'allemand standard vs les dialectes",
          content: `**La diversité linguistique de l'espace germanophone**

**Hochdeutsch vs Dialekte**

L'allemand standard (Hochdeutsch) coexiste avec de nombreux dialectes :

**1. Dialectes du Nord (Niederdeutsch/Plattdeutsch)**
• Hambourg, Brême, Basse-Saxe
• Caractéristiques :
  - Absence de la mutation consonantique
  - "ik" au lieu de "ich"
  - "Water" au lieu de "Wasser"

**2. Dialectes du Centre (Mitteldeutsch)**
• Berlin, Saxe, Thuringe
• Berlinerisch : "Ick bin een Berliner"
• Sächsisch : prononciation douce des consonnes

**3. Dialectes du Sud (Oberdeutsch)**
• **Bairisch** (Bavière, Autriche)
  - "Grüß Gott" (Bonjour)
  - "Servus" (Salut)
  - "I mog di" (Je t'aime bien)
  
• **Alemannisch** (Suisse, Alsace, Bade-Wurtemberg)
  - "Grüezi" (Bonjour - Suisse)
  - "Sali" (Salut)

**Différences grammaticales notables**

| Standard | Bavière | Suisse | Signification |
|----------|---------|--------|---------------|
| nicht | ned/net | nöd | pas |
| ich bin | i bin | ich bi | je suis |
| es gibt | es gibt | es git | il y a |
| wir haben | mir ham | mir händ | nous avons |

**L'allemand autrichien (Österreichisches Deutsch)**
Vocabulaire officiel différent :
• Kartoffel → Erdapfel (pomme de terre)
• Tomate → Paradeiser (tomate)
• Schlagsahne → Schlagobers (crème fouettée)
• Januar → Jänner (janvier)`,
          examples: [
            { de: "Mia san mia! (Bairisch)", fr: "Nous sommes ce que nous sommes !", note: "Devise bavaroise célèbre" },
            { de: "Grüezi mitenand! (Schweizerdeutsch)", fr: "Bonjour à tous !", note: "Salutation suisse" },
            { de: "Dit is ja janz toll! (Berlinerisch)", fr: "C'est vraiment super !", note: "Dialecte berlinois" }
          ]
        },
        {
          id: "c2-6-3-2",
          title: "6.3.2 Comprendre et adapter son registre",
          content: `**S'adapter aux contextes régionaux**

**Expressions régionales courantes**

**Allemagne du Nord**
• "Moin!" / "Moin moin!" - Salutation universelle (matin/soir)
• "plietsch" - intelligent, malin
• "Tschüs" - Au revoir (origine du Nord)

**Allemagne du Sud / Autriche**
• "Grüß Gott!" - Bonjour (littéralement "Salue Dieu")
• "Pfiat di!" - Au revoir (que Dieu te protège)
• "Bussi" - Bisou
• "leiwand" (autrichien) - super, génial

**Suisse**
• "Grüezi" - Bonjour formel
• "Merci vilmal" - Merci beaucoup
• "Es freut mich" - Enchanté
• "Chrüsimüsi" - Désordre, bazar

**Le phénomène du "Denglisch"**
Mélange allemand-anglais, très répandu :
• "Ich habe das gedownloadet."
• "Das ist very important."
• "Wir müssen das asap machen."
• "Lass uns das Thema mal pitchen."

**Faux amis régionaux**

| Mot | Allemagne | Autriche/Suisse |
|-----|-----------|-----------------|
| Paradeiser | ? | Tomate |
| Trottoir | trottoir | Bürgersteig |
| Velo | ? | Fahrrad |
| heuer | jadis | cette année |`,
          examples: [
            { de: "In Bayern sagt man 'Servus' zur Begrüßung und zum Abschied.", fr: "En Bavière, on dit 'Servus' pour dire bonjour et au revoir.", note: "Polyvalence régionale" },
            { de: "Das Wort 'geil' war früher vulgär, ist heute umgangssprachlich normal.", fr: "Le mot 'geil' était autrefois vulgaire, aujourd'hui c'est familier.", note: "Évolution du registre" }
          ]
        }
      ]
    },
    {
      title: "6.4 Rhétorique et Argumentation Avancée",
      topics: [
        {
          id: "c2-6-4-1",
          title: "6.4.1 Techniques rhétoriques",
          content: `**L'art de la rhétorique en allemand**

**Connecteurs argumentatifs avancés**

**Pour introduire**
• "Zunächst einmal..." (Tout d'abord...)
• "An erster Stelle..." (En premier lieu...)
• "Vorweg sei gesagt..." (Disons d'emblée...)

**Pour développer**
• "Darüber hinaus..." (En outre...)
• "Hinzu kommt, dass..." (À cela s'ajoute que...)
• "Ferner ist zu beachten..." (Il faut également noter...)
• "In diesem Zusammenhang..." (Dans ce contexte...)

**Pour nuancer**
• "Zwar... aber..." (Certes... mais...)
• "Einerseits... andererseits..." (D'une part... d'autre part...)
• "Wenngleich... so..." (Bien que... cependant...)
• "Unbeschadet dessen..." (Sans préjudice de cela...)

**Pour conclure**
• "Zusammenfassend lässt sich sagen..." (En résumé, on peut dire...)
• "Alles in allem..." (Tout compte fait...)
• "Im Endeffekt..." (En fin de compte...)
• "Schlussendlich..." (Finalement...)

**Figures de style courantes**

| Figure | Allemand | Exemple |
|--------|----------|---------|
| Antithèse | Antithese | "Klein, aber fein." |
| Métaphore | Metapher | "Das Leben ist eine Reise." |
| Hyperbole | Hyperbel | "Ich sterbe vor Hunger." |
| Litote | Litotes | "nicht uninteressant" (= intéressant) |
| Euphémisme | Euphemismus | "von uns gehen" (= mourir) |`,
          examples: [
            { de: "Zwar mag diese Lösung kurzfristig teuer erscheinen, langfristig jedoch wird sie sich auszahlen.", fr: "Certes, cette solution peut sembler coûteuse à court terme, mais à long terme, elle sera rentable.", note: "Structure concessive" },
            { de: "Zusammenfassend lässt sich festhalten, dass die Vorteile die Nachteile bei Weitem überwiegen.", fr: "En résumé, on peut constater que les avantages l'emportent largement sur les inconvénients.", note: "Conclusion argumentée" }
          ]
        },
        {
          id: "c2-6-4-2",
          title: "6.4.2 Expression des opinions nuancées",
          content: `**Exprimer des opinions avec finesse**

**Degrés de certitude**

**Certitude absolue**
• "Es steht fest, dass..." (Il est établi que...)
• "Zweifellos..." / "Ohne Zweifel..." (Sans aucun doute...)
• "Es ist unbestritten, dass..." (Il est incontestable que...)

**Forte probabilité**
• "Es ist sehr wahrscheinlich, dass..." (Il est très probable que...)
• "Allem Anschein nach..." (Selon toute apparence...)
• "Es deutet alles darauf hin, dass..." (Tout indique que...)

**Probabilité modérée**
• "Es könnte sein, dass..." (Il se pourrait que...)
• "Möglicherweise..." (Possiblement...)
• "Es ist nicht auszuschließen, dass..." (On ne peut exclure que...)

**Incertitude/Doute**
• "Es bleibt fraglich, ob..." (Il reste à savoir si...)
• "Es ist zweifelhaft, ob..." (Il est douteux que...)
• "Man darf bezweifeln, dass..." (On peut douter que...)

**Formules de distanciation**
Pour rapporter sans s'engager :
• "angeblich" (prétendument)
• "vermeintlich" (supposément)
• "den Aussagen zufolge" (selon les déclarations)
• "wie verlautet" (selon ce qui se dit)

**Exprimer le désaccord poliment**
• "Da muss ich Ihnen leider widersprechen."
• "Mit Verlaub, das sehe ich anders."
• "Erlauben Sie mir, eine andere Sichtweise einzubringen."
• "Bei allem Respekt, ich bin anderer Meinung."`,
          examples: [
            { de: "Es ist nicht von der Hand zu weisen, dass diese Entwicklung besorgniserregend ist.", fr: "On ne peut nier que cette évolution est préoccupante.", note: "Concession élégante" },
            { de: "Mit Verlaub gesagt, diese Argumentation greift meines Erachtens zu kurz.", fr: "Permettez-moi de dire que cette argumentation me semble insuffisante.", note: "Critique respectueuse" }
          ]
        }
      ]
    },
    {
      title: "6.5 Subtilités Grammaticales Avancées",
      topics: [
        {
          id: "c2-6-5-1",
          title: "6.5.1 Constructions complexes",
          content: `**Structures grammaticales de haut niveau**

**1. Double infinitif au passé**
Avec les verbes modaux et certains verbes de perception :
• "Er hat das nicht machen **können**." (Il n'a pas pu faire ça.)
• "Sie hat ihn kommen **sehen**." (Elle l'a vu venir.)
• "Ich habe es dir sagen **wollen**." (J'ai voulu te le dire.)

**Ordre dans la subordonnée :**
• "..., weil er es nicht hat machen **können**."
  (Le verbe conjugué passe AVANT les infinitifs)

**2. Le "Genitivus partitivus"**
Expression de la quantité avec le génitif (style soutenu) :
• "ein Glas **guten Weines**" (un verre de bon vin)
• "eine Tasse **heißen Kaffees**" (une tasse de café chaud)
• "voll **des Lobes**" (plein de louanges)

**3. Relatives au génitif avec "dessen/deren"**
• "Der Mann, **dessen** Auto gestohlen wurde..."
• "Die Frau, **deren** Kinder hier spielen..."
• "Das Haus, **dessen** Dach beschädigt ist..."

**4. Constructions avec "zu + Infinitiv" avancées**

**anstatt... zu + Inf.** (au lieu de)
• "Anstatt zu arbeiten, spielte er."

**ohne... zu + Inf.** (sans)
• "Er ging, ohne sich zu verabschieden."

**um... zu + Inf.** (pour/afin de)
• "Ich lerne Deutsch, um in Deutschland zu studieren."

**5. Le "es" explétif**
• "Es wird erzählt, dass..." (On raconte que...)
• "Es heißt, dass..." (On dit que...)
• "Es gilt als sicher, dass..." (Il est considéré comme certain que...)`,
          examples: [
            { de: "Das ist der Autor, dessen letztes Buch zum Bestseller wurde.", fr: "C'est l'auteur dont le dernier livre est devenu un best-seller.", note: "Relative au génitif" },
            { de: "Er behauptete, das Problem gelöst zu haben.", fr: "Il prétendait avoir résolu le problème.", note: "Infinitif passé" },
            { de: "Sie hat das Buch lesen wollen, aber nicht können.", fr: "Elle a voulu lire le livre mais n'a pas pu.", note: "Double infinitif" }
          ]
        },
        {
          id: "c2-6-5-2",
          title: "6.5.2 Nuances du passif et alternatives",
          content: `**Maîtrise complète du passif**

**1. Passif avec verbes à complément datif**
Le complément datif devient sujet sans changer de cas :
• "Mir wurde geholfen." (On m'a aidé.)
• "Ihm wird gratuliert." (On le félicite.)
• "Ihr wurde gekündigt." (Elle a été licenciée.)

**2. Passif impersonnel**
Quand il n'y a pas de sujet logique :
• "Es wurde viel gelacht." (On a beaucoup ri.)
• "Hier wird nicht geraucht." (On ne fume pas ici.)
• "Es wurde bis spät in die Nacht gefeiert."

**3. Alternatives au passif (niveau C2)**

**"sich lassen + Infinitiv"** (possibilité)
• "Das lässt sich machen." (Ça peut se faire.)
• "Das Problem lässt sich lösen."

**"sein + zu + Infinitiv"** (nécessité/possibilité)
• "Das ist zu beachten." (C'est à noter.)
• "Die Arbeit ist bis morgen abzugeben."

**"bleiben + zu + Infinitiv"** (reste à faire)
• "Es bleibt abzuwarten." (Il reste à voir.)
• "Das bleibt noch zu klären."

**"bekommen/kriegen + Partizip II"** (Rezipientenpassiv)
• "Er bekam das Buch geschenkt." (On lui a offert le livre.)
• "Sie kriegt den Kaffee gebracht."

**"gehören + Partizip II"** (mérite d'être)
• "Das gehört bestraft." (Ça mérite punition.)
• "Er gehört gelobt." (Il mérite d'être loué.)`,
          examples: [
            { de: "Dieses Verhalten lässt sich nicht rechtfertigen.", fr: "Ce comportement ne peut se justifier.", note: "Alternative au passif avec 'lassen'" },
            { de: "Die Frist ist unbedingt einzuhalten.", fr: "Le délai doit absolument être respecté.", note: "'sein + zu + Inf.' = obligation" },
            { de: "Er bekam die Stelle angeboten.", fr: "On lui a proposé le poste.", note: "Rezipientenpassiv" }
          ]
        }
      ]
    },
    {
      title: "6.6 Compétences Textuelles Avancées",
      topics: [
        {
          id: "c2-6-6-1",
          title: "6.6.1 Rédaction académique et professionnelle",
          content: `**Conventions de l'écriture formelle**

**Structure d'un texte argumentatif**

**1. Einleitung (Introduction)**
• Présentation du sujet
• Thèse ou question centrale
• Annonce du plan

**2. Hauptteil (Développement)**
• Arguments structurés
• Exemples et preuves
• Contre-arguments et réfutation

**3. Schluss (Conclusion)**
• Synthèse
• Ouverture ou recommandation

**Formules académiques essentielles**

**Pour définir**
• "Unter X versteht man..." (Par X, on entend...)
• "X wird definiert als..." (X est défini comme...)
• "Im Sinne dieser Arbeit bedeutet X..."

**Pour citer**
• "Laut + Dat. / Nach + Dat." (Selon...)
• "Wie X (Jahr) feststellt,..." (Comme X (année) le constate,...)
• "X zufolge..." (Selon X...)

**Pour analyser**
• "Es fällt auf, dass..." (On remarque que...)
• "Bei näherer Betrachtung zeigt sich..." (À y regarder de plus près...)
• "Aus X ergibt sich..." (De X, il résulte...)

**Pour comparer**
• "Im Vergleich zu..." (En comparaison avec...)
• "Im Gegensatz zu..." (Contrairement à...)
• "Analog zu..." (De manière analogue à...)

**Connecteurs de haut niveau**

| Fonction | Connecteur |
|----------|------------|
| Cause | aufgrund + Gen., infolge + Gen. |
| Conséquence | demzufolge, folglich, infolgedessen |
| Concession | wenngleich, obschon, ungeachtet + Gen. |
| But | zwecks + Gen., behufs + Gen. (archaïque) |`,
          examples: [
            { de: "Aufgrund der vorliegenden Daten lässt sich schlussfolgern, dass...", fr: "Sur la base des données disponibles, on peut conclure que...", note: "Style académique" },
            { de: "Wenngleich diese These plausibel erscheint, so weist sie doch erhebliche Schwächen auf.", fr: "Bien que cette thèse paraisse plausible, elle présente néanmoins des faiblesses considérables.", note: "Critique nuancée" }
          ]
        },
        {
          id: "c2-6-6-2",
          title: "6.6.2 Compréhension de textes complexes",
          content: `**Analyser des textes littéraires et spécialisés**

**Repérer les marqueurs de style**

**1. Ironie et sarcasme**
Indices :
• Exagération manifeste
• Décalage entre le ton et le contenu
• Guillemets de distanciation ("sogenannt")

**2. Implicite et présupposés**
• "wieder" implique une répétition
• "sogar" implique une gradation
• "schon" peut impliquer l'évidence ou le reproche

**3. Références culturelles**
Allusions fréquentes à :
• La littérature (Goethe, Schiller, Kafka)
• L'histoire (Nazi-Zeit, Wende)
• La philosophie (Kant, Hegel, Nietzsche)

**Analyse des registres dans un texte**

**Texte journalistique**
• Objectivité apparente
• Konjunktiv I pour les citations
• Passif fréquent

**Texte littéraire**
• Subjectivité assumée
• Figures de style élaborées
• Jeux sur les registres

**Texte juridique/administratif**
• Nominalisation excessive
• Phrases longues et complexes
• Vocabulaire technique

**Comprendre les nuances**

| Expression | Nuance |
|------------|--------|
| nicht unbedingt | pas forcément |
| gewissermaßen | en quelque sorte |
| im Grunde genommen | au fond |
| streng genommen | à strictement parler |
| wohlgemerkt | notez bien |`,
          examples: [
            { de: "Seine 'Hilfe' hat das Problem nur verschlimmert.", fr: "Son 'aide' n'a fait qu'aggraver le problème.", note: "Guillemets ironiques" },
            { de: "Er hat es wieder nicht geschafft.", fr: "Il n'y est encore pas arrivé.", note: "'wieder' implique répétition/reproche" }
          ]
        }
      ]
    }
  ]
};

