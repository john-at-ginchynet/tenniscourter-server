const path = require('path');

const express = require('express');

const auth         = require('./auth');
const matches      = require('./matches');
const sites        = require('./sites');
const user         = require('./user');
const users        = require('./users');

const router = express.Router();

router.use('/api/auth', auth);
router.use('/api/me', user);
router.use('/api/users', users);
router.use('/api/sites', sites);
router.use('/api/matches', matches);

router.get('/*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../../dist', 'index.html'));
});

module.exports = router;
