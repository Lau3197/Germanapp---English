
import { GrammarSection } from '../../../types';

export const phraseComplexe: GrammarSection = {
  title: "2.4 La Phrase Complexe (Nebensätze)",
  topics: [
    {
      id: "a2-4-1",
      title: "2.4.1 Les conjonctions de coordination",
      content: "Les conjonctions de coordination relient deux propositions **indépendantes** sans modifier l'ordre des mots. Le verbe reste en **position 2** dans chaque proposition.\n\n### Les 5 conjonctions de coordination principales\n\n| Conjonction | Sens | Exemple |\n|---|---|---|\n| **und** | et | Ich lerne Deutsch **und** ich lese viel. |\n| **aber** | mais | Ich möchte kommen, **aber** ich habe keine Zeit. |\n| **oder** | ou | Kommst du mit, **oder** bleibst du zu Hause? |\n| **denn** | car | Ich bleibe zu Hause, **denn** ich bin krank. |\n| **sondern** | mais (après négation) | Er ist nicht alt, **sondern** jung. |\n\n### Règle importante\n\n**Aucun changement de position du verbe** !\n\nProposition 1 + **conjonction** + Proposition 2 (verbe en position 2)\n\n### Différence entre \"aber\" et \"sondern\"\n\n**aber** (mais) : Simple opposition, pas de négation obligatoire\n• Ich bin müde, **aber** ich arbeite weiter.\n(Je suis fatigué, mais je continue à travailler.)\n\n**sondern** (mais au contraire) : Toujours après une négation, introduit une correction\n• Er ist **nicht** alt, **sondern** jung.\n(Il n'est pas vieux, mais jeune.)\n• Ich trinke **keinen** Kaffee, **sondern** Tee.\n(Je ne bois pas de café, mais du thé.)\n\n### Différence entre \"denn\" et \"weil\"\n\n**denn** (car) : Coordination → verbe en position 2\n• Ich bleibe zu Hause, **denn** ich **bin** krank.\n\n**weil** (parce que) : Subordination → verbe à la fin\n• Ich bleibe zu Hause, **weil** ich krank **bin**.",
      examples: [
        { de: "Ich lerne Deutsch und ich lese viel.", fr: "J'apprends l'allemand et je lis beaucoup.", note: "und : pas de changement de position." },
        { de: "Ich möchte kommen, aber ich habe keine Zeit.", fr: "Je voudrais venir, mais je n'ai pas le temps.", note: "aber : opposition simple." },
        { de: "Kommst du mit, oder bleibst du zu Hause?", fr: "Tu viens, ou tu restes à la maison ?", note: "oder : alternative." },
        { de: "Ich bleibe zu Hause, denn ich bin krank.", fr: "Je reste à la maison, car je suis malade.", note: "denn : cause (verbe position 2)." },
        { de: "Er ist nicht alt, sondern jung.", fr: "Il n'est pas vieux, mais jeune.", note: "sondern : correction après négation." }
      ]
    },
    {
      id: "a2-4-2",
      title: "2.4.2 Les conjonctions de subordination",
      content: "Les conjonctions de subordination introduisent une **proposition subordonnée** où le verbe conjugué va **à la fin**.\n\n### Règle fondamentale\n\nDans une subordonnée (Nebensatz), le verbe conjugué est poussé **à la toute fin de la phrase**.\n\n### Les conjonctions de subordination courantes\n\n| Conjonction | Sens | Exemple |\n|---|---|---|\n| **weil** | parce que | Ich lerne, **weil** ich Deutsch sprechen **will**. |\n| **dass** | que | Ich hoffe, **dass** du morgen **kommst**. |\n| **wenn** | si / quand | **Wenn** es regnet, **bleibe** ich zu Hause. |\n| **als** | quand (passé unique) | **Als** ich jung **war**, spielte ich viel. |\n| **ob** | si (question indirecte) | Ich weiß nicht, **ob** er **kommt**. |\n| **obwohl** | bien que | Ich gehe, **obwohl** ich müde **bin**. |\n| **während** | pendant que | **Während** ich koche, liest du. |\n| **bevor** | avant que | **Bevor** ich gehe, rufe ich an. |\n| **nachdem** | après que | **Nachdem** ich gegessen habe, gehe ich. |\n| **bis** | jusqu'à ce que | Warte, **bis** ich **komme**. |\n| **damit** | pour que | Ich lerne, **damit** ich bestehe. |\n\n### Position du verbe dans la subordonnée\n\n**Structure** : Conjonction + Sujet + ... + **Verbe conjugué à la fin**\n\n• Ich bleibe zu Hause, **weil** ich krank **bin**.\n• Ich hoffe, **dass** du bald **kommst**.\n• Ich weiß nicht, **ob** er heute **arbeitet**.\n\n### Attention aux verbes séparables\n\nDans une subordonnée, les verbes séparables **restent ensemble** :\n• Ich weiß, dass er um 7 Uhr **aufsteht**. (pas \"steht... auf\")",
      examples: [
        { de: "Ich lerne Deutsch, weil ich in Berlin arbeiten will.", fr: "J'apprends l'allemand parce que je veux travailler à Berlin.", note: "weil : verbe 'will' à la fin." },
        { de: "Ich hoffe, dass du morgen kommst.", fr: "J'espère que tu viendras demain.", note: "dass : verbe 'kommst' à la fin." },
        { de: "Ich weiß nicht, ob er heute kommt.", fr: "Je ne sais pas s'il vient aujourd'hui.", note: "ob : question indirecte." },
        { de: "Ich gehe spazieren, obwohl es regnet.", fr: "Je vais me promener, bien qu'il pleuve.", note: "obwohl : verbe 'regnet' à la fin." }
      ]
    },
    {
      id: "a2-4-3",
      title: "2.4.3 'wenn' vs 'als' (quand)",
      content: "Les deux conjonctions signifient \"quand\" mais s'utilisent dans des contextes différents.\n\n### WENN : Répétition ou Futur/Présent\n\n**Usage** :\n- Actions **répétées** dans le passé (chaque fois que)\n- Actions au **présent** ou au **futur**\n- Condition (si)\n\n**Exemples** :\n• **Wenn** ich Zeit habe, lese ich. (Quand j'ai le temps, je lis.) - Répétition au présent\n• **Wenn** er kam, brachte er Blumen mit. (Quand il venait, il apportait des fleurs.) - Répétition au passé\n• **Wenn** du morgen kommst, gehen wir ins Kino. (Quand tu viendras demain, nous irons au cinéma.) - Futur\n\n### ALS : Événement unique au passé\n\n**Usage** :\n- Action **unique** et **ponctuelle** dans le passé\n- Ne se répète pas\n\n**Exemples** :\n• **Als** ich jung war, lebte ich in Berlin. (Quand j'étais jeune, je vivais à Berlin.) - Période unique\n• **Als** ich ihn traf, war er Student. (Quand je l'ai rencontré, il était étudiant.) - Moment unique\n• **Als** der Krieg endete, war ich 10 Jahre alt. (Quand la guerre s'est terminée, j'avais 10 ans.) - Événement unique\n\n### Tableau récapitulatif\n\n| Situation | Conjonction | Exemple |\n|---|---|---|\n| Présent/Futur | **wenn** | Wenn ich Zeit habe... |\n| Répétition (passé) | **wenn** | Wenn er kam... (chaque fois) |\n| Événement unique (passé) | **als** | Als ich jung war... |",
      examples: [
        { de: "Wenn ich Zeit habe, lese ich ein Buch.", fr: "Quand j'ai le temps, je lis un livre.", note: "wenn : présent/habitude." },
        { de: "Als ich jung war, lebte ich in Berlin.", fr: "Quand j'étais jeune, j'habitais à Berlin.", note: "als : période unique au passé." },
        { de: "Wenn er kam, brachte er immer Blumen.", fr: "Quand il venait, il apportait toujours des fleurs.", note: "wenn : répétition au passé." },
        { de: "Als ich ihn zum ersten Mal traf, war er Student.", fr: "Quand je l'ai rencontré pour la première fois, il était étudiant.", note: "als : moment unique." }
      ]
    },
    {
      id: "a2-4-4",
      title: "2.4.4 La position du verbe dans la phrase principale après une subordonnée",
      content: "Quand une phrase commence par une **subordonnée**, le verbe de la principale vient **immédiatement après la virgule**.\n\n### Règle\n\n**Subordonnée en premier** → **Verbe conjugué en position 1** dans la principale\n\n### Structure\n\n**Wenn** + sujet + ... + verbe, **verbe** + sujet + ...\n\n### Exemples\n\n**Normal** (principale en premier) :\n• Ich bleibe zu Hause, **wenn** es regnet.\n\n**Inversé** (subordonnée en premier) :\n• **Wenn** es regnet, **bleibe** ich zu Hause.\n\n### Explication\n\nLa subordonnée entière compte comme **position 1**. Le verbe de la principale vient donc en **position 2** (juste après la virgule), et le sujet passe en **position 3**.\n\n### Autres exemples\n\n• **Weil** ich müde bin, **gehe** ich früh ins Bett.\n(Parce que je suis fatigué, je vais me coucher tôt.)\n\n• **Obwohl** es regnet, **gehen** wir spazieren.\n(Bien qu'il pleuve, nous allons nous promener.)\n\n• **Als** ich jung war, **spielte** ich Fußball.\n(Quand j'étais jeune, je jouais au football.)",
      examples: [
        { de: "Wenn es regnet, bleibe ich zu Hause.", fr: "Quand il pleut, je reste à la maison.", note: "Subordonnée en premier → verbe de la principale après la virgule." },
        { de: "Weil ich müde bin, gehe ich früh ins Bett.", fr: "Parce que je suis fatigué, je vais me coucher tôt.", note: "Inversion : verbe 'gehe' après la virgule." },
        { de: "Obwohl es kalt ist, gehen wir schwimmen.", fr: "Bien qu'il fasse froid, nous allons nager.", note: "Inversion après 'obwohl'." },
        { de: "Als ich Kind war, wohnte ich in Hamburg.", fr: "Quand j'étais enfant, j'habitais à Hambourg.", note: "Inversion après 'als'." }
      ]
    }
  ]
};
