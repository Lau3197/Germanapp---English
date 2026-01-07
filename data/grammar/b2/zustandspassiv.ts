
import { GrammarSection } from '../../../types';

export const zustandspassivB2: GrammarSection = {
  title: "2. Le Passif d'état (Zustandspassiv)",
  topics: [
    {
      id: "b2-s1-t2-detailed",
      title: "Maîtriser le Zustandspassiv",
      content: "Le passif d'état décrit un **résultat** ou un **état final**. Contrairement au passif d'action, on ne s'intéresse plus à 'qui fait quoi' ni à 'comment ça se passe', mais au constat une fois l'action terminée.\n\n### I. La Logique : Action vs État\nC'est la distinction fondamentale en allemand que le français occulte souvent.\n\n| Type de Passif | Auxiliaire | Focus | Exemple |\n|---|---|---|---|\n| **Vorgangspassiv** | **werden** | Le processus (l'action en cours) | Die Tür **wird** geschlossen. (On ferme la porte) |\n| **Zustandspassiv** | **sein** | Le résultat (l'état après l'action) | Die Tür **ist** geschlossen. (La porte est fermée) |\n\n### II. Formation et Temps\nLa structure est simple : **sein** (conjugué) + **Partizip II** (à la fin).\n\n| Temps | Structure | Exemple |\n|---|---|---|\n| **Präsens** | ist + P.II | Das Geschäft **ist** geöffnet. (Le magasin est ouvert) |\n| **Präteritum** | war + P.II | Das Geschäft **war** geöffnet. (Le magasin était ouvert) |\n| **Futur I** | wird... sein + P.II | Das Geschäft **wird** geöffnet **sein**. (Sera ouvert) |\n| **Konjunktiv II** | wäre + P.II | Wenn es geöffnet **wäre**... (S'il était ouvert...) |\n\n*Note : Le Parfait (ist gewesen) existe mais est extrêmement rare, on lui préfère presque toujours le Prétérit (war).* \n\n### III. Les Verbes Compatibles\nOn ne peut pas mettre tous les verbes au passif d'état. Il faut que l'action soit **transitive** (avec un COD) et qu'elle laisse une **trace durable**.\n• **OUI** : schließen (fermer), reparieren (réparer), kochen (cuisiner), schreiben (écrire).\n• **NON** : helfen (aider), schlagen (frapper - pas d'état final fixe), tanzen (danser).\n\n### IV. Focus : Les erreurs classiques des francophones\n\n**1. La confusion avec le Parfait Actif**\nC'est le piège n°1. Les verbes de mouvement utilisent 'sein' au passé composé actif. \n• *Actif* : **Ich bin gegangen** (Je suis allé - c'est moi qui bouge).\n• *Passif d'état* : **Die Tür ist geschlossen** (La porte est fermée - elle ne bouge pas, elle subit).\n**Astuce** : Si le sujet est inanimé, c'est presque toujours un passif d'état.\n\n**2. L'oubli de la nuance 'en cours'**\nEn français, 'La lettre est écrite' peut vouloir dire 'On l'écrit maintenant'. En allemand, **ist** signifie que c'est **fini**.\n• Si l'action est en train de se faire, utilisez **wird** !\n\n**3. Vouloir ajouter un agent (von...)**\nPuisque le passif d'état décrit un résultat, l'auteur de l'action n'est plus pertinent. On ne dit presque jamais 'Das Fenster ist von mir geöffnet'. On dira 'Das Fenster ist geöffnet' ou 'Ich habe das Fenster geöffnet'.",
      examples: [
        { de: "Das Essen **ist** schon **gekocht**.", fr: "Le repas est déjà cuit.", note: "C'est prêt, on peut manger. État final." },
        { de: "Der Computer **war** gestern **repariert**.", fr: "L'ordinateur était réparé hier.", note: "On décrit l'état de l'objet à un moment du passé." },
        { de: "Die Briefe **sind** bereits **geschrieben**.", fr: "Les lettres sont déjà écrites.", note: "L'action d'écrire est terminée." }
      ]
    }
  ]
};
