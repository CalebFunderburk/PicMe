<<<<<<< HEAD
const router = require('express').Router();
const sequelize = require('../config/connection');
const {User, Post } = require('../models');



module.exports = router;
=======
const router = require('express').Router()
const { User, Post, Category } = require('../models')

router.get('/', (req, res) => {
    res.render('homepage')
})

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/')
        return
    }
    res.render('login')
})

module.exports = router
>>>>>>> e99376de1d8d38292300bbdaff6bf39d5a2160d0
