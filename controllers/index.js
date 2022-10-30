// Dependencies
const router = require('express').Router();

// Modular function
const landingRoutes = require('./landing-routes');
const apiRoutes = require('./api/');
const dashboardRoutes = require('./dashboard-routes');
const profileRoutes = require('./profile-routes')

// Plugins
router.use('/', landingRoutes);
router.use('/api', apiRoutes);
router.use('/dashboard', dashboardRoutes)
router.use('/profile', profileRoutes)

router.use((req, res) => {
    res.status(404).end()
})

module.exports = router;