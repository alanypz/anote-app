const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');
const users = require('./routes/users');

// Assign port for Heroku deployment
const port = process.env.PORT || 8080;

// Connect to database
mongoose.connect(config.database);

// On database connection
mongoose.connection.on('connected', () => {
  console.log("Connected to database " + config.database);
});

// On database error
mongoose.connection.on('error', (err) => {
  console.log("Database error: " + err);
});

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

// Set static file
app.use(express.static(path.join(__dirname,'dist')));

// Users routes
app.use('/users', users);

app.listen(port, () => {
  console.log('Server running on port ' + port);
});

//  Catch routes and redirect to index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

// Start server
app.get('/', (req, res) => {
  res.send('Invalid endpoint');
});
