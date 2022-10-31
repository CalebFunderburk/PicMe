// Imports
const sequelize = require('../config/connection')
const { User, Post } = require('../models')

// Data to seed
const userdata = [
  {
    username: 'alesmonde0',
    email: 'sergio@mail.com',
    password: 'password123'
  },
  {
    username: 'jwilloughway1',
    email: 'rmebes1@mail.com',
    password: 'password123'
  },
  {
    username: 'iboddam2',
    email: 'andrea@mail.com',
    password: 'password123'
  },
  {
    username: 'dstanmer3',
    email: 'linda@mail.com',
    password: 'password123'
  },
  {
    username: 'djiri4',
    email: 'eden@mail.com',
    password: 'password123'
  },
  {
    username: 'msprague5',
    email: 'timmy@mail.com',
    password: 'password123'
  },
  {
    username: 'mpergens6',
    email: 'oscar@mail.com',
    password: 'password123'
  },
  {
    username: 'tpenniell7',
    email: 'suzy@mail.com',
    password: 'password123'
  },
  {
    username: 'msabbins8',
    email: 'chuck@mail.com',
    password: 'password123'
  },
  {
    username: 'jmacarthur9',
    email: 'leonard@mail.com',
    password: 'password123'
  }
]

// Function to seed database
const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true })

// Exports
module.exports = seedUsers