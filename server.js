// Dependencies
const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// Modular functions
const sequelize = require('./config/connection');

// Format express
const app = express();
const PORT = process.env.PORT || 3001;

// Format handlebars
const hbs = exphbs.create()
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Format session
const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

// Express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Activate routes
app.use(require('./controllers/'));

// Sync sync database to the server
sequelize.sync({ alter: true }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});