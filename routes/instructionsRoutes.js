// routes/instructionsRoutes.js
const express = require('express');
const router = express.Router();
const instructionsController = require('../controllers/instructionsController');

router.get('/instructions', instructionsController.getAllInstructions);
router.post('/instruction', instructionsController.createInstruction);

module.exports = router;
