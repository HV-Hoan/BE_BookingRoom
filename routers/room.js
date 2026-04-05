const express = require('express');
const router = express.Router();
const room = require('../controller/roomController');

//crud room
router.get('/room/all', room.getAllRooms);
router.get('/room/:id', room.getRoomById);
router.post('/room', room.createRoom);
router.put('/room/:id', room.updateRoom);
router.delete('/room/:id', room.deleteRoom);


module.exports = router;