// routes/scaleRoutes.js
const express = require('express');
const router = express.Router();
const scaleController = require('../controllers/scaleResponseController');

router.get('/scales', scaleController.getAllScales);
router.post('/scale', scaleController.createScale);
router.delete('/scale/:id', scaleController.deleteScale);

module.exports = router;
