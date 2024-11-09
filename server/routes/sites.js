const express = require('express');

const { Site } = require('../database/schemas');

const { requireAuth } = require('./middleware');

const router   = express.Router();

module.exports = router;

router.get('/', requireAuth, (req, res) => {
  Site.find()
    .then(sites => {
      res.send({ message: 'Sites retrieved successfully', sites });
    })
    .catch(err => {
      res.status(400).send({ message: 'Get sites failed', err });
    });
});

router.get('/:id', requireAuth, (req, res) => {
  Site.findById(req.params.id)
    .then(site => {
      res.send({ message: 'Site retrieved successfully', site });
    })
    .catch(err => {
      res.status(400).send({ message: 'Get site failed', err });
    });
});

router.post('/', requireAuth, (req, res) => {
  req.body.user = req.user.id;

  const newSite = Site(req.body);

  newSite.save()
    .then(savedSite => {
      res.send({ message: 'Site created successfully', site: savedSite });
    })
    .catch(err => {
      res.status(400).send({ message: 'Create site failed', err });
    });
});

router.put('/:id', requireAuth, (req, res) => {
  req.body.updatedAt = Date.now();

  Site.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((site) => {
      res.status(200).send({ message: 'Site successfully updated', site });
    })
    .catch(err => {
      res.status(400).send({ err, message: 'Error updating site' });
    });
});

router.delete('/:id', requireAuth, (req, res) => {
  Site.findByIdAndRemove(req.params.id)
    .then(() => {
      res.send({ message: 'Site successfully deleted' });
    })
    .catch((err) => {
      res.status(400).send({ message: 'Delete site failed', err });
    });
});
