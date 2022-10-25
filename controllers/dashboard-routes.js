const router = require('express').Router()
const { User, Message, Follow } = require('../models')

router.get('/', (req, res) => {
    if (req.session.loggedIn) {
        res.render('dashboard', {
            loggedIn: req.session.loggedIn
        })
    } else {
        res.render('homepage')
    }
})

module.exports = router