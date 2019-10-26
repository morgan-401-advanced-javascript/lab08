'use strict';

const mongoose = require('mongoose');

// new mongoose schema
// does not need ID b/c db gives id
// _ id to something else
const teamSchema = mongoose.Schema({
  // new MongooseSchema
  name: {required: true, type: String },
  color: {required: true, type: String, lowercase: 'true', enum: ['red', 'blue', 'yellow']},
});

module.exports = mongoose.model('teams', teamSchema); 
