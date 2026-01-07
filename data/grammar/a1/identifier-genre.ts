
import { GrammarSection } from '../../../types';

export const identifierGenre: GrammarSection = {
  title: "1.5 Identifier le genre (Der, Die, Das)",
  topics: [
    {
      id: "a1-5-1",
      title: "La méthode infaillible par la terminaison",
      content: "Si vous ne devez retenir qu'une chose, c'est que la **fin du mot** est l'indice le plus fiable en allemand. Environ 80% des mots se devinent grâce à leur suffixe.\n\n### I. Féminin (DIE) - Fiable à 99%\nVoici les terminaisons qui forcent presque toujours le genre féminin :\n• **-ung** : die Wohnung (appartement), die Übung (exercice), die Meinung (opinion).\n• **-heit** : die Freiheit (liberté), die Krankheit (maladie).\n• **-keit** : die Möglichkeit (possibilité), die Süßigkeit (friandise).\n• **-schaft** : die Freundschaft (amitié), die Mannschaft (équipe).\n• **-ion** : die Station, die Nation, die Produktion.\n• **-tät** : die Universität, die Realität, die Fakultät.\n• **-ur** : die Natur, die Kultur, die Tastatur (clavier).\n• **-ie** : die Energie, die Kopie, die Theorie.\n• **-ik** : die Musik, die Fabrik, die Politik.\n\n### II. Neutre (DAS) - Le genre des objets et concepts\n• **-um** : das Museum, das Zentrum, das Datum, das Studium.\n• **-ment** : das Dokument, das Instrument, das Experiment, das Medikament.\n• **-ma** : das Thema, das Klima, das Drama, das Koma.\n• **-chen / -lein** (Diminutifs) : das Mädchen (fille), das Brötchen (petit pain), das Häuslein (maisonnette).\n• **-o** : das Auto, das Radio, das Kino, das Foto.\n\n### III. Masculin (DER) - Les agents et processus\n• **-er** (pour les personnes agissantes ou outils) : der Lehrer (prof), der Fahrer (conducteur), der Computer, der Drucker (imprimante).\n• **-ismus** : der Optimismus, der Journalismus, der Terrorismus.\n• **-ant / -ent** : der Elefant, der Patient, der Präsident.\n• **-ig / -ling** : der Honig (miel), der König (roi), der Frühling (printemps), der Flüchtling (réfugié).",
      examples: [
        { de: "die Wohnung / die Übung / die Lösung", fr: "Appartement / Exercice / Solution", note: "Suffixe -ung = DIE. Toujours. Sans exception." },
        { de: "das Museum / das Zentrum / das Datum", fr: "Musée / Centre / Date", note: "Suffixe -um = DAS. Mots d'origine latine." },
        { de: "der Lehrer / der Computer / der Wecker", fr: "Professeur / Ordinateur / Réveil", note: "Suffixe -er = DER. Désigne l'agent qui fait l'action." }
      ]
    },
    {
      id: "a1-5-2",
      title: "Le genre par catégorie logique (Sémantique)",
      content: "Si la terminaison ne vous aide pas, regardez le **sens** du mot. De nombreux groupes de mots partagent le même article.\n\n### I. Toujours Masculin (DER)\n• **Le Temps** : Jours (der Montag), Mois (der Juli), Saisons (der Sommer).\n• **La Météo** : der Regen (pluie), der Wind (vent), der Schnee (neige).\n• **Les Boissons Alcoolisées** : der Wein, der Wodka, der Cognac (Exception : **das Bier**).\n• **Les Marques de Voitures** : der BMW, der VW, der Audi, der Tesla.\n• **Les Points Cardinaux** : der Norden, der Süden, der Osten, der Westen.\n\n### II. Toujours Féminin (DIE)\n• **Les Nombres** : die Eins, die Zwei, die Hundert, die Million.\n• **Les Arbres et Fleurs** : die Eiche (chêne), die Birke (bouleau), die Rose, die Tulpe.\n• **Les Fleuves Allemands** : die Donau, die Elbe, die Weser (Exceptions masculines : **der Rhein, der Main, der Neckar**).\n\n### III. Toujours Neutre (DAS)\n• **Les Couleurs** : das Rot, das Blau, das Grün.\n• **Les Langues** : das Deutsch, das Französisch, das Englisch.\n• **Les Métaux** : das Gold, das Silber, das Kupfer, das Eisen.\n• **Les Verbes à l'Infinitif** (utilisés comme noms) : das Essen (le manger), das Schlafen (le dormir), das Schwimmen (la natation).",
      examples: [
        { de: "der Montag / der Juli / der Herbst", fr: "Lundi / Juillet / Automne", note: "Presque tout ce qui touche au calendrier est masculin." },
        { de: "das Gold / das Silber / das Eisen", fr: "L'or / L'argent / Le fer", note: "Les matériaux bruts sont souvent neutres." },
        { de: "die Rose / die Tulpe / die Nelke", fr: "La rose / La tulpe / L'œillet", note: "Les fleurs sont féminines." }
      ]
    },
    {
      id: "a1-5-3",
      title: "Astuces de mémorisation et 'Pro-Tips'",
      content: "Apprendre le genre est le plus grand défi. Voici comment les polyglottes font :\n\n• **Apprendre par blocs** : Ne dites jamais 'Tisch'. Dites **'Dertisch'** comme s'il s'agissait d'un seul mot indissociable.\n• **Utiliser la couleur** : Notez vos mots masculins en bleu, féminins en rouge et neutres en vert ou jaune.\n• **La règle du pluriel** : Rappelez-vous qu'au pluriel, **tous les noms** prennent l'article **die**, quel que soit leur genre au singulier.\n• **Le genre grammatical l'emporte** : Même si un mot désigne un humain, c'est la grammaire qui gagne. **Das Mädchen** (la fille) est neutre à cause de son suffixe en **-chen**.\n• **La règle de l'alcool** : Si ça se boit et que c'est fort, c'est **der**. Sauf la bière qui est **das** (car on en boit beaucoup comme de l'eau !).",
      examples: [
        { de: "die Frau -> die Frauen", fr: "La femme -> Les femmes", note: "Au pluriel, c'est toujours DIE." },
        { de: "das Kind -> die Kinder", fr: "L'enfant -> Les enfants", note: "DAS devient DIE au pluriel." },
        { de: "der Mann -> die Männer", fr: "L'homme -> Les hommes", note: "DER devient DIE au pluriel." }
      ]
    }
  ]
};
