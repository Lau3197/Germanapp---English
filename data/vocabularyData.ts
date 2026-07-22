
import { GermanWord, Phrase, ThemeContent } from '../types.ts';
import { presentationContent } from './vocabulary/presentation.ts';
import { renseignementsContent } from './vocabulary/renseignements.ts';
import { decrirePersonnesContent } from './vocabulary/decrire-personnes.ts';
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

type RawThemeContent = {
  words: GermanWord[];
  phrases: Phrase[];
};

const withTranslations = <T extends { english?: string; french?: string }>(
  item: T
): T & { english: string; french: string } => {
  const translation = item.english || item.french || '';

  return {
    ...item,
    english: item.english || translation,
    french: item.french || translation
  };
};

const normalizeThemeContent = (content: RawThemeContent): ThemeContent => ({
  words: content.words.map(withTranslations),
  phrases: content.phrases.map(withTranslations)
});

export const VOCABULARY_DATA: Record<string, ThemeContent> = {
  'presentation': normalizeThemeContent(presentationContent),
  'renseignements': normalizeThemeContent(renseignementsContent),
  'decrire-personnes': normalizeThemeContent(decrirePersonnesContent),
  'decrire-objets': normalizeThemeContent(decrireObjetsContent),
  'emotions': normalizeThemeContent(emotionsContent),
  'corps-humain': normalizeThemeContent(corpsHumainContent),
  'sante': normalizeThemeContent(santeContent),
  'vie-quotidienne': normalizeThemeContent(vieQuotidienneContent),
  'maison': normalizeThemeContent(maisonContent),
  'travaux-menagers': normalizeThemeContent(travauxMenagersContent),
  'nourriture-boisson': normalizeThemeContent(nourritureBoissonContent),
  'loisirs': normalizeThemeContent(loisirsContent),
  'voyages': normalizeThemeContent(voyagesContent),
  'ville': normalizeThemeContent(villeContent),
  'travail': normalizeThemeContent(travailContent),
  'nature': normalizeThemeContent(natureContent),
  'education': normalizeThemeContent(educationContent),
  'medias': normalizeThemeContent(mediasContent),
  'temps': normalizeThemeContent(tempsContent),
  'societe': normalizeThemeContent(societeContent)
};
