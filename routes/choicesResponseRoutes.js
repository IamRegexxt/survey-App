// routes/choicesResponseRoutes.js
const express = require('express');
const router = express.Router();
const choicesResponseController = require('../controllers/choicesResponseController');

router.get('/choices', choicesResponseController.getAllChoices);
router.post('/choice', choicesResponseController.createChoices);
router.delete('/choices/:id', choicesResponseController.deleteChoices);

module.exports = router;