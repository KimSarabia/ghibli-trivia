var express = require('express');
var router = express.Router();

var Question = require('../models/question');

// GET /api/questions --> return array of all questions
// POST /api/questions --> create a new question

/* GET questions listing. */
router.get('/', function(req, res) {
  Question.find({}, (err, questions) => {
    if(err) {
      return res.status(400).send(err);
    } else {
      res.send(questions);
    }
  });
});

router.get('/:id', (req,res) => {
  Question.findById(req.params.id, (err, question) => {
    if(err) {
      return res.status(400).send(err);
    } else {
      res.send(question);
    }
  });
});

router.get('/:id', (req,res) => {
  Question.findById(req.params.id, (err, question) => {
    if(err) {
      return res.status(400).send(err);
    } else {
      res.send(question);
    }
  });
});

router.delete('/:id', (req,res) => {

  Question.findByIdAndRemove(req.params.id, err => {
    if(err) {
      return res.status(400).send(err);
    } else {
      res.send();
    }
  });
});

router.post('/', function(req, res) {
  var question = new Question(req.body);

  question.save((err, savedQuestion) => {
    if(err){
      res.status(400).send(err);
    } else {
      res.send(savedQuestion);
    }
  });
});

router.put('/:id', (req, res) => {
  Question.findByIdAndUpdate(req.params.id, { $set: req.body}, {new:true}, (err, question) => {
    if(err) {
      return res.status(400).send(err);
    } else {
      res.send(question);
    }
  });
});


module.exports = router;
