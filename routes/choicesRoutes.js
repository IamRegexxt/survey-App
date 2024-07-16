// routes/choiceRoutes.js
const express = require('express');
const router = express.Router();
const choicesController = require('../controllers/choicesController');

router.get('/choices', choicesController.getAllChoices);
router.get('/choice/:questionId', choicesController.getAllChoicesByQuestionId);
router.post('/choice/:questionId', choicesController.createChoice);
router.put('/choice/:id', choicesController.updateChoice);
router.delete('/choice/:id', choicesController.deleteChoice);

module.exports = router;
