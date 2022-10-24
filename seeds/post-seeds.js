// Dependencies
const { Post } = require('../models');

// Data to insert
const postdata = [
    {
        desc: 'Look at this cool picture!',
        image_path: '*Image here*',
        user_id: 1
    }
];

const seedPosts = () => Post.bulkCreate(postdata)

module.exports = seedPosts;