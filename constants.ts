
import { Theme } from './types';

export const THEMES: Theme[] = [
  {
    id: 'presentation',
    name: 'Introducing Yourself',
    icon: '👋',
    description: 'Greetings, politeness formulas, self-introduction and congratulations.',
    subThemes: ['Salutations', 'Politesse', 'Présentation', 'Identité']
  },
  {
    id: 'renseignements',
    name: 'Personal Information',
    icon: '👤',
    description: 'Identity, family status, address and age.',
    subThemes: ['Famille & Amis', 'Situation Civile', 'Adresse & Contact']
  },
  {
    id: 'decrire-personnes',
    name: 'Describing People',
    icon: '🎭',
    description: 'Physical appearance, character and behavior.',
    subThemes: ['Aspect physique', 'Caractère', 'Comportement']
  },
  {
    id: 'decrire-objets',
    name: 'Describing Objects',
    icon: '📦',
    description: 'Materials, shapes, colors, tools and technology.',
    subThemes: ['Description générale', 'Matières & Textures', 'Couleurs & Design', 'Formes & État', 'Technologie']
  },
  {
    id: 'emotions',
    name: 'Emotions',
    icon: '😊',
    description: 'Joy, sadness, fury, fear and feelings.',
    subThemes: ['Joie & Bonheur', 'Tristesse', 'Colère', 'Peur & Inquiétude', 'Surprise', 'Goûts & Préférences', 'Autres']
  },
  {
    id: 'corps-humain',
    name: 'The Human Body',
    icon: '🦴',
    description: 'Anatomy, senses, postures and gestures.',
    subThemes: ['Anatomie', 'Tête & Visage', 'Les 5 sens', 'Actions & Gestes']
  },
  {
    id: 'sante',
    name: 'Health',
    icon: '🏥',
    description: 'Diseases, care, medications and well-being.',
    subThemes: ['Maladies', 'Soins & Médicaments', 'Dentiste']
  },
  {
    id: 'vie-quotidienne',
    name: 'Daily Life',
    icon: '🚿',
    description: 'Hygiene, sleep, personal care.',
    subThemes: ['Toilette', 'Sommeil', 'Beauté']
  },
  {
    id: 'maison',
    name: 'The House',
    icon: '🏠',
    description: 'Rooms, furniture, garden and accessories.',
    subThemes: ['Pièces', 'Meubles', 'Jardin']
  },
  {
    id: 'travaux-menagers',
    name: 'Housework',
    icon: '🧹',
    description: 'Appliances, utensils and cleaning.',
    subThemes: ['Appareils', 'Nettoyage', 'Vaisselle']
  },
  {
    id: 'nourriture-boisson',
    name: 'Food & Drinks',
    icon: '🍴',
    description: 'Food, meals, restaurants and cooking.',
    subThemes: ['Aliments', 'Boissons', 'Restaurant', 'Goût']
  },
  {
    id: 'loisirs',
    name: 'Hobbies & Sport',
    icon: '⚽',
    description: 'Hobbies, sports, music and cinema.',
    subThemes: ['Hobbies', 'Sport', 'Musique', 'Cinéma']
  },
  {
    id: 'voyages',
    name: 'Travel & Transport',
    icon: '✈️',
    description: 'Means of transport, hotel and vacations.',
    subThemes: ['Transports', 'Hôtel', 'Vacances']
  },
  {
    id: 'ville',
    name: 'In the City',
    icon: '🏙️',
    description: 'Shops, buildings and public services.',
    subThemes: ['Magasins', 'Bâtiments', 'Services']
  },
  {
    id: 'travail',
    name: 'Work & Career',
    icon: '💼',
    description: 'Professions, office, job search.',
    subThemes: ['Métiers', 'Candidature', 'Bureau']
  },
  {
    id: 'nature',
    name: 'Nature & Animals',
    icon: '🌿',
    description: 'Environment, climate and animal world.',
    subThemes: ['Faune', 'Flore', 'Climat']
  },
  {
    id: 'education',
    name: 'Education & Studies',
    icon: '🎓',
    description: 'School, university and languages.',
    subThemes: ['École', 'Université', 'Langues']
  },
  {
    id: 'medias',
    name: 'Media & Communication',
    icon: '📱',
    description: 'Internet, press and social media.',
    subThemes: ['Internet', 'Presse', 'Téléphone']
  },
  {
    id: 'temps',
    name: 'Time',
    icon: '⏰',
    description: 'Time, calendar, seasons and duration.',
    subThemes: ['Heure', 'Calendrier', 'Saisons']
  },
  {
    id: 'societe',
    name: 'Society & Politics',
    icon: '🌍',
    description: 'Law, economy and news.',
    subThemes: ['Politique', 'Économie', 'Droit']
  }
];
