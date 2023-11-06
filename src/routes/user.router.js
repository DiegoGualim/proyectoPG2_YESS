const express = require('express')
const router = express.Router()

const userController = require('../controller/user.controller')

//get all patients
router.get('/', userController.getAllUsers)

//Login
router.post('/login', userController.Login)

//get user by id
router.get('/user/:id', userController.getUserById)

//get user by email
router.get('/email/:email', userController.getUserByEmail)

//get user by username
router.get('/name/:username', userController.getUserByUsername)

//create new patient
router.post('/', userController.createNewUser)

router.delete('/:id', userController.deleteUser)

module.exports = router
