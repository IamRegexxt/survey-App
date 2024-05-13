// controllers/questionController.js
const Question = require('../models/question');

module.exports = {
  getAllQuestions: async (req, res) => {
    try {
      const questions = await Question.getAll();
      res.json(questions);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getQuestionById: async (req, res) => {
    try {
      const { id } = req.params;
      const question = await Question.getById(id);
      if (question) {
        res.json(question);
      } else {
        res.status(404).json({ error: 'Question not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  createQuestion: async (req, res) => {
    try {
      const questionId = await Question.create(req.body);
      res.status(201).json({ id: questionId });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  updateQuestion: async (req, res) => {
    try {
      const { id } = req.params;
      const updated = await Question.update(id, req.body);
      if (updated) {
        res.json({ message: 'Question updated successfully' });
      } else {
        res.status(404).json({ error: 'Question not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  deleteQuestion: async (req, res) => {
    try {
      const { id } = req.params;
      const deleted = await Question.delete(id);
      if (deleted) {
        res.json({ message: 'Question deleted successfully' });
      } else {
        res.status(404).json({ error: 'Question not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};