// controllers/commentController.js
const Comment = require('../models/commentModel');

module.exports = {
  getAllCommentsByQuestionId: async (req, res) => {
    try {
      const { questionId } = req.params;
      const comments = await Comment.getAllByQuestionId(questionId);
      res.json(comments);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  createComment: async (req, res) => {
    try {
      const commentId = await Comment.create(req.body);
      res.status(201).json({ id: commentId });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  updateComment: async (req, res) => {
    try {
      const { id } = req.params;
      const updated = await Comment.update(id, req.body);
      if (updated) {
        res.json({ message: 'Comment updated successfully' });
      } else {
        res.status(404).json({ error: 'Comment not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  deleteComment: async (req, res) => {
    try {
      const { id } = req.params;
      const deleted = await Comment.delete(id);
      if (deleted) {
        res.json({ message: 'Comment deleted successfully' });
      } else {
        res.status(404).json({ error: 'Comment not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};
