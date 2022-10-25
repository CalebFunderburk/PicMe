const router = require('express').Router()
const { User, Message, Follow } = require('../models')

router.get('/', (req, res) => {
    if (req.session.loggedIn) {
        res.render('profile', {
            loggedIn: req.session.loggedIn
        })
        return
    } else {
        res.render('login')
        return
    }
})

module.exports = router