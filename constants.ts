
import { Theme } from './types';

export const THEMES: Theme[] = [
  {
    id: 'presentation',
    name: 'Se présenter',
    icon: '👋',
    description: 'Salutations, formules de politesse, se présenter et féliciter.',
    subThemes: ['Salutations', 'Politesse', 'Présentation', 'Identité']
  },
  {
    id: 'renseignements',
    name: 'Renseignements personnels',
    icon: '👤',
    description: 'Identité, situation de famille, adresse et âge.',
    subThemes: ['Famille & Amis', 'Situation Civile', 'Adresse & Contact']
  },
  {
    id: 'decrire-personnes',
    name: 'Décrire des personnes',
    icon: '🎭',
    description: 'Aspect physique, caractère et comportement.',
    subThemes: ['Aspect physique', 'Caractère', 'Comportement']
  },
  {
    id: 'decrire-objets',
    name: 'Décrire des objets',
    icon: '📦',
    description: 'Matières, formes, couleurs, outils et technologie.',
    subThemes: ['Description générale', 'Matières & Textures', 'Couleurs & Design', 'Formes & État', 'Technologie']
  },
  {
    id: 'emotions',
    name: 'Les émotions',
    icon: '😊',
    description: 'Joie, tristesse, fureur, peur et sentiments.',
    subThemes: ['Joie & Bonheur', 'Tristesse', 'Colère', 'Peur & Inquiétude', 'Surprise', 'Autres']
  },
  {
    id: 'corps-humain',
    name: 'Le corps humain',
    icon: '🦴',
    description: 'Anatomie, sens, postures et gestes.',
    subThemes: ['Anatomie', 'Tête & Visage', 'Les 5 sens', 'Actions & Gestes']
  },
  {
    id: 'sante',
    name: 'La santé',
    icon: '🏥',
    description: 'Maladies, soins, médicaments et bien-être.',
    subThemes: ['Maladies', 'Soins & Médicaments', 'Dentiste']
  },
  {
    id: 'vie-quotidienne',
    name: 'La vie quotidienne',
    icon: '🚿',
    description: 'Toilette, sommeil, soins personnels.',
    subThemes: ['Toilette', 'Sommeil', 'Beauté']
  },
  {
    id: 'maison',
    name: 'La maison',
    icon: '🏠',
    description: 'Pièces, meubles, jardin et accessoires.',
    subThemes: ['Pièces', 'Meubles', 'Jardin']
  },
  {
    id: 'travaux-menagers',
    name: 'Travaux ménagers',
    icon: '🧹',
    description: 'Appareils, ustensiles et nettoyage.',
    subThemes: ['Appareils', 'Nettoyage', 'Vaisselle']
  },
  {
    id: 'nourriture-boisson',
    name: 'Nourriture & Boissons',
    icon: '🍴',
    description: 'Aliments, repas, restaurants et cuisine.',
    subThemes: ['Aliments', 'Boissons', 'Restaurant', 'Goût']
  },
  {
    id: 'loisirs',
    name: 'Loisirs & Sport',
    icon: '⚽',
    description: 'Hobbies, sports, musique et cinéma.',
    subThemes: ['Hobbies', 'Sport', 'Musique', 'Cinéma']
  },
  {
    id: 'voyages',
    name: 'Voyages & Transport',
    icon: '✈️',
    description: 'Moyens de transport, hôtel et vacances.',
    subThemes: ['Transports', 'Hôtel', 'Vacances']
  },
  {
    id: 'ville',
    name: 'En Ville',
    icon: '🏙️',
    description: 'Commerces, bâtiments et services publics.',
    subThemes: ['Magasins', 'Bâtiments', 'Services']
  },
  {
    id: 'travail',
    name: 'Travail & Carrière',
    icon: '💼',
    description: 'Métiers, bureau, recherche d\'emploi.',
    subThemes: ['Métiers', 'Candidature', 'Bureau']
  },
  {
    id: 'nature',
    name: 'Nature & Animaux',
    icon: '🌿',
    description: 'Environnement, climat et monde animal.',
    subThemes: ['Faune', 'Flore', 'Climat']
  },
  {
    id: 'education',
    name: 'Éducation & Études',
    icon: '🎓',
    description: 'École, université et langues.',
    subThemes: ['École', 'Université', 'Langues']
  },
  {
    id: 'medias',
    name: 'Médias & Communication',
    icon: '📱',
    description: 'Internet, presse et réseaux sociaux.',
    subThemes: ['Internet', 'Presse', 'Téléphone']
  },
  {
    id: 'temps',
    name: 'Le Temps',
    icon: '⏰',
    description: 'Heure, calendrier, saisons et durée.',
    subThemes: ['Heure', 'Calendrier', 'Saisons']
  },
  {
    id: 'societe',
    name: 'Société & Politique',
    icon: '🌍',
    description: 'Droit, économie et actualités.',
    subThemes: ['Politique', 'Économie', 'Droit']
  }
];
