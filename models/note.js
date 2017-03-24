const mongoose = require('mongoose');
const config = require('../config/database');

// Schema for individual Notes
const NoteSchema = module.exports = mongoose.Schema({
  title: {
    type: String
  },
  description: {
    type: String
  }
});

const User = module.exports = mongoose.model('Note', NoteSchema);
