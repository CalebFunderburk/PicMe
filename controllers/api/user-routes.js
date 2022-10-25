// Dependencies
const router = require('express').Router()
const { User, Message } = require('../../models')

// Get all users
router.get('/', (req, res) => {
    User.findAll({
        // attributes: { exclude: ['password'] }
    })
    .then(userData => res.json(userData))
    .catch(err => {
        console.log(err)
        res.status(500).json(err)
    })
})

// Get one user
router.get('/:id', (req, res) => {
    User.findOne({
        where: {
            id: req.params.id
        },
        include: [
            {
                model: Message,
                attributes: ['message']
            }
        ]
    })
    .then(userData => {
        if (!userData) {
            res.status(404).json({ message: 'No user found with this id' })
            return
        }
        res.json(userData)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json(err)
    })
})

// Create a user
router.post('/', (req, res) => {
    User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    })
    .then(userData => res.json(userData))
    .catch(err => {
        console.log(err)
        res.status(500).json(err)
    })
})

// Route to login
router.post('/login', (req, res) => {
    User.findOne({
        where: {
            email: req.body.email
        }
    })
    .then(userData => {
        if (!userData) {
            res.status(400).json({ message: 'No user found with that email address!' })
            return
        }

        const validPassword = userData.checkPassword(req.body.password)

        if (!validPassword) {
            res.status(400).json({ message: 'Incorrect password!' })
            return
        }

        req.session.save(() => {
            req.session.user_id = userData.id,
            req.session.username = userData.username,
            req.session.loggedIn = true

            res.json({ user: userData, message: 'You are now logged in!' })
        })
    })
})

// Route to logout
router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end()
        })
    }
    else {
        res.status(404).end()
    }
})

// Update a user
router.put('/:id', (req, res) => {
    User.update(req.body, {
        individualHooks: true,
        where: {
            id: req.params.id
        }
    })
    .then(userData => {
        if(!userData[0]) {
            res.status(404).json({ message: 'No user found with this id' })
            return
        }
        res.json(userData)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json(err)
    })
})

// Delete a user
router.delete('/:id', (req, res) => {
    User.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(userData => {
        if (!userData) {
            res.status(404).json({ message:'No user found with this id' })
            return
        }
        res.json(userData)
    })
})

module.exports = router
