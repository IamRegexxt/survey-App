const express = require('express');
const router = express.Router();
const userMasterlistController = require('../controllers/userMasterlistController');

router.get('/', userMasterlistController.getAllUsers);
router.get('/:id', userMasterlistController.getUserById);
router.post('/', userMasterlistController.createUser);
router.put('/:id', userMasterlistController.updateUser);
router.delete('/:id', userMasterlistController.deleteUser);

module.exports = router;