// Dependencies
const router = require('express').Router();

// Modular function
const apiRoutes = require('./api/');
const homeRoutes = require('./home-routes.js');

// Plugins
router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;