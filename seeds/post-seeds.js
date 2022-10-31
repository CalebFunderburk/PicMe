// Imports
const { Post } = require('../models')

// Data to seed
const postdata = [
  {
    title: 'Looking for a photographer in the Manhattan area.',
    post_url: 'leonard@mail.com',
    user_id: 10
  },
  {
    title: 'Join my photo editing Discord!',
    post_url: 'suzy@mail.com',
    user_id: 8
  },
  {
    title: 'Need wedding photographer!',
    post_url: 'sergio@mail.com',
    user_id: 1
  },
  {
    title: 'Does anyone know anything about F stop?',
    post_url: 'linda@mail.com',
    user_id: 4
  },
  {
    title: 'Looking to collaborate with a videographer.',
    post_url: 'oscar@mail.com',
    user_id: 7
  },
  {
    title: 'Sonys new A7R is the coolest thing ever!',
    post_url: 'linda@mail.com',
    user_id: 4
  },
  {
    title: 'Sigma lens appreciation post.',
    post_url: 'sergio@mail.com',
    user_id: 1
  },
  {
    title: 'Does anyone know what this rule of thirds thing everyone is talking about?',
    post_url: 'sergio@mail.com',
    user_id: 1
  },
  {
    title: 'I really want to take some night time city photos but dont know what settings I should start with. HELP!',
    post_url: 'chuck@mail.com',
    user_id: 9
  },
  {
    title: 'What jobs did everyone shoot this weekend? I got to take some pictures for a local car dealership!',
    post_url: 'eden@mail.com',
    user_id: 5
  },
  {
    title: 'Is anyone looking for a partner to do some projects with?',
    post_url: 'andrea@mail.com',
    user_id: 3
  },
  {
    title: 'Need help learning lightroom/photoshop? Email me!',
    post_url: 'leonard@mail.com',
    user_id: 10
  },
  {
    title: 'Canon vs Sony, which is the better buy?',
    post_url: 'suzy@mail.com',
    user_id: 8
  },
  {
    title: 'Car owner looking for photographer.',
    post_url: 'andrea@mail.com',
    user_id: 3
  },
  {
    title: 'Link your favorite works in this thread! Trying to draw some inspiration.',
    post_url: 'andrea@mail.com',
    user_id: 3
  },
  {
    title: 'Does anyone know where I can learn how to use a drone?',
    post_url: 'oscar@mail.com',
    user_id: 7
  },
  {
    title: 'I used a GoPro for my first time this weekend and I loved it! What a nifty device.',
    post_url: 'timmy@mail.com',
    user_id: 6
  },
  {
    title: 'Does anyone have a 50mm lens theyre trying to sell?',
    post_url: 'linda@mail.com',
    user_id: 4
  },
  {
    title: 'Photographer in the Pittsburgh area looking for work. Email me for my rates and availability!',
    post_url: 'timmy@mail.com',
    user_id: 6
  },
  {
    title: 'Whats your favorite kind of photography? Comment and let us know!',
    post_url: 'oscar@mail.com',
    user_id: 7
  }
]

// Function to seed data
const seedPosts = () => Post.bulkCreate(postdata)

// Exports
module.exports = seedPosts