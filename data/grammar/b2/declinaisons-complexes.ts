
import { GrammarSection } from '../../../types';

export const declinaisonsComplexesB2: GrammarSection = {
  title: "8. Déclinaisons dans des contextes complexes",
  topics: [
    {
      id: "b2-8-1",
      title: "8.1 La N-Deklination",
      content: "La **N-Deklination** est une particularité du système nominal allemand où certains noms masculins changent de terminaison à presque tous les cas.",
      examples: [
        { de: "der Student (Nom.) -> den Studenten (Acc.)", fr: "L'étudiant" }
      ]
    },
    {
      id: "b2-8-1-1",
      title: "8.1.1 Le concept",
      content: "Aussi appelée 'Masculins faibles', cette règle stipule que le nom prend une terminaison **-(e)n** à l'Accusatif, au Datif et au Génitif singulier. Au Nominatif, le mot reste sous sa forme de base.\n\n| Cas | Forme |\n|---|---|\n| Nominatif | der Kunde |\n| Accusatif | den Kunde**n** |\n| Datif | dem Kunde**n** |\n| Génitif | des Kunde**n** |",
      examples: [
        { de: "Ich sehe den Kunden.", fr: "Je vois le client (Accusatif).", note: "Le nom 'Kunde' appartient à la N-Deklination." }
      ]
    },
    {
      id: "b2-8-1-2",
      title: "8.1.2 Les 4 Catégories de noms concernés",
      content: "Les noms de la N-Deklination sont presque tous **masculins**. Ils se répartissent en 4 groupes :\n\n1. **Êtres vivants en -e** : der Junge, der Kollege, der Löwe, der Hase.\n2. **Nationalités en -e** : der Franzose, der Russe, der Pole, der Chinese.\n3. **Suffixes latins/grecs** : -ant (Elefant), -ent (Student), -ist (Journalist), -at (Soldat), -oge (Biologe).\n4. **Exceptions sans -e** : der Mensch, der Herr, der Bär, der Nachbar, der Held.",
      examples: [
        { de: "Die Arbeit des Biologen.", fr: "Le travail du biologiste (Génitif)." }
      ]
    },
    {
      id: "b2-8-1-3",
      title: "8.1.3 Les Exceptions de l'Exception (Le groupe -ns)",
      content: "Un petit groupe de noms masculins suit la N-Deklination mais ajoute un **-s** supplémentaire au Génitif. On appelle cela la déclinaison mixte.\n\n### Liste des mots principaux :\n• **der Name** (des Namens)\n• **der Gedanke** (des Gedankens)\n• **der Buchstabe** (des Buchstabens)\n• **der Friede** (des Friedens)\n• **der Wille** (des Willens)",
      examples: [
        { de: "Im Namen des Gesetzes.", fr: "Au nom de la loi (Génitif en -ns)." }
      ]
    },
    {
      id: "b2-8-1-4",
      title: "8.1.4 Cas particuliers : 'der Herr' et 'das Herz'",
      content: "### der Herr\nC'est le seul mot dont la terminaison diffère entre le singulier et le pluriel au sein de la règle :\n• Singulier (Acc/Dat/Gen) : **Herrn**\n• Pluriel (Tous les cas) : **Herren**\n\n### das Herz\nC'est le seul nom **neutre** concerné. Il ne change pas à l'Accusatif, mais prend **-en** au Datif et **-ens** au Génitif.\n• *Datif :* dem Herzen\n• *Génitif :* des Herzens",
      examples: [
        { de: "Von ganzem Herzen.", fr: "De tout cœur (Datif)." }
      ]
    },
    {
      id: "b2-8-2",
      title: "8.2 Les Adjectifs Substantivés",
      content: "Un adjectif substantivé est un adjectif utilisé comme un nom. Il prend une majuscule mais **garde sa déclinaison d'adjectif**.",
      examples: [
        { de: "krank (adj.) -> der Kranke (nom)", fr: "malade -> le malade" }
      ]
    },
    {
      id: "b2-8-2-1",
      title: "8.2.1 Le Concept",
      content: "Puisque ces noms sont d'anciens adjectifs, leur terminaison dépendra de ce qui les précède (Article défini, indéfini ou absence d'article).\n\n• **der** Alte (le vieux)\n• **ein** Alte**r** (un vieux)\n• **die** Alte (la vieille)\n• **eine** Alte (une vieille)",
      examples: [
        { de: "Ein Reisender wartet am Gleis.", fr: "Un voyageur attend sur le quai.", note: "Déclinaison mixte comme 'ein guter'." }
      ]
    },
    {
      id: "b2-8-2-2",
      title: "8.2.2 Déclinaison pour les Personnes (Masculin / Féminin)",
      content: "C'est crucial pour désigner des catégories de personnes ou des nationalités.\n\n| Personne | Avec 'Der/Die' | Avec 'Ein/Eine' |\n|---|---|---|\n| Allemand | der Deutsche | ein Deutsche**r** |\n| Allemande | die Deutsche | eine Deutsche |\n| Employé | der Angestellte | ein Angestellte**r** |\n| Employée | die Angestellte | eine Angestellte |",
      examples: [
        { de: "Ich habe mit einer Deutschen gesprochen.", fr: "J'ai parlé avec une Allemande (Datif)." }
      ]
    },
    {
      id: "b2-8-2-3",
      title: "8.2.3 Les Concepts Abstraits (Neutre)",
      content: "On utilise souvent le neutre pour des concepts généraux, après *etwas, nichts, viel, alles*.\n\n• **alles Gute** (tout de bon / le meilleur)\n• **etwas Neues** (quelque chose de nouveau)\n• **nichts Besonderes** (rien de spécial)\n• **viel Interessantes** (beaucoup de choses intéressantes)",
      examples: [
        { de: "Gibt es etwas Neues?", fr: "Y a-t-il quelque chose de nouveau ?" }
      ]
    },
    {
      id: "b2-8-2-4",
      title: "8.2.4 Erreurs courantes des francophones",
      content: "### 1. Oublier la terminaison au Datif\nOn dit 'Ich helfe dem **Kranken**' (comme 'dem guten Mann').\n\n### 2. Utiliser 'von'\nEn français, on dit 'quelque chose **de** nouveau'. En allemand, on ne met **pas** de 'von'.\n• Faux : etwas von neu ❌\n• Juste : **etwas Neues** ✅",
      examples: [
        { de: "Alles Gute zum Geburtstag!", fr: "Bon anniversaire !", note: "C'est un adjectif substantivé neutre après 'alles'." }
      ]
    },
    {
      id: "b2-8-3",
      title: "8.3 Déclinaison après les pronoms indéfinis",
      content: "Certains pronoms indéfinis au pluriel forcent une déclinaison particulière.\n\n• **alle, beide** : Déclinaison faible (en **-en**). *Alle gut**en** Freunde.*\n• **viele, einige, manche, mehrere** : Déclinaison forte (en **-e**). *Viele gut**e** Freunde.*",
      examples: [
        { de: "Ich habe viele neue Freunde.", fr: "J'ai beaucoup de nouveaux amis.", note: "Forte car 'viele' n'est pas un déterminant total." }
      ]
    }
  ]
};
