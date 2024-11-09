const express = require('express');

const { Match } = require('../database/schemas');
const { User } = require('../database/schemas');

const router   = express.Router();

const { requireAuth } = require('./middleware');

module.exports = router;

router.post('/checkemail', (req, res) => {
  const email = req.body.email.toLowerCase();

  User.find({ email })
    .then(users => {
      if (users && users[0]) {
        res.send({ available: false, message: 'Email exists', email });
      } else {
        res.send({ available: true, message: 'Email available', email });
      }
    })
    .catch(err => {
      res.status(400).send({ message: 'Check email failed', err, email });
    });
});

router.get('/', requireAuth, (req, res) => {
  User.find()
    .then(users => {
      res.send({ message: 'Users retrieved successfully', users });
    })
    .catch(err => {
      res.status(400).send({ message: 'Get users failed', err });
    });
});

router.get('/:id', requireAuth, (req, res) => {
  User.findById(req.params.id)
    .then(user => {
      res.send({ message: 'User retrieved successfully', user });
    })
    .catch(err => {
      res.status(400).send({ message: 'Get user failed', err });
    });
});

router.put('/:id', requireAuth, (req, res) => {
  req.body.updatedAt = Date.now();

  User.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((user) => {
      res.status(200).send({ message: 'User successfully updated', user });
    })
    .catch(err => {
      res.status(400).send({ err, message: 'Error updating match' });
    });
});

router.get('/:id/matches', requireAuth, (req, res) => {
  Match.find({ $or: [{ side1_player1: req.params.id }, { side2_player1: req.params.id }] })
    .populate(['side1_player1', 'side2_player1', 'side1_player2', 'side2_player2'])
    .sort('-date location')
    .then(matches => {
      res.send({ message: 'Matches retrieved successfully for user', matches });
    })
    .catch(err => {
      res.status(400).send({ message: 'Get matches failed for user', err });
    });
});
