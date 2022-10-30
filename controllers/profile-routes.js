const router = require('express').Router();
const { User, Comment } = require('../models');
const withAuth = require('../utils/auth');

// get all Users for dashboard
router.get('/', withAuth, (req, res) => {
    console.log(req.session);
    console.log('======================');
    User.findOne({
      where: {
       id: req.session.id
      },
      attributes: {
        exclude: ['password']
      },
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
      .then(userData => {
        const users = userData.map(user => user.get({ plain: true }));
        res.render('profile', { users, loggedIn: true });
        return;
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });


//Route to edit posts
router.get('/', withAuth, (req, res) => {
    console.log(req.session);
    User.findAll({

        attributes: {
            exclude: ['password']
        },
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
        .then(userData => {
            if (!userData) {
                //  const users = userData.get({ plain: true });
                res.status(404).json({ message: 'no user found with this ID' });
                res.render('dashboard')
                return;

            }
            res.json(userData);
            document.location.replace(`/profile/${userData.id}`)
            return;

        })
        .catch(err => {
            res.status(500).json(err);
        });
});

module.exports = router;