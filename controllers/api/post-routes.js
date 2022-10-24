// Dependencies
const router = require('express').Router()
const { Post, User } = require('../../models')

// Get all posts
router.get('/', (req, res) => {
    Post.findAll({
        attributes: ['id', 'desc', 'image_path', 'user_id', 'category_id']
    })
    .then(postData => res.json(postData))
    .catch(err => {
        console.log(err)
        res.status(500).json(err)
    })
})

// Get one post
router.get('/:id', (req, res) => {
    Post.findOne({
        where: {
            id: req.params.id
        },
        attributes: ['id', 'desc', 'image_path', 'user_id'],
    })
    .then(postData => {
        if (!postData) {
            res.status(404).json({ message: 'No post found with this id' })
            return
        }
        res.json(postData)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json(err)
    })
})

// Create a post
router.post('/', (req, res) => {
    Post.create({
        desc: req.body.desc,
        image_path: req.body.image_path,
        user_id: req.body.user_id,
        category_id: req.body.category_id
    })
    .then(postData => res.json(postData))
    .catch(err => {
        console.log(err)
        res.status(500).json(err)
    })
})

// Update a post
router.put('/:id', (req, res) => {
    Post.update(
        {
            desc: req.body.desc,
            category_id: req.body.category_id
        },
        {
            where: {
                id: req.params.id
            }
        }
    )
    .then(postData => {
        if (!postData) {
            res.status(404).json({ message: 'No post found with this id' })
            return
        }
        res.json(postData)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json(err)
    })
})

// Delete a post
router.delete('/:id', (req, res) => {
    Post.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(postData => {
        if (!postData) {
            res.status(404).json({ message: 'No post found with this id' })
            return
        }
        res.json(postData)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json(err)
    })
})

module.exports = router