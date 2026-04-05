const express = require('express');
const router = express.Router();
const tower = require('../controller/towerController');

//crud tower
router.get('/tower/all', tower.getAllTowers);
router.get('/tower/:id', tower.getTowerById);
router.post('/tower', tower.createTower);
router.put('/tower/:id', tower.updateTower);
router.delete('/tower/:id', tower.deleteTower);


module.exports = router;