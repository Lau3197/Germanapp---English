
import { GrammarSection } from '../../../types';

export const declinaisonsComplexesB2: GrammarSection = {
  title: "8. Déclinaisons dans des contextes complexes",
  topics: [
    {
      id: "b2-8-1-1",
      title: "8.1.1 La N-Deklination : Le Concept",
      content: "La **N-Deklination** concerne un groupe spécifique de noms **exclusivement masculins** (à l'exception de *das Herz*). \n\n**La Règle d'or** : Ces noms prennent une terminaison **-(e)n** à TOUS les cas (Accusatif, Datif, Génitif), sauf au **Nominatif singulier**.\n\n### Tableau comparatif : Nom standard vs N-Deklination\n\n| Cas | Nom Standard (der Tisch) | N-Deklination (der Kunde) |\n|---|---|---|\n| **Nominatif** | der Tisch | der Kunde |\n| **Accusatif** | den Tisch | den Kunde**n** |\n| **Datif** | dem Tisch | dem Kunde**n** |\n| **Génitif** | des Tische**s** | des Kunde**n** |",
      examples: [
        { de: "Ich rufe den **Kollegen** an.", fr: "J'appelle le collègue.", note: "Accusatif : le nom prend -n." },
        { de: "Ich helfe dem **Polizisten**.", fr: "J'aide le policier.", note: "Datif : le nom prend -en." }
      ]
    },
    {
      id: "b2-8-1-2",
      title: "8.1.2 Les 4 Catégories de noms concernés",
      content: "Pour ne pas les oublier, apprenez-les par groupes logiques :\n\n### 1. Êtres vivants (humains/animaux) se terminant par -e\nC'est le groupe le plus large.\n• **Humains** : *der Junge, der Kollege, der Kunde, der Experte, der Zeuge* (témoin), *der Erbe* (héritier).\n• **Animaux** : *der Löwe, der Hase, der Affe, der Bär* (finit par une consonne mais appartient historiquement ici).\n\n### 2. Nationalités se terminant par -e\n• *der Franzose, der Russe, der Pole, der Chinese, der Pole, der Türke*.\n\n### 3. Mots d'origine grecque ou latine (Suffixes)\nSouvent des professions ou des titres.\n• **-ant** : *der Elefant, der Praktikant, der Diamant*.\n• **-ent** : *der Student, der Patient, der Präsident*.\n• **-ist** : *der Polizist, der Tourist, der Journalist, der Optimist*.\n• **-at** : *der Diplomat, der Automat, der Soldat*.\n• **-oge / -nom / -soph** : *der Biologe, der Astronom, der Philosoph*.\n\n### 4. Exceptions sans terminaison en -e\nCes mots ne finissent pas par -e mais suivent la règle :\n• *der Mensch, der Held (héros), der Prinz, der Nachbar (voisin), der Bauer (paysan)*.",
      examples: [
        { de: "Die Hilfe des **Soldaten**.", fr: "L'aide du soldat.", note: "Génitif : pas de -s, mais -en." }
      ]
    },
    {
      id: "b2-8-1-3",
      title: "8.1.3 Les Exceptions de l'Exception (Le groupe -ns)",
      content: "Certains noms sont encore plus complexes : ils suivent la N-Deklination (Acc/Dat en **-n**) MAIS ils ajoutent un **-s** supplémentaire au Génitif. On appelle cela la déclinaison mixte du nom.\n\n### Liste des mots en -ns :\n• *der Name, der Gedanke* (la pensée), *der Buchstabe* (la lettre), *der Wille* (la volonté), *der Glaube* (la foi), *der Friede* (la paix).\n\n| Cas | Déclinaison en -ns |\n|---|---|\n| **Nominatif** | der Name |\n| **Accusatif** | den Name**n** |\n| **Datif** | dem Name**n** |\n| **Génitif** | des Name**ns** |",
      examples: [
        { de: "Ich habe meinen **Namen** vergessen.", fr: "J'ai oublié mon nom.", note: "Accusatif en -n." },
        { de: "Die Macht des **Glaubens**.", fr: "Le pouvoir de la foi.", note: "Génitif exceptionnel en -ns." }
      ]
    },
    {
      id: "b2-8-1-4",
      title: "8.1.4 Cas particuliers : 'der Herr' et 'das Herz'",
      content: "### Le cas 'der Herr'\nIl est unique car sa terminaison change entre le singulier et le pluriel :\n• **Singulier** (Acc/Dat/Gen) : den/dem/des **Herrn** (juste un **-n**).\n• **Pluriel** (Tous les cas) : die **Herren** (un **-en**).\n\n### Le cas 'das Herz'\nC'est le seul nom **neutre** qui suit partiellement cette règle :\n• **Nominatif / Accusatif** : das Herz (pas de changement).\n• **Datif** : dem Herz**en**.\n• **Génitif** : des Herz**ens**.",
      examples: [
        { de: "Sehr geehrte **Herren**,", fr: "Messieurs (formule d'appel),", note: "Pluriel." },
        { de: "Das liegt mir am **Herzen**.", fr: "Cela me tient à cœur.", note: "Datif de das Herz." }
      ]
    },
    {
      id: "b2-8-2-1",
      title: "8.2.1 Les Adjectifs Substantivés : Le Concept",
      content: "Un **adjectif substantivé** est un adjectif qui est utilisé comme un nom (il prend donc une **majuscule**). \n\nCependant, contrairement aux noms classiques, il **garde sa déclinaison d'adjectif** d'origine. Sa terminaison dépendra donc :\n1. Du **genre** (Homme, Femme, ou Concept neutre).\n2. De l'**article** qui le précède (Défini, Indéfini ou Sans article).\n3. Du **cas** (Suject, COD, etc.).",
      examples: [
        { de: "Der **Kranke** braucht Hilfe.", fr: "Le malade a besoin d'aide.", note: "Substantivé masculin, après article défini (Déclinaison faible)." },
        { de: "Ein **Kranker** braucht Hilfe.", fr: "Un malade a besoin d'aide.", note: "Substantivé masculin, après article indéfini (Déclinaison mixte)." }
      ]
    },
    {
      id: "b2-8-2-2",
      title: "8.2.2 Déclinaison pour les Personnes (Masculin / Féminin)",
      content: "C'est ici que les erreurs sont les plus fréquentes. Voici comment varie le mot 'Allemand' (*deutsch*) selon le contexte :\n\n### Tableau : L'Allemand / Un Allemand\n\n| Cas | L'Allemand (Défini) | Un Allemand (Indéfini) | Des Allemands (Pluriel sans art.) |\n|---|---|---|---|\n| **Nominatif** | der Deutsche | ein Deutsche**r** | Deutsche |\n| **Accusatif** | den Deutsche**n** | einen Deutsche**n** | Deutsche |\n| **Datif** | dem Deutsche**n** | einem Deutsche**n** | Deutsche**n** |\n| **Génitif** | des Deutsche**n** | eines Deutsche**n** | Deutsche**r** |\n\n**Note** : Au féminin, c'est plus simple car les terminaisons sont souvent -e ou -en (*die Deutsche* / *eine Deutsche*).",
      examples: [
        { de: "Ich habe mit einem **Deutschen** gesprochen.", fr: "J'ai parlé avec un Allemand.", note: "Datif masculin indéfini : terminaison -en." },
        { de: "Viele **Reisende** warten am Bahnhof.", fr: "Beaucoup de voyageurs attendent à la gare.", note: "Pluriel sans article (fort) : terminaison -e." }
      ]
    },
    {
      id: "b2-8-2-3",
      title: "8.2.3 Les Concepts Abstraits (Neutre)",
      content: "On transforme souvent un adjectif en concept abstrait neutre. On les trouve après des mots-outils comme **etwas**, **nichts**, **viel**, **wenig** ou **alles**.\n\n### Règle des terminaisons neutres :\n• **Après 'alles'** : La déclinaison est **faible (-e)**.\n• **Après 'etwas, nichts, viel, wenig'** : La déclinaison est **forte (-es)**.\n\n| Structure | Exemple | Traduction |\n|---|---|---|\n| **alles + -e** | alles Gut**e** | tout ce qui est bon / le meilleur |\n| **etwas + -es** | etwas Neu**es** | quelque chose de nouveau |\n| **nichts + -es** | nichts Besonder**es** | rien de spécial |\n| **viel + -es** | viel Interessant**es** | beaucoup de choses intéressantes |",
      examples: [
        { de: "Ich wünsche dir **alles Gute**!", fr: "Je te souhaite tout de bon !", note: "Structure fixe indispensable au B2." },
        { de: "Es gibt **nichts Neues**.", fr: "Il n'y a rien de neuf.", note: "Nichts + Adjectif substantivé neutre." }
      ]
    },
    {
      id: "b2-8-2-4",
      title: "8.2.4 Erreurs courantes des francophones",
      content: "### 1. L'oubli de la déclinaison\nEn français, 'le malade' ou 'un malade' ne change pas de terminaison. En allemand, on a tendance à dire *'den Deutsche'* au lieu de **'den Deutschen'**. \n**Rappel** : Pensez à l'adjectif ! On dit 'den guten Mann', donc on dit 'den Deutschen'.\n\n### 2. La confusion Masculin / Féminin au Nominatif indéfini\n• Un Allemand = ein Deutsche**r** (comme 'un bon' = ein guter).\n• Une Allemande = eine Deutsche (comme 'une bonne' = eine gute).\n\n### 3. 'Quelque chose de...' \nEn français, on utilise 'de'. En allemand, **JAMAIS** de 'von'. L'adjectif suit directement.\n• *Faux* : etwas von neu ❌\n• *Juste* : **etwas Neues** ✅\n\n### 4. La Majuscule\nOn l'oublie souvent car l'adjectif d'origine n'en a pas. Dès qu'il y a un article devant et pas de nom après, mettez une majuscule !\n• *Ex:* Ich helfe dem **Alten** (au vieil homme).",
      examples: [
        { de: "Sie ist eine **Verwandte** von mir.", fr: "C'est une parente à moi.", note: "Substantivé féminin : eine Verwandte." },
        { de: "Er ist ein **Verwandter** von mir.", fr: "C'est un parent à moi.", note: "Substantivé masculin : ein Verwandter." }
      ]
    },
    {
      id: "b2-8-3",
      title: "8.3 Déclinaison après les pronoms indéfinis",
      content: "C'est un point de détail qui fait la différence au B2. La déclinaison de l'adjectif change selon le mot qui le précède.\n\n### I. Déclinaison FAIBLE (comme après 'der')\nAprès : **alle, beide, diese, manche, jede**.\n• *Ex:* Alle **guten** Freunde.\n\n### II. Déclinaison FORTE (comme sans article)\nAprès : **einige, viele, wenige, mehrere**.\n• *Ex:* Viele **gute** Freunde (L'adjectif prend le -e du pluriel car 'viele' n'est pas considéré comme un article déterminant au pluriel).",
      examples: [
        { de: "Mit **beiden** groß**en** Koffern.", fr: "Avec les deux grandes valises.", note: "beide = article défini -> faible." },
        { de: "Ich habe **viele** interessant**e** Bücher.", fr: "J'ai beaucoup de livres intéressants.", note: "viele = adjectif -> déclinaison forte pour le suivant." }
      ]
    }
  ]
};
