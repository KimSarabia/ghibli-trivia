'use strict';

var mongoose = require('mongoose');

var Question = mongoose.model('Question', {
  species: String,
  age: Number
});

module.exports = Question;
