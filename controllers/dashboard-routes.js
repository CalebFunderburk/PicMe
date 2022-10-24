const router = require('express').Router()
const { User, Post, Category } = require('../models')

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