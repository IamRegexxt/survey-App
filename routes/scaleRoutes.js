// routes/scaleRoutes.js
const express = require('express');
const router = express.Router();
const scaleController = require('../controllers/scaleController');

router.get('/', scaleController.getAllScales);
router.get('/:id', scaleController.getScaleById);
router.get('/question/:questionId', scaleController.getScalesByQuestionId);
router.post('/', scaleController.createScale);
router.put('/:id', scaleController.updateScale);
router.delete('/:id', scaleController.deleteScale);

module.exports = router;
