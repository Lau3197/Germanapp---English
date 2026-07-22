type Translatable = {
  english?: string;
  french?: string;
};

export const getTranslation = (item: Translatable): string => {
  return item.english || item.french || '';
};
