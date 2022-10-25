// Dependencies
const sequelize = require('../config/connection')

// Modular functions
const seedUsers = require('./user-seeds');
const seedMessages = require('./message-seeds');
const seedFollows = require('./follow-seeds')

// Seed all tables in database
const seedAll = async () => {
    await sequelize.sync({ force: true })
    console.log('DATABASE SYNCED')

    await seedUsers()
    console.log('USERS SEEDED')

    await seedMessages()
    console.log('MESSAGES SEEDED')

    await seedFollows()
    console.log('FOLLOWS SEEDED')

    process.exit(0)
}

seedAll()