
import { GrammarSection } from '../../../types';

export const konjunktivIPresentB2: GrammarSection = {
  title: "Konjunktiv I : Présent et Formation",
  topics: [
    {
      id: "b2-ki-1",
      title: "La Formation du Présent",
      content: "Le Konjunktiv I est le mode du **discours indirect**. Il permet de rapporter des paroles sans les valider.\n\n### Règle de conjugaison\nOn prend le **radical de l'infinitif** et on ajoute des terminaisons spécifiques. Contrairement à l'indicatif, il n'y a **jamais de changement de voyelle** (pas de Umlaut pour *fahren* ou *geben*).\n\n| Personne | Terminaison | Exemple (haben) | Exemple (fahren) |\n|---|---|---|---|\n| ich | **-e** | ich habe | ich fahre |\n| du | **-est** | du habest | du fahrest |\n| er/sie/es | **-e** | **er habe** | **er fahre** |\n| wir | **-en** | wir haben | wir fahren |\n| ihr | **-et** | ihr habet | ihr fahret |\n| sie/Sie | **-en** | sie haben | sie fahren |\n\n### L'exception unique : SEIN\nC'est le seul verbe qui est différent à toutes les personnes. Il est indispensable car il est utilisé comme auxiliaire pour le passé.\n• ich **sei**, du **sei(e)st**, er **sei**, wir **seien**, ihr **seiet**, sie **seien**.",
      examples: [
        { de: "Er sagt, er **habe** keine Zeit.", fr: "Il dit qu'il n'a pas le temps.", note: "3ème personne du singulier : forme la plus courante." },
        { de: "Der Arzt meint, ich **sei** wieder gesund.", fr: "Le médecin estime que je suis à nouveau en bonne santé." }
      ]
    }
  ]
};
