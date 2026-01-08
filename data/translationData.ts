// Données pour l'onglet Traduction - Conseils pour traduire des articles de presse DE → FR

export interface TranslationTip {
  id: string;
  title: string;
  content: string;
  examples: {
    de: string;
    frBad?: string;
    frGood: string;
    explanation?: string;
  }[];
}

export interface TranslationSection {
  id: string;
  title: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  icon: string;
  tips: TranslationTip[];
}

export const TRANSLATION_DATA: TranslationSection[] = [
  // ═══════════════════════════════════════════════════════════════
  // NIVEAU DÉBUTANT
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'word-order',
    title: "Restructurer l'ordre des mots",
    level: 'beginner',
    icon: '🔀',
    tips: [
      {
        id: 'word-order-1',
        title: "Le verbe conjugué en 2e position",
        content: `En allemand, le verbe conjugué est **toujours en 2e position** dans les principales. Les compléments s'accumulent souvent en fin de phrase.

### Le problème
L'allemand place souvent le sujet, puis le verbe, puis une longue série de compléments. Le français préfère une structure plus équilibrée.

### La solution
Réorganisez la phrase pour que le français sonne naturellement, sans modifier le sens.`,
        examples: [
          {
            de: "Die Regierung hat gestern in Berlin nach langen Verhandlungen mit der Opposition einen neuen Kompromiss vorgestellt.",
            frBad: "Le gouvernement a hier à Berlin après de longues négociations avec l'opposition présenté un nouveau compromis.",
            frGood: "Après de longues négociations avec l'opposition, le gouvernement a présenté hier un nouveau compromis à Berlin.",
            explanation: "On déplace le complément circonstanciel en tête pour alléger la fin de phrase."
          },
          {
            de: "Der Minister wird morgen um 10 Uhr im Bundestag eine wichtige Erklärung abgeben.",
            frGood: "Le ministre fera une déclaration importante demain à 10 heures au Bundestag.",
            explanation: "Le COD (eine wichtige Erklärung) passe juste après le verbe en français."
          }
        ]
      },
      {
        id: 'word-order-2',
        title: "Le groupe verbal éclaté",
        content: `En allemand, le participe passé ou l'infinitif se trouve **en fin de phrase**, parfois très loin du verbe auxiliaire.

### Le défi
Ne pas se perdre dans la phrase et bien identifier tous les éléments du groupe verbal.

### Technique
Repérez d'abord le verbe conjugué, puis cherchez le participe/infinitif à la fin. Reconstituez le groupe verbal avant de traduire.`,
        examples: [
          {
            de: "Die EU hat trotz der Kritik mehrerer Mitgliedstaaten das umstrittene Gesetz verabschiedet.",
            frBad: "L'UE a malgré la critique de plusieurs États membres adopté la loi controversée.",
            frGood: "Malgré les critiques de plusieurs États membres, l'UE a adopté la loi controversée.",
            explanation: "hat...verabschiedet = a adopté. On regroupe le verbe en français."
          },
          {
            de: "Der Konzern will bis 2030 seinen CO2-Ausstoß um 50 Prozent reduzieren.",
            frGood: "Le groupe entend réduire ses émissions de CO2 de 50 % d'ici 2030.",
            explanation: "will...reduzieren = veut/entend réduire. L'infinitif rejoint son modal."
          }
        ]
      },
      {
        id: 'word-order-3',
        title: "Les subordonnées avec verbe en fin",
        content: `Dans les subordonnées allemandes, le verbe conjugué est **rejeté en fin de proposition**.

### Le piège
Les subordonnées peuvent être très longues. Il faut attendre la fin pour connaître le verbe !

### Stratégie
1. Identifiez le subordonnant (dass, weil, obwohl, wenn...)
2. Allez directement à la fin chercher le verbe
3. Puis reconstruisez le sens`,
        examples: [
          {
            de: "Die Opposition kritisiert, dass die Regierung trotz der Warnungen der Experten keine Maßnahmen ergriffen hat.",
            frGood: "L'opposition reproche au gouvernement de n'avoir pris aucune mesure malgré les avertissements des experts.",
            explanation: "dass...ergriffen hat → de n'avoir pris. On transforme la complétive en infinitive."
          },
          {
            de: "Obwohl die Wirtschaft in den letzten Monaten deutlich gewachsen ist, bleibt die Arbeitslosigkeit hoch.",
            frGood: "Bien que l'économie ait nettement progressé ces derniers mois, le chômage reste élevé.",
            explanation: "gewachsen ist est à la fin de la subordonnée → ait progressé."
          }
        ]
      }
    ]
  },
  {
    id: 'headlines',
    title: "Les titres de presse",
    level: 'beginner',
    icon: '📰',
    tips: [
      {
        id: 'headlines-1',
        title: "Du style nominal au style verbal",
        content: `Les titres allemands sont souvent **nominaux** (sans verbe conjugué), là où le français préfère une **phrase complète**.

### Style allemand
- Très condensé
- Noms d'action (Nominalisierungen)
- Souvent sans article
- Deux-points fréquents

### Style français
- Plus explicite
- Verbe conjugué fréquent
- Articles présents
- Phrases complètes ou semi-complètes`,
        examples: [
          {
            de: "Regierung: Neue Maßnahmen gegen Inflation",
            frBad: "Gouvernement : nouvelles mesures contre l'inflation",
            frGood: "Le gouvernement annonce de nouvelles mesures contre l'inflation",
            explanation: "On explicite le verbe sous-entendu et on ajoute l'article."
          },
          {
            de: "Merkel-Nachfolge: CDU vor schwieriger Entscheidung",
            frGood: "Succession de Merkel : la CDU face à un choix difficile",
            explanation: "On garde la structure en deux-points mais on étoffe légèrement."
          },
          {
            de: "Klimagipfel gescheitert",
            frGood: "Le sommet sur le climat a échoué",
            explanation: "On ajoute l'article et on conjugue le verbe."
          }
        ]
      },
      {
        id: 'headlines-2',
        title: "Les composés dans les titres",
        content: `Les titres allemands regorgent de **mots composés** très condensés qu'il faut déplier.

### Le défi
Un seul mot allemand peut nécessiter plusieurs mots français.`,
        examples: [
          {
            de: "Gesundheitsministerkonferenz beschließt neue Corona-Regeln",
            frGood: "La conférence des ministres de la Santé adopte de nouvelles règles sanitaires",
            explanation: "Gesundheitsministerkonferenz = conférence des ministres de la Santé (4 mots !)"
          },
          {
            de: "Bundesverfassungsgerichtsurteil zu Wahlrecht erwartet",
            frGood: "Un arrêt de la Cour constitutionnelle fédérale sur le droit électoral est attendu",
            explanation: "On décompose et on restructure."
          }
        ]
      }
    ]
  },
  {
    id: 'compounds',
    title: "Les mots composés (Komposita)",
    level: 'beginner',
    icon: '🧩',
    tips: [
      {
        id: 'compounds-1',
        title: "Décomposer systématiquement",
        content: `L'allemand crée des mots composés à l'infini. Le français doit les **déplier**.

### Méthode
1. Identifiez le **dernier élément** → c'est le noyau (détermine le genre)
2. Remontez vers la gauche → ce sont les déterminants
3. Traduisez de droite à gauche
4. Reliez avec "de", "pour", "à", ou un adjectif

### Exemple détaillé
**Krankenversicherungsbeitrag**
- Beitrag = cotisation (noyau)
- Versicherung = assurance
- Kranken = maladie
→ cotisation d'assurance maladie`,
        examples: [
          {
            de: "Regierungssprecher",
            frGood: "porte-parole du gouvernement",
            explanation: "Sprecher (porte-parole) + Regierung (gouvernement)"
          },
          {
            de: "Wirtschaftsministerium",
            frGood: "ministère de l'Économie",
            explanation: "Ministerium + Wirtschaft"
          },
          {
            de: "Arbeitslosenzahl",
            frGood: "nombre de chômeurs",
            explanation: "Zahl (nombre) + Arbeitslosen (chômeurs)"
          },
          {
            de: "Steuererleichterungen",
            frGood: "allègements fiscaux",
            explanation: "Erleichterungen (allègements) + Steuer (impôt) → adjectif en français"
          }
        ]
      },
      {
        id: 'compounds-2',
        title: "Les composés avec trait d'union",
        content: `Les composés avec trait d'union incluent souvent des **noms propres**, des **sigles** ou des **chiffres**.`,
        examples: [
          {
            de: "EU-Kommission",
            frGood: "Commission européenne",
            explanation: "On développe le sigle en adjectif."
          },
          {
            de: "Zwei-Grad-Ziel",
            frGood: "objectif des deux degrés / objectif de limitation à 2°C",
            explanation: "On explicite le contexte (réchauffement climatique)."
          },
          {
            de: "Post-Corona-Wirtschaft",
            frGood: "économie post-Covid / économie de l'après-Covid",
            explanation: "Plusieurs options possibles."
          }
        ]
      }
    ]
  },
  {
    id: 'appositions',
    title: "Les appositions",
    level: 'beginner',
    icon: '📎',
    tips: [
      {
        id: 'appositions-1',
        title: "Gérer les appositions lourdes",
        content: `L'allemand journalistique adore les **longues appositions** entre le déterminant et le nom.

### Structure typique
**der** [longue apposition] **Minister**
→ **le ministre**, [apposition après]

### Le problème
En français, on ne peut pas intercaler autant d'éléments entre l'article et le nom.

### Solutions
1. Déplacer l'apposition **après** le nom
2. Transformer en **proposition relative**
3. Faire une **phrase séparée**`,
        examples: [
          {
            de: "Der seit 2018 amtierende und wegen seiner Sparmaßnahmen umstrittene Finanzminister trat zurück.",
            frBad: "Le depuis 2018 en fonction et à cause de ses mesures d'austérité controversé ministre des Finances a démissionné.",
            frGood: "Le ministre des Finances, en poste depuis 2018 et controversé pour ses mesures d'austérité, a démissionné.",
            explanation: "L'apposition passe après le nom, entre virgules."
          },
          {
            de: "Die von der Opposition scharf kritisierte Reform wurde verabschiedet.",
            frGood: "La réforme, vivement critiquée par l'opposition, a été adoptée.",
            explanation: "On déplace le participe après le nom."
          }
        ]
      }
    ]
  },

  // ═══════════════════════════════════════════════════════════════
  // NIVEAU INTERMÉDIAIRE
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'konjunktiv-i',
    title: "Le Konjunktiv I (discours rapporté)",
    level: 'intermediate',
    icon: '💬',
    tips: [
      {
        id: 'konj1-1',
        title: "Reconnaître le Konjunktiv I",
        content: `Le Konjunktiv I est **omniprésent** dans la presse allemande pour rapporter des propos. Il marque la **distance** du journaliste par rapport aux propos cités.

### Formes à reconnaître
| Infinitif | Konjunktiv I |
|---|---|
| sein | er **sei** |
| haben | er **habe** |
| werden | er **werde** |
| können | er **könne** |
| geben | es **gebe** |
| kommen | er **komme** |

### Attention !
Quand le Konjunktiv I est identique à l'indicatif, on utilise le **Konjunktiv II** :
- sie haben (indicatif) → sie **hätten** (Konj. II utilisé)`,
        examples: [
          {
            de: "Der Minister sagte, die Lage sei unter Kontrolle.",
            frGood: "Le ministre a déclaré que la situation était sous contrôle.",
            explanation: "sei → était (imparfait en français)"
          },
          {
            de: "Die Regierung erklärte, sie habe alles getan.",
            frGood: "Le gouvernement a affirmé avoir tout fait.",
            explanation: "habe getan → avoir fait (infinitif passé)"
          }
        ]
      },
      {
        id: 'konj1-2',
        title: "Traduire le Konjunktiv I",
        content: `Le français n'a pas d'équivalent direct. Plusieurs options selon le contexte :

### Options de traduction
1. **Indicatif** (le plus courant) : "Il a dit qu'il **était** malade."
2. **Conditionnel** (doute, distance) : "Selon lui, la crise **serait** terminée."
3. **Infinitif passé** : "Il affirme **avoir agi** correctement."
4. **Citation directe** : « Je suis innocent », a-t-il déclaré.

### Quand utiliser le conditionnel ?
- Information non vérifiée
- Distance éditoriale voulue
- "Selon...", "D'après..."`,
        examples: [
          {
            de: "Nach Angaben der Polizei seien drei Personen verletzt worden.",
            frGood: "Selon la police, trois personnes auraient été blessées.",
            explanation: "Conditionnel car information non confirmée + 'selon'."
          },
          {
            de: "Der Präsident betonte, er werde nicht zurücktreten.",
            frGood: "Le président a souligné qu'il ne démissionnerait pas.",
            explanation: "Futur dans le passé → conditionnel."
          },
          {
            de: "Die Ministerin sagte, sie habe von nichts gewusst.",
            frGood: "La ministre a déclaré n'avoir été au courant de rien.",
            explanation: "Transformation en infinitif passé (plus élégant)."
          }
        ]
      },
      {
        id: 'konj1-3',
        title: "Les incises attributives",
        content: `La presse allemande utilise des formules courtes pour attribuer des propos :

### Formules courantes
- **so der Minister** → a déclaré le ministre
- **hieß es** → a-t-on indiqué / selon le communiqué
- **sagte er weiter** → a-t-il poursuivi
- **wie X mitteilte** → comme l'a annoncé X`,
        examples: [
          {
            de: "Die Verhandlungen seien erfolgreich gewesen, so die Kanzlerin.",
            frGood: "Les négociations ont été un succès, a déclaré la chancelière.",
            explanation: "so die Kanzlerin → a déclaré la chancelière"
          },
          {
            de: "Eine Entscheidung werde bald fallen, hieß es aus Regierungskreisen.",
            frGood: "Une décision sera prise prochainement, a-t-on appris de source gouvernementale.",
            explanation: "hieß es → formule impersonnelle"
          }
        ]
      }
    ]
  },
  {
    id: 'passive',
    title: "La voix passive",
    level: 'intermediate',
    icon: '🔄',
    tips: [
      {
        id: 'passive-1',
        title: "Le passif omniprésent",
        content: `La presse allemande utilise **beaucoup plus** le passif que le français.

### Types de passif allemand
1. **Vorgangspassiv** (werden + Part. II) : action en cours
2. **Zustandspassiv** (sein + Part. II) : état résultant

### Problème
Trop de passifs en français alourdit le texte.

### Solutions
1. **Garder le passif** si naturel en français
2. **Tournure active** avec sujet récupéré
3. **Tournure pronominale** (on, se)
4. **Nominalisation**`,
        examples: [
          {
            de: "Das Gesetz wurde vom Bundestag verabschiedet.",
            frGood: "Le Bundestag a adopté la loi. / La loi a été adoptée par le Bundestag.",
            explanation: "Actif souvent préférable en français."
          },
          {
            de: "Es wird erwartet, dass...",
            frBad: "Il est attendu que...",
            frGood: "On s'attend à ce que... / Il est prévu que...",
            explanation: "Tournure impersonnelle + on"
          },
          {
            de: "Die Maßnahme wurde kritisiert.",
            frGood: "Cette mesure a été critiquée. / Cette mesure a suscité des critiques.",
            explanation: "Nominalisation possible."
          }
        ]
      },
      {
        id: 'passive-2',
        title: "Le passif impersonnel",
        content: `L'allemand permet un passif **sans sujet** (es wird + Part. II), impossible en français.`,
        examples: [
          {
            de: "Es wurde lange diskutiert.",
            frBad: "Il a été longuement discuté.",
            frGood: "Les discussions ont été longues. / On a longuement débattu.",
            explanation: "Pas de passif impersonnel en français."
          },
          {
            de: "Darüber wird noch verhandelt.",
            frGood: "Les négociations sont toujours en cours. / On négocie encore.",
            explanation: "On transforme ou on utilise 'on'."
          }
        ]
      }
    ]
  },
  {
    id: 'funktionsverben',
    title: "Les Funktionsverbgefüge",
    level: 'intermediate',
    icon: '⚙️',
    tips: [
      {
        id: 'fvg-1',
        title: "Reconnaître les tournures verbo-nominales",
        content: `Les **Funktionsverbgefüge** (FVG) sont des expressions figées : verbe "vide" + nom d'action.

### Structure
Verbe fonctionnel + Préposition + Nom

### Verbes fonctionnels courants
- **bringen** : zum Ausdruck bringen, zur Sprache bringen
- **kommen** : zur Anwendung kommen, zum Einsatz kommen
- **stellen** : zur Verfügung stellen, in Frage stellen
- **nehmen** : in Anspruch nehmen, Einfluss nehmen
- **treffen** : eine Entscheidung treffen, Maßnahmen treffen`,
        examples: [
          {
            de: "Die Regierung hat Maßnahmen getroffen.",
            frGood: "Le gouvernement a pris des mesures.",
            explanation: "Maßnahmen treffen = prendre des mesures"
          },
          {
            de: "Das Gesetz kommt ab Januar zur Anwendung.",
            frGood: "La loi entrera en vigueur en janvier. / La loi s'appliquera à partir de janvier.",
            explanation: "zur Anwendung kommen = entrer en application"
          },
          {
            de: "Er stellte die Ergebnisse in Frage.",
            frGood: "Il a remis en question les résultats.",
            explanation: "in Frage stellen = remettre en question"
          }
        ]
      },
      {
        id: 'fvg-2',
        title: "Liste des FVG les plus fréquents",
        content: `### Avec "bringen"
| Allemand | Français |
|---|---|
| zum Ausdruck bringen | exprimer |
| zur Sprache bringen | évoquer, aborder |
| zu Ende bringen | mener à terme |
| in Verbindung bringen | mettre en relation |

### Avec "kommen"
| Allemand | Français |
|---|---|
| zum Einsatz kommen | être déployé/utilisé |
| zur Anwendung kommen | être appliqué, entrer en vigueur |
| ums Leben kommen | perdre la vie |
| zu dem Schluss kommen | parvenir à la conclusion |

### Avec "stellen"
| Allemand | Français |
|---|---|
| zur Verfügung stellen | mettre à disposition |
| in Frage stellen | remettre en question |
| unter Beweis stellen | démontrer, prouver |
| zur Diskussion stellen | soumettre au débat |

### Avec "nehmen"
| Allemand | Français |
|---|---|
| in Anspruch nehmen | recourir à, solliciter |
| Einfluss nehmen | exercer une influence |
| Stellung nehmen | prendre position |
| in Kauf nehmen | accepter (un inconvénient) |`,
        examples: [
          {
            de: "Drei Menschen kamen ums Leben.",
            frGood: "Trois personnes ont perdu la vie. / Trois personnes ont été tuées.",
            explanation: "ums Leben kommen = perdre la vie / être tué"
          },
          {
            de: "Die Ministerin nahm zu den Vorwürfen Stellung.",
            frGood: "La ministre a pris position sur les accusations.",
            explanation: "Stellung nehmen = prendre position"
          }
        ]
      }
    ]
  },
  {
    id: 'long-sentences',
    title: "Les longues phrases",
    level: 'intermediate',
    icon: '📏',
    tips: [
      {
        id: 'long-1',
        title: "Découper intelligemment",
        content: `L'allemand tolère des phrases **très longues** avec de multiples subordonnées. Le français préfère des phrases **plus courtes**.

### Quand découper ?
- Phrase de plus de 3 lignes
- Plus de 2 subordonnées imbriquées
- Risque de perdre le lecteur

### Comment découper ?
1. Identifier les **unités de sens**
2. Transformer une subordonnée en **phrase indépendante**
3. Utiliser des **connecteurs** (En effet, Par ailleurs, De plus...)
4. Garder la **cohésion** (reprises pronominales, démonstratifs)`,
        examples: [
          {
            de: "Die Bundesregierung, die seit Monaten unter Druck steht, weil sie nach Ansicht der Opposition zu wenig gegen die Inflation unternimmt, hat gestern ein neues Hilfspaket vorgestellt, das vor allem einkommensschwache Haushalte entlasten soll.",
            frGood: "Le gouvernement fédéral, sous pression depuis des mois, a présenté hier un nouveau plan d'aide. L'opposition lui reproche en effet de ne pas en faire assez contre l'inflation. Ce dispositif vise principalement à soulager les ménages modestes.",
            explanation: "Une phrase → trois phrases. On garde la cohésion avec 'en effet' et 'ce dispositif'."
          }
        ]
      },
      {
        id: 'long-2',
        title: "Les subordonnées en cascade",
        content: `L'allemand peut empiler les subordonnées. Le français doit souvent **réorganiser**.

### Technique
Identifiez la hiérarchie des informations et restructurez.`,
        examples: [
          {
            de: "Er sagte, dass er hoffe, dass die Verhandlungen, die seit Wochen andauern, bald zu einem Ergebnis führen werden.",
            frBad: "Il a dit qu'il espère que les négociations qui durent depuis des semaines aboutiront bientôt.",
            frGood: "Il a déclaré espérer que les négociations, qui durent depuis des semaines, aboutiraient prochainement.",
            explanation: "On allège : dass er hoffe → espérer (infinitif)."
          }
        ]
      }
    ]
  },
  {
    id: 'false-friends',
    title: "Les faux-amis journalistiques",
    level: 'intermediate',
    icon: '⚠️',
    tips: [
      {
        id: 'ff-1',
        title: "Les classiques de la presse",
        content: `Ces mots reviennent constamment dans les articles et sont souvent mal traduits.

### Liste essentielle

| Allemand | ❌ Faux-ami | ✅ Traduction |
|---|---|---|
| **aktuell** | actuel | **actuel, récent, d'actualité** (mais pas "en ce moment") |
| **Konzern** | concerné | **groupe (industriel), conglomérat** |
| **Fraktion** | fraction | **groupe parlementaire** |
| **sensibel** | sensible | **sensible** (mais aussi **délicat, confidentiel**) |
| **eventuell** | éventuellement | **peut-être, le cas échéant** |
| **Prozess** | procès | **procès, processus, procédé** |
| **Milliarde** | milliard | **milliard** (attention : billion DE = billion FR) |
| **Chef** | chef | **patron, dirigeant, responsable** |
| **Krise** | crise | **crise** (plus fréquent qu'en FR) |
| **fordern** | forer | **exiger, réclamer, demander** |`,
        examples: [
          {
            de: "Die aktuelle Lage",
            frBad: "La situation actuelle",
            frGood: "La situation actuelle / La conjoncture",
            explanation: "Ici 'aktuell' = actuel, mais vérifiez toujours le contexte."
          },
          {
            de: "Der Volkswagen-Konzern",
            frBad: "Le concerné Volkswagen",
            frGood: "Le groupe Volkswagen",
            explanation: "Konzern = groupe industriel, conglomérat"
          },
          {
            de: "Die SPD-Fraktion im Bundestag",
            frBad: "La fraction SPD au Bundestag",
            frGood: "Le groupe parlementaire SPD au Bundestag",
            explanation: "Fraktion = groupe parlementaire (pas fraction !)"
          }
        ]
      },
      {
        id: 'ff-2',
        title: "Les faux-amis institutionnels",
        content: `Attention aux termes institutionnels qui ne correspondent pas exactement.

| Allemand | Traduction | Note |
|---|---|---|
| **Bundesland** | Land, État fédéré | pas "pays fédéral" |
| **Ministerpräsident** | ministre-président | chef du gouvernement d'un Land |
| **Bundeskanzler** | chancelier fédéral | pas "président" |
| **Landtag** | parlement régional | assemblée d'un Land |
| **Beamter** | fonctionnaire | statut particulier en Allemagne |`,
        examples: [
          {
            de: "Der bayerische Ministerpräsident",
            frGood: "Le ministre-président de Bavière / Le chef du gouvernement bavarois",
            explanation: "Pas 'Premier ministre' (réservé au niveau fédéral inexistant en Allemagne)."
          }
        ]
      }
    ]
  },

  // ═══════════════════════════════════════════════════════════════
  // NIVEAU AVANCÉ
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'nominalization',
    title: "Style nominal → verbal",
    level: 'advanced',
    icon: '🔧',
    tips: [
      {
        id: 'nom-1',
        title: "Désemballer les nominalisations",
        content: `L'allemand (surtout administratif et journalistique) abuse du **style nominal**. Le français préfère souvent le **style verbal**, plus léger.

### Le problème
L'allemand transforme les verbes en noms :
- entscheiden → **die Entscheidung**
- entwickeln → **die Entwicklung**
- untersuchen → **die Untersuchung**

### La solution
Retransformez en verbe quand c'est plus naturel en français.`,
        examples: [
          {
            de: "Nach Prüfung der Unterlagen",
            frBad: "Après vérification des documents",
            frGood: "Après avoir vérifié les documents",
            explanation: "Plus fluide avec un infinitif passé."
          },
          {
            de: "Die Durchführung der Reform stößt auf Widerstand.",
            frBad: "La réalisation de la réforme se heurte à une résistance.",
            frGood: "La mise en œuvre de la réforme se heurte à des résistances. / Mettre en œuvre cette réforme s'avère difficile.",
            explanation: "On peut garder le nom ou verbaliser selon le contexte."
          },
          {
            de: "Unter Berücksichtigung aller Faktoren",
            frGood: "En tenant compte de tous les facteurs / Tous facteurs pris en compte",
            explanation: "Le gérondif est souvent plus naturel."
          }
        ]
      },
      {
        id: 'nom-2',
        title: "Les chaînes de génitifs",
        content: `Le style nominal allemand crée des **chaînes de génitifs** qu'il faut reformuler.`,
        examples: [
          {
            de: "Die Entscheidung des Vorstands des Unternehmens",
            frBad: "La décision du conseil d'administration de l'entreprise",
            frGood: "La décision prise par le conseil d'administration de l'entreprise",
            explanation: "On peut introduire un participe pour aérer."
          },
          {
            de: "Der Rückgang der Zahl der Arbeitslosen",
            frGood: "La baisse du nombre de chômeurs / Le recul du chômage",
            explanation: "On simplifie quand c'est possible."
          }
        ]
      }
    ]
  },
  {
    id: 'techniques',
    title: "Techniques de traduction",
    level: 'advanced',
    icon: '🎯',
    tips: [
      {
        id: 'tech-1',
        title: "La transposition",
        content: `La **transposition** consiste à changer la **catégorie grammaticale** d'un mot tout en conservant le sens.

### Types de transposition
- Nom → Verbe
- Adjectif → Nom
- Verbe → Nom
- Adverbe → Adjectif
- Préposition → Verbe`,
        examples: [
          {
            de: "Nach seiner Ankunft in Berlin...",
            frGood: "Après être arrivé à Berlin... / Dès son arrivée à Berlin...",
            explanation: "Nom (Ankunft) → Verbe (être arrivé) ou on garde le nom."
          },
          {
            de: "Die deutsche Wirtschaft",
            frGood: "L'économie allemande / L'économie de l'Allemagne",
            explanation: "Adjectif (deutsche) → Complément de nom possible."
          },
          {
            de: "Er sprach fließend Deutsch.",
            frGood: "Il parlait un allemand courant. / Il parlait couramment allemand.",
            explanation: "Adverbe (fließend) → Adjectif (courant) ou adverbe (couramment)."
          }
        ]
      },
      {
        id: 'tech-2',
        title: "La modulation",
        content: `La **modulation** change le **point de vue** ou l'angle d'attaque, tout en gardant le même sens.

### Types de modulation
- Cause ↔ Conséquence
- Actif ↔ Passif
- Positif ↔ Négatif
- Abstrait ↔ Concret
- Partie ↔ Tout`,
        examples: [
          {
            de: "Das ist nicht schwer.",
            frGood: "C'est facile.",
            explanation: "Négatif → Positif"
          },
          {
            de: "Er kam nicht.",
            frGood: "Il n'est pas venu. / Il était absent.",
            explanation: "On peut moduler selon le contexte."
          },
          {
            de: "Die Tür ging auf.",
            frGood: "La porte s'est ouverte. / Quelqu'un a ouvert la porte.",
            explanation: "On peut ajouter un agent implicite."
          }
        ]
      },
      {
        id: 'tech-3',
        title: "L'équivalence",
        content: `L'**équivalence** remplace une expression par une autre qui a le **même effet** dans la langue cible, même si la structure est totalement différente.

### Cas d'utilisation
- Expressions idiomatiques
- Proverbes
- Onomatopées
- Références culturelles`,
        examples: [
          {
            de: "Das kommt nicht in Frage!",
            frGood: "Il n'en est pas question !",
            explanation: "Équivalent idiomatique."
          },
          {
            de: "Hals- und Beinbruch!",
            frGood: "Merde ! (théâtre) / Bonne chance !",
            explanation: "Expression de bonne chance."
          }
        ]
      }
    ]
  },
  {
    id: 'etoffement',
    title: "Étoffement et dépouillement",
    level: 'advanced',
    icon: '📐',
    tips: [
      {
        id: 'etoff-1',
        title: "L'étoffement",
        content: `L'**étoffement** consiste à **ajouter des mots** en français pour rendre la traduction naturelle.

### Cas typiques
- Prépositions allemandes → locutions françaises
- Verbes de mouvement + préfixe → verbe + complément
- Contexte implicite → explicité`,
        examples: [
          {
            de: "Er ging durch die Tür.",
            frGood: "Il est passé par la porte. / Il a franchi la porte.",
            explanation: "durch → par / franchir (étoffement du verbe)"
          },
          {
            de: "Ab Januar",
            frGood: "À partir de janvier / Dès janvier",
            explanation: "ab → à partir de (étoffement de la préposition)"
          },
          {
            de: "Die Ampel-Koalition",
            frGood: "La coalition « feu tricolore » (SPD, Verts, FDP)",
            explanation: "On explicite pour le lecteur français."
          }
        ]
      },
      {
        id: 'etoff-2',
        title: "Le dépouillement",
        content: `Le **dépouillement** consiste à **supprimer des mots** inutiles ou redondants en français.

### Cas typiques
- Adverbes intensifs allemands → ∅
- Répétitions → pronoms
- Explicitations inutiles → implicite`,
        examples: [
          {
            de: "Er hat es sehr deutlich gesagt.",
            frGood: "Il l'a dit clairement.",
            explanation: "sehr deutlich → clairement (un seul mot suffit)"
          },
          {
            de: "Die Ministerin hat gesagt, dass die Ministerin...",
            frGood: "La ministre a déclaré qu'elle...",
            explanation: "Répétition → pronom"
          }
        ]
      }
    ]
  },
  {
    id: 'cultural',
    title: "Adaptation culturelle",
    level: 'advanced',
    icon: '🌍',
    tips: [
      {
        id: 'cult-1',
        title: "Les institutions à expliquer",
        content: `Certaines réalités allemandes n'ont pas d'équivalent français et nécessitent une **explication**.

### Institutions
| Allemand | Explication possible |
|---|---|
| **Bundesrat** | Chambre haute représentant les Länder |
| **Hartz IV** | Allocations chômage (ancien système) |
| **Bürgergeld** | Revenu citoyen (nouveau système) |
| **Kurzarbeit** | Chômage partiel |
| **Mittelstand** | PME, tissu économique de moyennes entreprises |
| **Energiewende** | Transition énergétique (sortie du nucléaire) |
| **Ampel-Koalition** | Coalition SPD-Verts-FDP |`,
        examples: [
          {
            de: "Die Kurzarbeit wurde verlängert.",
            frGood: "Le dispositif de chômage partiel a été prolongé.",
            explanation: "On explicite Kurzarbeit."
          },
          {
            de: "Der deutsche Mittelstand leidet.",
            frGood: "Les PME allemandes / Le tissu de moyennes entreprises allemand souffre.",
            explanation: "Mittelstand n'a pas d'équivalent exact."
          }
        ]
      },
      {
        id: 'cult-2',
        title: "Les références implicites",
        content: `Certaines références sont évidentes pour un Allemand mais pas pour un Français.`,
        examples: [
          {
            de: "Die Mauer fiel vor 35 Jahren.",
            frGood: "Le Mur (de Berlin) est tombé il y a 35 ans.",
            explanation: "On peut préciser 'de Berlin' pour certains publics."
          },
          {
            de: "Die Wende",
            frGood: "La réunification / Le tournant de 1989",
            explanation: "die Wende = la chute du Mur et la réunification"
          }
        ]
      }
    ]
  },
  {
    id: 'cohesion',
    title: "Cohérence et cohésion textuelle",
    level: 'advanced',
    icon: '🔗',
    tips: [
      {
        id: 'coh-1',
        title: "Les connecteurs logiques",
        content: `L'allemand et le français n'utilisent pas les mêmes connecteurs avec la même fréquence.

### Correspondances
| Allemand | Français |
|---|---|
| **jedoch** | cependant, toutefois |
| **allerdings** | toutefois, certes |
| **dennoch** | néanmoins, pourtant |
| **deshalb / daher** | c'est pourquoi, par conséquent |
| **außerdem** | en outre, de plus |
| **schließlich** | finalement, en fin de compte |
| **zunächst** | tout d'abord |
| **inzwischen** | entre-temps, depuis |
| **demnach** | par conséquent, selon ces informations |`,
        examples: [
          {
            de: "Die Wirtschaft wächst. Allerdings bleibt die Inflation hoch.",
            frGood: "L'économie croît. Toutefois, l'inflation reste élevée.",
            explanation: "allerdings → toutefois (nuance concessive)"
          }
        ]
      },
      {
        id: 'coh-2',
        title: "Les reprises et la progression",
        content: `Le français aime varier les reprises là où l'allemand répète plus facilement.

### Techniques de reprise
- **Pronoms** : il, elle, celui-ci, ce dernier
- **Synonymes** : le ministre → le responsable, l'élu
- **Périphrases** : Angela Merkel → la chancelière, la dirigeante allemande
- **Démonstratifs** : cette mesure, ce projet`,
        examples: [
          {
            de: "Der Minister sprach. Der Minister sagte...",
            frGood: "Le ministre a pris la parole. Il a déclaré...",
            explanation: "On évite la répétition avec un pronom."
          },
          {
            de: "Olaf Scholz hat erklärt... Scholz betonte...",
            frGood: "Olaf Scholz a déclaré... Le chancelier a souligné...",
            explanation: "On varie : nom propre → fonction."
          }
        ]
      }
    ]
  },

  // ═══════════════════════════════════════════════════════════════
  // OUTILS PRATIQUES
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'checklist',
    title: "Checklist du traducteur",
    level: 'beginner',
    icon: '✅',
    tips: [
      {
        id: 'check-1',
        title: "Avant de rendre sa traduction",
        content: `### ✅ Vérifications de base
- [ ] Tous les éléments du texte source sont traduits
- [ ] Pas de contresens
- [ ] Les noms propres sont corrects
- [ ] Les chiffres sont exacts
- [ ] Les dates sont au bon format

### ✅ Vérifications linguistiques
- [ ] L'orthographe est correcte
- [ ] La grammaire est correcte
- [ ] La ponctuation est adaptée au français
- [ ] Les majuscules sont correctes (noms communs en minuscules !)

### ✅ Vérifications stylistiques
- [ ] Le texte "sonne" français
- [ ] Pas de calques de l'allemand
- [ ] Les phrases ne sont pas trop longues
- [ ] Le registre est cohérent
- [ ] Les reprises sont variées

### ✅ Vérifications finales
- [ ] Relecture à voix haute
- [ ] Cohérence des choix terminologiques
- [ ] Le texte est fluide, agréable à lire`,
        examples: []
      }
    ]
  },
  {
    id: 'common-errors',
    title: "Erreurs classiques",
    level: 'beginner',
    icon: '🚫',
    tips: [
      {
        id: 'err-1',
        title: "Les erreurs à éviter absolument",
        content: `### 1. Le calque syntaxique
**Le problème** : Garder l'ordre des mots allemand.
**Solution** : Restructurer pour le français.

### 2. Le faux-ami
**Le problème** : Traduire "aktuell" par "actuel" sans réfléchir.
**Solution** : Vérifier chaque terme suspect.

### 3. La surtraduction
**Le problème** : Traduire mot à mot, y compris les éléments implicites.
**Solution** : Se demander si c'est naturel en français.

### 4. La sous-traduction
**Le problème** : Omettre des nuances (particules, modalités).
**Solution** : S'assurer que le sens complet est rendu.

### 5. L'incohérence terminologique
**Le problème** : Traduire le même terme différemment.
**Solution** : Tenir une liste de termes.

### 6. La phrase trop longue
**Le problème** : Garder les phrases interminables allemandes.
**Solution** : Découper en 2-3 phrases si nécessaire.

### 7. Le passif systématique
**Le problème** : Garder tous les passifs allemands.
**Solution** : Passer à l'actif quand c'est plus naturel.`,
        examples: [
          {
            de: "Die von der Regierung vorgeschlagene und von der Opposition kritisierte Reform",
            frBad: "La par le gouvernement proposée et par l'opposition critiquée réforme",
            frGood: "La réforme proposée par le gouvernement et critiquée par l'opposition",
            explanation: "Jamais de calque syntaxique !"
          }
        ]
      }
    ]
  }
];

