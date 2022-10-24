// Dependencies
const { User } = require('../models');

// Data to insert
const userdata = [
    {
        username: 'Test User 1',
        email: 'test1@mail.com',
        password: 123456
    }
];

const seedUsers = () => User.bulkCreate(userdata)

module.exports = seedUsers;