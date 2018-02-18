const express = require('express');
const app = express();
const session = require('express-session');
const bodyParser = require('body-parser');

// initialising session
app.use(session({
    secret: 'sh0pper challenge',
    resave: false,
    saveUninitialized: true
}));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));

// setting up static folder
app.use('/static', express.static('public'));
// defining view engine
app.set('view engine', 'pug');

// starting DB connection
require('./db/db-config');

// app paths
require('./controllers/main-flow')(app);

module.exports = app;
