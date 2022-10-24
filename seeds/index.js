// Dependencies
const sequelize = require('../config/connection')

// Modular functions
const seedUsers = require('./user-seeds');
const seedPosts = require('./post-seeds');
const seedCategories = require('./category-seeds')

// Seed all tables in database
const seedAll = async () => {
    await sequelize.sync({ force: true })
    console.log('DATABASE SYNCED')

    await seedUsers()
    console.log('USERS SEEDED')

    await seedPosts()
    console.log('POSTS SEEDED')

    await seedCategories()
    console.log('CATEGORIES SEEDED')

    process.exit(0)
}

seedAll()