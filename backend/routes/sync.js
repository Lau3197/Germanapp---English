import express from 'express';
import User from '../models/User.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

// @route   GET /api/sync
// @desc    Retrieve the user's data
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
    console.error('Data retrieval error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while retrieving data'
    });
  }
});

// @route   POST /api/sync
// @desc    Save the user's data (replaces everything)
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
      message: 'Data synced successfully',
      data: user.appData,
      syncedAt: new Date().toISOString()
    });
  } catch (error) {
    console.error('Data save error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while saving data'
    });
  }
});

// @route   PUT /api/sync/merge
// @desc    Merge the data (intelligent merge)
// @access  Private
router.put('/merge', protect, async (req, res) => {
  try {
    const { favorites, annotations, stats } = req.body;
    const user = await User.findById(req.user.id);

    const currentData = user.appData;

    // Merge favorites (avoid duplicates by id)
    if (favorites && Array.isArray(favorites)) {
      const existingIds = new Set(currentData.favorites.map(f => f.id));
      const newFavorites = favorites.filter(f => !existingIds.has(f.id));
      currentData.favorites = [...currentData.favorites, ...newFavorites];
    }

    // Merge annotations (by topicId)
    if (annotations && Array.isArray(annotations)) {
      const annotationMap = new Map();
      // First the existing ones
      currentData.annotations.forEach(a => annotationMap.set(a.topicId, a));
      // Then the new ones (overwrite the old ones for the same topicId)
      annotations.forEach(a => annotationMap.set(a.topicId, a));
      currentData.annotations = Array.from(annotationMap.values());
    }

    // Merge the stats intelligently
    if (stats) {
      const currentStats = currentData.stats || {};

      // Merge completed lessons (union)
      const completedLessons = new Set([
        ...(currentStats.completedLessons || []),
        ...(stats.completedLessons || [])
      ]);

      // Merge the daily history
      const historyMap = new Map();
      (currentStats.dailyHistory || []).forEach(d => historyMap.set(d.date, d));
      (stats.dailyHistory || []).forEach(d => {
        const existing = historyMap.get(d.date);
        if (existing) {
          // Merge the data for the same day
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
      message: 'Data merged successfully',
      data: user.appData,
      syncedAt: new Date().toISOString()
    });
  } catch (error) {
    console.error('Data merge error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while merging data'
    });
  }
});

// @route   DELETE /api/sync
// @desc    Reset all data
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
      message: 'Data reset',
      data: defaultData
    });
  } catch (error) {
    console.error('Reset error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

export default router;
