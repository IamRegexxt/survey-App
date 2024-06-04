// routes/responsesRoutes.js
const express = require('express');
const router = express.Router();
const responsesController = require('../controllers/responsesController');

router.get('questions/:questionId/responses', responsesController.getByQuestionId);
router.post('/responses', responsesController.createResponse);

module.exports = router