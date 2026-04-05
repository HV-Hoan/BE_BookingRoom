const express = require('express');
const router = express.Router();
const contract = require("../controller/contractController");


//crud contract
router.get('/contract/all', contract.getAllContracts);
router.get('/contract/:id', contract.getContractById);
router.post('/contract', contract.createContract);
router.put('/contract/:id', contract.updateContract);
router.delete('/contract/:id', contract.deleteContract);


module.exports = router;