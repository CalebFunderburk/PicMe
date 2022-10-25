const router = require('express').Router()
const { User, Message, Follow } = require('../models')

// router.get('/', (req, res) => {
//     console.log(req.session)
//     if (req.session.loggedIn) {
//         res.render('dashboard', {
//             loggedIn: req.session.loggedIn
//         })
//     } else {
//         res.redirect('/homepage')
//     }
// })

router.get('/', (req, res) => {
    if (req.session.loggedIn) {
        res.render('dashboard', {
            loggedIn: req.session.loggedIn
        })
        return
    } else {
        res.render('homepage')
        return
    }
})

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.render('dashboard');
        return;
    }
    res.render('login');
    return
});

router.get('/dashboard', (req, res) => {
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

module.exports = router
