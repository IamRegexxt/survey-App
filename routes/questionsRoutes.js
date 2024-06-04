const express = require('express');
const router = express.Router();
const questionsController = require('../controllers/questionsController');

router.get('/questions/:categoryId', questionsController.getAllQuestions);
router.post('/question', questionsController.createQuestion);
router.get('/question/:id', questionsController.getQuestionById);
router.put('/question/:id', questionsController.updateQuestion);
router.delete('/question/:id', questionsController.deleteQuestion);

module.exports = router;