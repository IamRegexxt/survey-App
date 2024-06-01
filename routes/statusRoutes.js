// routes/statusRoutes.js
const express = require('express');
const router = express.Router();
const statusController = require('../controllers/statusController');

router.get('/status', statusController.getAllStatuses);
router.get('/status/:id', statusController.getStatusById);
router.post('/status', statusController.createStatus);
router.put('/status/:id', statusController.updateStatus);
router.delete('/status/:id', statusController.deleteStatus);

module.exports = router;