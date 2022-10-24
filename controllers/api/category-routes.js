// Dependencies
const router = require('express').Router()
const { Category } = require('../../models')
const withAuth = require('../../utils/auth');

// Get all categories
router.get('/', (req, res) => {
    Category.findAll({
        attributes: ['category_name']
    })
    .then(categoryData => res.json(categoryData))
    .catch(err => {
        console.log(err)
        res.status(500).json(err)
    })
})

// Get one category
router.get('/:id', (req, res) => {
    Category.findOne({
        where:{
            id: req.params.id
        },
        attributes: ['category_name']
    })
    .then(categoryData => {
        if (!categoryData) {
            res.status(404).json({ message: 'No category found with this id' })
            return
        }
        res.json(categoryData)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json(err)
    })
})

// Create a category
router.post('/', withAuth, (req, res) => {
    Category.create({
        category_name: req.body.category_name
    })
    .then(categoryData => res.json(categoryData))
    .catch(err => {
        console.log(err)
        res.status(500).json(err)
    })
})

// Update a category
router.put('/:id', withAuth, (req, res) => {
    Category.update(
        {
            category_name: req.body.category_name
        },
        {
            where: {
                id: req.params.id
            }
        }
    )
    .then(categoryData => {
        if (!categoryData) {
            res.status(404).json({ message: 'No category found with this id' })
            return
        }
        res.json(categoryData)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json(err)
    })
})

// Delete a category
router.delete('/:id', withAuth, (req, res) => {
    Category.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(categoryData => {
        if (!categoryData) {
            res.status(404).json({ message: 'No categpry found with this id' })
            return
        }
        res.json(categoryData)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json(err)
    })
})

module.exports = router