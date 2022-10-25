const router = require('express').Router()
const { User, Message, Follow } = require('../models')

router.get('/', (req, res) => {
    if (req.session.loggedIn) {
        res.render('dashboard', {
            loggedIn: req.session.loggedIn
        })
        return
    } else {
        res.render('login')
        return
    }
})

router.get('/signup', (req, res) => {
    res.render('signup')
    return
})

module.exports = router
