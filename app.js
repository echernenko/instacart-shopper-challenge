const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');

// initialising app
const app = express();
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
require('./controllers/analysis')(app);

module.exports = app;
