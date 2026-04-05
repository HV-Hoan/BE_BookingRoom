const express = require('express');
const router = express.Router();

const user = require('./user');
router.use('', user);

const tower = require('./tower');
router.use('', tower);

const room = require('./room');
router.use('', room);

const contract = require('./contract');
router.use('', contract);



module.exports = router;