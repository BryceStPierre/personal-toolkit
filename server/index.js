const path = require('path');
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

let db = require('./database');
let passport = require('./passport');

const ENV = process.env.NODE_ENV || 'development';
const PORT = process.env.PORT || 3001;

let backend = express();
backend.use(cookieParser());
backend.use(bodyParser.json());
backend.use(bodyParser.urlencoded({ extended: true }));
backend.use(session({ secret: 'f5yZ8LFEv0Rfu1p9LOes', resave: false, saveUninitialized: false }));

backend.use(passport.initialize());
backend.use(passport.session());

backend.use('/api/authenticate', require('./api/authenticate')(passport));

if (ENV === 'production') {
  backend.use(express.static(path.join(__dirname, '../client/build')));
  backend.use((req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
  });
} else if (ENV === 'development') {
  db.query('SELECT NOW()', (err, res) => {
    if (err) {
      console.log('PostgreSQL connection error. You might want to check this.');
      return;
    }
    console.log(`PostgreSQL connected: ${res[0].now}.`);
  });
}

backend.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}.`);
});

module.exports = backend;