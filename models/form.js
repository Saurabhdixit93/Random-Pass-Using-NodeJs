const mongoose = require('mongoose');

// define a schema for the contact form data
const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required :true,
    },
    email: {
        type: String,
        required :true,
    },
    message: {
        type: String
    }
  });

  //setup
const form = mongoose.model('form',contactSchema);
// Exports
module.exports = form;