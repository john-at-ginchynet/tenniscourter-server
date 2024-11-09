const express  = require('express');
const passport = require('passport');

const { User } = require('../database/schemas');

const router = express.Router();

module.exports = router;

router.post('/register', (req, res) => {
  if (!req || !req.body || !req.body.email || !req.body.password) {
    res.status(400).send({ message: 'Email and Password required' });
  } else {
    const { email } = req.body;
    const newUser = User(req.body);

    User.find({ email })
      .then(users => {
        if (users[0]) {
          res.status(400).send({ message: 'Email exists' });
        }

        newUser.hashPassword()
          .then(() => {
            newUser.save()
              .then(user => {
                res.send({ message: 'User created successfully', user });
              })
              .catch(err => {
                res.status(400).send({ message: 'Create user failed', err });
              });
          });
      })
      .catch(err => {
        res.status(400).send({ message: 'Create user failed', err });
      });
  }
});

router.post('/login', (req, res, next) => {

  passport.authenticate('local', (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.status(401).send(info);
    }

    req.login(user, err => {
      if (err) {
        res.status(401).send({ message: 'Login failed', err });
      }
      res.send({ message: 'Logged in successfully', user });
    });

  })(req, res, next);
});

router.post('/logout', (req, res) => {
  req.logout(err => {
    if (err) {
      res.status(400).send({ message: 'Logout failed', err });
    }

    req.session.destroy(err => {
      if (err) {
        res.status(400).send({ message: 'Logout failed', err });
      }

      res.clearCookie('connect.sid');
      req.sessionID = null;
      res.send({ message: 'Logged out successfully' });
    });
  });
});
