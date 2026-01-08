
import { GrammarSection } from '../../../types';

export const tempsPasse: GrammarSection = {
  title: "2.1 Les Temps du Passé (Vergangenheit)",
  topics: [
    {
      id: "a2-1-1",
      title: "2.1.1 Introduction aux temps du passé",
      content: "L'allemand possède deux temps principaux pour exprimer le passé :\n\n**Le Perfekt (Parfait)** :\n- Temps du passé le plus utilisé à l'oral\n- Utilisé dans la conversation quotidienne\n- Structure : auxiliaire (haben/sein) + Participe II\n\n**Le Präteritum (Prétérit)** :\n- Temps du passé écrit et littéraire\n- Utilisé dans les récits, journaux, livres\n- Très courant avec sein, haben et les verbes modaux\n\n### Quelle différence avec le français ?\n\nEn français, on distingue passé composé et imparfait. En allemand, cette distinction n'existe pas de la même manière. Le Perfekt et le Präteritum peuvent tous deux traduire le passé composé OU l'imparfait selon le contexte.",
      examples: [
        { de: "Perfekt: Ich habe gegessen.", fr: "J'ai mangé / Je mangeais.", note: "Oral, conversation." },
        { de: "Präteritum: Ich aß.", fr: "J'ai mangé / Je mangeais.", note: "Écrit, littéraire." }
      ]
    },
    {
      id: "a2-1-2",
      title: "2.1.2 Le Perfekt : Structure et Formation",
      content: "Le Perfekt est le temps du passé le plus utilisé en allemand parlé.\n\n### Structure du Perfekt\n\n**Auxiliaire (haben ou sein) au présent + Participe II à la fin**\n\n### Choix de l'auxiliaire\n\n**Avec HABEN** (la majorité des verbes) :\n- Tous les verbes transitifs (avec COD)\n- Verbes réfléchis\n- Verbes modaux\n- Verbes sans mouvement ni changement d'état\n\n**Avec SEIN** (verbes de mouvement ou changement d'état) :\n- Verbes de **mouvement** : gehen, kommen, fahren, fliegen, laufen, reisen...\n- Verbes de **changement d'état** : werden, aufstehen, einschlafen, sterben, wachsen...\n- Verbes spéciaux : sein, bleiben, passieren, geschehen\n\n### Formation du Participe II\n\n**Verbes réguliers (schwache Verben)** :\nge- + radical + -t\n\n| Infinitif | Participe II | Exemple |\n|---|---|---|\n| lernen | ge**lern**t | Ich habe Deutsch gelernt. |\n| arbeiten | ge**arbeit**et | Er hat gearbeitet. |\n| kaufen | ge**kauf**t | Wir haben eingekauft. |\n| machen | ge**mach**t | Was hast du gemacht? |\n| spielen | ge**spiel**t | Die Kinder haben gespielt. |\n\n**Verbes irréguliers (starke Verben)** :\nge- + radical modifié + -en\n\n| Infinitif | Participe II | Exemple |\n|---|---|---|\n| sehen | ge**seh**en | Ich habe ihn gesehen. |\n| gehen | ge**gang**en | Er ist nach Hause gegangen. |\n| schreiben | ge**schrieb**en | Sie hat einen Brief geschrieben. |\n| essen | ge**gess**en | Wir haben Pizza gegessen. |\n| trinken | ge**trunk**en | Was hast du getrunken? |\n| fahren | ge**fahr**en | Wir sind nach Berlin gefahren. |\n| kommen | ge**komm**en | Er ist spät gekommen. |",
      examples: [
        { de: "Ich habe gestern Deutsch gelernt.", fr: "J'ai appris l'allemand hier.", note: "Verbe régulier avec haben." },
        { de: "Wir sind nach Berlin gefahren.", fr: "Nous sommes allés à Berlin.", note: "Verbe de mouvement avec sein." },
        { de: "Sie hat einen Brief geschrieben.", fr: "Elle a écrit une lettre.", note: "Verbe irrégulier avec haben." },
        { de: "Er ist um 7 Uhr aufgestanden.", fr: "Il s'est levé à 7 heures.", note: "Changement d'état avec sein." }
      ]
    },
    {
      id: "a2-1-3",
      title: "2.1.3 Participes II des verbes à particule",
      content: "Les verbes à particule séparable et inséparable ont des règles spéciales pour le Participe II.\n\n### Verbes à particule SÉPARABLE\n\nLe **ge-** s'insère **entre** la particule et le radical.\n\n| Infinitif | Participe II | Exemple |\n|---|---|---|\n| auf**stehen** | auf**ge**standen | Ich bin früh aufgestanden. |\n| ein**kaufen** | ein**ge**kauft | Wir haben eingekauft. |\n| an**rufen** | an**ge**rufen | Sie hat mich angerufen. |\n| mit**bringen** | mit**ge**bracht | Er hat Kuchen mitgebracht. |\n| ab**fahren** | ab**ge**fahren | Der Zug ist abgefahren. |\n| an**kommen** | an**ge**kommen | Wir sind angekommen. |\n| aus**gehen** | aus**ge**gangen | Sie ist ausgegangen. |\n\n**Particules séparables courantes** : ab-, an-, auf-, aus-, ein-, mit-, vor-, zu-, zurück-\n\n### Verbes à particule INSÉPARABLE\n\n**Pas de \"ge-\"** dans le Participe II.\n\n| Infinitif | Participe II | Exemple |\n|---|---|---|\n| be**suchen** | besucht | Ich habe ihn besucht. |\n| ver**stehen** | verstanden | Hast du das verstanden? |\n| er**zählen** | erzählt | Sie hat eine Geschichte erzählt. |\n| ent**decken** | entdeckt | Wir haben etwas entdeckt. |\n| ge**fallen** | gefallen | Das hat mir gefallen. |\n| emp**fehlen** | empfohlen | Er hat mir ein Buch empfohlen. |\n\n**Particules inséparables** : be-, emp-, ent-, er-, ge-, miss-, ver-, zer-\n\n### Verbes en -ieren\n\n**Pas de \"ge-\"** dans le Participe II.\n\n| Infinitif | Participe II | Exemple |\n|---|---|---|\n| stud**ieren** | studiert | Ich habe in Berlin studiert. |\n| telefon**ieren** | telefoniert | Wir haben telefoniert. |\n| repar**ieren** | repariert | Er hat das Auto repariert. |\n| organ**isieren** | organisiert | Sie hat alles organisiert. |",
      examples: [
        { de: "Ich bin um 7 Uhr aufgestanden.", fr: "Je me suis levé à 7 heures.", note: "Particule séparable : ge- entre auf et standen." },
        { de: "Wir haben im Supermarkt eingekauft.", fr: "Nous avons fait les courses au supermarché.", note: "Particule séparable avec haben." },
        { de: "Hast du das verstanden?", fr: "As-tu compris ?", note: "Particule inséparable : pas de ge-." },
        { de: "Ich habe in München studiert.", fr: "J'ai étudié à Munich.", note: "Verbe en -ieren : pas de ge-." }
      ]
    },
    {
      id: "a2-1-4",
      title: "2.1.4 Verbes mixtes au Perfekt",
      content: "Les verbes mixtes (Mischverben) combinent les caractéristiques des verbes réguliers et irréguliers :\n- Terminaison **-t** (comme les réguliers)\n- Changement de voyelle dans le radical (comme les irréguliers)\n\n### Liste des verbes mixtes importants\n\n| Infinitif | Participe II | Exemple |\n|---|---|---|\n| bringen | ge**brach**t | Er hat Blumen gebracht. |\n| denken | ge**dach**t | Ich habe an dich gedacht. |\n| kennen | ge**kann**t | Wir haben uns schon gekannt. |\n| nennen | ge**nann**t | Sie hat mich genannt. |\n| rennen | ge**rann**t | Er ist gerannt. |\n| wissen | ge**wuss**t | Das habe ich nicht gewusst. |\n| brennen | ge**brann**t | Das Feuer hat gebrannt. |\n| senden | ge**sand**t/gesendet | Ich habe eine E-Mail gesendet. |\n\n### Verbes modaux au Perfekt\n\nLes verbes modaux utilisent **haben** et ont un Participe II régulier :\n\n| Infinitif | Participe II | Exemple |\n|---|---|---|\n| können | gekonnt | Das habe ich nicht gekonnt. |\n| müssen | gemusst | Ich habe das gemusst. |\n| wollen | gewollt | Sie hat das gewollt. |\n| dürfen | gedurft | Das hast du nicht gedurft. |\n| sollen | gesollt | Das habe ich gesollt. |\n| mögen | gemocht | Ich habe ihn gemocht. |\n\n**Attention** : Quand un verbe modal est suivi d'un infinitif, on utilise la forme infinitive (pas le Participe II) :\n• Ich habe nicht kommen **können**. (et non \"gekonnt\")",
      examples: [
        { de: "Er hat mir Blumen gebracht.", fr: "Il m'a apporté des fleurs.", note: "Verbe mixte : radical chang + terminaison -t." },
        { de: "Ich habe an dich gedacht.", fr: "J'ai pensé à toi.", note: "denken → gedacht (verbe mixte)." },
        { de: "Das habe ich nicht gewusst.", fr: "Je ne savais pas cela.", note: "wissen → gewusst (verbe mixte)." },
        { de: "Ich habe nicht kommen können.", fr: "Je n'ai pas pu venir.", note: "Modal + infinitif : infinitif à la fin, pas de Partizip II." }
      ]
    },
    {
      id: "a2-1-5",
      title: "2.1.5 Le Präteritum : Le temps du récit écrit",
      content: "Le **Präteritum** (prétérit) est le temps du passé utilisé principalement à l'écrit (journaux, livres, contes). À l'oral, il est surtout utilisé avec certains verbes très fréquents.\n\n### Verbes indispensables au Präteritum\n\n**SEIN** (être) :\n| Personne | Präteritum |\n|---|---|\n| ich | **war** |\n| du | **warst** |\n| er/sie/es | **war** |\n| wir | **waren** |\n| ihr | **wart** |\n| sie/Sie | **waren** |\n\n**HABEN** (avoir) :\n| Personne | Präteritum |\n|---|---|\n| ich | **hatte** |\n| du | **hattest** |\n| er/sie/es | **hatte** |\n| wir | **hatten** |\n| ihr | **hattet** |\n| sie/Sie | **hatten** |\n\n### Pourquoi utiliser le Präteritum avec sein et haben ?\n\nÀ l'oral, dire \"Ich **war** im Kino\" est beaucoup plus naturel que \"Ich **bin** im Kino **gewesen**\". C'est plus court et plus fluide.\n\n### Exemples courants\n\n**Avec sein** :\n• Wo **warst** du gestern? (Où étais-tu hier ?)\n• Das **war** toll! (C'était génial !)\n• Wir **waren** in Berlin. (Nous étions à Berlin.)\n\n**Avec haben** :\n• Ich **hatte** keine Zeit. (Je n'avais pas le temps.)\n• **Hattest** du Hunger? (Avais-tu faim ?)\n• Sie **hatten** viel Glück. (Ils avaient beaucoup de chance.)",
      examples: [
        { de: "Gestern war ich im Kino.", fr: "Hier, j'étais au cinéma.", note: "Plus naturel que 'Ich bin im Kino gewesen'." },
        { de: "Früher hatte ich einen Hund.", fr: "Avant, j'avais un chien.", note: "Präteritum de haben." },
        { de: "Das war ein toller Film!", fr: "C'était un super film !", note: "Préférer 'war' à l'oral." },
        { de: "Wir waren sehr müde.", fr: "Nous étions très fatigués.", note: "Pluriel de sein au Präteritum." }
      ]
    },
    {
      id: "a2-1-6",
      title: "2.1.6 Les verbes modaux au Präteritum",
      content: "Les verbes modaux sont très souvent utilisés au Präteritum, même à l'oral, car c'est plus simple que le Perfekt.\n\n### KÖNNEN (pouvoir)\n| Personne | Präteritum |\n|---|---|\n| ich | **konnte** |\n| du | **konntest** |\n| er/sie/es | **konnte** |\n| wir | **konnten** |\n| ihr | **konntet** |\n| sie/Sie | **konnten** |\n\n### MÜSSEN (devoir)\n| Personne | Präteritum |\n|---|---|\n| ich | **musste** |\n| du | **musstest** |\n| er/sie/es | **musste** |\n| wir | **mussten** |\n| ihr | **musstet** |\n| sie/Sie | **mussten** |\n\n### WOLLEN (vouloir)\n| Personne | Präteritum |\n|---|---|\n| ich | **wollte** |\n| du | **wolltest** |\n| er/sie/es | **wollte** |\n| wir | **wollten** |\n| ihr | **wolltet** |\n| sie/Sie | **wollten** |\n\n### DÜRFEN (avoir le droit)\n| Personne | Präteritum |\n|---|---|\n| ich | **durfte** |\n| du | **durftest** |\n| er/sie/es | **durfte** |\n| wir | **durften** |\n| ihr | **durftet** |\n| sie/Sie | **durften** |\n\n### SOLLEN (devoir - obligation morale)\n| Personne | Präteritum |\n|---|---|\n| ich | **sollte** |\n| du | **solltest** |\n| er/sie/es | **sollte** |\n| wir | **sollten** |\n| ihr | **solltet** |\n| sie/Sie | **sollten** |\n\n### MÖGEN (aimer)\n| Personne | Präteritum |\n|---|---|\n| ich | **mochte** |\n| du | **mochtest** |\n| er/sie/es | **mochte** |\n| wir | **mochten** |\n| ihr | **mochtet** |\n| sie/Sie | **mochten** |",
      examples: [
        { de: "Ich konnte nicht kommen.", fr: "Je ne pouvais pas venir.", note: "können au Präteritum." },
        { de: "Er musste früh aufstehen.", fr: "Il devait se lever tôt.", note: "müssen au Präteritum." },
        { de: "Wir wollten ins Kino gehen.", fr: "Nous voulions aller au cinéma.", note: "wollen au Präteritum." },
        { de: "Sie durfte nicht ausgehen.", fr: "Elle n'avait pas le droit de sortir.", note: "dürfen au Präteritum." },
        { de: "Du solltest mehr lernen.", fr: "Tu devais apprendre plus.", note: "sollen au Präteritum." }
      ]
    }
  ]
};
