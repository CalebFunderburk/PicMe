// Dependencies
const { Category } = require('../models')

// Data to insert
const categoryData = [
    {
        category_name: 'Sports'
    },
    {
        category_name: 'Action'
    },
    {
        category_name: 'Outdoors'
    }
]

const seedCategories = () => Category.bulkCreate(categoryData)

module.exports = seedCategories