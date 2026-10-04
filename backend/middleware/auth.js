import jwt from 'jsonwebtoken';
import User from '../models/User.js';

// Route protection middleware
export const protect = async (req, res, next) => {
  let token;

  // Check the Authorization header
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1];
  }
  // Or check in the cookies
  else if (req.cookies && req.cookies.token) {
    token = req.cookies.token;
  }

  // Check whether the token exists
  if (!token) {
    return res.status(401).json({
      success: false,
      message: 'Not authorized - Please sign in'
    });
  }

  try {
    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Retrieve the user
    req.user = await User.findById(decoded.id);

    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: 'User not found'
      });
    }

    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: 'Invalid or expired token'
    });
  }
};

// Optional middleware - attaches the user if signed in, otherwise continues
export const optionalAuth = async (req, res, next) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1];
  } else if (req.cookies && req.cookies.token) {
    token = req.cookies.token;
  }

  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.id);
    } catch (error) {
      // Invalid token, continue without a user
      req.user = null;
    }
  }

  next();
};
