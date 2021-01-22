const router = require('express').Router();
const authRoutes = require('./auth');

// Auth routes
// Login                   /api/auth/login
// Get logged in user      /api/auth/me
// Logout                  /api/auth/logout
// Register                /api/auth/register
router.use('/auth', authRoutes);


module.exports = router;