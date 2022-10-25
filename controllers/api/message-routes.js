// Dependencies
const router = require('express').Router()
const { Message, User } = require('../../models')
const withAuth = require('../../utils/auth');

// Get all messages
router.get('/', (req, res) => {
    Message.findAll({
        attributes: ['message']
    })
    .then(messageData => res.json(messageData))
    .catch(err => {
        console.log(err)
        res.status(500).json(err)
    })
})

// Get one messages
router.get('/:id', (req, res) => {
    Message.findOne({
        where: {
            id: req.params.id
        },
        attributes: ['message'],
    })
    .then(messageData => {
        if (!messageData) {
            res.status(404).json({ message: 'No message found with this id' })
            return
        }
        res.json(messageData)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json(err)
    })
})

// Create a message
router.message('/', withAuth, (req, res) => {
    Message.create({
        desc: req.body.desc,
        image_path: req.body.image_path,
        user_id: req.body.user_id,
        category_id: req.body.category_id
    })
    .then(messageData => res.json(messageData))
    .catch(err => {
        console.log(err)
        res.status(500).json(err)
    })
})

// Update a message
router.put('/:id', withAuth, (req, res) => {
    Message.update(
        {
            message: req.body.message
        },
        {
            where: {
                id: req.params.id
            }
        }
    )
    .then(messageData => {
        if (!messageData) {
            res.status(404).json({ message: 'No message found with this id' })
            return
        }
        res.json(messageData)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json(err)
    })
})

// Delete a message
router.delete('/:id', withAuth, (req, res) => {
    Message.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(messageData => {
        if (!messageData) {
            res.status(404).json({ message: 'No message found with this id' })
            return
        }
        res.json(messageData)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json(err)
    })
})

module.exports = router
