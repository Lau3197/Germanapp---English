import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Email requis'],
    unique: true,
    lowercase: true,
    trim: true,
    match: [/^\S+@\S+\.\S+$/, 'Email invalide']
  },
  password: {
    type: String,
    required: [true, 'Mot de passe requis'],
    minlength: [6, 'Le mot de passe doit contenir au moins 6 caractères'],
    select: false // Ne pas inclure par défaut dans les requêtes
  },
  name: {
    type: String,
    trim: true,
    maxlength: [50, 'Le nom ne peut pas dépasser 50 caractères']
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  lastLogin: {
    type: Date
  },
  // Données de l'application
  appData: {
    favorites: {
      type: Array,
      default: []
    },
    annotations: {
      type: Array,
      default: []
    },
    stats: {
      type: Object,
      default: {
        totalTimeSpent: 0,
        completedLessons: [],
        dailyGoal: 15,
        currentStreak: 0,
        longestStreak: 0,
        lastActivityDate: '',
        dailyHistory: [],
        quizResults: []
      }
    }
  },
  // Token de réinitialisation de mot de passe
  resetPasswordToken: String,
  resetPasswordExpire: Date
});

// Hasher le mot de passe avant sauvegarde
UserSchema.pre('save', async function(next) {
  if (!this.isModified('password')) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

// Générer un JWT
UserSchema.methods.getSignedJwtToken = function() {
  return jwt.sign(
    { id: this._id },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRE }
  );
};

// Vérifier le mot de passe
UserSchema.methods.matchPassword = async function(enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// Générer un token de réinitialisation
UserSchema.methods.getResetPasswordToken = function() {
  const resetToken = crypto.randomBytes(20).toString('hex');
  
  this.resetPasswordToken = crypto
    .createHash('sha256')
    .update(resetToken)
    .digest('hex');
  
  this.resetPasswordExpire = Date.now() + 10 * 60 * 1000; // 10 minutes
  
  return resetToken;
};

export default mongoose.model('User', UserSchema);


