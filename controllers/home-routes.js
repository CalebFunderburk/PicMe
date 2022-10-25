const router = require('express').Router()
const { User, Message, Follow } = require('../models')

router.get('/', (req, res) => {
    console.log(req.session)
    if (req.session.loggedIn) {
        res.render('dashboard', {
            loggedIn: req.session.loggedIn
        })
    } else {
        res.render('homepage')
    }
})

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/dashbaord')
        return
    }
    res.render('login')
})

module.exports = router
