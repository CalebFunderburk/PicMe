// Imports
const path = require('path')
const express = require('express')
const session = require('express-session')
const exphbs = require('express-handlebars')

// Express environment setup
const app = express()
const PORT = process.env.PORT || 3001

// Format sequelize session
const sequelize = require('./config/connection')
const SequelizeStore = require('connect-session-sequelize')(session.Store)

const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
}

app.use(session(sess))

// Format handlebars
const helpers = require('./utils/helpers')
const hbs = exphbs.create({ helpers })
app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')

// Format express
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

//Index Route
//app.get('/',  (req,res) => res.render('index', {layout: landingpage}))

// Plug in routes
app.use(require('./controllers/'))

// Sync database
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'))
})