// Dependencies
const router = require('express').Router();

// Modular functions
const userRoutes = require('./user-routes.js');
const postRoutes = require('./post-routes.js');
const categoryRoutes = require('./category-routes')

// Plugins
router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/categories', categoryRoutes)

module.exports = router;