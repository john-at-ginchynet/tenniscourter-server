const LocalStrategy = require('passport-local').Strategy;

const { User } = require('../database/schemas');

const Strategies = module.exports;

Strategies.local = new LocalStrategy({ usernameField: 'email' }, (username, password, done) => {
  User.findOne({ email: username })
    .then(user => {
      if (!user) {
        return done(null, false, { message: 'Email doesn\'t exist' });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Incorrect email or password' });
      }
      return done(null, user);
    })
    .catch(err => done(err));

});
