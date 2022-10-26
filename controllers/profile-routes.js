const router = require('express').Router()
const { User, Message, Follow } = require('../models')

router.get('/:id', (req, res) => {
    User.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            { exclude: ['password'] }
        ]
    })
    .then(userData => {
        if (req.session.loggedIn) {
            res.render('profile', {
                loggedIn: req.session.loggedIn
            })
            res.json(userData)
            return
        } else {
            res.render('login')
            return
        }
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    }); 
})

// router.get('/', (req, res) => {
//     if (req.session.loggedIn) {
//         res.render('profile', {
//             loggedIn: req.session.loggedIn
//         })
//         return
//     } else {
//         res.render('login')
//         return
//     }
// })

module.exports = router