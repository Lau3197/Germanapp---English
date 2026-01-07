
import { GrammarSection } from '../../../types';

export const tempsPasse: GrammarSection = {
  title: "2.1 Les Temps du Passé (Vergangenheit)",
  topics: [
    {
      id: "a2-1-1",
      title: "Le Perfekt : Le passé de la conversation",
      content: "En allemand, on utilise le **Perfekt** pour presque tout ce qui est oral ou informel.\n\n### Structure du Perfekt\n**Auxiliaire (haben ou sein) + Participe II (à la fin)**.\n\n• **Avec SEIN** : Verbes de mouvement (**gehen**, **fahren**) ou de changement d'état (**aufstehen**, **werden**).\n• **Avec HABEN** : Tous les autres verbes, notamment ceux qui ont un complément d'objet.\n\n### Formation du Participe II\n• **Verbes réguliers** : **ge-** + radical + **-t** (gelernt, gearbeitet).\n• **Verbes irréguliers** : **ge-** + radical modifié + **-en** (gesehen, gegangen).",
      examples: [
        { de: "Ich habe gestern Deutsch gelernt.", fr: "J'ai appris l'allemand hier.", note: "Verbe régulier avec haben." },
        { de: "Wir sind nach Berlin gefahren.", fr: "Nous sommes allés à Berlin.", note: "Verbe de mouvement avec sein." }
      ]
    },
    {
      id: "a2-1-2",
      title: "Le Präteritum : Pour les récits et verbes d'état",
      content: "Le **Präteritum** est surtout utilisé à l'écrit (journaux, livres) ou pour certains verbes très fréquents à l'oral pour simplifier la phrase.\n\n### Verbes indispensables au Präteritum\n• **sein** : ich war, du warst, er war...\n• **haben** : ich hatte, du hattest, er hatte...\n• **Verbes modaux** : ich konnte, ich wollte, ich musste...",
      examples: [
        { de: "Gestern war ich im Kino.", fr: "Hier, j'étais au cinéma.", note: "Plus naturel que 'Ich bin gewesen'." },
        { de: "Früher hatte ich einen Hund.", fr: "Avant, j'avais un chien." }
      ]
    }
  ]
};
