// controllers/commentController.js
const Choice = require('../models/choicesResponseModel');

module.exports = {
  getAllChoices: async (req, res) => {
    try {
      const choice = await Choice.getAll();
      res.json(choice);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  createChoices: async (req, res) => {
    try {
      const choiceId = await Choice.create(req.body);
      res.status(201).json({ id: choiceId });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  deleteChoices: async (req, res) => {
    try {
      const { id } = req.params;
      const deleted = await Choice.delete(id);
      if (deleted) {
        res.json({ message: 'Response deleted successfully' });
      } else {
        res.status(404).json({ error: 'Response not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};
