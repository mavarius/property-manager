const express = require('express')
const router = express.Router()

const Property = require('../models/Property')

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
