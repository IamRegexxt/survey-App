// routes/commentRoutes.js
const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentResponseController');

router.get('/comments', commentController.getAllComment);
router.post('/comment', commentController.createComment);
router.delete('/comment/:id', commentController.deleteComment);

module.exports = router;