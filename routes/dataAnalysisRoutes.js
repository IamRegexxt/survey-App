const express = require('express');
const router = express.Router();
const analysisController = require('../controllers/dataAnalysisController');

router.get('/analysis', analysisController.getAllAnalysis);
router.post('/analysis', analysisController.createAnalysis);
router.put('/analysis/:id', analysisController.updateAnalysis);
router.delete('/analysis/:id', analysisController.deleteAnalysis);

module.exports = router;