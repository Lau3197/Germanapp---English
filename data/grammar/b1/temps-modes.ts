
import { GrammarSection } from '../../../types';

export const plusquamperfektB1: GrammarSection = {
  title: "3.2.1 Le Plus-que-parfait (Plusquamperfekt)",
  topics: [
    {
      id: "b1-2-1",
      title: "L'antériorité au passé",
      content: "Le Plus-que-parfait exprime une action qui s'est déroulée **avant** un moment précis du passé.\n\n### Formation\nOn utilise l'auxiliaire **haben** ou **sein** au **Prétérit** + le **Partizip II**.",
      examples: [
        { de: "Nachdem ich **gegessen hatte**, ging ich spazieren.", fr: "Après avoir mangé, je suis allé me promener." },
        { de: "Er **war** schon **gegangen**, als ich ankam.", fr: "Il était déjà parti quand je suis arrivé." }
      ]
    }
  ]
};

export const futurB1: GrammarSection = {
  title: "3.2.2 Le Futur (Futur I)",
  topics: [
    {
      id: "b1-2-2",
      title: "Exprimer l'avenir et les intentions",
      content: "Le Futur I sert à exprimer une intention, un projet ou une prédiction.\n\n### Formation\nOn utilise l'auxiliaire **werden** (au présent) + l'**infinitif** à la fin.",
      examples: [
        { de: "Ich **werde** nächstes Jahr nach Berlin **ziehen**.", fr: "J'emménagerai à Berlin l'année prochaine." },
        { de: "Das Wetter **wird** morgen besser **werden**.", fr: "Le temps va s'améliorer demain." }
      ]
    }
  ]
};

export const konjunktivIIB1: GrammarSection = {
  title: "3.2.3 Le Subjonctif II (Konjunktiv II) - Masterclass",
  topics: [
    {
      id: "b1-2-3-1",
      title: "I. LA FORME AVEC WÜRDE (PRÉSENT)",
      content: "### 1. La construction standard : würde + Infinitif\nC'est la forme que vous utiliserez pour la quasi-totalité des verbes. Elle permet d'exprimer un souhait réalisable ou une demande polie.\n\n**Structure** : **würde** (conjugué) ... **Infinitif** (placé tout à la fin).\n\n| Personne | Auxiliaire | + Infinitif ([[machen]]) | Exemple de phrase |\n|---|---|---|---|\n| ich | **würde** | machen | Ich **würde** das gerne **machen**. |\n| du | **würdest** | machen | **würdest** du das **machen**? |\n| er/sie/es | **würde** | machen | Er **würde** es sicher **machen**. |\n| wir | **würden** | machen | Wir **würden** gerne Urlaub **machen**. |\n| ihr | **würdet** | machen | **würdet** ihr das auch **machen**? |\n| sie/Sie | **würden** | machen | Sie **würden** sicher Fehler **machen**. |",
      examples: [
        { de: "Ich **würde** gerne öfter Sport **treiben**.", fr: "J'aimerais faire du sport plus souvent." },
        { de: "**Würden** Sie mir bitte die Tür **öffnen**?", fr: "Voudriez-vous m'ouvrir la porte s'il vous plaît ?" }
      ]
    },
    {
      id: "b1-2-3-2",
      title: "II. LES VERBES FORTS ET AUXILIAIRES",
      content: "### 2. Les formes contractées (avec Umlaut)\nLes auxiliaires (haben, sein, werden) et certains verbes forts fréquents (verbes irréguliers) ne supportent pas la forme 'würde'. Ils se transforment à partir du radical du prétérit.\n\n*Cliquez sur les verbes pour voir la conjugaison complète.*\n\n| Infinitif | Forme KII | Traduction |\n|---|---|---|\n| [[haben]] | **hätte** | j'aurais |\n| [[sein]] | **wäre** | je serais |\n| [[werden]] | **würde** | je deviendrais |\n| [[wissen]] | **wüsste** | je saurais |\n| [[kommen]] | **käme** | je viendrais |\n| [[gehen]] | **ginge** | j'irais |\n| [[lassen]] | **ließe** | je laisserais |",
      examples: [
        { de: "Wenn ich Zeit **hätte**, **wäre** ich glücklich.", fr: "Si j'avais le temps, je serais heureux." },
        { de: "Ich **wüsste** gerne, wo er ist.", fr: "J'aimerais savoir où il est." }
      ]
    },
    {
      id: "b1-2-3-3",
      title: "III. LES VERBES MODAUX AU PRÉSENT",
      content: "### 3. Les modaux : Devoir et Pouvoir au subjonctif\nLes modaux sont indispensables au Konjunktiv II. Ils servent à donner des conseils ou à exprimer des probabilités. Ils prennent tous un **Umlaut** (sauf sollen et wollen).\n\n| Modal | KII Présent | Usage principal |\n|---|---|---|\n| [[können]] | **könnte** | Possibilité / Politesse |\n| [[müssen]] | **müsste** | Obligation théorique |\n| [[dürfen]] | **dürfte** | Probabilité / Autorisation |\n| [[sollen]] | **sollte** | **Le conseil** (tu devrais) |\n| [[wollen]] | **wollte** | Souhait intentionnel |\n| [[mögen]] | **möchte** | Désir poli |",
      examples: [
        { de: "Du **solltest** mehr schlafen.", fr: "Tu devrais dormir plus (Conseil)." },
        { de: "**Könntest** du mir kurz helfen?", fr: "Pourrais-tu m'aider un instant ?" }
      ]
    },
    {
      id: "b1-2-3-4",
      title: "IV. LE KONJUNKTIV II AU PASSÉ",
      content: "### 4. Exprimer le regret (Ce qui est fini)\nOn utilise le passé pour parler de situations qui ne se sont pas produites. C'est l'irréel du passé.\n\n**Structure** : **hätte / wäre** (conjugué) ... **Partizip II** (à la fin).\n\n| Type de verbe | Auxiliaire | Exemple |\n|---|---|---|\n| Verbe d'action | **hätte** | Ich **hätte** das **getan** (J'aurais fait ça) |\n| Verbe de mouvement | **wäre** | Ich **wäre** **gekommen** (Je serais venu) |",
      examples: [
        { de: "Ich **hätte** dich **angerufen**, wenn ich Zeit **gehabt hätte**.", fr: "Je t'aurais appelé si j'avais eu le temps." },
        { de: "Wenn ich den Bus nicht verpasst **hätte**, **wäre** ich pünktlich **gewesen**.", fr: "Si je n'avais pas raté le bus, j'aurais été à l'heure." }
      ]
    },
    {
      id: "b1-2-3-5",
      title: "V. LES MODAUX AU PASSÉ",
      content: "### 5. Le Double Infinitif (Ersatzinfinitiv)\nC'est la forme la plus technique du niveau B1. Pour dire 'j'aurais pu', on n'utilise pas le participe passé mais deux infinitifs à la fin.\n\n**Structure** : **hätte** ... **Infinitif du verbe** + **Infinitif du modal**.\n\n| Personne | Auxiliaire | + Double Infinitif ([[können]]) | Exemple |\n|---|---|---|---|\n| ich | **hätte** | machen können | Ich **hätte** es **machen können**. |\n| du | **hättest** | machen können | Du **hättest** es **machen können**. |\n| er/sie/es | **hätte** | machen können | Er **hätte** es **machen können**. |\n| wir | **hätten** | machen können | Wir **hätten** es **machen können**. |\n| ihr | **hättet** | machen können | Ihr **hättet** es **machen können**. |\n| sie/Sie | **hätten** | machen können | Sie **hätten** es **machen können**. |",
      examples: [
        { de: "Ich **hätte** gestern **arbeiten müssen**.", fr: "J'aurais dû travailler hier." },
        { de: "Du **hättest** mir das **sagen sollen**.", fr: "Tu aurais dû me dire ça." },
        { de: "Wir **hätten** länger **bleiben können**.", fr: "Nous aurions pu rester plus longtemps." }
      ]
    }
  ]
};

export const passivPresentB1: GrammarSection = {
  title: "3.2.4 Le Passif au Présent",
  topics: [
    {
      id: "b1-2-4-1",
      title: "I. Règle de formation",
      content: "Le passif de processus met l'accent sur l'action en cours.\n\n**Structure** : **werden** (conjugué au présent) + **Partizip II** (à la fin).\n\n| Personne | **Werden** | Exemple |\n|---|---|---|\n| ich | **werde** | ich werde operiert |\n| du | **wirst** | du wirst gerufen |\n| er/sie/es | **wird** | das Haus **wird** gebaut |\n| wir | **werden** | wir werden informiert |\n| ihr | **werdet** | ihr werdet gesucht |\n| sie/Sie | **werden** | sie werden gefragt |",
      examples: [
        { de: "Das Kind **wird** von der Mutter **geholt**.", fr: "L'enfant est allé chercher par la mère." },
        { de: "Hier **wird** ein neues Hotel **gebaut**.", fr: "Un nouvel hôtel est en train d'être construit ici." }
      ]
    }
  ]
};

export const passivPasseB1: GrammarSection = {
  title: "3.2.5 Le Passif au Passé",
  topics: [
    {
      id: "b1-2-5-1",
      title: "I. Le Prétérit (Passiv im Präteritum)",
      content: "C'est la forme la plus utilisée pour raconter des événements passés au passif.\n\n**Structure** : **wurde** (werden au prétérit) + **Partizip II**.\n\n| Personne | **Wurde** | Exemple |\n|---|---|---|\n| ich | **wurde** | ich wurde informiert |\n| du | **wurdest** | du wurdest gerufen |\n| er/sie/es | **wurde** | das Haus **wurde** gebaut |\n| wir | **wurden** | wir wurden gerufen |\n| ihr | **wurdet** | ihr werdet informiert |\n| sie/Sie | **wurden** | sie wurden gefragt |\n\n**Note linguistique** : Grammaticalement, **wurde** est du **Präteritum**. L'équivalent exact en français est le **Passé Simple** (le temps des livres d'histoire et des romans). Comme nous n'utilisons plus le Passé Simple à l'oral en français (« elle fut découverte »), nous le remplaçons systématiquement par le **Passé Composé**. C'est pour cela que vous avez l'impression que c'est la même chose.",
      examples: [
        { de: "Amerika **wurde** 1492 **entdeckt**.", fr: "L'Amérique a été découverte (fut découverte) en 1492." },
        { de: "Der Brief **wurde** gestern **geschrieben**.", fr: "La lettre a été écrite hier." }
      ]
    },
    {
      id: "b1-2-5-2",
      title: "II. Le Parfait (Passiv im Perfekt)",
      content: "Utilisé principalement à l'oral. On utilise l'auxiliaire **sein** et on remplace 'geworden' par **worden**.\n\n**Structure** : **sein** (présent) + **Partizip II** + **worden**.\n\n| Personne | **Sein** | **Partizip II** | **Worden** |\n|---|---|---|---|\n| ich | bin | gefragt | **worden** |\n| du | bist | gefragt | **worden** |\n| er/sie/es | **ist** | **gefragt** | **worden** |\n| wir | sind | gefragt | **worden** |\n| ihr | seid | gefragt | **worden** |\n| sie/Sie | sind | gefragt | **worden** |",
      examples: [
        { de: "Das Auto **ist** bereits **repariert worden**.", fr: "La voiture a déjà été réparée." },
        { de: "Die Gäste **sind** noch nicht **einladend worden**.", fr: "Les invités n'ont pas encore été invités." }
      ]
    },
    {
      id: "b1-2-5-3",
      title: "III. Comment choisir entre wurde et ist... worden ?",
      content: "Puisque la traduction française ne vous aide pas (c'est toujours 'a été'), vous devez regarder le **contexte allemand** :\n\n### A. Le **Präteritum** (**wurde**) : Pour l'**Histoire** et le récit\n• **Les faits historiques** : 1492, la guerre, la chute du Mur.\n• **Les récits écrits** : Journaux, romans, rapports officiels.\n\n### B. Le **Perfekt** (**ist... worden**) : Pour l'**oral** et le **résultat présent**\n• **La conversation orale** : Ce que vous racontez à un ami.\n• **Le constat présent** : L'action est finie, on voit le résultat **maintenant**.",
      examples: [
        { de: "JFK **wurde** 1963 **ermordet**.", fr: "JFK a été assassiné en 1963.", note: "Fait historique daté : **Prétérit**." },
        { de: "Mein Auto **ist** endlich **repariert worden**!", fr: "Ma voiture a enfin été réparée !", note: "Résultat présent (je peux la conduire maintenant) : **Parfait**." }
      ]
    }
  ]
};

export const passivModauxB1: GrammarSection = {
  title: "3.2.6 Le Passif avec Verbes Modaux",
  topics: [
    {
      id: "b1-2-6-1",
      title: "I. Au Présent",
      content: "On conjugue le modal et on place **werden** à l'infinitif après le participe passé.\n\n**Structure** : **Modal** (présent) + **Partizip II** + **werden**.",
      examples: [
        { de: "Die Hausaufgaben **müssen** gemacht **werden**.", fr: "Les devoirs doivent être faits." },
        { de: "Hier **darf** nicht geparkt **werden**.", fr: "Il est interdit de stationner ici." }
      ]
    },
    {
      id: "b1-2-6-2",
      title: "II. Au Prétérit",
      content: "On utilise la forme passée du verbe modal.\n\n**Structure** : **Modal** (prétérit) + **Partizip II** + **werden**.",
      examples: [
        { de: "Das Haus **musste** renoviert **werden**.", fr: "La maison devait être rénovée." },
        { de: "Der Termin **konnte** nicht verschoben **werden**.", fr: "Le rendez-vous n'a pas pu être déplacé." }
      ]
    },
    {
      id: "b1-2-6-3",
      title: "III. Au Parfait (La forme complexe)",
      content: "Utilise le **double infinitif** à la fin de la phrase.\n\n**Structure** : **hat** + **Partizip II** + **werden** + **Modal** (infinitif).",
      examples: [
        { de: "Das Auto **hat** repariert **werden müssen**.", fr: "La voiture a dû être réparée." },
        { de: "Der Brief **hat** sofort geschickt **werden sollen**.", fr: "La lettre aurait dû être envoyée immédiatement." }
      ]
    }
  ]
};
