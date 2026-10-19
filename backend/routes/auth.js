import express from 'express';
import { body, validationResult } from 'express-validator';
import User from '../models/User.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();
const getRegistrationAccessCode = () => (
  process.env.REGISTRATION_ACCESS_CODE || ''
).trim();

// Validation error handler
const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      errors: errors.array()
    });
  }
  next();
};

// @route   POST /api/auth/register
// @desc    Register a new user
// @access  Public
router.post('/register', [
  body('email').isEmail().withMessage('Invalid email'),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
  body('registrationCode').trim().notEmpty().withMessage('Access code required'),
  body('name').optional().trim().isLength({ max: 50 })
], validate, async (req, res) => {
  try {
    const { email, password, name, registrationCode } = req.body;
    const expectedRegistrationCode = getRegistrationAccessCode();

    if (!expectedRegistrationCode) {
      return res.status(500).json({
        success: false,
        message: 'Registration access code is not configured'
      });
    }

    if (registrationCode !== expectedRegistrationCode) {
      return res.status(403).json({
        success: false,
        message: 'Invalid access code'
      });
    }

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: 'This email is already in use'
      });
    }

    // Create the user
    const user = await User.create({
      email,
      password,
      name
    });

    // Generate the token
    const token = user.getSignedJwtToken();

    res.status(201).json({
      success: true,
      message: 'Account created successfully',
      token,
      user: {
        id: user._id,
        email: user.email,
        name: user.name
      }
    });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error during registration'
    });
  }
});

// @route   POST /api/auth/login
// @desc    Log a user in
// @access  Public
router.post('/login', [
  body('email').isEmail().withMessage('Invalid email'),
  body('password').exists().withMessage('Password required')
], validate, async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if the user exists (include the password)
    const user = await User.findOne({ email }).select('+password');
    if (!user) {
      return res.status(401).json({
        success: false,
        message: 'Incorrect email or password'
      });
    }

    // Check the password
    const isMatch = await user.matchPassword(password);
    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: 'Incorrect email or password'
      });
    }

    // Update the last login date
    user.lastLogin = Date.now();
    await user.save({ validateBeforeSave: false });

    // Generate the token
    const token = user.getSignedJwtToken();

    res.json({
      success: true,
      message: 'Signed in successfully',
      token,
      user: {
        id: user._id,
        email: user.email,
        name: user.name
      }
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error during login'
    });
  }
});

// @route   GET /api/auth/me
// @desc    Get the profile of the signed-in user
// @access  Private
router.get('/me', protect, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);

    res.json({
      success: true,
      user: {
        id: user._id,
        email: user.email,
        name: user.name,
        createdAt: user.createdAt,
        lastLogin: user.lastLogin
      }
    });
  } catch (error) {
    console.error('Profile error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

// @route   PUT /api/auth/updateprofile
// @desc    Update the profile
// @access  Private
router.put('/updateprofile', protect, [
  body('name').optional().trim().isLength({ max: 50 }),
  body('email').optional().isEmail()
], validate, async (req, res) => {
  try {
    const { name, email } = req.body;
    const updateFields = {};

    if (name) updateFields.name = name;
    if (email) {
      // Check that the email is not already in use
      const existingUser = await User.findOne({ email, _id: { $ne: req.user.id } });
      if (existingUser) {
        return res.status(400).json({
          success: false,
          message: 'This email is already in use'
        });
      }
      updateFields.email = email;
    }

    const user = await User.findByIdAndUpdate(
      req.user.id,
      updateFields,
      { new: true, runValidators: true }
    );

    res.json({
      success: true,
      message: 'Profile updated',
      user: {
        id: user._id,
        email: user.email,
        name: user.name
      }
    });
  } catch (error) {
    console.error('Profile update error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

// @route   PUT /api/auth/updatepassword
// @desc    Update the password
// @access  Private
router.put('/updatepassword', protect, [
  body('currentPassword').exists().withMessage('Current password required'),
  body('newPassword').isLength({ min: 6 }).withMessage('The new password must be at least 6 characters long')
], validate, async (req, res) => {
  try {
    const { currentPassword, newPassword } = req.body;

    const user = await User.findById(req.user.id).select('+password');

    // Check the current password
    const isMatch = await user.matchPassword(currentPassword);
    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: 'Current password is incorrect'
      });
    }

    // Update the password
    user.password = newPassword;
    await user.save();

    // Generate a new token
    const token = user.getSignedJwtToken();

    res.json({
      success: true,
      message: 'Password updated',
      token
    });
  } catch (error) {
    console.error('Password update error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

// @route   DELETE /api/auth/deleteaccount
// @desc    Delete the account
// @access  Private
router.delete('/deleteaccount', protect, async (req, res) => {
  try {
    await User.findByIdAndDelete(req.user.id);

    res.json({
      success: true,
      message: 'Account deleted successfully'
    });
  } catch (error) {
    console.error('Account deletion error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

export default router;
