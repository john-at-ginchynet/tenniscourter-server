const express = require('express');

const { Match } = require('../database/schemas');

const { requireAuth } = require('./middleware');

const router   = express.Router();

module.exports = router;

router.get('/', requireAuth, (req, res) => {
  // Match.find({ $or: [{ side1_player1: req.user.id }, { side2_player1: req.user.id }] })
  Match.find({ })
    .populate(['side1_player1', 'side2_player1', 'side1_player2', 'side2_player2'])
    .sort('-date location')
    .then(matches => {
      res.send({ message: 'Matches retrieved successfully', matches });
    })
    .catch(err => {
      res.status(400).send({ message: 'Get matches failed', err });
    });
});

router.post('/', requireAuth, (req, res) => {
  // req.body.user = req.user.id;
  req.body.user = '66b651a4dfa7548e32d70124';

  const newMatch = Match(req.body);

  newMatch.save()
    .then(savedMatch => {
      res.send({ message: 'Match created successfully', match: savedMatch });
    })
    .catch(err => {
      res.status(400).send({ message: 'Create match failed', err });
    });
});

router.get('/:id', requireAuth, (req, res) => {
  Match.findById(req.params.id)
    .populate(['side1_player1', 'side2_player1', 'side1_player2', 'side2_player2'])
    .then(match => {
      res.send({ message: 'Match retrieved successfully', match });
    })
    .catch(err => {
      res.status(400).send({ message: 'Get match failed', err });
    });
});

router.put('/', requireAuth, (req, res) => {
  req.body.updatedAt = Date.now();

  Match.findByIdAndUpdate(req.body.id, req.body, { new: true })
    .then((match) => {
      res.status(200).send({ message: 'Match successfully updated', match });
    })
    .catch(err => {
      res.status(400).send({ err, message: 'Error updating match' });
    });
});

router.delete('/:id', requireAuth, (req, res) => {
  Match.findByIdAndRemove(req.params.id)
    .then(() => {
      res.send({ message: 'Match successfully delete' });
    })
    .catch((err) => {
      res.status(400).send({ message: 'Delete match failed', err });
    });
});
