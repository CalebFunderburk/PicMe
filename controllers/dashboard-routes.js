const router = require('express').Router()
const sequelize = require('sequelize');
const { User, } = require('../models')

router.get('/', (req, res) => {
    User.findAll( {
     
        //  attributes: [
        //  // exclude: ['password']
        // //    'username',
        // //    'email',
        // //    'bio',
        // //    'website',
        // // //   [sequelize.literal('(SELECT user.id, user.username, user.email, user.bio, user.website FROM user'), 'user']
        //  ]

    })
    if (req.session.loggedIn) {
        res.render('dashboard', {
            loggedIn: req.session.loggedIn
        })
        return
    } else {
        res.render('login')
        return
    }
});


module.exports = router;