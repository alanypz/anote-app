const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');
const NoteSchema = require('../models/note').schema;

// User schema
const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  notes: {
    type: [NoteSchema]
  }
});

const User = module.exports = mongoose.model('User', UserSchema);

module.exports.getUserById = function(id, callback) {
  User.findById(id, callback);
}

module.exports.getUserByUsername = (username, callback) => {
  const query = {username: username};
  User.findOne(query, callback);
}

// Create user with salted password hashing
module.exports.addUser = function(newUser, callback) {
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newUser.password, salt, (err, hash) => {
      if (err) {
        throw err;
      }
      newUser.password = hash;
      // Template for new user's first note
      newUser.notes.push( {title: 'My First Note (Click me)', description: 'Write stuff here!'} );
      newUser.save(callback);
    });
  });
}

module.exports.comparePassword = function(candidatePassword, hash, callback) {
  bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
    if (err) {
      throw err;
    }
    callback(null, isMatch);
  });
}

// Save new note
// Callback returns new note with generated _id
module.exports.addNote = function(existingUser, newNote, callback) {
  existingUser.notes.push(newNote);
  existingUser.save( (err) => {
    if (err) {
      callback(err, {success: false, message: 'Unable to add new note'});
    } else {
      callback(null, existingUser.notes[existingUser.notes.length-1]);
    }
  });
}

// Update existing note
// Callback returns updated note with same _id
module.exports.updateNote = function(existingUser, existingNote, callback) {
  var note = existingUser.notes.id(existingNote._id);
  note.title = existingNote.title;
  note.description = existingNote.description;
  existingUser.save();
  existingUser.save( (err) => {
    if (err) {
      callback(err, {success: false, message: 'Unable to update note'});
    } else {
      callback(null, existingNote);
    }
  });
}

// Delete existing note
// Callback returns _id of deleted note
module.exports.deleteNote = function(existingUser, deleteId, callback) {
  existingUser.notes.id(deleteId).remove();
  existingUser.save();
  existingUser.save( (err) => {
    if (err) {
      callback(err, {success: false, message: 'Unable to delete note'});
    } else {
      callback(null, deleteId);
    }
  });
}
