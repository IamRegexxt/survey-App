// controllers/commentController.js
const Comment = require('../models/commentsResponseModel');

module.exports = {
  getAllComment: async (req, res) => {
    try {
      const comment = await Comment.getAll();
      res.json(comment);
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
