// Dependencies
const { Message } = require('../models');

// Data to insert
const messageData = [
    {
        message: 'Hey man! How are you doing today?',
        user_id: 2
    },
    {
        message: 'Im well! how are you?',
        user_id: 1
    }
];

const seedMessages = () => Message.bulkCreate(messageData)

module.exports = seedMessages;