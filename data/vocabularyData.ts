
import { ThemeContent } from '../types.ts';
import { presentationContent } from './vocabulary/presentation.ts';
import { renseignementsContent } from './vocabulary/renseignements.ts';
import { decrirePersonnesContent } from './vocabulary/decrire-personnes/index.ts';
import { decrireObjetsContent } from './vocabulary/decrire-objets/index.ts';
import { emotionsContent } from './vocabulary/emotions/index.ts';
import { corpsHumainContent } from './vocabulary/corps-humain/index.ts';
import { santeContent } from './vocabulary/sante/index.ts';
import { vieQuotidienneContent } from './vocabulary/vie-quotidienne/index.ts';
import { maisonContent } from './vocabulary/maison/index.ts';
import { travauxMenagersContent } from './vocabulary/travaux-menagers/index.ts';
import { nourritureBoissonContent } from './vocabulary/nourriture-boisson/index.ts';
import { loisirsContent } from './vocabulary/loisirs.ts';
import { voyagesContent } from './vocabulary/voyages.ts';
import { villeContent } from './vocabulary/ville.ts';
import { travailContent } from './vocabulary/travail.ts';
import { natureContent } from './vocabulary/nature.ts';
import { educationContent } from './vocabulary/education.ts';
import { mediasContent } from './vocabulary/medias.ts';
import { tempsContent } from './vocabulary/temps.ts';
import { societeContent } from './vocabulary/societe.ts';

export const VOCABULARY_DATA: Record<string, ThemeContent> = {
  'presentation': presentationContent,
  'renseignements': renseignementsContent,
  'decrire-personnes': decrirePersonnesContent,
  'decrire-objets': decrireObjetsContent,
  'emotions': emotionsContent,
  'corps-humain': corpsHumainContent,
  'sante': santeContent,
  'vie-quotidienne': vieQuotidienneContent,
  'maison': maisonContent,
  'travaux-menagers': travauxMenagersContent,
  'nourriture-boisson': nourritureBoissonContent,
  'loisirs': loisirsContent,
  'voyages': voyagesContent,
  'ville': villeContent,
  'travail': travailContent,
  'nature': natureContent,
  'education': educationContent,
  'medias': mediasContent,
  'temps': tempsContent,
  'societe': societeContent
};
