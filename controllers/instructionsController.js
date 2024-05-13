// controllers/instructionsController.js
const Instructions = require('../models/instructionsModel');

module.exports = {
  getByQuestionId: async (req, res) => {
    try {
      const { questionId } = req.params;
      const instruction = await Instructions.getByQuestionId(questionId);
      if (instruction) {
        res.json(instruction);
      } else {
        res.status(404).json({ error: 'Instruction not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  createInstruction: async (req, res) => {
    try {
      const instructionId = await Instructions.create(req.body);
      res.status(201).json({ id: instructionId });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};
