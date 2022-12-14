// Imports
const router = require('express').Router()
const sequelize = require('../config/connection')
const { Post, User, Comment, Vote } = require('../models')

// Get all posts for homepage
router.get('/home', (req, res) => {
  console.log('======================')
  Post.findAll({
    attributes: [
      'id',
      'post_url',
      'title',
      'created_at',
      [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)'), 'vote_count']
    ],
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
        include: {
          model: User,
          attributes: ['username']
        }
      },
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(dbPostData => {
      const posts = dbPostData.map(post => post.get({ plain: true }))

      res.render('homepage', {
        posts,
        loggedIn: req.session.loggedIn,
        username:req.session.username
      });
    })
    .catch(err => {
      console.log(err)
      res.status(500).json(err)
    })
})

// Get one post for view
router.get('/post/:id', (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'id',
      'post_url',
      'title',
      'created_at',
      [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)'), 'vote_count']
    ],
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
        include: {
          model: User,
          attributes: ['username']
        }
      },
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No post found with this id' })
        return
      }

      const post = dbPostData.get({ plain: true })

      res.render('single-post', {
        post,
        loggedIn: req.session.loggedIn
      })
    })
    .catch(err => {
      console.log(err)
      res.status(500).json(err)
    })
})

// Route for learn more page
router.get('/learn', (req, res) => {
  res.render('learn')
})

// Route for landing page/login
router.get('/', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/home')
    return
  }

  res.render('login')
})

// Exports
module.exports = router