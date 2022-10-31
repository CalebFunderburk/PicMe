// Imports
const { Comment } = require('../models')

// Data to seed
const commentdata = [
  {
    comment_text: 'I wish I could help you! I was just there last week.',
    user_id: 6,
    post_id: 1
  },
  {
    comment_text: 'Splitting a photo into thirds where your subject only takes up 1 third of the image (anywhere) is following the rule of thirds.',
    user_id: 6,
    post_id: 8
  },
  {
    comment_text: 'I got to shoot a wedding myself! It was quite lovely.',
    user_id: 3,
    post_id: 10
  },
  {
    comment_text: 'Email me.',
    user_id: 3,
    post_id: 18
  },
  {
    comment_text: 'My buddy shoots video! Let me see if I can send them your way.',
    user_id: 7,
    post_id: 5
  },
  {
    comment_text: 'Nature for sure.',
    user_id: 1,
    post_id: 20
  },
  {
    comment_text: 'Im glad Im not the only one who loves Sigma! I use their lenses everyday.',
    user_id: 6,
    post_id: 7
  },
  {
    comment_text: 'F stop is a great way to control the focus of a picture. Its used in conjuction with your shutter speed and iso as well so becareful!',
    user_id: 7,
    post_id: 4
  },
  {
    comment_text: 'Youre a lifesave!',
    user_id: 6,
    post_id: 12
  },
  {
    comment_text: 'Cars!',
    user_id: 6,
    post_id: 20
  },
  {
    comment_text: 'What kind of car do you have?',
    user_id: 3,
    post_id: 14
  },
  {
    comment_text: 'Im so glad you asked this! I cant seem to figure it our myself.',
    user_id: 5,
    post_id: 4
  },
  {
    comment_text:
      'Low shutter speed and play around with your F stop and ISO. ',
    user_id: 4,
    post_id: 9
  },
  {
    comment_text:
      'Just sent you an email!',
    user_id: 5,
    post_id: 14
  },
  {
    comment_text: 'Whats the name of the server?',
    user_id: 6,
    post_id: 2
  },
  {
    comment_text: 'This is such a good idea! I would love to join.',
    user_id: 8,
    post_id: 2
  },
  {
    comment_text:
      'Product photography is so satifying.',
    user_id: 2,
    post_id: 20
  },
  {
    comment_text: 'I am!',
    user_id: 4,
    post_id: 11
  },
  {
    comment_text:
      'In my opinion the only thing Canon has going for them is how good it feels to hold one of their cameras. I feel like you get a better bang your your buck with Sony.',
    user_id: 5,
    post_id: 13
  },
  {
    comment_text:
      'Theres a place near where I live that teaches people!',
    user_id: 9,
    post_id: 16
  },
  {
    comment_text: 'I have a channel on YouTube where I talk about how to use F stop! My username is CoolCodingGuy.',
    user_id: 6,
    post_id: 4
  },
  {
    comment_text: 'I did some promotional work for a resturant!',
    user_id: 4,
    post_id: 10
  },
  {
    comment_text: 'It has a lot to do with composition and perspective of your photo.',
    user_id: 3,
    post_id: 8
  },
  {
    comment_text:
      'I took a selfie if that counts!',
    user_id: 8,
    post_id: 10
  },
  {
    comment_text:
      'https://www.petermckinnon.com/',
    user_id: 1,
    post_id: 15
  },
  {
    comment_text: 'I just emailed you!',
    user_id: 5,
    post_id: 3
  },
  {
    comment_text: 'https://www.instagram.com/northborders/?hl=en',
    user_id: 1,
    post_id: 15
  },
  {
    comment_text: 'Im sure you might be able to find someone on here, theyre getting really popular these days!',
    user_id: 4,
    post_id: 16
  },
  {
    comment_text: 'Just sent you an email!',
    user_id: 4,
    post_id: 18
  },
  {
    comment_text: 'This was my first weekend off all month!',
    user_id: 4,
    post_id: 10
  },
  {
    comment_text: 'I just emailed you!',
    user_id: 7,
    post_id: 5
  },
  {
    comment_text: 'Email me at leonard@mail.com.',
    user_id: 10,
    post_id: 1
  },
  {
    comment_text: 'Just did!',
    user_id: 3,
    post_id: 19
  },
  {
    comment_text: 'Whats the location for this job?',
    user_id: 5,
    post_id: 3
  },
  {
    comment_text: 'Man I wish I was around to help, I love taking photos of cars.',
    user_id: 10,
    post_id: 14
  },
  {
    comment_text: 'Like only eating a third of your pizza and saving the rest for later???',
    user_id: 10,
    post_id: 8
  },
  {
    comment_text: 'Just emailed you.',
    user_id: 10,
    post_id: 11
  },
  {
    comment_text: 'What kind of videography are you looking for?',
    user_id: 8,
    post_id: 5
  },
  {
    comment_text: 'Do you do collaborations as well?',
    user_id: 8,
    post_id: 19
  },
  {
    comment_text: 'Im from Pittsburgh too! I might email you actually.',
    user_id: 9,
    post_id: 19
  },
  {
    comment_text:
      'I usually just keep mine around 1.4!',
    user_id: 5,
    post_id: 4
  },
  {
    comment_text:
      'Just sent you an email!',
    user_id: 2,
    post_id: 11
  },
  {
    comment_text: 'I want one so bad!',
    user_id: 4,
    post_id: 6
  },
  {
    comment_text: 'Too bad itll cost you your entire life savings.',
    user_id: 9,
    post_id: 6
  },
  {
    comment_text:
      'I have this same issue! Someone please help us!',
    user_id: 7,
    post_id: 9
  },
  {
    comment_text: 'Just sent you an email!',
    user_id: 4,
    post_id: 19
  },
  {
    comment_text: 'What kind of work are you looking to do?',
    user_id: 10,
    post_id: 1
  },
  {
    comment_text:
      'I never been there before!',
    user_id: 2,
    post_id: 19
  },
  {
    comment_text: 'Just emailed you!',
    user_id: 10,
    post_id: 1
  },
  {
    comment_text: 'Just emailed you!',
    user_id: 10,
    post_id: 12
  }
]

// Function to seed data
const seedComments = () => Comment.bulkCreate(commentdata)

// Exports
module.exports = seedComments