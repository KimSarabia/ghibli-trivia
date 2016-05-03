'use strict';

var mongoose = require('mongoose');

var Question = mongoose.model('Question', {
  question: String,
  answer: String,
  category: String
});

module.exports = Question;
