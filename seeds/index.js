// Dependencies
const sequelize = require('../config/connection')

// Modular functions
const seedUsers = require('./user-seeds');
const seedPosts = require('./post-seeds');
const seedComments= require('./comment-seeds')
const seedLikes = require('./like-seeds');

// Seed all tables in database
const seedAll = async () => {
    await sequelize.sync({ force: true })
    console.log('DATABASE SYNCED')

    await seedUsers()
    console.log('USERS SEEDED')

    await seedPosts()
    console.log('POSTS SEEDED')

    await seedComments()
    console.log('COMMENTS SEEDED')

    await seedLikes();
    console.log('LIKES SEEDED')

    process.exit(0)
}

seedAll();