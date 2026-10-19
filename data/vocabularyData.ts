
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
import { getItalianVocabularyTranslation } from './italianVocabularyTranslations.ts';

type RawThemeContent = {
  words: GermanWord[];
  phrases: Phrase[];
};

const withTranslations = <T extends { german: string; english?: string; french?: string; italian?: string }>(
  item: T,
  themeId: string
): T & { english: string; french: string; italian?: string } => {
  const translation = item.english || item.french || '';

  return {
    ...item,
    english: item.english || translation,
    french: item.french || translation,
    italian: item.italian || getItalianVocabularyTranslation(themeId, item.german, translation)
  };
};

const normalizeThemeContent = (themeId: string, content: RawThemeContent): ThemeContent => ({
  words: content.words.map(item => withTranslations(item, themeId)),
  phrases: content.phrases.map(item => withTranslations(item, themeId))
});

export const VOCABULARY_DATA: Record<string, ThemeContent> = {
  'presentation': normalizeThemeContent('presentation', presentationContent),
  'renseignements': normalizeThemeContent('renseignements', renseignementsContent),
  'decrire-personnes': normalizeThemeContent('decrire-personnes', decrirePersonnesContent),
  'decrire-objets': normalizeThemeContent('decrire-objets', decrireObjetsContent),
  'emotions': normalizeThemeContent('emotions', emotionsContent),
  'corps-humain': normalizeThemeContent('corps-humain', corpsHumainContent),
  'sante': normalizeThemeContent('sante', santeContent),
  'vie-quotidienne': normalizeThemeContent('vie-quotidienne', vieQuotidienneContent),
  'maison': normalizeThemeContent('maison', maisonContent),
  'travaux-menagers': normalizeThemeContent('travaux-menagers', travauxMenagersContent),
  'nourriture-boisson': normalizeThemeContent('nourriture-boisson', nourritureBoissonContent),
  'loisirs': normalizeThemeContent('loisirs', loisirsContent),
  'voyages': normalizeThemeContent('voyages', voyagesContent),
  'ville': normalizeThemeContent('ville', villeContent),
  'travail': normalizeThemeContent('travail', travailContent),
  'nature': normalizeThemeContent('nature', natureContent),
  'education': normalizeThemeContent('education', educationContent),
  'medias': normalizeThemeContent('medias', mediasContent),
  'temps': normalizeThemeContent('temps', tempsContent),
  'societe': normalizeThemeContent('societe', societeContent)
};
