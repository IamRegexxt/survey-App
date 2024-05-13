// controllers/choiceController.js
const Choice = require('../models/choicesModel');

module.exports = {
  getAllChoicesByQuestionId: async (req, res) => {
    try {
      const { questionId } = req.params;
      const choices = await Choice.getAllByQuestionId(questionId);
      res.json(choices);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  createChoice: async (req, res) => {
    try {
      const { questionId } = req.params;
      const choiceId = await Choice.create(questionId, req.body.optionn);
      res.status(201).json({ id: choiceId });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  updateChoice: async (req, res) => {
    try {
      const { id } = req.params;
      const updated = await Choice.update(id, req.body.optionn);
      if (updated) {
        res.json({ message: 'Choice updated successfully' });
      } else {
        res.status(404).json({ error: 'Choice not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  deleteChoice: async (req, res) => {
    try {
      const { id } = req.params;
      const deleted = await Choice.delete(id);
      if (deleted) {
        res.json({ message: 'Choice deleted successfully' });
      } else {
        res.status(404).json({ error: 'Choice not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};
