const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database')
const User = require('../models/user');
const Note = require('../models/note');

// Register
router.post('/register', (req, res, next) => {
  let newUser = new User({
    name: req.body.name,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password
  });

  User.addUser(newUser, (err, user) => {
    if (err) {
      res.json({success: false, msg: "Failed to register user."});
    }
    else {
      res.json({success: true, msg: "User registered."});
    }
  });
});

// Authenticate
// Response contains JWT
router.post('/authenticate', (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;

  User.getUserByUsername(username, (err, user) => {
    if (err) {
      throw err;
    }

    if (!user) {
      return res.json({success: false, message: 'Invalid username or password.'});
    }

    User.comparePassword(password, user.password, (err, isMatch) => {
      if (err) {
        throw err;
      }

      if (isMatch) {
        const token = jwt.sign(user, config.secret, {
          expiresIn: 604800
        });
        res.json({
          success: true,
          token: 'JWT ' + token,
          user: {
            id: user._id,
            name: user.name,
            email: user.email,
            username: user.username
          }
        })
      } else {
        return res.json({success: false, message: 'Invalid username or password.'});
      }
    });
  });
});

// Profile
router.get('/profile', passport.authenticate('jwt', {session: false}), (req, res, next) => {
  res.json({user: req.user})
});

// Retrieve notes
router.get('/notes', passport.authenticate('jwt', {session: false}), (req, res, next) => {
  res.json({notes: req.user.notes})
});

// Create new note
router.post('/notes', passport.authenticate('jwt', {session: false}), (req, res, next) => {
  let newNote = new Note({
    title: req.body.title,
    description: req.body.description
  });

  User.addNote(req.user, newNote, (err, data) => {
    if (err) {
      throw err;
    }
    res.json(data);
  });
});

// Update existing note
router.put('/notes', passport.authenticate('jwt', {session: false}), (req, res, next) => {
  let newNote = new Note({
    title: req.body.title,
    description: req.body.description,
    _id: req.body._id
  });
  User.updateNote(req.user, req.body, (err, data) => {
    if (err) {
      throw err;
    }
    res.json(data);
  });
});

// Delete existing note
router.delete('/notes/:id', passport.authenticate('jwt', {session: false}), (req, res, next) => {
  User.deleteNote(req.user, req.params.id, (err, data) => {
    if (err) {
      throw err;
    }
    res.json(data);
  });
});

module.exports = router;
