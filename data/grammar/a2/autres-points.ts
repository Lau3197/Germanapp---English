
import { GrammarSection } from '../../../types';

export const autresPoints: GrammarSection = {
  title: "2.5 Autres points essentiels A2",
  topics: [
    {
      id: "a2-5-1",
      title: "2.5.1 Les pronoms possessifs et leur déclinaison",
      content: "Les possessifs (mein, dein, sein...) se déclinent comme l'article indéfini \"ein\".\n\n### Liste des possessifs\n\n| Personne | Possessif | Traduction |\n|---|---|---|\n| ich | **mein** | mon/ma/mes |\n| du | **dein** | ton/ta/tes |\n| er | **sein** | son/sa/ses (à lui) |\n| sie | **ihr** | son/sa/ses (à elle) |\n| es | **sein** | son/sa/ses (neutre) |\n| wir | **unser** | notre/nos |\n| ihr | **euer** | votre/vos (familier pluriel) |\n| sie | **ihr** | leur/leurs |\n| Sie | **Ihr** | votre/vos (formel) |\n\n### Déclinaison des possessifs\n\nLes possessifs se déclinent exactement comme **\"ein\"** ou **\"kein\"**.\n\n**Exemple avec \"mein\"** :\n\n| Cas | Masculin | Féminin | Neutre | Pluriel |\n|---|---|---|---|---|\n| Nominatif | mein Bruder | mein**e** Schwester | mein Kind | mein**e** Eltern |\n| Accusatif | mein**en** Bruder | mein**e** Schwester | mein Kind | mein**e** Eltern |\n| Datif | mein**em** Bruder | mein**er** Schwester | mein**em** Kind | mein**en** Eltern |\n| Génitif | mein**es** Bruders | mein**er** Schwester | mein**es** Kindes | mein**er** Eltern |\n\n### Points importants\n\n**1. Le possessif s'accorde avec l'objet possédé, pas le possesseur** :\n• Er liest **sein** Buch. (Il lit son livre.) - \"Buch\" est neutre\n• Sie liest **ihr** Buch. (Elle lit son livre.) - \"ihr\" car le possesseur est féminin\n\n**2. Attention à \"euer\"** :\nQuand \"euer\" prend une terminaison, le \"e\" du milieu disparaît :\n• eur**e** Mutter (votre mère)\n• eur**em** Vater (à votre père)\n\n**3. \"ihr\" avec majuscule** :\n• **ihr** (minuscule) = son/sa (à elle) ou leur\n• **Ihr** (majuscule) = votre (forme de politesse)",
      examples: [
        { de: "Das ist mein Bruder.", fr: "C'est mon frère.", note: "Nominatif masculin - pas de terminaison." },
        { de: "Ich sehe meinen Bruder.", fr: "Je vois mon frère.", note: "Accusatif masculin - terminaison -en." },
        { de: "Ich helfe meiner Schwester.", fr: "J'aide ma sœur.", note: "Datif féminin - terminaison -er." },
        { de: "Er liebt seine Mutter.", fr: "Il aime sa mère.", note: "sein + féminin accusatif = seine." },
        { de: "Sie besucht ihre Eltern.", fr: "Elle rend visite à ses parents.", note: "ihr + pluriel = ihre." },
        { de: "Wo ist eure Mutter?", fr: "Où est votre mère ?", note: "euer + terminaison = eure (le e disparaît)." }
      ]
    },
    {
      id: "a2-5-2",
      title: "2.5.2 Les comparatifs et superlatifs",
      content: "L'allemand forme les comparatifs et superlatifs différemment du français.\n\n### Formation du comparatif\n\n**Adjectif + -er**\n\n| Adjectif | Comparatif | Exemple |\n|---|---|---|\n| schnell (rapide) | schnell**er** | Er ist schneller als ich. |\n| klein (petit) | klein**er** | Sie ist kleiner als er. |\n| interessant | interessant**er** | Das Buch ist interessanter. |\n\n### Formation du superlatif\n\n**am + Adjectif + -sten** (adverbe) ou **der/die/das + Adjectif + -ste** (adjectif épithète)\n\n| Adjectif | Superlatif (am...) | Superlatif (der...) |\n|---|---|---|\n| schnell | **am schnellsten** | der **schnellste** |\n| klein | **am kleinsten** | der **kleinste** |\n| interessant | **am interessantesten** | das **interessanteste** |\n\n### Formes irrégulières importantes\n\n| Adjectif | Comparatif | Superlatif |\n|---|---|---|\n| gut (bon) | **besser** | **am besten** / der beste |\n| viel (beaucoup) | **mehr** | **am meisten** / der meiste |\n| gern (volontiers) | **lieber** | **am liebsten** |\n| hoch (haut) | **höher** | **am höchsten** / der höchste |\n| nah (proche) | **näher** | **am nächsten** / der nächste |\n| groß (grand) | **größer** | **am größten** / der größte |\n| alt (vieux) | **älter** | **am ältesten** / der älteste |\n| jung (jeune) | **jünger** | **am jüngsten** / der jüngste |\n| lang (long) | **länger** | **am längsten** / der längste |\n| kurz (court) | **kürzer** | **am kürzesten** / der kürzeste |\n| kalt (froid) | **kälter** | **am kältesten** / der kälteste |\n| warm (chaud) | **wärmer** | **am wärmsten** / der wärmste |\n\n### Structure de comparaison\n\n**Comparatif + als** (que) :\n• Er ist größer **als** ich. (Il est plus grand que moi.)\n• Berlin ist größer **als** München. (Berlin est plus grand que Munich.)\n\n**so + Adjectif + wie** (aussi... que) :\n• Er ist **so** groß **wie** ich. (Il est aussi grand que moi.)\n• Berlin ist nicht **so** schön **wie** München. (Berlin n'est pas aussi beau que Munich.)\n\n### Déclinaison du comparatif et superlatif\n\nQuand le comparatif ou superlatif est **épithète** (avant un nom), il se décline comme un adjectif normal :\n\n• ein schneller**er** Wagen (une voiture plus rapide)\n• der schnellst**e** Wagen (la voiture la plus rapide)\n• mit ein**em** schneller**en** Wagen (avec une voiture plus rapide)",
      examples: [
        { de: "Er ist größer als ich.", fr: "Il est plus grand que moi.", note: "Comparatif + als." },
        { de: "Sie ist so groß wie ihre Mutter.", fr: "Elle est aussi grande que sa mère.", note: "so... wie = aussi... que." },
        { de: "Das ist das beste Restaurant.", fr: "C'est le meilleur restaurant.", note: "Superlatif irrégulier de 'gut'." },
        { de: "Ich trinke am liebsten Kaffee.", fr: "J'aime surtout boire du café.", note: "Superlatif de 'gern'." },
        { de: "Berlin ist größer als München.", fr: "Berlin est plus grand que Munich.", note: "Comparatif régulier avec Umlaut." },
        { de: "Er läuft am schnellsten.", fr: "Il court le plus vite.", note: "Superlatif avec 'am'." },
        { de: "Das ist ein interessanteres Buch.", fr: "C'est un livre plus intéressant.", note: "Comparatif décliné." }
      ]
    },
    {
      id: "a2-5-3",
      title: "2.5.3 Les verbes réfléchis (Reflexive Verben)",
      content: "Les verbes réfléchis utilisent un pronom réfléchi qui renvoie au sujet.\n\n### Les pronoms réfléchis\n\n| Personne | Accusatif | Datif |\n|---|---|---|\n| ich | **mich** | **mir** |\n| du | **dich** | **dir** |\n| er/sie/es | **sich** | **sich** |\n| wir | **uns** | **uns** |\n| ihr | **euch** | **euch** |\n| sie/Sie | **sich** | **sich** |\n\n### Quand utiliser l'Accusatif ou le Datif ?\n\n**Accusatif** : Quand l'action porte directement sur soi (pas d'autre COD)\n• Ich wasche **mich**. (Je me lave.)\n• Er freut **sich**. (Il se réjouit.)\n\n**Datif** : Quand on précise une partie du corps ou qu'il y a un autre COD\n• Ich wasche **mir** die Hände. (Je me lave les mains.)\n• Ich kaufe **mir** ein Buch. (Je m'achète un livre.)\n\n### Verbes réfléchis courants (toujours réfléchis)\n\n| Verbe | Sens | Cas | Exemple |\n|---|---|---|---|\n| sich freuen | se réjouir | Akk | Ich freue mich auf den Urlaub. |\n| sich beeilen | se dépêcher | Akk | Beeil dich! |\n| sich erholen | se reposer | Akk | Wir erholen uns. |\n| sich interessieren | s'intéresser | Akk | Ich interessiere mich für Musik. |\n| sich erinnern | se souvenir | Akk | Ich erinnere mich an dich. |\n| sich entschuldigen | s'excuser | Akk | Ich entschuldige mich. |\n| sich fühlen | se sentir | Akk | Ich fühle mich gut. |\n| sich treffen | se rencontrer | Akk | Wir treffen uns morgen. |\n| sich unterhalten | discuter | Akk | Wir unterhalten uns. |\n| sich setzen | s'asseoir | Akk | Setz dich! |\n\n### Verbes parfois réfléchis (peuvent avoir un autre objet)\n\n| Non-réfléchi | Réfléchi |\n|---|---|\n| Ich wasche das Auto. | Ich wasche **mich**. |\n| Ich ziehe die Jacke an. | Ich ziehe **mich** an. |\n| Er kämmt das Kind. | Er kämmt **sich**. |\n\n### Verbes réfléchis avec prépositions\n\n| Verbe | Préposition | Exemple |\n|---|---|---|\n| sich freuen **auf** | sur (futur) | Ich freue mich **auf** den Urlaub. |\n| sich freuen **über** | de (présent) | Ich freue mich **über** das Geschenk. |\n| sich interessieren **für** | pour | Ich interessiere mich **für** Sport. |\n| sich erinnern **an** | de (souvenir) | Ich erinnere mich **an** dich. |\n| sich kümmern **um** | de (s'occuper) | Ich kümmere mich **um** die Kinder. |\n| sich verlieben **in** | de (tomber amoureux) | Er hat sich **in** sie verliebt. |",
      examples: [
        { de: "Ich freue mich auf den Urlaub.", fr: "Je me réjouis des vacances.", note: "sich freuen auf + accusatif." },
        { de: "Beeil dich! Wir sind spät.", fr: "Dépêche-toi ! Nous sommes en retard.", note: "sich beeilen (impératif)." },
        { de: "Er wäscht sich die Hände.", fr: "Il se lave les mains.", note: "Datif car partie du corps spécifiée." },
        { de: "Wir treffen uns morgen um 10 Uhr.", fr: "Nous nous rencontrons demain à 10 heures.", note: "sich treffen." },
        { de: "Ich interessiere mich für Musik.", fr: "Je m'intéresse à la musique.", note: "sich interessieren für." },
        { de: "Sie fühlt sich heute nicht gut.", fr: "Elle ne se sent pas bien aujourd'hui.", note: "sich fühlen." },
        { de: "Setz dich bitte!", fr: "Assieds-toi s'il te plaît !", note: "sich setzen (impératif)." }
      ]
    },
    {
      id: "a2-5-4",
      title: "2.5.4 Le Futur I (werden)",
      content: "Le Futur I exprime une action future ou une intention.\n\n### Formation\n\n**werden (conjugué) + Infinitif (à la fin)**\n\n### Conjugaison de \"werden\"\n\n| Personne | werden |\n|---|---|\n| ich | **werde** |\n| du | **wirst** |\n| er/sie/es | **wird** |\n| wir | **werden** |\n| ihr | **werdet** |\n| sie/Sie | **werden** |\n\n### Structure de la phrase\n\nSujet + **werden** (conjugué) + ... + **Infinitif** (à la fin)\n\n• Ich **werde** morgen **anrufen**.\n• Er **wird** nächste Woche **kommen**.\n• Wir **werden** bald **umziehen**.\n\n### Usages du Futur I\n\n**1. Actions futures** :\n• Morgen **werde** ich ins Kino **gehen**.\n(Demain, j'irai au cinéma.)\n\n**2. Intentions / Promesses** :\n• Ich **werde** dich nie **vergessen**.\n(Je ne t'oublierai jamais.)\n\n**3. Suppositions** :\n• Er **wird** wohl krank **sein**.\n(Il est probablement malade.)\n\n### Alternative : Présent + indication temporelle\n\nEn allemand, on utilise souvent le **présent** avec un complément de temps pour exprimer le futur :\n\n• Ich **gehe** morgen ins Kino. (= Ich werde morgen ins Kino gehen.)\n• Er **kommt** nächste Woche. (= Er wird nächste Woche kommen.)\n\nCette forme est plus courante à l'oral.",
      examples: [
        { de: "Ich werde morgen anrufen.", fr: "J'appellerai demain.", note: "Futur I - structure de base." },
        { de: "Das Wetter wird besser werden.", fr: "Le temps va s'améliorer.", note: "werden + werden (devenir)." },
        { de: "Wir werden nächstes Jahr heiraten.", fr: "Nous nous marierons l'année prochaine.", note: "Intention future." },
        { de: "Er wird wohl zu Hause sein.", fr: "Il est probablement à la maison.", note: "Supposition." },
        { de: "Du wirst das verstehen.", fr: "Tu comprendras cela.", note: "Futur I." },
        { de: "Sie werden uns besuchen.", fr: "Ils nous rendront visite.", note: "Pluriel - werden + Infinitif." }
      ]
    }
  ]
};
