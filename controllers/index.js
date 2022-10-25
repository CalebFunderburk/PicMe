// Dependencies
const router = require('express').Router();

// Modular function
const homeRoutes = require('./home-routes');
const apiRoutes = require('./api/');
const dashboardRoutes = require('./dashboard-routes')

// Plugins
router.use('/', homeRoutes);
router.use('/api', apiRoutes);
// router.use('/dashboard', dashboardRoutes)

router.use((req, res) => {
    res.status(404).end()
})

module.exports = router;