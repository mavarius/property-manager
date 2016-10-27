const express = require('express')
const router = express.Router()

const Property = require('../models/Property')

router.route('/:id')
  .get((req, res) => {
    Property.findById(req.params.id)
      .then(property => res.send(property))
      .catch(err => res.status(400).send(err))
  })
  .put((req, res) => {
    Property.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
      .then(property => res.send(property))
      .catch(err => res.status(400).send(err))
  })
  .delete((req, res) => {
    Property.findByIdAndRemove(req.params.id)
      .then(properties => properties.save())
      .then(
        Property.find()
          .then(properties => res.send(properties))
      )
      .catch(err => res.status(400).send(err))
  })

router.route('/')
  .get((req, res) => {
    Property.find()
      .then(properties => res.send(properties))
      .catch(err => res.status(400).send(err))
  })
  .post((req, res) => {
    Property.create(req.body)
      .then(property => res.send(property))
      .catch(err => res.status(400).send(err))
  })

module.exports = router
