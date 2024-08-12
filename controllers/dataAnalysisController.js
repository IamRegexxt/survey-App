// controllers/categoryController.js
const Analysis = require('../models/dataAnalysisModel');

module.exports = {
    getAllAnalysis: async (req, res) => {
    try {
      const analysis = await Analysis.getAll();
      res.json(analysis);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  createAnalysis: async (req, res) => {
    try {
      const analysisId = await Analysis.create(req.body.title);
      res.status(201).json({ id: analysisId });
      
    } catch (error) {
      console.log(error)
      res.status(500).json({ error: error.message });
    }
  },

  updateAnalysis: async (req, res) => {
    try {
      const { id } = req.params;
      const updated = await Analysis.update(id, req.body.title);
      if (updated) {
        res.json({ message: 'Analysis updated successfully' });
      } else {
        res.status(404).json({ error: 'Analysis not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  deleteAnalysis: async (req, res) => {
    try {
      const { id } = req.params;
      const deleted = await Analysis.delete(id);
      if (deleted) {
        res.json({ message: 'Analysis deleted successfully' });
      } else {
        res.status(404).json({ error: 'Analysis not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};
