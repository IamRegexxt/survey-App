// routes/responsesRoutes.js
const express = require('express');
const router = express.Router();
const responsesController = require('../controllers/responsesController');

router.get('/responses/:questionId', responsesController.getByQuestionId);
router.get('/responses', responsesController.getAllReponses);
router.post('/response', responsesController.createResponse);

module.exports = router