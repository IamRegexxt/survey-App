// routes/instructionsRoutes.js
const express = require('express');
const router = express.Router();
const instructionsController = require('../controllers/instructionsController');

router.get('/:questionId', instructionsController.getByQuestionId);
router.post('/', instructionsController.createInstruction);

module.exports = router;
