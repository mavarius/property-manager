const express = require('express')
const router = express.Router()

// const Client = require('../models/Client')
const Property = require('../models/Property')

router.route('/')
  .get((req, res) => {
    Property.getFinances()
      .then(finances => res.send(finances))
      .catch(err => res.status(400).send(err))
  })

module.exports = router
