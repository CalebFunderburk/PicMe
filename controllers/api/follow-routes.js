// Dependencies
const router = require('express').Router()
const { Follow } = require('../../models')
const withAuth = require('../../utils/auth');

// Get all follows
router.get('/', (req, res) => {
    Follow.findAll({
        attributes: ['user_id']
    })
    .then(followData => res.json(followData))
    .catch(err => {
        console.log(err)
        res.status(500).json(err)
    })
})

// Get one follow
router.get('/:id', (req, res) => {
    Follow.findOne({
        where:{
            id: req.params.id
        },
        attributes: ['user_id']
    })
    .then(followData => {
        if (!followData) {
            res.status(404).json({ message: 'No follow found with this id' })
            return
        }
        res.json(followData)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json(err)
    })
})

// Create a follow
router.post('/', withAuth, (req, res) => {
    Follow.create({
        user_id: req.body.user_id
    })
    .then(followData => res.json(followData))
    .catch(err => {
        console.log(err)
        res.status(500).json(err)
    })
})

// Update a follow
router.put('/:id', withAuth, (req, res) => {
    Follow.update(
        {
            user_id: req.body.user_id
        },
        {
            where: {
                id: req.params.id
            }
        }
    )
    .then(followData => {
        if (!followData) {
            res.status(404).json({ message: 'No follow found with this id' })
            return
        }
        res.json(followData)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json(err)
    })
})

// Delete a follow
router.delete('/:id', withAuth, (req, res) => {
    Follow.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(followData => {
        if (!followData) {
            res.status(404).json({ message: 'No follow found with this id' })
            return
        }
        res.json(followData)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json(err)
    })
})

module.exports = router