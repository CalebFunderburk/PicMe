// Imports
const router = require('express').Router()
const apiRoutes = require('./api/')
const homeRoutes = require('./home-routes.js')
const dashboardRoutes = require('./dashboard-routes.js')

// Plugins
router.use('/', homeRoutes)
router.use('/dashboard', dashboardRoutes)
router.use('/api', apiRoutes)

// Exports
module.exports = router