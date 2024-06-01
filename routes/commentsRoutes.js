// routes/commentRoutes.js
const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');

router.get('/comment/:responseId', commentController.getAllCommentsByResponseId);
router.post('/comment', commentController.createComment);
router.put('/comment/:id', commentController.updateComment);
router.delete('/comment/:id', commentController.deleteComment);

module.exports = router;