// Dependencies
const router = require('express').Router()
const { Message, User } = require('../../models')
const withAuth = require('../../utils/auth');

// Get all messages
router.get('/', (req, res) => {
    Message.findAll({
        attributes: ['id', 'message', 'user_id']
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
        attributes: ['id', 'message', 'user_id'],
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
router.post('/', (req, res) => {
    Message.create({
        message: req.body.message,
        user_id: req.body.user_id
    })
    .then(messageData => res.json(messageData))
    .catch(err => {
        console.log(err)
        res.status(500).json(err)
    })
})

// Update a message
router.put('/:id', (req, res) => {
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
router.delete('/:id', (req, res) => {
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
