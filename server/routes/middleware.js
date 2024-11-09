const requireAuth = (req, res, next) =>
  next();
  // req.isAuthenticated() ? next() : res.status(401).send({ message: 'User not authenticated' });

module.exports = {
  requireAuth,
};
