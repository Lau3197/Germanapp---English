import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Email required'],
    unique: true,
    lowercase: true,
    trim: true,
    match: [/^\S+@\S+\.\S+$/, 'Invalid email']
  },
  password: {
    type: String,
    required: [true, 'Password required'],
    minlength: [6, 'Password must be at least 6 characters long'],
    select: false // Do not include by default in queries
  },
  name: {
    type: String,
    trim: true,
    maxlength: [50, 'Name cannot exceed 50 characters']
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  lastLogin: {
    type: Date
  },
  // Application data
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
  // Password reset token
  resetPasswordToken: String,
  resetPasswordExpire: Date
});

// Hash the password before saving
UserSchema.pre('save', async function(next) {
  if (!this.isModified('password')) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

// Generate a JWT
UserSchema.methods.getSignedJwtToken = function() {
  return jwt.sign(
    { id: this._id },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRE }
  );
};

// Check the password
UserSchema.methods.matchPassword = async function(enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// Generate a reset token
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


