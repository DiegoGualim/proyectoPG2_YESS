const express = require('express')
const router = express.Router()

const sentimentalController = require('../controller/sentimental.controller')

router.get('/', sentimentalController.getAllCommentes)

module.exports = router
