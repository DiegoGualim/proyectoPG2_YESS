const express = require('express')
const router = express.Router()

const sentimentalController = require('../controller/sentimental.controller')

router.get('/:id_face/:access_tok', sentimentalController.getAllCommentes)

router.get('/report', sentimentalController.getDataReport)

router.delete('/:id_comentario', sentimentalController.deleteDataReport)

module.exports = router
