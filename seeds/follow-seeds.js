// Dependencies
const { Follow } = require('../models')

// Data to insert
const followData = [
    {
        user_id: 1
    },
    {
        user_id: 2
    }
]

const seedFollows = () => Follow.bulkCreate(followData)

module.exports = seedFollows