const express = require('express');
const router = express.Router();
const userMasterlistController = require('../controllers/userMasterlistController');

router.get('/masterlist', userMasterlistController.getAllUsers);
router.get('/masterlist/:id', userMasterlistController.getUserById);
router.post('/masterlist', userMasterlistController.createUser);
router.put('/masterlist/:id', userMasterlistController.updateUser);
router.delete('/masterlist/:id', userMasterlistController.deleteUser);

module.exports = router;