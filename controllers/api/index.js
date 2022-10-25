// Dependencies
const router = require('express').Router();

// Modular functions
const userRoutes = require('./user-routes.js');
const messageRoutes = require('./message-routes.js');
const followRoutes = require('./follow-routes')

// Plugins
router.use('/users', userRoutes);
router.use('/messages', messageRoutes);
router.use('/follows', followRoutes)

module.exports = router;