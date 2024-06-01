// routes/scaleRoutes.js
const express = require('express');
const router = express.Router();
const scaleController = require('../controllers/scaleController');

router.get('/scales', scaleController.getAllScales);
router.get('/scale/:id', scaleController.getScaleById);
router.get('/scale/:questionId', scaleController.getScalesByQuestionId);
router.post('/scale', scaleController.createScale);
router.put('/scale/:id', scaleController.updateScale);
router.delete('/scale/:id', scaleController.deleteScale);

module.exports = router;
