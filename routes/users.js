const express = require('express');
const router = express.Router();
const userController = require('../api/controllers/users');


router.post('/register', userController.create);
router.get('/get', userController.getAll);
router.get('/getUser', userController.getUser);

module.exports = router;