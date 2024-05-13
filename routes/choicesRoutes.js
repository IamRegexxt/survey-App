// routes/choiceRoutes.js
const express = require('express');
const router = express.Router();
const choicesController = require('../controllers/choicesController');

router.get('/question/:questionId', choicesController.getAllChoicesByQuestionId);
router.post('/question/:questionId', choicesController.createChoice);
router.put('/:id', choicesController.updateChoice);
router.delete('/:id', choicesController.deleteChoice);

module.exports = router;
