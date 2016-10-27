const express = require('express')
const router = express.Router()

const Client = require('../models/Client')

router.route('/moveIn/:id')
  .put((req, res) => {
    Client.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
      .populate('property')
      .then(client => {
        client.updateAddress()
        client.calculateRent()
        return client.save()
      })
      .then(savedClient => res.send(savedClient))
      .catch(err => res.status(400).send(err))
  })

router.route('/moveOut/:id')
  .put((req, res) => {
    Client.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
      .then(client => {
        client.calculateRent()
        return client.save()
      })
      .then(savedClient => res.send(savedClient))
      .catch(err => res.status(400).send(err))
  })

router.route('/:id')
  .get((req, res) => {
    Client.findById(req.params.id)
      .populate('property')
      .then(client => res.send(client))
      .catch(err => res.status(400).send(err))
  })
  .put((req, res) => {
    Client.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
      .then(client => res.send(client))
      .catch(err => res.status(400).send(err))
  })
  .delete((req, res) => {
    Client.findByIdAndRemove(req.params.id)
      .then(clients => clients.save())
      .then(
        Client.find()
          .then(clients => res.send(clients))
      )
      .catch(err => res.status(400).send(err))
  })

router.route('/')
  .get((req, res) => {
    Client.find()
      .then(clients => res.send(clients))
      .catch(err => res.status(400).send(err))
  })
  .post((req, res) => {
    Client.create(req.body)
      .then(client => res.send(client))
      .catch(err => res.status(400).send(err))
  })

module.exports = router
