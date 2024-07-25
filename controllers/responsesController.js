// controllers/responsesController.js
const Responses = require('../models/responsesModel');

module.exports = {
  getAllReponses: async (req, res) => {
    try {
      const responses = await Responses.getAll();
      res.json(responses);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  
  getByQuestionId: async (req, res) => {
    try {
      const { questionId } = req.params;
      const responses = await Responses.getByQuestionId(questionId);
      res.json(responses);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  createResponse: async (req, res) => {
    try {
      const responseId = await Responses.create(req.body);
      res.status(201).json({ id: responseId });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};
