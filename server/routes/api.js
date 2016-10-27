const express = require('express')
const router = express.Router()

router.use('/clients', require('./clients'))
router.use('/properties', require('./properties'))
router.use('/finances', require('./finances'))

module.exports = router
