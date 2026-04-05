const express = require('express');
const router = express.Router();
const user = require('../controller/userController');

//crud user
router.get('/users/all', user.getAllUsers);
router.get('/users/:id', user.getUserById);
router.post('/users', user.createUser);
router.put('/users/:id', user.updateUser);
router.delete('/users/:id', user.deleteUser);

module.exports = router;