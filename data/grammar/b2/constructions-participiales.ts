
import { GrammarSection } from '../../../types';

export const participialesB2: GrammarSection = {
  title: "5. Les constructions participiales (Partizipialkonstruktionen)",
  topics: [
    {
      id: "b2-5-1",
      title: "5.1 Le concept : L'art de la condensation",
      content: "Les constructions participiales permettent de transformer une **proposition relative** (longue et lourde) en un simple **adjectif étendu** placé devant le nom.\n\n### Pourquoi les utiliser ?\n• **Style soutenu** : Indispensable à l'écrit (journaux, rapports, université).\n• **Densité** : On donne énormément d'informations sans jamais couper le flux de la phrase principale.\n\n### La transformation visuelle\n• *Relativsatz* : Der Mann, **der dort an der Ecke wartet**, ist mein Onkel.\n• *Partizipialkonstruktion* : Der [dort an der Ecke **wartende**] Mann ist mein Onkel.",
      examples: [
        { de: "Die **lachenden** Kinder spielen im Park.", fr: "Les enfants qui rient jouent dans le parc.", note: "Le participe remplace la relative 'die lachen'." }
      ]
    },
    {
      id: "b2-5-2",
      title: "5.2 Partizip I : Actif et Simultané",
      content: "Le Partizip I décrit une action qui se passe **en même temps** que le verbe principal et dont le nom est l'**auteur**.\n\n### Formation\n**Infinitif + 'd' + terminaison d'adjectif**.\n• *laufen* -> laufend- (courant)\n• *arbeiten* -> arbeitend- (travaillant)\n\n### Sens\nToujours **actif**. Si le nom fait l'action, on utilise le Partizip I.",
      examples: [
        { de: "Die **singenden** Vögel begrüßen den Morgen.", fr: "Les oiseaux chantants (qui chantent) saluent le matin." },
        { de: "Ein **sich schnell entwickelndes** Land.", fr: "Un pays qui se développe rapidement." }
      ]
    },
    {
      id: "b2-5-3",
      title: "5.3 Partizip II : Passif et Terminé",
      content: "Le Partizip II décrit une action qui est **terminée** ou qui a un sens **passif**.\n\n### Formation\n**Forme du participe passé + terminaison d'adjectif**.\n• *kaufen* -> gekauft- (acheté)\n• *schreiben* -> geschrieben- (écrit)\n\n### Sens\nLe nom subit l'action ou l'action est achevée.",
      examples: [
        { de: "Das **gestohlene** Fahrrad wurde gefunden.", fr: "Le vélo volé (qui a été volé) a été retrouvé." },
        { de: "Die **neu eröffnete** Bibliothek ist toll.", fr: "La bibliothèque nouvellement ouverte est superbe." }
      ]
    },
    {
      id: "b2-5-4",
      title: "5.4 L'attribut étendu : Le « Sandwich » B2",
      content: "C'est la structure reine du B2. On insère tous les compléments entre l'article et le participe décliné.\n\n### Structure de la construction\n**[Article] + {Adverbe / Lieu / Temps / Objet} + [Participe décliné] + [NOM]**\n\n### Exemple étape par étape :\n1. La base : *Die Frau* (La femme).\n2. L'action : *Die **arbeitende** Frau* (La femme travaillant).\n3. L'extension : Die [seit zehn Jahren in dieser Firma] **arbeitende** Frau.\n\n**Règle d'or** : Le participe se place TOUJOURS juste avant le nom et prend la terminaison de l'adjectif standard.",
      examples: [
        { de: "Das [von der Regierung neu verabschiedete] Gesetz.", fr: "La loi nouvellement adoptée par le gouvernement.", note: "Sandwich : Article (Das) -> Détails -> Participe (verabschiedete) -> Nom (Gesetz)." },
        { de: "Die [heute Morgen gelieferten] Pakete.", fr: "Les colis livrés ce matin." }
      ]
    },
    {
      id: "b2-5-5",
      title: "5.5 Le Gérondif : 'zu' + Partizip I",
      content: "Cette structure particulière exprime une **possibilité** ou une **obligation passive** (équivalent de *müssen/können + Passif*).\n\n### Structure\n**zu + Partizip I + terminaison d'adjectif**.\n\n### Sens\n• *Das zu lösende Problem* = Le problème qui doit être résolu / qui peut être résolu.",
      examples: [
        { de: "Die **zu erledigenden** Aufgaben.", fr: "Les tâches à accomplir (qui doivent être accomplies).", note: "Très courant dans le monde du travail." },
        { de: "Ein schwer **zu verstehender** Text.", fr: "Un texte difficile à comprendre." }
      ]
    },
    {
      id: "b2-5-6",
      title: "5.6 Récapitulatif et terminaisons",
      content: "Le participe fonctionne exactement comme un **adjectif**. Vous devez donc appliquer les règles de déclinaison de l'adjectif (Faible, Mixte ou Forte) vues en A2/B1.\n\n| Type | Sens | Exemple |\n|---|---|---|\n| **Partizip I** | Actif / Présent | der **lesende** Student |\n| **Partizip II** | Passif / Passé | das **gelesene** Buch |\n| **zu + Part. I** | Obligation / Poss. | das **zu lesende** Buch |",
      examples: [
        { de: "Ich sehe den **schlafenden** Hund.", fr: "Je vois le chien qui dort.", note: "Accusatif masculin : terminaison -en." }
      ]
    }
  ]
};
