const express = require('express');
const app = express();
const session = require('express-session');

// initialising session
app.use(session({
    secret: 'sh0pper challenge',
    resave: false,
    saveUninitialized: true
}));

// setting up static folder
app.use('/static', express.static('public'));
// defining view engine
app.set('view engine', 'pug');

// app root path
app.get('/', (req, res) => {
    res.render('main-form');
});

module.exports = app;
