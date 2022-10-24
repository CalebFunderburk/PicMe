// Dependencies
const { User } = require('../models');

// Data to insert
const userdata = [
    {
<<<<<<< HEAD
        
    },

=======
        username: 'Test User 1',
        email: 'test1@mail.com',
        password: 123456
    }
>>>>>>> e99376de1d8d38292300bbdaff6bf39d5a2160d0
];

const seedUsers = () => User.bulkCreate(userdata)

module.exports = seedUsers;