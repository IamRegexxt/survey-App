// routes/responsesRoutes.js
const express = require('express');
const router = express.Router();
const responsesController = require('../controllers/responsesController');

router.get('/:questionId', responsesController.getByQuestionId);
router.post('/', responsesController.createResponse);

module.exports = router