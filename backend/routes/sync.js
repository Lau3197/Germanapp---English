import express from 'express';
import User from '../models/User.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

// @route   GET /api/sync
// @desc    Récupérer les données de l'utilisateur
// @access  Private
router.get('/', protect, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);

    res.json({
      success: true,
      data: user.appData,
      lastSync: new Date().toISOString()
    });
  } catch (error) {
    console.error('Erreur récupération données:', error);
    res.status(500).json({
      success: false,
      message: 'Erreur serveur lors de la récupération des données'
    });
  }
});

// @route   POST /api/sync
// @desc    Sauvegarder les données de l'utilisateur (remplace tout)
// @access  Private
router.post('/', protect, async (req, res) => {
  try {
    const { favorites, annotations, stats } = req.body;

    const updateData = {};
    if (favorites !== undefined) updateData['appData.favorites'] = favorites;
    if (annotations !== undefined) updateData['appData.annotations'] = annotations;
    if (stats !== undefined) updateData['appData.stats'] = stats;

    const user = await User.findByIdAndUpdate(
      req.user.id,
      { $set: updateData },
      { new: true }
    );

    res.json({
      success: true,
      message: 'Données synchronisées avec succès',
      data: user.appData,
      syncedAt: new Date().toISOString()
    });
  } catch (error) {
    console.error('Erreur sauvegarde données:', error);
    res.status(500).json({
      success: false,
      message: 'Erreur serveur lors de la sauvegarde des données'
    });
  }
});

// @route   PUT /api/sync/merge
// @desc    Fusionner les données (intelligent merge)
// @access  Private
router.put('/merge', protect, async (req, res) => {
  try {
    const { favorites, annotations, stats } = req.body;
    const user = await User.findById(req.user.id);

    const currentData = user.appData;

    // Fusionner les favoris (éviter les doublons par id)
    if (favorites && Array.isArray(favorites)) {
      const existingIds = new Set(currentData.favorites.map(f => f.id));
      const newFavorites = favorites.filter(f => !existingIds.has(f.id));
      currentData.favorites = [...currentData.favorites, ...newFavorites];
    }

    // Fusionner les annotations (par topicId)
    if (annotations && Array.isArray(annotations)) {
      const annotationMap = new Map();
      // D'abord les existantes
      currentData.annotations.forEach(a => annotationMap.set(a.topicId, a));
      // Puis les nouvelles (écrasent les anciennes pour le même topicId)
      annotations.forEach(a => annotationMap.set(a.topicId, a));
      currentData.annotations = Array.from(annotationMap.values());
    }

    // Fusionner les stats intelligemment
    if (stats) {
      const currentStats = currentData.stats || {};
      
      // Fusionner les leçons complétées (union)
      const completedLessons = new Set([
        ...(currentStats.completedLessons || []),
        ...(stats.completedLessons || [])
      ]);
      
      // Fusionner l'historique quotidien
      const historyMap = new Map();
      (currentStats.dailyHistory || []).forEach(d => historyMap.set(d.date, d));
      (stats.dailyHistory || []).forEach(d => {
        const existing = historyMap.get(d.date);
        if (existing) {
          // Fusionner les données du même jour
          historyMap.set(d.date, {
            date: d.date,
            timeSpent: Math.max(existing.timeSpent || 0, d.timeSpent || 0),
            lessonsCompleted: [...new Set([
              ...(existing.lessonsCompleted || []),
              ...(d.lessonsCompleted || [])
            ])]
          });
        } else {
          historyMap.set(d.date, d);
        }
      });

      currentData.stats = {
        totalTimeSpent: Math.max(currentStats.totalTimeSpent || 0, stats.totalTimeSpent || 0),
        completedLessons: Array.from(completedLessons),
        dailyGoal: stats.dailyGoal || currentStats.dailyGoal || 15,
        currentStreak: Math.max(currentStats.currentStreak || 0, stats.currentStreak || 0),
        longestStreak: Math.max(currentStats.longestStreak || 0, stats.longestStreak || 0),
        lastActivityDate: stats.lastActivityDate || currentStats.lastActivityDate,
        dailyHistory: Array.from(historyMap.values()).sort((a, b) => a.date.localeCompare(b.date)),
        quizResults: [...(currentStats.quizResults || []), ...(stats.quizResults || [])]
      };
    }

    user.appData = currentData;
    await user.save();

    res.json({
      success: true,
      message: 'Données fusionnées avec succès',
      data: user.appData,
      syncedAt: new Date().toISOString()
    });
  } catch (error) {
    console.error('Erreur fusion données:', error);
    res.status(500).json({
      success: false,
      message: 'Erreur serveur lors de la fusion des données'
    });
  }
});

// @route   DELETE /api/sync
// @desc    Réinitialiser toutes les données
// @access  Private
router.delete('/', protect, async (req, res) => {
  try {
    const defaultData = {
      favorites: [],
      annotations: [],
      stats: {
        totalTimeSpent: 0,
        completedLessons: [],
        dailyGoal: 15,
        currentStreak: 0,
        longestStreak: 0,
        lastActivityDate: '',
        dailyHistory: [],
        quizResults: []
      }
    };

    await User.findByIdAndUpdate(
      req.user.id,
      { appData: defaultData }
    );

    res.json({
      success: true,
      message: 'Données réinitialisées',
      data: defaultData
    });
  } catch (error) {
    console.error('Erreur réinitialisation:', error);
    res.status(500).json({
      success: false,
      message: 'Erreur serveur'
    });
  }
});

export default router;

