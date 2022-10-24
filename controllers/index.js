// Dependencies
const router = require('express').Router();

// Modular function
const apiRoutes = require('./api/');
const homeRoutes = require('./home-routes');
const dashboardRoutes = require('./dashboard-routes')

// Plugins
router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoutes)
router.use('/api', apiRoutes);

module.exports = router;