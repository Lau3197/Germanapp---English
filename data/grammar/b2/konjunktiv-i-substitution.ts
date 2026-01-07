
import { GrammarSection } from '../../../types';

// Nous exportons ici uniquement le TOPIC pour pouvoir l'intégrer dans une section plus large
export const konjunktivISubstitutionTopic = {
  id: "b2-ki-substitution",
  title: "Le Piège : La Règle de Substitution (Ersatzregel)",
  content: "C'est la règle de survie du discours indirect. L'allemand exige que l'on voie/entende la différence entre un fait et une parole rapportée.\n\n### I. Le Problème : L'identité des formes\nSi vous dites : *Ich gehe nach Hause*.\n• À l'indicatif (fait) : ich gehe.\n• Au Konjunktiv I (rapporté) : ich gehe.\nL'auditeur ne peut pas deviner que vous rapportez les paroles de quelqu'un. La neutralité est perdue.\n\n### II. La Règle d'Or : Si KI = Indicatif -> Substitution\nOn ne peut pas utiliser une forme ambiguë. On déclenche alors un système de secours en escalier :\n\n**Étape 1 : Le KI est-il distinct ?**\n• *Exemple :* Er sagt, er **habe** Zeit. (Distinct de 'er hat').\n• **Action :** On utilise le KI. Pas de substitution nécessaire.\n\n**Étape 2 : Le KI est identique ? On passe au Konjunktiv II (Forme simple)**\n• *Exemple :* Sie sagen, sie haben Zeit. (Identique à l'indicatif).\n• **Action :** On utilise le KII simple : Sie sagen, sie **hätten** Zeit.\n\n**Étape 3 : Le KII simple est identique au Prétérit ? On passe à 'würde'**\nPour les verbes réguliers, le KII simple (machte) ressemble au passé (machte). Pour éviter de croire qu'on parle du passé, on utilise 'würde'.\n• *Exemple :* Er sagt, sie lernen. (KI=Ind). Substitution en KII -> lernten (KII=Prét).\n• **Action :** On utilise 'würde' : Er sagt, sie **würden lernen**.\n\n### III. Tableau de décision rapide\n\n| Personne | Forme KI | Forme Indicatif | Verdict | Forme de secours |\n|---|---|---|---|---|\n| ich | mache | mache | **Identique** | ich **würde machen** |\n| du | machest | machst | Distinct | du machest |\n| er/sie/es | **mache** | macht | **DISTINCT** | **er mache** |\n| wir | machen | machen | **Identique** | wir **würden machen** |\n| ihr | machet | macht | Distinct | ihr machet |\n| sie | machen | machen | **Identique** | sie **würden machen** |",
  examples: [
    { de: "Er sagt, er **habe** keine Lust.", fr: "Il dit qu'il n'a pas envie.", note: "3ème pers. du singulier : le KI est presque toujours distinct, c'est la forme 'reine'." },
    { de: "Sie sagen, sie **hätten** keine Zeit.", fr: "Ils disent qu'ils n'ont pas le temps.", note: "Substitution par le KII simple car 'haben' (KI) est identique à l'indicatif." },
    { de: "Der Lehrer meint, wir **würden** zu viel **lachen**.", fr: "Le professeur estime que nous rions trop.", note: "Substitution par 'würde' car 'lachten' (KII) ressemble trop au prétérit (passé)." }
  ]
};
